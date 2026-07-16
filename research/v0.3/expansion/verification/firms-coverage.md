# Coverage check — firms.yaml (v0.3 expansion)

Adversarial pass: assume incomplete until proven otherwise. Checked against
schema/panel-spec.yaml (30 columns, frozen v1.0), docs/schema.md (structural
shape), docs/roster.md (relations expansion queue), the sweep report
(research/v0.3/expansion/firms-sources.md), and the sibling entries firms
points at (global-economy.yaml, financial-markets.yaml, cities.yaml).

## 1. 30-column presence audit

Counted columns per panel-spec.yaml: Group A (7: spatial_extent,
characteristic_timescales, numerosity, instance_population,
component_ontology, energy_rate_density, plus top-level `category`),
Group B (7: interaction_topology, interaction_ontology, degree_distribution,
modularity, hierarchy_depth, fractal_dimension_spatial, decentralization),
Group C (8: nonlinearity, feedback, openness_dissipation, chaos_sensitivity,
criticality, extreme_event_statistics, temporal_correlation,
tipping_transitions), Group D (2: memory_hysteresis,
information_processing), Group E (2: adaptive_capacity,
variation_selection), Group F (4: emergence, self_organization,
robustness_resilience, cascade_susceptibility). Total 30.

Result: **all 30 present** under `attributes:` (or as the top-level
`category` field). None missing-entirely. Several carry `value: unknown` /
`not-applicable` (spatial_extent, energy_rate_density,
fractal_dimension_spatial, temporal_correlation) — all correctly the
*legal* escape hatches, not defects, and each carries a note explaining why
nothing was found (per no-guessing).

`node analysis/validate.mjs` was run directly: **firms — PASS (0 error, 0
warn, 0 info)**. Machine conformance (evidence_status/level vocab, score
ranges, source read-status annotations, relations reciprocity) is clean.

## 2. Structural blocks (docs/schema.md)

- `exemplars`: present, 2 entries (us-firm-population, walmart). OK.
- `scoping_note`: present, states atomicity choice explicitly. OK.
- `summary`: present, one paragraph, accessible-layer register. OK.
- `relations`: present (`part_of: [global-economy]`, `contains: []`). OK,
  see reciprocity check below.
- `component_ontology` / `interaction_ontology`: present, structured,
  typed sub-fields per spec. OK.
- `emergent_phenomena`: present, 3 items, each with `order_parameter`. OK.
- `sources`: present, 4 keyed entries (axtell2001, newman2003, stanley1996,
  bls-bds-survival), each with a read-status annotation. See gap below.
- `provenance`: present (drafted_by, verification block all "pending" as
  expected pre-review, flags list with 4 entries). OK.

## 3. Fillable-vs-unmeasured judgment on every `unknown`/`not-applicable`

| Column | Value | Judgment |
|---|---|---|
| spatial_extent | not-applicable-spatial | genuinely N/A at class level (matches financial-markets' precedent) |
| energy_rate_density | unknown | genuinely unmeasured — no mass denominator exists for an organization in the literature surveyed; matches financial-markets/the-internet precedent |
| fractal_dimension_spatial | not-applicable | genuinely N/A; correctly omits evidence_status per the river-networks.yaml-established convention (not-applicable quantitative columns omit the field rather than using an illegal enum value) |
| temporal_correlation | unknown | genuinely unmeasured this sweep — no Hurst/autocorrelation study of firm time series was found. Fillable-from-literature candidate: none identified in the sweep; plausible venue would be finance/econophysics time-series literature on revenue or employment autocorrelation, not surfaced this pass |
| component_ontology (internal routines / capital assets rows) | unknown | genuinely unmeasured — no general count exists; correctly left unknown rather than guessed |
| characteristic_timescales (survival-window figure) | unknown (search-snippet only) | **fillable-from-literature**, not unmeasured: candidate source already named in-entry (BLS Business Employment Dynamics Table 7 / Census BDS survival tables), blocked only by a 403 on direct WebFetch this pass. A browser-driven fetch or the Census BDS CSV/API route would very likely close this — already correctly flagged as a follow-up in provenance.flags, not mis-stated as measured |
| numerosity (per-firm employee count / mean firm size) | not entered as a value at all, discussed only in the note | **fillable-from-literature**: the sweep report explicitly recommends checking research/v0.2-sweep/expansion/global-economy-sources.md for the total-1997-employment figure underlying Axtell's universe, to derive mean employees/firm. Not fatal (the entry is honest that this wasn't done), but worth noting as an easy win before promoting to verified |

## 4. Orphan values — sweep report vs. entry

Checked every citation/figure surfaced in firms-sources.md against the
entry text (`grep`-level check for each name/figure):

- **Axtell 2001, Newman 2003, Stanley et al. 1996, BLS/BDS survival figure**:
  all integrated. OK.
- **Coase, R.H. (1937) "The Nature of the Firm"** — recovered in the sweep's
  "Canonical secondary/theory citations" section as directly relevant to
  the scoping_note (it is the foundational definition of the firm-as-entity
  the scoping_note gestures at) but **never referenced anywhere in the
  entry**, not even inline. Orphan. (note-level: foundational-theory color,
  not a quantitative gap)
- **Gibrat, R. (1931) *Les Inégalités Économiques***, the proportional-growth
  null model that Stanley et al. 1996 explicitly test firm growth against —
  recovered in the sweep, flagged as directly relevant to
  extreme_event_statistics' growth-rate item, but **not mentioned anywhere
  in the entry**, including in the extreme_event_statistics block that
  discusses the very finding Gibrat's law is the null hypothesis for.
  Orphan; more load-bearing than Coase since it's the explicit statistical
  comparator for a value already in the entry. (fix-level: an easy,
  free contextualization the sweep report already handed the drafter)
- **March & Simon 1958 and Nelson & Winter 1982**: these ARE used, inline,
  in the adaptive_capacity justification (lines 451-453) — but neither is
  registered as a keyed entry in the entry's `sources:` block, unlike every
  other citation in the file. This breaks the project's own
  citation-tracking convention (CLAUDE.md rule 1: "every citation carries a
  read-status annotation"; docs/schema.md's worked example registers every
  citation, including secondary ones, as a `sources:` dict entry) — the
  bracketed "[unverified — model knowledge, canonical]" annotation is
  present in prose but not backed by a `sources:` block entry, and
  adaptive_capacity itself carries no `sources:` list field pointing at
  them. (fix-level)

## 5. Relations reciprocity (against roster.md + sibling entries)

- `global-economy.yaml` line 100: `relations.contains` lists `firms` marked
  "UNRESOLVED -> roster expansion queue" — firms.yaml's `part_of:
  [global-economy]` correctly resolves this pointer. Confirmed by direct
  read of global-economy.yaml.
- `financial-markets.yaml` line 99 and `cities.yaml` line 175: both carry
  an `itself_complex: out-of-scope(human) / firms` pointer at a
  human-component row, but **neither lists `firms` in its own
  `relations.contains`** (confirmed by direct read — financial-markets'
  contains block and cities' contains block do not include firms as a
  relations edge, only as a component_ontology itself_complex pointer).
  firms.yaml's relations note correctly declines to add a part_of/contains
  edge on either side, matching the actual state of both files. No
  reciprocity defect.
- `docs/roster.md`: firms is listed in the "relations expansion queue"
  paragraph as one of the ids the roster consistency doc already expects
  to be resolved this batch. Consistent — no roster-vs-entry drift found.

## 6. Column-specific notes

- `component_ontology`: the "employees / managers" row lacks an
  `evidence_status` field while the other two rows (internal
  teams/routines; capital assets) each have `evidence_status: unknown`.
  Not a panel-spec violation (component_ontology's part-row schema in
  panel-spec.yaml doesn't itself require evidence_status per row — this
  is entries' own added convention, applied inconsistently here). Note-level
  only.
- `extreme_event_statistics`: correctly carries `measurand_type` on both
  sub-claims and keeps the Zipf claim at `exemplar(us-firm-population)`
  level rather than promoting to class-general, matching Axtell's own
  U.S.-only caveat — no coverage gap.
- `degree_distribution`: correctly declines to fabricate a distribution
  class/exponent for the board-interlock network (Newman's table doesn't
  fit one) — matches filling_rules.power-law-rigor's intent by omission
  rather than invention.

## Summary of severities

- 1 **fix**: March & Simon 1958 / Nelson & Winter 1982 cited inline
  (adaptive_capacity) but absent from the `sources:` block, breaking the
  file's own citation-registry convention.
- 1 **fix**: Gibrat 1931 (the explicit null model for the Stanley et al.
  growth-rate finding already in extreme_event_statistics) surfaced by the
  sweep but never integrated — cheap, directly relevant addition.
- 1 **note**: Coase 1937 surfaced by the sweep, relevant to scoping_note,
  never integrated — lower urgency, pure theory color.
- 1 **note**: Walmart headcount (~2.1e6) is marked [unverified — model
  knowledge] but is trivially fillable from Walmart's own 10-K/annual
  report — a cheap primary-read upgrade before verified status.
- 1 **note**: per-firm employee count (mean ~20/firm) remains undone
  despite the sweep naming an exact derivation path (global-economy's own
  primary-read source material) — already honestly flagged in-entry as an
  open follow-up, not fabricated, but worth logging as the specific next
  action.

No blockers found. The validator passes clean, all 30 columns are present
with correctly-applied unknown/not-applicable escape hatches, and relations
reciprocity against global-economy/financial-markets/cities/roster.md
checks out exactly as the entry's own relations note claims.
