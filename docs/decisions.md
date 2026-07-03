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
- **Phi_m mass-normalization convention for field/continuum systems** *(added 2026-07-02, v0.2 cross-entry audit)*: planetary-climate first surfaced the problem (atmosphere-mass-normalized ~233 vs whole-planet ~2e-4 erg/s/g — a million-fold spread); weather-systems correctly reused the atmosphere-mass convention, but its figure and tropical-cyclones' per-storm-circulation-mass figure are disclosed as not apples-to-apples. Standing question: does energy_rate_density need a declared catalog-wide denominator convention (analogous to atomicity-convention), or is honest per-entry disclosure enough? Adopt only if a future batch actually produces an incommensurability a reader would be misled by. *Affirmed by Nick at the v0.2 decision review (2026-07-02): stays parked, disclosure is enough; batch 2's turbulent-flows entry is the next real test.*
Rejected outright: cross-system "analogous_to" links (analysis output, not catalog input — belongs in Phase 5); entry-level "instrumentation quality" (meta-knowledge, already carried per-value by evidence_status); "human-dependence" (derivable from component_ontology's out-of-scope(human) markers — a derived view, not a column).

## D15 — Schema v1.0 freeze + stack confirmation (2026-07-02, Phase 5)
Panel spec frozen at v1.0 after calibration against all 10 verified pilot entries (dragon #3 honored: schema work ends, production continues). Web stack CONFIRMED by Nick: Astro + D3, static build, deploy Netlify; analysis pipeline in Node (single toolchain, no Python dependency — dragon #1). Analysis outputs (`analysis/output/analysis.json`) are build inputs to the app, never computed client-side.

## D16 — Data license: CC BY 4.0 (2026-07-02, v0.2 close)
Nick's call at the v0.2 decision review: the catalog (data + prose) launches under **CC BY 4.0**. Attribution-only, one license for the whole work, maximizes reuse and citation — the right posture for a definitive reference. Applies at Phase 6; until then the repo stays private and unlicensed-by-default.

## D17 — Phase 6 gate: manual, no automatic trigger (2026-07-02)
Public launch remains a call Nick makes explicitly — no roster-size or milestone gate. Sessions must not deploy to public URLs or do launch prep beyond what's asked. (Reaffirms and sharpens D11's "deferred": deferred *indefinitely, until told*.)

## D18 — Expansion batch 2 target: dissociators + the physical-chemical row (2026-07-02)
When the pipeline next runs, the batch is **convection-cells, chemical-oscillators (BZ), turbulent-flows, firms** (+ optionally one more queue giant). Rationale: fills the catalog's one empty category row AND directly stress-tests the two standing hypotheses (the 0.957 info↔adaptivity degeneracy — chemical oscillators are the predicted dissociator; the negative modularity↔self-organization correlation — physical-chemical entries are its designed test). Batch list still gets Nick's sign-off at run time per the batch-1 precedent.

## D19 — Effort budget: none — opportunistic, brief-bounded (2026-07-02)
Nick's call at the v0.2 decision review: no token/time budget or cadence. Each session starts from a written brief; the orchestrator spends what the brief needs; large fan-outs (expansion batches, validation programs) run as visible, interruptible workflows. Scope discipline lives in the briefs, not in caps. (Reference costs recorded for calibration: a 5-entry batch ≈ 5.4M subagent tokens / ~35 min.)

## D20 — The emergence-first lens (2026-07-03, Nick's reframing)
Nick's statement of the governing research question, verbatim in spirit: *"my goal is to understand a large set of complex systems and their emergent properties to see what patterns may fall out... mostly I want to see how large numbers of like things interacting to create new behaviors look across a wide range of systems and find the patterns."* Emergence in the SFI sense (Krakauer/Mitchell, the LLM-emergence discussion): units interacting to produce behaviors **qualitatively different from the units themselves**, requiring a qualitative change in mechanism/organization — not mere improvement with scale.

Consequences:
(a) **Phenomena become first-class analysis objects.** The system-level panel remains the substrate description ("large numbers of like things" = component_ontology; "interacting" = interaction_ontology), but the pattern hunt Nick wants runs over the emergent phenomena themselves — eyewall vs. traffic jam vs. Zipf law — not only over system score vectors.
(b) **Prove-then-formalize (per D8):** a derived phenomena registry is built first (research layer, no schema change); typed per-phenomenon fields (substrate, generating interaction, onset character, novelty kind, effective-theory status) are promoted into the entries' emergent_phenomena blocks by a future D-entry only if the registry proves the taxonomy stable. Dragon #3 honored: the 30-column panel stays frozen.
(c) This largely resolves the "dream headline" open question's direction: the aspirational result is a **periodic table of emergent phenomena** — recurring emergence motifs across substrates — with systems as context.
(d) Roster implication: batch 2 (D18) is confirmed doubly right — convection cells, BZ oscillators, and turbulence are the purest many-like-units cases; queue systems rich in collective phenomena (road-traffic-systems, granular media) rise in priority.

## Open questions (not yet decided)
- The "dream headline" — narrowed at the v0.2 review to four concrete candidates, none yet chosen: (a) the alphabet-closure law as "chemical valence" (zero exceptions at n=15 — the exciting version is finding the exception or predictive power beyond category), (b) PC1 as THE single empirical axis of complex systems, (c) info-processing≡adaptivity as an empirical identity (or its rare breakers), (d) composition non-monotonicity (parts out-scoring their wholes). Nick: "these all sound like potential candidates" — keep all four alive; batch 2 (D18) feeds (c) and (b) directly.
