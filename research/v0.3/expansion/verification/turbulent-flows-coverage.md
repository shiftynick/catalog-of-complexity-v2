# Coverage check — turbulent-flows

Checked against: schema/panel-spec.yaml (30 columns, frozen v1.0), schema/anchors/*.yaml (15 files, one per rubric/hybrid column), docs/schema.md (entry shape), docs/roster.md (fame-gating + roster candidacy), research/v0.3/expansion/turbulent-flows-sources.md (sweep report).

## 1. Column-by-column presence (all 30 panel-spec columns)

Group A (7): category(top-level, present) · spatial_extent(present) · characteristic_timescales(present) · numerosity(present) · instance_population(present) · component_ontology(present) · energy_rate_density(present)

Group B (7): interaction_topology(present) · interaction_ontology(present) · degree_distribution(present) · modularity(present) · hierarchy_depth(present) · fractal_dimension_spatial(present) · decentralization(present)

Group C (8): nonlinearity(present) · feedback(present) · openness_dissipation(present) · chaos_sensitivity(present) · criticality(present) · extreme_event_statistics(present) · temporal_correlation(present — value explicitly `unknown`, legal per no-guessing rule, NOT a missing-column defect) · tipping_transitions(present)

Group D (2): memory_hysteresis(present) · information_processing(present)

Group E (2): adaptive_capacity(present) · variation_selection(present)

Group F (4): emergence(present) · self_organization(present) · robustness_resilience(present) · cascade_susceptibility(present)

**Result: 30/30 columns present. Zero missing-entirely columns.** `temporal_correlation` is present-but-unknown, which is a legal state, not a defect, per filling_rules.no-guessing and panel-spec's evidence_status vocabulary.

## 2. Structural blocks (docs/schema.md)

- `exemplars`: present, 3 entries (primary: turbulent-pipe-shear-flow; comparative: homogeneous-isotropic-turbulence; NAMED-but-deferred: geophysical-turbulence). Matches sweep's exemplar framing exactly.
- `scoping_note`: present, unusually thorough — explains atomicity convention, why geophysical instances are excluded, and why relations edges are deliberately not added to weather-systems/ocean-circulation.
- `summary`: present, one paragraph, accessible register as required.
- `relations`: present, `part_of: []`, `contains: []` — both deliberately empty. Justified at length in scoping_note (turbulence is a dynamical regime, not a compositional part, of weather-systems/ocean-circulation). Checked reciprocity: grepped all of data/classes/ for "turbulent-flows" / "turbulence" — weather-systems.yaml only mentions turbulence in prose (line 61), no `contains: [turbulent-flows]` edge exists anywhere. No reciprocity violation. Legal per docs/schema.md's singleton/no-edge precedent.
- `component_ontology`: present (1 part type: fluid parcels, count_oom unknown, interchangeable yes, itself_complex no).
- `interaction_ontology`: present (3 types, closed alphabet, justified against the tropical-cyclones anchor precedent).
- `emergent_phenomena`: present, 4 entries (energy cascade, coherent structures, laminar-turbulent transition, intermittency) — matches the sweep's registry seed 1:1.
- `sources`: present, 14 entries, every citation carries a read-status annotation (primary-read / snippet-verified / [unverified — model knowledge]) per the non-negotiable convention.
- `provenance`: present, drafted_by + verification status block (all four checks "pending," correctly reflecting this is the pre-verification draft) + 3 flags (criticality, chaos_sensitivity, fractal_dimension_spatial) carried forward from the sweep's own uncertainty list.

All required structural blocks present.

## 3. Anchor coverage

15 rubric/hybrid columns in the entry: modularity, decentralization, nonlinearity, feedback, openness_dissipation, chaos_sensitivity, criticality, tipping_transitions, memory_hysteresis, information_processing, adaptive_capacity, emergence, self_organization, robustness_resilience, cascade_susceptibility. schema/anchors/ contains exactly 15 files, one per column, 1:1 match. No anchor is missing for a scored column, and no scored column lacks an anchor file to check against.

## 4. Roster / fame-gating (docs/roster.md)

"turbulent flows" is explicitly named in the roster candidate list under "Physical & chemical." Fame-gating is satisfied — this is not a queue-jump.

## 5. Sweep report cross-check — orphan values (recovered but never integrated)

Went through all 14 numbered sections of turbulent-flows-sources.md against the entry:

- Sections 1–4 (spatial_extent, characteristic_timescales, numerosity/component_ontology, instance_population): fully integrated, values and hedge language match.
- Section 5 (energy_rate_density): ABL and grid-turbulence epsilon ranges integrated. **Orphan found**: the sweep's explicit cross-reference instruction — "Cross-reference (NOT independently re-derived...): weather-systems.yaml lines 241-242 carries atmospheric Lorenz-energy-cycle KE dissipation ~2.0-2.6 W/m^2 — record as a related but distinct quantity if cross-referenced, do not conflate units" — was not carried into the entry at all. Confirmed weather-systems.yaml does carry an energy_rate_density value (~2.0-2.6 erg s^-1 g^-1, already atmosphere-mass-normalized, not the W/m^2 the sweep describes it as — a separate, minor cross-entry inconsistency in unit description, not turbulent-flows' fault). The entry's own energy_rate_density block never mentions or disambiguates this adjacent figure, despite the sweep flagging it as a do-not-conflate risk. Flagged as `fix` — a reader could otherwise confuse epsilon (W/kg, per-flow) with the Lorenz-cycle areal flux (W/m^2) since both attach to "atmospheric turbulence."
- Section 6 (fractal_dimension_spatial): fully integrated (both D~2.35 and D~4/3 figures, cross-reference to stars.yaml line 303 noted).
- Section 7 (extreme_event_statistics): fully integrated; the deliberate exclusion of the K41 spectral-scaling claim from this column is correctly carried into the entry's note field.
- Section 8 (temporal_correlation): integrated; the sweep's candidate source (Grant, Stewart & Moilliet 1962) is named in the entry's note as a candidate, correctly left `unknown` rather than guessed.
- Section 9 (degree_distribution): integrated.
- Section 10 (tipping_transitions): integrated, including the DP-vs-bistability framing tension.
- Section 11 (chaos_sensitivity): both regimes integrated. **Orphan found**: the sweep's cross-reference instruction — "chemical-oscillators entry's Swinney-group BZ chaos material shares provenance with (a) — coordinate the two entries' chaos columns as deliberate cross-references per brief" — is not present anywhere in the entry's chaos_sensitivity block or justification. Checked chemical-oscillators.yaml exists (data/classes/chemical-oscillators.yaml) so the cross-reference target is real, not a dangling id. Flagged as `note` (lower severity than the energy_rate_density case — this is an inter-entry coordination nicety, not a risk of conflating two different physical quantities under one column).
- Section 12 (criticality): integrated; the sweep's own hedge ("a verifier should not treat this sweep's evidence as sufficient to lock the score") is reflected in the entry's held-at-3 justification and the provenance flag.
- Section 13 (cascade statistics): integrated (score 0, same reasoning as sweep).
- Section 14 (source list) + registry seed: integrated; all 5 canonical sources and all 4 emergent-phenomena registry entries present.

## 6. Relations-queue / roster-id check

No relations edges to check reciprocity on (both part_of and contains are empty by declared design). No dangling or fabricated ids referenced elsewhere (component_ontology's single part type is not itself a catalog entry; no itself_complex links asserted).

## Summary of defects

Two orphan (recovered-but-not-integrated) findings from the sweep report; no missing columns, no missing structural blocks, no fabricated values, no reciprocity violations.
