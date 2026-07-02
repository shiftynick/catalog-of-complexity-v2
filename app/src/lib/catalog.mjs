// Build-time data access for the Catalog of Complexity web app.
// Reads data/classes/*.yaml (relative to app/) and, if present,
// analysis/output/analysis.json. Every consumer of the analysis output
// must be able to run with it absent (Phase 5 may run before analysis
// has ever executed).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CLASSES_DIR = path.resolve(__dirname, '../../../data/classes');
const ANALYSIS_PATH = path.resolve(__dirname, '../../../analysis/output/analysis.json');

// Canonical category order (per docs/webapp.md / product brief).
// Only categories with at least one entry are ever rendered, but this
// fixes the display order when they are.
export const CATEGORY_ORDER = [
  'astrophysical',
  'geophysical',
  'physical-chemical',
  'socio-economic',
  'infrastructure',
  'cultural-informational',
];

export const CATEGORY_LABELS = {
  astrophysical: 'Astrophysical',
  geophysical: 'Geophysical',
  'physical-chemical': 'Physical-chemical',
  'socio-economic': 'Socio-economic',
  infrastructure: 'Infrastructure',
  'cultural-informational': 'Cultural-informational',
};

// The 15 rubric/hybrid columns from schema/panel-spec.yaml — the panel
// used by the Compare radar chart. Order follows the panel-spec groups.
export const RUBRIC_COLUMNS = [
  'modularity',
  'decentralization',
  'nonlinearity',
  'feedback',
  'openness_dissipation',
  'chaos_sensitivity',
  'criticality',
  'tipping_transitions',
  'memory_hysteresis',
  'information_processing',
  'adaptive_capacity',
  'variation_selection',
  'emergence',
  'self_organization',
  'robustness_resilience',
  'cascade_susceptibility',
].filter((c) => c !== 'variation_selection'); // categorical, not scored 0-4 — excluded from the 15

export const RUBRIC_COLUMN_LABELS = {
  modularity: 'Modularity',
  decentralization: 'Decentralization',
  nonlinearity: 'Nonlinearity',
  feedback: 'Feedback',
  openness_dissipation: 'Openness / dissipation',
  chaos_sensitivity: 'Chaos sensitivity',
  criticality: 'Criticality',
  tipping_transitions: 'Tipping transitions',
  memory_hysteresis: 'Memory / hysteresis',
  information_processing: 'Information processing',
  adaptive_capacity: 'Adaptive capacity',
  emergence: 'Emergence',
  self_organization: 'Self-organization',
  robustness_resilience: 'Robustness / resilience',
  cascade_susceptibility: 'Cascade susceptibility',
};

// All attribute columns in panel-spec order (Group A-F), used to drive
// the evidence-layer table on the system profile page.
export const ALL_COLUMNS = [
  // A
  'spatial_extent',
  'characteristic_timescales',
  'numerosity',
  'instance_population',
  'component_ontology',
  'energy_rate_density',
  // B
  'interaction_topology',
  'interaction_ontology',
  'degree_distribution',
  'modularity',
  'hierarchy_depth',
  'fractal_dimension_spatial',
  'decentralization',
  // C
  'nonlinearity',
  'feedback',
  'openness_dissipation',
  'chaos_sensitivity',
  'criticality',
  'extreme_event_statistics',
  'temporal_correlation',
  'tipping_transitions',
  // D
  'memory_hysteresis',
  'information_processing',
  // E
  'adaptive_capacity',
  'variation_selection',
  // F
  'emergence',
  'self_organization',
  'robustness_resilience',
  'cascade_susceptibility',
];

const COLUMN_GROUPS = {
  spatial_extent: 'A — Identity & scale',
  characteristic_timescales: 'A — Identity & scale',
  numerosity: 'A — Identity & scale',
  instance_population: 'A — Identity & scale',
  component_ontology: 'A — Identity & scale',
  energy_rate_density: 'A — Identity & scale',
  interaction_topology: 'B — Structure',
  interaction_ontology: 'B — Structure',
  degree_distribution: 'B — Structure',
  modularity: 'B — Structure',
  hierarchy_depth: 'B — Structure',
  fractal_dimension_spatial: 'B — Structure',
  decentralization: 'B — Structure',
  nonlinearity: 'C — Dynamics',
  feedback: 'C — Dynamics',
  openness_dissipation: 'C — Dynamics',
  chaos_sensitivity: 'C — Dynamics',
  criticality: 'C — Dynamics',
  extreme_event_statistics: 'C — Dynamics',
  temporal_correlation: 'C — Dynamics',
  tipping_transitions: 'C — Dynamics',
  memory_hysteresis: 'D — Information & memory',
  information_processing: 'D — Information & memory',
  adaptive_capacity: 'E — Adaptation',
  variation_selection: 'E — Adaptation',
  emergence: 'F — Emergence & robustness',
  self_organization: 'F — Emergence & robustness',
  robustness_resilience: 'F — Emergence & robustness',
  cascade_susceptibility: 'F — Emergence & robustness',
};

export function columnGroup(id) {
  return COLUMN_GROUPS[id] || '';
}

export function columnLabel(id) {
  return id
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

let _entries = null;

/** Load and cache all class entries from data/classes/*.yaml. */
export function getEntries() {
  if (_entries) return _entries;
  if (!fs.existsSync(CLASSES_DIR)) {
    _entries = [];
    return _entries;
  }
  const files = fs
    .readdirSync(CLASSES_DIR)
    .filter((f) => f.endsWith('.yaml') || f.endsWith('.yml'))
    .sort();
  _entries = files.map((f) => {
    const raw = fs.readFileSync(path.join(CLASSES_DIR, f), 'utf8');
    const doc = yaml.load(raw);
    return doc;
  });
  return _entries;
}

/** Map of id -> entry, for relation-link resolution. */
export function getEntryMap() {
  const map = new Map();
  for (const e of getEntries()) map.set(e.id, e);
  return map;
}

export function getEntry(id) {
  return getEntryMap().get(id) || null;
}

/** Entries grouped by category, in CATEGORY_ORDER, non-empty groups only. */
export function getEntriesByCategory() {
  const entries = getEntries();
  const groups = [];
  for (const cat of CATEGORY_ORDER) {
    const inCat = entries.filter((e) => e.category === cat);
    if (inCat.length > 0) {
      groups.push({ category: cat, label: CATEGORY_LABELS[cat] || cat, entries: inCat });
    }
  }
  return groups;
}

let _analysisLoaded = false;
let _analysis = null;

/**
 * Load analysis/output/analysis.json if present. Returns null when the
 * file does not exist (analysis pipeline hasn't been run yet) — every
 * consumer must handle null gracefully.
 */
export function getAnalysis() {
  if (_analysisLoaded) return _analysis;
  _analysisLoaded = true;
  try {
    if (fs.existsSync(ANALYSIS_PATH)) {
      const raw = fs.readFileSync(ANALYSIS_PATH, 'utf8');
      _analysis = JSON.parse(raw);
    } else {
      _analysis = null;
    }
  } catch (err) {
    console.warn(`[catalog] failed to read analysis.json: ${err.message}`);
    _analysis = null;
  }
  return _analysis;
}

/** First sentence of a summary block (best-effort split on '. '). */
export function firstSentence(summary) {
  if (!summary) return '';
  const text = summary.trim().replace(/\s+/g, ' ');
  const match = text.match(/^.*?[.!?](?=\s|$)/);
  return match ? match[0] : text;
}

// Evidence-status color tokens — kept in sync with global.css custom properties.
export const EVIDENCE_STATUS_COLORS = {
  measured: 'var(--evidence-measured)',
  'measured-untested': 'var(--evidence-measured-untested)',
  'measured-disputed': 'var(--evidence-measured-disputed)',
  derived: 'var(--evidence-derived)',
  qualitative: 'var(--evidence-qualitative)',
  unknown: 'var(--evidence-unknown)',
};

export function evidenceColor(status) {
  return EVIDENCE_STATUS_COLORS[status] || EVIDENCE_STATUS_COLORS.unknown;
}

/**
 * Render a value cell for the evidence table: handles the quantitative /
 * rubric-score / categorical / structured shape variance actually found
 * in the YAML (score, value, timescales list, parts list, types list...).
 */
export function formatAttrValue(attr) {
  if (attr == null) return { text: '—', isEmpty: true };
  if (typeof attr.score === 'number') {
    return { text: `${attr.score}/4`, isEmpty: false };
  }
  if (attr.value !== undefined) {
    const unit = attr.unit ? ` ${attr.unit}` : '';
    return { text: `${attr.value}${unit}`, isEmpty: false };
  }
  if (Array.isArray(attr.timescales)) {
    return {
      text: attr.timescales.map((t) => `${t.name}: ${t.value}`).join('; '),
      isEmpty: false,
    };
  }
  if (Array.isArray(attr.parts)) {
    return {
      text: attr.parts.map((p) => p.name).join(', '),
      isEmpty: false,
    };
  }
  if (Array.isArray(attr.types)) {
    return {
      text: `${attr.type_count ?? attr.types.length} types, ${attr.alphabet_closure ?? ''}`.trim(),
      isEmpty: false,
    };
  }
  return { text: '—', isEmpty: true };
}

/** Resolve an entry's sources block for a list of source keys used by an attribute. */
export function resolveSources(entry, sourceKeys) {
  if (!sourceKeys || !entry.sources) return [];
  return sourceKeys
    .map((key) => (entry.sources[key] ? { key, ...entry.sources[key] } : null))
    .filter(Boolean);
}
