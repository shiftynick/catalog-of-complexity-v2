# Coverage Check — tropical-cyclones & financial-markets

Verifier: coverage checker (adversarial stance — entries presumed incomplete
until proven otherwise). Checked against `schema/panel-spec.yaml` (panel
columns, counted directly by the checker, not taken from doc prose) and
`docs/schema.md` (entry-structure spec). Cross-referenced against
`research/phase3/tropical-cyclones-sources.md`,
`research/phase3/financial-markets-sources.md`, and `docs/roster.md`.
No entry files were modified by this check.

Date of check: 2026-07-01.

---

## 0. Panel column count (ground truth, counted directly)

`schema/panel-spec.yaml`'s `columns:` block was enumerated directly (not
taken from `docs/decisions.md`'s prose, which says "29 columns" — that count
predates the `instance_population` adoption recorded later in the same file's
changelog and in `panel-spec.yaml`'s own `meta` note). Direct count of
`- id:` entries under `columns:`:

**30 columns total**: category, spatial_extent, characteristic_timescales,
numerosity, instance_population, component_ontology, energy_rate_density,
interaction_topology, interaction_ontology, degree_distribution, modularity,
hierarchy_depth, fractal_dimension_spatial, decentralization, nonlinearity,
feedback, openness_dissipation, chaos_sensitivity, criticality,
extreme_event_statistics, temporal_correlation, tipping_transitions,
memory_hysteresis, information_processing, adaptive_capacity,
variation_selection, emergence, self_organization, robustness_resilience,
cascade_susceptibility.

Note for the record: `docs/decisions.md` D13 says "Panel is now 29 columns" —
stale, superseded by the later `instance_population` adoption noted in the
same file's "Schema parking lot" section and in `panel-spec.yaml` meta. Not a
finding against the entries; flagging only so a future reader doesn't cite
the stale "29" figure.

---

## 1. Column completeness

Verified programmatically: for both entries, every one of the 30 spec column
ids has a corresponding key (`category:` at top level per docs/schema.md's
own worked example; the other 29 under `attributes:`).

**tropical-cyclones.yaml: 0 columns missing.** All 30 present.

**financial-markets.yaml: 0 columns missing.** All 30 present.

This is column-key presence only, per the task's own distinction between
"missing entirely" (a finding) and "present-but-unknown" (legal, not a
finding). Several values are `unknown` or `not-applicable*` — those are
inventoried in Section 3, not counted as missing columns.

No stray attribute keys outside the 30-column spec were found in either file
(no orphan/legacy columns like the superseded `component_diversity`).

---

## 2. Structure completeness vs docs/schema.md

Checked against the worked example in `docs/schema.md`: `exemplars`,
`scoping_note`, `summary`, `relations`, `attributes`, `emergent_phenomena`,
`sources`, `provenance` blocks.

| Block | tropical-cyclones | financial-markets |
|---|---|---|
| `exemplars` | Present, 2 entries (Katrina, Andrew), each with `note`. Non-trivial. | Present, 2 entries (NYSE, Flash Crash 2010), each with `note`. Non-trivial. |
| `scoping_note` | Present, substantive (atomicity convention, boundary, in/out scope stated explicitly). | Present, substantive (same structure, institutional boundary explicit). |
| `summary` | Present, one accessible paragraph, non-generic. | Present, one accessible paragraph, non-generic. |
| `relations` | Present: `part_of` (2 entries), `contains` (1 entry). | Present: `part_of` (1 entry), `contains: []` (empty, with an inline comment explaining why — candidate future entries named). |
| `emergent_phenomena` | Present, 4 named phenomena each with `order_parameter`. | Present, 4 named phenomena each with `order_parameter`. |
| `sources` | Present, 12 entries, each with `citation` (some `url`). Every in-text `sources: [...]` key resolves to an entry here (spot-checked: emanuel1986, emanuel2003, charney1966, krishnamurthy2019, chaisson2011, corral2010, lovejoy1982, noaa-aoml-faq, nhc-tcr-katrina, noaa-climatology, noaa-erc all present; emanuel1999 present in sources but not cited by id anywhere in attributes — orphaned citation entry, minor, not a structural gap). | Present, 6 entries. All in-text sources resolve (hayek1945, cont2001, gopikrishnan1998, gabaix2003, sec-t1-2024, nyse-data-insights, market-scale-figures — 7 keys cited, 6 defined: **`market-scale-figures` is used at numerosity but check — it IS defined**, confirmed present). No orphaned or dangling source ids found. |
| `provenance` | Present: `drafted_by`, `scoping_and_rubrics`, `verification` (4 sub-checks, all `pending`), `flags` (4 entries, each with column+by+note). Non-trivial. | Present: same shape, `verification` all `pending`, `flags` (4 entries). Non-trivial. |

**Structural verdict: no missing blocks in either entry.** Both are
structurally complete against `docs/schema.md`. One trivial finding: in
tropical-cyclones.yaml, `emanuel1999` is defined in `sources:` but not
referenced by any `sources: [...]` list under `attributes` (Emanuel 1999's
dissipative-heating finding is discussed in the sweep report Section 2 but
never cited into the entry — see Section 4 below, this is really an
orphaned-sweep-value issue wearing a source-hygiene hat).

Both entries' `provenance.verification` blocks show all four checks
(`citation_check`, `plausibility_check`, `consistency_check`,
`coverage_check`) as `pending` — i.e., this coverage check is the first of
the four gates to actually run against these entries. That is expected at
this stage, not a finding.

---

## 3. Unknown/not-recovered values — fillability assessment

Every value recorded as `unknown`, `not-applicable*`, or noted
"not recovered" in either entry, assessed for whether literature likely
exists.

### tropical-cyclones.yaml

| Attribute | Recorded as | Fillability verdict | Candidate source |
|---|---|---|---|
| `numerosity` (sub-count: convective cells/hot towers) | "not recovered in Phase 3 sweep; unknown" | **Likely genuinely hard, not a clean miss.** Web check (this session) confirms the literature (TRMM precipitation-radar hot-tower studies, e.g. Kelley et al. 2004, Hendricks/Montgomery/Davis 2004) discusses hot-tower *presence* and *intensification correlation*, not a per-storm census count. A specific "N hot towers in a mature storm" figure does not appear to exist as a citable published datum — it would need to be *derived* by the catalog from TRMM/GPM precipitation-radar data, not simply looked up. Downgrade from "check literature" to "flag as derivable-at-best, likely stays unknown." | TRMM/GPM Precipitation Radar convective-cell census (would require original analysis, not a lookup) |
| `energy_rate_density` (mass denominator) | "NO published mass figure was recovered... denominator is a project estimate" (flagged `verifier_flags: [mass-denominator-is-project-estimate]`) | **FILLABLE — the sweep missed a real published figure.** Web check (this session) surfaced a published circulating air-mass estimate directly on point: total typhoon/TC air mass ~10^16 kg, core air mass ~10^15 kg (troposphere volume basis, scale height H≈8 km) — see MDPI 2023 "A Tropical Cyclone or Typhoon as an Element of the Earth–Atmosphere–Ionosphere–Magnetosphere System." This is in the same order of magnitude as the entry's own project-estimated denominator (~1e16 kg), which is reassuring, but the entry currently claims no published figure exists when one appears to. **This should be re-opened before verified status** — either cite this figure (converting the `derived` status closer to `measured`+`derived` hybrid) or explicitly rule it out with a stated reason. | MDPI Remote Sensing 15(20):4919 (2023) or its underlying primary literature on TC tropospheric mass |
| `temporal_correlation` | `unknown`, "no established measurand chosen for the class; candidate — interannual ACE autocorrelation" | **Plausibly fillable but low priority.** An ACE-autocorrelation or PDI-autocorrelation series is computable from NOAA HURDAT2 (it's a derived-by-us calculation, not a lookup), consistent with the entry's own candidate-measurand note. Genuinely a "nobody has published this exact framing" gap rather than a missed source — reasonable to leave `unknown` pending a dedicated derivation pass. | NOAA HURDAT2 (would require project-side computation, not a citation) |
| Katrina individual ACE/PDI (referenced in `provenance.flags`, not a column value but drives exemplar-level evidence quality) | "not recovered (NHC TCR fetch failed)... retry via HURDAT2 / TCR PDF" | **FILLABLE, high confidence.** HURDAT2 is a public, machine-readable, six-hourly best-track dataset; Katrina's individual ACE/PDI is a direct, mechanical computation from HURDAT2's own published wind records (ACE = sum of (Vmax/10kt)^2 over 6-hourly periods at tropical-storm+ strength) — this is exactly the kind of "nothing found because the fetch failed, not because it doesn't exist" gap the sweep report itself flags. Web check this session still did not surface a pre-computed Katrina-specific ACE number in secondary sources, confirming it needs the primary HURDAT2 pull or an NHC TCR table read, not just another web search. | NOAA HURDAT2 database (direct computation); NHC Tropical Cyclone Report AL122005 |
| `extreme_event_statistics` basin names (Corral et al. 2010's "four ocean basins") | "NOT RECOVERED at the level of named basins" (sweep report) | **Fillable, low priority.** Standard TC-basin taxonomy (Corral's own related papers name Atlantic, East Pacific, West Pacific, and a fourth — likely Australian/South Indian region) is recoverable from the primary arXiv PDF (0910.0054), which the sweep explicitly could not fetch (repeated fetch failures, not absence). A clean re-fetch attempt (arXiv HTML mirror, Semantic Scholar PDF cache) would likely resolve this cheaply. | arXiv:0910.0054 primary PDF (retry fetch) |
| CSN-2009-grade rigor of Corral et al. 2010 | Explicitly left open, `confidence: low`, `verifier_flags` set | **Genuinely requires primary-read, not a web-search miss.** This needs someone to read the Corral paper's methods section directly; a shallow web search will not settle whether they used MLE+KS+bootstrap. Correctly left low-confidence rather than guessed. | Same arXiv PDF; no shortcut via search |

### financial-markets.yaml

| Attribute | Recorded as | Fillability verdict | Candidate source |
|---|---|---|---|
| `instance_population` | `unknown`, "candidate measurand: number of significant public exchanges/venues worldwide; not covered by the Phase 3 sweep" | **FILLABLE, high confidence, cheaply.** Web check (this session) surfaced concrete WFE figures immediately: WFE represents 200+ market infrastructure members including 66 exchanges from the securities/futures industry (also cited elsewhere as "over 250" including non-exchange CCPs); WFE-member exchanges list 41,000+ companies and ~$137T market cap. This is squarely the entry's own stated candidate measurand and was not in the original sweep's search scope at all (the sweep's WFE fetch attempts 403'd on the statistics *pages* it tried, but never searched for the member/exchange *count* specifically). **Top-priority reopen** — this is a genuine miss, not a hard limit. | World Federation of Exchanges (WFE) annual statistics / member directory |
| `energy_rate_density` | `unknown`, sweep verdict explicit (conflicting 28MW/2.2MW capacity figures, capacity≠draw, tenant-vs-NYSE conflation) | **Confirmed genuinely hard, re-checked this session.** A fresh web search reproduced exactly the same 28MW/2.2MW capacity-only conflict and confirmed no actual-draw figure is published; EIA/LBNL data-center energy datasets are aggregate (183 TWh US-wide 2024) with no exchange-specific carve-out. This is a legitimate `unknown`, not a research shortfall — matches the entry's own honest characterization. No better source located. | None found; would require FOIA-style disclosure or an EIA/LBNL sub-sector study that doesn't currently exist |
| `component_ontology` (trading agents count_oom) | "not recovered in Phase 3 sweep; unknown" | **Partially fillable.** FINRA's Industry Snapshot reports (2024/2025 PDFs, located but not opened by the sweep or this check) do publish registered-firm and registered-representative counts (the ballpark: low thousands of broker-dealer firms, ~600k+ registered representatives industry-wide per FINRA's public figures in other years) — this would cover *human* registered participants, not algorithmic-strategy counts, which are not separately enumerated anywhere (algo/HFT strategy counts are proprietary/not publicly tabulated by any regulator). So: human-trader-adjacent counts are fillable from FINRA; algorithmic-agent counts likely stay unknown even after a dedicated pull. | FINRA Industry Snapshot (annual PDF) for registered firms/reps; SEC market-structure data for algo/HFT counts (likely thin) |
| `degree_distribution` | `unknown`, "trading/interbank network degree studies exist but were not in the Phase 1 corpus; left for entry research" | **Fillable but the answer is "contested," not a clean exponent — worth filling with that nuance.** Web check (this session) confirms an active, split econophysics literature: some interbank networks (Austrian) reported scale-free/power-law degree distributions; others (Italian e-MID, UK banking) explicitly reject power-law fits in favor of negative-binomial or core-periphery structure — i.e., this is a live case for `filling_rules.power-law-rigor`, not a one-line fillable exponent. Stock-correlation networks (distinct from interbank/trading networks) do show power-law-like degree distributions in several econophysics papers. The entry should record this as a genuine two-sided literature finding (network type matters: interbank vs. stock-correlation vs. order-flow networks are different graphs with different findings) rather than leave a bare `unknown`. | Iori et al. and related e-MID interbank network papers (contested); Boginski/Butenko/Pardalos "scale-free topology of market investments" (arXiv cond-mat/0310503) for correlation-network side |
| `numerosity` (participant/agent counts) | "Participant/agent counts were not recovered" (note on the numerosity attribute) | **Same as component_ontology above** — partially fillable via FINRA firm/rep counts for the human side; algorithmic counts likely stay unknown. | FINRA Industry Snapshot |

**Top 5 fillable-unknowns across both entries, ranked by
confidence-that-literature-exists and ease of the fix:**

1. **financial-markets `instance_population`** — WFE exchange/member counts (66-200+ member infrastructures). Cheapest, highest-confidence fix; the original sweep simply didn't search for this specific figure.
2. **tropical-cyclones `energy_rate_density` mass denominator** — a published circulating air-mass figure (~10^16 kg) appears to exist and was missed; would upgrade the derivation from "our estimate" toward a cited input.
3. **tropical-cyclones Katrina individual ACE/PDI** — mechanically computable from public HURDAT2 records; the earlier failure was a fetch/access problem, not an absence of data.
4. **financial-markets `component_ontology`/`numerosity` (human trader/firm counts)** — FINRA Industry Snapshot reports are public and were located but never opened.
5. **financial-markets `degree_distribution`** — fillable, but the honest fill is "contested / network-type-dependent," which is itself a valid, more informative catalog entry than a bare `unknown`.

Genuinely-unmeasured (not just under-searched), confirmed this session:
- financial-markets `energy_rate_density` (NYSE-specific power draw) — re-confirmed absent from any public source.
- tropical-cyclones hot-tower/convective-cell per-storm count — the underlying satellite data exists but no published census-style count does; would require new analysis, not a citation.

---

## 4. Orphaned sweep values (recovered with citation, not integrated into entry)

### tropical-cyclones-sources.md → tropical-cyclones.yaml

- **Emanuel (1999) dissipative-heating finding** (Section 2 of the sweep
  report): "dissipative heating... increases maximum wind speeds by roughly
  20%." This is a specific, citable quantitative claim relevant to
  `energy_rate_density` / `openness_dissipation` (it bears on the storm's
  intensity/energy budget) and the source `emanuel1999` IS already defined in
  the entry's `sources:` block — but the ~20% finding itself is never stated
  anywhere in `attributes`, and `emanuel1999` is not cited by id from any
  attribute. **Orphaned**: citation present in the file, evidentiary content
  not integrated anywhere.
- **AOML integration-radius figures** (radius 60 km / 665 km used for AOML's
  own wind/dissipation and rainfall-energy integrals, sweep Section 1a,
  primary-read) — these are the actual methodological radii behind the
  entry's own cited AOML energy figures (6.0e14 W condensation, 1.5e12 W
  kinetic) but are not recorded anywhere in the entry, e.g. as method detail
  under `energy_rate_density` or `spatial_extent.detail`. Not strictly
  required, but would strengthen the `energy_rate_density` methodology note
  (currently silent on what radius AOML integrated over). **Minor orphan.**
- **Chavas et al. 2016 outer-size climatology** (~650-900 km gale-force wind
  radius, Section 1a) — recovered (snippet-level) but not integrated into
  `spatial_extent.detail`, which currently only has eye diameter and RMW, not
  an outer-circulation figure despite the sweep having gone looking for
  exactly that. **Orphaned**, snippet-confidence only, but citable and
  on-topic for the column it was researched for.
- **Wang & Toumi (2020)** storm-lifetime-shortening trend (~1 day shorter for
  major TCs, 1982-2018) — recovered (Section 1c) as a citable GRL paper title
  but not integrated into `characteristic_timescales` (storm lifetime is
  recorded as a static "~1-2 weeks" with no mention of the secular trend) and
  not added to `sources:`. **Orphaned.**
- 2005 Atlantic-season total ACE (245.3×10^4 kt², Section 3a) — recovered but
  correctly NOT integrated as a Katrina-specific figure (the entry doesn't
  claim it is); this one is appropriately left out, not a gap.

### financial-markets-sources.md → financial-markets.yaml

- **HFT tick-to-trade latency figures** (Section 1: ~100ns-few µs FPGA,
  sub-ms software, example 4.5µs breakdown, LSE Millennium Exchange ~126µs)
  — recovered (blog/vendor-sourced, explicitly flagged low-confidence by the
  sweep itself) but not integrated into `characteristic_timescales`, which
  currently has only "order-message processing: sub-millisecond (implied)"
  with no HFT-specific figure. Given the sweep's own low-confidence framing
  this is a defensible omission, but it is at minimum a candidate `detail`
  sub-field analogous to tropical-cyclones' `spatial_extent.detail` pattern.
  **Orphaned, low-priority given source quality.**
- **NYSE record single-day share volume** (30.98 billion shares, April 9,
  2025 per NYSE President Lynn Martin via PYMNTS, Section 1) — recovered,
  citable, but not integrated anywhere in the entry (numerosity records only
  the ~1.5B "average" daily figure, not the volatility-peak figure). Could
  usefully illustrate `chaos_sensitivity` or `extreme_event_statistics`
  (a concrete tail event) but currently sits unused. **Orphaned.**
- **Prior settlement-cycle history** (T+2 2017-2024, T+3 pre-2017) — recovered
  as background (Section 1, explicitly marked
  `[UNVERIFIED — model knowledge]` by the sweep itself, so appropriately NOT
  integrated) — correctly excluded, not a finding.
- **SEC-CFTC Flash Crash joint report** (Sept 30, 2010, "Findings Regarding
  the Market Events of May 6, 2010," Section 5, URL located and confirmed
  live) — this is the single most load-bearing primary document for the
  `flash-crash-2010` exemplar named in the entry, yet it is **not in the
  entry's `sources:` block at all**, and no attribute cites it. The entry
  names the Flash Crash as an exemplar but currently has zero direct
  citations backing that exemplar specifically (cascade_susceptibility and
  nonlinearity reference the Flash Crash only in prose, uncited). This is the
  most significant orphaned value in either entry — a located, live,
  primary-source-confirmed government report central to a named exemplar,
  absent from the bibliography entirely.
- **O'Hara (1995) and Mantegna & Stanley (2000)** (Section 5, bibliographic
  entries the sweep explicitly compiled "for the entry's source list") —
  neither appears in the entry's `sources:` block. These were sweep
  deliverables specifically framed as candidate catalog sources and were
  dropped. **Orphaned.**

---

## 5. Relations block check (part_of / contains vs. docs/roster.md)

Roster class-id conventions checked against `docs/roster.md`'s pilot-10 table
and full-roster candidate list. Only two entry files currently exist in
`data/classes/` (tropical-cyclones.yaml, financial-markets.yaml) — so by
definition every `part_of`/`contains` reference in either file is currently
unresolved (points to a class with no entry file yet). Per D13, unresolved
references are legal and form the roster expansion queue. Checked whether
each reference at least maps onto a real roster name:

**tropical-cyclones.yaml**
- `part_of: [weather-systems, planetary-climate]`
  - `weather-systems` → roster full-candidate list has "weather systems /
    atmosphere" (Geophysical). Reasonable id match, correctly unresolved (no
    entry file), entry's own inline comment flags it as such. OK.
  - `planetary-climate` → roster **pilot-10 #3** ("Planetary climate").
    Correctly named, but worth flagging: this is not just an unresolved
    full-roster candidate, it's a locked pilot-10 class with no drafted entry
    yet — i.e., the compositional graph already has a dangling edge to a
    should-exist-soon pilot class. Not an error, but higher-priority to
    resolve than a generic roster candidate once entry production continues.
- `contains: [convection-cells]`
  - Roster full-candidate list has "convection cells (Rayleigh–Bénard)"
    under Physical & chemical. **Naming/conceptual mismatch worth flagging**:
    the roster's "convection cells" entry is specifically Rayleigh-Bénard
    thermal convection (the classic pattern-formation system), a physically
    distinct phenomenon from tropical-cyclone "convective cells / hot
    towers" (moist deep atmospheric convection / cumulonimbus towers) that
    `component_ontology.itself_complex` also points at the same
    `convection-cells` id. If/when `convection-cells` is drafted as
    Rayleigh-Bénard convection specifically (as the roster describes it),
    this cross-reference will be **wrong** — hot towers are not instances of
    a Rayleigh-Bénard class. This should be resolved before that entry is
    drafted: either the roster needs a separate id for moist atmospheric
    convective cells, or the tropical-cyclones entry's `contains`/
    `itself_complex` references need retargeting.

**financial-markets.yaml**
- `part_of: [global-economy]` → roster full-candidate list has "the global
  economy" (Socio-economic). Correct match, correctly unresolved, entry's
  own comment flags it. OK.
- `contains: []` → empty, with inline comment naming "clearing/payment
  systems" as candidate future entries left unresolved. This is honest and
  matches the pattern (no roster line-item currently named "clearing/payment
  systems" exists verbatim in roster.md, though it is a plausible future
  Infrastructure/Socio-economic candidate — not a roster mismatch, just
  genuinely not yet on the list).

**Verdict:** No broken/nonsensical relation references. One naming
collision worth flagging before the `convection-cells` roster entry is ever
drafted (see above) — a latent consistency risk, not a current error, since
`convection-cells` is unresolved (no entry exists to be wrong yet).

---

## Summary table

| Entry | Missing columns | Structural gaps | Orphaned sweep values | Relations issues |
|---|---|---|---|---|
| tropical-cyclones | 0 / 30 | None (1 minor: emanuel1999 source defined but never cited) | 4 (Emanuel 1999 finding, AOML integration radii, Chavas outer-size figure, Wang & Toumi lifetime-trend) | 1 latent naming collision (`convection-cells` id ambiguous between roster's Rayleigh-Bénard sense and hot-tower usage here) |
| financial-markets | 0 / 30 | None | 4 (HFT latency figures, NYSE record volume, SEC-CFTC Flash Crash report — significant, O'Hara/Mantegna-Stanley bibliography entries) | None (both references correctly map to roster names, correctly unresolved) |
