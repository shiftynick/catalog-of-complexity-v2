# Coverage Check — power-grids

Verifier: coverage checker (adversarial stance — entry presumed incomplete
until proven otherwise). Checked against `schema/panel-spec.yaml` (panel
columns, counted directly, not taken from doc prose), `docs/schema.md`
(entry-structure spec), all 15 files in `schema/anchors/`, and
`docs/roster.md`. Cross-referenced against `research/phase4/power-grids-sources.md`
(the sweep report) and against every other entry currently in
`data/classes/` (cities, earthquake-fault-systems, financial-markets,
languages, planetary-climate, river-networks, stars, the-internet,
tropical-cyclones) for relations reciprocity and cross-entry citation
claims. No entry file or reference file was modified by this check.

Date of check: 2026-07-02.

---

## 0. Panel column count (ground truth, counted directly)

`schema/panel-spec.yaml`'s `columns:` block enumerated directly: **30
columns total** — category, spatial_extent, characteristic_timescales,
numerosity, instance_population, component_ontology, energy_rate_density,
interaction_topology, interaction_ontology, degree_distribution, modularity,
hierarchy_depth, fractal_dimension_spatial, decentralization, nonlinearity,
feedback, openness_dissipation, chaos_sensitivity, criticality,
extreme_event_statistics, temporal_correlation, tipping_transitions,
memory_hysteresis, information_processing, adaptive_capacity,
variation_selection, emergence, self_organization, robustness_resilience,
cascade_susceptibility.

## 1. Column completeness

Verified by direct enumeration of `power-grids.yaml`'s top-level `category:`
key and the 29 keys under `attributes:` (grep-verified against the file
directly, not against a prior summary). **All 30 spec column ids are
present.** No missing-entirely columns, no stray/legacy attribute keys
(e.g. no leftover `component_diversity`).

This is column-KEY presence only; several values carry `unknown` inside a
present column (energy_rate_density, fractal_dimension_spatial,
temporal_correlation partially) — those are missing-VALUE, not
missing-column, and are inventoried in Section 7.

## 2. Structural blocks (docs/schema.md)

All required blocks present: `id`, `name`, `category`, `status`,
`exemplars`, `scoping_note`, `summary`, `relations`, `attributes`,
`emergent_phenomena`, `sources`, `provenance`. `provenance.verification`
block present with all four sub-checks stubbed `pending` (correct — this is
one of four verification passes, none of which has run yet).
`provenance.flags` records five drafting-agent self-flagged uncertainties,
engaged below.

`exemplars` has two entries (ercot primary; western-us-grid reused-provenance
for Group B network metrics only) — legal and well-motivated; the note field
on each explains the split clearly.

## 3. Column-by-column adversarial pass

### Group A — Identity & Scale

- **spatial_extent**: exemplar value + method + detail sub-fields (line
  miles, customer counts) all present, matches sweep report §1 exactly
  including the "moving target, not a fixed constant" framing. No defect.
- **characteristic_timescales**: 4 named timescales, each with measurand
  and evidence_status, matching sweep report's implicit list (protection
  relay, AC cycle, cascading blackout, infrastructure lifetime). No orphan
  timescale found in the sweep missing from the entry.
- **numerosity**: bus/edge count (Deka & Vishwanath) + generation-unit
  range, matches sweep report §2 exactly, correctly notes the two counts
  are "genuinely distinct...do not average them." No defect.
- **instance_population**: 5 interconnections (2 major + 3 minor)
  correction, global-count `unknown`, matches sweep report §3 exactly,
  including the "formation rate is not a meaningful framing" reasoning.
  No defect — and this is a real, valuable correction to the original task
  brief, properly flagged in `provenance.flags`.
- **component_ontology**: four part types (buses/substations, transmission
  lines, generation units, system operator/dispatch institution), matches
  sweep report §2 generation-capacity-mix breakdown exactly (natural gas,
  wind, solar, coal/lignite, nuclear, battery, hydro, other — all 8
  sub-categories from the Comptroller snapshot present). The
  out-of-scope(human) marking on the system-operator row, with its own
  explanatory note about the decentralization/adaptive_capacity exception,
  correctly implements the scoping_note's flagged carve-out. No defect.
- **energy_rate_density**: `unknown`, matches sweep report §4 exactly —
  power numerator well-attested, mass denominator explicitly not recovered
  and explicitly not backed into from partial ACSR datasheet figures (a
  correct refusal-to-fabricate, per filling_rules.no-guessing). No defect;
  correctly flagged in `provenance.flags` and via `verifier_flags:
  [mass-term-unrecovered]`.

### Group B — Structure

- **interaction_topology**: value present (`network`), but **no
  `evidence_status` field**, unlike every other top-level attribute in the
  entry. **FINDING (note)** — same completeness gap pattern already found
  in the stars entry's coverage check for this same column; a project-wide
  pattern, not power-grids-specific.
- **interaction_ontology**: 4 interaction types, `type_count`,
  `alphabet_closure: constrained`, and a justification are present, but the
  block also carries **no `evidence_status` field**. More seriously:
  - **FINDING (blocker)**: the justification's closing citation claim —
    "the same 'constrained' reasoning as financial-markets' anchor
    (decentralization.yaml notes the ERCOT/NYSE contrast directly)" — is a
    **miscitation**. Verified directly: `schema/anchors/decentralization.yaml`
    contains separate, independent ERCOT and NYSE anchor entries (scores 1
    and 2 respectively) but at no point compares them to each other, and the
    file contains no mention of `alphabet_closure`, "constrained," or
    interaction-alphabet reasoning at all — that concept does not belong to
    the decentralization column. The `alphabet_closure: constrained`
    reasoning the entry is trying to point to actually lives in
    `data/classes/financial-markets.yaml` itself (line 151:
    `alphabet_closure: constrained`), not in any `schema/anchors/*.yaml`
    file — there is no `interaction_ontology.yaml` anchor file (correctly,
    since interaction_ontology is a structured column, not one of the 15
    rubric/hybrid columns with anchor files) and none of the 15 anchor
    files discuss alphabet_closure at all. This is a citation asserting a
    specific claim in a specific named file that verifiably is not there —
    exactly the "anchor contradiction" class of defect this check is
    scoped to catch as a blocker, not a hedge or a snippet-only gap.
    **Suggested fix**: change the citation from "decentralization.yaml notes
    the ERCOT/NYSE contrast directly" to point at
    `data/classes/financial-markets.yaml`'s own `interaction_ontology`
    block (its `alphabet_closure: constrained` reasoning, lines ~130-155),
    which is the actual location of the parallel reasoning being invoked.
- **degree_distribution**: value, measurand, method all present and match
  sweep report §6 exactly, including the ERCOT-specific upgrade over the
  Newman-2003-only baseline and the "three earlier independent studies...
  bibliographic details not independently re-extracted" gap honestly
  carried through from the sweep. No defect; this is the entry's strongest
  single upgrade and it is fully integrated.
- **modularity**: score 3, justification closely follows
  `schema/anchors/modularity.yaml`'s power-grids anchor, but with one
  self-aware correction: the anchor file itself (line 172) still says
  ERCOT is "one of three MAJOR North American grids," while the entry
  explicitly corrects this in-line to "one of the three MINOR North
  American interconnections, per this entry's corrected instance_population
  framing." This is the entry behaving correctly (catching and fixing a
  stale claim rather than propagating it) — **FINDING (note)**: the
  anchor file `schema/anchors/modularity.yaml` itself is now stale
  relative to this sweep's corrected instance_population finding and
  should be updated by whoever owns anchor files, but this is not a defect
  in the power-grids entry.
- **hierarchy_depth**: value 3, with a stated counting convention. **FINDING
  (fix)**: level 3 in the stated convention is "the North American
  grid-of-grids the interconnection couples into only weakly, via limited
  DC ties." This is explicitly a composition relationship BETWEEN catalog
  entries (power-grids as part of a broader North American
  interconnection-of-interconnections system), which
  `schema/panel-spec.yaml`'s own hierarchy_depth note states directly
  should NOT be counted in this column: "Composition BETWEEN catalog
  entries...lives in the entry-level relations block (part_of / contains
  — see docs/schema.md), not in this column." The entry both (a) counts
  this inter-entry link as an internal hierarchy_depth level, contrary to
  the panel-spec instruction, and (b) simultaneously leaves
  `relations.part_of: []` empty with only a code-comment naming
  "energy-systems / North American grid of grids" as an unresolved
  candidate — so the same conceptual link is double-miscounted (wrongly
  inside hierarchy_depth, and not actually recorded where panel-spec says
  it belongs). **Suggested fix**: recount hierarchy_depth using only
  levels strictly inside ERCOT's own boundary (e.g. buses/substations (0)
  -> weather/balancing zones (1) -> ERCOT-wide synchronous interconnection
  (2) = depth 2), and separately promote "energy-systems" (or an
  equivalent id) from a code-comment into an actual
  `relations.part_of: [energy-systems]` unresolved-roster entry, consistent
  with how every other entry in `data/classes/` records inter-entry
  composition (see Section 5 below).
- **fractal_dimension_spatial**: `unknown`, matches sweep report §5 exactly,
  including the Barakou & Koukoula lead correctly held as "a lead, not a
  value." No defect.
- **decentralization**: score 1, justification is a verbatim match to the
  power-grids anchor in `schema/anchors/decentralization.yaml` (compared
  directly, sentence-for-sentence). No defect.

### Group C — Dynamics

- **nonlinearity**: score 3, `sources: [dobson1992]`. **FINDING (note)**:
  `schema/anchors/nonlinearity.yaml` has **no power-grids anchor at all**
  (confirmed by direct grep — its worked systems are stars,
  tropical-cyclones, financial-markets, earthquake-fault-systems,
  languages, the-internet only). The entry's justification does compare
  itself explicitly to "the earthquake-fault-systems anchor at 3 in
  nonlinearity.yaml," which is a real, verifiable anchor entry — so the
  score is reasoned against the nearest comparator rather than guessed,
  which is correct practice per the stars-coverage precedent — but this
  means nonlinearity is one of several rubric columns this entry is
  carrying WITHOUT the benefit of an orchestrator-vetted power-grids-
  specific anchor. Not attributable to the entry as a defect, but a real
  upstream anchor-coverage gap worth surfacing.
- **feedback**: score 3, 3 named loops (governor droop, AGC, cascading
  tripping), sourced to dobson2007. **FINDING (note)**: same gap —
  `schema/anchors/feedback.yaml` has **no power-grids anchor** (its worked
  systems are planetary-climate, tropical-cyclones, financial-markets,
  earthquake-fault-systems, stars only). Reasoning is self-contained and
  well-cited (Dobson et al. 2007 for the cascading-trip loop), not guessed,
  but again unvetted against a project anchor.
- **openness_dissipation**: score 2, explicit comparison to both cities'
  (score 3) and NYSE's (score 2) anchor reasoning. **FINDING (note)**:
  `schema/anchors/openness_dissipation.yaml` has **no power-grids anchor**
  (worked systems: stars, tropical-cyclones, cities, financial-markets,
  earthquake-fault-systems, languages only). The entry's comparison to
  "the NYSE's 'throughput sustains the computing substrate' reasoning" is
  independently verified: `schema/anchors/openness_dissipation.yaml` line
  119-126 confirms the NYSE anchor is indeed scored 2 with essentially that
  reasoning (data-center/matching-engine substrate) — so the comparator
  claim itself checks out even though power-grids has no anchor of its own
  here.
- **chaos_sensitivity**: score 1, `sources: [dobson1992]`. **FINDING
  (note)**: `schema/anchors/chaos_sensitivity.yaml` has **no power-grids
  anchor** (worked systems: planetary-climate, tropical-cyclones,
  financial-markets, earthquake-fault-systems, stars, river-networks only).
  The entry's comparison to "the-internet anchor's reasoning in
  chaos_sensitivity.yaml" is a fabricated comparator claim in one specific
  sense worth flagging precisely: **the-internet also has no anchor entry
  in `chaos_sensitivity.yaml`** (confirmed by the same direct grep — the
  six worked systems listed above do not include the-internet either).
  **FINDING (fix)**: the entry's own text says "comparable to the-internet
  anchor's reasoning in chaos_sensitivity.yaml" as though this is a
  verifiable anchor comparison, but no the-internet anchor exists in that
  file to compare against — this is citing a nonexistent anchor entry, a
  smaller-scale version of the interaction_ontology miscitation above.
  Distinguish from the nonlinearity/feedback/openness_dissipation notes
  above (which correctly compare against REAL anchor entries for other
  systems, just not for power-grids itself) — this one compares against a
  system that itself has no anchor in the cited file.
- **criticality**: score 2, `mechanism_status: contested`. The entry's own
  text is unusually careful here and directly engages the anchor file's own
  meta-commentary: `schema/anchors/criticality.yaml` (lines 170-175)
  explicitly states "power-grids is intentionally not used as a worked
  anchor here to avoid conflating the two columns, see
  cascade_susceptibility.yaml for its treatment" — and the entry's
  justification correctly quotes and engages this exact passage
  ("criticality.yaml's own text flags exactly this ERCOT boundary case...
  which explicitly avoid[s] using power-grids as a worked anchor there").
  This is the single best-handled anchor-gap case in the entry — the
  absence is not just tolerated but actively cited and explained. No
  defect.
- **extreme_event_statistics**: value, measurand, method match sweep
  report §7 exactly, including the explicit exclusion of the unverifiable
  "-1.36+/-0.2" figure as a "likely conflation/hallucination risk." This is
  a model of correct no-guessing practice. No defect.
- **temporal_correlation**: H~0.75 value present but correctly downgraded
  to `evidence_status: unknown` (not `measured`) per
  filling_rules.measurand-required, matching sweep report §9 exactly,
  matching `provenance.flags`' own explicit caution not to promote without
  opening the primary PDF. No defect — textbook-correct hedging.
- **tipping_transitions**: score 2, `sources: [dobson1992,
  simpson-porco2016]`. Matches sweep report §8 exactly, including the
  explicit resolution of "the Phase-1 deferred flag." **FINDING (note)**:
  `schema/anchors/tipping_transitions.yaml` (lines 156-160) explicitly
  states this exact case was "not used as a worked anchor here for lack of
  a specific citation verified in Phase 1 research — flag for Phase 2
  follow-up rather than guessing a score." The sweep report and entry
  correctly identify and resolve this deferred flag with primary sources
  (Dobson 1992, Simpson-Porco et al. 2016) — but `tipping_transitions.yaml`
  itself has NOT been updated with a power-grids worked-anchor entry
  reflecting this resolution, so the anchor file is now stale relative to
  the entry it describes. Not a defect in the entry (which does the work
  correctly and cites primary sources), but a follow-up item for whoever
  maintains `schema/anchors/`.

### Group D — Information & Memory

- **memory_hysteresis**: score 2, no `sources` field (qualitative only).
  **FINDING (note)**: `schema/anchors/memory_hysteresis.yaml` has **no
  power-grids anchor** (worked systems: stars, earthquake-fault-systems,
  planetary-climate, financial-markets, the-internet, languages only). The
  entry's comparison to "the earthquake-fault-systems anchor's reasoning in
  memory_hysteresis.yaml" is verified as a real, existing anchor entry
  (confirmed present at line 81) — correct comparator use despite the gap.
- **information_processing**: score 3, justification is a verbatim match to
  the power-grids anchor in `schema/anchors/information_processing.yaml`
  (compared directly). No defect.

### Group E — Adaptation

- **adaptive_capacity**: score 2, justification is a verbatim match to the
  power-grids anchor in `schema/anchors/adaptive_capacity.yaml` (compared
  directly, sentence-for-sentence). No defect.
- **variation_selection**: value `present`, justification present but **no
  `evidence_status` field**, same pattern as `interaction_topology` above
  and the same pattern already flagged in the stars coverage check for this
  identical column. **FINDING (note)**.

### Group F — Emergence & Robustness

- **emergence**: score 2, `sources: [dobson1992]`. **FINDING (note)**:
  `schema/anchors/emergence.yaml` has **no power-grids anchor** (worked
  systems: stars, convection-cells, tropical-cyclones, financial-markets,
  the-internet, languages only). The entry's comparison to "between
  the-internet's 2 and tropical-cyclones'/convection-cells' 3 in
  emergence.yaml" is independently verified as accurate: the-internet
  anchor in `emergence.yaml` does score 2, and tropical-cyclones/
  convection-cells do score 3 (both confirmed present in the file) — a
  correct, real comparator claim despite power-grids having no anchor of
  its own here.
- **self_organization**: score 1, justification is a verbatim match to the
  power-grids anchor in `schema/anchors/self_organization.yaml` (compared
  directly). No defect on the attribute itself. **FINDING (note,
  plausibility-adjacent)**: the entry's `summary` field (top-level, not a
  scored column) uses the phrase "a designed skeleton with a mind of its
  own at the margins," which echoes `self_organization.yaml`'s scale-level
  **2** description ("designed skeleton with substantial spontaneous order
  living on top of it") more closely than the level the entry actually
  scores (**1**: "minor spontaneous ordering...within the designed
  skeleton"). This is a narrative/scored-value tension in the accessible
  summary layer, not a coverage gap, but worth flagging for the
  plausibility or consistency checker.
- **robustness_resilience**: score 2, `sources: [ferc-uri-report]`,
  justification is a close match to the power-grids anchor in
  `schema/anchors/robustness_resilience.yaml`, with additional FERC/UT
  Austin casualty and cost figures not in the anchor's shorter text but
  consistent with and expanding on it. No defect.
- **cascade_susceptibility**: score 3, justification is a close match to
  the power-grids anchor in `schema/anchors/cascade_susceptibility.yaml`.
  **FINDING (note, low severity)**: the anchor file states the decay
  exponent range as "roughly 1.3-2.0" (line 61-62) while the entry (and
  its `extreme_event_statistics` / `criticality` columns) state "roughly
  -1 to -2." These are very likely the same underlying finding under two
  different sign/precision conventions (CCDF slope vs. tail exponent, and
  a narrower vs. wider rounding), not a contradiction in substance, but the
  numeric ranges as literally written do not match digit-for-digit across
  the anchor file and the three entry columns that cite the same Dobson et
  al. (2007) result. Worth a precision pass by the plausibility checker to
  confirm both figures trace to the same table/passage.

## 4. Anchor-count cross-check

Direct count of `schema/anchors/*.yaml` files with a worked **power-grids**
system entry (verified by grep of `system: power-grids` in each file):
**decentralization, modularity, information_processing, self_organization,
adaptive_capacity, robustness_resilience, cascade_susceptibility — 7 of 15
rubric/hybrid columns.** The remaining **8 columns have no power-grids
anchor**: nonlinearity, feedback, openness_dissipation, chaos_sensitivity,
criticality (explicitly and deliberately excluded, per its own notes),
tipping_transitions (explicitly deferred, per its own notes),
memory_hysteresis, emergence. This is a materially different ratio from the
stars entry (14 of 15 anchored) — power-grids is anchored on fewer than
half of its rubric/hybrid columns. The entry does not claim otherwise
anywhere in its `provenance` block (unlike the stars entry, which had a
now-corrected overcount claim) — there is no blanket "all columns anchored"
claim in `power-grids.yaml`'s provenance section to contradict, which is
itself correct/honest. **FINDING (note, escalated to fix given the scale of
the gap)**: 8 of 15 rubric/hybrid columns lack an orchestrator-vetted
power-grids-specific anchor. Individually, each of these 8 is reasoned
carefully with named comparators (mostly real, one — chaos_sensitivity's
the-internet comparison — verifiably absent, see Section 3 above) rather
than guessed, so this is not a fabrication risk, but it is a genuine anchor-
coverage gap upstream in `schema/anchors/` worth surfacing to whoever
maintains the anchor set, since roughly half this entry's rubric scores
have not been independently vetted the way the project's anchor-drafting
process intends.

## 5. Relations cross-check (docs/roster.md, existing data/classes/ entries)

`relations.part_of: []` (candidate "energy-systems / North American grid of
grids" in a code comment only, unresolved).

`relations.contains: []` (candidate generation units / distribution
networks in a code comment only, unresolved).

**FINDING (fix) — reciprocity defect, cities.yaml <-> power-grids.yaml**:
`data/classes/cities.yaml` line 67 states `contains: [power-grids,
financial-markets, road-traffic-systems, social-networks]`, with an inline
comment at line 68 explicitly reading "power-grids: entry being drafted in
this same batch — cited as **resolved**." `cities.yaml` additionally marks
the `infrastructure networks` component-ontology row's `itself_complex:
power-grids` (line 166), i.e. cities.yaml treats the cities-contains-
power-grids link as a settled, bidirectional-in-spirit compositional fact.
However, `power-grids.yaml`'s own `relations.part_of: []` does **not**
list `cities` — the only candidate named is the unrelated "energy-systems
/ North American grid of grids" idea. Per docs/schema.md's relations
convention (`part_of` = "systems this class is embedded in"), a power grid
being contained by a city is exactly a `part_of` fact from power-grids'
side. This is not a fatal contradiction (a grid genuinely spans a
service area far larger than any one city — ERCOT covers 90% of Texas —
so "power-grids part_of cities" is not a clean 1:1 relationship the way
"stars part_of galaxies" is), but the current state is asymmetric: cities
asserts the link as resolved, power-grids' relations block is silent on
cities entirely. **Suggested fix**: either add `cities` to
`power-grids.yaml`'s `part_of` list (with a note about the scale mismatch —
grids typically span multiple cities/regions, so the relationship may need
its own qualifying language, e.g. "cities (partial — ERCOT spans a
multi-city service area, not contained by a single city)"), or add an
explicit code-comment in power-grids.yaml acknowledging cities.yaml's
contains-claim and explaining why it is deliberately not reciprocated
(e.g. "the containment direction only makes sense city-by-city, not
grid-by-grid, so no part_of back-link is recorded"). Leaving it silent, as
now, reads as an oversight rather than a deliberate scoping decision.

No other entry in `data/classes/` (earthquake-fault-systems,
financial-markets, languages, planetary-climate, river-networks, stars,
the-internet, tropical-cyclones) references `power-grids` in its own
`relations` block, so no further reciprocity checks apply.

## 6. Sweep-report orphan check (research/phase4/power-grids-sources.md)

Compared every numbered subsection of the sweep report (§1-§10 plus the
closing gaps list) against the corresponding attribute(s). All quantitative
values, ranges, and hedges in the sweep are integrated into the entry:

- §1 spatial_extent -> fully integrated, no orphan.
- §2 numerosity/component_ontology -> fully integrated, no orphan.
- §3 instance_population -> fully integrated, no orphan.
- §4 energy_rate_density -> fully integrated (including the explicit
  refusal to back into a mass figure), no orphan. One sweep detail —
  the US-national-comparison power figures (~4.9e11 W average continuous
  power, ~1.4e12 W installed capacity, both explicitly "context only, not
  ERCOT-specific") — is correctly OMITTED from the entry, since the sweep
  itself frames these as context, not a value to record; not an orphan,
  a correct exclusion.
- §5 fractal_dimension_spatial -> fully integrated, no orphan.
- §6 degree_distribution -> fully integrated, no orphan.
- §7 extreme_event_statistics/cascade_susceptibility/criticality -> fully
  integrated, no orphan.
- §8 tipping_transitions -> fully integrated, no orphan.
- §9 temporal_correlation -> fully integrated, no orphan.
- §10 canonical source list -> all 6 sources (Newman 2003, Dobson et al.
  2007, Deka & Vishwanath, Dobson 1992, Pagani & Aiello, Simpson-Porco et
  al. 2016) present in the entry's `sources:` block, plus 3 more
  (ercot-press-2023, tx-comptroller-snapshot, ferc-uri-report,
  chaisson2011, grid-freq-hurst — 5 additional, all traceable to sweep
  subsections §1-§4 and §9). No orphaned source in the sweep report that
  never made it into the entry's `sources:` block.

The sweep's closing "Summary of explicit gaps" list (9 items) maps 1:1 onto
`provenance.flags` (5 flag items, several of which bundle multiple gaps
under one flag, e.g. the extreme_event_statistics/cascade_susceptibility/
criticality flag covers both the Dobson et al. 2007 snippet-only status and
the "-1.36+/-0.2" exclusion in one entry) — no sweep-flagged gap is
silently dropped from provenance.

## 7. Fillable-vs-genuinely-unmeasured judgment for each `unknown`/soft value

| Column | Current status | Fillable? | Candidate source |
|---|---|---|---|
| energy_rate_density (mass term) | unknown, explicitly blocked | Partially fillable, high effort | Would require an ERCOT-specific engineering census of conductor gauge mix across ~52,000-55,000 mi plus tower/substation/transformer mass — no single existing paper found this sweep; likely needs synthesis across multiple utility engineering/asset-management sources, not a single primary-read fix. Genuinely hard, correctly left unknown rather than guessed. |
| fractal_dimension_spatial | unknown | Fillable, medium confidence | Barakou & Koukoula (IEEE, distribution-grid fractal geometry), already named as a lead in both the sweep and the entry — a primary-read pass of that specific paper (not yet opened) could resolve this, though transfer from distribution-level to ERCOT's transmission-level graph is not guaranteed. |
| temporal_correlation | unknown despite a specific H~0.75 number existing | Fillable | arXiv:2104.09289 ("Towards realistic statistical models of the grid frequency") is already named; a primary-read pass (PDF fetch + text extraction) would very likely resolve both the measurand-identity gap and the grid-identity gap the entry currently flags. |
| instance_population (global census) | unknown | Likely not fillable as a single number | The sweep's own reasoning (no single census document exists; only qualitative regional descriptions) is a genuine literature gap, not a search failure — correctly terminal. |
| degree_distribution (three earlier cited studies' full bibliographic detail) | flagged as a residual gap in the entry's own text, not a column-level unknown | Fillable | Deka & Vishwanath's own reference list (citations [3],[4],[5]) is already primary-read in full-PDF form per the sweep — a second pass over the same already-fetched PDF's bibliography would resolve this without any new search. |
| ERCOT-specific mean path length / diameter (Deka & Vishwanath) | not surfaced as an entry value (correctly, since no panel-spec column asks for it) | N/A — not a coverage gap | Presented only as a comparative figure/plot in the source paper, not a reported scalar; there is no panel-spec column requiring this value, so its absence from the entry is not a defect. |
| criticality / extreme_event_statistics CSN-rigor status | measured-disputed, capped at "snippet-only" for Dobson et al. 2007 | Fillable | Re-attempt PDF text extraction via an alternate source or OCR (the entry's own provenance flag already recommends exactly this before promoting to verified status). |

---

## Summary of findings

Full 30/30 column-key coverage with all required structural blocks present;
the sweep report is fully integrated with no orphaned values. The
substantive issues found are: (1) a **blocker**-level miscitation on
`interaction_ontology` — the entry cites `decentralization.yaml` as the
source of an "ERCOT/NYSE contrast" and `alphabet_closure`/"constrained"
reasoning that verifiably does not appear anywhere in that file (the real
`alphabet_closure: constrained` reasoning for NYSE lives in
`financial-markets.yaml` itself, not in any anchor file); (2) a **fix**-level
miscitation on `chaos_sensitivity`, which compares itself to "the-internet
anchor's reasoning in chaos_sensitivity.yaml" when the-internet has no
anchor entry in that file either; (3) a **fix**-level structural problem on
`hierarchy_depth`, whose level-3 count explicitly includes the North
American grid-of-grids — an inter-entry compositional relationship that
panel-spec's own hierarchy_depth note says belongs in `relations.part_of`,
not in this column, and which is simultaneously absent from
`relations.part_of` (left as an unresolved code-comment); (4) a **fix**-level
relations-reciprocity gap: `cities.yaml` explicitly treats
`contains: [power-grids]` as resolved, but `power-grids.yaml`'s
`part_of: []` does not reciprocate or even acknowledge the cities link;
and (5) a broader **note**-level finding that only 7 of the entry's 15
rubric/hybrid columns (decentralization, modularity, information_processing,
self_organization, adaptive_capacity, robustness_resilience,
cascade_susceptibility) have an orchestrator-vetted power-grids-specific
anchor in `schema/anchors/` — the other 8 (nonlinearity, feedback,
openness_dissipation, chaos_sensitivity, criticality, tipping_transitions,
memory_hysteresis, emergence) are reasoned from named comparators rather
than a dedicated anchor, correctly and mostly-accurately in every case
except the chaos_sensitivity one flagged above. Several minor completeness
notes carry over from the same pattern seen in the stars coverage check
(missing `evidence_status` on `interaction_topology`, `interaction_ontology`,
and `variation_selection`). No fabricated numeric values, DOIs, or page
numbers were found in the quantitative content itself; every genuinely
unresolved value is correctly marked `unknown` rather than guessed, and the
sweep's explicit exclusion of the unverifiable "-1.36+/-0.2" blackout
exponent figure is a model example of the catalog's no-guessing discipline
working as intended.
