export const meta = {
  name: 'phase4-pilot-entries',
  description: 'Draft and adversarially verify the remaining 8 pilot class entries',
  phases: [
    { title: 'Sweep', detail: 'citable quantitative values per class' },
    { title: 'Draft', detail: 'full 30-column entry per class' },
    { title: 'Verify', detail: '4 adversarial verifiers per entry' },
    { title: 'Cross-audit', detail: 'commensurability audit across all 10 entries' },
  ],
}

const REPO = 'N:\\coc'
const DATE = '2026-07-02'

const CLASSES = [
  {
    id: 'stars', name: 'Stars', category: 'astrophysical',
    exemplars: 'the Sun (primary)',
    relations: "part_of: [galaxies] (unresolved); contains: [convection-cells] — solar granulation IS thermal convection, arguably instances of the Rayleigh-Benard-rooted convection-cells class; decide and justify",
    hints: "Chaisson gives Phi_m = 2 erg/s/g for the Sun DIRECTLY (Chaisson 2011 — primary-read provenance in research/phase1/quantitative-backbone.md; reuse, do not re-research). Sun: mass 2e30 kg, luminosity 3.8e26 W (trivially citable). Solar-flare energy power-law claim (alpha_F ~1.8; see criticality anchor) NEEDS a primary citation — Aschwanden-school SOC literature; record per power-law-rigor. Sunspot-cycle chaos is contested (see chaos_sensitivity anchor — reuse). instance_population: ~1e11 stars in the Milky Way, ~1e22-1e24 observable universe (find citable)."
  },
  {
    id: 'planetary-climate', name: 'Planetary climate', category: 'geophysical',
    exemplars: 'Earth (primary); comparative: Venus, Mars, Titan',
    relations: "part_of: []; contains: [weather-systems (unresolved), tropical-cyclones (RESOLVED — entry exists; ensure reciprocity with its part_of), ocean-circulation (unresolved)]",
    hints: "16 tipping elements (Armstrong McKay et al. 2022, Science 377:eabn7950 — verified Phase 1; reuse). AMOC hysteresis ~0.4 Sv model-derived, evidence_status measured-disputed (memory_hysteresis anchor — reuse). Earth energy flow: ~1.2e17 W absorbed solar (Trenberth-style energy budget — find citable). Check Chaisson's table for a climasphere Phi_m value (~75 erg/s/g from memory — verify against research/phase1/quantitative-backbone.md or primary; mark [unverified] if not confirmed). instance_population: n>=4 with real published climate science (Earth, Venus, Mars, Titan) — D14 explicitly anticipated this; cite comparative planetology sources."
  },
  {
    id: 'earthquake-fault-systems', name: 'Earthquake fault systems', category: 'geophysical',
    exemplars: 'San Andreas Fault (primary)',
    relations: "part_of: [plate-tectonics] (unresolved); contains: []",
    hints: "G-R b-value ~1.0 (Southern San Andreas b=1.03+/-0.12) is currently SNIPPET-LEVEL from Phase 1 — finding a primary regional-seismicity citation is this sweep's top priority. Fault-trace fractal D ~1.1-1.4 (Aviles, Scholz & Boatwright 1987, JGR — snippet-verified; try primary). CRITICAL tension to record per filling rules: CSN 2009 formally REJECTED raw California earthquake sizes as a power law (alpha=1.64, p=0.00, primary-read Phase 1) while G-R b~1 stands in magnitude — different variables, record both, resolve nothing silently. SOC mechanism contested (Watkins 2016 — criticality anchor, reuse its two-claim structure). Slip rate ~30-50 mm/yr. Geller et al. 1997 for prediction impossibility (chaos anchor)."
  },
  {
    id: 'river-networks', name: 'River networks', category: 'geophysical',
    exemplars: 'Mississippi River basin (primary)',
    relations: "part_of: []; contains: []",
    hints: "Horton ratios (bifurcation ~4, length ~2.3), Hack's law exponent ~0.6, network fractal dimension — canonical source: Rodriguez-Iturbe & Rinaldo, 'Fractal River Basins' (1997); find citable values. Mississippi: drainage area ~3.2e6 km^2, mean discharge ~1.7e4 m^3/s (USGS — citable). Old River Control / avulsion threshold already anchored (tipping anchor — reuse). instance_population: count of major river basins from a global hydrology source. Many rubric scores exist as worked anchors for this class — reuse them."
  },
  {
    id: 'cities', name: 'Cities', category: 'socio-economic',
    exemplars: 'New York City (primary); Tokyo (secondary)',
    relations: "part_of: [global-economy] (unresolved); contains: [power-grids (entry being drafted in this same batch — cite as resolved), financial-markets (RESOLVED — entry exists), road-traffic-systems (unresolved), social-networks (unresolved)]",
    hints: "Bettencourt et al. 2007 PNAS scaling exponents were PRIMARY-READ in Phase 1 (research/phase1/quantitative-backbone.md): new patents beta=1.27, gasoline stations beta=0.77, plus others in that report — reuse with that provenance. Zipf for city sizes alpha=2.37 (CSN 2009, primary-read — class-level, note CSN's fit verdict). NYC ~8.3e6 city / ~19-20e6 metro; Tokyo metro ~37e6 (citable UN/census). Urban modularity Q [unverified] in the anchor — try mobility-network community-detection papers. instance_population: UN World Urbanization Prospects (e.g., number of cities >1e6 population). Chaisson's table may carry a society/city Phi_m value — check phase1 report."
  },
  {
    id: 'the-internet', name: 'The Internet', category: 'infrastructure',
    exemplars: 'singleton class — the Internet is its own sole instance',
    relations: "part_of: []; contains: [world-wide-web] (unresolved)",
    hints: "Newman 2003 Table II was PRIMARY-READ in Phase 1: AS-level n=10,697 (2001 snapshot), mean degree z=5.98, path length l=3.31, degree exponent alpha=2.5, clustering C=0.39, assortativity r=-0.189 — reuse with provenance, DATE-STAMP as a 2001 snapshot. IMPORTANT counterweight per power-law-rigor: Broido & Clauset 2019 'Scale-free networks are rare' (Nature Communications) contests scale-free claims — find and record; degree_distribution should be measured-disputed or measured-untested accordingly. Current AS count ~75-80k (CAIDA/RIPE — find citable). Traffic self-similarity: Leland, Taqqu, Willinger & Wilson 1994 (the classic) for temporal_correlation. The Internet-cascade-size literature gap is already documented (SYNTHESIS.md) — cascade anchor score 1 stands. instance_population: n=1, and say what that forbids epistemically."
  },
  {
    id: 'power-grids', name: 'Power grids', category: 'infrastructure',
    exemplars: 'ERCOT / Texas Interconnection (primary)',
    relations: "part_of: []; contains: []",
    hints: "Newman 2003 Western US grid PRIMARY-READ Phase 1: n=4,941 nodes, EXPONENTIAL degree distribution (not scale-free — anti-folklore datum), path length l=18.99 — reuse with provenance. Dobson et al. 2007 blackout size distribution: measured-disputed (cascade anchor — reuse). ERCOT scale: record peak demand ~85.5 GW (Aug 2023), transmission miles ~52,000+, generation units ~1,250 — find citable ERCOT fast facts. DEFERRED FLAG from tipping_transitions anchor: ERCOT saddle-node voltage-collapse bifurcation is textbook power-systems dynamics but needed a dedicated citation — attempt it now (power-systems stability literature); if found, tipping score may justify 2. instance_population: 3 major North American interconnections; worldwide count if citable."
  },
  {
    id: 'languages', name: 'Languages', category: 'cultural-informational',
    exemplars: 'English (primary)',
    relations: "part_of: [cultures] (unresolved); contains: []",
    hints: "Shannon entropy rate ~1.3 bits/char for English (Shannon 1951; replicated at scale by Bentz et al. 2019, Entropy 21(12):1201 — see research/phase1/formal-measures.md provenance). Zipf word-frequency alpha=1.95 — CSN 2009 PRIMARY-READ, and famously the ONLY clean statistical power law in their 24-dataset study: evidence_status measured (CSN-grade!), a rare full-rigor tail value — say so. instance_population: ~7,000 living languages (Ethnologue — cite edition/year). English speakers ~1.5e9 including L2 (citable). Note for the parked lineage column: language phylogenies are real (do NOT add the column; mention in narrative only). Many rubric scores exist as worked anchors for this class — reuse."
  },
]

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

const COMMON = 'Repo: ' + REPO + '. Project: the Catalog of Complexity — a definitive reference of canonical non-biological complex systems. HARD RULES: never fabricate a value, citation, DOI, or page; mark model-knowledge claims [unverified]; distinguish primary-read vs snippet-verified in every citation annotation; unknown is always a legal value and is never guessed around. If WebSearch/WebFetch tools are not immediately available, load them via ToolSearch first.'

function sweepPrompt(c) {
  return COMMON + '\n\nYou are the QUANTITATIVE SOURCE SWEEP for the class entry "' + c.id + '" (' + c.name + '; category ' + c.category + '; exemplars: ' + c.exemplars + ').\n\nRecover CITABLE values for the panel\'s quantitative columns (read ' + REPO + '\\schema\\panel-spec.yaml first for the full column list and filling rules): spatial_extent, characteristic_timescales, numerosity/component counts, instance_population, energy_rate_density inputs (power in W and mass in kg — note whether a Phi_m value or derivation is possible), fractal_dimension_spatial, extreme_event_statistics (tail exponents WITH fit-rigor status per the power-law-rigor rule), temporal_correlation, degree_distribution (network systems only), tipping elements, cascade statistics, chaos/Lyapunov or predictability figures. Also collect 3-5 canonical review sources for the entry source list.\n\nCLASS-SPECIFIC PRIORITIES AND KNOWN PROVENANCE (use these; do not re-research what Phase 1 already primary-read):\n' + c.hints + '\n\nWrite your FULL report with complete citations to ' + REPO + '\\research\\phase4\\' + c.id + '-sources.md (Write tool; touch no other file). Final message (max 400 words, no preamble): table — quantity | value | unit | source | primary-read-or-snippet — then your 3 biggest uncertainties.'
}

function draftPrompt(c, sweepSummary) {
  return COMMON + '\n\nYou are the ENTRY DRAFTER for the class "' + c.id + '". Write the complete catalog entry to ' + REPO + '\\data\\classes\\' + c.id + '.yaml (Write tool; touch no other file).\n\nREAD FIRST, in this order:\n1. ' + REPO + '\\schema\\panel-spec.yaml — all 30 columns, value kinds, evidence_status vocabulary (incl. measured-untested), and the binding filling_rules.\n2. The two VERIFIED gold examples: ' + REPO + '\\data\\classes\\tropical-cyclones.yaml and financial-markets.yaml — match their structure, field names, and tone exactly.\n3. ALL 15 anchor files in ' + REPO + '\\schema\\anchors\\ — your class appears as a worked anchor in many of them: REUSE those scores and justifications (adapted, with "Per this class\'s own anchor (<file>)" attribution, as the gold examples do). For columns where your class is NOT anchored, score against the scale text with a tight 2-5 sentence justification and cite the closest worked anchor as comparator.\n4. Your sweep report: ' + REPO + '\\research\\phase4\\' + c.id + '-sources.md.\n\nSweep summary from the orchestration pipeline:\n' + sweepSummary + '\n\nENTRY REQUIREMENTS (all mandatory): id/name/category; status: draft; exemplars block (' + c.exemplars + '); scoping_note that DECLARES the atomicity choice per filling_rules.atomicity-convention; summary in the science-museum voice of the gold examples; relations block — ' + c.relations + '; component_ontology (parts with count_oom, interchangeable, itself_complex — use out-of-scope(human) for human components); interaction_ontology (typed list, type_count, alphabet_closure: closed|constrained|open per the interaction-typing rule); ALL 30 panel columns each with type, level (class-general or exemplar(<id>)), evidence_status, confidence where valued, and measurand named for signal-relative quantities; emergent_phenomena list with order parameters; sources block with read-status annotations on every citation; provenance block with drafted_by: workflow-agent (' + DATE + '), verification: all four checks pending, and an honest flags list of YOUR OWN top uncertainties.\n\nFinal message (max 350 words, no preamble): the rubric score list (column: score), the 3 most notable quantitative values, and your top 3 uncertainties.'
}

const VERIFIERS = [
  { key: 'citation', brief: 'CITATION CHECKER — adversarial: assume every citation wrong until the source supports the claim. Web-verify the load-bearing cited values in the entry (prioritize quantitative columns and any value marked primary-read). A search snippet alone is never a PASS: verdicts are PASS (source read, states claim) / PARTIAL (approximately right, give exact discrepancy) / UNVERIFIABLE (unreachable) / FAIL (source contradicts or does not contain the claim). Every FAIL is severity blocker; PARTIAL is fix.' },
  { key: 'plausibility', brief: 'PLAUSIBILITY CHECKER — adversarial: hunt arithmetic errors, unit errors, order-of-magnitude contradictions, and internal inconsistencies. Re-derive every derivable number (Phi_m divisions, counts, unit conversions), check timescale nesting, check hierarchy_depth convention against component_ontology (no double-counting a component as both part and level), check evidence_status/confidence combinations obey panel-spec (measured requires a source; derived requires a method; power-law tails without CSN-grade support must be measured-untested). Mostly reasoning; web only for cheap sanity checks.' },
  { key: 'consistency', brief: 'CONSISTENCY CHECKER — the commensurability enforcer: audit every rubric/hybrid score against the anchor library (N:\\coc\\schema\\anchors\\*.yaml). Where the class is itself a worked anchor, score and justification must match the anchor exactly (no drift either direction). Where it is not anchored, test the score against the scale text and neighboring worked anchors — flag anything that would not survive a side-by-side reading. Also audit all six filling rules (power-law-rigor, soc-two-claims, no-market-chaos, measurand-required, atomicity-convention, interaction-typing) and every level tag. Compare against the two verified entries (tropical-cyclones, financial-markets) for cross-entry coherence.' },
  { key: 'coverage', brief: 'COVERAGE CHECKER — adversarial: assume the entry is incomplete. Count all 30 panel-spec columns against the entry (missing-entirely vs present-but-unknown — only the former is a defect). Check every structural block required by docs/schema.md (exemplars, scoping_note, summary, relations, component_ontology, interaction_ontology, emergent_phenomena, sources, provenance). Check the sweep report (research/phase4/<id>-sources.md) for recovered-but-never-integrated orphan values. Check relations ids against docs/roster.md and existing entries in data/classes/ (reciprocity where both entries exist). For each unknown, judge fillable-from-literature (name the candidate source) vs genuinely unmeasured.' },
]

function verifyPrompt(v, c) {
  return COMMON + '\n\nYou are the ' + v.brief + '\n\nTarget entry: ' + REPO + '\\data\\classes\\' + c.id + '.yaml. Reference documents: ' + REPO + '\\schema\\panel-spec.yaml, ' + REPO + '\\schema\\anchors\\ (15 files), ' + REPO + '\\docs\\schema.md, ' + REPO + '\\docs\\roster.md, and the sweep report ' + REPO + '\\research\\phase4\\' + c.id + '-sources.md.\n\nDo NOT edit the entry or any reference file. Write your full check log to ' + REPO + '\\research\\phase4\\verification\\' + c.id + '-' + v.key + '.md (Write tool).\n\nReturn your findings as structured output: check="' + v.key + '", entry="' + c.id + '", flags=[{column, severity: blocker|fix|note, finding, suggested_fix}], summary=one paragraph. Severity discipline: blocker = would poison the catalog if published (wrong/fabricated/miscited value, anchor contradiction); fix = should be corrected before verified status; note = worth recording, not blocking.'
}

// ---- Pipeline: each class flows sweep -> draft -> 4-way verify independently ----
const perClass = await pipeline(
  CLASSES,
  (c) => agent(sweepPrompt(c), { label: 'sweep:' + c.id, phase: 'Sweep', model: 'sonnet', agentType: 'general-purpose' }),
  (sweepSummary, c) => agent(draftPrompt(c, sweepSummary || '(sweep summary unavailable — rely on the sweep report file)'), { label: 'draft:' + c.id, phase: 'Draft', model: 'sonnet', agentType: 'general-purpose' }),
  (draftSummary, c) =>
    parallel(VERIFIERS.map((v) => () =>
      agent(verifyPrompt(v, c), { label: v.key + ':' + c.id, phase: 'Verify', model: 'sonnet', agentType: 'general-purpose', schema: FLAGS })
    )).then((reports) => ({
      id: c.id,
      draftSummary: draftSummary,
      verifierReports: reports.filter(Boolean),
    }))
)

const completed = perClass.filter(Boolean)
log('Per-class pipeline done: ' + completed.length + '/8 classes through sweep+draft+verify')

// ---- Barrier: cross-entry audit needs ALL entries to exist ----
phase('Cross-audit')
const crossAudit = await agent(
  COMMON + '\n\nYou are the CROSS-ENTRY COMMENSURABILITY AUDITOR. All 10 pilot entries now exist in ' + REPO + '\\data\\classes\\ (8 new drafts + 2 verified: tropical-cyclones, financial-markets). Read ALL of them, plus ' + REPO + '\\schema\\panel-spec.yaml and the anchor scales in ' + REPO + '\\schema\\anchors\\.\n\nTasks: (1) Build the full rubric score matrix (10 entries x all rubric/hybrid columns) and include it in your log. (2) Hunt ORDERING VIOLATIONS: for each column, does the ranking of the 10 entries survive a side-by-side reading of their justifications against the anchor scale (e.g., if X outscores Y on decentralization, do the justifications actually support that order)? (3) Check expected polar relationships hold (physical systems ~0 on adaptive_capacity/information_processing; engineered systems mid-range on decentralization; alphabet_closure gradient closed->constrained->open tracks the physical->engineered->social divide — flag violations AND note genuine surprises, which are data, not errors). (4) Verify the relations graph: every part_of/contains reference between existing entries must be reciprocal; list all unresolved ids as the roster expansion queue. (5) Check no column means different things in different entries (measurand drift, atomicity drift).\n\nDo NOT edit any file except your log: write it to ' + REPO + '\\research\\phase4\\verification\\cross-entry-audit.md.\n\nReturn structured output: check="cross-audit", entry="ALL", flags=[{column, severity, finding, suggested_fix}], summary. Include in your summary the 3 most interesting cross-system observations in the score matrix — the first glimpse of the periodic table.',
  { label: 'cross-entry-audit', phase: 'Cross-audit', model: 'sonnet', agentType: 'general-purpose', schema: FLAGS }
)

return {
  classes: completed.map((r) => ({
    id: r.id,
    flagCounts: r.verifierReports.map((rep) => ({ check: rep.check, blockers: rep.flags.filter((f) => f.severity === 'blocker').length, fixes: rep.flags.filter((f) => f.severity === 'fix').length, notes: rep.flags.filter((f) => f.severity === 'note').length })),
    allFlags: r.verifierReports.flatMap((rep) => rep.flags.map((f) => Object.assign({ check: rep.check }, f))),
    draftSummary: r.draftSummary,
  })),
  crossAudit: crossAudit,
}