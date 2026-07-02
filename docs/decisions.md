# Decision Log

Locked 2026-07-01 during the founding objectives session. Changing one of these requires a deliberate revisit, not drift.

## D1 — Entry unit: both, hierarchical *(SUPERSEDED by D14)*
Original decision: classes as "elements" with specific instances beneath as measured exemplars. Revised 2026-07-01 — see D14.

## D2 — Scope line: exclude only living matter
Physical/chemical/geological/astrophysical systems AND human socio-technical systems (economies, cities, the Internet, languages) are all in scope. Excluded: systems whose components are organisms or tissue (cells, ecosystems, brains, immune systems). *Rationale: socio-technical systems are the best-documented complex systems in existence; excluding them would gut the catalog.*

## D3 — Success criterion: the definitive reference
The most comprehensive, well-sourced structured catalog of complex systems anywhere. Cross-system insight is the hoped-for bonus, not the bar. *Consequence: provenance, coverage, and schema stability are first-class concerns.*

## D4 — Data sourcing: hybrid
Quantitative values harvested from literature where they exist (every value cited); rubric-scored attributes (ordinal scale + written justification + confidence) where no established measurement exists. The two are structurally and visually flagged apart.

## D5 — Audience: both, layered
Educated-curious readers get the accessible layer (narrative, visual comparisons); researchers drill into per-value citations, rubric justifications, and data exports.

## D6 — V1 scope: pilot 10, then scale
~10 maximally diverse canonical classes run through the FULL process (schema, agents, metrics, app prototype). What breaks redesigns the schema before scaling. See [roster.md](roster.md).

## D7 — Metric set: literature-grounded+
Phase 1 is itself a research task: survey established complexity measures and frameworks, derive the panel from them, extend with our own attributes only where the literature is silent. Every column must be defensible. See [metrics.md](metrics.md).

## D8 — Pipeline genesis: prove-then-automate
2–3 pilot entries are researched interactively first, producing a battle-tested playbook. Only then is the playbook encoded as a repeatable multi-agent workflow run from Claude Code. Standalone automation only if scaling demands it.

## D9 — Data store: git flat files
One structured file (YAML) per class and per instance — values, citations, justifications, confidence inline. Git gives history, diff-able review of every agent-proposed change, and the app builds from the files. A derived database only if querying later demands it.

## D10 — Quality gate: agents verify, human reviews flags
Adversarial verifier agents (citation check, plausibility check, cross-entry consistency check, coverage check) are the gate. Only flagged items require Nick's review. *Note: during the pilot, rubric anchors must be calibrated carefully since the verifiers haven't been benchmarked against human judgment yet — the consistency checker compares every score against worked anchor examples.*

## D11 — Publicness: private → public at pilot
Work privately until the 10 pilot classes are genuinely polished, then launch repo + site together as a credible v0.1 and grow in the open.

## D12 — Post-mortem of previous attempts (the three dragons)
1. **Overengineered, inefficient agent pipeline** → D8, and: no infrastructure before entries demand it.
2. **Obscure over canonical** → fame-ordered locked roster; a system enters only if it is canonical in the complexity literature or instantly recognizable to lay readers.
3. **Taxonomy rabbit hole** → schema work is time-boxed (Phase 2), frozen at v0.1 (Phase 5); after that only entry production can motivate changes.

## D13 — Compositional graph + component/interaction ontology (added 2026-07-01, Phase 2)
Prompted by Nick during Phase 2. Three additions:
(a) **Relations block per entry** (`part_of` / `contains`): the catalog becomes a navigable compositional graph — Morowitz's ladder made explicit. Unresolved references are legal and form the roster expansion queue, still fame-gated per dragon #2 before promotion. This gives "expand from the giants" a principled mechanism: growth follows compositional adjacency, not curiosity drift.
(b) **`component_ontology` column** (structured, core; supersedes `component_diversity`): each system's atomic parts per the atomicity convention (atoms = lowest level at which characteristic dynamics operate — traders not neurons, air parcels not molecules), with part types marked interchangeable-or-not and itself-complex-or-not; living components marked out-of-scope(human) per D2 rather than linked.
(c) **`interaction_ontology` column** (structured, core): the interaction types available between atomic parts, with `type_count` and `alphabet_closure: closed | constrained | open`. The closure gradient is the catalog's nearest analogue to chemical valence and a candidate flagship axis; Phase 5 analysis hypothesis: closure correlates with adaptive_capacity, and the outliers are the discoveries.

Panel is now 29 columns (21 core, 8 extended); spec bumped to v0.3-draft.

## D14 — Classes only; instances demoted to exemplar evidence (2026-07-01, revises D1)
Nick's call at Phase 2 close: catalog entries are CLASSES ("tropical cyclones"), not instances ("Katrina"). Rationale, supported by Phase 1 evidence:
1. Values and anchor justifications kept attaching at class level in practice (potential-intensity theory is about tropical cyclones; Bettencourt exponents exist only as fits ACROSS cities).
2. The periodic-table comparison is between kinds, like elements — not between one storm and one stock exchange.
3. Class framing opens comparative data instance framing forecloses: "planetary-climate" admits Venus, Mars, Titan; "Earth's climate" was an n=1 entry by construction.
4. Instance entries multiply the catalog without adding information (a Katrina panel would be ~80% identical to the class panel).

Mechanism preserving D1's original intent (concrete, citable measurement): every class designates named **exemplars** (Katrina, the Sun, the NYSE, English) that carry evidence inside the class entry — values record `level: class-general` or `level: exemplar(<name>)` via the existing level+measurand machinery. Exemplars remain the app's narrative anchors within class pages.
Consciously deferred: within-class variance as a first-class object (NYC-vs-Tokyo scaling residuals). Classes-only is forward-compatible with instance sub-records if that later becomes a research focus.
Singleton classes (the-internet; historically-unique systems) are legal; the parked `instance_population` attribute records n and governs which class-statistical claims are epistemically possible.

## Schema parking lot (ideas noted, deliberately NOT adopted pre-pilot)
Candidates surfaced during D13 ideation. Rule: any of these gets adopted only if Phase 3 entry production actually demands it — dragon #3 says schema changes are earned by entries failing, not by ideation succeeding.
- **`genesis`** (categorical: spontaneous | grown | designed): historical origin as fact, crisper than the self_organization rubric blurs it. Cheap; partially redundant with self_organization anchors.
- **`instance_population` + `lineage`** (class-level): how many instances exist and whether instances form lineages (languages famously do — phylogenetic trees; storms don't). → ***instance_population ADOPTED 2026-07-01 during Phase 3*** — the first earned pull from the lot, exactly as predicted: the tropical-cyclones sweep returned ~85 storms/yr climatology with no column to hold it (panel-spec v0.3, group A, extended — panel now 30 columns: 21 core, 9 extended). *lineage remains parked.*
- **`boundary_type`** (categorical: physical-gradient | interface | institutional | analyst-drawn): how crisp/real the system boundary is. Currently prose in the scoping note; may be fine there permanently.
- **Interaction-ontology sub-fields** (coupling strength, symmetry, medium): let the structured block grow fields during the pilot if entries need them; do not pre-specify.
- **Phi_m mass-normalization convention for field/continuum systems** *(added 2026-07-02, v0.2 cross-entry audit)*: planetary-climate first surfaced the problem (atmosphere-mass-normalized ~233 vs whole-planet ~2e-4 erg/s/g — a million-fold spread); weather-systems correctly reused the atmosphere-mass convention, but its figure and tropical-cyclones' per-storm-circulation-mass figure are disclosed as not apples-to-apples. Standing question: does energy_rate_density need a declared catalog-wide denominator convention (analogous to atomicity-convention), or is honest per-entry disclosure enough? Adopt only if a future batch actually produces an incommensurability a reader would be misled by.
Rejected outright: cross-system "analogous_to" links (analysis output, not catalog input — belongs in Phase 5); entry-level "instrumentation quality" (meta-knowledge, already carried per-value by evidence_status); "human-dependence" (derivable from component_ontology's out-of-scope(human) markers — a derived view, not a column).

## D15 — Schema v1.0 freeze + stack confirmation (2026-07-02, Phase 5)
Panel spec frozen at v1.0 after calibration against all 10 verified pilot entries (dragon #3 honored: schema work ends, production continues). Web stack CONFIRMED by Nick: Astro + D3, static build, deploy Netlify; analysis pipeline in Node (single toolchain, no Python dependency — dragon #1). Analysis outputs (`analysis/output/analysis.json`) are build inputs to the app, never computed client-side.

## Open questions (not yet decided)
- Effort/timeline budget per phase.
- The "dream headline" — which kind of cross-system pattern would be most exciting? (Shapes analysis priorities in Phase 5, doesn't block anything before it.)
- License for the open data at launch (CC BY? ODbL?).
