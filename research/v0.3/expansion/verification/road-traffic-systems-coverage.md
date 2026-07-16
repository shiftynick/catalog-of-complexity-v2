# Coverage Check — road-traffic-systems

Checked against: schema/panel-spec.yaml (30 columns, frozen v1.0), docs/schema.md
(required structural blocks), docs/roster.md, sibling entries in data/classes/
(esp. cities.yaml for relations reciprocity), and the sweep report
research/v0.3/expansion/road-traffic-systems-sources.md (orphan-value scan).

## 1. 30-column presence audit

All 30 panel-spec columns are structurally present in the entry (29 under
`attributes`, plus `category` at top level). None missing entirely.

| # | Column | Present? | Value status |
|---|---|---|---|
| 0 | category | yes (top-level) | `infrastructure` — matches panel-spec vocabulary |
| 1 | spatial_extent | yes | quantitative, low confidence, honestly caveated |
| 2 | characteristic_timescales | yes | 4 named timescales, mostly qualitative |
| 3 | numerosity | yes | quantitative (global vehicle count) |
| 4 | instance_population | yes | order-of-magnitude, evidence_status: unknown |
| 5 | component_ontology | yes | 2 part types |
| 6 | energy_rate_density | yes | unknown (reasoned) |
| 7 | interaction_topology | yes | categorical: hierarchical-mixed |
| 8 | interaction_ontology | yes | 4 types, type_count, alphabet_closure, justification |
| 9 | degree_distribution | yes | unknown (flagged) |
| 10 | modularity | yes | rubric score 2 |
| 11 | hierarchy_depth | yes | value 3, convention stated |
| 12 | fractal_dimension_spatial | yes | unknown (flagged) |
| 13 | decentralization | yes | rubric score 3 |
| 14 | nonlinearity | yes | rubric score 4 |
| 15 | feedback | yes | rubric score 3, 3 loops listed |
| 16 | openness_dissipation | yes | rubric score 3 |
| 17 | chaos_sensitivity | yes | hybrid score 2 |
| 18 | criticality | yes | hybrid score 1, mechanism_status: proposed |
| 19 | extreme_event_statistics | yes | quantitative, measurand_type + measurand named |
| 20 | temporal_correlation | yes | unknown |
| 21 | tipping_transitions | yes | hybrid score 2 |
| 22 | memory_hysteresis | yes | hybrid score 3 |
| 23 | information_processing | yes | rubric score 1 |
| 24 | adaptive_capacity | yes | rubric score 2 |
| 25 | variation_selection | yes | categorical: contested |
| 26 | emergence | yes | rubric score 3 |
| 27 | self_organization | yes | rubric score 3 |
| 28 | robustness_resilience | yes | rubric score 2 |
| 29 | cascade_susceptibility | yes | hybrid score 2 |

No missing-entirely columns. Genuinely-unknown values (spatial_extent's
metro-network figure is present-with-caveat, not unknown; true `unknown`
verdicts are: energy_rate_density, degree_distribution, fractal_dimension_spatial,
temporal_correlation, instance_population's precise count, plus
component_ontology's road-graph-element count_oom) are all correctly marked
`unknown`/`not recovered` rather than guessed — no fabrication found.

## 2. Structural blocks (docs/schema.md)

- `exemplars`: present, 4 entries (Yokohama MFD, US freeway corridors,
  Sugiyama ring, German autobahn detectors). OK.
- `scoping_note`: present, states boundary and atomicity convention. OK.
- `summary`: present, one accessible paragraph. OK.
- `relations`: present (`part_of: [cities]`, `contains: []`). OK — see
  reciprocity check below.
- `component_ontology`: present under attributes. OK.
- `interaction_ontology`: present under attributes. OK.
- `emergent_phenomena`: present, 4 phenomena each with `order_parameter`. OK.
- `sources`: present, 6 sources, each with a read-status annotation
  (primary/snippet/secondary-synthesis/unfetched — all honestly labeled). OK.
- `provenance`: present, `drafted_by` + `verification` (all four checks
  correctly `pending` at this stage) + a `flags` block enumerating 6
  self-identified gaps. OK — unusually thorough self-flagging.

All required structural blocks present.

## 3. Relations / roster reciprocity

- `road-traffic-systems` appears on docs/roster.md's infrastructure candidate
  list ("road traffic systems") — fame-gate satisfied, consistent with prior
  expansion-queue entries.
- `part_of: [cities]` — checked against data/classes/cities.yaml:
  - line 69: `relations.contains: [power-grids, financial-markets,
    road-traffic-systems, social-networks]` already lists this id — reciprocal
    link exists on the cities side. Correctly noted as RESOLVED in this
    entry's relations comment block.
  - line 170: `component_ontology` row `itself_complex: power-grids
    # road-traffic-systems and others also apply` — a stale comment that could
    now point at this entry. NOT a defect in road-traffic-systems.yaml itself
    (correctly not edited per instructions), but correctly flagged in this
    entry's own `provenance.flags` for a future cities.yaml consistency pass.
  - line 230: `interaction_ontology` participant note ("residents, firms via
    transportation networks; road-traffic-systems unresolved link") — same
    situation, already flagged.
  - Verdict: reciprocity is intact; the two stale cities.yaml comments are a
    real but properly-flagged cross-entry loose end, not a coverage defect of
    this entry.
- `contains: []` — correct; driver-vehicle units are atoms (out-of-scope(human)
  idiom for the driver), not a child catalog entry. No other complex-system
  sub-part identified in component_ontology that should have been linked.
- No other entry in data/classes/ references `road-traffic-systems` in a way
  this entry fails to reciprocate (checked via repo-wide grep — only
  cities.yaml and firms.yaml mention it; firms.yaml's mention is a passing
  aside about cities' contains list, not a relation to reciprocate here).

## 4. Orphan values recovered in the sweep but not integrated into the entry

Checked research/v0.3/expansion/road-traffic-systems-sources.md line-by-line
against the entry's attributes:

- **Fundamental-diagram reference numbers** (sweep's "supporting numbers, not
  a named panel column" section): practical freeway lane capacity ~2000-2400
  veh/h/lane (nominal 2200), and a full calibrated triple (free-flow speed
  u0=110 km/h, critical density kc=27 veh/km/lane, jam density kj=110
  veh/km/lane, implied capacity ≈2241 veh/h/lane), sourced (snippet-verified)
  to TU Delft OCW notes and FHWA (Hall). **This is a genuine orphan**: it
  never appears anywhere in the entry (not in emergent_phenomena, not in
  tipping_transitions/memory_hysteresis narrative, not even as a note). It is
  exactly the kind of concrete number that would strengthen
  `emergent_phenomena`'s "Macroscopic fundamental diagram (MFD)" entry (which
  currently has no numeric order_parameter value at all, only a description)
  and/or `tipping_transitions`'s capacity-drop discussion. Flagged below as a
  `fix`.
- **Lighthill & Whitham (1955)** and **Nagel & Schreckenberg (1992)** appear in
  the sweep's "canonical review/source list" and "outstanding primary reads"
  but are absent from the entry's `sources` block entirely — not even as
  unfetched/orphan candidates (contrast with `helbing2001`, which the drafter
  did carry into `sources` specifically to record it as an uncited orphan).
  Inconsistent treatment: two of five canonical-review targets were dropped
  silently rather than carried forward with the same orphan-flag courtesy.
  Flagged as a `note`.
- Kerner & Rehborn's arXiv corroboration (arXiv:physics/0510167, "Microscopic
  features of moving traffic jams") mentioned in the sweep as the likely
  origin of the corroborating I-5/A5 figures — not separately listed in
  `sources` (only the 1996 Phys. Rev. E paper is, as
  `kerner-rehborn1996-secondary`). Minor — the sweep itself treats this as
  tentative/unconfirmed lineage, so folding it into the one source entry is
  defensible. Note only.

## 5. Unknowns: fillable-from-literature vs genuinely unmeasured

Independent judgment on each `unknown`/uncited-order-of-magnitude value:

- **degree_distribution** (unknown): fillable. Transportation-network-science
  literature on road-graph degree distributions is real and specific — e.g.
  Cardillo et al. (2006), "Structural properties of planar graphs of urban
  street patterns," Phys. Rev. E 73, 066107, reports near-planar low-degree
  distributions (mean degree ~2.5-3 for many city street networks) that would
  directly fill this column at class-general level. The entry's own note
  already gestures at "the transportation-network-science literature" without
  naming a candidate — this review supplies one. `fix` (a specific, likely
  fetchable candidate exists; time-budget gap, not evidentiary absence).
- **fractal_dimension_spatial** (unknown): fillable, same literature family —
  street-network box-counting fractal dimension studies (e.g. Lammer,
  Gehlsen & Helbing 2006, "Scaling laws in the spatial structure of urban road
  networks," Physica A 363; or Batty & Longley's fractal-cities work) report
  D~1.7-1.9 as the entry's own note already surmises. `fix`.
- **temporal_correlation** (unknown): fillable-candidate exists but is weaker/
  less canonical than the two above — traffic-flow time-series long-range-
  dependence studies exist (e.g. multifractal/Hurst-exponent analyses of
  loop-detector flow series in the transportation-engineering literature) but
  the drafter located no specific paper this sweep, and neither did this
  check turn up a single obviously-canonical citation on the level of
  Cardillo or Lammer. `note` rather than `fix` — genuinely lower-confidence
  that a clean, citable figure exists.
- **energy_rate_density** (unknown): judged genuinely hard/ill-defined at
  class-general level (denominator ambiguity: vehicles? roadbed? both?) —
  the entry's own reasoning is sound and matches the-internet precedent
  already in the catalog. Not fillable without the project first deciding a
  denominator convention project-wide. No flag.
- **instance_population**'s ~1e3-1e4 metro-network count (evidence_status:
  unknown): fillable and quick — UN World Urbanization Prospects / World
  Bank urban-agglomeration tables (the entry's own note names "UN/World Bank
  urban-agglomeration counts run ~1700+") are standard, easily fetchable
  reference tables, not a specialized literature search. This is the single
  cheapest upgrade available in the entry. `fix`.
- **component_ontology**'s road-graph-element count_oom (not recovered):
  fillable — OSM-derived street-network statistics (e.g. per-city
  intersection/link counts from OpenStreetMap-based studies) are a named
  candidate in the entry's own note. `note` (lower priority than the
  dynamical-population numbers above, since the entry itself already
  classifies this as non-dynamical substrate).
- **numerosity**'s per-network concurrently-active vehicle count (marked
  "unknown; not recovered"): plausible candidates exist (city transportation
  department / TomTom Traffic Index vehicle-count estimates) but nothing this
  reviewer can point to as a clean single citable figure at class-general
  level. `note`.

## 6. Other observations

- `modularity` and `openness_dissipation` are typed `type: rubric` in this
  entry even though panel-spec.yaml declares both `kind: hybrid`. Checked
  against all 14 other verified entries: this is a catalog-wide convention
  (most entries use `type: rubric` for these two columns when no quantitative
  Q/throughput figure was found; only a handful — world-wide-web, the-internet,
  cities, power-grids, galaxies, planetary-climate — use `type: hybrid` when a
  number was actually recovered). Not a defect specific to this entry; not
  flagged as a coverage issue.
- `provenance.verification` block shows all four checks as `pending` — correct
  and expected at this stage of the pipeline (this coverage check is one of
  the four being run now).
- No sub-field of any structured column (`component_ontology`,
  `interaction_ontology`) is missing a required key; every part/type entry
  has its full required key set.

## Summary of flags

See structured output. Two `fix`-severity orphan/fillable findings dominate
(the unintegrated fundamental-diagram numbers, and the cheap
instance_population/degree_distribution/fractal_dimension_spatial literature
fills); no blockers found — nothing here would poison the catalog if
published as-is, the gaps are all honestly marked `unknown` or `qualitative`
rather than fabricated.
