export const meta = {
  name: 'entry-pipeline',
  description: 'Produce and adversarially verify catalog class entries for a parameterized batch',
  whenToUse: 'Run an expansion batch through sweep -> draft -> 4 verifiers -> fixer -> cross-entry audit. Pass args: {classes: [...], date, researchDir} or {batchFile, date, researchDir}.',
  phases: [
    { title: 'Sweep', detail: 'citable quantitative values per class' },
    { title: 'Draft', detail: 'full 30-column entry per class' },
    { title: 'Verify', detail: '4 adversarial verifiers per entry' },
    { title: 'Fix', detail: 'apply blocker/fix flags + validator conformance per entry' },
    { title: 'Cross-audit', detail: 'commensurability audit across ALL entries' },
  ],
}

// ---- Parameterization (v2, 2026-07-02): batch comes from args, not a hardcoded list ----
// args.classes: [{id, name, category, exemplars, relations, hints}, ...]  (preferred: orchestrator
//   reads the batch data file, e.g. .claude/workflows/batches/batch-1-v0.2.json, and passes classes)
// args.batchFile: repo-relative path to that JSON; used when args.classes is absent (a loader agent
//   reads it, since workflow scripts have no filesystem access).
// args.date: the run date stamped into provenance (required — Date.now is unavailable in workflows).
// args.researchDir: repo-relative dir for sweep reports + verification logs
//   (default 'research\\expansion'; Phase 4 used 'research\\phase4').

const REPO = 'N:\\coc'
const DATE = (args && args.date) || (() => { throw new Error('entry-pipeline: args.date is required') })()
const RESEARCH = (args && args.researchDir) || 'research\\expansion'

const BATCH_SCHEMA = {
  type: 'object',
  properties: {
    classes: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' }, name: { type: 'string' }, category: { type: 'string' },
          exemplars: { type: 'string' }, relations: { type: 'string' }, hints: { type: 'string' },
        },
        required: ['id', 'name', 'category', 'exemplars', 'relations', 'hints'],
      },
    },
  },
  required: ['classes'],
}

let CLASSES = args && args.classes
if (!CLASSES && args && args.batchFile) {
  const loaded = await agent(
    'Read the JSON batch file at ' + REPO + '\\' + args.batchFile + ' and return its "classes" array VERBATIM as structured output — every field exactly as written, no paraphrasing, no additions. Touch no file.',
    { label: 'load-batch', phase: 'Sweep', model: 'haiku', schema: BATCH_SCHEMA }
  )
  CLASSES = loaded && loaded.classes
}
if (!CLASSES || !CLASSES.length) throw new Error('entry-pipeline: no classes — pass args.classes or args.batchFile')
log('entry-pipeline v2: ' + CLASSES.length + ' classes — ' + CLASSES.map((c) => c.id).join(', '))

const FLAGS = {
  type: 'object',
  properties: {
    check: { type: 'string' },
    entry: { type: 'string' },
    flags: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          column: { type: 'string' },
          severity: { type: 'string', enum: ['blocker', 'fix', 'note'] },
          finding: { type: 'string' },
          suggested_fix: { type: 'string' },
        },
        required: ['column', 'severity', 'finding'],
      },
    },
    summary: { type: 'string' },
  },
  required: ['check', 'entry', 'flags', 'summary'],
}

const FIX_RESULT = {
  type: 'object',
  properties: {
    entry: { type: 'string' },
    applied: { type: 'array', items: { type: 'string' } },
    unresolved: { type: 'array', items: { type: 'string' } },
    validator_clean: { type: 'boolean' },
    summary: { type: 'string' },
  },
  required: ['entry', 'applied', 'unresolved', 'validator_clean', 'summary'],
}

const COMMON = 'Repo: ' + REPO + '. Project: the Catalog of Complexity — a definitive reference of canonical non-biological complex systems. HARD RULES: never fabricate a value, citation, DOI, or page; mark model-knowledge claims [unverified]; distinguish primary-read vs snippet-verified in every citation annotation; unknown is always a legal value and is never guessed around. If WebSearch/WebFetch tools are not immediately available, load them via ToolSearch first.'

function sweepPrompt(c) {
  return COMMON + '\n\nYou are the QUANTITATIVE SOURCE SWEEP for the class entry "' + c.id + '" (' + c.name + '; category ' + c.category + '; exemplars: ' + c.exemplars + ').\n\nRecover CITABLE values for the panel\'s quantitative columns (read ' + REPO + '\\schema\\panel-spec.yaml first for the full column list and filling rules): spatial_extent, characteristic_timescales, numerosity/component counts, instance_population, energy_rate_density inputs (power in W and mass in kg — note whether a Phi_m value or derivation is possible), fractal_dimension_spatial, extreme_event_statistics (tail exponents WITH fit-rigor status per the power-law-rigor rule, AND measurand_type: temporal-event vs static-cross-sectional), temporal_correlation, degree_distribution (network systems only), tipping elements, cascade statistics, chaos/Lyapunov or predictability figures. Also collect 3-5 canonical review sources for the entry source list.\n\nCLASS-SPECIFIC PRIORITIES AND KNOWN PROVENANCE (use these; do not re-research what earlier phases already primary-read):\n' + c.hints + '\n\nWrite your FULL report with complete citations to ' + REPO + '\\' + RESEARCH + '\\' + c.id + '-sources.md (Write tool; touch no other file). Final message (max 400 words, no preamble): table — quantity | value | unit | source | primary-read-or-snippet — then your 3 biggest uncertainties.'
}

function draftPrompt(c, sweepSummary) {
  return COMMON + '\n\nYou are the ENTRY DRAFTER for the class "' + c.id + '". Write the complete catalog entry to ' + REPO + '\\data\\classes\\' + c.id + '.yaml (Write tool; touch no other file).\n\nREAD FIRST, in this order:\n1. ' + REPO + '\\schema\\panel-spec.yaml — all 30 columns, value kinds, evidence_status vocabulary (incl. measured-untested), measurand_type on extreme_event_statistics, and the binding filling_rules.\n2. The two VERIFIED gold examples: ' + REPO + '\\data\\classes\\tropical-cyclones.yaml and financial-markets.yaml — match their structure, field names, and tone exactly.\n3. ALL 15 anchor files in ' + REPO + '\\schema\\anchors\\ — where your class appears as a worked anchor, REUSE those scores and justifications (adapted, with attribution, as the gold examples do). Expansion classes are mostly NOT anchored: score against the scale text with a tight 2-5 sentence justification and cite the closest worked anchor as comparator.\n4. Your sweep report: ' + REPO + '\\' + RESEARCH + '\\' + c.id + '-sources.md.\n\nSweep summary from the orchestration pipeline:\n' + sweepSummary + '\n\nENTRY REQUIREMENTS (all mandatory): id/name/category; status: draft; exemplars block (' + c.exemplars + '); scoping_note that DECLARES the atomicity choice per filling_rules.atomicity-convention; summary in the science-museum voice of the gold examples; relations block — ' + c.relations + ' (reciprocity with existing entries is MANDATORY: if an existing entry references this class, this entry must reciprocate — but do NOT edit the other entry; the fixer stage handles any mismatch you flag); component_ontology (parts with count_oom, interchangeable, itself_complex — use out-of-scope(human) for human components); interaction_ontology (typed list, type_count, alphabet_closure: closed|constrained|open per the interaction-typing rule); ALL 30 panel columns each with type, level (class-general or exemplar(<id>)), evidence_status, confidence where valued, measurand named for signal-relative quantities, and measurand_type on extreme_event_statistics; emergent_phenomena list with order parameters; sources block with read-status annotations on every citation; provenance block with drafted_by: workflow-agent (' + DATE + '), verification: all four checks pending, and an honest flags list of YOUR OWN top uncertainties.\n\nBefore finishing, run the conformance validator: cd ' + REPO + '\\analysis; node validate.mjs — your entry must produce zero ERRORs (other entries\' results are not your concern).\n\nFinal message (max 350 words, no preamble): the rubric score list (column: score), the 3 most notable quantitative values, and your top 3 uncertainties.'
}

const VERIFIERS = [
  { key: 'citation', brief: 'CITATION CHECKER — adversarial: assume every citation wrong until the source supports the claim. Web-verify the load-bearing cited values in the entry (prioritize quantitative columns and any value marked primary-read). A search snippet alone is never a PASS: verdicts are PASS (source read, states claim) / PARTIAL (approximately right, give exact discrepancy) / UNVERIFIABLE (unreachable) / FAIL (source contradicts or does not contain the claim). Every FAIL is severity blocker; PARTIAL is fix.' },
  { key: 'plausibility', brief: 'PLAUSIBILITY CHECKER — adversarial: hunt arithmetic errors, unit errors, order-of-magnitude contradictions, and internal inconsistencies. Re-derive every derivable number (Phi_m divisions, counts, unit conversions), check timescale nesting, check hierarchy_depth convention against component_ontology (no double-counting a component as both part and level), check evidence_status/confidence combinations obey panel-spec (measured requires a source; derived requires a method; power-law tails without CSN-grade support must be measured-untested). Mostly reasoning; web only for cheap sanity checks.' },
  { key: 'consistency', brief: 'CONSISTENCY CHECKER — the commensurability enforcer: audit every rubric/hybrid score against the anchor library (N:\\coc\\schema\\anchors\\*.yaml). Where the class is itself a worked anchor, score and justification must match the anchor exactly (no drift either direction). Where it is not anchored, test the score against the scale text and neighboring worked anchors — flag anything that would not survive a side-by-side reading. Also audit all filling rules (power-law-rigor, soc-two-claims, no-market-chaos, measurand-required, atomicity-convention, interaction-typing) and every level tag. Compare against the verified entries in data\\classes\\ for cross-entry coherence.' },
  { key: 'coverage', brief: 'COVERAGE CHECKER — adversarial: assume the entry is incomplete. Count all 30 panel-spec columns against the entry (missing-entirely vs present-but-unknown — only the former is a defect). Check every structural block required by docs/schema.md (exemplars, scoping_note, summary, relations, component_ontology, interaction_ontology, emergent_phenomena, sources, provenance). Check the sweep report for recovered-but-never-integrated orphan values. Check relations ids against docs/roster.md and existing entries in data/classes/ (reciprocity where both entries exist). For each unknown, judge fillable-from-literature (name the candidate source) vs genuinely unmeasured.' },
]

function verifyPrompt(v, c) {
  return COMMON + '\n\nYou are the ' + v.brief + '\n\nTarget entry: ' + REPO + '\\data\\classes\\' + c.id + '.yaml. Reference documents: ' + REPO + '\\schema\\panel-spec.yaml, ' + REPO + '\\schema\\anchors\\ (15 files), ' + REPO + '\\docs\\schema.md, ' + REPO + '\\docs\\roster.md, and the sweep report ' + REPO + '\\' + RESEARCH + '\\' + c.id + '-sources.md.\n\nDo NOT edit the entry or any reference file. Write your full check log to ' + REPO + '\\' + RESEARCH + '\\verification\\' + c.id + '-' + v.key + '.md (Write tool).\n\nReturn your findings as structured output: check="' + v.key + '", entry="' + c.id + '", flags=[{column, severity: blocker|fix|note, finding, suggested_fix}], summary=one paragraph. Severity discipline: blocker = would poison the catalog if published (wrong/fabricated/miscited value, anchor contradiction); fix = should be corrected before verified status; note = worth recording, not blocking.'
}

// v2: the fixer stage is part of the workflow (Phase 4 ran fixers manually afterward).
function fixPrompt(c, flagsJson) {
  return COMMON + '\n\nYou are the FLAG FIXER for the freshly drafted entry ' + REPO + '\\data\\classes\\' + c.id + '.yaml. Four adversarial verifiers produced these structured flags (JSON):\n\n' + flagsJson + '\n\nAPPLY every blocker- and fix-severity flag whose suggested_fix you can implement without fabricating anything (verifier findings overrule the draft — including anchor-grounded rescores). Rules: provenance blocks (verification, fix_log, flags) are APPEND-ONLY; record every change in a dated fix_log entry (by: "workflow-agent (flag-fixer), ' + DATE + '"), tagged [BLOCKER/<check>] or [FIX/<check>]; anything you cannot fix honestly (needs a source you cannot reach, requires cross-entry or orchestrator judgment, or two flags conflict) goes under unresolved with the reason. note-severity flags: record the useful ones in the entry\'s provenance.flags list, do not act. Re-read ' + REPO + '\\schema\\panel-spec.yaml filling_rules before touching any value.\n\nAfter fixing, run the conformance validator: cd ' + REPO + '\\analysis; node validate.mjs — iterate until YOUR entry has zero ERRORs. Do not edit any other entry; if a reciprocity error implicates an EXISTING entry, report it under unresolved for the orchestrator.\n\nWrite your full fix log to ' + REPO + '\\' + RESEARCH + '\\verification\\' + c.id + '-fixes.md. Return structured output: entry="' + c.id + '", applied=[one line per change], unresolved=[one line per skipped item + reason], validator_clean=true|false, summary=one paragraph.'
}

// ---- Pipeline: each class flows sweep -> draft -> 4-way verify -> fix independently ----
const perClass = await pipeline(
  CLASSES,
  (c) => agent(sweepPrompt(c), { label: 'sweep:' + c.id, phase: 'Sweep', model: 'sonnet', agentType: 'general-purpose' }),
  (sweepSummary, c) => agent(draftPrompt(c, sweepSummary || '(sweep summary unavailable — rely on the sweep report file)'), { label: 'draft:' + c.id, phase: 'Draft', model: 'sonnet', agentType: 'general-purpose' }),
  (draftSummary, c) =>
    parallel(VERIFIERS.map((v) => () =>
      agent(verifyPrompt(v, c), { label: v.key + ':' + c.id, phase: 'Verify', model: 'sonnet', agentType: 'general-purpose', schema: FLAGS })
    )).then((reports) => ({ draftSummary: draftSummary, verifierReports: reports.filter(Boolean) })),
  (acc, c) => {
    const actionable = acc.verifierReports.flatMap((rep) => rep.flags.filter((f) => f.severity !== 'note').map((f) => Object.assign({ check: rep.check }, f)))
    const notes = acc.verifierReports.flatMap((rep) => rep.flags.filter((f) => f.severity === 'note').map((f) => Object.assign({ check: rep.check }, f)))
    if (!actionable.length && !notes.length) {
      return Object.assign({ id: c.id, fixResult: { entry: c.id, applied: [], unresolved: [], validator_clean: true, summary: 'no flags — fixer skipped' } }, acc)
    }
    return agent(fixPrompt(c, JSON.stringify({ actionable: actionable, notes: notes }, null, 2)), { label: 'fix:' + c.id, phase: 'Fix', model: 'sonnet', agentType: 'general-purpose', schema: FIX_RESULT })
      .then((fixResult) => Object.assign({ id: c.id, fixResult: fixResult }, acc))
  }
)

const completed = perClass.filter(Boolean)
log('Per-class pipeline done: ' + completed.length + '/' + CLASSES.length + ' classes through sweep+draft+verify+fix')

// ---- Barrier: cross-entry audit needs ALL entries to exist ----
phase('Cross-audit')
const crossAudit = await agent(
  COMMON + '\n\nYou are the CROSS-ENTRY COMMENSURABILITY AUDITOR. The catalog in ' + REPO + '\\data\\classes\\ now holds the previously verified entries PLUS ' + completed.length + ' new post-fix drafts from this batch (' + completed.map((r) => r.id).join(', ') + '). Read ALL entries, plus ' + REPO + '\\schema\\panel-spec.yaml and the anchor scales in ' + REPO + '\\schema\\anchors\\.\n\nTasks: (1) Build the full rubric score matrix (all entries x all rubric/hybrid columns) and include it in your log. (2) Hunt ORDERING VIOLATIONS: for each column, does the ranking of entries survive a side-by-side reading of their justifications against the anchor scale? (3) Check expected polar relationships hold (physical systems ~0 on adaptive_capacity/information_processing; engineered systems mid-range on decentralization; alphabet_closure gradient closed->constrained->open tracks the physical->engineered->social divide — flag violations AND note genuine surprises, which are data, not errors). (4) Verify the relations graph: every part_of/contains reference between existing entries must be reciprocal; list all unresolved ids as the roster expansion queue. (5) Check no column means different things in different entries (measurand drift, atomicity drift) — pay special attention to NEW-vs-OLD drift: the new batch must be commensurable with the verified pilot, not just internally coherent.\n\nDo NOT edit any file except your log: write it to ' + REPO + '\\' + RESEARCH + '\\verification\\cross-entry-audit.md.\n\nReturn structured output: check="cross-audit", entry="ALL", flags=[{column, severity, finding, suggested_fix}], summary. Include in your summary the 3 most interesting cross-system observations in the score matrix.',
  { label: 'cross-entry-audit', phase: 'Cross-audit', model: 'sonnet', agentType: 'general-purpose', schema: FLAGS }
)

return {
  classes: completed.map((r) => ({
    id: r.id,
    flagCounts: r.verifierReports.map((rep) => ({ check: rep.check, blockers: rep.flags.filter((f) => f.severity === 'blocker').length, fixes: rep.flags.filter((f) => f.severity === 'fix').length, notes: rep.flags.filter((f) => f.severity === 'note').length })),
    fixResult: r.fixResult,
    draftSummary: r.draftSummary,
  })),
  crossAudit: crossAudit,
}
