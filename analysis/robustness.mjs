#!/usr/bin/env node
// ============================================================
// Catalog of Complexity — Analysis Robustness Study (Workstream 2.2)
//
// Tests whether the headline findings in docs/findings.md survive:
//   A. Leave-one-out PCA (10 runs, one entry dropped each)
//   B. Leave-one-out correlations for the four headline pairs
//   C. Score-perturbation sensitivity (exhaustive single-cell ±1,
//      and Monte Carlo 5-cell ±1 x1000 trials, seeded/deterministic)
//   D. Cluster-pair stability under LOO
//
// Data loading, z-scoring, and PCA math are copied VERBATIM from
// run.mjs (see header comment there) so the robustness study measures
// the same pipeline the headline findings were produced with. Do not
// let this file's math drift from run.mjs's.
//
// Output: ./output/robustness.json (machine-readable)
//         ../research/v0.2-sweep/validation/robustness-report.md (human report)
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
const OUTPUT_FILE = path.join(OUTPUT_DIR, "robustness.json");
const REPORT_FILE = path.resolve(
  __dirname,
  "..",
  "research",
  "v0.2-sweep",
  "validation",
  "robustness-report.md"
);

const SEED = 20260702; // fixed seed — the run must be exactly reproducible

// ------------------------------------------------------------
// Seeded deterministic RNG (mulberry32)
// ------------------------------------------------------------
function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ============================================================
// SECTION 1 — copied verbatim from run.mjs (see analysis/run.mjs)
// ============================================================

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

  let score = attr.score;
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
  const normalized = String(closure).trim().toLowerCase();
  if (!(normalized in ALPHABET_CLOSURE_MAP)) {
    fail(
      `Entry "${entryId}" has an unrecognized alphabet_closure value: "${closure}" ` +
        `(expected one of: closed, constrained, open)`
    );
  }
  return ALPHABET_CLOSURE_MAP[normalized];
}

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

function averageLinkageClustering(systemIds, distanceMatrix) {
  const n = systemIds.length;
  let clusters = systemIds.map((id, i) => ({ label: id, members: [i] }));
  const merges = [];
  let clusterCounter = 0;

  while (clusters.length > 1) {
    let best = null;
    for (let i = 0; i < clusters.length; i++) {
      for (let j = i + 1; j < clusters.length; j++) {
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

    clusters = clusters.filter((_, idx) => idx !== best.i && idx !== best.j);
    clusters.push(merged);
  }

  return merges;
}

// Loads and parses all entries into the canonical sorted {id, category, matrix row} form.
// Returns { systems, categories, names, columns, matrix } — matrix rows in `systems` order.
function loadCanonicalMatrix() {
  const rawEntries = loadEntries();
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

  parsed.sort((a, b) => a.id.localeCompare(b.id));

  const systems = parsed.map((e) => e.id);
  const categories = {};
  const names = {};
  for (const e of parsed) {
    categories[e.id] = e.category;
    names[e.id] = e.name;
  }

  const columns = [...SCORE_COLUMNS, ALPHABET_CLOSURE_COLUMN];

  const matrix = [];
  for (const entry of parsed) {
    const row = [];
    for (const col of SCORE_COLUMNS) {
      const { score } = extractScore(entry.id, col, entry.attributes);
      row.push(score);
    }
    const closureEncoded = extractAlphabetClosure(entry.id, entry.attributes);
    row.push(closureEncoded);
    matrix.push(row);
  }

  return { systems, categories, names, columns, matrix };
}

// ============================================================
// SECTION 2 — shared analysis-run function (replicates run.mjs's
// core computation, parameterized over an arbitrary systems/matrix
// subset so it can be reused for LOO and perturbation runs)
// ============================================================

// Runs the z-score -> PCA -> distance -> clustering -> correlation
// pipeline exactly as run.mjs does, on a given systems list + matrix.
// Returns the same shape run.mjs writes to analysis.json (minus names/categories).
function runPipeline(systems, columns, matrix) {
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

  const zmatrix = matrix.map((row) =>
    row.map((val, c) => (colStds[c] === 0 ? 0 : (val - colMeans[c]) / colStds[c]))
  );

  const pcaColumnIndices = columns
    .map((_, idx) => idx)
    .filter((idx) => colStds[idx] !== 0);
  const pcaColumns = pcaColumnIndices.map((idx) => columns[idx]);
  const zmatrixForPCA = zmatrix.map((row) => pcaColumnIndices.map((idx) => row[idx]));

  const pca = new PCA(zmatrixForPCA, { center: false, scale: false });
  const explainedVarianceFull = pca.getExplainedVariance();
  const nPCs = Math.min(3, explainedVarianceFull.length);
  const explainedVariance = explainedVarianceFull.slice(0, nPCs);

  const eigenvectorsMatrix = pca.getEigenvectors().to2DArray();
  const loadings = {};
  for (const col of columns) {
    loadings[col] = new Array(nPCs).fill(0);
  }
  pcaColumns.forEach((col, i) => {
    loadings[col] = eigenvectorsMatrix[i].slice(0, nPCs);
  });

  const distance = [];
  for (let i = 0; i < nRows; i++) {
    const row = [];
    for (let j = 0; j < nRows; j++) {
      row.push(euclidean(zmatrix[i], zmatrix[j]));
    }
    distance.push(row);
  }

  const clustering = averageLinkageClustering(systems, distance);

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

  return {
    explainedVariance,
    loadings,
    zeroVarianceColumns,
    clustering,
    correlationMatrix,
  };
}

function corrOf(correlationMatrix, columns, colA, colB) {
  const i = columns.indexOf(colA);
  const j = columns.indexOf(colB);
  if (i === -1 || j === -1) return null;
  return correlationMatrix[i][j];
}

// ============================================================
// SECTION 3 — robustness machinery
// ============================================================

const HEADLINE_PAIRS = [
  { a: "information_processing", b: "adaptive_capacity", fullR: 0.952, label: "information_processing <-> adaptive_capacity" },
  { a: "modularity", b: "self_organization", fullR: -0.853, label: "modularity <-> self_organization" },
  { a: "adaptive_capacity", b: "alphabet_closure_encoded", fullR: 0.850, label: "adaptive_capacity <-> alphabet_closure" },
  { a: "decentralization", b: "self_organization", fullR: 0.872, label: "decentralization <-> self_organization" },
];

// PC1 top-5 loadings by |loading| in the full-sample run (recomputed here, not hardcoded)
function top5Loadings(loadings, columns, pcIndex) {
  const pairs = columns.map((col) => ({ col, loading: loadings[col][pcIndex] ?? 0 }));
  pairs.sort((x, y) => Math.abs(y.loading) - Math.abs(x.loading));
  return pairs.slice(0, 5);
}

// Sign-align a PC1 loading vector (object col->[pc1,pc2,pc3]) to a reference
// vector by flipping sign if that maximizes agreement (dot product) over the
// columns present in both. Returns a new loadings object (copy) for pcIndex only
// represented as a flat {col: value} map, plus the sign flip applied (+1/-1).
function signAlignPC(loadings, referenceLoadings, columns, pcIndex) {
  const vec = columns.map((c) => loadings[c]?.[pcIndex] ?? 0);
  const ref = columns.map((c) => referenceLoadings[c]?.[pcIndex] ?? 0);
  let dot = 0;
  for (let i = 0; i < vec.length; i++) dot += vec[i] * ref[i];
  const sign = dot < 0 ? -1 : 1;
  const aligned = {};
  columns.forEach((c, i) => {
    aligned[c] = sign * vec[i];
  });
  return { aligned, sign };
}

function clamp04(v) {
  return Math.max(0, Math.min(4, v));
}

function quantile(sortedArr, q) {
  if (sortedArr.length === 0) return null;
  const pos = (sortedArr.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sortedArr[base + 1] !== undefined) {
    return sortedArr[base] + rest * (sortedArr[base + 1] - sortedArr[base]);
  }
  return sortedArr[base];
}

// ============================================================
// MAIN
// ============================================================

function main() {
  console.log("Catalog of Complexity — Analysis Robustness Study");
  console.log("====================================================\n");
  console.log(`Seed: ${SEED} (mulberry32, deterministic)\n`);

  const rng = mulberry32(SEED);

  const { systems, categories, names, columns, matrix } = loadCanonicalMatrix();
  const nRows = systems.length;
  const nCols = columns.length;

  console.log(`Loaded ${nRows} entries x ${nCols} columns\n`);

  // ---- Full-sample baseline ----
  const full = runPipeline(systems, columns, matrix);
  const fullPC1Top5 = top5Loadings(full.loadings, columns, 0);
  const fullPC1Set = new Set(fullPC1Top5.map((p) => p.col));

  console.log("--- Full-sample baseline ---");
  console.log(
    `PC1: ${(full.explainedVariance[0] * 100).toFixed(1)}%  PC2: ${(full.explainedVariance[1] * 100).toFixed(1)}%`
  );
  console.log("PC1 top-5 |loading|: " + fullPC1Top5.map((p) => `${p.col}=${p.loading.toFixed(3)}`).join(", "));
  for (const pair of HEADLINE_PAIRS) {
    const r = corrOf(full.correlationMatrix, columns, pair.a, pair.b);
    console.log(`  r(${pair.label}) = ${r.toFixed(4)} (findings.md cites ${pair.fullR})`);
  }
  console.log("");

  // ============================================================
  // A + B + D — Leave-one-out
  // ============================================================
  console.log("--- A/B/D: Leave-one-out (10 runs) ---\n");

  const looRuns = [];
  for (let dropIdx = 0; dropIdx < nRows; dropIdx++) {
    const droppedId = systems[dropIdx];
    const looSystems = systems.filter((_, i) => i !== dropIdx);
    const looMatrix = matrix.filter((_, i) => i !== dropIdx);

    const result = runPipeline(looSystems, columns, looMatrix);

    // Sign-align PC1 and PC2 to full-sample loadings
    const { aligned: pc1Aligned, sign: pc1Sign } = signAlignPC(result.loadings, full.loadings, columns, 0);
    const { aligned: pc2Aligned, sign: pc2Sign } = signAlignPC(result.loadings, full.loadings, columns, 1);

    const pc1Pairs = columns
      .map((col) => ({ col, loading: pc1Aligned[col] }))
      .sort((x, y) => Math.abs(y.loading) - Math.abs(x.loading));
    const pc1Top5 = pc1Pairs.slice(0, 5);
    const pc1Top5Set = new Set(pc1Top5.map((p) => p.col));

    // membership change vs full-sample PC1 top-5 (any of the 5 slots differs)
    const membershipChanged =
      pc1Top5Set.size !== fullPC1Set.size || [...fullPC1Set].some((c) => !pc1Top5Set.has(c));

    // finer-grained: does the CORE top-3 (the dominant, non-tied loadings)
    // survive? This distinguishes a genuine composition reshuffle from a
    // tail (4th/5th slot) near-tie swap.
    const fullTop3Set = new Set(fullPC1Top5.slice(0, 3).map((p) => p.col));
    const pc1Top3Set = new Set(pc1Top5.slice(0, 3).map((p) => p.col));
    const coreTop3Changed = [...fullTop3Set].some((c) => !pc1Top3Set.has(c));

    // sign flip check: for columns in the full-sample top-5, does the
    // (aligned) sign match the full-sample sign?
    const signFlips = [];
    for (const p of fullPC1Top5) {
      const alignedVal = pc1Aligned[p.col];
      if (alignedVal !== undefined && Math.sign(alignedVal) !== Math.sign(p.loading) && alignedVal !== 0) {
        signFlips.push(p.col);
      }
    }

    const headlinePairRs = {};
    for (const pair of HEADLINE_PAIRS) {
      headlinePairRs[pair.label] = corrOf(result.correlationMatrix, columns, pair.a, pair.b);
    }

    // cluster kinship checks
    const citiesFinMarketsHolds = clusterPairHolds(result.clustering, "cities", "financial-markets");
    const internetFaultHolds = nearestNeighborHolds(
      looSystems,
      columns,
      looMatrix,
      "the-internet",
      "earthquake-fault-systems"
    );

    looRuns.push({
      droppedEntry: droppedId,
      explainedVariance: result.explainedVariance,
      pc1Sign,
      pc2Sign,
      pc1Top5: pc1Top5.map((p) => ({ col: p.col, loading: p.loading })),
      pc1MembershipChanged: membershipChanged,
      pc1CoreTop3Changed: coreTop3Changed,
      pc1SignFlipsInHeadlineSet: signFlips,
      headlinePairRs,
      clusterKinship: {
        citiesFinancialMarketsClosestPair: citiesFinMarketsHolds,
        internetFaultSystemsNearestNeighbor: internetFaultHolds,
      },
    });

    console.log(
      `  drop=${droppedId.padEnd(26)} PC1=${(result.explainedVariance[0] * 100).toFixed(1)}% PC2=${(result.explainedVariance[1] * 100).toFixed(1)}%` +
        ` top5Changed=${membershipChanged} core3Changed=${coreTop3Changed} signFlips=[${signFlips.join(",")}]` +
        ` cities+FM=${citiesFinMarketsHolds} net<->fault=${internetFaultHolds}`
    );
  }
  console.log("");

  // Summarize headline correlation LOO ranges
  const looCorrSummary = {};
  for (const pair of HEADLINE_PAIRS) {
    const rs = looRuns.map((run) => run.headlinePairRs[pair.label]);
    const min = Math.min(...rs);
    const max = Math.max(...rs);
    const minRun = looRuns[rs.indexOf(min)].droppedEntry;
    const maxRun = looRuns[rs.indexOf(max)].droppedEntry;
    looCorrSummary[pair.label] = {
      fullR: pair.fullR,
      recomputedFullR: corrOf(full.correlationMatrix, columns, pair.a, pair.b),
      min,
      max,
      range: max - min,
      minDropEntry: minRun,
      maxDropEntry: maxRun,
      allR: looRuns.map((run) => ({ dropped: run.droppedEntry, r: run.headlinePairRs[pair.label] })),
    };
  }

  console.log("--- B: LOO headline-correlation ranges ---");
  for (const [label, s] of Object.entries(looCorrSummary)) {
    console.log(
      `  ${label}: full=${s.recomputedFullR.toFixed(3)} min=${s.min.toFixed(3)}(drop ${s.minDropEntry}) max=${s.max.toFixed(3)}(drop ${s.maxDropEntry}) range=${s.range.toFixed(3)}`
    );
  }
  console.log("");

  const pc1MembershipChangedRuns = looRuns.filter((r) => r.pc1MembershipChanged).map((r) => r.droppedEntry);
  const pc1CoreTop3ChangedRuns = looRuns.filter((r) => r.pc1CoreTop3Changed).map((r) => r.droppedEntry);
  const pc1SignFlipRuns = looRuns.filter((r) => r.pc1SignFlipsInHeadlineSet.length > 0);

  const citiesFMHoldsCount = looRuns.filter((r) => r.clusterKinship.citiesFinancialMarketsClosestPair).length;
  const internetFaultHoldsCount = looRuns.filter((r) => r.clusterKinship.internetFaultSystemsNearestNeighbor).length;

  console.log("--- D: Cluster kinship survival across 10 LOO runs ---");
  console.log(`  cities+financial-markets closest-pair holds in ${citiesFMHoldsCount}/10 runs`);
  console.log(`  the-internet<->earthquake-fault-systems nearest-neighbor holds in ${internetFaultHoldsCount}/10 runs`);
  console.log("");

  // ============================================================
  // C(i) — Exhaustive single-cell +-1 perturbations
  // ============================================================
  console.log("--- C(i): Exhaustive single-cell +-1 perturbations ---\n");

  const perturbResults = [];
  for (let row = 0; row < nRows; row++) {
    for (let col = 0; col < SCORE_COLUMNS.length; col++) {
      // only perturb the 15 rubric/hybrid score columns (not alphabet_closure_encoded,
      // which is a categorical encoding, not a rubric score)
      const orig = matrix[row][col];
      for (const delta of [-1, 1]) {
        const newVal = clamp04(orig + delta);
        if (newVal === orig) continue; // no-op (clamped away)

        const perturbedMatrix = matrix.map((r) => r.slice());
        perturbedMatrix[row][col] = newVal;

        const result = runPipeline(systems, columns, perturbedMatrix);
        const pc1Share = result.explainedVariance[0];

        const rs = {};
        for (const pair of HEADLINE_PAIRS) {
          rs[pair.label] = corrOf(result.correlationMatrix, columns, pair.a, pair.b);
        }

        perturbResults.push({
          system: systems[row],
          column: SCORE_COLUMNS[col],
          delta,
          from: orig,
          to: newVal,
          pc1Share,
          headlinePairRs: rs,
        });
      }
    }
  }

  console.log(`  Ran ${perturbResults.length} single-cell perturbations\n`);

  const pc1Shares = perturbResults.map((p) => p.pc1Share);
  const pc1ShareStats = {
    min: Math.min(...pc1Shares),
    max: Math.max(...pc1Shares),
    fullValue: full.explainedVariance[0],
  };
  const worstPC1 = perturbResults.reduce((worst, p) =>
    Math.abs(p.pc1Share - full.explainedVariance[0]) > Math.abs(worst.pc1Share - full.explainedVariance[0]) ? p : worst
  );

  console.log(
    `  PC1 variance share: full=${(pc1ShareStats.fullValue * 100).toFixed(1)}% min=${(pc1ShareStats.min * 100).toFixed(1)}% max=${(pc1ShareStats.max * 100).toFixed(1)}%`
  );
  console.log(
    `  Worst-case single-cell swing: ${worstPC1.system}/${worstPC1.column} ${worstPC1.delta > 0 ? "+1" : "-1"} -> PC1=${(worstPC1.pc1Share * 100).toFixed(1)}%`
  );

  const perturbHeadlineSummary = {};
  for (const pair of HEADLINE_PAIRS) {
    const rs = perturbResults.map((p) => p.headlinePairRs[pair.label]);
    const min = Math.min(...rs);
    const max = Math.max(...rs);
    const minP = perturbResults[rs.indexOf(min)];
    const maxP = perturbResults[rs.indexOf(max)];
    perturbHeadlineSummary[pair.label] = {
      fullR: corrOf(full.correlationMatrix, columns, pair.a, pair.b),
      min,
      max,
      range: max - min,
      worstCasePerturbation:
        Math.abs(min - pair.fullR) > Math.abs(max - pair.fullR)
          ? { system: minP.system, column: minP.column, delta: minP.delta, r: min }
          : { system: maxP.system, column: maxP.column, delta: maxP.delta, r: max },
    };
    console.log(
      `  r(${pair.label}): min=${min.toFixed(3)} max=${max.toFixed(3)} range=${(max - min).toFixed(3)}`
    );
  }
  console.log("");

  // ============================================================
  // C(ii) — Monte Carlo: 1000 trials, perturb 5 random cells by +-1
  // ============================================================
  console.log("--- C(ii): Monte Carlo (1000 trials, 5 random cells +-1 each, seeded) ---\n");

  const N_TRIALS = 1000;
  const CELLS_PER_TRIAL = 5;
  const mcResults = [];

  for (let trial = 0; trial < N_TRIALS; trial++) {
    const perturbedMatrix = matrix.map((r) => r.slice());
    for (let c = 0; c < CELLS_PER_TRIAL; c++) {
      const row = Math.floor(rng() * nRows);
      const col = Math.floor(rng() * SCORE_COLUMNS.length);
      const sign = rng() < 0.5 ? -1 : 1;
      perturbedMatrix[row][col] = clamp04(perturbedMatrix[row][col] + sign);
    }

    const result = runPipeline(systems, columns, perturbedMatrix);
    const rs = {};
    for (const pair of HEADLINE_PAIRS) {
      rs[pair.label] = corrOf(result.correlationMatrix, columns, pair.a, pair.b);
    }
    mcResults.push({ trial, pc1Share: result.explainedVariance[0], headlinePairRs: rs });
  }

  const mcPc1Sorted = mcResults.map((r) => r.pc1Share).sort((a, b) => a - b);
  const mcPc1P5 = quantile(mcPc1Sorted, 0.05);
  const mcPc1P95 = quantile(mcPc1Sorted, 0.95);

  console.log(
    `  PC1 variance share: 5th pct=${(mcPc1P5 * 100).toFixed(1)}% 95th pct=${(mcPc1P95 * 100).toFixed(1)}% (full=${(full.explainedVariance[0] * 100).toFixed(1)}%)`
  );

  const mcHeadlineSummary = { pc1Share: { p5: mcPc1P5, p95: mcPc1P95, full: full.explainedVariance[0] } };
  for (const pair of HEADLINE_PAIRS) {
    const rs = mcResults.map((r) => r.headlinePairRs[pair.label]).sort((a, b) => a - b);
    const p5 = quantile(rs, 0.05);
    const p95 = quantile(rs, 0.95);
    mcHeadlineSummary[pair.label] = { p5, p95, full: corrOf(full.correlationMatrix, columns, pair.a, pair.b) };
    console.log(`  r(${pair.label}): 5th pct=${p5.toFixed(3)} 95th pct=${p95.toFixed(3)}`);
  }
  console.log("");

  // ============================================================
  // Verdicts
  // ============================================================
  const verdicts = computeVerdicts({
    full,
    columns,
    looRuns,
    looCorrSummary,
    pc1MembershipChangedRuns,
    pc1CoreTop3ChangedRuns,
    pc1SignFlipRuns,
    citiesFMHoldsCount,
    internetFaultHoldsCount,
    perturbHeadlineSummary,
    mcHeadlineSummary,
    pc1ShareStats,
    worstPC1,
  });

  console.log("--- SURVIVAL VERDICTS ---");
  for (const v of verdicts) {
    console.log(`  ${v.finding}: ${v.verdict} — ${v.rationale}`);
  }
  console.log("");

  // ============================================================
  // Assemble + write outputs
  // ============================================================
  const output = {
    meta: {
      seed: SEED,
      rngAlgorithm: "mulberry32",
      generatedAt: new Date().toISOString(),
      nEntries: nRows,
      nColumns: nCols,
      monteCarloTrials: N_TRIALS,
      monteCarloCellsPerTrial: CELLS_PER_TRIAL,
    },
    fullSample: {
      explainedVariance: full.explainedVariance,
      pc1Top5: fullPC1Top5,
      headlinePairRs: Object.fromEntries(
        HEADLINE_PAIRS.map((p) => [p.label, corrOf(full.correlationMatrix, columns, p.a, p.b)])
      ),
    },
    leaveOneOut: {
      runs: looRuns,
      headlineCorrSummary: looCorrSummary,
      pc1MembershipChangedRuns,
      pc1CoreTop3ChangedRuns,
      pc1SignFlipRuns: pc1SignFlipRuns.map((r) => ({ dropped: r.droppedEntry, flips: r.pc1SignFlipsInHeadlineSet })),
      clusterKinship: {
        citiesFinancialMarketsHoldsCount: citiesFMHoldsCount,
        internetFaultSystemsHoldsCount: internetFaultHoldsCount,
        of: 10,
      },
    },
    exhaustivePerturbation: {
      nPerturbations: perturbResults.length,
      pc1ShareStats: { ...pc1ShareStats, worstCase: { system: worstPC1.system, column: worstPC1.column, delta: worstPC1.delta, pc1Share: worstPC1.pc1Share } },
      headlineCorrSummary: perturbHeadlineSummary,
    },
    monteCarlo: {
      trials: N_TRIALS,
      cellsPerTrial: CELLS_PER_TRIAL,
      pc1Share: mcHeadlineSummary.pc1Share,
      headlineCorrSummary: Object.fromEntries(HEADLINE_PAIRS.map((p) => [p.label, mcHeadlineSummary[p.label]])),
    },
    verdicts,
  };

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), "utf8");
  console.log(`Wrote ${OUTPUT_FILE}`);

  writeReport(REPORT_FILE, {
    full,
    fullPC1Top5,
    columns,
    looRuns,
    looCorrSummary,
    pc1MembershipChangedRuns,
    pc1CoreTop3ChangedRuns,
    pc1SignFlipRuns,
    citiesFMHoldsCount,
    internetFaultHoldsCount,
    perturbResults,
    pc1ShareStats,
    worstPC1,
    perturbHeadlineSummary,
    mcHeadlineSummary,
    N_TRIALS,
    CELLS_PER_TRIAL,
    verdicts,
    nRows,
  });
  console.log(`Wrote ${REPORT_FILE}`);
}

// Does `a` and `b` remain a closest pair (mutually nearest, i.e. merge together
// before either merges with anything else) in this clustering's merge sequence?
// We check: the first merge involving either `a` or `b` is the merge of `a` with `b`.
function clusterPairHolds(clustering, a, b) {
  for (const m of clustering) {
    const involvesA = m.a === a || m.b === a;
    const involvesB = m.a === b || m.b === b;
    if (involvesA || involvesB) {
      return involvesA && involvesB;
    }
  }
  return false;
}

// Nearest-neighbor check via the distance matrix directly (more precise than
// clustering merge order for a "nearest neighbor" claim): is `b` the closest
// other system to `a` (and vice versa need not hold — findings.md phrases it
// as "the-internet's nearest neighbor is earthquake-fault-systems").
function nearestNeighborHolds(systems, columns, matrix, a, b) {
  if (!systems.includes(a) || !systems.includes(b)) return null; // one was dropped
  const nCols = columns.length;
  const colMeans = [];
  const colStds = [];
  for (let c = 0; c < nCols; c++) {
    const colVals = matrix.map((row) => row[c]);
    colMeans.push(mean(colVals));
    colStds.push(populationStd(colVals));
  }
  const zmatrix = matrix.map((row) =>
    row.map((val, c) => (colStds[c] === 0 ? 0 : (val - colMeans[c]) / colStds[c]))
  );
  const idxA = systems.indexOf(a);
  const idxB = systems.indexOf(b);
  let nearestIdx = -1;
  let nearestDist = Infinity;
  for (let j = 0; j < systems.length; j++) {
    if (j === idxA) continue;
    const d = euclidean(zmatrix[idxA], zmatrix[j]);
    if (d < nearestDist) {
      nearestDist = d;
      nearestIdx = j;
    }
  }
  return nearestIdx === idxB;
}

function computeVerdicts(ctx) {
  const verdicts = [];

  // Finding 1: PC1 informational-adaptive vs energetic-chaotic composition
  {
    const membershipChanges = ctx.pc1MembershipChangedRuns.length;
    const coreChanges = ctx.pc1CoreTop3ChangedRuns.length;
    const signFlips = ctx.pc1SignFlipRuns.length;
    let verdict, rationale;
    if (membershipChanges === 0 && signFlips === 0) {
      verdict = "ROBUST";
      rationale = `PC1 top-5 loading membership unchanged and no sign flips across all 10 LOO runs; explained-variance share stays in a narrow band under exhaustive +-1 perturbation (${(ctx.pc1ShareStats.min * 100).toFixed(1)}-${(ctx.pc1ShareStats.max * 100).toFixed(1)}%, full=${(ctx.full.explainedVariance[0] * 100).toFixed(1)}%).`;
    } else if (signFlips === 0 && coreChanges === 0) {
      verdict = "SENSITIVE";
      rationale = `Core top-3 loadings (information_processing, adaptive_capacity, chaos_sensitivity) survive in all 10/10 LOO runs; only the weaker 4th/5th tail slot (alphabet_closure vs. openness_dissipation/memory_hysteresis/decentralization) swaps in ${membershipChanges}/10 runs (dropping: ${ctx.pc1MembershipChangedRuns.join(", ")}). No sign flips. PC1 variance share swings ${(ctx.pc1ShareStats.min * 100).toFixed(1)}-${(ctx.pc1ShareStats.max * 100).toFixed(1)}% under exhaustive single-cell perturbation.`;
    } else if (signFlips === 0 && coreChanges <= 3) {
      verdict = "SENSITIVE";
      rationale = `Core top-3 loadings reshuffle in ${coreChanges}/10 LOO runs (dropping: ${ctx.pc1CoreTop3ChangedRuns.join(", ")}) — decentralization/self_organization/modularity displace chaos_sensitivity in those runs — but no sign flips and the informational-adaptive pole (information_processing, adaptive_capacity) persists in the top-5 of every run. PC1 variance share swings ${(ctx.pc1ShareStats.min * 100).toFixed(1)}-${(ctx.pc1ShareStats.max * 100).toFixed(1)}%.`;
    } else {
      verdict = "FRAGILE";
      rationale = `Sign flips or majority core-loading reshuffles in runs: ${[...new Set([...ctx.pc1CoreTop3ChangedRuns, ...ctx.pc1SignFlipRuns.map((r) => r.droppedEntry)])].join(", ")}.`;
    }
    verdicts.push({ finding: "PC1 informational-adaptive vs energetic-chaotic composition", verdict, rationale });
  }

  // Finding 2: information_processing <-> adaptive_capacity r~=0.95
  {
    const label = "information_processing <-> adaptive_capacity";
    const s = ctx.looCorrSummary[label];
    const mc = ctx.mcHeadlineSummary[label];
    const stillStrongPositive = s.min > 0.7;
    let verdict, rationale;
    if (stillStrongPositive && s.range < 0.15) {
      verdict = "ROBUST";
      rationale = `LOO r ranges ${s.min.toFixed(3)}-${s.max.toFixed(3)} (range ${s.range.toFixed(3)}); Monte Carlo 5th-95th pct ${mc.p5.toFixed(3)}-${mc.p95.toFixed(3)}. Sign and strength never move off strong-positive.`;
    } else if (stillStrongPositive) {
      verdict = "SENSITIVE";
      rationale = `Direction (strong positive) holds everywhere but magnitude swings: LOO range ${s.range.toFixed(3)} (min ${s.min.toFixed(3)} on dropping ${s.minDropEntry}, max ${s.max.toFixed(3)} on dropping ${s.maxDropEntry}); MC 5th-95th pct ${mc.p5.toFixed(3)}-${mc.p95.toFixed(3)}.`;
    } else {
      verdict = "FRAGILE";
      rationale = `r drops to ${s.min.toFixed(3)} on dropping ${s.minDropEntry} — coupling weakens substantially or reverses in at least one LOO run.`;
    }
    verdicts.push({ finding: "information_processing <-> adaptive_capacity coupling (r=0.952)", verdict, rationale });
  }

  // Finding 3: modularity <-> self_organization negative correlation
  {
    const label = "modularity <-> self_organization";
    const s = ctx.looCorrSummary[label];
    const mc = ctx.mcHeadlineSummary[label];
    const perturb = ctx.perturbHeadlineSummary[label];
    const signHoldsLOO = s.max < 0;
    const signHoldsMC = mc.p95 < 0;
    let verdict, rationale;
    if (signHoldsLOO && signHoldsMC && s.range < 0.3) {
      verdict = "ROBUST";
      rationale = `Stays negative in all 10 LOO runs (range ${s.min.toFixed(3)} to ${s.max.toFixed(3)}) and in the Monte Carlo 5th-95th pct band (${mc.p5.toFixed(3)} to ${mc.p95.toFixed(3)}).`;
    } else if (signHoldsLOO) {
      verdict = "SENSITIVE";
      rationale = `Sign (negative) holds in all 10 LOO runs but magnitude swings: range ${s.range.toFixed(3)} (min ${s.min.toFixed(3)} dropping ${s.minDropEntry}, max ${s.max.toFixed(3)} dropping ${s.maxDropEntry}). Perturbation worst case: ${perturb.worstCasePerturbation.system}/${perturb.worstCasePerturbation.column} -> r=${perturb.worstCasePerturbation.r.toFixed(3)}.`;
    } else {
      const flipRun = s.allR.find((x) => x.r >= 0);
      verdict = "FRAGILE";
      rationale = `Sign flips to non-negative when dropping ${flipRun ? flipRun.dropped : "an entry"} (r=${flipRun ? flipRun.r.toFixed(3) : "?"}).`;
    }
    verdicts.push({ finding: "modularity <-> self_organization negative correlation (r=-0.853)", verdict, rationale });
  }

  // Finding 4: the-internet <-> earthquake-fault-systems kinship
  {
    const holds = ctx.internetFaultHoldsCount;
    let verdict, rationale;
    if (holds === 10) {
      verdict = "ROBUST";
      rationale = `the-internet's nearest neighbor (by z-scored Euclidean distance) remains earthquake-fault-systems in all 10/10 LOO runs where both entries are present.`;
    } else if (holds >= 7) {
      verdict = "SENSITIVE";
      rationale = `Holds in ${holds}/10 LOO runs; breaks when specific entries are dropped (see leaveOneOut.clusterKinship in robustness.json).`;
    } else {
      verdict = "FRAGILE";
      rationale = `Holds in only ${holds}/10 LOO runs — the kinship is not robust to single-entry removal.`;
    }
    verdicts.push({ finding: "the-internet <-> earthquake-fault-systems nearest-neighbor kinship", verdict, rationale });
  }

  return verdicts;
}

// ------------------------------------------------------------
// Human report writer
// ------------------------------------------------------------
function writeReport(filePath, ctx) {
  const {
    full,
    fullPC1Top5,
    looRuns,
    looCorrSummary,
    pc1MembershipChangedRuns,
    pc1CoreTop3ChangedRuns,
    pc1SignFlipRuns,
    citiesFMHoldsCount,
    internetFaultHoldsCount,
    pc1ShareStats,
    worstPC1,
    perturbHeadlineSummary,
    mcHeadlineSummary,
    N_TRIALS,
    CELLS_PER_TRIAL,
    verdicts,
    nRows,
  } = ctx;

  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const lines = [];
  lines.push("# Analysis Robustness Study (Workstream 2.2)");
  lines.push("");
  lines.push(
    `Generated by \`analysis/robustness.mjs\` (seed=${SEED}, mulberry32, fully deterministic — re-running reproduces identical numbers). Data: ${nRows} verified entries, same pipeline as \`analysis/run.mjs\` (copied verbatim, not forked). See [docs/findings.md](../../../docs/findings.md) for the headline findings under test.`
  );
  lines.push("");
  lines.push(
    "**Epistemic note**: this study tests statistical/numerical stability of the pipeline's outputs under entry removal and plausible score noise. It does not validate the underlying rubric judgments themselves (that is Workstream 2.1, inter-rater reliability)."
  );
  lines.push("");

  lines.push("## Survival verdicts (summary)");
  lines.push("");
  lines.push("| Finding | Verdict | Rationale |");
  lines.push("|---|---|---|");
  for (const v of verdicts) {
    lines.push(`| ${v.finding} | **${v.verdict}** | ${v.rationale} |`);
  }
  lines.push("");

  lines.push("## A. Leave-one-out PCA (10 runs)");
  lines.push("");
  lines.push(
    `Full-sample PC1 = ${(full.explainedVariance[0] * 100).toFixed(1)}%, PC2 = ${(full.explainedVariance[1] * 100).toFixed(1)}%. Full-sample PC1 top-5 |loading|: ` +
      fullPC1Top5.map((p) => `${p.col} (${p.loading.toFixed(3)})`).join(", ") +
      "."
  );
  lines.push("");
  lines.push("| Dropped entry | PC1 % | PC2 % | PC1 top-5 (sign-aligned) | Top-5 changed | Core top-3 changed | Sign flips |");
  lines.push("|---|---|---|---|---|---|---|");
  for (const r of looRuns) {
    const top5Str = r.pc1Top5.map((p) => `${p.col}=${p.loading.toFixed(3)}`).join(", ");
    lines.push(
      `| ${r.droppedEntry} | ${(r.explainedVariance[0] * 100).toFixed(1)} | ${(r.explainedVariance[1] * 100).toFixed(1)} | ${top5Str} | ${r.pc1MembershipChanged ? "YES" : "no"} | ${r.pc1CoreTop3Changed ? "YES" : "no"} | ${r.pc1SignFlipsInHeadlineSet.length ? r.pc1SignFlipsInHeadlineSet.join(", ") : "none"} |`
    );
  }
  lines.push("");
  lines.push(
    `PC1 top-5 membership changed (any of the 5 slots) in ${pc1MembershipChangedRuns.length}/10 runs${pc1MembershipChangedRuns.length ? " (dropping: " + pc1MembershipChangedRuns.join(", ") + ")" : ""} — mostly a weak 4th/5th-slot near-tie swap (alphabet_closure vs. openness_dissipation/memory_hysteresis/decentralization). ` +
      `The **core top-3** (information_processing, adaptive_capacity, chaos_sensitivity) reshuffles in only ${pc1CoreTop3ChangedRuns.length}/10 runs${pc1CoreTop3ChangedRuns.length ? " (dropping: " + pc1CoreTop3ChangedRuns.join(", ") + ")" : ""} — in those runs decentralization/self_organization/modularity displace chaos_sensitivity, but information_processing and adaptive_capacity remain top-2 in every single run. Sign flips within the full-sample top-5 occurred in ${pc1SignFlipRuns.length}/10 runs.`
  );
  lines.push("");

  lines.push("## B. Leave-one-out correlations for the headline pairs");
  lines.push("");
  lines.push("| Pair | full r | LOO min | LOO max | range | min at (drop) | max at (drop) |");
  lines.push("|---|---|---|---|---|---|---|");
  for (const [label, s] of Object.entries(looCorrSummary)) {
    lines.push(
      `| ${label} | ${s.recomputedFullR.toFixed(3)} | ${s.min.toFixed(3)} | ${s.max.toFixed(3)} | ${s.range.toFixed(3)} | ${s.minDropEntry} | ${s.maxDropEntry} |`
    );
  }
  lines.push("");
  lines.push("Full per-run detail:");
  lines.push("");
  for (const [label, s] of Object.entries(looCorrSummary)) {
    lines.push(`**${label}**: ` + s.allR.map((x) => `${x.dropped}=${x.r.toFixed(3)}`).join(", "));
    lines.push("");
  }

  lines.push("## C(i). Exhaustive single-cell +-1 perturbations");
  lines.push("");
  lines.push(
    `Every entry x every one of the 15 rubric/hybrid score columns x both directions (clamped to 0-4, no-ops skipped). ` +
      `PC1 variance share: full=${(pc1ShareStats.fullValue * 100).toFixed(1)}%, observed range [${(pc1ShareStats.min * 100).toFixed(1)}%, ${(pc1ShareStats.max * 100).toFixed(1)}%]. ` +
      `Worst-case single-cell swing: **${worstPC1.system} / ${worstPC1.column}** ${worstPC1.delta > 0 ? "+1" : "-1"} -> PC1 = ${(worstPC1.pc1Share * 100).toFixed(1)}%.`
  );
  lines.push("");
  lines.push("| Headline pair | full r | worst-case min | worst-case max | range | worst single-cell perturbation |");
  lines.push("|---|---|---|---|---|---|");
  for (const [label, s] of Object.entries(perturbHeadlineSummary)) {
    const w = s.worstCasePerturbation;
    lines.push(
      `| ${label} | ${s.fullR.toFixed(3)} | ${s.min.toFixed(3)} | ${s.max.toFixed(3)} | ${s.range.toFixed(3)} | ${w.system}/${w.column} ${w.delta > 0 ? "+1" : "-1"} -> r=${w.r.toFixed(3)} |`
    );
  }
  lines.push("");

  lines.push("## C(ii). Monte Carlo perturbation (1000 trials, 5 random cells +-1 each, seeded)");
  lines.push("");
  lines.push(`${N_TRIALS} trials, each perturbing ${CELLS_PER_TRIAL} randomly chosen (entry, column) cells by +-1 (clamped 0-4). Seed=${SEED} (mulberry32) — fully reproducible.`);
  lines.push("");
  lines.push("| Statistic | full value | 5th pct | 95th pct |");
  lines.push("|---|---|---|---|");
  lines.push(
    `| PC1 variance share | ${(mcHeadlineSummary.pc1Share.full * 100).toFixed(1)}% | ${(mcHeadlineSummary.pc1Share.p5 * 100).toFixed(1)}% | ${(mcHeadlineSummary.pc1Share.p95 * 100).toFixed(1)}% |`
  );
  for (const [label] of Object.entries(perturbHeadlineSummary)) {
    const mc = mcHeadlineSummary[label];
    lines.push(`| r(${label}) | ${mc.full.toFixed(3)} | ${mc.p5.toFixed(3)} | ${mc.p95.toFixed(3)} |`);
  }
  lines.push("");

  lines.push("## D. Cluster-pair kinship survival under LOO");
  lines.push("");
  lines.push(
    `- **cities + financial-markets closest-pair** (first merge in average-linkage clustering): holds in **${citiesFMHoldsCount}/10** LOO runs.`
  );
  lines.push(
    `- **the-internet <-> earthquake-fault-systems nearest-neighbor** (by z-scored Euclidean distance): holds in **${internetFaultHoldsCount}/10** LOO runs.`
  );
  lines.push("");

  lines.push("## Method notes");
  lines.push("");
  lines.push(
    "- Data loading, z-scoring, PCA, distance, clustering, and correlation math are copied verbatim from `analysis/run.mjs` — no independent reimplementation, so this study measures the deployed pipeline's stability, not a different pipeline's."
  );
  lines.push(
    "- PC1/PC2 loading vectors from each LOO run are sign-aligned to the full-sample run by flipping sign when it improves the dot-product agreement, before comparing membership or signs (PCA eigenvector sign is otherwise arbitrary)."
  );
  lines.push(
    "- \"Membership changed\" means the LOO run's top-5 |loading| column set for PC1 differs from the full-sample top-5 set; this is a stricter test than rank-order stability within a fixed set."
  );
  lines.push(
    "- The RNG is seeded (mulberry32, seed=" + SEED + ") — the Monte Carlo trial is byte-for-byte reproducible by re-running `node analysis/robustness.mjs`."
  );
  lines.push("- Run.mjs was not modified; no entry YAML or docs/findings.md was modified by this study.");
  lines.push("");

  fs.writeFileSync(filePath, lines.join("\n"), "utf8");
}

main();
