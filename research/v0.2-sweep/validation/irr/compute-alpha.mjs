#!/usr/bin/env node
// compute-alpha.mjs
//
// Computes agreement statistics for the blind inter-rater reliability (IRR)
// study described in ./method.md. Reads:
//   - the 3 blind-rater score files (./scores/rater-{1,2,3}.yaml)
//   - the catalog's own published scores for the same 5 entries, extracted
//     directly from data/classes/{stars,river-networks,cities,the-internet,
//     languages}.yaml
// and writes ./results.json.
//
// Node ESM. Uses js-yaml from analysis/node_modules (no local install).
//
// ---------------------------------------------------------------------------
// KRIPPENDORFF'S ALPHA (ORDINAL) — formula reference
// ---------------------------------------------------------------------------
// alpha = 1 - (Do / De)
//
// where Do is the observed disagreement and De is the disagreement expected
// by chance, both computed from a coincidence matrix built by pairing every
// value in a unit with every OTHER value in that same unit (all raters who
// scored that unit), summed across units, weighted by 1/(m_u - 1) per unit
// (the standard Krippendorff pairing rule), where m_u is the number of
// non-missing values for unit u.
//
// Concretely, for each unit (entry x column cell) with m_u >= 2 pairable
// values, every ordered pair of (distinct-position) values within that unit
// contributes 1/(m_u - 1) to the coincidence count o_{v,v'} for the values
// v, v' at those two positions. This yields a v x v coincidence matrix o,
// with marginals n_v = sum_v' o_{v,v'}, and total pairable count n = sum_v n_v.
//
// Observed disagreement:
//   Do = (1/n) * sum_{v,v'} o_{v,v'} * delta(v,v')
// Expected disagreement:
//   De = (1/(n(n-1))) * sum_{v,v'} n_v * n_v' * delta(v,v')
//
// delta(v, v') is the ORDINAL metric difference function (Krippendorff 2004,
// 2011), defined on the ordered value scale (here the 5 ranks 0..4) as:
//
//   delta(v, v') = ( sum_{g=v}^{v'} n_g  -  (n_v + n_v') / 2 )^2
//
// i.e. the squared count of all category-marginal weight n_g for ranks g
// from v to v' inclusive (using whichever observed marginal frequencies
// n_g exist in THIS column's data), minus half of each endpoint's own
// weight. This is the standard "ordinal difference function" specified in
// Krippendorff's alpha formula tables (used here in place of the interval
// metric (v-v')^2 or the nominal 0/1 metric) — it penalizes disagreement
// between adjacent, densely-populated ranks less than disagreement between
// sparsely-populated or far-apart ranks, matching the ordered-but-not-
// necessarily-equal-interval nature of the 0-4 rubric scale.
//
// alpha = 1 indicates perfect agreement; alpha = 0 indicates agreement at
// chance level; alpha < 0 indicates systematic disagreement (worse than
// chance). alpha >= 0.667 is the conventional "tentative conclusions"
// threshold; alpha >= 0.8 is the conventional "reliable" threshold
// (Krippendorff 2004).
//
// MISSING DATA: per Krippendorff's pairable-values rule, a unit contributes
// to the coincidence matrix only using the values actually present for it;
// units with 0 or 1 pairable value are dropped entirely (they cannot form a
// pair and contribute nothing to Do or De). This script logs every missing
// cell it finds (there should be none in this study's inputs, per the
// upstream data audit) loudly to stderr and into results.json's
// `missing_cells` field.
// ---------------------------------------------------------------------------

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from '../../../../analysis/node_modules/js-yaml/dist/js-yaml.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IRR_DIR = __dirname;
const REPO_ROOT = path.resolve(__dirname, '../../../../');

const COLUMNS = [
  'decentralization',
  'modularity',
  'nonlinearity',
  'feedback',
  'openness_dissipation',
  'chaos_sensitivity',
  'criticality',
  'tipping_transitions',
  'memory_hysteresis',
  'information_processing',
  'adaptive_capacity',
  'emergence',
  'self_organization',
  'robustness_resilience',
  'cascade_susceptibility',
];

const ENTRY_IDS = ['stars', 'river-networks', 'cities', 'the-internet', 'languages'];

const SCALE = [0, 1, 2, 3, 4]; // 0-4 rubric/hybrid scale

// ---------------------------------------------------------------------------
// Load inputs
// ---------------------------------------------------------------------------

function loadRater(raterNum) {
  const file = path.join(IRR_DIR, 'scores', `rater-${raterNum}.yaml`);
  const doc = yaml.load(fs.readFileSync(file, 'utf8'));
  return doc;
}

function loadCatalogScores() {
  // entryId -> column -> {score, justification, ...}
  const out = {};
  for (const id of ENTRY_IDS) {
    const file = path.join(REPO_ROOT, 'data', 'classes', `${id}.yaml`);
    const doc = yaml.load(fs.readFileSync(file, 'utf8'));
    out[id] = {};
    for (const col of COLUMNS) {
      const attr = doc.attributes ? doc.attributes[col] : undefined;
      out[id][col] = attr ? attr.score : undefined;
    }
  }
  return out;
}

const raterDocs = [1, 2, 3].map(loadRater);
const catalogScores = loadCatalogScores();

// ---------------------------------------------------------------------------
// Build the cell matrix: cells[entryId][column] = { catalog, r1, r2, r3 }
// Also collect missing cells loudly.
// ---------------------------------------------------------------------------

const missingCells = [];

function getRaterScore(raterDoc, raterNum, entryId, col) {
  const entry = raterDoc.entries ? raterDoc.entries[entryId] : undefined;
  if (!entry) {
    missingCells.push({ rater: raterNum, entry: entryId, column: col, reason: 'entry not found in rater file' });
    return null;
  }
  const cell = entry[col];
  if (!cell) {
    missingCells.push({ rater: raterNum, entry: entryId, column: col, reason: 'column not scored by rater (absent)' });
    return null;
  }
  const s = cell.score;
  if (s === undefined || s === null || s === 'unknown') {
    missingCells.push({ rater: raterNum, entry: entryId, column: col, reason: `rater returned unscoreable value: ${JSON.stringify(s)}` });
    return null;
  }
  if (typeof s !== 'number' || !SCALE.includes(s)) {
    missingCells.push({ rater: raterNum, entry: entryId, column: col, reason: `non-numeric or out-of-scale score: ${JSON.stringify(s)}` });
    return null;
  }
  return s;
}

function getRaterNote(raterDoc, entryId, col) {
  const entry = raterDoc.entries ? raterDoc.entries[entryId] : undefined;
  const cell = entry ? entry[col] : undefined;
  return cell ? cell.note : undefined;
}

// cells[column][entryId] = { catalog: n|null, blind: [n|null, n|null, n|null] }
const cells = {};
for (const col of COLUMNS) {
  cells[col] = {};
  for (const id of ENTRY_IDS) {
    const catScore = catalogScores[id][col];
    if (catScore === undefined || catScore === null || catScore === 'unknown') {
      missingCells.push({ rater: 'catalog', entry: id, column: col, reason: `catalog score unscoreable: ${JSON.stringify(catScore)}` });
    }
    const blind = raterDocs.map((doc, i) => getRaterScore(doc, i + 1, id, col));
    cells[col][id] = {
      catalog: (typeof catScore === 'number' && SCALE.includes(catScore)) ? catScore : null,
      blind,
    };
  }
}

if (missingCells.length > 0) {
  console.error(`WARNING: ${missingCells.length} missing/unscoreable cell(s) found:`);
  for (const m of missingCells) {
    console.error(`  - rater=${m.rater} entry=${m.entry} column=${m.column}: ${m.reason}`);
  }
} else {
  console.error('No missing cells found across catalog + 3 blind raters x 5 entries x 15 columns.');
}

// ---------------------------------------------------------------------------
// Krippendorff's alpha (ordinal), generic over an arbitrary set of "raters"
// per unit. `unitValues` is an array of arrays: for each unit, the list of
// non-null values contributed by whichever raters scored it (order doesn't
// matter, only the multiset of values per unit matters for the coincidence
// matrix).
// ---------------------------------------------------------------------------

function krippendorffOrdinalAlpha(unitValues) {
  // Build the observed value-marginal frequency n_g across ALL pairable
  // values (only units with >=2 values contribute, per Krippendorff's rule,
  // but the marginal n_g used in the ordinal delta function is computed
  // from those same pairable units, standard practice for alpha's
  // coincidence-matrix construction).
  const pairableUnits = unitValues.filter((vals) => vals.length >= 2);

  // marginal counts n_g (frequency of value g across all pairable values,
  // each unit's values weighted by 1/(m_u-1) per Krippendorff's coincidence
  // matrix construction — but the standard approach counts each observed
  // value once per its occurrences summed over units; we follow the
  // canonical construction: build the full coincidence matrix o_{v,v'} by,
  // for each unit u with values x_1..x_{m_u}, adding 1/(m_u-1) to
  // o_{x_i,x_j} for every ordered pair (i != j).
  const n = SCALE.length;
  const o = Array.from({ length: n }, () => new Array(n).fill(0)); // coincidence matrix, indexed by scale value directly (0..4)

  for (const vals of pairableUnits) {
    const m = vals.length;
    const weight = 1 / (m - 1);
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < m; j++) {
        if (i === j) continue;
        const vi = vals[i];
        const vj = vals[j];
        o[vi][vj] += weight;
      }
    }
  }

  const nMarg = SCALE.map((_, v) => o[v].reduce((a, b) => a + b, 0)); // n_v
  const nTotal = nMarg.reduce((a, b) => a + b, 0); // n

  if (nTotal === 0) {
    return { alpha: null, n: 0, note: 'no pairable data' };
  }

  // Ordinal delta(v, v') = ( sum_{g=v}^{v'} n_g - (n_v + n_v')/2 )^2
  // (v <= v' by construction below; delta is symmetric so we just always
  // sum from min to max.)
  function ordinalDelta(v, vp) {
    const lo = Math.min(v, vp);
    const hi = Math.max(v, vp);
    let sumMid = 0;
    for (let g = lo; g <= hi; g++) sumMid += nMarg[g];
    const d = sumMid - (nMarg[v] + nMarg[vp]) / 2;
    return d * d;
  }

  // Precompute delta matrix
  const delta = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let v = 0; v < n; v++) {
    for (let vp = 0; vp < n; vp++) {
      delta[v][vp] = ordinalDelta(v, vp);
    }
  }

  // Observed disagreement: Do = (1/n) * sum_{v,v'} o_{v,v'} * delta(v,v')
  let doSum = 0;
  for (let v = 0; v < n; v++) {
    for (let vp = 0; vp < n; vp++) {
      doSum += o[v][vp] * delta[v][vp];
    }
  }
  const Do = doSum / nTotal;

  // Expected disagreement: De = (1/(n(n-1))) * sum_{v,v'} n_v * n_v' * delta(v,v')
  let deSum = 0;
  for (let v = 0; v < n; v++) {
    for (let vp = 0; vp < n; vp++) {
      deSum += nMarg[v] * nMarg[vp] * delta[v][vp];
    }
  }
  const De = deSum / (nTotal * (nTotal - 1));

  const alpha = De === 0 ? (Do === 0 ? 1 : null) : 1 - Do / De;

  return {
    alpha,
    n: nTotal,
    units: pairableUnits.length,
    unitsDropped: unitValues.length - pairableUnits.length,
  };
}

// ---------------------------------------------------------------------------
// Per-column alpha: 4-rater (catalog + 3 blind) and 3-rater (blind only)
// ---------------------------------------------------------------------------

const perColumn = {};

for (const col of COLUMNS) {
  const unitValues4 = [];
  const unitValues3 = [];
  for (const id of ENTRY_IDS) {
    const c = cells[col][id];
    const vals4 = [c.catalog, ...c.blind].filter((v) => v !== null && v !== undefined);
    const vals3 = c.blind.filter((v) => v !== null && v !== undefined);
    unitValues4.push(vals4);
    unitValues3.push(vals3);
  }
  const alpha4 = krippendorffOrdinalAlpha(unitValues4);
  const alpha3 = krippendorffOrdinalAlpha(unitValues3);
  perColumn[col] = { alpha_4rater: alpha4, alpha_3blind: alpha3 };
}

// ---------------------------------------------------------------------------
// Per-column: mean absolute deviation of each blind rater from catalog;
// exact-match rate vs catalog; worst cell (max spread across all 4 raters).
// ---------------------------------------------------------------------------

for (const col of COLUMNS) {
  const perRaterAbsDev = [[], [], []]; // rater index 0,1,2
  let exactMatches = 0;
  let comparableCount = 0;
  let worst = null; // {entry, spread, values}

  for (const id of ENTRY_IDS) {
    const c = cells[col][id];
    const cat = c.catalog;

    if (cat !== null) {
      for (let i = 0; i < 3; i++) {
        const b = c.blind[i];
        if (b !== null) {
          perRaterAbsDev[i].push(Math.abs(b - cat));
        }
      }
      const blindNonNull = c.blind.filter((v) => v !== null);
      if (blindNonNull.length === 3) {
        comparableCount += 1;
        if (blindNonNull.every((v) => v === cat)) exactMatches += 1;
      }
    }

    const allVals = [cat, ...c.blind].filter((v) => v !== null && v !== undefined);
    if (allVals.length >= 2) {
      const spread = Math.max(...allVals) - Math.min(...allVals);
      if (worst === null || spread > worst.spread) {
        worst = {
          entry: id,
          spread,
          catalog: cat,
          blind: c.blind,
        };
      }
    }
  }

  perColumn[col].mean_abs_deviation_vs_catalog = perRaterAbsDev.map((arr, i) => ({
    rater: i + 1,
    n: arr.length,
    mean_abs_deviation: arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null,
  }));
  perColumn[col].exact_match_rate_vs_catalog = {
    matches: exactMatches,
    comparable_units: comparableCount,
    rate: comparableCount ? exactMatches / comparableCount : null,
  };
  perColumn[col].worst_cell = worst;
}

// ---------------------------------------------------------------------------
// Per-rater: overall mean signed bias vs catalog (leniency/severity), mean |delta|
// ---------------------------------------------------------------------------

const perRater = [1, 2, 3].map((raterNum) => {
  const signed = [];
  const abs = [];
  for (const col of COLUMNS) {
    for (const id of ENTRY_IDS) {
      const c = cells[col][id];
      const cat = c.catalog;
      const b = c.blind[raterNum - 1];
      if (cat !== null && b !== null) {
        signed.push(b - cat);
        abs.push(Math.abs(b - cat));
      }
    }
  }
  return {
    rater: raterNum,
    model: raterDocs[raterNum - 1].model || null,
    n: signed.length,
    mean_signed_bias_vs_catalog: signed.length ? signed.reduce((a, b) => a + b, 0) / signed.length : null,
    mean_abs_deviation: abs.length ? abs.reduce((a, b) => a + b, 0) / abs.length : null,
  };
});

// ---------------------------------------------------------------------------
// Overall pooled alpha across all 15 columns x 5 entries (75 cells),
// both rater sets (4-rater incl. catalog, 3-rater blind-only).
// ---------------------------------------------------------------------------

const pooledUnitValues4 = [];
const pooledUnitValues3 = [];
for (const col of COLUMNS) {
  for (const id of ENTRY_IDS) {
    const c = cells[col][id];
    const vals4 = [c.catalog, ...c.blind].filter((v) => v !== null && v !== undefined);
    const vals3 = c.blind.filter((v) => v !== null && v !== undefined);
    pooledUnitValues4.push(vals4);
    pooledUnitValues3.push(vals3);
  }
}

const pooledAlpha4 = krippendorffOrdinalAlpha(pooledUnitValues4);
const pooledAlpha3 = krippendorffOrdinalAlpha(pooledUnitValues3);

// ---------------------------------------------------------------------------
// Attach notes for the worst cells (for the report's diagnosis section) —
// pull rater notes so results.md can quote them.
// ---------------------------------------------------------------------------

for (const col of COLUMNS) {
  const w = perColumn[col].worst_cell;
  if (w) {
    w.notes = {
      rater_1: getRaterNote(raterDocs[0], w.entry, col) || null,
      rater_2: getRaterNote(raterDocs[1], w.entry, col) || null,
      rater_3: getRaterNote(raterDocs[2], w.entry, col) || null,
    };
  }
}

// ---------------------------------------------------------------------------
// Assemble and write results.json
// ---------------------------------------------------------------------------

const results = {
  meta: {
    generated_by: 'compute-alpha.mjs',
    generated_at: new Date().toISOString(),
    entries: ENTRY_IDS,
    columns: COLUMNS,
    scale: SCALE,
    rater_models: raterDocs.map((d, i) => ({ rater: i + 1, model: d.model || null })),
  },
  missing_cells: missingCells,
  per_column: perColumn,
  per_rater: perRater,
  pooled: {
    alpha_4rater: pooledAlpha4,
    alpha_3blind: pooledAlpha3,
  },
};

const outFile = path.join(IRR_DIR, 'results.json');
fs.writeFileSync(outFile, JSON.stringify(results, null, 2) + '\n', 'utf8');
console.error(`Wrote ${outFile}`);
console.error(`Pooled alpha (4-rater, incl. catalog): ${pooledAlpha4.alpha}`);
console.error(`Pooled alpha (3-rater, blind only):    ${pooledAlpha3.alpha}`);
