# Coverage Check — river-networks

Adversarial pass: assume the entry is incomplete until proven otherwise. Cross-referenced against
`schema/panel-spec.yaml` (30 columns), `schema/anchors/*.yaml` (15 files), `docs/schema.md`,
`docs/roster.md`, `research/phase4/river-networks-sources.md`, and reciprocity against
`data/classes/*.yaml`.

---

## 1. Panel-spec column census (30 columns)

`schema/panel-spec.yaml` `columns:` block enumerated (confirmed via `awk`/`grep`, 30 `- id:` entries,
Group A through Group F). Cross-checked against `data/classes/river-networks.yaml`:

| # | Column | Present? | Where |
|---|---|---|---|
| 1 | category | YES | top-level `category: geophysical` (matches vocabulary: astrophysical/geophysical/physical-chemical/socio-economic/infrastructure/cultural-informational) |
| 2 | spatial_extent | YES | attributes.spatial_extent |
| 3 | characteristic_timescales | YES | attributes.characteristic_timescales (4 named timescales) |
| 4 | numerosity | YES | attributes.numerosity |
| 5 | instance_population | YES | attributes.instance_population |
| 6 | component_ontology | YES | attributes.component_ontology |
| 7 | energy_rate_density | YES (value: unknown, legal) | attributes.energy_rate_density |
| 8 | interaction_topology | YES | attributes.interaction_topology |
| 9 | interaction_ontology | YES | attributes.interaction_ontology (3 types, closed alphabet) |
| 10 | degree_distribution | YES (value: not-applicable, justified) | attributes.degree_distribution |
| 11 | modularity | YES | attributes.modularity |
| 12 | hierarchy_depth | YES | attributes.hierarchy_depth |
| 13 | fractal_dimension_spatial | YES | attributes.fractal_dimension_spatial |
| 14 | decentralization | YES | attributes.decentralization |
| 15 | nonlinearity | YES | attributes.nonlinearity |
| 16 | feedback | YES | attributes.feedback (3 loops) |
| 17 | openness_dissipation | YES | attributes.openness_dissipation |
| 18 | chaos_sensitivity | YES | attributes.chaos_sensitivity |
| 19 | criticality | YES | attributes.criticality (score 0, floor anchor) |
| 20 | extreme_event_statistics | YES | attributes.extreme_event_statistics |
| 21 | temporal_correlation | YES | attributes.temporal_correlation |
| 22 | tipping_transitions | YES | attributes.tipping_transitions |
| 23 | memory_hysteresis | YES | attributes.memory_hysteresis |
| 24 | information_processing | YES | attributes.information_processing |
| 25 | adaptive_capacity | YES | attributes.adaptive_capacity |
| 26 | variation_selection | YES | attributes.variation_selection (value: absent) |
| 27 | emergence | YES | attributes.emergence |
| 28 | self_organization | YES | attributes.self_organization |
| 29 | robustness_resilience | YES | attributes.robustness_resilience |
| 30 | cascade_susceptibility | YES | attributes.cascade_susceptibility |

**Verdict: 30/30 columns present structurally.** No column is missing-entirely. Several columns
correctly carry `unknown` or `not-applicable` values with justification (energy_rate_density,
degree_distribution) — per docs/schema.md and filling_rules.no-guessing this is a legal value, not a
defect, and is NOT flagged.

---

## 2. Required structural blocks (docs/schema.md)

| Block | Present? | Notes |
|---|---|---|
| `id`, `name`, `category`, `status` | YES | id: river-networks, status: draft |
| `exemplars` | YES | 2 exemplars: mississippi-basin (primary), nile-basin (secondary, scoped to temporal_correlation only) |
| `scoping_note` | YES | detailed boundary statement, atomicity convention declared (channel links/segments) |
| `summary` | YES | one paragraph, accessible-layer prose |
| `relations` | YES | part_of: [planetary-climate]; contains: [] — see §4 reciprocity finding |
| `attributes` (component_ontology, interaction_ontology present within) | YES | see §1 |
| `emergent_phenomena` | YES | 4 items, each with order_parameter |
| `sources` | YES | 16 sources, each citation annotated primary-read vs snippet-verified vs [unverified] |
| `provenance` | YES | drafted_by, scoping_and_rubrics, verification (checks pending), flags (4 standing flags) |

All required blocks present. Every citation in `sources:` is annotated with primary-read /
snippet-verified / [unverified] status per the hard rule — spot-checked all 16 entries, confirmed.

---

## 3. Sweep report cross-check (research/phase4/river-networks-sources.md) — orphan values

Read the full sweep report end-to-end and diffed every recovered value/claim against the entry.

**Confirmed integrated (no orphan):** spatial_extent (drainage area + channel length), all four
characteristic_timescales, numerosity (Horton-derived stream-segment estimate), instance_population
(310 transboundary basins), energy_rate_density (unknown, derivation-feasibility note carried over),
Horton ratios R_B/R_L/R_A (carried into fractal_dimension_spatial.detail), degree_distribution
(not-applicable reasoning), extreme_event_statistics (alpha 0.27-0.90, measured-untested + Basso 2023
methodology note), temporal_correlation (Nile/Danube Hurst), tipping_transitions (avulsion + lobe-switching
period), cascade_susceptibility (qualitative-only verdict), chaos_sensitivity (unresolved, not adopted per
no-market-chaos analogy), Mississippi mean-discharge range (used in openness_dissipation).

**ORPHAN FOUND — Hack's law quantitative content never integrated as a panel value.**
The sweep report's own "Source list for entry" section (item 2, Rigon et al. 1996) states this source
was **PRIMARY-READ IN FULL** — the single highest-evidence-tier citation in the entire sweep — and
explicitly recovers:
  - Hack's law exponent h = 0.6 (original Hack 1957), plus Muller (1973) basin-size-dependent range
    0.6/0.5/0.47
  - area-exceedance exponent beta ~ 0.43-0.46
  - the beta + h = 1 relation
  - basin elongation / self-affinity (Hurst exponent of basin boundaries)
  - fractal channel sinuosity

Of this list, only the bare exponent numbers survive into the entry, and only inside
`emergent_phenomena` (narrative order_parameter field) and prose mentions inside the `emergence`
rubric justification (lines ~539, 614-615). **Hack's law itself (L = 1.4 A^0.6) never appears as a
`type: quantitative` attribute anywhere in the entry** with its own value/unit/method/sources/
evidence_status — despite being exactly the kind of citable quantitative relation the panel spec
wants, sourced from the entry's ONE fully primary-read reference. The beta exponent, the beta+h=1
relation, the basin-boundary self-affinity Hurst exponent, and the fractal channel-sinuosity result
are not integrated anywhere in the entry at all — not even as a `detail:` sub-field or an `unknown`
placeholder acknowledging they were seen and set aside.

This is the clearest coverage defect: recovered-but-never-integrated primary-read content,
exactly the failure mode this check is designed to catch. `fractal_dimension_spatial.detail` already
uses a slotted-value convention (horton_bifurcation_ratio_R_B, missouri_subbasin_channel_length_D,
...) that a `hack_law_exponent_h` / `hack_beta_exceedance_exponent` entry would fit into directly, or
Hack's law could be its own quantitative attribute distinct from fractal_dimension_spatial (it is a
length-vs-area scaling law, not strictly a fractal-dimension figure, though the two are related in the
literature). At minimum this belongs in `fractal_dimension_spatial.detail` or `emergent_phenomena`
gets a matching `sources:`-cited quantitative companion elsewhere in `attributes`.

**No other orphans found.** All other sweep-report values either appear in the entry or are
explicitly and consistently marked `unknown` in both places (e.g., Mississippi-specific Hurst
exponent, Mississippi-specific alpha, chaos/predictability horizon, avulsion superelevation-ratio
threshold, total global river-basin count).

---

## 4. Relations reciprocity check (roster.md + data/classes/*.yaml)

`river-networks.relations`:
```
part_of: [planetary-climate]
contains: []
```

`planetary-climate` is a RESOLVED id — the entry exists at `data/classes/planetary-climate.yaml`.
Checked `planetary-climate.yaml`'s own `relations.contains`:
```
contains: [weather-systems, tropical-cyclones, ocean-circulation]
```
**river-networks is absent from planetary-climate's `contains` list.**

Compare to how the project handles this elsewhere: `tropical-cyclones.yaml` declares
`part_of: [weather-systems, planetary-climate]`, and `planetary-climate.yaml` DOES reciprocate with
`tropical-cyclones` in its own `contains` (with an explanatory comment: "tropical-cyclones: RESOLVED —
entry exists ... its own relations.part_of already lists [weather-systems, planetary-climate]").
Likewise `cities.yaml` <-> `financial-markets.yaml` and `cities.yaml` <-> `power-grids.yaml` are
mutually consistent. river-networks is the one pilot-10 entry with a resolved `part_of` target whose
reciprocal `contains` link was not added on the other side. This is flagged as a fix (not a blocker):
the underlying claim is not wrong, but the compositional graph the catalog is building (docs/schema.md
D13) is asymmetric for this one edge, and would need only a one-line addition of `river-networks` to
`planetary-climate.yaml`'s `contains` list (an edit to a different file than this check is permitted to
make).

`relations.contains: []` for river-networks itself is explicitly and correctly annotated in-file as a
deliberate scoping choice ("deltas/floodplains: candidate future entries, deliberately left unresolved
per scoping_note boundary") — no defect there; this is a documented decision, not an omission.

All ids referenced (`planetary-climate`) are legal per docs/schema.md ("unresolved names... form the
roster expansion queue" — moot here since planetary-climate IS resolved) and appear in
`docs/roster.md`'s pilot 10 (`# 3 | Planetary climate`). No relation ids reference non-existent or
misspelled ids.

---

## 5. Anchor cross-check (schema/anchors/, 15 files)

Entry claims reuse of river-networks' own worked-anchor language, "verbatim" or "per this class's own
anchor," for 8 columns: self_organization, criticality, tipping_transitions, information_processing,
cascade_susceptibility, modularity, chaos_sensitivity, adaptive_capacity.

Verified all 8 anchor files contain a `system: river-networks` / `exemplar: "Mississippi River basin"`
entry:

| Anchor file | river-networks entry found? |
|---|---|
| self_organization.yaml | YES (line 31-32) |
| criticality.yaml | YES (line 144-145) |
| tipping_transitions.yaml | YES (line 111-112) |
| information_processing.yaml | YES (line 126-127) |
| cascade_susceptibility.yaml | YES (line 114-115) |
| modularity.yaml | YES (line 90-91) |
| chaos_sensitivity.yaml | YES (line 181-182) |
| adaptive_capacity.yaml | YES (line 48-49) |

All 8 claimed-anchor columns check out — no contradiction, no fabricated "per this class's own anchor"
claim. The remaining 7 rubric/hybrid columns (nonlinearity, feedback, openness_dissipation,
memory_hysteresis, emergence, robustness_resilience, decentralization) are correctly scored fresh
against scale text with a named nearest-comparator anchor from a DIFFERENT class (e.g.
earthquake-fault-systems for nonlinearity, the-internet for robustness_resilience, cities for
openness_dissipation) since no dedicated river-networks anchor exists for those 7 — this is disclosed
explicitly in each justification and in `provenance.scoping_and_rubrics`. No anchor contradiction
found. (decentralization uses the `stars` anchor comparator — checked stars.yaml decentralization
section exists and scores 4, matching the cited comparison — consistent.)

---

## 6. Unknown-value fillability triage

Every `unknown` value in the entry was checked against the sweep report for whether it is genuinely
unmeasured or plausibly fillable from literature not yet consulted:

| Column / sub-value | unknown? | Fillable? |
|---|---|---|
| characteristic_timescales: fastest constituent process (headwater storm-runoff concentration time) | yes | Plausibly fillable — unit hydrograph / rational-method literature (e.g. USGS StreamStats regional regression equations) routinely publishes headwater time-of-concentration figures; not a fundamental unknown, just not pulled in this sweep. Candidate source: USGS StreamStats or a regional unit-hydrograph study. |
| energy_rate_density (Phi_m) | yes | Fillable in principle via project-side derivation (stream-power calculation from discharge + relief), as the entry itself already notes; flagged for Phase 5. Not a literature gap, a computation gap. |
| numerosity (enumerated total stream-segment count) | not fully unknown — derived value present | Genuinely hard to fill directly; USGS National Hydrography Dataset (NHD) could in principle provide a real enumerated segment count for the Mississippi basin (a GIS product, not a review paper) — candidate source for a future sweep, distinct from the current Horton-derived estimate. |
| Mississippi-specific Hurst exponent | yes | Plausibly fillable — hydrology literature on Mississippi/Missouri long-range dependence exists (e.g. work building on Hurst/Mandelbrot's original Nile study applied to US rivers); not located this sweep but a targeted search is likely to succeed. |
| Mississippi-specific extreme_event_statistics alpha | yes | Plausibly fillable via Basso et al. 2023 full-text (already identified as applying CSN-grade rigor to US streamflow) — entry itself flags this for Phase 5 follow-up. |
| avulsion superelevation-ratio threshold (specific metric) | yes | Plausibly fillable — Mohrig-style superelevation-ratio criteria exist in the avulsion literature (named in the sweep report itself as a candidate, e.g. Mohrig et al.); not located this sweep. |
| Hack's law beta exponent, beta+h=1 relation, basin-boundary self-affinity Hurst, channel-sinuosity fractal D | NOT recorded as unknown — recorded nowhere at all (orphan, see §3) | Already available (Rigon et al. 1996, primary-read) — this is not a "genuinely unmeasured" gap, it's an integration gap. |
| total global count of ALL river basins (not just transboundary) | yes | Genuinely hard/likely unmeasurable — the entry's own note correctly identifies this as a moving target with no citable enumeration; treated as correctly-recorded unknown, not a defect. |

---

## Summary of defects found

1. **Fix** — Hack's law and associated quantitative content (beta exponent, beta+h=1 relation,
   basin-boundary self-affinity, channel-sinuosity D) from the sweep's only primary-read source
   (Rigon et al. 1996) were recovered but never integrated as citable panel values — only the bare
   exponent survives, in narrative-only form (emergent_phenomena, emergence justification prose).
2. **Fix** — `relations.part_of: [planetary-climate]` is not reciprocated in
   `data/classes/planetary-climate.yaml`'s `contains:` list, unlike the tropical-cyclones and
   cities/financial-markets/power-grids edges, which are all properly bidirectional. Requires a
   one-line addition on the planetary-climate side (out of scope for this checker to edit).
3. No blockers found: no fabricated values, no anchor contradictions, no missing-entirely columns,
   no miscited primary/snippet status.
