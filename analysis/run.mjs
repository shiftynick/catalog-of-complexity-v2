#!/usr/bin/env node
// ============================================================
// Catalog of Complexity — Cross-System Analysis Pipeline
//
// Reads the 10 verified class entries under ../data/classes/*.yaml,
// extracts the rubric/hybrid attribute scores plus the encoded
// alphabet_closure column, and computes:
//   - raw score matrix + column-wise z-scores
//   - PCA (via ml-pca)
//   - Euclidean distance matrix
//   - average-linkage hierarchical clustering (hand-rolled)
//   - Pearson correlation matrix between columns
//
// Output: ./output/analysis.json (contract defined in the task spec)
// Also prints a console report.
// ============================================================

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import { PCA } from "ml-pca";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = process.env.COC_DATA_DIR
  ? path.resolve(process.env.COC_DATA_DIR)
  : path.resolve(__dirname, "..", "data", "classes");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "analysis.json");

// ------------------------------------------------------------
// Column definitions
// ------------------------------------------------------------

// The 15 expected rubric/hybrid score columns (attribute id under `attributes:`)
const SCORE_COLUMNS = [
  "modularity",
  "decentralization",
  "nonlinearity",
  "feedback",
  "openness_dissipation",
  "chaos_sensitivity",
  "criticality",
  "tipping_transitions",
  "memory_hysteresis",
  "information_processing",
  "adaptive_capacity",
  "emergence",
  "self_organization",
  "robustness_resilience",
  "cascade_susceptibility",
];

const ALLOWED_TYPES = new Set(["rubric", "hybrid"]);

const ALPHABET_CLOSURE_MAP = { closed: 0, constrained: 1, open: 2 };
const ALPHABET_CLOSURE_COLUMN = "alphabet_closure_encoded";

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------

function fail(message) {
  console.error("\n[FATAL] " + message + "\n");
  process.exit(1);
}

function loadEntries() {
  if (!fs.existsSync(DATA_DIR)) {
    fail(`Data directory not found: ${DATA_DIR}`);
  }
  const files = fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.endsWith(".yaml") || f.endsWith(".yml"))
    .sort();

  if (files.length === 0) {
    fail(`No YAML files found in ${DATA_DIR}`);
  }

  const entries = [];
  for (const file of files) {
    const full = path.join(DATA_DIR, file);
    let doc;
    try {
      doc = yaml.load(fs.readFileSync(full, "utf8"));
    } catch (err) {
      fail(`Failed to parse YAML file ${file}: ${err.message}`);
    }
    if (!doc || typeof doc !== "object") {
      fail(`Entry file ${file} did not parse to an object`);
    }
    entries.push({ file, doc });
  }
  return entries;
}

// Extract the numeric score for a rubric/hybrid attribute, or throw
// a descriptive error naming entry + column if missing/invalid.
function extractScore(entryId, attrName, attrs) {
  const attr = attrs[attrName];
  if (attr === undefined || attr === null) {
    fail(
      `Entry "${entryId}" is missing required attribute "${attrName}" under attributes:`
    );
  }
  if (typeof attr !== "object") {
    fail(
      `Entry "${entryId}" attribute "${attrName}" is not a structured object (got ${typeof attr})`
    );
  }
  if (!ALLOWED_TYPES.has(attr.type)) {
    fail(
      `Entry "${entryId}" attribute "${attrName}" has type "${attr.type}" — expected "rubric" or "hybrid"`
    );
  }

  // Primary location: attribute.score
  let score = attr.score;

  // Handle a legitimate structural variation: some entries might nest
  // the score differently (e.g. under a sub-object). We check a couple
  // of plausible alternate locations before giving up, and NOTE it in
  // the console report (handled by caller via the `structuralNotes` array
  // pushed onto globalNotes below).
  let usedAltPath = null;
  if (score === undefined && attr.value !== undefined && typeof attr.value === "number") {
    score = attr.value;
    usedAltPath = "value";
  }

  if (score === undefined || score === null) {
    fail(
      `Entry "${entryId}" attribute "${attrName}" (type: ${attr.type}) has no "score" field`
    );
  }

  if (typeof score !== "number" || Number.isNaN(score)) {
    fail(
      `Entry "${entryId}" attribute "${attrName}" has a non-numeric score: ${JSON.stringify(
        score
      )} (evidence_status: ${attr.evidence_status ?? "n/a"}). ` +
        `This is a genuine data gap in the source YAML, not a parsing issue — ` +
        `per the pipeline's no-silent-imputation rule, this must be fixed at the ` +
        `data level (or the entry excluded) before analysis can proceed.`
    );
  }

  if (score < 0 || score > 4) {
    fail(
      `Entry "${entryId}" attribute "${attrName}" has an out-of-range score: ${score} (expected 0-4)`
    );
  }

  return { score, usedAltPath };
}

function extractAlphabetClosure(entryId, attrs) {
  const io = attrs.interaction_ontology;
  if (!io || typeof io !== "object") {
    fail(`Entry "${entryId}" is missing attributes.interaction_ontology`);
  }
  const closure = io.alphabet_closure;
  if (closure === undefined || closure === null) {
    fail(
      `Entry "${entryId}" attributes.interaction_ontology is missing "alphabet_closure"`
    );
  }
  // Value may have trailing inline-comment artifacts stripped by YAML already;
  // normalize just in case (e.g. stray whitespace).
  const normalized = String(closure).trim().toLowerCase();
  if (!(normalized in ALPHABET_CLOSURE_MAP)) {
    fail(
      `Entry "${entryId}" has an unrecognized alphabet_closure value: "${closure}" ` +
        `(expected one of: closed, constrained, open)`
    );
  }
  return ALPHABET_CLOSURE_MAP[normalized];
}

// ------------------------------------------------------------
// Numeric helpers (hand-rolled; n=10 makes this trivial)
// ------------------------------------------------------------

function mean(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function populationStd(arr) {
  const m = mean(arr);
  const variance = mean(arr.map((x) => (x - m) ** 2));
  return Math.sqrt(variance);
}

function pearson(x, y) {
  const mx = mean(x);
  const my = mean(y);
  let num = 0;
  let dx2 = 0;
  let dy2 = 0;
  for (let i = 0; i < x.length; i++) {
    const dx = x[i] - mx;
    const dy = y[i] - my;
    num += dx * dy;
    dx2 += dx * dx;
    dy2 += dy * dy;
  }
  const denom = Math.sqrt(dx2 * dy2);
  if (denom === 0) return 0;
  return num / denom;
}

function euclidean(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += (a[i] - b[i]) ** 2;
  }
  return Math.sqrt(sum);
}

// Average-linkage (UPGMA) hierarchical clustering.
// Returns merge sequence [{a, b, height}] where a/b are original system
// ids (strings) for leaf nodes, or synthetic cluster labels ("C<idx>")
// for previously-merged clusters, plus the underlying member-index sets
// used to compute average linkage distances.
function averageLinkageClustering(systemIds, distanceMatrix) {
  const n = systemIds.length;
  // Each active cluster: { label, members: [original indices] }
  let clusters = systemIds.map((id, i) => ({ label: id, members: [i] }));
  const merges = [];
  let clusterCounter = 0;

  while (clusters.length > 1) {
    let best = null;
    for (let i = 0; i < clusters.length; i++) {
      for (let j = i + 1; j < clusters.length; j++) {
        // average linkage: mean pairwise distance across members
        let total = 0;
        let count = 0;
        for (const mi of clusters[i].members) {
          for (const mj of clusters[j].members) {
            total += distanceMatrix[mi][mj];
            count++;
          }
        }
        const avgDist = total / count;
        if (best === null || avgDist < best.avgDist) {
          best = { i, j, avgDist };
        }
      }
    }

    const clusterA = clusters[best.i];
    const clusterB = clusters[best.j];
    const newLabel = `C${clusterCounter++}`;
    merges.push({ a: clusterA.label, b: clusterB.label, height: best.avgDist });

    const merged = {
      label: newLabel,
      members: [...clusterA.members, ...clusterB.members],
    };

    // remove i and j (j > i), then push merged
    clusters = clusters.filter((_, idx) => idx !== best.i && idx !== best.j);
    clusters.push(merged);
  }

  return merges;
}

// ------------------------------------------------------------
// Main
// ------------------------------------------------------------

function main() {
  console.log("Catalog of Complexity — Analysis Pipeline");
  console.log("==========================================\n");

  const rawEntries = loadEntries();
  const structuralNotes = [];

  const parsed = rawEntries.map(({ file, doc }) => {
    const id = doc.id;
    if (!id) fail(`Entry file ${file} has no top-level "id" field`);
    if (!doc.attributes || typeof doc.attributes !== "object") {
      fail(`Entry "${id}" has no attributes: block`);
    }
    return {
      id,
      file,
      name: doc.name ?? id,
      category: doc.category ?? "unknown",
      attributes: doc.attributes,
    };
  });

  // Stable sorted order by id
  parsed.sort((a, b) => a.id.localeCompare(b.id));

  const systems = parsed.map((e) => e.id);
  const categories = {};
  const names = {};
  for (const e of parsed) {
    categories[e.id] = e.category;
    names[e.id] = e.name;
  }

  // Build columns: 15 score columns + alphabet_closure_encoded
  const columns = [...SCORE_COLUMNS, ALPHABET_CLOSURE_COLUMN];

  // Build raw matrix (rows = systems, in `systems` order)
  const matrix = [];
  for (const entry of parsed) {
    const row = [];
    for (const col of SCORE_COLUMNS) {
      const { score, usedAltPath } = extractScore(entry.id, col, entry.attributes);
      if (usedAltPath) {
        structuralNotes.push(
          `Entry "${entry.id}" column "${col}": score read from attribute.${usedAltPath} (non-standard nesting)`
        );
      }
      row.push(score);
    }
    const closureEncoded = extractAlphabetClosure(entry.id, entry.attributes);
    row.push(closureEncoded);
    matrix.push(row);
  }

  console.log(`Loaded ${systems.length} verified entries: ${systems.join(", ")}\n`);
  if (structuralNotes.length > 0) {
    console.log("Structural notes:");
    for (const note of structuralNotes) console.log("  - " + note);
    console.log("");
  } else {
    console.log("No structural variations encountered — all columns read from the standard `score:` field.\n");
  }

  // ------------------------------------------------------------
  // Column-wise z-scores (population std)
  // ------------------------------------------------------------
  const nCols = columns.length;
  const nRows = systems.length;
  const colMeans = [];
  const colStds = [];
  const zeroVarianceColumns = [];

  for (let c = 0; c < nCols; c++) {
    const colVals = matrix.map((row) => row[c]);
    const m = mean(colVals);
    const s = populationStd(colVals);
    colMeans.push(m);
    colStds.push(s);
    if (s === 0) zeroVarianceColumns.push(columns[c]);
  }

  if (zeroVarianceColumns.length > 0) {
    console.log(
      `NOTE: zero-variance column(s) excluded from PCA input (kept in raw matrix): ${zeroVarianceColumns.join(", ")}\n`
    );
  }

  const zmatrix = matrix.map((row) =>
    row.map((val, c) => (colStds[c] === 0 ? 0 : (val - colMeans[c]) / colStds[c]))
  );

  // Columns actually fed into PCA (excludes zero-variance columns)
  const pcaColumnIndices = columns
    .map((_, idx) => idx)
    .filter((idx) => colStds[idx] !== 0);
  const pcaColumns = pcaColumnIndices.map((idx) => columns[idx]);
  const zmatrixForPCA = zmatrix.map((row) => pcaColumnIndices.map((idx) => row[idx]));

  // ------------------------------------------------------------
  // PCA
  // ------------------------------------------------------------
  const pca = new PCA(zmatrixForPCA, { center: false, scale: false }); // already z-scored
  const explainedVarianceFull = pca.getExplainedVariance(); // fraction per PC
  const nPCs = Math.min(3, explainedVarianceFull.length);
  const explainedVariance = explainedVarianceFull.slice(0, nPCs);

  const predicted = pca.predict(zmatrixForPCA); // Matrix, rows = systems, cols = PCs
  const predictedArray = predicted.to2DArray();

  const coords = {};
  for (let r = 0; r < nRows; r++) {
    coords[systems[r]] = predictedArray[r].slice(0, nPCs);
  }

  // Eigenvectors: rows = original variables, cols = PCs (this is what we want
  // for "per-column loadings" — ml-pca's getLoadings() returns the transpose,
  // rows = components, so we use getEigenvectors() directly here instead).
  const eigenvectorsMatrix = pca.getEigenvectors().to2DArray(); // pcaColumns.length x nComponents
  const loadings = {};
  for (const col of columns) {
    loadings[col] = new Array(nPCs).fill(0); // default zero vector for excluded columns
  }
  pcaColumns.forEach((col, i) => {
    loadings[col] = eigenvectorsMatrix[i].slice(0, nPCs);
  });

  // ------------------------------------------------------------
  // Euclidean distance matrix (on z-scores, full column set incl. zero-var
  // which contribute 0 uniformly, so harmless either way)
  // ------------------------------------------------------------
  const distance = [];
  for (let i = 0; i < nRows; i++) {
    const row = [];
    for (let j = 0; j < nRows; j++) {
      row.push(euclidean(zmatrix[i], zmatrix[j]));
    }
    distance.push(row);
  }

  // ------------------------------------------------------------
  // Average-linkage hierarchical clustering
  // ------------------------------------------------------------
  const clustering = averageLinkageClustering(systems, distance);

  // ------------------------------------------------------------
  // Pearson correlation matrix between columns (raw scores)
  // ------------------------------------------------------------
  const corrColumns = columns;
  const correlationMatrix = [];
  for (let i = 0; i < nCols; i++) {
    const row = [];
    const colI = matrix.map((r) => r[i]);
    for (let j = 0; j < nCols; j++) {
      const colJ = matrix.map((r) => r[j]);
      row.push(pearson(colI, colJ));
    }
    correlationMatrix.push(row);
  }

  // ------------------------------------------------------------
  // Assemble output JSON
  // ------------------------------------------------------------
  const output = {
    systems,
    categories,
    names,
    columns,
    matrix,
    zmatrix,
    pca: {
      explainedVariance,
      coords,
      loadings,
    },
    distance,
    clustering,
    correlations: {
      columns: corrColumns,
      matrix: correlationMatrix,
    },
  };

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), "utf8");

  // ------------------------------------------------------------
  // Console report
  // ------------------------------------------------------------
  printConsoleReport({
    systems,
    columns,
    matrix,
    explainedVariance,
    loadings,
    correlationMatrix,
    corrColumns,
    clustering,
    names,
  });

  console.log(`\nWrote ${OUTPUT_FILE}`);
}

function printConsoleReport({
  systems,
  columns,
  matrix,
  explainedVariance,
  loadings,
  correlationMatrix,
  corrColumns,
  clustering,
  names,
}) {
  console.log("--- Score Matrix (raw) ---\n");
  const colWidth = 6;
  const idWidth = Math.max(...systems.map((s) => s.length), 22) + 2;
  const header =
    "System".padEnd(idWidth) +
    columns.map((c) => c.slice(0, colWidth).padStart(colWidth)).join(" ");
  console.log(header);
  matrix.forEach((row, i) => {
    const line =
      systems[i].padEnd(idWidth) +
      row.map((v) => String(v).padStart(colWidth)).join(" ");
    console.log(line);
  });

  console.log("\n--- Column abbreviation key ---");
  columns.forEach((c) => {
    console.log(`  ${c.slice(0, colWidth).padEnd(colWidth)} = ${c}`);
  });

  console.log("\n--- PCA: Explained Variance ---");
  explainedVariance.forEach((v, i) => {
    console.log(`  PC${i + 1}: ${(v * 100).toFixed(1)}%`);
  });

  for (const pcIndex of [0, 1]) {
    if (pcIndex >= explainedVariance.length) continue;
    const loadingPairs = columns.map((col) => ({
      col,
      loading: loadings[col][pcIndex] ?? 0,
    }));
    loadingPairs.sort((a, b) => Math.abs(b.loading) - Math.abs(a.loading));
    console.log(`\n--- Top 5 |loading| columns for PC${pcIndex + 1} ---`);
    loadingPairs.slice(0, 5).forEach((p, rank) => {
      console.log(
        `  ${rank + 1}. ${p.col.padEnd(24)} loading=${p.loading.toFixed(3)}`
      );
    });
  }

  console.log("\n--- Strongest column correlations (excluding self) ---");
  const pairs = [];
  for (let i = 0; i < corrColumns.length; i++) {
    for (let j = i + 1; j < corrColumns.length; j++) {
      pairs.push({
        a: corrColumns[i],
        b: corrColumns[j],
        r: correlationMatrix[i][j],
      });
    }
  }
  pairs.sort((x, y) => Math.abs(y.r) - Math.abs(x.r));
  pairs.slice(0, 5).forEach((p, rank) => {
    console.log(`  ${rank + 1}. ${p.a} <-> ${p.b}: r=${p.r.toFixed(3)}`);
  });

  console.log("\n--- Hierarchical Clustering (average linkage) merge order ---");
  const describeLabel = (label) => {
    if (names[label]) return `${label} (${names[label]})`;
    return label;
  };
  clustering.forEach((m, idx) => {
    console.log(
      `  Step ${idx + 1}: merge [${describeLabel(m.a)}] with [${describeLabel(
        m.b
      )}] at height ${m.height.toFixed(3)} -> cluster C${idx}`
    );
  });
}

main();
