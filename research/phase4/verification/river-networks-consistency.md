# Consistency Check — river-networks

Checked against: `schema/panel-spec.yaml`, all 15 files in `schema/anchors/`,
`docs/schema.md`, `docs/roster.md`, `research/phase4/river-networks-sources.md`,
and the two verified entries (`tropical-cyclones.yaml`, `financial-markets.yaml`)
for cross-entry coherence. Target: `data/classes/river-networks.yaml`.
No files edited; this is a read-only audit.

---

## 1. Anchor-reused columns (must match anchor exactly)

The entry's provenance claims 8 columns reuse the class's own worked anchor
verbatim: `self_organization`, `criticality`, `tipping_transitions`,
`information_processing`, `cascade_susceptibility`, `modularity`,
`chaos_sensitivity`, `adaptive_capacity`.

| Column | Anchor score | Entry score | Justification text | Verdict |
|---|---|---|---|---|
| self_organization | 4 | 4 | near-verbatim | MATCH |
| criticality | 0 | 0 | near-verbatim, correctly separates spatial-structure claim from event-statistics claim | MATCH |
| tipping_transitions | 2 | 2 | near-verbatim | MATCH |
| information_processing | 1 | 1 | near-verbatim | MATCH |
| cascade_susceptibility | 1 | 1 | near-verbatim | MATCH |
| modularity | 2 | 2 | near-verbatim | MATCH |
| chaos_sensitivity | 1 | 1 | near-verbatim | MATCH |
| adaptive_capacity | 1 | 1 | near-verbatim | MATCH |

All 8 reused anchors verified word-for-word/substance-for-substance against
`schema/anchors/*.yaml`. No drift in either direction. This is the strongest
part of the entry.

**Bookkeeping note:** provenance's `scoping_and_rubrics` line lists only 6
of the 7 "scored fresh" columns (nonlinearity, feedback, openness_dissipation,
memory_hysteresis, emergence, robustness_resilience) but says "remaining 7."
`decentralization` is also fresh-scored (no river-networks anchor exists in
`decentralization.yaml`) and is missing from that list. Total rubric/hybrid
column count (15) does reconcile as 8 reused + 7 fresh, so this is a pure
documentation omission, not a scoring problem. — **note**

---

## 2. Freshly-scored rubric/hybrid columns (no class anchor; scored against scale text + comparator)

### decentralization — score 4, class-general
Comparator: stars (score 4). Justification is a close paraphrase of the
stars anchor's own reasoning ("nothing whose removal would constitute loss
of control"). Sound: a dendritic network with purely local erosion-flow
physics at every confluence has no privileged controller, matching level 4's
text exactly. **No issue.**

### nonlinearity — score 2, class-general
Comparator: earthquake-fault-systems (anchor score 3). The entry states the
river-network profile is "closer to the fault system's 'nonlinearity
concentrated at rupture/reorganization, quasi-linear the rest of the time'
profile" — but that exact profile description is the fault system's own
stated reason for scoring **3**, not 2 (`nonlinearity.yaml` lines 112-117:
"nonlinearity is concentrated at rupture initiation/propagation rather than
pervasive across the full duty cycle" → score 3). The entry invokes the
comparator's score-3 profile as the closest match, then assigns one level
below it. The distinguishing argument offered (avulsion is "occasional"
rather than the network's single defining characteristic event, unlike an
earthquake for a fault system) is a real, if under-argued, basis for the
gap — level 2's own text ("occasional... modal/typical dynamics... well
approximated by linear models most of the time") does fit the described
profile reasonably. Net: a defensible score with an internally strained
comparator citation. — **fix** (tighten the justification so the
score-vs-comparator logic doesn't read as self-contradictory; either
promote to 3 to match the cited profile, or make explicit why avulsion is
LESS load-bearing to the network's characteristic behavior than rupture is
to a fault system's).

### feedback — score 3, class-general
Three loops listed with name/sign/mechanism as required by
`feedback.yaml`'s "score >=2 MUST include the structured loop list" rule.
All three loops close a genuine causal cycle (erosion-deposition;
aggradation-avulsion; headward erosion/capture) per the
`does_not_count` clause. Reasoning parallels financial-markets' score-3
profile ("central but not the sole organizing description") reasonably
well. **No issue.**

### openness_dissipation — score 3, exemplar(mississippi-basin)
Comparator: cities (score 3). Tension: the entry's own text says "the
network's large-scale branching STRUCTURE, once carved, persists over
geological time even through substantial flow interruptions (drought does
not erase the tree)" — this reads as level 1's own definition ("the
structure would persist for a long time even if the flux were
interrupted"), not level 3's ("Interrupting the flux collapses the
structure on a timescale comparable to or shorter than the structure's own
dynamical timescale"). The entry recovers a level-3-consistent claim only
by pivoting from "structure" to "channel-maintaining competence" mid
justification ("interrupting the flux (drought) degrades channel-maintaining
competence within a timescale comparable to the system's own hydrologic
response time"), which is a narrower and different claim than "structure."
The cities analogy is a reasonable rescue (city fabric similarly outlives a
blackout; "function" is what collapses on a comparable timescale) but the
mapping is not made fully explicit, and the justification's own wording
undercuts its stated score by describing STRUCTURE persistence in level-1
terms while claiming a level-3 score. — **fix** (either restate consistently
in terms of "channel-maintaining process/competence" throughout, matching
the cities analogy precisely, or drop the "structure ... persists ...
even through ... drought" sentence, which currently contradicts the level-3
claim it sits inside).

### memory_hysteresis — score 2, exemplar(mississippi-basin)
Comparator: earthquake-fault-systems (anchor score 2). Reasoning structure
mirrors the fault anchor closely (demonstrable path-dependence at an
intermediate timescale; capped below 3 for lack of a published
hysteresis-loop measurement). Matches level 2's text precisely. **No issue.**

### emergence — score 2, class-general
Comparators: convection-cells (score 3) and stars (score 2). Sound,
well-argued distinction: Horton/Hack scaling exponents are empirical
regularities with dedicated vocabulary (level 2) rather than a formalized,
independently-measured order parameter with predictive content like
Rayleigh-Bénard's Ra_c (level 3). The entry's own finding that even the
D~1.9 figure traces to secondary citation of a never-primary-read monograph
is honestly used as corroborating (not overriding) evidence for staying at
2 rather than 3. **No issue.**

### robustness_resilience — score 3, exemplar(mississippi-basin)
Comparator: the-internet (score 3). Reasoning matches level 3's text
("broad tolerance, absorbs common perturbations and some large shocks,
recovering function, possibly with hysteresis or scars") and correctly
distinguishes exemplar-level from class-level claims per the anchor's
`does_not_count` rule ("CLASS-level persistence is not EXEMPLAR-level
robustness"). **No issue.**

---

## 3. Filling rules audit

- **no-guessing**: consistently honored. `energy_rate_density`,
  `chaos_sensitivity`'s figure, the sub-day flood-pulse timescale, the
  Mississippi-specific Hurst exponent, the Mississippi-specific alpha, and
  the total global river-basin count are all recorded `unknown` with an
  explicit "recorded as unknown rather than guessed" note. **PASS.**
- **power-law-rigor**: correctly applied to `extreme_event_statistics`
  (evidence_status: measured-untested, with the CSN-corpus-exclusion
  reasoning spelled out) and to `criticality` (score 0, no CSN-grade event
  statistics located). **PASS.**
- **soc-two-claims**: `criticality`'s justification explicitly states the
  flood-tail alpha (a separate, event-statistics claim) does not raise the
  criticality score, and cites the rule by name. **PASS.**
- **no-market-chaos** (analog applied to hydrology): `chaos_sensitivity`
  explicitly declines to adopt an unverified deterministic-chaos-in-
  streamflow claim, citing the same caution the rule applies to markets.
  **PASS.**
- **measurand-required**: `extreme_event_statistics` and
  `temporal_correlation` both name their measurand precisely (peak
  discharge Q vs. recurrence interval T; annual/daily discharge via R/S or
  DFA). **PASS.**
- **level-required**: mostly honored well — `temporal_correlation` is
  correctly tagged `exemplar(nile-basin)` rather than mississippi-basin or
  class-general, with an explicit note explaining the deliberate
  substitution. However, **`extreme_event_statistics` is tagged
  `exemplar(mississippi-basin)` while its own value text says the
  underlying data is from "six US gauge stations" that are explicitly
  NOT Mississippi ("Mississippi-specific alpha unknown")**. This is an
  internal contradiction: the entry gets the analogous case right for
  `temporal_correlation` (Nile) but mistags the parallel case for
  `extreme_event_statistics`. Per the level-required rule and the sweep
  report itself (which labels this data "instance (per-gauge-station),
  not yet a single class-level or Mississippi-specific alpha" —
  `river-networks-sources.md` line 177), the correct tag should be
  `class-general` (or an instance-level tag naming the six gauges), not
  `exemplar(mississippi-basin)`. — **fix**
- **atomicity-convention**: clearly declared in scoping_note ("individual
  channel links/segments between confluences... not water parcels or
  sediment grains, and not individual meander bends"), consistent with
  `numerosity` and `component_ontology`. **PASS.**
- **interaction-typing**: `interaction_ontology` individuates 3 types by
  mechanism/carrier (water/sediment flux transfer; erosion-deposition
  feedback; avulsion/channel abandonment), `type_count: 3` matches list
  length, `alphabet_closure: closed` is argued by analogy to the
  hurricane's closed-alphabet reasoning and is sound (fixed by fluid
  dynamics, sediment transport physics, gravity). **PASS.**

---

## 4. Level-tag and unit audit (cross-entry commensurability)

- All `level:` values are legal (`class-general` or `exemplar(<declared-id>)`
  matching `mississippi-basin` or `nile-basin`, both declared in the
  `exemplars:` block). Only the one substantive mistag noted above
  (`extreme_event_statistics`).
- **`spatial_extent` unit/value bug**: the top-level field is
  `value: 3.2e6, unit: m^2`, annotated "recorded per column unit (m)."
  This is internally inconsistent on three counts: (a) panel-spec fixes
  `spatial_extent`'s unit to `m` (linear extent), not `m^2`; (b) the
  entry's own method text gives the linear-extent order of magnitude as
  "~10^6 m," not 3.2e6 m; (c) `3.2e6` under a literal `m^2` label is off
  by roughly six orders of magnitude from the actual area (~3.2e6 km^2 =
  3.2e12 m^2) — the number `3.2e6` is actually the area *in km^2*, mislabeled
  as `m^2` at the top level. A reader consuming `value`+`unit` literally
  (without reading the prose `method`/`detail` fields, which do correctly
  disambiguate) would get a badly wrong figure. This is the kind of
  primary-field defect a downstream consumer or aggregation script would
  trip over even though a careful human reader is not actually misled once
  they read the method text. — **fix** (bordering on blocker for any
  automated consumer of the raw `value`/`unit` pair; not a blocker for a
  human reader since the prose is internally correct and fully hedged).
- **`hierarchy_depth` convention divergence** (self-flagged by the drafter
  in `provenance.flags`): river-networks uses Strahler stream order itself
  as the level-counting convention (10 levels), while tropical-cyclones and
  financial-markets both use a coarser "distinct organizational-level KIND"
  convention (3 levels each: parcel→cell→rainband/eyewall→vortex;
  agent→firm→venue→market). Strahler order is genuinely the field's own
  standard nested-aggregation scheme for this class (each level is
  literally two order-(n-1) links merging into an order-n link), so the
  convention is principled and citable, not an inflation artifact. But it
  measures a structurally different granularity than the other two entries'
  scheme: Strahler levels are homologous (an order-6 link is "the same kind
  of thing" as an order-5 link, one confluence further downstream), whereas
  the tropical-cyclones/financial-markets levels are each a qualitatively
  distinct kind of entity (a firm is not "more of an agent"). The raw
  numbers (10 vs. 3 vs. 3) are therefore not directly comparable as
  "organizational depth" across entries without this caveat, and the
  caveat currently lives only in `provenance.flags`, not inline in the
  `method` field where a reader of the column itself would see it. —
  **note** (principled convention choice, correctly self-flagged by the
  drafter; recommend the caveat be pulled into the `method` text itself
  before promotion to keep the column self-documenting).

---

## 5. Cross-entry coherence spot checks (vs. tropical-cyclones, financial-markets)

- `degree_distribution`: river-networks uses `not-applicable` (matching
  tropical-cyclones' choice for its continuum system) but with a more
  precise justification (a tree has a genuinely trivial/degenerate degree
  distribution, distinct from "no graph representation exists at all").
  This is actually a MORE precise use of the value than tropical-cyclones'
  blanket application, and is clearly distinguished from financial-markets'
  `unknown` (which reflects genuine literature contestation over a
  non-trivial question). Internally coherent, no drift. **No issue.**
- `energy_rate_density`: `unknown` with "derivation feasible in principle
  but not attempted, flagged for Phase 5" — matches financial-markets'
  identical treatment and reasoning pattern almost verbatim. **No issue.**
- `variation_selection`: `absent`, justified "same reasoning as
  tropical-cyclones (absent)" — verified, the reasoning does parallel
  tropical-cyclones' justification closely (no strategy variation among
  components, no population-level selection). **No issue.**
- `component_ontology.parts[].interchangeable`: entry uses a nuanced string
  ("yes within order class, no across orders") rather than the strict
  `yes|no` the panel-spec format specifies; tropical-cyclones and
  financial-markets both use plain `yes`/`no`. Minor format deviation, not
  a substantive error — the nuance is genuinely informative and does not
  contradict the schema's intent. — **note**
- Citation-annotation discipline (primary-read vs. snippet-verified per
  citation) is applied more thoroughly and consistently in this entry than
  in either verified reference entry — nearly every source in the
  `sources:` block carries an explicit `[PRIMARY-READ...]` or
  `[snippet-verified...]` tag, including nested `[unverified]` sub-flags
  where attribution is uncertain (e.g., the likely-Malamud-Turcotte flood
  power-law paper). This is a genuine strength worth noting positively.

---

## 6. Numerical spot-check (load-bearing derivation feeding numerosity)

`numerosity`'s derived value depends on: first-order count ≈ R_B^9 with
R_B=4 → 4^9 = 262,144 ≈ 2.6e5 (matches entry). Total via geometric series
R_B^9 × R_B/(R_B−1) = 262,144 × 4/3 ≈ 349,525 ≈ 3.5e5 (matches entry, and
falls inside the stated "1e5-1e6" order-of-magnitude range). Arithmetic
verified correct. **No issue** (recorded here since this computation is
load-bearing for a consistency claim between `numerosity`,
`component_ontology`, and `hierarchy_depth`'s shared Strahler-order-10
input).

---

## Summary of severities

- **fix (4):** nonlinearity score-vs-comparator internal tension;
  openness_dissipation structure-vs-competence wording contradicts its own
  level-3 claim; extreme_event_statistics mistagged
  `exemplar(mississippi-basin)` for non-Mississippi data; spatial_extent
  top-level value/unit pair internally inconsistent (m^2 label on what is
  actually a km^2-scale number, and off the panel-spec's own `m` unit
  convention).
- **note (3):** provenance's fresh-scored-column list omits
  `decentralization`; hierarchy_depth's Strahler-order convention is
  principled but not directly comparable to the other two entries' scheme,
  and the caveat should be inline, not just in provenance.flags;
  component_ontology's `interchangeable` field uses a nuanced string
  instead of the strict yes|no format (minor, non-substantive).
- **No blockers found.** All 8 anchor-reused columns match their anchors
  exactly, no fabricated values or citations were found, no anchor
  contradictions exist, and every citation carries a primary-read/
  snippet-verified annotation per the citation-annotation rule.
