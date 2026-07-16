# Coverage check — convection-cells.yaml (v0.3 expansion)

Adversarial assumption: the entry is incomplete until proven otherwise. Checked
against schema/panel-spec.yaml (30 columns, frozen v1.0), docs/schema.md
(required structural blocks), docs/roster.md, sibling entries
(tropical-cyclones.yaml, stars.yaml), and the sweep report
research/v0.3/expansion/convection-cells-sources.md.

## 1. Panel-spec column census (30/30)

Counted panel-spec.yaml's columns list directly (7 Group A + 7 Group B + 8
Group C + 2 Group D + 2 Group E + 4 Group F = 30) and matched each against
`attributes:` in the entry, plus `category` at top level.

| # | Column | Present? | Notes |
|---|---|---|---|
| A1 | category | yes (top-level) | physical-chemical; matches roster.md "Physical & chemical" candidate list |
| A2 | spatial_extent | yes | quantitative, range, sourced |
| A3 | characteristic_timescales | yes | 3 named timescales |
| A4 | numerosity | yes | unknown, justified |
| A5 | instance_population | yes | unknown/unbounded, justified — first pure-lab class |
| A6 | component_ontology | yes | single part type, fluid parcels |
| A7 | energy_rate_density | yes | unknown, justified, cross-checked against the-internet precedent |
| B1 | interaction_topology | yes | field/continuum |
| B2 | interaction_ontology | yes | 3 types, closed alphabet |
| B3 | degree_distribution | yes | not-applicable, justified |
| B4 | modularity | yes | score 1 |
| B5 | hierarchy_depth | yes | 2, convention stated |
| B6 | fractal_dimension_spatial | yes | unknown, justified |
| B7 | decentralization | yes | score 4 |
| C1 | nonlinearity | yes | score 4 |
| C2 | feedback | yes | score 2, 2 loops |
| C3 | openness_dissipation | yes | score 4 |
| C4 | chaos_sensitivity | yes | score 3 |
| C5 | criticality | yes | score 0, mechanism_status none |
| C6 | extreme_event_statistics | yes | unknown, measurand_type stated (temporal-event) |
| C7 | temporal_correlation | yes | unknown, candidate measurand named in note |
| C8 | tipping_transitions | yes | score 2 |
| D1 | memory_hysteresis | yes | score 1 |
| D2 | information_processing | yes | score 0 |
| E1 | adaptive_capacity | yes | score 0 |
| E2 | variation_selection | yes | absent |
| F1 | emergence | yes | score 3, anchor-cited |
| F2 | self_organization | yes | score 4, anchor-cited |
| F3 | robustness_resilience | yes | score 1 |
| F4 | cascade_susceptibility | yes | score 0 |

Result: 30/30 columns present. No column is missing-entirely. All
`unknown`-valued columns (numerosity, instance_population, energy_rate_density,
fractal_dimension_spatial, extreme_event_statistics, temporal_correlation)
carry an explicit justification note citing an active, documented search
(sweep report sections 4-7) rather than being unexamined gaps — these are
legitimate `unknown`s per filling_rules.no-guessing, not coverage defects.

## 2. Structural blocks (docs/schema.md)

| Block | Present? | Notes |
|---|---|---|
| exemplars | yes | one exemplar (rayleigh-benard-lab), matches the singleton-class pattern (the-internet precedent) |
| scoping_note | yes | extensive — resolves the tropical-cyclones/stars deferred merge/split question, states atomicity convention |
| summary | yes | one paragraph, accessible-layer |
| relations | yes | part_of: [], contains: [] — deliberately empty, justified in scoping_note |
| component_ontology | yes | inside attributes, one part type |
| interaction_ontology | yes | inside attributes, 3 types, closed |
| emergent_phenomena | yes | 3 phenomena with order_parameter fields |
| sources | yes | 7 sources incl. project sweep doc, all read-status annotated |
| provenance | yes | drafted_by, verification (all pending), flags (4 flag blocks) |

All required structural blocks present.

## 3. Orphan sweep values — recovered but not integrated

- **Bénard-Marangoni cells (fix).** The sweep report's scope line (line 3-6)
  names "Bénard-Marangoni cells" alongside mesoscale atmospheric cellular
  convection as a second boundary case explicitly excluded from scoring. The
  entry's `scoping_note` performs a careful three-way exclusion (lab RB vs.
  moist-convection-cells vs. photospheric-convection-cells) but never mentions
  Marangoni (surface-tension-driven) convection at all — not even to exclude
  it by name. Since Bénard-Marangoni is a real, distinct, and confusable
  mechanism (surface-tension-gradient-driven, not buoyancy-driven — arguably
  MORE likely to be conflated with "Bénard" convection than the two cases the
  entry does discuss, given the shared "Bénard" name), this is a genuine
  orphan: recovered by the sweep, never integrated into the entry, and its
  omission leaves a naming-collision risk unaddressed. Suggested fix: add one
  sentence to scoping_note naming Bénard-Marangoni convection and stating why
  it too is excluded (no fixed-temperature-driven buoyancy mechanism; distinct
  free-surface/surface-tension physics).
- **Nu-Ra scaling (no defect).** Sweep section 2 is extensive on the
  Grossmann-Lohse Nu-Ra scaling theory. The entry deliberately does not map
  this onto any column (correctly — no column captures a heat-transport
  scaling exponent) and documents this choice explicitly in
  `provenance.flags` ("Nu-Ra scaling (context, not a dedicated column)").
  This is a handled case, not an orphan.
- All other sweep content (Ra_c values, k_c, timescales, roll-count
  derivation, criticality/Peters-Neelin discussion, spiral-defect-chaos
  citation) is traceably integrated into the corresponding attributes.

## 4. Relations / roster cross-check

- roster.md lists "convection cells (Rayleigh–Bénard)" under "Physical &
  chemical" candidates (line 32) — the entry's existence and category
  (physical-chemical) are consistent with the roster.
- Checked both entries that reference this class by name:
  - `tropical-cyclones.yaml` line 42: `contains: [moist-convection-cells]`
    — points at the distinct unresolved sibling id, NOT at `convection-cells`
    directly. No reciprocal edge is owed from convection-cells.yaml.
  - `stars.yaml` line 56: `contains: [photospheric-convection-cells]` — same
    pattern, points at its own distinct unresolved sibling id, not at
    `convection-cells`. No reciprocal edge owed.
  - Both files' relations blocks were re-confirmed via grep to contain no
    direct `convection-cells` id in any relations array — the entry's claim
    (scoping_note, "no relation edges are added... here") is accurate and the
    reciprocity check has nothing to flag as a blocker. The entry's own
    provenance flag correctly identifies this as a soft consistency-pass item
    (confirming the prose cross-references, not the relations arrays, now
    resolve to a real entry) rather than a relations-reciprocity defect.
- No other existing entry's `part_of`/`contains` references `convection-cells`
  (grep across data/classes/*.yaml for the id found only the entry itself,
  tropical-cyclones.yaml and stars.yaml prose/id mentions already covered
  above, and turbulent-flows.yaml / chemical-oscillators.yaml / etc. showing
  up only via the word "convection" in unrelated prose, not as a relations
  edge).

## 5. Fillable-from-literature vs. genuinely unmeasured (per-unknown judgment)

| Column | Verdict | Candidate source if fillable |
|---|---|---|
| numerosity | genuinely unmeasured (continuum) | n/a — correctly framed as not a citable count |
| instance_population | not-applicable by framing | n/a — correctly reasoned, first pure-lab class |
| energy_rate_density | plausibly fillable via derivation, not literature | could derive Phi_m from heat flux/mass for a NAMED apparatus, but sweep correctly notes no canonical apparatus to derive against; leaving unknown rather than a one-off derivation is the right call per the-internet precedent |
| fractal_dimension_spatial | genuinely unmeasured | no located study; near-onset pattern is trivially D=2, chaotic-regime D not published |
| extreme_event_statistics | genuinely unmeasured (no event structure in lab RB) | n/a |
| temporal_correlation | plausibly fillable | candidate source named in the entry's own note: a targeted search of the spiral-defect-chaos dynamical-systems literature (e.g., a Morris/Bodenschatz/Cannell/Ahlers follow-up or a later correlation-length/time study) — correctly flagged as a future-search target rather than guessed |

No `unknown` in this entry looks like an unexamined gap; all are documented
search misses or correctly-reasoned not-applicable framings.

## Summary of findings

One fix-level finding (Bénard-Marangoni cells named in the sweep's scope line
but never mentioned in the entry's scoping_note, a real naming-collision risk
given the shared "Bénard" terminology) and one note-level observation
(confidence field applied inconsistently across attributes, present only on
component_ontology — not a panel-spec requirement, so not a defect, but worth
recording for cross-entry consistency). All 30 panel-spec columns are present,
all required structural blocks are present, all `unknown` values are
justified rather than guessed, and the relations/roster cross-checks show no
reciprocity defect — the entry's own scoping_note claim (no edges owed to
tropical-cyclones.yaml or stars.yaml) is verified accurate.
