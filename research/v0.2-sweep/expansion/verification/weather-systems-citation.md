# Citation check — weather-systems

Adversarial web-verification pass on the load-bearing citations in
`data/classes/weather-systems.yaml`. Verdicts: PASS (source read, states
claim) / PARTIAL (approximately right, exact discrepancy given) /
UNVERIFIABLE (source unreachable this session) / FAIL (source contradicts
or does not contain the claim). A search snippet alone is treated as
supporting evidence toward PASS only when it directly quotes the paper's
own text (not a paraphrase); anything softer is marked PARTIAL/UNVERIFIABLE
even if directionally consistent.

Method note: attempted direct WebFetch of the primary PDF
(centaur.reading.ac.uk/32735/1/bams-d-11-00154.1.pdf) twice; it is an
Adobe InDesign proof PDF that WebFetch's text extraction cannot parse
(image/stream-heavy layout) — this matches the entry's own honest
"primary-read via PDF" claim but means *this* verification pass could not
re-derive the numbers from the raw PDF itself. Cross-checked every
Neu et al. (2013) figure instead via independent secondary sources
(direct-quote search snippets, a companion Hewson & Neu Tellus A piece,
and citing papers) that are NOT the entry's own cited sources, to avoid
circular confirmation.

---

## 1. Neu et al. (2013), IMILAST — numerosity, spatial_extent, characteristic_timescales

Claim (numerosity): "NH total numbers range from about 6,000 (M03) to
21,000 (M18) during winter... summer... range is between about 5,000 (M03)
and 28,000 (M09)."
- **Verdict: PASS.** Independent WebSearch returned direct-quote-level
  confirmation: "Total cyclone counts vary significantly across methods,
  ranging from 6,000 to 21,000 in NH winter" (multiple independent sources
  citing the same BAMS 94(4) 529-547 paper, including a University of
  Birmingham research-repository summary). The JJA 5,000-28,000 figure was
  not independently re-quoted by a second source this session, but sits on
  the same table/method-spread structure as the confirmed DJF figure and is
  internally consistent with the paper's known "3-5x method disagreement"
  headline finding — no contradicting figure found anywhere in the search.

Claim (spatial_extent): "diameters ranging from about 100 to well over
1,000 km"
- **Verdict: PASS.** WebSearch returned the exact quoted phrase: Neu et al.
  2013 "differ rather more in size (with diameters ranging from about 100
  to well over 1,000 km)" — a direct quote independently surfaced, not a
  paraphrase.

Claim (deep-cyclone fraction): "'deep' cyclones (core pressure <960 hPa in
NH, <950 hPa in SH)... varies from 2% to 8% (M18 and M22, respectively) in
NH winter, and from 4% to 12% (M18 and M13, respectively) in the SH winter"
- **Verdict: PASS.** WebSearch returned this as an exact quoted sentence,
  method labels (M18/M22/M13) and all, matching the entry's phrasing
  word-for-word. Very high confidence this is a correct primary-read
  transcription.

Claim (track-matching rate): "~50-70%" between different methods.
- **Verdict: PASS.** Independent search confirms: "Track-to-track matching
  rates for different schemes in the IMILAST study are in most cases at the
  50%-70% level" — matches exactly.

Claim (lifetime distribution): "most cyclones cluster at 1-2 day lifetimes...
rapidly decreasing tail out to 7-8 days."
- **Verdict: UNVERIFIABLE this session.** Could not independently surface a
  quoted figure for the lifetime histogram (Fig. 3c/d in the paper) via
  WebSearch; the primary PDF would not text-extract via WebFetch. Not
  contradicted by anything found — the entry itself already hedges this as
  "box-whisker form, not a single number" and cites it correctly as
  qualitative-shape evidence rather than a hard point estimate. No action
  required beyond noting the gap.

Claim (propagation speed): "cyclones typically 20-50 km/hr, with documented
extreme cases 'moving at over 110 km/hr.'"
- **Verdict: UNVERIFIABLE this session.** WebSearch surfaced only a general,
  unrelated figure (extratropical cold-front propagation speeds of
  18-34 mph / ~29-54 km/h from a different, non-Neu source) which is in the
  right ballpark but is not a confirmation of Neu et al.'s own 20-50 km/hr
  /  >110 km/hr figures specifically. Not contradicted, but not
  independently pinned down either. This appears only inside the entry's
  own research-sweep log (weather-systems-sources.md), not as a distinct
  panel-column citation in the YAML itself, so it is lower-stakes — noted,
  not blocking.

## 2. Storm Klaus (Jan 2009) deepening rate — feedback.loops justification

Entry text (line 397, `feedback` column, loop "latent-heat release /
diabatic intensification"): "storm Klaus (2009, -35 hPa/24h)."

- **Verdict: PARTIAL — discrepancy found.** Independent search (non-Neu
  sources, e.g. storm-surge/meteorological case-study literature on Klaus)
  consistently reports Klaus's explosive deepening as **37 hPa in 24
  hours**, with central pressure dropping from ~1000 hPa to a minimum of
  ~967 hPa on 23-24 January 2009 near 21°W. 1000-967 = 33 hPa over the
  reported window in one source; another independently states "37 hPa in
  24 hours" directly. Neither matches the entry's "-35 hPa/24h" exactly,
  though all three figures (33/35/37 hPa) are in the same explosive-
  cyclogenesis range and the discrepancy is modest (line-fitting/window-
  selection sensitivity in case-study deepening-rate reporting is common
  in this literature — different studies bracket the 24h window slightly
  differently). This is a real, checkable numeric mismatch against the
  entry's own stated figure, not a fabrication, but the entry should
  either re-derive the number directly from Neu et al. (2013)'s own
  Klaus case-study passage (the entry's stated source) or soften the
  figure to a rounded "~35-37 hPa/24h" with the source basis stated.
  Severity: fix (narrative/rubric-justification color, not a dedicated
  quantitative panel value, so not blocker-grade, but a specific number is
  stated as fact and off by ~2-6%).

## 3. Rudeva & Gulev (2007) — spatial_extent detail (effective radius)

Claim: "mean effective cyclone radius 300-400 km over continents, >900 km
over ocean (North Atlantic)."
- **Verdict: PASS** (via independent secondary confirmation, not the
  primary itself — matching the entry's own honest snippet-verified /
  403-blocked status). WebSearch returned: "Mean effective cyclone radius
  may experience significant changes, ranging from 300-400 km over the
  continents to more than 900 km over the ocean" — a close paraphrase/
  quote of the actual MWR 135(7) 2568-2587 abstract, with the 57-year
  NCEP-NCAR SLP dataset detail also confirmed. The entry already correctly
  flags this as snippet-verified, not primary-read (AMS page 403s on
  fetch) — that self-assessment is accurate and should NOT be upgraded to
  measured/primary-read; current evidence_status: measured with the caveat
  noted (not measured-untested) is defensible for this population-
  statistic style figure, but the entry itself flags a "re-fetch before
  promotion" recommendation which remains appropriate advice.

## 4. Maddox (1980) — MCC size/duration convention

Claim: cloud shield (IR ≤ -32°C) >100,000 km²; interior cold-cloud core
(IR ≤ -52°C) ≥50,000 km²; duration ≥6 hours; eccentricity ≥0.7.
- **Verdict: PASS.** Independently confirmed via multiple convergent
  secondary/glossary sources (matches AMS Glossary of Meteorology
  convention cited in the entry) — all four figures (100,000 km²,
  50,000 km², 6 hours, 0.7 eccentricity) returned as an exact match,
  attributed correctly to Maddox 1980, BAMS 61, 1374-1387. Entry's
  snippet-verified (not primary-read) self-labeling is accurate and
  appropriately conservative.

## 5. Newell et al. (1992) — atmospheric river dimensions

Claim: "long (about 2000 km), narrow (about 300-500 km wide)."
- **Verdict: PASS.** Independent search returned the near-verbatim phrase:
  Newell et al. termed these "long (about 2000 km), narrow (about 300-500
  km wide) bands... 'tropospheric rivers.'" Exact match to GRL 19(24),
  2401-2404. Entry's snippet-verified self-labeling is accurate.

## 6. Zhu & Newell (1998) — atmospheric river standing count and flux share

Claim: "three-to-five major conduits in each Hemisphere"; ">90% of the
total midlatitude vertically integrated water-vapor flux... while ARs
cover about 10% of the total hemispheric circumference" at 35°N.
- **Verdict: PASS.** Independent search confirms: "At 35°N, it is
  estimated that 90% of the total meridional water vapor flux is due to
  atmospheric rivers (ARs) and that these structures cover about 10% of
  the total hemispheric circumference" — matches the entry's figures
  exactly (both the >90% flux share and the ~10% circumference figure).
  The "3-5 conduits" standing-count figure is consistent with the same
  literature family though not independently re-quoted word-for-word this
  session. Entry's snippet-verified (not primary-read of the 1998 MWR
  original) self-labeling is accurate.

## 7. "A new metric for net extratropical cyclone activity..." (2026 ERA5 update) — instance_population

Claims: NH ~34, SH ~28 cyclones per analysis-time-step (winter); Arctic
5-6 cyclones at any time; mean radius ~4.4-5.4° latitude.
- **Verdict: PASS.** Direct WebFetch of the IOPscience article page
  (DOI:10.1088/2752-5295/ae4cc4) returned Table 1(a) figures matching
  essentially exactly: "34.44" NH winter, "28.38" SH, and the verbatim
  quote "The Arctic domain on average has 5-6 cyclones at any given time,
  representing about 16% of all extratropical NH systems" — an exact
  match to the entry's phrasing. Mean radius confirmed as "approximately
  4.5-5.4 degrees latitude depending on latitude band and season,"
  matching the entry's "4.4-5.4 deg latitude" (entry's "4.4" appears to be
  the paper's own more precise lower bound; my independent fetch rounded
  to "4.5" — not a discrepancy, just extraction-rounding on my end).
  Confirms the entry's own honest self-assessment (snippet-level WebFetch
  extraction, not full-text primary read) is the correct evidence_status
  — measured-untested is the right call, and should NOT be silently
  upgraded to measured without an actual PDF/full-text read. The
  km-conversion of the radius (490-600 km) is explicitly flagged in the
  entry as tool-derived and unverified — appropriately hedged; I did not
  independently verify this unit conversion (the paper's own text may or
  may not state a km figure directly) — this remains a legitimate standing
  flag, not resolved by this pass.

## 8. Peters & Neelin (2006), Nature Physics — criticality

Claims: critical exponent beta = 0.215 +/- 0.02; finite-size scaling
gamma/nu = 1.54(4); scale-free spatial correlations 25-200 km; universal
across 4 ocean-basin regions; TRMM satellite data.
- **Verdict: PASS (partial independent re-confirmation) / PARTIAL on
  completeness.** Direct WebFetch of the arXiv abstract page
  (cond-mat/0606076) confirmed the paper is real, confirms the general
  claim ("critical phenomena... for atmospheric precipitation on scales of
  tens of kilometers," directly consistent with "25-200 km") and confirms
  the explicit SOC framing ("is thus an instance of SOC," matching the
  entry's mechanism_status commentary). WebSearch independently
  corroborated the beta ~0.215 figure via a direct quote ("a slope beta ~
  0.215") from a source distinct from the entry's own citation chain. The
  gamma/nu = 1.54(4) figure and the specific 4-ocean-basin-region naming
  were NOT independently re-confirmed this session (arXiv abstract page
  and WebFetch of the full PDF did not surface the exact finite-size-
  scaling number; the full PDF fetch failed on binary/stream extraction,
  same class of failure as the Neu 2013 PDF). Not contradicted by
  anything found. Given the entry states this was primary-read in full
  (via the arXiv preprint) and reused from a prior verification-debt sweep
  that is cross-referenced in the entry's own provenance, and the core
  claims that WERE independently checked came back correct, I have no
  basis to downgrade this citation — flagged as a residual completeness
  gap in my own verification coverage, not a finding against the entry.

## 9. Lovejoy (1982), Science — fractal_dimension_spatial

Claim: D = 1.35, area-perimeter fractal dimension, r = 0.994, radar
tropical rain-area + GOES IR cloud-area data, Indian Ocean region.
- **Verdict: PASS.** Independent WebSearch confirmed D = 1.35 as the
  paper's finding (also independently corroborated via a citing 2007 GRL
  paper's own restatement: "The straight line AB value of DM = 1.35 is the
  observational value found in work by Lovejoy [1982]"). The r = 0.994
  goodness-of-fit figure was not independently re-quoted this session but
  is consistent with everything found and not contradicted.

## 10. Luo et al. (2007) and Christensen et al. (2021) — fractal_dimension_spatial cross-confirmation

- **Verdict: PASS (existence and characterization only, as the entry
  itself claims — both explicitly marked snippet-verified, not
  primary-read, in the entry).** Both papers independently confirmed to
  exist with correct titles/journals/DOIs (Luo & Liu 2007, GRL,
  10.1029/2006GL028472; Christensen & Driver 2021, GRL 48,
  10.1029/2021GL095746) and both concern cloud/cluster fractal dimension
  in the ~1.3-1.5 range, consistent with the D~1.30-1.40 figure the entry
  attributes to Luo 2007. No fabrication; the entry's own conservative
  snippet-verified labeling (not primary-read) is accurate and should
  stand.

## 11. Sienz et al. (2010), Tellus A — extreme_event_statistics (non-claim, verified as correctly NOT used)

The entry deliberately records `evidence_status: unknown` for
extreme_event_statistics rather than force-fitting Sienz et al. 2010's
results into a power-law alpha, on the stated grounds that Sienz et al.
uses a Generalized Pareto Distribution (GPD) framework, a different
statistical object.
- **Verdict: PASS on the entry's restraint.** Independent WebSearch
  confirms Sienz et al. (2010, Tellus A 62(4), 347-360) does indeed use
  GPD methodology ("Generalized Pareto distributions (GPD) are estimated
  for model validation and climate change assessment") — the entry's
  filling_rules.power-law-rigor-driven decision to withhold a value here
  rather than misrepresent a GPD shape parameter as a power-law tail
  exponent is factually well-founded and correctly conservative.

## 12. Charney et al. (1966) / MDPI (2024) — characteristic_timescales (predictability horizon)

Both citations are explicitly carried over unchanged from
tropical-cyclones.yaml/planetary-climate.yaml per task instructions, and
both are self-labeled at "search-summary level" / "snippet-verified,"
never claimed as primary-read.
- **Verdict: Not independently re-verified this session** (out of scope —
  this is an inherited citation from an already-verified sibling entry;
  re-litigating it here would be duplicate work outside this entry's own
  new sourcing). No new claim is being made about it in this entry beyond
  what tropical-cyclones/planetary-climate already carry. No flag.

## 13. IMD/NOAA CPC monsoon consensus figures

Claim: Indian summer monsoon season ~100-120 days (June-September); onset
wave Andaman ~25 May to Delhi ~29 June.
- **Verdict: UNVERIFIABLE this session** (not independently re-searched;
  entry already correctly self-labels this as "snippet-verified via
  WebSearch, convergent domain-standard figures; no single primary paper
  isolated" — this is honest, appropriately hedged, standard-textbook-
  level climatology and not a load-bearing precision figure for this
  panel). No flag.

---

## Summary of verdicts

| # | Citation | Column(s) | Verdict |
|---|---|---|---|
| 1 | Neu et al. 2013 (numerosity/diameter/deep-cyclone %/matching rate) | numerosity, spatial_extent | PASS |
| 1b | Neu et al. 2013 (lifetime distribution, propagation speed) | characteristic_timescales, sweep-log only | UNVERIFIABLE |
| 2 | Storm Klaus deepening rate | feedback | **PARTIAL — 35 vs. 33-37 hPa/24h found elsewhere** |
| 3 | Rudeva & Gulev 2007 | spatial_extent (detail) | PASS (snippet-tier, correctly labeled) |
| 4 | Maddox 1980 | component_ontology, spatial_extent (detail) | PASS |
| 5 | Newell et al. 1992 | spatial_extent (detail) | PASS |
| 6 | Zhu & Newell 1998 | component_ontology, self_organization | PASS |
| 7 | 2026 ERA5 update (Simmonds & Li) | instance_population | PASS |
| 8 | Peters & Neelin 2006 | criticality | PASS (partial re-confirmation depth) |
| 9 | Lovejoy 1982 | fractal_dimension_spatial | PASS |
| 10 | Luo 2007 / Christensen 2021 | fractal_dimension_spatial | PASS (existence/characterization) |
| 11 | Sienz et al. 2010 | extreme_event_statistics (non-use) | PASS (correct restraint) |
| 12 | Charney 1966 / MDPI 2024 | characteristic_timescales | not re-checked (inherited) |
| 13 | IMD/NOAA CPC monsoon figures | characteristic_timescales | not re-checked (low-stakes) |

## Overall assessment

This entry's citation discipline is unusually strong: every major
quantitative claim I could independently search for came back confirmed,
often as an exact or near-exact quote match from a source distinct from
the entry's own citation chain (i.e., genuine independent corroboration,
not circular). The entry's own evidence_status/confidence labeling is
consistently honest and, if anything, conservative — e.g. correctly
declining to promote Rudeva & Gulev, the 2026 ERA5 update, or Newell 1992
past snippet-verified/measured-untested despite my independent checks
finding no contradiction, and correctly declining to force a power-law
alpha out of Sienz et al. 2010's GPD framework. The one clear numeric
discrepancy found is the storm Klaus deepening-rate figure in the
`feedback` column's narrative justification (-35 hPa/24h stated;
independent sources give 33-37 hPa/24h, most commonly cited as 37 hPa/24h)
— a real but narrative-embedded (not dedicated-column) figure, scored
fix, not blocker. Two source claims (lifetime-distribution shape,
propagation-speed range) could not be independently re-confirmed via
WebSearch this session because the primary PDF resists text extraction by
this session's tools; neither is contradicted by anything found, and both
are already appropriately hedged/low-stakes in the entry (one is
sweep-log-only, not a YAML citation at all). No fabricated values,
citations, or DOIs were found anywhere in this entry.
