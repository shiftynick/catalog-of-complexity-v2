# Coverage check — global-economy

Date: 2026-07-02. Checker: coverage checker (adversarial — assume incomplete
until proven otherwise). Target: `data/classes/global-economy.yaml`.
References: `schema/panel-spec.yaml` (30-column spec, frozen v1.0),
`schema/anchors/*.yaml` (15 files), `docs/schema.md`, `docs/roster.md`,
`research/v0.2-sweep/expansion/global-economy-sources.md` (the sweep report).

---

## 1. Column-by-column census (panel-spec's 30 columns)

The panel-spec lists `category` (top-level identity field) plus 29
`attributes.*` columns. All 30 are checked.

| # | column | present? | value state | notes |
|---|---|---|---|---|
| 0 | category | YES (top-level) | `socio-economic` | correct vocabulary term |
| A1 | spatial_extent | YES | filled (4e7 m, qualitative) | reuses the-internet's framing, flagged as such |
| A2 | characteristic_timescales | YES | filled (3 named timescales, 1 marked unknown within the list) | system-lifetime row correctly left unknown rather than resolved |
| A3 | numerosity | YES | filled (multi-typed list) | matches the-internet's own multi-typed numerosity precedent exactly |
| A4 | instance_population | YES | filled (n=1) | class-general singleton framing, consistent with scoping_note |
| A5 | component_ontology | YES | filled (3 part types, all sub-fields present) | national economies, firms, households — schema shape complete |
| A6 | energy_rate_density | YES | present-but-unknown | mass denominator confirmed absent, not merely unsearched; power figure recorded in method text |
| B1 | interaction_topology | YES | filled (`network`) | |
| B2 | interaction_ontology | YES | filled (4 types, all sub-fields present, type_count/alphabet_closure set) | schema shape complete |
| B3 | degree_distribution | YES | present-but-unknown | correctly left unknown; sweep's own claim that this column is "network systems only / not applicable" is NOT supported by panel-spec.yaml's actual text (no such restriction exists there) — the entry itself correctly ignores that sweep-report overreach and scores unknown rather than not-applicable |
| B4 | modularity | YES | filled (score 2) | comparator-based, flagged as such |
| B5 | hierarchy_depth | YES | filled (value 3, convention stated) | |
| B6 | fractal_dimension_spatial | YES | present-but-unknown | no measurand candidate found; correctly left unknown rather than borrowing cities' figure |
| B7 | decentralization | YES | filled (score 3) | |
| C1 | nonlinearity | YES | filled (score 3), sources cited | Brock & Sayers 1988 |
| C2 | feedback | YES | filled (score 3, 3 loops) | |
| C3 | openness_dissipation | YES | filled (score 3), sources cited | |
| C4 | chaos_sensitivity | YES | filled (score 1), sources cited | directly verified per no-market-chaos rule, not merely inherited |
| C5 | criticality | YES | filled (hybrid, score 0, mechanism_status: none) | both sub-claims addressed per soc-two-claims |
| C6 | extreme_event_statistics | YES | filled (exemplar(firms) static-cross-sectional only) | temporal-event measurand (recession/crisis statistics) is a NAMED, self-flagged gap — see §3 |
| C7 | temporal_correlation | YES | present-but-unknown | correctly distinguished from chaos_sensitivity's Brock & Sayers finding |
| C8 | tipping_transitions | YES | filled (hybrid, score 1) | matches earthquake-fault-systems' anchor case |
| D1 | memory_hysteresis | YES | filled (hybrid, score 3) | |
| D2 | information_processing | YES | filled (score 3), sources cited | Hidalgo & Hausmann 2009 |
| E1 | adaptive_capacity | YES | filled (score 3) | |
| E2 | variation_selection | YES | filled (`present`) | |
| F1 | emergence | YES | filled (score 3), sources cited | |
| F2 | self_organization | YES | filled (score 3) | |
| F3 | robustness_resilience | YES | filled (score 3) | |
| F4 | cascade_susceptibility | YES | filled (hybrid, score 2) | |

**Result: 30/30 columns present. Zero columns missing entirely.** Every
`unknown` value found (energy_rate_density, degree_distribution,
fractal_dimension_spatial, temporal_correlation) is present-but-unknown with
a stated reason, not a silently absent column — these are legal per
filling_rules.no-guessing and correctly distinguished from missing-entirely.

---

## 2. Structural blocks required by docs/schema.md

| block | present? | notes |
|---|---|---|
| `id` / `name` / `category` / `status` | YES | `status: draft` — correct, matches provenance.verification all "pending" |
| `exemplars` | YES | 3 exemplars: world-economy, national-economies, firms — each with a `note` explaining its evidentiary role |
| `scoping_note` | YES | unusually thorough; explicitly justifies the three-tier atomicity resolution against filling_rules.atomicity-convention and cites the sweep report by name |
| `summary` | YES | one paragraph, accessible-layer tone, consistent with the evidence layer |
| `relations` (part_of / contains) | YES | see §4 for reciprocity check |
| `attributes` | YES | all 29 sub-columns, see §1 |
| `emergent_phenomena` | YES | 4 entries (World GDP, business cycle, firm-size distribution, ECI), each with `order_parameter` |
| `sources` | YES | 6 source blocks, each with read-status annotation — see §5 for one orphan |
| `provenance` | YES | drafted_by, scoping_and_rubrics, verification (all pending, correct for draft status), flags (4 self-identified top uncertainties) |

All required structural blocks are present and correctly shaped.

---

## 3. Sweep-report vs. entry: orphan/unintegrated values

Cross-checked every numbered section of
`research/v0.2-sweep/expansion/global-economy-sources.md` against the
entry's attributes and sources.

- **World Bank GDP figures ($105.69T 2023 / $111.3T 2024)**: the sweep
  report recommends this as citable-if-snippet-level material (Section 5
  summary table). The entry defines a `world-bank-gdp` source block (line
  792) with full read-status annotation, and cites the figure in prose
  inside `emergent_phenomena[0].order_parameter` ("World GDP / aggregate
  output"). **However, the `world-bank-gdp` source key is never referenced
  by any `sources: [...]` list anywhere in `attributes`** — grep confirms
  zero attribute blocks cite it (only `energy-institute-2024`'s own
  citation text mentions "World GDP" in passing, referring to failed
  fetch attempts, not citing `world-bank-gdp` itself). This is a genuine,
  if minor, orphan: a source block was drafted and a figure recovered by
  the sweep, but it was integrated only into free-text narrative
  (`emergent_phenomena`, which per `docs/schema.md`'s worked example never
  carries a `sources` field) and never became a cited attribute value. The
  figure exists nowhere as a first-class `quantitative` datum with its own
  `value`/`sources` binding — it is asserted only in passing. This is
  recorded in `provenance.flags` under "World GDP / global firm count /
  degree_distribution" as a snippet-vs-primary status concern, but that
  flag does NOT mention the specific orphan-citation-key issue found here.
- **Section 1 (atomicity resolution)**: fully integrated into scoping_note,
  verbatim reasoning reproduced and cited by section number. No orphan.
- **Section 2 (spatial_extent)**: fully integrated, matches recommendation.
- **Section 3 (numerosity/component_ontology/instance_population)**: fully
  integrated across all three columns, matching the sweep's proposed
  three-way split exactly.
- **Section 4 (characteristic_timescales)**: fully integrated, including the
  explicit "no defensible start date" scoping-ambiguity framing.
- **Section 5 (energy_rate_density)**: fully integrated (power figure in
  method text, mass gap recorded as confirmed-absent).
- **Section 6 (fractal_dimension_spatial)**: fully integrated (unknown,
  reasoning matches).
- **Section 7 (extreme_event_statistics)**: part (a) firm-size fully
  integrated with correct measured-untested status; part (b)
  recession/crisis event statistics correctly left unknown AND explicitly
  flagged in `provenance.flags` as "the single most actionable follow-up
  item for this entry" — this is a self-identified, honestly-flagged gap,
  not a silent omission, so it is a `note`-severity item, not a coverage
  defect per se.
- **Section 8 (temporal_correlation)**: fully integrated (unknown, reasoning
  matches, correctly distinguishes from chaos-sensitivity literature).
- **Section 9 (chaos_sensitivity)**: fully integrated, Brock & Sayers 1988
  cited with full corroborating-study caveat carried over.
- **Section 10 (tipping/cascade/criticality)**: fully integrated across
  tipping_transitions, criticality, and cascade_susceptibility, each
  correctly scored at the "no dedicated formal literature" floor/near-floor
  level per their respective anchors.
- **Section 11 (degree_distribution)**: fully integrated as unknown; the
  sweep's own "NOT APPLICABLE" framing (claiming this column is
  network-only) is not reproduced in the entry, which correctly treats it
  as a live, scoreable-but-unknown column instead — the entry is MORE
  correct than its own sweep report here.
- **Section 12 (Hidalgo & Hausmann ECI)**: fully integrated into
  information_processing, emergence, and emergent_phenomena, with the
  correct caveat that the exact ECI-income correlation coefficient could
  not be cleanly extracted and was therefore not cited (no-guessing
  compliance, correctly not inventing a specific r-value).

**No sweep-recovered value was found dropped on the floor entirely.** The
only integration gap is the World Bank GDP source-citation orphan above
(fix-severity, not blocker — the figure itself is not fabricated, it is
simply cited only in narrative prose rather than as a bound attribute
value/source pair).

---

## 4. Relations reciprocity check (against docs/roster.md and data/classes/)

`global-economy.yaml.relations`:
```
part_of: []
contains: [financial-markets, cities, firms]
```

- **financial-markets**: `financial-markets.yaml.relations.part_of` =
  `[global-economy, cities]` — CONFIRMED reciprocal. Both sides carry
  matching inline comments describing the reciprocity and its cross-audit
  history.
- **cities**: `cities.yaml.relations.part_of` = `[global-economy]` —
  CONFIRMED reciprocal, comment marks it "unresolved -> roster expansion
  queue" on the cities side, consistent with global-economy still being
  status: draft (not yet a resolvable target).
- **firms**: no `data/classes/firms.yaml` exists. Correctly left
  unresolved on the global-economy side (comment: "UNRESOLVED -> roster
  expansion queue"). `docs/roster.md`'s own expansion-queue list (line 3)
  explicitly includes `firms` as a pending id — CONFIRMED consistent
  naming; global-economy.yaml does not introduce a stray id that roster.md
  doesn't already track.
- **global-economy.part_of = []**: correct — nothing in the catalog's
  pilot 10 or current roster claims to contain the global economy; this is
  the top of the socio-economic containment chain as scoped. No entry
  exists that should reciprocally list `global-economy` in ITS `contains`
  beyond financial-markets and cities, both already checked above.

No reciprocity defects found.

---

## 5. Fillable-from-literature judgment on each `unknown`

Per the task brief, for each `unknown` value, judging whether it is
fillable-from-literature (naming a candidate) or genuinely unmeasured at
this time:

1. **energy_rate_density** — NOT fillable at present; the entry and sweep
   both confirm no candidate "mass of the global economy" source exists,
   distinct from a merely-unsearched gap. Candidate concept flagged (UNEP
   International Resource Panel material-flow reports) but explicitly
   noted as a FLOW not a STOCK, so it would not resolve this column even
   if fetched. Genuinely unmeasured / no known denominator.
2. **degree_distribution** — fillable-from-literature. Candidate source
   named in both the sweep and the entry: gravity-model / complex-network
   world-trade-network literature (not searched this session). This is an
   actionable, named follow-up target.
3. **fractal_dimension_spatial** — likely NOT fillable; no candidate
   measurand was identified for "the spatial structure of the global
   economy" as a distinct concept from cities' own boundary-fractal
   figure (which would double-count). Correctly left unknown; no
   affirmative candidate source is named beyond a rejected
   double-counting risk.
4. **temporal_correlation** — fillable-from-literature. Candidate source
   named: econophysics/macro-time-series literature, specifically
   detrended fluctuation analysis of GDP or long-memory business-cycle
   studies (not searched this session).
5. **extreme_event_statistics (temporal-event half)** — fillable-from-
   literature. Candidate source explicitly named twice (entry + sweep):
   Reinhart & Rogoff-style crisis chronologies for recession/financial-
   crisis severity or frequency distributions. This is the single most
   concretely actionable gap in the entry, and the entry itself says so.
6. **characteristic_timescales.system_lifetime row** — explicitly, and
   correctly, framed as a genuine SCOPING ambiguity rather than a mere
   unfilled figure (no single defensible start date exists across the
   literature, unlike a simple unsearched gap). Not resolvable by further
   search alone; this is a different category of "unknown" than the
   others (definitional, not evidentiary) and the entry is right not to
   force a resolution.

---

## Summary of findings

Coverage is complete: all 30 panel-spec columns are present (0 missing
entirely), all required structural blocks from docs/schema.md are present,
relations are fully reciprocal against both existing entries and
docs/roster.md's expansion queue, and every value recovered by the sweep
report was integrated into the entry with only one minor exception — a
World Bank GDP source block that is defined and narratively referenced but
never bound to an attribute's `sources:` list, leaving it effectively
uncited prose rather than a first-class sourced datum. The entry's own
provenance.flags block is unusually forthcoming about its own two most
significant gaps (the temporal-event half of extreme_event_statistics, and
the snippet-vs-primary status of macro figures), which is good practice and
reduces the coverage checker's marginal find rate. No missing-entirely
columns, no unreciprocated relations, no silently dropped sweep findings
were found.
