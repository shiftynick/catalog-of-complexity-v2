# ocean-circulation.yaml — flag-fixer log

**By:** workflow-agent (flag-fixer), 2026-07-02
**Source:** structured JSON flags from four adversarial verifiers (citation, plausibility, consistency, coverage) run against the v0.2 expansion draft of `data/classes/ocean-circulation.yaml`.
**Scope:** only `data/classes/ocean-circulation.yaml` was edited. No other entry was touched, per the flag-fixer mandate.

All changes below are also recorded in the entry's own `provenance.fix_log` (append-only) with matching `[BLOCKER/<check>]` / `[FIX/<check>]` tags. This file is a duplicate narrative record for the research trail.

---

## Applied — blocker

### [BLOCKER/citation] robustness_resilience — unsupported Moat et al. (2020) trend figure

**Finding:** The entry cited "-0.6 ± 0.8 Sv/decade (2004-2020, not significant at 95%)" to Moat et al. (2020). Direct fetches of the paper's own landing pages (Copernicus, Ifremer Archimer, Southampton eprints) this pass showed the paper's actual data record is April 2004–September 2018, not 2004–2020, and no Sv/decade linear-trend value was recoverable from the paper's fetched content — one fetch indicated the paper uses change-point analysis rather than a single linear trend ("the tendency of the time series through 2016 was not monotonic"). A genuine -0.6 Sv/YEAR figure exists in the literature but belongs to Johns et al. (2023), describing a short 2007-2011 interannual anomaly, explicitly not a long-term trend, in different units. A well-documented per-decade trend does exist for a comparable period — McCarthy et al. (2025): -1.0 [-0.4 to -1.6] Sv/decade for 2004-2023, reported as SIGNIFICANT at 95%, the opposite significance conclusion — but was excluded by the original sweep as unpinned.

**Fix applied:** Option (b) from the suggested fix — dropped the quantitative trend claim from `robustness_resilience` and rewrote the justification to describe the weakening trend qualitatively as "contested, not adjudicated," rather than rely on either unverified number. The score (2) does not depend on the removed figure and is unchanged. Corrected `sources.moat2020`'s citation annotation to document the sourcing error transparently, and to record (without entering into attributes) both candidate replacement figures the verifier identified. `evidence_status` changed from `measured-disputed` to `qualitative`; `sources:` list on `robustness_resilience` trimmed to `[mckay2022]` — `moat2020` retained in the entry's `sources:` block only for venue/title identification, not for any quantitative claim.

I did not pursue option (c) — direct verification of the McCarthy et al. (2025) figure — because that requires a live fetch of a paper not yet in this project's source corpus; flagged under unresolved below for a future sweep.

---

## Applied — fix

### [FIX/citation] sources.vanwesten2023 — wrong GRL issue number

**Finding:** Citation gave Geophysical Research Letters volume/issue as 50(19); the AGU journal's own table-of-contents record lists article e2023GL106088 under Volume 50, Issue 22. The substantive hysteresis claim (0.4 Sv, asymmetric, sea-ice-driven) is independently confirmed and correct — only the issue number was wrong. This error is inherited from `planetary-climate.yaml` and the sweep report.

**Fix applied:** Corrected "50(19)" to "50(22)" in `sources.vanwesten2023`. The identical error in `planetary-climate.yaml` and the sweep report was **not** touched, per the flag-fixer mandate (edit only this entry) — reported under unresolved for the orchestrator to propagate upstream.

### [FIX/plausibility] Missing evidence_status fields

**Finding:** 7 of 28 attribute blocks lacked the panel-spec-required `evidence_status` field. 5 of those (`interaction_topology`, `degree_distribution`, `fractal_dimension_spatial`, `temporal_correlation`, `variation_selection`) reproduce the exact defect class already caught and fixed once in `planetary-climate.yaml`'s own prior verification pass. The remaining 2 (`component_ontology`, `interaction_ontology`) are `type: structured` columns that carry `confidence` instead, per accepted project-wide convention, and were correctly not flagged.

**Fix applied:** Added `evidence_status` to all 5 flagged columns, mirroring `planetary-climate.yaml`'s fix pattern exactly:
- `interaction_topology`: qualitative
- `degree_distribution`: qualitative
- `fractal_dimension_spatial`: unknown
- `temporal_correlation`: unknown
- `variation_selection`: qualitative

### [FIX/consistency] modularity — rescore 2 → 1

**Finding:** The score-2 justification argued cross-boundary coupling (gyre ring-shedding, cross-basin overturning) is "definitionally" part of the system's function — language that in fact matches `planetary-climate.yaml`'s own `modularity=1` anchor for the *identical* physical structures (the same gyres/overturning cells, one level up in the compositional hierarchy), not the modularity anchor's scale-2 text. Cross-checked directly against `schema/anchors/modularity.yaml`: the river-networks and cities score-2 anchors both describe more genuinely insulated partitions (river sub-basins: cross-module interaction "structurally forced to exactly zero except at confluences"; city boroughs: "somewhat porous but real boundaries") than ocean-circulation's own justification depicted.

**Fix applied:** Rescored `modularity` from 2 to 1. Rewrote the justification to lead with the coupling evidence (matching `planetary-climate.yaml`'s own score-1 framing for the same structures) rather than the identifiable-partition evidence, and to cite `planetary-climate.yaml` directly as the correct comparator instead of river-networks/cities. Verified against `schema/anchors/modularity.yaml` before rescoring, per task instructions ("re-read filling_rules... before touching any value" — extended here to re-reading the relevant anchor file for a rubric rescore).

### [FIX/consistency] component_ontology — itself_complex should point to roster-queue ids

**Finding:** `itself_complex` was set to `no` for mesoscale eddies, western boundary currents, and subpolar/subtropical gyres — all described as `role: composite` and all explicitly named in this entry's own `relations.contains` comment as roster-expansion-queue candidates with no dedicated entry yet. This contradicts the precedent set by `tropical-cyclones.yaml`, which sets `itself_complex: moist-convection-cells` (an unresolved roster-queue id) for its own composite substructure, per panel-spec's `itself_complex` definition (`<catalog-entry-id> | out-of-scope(<what>) | no`).

**Fix applied:** Changed `itself_complex` from `no` to the corresponding unresolved roster-queue id for the three composite substructures: `mesoscale-eddies`, `western-boundary-currents`, `ocean-gyres` — matching the tropical-cyclones precedent. `no` retained for water parcels (atomic, correctly `no`) and for deep-water formation sites, with the reasoning now stated explicitly inline ("named point locations, not a composite dynamical structure in their own right"). Confirmed via `analysis/validate.mjs` that `itself_complex` values pointing to not-yet-existing catalog ids are legal (validator treats `relations.contains`/`part_of` unresolved references as `INFO`, not `ERROR`, and does not cross-check `itself_complex` against `relations.contains` at all — so no reciprocity requirement is triggered by this change).

### [FIX/coverage] characteristic_timescales / emergent_phenomena — missing AMOC transport figure

**Finding:** The sweep's best-attributed AMOC transport figure (16.9 ± 1.2 Sv, RAPID array mean 2004-2020, Johns et al. 2023, snippet-verified — same source/tier as the 1.20 PW figure that IS integrated) was cited in the entry's `sources.johns2023` annotation text but never entered as a value anywhere. `emergent_phenomena` explicitly names "meridional overturning transport (Sv)" as the AMOC overturning cell's `order_parameter`, so the entry's own structure called for this number.

**Fix applied:** Added the 16.9 ± 1.2 Sv figure to `energy_rate_density`'s `method` narrative, alongside the existing 1.20 PW figure (matching how the PW figure is already carried as supporting context, not a derived Phi_m value), and noted explicitly that it instantiates `emergent_phenomena`'s AMOC order_parameter.

### [FIX/coverage] sources — missing Buckley & Marshall (2016)

**Finding:** The sweep report identifies Buckley & Marshall (2016), Reviews of Geophysics 54(1), as "the standard comprehensive AMOC review" and explicitly recommends it as the entry's anchor review citation. It was referenced only in narrative follow-up-flag text inside the entry, never added to the `sources:` block.

**Fix applied:** Searched for and added `buckleymarshall2016` to `sources:`. WebSearch confirmed title, authors, journal, volume/issue/pages (54(1), 5-63), and DOI (10.1002/2015RG000493) across multiple independent secondary listings (Wiley/AGU landing-page metadata, MIT DSpace repository record, Scientific Research Publishing reference index). Direct WebFetch of the Wiley/AGU full-text page returned HTTP 403 (same access pattern already documented for `vanwesten2023`'s AGU-hosted paper elsewhere in this entry) and a WebFetch of the MIT DSpace mirror returned HTTP 405 — so full text/methods were NOT primary-read. Citation annotated snippet-verified, added as an anchor/background reference only; no attribute value in the entry currently depends on a specific number drawn from it.

### [FIX/coverage] component_ontology — unverified component counts

**Finding:** Counts for western boundary currents (~5), subpolar/subtropical gyres (~10), and deep-water formation sites (3-5) were all marked `[unverified — model knowledge]`, not independently sourced. These are standard, easily-confirmable physical-oceanography facts.

**Fix applied:** Ran three WebSearch queries and confirmed:
- **5 major western boundary current systems** (Gulf Stream, Kuroshio, Agulhas, Brazil, East Australian Currents — one per subtropical gyre), corroborated across LibreTexts/oceanography textbook material, AVISO altimetry, and NASA Earthdata. Several additional *minor* western boundary currents exist at other latitudes, not counted in this figure.
- **5 major subtropical gyres** (NOAA Ocean Service: North/South Pacific, North/South Atlantic, Indian Ocean — 2 each in Atlantic/Pacific, 1 in Indian). The entry's "~10 total gyres" figure retains its subpolar-gyre sub-count as `[unverified — model knowledge]`, since only the subtropical-gyre count (5) was independently confirmed this pass.
- **4-5 major deep-water formation sites** (Labrador Sea, Nordic/Greenland Sea, Weddell Sea, Ross Sea, and — inconsistently included across sources — a Mediterranean outflow contribution), corroborated across independent physical-oceanography course/reference pages. The entry's own three named sites (Labrador Sea, Nordic Seas/Greenland-Iceland outflow, Weddell Sea) are the commonly-cited Atlantic-plus-Southern-Ocean subset and are corroborated, not contradicted, by this check.

Updated the per-part `count_oom` text for all three composite rows with these findings and annotations, and raised `component_ontology.confidence` from `low` to `medium` accordingly (all figures are snippet-verified-level via WebSearch synthesis across multiple independent tertiary sources, not a single dedicated primary-read paper — hence `medium`, not `high`).

---

## Note-severity flags recorded, not acted on

Per task instructions, note-severity flags were recorded in `provenance.flags` (new entries, appended) but not acted on. Summary (full text is in the YAML):

1. **sources.johns2023** — verifier confirms the 16.9 Sv / 1.20 PW figures via a stronger direct PMC full-text fetch than the entry's own "snippet-verified" self-assessment implies; suggests upgrading the read-status annotation. Not applied (no content change needed).
2. **sources.mckay2022** — 1.4-8°C threshold corroborated by two independent secondary/tertiary sources but not independently primary-re-read this check (PDF extraction failed twice). No action required; entry's existing framing already appropriate.
3. **tipping_transitions** — justification cites van Westen, Jansen & Dijkstra (2024) EWS paper in passing without it being in this entry's own sources block. Not blocking (score doesn't rest on it). Suggested fix recorded for a future pass.
4. **chaos_sensitivity** — score 2 rests on a single non-replicated toy-model study, a materially different evidentiary situation from the anchor's other level-2 example. Not an error; recorded for IRR-calibration awareness.
5. **temporal_correlation** — no candidate measurand named, unlike planetary-climate's identical column. Suggested addition recorded but not applied (would require touching the value block beyond the evidence_status fix already applied).
6. **interaction_ontology** — omits "radiative exchange" present in sibling entries' interaction lists, without an explicit merge/omission justification. Suggested fix recorded.
7. **characteristic_timescales (mesoscale eddy turnover)** — Chelton et al. (2011) not checked for eddy lifetime. Recorded as a follow-up candidate.
8. **spatial_extent** — 1e7 m figure remains an order-of-magnitude inference; named candidate sources not yet fetched for this specific figure. Recorded (buckleymarshall2016 is now in sources, but was not applied against this specific gap this pass).
9. **numerosity** — total ocean volume is a widely available textbook figure that could support a derived order-of-magnitude parcel count; left unknown per no-guessing, with the option recorded for a future pass.

---

## Unresolved (reported for orchestrator)

1. **planetary-climate.yaml carries the same wrong vanwesten2023 issue number (50(19) instead of 50(22)).** This is a cross-entry propagated error. Per the flag-fixer mandate, only `ocean-circulation.yaml` was edited this pass. The same correction (50(19) → 50(22)) needs to be applied to `data/classes/planetary-climate.yaml`'s own `sources.vanwesten2023` block, and to the sweep report that also carries it unchanged.
2. **McCarthy et al. (2025) AMOC trend figure (-1.0 [-0.4 to -1.6] Sv/decade, 2004-2023, significant at 95%) has not been independently verified.** The citation-check flag offered this as an alternative to pursue (option c), but doing so responsibly requires a live fetch/verification pass on a paper not yet in this project's source corpus — out of scope for a fix-only pass that must not fabricate a verification it didn't do. Recommend a dedicated follow-up literature-verification task if this project wants a decade-scale AMOC trend figure with an agreed significance conclusion.
3. **Gulf Stream along-stream transport figures and the "~4% slowdown over ~40 years" claim** (Florida Strait 32.9 ± 1.2 Sv; Cape Hatteras 57.3 ± 1.9 Sv; Heiderich & Todd 2020) remain WebSearch-synthesis level per the original draft-time flag; no exemplar(gulf-stream)-scored column currently depends on them, so left untouched — not a blocker for this entry's promotion, but noted as still-open provenance debt.

---

## Validator result

`cd analysis && node validate.mjs` — **ocean-circulation: PASS (0 error, 0 warn, 2 info)**.

The 2 info lines (`sources.moat2020 is declared but not cited from any attributes.*.sources list`; `sources.buckleymarshall2016 is declared but not cited from any attributes.*.sources list`) are expected and match an established, accepted cross-entry pattern (e.g. `financial-markets.finra2025`, `global-economy.world-bank-gdp`, `power-grids.pagani-aiello`, `river-networks.csn2009`/`basso2023`, `tropical-cyclones.emanuel2003` all show the identical info-level pattern for background/identification-only citations) — not an error.

The overall validator run reports 1 error catalog-wide, but it belongs to `weather-systems.yaml` (an undeclared source key cited from attributes), a different entry entirely outside this task's scope.
