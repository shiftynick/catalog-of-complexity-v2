# Coverage Check — planetary-climate

Checker: COVERAGE CHECKER (adversarial). Date: 2026-07-02.
Target: `data/classes/planetary-climate.yaml`
References checked: `schema/panel-spec.yaml`, `schema/anchors/*.yaml` (15 files, all read), `docs/schema.md`, `docs/roster.md`, `research/phase4/planetary-climate-sources.md`, `data/classes/tropical-cyclones.yaml`, `data/classes/stars.yaml`, `data/classes/financial-markets.yaml` (for reciprocity/cross-entry consistency).

No edits made to the entry or any reference file, per instructions.

---

## 1. Panel-spec column-by-column presence audit (30 columns + category)

panel-spec.yaml defines 30 attribute columns (Groups A-F) plus the top-level `category` field. Extracted column id list and cross-checked against the entry's `attributes:` keys plus top-level `category:`.

| # | Column | Present? | Value type present | Notes |
|---|---|---|---|---|
| 0 | category | YES | `geophysical` | top-level, correct vocabulary term |
| A1 | spatial_extent | YES | quantitative, value=1e7 m | measured, confidence medium |
| A2 | characteristic_timescales | YES | 3-item list | 1 measured, 1 qualitative, 1 `unknown` (system lifetime) — legitimate use of unknown |
| A3 | numerosity | YES (value=unknown) | quantitative | value present as `unknown`, justified in note. **Missing required `evidence_status:` field** (see finding) |
| A4 | instance_population | YES | quantitative | value = "n>=4...", measured, confidence medium |
| A5 | component_ontology | YES | structured, 5 parts | confidence: low (self-flagged) |
| A6 | energy_rate_density | YES | quantitative, 3 values given | derived, confidence low, verifier_flags present |
| B1 | interaction_topology | YES | categorical = field/continuum | no evidence_status field, but categorical columns in this schema don't uniformly carry one (see finding, minor) |
| B2 | interaction_ontology | YES | structured, 5 types, closed alphabet | complete |
| B3 | degree_distribution | YES | quantitative, value=not-applicable | **Missing required `evidence_status:` field** (also true of tropical-cyclones' identical treatment — class-wide pattern, not unique to this entry) |
| B4 | modularity | YES | rubric, score=1 | evidence_status: qualitative |
| B5 | hierarchy_depth | YES | quantitative, value=4 | evidence_status: qualitative |
| B6 | fractal_dimension_spatial | YES | quantitative, value=1.35 | measured, confidence medium, verifier_flags |
| B7 | decentralization | YES | rubric, score=4 | evidence_status: qualitative |
| C1 | nonlinearity | YES | rubric, score=4 | evidence_status: qualitative |
| C2 | feedback | YES | rubric, score=4, loops list | matches feedback.yaml anchor verbatim |
| C3 | openness_dissipation | YES | hybrid, score=3 | measured, confidence medium |
| C4 | chaos_sensitivity | YES | hybrid, score=3 | matches chaos_sensitivity.yaml anchor verbatim |
| C5 | criticality | YES | hybrid, score=1, mechanism_status=proposed | qualitative |
| C6 | extreme_event_statistics | YES (value=unknown) | quantitative | evidence_status: unknown — correctly legal |
| C7 | temporal_correlation | YES (value=unknown) | quantitative | **no evidence_status field at all** (see finding) |
| C8 | tipping_transitions | YES | hybrid, score=4, count=16 | matches tipping_transitions.yaml anchor verbatim |
| D1 | memory_hysteresis | YES | hybrid, score=4 | matches memory_hysteresis.yaml anchor verbatim (measured-disputed) |
| D2 | information_processing | YES | rubric, score=0 | matches information_processing.yaml canonical-0 reasoning |
| E1 | adaptive_capacity | YES | rubric, score=0 | matches adaptive_capacity.yaml anchor verbatim |
| E2 | variation_selection | YES | categorical = absent | **Missing required `evidence_status:` field** (see finding) |
| F1 | emergence | YES | rubric, score=3 | qualitative, consistent with tropical-cyclones' own score-3 reasoning |
| F2 | self_organization | YES | rubric, score=4 | qualitative, consistent with tropical-cyclones/river-networks anchors |
| F3 | robustness_resilience | YES | rubric, score=3, level=exemplar(earth) | qualitative |
| F4 | cascade_susceptibility | YES | hybrid, score=2 | qualitative, cites tipping-cascades-review-2024 |

**Result: 30/30 columns present in some form (value + justification/note).** No column is missing entirely. All uses of `unknown` (numerosity, characteristic_timescales.system-lifetime, extreme_event_statistics, temporal_correlation) are accompanied by a specific note naming why and, where applicable, a candidate source for future recovery — this is the correct "unknown is legal, never guessed" pattern per filling_rules.no-guessing.

### Missing `evidence_status` field (mechanical/structural defect)

panel-spec.yaml states under `evidence_status:` — "# required on every value." Checked every attribute block for an explicit `evidence_status:` key:

- `numerosity` — **no evidence_status field.** Value is `unknown`; the note makes clear this should be `evidence_status: unknown`, but the key is absent.
- `degree_distribution` — **no evidence_status field.** Value is `not-applicable`; tropical-cyclones.yaml has the identical omission, so this is a systemic gap in the class's `not-applicable` convention, not unique to this entry, but still a real gap relative to the "required on every value" rule.
- `temporal_correlation` — **no evidence_status field.** Value is `unknown`; same issue as numerosity.
- `variation_selection` — **no evidence_status field.** Categorical value `absent` with a justification paragraph, but no explicit evidence_status key (should plausibly be `qualitative`, matching the sibling categorical/rubric columns which do carry it).
- `interaction_topology` — no evidence_status field (categorical column: `field/continuum`). Same systemic gap; tropical-cyclones' `interaction_topology` also lacks it.

These are FIX-severity: the intent is clear from context in every case (no ambiguity about what the missing value should be), so this does not poison the catalog, but it is a mechanical non-compliance with a binding panel-spec rule ("required on every value") that should be corrected before verified status.

---

## 2. Structural blocks required by docs/schema.md

Checked against the schema.md worked example structure:

- `exemplars` — present, 4 entries (Earth primary + Venus/Mars/Titan comparative), each with id/name/note. Matches roster.md's designated exemplar set exactly ("Earth (comparative: Venus, Mars, Titan)").
- `scoping_note` — present, detailed, explicitly states atomicity convention (fluid parcels, synoptic/mesoscale) and boundary (in/out of scope), cross-references tropical-cyclones for consistency. Complete.
- `summary` — present, one paragraph, accessible-layer prose. Complete.
- `relations` — present: `part_of: []`, `contains: [weather-systems, tropical-cyclones, ocean-circulation]` with inline comments explaining resolution status of each. Complete (see Section 3 below for reciprocity check).
- `component_ontology` — present under attributes (see column audit above). Complete.
- `interaction_ontology` — present under attributes. Complete.
- `emergent_phenomena` — present, 6 entries, each with name + order_parameter. Complete, matches schema.md's required shape.
- `sources` — present, 17 keyed citations, each with citation text and explicit primary-read vs. snippet-verified annotation. Complete — this is a genuine strength of the entry; every single source annotation states its verification tier explicitly (a requirement of the task's HARD RULES), which is not true of every entry style seen elsewhere in the catalog.
- `provenance` — present: `drafted_by`, `scoping_and_rubrics`, `verification` (citation_check/plausibility_check/consistency_check/coverage_check all "pending" — correct, since this is a draft awaiting exactly this check), and a `flags` list of 5 self-identified top uncertainties. Complete and unusually transparent.

No structural block required by schema.md is missing.

---

## 3. Relations vs. docs/roster.md and existing entries (reciprocity)

- `relations.contains: [weather-systems, tropical-cyclones, ocean-circulation]`
  - `weather-systems` — no entry exists in `data/classes/` (confirmed: only `financial-markets.yaml`, `tropical-cyclones.yaml`, `stars.yaml`, `planetary-climate.yaml` exist). Roster.md lists "weather systems / atmosphere" as a full-roster candidate, not yet drafted. Correctly left unresolved per the entry's own inline comment ("roster expansion queue"). Not a defect.
  - `tropical-cyclones` — entry exists. Checked reciprocity: `data/classes/tropical-cyclones.yaml` line 41 has `relations.part_of: [weather-systems, planetary-climate]`. **Reciprocity confirmed** — tropical-cyclones correctly lists planetary-climate as a parent. The planetary-climate entry's own inline comment correctly documents this resolution. No defect.
  - `ocean-circulation` — no entry exists. Roster.md lists "ocean circulation" as a full-roster candidate under Geophysical, not yet drafted. Correctly left unresolved. Not a defect.
- `relations.part_of: []` — correct; planetary-climate is a top-level pilot-10 class (roster.md #3) with no parent in the current roster. Consistent.
- Roster.md's designated exemplar for class #3 is "Earth (comparative: Venus, Mars, Titan)" — matches the entry's `exemplars` list exactly (id/order: earth, venus, mars, titan).

No relations/reciprocity defects found.

---

## 4. Anchor cross-check (schema/anchors/*.yaml, all 15 files read)

planetary-climate carries a **direct, named anchor** (not just an analogy) in 5 of the 15 anchor files, and the entry's score/justification in every case matches the anchor file's own planetary-climate block essentially verbatim:

| Column | Anchor score | Entry score | Match? |
|---|---|---|---|
| feedback | 4 | 4 | Yes — loop list, mechanisms, sources (ipcc-ar6-wg1-ch7) all consistent |
| chaos_sensitivity | 3 | 3 | Yes — weather-vs-climate Lorenz distinction reproduced correctly |
| tipping_transitions | 4 | 4 | Yes — 16-element count, AMOC threshold, Armstrong McKay 2022 all consistent |
| memory_hysteresis | 4 | 4 | Yes — AMOC 0.4 Sv hysteresis, evidence_status measured-disputed, both consistent |
| adaptive_capacity | 0 | 0 | Yes — "feedbacks operate, they do not learn" language reproduced near-verbatim |

For the remaining 10 rubric/hybrid columns without a direct planetary-climate anchor entry, the entry reasons by explicit analogy to the tropical-cyclones anchor (its own nested subsystem, one level down) or to the stars/river-networks anchors, and in every case names which anchor and why the score differs or matches. This is the correct use of anchors for a system without its own worked anchor case — no fabricated or unsupported score found.

One internal-consistency point worth flagging as a NOTE: the entry's `criticality` justification (score 1) states "not borrowed here, per filling_rules.no-guessing" regarding tropical-cyclones' PDI tail exponent — correctly avoids borrowing a sibling's number, matching filling_rules.soc-two-claims discipline. Consistent with criticality.yaml's own scale definitions (level 1 = mechanism proposed/taken seriously, no CSN-grade fit).

---

## 5. Sweep report (research/phase4/planetary-climate-sources.md) vs. entry — orphan/unintegrated values check

Read the full sweep report and cross-checked every recovered quantity/citation against the entry to find values recovered but never integrated.

**Fully integrated (recovered value appears in entry, correctly annotated):**
- spatial_extent 1e7 m — integrated (geodesy-standard)
- characteristic_timescales (both filled rows + the unknown system-lifetime row) — integrated, including the sweep's exact recommendation language for "system lifetime"
- energy_rate_density all 3 figures (75 / 233 / 0.20 erg/s/g) — integrated with the sweep's exact recommendation to report all three and flag the mass-normalization question
- fractal_dimension_spatial 1.35 — integrated with Lovejoy/Luo/Christensen citation chain
- tipping_transitions 16-element count + AMOC 1.4-8°C — integrated
- memory_hysteresis AMOC 0.4 Sv hysteresis — integrated
- chaos_sensitivity ~2-week horizon — integrated
- instance_population n>=4 — integrated, including the sweep's exact caveat about gas giants/exoplanets not counting
- cascade_susceptibility tipping-cascades-review-2024 — integrated
- extreme_event_statistics — correctly left unknown, matching sweep's explicit recommendation not to borrow tropical-cyclones' PDI exponent
- degree_distribution not-applicable — correctly integrated per sweep section I

**Orphan / recovered-but-not-integrated (present in sweep, absent or under-flagged in entry):**

1. **Read et al. (2016), QJRMS 142(700):703-720** — the sweep explicitly identifies this as "likely the single best canonical comparative-planetology energy-budget synthesis" and recommends prioritizing full-text retrieval "before catalog lock." The entry DOES mention this exact citation and caveat inside `instance_population.note` and again in `provenance.flags` — so this is NOT a silent orphan; it is correctly surfaced as a standing gap, not integrated as a value (appropriately, since it was never primary-read). Checked and confirmed present — not a defect, just noting it was checked.

2. **Net radiative imbalance figure (0.58-0.87 W/m^2, ~0.3-0.4 PW net planetary energy gain, Hansen et al./von Schuckmann)** — recovered in sweep section E ("Net radiative imbalance... this is a distinct, much smaller quantity from the ~1.2e17 W total absorbed throughput; do not conflate") but **does not appear anywhere in the entry**, not even as a flagged omission. This is a genuine distinct quantity (climate-change energy-imbalance signal) that was recovered with a citation (Hansen et al. 2011, arXiv:1105.1140) and snippet-verified, yet never made it into the entry — not in energy_rate_density, not in characteristic_timescales, not as a flag. It doesn't map cleanly onto an existing panel column (it's arguably evidence for openness_dissipation's disequilibrium-quantification, or a distinct constituent of energy_rate_density's method note), but its complete absence from the entry — including absence from provenance.flags — means a reader has no way to know this value was found and set aside. This is a genuine orphan.

3. **Derived 3D cloud-surface fractal dimension (D≈2.35)** — sweep section F notes this secondary inference ("treating the 2D perimeter measurement as a zero-set/cross-section of a 3D fractal surface... flag as such if used"). The entry does not use or mention it. Since the sweep itself frames this as optional/secondary ("if used"), and the entry correctly sticks to the directly-measured D=1.35 rather than reaching for a derived extrapolation, this is the RIGHT call, not a defect — noting it here only to confirm it was checked and correctly excluded.

4. **Leading Lyapunov exponent derivation (λ ≈ ln(2)/5 days ≈ 1.6e-6 /s)** — sweep section L computes this directly from the ~5-day error-doubling time and flags it "should be marked evidence_status: derived" if entered. The entry's chaos_sensitivity block does not include this derived Lyapunov figure at all (only the qualitative "~2 weeks" predictability-horizon language, correctly matching the chaos_sensitivity.yaml anchor's own score-3 justification, which likewise doesn't carry a numeric Lyapunov value for climate specifically — appropriately, since anchor sets this as a WEATHER-subsystem figure, not a climate-system one). Not a defect — correctly out of scope for the climate-level chaos_sensitivity score per the anchor's own weather-vs-climate distinction.

5. **Venus atmospheric mass breakdown (~4.69e20 kg CO2 + ~1.1e19 kg N2)** — recovered in sweep section D with an explicit "recommend re-verification... before catalog entry" flag. Absent from the entry entirely — correctly so, since it was flagged as needing re-verification and the entry's Venus exemplar note only carries the already-corroborated pressure/temperature figures (92-95 bar, 737 K), not the unverified mass breakdown. Correct exclusion, not a defect.

**Net finding: one genuine orphan (item 2, the net radiative imbalance figure) — a recovered, sourced, distinct quantity that silently disappeared between the sweep and the entry with no flag anywhere.** This is FIX-severity: it's not fabricated or wrong, it just should either be added (most naturally as a supplementary note under energy_rate_density's method, clearly distinguished from the throughput figure per the sweep's own "do not conflate" instruction) or explicitly flagged as consciously omitted in provenance.flags.

---

## 6. Roster / cross-entry consistency spot checks

- Category `geophysical` matches roster.md's implicit categorization (climate sits under "Geophysical" in the full-roster candidates list). Correct.
- Pilot-10 designated exemplar match confirmed (Section 3).
- component_ontology numerosity gap: the entry's own note claims "no one has published a canonical convention for the denominator" for a parcel-count derivation — yet `tropical-cyclones.yaml`'s own component_ontology DOES declare exactly such a convention for itself ("~1e7 at the declared 1 km^3 convention"), which is a **project-internal** convention (declared by that entry, not literature-published). The planetary-climate entry's numerosity note is technically accurate (no published literature convention exists) but slightly overstates the case by not acknowledging that a project-internal declared-volume convention analogous to tropical-cyclones' own could in principle be adopted here too, the same way tropical-cyclones did for itself. This is a NOTE-level observation, not a blocker — the entry already self-flags numerosity as "the single weakest column in this entry," so the gap is known and owned, just arguably slightly under-explained relative to the precedent sitting one file over.

---

## Summary of findings

- 30/30 panel-spec columns present in some form (value + justification), all required schema.md structural blocks present, relations reciprocity with tropical-cyclones confirmed, all 5 directly-anchored rubric/hybrid scores match their anchor files verbatim, sources are unusually well-annotated for primary-read vs. snippet-verified status throughout.
- Two FIX-severity defects found: (1) five attribute blocks (numerosity, degree_distribution, temporal_correlation, variation_selection, interaction_topology) are missing the panel-spec-mandated `evidence_status:` field even though the correct value is unambiguous from context in each case; (2) the net radiative imbalance figure (~0.3-0.4 PW / 0.58-0.87 W/m^2, Hansen et al. 2011) was recovered with a citation in the sweep report but never integrated into the entry or flagged as a conscious omission.
- One NOTE-level observation: the numerosity column's claim that "no canonical convention exists" slightly understates that this project itself set a precedent (tropical-cyclones' declared parcel-volume convention) that could be extended here, though the entry already self-identifies numerosity as its weakest column.
