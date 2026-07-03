// Phenomena-registry analysis (D20): merge by-system classification files,
// cross-tabulate the taxonomy, and surface recurring emergence motifs —
// groups of phenomena sharing (novelty_kind, onset, persistence) across
// different host categories. Derived research layer; touches no catalog file.
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(path.resolve(url.fileURLToPath(import.meta.url), '../../../../analysis/package.json'));
const yaml = require('js-yaml');

const HERE = path.dirname(url.fileURLToPath(import.meta.url));
const BY_SYSTEM = path.join(HERE, 'by-system');
const CLASSES = path.resolve(HERE, '../../../data/classes');

const NOVELTY = ['new-entity', 'new-dynamics', 'new-statistics', 'new-structure', 'new-function'];
const ONSET = ['threshold-bifurcation', 'crossover-gradual', 'always-present-at-scale', 'episodic-triggered', 'unknown'];
const PERSISTENCE = ['transient', 'sustained-while-driven', 'self-sustaining', 'frozen'];
const THEORY = ['none', 'vocabulary', 'quantitative-contested', 'quantitative-predictive'];

// ---- load host-entry context (category, alphabet_closure) ----
const host = {};
for (const f of fs.readdirSync(CLASSES).filter((f) => f.endsWith('.yaml'))) {
  const e = yaml.load(fs.readFileSync(path.join(CLASSES, f), 'utf8'));
  const io = e.attributes && e.attributes.interaction_ontology;
  host[e.id] = { category: e.category, alphabet_closure: io ? io.alphabet_closure : 'unknown' };
}

// ---- merge registry ----
const phenomena = [];
const problems = [];
for (const f of fs.readdirSync(BY_SYSTEM).filter((f) => f.endsWith('.yaml')).sort()) {
  const doc = yaml.load(fs.readFileSync(path.join(BY_SYSTEM, f), 'utf8'));
  if (!doc || !doc.system || !Array.isArray(doc.phenomena)) {
    problems.push(`${f}: missing system/phenomena`);
    continue;
  }
  if (!host[doc.system]) problems.push(`${f}: system '${doc.system}' not in data/classes`);
  for (const p of doc.phenomena) {
    for (const [field, vocab] of [['novelty_kind', NOVELTY], ['onset', ONSET], ['persistence', PERSISTENCE]]) {
      if (!vocab.includes(p[field])) problems.push(`${p.id || p.name}: illegal ${field} '${p[field]}'`);
    }
    const ts = p.effective_theory && p.effective_theory.status;
    if (!THEORY.includes(ts)) problems.push(`${p.id || p.name}: illegal effective_theory.status '${ts}'`);
    if (p.onset === 'threshold-bifurcation' && !p.onset_control_parameter) {
      problems.push(`${p.id || p.name}: threshold-bifurcation without onset_control_parameter`);
    }
    phenomena.push({ ...p, system: doc.system, ...(host[doc.system] || {}) });
  }
}

// Records flagged as failing the SFI emergence test are reported but excluded
// from cross-tabs and motifs (verification convention, 2026-07-03).
const excluded = phenomena.filter((p) => p.emergence_test && String(p.emergence_test).startsWith('fails'));
const included = phenomena.filter((p) => !excluded.includes(p));
if (problems.length) {
  console.error('CONFORMANCE PROBLEMS:');
  for (const p of problems) console.error('  - ' + p);
  process.exitCode = 1;
}

// ---- cross-tabs ----
const tab = (rowsKey, colsKey, rowVocab, colVocab, val = (p) => 1) => {
  const t = {};
  for (const r of rowVocab) { t[r] = {}; for (const c of colVocab) t[r][c] = 0; }
  for (const p of included) {
    const r = typeof rowsKey === 'function' ? rowsKey(p) : p[rowsKey];
    const c = typeof colsKey === 'function' ? colsKey(p) : p[colsKey];
    if (t[r] && t[r][c] !== undefined) t[r][c] += val(p);
  }
  return t;
};
const categories = [...new Set(included.map((p) => p.category))];
const closures = ['closed', 'constrained', 'open'];

const crossTabs = {
  novelty_x_onset: tab('novelty_kind', 'onset', NOVELTY, ONSET),
  novelty_x_category: tab('novelty_kind', 'category', NOVELTY, categories),
  novelty_x_closure: tab('novelty_kind', 'alphabet_closure', NOVELTY, closures),
  onset_x_theory: tab('onset', (p) => p.effective_theory.status, ONSET, THEORY),
  novelty_x_persistence: tab('novelty_kind', 'persistence', NOVELTY, PERSISTENCE),
};

// ---- motif candidates: same (novelty, onset, persistence), spanning >=2 categories,
// >=3 LINEAGES (compositional kin tagged with the same `lineage` count once) ----
const groups = {};
for (const p of included) {
  const key = `${p.novelty_kind} | ${p.onset} | ${p.persistence}`;
  (groups[key] = groups[key] || []).push(p);
}
const motifs = Object.entries(groups)
  .map(([key, ps]) => ({
    signature: key,
    n: ps.length,
    n_lineages: new Set(ps.map((p) => p.lineage || p.id)).size,
    categories: [...new Set(ps.map((p) => p.category))],
    members: ps.map((p) => `${p.system}: ${p.name}${p.lineage ? ` [lineage: ${p.lineage}]` : ''}`),
  }))
  .filter((m) => m.n_lineages >= 3 && m.categories.length >= 2)
  .sort((a, b) => b.categories.length - a.categories.length || b.n_lineages - a.n_lineages);

// ---- interchangeability of substrate ----
const interch = { yes: 0, no: 0, other: 0 };
for (const p of included) {
  const v = String(p.substrate && p.substrate.interchangeable).toLowerCase();
  if (v.startsWith('yes') || v === 'true') interch.yes++;
  else if (v.startsWith('no') || v === 'false') interch.no++;
  else interch.other++;
}

const out = {
  generated: '2026-07-03',
  n_phenomena: included.length,
  n_excluded: excluded.length,
  excluded: excluded.map((p) => ({ id: p.id, reason: p.emergence_test })),
  n_systems: new Set(included.map((p) => p.system)).size,
  conformance_problems: problems,
  crossTabs,
  substrate_interchangeable: interch,
  motifs,
  phenomena,
};
fs.writeFileSync(path.join(HERE, 'registry.json'), JSON.stringify(out, null, 2));

// ---- console summary ----
const printTab = (title, t) => {
  console.log('\n== ' + title);
  const cols = Object.keys(Object.values(t)[0]);
  console.log('  '.padEnd(28) + cols.map((c) => String(c).slice(0, 14).padStart(16)).join(''));
  for (const [r, row] of Object.entries(t)) {
    console.log(('  ' + r).padEnd(28) + cols.map((c) => String(row[c]).padStart(16)).join(''));
  }
};
console.log(`${out.n_phenomena} phenomena across ${out.n_systems} systems; ${problems.length} conformance problem(s); ${excluded.length} excluded (failed emergence test): ${excluded.map((p) => p.id).join(', ') || 'none'}`);
printTab('novelty_kind x onset', crossTabs.novelty_x_onset);
printTab('novelty_kind x category', crossTabs.novelty_x_category);
printTab('novelty_kind x alphabet_closure', crossTabs.novelty_x_closure);
printTab('onset x effective_theory', crossTabs.onset_x_theory);
console.log('\n== substrate interchangeable:', JSON.stringify(interch));
console.log('\n== motif candidates (same novelty|onset|persistence, >=3 lineages, >=2 categories):');
for (const m of motifs) {
  console.log(`\n  [${m.signature}]  n=${m.n} (${m.n_lineages} lineages), categories: ${m.categories.join(', ')}`);
  for (const mem of m.members) console.log('    - ' + mem);
}
console.log('\nWrote registry.json');
