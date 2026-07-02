# Cross-Entry Commensurability Audit — Pilot 10

**Auditor role:** Cross-Entry Commensurability Auditor
**Scope:** All 10 pilot entries in `data/classes/` (tropical-cyclones, financial-markets — status: verified; stars, planetary-climate, earthquake-fault-systems, river-networks, languages, the-internet, power-grids, cities — status: draft), audited against `schema/panel-spec.yaml` and all 15 files in `schema/anchors/`.
**Method:** Full primary read of all 10 entries and all 15 anchor files (not sampled). No files edited except this log.
**Date:** 2026-07-02

---

## 1. Full rubric/hybrid score matrix (10 x 15)

Scores as recorded in each entry's `attributes.<column>.score` (or `.value` for the two enum-only hybrids). "u" = unknown/not scored.

| Column | tropical-cyclones | financial-markets | stars | planetary-climate | earthquake-fault | river-networks | languages | the-internet | power-grids | cities |
|---|---|---|---|---|---|---|---|---|---|---|
| decentralization | 4 | 2 | 4 | 4 | 4 | 4 | 4 | 3 | 1 | 2 |
| modularity | 1 | 2 | 1 | 1 | 2 | 2 | 1 | 2 | 3 | 2 |
| nonlinearity | 4 | 4 | 3 | 4 | 3 | 2 | 1 | 2 | 3 | 3 |
| feedback | 4 | 3 | 2 | 4 | 1 | 3 | 2 | 2 | 3 | 3 |
| openness_dissipation | 4 | 2 | 4 | 3 | 1 | 3 | 1 | 2 | 2 | 3 |
| chaos_sensitivity | 4 | 1 | 2 | 3 | 2 | 1 | 0 | u | 1 | 1 |
| criticality | 1 | 1 | 2 | 1 | 2 | 0 | 1 | 1 | 2 | 1 |
| tipping_transitions | 2 | 2 | 0 | 4 | 1 | 2 | 2 | 0 | 2 | 1 |
| memory_hysteresis | 1 | 3 | 1 | 4 | 2 | 2 | 4 | 2 | 2 | 3 |
| information_processing | 0 | 4 | 0 | 0 | 1 | 1 | 4 | 3 | 3 | 3 |
| adaptive_capacity | 0 | 4 | 0 | 0 | 0 | 1 | 3 | 2 | 2 | 3 |
| emergence | 3 | 4 | 2 | 3 | 2 | 2 | 3 | 2 | 2 | 3 |
| self_organization | 4 | 2 | 4 | 4 | 3 | 4 | 4 | 2 | 1 | 3 |
| robustness_resilience | 1 (exemplar) | 3 | 4 (exemplar) | 3 (exemplar) | 3 (exemplar) | 3 (exemplar) | 4 (exemplar) | 3 | 2 (exemplar) | 3 (exemplar) |
| cascade_susceptibility | 0 | 2 | 0 | 2 | 2 | 1 | 1 | 1 | 3 | 2 |

Column-total spread (min-max): decentralization 1-4; modularity 1-3; nonlinearity 1-4; feedback 1-4; openness_dissipation 1-4; chaos_sensitivity 0-4; criticality 0-2; tipping_transitions 0-4; memory_hysteresis 1-4; information_processing 0-4; adaptive_capacity 0-4; emergence 2-4; self_organization 1-4; robustness_resilience 1-4; cascade_susceptibility 0-3.

**Note on chaos_sensitivity for the-internet:** recorded `score: unknown` (a legal value per filling_rules.no-guessing), the only rubric/hybrid cell in the matrix left unscored. This is itself worth flagging for the roster: it means 9/10, not 10/10, entries carry a value on this column.

---

## 2. Ordering-violation hunt (per-column, justification-vs-anchor-scale)

Working assumption throughout: an ordering is a *violation* only if the entries' own stated justifications, read side by side against the anchor scale's level text, fail to support the recorded rank order — not merely because two scores are close.

### 2.1 CONFIRMED — cities `criticality` = 1 is not supported by its own justification; should plausibly be 0

`cities.criticality` is scored 1 ("Scored 1, matching the river-networks floor-anchor logic"), but `river-networks.criticality` is scored **0** — so cities cites the floor anchor's reasoning while landing one point above the floor it claims to match. The criticality anchor scale's 0-vs-1 boundary turns specifically on whether *any* informal/claimed heavy-tail or SOC discourse exists for the system's *internal* event dynamics (scale text: 1 = "heavy-tailed... informally observed... OR a rigorous fit exists but rejects the power-law hypothesis"; 0 = neither). Cities' own justification states plainly: "No such internal-event power-law study for NYC or Tokyo specifically was searched for or recovered this sweep" — i.e., a `river-networks`-identical **absence** finding, which the anchor's own 0-anchor (river-networks) treats as 0, not 1. No informal discourse, rejected fit, or proposed mechanism is cited anywhere in the cities justification to earn the extra point. This looks like a genuine transcription slip (writing "1" while reasoning to "0") rather than a documented judgment call.

Contrast with `the-internet.criticality` = 1, which *does* cite a located informal-discourse basis ("informal/claimed-untested heavy-tailedness of outage impact is discussed in engineering literature") — a textually supported 1. Cities lacks the equivalent citation.

**Severity: fix.** Suggested fix: either lower cities' criticality to 0 (matching the stated evidence and the river-networks floor it invokes), or — if the drafter intends to credit something — name the specific informal discourse (e.g., urban fire-size or riot-size sociophysics literature, which the entry itself flags as an unexplored candidate) that would justify 1, and revise the justification to cite it rather than asserting a match to a score it doesn't match.

### 2.2 PLAUSIBLE — tropical-cyclones `criticality` = 1 has the same soft-justification pattern as cities, but is lower-priority (status: verified, already passed consistency_check)

`tropical-cyclones.criticality` = 1, `mechanism_status: none`, justified as "No established scale-invariant event statistics for a storm's INTERNAL dynamics and no proposed SOC mechanism for the vortex itself" — structurally the same "nothing found" finding that earns river-networks a 0, and unlike the-internet's 1, no informal/discussed-but-untested claim is named for storm-internal dynamics specifically. tropical-cyclones is not one of criticality.yaml's six worked anchors, so this was scored by comparator reasoning, and its own consistency_check (2026-07-01) reports "all 15 rubric/hybrid scores match anchors exactly" — but criticality isn't a worked anchor for this entry, so that pass would not have caught a 0-vs-1 boundary question. Given tropical-cyclones is the catalog's flagship verified entry, this is worth a second look, but it is lower urgency than 2.1 because the entry has already been through full verification and the score is at least *consistent in kind* with how the column has been used elsewhere (matching financial-markets' proposed-but-contested framing loosely, even though the specific "none" mechanism_status text is closer to the 0 case).

**Severity: note.** Suggested fix: at the next revision pass, either cite a specific informally-discussed storm-internal heavy-tail/SOC claim, or drop to 0 and note the distinction from the class-level Corral et al. 2010 finding (already correctly kept separate under extreme_event_statistics) even more explicitly.

### 2.3 PLAUSIBLE — `nonlinearity`: river-networks (2) vs earthquake-fault-systems (3) — parallel structure scored a full point apart

Both entries describe an identical structural pattern: a threshold/switch-like nonlinear reorganization event (avulsion; rupture) embedded in an otherwise quasi-linear background regime (steady hydraulic routing; interseismic elastic loading). Earthquake-fault-systems' own anchor (nonlinearity.yaml, its own worked score-3 case) explicitly reasons: "nonlinearity concentrated at rupture initiation/propagation rather than pervasive across the full duty cycle" → still merits **3**. River-networks recomputes essentially the same architecture ("nonlinear terms materially shape an occasional/threshold event... rather than being required to explain the network's modal day-to-day routing behavior") and lands at **2**, one level below the scale's own level-2 text that river-networks' justification most closely paraphrases, while the earthquake-fault case (an admitted close structural twin) sits at level-3. The panel's own anchor scale distinguishes level 2 ("nonlinear terms materially shape secondary or occasional behavior... but modal dynamics still well-approximated by linear models") from level 3 ("central to the system's characteristic behavior... required to reproduce observed phenomenology") — and it is not obvious from the text given that avulsion is any less "required to reproduce observed phenomenology" for a river network's characteristic branching behavior than rupture is for a fault's characteristic magnitude-frequency behavior.

**Severity: note.** This may be a defensible judgment call (avulsion events are rarer relative to the fault's earthquake cycle, and Horton's laws are largely explicable without invoking avulsion at all, whereas G-R scaling requires the nonlinear rupture threshold) — but the entry doesn't make that distinguishing argument explicitly; it currently reads as "we are structurally identical to the level-3 case, therefore we are level 2," which needs a stated reason for the one-point gap.

### 2.4 NOT A VIOLATION (confirmed after inspection) — earthquake-fault `robustness_resilience` = 3 at "exemplar" level vs tropical-cyclones' exemplar-level 1

Initially looked suspicious: robustness_resilience's own does_not_count rule explicitly bars crediting "class-level persistence" ("hurricanes keep forming") as exemplar robustness, and earthquake-fault's justification leans on the SAF *system* persisting across "millions of years and hundreds of documented large ruptures." On inspection this is a defensible, not a violating, use: the SAF *itself* (not "fault systems in general") is the named exemplar, and its characteristic perturbation (an earthquake) is genuinely survived and recovered from by the same named structure — unlike Katrina, whose characteristic perturbation (landfall) ends that storm's existence entirely. The analogy that would violate the rule (treating "fault systems keep occurring" the way "hurricanes keep forming" is barred) is not actually what's being scored. **No fix required**, but recommend the consistency checker keep an eye on this distinction if/when a second fault-system exemplar (e.g., North Anatolian) is added, since the exemplar-vs-class line is genuinely subtle here in a way it isn't for tropical-cyclones.

### 2.5 No other confirmed ordering violations found

Systematically checked and found internally consistent, given each column's anchor-scale text and cited justifications: decentralization (all-4 cluster for physical/continuum systems + graded infra/socio scores 1-3 is well-supported); modularity (power-grids 3 > cities 2 > earthquake-fault/river-networks 2 > tropical-cyclones/stars/languages 1, all traceable to stated structural differences); feedback; openness_dissipation (see §3 for the one deliberate, well-explained nested-system anomaly); tipping_transitions (0/1/2/4 tiers map cleanly onto "no mechanism / informal only / named single mechanism / systematic multi-element inventory"); memory_hysteresis (4/3/2/1 tiers map cleanly onto "quantified loop or unambiguous structural record / documented-but-unpinned / structural-only-no-loop / relaxation-lag-only"); information_processing (engineered-systems convergence at 3 for power-grids/the-internet/cities is explicitly predicted by the anchor's own notes, not an artifact); adaptive_capacity; emergence (financial-markets is deliberately the sole 4, per the anchor file's explicit design note); self_organization; cascade_susceptibility (power-grids is correctly the sole 3, being the only entry with an actual fitted cross-event size distribution rather than a case-count study).

---

## 3. Polar-relationship checks

### 3.1 Physical systems near 0 on adaptive_capacity — HOLDS, cleanly

stars=0, planetary-climate=0, tropical-cyclones=0, earthquake-fault-systems=0 (four clean floor anchors, each independently justified against the "regulation is not adaptation" does_not_count rule). river-networks=1 is *not* a violation — it is the anchor scale's own explicit "structural accommodation counts at most 1" case, correctly applied, not a drift toward CAS territory.

### 3.2 Physical systems near 0 on information_processing — HOLDS, cleanly

stars=0, planetary-climate=0, tropical-cyclones=0 (three canonical-0 floor cases). earthquake-fault-systems=1 and river-networks=1 both correctly land one above the floor via the identical, anchor-sanctioned "threshold trigger without a channel" reasoning (the anchor's own does_not_count text explicitly caps a fixed physical threshold at 1, not 0) — this is the anchor scale working exactly as designed, not an inconsistency.

### 3.3 Engineered systems mid-range on decentralization — PARTIALLY HOLDS; one genuine, informative departure

the-internet=3 and financial-markets=2 sit comfortably mid-range. **power-grids=1** is the outlier: the single most "engineered" entry in the pilot set scores at the *low* end of the scale, not mid-range, because ERCOT's system operator exercises real-time steering authority that the Internet's and NYSE's coordination layers do not. This is not a scoring error — it is exactly what the decentralization anchor file itself predicts (power-grids/ERCOT is literally the anchor's own worked score-1 case) — but it means the "engineered = mid-range" heuristic in the task framing is too coarse: *engineered-with-an-active-real-time-operator* (grids) behaves differently from *engineered-with-only-bookkeeping-coordination* (Internet, and to a lesser extent exchanges). Flagging as a genuine surprise, not an error — see summary.

### 3.4 alphabet_closure gradient closed -> constrained -> open tracks physical -> engineered -> social — HOLDS PERFECTLY across all 10 entries

- **closed:** tropical-cyclones, stars, planetary-climate, earthquake-fault-systems, river-networks (5/5 physical/geophysical/astrophysical entries)
- **constrained:** financial-markets, the-internet, power-grids (3/3 engineered/institutional entries)
- **open:** languages, cities (2/2 social/cultural entries)

No entry breaks this gradient. This is the cleanest, most load-bearing structural finding in the pilot set — see summary for its relationship to adaptive_capacity (§3.5).

### 3.5 Correlation hypothesis (panel-spec's own stated bet): alphabet_closure correlates with adaptive_capacity — HOLDS for the closed tier, BREAKS interestingly at the constrained tier

- closed + adaptive_capacity: tropical-cyclones(0), stars(0), planetary-climate(0), earthquake-fault(0), river-networks(1) — uniformly near-floor, correlation holds tightly.
- constrained + adaptive_capacity: financial-markets(**4**), the-internet(2), power-grids(2) — NOT uniform. financial-markets breaks the pattern: a constrained (rulebook-fixed) interaction alphabet paired with the catalog's *ceiling* adaptive_capacity score, matching or exceeding the two open-alphabet cultural entries (languages=3, cities=3).
- open + adaptive_capacity: languages(3), cities(3) — high but, notably, both *below* financial-markets' 4.

This is precisely the panel-spec's own predicted "interesting" case (panel-spec.yaml, interaction_ontology note: "systems that break the correlation would be the interesting ones") — see summary observation #1.

---

## 4. Relations graph — reciprocity audit

Checked every `part_of` / `contains` pair across all 10 entries for reciprocity (an entry's `contains: [X]` should be matched by X's `part_of` including the containing entry, where X exists in the roster).

### 4.1 CONFIRMED reciprocal (working as designed)

- **tropical-cyclones.part_of ⊇ [planetary-climate]** ↔ **planetary-climate.contains ⊇ [tropical-cyclones]** — both sides present, and planetary-climate's file explicitly annotates the resolution inline ("tropical-cyclones: RESOLVED — entry exists... reciprocated on the child side"). This is the model case; no other pair in the roster achieves this cleanly.

### 4.2 CONFIRMED non-reciprocal — cities' two "resolved" contains claims are NOT reciprocated by their targets

- **cities.contains ⊇ [financial-markets]**, annotated in-file as "financial-markets: RESOLVED — entry exists" — but **financial-markets.part_of = [global-economy]** only; `cities` is absent. financial-markets does not know it is contained by cities.
- **cities.contains ⊇ [power-grids]**, annotated in-file as "power-grids: entry being drafted in this same batch — cited as resolved" — but **power-grids.part_of = []** (empty); `cities` is absent, and power-grids' own provenance flags note an *unrelated* part_of candidate ("energy-systems / North American grid of grids") without mentioning cities at all.

**Severity: fix (structured-column consistency, per panel-spec's own audit standard for relations).** Both financial-markets.yaml and power-grids.yaml should add `cities` to their `part_of` lists (or the cities entry's "RESOLVED" annotations should be downgraded to "unresolved" until the reciprocal edit lands) — the graph is not currently symmetric even though one side asserts it is.

### 4.3 CONFIRMED non-reciprocal, compounded by a stale annotation — river-networks -> planetary-climate

- **river-networks.part_of = [planetary-climate]**, annotated in-file as `# hydrological cycle as forcing; unresolved -> roster expansion queue` — but planetary-climate is **not** unresolved; it is a fully drafted entry in this same pilot batch (`data/classes/planetary-climate.yaml`). The "unresolved" annotation is simply incorrect/stale (most plausibly written before, or without cross-checking against, the planetary-climate draft). Separately and independently, **planetary-climate.contains = [weather-systems, tropical-cyclones, ocean-circulation]** does **not** include `river-networks` — so even correcting the stale annotation, the link would still be non-reciprocal on the planetary-climate side.

**Severity: fix.** Two actions: (a) correct river-networks' comment from "unresolved" to reflect that planetary-climate exists; (b) add `river-networks` to planetary-climate's `contains` list (river networks are a land-surface hydrological component at least as legitimately "contained" by the coupled climate system as tropical-cyclones and ocean-circulation are — the entry's own scoping note already treats the hydrological cycle as forcing on rivers, which is the same relationship tropical-cyclones has to climate).

### 4.4 No other part_of/contains pairs claim resolution against another roster member — all remaining links are correctly marked unresolved

Spot-checked the rest of the graph for any other unflagged claims of resolution: tropical-cyclones' `contains: [moist-convection-cells]` is correctly marked unresolved (and the entry is careful to distinguish this from the separate `convection-cells` id used elsewhere — see §4.5); stars' `contains: [convection-cells]` is correctly marked unresolved with an unusually thorough contains_note explaining the judgment call; earthquake-fault's `part_of: [plate-tectonics]`, languages' `part_of: [cultures]`, the-internet's `contains: [world-wide-web]`, financial-markets' `part_of: [global-economy]`, cities' `part_of: [global-economy]` and `contains: [road-traffic-systems, social-networks]` are all correctly marked unresolved. No fabricated resolutions found beyond §4.2-4.3.

### 4.5 Note — two similarly-named but distinct unresolved ids exist and must not be merged

`convection-cells` (stars' contains target, = idealized/general Rayleigh-Bénard-type convection, also used throughout modularity.yaml and emergence.yaml purely as an *anchor comparator system* — i.e., it is cited as a scoring reference point in two anchor files without ever having been drafted as a catalog entry itself) is explicitly and deliberately kept distinct from `moist-convection-cells` (tropical-cyclones' contains target, = storm-scale moist convective cells). Both entries handle this correctly and flag the distinction themselves; recorded here only so the roster expansion queue doesn't accidentally collapse the two ids into one when convection-cells is eventually drafted.

### 4.6 Roster expansion queue — consolidated list of all unresolved ids referenced by the pilot 10

`weather-systems`, `moist-convection-cells`, `global-economy`, `galaxies`, `convection-cells`, `ocean-circulation`, `plate-tectonics`, `cultures`, `world-wide-web`, `road-traffic-systems`, `social-networks`, `firms` / `firms-and-corporations` (referenced as an `itself_complex` target inside financial-markets' and cities' component_ontology, not in a top-level relations block, but equally a roster gap), and a candidate `energy-systems` / "North American grid of grids" mentioned only in power-grids' provenance flags (not yet promoted into its `relations.part_of` list at all — currently `[]`).

---

## 5. Measurand drift / atomicity drift

### 5.1 CONFIRMED, high-severity — `hierarchy_depth` uses two incommensurable counting conventions across the 10 entries

Nine entries count "aggregation levels above the declared atomic parts, up to and including the whole," landing in the narrow 3-4 range: tropical-cyclones=3, financial-markets=3, stars=3, earthquake-fault-systems=3, languages=3, the-internet=3, power-grids=3, planetary-climate=4, cities=4. **river-networks=10** uses a fundamentally different measurand: literal Strahler stream order (the field's own physical branching-order convention), not a count of aggregation tiers. The entry's own provenance explicitly self-flags this ("a different convention choice than tropical-cyclones' aggregation-level count (3) or financial-markets' institutional-tier count (3) — flagged for the consistency checker to confirm this cross-entry convention difference is principled... rather than an inflation artifact").

Having read the justification, the choice is *defensible in isolation* (Strahler order is genuinely the field's own standard nesting scheme for river networks) but it is **not commensurable** with the other nine entries' values as currently recorded in the same column — a naive cross-entry comparison ("rivers have the deepest hierarchy of any system in the catalog, over 3x cities") would be actively misleading, since it compares stream-branching-order to aggregation-tier-count. This is exactly the "HIGH commensurability risk" the panel-spec's own column note warns about for hierarchy_depth.

**Severity: fix.** Recommend one of: (a) add a *second*, convention-matched hierarchy_depth-equivalent figure for river-networks using the same "aggregation levels above atoms" convention as the other nine (something like: channel links (atoms) -> sub-basin -> major tributary basin -> mainstem — likely landing in the 3-5 range, consistent with the other entries), retaining Strahler order as a separately labeled quantitative fact elsewhere (e.g., folded into fractal_dimension_spatial's Horton-ratio discussion, where it already partly lives); or (b) rename/re-scope the column's definition to explicitly allow either convention but require both a numeric value AND an explicit convention-type tag, so downstream consumers of the column can filter by convention before comparing.

### 5.2 CONFIRMED, moderate-severity — `extreme_event_statistics` mixes two structurally different measurand types across entries

Seven entries record genuine *temporal event-size/frequency* distributions (an event happens at a time, and its magnitude is drawn from a distribution): tropical-cyclones (per-storm PDI across storms), financial-markets (return-tail exponent), stars (flare thermal-energy distribution), earthquake-fault-systems (G-R b-value), river-networks (flood-discharge tail), power-grids (blackout-size tail). Two entries — **languages** (Zipf word-frequency) and **cities** (Zipf city-size) — record *static cross-sectional rank-size* distributions with no temporal event structure at all: a word's corpus frequency and a city's population are standing-state properties of a population of types/instances, not discrete events with a size drawn at a moment in time.

Both entries are self-aware about this: cities explicitly states "This IS the class's primary extreme-event/heavy-tail statistic (the largest cities are the 'extreme events' of the size distribution), by direct analogy with how tropical-cyclones records per-storm PDI tails here" — an honest, flagged analogy, not a silent conflation. But the analogy is a genuine stretch relative to the column's apparent design intent (which pairs naturally with `criticality`'s and `tipping_transitions`' event-dynamics framing elsewhere in Group C). This is not a "someone made an error" finding — both entries did the best available thing given no better measurand exists for a static-population class — but it is a real definitional ambiguity in the column itself that a future schema revision should resolve explicitly (e.g., by adding a `measurand_type: temporal-event | static-cross-sectional` sub-tag), rather than leaving future auditors to rediscover the tension entry-by-entry.

**Severity: note.** No entry-level fix needed; recommend a schema-level clarification for panel-spec.yaml's `extreme_event_statistics` definition.

### 5.3 No other atomicity drift found

Checked every entry's declared atomicity choice (component_ontology + scoping_note) against the panel-spec's atomicity-convention filling rule ("lowest-level components at which the system's CHARACTERISTIC dynamics operate"). All ten choices are non-arbitrary, explicitly justified, and internally consistent with the rule's spirit: moist air parcels (tropical-cyclones), trading agents + orders (financial-markets, explicitly excluding neurons and firm org-charts), granulation cells as an explicit *proxy* atom for a genuinely atom-less continuum (stars, self-flagged as the weakest link but transparently so), fluid parcels at synoptic scale (planetary-climate, explicitly aligned with tropical-cyclones' convention since it nests the same fluid system), fault segments/patches explicitly excluding individual earthquakes as "events/dynamics, not structural parts" (earthquake-fault-systems), channel links/segments explicitly excluding water parcels and sediment grains (river-networks), the declared dual speaker/lexical-unit ontology (languages, matching the panel-spec's own worked example for this class), the declared dual AS-node/packet-flow ontology (the-internet), bus/line network atoms explicitly excluding conductors and customers (power-grids), and the declared dual resident/building ontology (cities, explicitly modeled on languages' precedent). No column was found where two entries silently used different atomicity conventions while appearing to report the same quantity (contrast §5.1, where the drift is self-flagged and explicit, not silent).

### 5.4 No mechanism_status enum drift found

All ten entries' `criticality.mechanism_status` values are drawn from the panel-spec's stated vocabulary (`none`/`proposed`/`contested`/`established`) with no off-vocabulary values remaining in the current files. financial-markets' provenance notes record that an earlier drift (`proposed-contested`, a hyphenated non-enum value) was caught and corrected during that entry's own consistency_check — evidence the verification process functions as intended; no equivalent unfixed drift was found in any of the other nine entries.

---

## 6. Summary

Read all 10 pilot entries and all 15 rubric anchor files in full; built the complete 10x15 score matrix; audited every column for ordering violations, checked the three specified polar relationships, audited the full relations graph for reciprocity, and checked for measurand/atomicity drift.

**Findings:** 2 fix-severity ordering issues (cities.criticality=1 unsupported by its own cited evidence, should likely be 0; river-networks/earthquake-fault nonlinearity gap needs an explicit distinguishing argument), 3 fix-severity relations-graph reciprocity gaps (cities<->financial-markets, cities<->power-grids, river-networks<->planetary-climate, the last compounded by a stale "unresolved" annotation), 1 fix-severity measurand-drift issue (river-networks' hierarchy_depth uses Strahler order, incommensurable with the other nine entries' aggregation-tier convention), and 1 note-severity measurand-definition ambiguity (extreme_event_statistics conflates temporal-event and static-cross-sectional distributions, self-flagged by both affected entries). One note-severity plausible ordering softness (tropical-cyclones.criticality=1, lower urgency since the entry is already verified). One non-violation initially flagged then cleared on inspection (earthquake-fault robustness_resilience exemplar-level reasoning). No violations found in decentralization, modularity (beyond the cleared items), feedback, memory_hysteresis, information_processing, adaptive_capacity, emergence, self_organization, tipping_transitions, or cascade_susceptibility orderings; no atomicity drift beyond the self-flagged hierarchy_depth case; no mechanism_status enum drift.

**Three most interesting cross-system observations in the score matrix (the first glimpse of the periodic table):**

1. **The alphabet_closure gradient is perfect across all 10 entries** (closed: all 5 physical/geophysical/astrophysical systems; constrained: all 3 engineered/institutional systems; open: both social/cultural systems) — and it *cracks* exactly where the panel-spec predicted it might be interesting: financial-markets sits in the "constrained" tier alongside the-internet and power-grids on alphabet_closure, but scores the catalog's *ceiling* adaptive_capacity (4), matching or beating the two "open"-alphabet cultural systems (languages=3, cities=3). A fixed, rulebook-defined interaction alphabet turns out not to constrain adaptive capacity at all when the agents operating within that fixed alphabet are themselves learners — markets get CAS-grade adaptation out of an institutionally closed rule set, which the-internet and power-grids conspicuously do not (both constrained-alphabet, both adaptive_capacity=2). This is the sharpest confirmation yet that alphabet_closure and adaptive_capacity are answering genuinely different questions, exactly as the panel-spec's editorial notes hoped.

2. **Power grids are the pilot's most "engineered" entry and its least decentralized** (decentralization=1, the anchor scale's own worked floor case for infrastructure) — *lower* than the supposedly less-institutionally-coordinated Internet (3) and on par with nothing else in the "constrained" alphabet tier. The intuitive heuristic "designed system = mid-range decentralization" turns out to be too coarse: what matters is not whether a system was engineered, but whether its coordination layer does real-time steering (grids) versus mere bookkeeping (Internet naming/standards, exchange listing rules). Grids are simultaneously the pilot's most centrally-operated entry (decentralization=1) and one of its most self-organized-in-its-failures entries (self_organization=1 but cascade_susceptibility=3, the sole 3 in that column) — a genuinely double-natured profile the matrix makes visible in a way no single column would.

3. **A subsystem can out-score its own containing system on the same physical axis, and the schema handles it gracefully.** tropical-cyclones scores openness_dissipation=4 (the ceiling, tied with stars) while its declared container, planetary-climate, scores 3 — not because the storm's flux is larger in absolute terms (it manifestly is not; a planet absorbs ~1.2x10^17 W of solar power against a hurricane's ~10^12-10^13 W), but because the *ratio* the column actually scores — flux centrality relative to the structure's own collapse timescale — is a genuinely different physical question at storm scale (structure collapses in ~a day, comparable to its own lifetime: ceiling) versus climate scale (fast weather and slow ocean/ice modes have different collapse profiles, averaging to 3). This is a clean empirical demonstration that the catalog's hybrid columns are measuring dynamical centrality, not raw wattage — and that nesting (part_of/contains) does not have to produce monotonic score inheritance, which is worth stating explicitly somewhere in the schema so a future auditor doesn't mistake it for an error on sight, the way this audit initially did.
