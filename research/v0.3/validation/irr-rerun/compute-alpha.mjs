#!/usr/bin/env node
// compute-alpha.mjs — IRR RE-RUN (v0.3, 2026-07-16)
//
// Adapted from research/v0.2-sweep/validation/irr/compute-alpha.mjs (same
// ordinal Krippendorff's alpha formula, verbatim; see that file's header for
// the full formula documentation and the hand-check note). Deltas:
//   - 3 columns only (criticality, tipping_transitions, emergence) — the
//     three at-or-below-chance columns from the original study, re-run
//     against the 2026-07-02 boundary-clarified anchors.
//   - rater files use top-level key `scores` (not `entries`) and `tier`.
//   - catalog reference scores are read from the CURRENT entries, which for
//     two of the 15 cells differ from the original study's catalog column
//     (2026-07-02 rescores: cities criticality 1->0, river-networks
//     criticality 0->1). The pre-registered alpha-3blind comparison is
//     unaffected by this; the 4-rater figures are reported against the
//     current catalog.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from '../../../../analysis/node_modules/js-yaml/dist/js-yaml.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '../../../../');

const COLUMNS = ['criticality', 'tipping_transitions', 'emergence'];
const ENTRY_IDS = ['stars', 'river-networks', 'cities', 'the-internet', 'languages'];
const SCALE = [0, 1, 2, 3, 4];

const raterDocs = [1, 2, 3].map((n) =>
  yaml.load(fs.readFileSync(path.join(__dirname, 'scores', `rater-${n}.yaml`), 'utf8'))
);

const catalogScores = {};
for (const id of ENTRY_IDS) {
  const doc = yaml.load(fs.readFileSync(path.join(REPO_ROOT, 'data', 'classes', `${id}.yaml`), 'utf8'));
  catalogScores[id] = {};
  for (const col of COLUMNS) catalogScores[id][col] = doc.attributes?.[col]?.score;
}

const missingCells = [];
function getRaterScore(doc, raterNum, entryId, col) {
  const cell = doc.scores?.[entryId]?.[col];
  const s = cell?.score;
  if (typeof s !== 'number' || !SCALE.includes(s)) {
    missingCells.push({ rater: raterNum, entry: entryId, column: col, value: s ?? null });
    return null;
  }
  return s;
}

const cells = {};
for (const col of COLUMNS) {
  cells[col] = {};
  for (const id of ENTRY_IDS) {
    cells[col][id] = {
      catalog: typeof catalogScores[id][col] === 'number' ? catalogScores[id][col] : null,
      blind: raterDocs.map((d, i) => getRaterScore(d, i + 1, id, col)),
    };
  }
}
console.error(missingCells.length ? `WARNING: ${missingCells.length} missing cells` : 'No missing cells.');

function krippendorffOrdinalAlpha(unitValues) {
  const pairableUnits = unitValues.filter((v) => v.length >= 2);
  const n = SCALE.length;
  const o = Array.from({ length: n }, () => new Array(n).fill(0));
  for (const vals of pairableUnits) {
    const m = vals.length, w = 1 / (m - 1);
    for (let i = 0; i < m; i++) for (let j = 0; j < m; j++) if (i !== j) o[vals[i]][vals[j]] += w;
  }
  const nMarg = SCALE.map((_, v) => o[v].reduce((a, b) => a + b, 0));
  const nTotal = nMarg.reduce((a, b) => a + b, 0);
  if (nTotal === 0) return { alpha: null, n: 0, note: 'no pairable data' };
  function ordinalDelta(v, vp) {
    const lo = Math.min(v, vp), hi = Math.max(v, vp);
    let s = 0;
    for (let g = lo; g <= hi; g++) s += nMarg[g];
    const d = s - (nMarg[v] + nMarg[vp]) / 2;
    return d * d;
  }
  let doSum = 0, deSum = 0;
  for (let v = 0; v < n; v++) for (let vp = 0; vp < n; vp++) {
    const del = ordinalDelta(v, vp);
    doSum += o[v][vp] * del;
    deSum += nMarg[v] * nMarg[vp] * del;
  }
  const Do = doSum / nTotal;
  const De = deSum / (nTotal * (nTotal - 1));
  // De === 0 means zero variance across all pairable values (e.g. every
  // rater gave the same score to every unit). Do === 0 necessarily too;
  // alpha is undefined by the formula. We report it as `null` with an
  // explicit unanimous flag rather than forcing 1 — but note the original
  // script returned 1 for the Do===0 case; we preserve that convention and
  // ALSO set the flag so the report can state it plainly.
  const alpha = De === 0 ? (Do === 0 ? 1 : null) : 1 - Do / De;
  return { alpha, n: nTotal, units: pairableUnits.length, zero_variance: De === 0 };
}

const perColumn = {};
for (const col of COLUMNS) {
  const u4 = [], u3 = [];
  for (const id of ENTRY_IDS) {
    const c = cells[col][id];
    u4.push([c.catalog, ...c.blind].filter((v) => v !== null));
    u3.push(c.blind.filter((v) => v !== null));
  }
  perColumn[col] = {
    alpha_4rater: krippendorffOrdinalAlpha(u4),
    alpha_3blind: krippendorffOrdinalAlpha(u3),
    cells: Object.fromEntries(ENTRY_IDS.map((id) => [id, cells[col][id]])),
  };
  let exact = 0;
  for (const id of ENTRY_IDS) {
    const c = cells[col][id];
    if (c.catalog !== null && c.blind.every((b) => b === c.catalog)) exact++;
  }
  perColumn[col].exact_match_all3_vs_catalog = `${exact}/5`;
}

const perRater = [1, 2, 3].map((rn) => {
  const signed = [];
  for (const col of COLUMNS) for (const id of ENTRY_IDS) {
    const c = cells[col][id];
    const b = c.blind[rn - 1];
    if (c.catalog !== null && b !== null) signed.push(b - c.catalog);
  }
  return {
    rater: rn,
    tier: raterDocs[rn - 1].tier || null,
    mean_signed_bias_vs_catalog: signed.reduce((a, b) => a + b, 0) / signed.length,
  };
});

const results = {
  meta: {
    generated_by: 'irr-rerun/compute-alpha.mjs',
    generated_at: '2026-07-16',
    design: 'see method.md — re-run of the 3 at-or-below-chance columns against boundary-clarified anchors',
    baseline_alpha_3blind: { criticality: -0.270, tipping_transitions: -0.032, emergence: 0.000 },
    entries: ENTRY_IDS, columns: COLUMNS, scale: SCALE,
    rater_tiers: raterDocs.map((d, i) => ({ rater: i + 1, tier: d.tier || null })),
  },
  missing_cells: missingCells,
  per_column: perColumn,
  per_rater: perRater,
};

fs.writeFileSync(path.join(__dirname, 'results.json'), JSON.stringify(results, null, 2) + '\n');
console.error('Wrote results.json');
for (const col of COLUMNS) {
  const p = perColumn[col];
  console.log(`${col}: alpha_3blind=${p.alpha_3blind.alpha === null ? 'undefined' : p.alpha_3blind.alpha.toFixed(3)}${p.alpha_3blind.zero_variance ? ' (unanimous, zero variance)' : ''}  alpha_4rater=${p.alpha_4rater.alpha === null ? 'undefined' : p.alpha_4rater.alpha.toFixed(3)}  exact-match(all 3 = catalog)=${p.exact_match_all3_vs_catalog}`);
}
for (const r of perRater) console.log(`rater-${r.rater} (${r.tier}) signed bias vs catalog: ${r.mean_signed_bias_vs_catalog.toFixed(3)}`);
