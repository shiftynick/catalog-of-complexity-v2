# Weather systems — quantitative source sweep (v0.2 expansion)

Class: `weather-systems` (category: geophysical). Primary exemplar: extratropical
cyclones / synoptic-scale storm systems (the general mid-latitude cyclone, studied via
composite/reanalysis climatology, e.g. Neu et al. 2013 IMILAST, or a named winter storm).
Comparative exemplars: monsoon systems, atmospheric rivers, mesoscale convective
complexes (MCCs), anticyclones.

**CRITICAL SCOPING DECISION (per task brief):** this entry is the BROADER class that
`tropical-cyclones` nests inside — mirroring `planetary-climate`'s own boundary
discipline. Tropical cyclones are explicitly OUT of this entry's own primary-evidence
scope (they have their own verified entry); the ~85 named tropical storm-strength
systems/yr figure in `planetary-climate.yaml`'s component_ontology (lines ~171-175)
belongs to the tropical-cyclones child entry and must NOT be double-counted here.
Extratropical/synoptic-system counts — this entry's own numerosity gap per the task
brief — are now well supplied below (Neu et al. 2013, and a 2026 update).

---

## Reused from tropical-cyclones.yaml / planetary-climate.yaml (verbatim, per task instructions)

### characteristic_timescales — deterministic predictability horizon
- **~2 weeks (~1.2-1.7e6 s)**, error-doubling/deterministic forecast-skill limit.
  Sources: Charney, J.G. et al. (1966). The feasibility of a global observation and
  analysis experiment. *Bull. Amer. Meteorol. Soc.* 47, 200-220. [search-summary
  level per tropical-cyclones.yaml's own re-annotation — not independently fetched
  as full text this or any prior session]; and "Exploring the Origin of the Two-Week
  Predictability Limit: A Revisit of Lorenz's Predictability Studies in the 1960s."
  *Atmosphere* (MDPI) 15(7), 837 (2024). [snippet-verified via WebSearch].
  **Task-brief judgment on entry-of-record:** this figure is arguably MORE directly
  weather-systems' own than planetary-climate's — Lorenz derived it studying synoptic
  weather prediction specifically; planetary-climate borrowed it and itself notes
  (chaos_sensitivity.yaml provenance) that the ~2-week figure "belongs to the WEATHER
  subsystem, not the climate-level score." Recommend weather-systems carry this as
  PRIMARY home, planetary-climate as secondary/inherited. Read-status carried forward
  unchanged (not upgraded) — both citations remain below primary-read tier.

### fractal_dimension_spatial — general tropical cloud/rain-field
- **D = 1.35** (area-perimeter fractal dimension, least-squares fit, r=0.994),
  radar tropical rain-area data (1×1 km resolution, rain rate >0.2 mm/hr threshold)
  combined with GOES IR tropical cloud-area data (4.8×4.8 km resolution, -10°C
  cloud-top threshold, Indian Ocean region, resolution-corrected).
  Source: Lovejoy, S. (1982). Area-perimeter relation for rain and cloud areas.
  *Science* 216(4542), 185-187. **PRIMARY-READ** (full text via McGill GANG group
  author-hosted PDF, physics.mcgill.ca/~gang/eprints/eprintLovejoy/neweprint/
  Lovejoy.Science.1982.pdf — confirmed in `research/v0.2-sweep/verification-debt/
  tropical-cyclones.md`, Item 1). Paper is EXPLICITLY general tropical
  cloud/rain-field, never mentions tropical cyclones/hurricanes/typhoons.
  **Task-brief judgment:** this makes D=1.35 arguably weather-systems' figure more
  than tropical-cyclones', by the same reassignment logic as the timescale above.
  Recommend citing transparently in both entries, primary home reconsidered toward
  weather-systems or a general "tropical convection" scoping note.
  Cross-confirmed in `planetary-climate.yaml` across 40+ years of follow-on
  literature: Luo et al. (2007, GRL, D~1.30-1.40) [snippet-verified via WebSearch,
  not primary-read] and Christensen et al. (2021, GRL 48) [snippet-verified via
  WebSearch, not primary-read] — both carried forward at the same read-status,
  not independently re-verified this sweep.

### criticality — general tropical convection/precipitation
- **Continuous phase transition; critical exponent β = 0.215 ± 0.02** (order
  parameter <P>(w) = a(w-w_c)^β, universal across 4 ocean-basin regions — Western/
  Eastern Pacific, Atlantic, Indian Ocean); **finite-size scaling γ/ν = 1.54(4)**;
  **scale-free spatial correlations in the 25-200 km range**. Data: TRMM microwave
  satellite retrievals, 2000-2005, 0.25° grid resolution.
  Source: Peters, O. & Neelin, J.D. (2006). Critical phenomena in atmospheric
  precipitation. *Nature Physics* 2, 393-396. doi:10.1038/nphys314.
  **PRIMARY-READ in full** (via arXiv preprint cond-mat/0606076, author's own
  text-identical preprint — confirmed in `research/v0.2-sweep/verification-debt/
  tropical-cyclones.md`, Item 3, Candidate B). The tropical-cyclones verification-
  debt log explicitly found this paper is NOT tropical-cyclone-specific (never
  mentions hurricanes/TCs) and is a GENERAL TROPICAL CONVECTION/PRECIPITATION
  claim — rejected there as out-of-scope, reassigned here as a much better fit.
  **Rigor:** high for what it measures (genuine finite-size-scaling universality
  test, real satellite data, quantitative exponents with error bars, data collapse
  across 4 regions) but NOT CSN-2009-style (no explicit power-law-vs-alternative-
  distribution comparison; the tested object is an order-parameter scaling
  exponent, not an event-size distribution). **mechanism_status recommendation:**
  the paper's own framing argues this IS an instance of self-organized criticality
  ("QE... is associated with the critical point of a continuous phase transition
  and is thus an instance of SOC") — read the full candidate-B analysis in the
  verification-debt log before scoring; this looks like a strong candidate for
  mechanism_status: established or proposed (author's own claim is strong, but is
  a single-paper claim, not yet cross-validated by independent replication in the
  primary literature located this sweep) for GENERAL convective precipitation as a
  component of weather-systems, distinct from the SOC-two-claims discipline for
  any specific storm-type's INTERNAL dynamics (which remains a separate,
  unresolved sub-claim — see tropical-cyclones' own score-0 treatment).
  **Measurand type:** static/critical-point framing (order-parameter scaling), not
  a temporal-event heavy-tail statistic in the extreme_event_statistics sense —
  keep these two column entries (criticality vs. extreme_event_statistics)
  separate per filling_rules.soc-two-claims and measurand-required.

---

## Newly sourced this sweep

### numerosity / instance_population — extratropical cyclone global annual counts
**PRIMARY-READ IN FULL**: Neu, U., Akperov, M.G., Bellenbaum, N., Benestad, R.,
Blender, R., Caballero, R., et al. (2013). IMILAST: A Community Effort to
Intercompare Extratropical Cyclone Detection and Tracking Algorithms.
*Bulletin of the American Meteorological Society* 94(4), 529-547.
DOI:10.1175/BAMS-D-11-00154.1. Fetched and read in full via the University of
Reading CentAUR open-access repository PDF
(centaur.reading.ac.uk/32735/1/bams-d-11-00154.1.pdf) — genuinely primary-read,
not a snippet or abstract-only.

- **15 independent detection/tracking algorithms**, applied to the same 20-yr
  ERA-Interim reanalysis input (1 Jan 1989 - 31 Mar 2009, 1.5° spatial / 6-hourly
  temporal resolution), standardized only on a 24 h minimum lifetime threshold.
- **NH (30-90°N) total cyclone counts**: range from **~6,000 (M03) to ~21,000
  (M18) during winter (DJF)**; **~5,000 (M03) to ~28,000 (M09) during summer
  (JJA)** — quoting directly: "For the NH, total numbers range from about 6,000
  (M03) to 21,000 (M18) during winter... In summer... the range is between about
  5,000 (M03) and 28,000 (M09)." This is total cyclone-track counts across the
  20-yr/season aggregate, not an annual figure per se (implicitly ~300-1,400
  tracks/winter-season/yr averaged over the 20 winters, depending on method — the
  paper reports multi-decade totals and per-method spread, not a single
  headline annual number).
- **SH (30-90°S)**: "somewhat smaller ranges and deviations of total numbers" than
  NH (exact SH range not excerpted verbatim from the tables in this read-through;
  Tables 2/3 give per-method breakdowns, primary-read but not fully transcribed
  digit-by-digit here — recommend a follow-up targeted table pull before catalog
  lock if per-basin precision is wanted).
- **Track-to-track matching rate between different methods: ~50-70%** — a genuine,
  quantified measurement-method-uncertainty figure, worth recording as a caveat on
  any single-method count cited elsewhere in the literature.
- **Cyclone diameters: "ranging from about 100 to well over 1,000 km"** — direct
  quote, contrasting extratropical cyclones' size variability against tropical
  cyclones' much narrower size range. This is the paper's own headline diameter
  statement and a strong primary-read citation for spatial_extent (see below).
- **Cyclone lifetime distribution** (Fig. 3c,d, NH DJF / SH JJA): most cyclones
  cluster at **1-2 day lifetimes** (largest fraction), with a rapidly decreasing
  tail out to **7-8 days**; the schemes' mode and spread are given in box-whisker
  form, not a single number — record as "lifetime distribution peaks 1-2 days,
  extends to a rare ~7-8 day tail" rather than a single point estimate.
- **Minimum central pressure distribution**: NH DJF intensities cluster
  **940-1010 hPa**, with **"deep" cyclones (core pressure <960 hPa in NH, <950 hPa
  in SH) comprising 2-8% of the NH winter total and 4-12% of the SH winter total**
  depending on method — direct quote: "The percentage of 'deep' cyclones...
  compared to the total number varies from 2% to 8% (M18 and M22, respectively) in
  NH winter, and from 4% to 12% (M18 and M13, respectively) in the SH winter."
- **Propagation speed**: cyclones typically **20-50 km/hr**, with documented
  extreme cases **"moving at over 110 km/hr."**
- **Deepening rate (case studies, not a population statistic)**: storm "Klaus"
  (Jan 2009) exhibited **35 hPa (24 h)⁻¹** during its explosive-development stage;
  an unnamed SH storm (May 1994) showed **~30 hPa (24 h)⁻¹**. Both are individual
  case-study numbers (n=2), not class-level statistics — record as exemplar-level
  evidence, not class-general.

**Assessment**: this is a strong, primary-read, CSN-adjacent-rigor (in the sense
of being a genuine multi-method uncertainty quantification, though not itself a
power-law tail-fit study) source directly filling the numerosity/instance_population
gap the task brief flagged. Recommend evidence_status: measured, with the explicit
caveat (quoted above) that total-count figures vary ~3-5x by detection method and
should be reported as a RANGE, not a single number, per the paper's own central
finding.

### numerosity / instance_population — modern ERA5-based update (2026)
A more recent (2026) paper applying the University of Melbourne cyclone-tracking
scheme to the full ERA5 reanalysis (Dec 1979-Nov 2022, 0.5°×0.5° grid) was
identified and partially retrieved via WebFetch (not a full independent primary
read — the fetch tool's own extraction, not a Read-tool PDF parse):
"A new metric for net extratropical cyclone activity and its insights into surface
climate trends." *Environmental Research: Climate* (IOP Publishing).
DOI: 10.1088/2752-5295/ae4cc4.

- **NH (30-90°N) average: ~34 cyclones per analysis-time-step in winter**; **SH
  (30-70°S): ~28 cyclones per analysis-time-step**, per the paper's Table 1(a) as
  extracted by the fetch tool. "The Arctic domain on average has 5-6 cyclones at
  any given time" — a direct-quote standing-population figure, useful for
  instance_population's "standing count" sub-field distinct from the formation-rate
  sub-field.
- **Mean cyclone radius: ~4.4-5.4° latitude across seasons/regions**, which the
  fetch tool converted to **~490-600 km at typical mid-latitudes** (this
  conversion was NOT independently re-derived or checked by this agent — treat the
  km figure as [snippet-tool-derived, unverified conversion] pending a follow-up
  direct read of the paper's own stated km values, if any).
- **Read-status: snippet-level only** (WebFetch tool extraction of the IOPscience
  HTML page, not a Read-tool PDF parse or independent verification of the
  underlying table). Recommend a follow-up primary-read pass before this specific
  paper's figures are promoted past evidence_status: measured-untested /
  snippet-verified.

### spatial_extent — extratropical cyclone diameter and effective radius
- **"Diameters ranging from about 100 to well over 1,000 km"** — Neu et al. 2013,
  primary-read direct quote (see above). This is the single best citation for this
  column: primary-read, class-general, explicitly contrasts against tropical
  cyclones' narrower ~1e6 m range already recorded in tropical-cyclones.yaml.
- **Effective radius climatology**: Rudeva, I. & Gulev, S.K. (2007). Climatology
  of Cyclone Size Characteristics and Their Changes during the Cyclone Life Cycle.
  *Monthly Weather Review* 135(7), 2568-2587. [snippet-verified via WebSearch this
  sweep — AMS journal page returned HTTP 403 on WebFetch; NOT primary-read].
  Search-summary figures: radius defined as "the radius of a virtual circumference
  whose area is equal to the region enclosed by the outermost closed isobar";
  **mean effective cyclone radius 300-400 km over continents, >900 km over ocean**
  (North Atlantic), derived from 57 years of NCEP-NCAR reanalysis SLP data over
  the NH. This is a genuinely useful, well-cited paper but its exact figures here
  are only search-engine-synthesized, not independently confirmed against the
  primary text — flag for a dedicated re-fetch attempt (e.g. via an institutional
  route or a cached/mirror PDF) before promotion past measured-untested.
- **Synoptic-scale definition**: order 1,000 km or more by textbook convention
  (general meteorology; e.g. the synoptic-scale Wikipedia/textbook consensus
  figure) — [snippet-verified via WebSearch, general domain-knowledge-level
  convergent claim, no single primary paper isolated for this specific framing].
- **Overall class-general spatial_extent recommendation**: 1e5-1e6 m order of
  magnitude (100 km lower bound to >1,000 km upper bound, per Neu et al. 2013's
  own primary-read range), broader than tropical-cyclones' ~1e6 m point estimate —
  record as a range, not a single OOM, reflecting the genuinely wider size
  diversity Neu et al. explicitly call out as a defining EXTRATROPICAL-cyclone
  trait (vs. tropical cyclones' comparative uniformity).

### component_ontology / numerosity — mesoscale convective complexes (MCC)
- **Definition and size thresholds**: Maddox, R.A. (1980). Mesoscale convective
  complexes. *Bull. Amer. Meteorol. Soc.* 61, 1374-1387. [snippet-verified via
  WebSearch — original paper not fetched this sweep, figures taken from
  convergent secondary/glossary sources (AMS Glossary of Meteorology, Wikipedia),
  treat as established meteorological convention rather than an independently
  re-verified primary reading].
  - Cloud shield (IR temperature ≤ -32°C): area **>100,000 km²**.
  - Interior cold-cloud core (IR ≤ -52°C): area **≥50,000 km²**.
  - Duration: size criteria must be sustained **≥6 hours**.
  - Shape: eccentricity (minor/major axis) **≥0.7** at maximum extent (near-circular).
  This is a useful component_ontology entry — MCCs as a named composite
  sub-structure/aggregation level within weather-systems, distinct from both
  extratropical cyclones and tropical cyclones, with their own literature-canonical
  size convention (unlike planetary-climate's own admitted numerosity gap).

### atmospheric rivers — spatial extent, instance_population, transport statistics
- **Typical dimensions**: "long (about 2000 km), narrow (about 300-500 km wide)."
  Source: Newell, R.E., Newell, N.E., Zhu, Y. & Scott, C. (1992). Tropospheric
  rivers? — A pilot study. *Geophysical Research Letters* 19(24), 2401-2404.
  [snippet-verified via WebSearch/Frontiers mini-review secondary citation — the
  original 1992 GRL paper itself was NOT independently fetched this sweep].
  Modern detection-algorithm convention (Guan & Waliser): length **>2000 km**,
  length-to-width ratio **>2**, implying widths typically **400-1000 km**
  [snippet-verified via WebSearch, Guan & Waliser v1/v2 algorithm description,
  original paper not fetched: Guan, B. & Waliser, D.E. (2015). Detection of
  atmospheric rivers: Evaluation and application of an algorithm for global
  studies. *J. Geophys. Res. Atmos.* 120, 12514-12535].
- **instance_population (standing count)**: **"three-to-five major conduits in
  each Hemisphere" at any given time**. Source: Zhu, Y. & Newell, R.E. (1998).
  A proposed algorithm for moisture fluxes from atmospheric rivers. *Monthly
  Weather Review* 126(3), 725-735. [snippet-verified via WebSearch/Frontiers
  mini-review direct quote of the original claim — the 1998 MWR paper itself not
  independently fetched this sweep]. A widely-repeated derivative figure
  ("four to five atmospheric rivers active globally at any given time") appears
  in popular/derivative sources but was not traced to a distinct primary
  citation beyond Zhu & Newell 1998 — treat as the same underlying claim,
  possibly rounded/paraphrased in transmission.
- **Moisture transport dominance**: **">90% of the total midlatitude vertically
  integrated water vapor flux"** moves through these narrow corridors, while ARs
  **"cover about 10% of the total hemispheric circumference"** at 35°N — both
  direct quotes attributed to Zhu & Newell (1998) via the Frontiers mini-review
  secondary source [snippet-verified, not primary-read of the original].
  This >90%-flux/~10%-circumference figure is a striking concentration/
  non-uniformity statistic, potentially relevant to a self_organization or
  emergence justification for this entry (a small fraction of the domain
  carrying the overwhelming majority of a globally-conserved flux).
- **Regional landfall frequency (exemplar-level, not class-general)**:
  California, ~15 landfalling ARs/yr (Neiman et al. 2008) [snippet-verified via
  secondary source, not primary-read]; Great Britain, ~8-10 persistent winter ARs
  (≥18 h duration)/yr (Lavers et al. 2012) [snippet-verified via secondary
  source, not primary-read]. Both are useful comparative regional-instance
  figures but are NOT global instance_population numbers — do not conflate with
  the "3-5 per hemisphere at any time" global standing-count figure above.

### monsoon systems — spatial extent, timescale
- **Spatial extent (proxy figures, no single canonical "monsoon area in km²"
  located this sweep)**: West African monsoon system's Sahel zone spans
  **~5,000 km east-west** across the African continent, with the full West
  African monsoon domain occupying roughly the **4-20°N latitude band**
  [snippet-verified via WebSearch, general geography/climatology consensus
  figures, no single primary paper isolated]. Indian monsoon: no single areal
  figure located this sweep; qualitative statement only ("large areas of western
  and central India receive >90% of annual rainfall" during the June-September
  season) [snippet-verified via WebSearch].
  **Rainfall organization scale (a genuinely primary-adjacent figure)**: "About
  80-90% of the total rainfall amount in the Sahel comes from storms larger than
  80,000-100,000 km² that last longer than 6 hours" [snippet-verified via
  WebSearch synthesis of Sahel rainfall-regime review literature (Nicholson 2013
  and related), original quantitative source paper not individually isolated
  this sweep — but this figure directly overlaps with the Maddox 1980 MCC size
  convention above, suggesting West African Sahel rainfall is substantially
  MCC-organized, a genuine physical link worth noting in the entry's scoping/
  component_ontology].
- **characteristic_timescales**: Indian summer monsoon season duration
  **~100-120 days (June-September)**, onset a well-documented progressive wave
  (Andaman/Nicobar ~25 May → Kerala mainland ~1 June → Mumbai ~9 June → Delhi
  ~29 June) [snippet-verified via WebSearch, IMD/NOAA CPC-derived consensus
  figures, no single primary paper fetched this sweep]. This progressive-onset
  wave (a spatial front sweeping the subcontinent over ~1 month) is itself a
  genuine characteristic-timescale/spatial-propagation-speed datum worth
  recording distinctly from the ~4-month total season length.

### energy_rate_density — NOT RECOVERED this sweep
No published power (W) or energy-throughput figure specific to extratropical
cyclones, monsoon systems, or atmospheric rivers as a class was located this
session, despite a targeted search for baroclinic energy conversion rates.
Search results confirmed baroclinic instability (available-potential-energy →
kinetic-energy conversion) as the qualitative mechanism (multiple 2024-2025
papers on "conversion and maintenance of local available potential energy in
extratropical cyclones") but no single class-level watts figure or citable mass
denominator was recovered. **Recommend evidence_status: unknown** for
energy_rate_density at the class-general level, per filling_rules.no-guessing —
do NOT borrow tropical-cyclones' ~1.5-6e2 erg/s/g figure (a physically different,
narrower-system estimate) or attempt an ad hoc derivation without a published
power/mass anchor. This is a genuine, honestly-reported gap, flagged for a
follow-up targeted search (candidate leads: Lorenz-cycle general-circulation
energy-budget textbooks, e.g. Peixoto & Oort 1992, not checked this sweep).

### extreme_event_statistics — power-law rigor caution (per task brief's filling_rules flag)
No CSN-2009-grade power-law fit for extratropical-cyclone size or intensity
distributions was located this sweep. The one finite-size-scaling / power-law
"cutoff" result found in searches (probability density departing from a power
law at a basin-area-limited cutoff) traces to Corral's TROPICAL-cyclone PDI
work (already cited in tropical-cyclones.yaml as corral2010/corral2011), NOT an
extratropical-cyclone-specific fit — confirmed by re-reading the search snippets
returned, which describe "tropical cyclones cannot become larger because they
are limited by the finiteness of the basin," explicitly the TC case. Sienz et
al. (2010, Tellus A) was identified as the closest extratropical-cyclone-specific
extreme-value-statistics paper, but it uses **Generalized Pareto Distribution
(GPD)** methodology for tail behavior (a distinct, arguably more rigorous
framework than a bare power-law claim), not a power-law tail exponent — a
genuinely different statistical object from the extreme_event_statistics
column's "tail exponent alpha" definition. [snippet-verified via WebSearch only,
original Tellus A paper not fetched this sweep]. Per filling_rules.power-law-rigor,
NO power-law claim should be entered for extratropical cyclones without a
dedicated fetch and CSN-style assessment of Sienz et al. 2010's actual GPD
shape-parameter results — recommend evidence_status: unknown or a very cautiously
worded measured-untested entry describing the GPD framework rather than an alpha
value, pending that follow-up read. measurand_type would be temporal-event
(storm-intensity extremes over time), consistent with tropical-cyclones' own
PDI treatment.

### degree_distribution — not applicable
Same field/continuum reasoning as tropical-cyclones and planetary-climate: no
meaningful node-degree representation for a fluid-dynamical system. Recommend
value: not-applicable, evidence_status: qualitative, matching both sibling
entries' treatment.

### tipping elements / cascade statistics — not separately recovered
No weather-systems-specific (as distinct from planetary-climate's 16-element
inventory) tipping-element or cascade-statistics literature was located this
sweep. Recommend either leaving this column unknown at the weather-systems
class level or explicitly noting that tipping-element literature attaches to
the parent planetary-climate entry, not this one — mirroring the entry's own
scoping discipline of not re-deriving parent-entry material.

---

## Canonical review sources for the entry source list (3-5 requested)

1. **Neu, U. et al. (2013). IMILAST: A Community Effort to Intercompare
   Extratropical Cyclone Detection and Tracking Algorithms.** *BAMS* 94(4),
   529-547. DOI:10.1175/BAMS-D-11-00154.1. **[PRIMARY-READ in full this sweep]** —
   the single strongest, most load-bearing source for this entry: numerosity,
   spatial_extent, characteristic_timescales (lifetime distribution), and a
   genuine multi-method uncertainty quantification (50-70% track-matching rate)
   all in one primary-read paper.
2. **Hoskins, B.J. & Hodges, K.I. (2002). New Perspectives on the Northern
   Hemisphere Winter Storm Tracks.** *J. Atmos. Sci.* 59(6), 1041-1061.
   [existence/title confirmed via WebSearch this sweep; NOT primary-read or
   snippet-content-fetched — a foundational storm-track climatology paper
   repeatedly cited by Neu et al. 2013 itself as the baseline climatology
   reference ("a baseline climatology of extratropical storms, e.g. Hoskins and
   Hodges 2002"); flagged as a high-priority follow-up primary-read target].
3. **Rudeva, I. & Gulev, S.K. (2007). Climatology of Cyclone Size Characteristics
   and Their Changes during the Cyclone Life Cycle.** *Mon. Wea. Rev.* 135(7),
   2568-2587. [snippet-verified via WebSearch this sweep; AMS journal page
   403-blocked WebFetch — effective-radius figures (300-400 km continental,
   >900 km oceanic) are genuinely useful but need a re-fetch before promotion
   past measured-untested].
4. **Peters, O. & Neelin, J.D. (2006). Critical phenomena in atmospheric
   precipitation.** *Nature Physics* 2, 393-396. doi:10.1038/nphys314.
   **[PRIMARY-READ in full, reused from the tropical-cyclones verification-debt
   sweep]** — reassigned here as the criticality column's best available
   citation, per the task brief's explicit instruction.
5. **A new metric for net extratropical cyclone activity and its insights into
   surface climate trends.** *Environmental Research: Climate* (2026).
   DOI:10.1088/2752-5295/ae4cc4. [snippet-level WebFetch extraction only this
   sweep, not a full primary read] — the most RECENT (ERA5, 1979-2022) global
   climatology, useful as a modern cross-check against Neu et al. 2013's older
   ERA-Interim-based figures; flagged for a full primary-read follow-up given
   its currency and direct radius/count figures.

---

## Summary table of quantitative findings

| quantity | value | unit | source | primary-read-or-snippet |
|---|---|---|---|---|
| spatial_extent (diameter) | 100 to >1,000 | km | Neu et al. 2013 | primary-read |
| spatial_extent (effective radius) | 300-400 (land) / >900 (ocean) | km | Rudeva & Gulev 2007 | snippet-verified |
| spatial_extent (modern radius) | ~490-600 (4.4-5.4° lat) | km | ERA5 2026 update | snippet (tool-derived conversion) |
| characteristic_timescale (lifetime) | 1-2 (mode), tail to 7-8 | days | Neu et al. 2013 | primary-read |
| characteristic_timescale (predictability horizon) | ~2 weeks (~1.2-1.7e6) | s | Charney 1966 / MDPI 2024 | snippet/search-summary (reused) |
| numerosity (NH winter total, method range) | ~6,000-21,000 | tracks/20-yr-DJF-aggregate | Neu et al. 2013 | primary-read |
| numerosity (NH summer total, method range) | ~5,000-28,000 | tracks/20-yr-JJA-aggregate | Neu et al. 2013 | primary-read |
| instance_population (standing, NH+SH) | ~34 (NH) / ~28 (SH) | cyclones/analysis-step | ERA5 2026 update | snippet (WebFetch) |
| instance_population (Arctic standing) | 5-6 | cyclones at any time | ERA5 2026 update | snippet (WebFetch) |
| central pressure (deep-cyclone fraction) | 2-8% (NH) / 4-12% (SH) | % of total | Neu et al. 2013 | primary-read |
| propagation speed | 20-50, extreme >110 | km/hr | Neu et al. 2013 | primary-read |
| track-matching rate (method uncertainty) | ~50-70 | % | Neu et al. 2013 | primary-read |
| fractal_dimension_spatial | 1.35 | dimensionless | Lovejoy 1982 | primary-read (reused) |
| criticality (β exponent) | 0.215 ± 0.02 | dimensionless | Peters & Neelin 2006 | primary-read (reused) |
| criticality (finite-size scaling) | γ/ν = 1.54(4) | dimensionless | Peters & Neelin 2006 | primary-read (reused) |
| MCC cloud-shield size | >100,000 | km² | Maddox 1980 | snippet-verified |
| MCC duration | ≥6 | hours | Maddox 1980 | snippet-verified |
| AR dimensions | ~2000 long × 300-500 wide | km | Newell et al. 1992 | snippet-verified |
| AR standing count | 3-5 per hemisphere | count | Zhu & Newell 1998 | snippet-verified |
| AR moisture-flux share | >90 | % of midlat. vapor flux | Zhu & Newell 1998 | snippet-verified |
| Sahel monsoon east-west extent | ~5,000 | km | WebSearch consensus | snippet-verified |
| Indian monsoon season length | ~100-120 | days | IMD/NOAA CPC | snippet-verified |
| energy_rate_density | unknown | erg/s/g | not recovered | — |
| extreme_event_statistics (ETC-specific alpha) | unknown | — | not recovered (Sienz 2010 uses GPD, not power-law) | — |

---

## Three biggest uncertainties

1. **Numerosity/instance_population is method-dependent by a factor of ~3-5x**,
   not a clean single number: Neu et al. 2013's own headline finding is that 15
   standard algorithms applied to identical input data disagree by roughly this
   factor on total cyclone counts (6,000-21,000 NH winter tracks over 20 years,
   depending on method). Any single figure entered into the panel without this
   caveat would misrepresent the paper's central point. The entry should record
   a RANGE with the method-uncertainty explicitly named, not a point estimate —
   this is itself a genuinely interesting finding for a "commensurability" project
   like this catalog (contrast tropical-cyclones' much cleaner ~85/yr WMO figure).

2. **The criticality citation (Peters & Neelin 2006) is a reassignment, not a
   purpose-built weather-systems study**: it is rigorous and primary-read, but it
   was written about general tropical atmospheric convection/precipitation, not
   about extratropical cyclones, monsoons, or ARs specifically — the entry's own
   scoping note nests tropical cyclones OUT of scope, yet this citation's data
   (TRMM satellite retrievals over tropical ocean basins) sits close to the
   tropical-cyclone boundary the entry is trying to exclude. Whether it is a
   legitimate general "weather-systems" criticality citation or actually belongs
   to a still-different, unwritten "tropical convection" entry is a scoping
   judgment call left to the orchestrator, exactly as the task brief flagged.

3. **energy_rate_density and extreme_event_statistics are both genuine gaps**,
   not merely under-searched: no published power/mass figure for extratropical
   cyclones as a class was found (unlike tropical-cyclones' derived ~1.5-6e2
   erg/s/g), and the one extreme-value-statistics paper identified (Sienz et al.
   2010) uses a GPD framework rather than a power-law tail exponent — meaning
   even a follow-up primary read may not yield an "alpha" value compatible with
   the panel's stated column definition, only a shape-parameter/return-level
   analysis that would need its own translation/justification before entry.
