# Tropical Cyclones — Source Research (Catalog of Complexity, Phase 3)

Primary exemplar: Hurricane Katrina (2005). Compiled 2026-07-01.
Methodology note: every entry below states whether it was read from a primary
source document (PDF/journal page fetched directly) or only recovered via a
search-engine snippet/AI-generated summary of search results ("snippet-only").
Snippet-only values should be treated as lower-confidence and re-verified
against the primary document before being locked into the catalog.

---

## 1. Scale & identity

### 1a. Typical mature-storm dimensions

- **Radius of maximum wind (RMW), climatological mean**: ~47 km (29 mi),
  computed as the mean RMW across hurricanes with central pressure between
  909–993 hPa. Source: Wikipedia "Radius of maximum wind" article, citing
  underlying climatology. **Snippet-only** — the underlying primary study
  (Willoughby & Rahn or similar) was not independently opened; treat the 47 km
  figure as indicative, not primary-verified.
- **Eyewall / RMW contraction range (mature/intense storms)**: eyewall and
  RMW "contract to a very small size, around 10 to 25 km [5 to 15 mi]"
  per NOAA/AOML Hurricane Research Division FAQ. **Primary-read** (fetched
  https://www.aoml.noaa.gov/hrd/tcfaq/TCFAQ_D.txt directly).
- **Outer circulation / gale-force wind radius**: intense TCs commonly show
  outer size (radius of ~17 m/s wind) in the range of roughly 650–900 km
  during their life cycle, per size-climatology literature summaries (Chavas,
  Emanuel, Lin & Dong 2016, J. Climate, "Observed Tropical Cyclone Size
  Revisited," and related outer-size climatologies). **Snippet-only** — the
  Chavas et al. 2016 paper itself was located (journals.ametsoc.org) but not
  opened in full; the specific 650–900 km figure came from a secondary
  ScienceDirect climatology summary, not from Chavas et al. directly. Flag for
  re-verification against the primary Chavas et al. 2016 J. Climate paper.
- **NOAA/AOML integration radius used for energy calculations**: AOML's FAQ
  uses a "radius 60 km (40 n.mi.)" for computing wind/dissipation integrals,
  and a rainfall-energy calculation circle of "radius 665 km (360 n.mi.)."
  **Primary-read** (same AOML FAQ document as above).

### 1b. Katrina specifics

- **Minimum central pressure**: 902 mb (hPa), reached ~1800 UTC 28 August 2005
  over the Gulf of Mexico (peak intensity, Category 5). Source: NHC Tropical
  Cyclone Report AL122005 (Knabb, Rhome, Brown), https://www.nhc.noaa.gov/data/tcr/AL122005_Katrina.pdf,
  and NHC archived public advisories. **Snippet-only** — the PDF itself could
  not be fetched directly (connection reset twice: `read ECONNRESET`); figures
  recovered via WebSearch summaries of the NHC report and NHC archive pages
  (nhc.noaa.gov/archive/2005/...). These are official NHC-sourced numbers
  reproduced consistently across multiple independent search snippets
  (NHC archive, Wikipedia citing NHC, weather.gov), so confidence is high, but
  the primary PDF was not opened directly in this session.
- **Peak sustained winds**: 175 mph (species: 1-minute sustained), ~150 kt
  best-track intensity at 1800 UTC 28 August 2005, based on 902 mb pressure
  and 166 kt flight-level wind observation. Source: NHC Tropical Cyclone
  Report (same document). **Snippet-only** (see caveat above).
- **Landfall (Buras-Triumph, LA), 2nd/Louisiana landfall, ~1110 UTC 29 August
  2005**: central pressure 920 mb; NHC best-track landfall intensity ~110 kt
  (high-end Category 3, sustained winds cited as 125 mph in secondary
  sources); hurricane-force winds extended ~120 mi (190 km) from center at
  landfall. Storm was near Category 4 strength (~115 kt) around 0900 UTC,
  weakening slightly before landfall. Source: NHC Tropical Cyclone Report,
  via search snippets of nhc.noaa.gov and Wikipedia (which cites NHC).
  **Snippet-only.**
- **Eye diameter**: reported values vary by time/location — ~25 mi (40 km) at
  first Florida landfall; ~30 mi (48 km) diameter while a strong Category 4
  over the Gulf; ~35 mi eye diameter cited at Buras, LA landfall (Category 3).
  Sources: EPOD/USRA satellite imagery blog posts and storm2k.org forum
  discussion referencing NHC/NASA imagery. **Snippet-only, and internally
  inconsistent across sources** — treat as approximate/order-of-magnitude
  (eye diameter O(30–50 km)) rather than a precise citable figure. Needs
  primary-source confirmation (NHC report or reconnaissance data) before
  using a single number in the catalog.
- **Katrina's individual ACE**: NOT independently recovered. The 2005 Atlantic
  season total ACE was 245.3 × 10^4 kt² (season record at the time, per
  Wikipedia "2005 Atlantic hurricane season" / NOAA-derived figures,
  **snippet-only**), but Katrina's own per-storm ACE contribution was not
  found in any search snippet returned. **Marked NOT RECOVERED.** (NHC's
  official per-storm ACE tables likely contain this, e.g. in the NHC TCR
  or NOAA's HURDAT2-derived summaries, but the primary document was not
  successfully opened in this session.)

### 1c. Characteristic timescales

- **Individual deep convective cell lifetime / overturning**: ~1 hour
  (cumulonimbus ascent, precipitation, downdraft cycle completes "within an
  hour or so"). **Snippet-only**, general atmospheric-convection literature
  (not hurricane-specific); no single primary paper pinned down.
- **Mesoscale convective system lifetime** (relevant to eyewall convective
  organization): several hours. **Snippet-only**, general literature.
- **Eyewall replacement cycle (ERC) duration**: commonly cited range 12–48
  hours; NOAA-associated summary states "12 to 18 hours" on the fast end up to
  "2 to 3 days," with a broader range of "6 to 54 hours," averaging roughly
  "about a day." Source: Fox Weather explainer citing NOAA;
  Wikipedia "Eyewall replacement cycle" article. **Snippet-only** — no single
  authoritative climatology paper (e.g., Sitkowski et al. 2011, Kossin &
  Sitkowski) was opened directly; the underlying Sitkowski PhD thesis
  (aos.wisc.edu) and a Monthly Weather Review paper appeared in results but
  were not fetched. Treat exact hour ranges as approximate.
- **Tropical cyclone total lifetime (genesis to dissipation)**: typically
  ~3–14 days, with a global-mean shortening trend noted for major (Cat 3+)
  storms — average duration of major TCs shortened by about 1 day from 1982
  to 2018 (Wang & Toumi 2020, subject of GRL paper "A Shortening of the Life
  Cycle of Major Tropical Cyclones"). Source located but **snippet-only** —
  not opened directly.

---

## 2. Energetics (inputs for Chaisson Φ_m derivation — not computed here)

All figures below are **primary-read** from NOAA/AOML's Hurricane Research
Division FAQ, "Tropical Cyclone Winds and Energy" section
(https://www.aoml.noaa.gov/hrd/tcfaq/TCFAQ_D.txt), fetched directly and
successfully in this session.

- **Total energy release rate from condensation (latent heat)**:
  5.2 × 10^19 J/day, equivalently **6.0 × 10^14 W**. AOML states this is
  "200 times the world-wide electrical generating capacity."
- **Kinetic energy generation/dissipation rate** (wind energy, i.e., the rate
  at which KE is generated and — in a mature, steady-state storm — dissipated
  by surface friction): 1.3 × 10^17 J/day, equivalently **1.5 × 10^12 W**,
  described as "about ½ of the world-wide electrical generating capacity."
- **Ratio of condensation energy to kinetic (wind) energy**: ~400 to 1 (AOML
  states explicitly: "a huge ratio of 400 to 1"). Note 6.0e14/1.5e12 = 400,
  internally consistent.
- **Steady-state dissipation mechanics**: AOML FAQ states "For a mature
  hurricane, the amount of kinetic energy generated is equal to that being
  dissipated due to friction. The dissipation rate per unit area is air
  density times the drag coefficient times the wind speed cubed" (i.e.,
  ε ∝ ρ·C_D·V³, the same functional form underlying Emanuel's PDI and
  Emanuel 1999's dissipative-heating work below).
- **Atmospheric mass participating in circulation**: **NOT RECOVERED.** No
  citable published figure for the total mass of air participating in a
  hurricane's secondary circulation was found in this session. This would
  need to be estimated independently (e.g., from a cylindrical volume of
  radius ~500 km, depth ~15 km troposphere, air density profile) rather than
  quoted from a source — flagged as a gap, not fabricated.
- **Dissipative heating effect on intensity**: Emanuel, K. (1999),
  "Thermodynamic control of hurricane intensity," *Nature* 401, 665–669.
  Key finding (searched/**snippet-only**, not opened as primary PDF though a
  primary MIT-hosted PDF link was located at
  https://texmex.mit.edu/pub/emanuel/PAPERS/nature.pdf and not fetched this
  session): dissipative heating (frictional heat returned to the boundary
  layer) was previously unaccounted for in intensity theory/simulations and
  increases maximum wind speeds by roughly 20%; bulk of dissipative heating
  occurs in the boundary layer near the RMW.

---

## 3. Event statistics (class-level)

### 3a. Global TC frequency / climatology

- **Global frequency**: approximately 85 tropical storms per year form over
  warm tropical oceans worldwide; more than half (~45) intensify to hurricane
  /typhoon/cyclone strength. ~72% form in the Northern Hemisphere, ~28% in
  the Southern Hemisphere. Source: NOAA (noaa.gov/tropical-cyclone-climatology,
  nhc.noaa.gov/climo/). **Snippet-only.**
- **Atlantic basin (1991–2020 climatology)**: average season = 14 named
  storms, 7 hurricanes, 3 major hurricanes (Cat 3+). Source: NOAA/NHC
  climatology page. **Snippet-only.**
- **Western North Pacific (1981–2010)**: most active basin, ~26 tropical
  cyclones/year average. Source: search snippet citing NOAA-adjacent
  climatology. **Snippet-only.**

### 3b. Katrina ACE/PDI

- Katrina's individual ACE value: **NOT RECOVERED** (see 1b above).
- Katrina's individual PDI value: **NOT RECOVERED** — not located in any
  search result this session. Emanuel's PDI methodology (cube of max wind
  speed integrated over storm lifetime while ≥ tropical storm force) is
  documented in Emanuel 2005 (below), but no per-storm PDI table for Katrina
  specifically was found.

### 3c. Corral, Ossó & Llebot (2010) — power-law claim [PRIORITY ITEM]

- **Full citation**: Corral, Á., Ossó, A. & Llebot, J. E. (2010), "Scaling of
  tropical-cyclone dissipation," *Nature Physics* 6, 693–696.
  DOI: 10.1038/nphys1725. Preprint: arXiv:0910.0054.
- **Claim recovered**: The paper reports that tropical-cyclone Power
  Dissipation Index (PDI, as defined by Emanuel 2005 — cube of max sustained
  wind integrated over the storm's lifetime while at tropical-storm intensity
  or greater) follows an approximate power-law distribution across "four
  different ocean basins and over long time periods," with deviations from
  the pure power law at small PDI (attributed to record incompleteness) and
  at large PDI (attributed to finite basin-size effects / faster-than-power-law
  cutoff).
- **Exponent**: Reported as **α ≈ 0.95–1.25** across the basins/fits examined
  (search-snippet synthesis), with one specific fit example giving **τ = 1.16**
  for a power-law region spanning roughly **2.2 × 10^9 to 6.3 × 10^10 m³ s⁻²**
  (native PDI units are velocity-cubed × time, m³ s⁻²). **Snippet-only** — I
  attempted to fetch the arXiv preprint (arxiv.org/abs/0910.0054 and the PDF
  at arxiv.org/pdf/0910.0054) directly twice; the abstract page returned
  metadata only, and the PDF fetch returned generic content that did not
  surface the numeric exponent table. The Nature Physics publisher page
  (nature.com/articles/nphys1725) redirected to an authentication gate and
  was not accessible. **The exponent range 0.95–1.25 and the τ=1.16 example
  should be treated as provisional pending direct confirmation from the
  arXiv PDF or Nature Physics SI**, though multiple independent search
  results (Semantic Scholar summary, general web synthesis) converged on
  consistent numbers, which raises moderate confidence.
- **Basins**: stated as "four different ocean basins" but the specific basin
  names (e.g., North Atlantic, Western/Eastern Pacific, etc.) were **not**
  individually confirmed in any snippet — **NOT RECOVERED** at the level of
  named basins.
- **Methodology**: paper is understood (from title/abstract snippets and the
  broader literature context) to apply power-law fitting and
  goodness-of-fit methodology consistent with Clauset-Shalizi-Newman (CSN
  2009, "Power-law distributions in empirical data," SIAM Review), i.e., MLE
  exponent estimation plus a Kolmogorov–Smirnov goodness-of-fit test with
  bootstrap p-value — this is Corral's standard methodological toolkit used
  across his other power-law papers (e.g., Corral 2019 "Power Law Size
  Distributions in Geoscience Revisited," Earth and Space Science). **This
  specific methodological claim is [unverified — model knowledge / inference
  from Corral's broader body of work], not confirmed as applied in this exact
  paper from any source opened this session.** CSN-2009-grade scrutiny
  status: **not independently confirmed for this paper — flag explicitly in
  the catalog that the CSN rigor level of the Corral et al. 2010 fit was NOT
  verified in this research pass and requires a follow-up read of the arXiv
  PDF (page-level) or Nature Physics SI PDF.**
- **Companion/context paper**: Corral, A. (2011/2012-era), "Tropical Cyclones
  as a Critical Phenomenon" (arXiv:1103.4654; also appears as a book chapter,
  Springer, in a Extreme Events/Complexity volume) — elaborates on the same
  PDI power-law framework and situates it within self-organized-criticality
  language. **Snippet-only**, not opened as primary source.
- **Statistical critique / follow-up**: I could **not locate** a specific
  published comment/rebuttal directly challenging the Corral et al. (2010)
  power-law claim (e.g., a Nature Physics "Comment/Reply" pair). This is a
  genuine gap, not a confirmed absence — it's possible one exists in the
  broader power-law-distribution-critique literature (e.g., in the spirit of
  Clauset-Shalizi-Newman's general skepticism toward claimed power laws, or
  in Corral's own 2013 Acta Geophysica paper "Fitting and goodness-of-fit
  test of non-truncated and truncated power-law distributions," which is by
  Corral's own group and revisits fitting methodology but is not an external
  critique). **Recommend explicit "no independent critique located" framing
  in the catalog** rather than asserting either that a rebuttal exists or
  that the finding is uncontested.
- **Context**: The underlying PDI metric was originally defined by Emanuel,
  K. (2005), "Increasing destructiveness of tropical cyclones over the past
  30 years," *Nature* 436, 686–688. That paper itself drew significant
  published debate (e.g., comments by Landsea et al., Pielke, Chan, and
  others; see arXiv:physics/0601050, "Comments on 'Increasing destructiveness
  of tropical cyclones...'"), primarily about data-quality/homogeneity issues
  in best-track wind estimates feeding the PDI calculation — relevant context
  for scrutinizing any power-law claim built on the same PDI data.
  **Snippet-only.**

---

## 4. Fractal / structure

- **Lovejoy (1982) area-perimeter fractal dimension**: **D ≈ 1.35**, CONFIRMED.
  Full citation: Lovejoy, S. (1982), "Area-Perimeter Relation for Rain and
  Cloud Areas," *Science* 216(4542), 185–187. DOI: 10.1126/science.216.4542.185.
  Method: perimeter P and area A of satellite/radar-defined rain and cloud
  regions (areas spanning roughly 1 to 1.2 × 10^6 km²) fit a relation
  P ∝ √(A)^D, yielding fractal dimension D ≈ 1.35, interpreted as evidence
  that rain/cloud perimeters are fractal with no characteristic length scale
  between ~1 and ~1000 km. **Snippet-only** — recovered via WebSearch summary
  and confirmed independently across multiple citing sources (ADS abstract,
  ResearchGate, Science.org DOI page, and a 2007 GRL validation paper by Luo
  et al.), but the original Science paper itself was not fetched/read
  directly in this session. Cross-confirmation across independent
  bibliographic sources gives reasonably high confidence in the D≈1.35 value
  and the 1982/Science/216/185-187 citation details.
- **Hurricane-specific fractal-dimension figure**: **NOT RECOVERED.** No
  hurricane-specific (as opposed to general cloud/rain-field) fractal
  dimension was found in this session's searches. Lovejoy's D≈1.35 is for
  cloud/rain areas generally, not specifically for TC eyewalls or spiral
  rainbands; using it as a TC-specific figure would be a mild
  overextension unless the catalog entry frames it explicitly as "general
  cloud-field fractal dimension, applied here as an analogue."
- **Hot tower / convective-cell counts**: No specific numeric count (e.g.,
  "N hot towers in a mature storm") was recovered. Found only qualitative
  material: hot towers defined as convective cells with ≥20 dBZ radar
  reflectivity reaching ≥14.5 km altitude (per Hurricane Research Division /
  "vortical hot tower" literature, e.g., Hendricks, Montgomery & Davis 2004,
  J. Atmos. Sci., "The Role of 'Vortical' Hot Towers in the Formation of
  Tropical Cyclone Diana (1984)"); presence of a hot tower associated with
  ~2× higher likelihood of intensification in the following 6 hours.
  **Snippet-only**, and **no citable count-per-storm number found** — marked
  NOT RECOVERED for the quantitative count requested.

---

## 5. Canonical sources for entry's source list

1. **Emanuel, K. (2003)**, "Tropical Cyclones," *Annual Review of Earth and
   Planetary Sciences* 31, 75–104. DOI available via
   annualreviews.org/content/journals/10.1146/annurev.earth.31.100901.141259.
   Broad structural/physical review — confirmed to exist and match the
   requested description. **Snippet-only** (title, journal, volume, pages,
   and abstract topic confirmed via search; full text not opened).
2. **Emanuel, K. (1999)**, "Thermodynamic control of hurricane intensity,"
   *Nature* 401, 665–669. DOI: 10.1038/44326. Foundational potential-intensity
   / dissipative-heating paper. **Snippet-only** (primary MIT PDF link located
   at texmex.mit.edu/pub/emanuel/PAPERS/nature.pdf but not fetched this
   session).
3. **Emanuel, K. (2005)**, "Increasing destructiveness of tropical cyclones
   over the past 30 years," *Nature* 436, 686–688. Defines the PDI metric
   central to item 3c above; generated notable published debate (see
   arXiv:physics/0601050 comments). **Snippet-only.**
4. **Corral, A., Ossó, A. & Llebot, J. E. (2010)**, "Scaling of
   tropical-cyclone dissipation," *Nature Physics* 6, 693–696.
   DOI: 10.1038/nphys1725 (arXiv:0910.0054). The class-statistics candidate
   source discussed at length in section 3c. **Snippet-only** for details;
   existence/citation confirmed from multiple independent bibliographic
   sources.
5. **Chavas, D. R., Emanuel, K. & Lin, N. / or Chavas, Lin & Emanuel; and
   Chavas, Reed & Knaff-adjacent work; specifically Chavas, D. R., Emanuel,
   K., Lin, N.-Y. & Dong (2016)**, "Observed Tropical Cyclone Size Revisited,"
   *Journal of Climate* 29(8). Modern storm-size climatology, useful for the
   "typical circulation diameter" figures in section 1a. **Snippet-only** —
   author list should be double-checked against the actual journal page
   (journals.ametsoc.org/view/journals/clim/29/8/jcli-d-15-0731.1.xml) before
   citing in the catalog; the exact author order/full citation was not
   confirmed character-for-character in this session.
6. **(Rapid-intensification review, not fully pinned down)**: search located
   "A review of recent advances (2018–2021) on tropical cyclone intensity
   change from operational perspectives, part 2: Forecasts by operational
   centers," ScienceDirect (Tropical Cyclone Research and Review journal,
   likely). Full citation (authors, exact year, volume/pages) **NOT fully
   recovered** — flagged as needing a follow-up targeted search before
   inclusion in the catalog's source list. Do not cite this one without
   re-verification.

---

## Summary of explicit gaps (NOT RECOVERED — do not fabricate)

- Katrina's individual ACE and PDI values.
- Total atmospheric mass participating in a hurricane's circulation (no
  citable published figure found).
- Named list of the four ocean basins analyzed in Corral et al. (2010).
- CSN-2009-grade methodological confirmation for Corral et al. (2010) — i.e.,
  whether they actually applied MLE + KS-test + bootstrap p-value in the
  Clauset-Shalizi-Newman style. Inferred plausible from Corral's other work
  but not confirmed for this specific paper.
- Any independent published critique/rebuttal specifically targeting Corral
  et al. (2010)'s power-law claim.
- Hurricane-specific (as opposed to general cloud-field) fractal dimension.
- Quantitative hot-tower/convective-cell count per mature storm.
- Full, exact citation for a canonical modern rapid-intensification review
  paper.
