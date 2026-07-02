# Coverage Check — cities

Checker: COVERAGE CHECKER (adversarial, assume incomplete)
Entry: `N:\coc\data\classes\cities.yaml` (status: draft)
Reference docs checked: `schema\panel-spec.yaml`, `schema\anchors\*.yaml` (15 files),
`docs\schema.md`, `docs\roster.md`, `research\phase4\cities-sources.md`.
Date of check: 2026-07-02.

---

## 1. Panel-spec column coverage (30 columns: `category` + 29 `attributes` columns)

Enumerated all `- id:` entries under `columns:` in `panel-spec.yaml` (29 attribute
columns) plus the top-level `category` field (30 total), and matched each against
a top-level key in `cities.yaml`.

| # | Column | Present in entry? | Missing-entirely vs present-but-unknown |
|---|---|---|---|
| 1 | category | yes (`category: socio-economic`) | present |
| 2 | spatial_extent | yes | present, value given (derived, low confidence) |
| 3 | characteristic_timescales | yes | present, qualitative list |
| 4 | numerosity | yes | present, partial (residents solid, buildings/firms unknown — see component_ontology) |
| 5 | instance_population | yes | present, measured (megacity counts), finer-grain >1M count explicitly unknown |
| 6 | component_ontology | yes | present, structured, 2 of 4 part types have unknown count_oom |
| 7 | energy_rate_density | yes | present, derived value + Chaisson generic proxy |
| 8 | interaction_topology | yes | present, categorical |
| 9 | interaction_ontology | yes | present, structured, 6 types |
| 10 | degree_distribution | yes | present-but-unknown (value: unknown, candidate source named) |
| 11 | modularity | yes | present, hybrid score 2 |
| 12 | hierarchy_depth | yes | present, value 4 |
| 13 | fractal_dimension_spatial | yes | present, class-general (not exemplar-specific) value |
| 14 | decentralization | yes | present, rubric score 2 |
| 15 | nonlinearity | yes | present, rubric score 3 |
| 16 | feedback | yes | present, rubric score 3 + loops list |
| 17 | openness_dissipation | yes | present, hybrid score 3, matches worked anchor |
| 18 | chaos_sensitivity | yes | present, rubric score 1, comparator reasoning |
| 19 | criticality | yes | present, hybrid score 1, mechanism_status: none |
| 20 | extreme_event_statistics | yes | present, measured, Zipf/CSN alpha=2.37(8) |
| 21 | temporal_correlation | yes | present-but-unknown (value: unknown, MFD hysteresis noted qualitatively elsewhere) |
| 22 | tipping_transitions | yes | present, hybrid score 1, no formal count (correctly omitted) |
| 23 | memory_hysteresis | yes | present, hybrid score 3 |
| 24 | information_processing | yes | present, rubric score 3 |
| 25 | adaptive_capacity | yes | present, rubric score 3 |
| 26 | variation_selection | yes | present, categorical: present |
| 27 | emergence | yes | present, rubric score 3 |
| 28 | self_organization | yes | present, rubric score 3 |
| 29 | robustness_resilience | yes | present, rubric score 3 |
| 30 | cascade_susceptibility | yes | present, hybrid score 2 |

**Verdict: 30/30 columns structurally present.** No column is missing-entirely.
Six sub-values are legitimately `unknown` (buildings/parcels count_oom, firms
count_oom, degree_distribution, temporal_correlation, plus the finer-grain
>1M-population count nested inside instance_population, plus Tokyo Phi_m nested
inside energy_rate_density) — all are "present-but-unknown," properly tagged
`evidence_status: unknown`, and (per filling_rules.no-guessing) legally unknown
rather than guessed. Every one of these six has either an inline candidate
follow-up source named or is captured in `provenance.flags`. This is NOT a
coverage defect by the brief's own missing-entirely-only standard.

---

## 2. Structural blocks required by docs/schema.md

| Block | Present? | Notes |
|---|---|---|
| id / name / category / status | yes | id: cities, status: draft |
| exemplars | yes | 2 exemplars (NYC primary, Tokyo secondary), each with `note` |
| scoping_note | yes | present, addresses atomicity per filling_rules.atomicity-convention, boundary in/out explicitly stated |
| summary | yes | one paragraph, accessible-layer prose, no citations (correct per schema.md example) |
| relations | yes | part_of + contains present, unresolved ids commented as roster-queue |
| component_ontology | yes | (see §1) |
| interaction_ontology | yes | (see §1), includes type_count and alphabet_closure per filling_rules.interaction-typing |
| emergent_phenomena | yes | 4 entries, each with name + order_parameter |
| sources | yes | 6 source keys, all resolve, all cited body references resolve to a key (cross-checked — no dangling citations) |
| provenance | yes | drafted_by, verification (4 sub-checks, all correctly "pending" given draft status), flags (8 standing-limitation entries) |

No structural block is missing.

---

## 3. Sweep report (`research/phase4/cities-sources.md`) cross-check — orphan values

Went section-by-section (§1–§16) through the sweep report and checked whether
every recovered value was integrated into the entry, or explicitly and
correctly left out with a stated reason.

- §1 spatial extent: NYC land area, Tokyo wards/metropolis area — all
  integrated into `spatial_extent.detail`. No orphan.
- §2 instance_population (33/43 megacities, 1-in-8, <500k stat) — integrated.
  No orphan.
- §3 NYC/Tokyo population figures — integrated into `component_ontology`
  (residents part) and the Tokyo exemplar note, **with one exception** (see
  Finding F1 below — the "~14M" Tokyo Metropolis figure is NOT in the sweep
  report at all, i.e., it is the reverse problem: a value in the entry with
  no basis in the sweep, rather than a sweep value never integrated).
- §4 Bettencourt scaling exponents — class-general table (β=1.27 patents,
  β=0.77 gas stations) integrated into `nonlinearity`/`emergence`/
  `emergent_phenomena`. **Orphan found:** the sweep report's NYC-specific
  super-exponential fit (β=1.09, from the Bettencourt et al. 2007 main text,
  Phase-1 primary-read) is recovered in §4 but never appears anywhere in
  `cities.yaml` — see Finding F2.
- §5 Zipf/CSN — fully integrated into `extreme_event_statistics`, including
  the "moderate not good" caveat and the rank-size-vs-pdf-exponent
  distinction. No orphan.
- §6 numerosity/component ontology — integrated (buildings/firms correctly
  recorded unknown). No orphan.
- §7 energy_rate_density — fully integrated, including the body-mass vs.
  infrastructure-mass caveat and the electricity-only vs. total-energy
  distinction. No orphan.
- §8 fractal dimension — Song et al. 2012 Chinese mining cities and the
  German central-place city figures are integrated into
  `fractal_dimension_spatial.method`. Minor note: the sweep report's
  individually-named German cities (Munich D=1.7327, Nuremberg D=1.6852,
  Stuttgart D=1.8370, Frankfurt D=1.4811) are compressed in the entry to a
  range "1.48-1.84" without naming the cities — acceptable compression, not
  an orphan (the underlying data is a "not independently pinned" caveat
  either way). The Cardiff D=1.23-1.29 figure from the sweep (§8, flagged
  "treat cautiously," source unclear) is NOT mentioned in the entry at all —
  correctly dropped, since the sweep itself flags it as too poorly sourced
  to use; not a defect.
- §9 extreme event statistics — integrated (city-size Zipf is the primary
  claim; no other event-statistic searched, correctly recorded unknown
  implicitly by omission — no dedicated "urban fire/riot size" mention in
  criticality's own text, but criticality does name these as follow-up
  candidates). No orphan.
- §10 temporal_correlation — integrated (unknown, MFD hysteresis moved to
  memory_hysteresis per that column's own remit, as the entry's note
  explains). No orphan.
- §11 degree_distribution — integrated (unknown, Louf/Roth/Barthelemy 2014
  named as candidate). No orphan.
- §12 modularity — integrated, including the Arcaute et al. (2015) candidate
  mentioned in the sweep §12 but NOT named in the entry's `modularity`
  justification (entry only cites the anchor's own comparator reasoning).
  Minor orphan: Arcaute et al. 2015 citation recovered in sweep but not
  carried into the entry's sources block or justification text — see
  Finding F3 (low severity, note only).
- §13 tipping_transitions — integrated (score 1, qualitative, matches
  sweep's characterization exactly, including the urbantippingpoints.org
  network mention in substance if not by name). No orphan of consequence.
- §14 cascade statistics — integrated (2003 NE Blackout, Dobson et al. 2007
  cross-reference). No orphan.
- §15 chaos/Lyapunov — integrated (score 1, comparator reasoning against
  no-market-chaos rule). No orphan.
- §16 canonical review sources — **partial orphan**: the sweep report
  recommends 4-5 canonical review-level sources for the entry's source list
  (Bettencourt & West 2010 "A unified theory of urban living," Nature;
  Batty 2012 "Building a science of cities," Cities; Batty & Longley 1994
  Fractal Cities; optionally Bettencourt 2021 MIT Press textbook). Of these,
  only Batty & Longley 1994 made it into the entry (via
  `fractal_dimension_spatial.method`, unverified/secondary). Bettencourt &
  West 2010 and Batty 2012 — both snippet-verified with cross-confirmed
  citation metadata in the sweep — are NOT in the entry's `sources:` block
  at all, despite being flagged in the sweep as "strong candidate as a
  canonical review-level source." See Finding F4.

---

## 4. Relations / roster cross-check

`cities.yaml` relations block:
```
part_of: [global-economy]
contains: [power-grids, financial-markets, road-traffic-systems, social-networks]
```

- `global-economy`: not yet an entry in `data/classes/`; correctly marked
  "unresolved -> roster expansion queue" and matches the roster.md candidate
  "the global economy" (socio-economic category) and the identical slug used
  by `financial-markets.yaml`'s own `part_of`. Consistent naming. OK.
- `power-grids`: entry EXISTS (`data/classes/power-grids.yaml`, status:
  draft). Cities.yaml's own comment claims "entry being drafted in this same
  batch — cited as resolved." **Reciprocity check: FAILS.**
  `power-grids.yaml`'s `relations.part_of` is `[]` (empty) — it does not list
  `cities`, not even as a commented/unresolved candidate. See Finding F5.
- `financial-markets`: entry EXISTS (`data/classes/financial-markets.yaml`).
  Cities.yaml's comment claims "RESOLVED — entry exists." **Reciprocity
  check: FAILS.** `financial-markets.yaml`'s `relations.part_of` is
  `[global-economy]` only — `cities` is absent entirely, despite
  financial-markets being explicitly billed elsewhere (its own summary /
  scoping prose, not re-checked in full here) as a NYSE-based, physically
  New-York-located exchange. See Finding F6.
- `road-traffic-systems`: no entry exists; correctly marked unresolved,
  matches roster.md's infrastructure-candidates list ("road traffic
  systems"). OK.
- `social-networks`: no entry exists; correctly marked unresolved, matches
  roster.md's cultural-candidates list ("social networks (online)"). OK.

All four `contains` ids and the one `part_of` id are legitimate roster names
(no invented/misspelled ids). The defect is reciprocity, not existence.

---

## 5. Unknown-by-unknown fillability judgment

| Column / sub-value | Fillable from literature? | Candidate source (named in entry or inferred) |
|---|---|---|
| component_ontology: buildings/parcels count_oom | Yes, plausibly | NYC Dept. of City Planning / Dept. of Finance property/parcel counts (named in entry) |
| component_ontology: firms/establishments count_oom | Yes, plausibly | Census County Business Patterns, NYC Dept. of Finance (named in entry) |
| instance_population: precise count of cities >1M | Yes, mechanically blocked not conceptually | UN WUP2018 Highlights PDF annex table (named in entry; blocked by this session's PDF-parsing failure only) |
| degree_distribution | Plausibly | Louf, Roth & Barthelemy (2014), PLOS ONE 9(7):e102007 (named in entry) |
| temporal_correlation (numeric hysteresis magnitude / Hurst exponent) | Uncertain — may genuinely not exist as a pinned NYC/Tokyo figure | Geroliminis & Sun (2011); Mahmassani et al. traffic-hysteresis literature (named, but may only ever yield qualitative confirmation) |
| energy_rate_density: Tokyo Phi_m | Yes, mechanically blocked (not searched) | Tokyo Metropolitan Government energy statistics (not named in entry — genuine gap in candidate-source naming; see Finding F7) |
| modularity: NYC/Tokyo-specific Q | Uncertain, actively searched and not found | Arcaute et al. (2015), J R Soc Interface (named in sweep §12, NOT carried into entry) |
| fractal_dimension_spatial: NYC/Tokyo-specific D | Yes, plausibly | Batty & Longley (1994) methodology applied directly to NYC/Tokyo GIS boundary data — not named as a concrete next step beyond "read the book" |

Everything above is judged genuinely unmeasured-this-session rather than
unmeasurable-in-principle; none looks like a case where the drafter should
have found a value and didn't (the sweep report's own session-level caveats
— PDF parsing failures, one ECONNREFUSED fetch — explain the gaps credibly).

---

## Findings

**F1 [BLOCKER] — Unsourced/fabricated Tokyo Metropolis population figure.**
`cities.yaml` line 22, exemplars.tokyo.note: "Special Wards ~9.73M vs. Tokyo
Metropolis ~14M vs. Greater Tokyo Area 33.4-37M." The "~14M" Tokyo Metropolis
population figure does not appear anywhere in
`research/phase4/cities-sources.md` (checked all of §1 and §3, the only
sections discussing Tokyo geography/population) and has no citation anywhere
in the entry. Every other model-knowledge figure in this entry is correctly
tagged `[unverified — model knowledge...]` per the hard rule (e.g., the
62 kg/person body mass assumption, the NYSE Mahwah data-center wattage
comparator elsewhere in the corpus); this one is not tagged at all and reads
as a directly asserted, sourced fact sitting in the same sentence as two
properly-sourced figures (9.73M and 33.4-37M), creating a real risk that a
downstream reader treats it as equally well-evidenced. This is exactly the
kind of value the hard rule "never fabricate a value... mark model-knowledge
claims [unverified]" exists to catch.

**F2 [FIX] — Recovered NYC-specific scaling exponent never integrated.**
Sweep report §4 recovered an NYC-specific super-exponential growth fit,
β=1.09 (Bettencourt et al. 2007 main text, Phase-1 primary-read, not
re-verified this session but carried with full provenance). This value is
directly relevant to `nonlinearity` (currently scored class-general only,
even though the entry's own scoping note says "exemplar evidence primarily
from New York City") and to `emergence`. It was never integrated into the
entry. Given it is a primary-read, already-cited (bettencourt2007) figure
sitting unused in the sweep report, this is a low-cost, high-value
integration — closer to a drafting omission than a genuine data gap.

**F3 [NOTE] — Arcaute et al. (2015) modularity candidate not carried into entry.**
Sweep §12 names Arcaute, E. et al. (2015), "Constructing cities,
deconstructing scaling laws," J. R. Soc. Interface, as the best follow-up
candidate for a citable NYC/Tokyo modularity Q. The entry's `modularity`
justification and `provenance.flags` entry for modularity do not name this
paper (they only reference the anchor file's own [unverified] Q~0.3-0.5
range). Worth carrying forward as the named follow-up target rather than
leaving the flag source-less.

**F4 [FIX] — Two sweep-recommended canonical review sources not added to sources: block.**
Sweep §16 explicitly recommends 4 canonical sources for the entry's source
list, cross-confirmed via multiple independent aggregators: Bettencourt &
West (2010), "A unified theory of urban living," Nature 467(7318), 912-913,
DOI 10.1038/467912a; and Batty (2012), "Building a science of cities,"
Cities 29, S9-S16. Both are snippet-verified with solid citation-metadata
confidence per the sweep, yet neither appears in `cities.yaml`'s `sources:`
block or anywhere in the entry body. Only Batty & Longley (1994) made it in
(via fractal_dimension_spatial). This weakens the entry's citation base for
its two headline framing claims (cities-as-complex-systems, urban science as
a field) relative to what was already recovered and sitting in the sweep
report.

**F5 [FIX] — Relations reciprocity gap: power-grids.yaml does not reciprocate cities.contains.**
`cities.yaml` lists `power-grids` under `contains` and its own inline comment
asserts "entry being drafted in this same batch — cited as resolved."
`data/classes/power-grids.yaml` (status: draft, exists) has
`relations.part_of: []` — cities is absent, not even as a commented
candidate, despite power-grids being an existing entry and the natural
reciprocal relation ("a power grid is part of the city/region it serves," at
least for the ERCOT-in-Texas framing power-grids presumably uses). This
should be reconciled in one direction or the other before verified status.

**F6 [FIX] — Relations reciprocity gap: financial-markets.yaml does not reciprocate cities.contains.**
`cities.yaml` lists `financial-markets` under `contains` and its own inline
comment asserts "RESOLVED — entry exists." `data/classes/financial-markets.yaml`
(status: draft, exists, and is used elsewhere in cities.yaml as a repeated
"gold example"/comparator source) has `relations.part_of: [global-economy]`
only — `cities` is entirely absent, despite the NYSE (financial-markets'
own primary exemplar) being physically located in New York City. This is the
same class of defect as F5 and should be reconciled — either
financial-markets.yaml should add `cities` to its `part_of` list, or
cities.yaml's claim that this relation is "RESOLVED" should be revised to
acknowledge the reciprocal link doesn't yet exist on the other side.

**F7 [NOTE] — No candidate source named for Tokyo energy_rate_density follow-up.**
`energy_rate_density`'s method text and `provenance.flags` correctly record
Tokyo Phi_m as unknown ("no power or mass inputs were pulled this sweep"),
but unlike most other unknowns in this entry, no candidate follow-up source
is named (contrast buildings/parcels -> NYC DCP/DOF, degree_distribution ->
Louf et al.). A natural candidate (Tokyo Metropolitan Government / Bureau of
Environment energy statistics, or Japan's METI energy balance tables) is not
named anywhere. Low severity since the gap itself is honestly disclosed, but
worth naming for the next sweep pass.

**F8 [NOTE] — component_ontology.itself_complex compound value for infrastructure networks is not machine-parseable to a single roster id.**
Line 166: `itself_complex: power-grids   # road-traffic-systems and others
also apply...`. Per panel-spec, `itself_complex` is defined as a single
value (`<catalog-entry-id> | out-of-scope(<what>) | no`). The entry picks
one id (power-grids) and pushes the rest into a comment, which is
human-readable but not machine-checkable/auditable the way a list would be.
This mirrors the same compound-value pattern already used in
financial-markets.yaml for `out-of-scope(human) / firms`, so it is a
precedented project convention rather than a novel defect — flagged as a
schema-expressiveness note, not chargeable to this entry specifically.

---

## Summary verdict

Structural coverage is complete: all 30 panel-spec columns and all required
schema.md blocks (exemplars, scoping_note, summary, relations,
component_ontology, interaction_ontology, emergent_phenomena, sources,
provenance) are present, and every `unknown` value is legitimately
unmeasured-this-session with a named or inferable follow-up path — no
column is missing-entirely. The defects found are (a) one fabricated/
uncited figure (Tokyo Metropolis ~14M, F1 — blocker), (b) several
recovered-but-never-integrated sweep values (NYC β=1.09 scaling exponent,
two canonical review citations, the Arcaute et al. modularity candidate —
F2/F3/F4, fix/note), and (c) a relations-reciprocity break with two
existing sibling entries (power-grids, financial-markets) that both fail to
list `cities` back in their own `part_of`, despite cities.yaml asserting
those relations are drafted-together/resolved (F5/F6, fix).
