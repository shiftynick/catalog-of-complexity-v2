# Coverage check — ocean-circulation.yaml (v0.2 expansion)

Checker role: COVERAGE (adversarial — assume the entry is incomplete). Reference
documents: schema/panel-spec.yaml (frozen v1.0), schema/anchors/*.yaml (15 files),
docs/schema.md, docs/roster.md, research/v0.2-sweep/expansion/ocean-circulation-sources.md.
No edits made to the entry or any reference file (read-only check).

---

## 1. Panel-spec column count (30 columns total)

panel-spec.yaml declares 30 columns under `columns:` (verified by direct count of
`- id:` entries under that key, excluding the 8 `filling_rules` ids). Of the 30:

- `category` is entry-level (`category: geophysical`, line 9) — **present**.
- The remaining 29 columns all live under `attributes:` in the class-entry schema
  (per docs/schema.md's worked example).

Direct enumeration of `attributes:` keys in ocean-circulation.yaml (line numbers of
each top-level key under `attributes:`):

| # | Column | Present? | Line |
|---|---|---|---|
| 1 | spatial_extent | yes | 95 |
| 2 | characteristic_timescales | yes | 118 |
| 3 | numerosity | yes | 134 |
| 4 | instance_population | yes | 147 |
| 5 | component_ontology | yes | 168 |
| 6 | energy_rate_density | yes | 206 |
| 7 | interaction_topology | yes | 230 |
| 8 | interaction_ontology | yes | 242 |
| 9 | degree_distribution | yes | 272 |
| 10 | modularity | yes | 281 |
| 11 | hierarchy_depth | yes | 302 |
| 12 | fractal_dimension_spatial | yes | 315 |
| 13 | decentralization | yes | 328 |
| 14 | nonlinearity | yes | 343 |
| 15 | feedback | yes | 366 |
| 16 | openness_dissipation | yes | 387 |
| 17 | chaos_sensitivity | yes | 412 |
| 18 | criticality | yes | 441 |
| 19 | extreme_event_statistics | yes | 463 |
| 20 | temporal_correlation | yes | 477 |
| 21 | tipping_transitions | yes | 487 |
| 22 | memory_hysteresis | yes | 518 |
| 23 | information_processing | yes | 539 |
| 24 | adaptive_capacity | yes | 559 |
| 25 | variation_selection | yes | 575 |
| 26 | emergence | yes | 585 |
| 27 | self_organization | yes | 606 |
| 28 | robustness_resilience | yes | 620 |
| 29 | cascade_susceptibility | yes | 647 |

**Result: all 30/30 panel-spec columns present (29 attributes + entry-level
`category`).** No column is missing entirely. This matches the structural template
of tropical-cyclones.yaml (cross-checked: identical 29-key attribute list, same
order, same grouping headers A-F).

Columns present-but-`unknown` (legal, not a defect per se, but noted for the
fillable-vs-genuinely-unmeasured judgment in section 4): `energy_rate_density`
(value: unknown), `fractal_dimension_spatial` (unknown), `extreme_event_statistics`
(unknown), `temporal_correlation` (unknown). `degree_distribution` and `numerosity`
use `not-applicable` / a fully-worked "not meaningfully countable" prose value
respectively — both are explicit, justified non-guesses, not silent gaps.

---

## 2. Structural blocks required by docs/schema.md

| Block | Present? | Notes |
|---|---|---|
| `id` | yes (line 7) | `ocean-circulation` |
| `name` | yes (line 8) | |
| `category` | yes (line 9) | `geophysical` |
| `status` | yes (line 10) | `draft` (expected pre-verification) |
| `exemplars` | yes (lines 12-43) | 3 exemplars: amoc (primary), gulf-stream (comparative, explicitly disambiguated), thermohaline-conveyor (comparative) — matches docs/schema.md's exemplars-as-evidence-carriers pattern (D14) |
| `scoping_note` | yes (lines 45-70) | atomicity convention declared (water parcels, ~1-10 km, following the hurricane precedent), inside/outside boundary stated, primary-scoring exemplar named |
| `summary` | yes (lines 72-86) | one accessible paragraph, museum-reader register, matches schema.md's intent |
| `relations` | yes (lines 88-90) | see section 3 for reciprocity check |
| `attributes` | yes (lines 92-662) | see section 1 |
| `emergent_phenomena` | yes (lines 664-672) | 4 phenomena listed, each with `order_parameter` (western boundary current intensification, AMOC overturning cell, bistable regimes, mesoscale eddy field) |
| `sources` | yes (lines 674-746) | 6 sources: johns2023, vanwesten2023, mckay2022, moat2020, rahmstorf2006, mehling2024 — each carries a read-status annotation (snippet-verified / primary-read, explicit) |
| `provenance` | yes (lines 747-807) | drafted_by, scoping_and_rubrics, verification (all four checks marked `pending`, correct pre-verification state), flags (4 honest standing-uncertainty flags) |

**Result: all required structural blocks present and populated**, not stubbed.
`component_ontology` and `interaction_ontology` (the two D13 structured blocks)
are both present with the required typed sub-fields (`name`, `count_oom`,
`interchangeable`, `itself_complex` for component_ontology; `name`, `mechanism`,
`participants`, `range` plus summary `type_count`/`alphabet_closure` for
interaction_ontology) — matches panel-spec.yaml's definitions at lines 127-148 and
170-190.

---

## 3. Relations reciprocity check (against docs/roster.md and data/classes/)

`relations.part_of: [planetary-climate]` (line 89).

Cross-checked against `data/classes/planetary-climate.yaml`:
- Line 81: `contains: [weather-systems, tropical-cyclones, ocean-circulation, river-networks]`
  — **ocean-circulation is present**. Reciprocity confirmed both directions.
- The entry's own header comment (lines 4-6) and inline relations comment (line 89)
  correctly self-document this as a resolved roster-expansion-queue item, consistent
  with planetary-climate.yaml's own historical fix_log entry (lines 804-807) that
  added ocean-circulation to its `contains` list for exactly this reciprocity.

`relations.contains: []` (line 90) — entry declares no complex-subsystem catalog
entries are contained, with an inline comment explaining that mesoscale eddies and
western boundary currents are recorded in `component_ontology` as named
substructures rather than separate catalog entries, and flags this as a roster
expansion queue candidate. Cross-checked against docs/roster.md line 3: the
expansion queue list there does **not** currently name a dedicated
eddy-dynamics/boundary-current entry, so `contains: []` is consistent with the
current roster state — not an omission.

**No dangling/unresolved relation ids found.** `gulf-stream` and
`thermohaline-conveyor` are exemplars (evidence carriers within this entry, not
separate catalog entries), correctly not listed in `relations` per D14 (exemplars
≠ entries).

**Result: relations block is fully reciprocal and consistent with the current
roster state. No defect.**

---

## 4. Sweep report cross-check — recovered-but-never-integrated orphan values

Systematically diffed every quantitative figure in
research/v0.2-sweep/expansion/ocean-circulation-sources.md against the entry.

### 4a. Correctly and deliberately withheld (self-flagged in provenance, not a defect)
- Two AMOC weakening-trend figures (-0.6 ± 0.8 Sv/decade 2004-2020, and the
  unconfirmed ~-1.0 Sv/decade 2004-2023 extension): only the better-attributed
  2004-2020 figure entered (robustness_resilience, line 627); the extension
  figure deliberately withheld pending a direct fetch, per provenance flag
  (lines 779-798). Correct, honest handling.
- Gulf Stream along-stream transport figures (Florida Strait 32.9 ± 1.2 Sv;
  Cape Hatteras 57.3 ± 1.9 Sv; Line W 75.6 ± 4.7 Sv, Heiderich & Todd 2020) and
  the "~4% Gulf Stream slowdown over ~40 years" claim: both WebSearch-synthesis
  level per the sweep, deliberately left out of attributes (only named
  qualitatively in the gulf-stream exemplar note, line 31-34), explicitly
  flagged in provenance (lines 790-797). Correct handling — no
  exemplar(gulf-stream)-scored column currently depends on these numbers.
- Instrument precision figures (±1.5 Sv 10-day / ±0.9 Sv annual) and the
  pre/post-2009 heat-transport shift (1.32 PW -> 1.15 PW): sweep marks both as
  needing a follow-up dedicated fetch; correctly not entered given the
  entry doesn't currently need them for any scored column.

### 4b. Orphan finding — the AMOC mean transport figure (16.9 ± 1.2 Sv)
The sweep's best-attributed AMOC transport figure — "Mean AMOC transport, RAPID
array, April 2004-December 2020: 16.9 ± 1.2 Sv" (Johns et al. 2023,
snippet-verified via direct WebFetch quote, the SAME source and SAME confidence
tier as the 1.20 ± 0.12 PW heat-transport figure that IS well-integrated into
`energy_rate_density` and `openness_dissipation`) — is referenced in the entry
**only** inside the `sources.johns2023` citation annotation (line 682, "...16.9
± 1.2 Sv mean transport (2004-2020) and 1.20 ± 0.12 PW mean heat transport
figures..."). It is never entered as a value anywhere in `attributes`.

This is a genuine gap, not a legal `unknown`: `emergent_phenomena` explicitly
names "AMOC overturning cell" with `order_parameter: meridional overturning
transport (Sv) and meridional heat transport (PW) at a reference latitude
(26.5°N)" (line 668) — i.e. the entry's own narrative structure calls for a Sv
figure to accompany the PW figure it already carries, and a directly-fetched,
snippet-verified number for exactly that quantity was recovered this sweep and
then not placed anywhere load-bearing. The most natural home would be
`characteristic_timescales` (as a companion data point, parallel to how the PW
figure is carried as "supporting narrative context" under `energy_rate_density`)
or as a new `detail:` sub-field, though no dedicated "transport strength" column
exists in panel-spec — this is a within-entry integration gap, not a
missing-column defect. Severity: fix (not blocker — no wrong data is
implied, and the figure is fully preserved and traceable via the citation
annotation; but it should be surfaced as an actual attribute value before
verified status, since it's exactly the kind of headline observational number
the entry is otherwise careful to carry).

### 4c. Orphan finding — Buckley & Marshall (2016) review citation
The sweep report explicitly identifies Buckley & Marshall (2016), *Reviews of
Geophysics* 54(1), as "the standard comprehensive AMOC review" and recommends it
"as the entry's anchor review citation" (sweep report lines 236-241, listed
first among the "Canonical review sources for the entry source list (3-5)").
It is never added to the entry's `sources` block — it appears only in narrative
follow-up-flag text (lines 114-116, 131-132, 802-806 of the entry itself, and
line 165 of the sweep report). The entry is internally honest about this (it is
named three times as a flagged follow-up target, not silently dropped), so this
is not a citation-fabrication or miscitation issue — it's an entry that correctly
flags a known gap but has not yet closed it. Severity: fix — a general-purpose
review citation of this stature is normally expected in a mature entry's
`sources` list (parallel to how other verified pilot entries carry a standard
review/textbook citation alongside primary studies), and the sweep already did
the identification work; only the fetch-and-add step remains.

### 4d. No other orphans found
Checked systematically: instance_population reasoning (Venus/Mars/Titan
cross-check), chaos_sensitivity (Mehling et al. 2024 caveat), tipping_transitions
(McKay 2022 + van Westen 2023), memory_hysteresis (van Westen 2023),
characteristic_timescales (Rahmstorf 2006 ~1000-yr figure), robustness_resilience
(Moat et al. 2020 trend) — all sweep-recovered figures for these columns are
correctly integrated with matching evidence_status/confidence framing.

---

## 5. Fillable-from-literature vs. genuinely unmeasured (per-`unknown`/gap judgment)

| Column / value | Current status | Judgment |
|---|---|---|
| `spatial_extent` | order-of-magnitude inference (1e7 m), confidence: low, flagged gap | **Fillable** — candidate source named by the entry itself and the sweep report: Talley et al., *Descriptive Physical Oceanography*, or Buckley & Marshall (2016). Neither was primary-read this sweep. A follow-up literature pass could plausibly locate a citable basin-span or AMOC-domain figure. Not a blocker (the current 1e7 m order-of-magnitude figure is clearly labeled `derived`/inference, not fabricated), but flagged as fix-worthy: the entry should attempt this fetch before promotion to `verified`, since spatial_extent is a `status: core` column and every other pilot entry (per docs/schema.md's tropical-cyclones template) carries a sourced figure here. |
| `numerosity` | fully `unknown`, with reasoning that no defensible circulation-volume convention was sourced | **Genuinely hard to fill, but not certainly unfillable.** Total ocean volume (~1.3-1.4 × 10^9 km^3) is a textbook oceanographic figure; combined with the entry's own declared atomicity (water parcels at 1-10 km mesoscale-resolving discretization), a project-derived order-of-magnitude parcel count is arithmetically constructible (parallel to how tropical-cyclones apparently has "a published circulation-volume estimate" per this entry's own component_ontology note, line 173). The entry chose not to force this without a stated volume convention, which is defensible per no-guessing — but the *inputs* (total ocean volume) are trivially available in any oceanography reference, so this reads more like an unclaimed `derived` opportunity than a true `unknown`. Note-level finding, not fix: the entry's caution here is reasonable and explicitly reasoned, and forcing a derived parcel count is genuinely a judgment call the drafting agent was right to decline without an explicit volume-convention citation. |
| `energy_rate_density` | `unknown`, exemplar(amoc) | **Genuinely unmeasured** — no published Phi_m value exists, and the entry correctly declines to force a mass-denominator estimate (explicitly mirrors the-internet's rejected-mass-figure precedent). Not fillable without a new primary derivation the sweep didn't attempt; appropriately left unknown. Not fillable from a citation search alone. |
| `fractal_dimension_spatial` | `unknown` | **Genuinely unmeasured** — actively searched, none found. No candidate source named because none is known to exist. Correct `unknown`, not a gap. |
| `extreme_event_statistics` | `unknown` | **Genuinely unmeasured** — same treatment, actively searched, no candidate study found (correctly distinguished from `measured-untested`, which would require a candidate study to flag). Correct `unknown`. |
| `temporal_correlation` | `unknown` | **Genuinely unmeasured** — no established measurand/Hurst-exponent figure recovered; parallel treatment to tropical-cyclones. Correct `unknown`. |
| `component_ontology` counts (boundary-current count ~5, gyre count ~10, deep-water-formation-site count 3-5) | `[unverified — model knowledge]` | **Fillable** — these are standard physical-oceanography facts (5 subtropical gyres is essentially textbook), very likely confirmable via Talley et al. or a basic oceanography reference/NOAA source in a short follow-up search. Fix-level: low-hanging, should be closed before `verified` status given how easy these specific counts are to confirm. |
| `characteristic_timescales` — mesoscale eddy turnover lifetime | `unknown`/not quantified | **Plausibly fillable** — eddy literature (e.g., Chelton et al. 2011, "Global observations of nonlinear mesoscale eddies," a well-known altimetry-based census) very likely reports typical eddy lifetimes (weeks-months) alongside the ~100 km spatial scale already cited; not fetched this sweep. Fix-level candidate for follow-up. |

---

## 6. Cross-entry consistency spot-checks (bearing on coverage judgment, not full consistency-checker scope)

- `modularity` score 2 justification explicitly cites river-networks (Mississippi
  basin, score 2) and cities (NYC, score 2) as comparators. Verified against
  schema/anchors/modularity.yaml (lines 90-127): both comparator
  scores/justifications match what the anchor file actually says. Consistent.
- `tipping_transitions` score 3 (not 4) explicitly reserves 4 for
  planetary-climate's full 16-element inventory. Verified against
  schema/anchors/tipping_transitions.yaml (lines 54-72): the anchor's own
  planetary-climate/Earth entry is explicitly the "calibration ceiling case the
  scale-4 definition is written around," confirming the entry's self-restraint
  to 3 is correctly reasoned, not underscored or overscored.
- `memory_hysteresis` score 4, evidence_status `measured-disputed`: verified
  against schema/anchors/memory_hysteresis.yaml (lines 119, 192-198), which
  explicitly flags AMOC as model-derived (not directly observed) and mandates
  exactly this evidence_status distinction from directly-observed traffic
  hysteresis loops. Consistent.
- `component_ontology`/`interaction_ontology` structured-field shapes match
  panel-spec.yaml's D13 definitions exactly (name/count_oom/interchangeable/
  itself_complex; name/mechanism/participants/range +
  type_count/alphabet_closure). No missing sub-fields.

No cross-entry contradictions found in the columns spot-checked (full
consistency-checker pass is out of scope for this coverage check, per the task's
role division, but these checks bear directly on whether "present" values are
also structurally complete).

---

## Summary of findings

All 30 panel-spec columns and all schema.md-required structural blocks are
present in the entry — no column or block is missing entirely. The entry is
unusually disciplined about honest `unknown`s and about NOT silently dropping
low-confidence sweep figures (four separate provenance flags document exactly
what was withheld and why). The coverage defects found are narrower and more
subtle: (1) the sweep's single best-attributed, snippet-verified AMOC transport
figure (16.9 ± 1.2 Sv, Johns et al. 2023) — the natural Sv-companion to the
already-integrated 1.20 PW heat-transport figure, and the literal
`order_parameter` the entry's own `emergent_phenomena` block calls for — was
recovered but never placed into any attribute value; (2) Buckley & Marshall
(2016), independently identified by the sweep as the standard comprehensive AMOC
review and recommended as the entry's anchor citation, was never added to
`sources` despite being named three times in the entry's own flags; and (3) a
handful of `[unverified — model knowledge]` component-ontology counts (gyre
count, boundary-current count, deep-water-formation-site count) and the
mesoscale-eddy turnover timescale are plausibly closeable with a short targeted
literature pass (Talley et al., Buckley & Marshall 2016, or Chelton et al. 2011)
rather than being genuinely unmeasured. None of these rise to blocker severity —
no fabricated, wrong, or anchor-contradicting value was found anywhere in the
entry — but all should be closed before promotion to `verified`, and the
spatial_extent/numerosity gaps are worth one more targeted literature attempt
before being accepted as permanent gaps.
