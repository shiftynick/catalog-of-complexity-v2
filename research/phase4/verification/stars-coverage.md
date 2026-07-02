# Coverage Check — stars

Verifier: coverage checker (adversarial stance — entry presumed incomplete
until proven otherwise). Checked against `schema/panel-spec.yaml` (panel
columns, counted directly, not taken from doc prose), `docs/schema.md`
(entry-structure spec), all 15 files in `schema/anchors/`, and
`docs/roster.md`. Cross-referenced against `research/phase4/stars-sources.md`
(the sweep report) and, where the sweep pointed back to it,
`research/phase1/quantitative-backbone.md` and
`research/phase1/dynamics-criticality.md`. Relations were checked against
`data/classes/tropical-cyclones.yaml` and `data/classes/financial-markets.yaml`
(the only other entries that currently exist in `data/classes/`). No entry
file or reference file was modified by this check.

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

Verified by direct enumeration of `stars.yaml`'s top-level `category:` key
and the 29 keys under `attributes:`. **All 30 spec column ids are present.**
No missing-entirely columns. No stray/legacy attribute keys outside the
30-column spec were found (no `component_diversity` or other superseded
names).

This is column-KEY presence only. Several values inside those columns carry
`unknown`, `not-applicable`, or soft/low-confidence status — those are
inventoried in Section 3 as candidates for fillable-vs-genuinely-unmeasured
judgment, not counted as missing columns.

## 2. Structural blocks (docs/schema.md)

All required blocks present: `id`, `name`, `category`, `status`, `exemplars`,
`scoping_note`, `summary`, `relations`, `attributes`, `emergent_phenomena`,
`sources`, `provenance`. `provenance.verification` block present with all
four sub-checks stubbed `pending` (correct — this is the coverage checker's
own pass, one of four). `provenance.flags` records four drafting-agent
self-flagged uncertainties, all substantively engaged below.

`exemplars` is a singleton (the Sun) — legal per schema.md ("singleton
classes are legal") and consistent with roster.md's designation of the Sun
as stars' sole pilot exemplar.

## 3. Column-by-column adversarial pass

### Group A — Identity & Scale

- **spatial_extent**: exemplar value (R☉) + class-general range note, both
  present. Class-general range explicitly marked `[unverified]`. No defect.
- **characteristic_timescales**: 5 rows, each measurand-named per
  filling_rules.measurand-required. Matches sweep table row-for-row
  (granule, supergranule, Schwabe cycle, main-sequence lifetime, current
  age). No orphan timescale found in the sweep that is missing from the
  entry.
- **numerosity**: present with `evidence_status: measured-untested`,
  `confidence: low`, consistent with sweep's own hedge. No defect — the
  atomicity-convention adjudication (granulation cells as proxy atom) is
  explicit and consistently applied (cross-referenced in
  component_ontology, hierarchy_depth, and the scoping_note itself).
- **instance_population**: MW standing population, MW formation rate, and
  observable-universe range all present and match the sweep's numbers
  exactly (~1-4e11 MW stars; ~1-2 M☉/yr formation, "up to ~4-8 M☉/yr by
  some tracers" — this higher range from the sweep's γ-ray/²⁶Al mention IS
  carried over, not dropped; ~1e22-1e24 observable-universe). No orphan.
- **component_ontology**: three part types (granulation cells,
  supergranulation cells, sunspots/active regions), matching the sweep's
  granulation discussion plus material not explicitly itemized in the
  sweep (supergranulation and sunspots as separate part-type rows) but
  consistent with the entry's own characteristic_timescales and
  emergent_phenomena rows — reasonable synthesis, not fabrication.
  Sunspot-group count is explicitly `[unverified — model knowledge]`,
  correctly flagged rather than silently asserted.
- **energy_rate_density**: Sun value (2 erg/s/g) + derivation cross-check +
  evolutionary-stage table present.
  - **FINDING (fix)**: the entry's evolutionary-stage note collapses the
    10-M☉-star fusion-stage sequence to "H->O burning: 600->4000 erg/s/g,"
    but the primary-read source
    (`research/phase1/quantitative-backbone.md` line 36, "Full text
    retrieved and read") gives four stage values: **600 (H), 1800 (He),
    2600 (C), 4000 (O) erg/s/g**. The two intermediate values (He-burning
    1800, C-burning 2600) are dropped even though they were primary-read
    and are sitting one file away with full provenance. This is a
    fillable-from-literature gap, not a fabrication risk — the source is
    already in the project (research/phase1/quantitative-backbone.md,
    Chaisson 2010/2011 Table 2 note) and simply needs to be copied in full
    rather than re-researched.

### Group B — Structure

- **interaction_topology**: value present (field/continuum), but carries
  **no `evidence_status` or `confidence` field**, unlike every other
  attribute in the entry. Per filling_rules ("evidence_status: required on
  every value"), this is a minor completeness gap — the value itself is
  present and correct (matches modularity/decentralization's implicit
  framing of the Sun as continuum plasma), so this is present-but-thin
  rather than missing-entirely. **FINDING (note)**.
- **interaction_ontology**: 5 interaction types, type_count and
  alphabet_closure both stated, justification present. No `sources` or
  `evidence_status` field on the block itself (individual type rows also
  lack them) — again present-but-thin. **FINDING (note)**, low severity
  since this is qualitative/physics-textbook content with low fabrication
  risk.
- **degree_distribution**: `value: not-applicable` with a note — matches
  the sweep's explicit instruction ("Record as N/A ... not as unknown").
  Correctly filled, not a coverage gap.
- **modularity**: score 1, justification is a close paraphrase of the
  class's own anchor (schema/anchors/modularity.yaml, stars anchor) almost
  verbatim, appropriately flagged in provenance as "anchors reused
  verbatim." Matches the anchor exactly (score 1, same shell-vs-lateral
  reasoning). No defect.
- **hierarchy_depth**: value 3, with an explicit level-counting convention
  stated (required per panel-spec's "HIGH commensurability risk" note).
  Correctly distinguishes vertical shell stratification (not counted) from
  lateral aggregation levels (counted) — consistent with the modularity
  column's identical shell/lateral distinction. No defect, though this is
  a judgment call for the consistency checker rather than coverage.
- **fractal_dimension_spatial**: present, matches sweep numbers exactly (D
  ranges, scale break, theoretical comparison), `verifier_flags` used
  correctly to mark the secondary-source status. No defect — already
  well-flagged as top uncertainty #1 in provenance.
- **decentralization**: score 4, justification is a verbatim match to the
  stars anchor (schema/anchors/decentralization.yaml). No defect.

### Group C — Dynamics

- **nonlinearity**: score 3, matches the stars anchor
  (schema/anchors/nonlinearity.yaml) closely (T^4 fusion dependence,
  granulation, dynamo, "not producing large-amplitude nonlinear behavior at
  whole-star scale"). No defect.
- **feedback**: score 2, both loops listed match the stars anchor
  (schema/anchors/feedback.yaml) exactly, including the loop-list format
  required at score >=2. No defect.
- **openness_dissipation**: score 4, justification and sources match the
  stars anchor (schema/anchors/openness_dissipation.yaml) closely,
  including the "absolute throughput, not mass-normalized Phi_m" framing.
  No defect.
- **chaos_sensitivity**: score 2, `measured-disputed`, closely follows the
  stars anchor (schema/anchors/chaos_sensitivity.yaml), including the
  hedged ~16-month figure marked `[unverified — single-study figure, cite
  with caution]`. Correctly hedged. No defect on this column alone (see
  criticality/extreme_event_statistics below for a related sourcing gap).
- **criticality**: score 2, `mechanism_status: contested`. Justification
  states "recently extended across ~13 orders of magnitude combining solar
  nanoflares and stellar superflares ... alpha~1.8" and cites
  `sources: [aschwanden2022]` only.
  - **FINDING (fix)**: this is an orphaned-citation gap. The "13 orders of
    magnitude" claim and its specific alpha figures come from a DIFFERENT
    paper than aschwanden2022 (the 2022 arXiv:2203.12484 reconciliation
    paper cited in the entry). Per `research/phase1/dynamics-criticality.md`
    line 34 (which the sweep report references directly at
    `research/phase4/stars-sources.md` line 63), the 13-orders-of-magnitude
    finding is sourced to **arXiv:2503.18136, "Self-Organized Criticality
    Across Thirteen Orders of Magnitude in the Solar-Stellar Connection,"**
    plus Aschwanden et al. 2019 (IOPscience,
    10.3847/1538-4357/ab29f4) — both primary sources already identified
    and cross-referenced in this project's own research files but never
    added to stars.yaml's `sources:` block, and never cited alongside the
    claim in `criticality`. Phase1 also records a companion energy-exponent
    figure, α_E≈1.67 (distinct from the flare-frequency α_F≈1.8 the entry
    does report), which is silently dropped. Recommended fix: add
    `2503.18136` (and optionally the 2019 IOPscience paper) as a named
    source in the entry's `sources:` block, cite it explicitly on the
    `criticality` attribute (not just aschwanden2022), and consider
    recording α_E≈1.67 alongside α_F≈1.8 if the orchestrator wants the full
    pair. This does not affect extreme_event_statistics, which correctly
    cites aschwanden2022 for its own separate (and correctly distinct) set
    of alpha values.
- **extreme_event_statistics**: values match the sweep exactly (3-D
  thermal model, 2-D SOC model, 2-D thermal model, broader field range),
  `measured-untested` per filling_rules.power-law-rigor, note explains the
  CSN-gap reasoning in full. No defect.
- **temporal_correlation**: Hurst exponent, measurand, method, and caveats
  all match the sweep exactly. No defect.
- **tipping_transitions**: score 0 (deliberate floor), justification
  closely tracks the tipping_transitions anchor's `does_not_count` guidance
  and explicitly contrasts with the earthquake-fault-systems anchor's
  informal-discourse case. Consistent with panel-spec (stars is not a
  worked anchor in tipping_transitions.yaml, but the entry's own reasoning
  is sound and non-guessed). No defect.

### Group D — Information & Memory

- **memory_hysteresis**: score 1, justification is close to verbatim match
  of the stars anchor (schema/anchors/memory_hysteresis.yaml). No defect.
- **information_processing**: score 0, justification matches the stars
  anchor (schema/anchors/information_processing.yaml) essentially
  verbatim, including the "canonical 0" framing the anchor itself uses.
  No defect.

### Group E — Adaptation

- **adaptive_capacity**: score 0, matches the stars anchor
  (schema/anchors/adaptive_capacity.yaml) verbatim. No defect.
- **variation_selection**: value `absent`, justification present, but
  **no `evidence_status` field** on this categorical column (same pattern
  as interaction_topology). **FINDING (note)**.

### Group F — Emergence & Robustness

- **emergence**: score 2, justification matches the stars anchor
  (schema/anchors/emergence.yaml) essentially verbatim, including the
  "raised 1->2" adjudication rationale reflected in the anchor's own notes.
  No defect.
- **self_organization**: score 4. **No stars anchor exists in
  self_organization.yaml** (confirmed directly — the file's worked anchors
  are tropical-cyclones, river-networks, the-internet, power-grids,
  languages only). The entry is honest about this ("Not directly anchored
  for stars ... so scored against the scale text with the
  tropical-cyclones anchor ... as the closest comparator"), which is the
  correct behavior per the task's fillable-vs-unmeasured framing — but it
  means this score has NOT been vetted by the orchestrator's own
  anchor-drafting pass the way the other 14 rubric/hybrid columns have
  (provenance.scoping_and_rubrics only claims "all 15 rubric/hybrid
  columns" were anchor-reused, which is one column short if
  self_organization is included in that count of 15 — see Section 4).
  **FINDING (note)**: not a coverage defect in the sense of a missing
  value, but a genuine anchor-coverage gap upstream in schema/anchors/ that
  this entry inherits and correctly flags; worth surfacing to the
  orchestrator as a request to add a stars anchor to
  self_organization.yaml, since the entry's own reasoning (borrowing the
  tropical-cyclones score-4 comparator) is sound but not independently
  vetted.
- **robustness_resilience**: score 4, matches the stars anchor
  (schema/anchors/robustness_resilience.yaml) verbatim, including the
  "canonical robust + non-adaptive anchor" framing. No defect.
- **cascade_susceptibility**: score 0 (deliberate floor), matches the
  stars anchor (schema/anchors/cascade_susceptibility.yaml) essentially
  verbatim, including the explicit contrast with the criticality column's
  score of 2. No defect.

## 4. Anchor-count cross-check (provenance claim)

`provenance.scoping_and_rubrics` states: "anchors reused verbatim from
schema/anchors/*.yaml where stars is a worked anchor (all 15 rubric/hybrid
columns)." Direct count of `schema/anchors/*.yaml` files: 15
(adaptive_capacity, cascade_susceptibility, chaos_sensitivity, criticality,
decentralization, emergence, feedback, information_processing,
memory_hysteresis, modularity, nonlinearity, openness_dissipation,
robustness_resilience, self_organization, tipping_transitions). Of these,
**self_organization.yaml has no stars anchor** (verified directly above).
So the provenance claim "all 15 rubric/hybrid columns [are worked anchors
for stars]" is not quite accurate — 14 of the 15 anchor files have a stars
anchor; self_organization does not, and the entry's own text one paragraph
later (inside the `self_organization` attribute's justification) correctly
says so ("Not directly anchored for stars in self_organization.yaml"). This
is an internal inconsistency between the provenance summary sentence and
the attribute-level justification immediately below it in the same file.
**FINDING (note)**: low severity, self-correcting within the same document,
but worth tightening the provenance wording for the next drafting pass.

## 5. Relations cross-check (docs/roster.md, existing data/classes/ entries)

`relations.part_of: [galaxies]` — `galaxies` is a listed roster candidate
(docs/roster.md, "Astrophysical" row) but does not yet exist as a
data/classes/ entry; correctly marked "unresolved -> roster expansion
queue" per the schema.md convention (unresolved names are legal, they form
the expansion queue). No reciprocity check possible or required (no
`galaxies.yaml` exists to check for a `contains: [stars]` back-link).

`relations.contains: [convection-cells]` — `convection-cells` (Rayleigh-
Bénard) is a listed roster candidate (docs/roster.md, "Physical & chemical"
row) and does not yet exist as a data/classes/ entry; correctly marked
unresolved. The entry's own `contains_note` is unusually long and
transparent about the judgment call (granulation-as-Rayleigh-Bénard-
instance) and explicitly flags it for the consistency checker to revisit
once convection-cells' own scoping note is written.

**Cross-entry tension worth flagging explicitly (not previously surfaced in
the entry's own flags):** `data/classes/tropical-cyclones.yaml` line 42
records `contains: [moist-convection-cells]` with an inline comment
"unresolved; distinct from Rayleigh-Benard convection-cells — see
component_ontology" — i.e., the tropical-cyclones entry, drafted
separately, explicitly treats a storm's convective cells as a DIFFERENT
class from Rayleigh-Bénard `convection-cells`, while stars' own
`contains_note` argues at length that solar granulation SHOULD be treated
as the SAME class (`convection-cells`) as Rayleigh-Bénard, specifically on
the grounds that "the boundary-condition differences" (compressible,
radiatively cooled, stratified) are outweighed by shared generative
mechanism. Tropical-cyclones' moist convection is comparably compressible,
non-Rayleigh-Bénard-boundary-condition convection, yet was routed to an
`itself_complex`-free, entirely separate unresolved id
(`moist-convection-cells`) rather than folded into `convection-cells`. This
is the exact cross-entry precedent the stars entry's own flag
(`relations.contains` in provenance.flags) asks the consistency checker to
check against convection-cells' own (not-yet-written) scoping note — but
the more immediate, already-available comparison point is tropical-cyclones'
own sibling decision, which points the opposite direction. **FINDING
(note, escalating the entry's own flagged item with a concrete comparator)**:
this is squarely a consistency-checker question, not fabrication, but the
coverage checker records it here because the comparator entry
(tropical-cyclones.yaml) was available and had not yet been checked against.

No `financial-markets.yaml` relation touches stars; no reciprocity issue
there.

## 6. Sweep-report orphan check (research/phase4/stars-sources.md)

Compared every numbered subsection of the sweep report against the
corresponding attribute. All quantitative values, ranges, and hedges in the
sweep are integrated into the entry, with one exception already logged
above (Group A, energy_rate_density: 10-M☉ fusion-stage intermediate
values 1800/2600 dropped) and one exception logged under criticality
(arXiv:2503.18136 / Aschwanden et al. 2019 citation never added to
`sources:` despite the underlying 13-orders-of-magnitude claim and its
companion α_E≈1.67 figure being drawn from it via
`research/phase1/dynamics-criticality.md`). The sweep's "My 3 biggest
uncertainties" section maps 1:1 onto `provenance.flags` items 1 and 2
(numerosity/fractal_dimension_spatial; extreme_event_statistics/
criticality CSN-gap) plus a slightly reworded version of uncertainty #3
(instance_population) — all three sweep uncertainties are carried into
provenance.flags, so none are silently dropped.

## 7. Fillable-vs-genuinely-unmeasured judgment for each `unknown`/soft value

| Column | Current status | Fillable? | Candidate source |
|---|---|---|---|
| component_ontology > supergranulation count_oom | "not recovered this sweep; unknown" | Likely fillable | Rincon & Rieutord 2018 (already cited elsewhere in entry as rincon-rieutord2018) probably states a supergranule count (surface area / cell area); a primary-read pass of the already-cited review could resolve this without a new search. |
| component_ontology > sunspot group count | `[unverified — model knowledge]` | Fillable | Hathaway, "The Solar Cycle," Living Reviews in Solar Physics 12, 4 (2015) — already named in the sweep report's characteristic_timescales row as the standard modern review; not yet added to entry sources. |
| fractal_dimension_spatial (supergranulation D) | flagged as located-not-extracted | Fillable | arXiv:2207.10490 and arXiv:2202.00447, both explicitly named in the sweep report (stars-sources.md line 51) but never brought into the entry even as a `sources:` placeholder or an `unknown`-with-named-candidate note in the attribute itself — currently only visible if a researcher re-reads the sweep report, not from the entry alone. |
| spatial_extent class-general range (0.1-100 R☉) | `[unverified — model knowledge]` | Fillable | Any standard stellar-astrophysics textbook (e.g., Kippenhahn, Weigert & Weiss, already named elsewhere in the sweep for main-sequence lifetime) would give sourced spectral-type radius ranges. |
| numerosity granule count | measured-untested, secondary-only | Fillable | Roudier & Muller (1986) full text (already the pinned citation for fractal_dimension_spatial) very likely states a granule count/density directly — a single primary-read pass would upgrade BOTH numerosity and fractal_dimension_spatial simultaneously, as the entry's own flag #1 already notes. |
| degree_distribution | not-applicable | Not fillable / correctly terminal | Field/continuum systems have no degree distribution by definition; N/A is the correct legal terminus, not a gap. |
| tipping_transitions | score 0, deliberate floor | Not fillable / correctly terminal | Per the column's own anchor text, absence of any proposed mechanism is itself the finding, not a search failure. |
| cascade_susceptibility | score 0, deliberate floor | Not fillable / correctly terminal | Same reasoning; matches the anchor's stated intent. |

---

## Summary of findings

Zero blockers. The entry has full 30/30 column coverage, all required
structural blocks, and 14 of its 15 rubric/hybrid scores are verbatim or
near-verbatim matches to the project's own vetted anchors (the 15th,
self_organization, is honestly flagged as unanchored and reasoned from the
nearest comparator, which is correct practice, not a defect). The
substantive issues found are: (1) an orphaned citation on the criticality
column — the "13 orders of magnitude" / α_E≈1.67 claim traces to
arXiv:2503.18136 (+ Aschwanden et al. 2019) per the project's own
phase1/phase4 research files, but that source was never added to the
entry's `sources:` block or cited on the attribute; (2) a truncated
data-carryover on energy_rate_density's 10-M☉ fusion-stage table (two of
four primary-read intermediate values dropped); and several lower-severity
completeness notes (missing evidence_status on interaction_topology,
interaction_ontology, and variation_selection; a minor provenance-summary
overcount of "15 anchored columns" vs. the actual 14; and a cross-entry
relations tension between stars' convection-cells reasoning and
tropical-cyclones' moist-convection-cells reasoning that the consistency
checker should resolve). No fabricated values, DOIs, or page numbers were
found; every `unverified` and secondary/snippet-only claim is correctly
labeled as such.
