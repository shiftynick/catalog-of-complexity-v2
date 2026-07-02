#!/usr/bin/env node
// ============================================================
// Catalog of Complexity — machine validator for data/classes/*.yaml
// ============================================================
// Validates every class entry against schema/panel-spec.yaml (the frozen
// 30-column spec) and the entry conventions documented in docs/schema.md,
// as those conventions actually appear in the 10 verified pilot entries.
//
// Never modifies data/classes/, schema/, or docs/ — read-only checks.
//
// Usage: node validate.mjs   (from analysis/, or `npm run validate`)
// Exit code: 1 iff any ERROR was emitted across any entry, else 0.
// ============================================================

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const CLASSES_DIR = path.join(REPO_ROOT, "data", "classes");
const PANEL_SPEC_PATH = path.join(REPO_ROOT, "schema", "panel-spec.yaml");

// ------------------------------------------------------------
// Small result-collection helpers
// ------------------------------------------------------------

class EntryReport {
  constructor(entryId) {
    this.entryId = entryId;
    this.lines = []; // {level: ERROR|WARN|INFO, message}
  }
  error(message) {
    this.lines.push({ level: "ERROR", message });
  }
  warn(message) {
    this.lines.push({ level: "WARN", message });
  }
  info(message) {
    this.lines.push({ level: "INFO", message });
  }
  get counts() {
    const c = { ERROR: 0, WARN: 0, INFO: 0 };
    for (const l of this.lines) c[l.level]++;
    return c;
  }
}

// ------------------------------------------------------------
// Load panel-spec.yaml programmatically — never hardcode columns/vocab
// ------------------------------------------------------------

function loadPanelSpec() {
  const raw = fs.readFileSync(PANEL_SPEC_PATH, "utf8");
  const spec = yaml.load(raw);
  const columns = spec.columns; // ordered list of column defs
  const columnIds = columns.map((c) => c.id);
  const columnById = new Map(columns.map((c) => [c.id, c]));
  const categoryVocab = columns.find((c) => c.id === "category")?.vocabulary ?? [];
  const evidenceStatusVocab = spec.meta?.evidence_status ?? [];
  const levelKinds = Object.keys(spec.meta?.level ?? {}); // class-general, exemplar
  const alphabetClosureVocab = ["closed", "constrained", "open"]; // per interaction_ontology column def (inline enum, not a top-level vocabulary list)
  const measurandTypeVocab = ["temporal-event", "static-cross-sectional"]; // per extreme_event_statistics column def
  return {
    spec,
    columns,
    columnIds,
    columnById,
    categoryVocab,
    evidenceStatusVocab,
    levelKinds,
    alphabetClosureVocab,
    measurandTypeVocab,
  };
}

// ------------------------------------------------------------
// Utility
// ------------------------------------------------------------

function isPlainObject(v) {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

// Parse the `level` field of an attribute value into {kind, exemplarName}
// Legal forms (docs/schema.md): "class-general" | "exemplar(<id>)" — exactly,
// with no trailing text. A handful of entries (earthquake-fault-systems) use
// a non-conformant composite like "exemplar(x) / class-general (note)"; we
// still extract the exemplar id for the reference check but report the
// composite form itself as non-conformant (`malformed: true`).
function parseLevel(levelStr) {
  if (typeof levelStr !== "string") return null;
  if (levelStr === "class-general") return { kind: "class-general" };
  const strictMatch = levelStr.match(/^exemplar\(([^)]+)\)$/);
  if (strictMatch) return { kind: "exemplar", name: strictMatch[1] };
  const looseMatch = levelStr.match(/exemplar\(([^)]+)\)/);
  if (looseMatch) return { kind: "exemplar", name: looseMatch[1], malformed: true };
  return null;
}

// Read-status annotation convention observed across all 10 gold entries:
// citations end their string with one of:
//   [primary-read ...]  (or "primary-read" appearing inline, e.g. "... primary-read this session")
//   [snippet-verified ...]
//   [unverified — model knowledge ...]
// This is free text, not a controlled field — so we detect via substring match,
// per the task's instruction to "inspect real entries for the exact convention".
const READ_STATUS_PATTERNS = [
  /primary-read/i,
  /primary-confirmed/i,
  /primary-fetched/i,
  /primary-author-review/i,
  /snippet-verified/i,
  /snippet-only/i,
  /snippet\/abstract-verified/i,
  /snippet-level/i,
  /snippet\s+summary/i,
  /unverified\s*[—-]\s*model knowledge/i,
  /search-summary level/i,
  /read once-removed/i,
  /abstract fetched and read/i,
  /abstract-verified/i,
  /abstract[- ]level/i,
  /not\s+(?:\w+\s+){0,2}(?:fetched|opened|read)/i,
  /(?:site|full text|pdf|paywall\w*)[^.]*(?:blocked|unreachable|unfetchable|403)/i,
  /unreachable/i,
  /unfetchable/i,
];

function hasReadStatus(sourceEntry) {
  if (!sourceEntry) return false;
  const text =
    typeof sourceEntry === "string"
      ? sourceEntry
      : [sourceEntry.citation, sourceEntry.url, sourceEntry.note]
          .filter(Boolean)
          .join(" ");
  return READ_STATUS_PATTERNS.some((re) => re.test(text));
}

// ------------------------------------------------------------
// Per-entry validation
// ------------------------------------------------------------

function validateEntry(filePath, panelSpec, allEntryIds) {
  const filename = path.basename(filePath, ".yaml");
  const report = new EntryReport(filename);
  const raw = fs.readFileSync(filePath, "utf8");
  let entry;
  try {
    entry = yaml.load(raw);
  } catch (e) {
    report.error(`YAML parse error: ${e.message}`);
    return report;
  }
  if (!isPlainObject(entry)) {
    report.error("Entry did not parse to an object.");
    return report;
  }

  // ---- Check 1: id/name/category/status ----
  // NOTE: category is a top-level entry field (entry.category), not
  // attributes.category, even though panel-spec lists it as column A1 —
  // confirmed convention in all 10 gold entries and docs/schema.md's worked
  // example (`category: geophysical` at the top of the file).
  if (entry.id !== filename) {
    report.error(`id '${entry.id}' does not match filename '${filename}.yaml'`);
  }
  if (!entry.name || typeof entry.name !== "string" || !entry.name.trim()) {
    report.error("name is missing or empty");
  }
  if (!entry.category) {
    report.error("category is missing");
  } else if (!panelSpec.categoryVocab.includes(entry.category)) {
    report.error(
      `category '${entry.category}' not in panel-spec vocabulary [${panelSpec.categoryVocab.join(", ")}]`
    );
  }
  const legalStatuses = ["draft", "verified", "published"];
  if (!entry.status) {
    report.error("status is missing");
  } else if (!legalStatuses.includes(entry.status)) {
    report.error(`status '${entry.status}' not in {${legalStatuses.join(", ")}}`);
  }

  // Declared exemplar ids, for level=exemplar(<name>) cross-checking
  const declaredExemplarIds = new Set(
    (Array.isArray(entry.exemplars) ? entry.exemplars : []).map((ex) => ex?.id).filter(Boolean)
  );

  // ---- Check 2: every panel-spec column present ----
  // category lives at entry.category (see Check 1), not attributes.category —
  // skip it here so it is not double-flagged as a missing attributes column.
  const attributes = isPlainObject(entry.attributes) ? entry.attributes : {};
  if (!isPlainObject(entry.attributes)) {
    report.error("attributes block is missing or not an object");
  }
  for (const colId of panelSpec.columnIds) {
    if (colId === "category") continue;
    if (!(colId in attributes)) {
      report.error(`missing panel-spec column: attributes.${colId}`);
    }
  }
  // Columns present in the entry but not in the frozen spec — informational,
  // could be legacy/parking-lot columns.
  for (const key of Object.keys(attributes)) {
    if (!panelSpec.columnIds.includes(key)) {
      report.info(`attributes.${key} is not a panel-spec column (extra/legacy field)`);
    }
  }

  const RUBRIC_KINDS = new Set(["rubric"]);
  const HYBRID_KINDS = new Set(["hybrid"]);

  // Collect valid source keys up front for the citation-resolution check (Check 5)
  const sourceBlock = isPlainObject(entry.sources) ? entry.sources : {};
  const declaredSourceKeys = new Set(Object.keys(sourceBlock));
  const citedSourceKeys = new Set();

  function walkForSourceRefs(value) {
    if (Array.isArray(value)) {
      value.forEach(walkForSourceRefs);
    } else if (isPlainObject(value)) {
      for (const [k, v] of Object.entries(value)) {
        if (k === "sources" && Array.isArray(v)) {
          v.forEach((s) => {
            if (typeof s === "string") citedSourceKeys.add(s);
          });
        } else {
          walkForSourceRefs(v);
        }
      }
    }
  }
  walkForSourceRefs(attributes);

  // ---- Check 3 & 4: per-attribute evidence_status / level / rubric scores / measurand_type ----
  for (const colId of panelSpec.columnIds) {
    if (!(colId in attributes)) continue; // already flagged as missing above
    const colSpec = panelSpec.columnById.get(colId);
    const val = attributes[colId];
    if (!isPlainObject(val)) {
      report.error(`attributes.${colId} is not an object (kind: ${colSpec.kind})`);
      continue;
    }

    // evidence_status requirement, calibrated against all 10 gold entries:
    //  - rubric/hybrid: ALWAYS carry a block-level evidence_status (100% in gold set).
    //  - quantitative: carry a block-level evidence_status UNLESS the value itself
    //    is the legal escape hatch 'unknown' or 'not-applicable'/'not-applicable-*'
    //    (in which case the value string + note carries the epistemic status, and
    //    no gold entry duplicates it as evidence_status too) — this is a
    //    consistent, deliberate convention (cities/financial-markets/stars/
    //    tropical-cyclones/earthquake-fault-systems/power-grids all follow it).
    //  - quantitative columns shaped as a list of sub-items (characteristic_timescales'
    //    `timescales:` list) carry evidence_status PER ITEM instead of at the
    //    block level — every gold entry follows this; do not require a block-level
    //    one when a timescales/items list with per-item evidence_status is present.
    //  - categorical / structured: no gold entry carries a block-level
    //    evidence_status (they use `justification`/`note` instead, or, for
    //    structured columns, per-sub-item annotations) — not required here.
    const valueStr = typeof val.value === "string" ? val.value : undefined;
    const isEscapedQuantitative =
      colSpec.kind === "quantitative" &&
      valueStr !== undefined &&
      (valueStr === "unknown" || /^not-applicable/.test(valueStr));
    const isTimescaleList = colId === "characteristic_timescales" && Array.isArray(val.timescales);
    const evidenceStatusRequired =
      RUBRIC_KINDS.has(colSpec.kind) ||
      HYBRID_KINDS.has(colSpec.kind) ||
      (colSpec.kind === "quantitative" && !isEscapedQuantitative && !isTimescaleList);

    if (evidenceStatusRequired && !("evidence_status" in val)) {
      report.error(`attributes.${colId} missing evidence_status`);
    } else if ("evidence_status" in val) {
      if (!panelSpec.evidenceStatusVocab.includes(val.evidence_status)) {
        report.error(
          `attributes.${colId}.evidence_status '${val.evidence_status}' not in legal set [${panelSpec.evidenceStatusVocab.join(", ")}] (compound/free-text values are not legal — use one enum value)`
        );
      }
    }
    if (isTimescaleList) {
      val.timescales.forEach((row, idx) => {
        if (isPlainObject(row) && "evidence_status" in row && !panelSpec.evidenceStatusVocab.includes(row.evidence_status)) {
          report.error(
            `attributes.characteristic_timescales.timescales[${idx}].evidence_status '${row.evidence_status}' not in legal set [${panelSpec.evidenceStatusVocab.join(", ")}]`
          );
        }
      });
    }

    // level required, and if exemplar(...), name must match a declared exemplar
    if (!("level" in val)) {
      report.error(`attributes.${colId} missing level`);
    } else {
      const parsed = parseLevel(val.level);
      if (!parsed) {
        report.error(
          `attributes.${colId}.level '${val.level}' is neither 'class-general' nor 'exemplar(<name>)'`
        );
      } else {
        if (parsed.malformed) {
          report.error(
            `attributes.${colId}.level '${val.level}' is not the legal 'class-general' | 'exemplar(<id>)' form (composite/free-text level string)`
          );
        }
        if (parsed.kind === "exemplar" && !declaredExemplarIds.has(parsed.name)) {
          report.error(
            `attributes.${colId}.level references exemplar(${parsed.name}) not declared in this entry's exemplars block [${[...declaredExemplarIds].join(", ")}]`
          );
        }
      }
    }

    // Rubric/hybrid scores are integers 0-4 (hybrid columns carry a rubric
    // "score" field alongside optional quantitative evidence, per docs/schema.md
    // and every gold-entry example: modularity, feedback, criticality, etc.)
    if (RUBRIC_KINDS.has(colSpec.kind) || HYBRID_KINDS.has(colSpec.kind)) {
      if ("score" in val) {
        const s = val.score;
        if (!Number.isInteger(s) || s < 0 || s > 4) {
          report.error(
            `attributes.${colId}.score '${s}' is not an integer 0-4 (kind: ${colSpec.kind})`
          );
        }
      } else if (RUBRIC_KINDS.has(colSpec.kind)) {
        // rubric columns must carry a score. (hybrid columns' quantitative
        // half can legitimately stand alone only when the rubric half is
        // truly not applicable, but no gold entry does this — hybrids in
        // practice always carry score too. Flag rubric strictly, hybrid as WARN.)
        report.error(`attributes.${colId} (kind: rubric) missing score`);
      }
    }

    // extreme_event_statistics: measurand_type check (Check 4)
    if (colId === "extreme_event_statistics") {
      const isUnknownValue =
        val.value === "unknown" || val.value === undefined || val.evidence_status === "unknown";
      if (!isUnknownValue) {
        if (!("measurand_type" in val)) {
          report.error(
            `attributes.extreme_event_statistics missing measurand_type (required whenever a value is recorded, per filling_rules)`
          );
        } else if (!panelSpec.measurandTypeVocab.includes(val.measurand_type)) {
          report.error(
            `attributes.extreme_event_statistics.measurand_type '${val.measurand_type}' not in {${panelSpec.measurandTypeVocab.join(", ")}}`
          );
        }
      }
    }
  }

  // ---- Check 7a: component_ontology parts shape ----
  const compOnt = attributes.component_ontology;
  if (isPlainObject(compOnt)) {
    const parts = compOnt.parts;
    if (!Array.isArray(parts) || parts.length === 0) {
      report.error("attributes.component_ontology.parts is missing or empty");
    } else {
      parts.forEach((part, idx) => {
        if (!isPlainObject(part)) {
          report.error(`attributes.component_ontology.parts[${idx}] is not an object`);
          return;
        }
        for (const field of ["name", "count_oom", "interchangeable", "itself_complex"]) {
          if (!(field in part)) {
            report.error(
              `attributes.component_ontology.parts[${idx}] ('${part.name ?? "?"}') missing '${field}'`
            );
          }
        }
        if ("interchangeable" in part) {
          const iv = part.interchangeable;
          if (typeof iv !== "boolean" && iv !== "yes" && iv !== "no") {
            report.warn(
              `attributes.component_ontology.parts[${idx}] interchangeable='${iv}' is not yes/no/boolean`
            );
          }
        }
      });
    }
  }

  // ---- Check 7b: interaction_ontology type_count / alphabet_closure ----
  const interOnt = attributes.interaction_ontology;
  if (isPlainObject(interOnt)) {
    if (!("type_count" in interOnt)) {
      report.error("attributes.interaction_ontology missing type_count");
    } else if (!Number.isInteger(interOnt.type_count)) {
      report.error(
        `attributes.interaction_ontology.type_count '${interOnt.type_count}' is not an integer`
      );
    } else if (Array.isArray(interOnt.types) && interOnt.type_count !== interOnt.types.length) {
      report.warn(
        `attributes.interaction_ontology.type_count (${interOnt.type_count}) does not match types list length (${interOnt.types.length})`
      );
    }
    if (!("alphabet_closure" in interOnt)) {
      report.error("attributes.interaction_ontology missing alphabet_closure");
    } else if (!panelSpec.alphabetClosureVocab.includes(interOnt.alphabet_closure)) {
      report.error(
        `attributes.interaction_ontology.alphabet_closure '${interOnt.alphabet_closure}' not in {${panelSpec.alphabetClosureVocab.join(", ")}}`
      );
    }
  }

  // ---- Check 5: source citation resolution + read-status annotation ----
  for (const key of citedSourceKeys) {
    if (!declaredSourceKeys.has(key)) {
      report.error(`source key '${key}' is cited in attributes but not declared in sources:`);
    }
  }
  for (const [key, val] of Object.entries(sourceBlock)) {
    if (!hasReadStatus(val)) {
      report.error(
        `sources.${key} has no recognizable read-status annotation (primary-read / snippet-verified / [unverified — model knowledge] or equivalent)`
      );
    }
  }
  // sources declared but never cited anywhere in attributes — informational only
  for (const key of declaredSourceKeys) {
    if (!citedSourceKeys.has(key)) {
      report.info(`sources.${key} is declared but not cited from any attributes.*.sources list`);
    }
  }

  // ---- Check 6: relations reciprocity ----
  const relations = isPlainObject(entry.relations) ? entry.relations : {};
  const partOf = Array.isArray(relations.part_of) ? relations.part_of : [];
  const contains = Array.isArray(relations.contains) ? relations.contains : [];

  for (const targetId of partOf) {
    if (!allEntryIds.has(targetId)) {
      report.info(`relations.part_of -> '${targetId}' has no catalog entry yet (roster expansion queue)`);
      continue;
    }
    const targetEntry = loadEntryRelationsOnly(targetId, panelSpec);
    if (!targetEntry) continue;
    const targetContains = Array.isArray(targetEntry.relations?.contains)
      ? targetEntry.relations.contains
      : [];
    if (!targetContains.includes(entry.id)) {
      report.error(
        `relations.part_of -> '${targetId}' is not reciprocated: ${targetId}.yaml's relations.contains does not list '${entry.id}'`
      );
    }
  }
  for (const targetId of contains) {
    if (!allEntryIds.has(targetId)) {
      report.info(`relations.contains -> '${targetId}' has no catalog entry yet (roster expansion queue)`);
      continue;
    }
    const targetEntry = loadEntryRelationsOnly(targetId, panelSpec);
    if (!targetEntry) continue;
    const targetPartOf = Array.isArray(targetEntry.relations?.part_of)
      ? targetEntry.relations.part_of
      : [];
    if (!targetPartOf.includes(entry.id)) {
      report.error(
        `relations.contains -> '${targetId}' is not reciprocated: ${targetId}.yaml's relations.part_of does not list '${entry.id}'`
      );
    }
  }

  return report;
}

// Cache entries so the O(n^2) reciprocity check doesn't re-read/parse files repeatedly
const entryCache = new Map();
function loadEntryRelationsOnly(id) {
  if (entryCache.has(id)) return entryCache.get(id);
  const p = path.join(CLASSES_DIR, `${id}.yaml`);
  if (!fs.existsSync(p)) {
    entryCache.set(id, null);
    return null;
  }
  const parsed = yaml.load(fs.readFileSync(p, "utf8"));
  entryCache.set(id, parsed);
  return parsed;
}

// ------------------------------------------------------------
// Main
// ------------------------------------------------------------

function main() {
  const panelSpec = loadPanelSpec();
  const files = fs
    .readdirSync(CLASSES_DIR)
    .filter((f) => f.endsWith(".yaml"))
    .sort();
  const allEntryIds = new Set(files.map((f) => path.basename(f, ".yaml")));

  const reports = [];
  for (const f of files) {
    reports.push(validateEntry(path.join(CLASSES_DIR, f), panelSpec, allEntryIds));
  }

  let totalErrors = 0,
    totalWarns = 0,
    totalInfos = 0;

  console.log(`Catalog of Complexity — validator (${panelSpec.columnIds.length} panel-spec columns, ${files.length} entries)\n`);

  for (const report of reports) {
    const c = report.counts;
    totalErrors += c.ERROR;
    totalWarns += c.WARN;
    totalInfos += c.INFO;
    const statusTag = c.ERROR > 0 ? "FAIL" : "PASS";
    console.log(`== ${report.entryId} — ${statusTag} (${c.ERROR} error, ${c.WARN} warn, ${c.INFO} info) ==`);
    for (const line of report.lines) {
      console.log(`  [${line.level}] ${line.message}`);
    }
    if (report.lines.length === 0) {
      console.log("  (clean)");
    }
    console.log("");
  }

  console.log("============================================================");
  console.log(
    `SUMMARY: ${files.length} entries — ${totalErrors} error(s), ${totalWarns} warning(s), ${totalInfos} info line(s)`
  );
  console.log("============================================================");

  process.exit(totalErrors > 0 ? 1 : 0);
}

main();
