# Ocean circulation — quantitative source sweep (v0.2 expansion)

Class: `ocean-circulation` (category: geophysical). Primary exemplar: AMOC (Atlantic
Meridional Overturning Circulation). Comparative: Gulf Stream (western boundary
current component, partly but not wholly the same phenomenon as AMOC's thermohaline
overturning limb); global thermohaline "conveyor belt" circulation.

**Scoping note (recommend for draft):** score AMOC as the primary exemplar per the
existing tipping-point literature base. Gulf Stream is a related-but-distinct
wind-and-density-driven western boundary current; where popular sources conflate
"Gulf Stream collapse" with "AMOC collapse," this entry disambiguates explicitly.
Atomicity choice (proposed, for verifier scrutiny): water parcels (following the
hurricane precedent — "a hurricane's atoms are air parcels, not molecules") as the
characteristic-dynamics atom; mesoscale eddies (~100 km, dominate oceanic kinetic
energy) as a possible intermediate/composite unit worth naming in
component_ontology alongside the western boundary current, subpolar/subtropical
gyres, and deep water formation sites (Labrador Sea, Nordic Seas / Greenland-Iceland
outflow) as named substructures — NOT independently verified against a
component-ontology-specific source this sweep; flagged for drafting-stage decision.

---

## Reused from planetary-climate.yaml (same figures, same citations, verbatim per task instructions)

### tipping_transitions — AMOC-specific
- **Hysteresis width:** ~0.4 Sv in freshwater forcing between collapse and recovery
  thresholds, CESM GCM, asymmetric collapse/recovery (sea-ice feedback asymmetry).
  Source: van Westen, R.M. & Dijkstra, H.A. (2023). Asymmetry of AMOC Hysteresis in
  a State-of-the-Art Global Climate Model. *Geophysical Research Letters* 50(19),
  e2023GL106088. arXiv:2308.14098. **Snippet-verified** (Phase 1 + prior sweep +
  this sweep's WebSearch); full arXiv PDF exceeded fetch-tool size limit,
  methods/results NOT primary-read — still true this batch, re-confirmed no fresh
  fetch succeeded this session either.
- **Collapse threshold:** 1.4-8°C sustained global warming (wide uncertainty,
  "already possible" to well above 4°C). Source: Armstrong McKay, D.I., Staal, A.,
  Abrams, J.F., et al. (2022). Exceeding 1.5°C global warming could trigger
  multiple climate tipping points. *Science* 377(6611), eabn7950. DOI:
  10.1126/science.abn7950. **Primary-read** in Phase 1 (per planetary-climate.yaml's
  own provenance note); AMOC is the one of 16 tipping elements with full
  per-element threshold data successfully extracted (the other 15 elements'
  thresholds were never successfully extracted from the manuscript — standing flag
  in planetary-climate.yaml, inherited here).
- **Entry-placement judgment (flagged for orchestrator):** ocean-circulation is
  arguably the more natural primary home for both figures than planetary-climate,
  parallel to the weather-systems reassignment logic used elsewhere in this
  project. Recommend cross-referencing rather than duplicating authority —
  planetary-climate keeps the 16-element inventory; ocean-circulation should own
  the AMOC-specific hysteresis/threshold detail if the two entries are to avoid
  redundant sourcing.

### memory_hysteresis
- Same van Westen & Dijkstra (2023) figure and same caveat: model-derived
  bistability (both "on"/strong-overturning and "off"/collapsed states stable for a
  band of freshwater forcing), NOT an observed completed real-world loop — the real
  ocean has not been driven through a full cycle. Snippet-verified, not primary-read.

---

## Newly sourced this sweep

### AMOC strength (Sv) — observational
- **Mean AMOC transport, RAPID array, April 2004-December 2020:** 16.9 ± 1.2 Sv.
  Source: Johns, W.E., Elipot, S., Smeed, D.A., Moat, B., King, B., Volkov, D.L., &
  Smith, R.H. (2023). Towards two decades of Atlantic Ocean mass and heat
  transports at 26.5°N. *Philosophical Transactions of the Royal Society A*
  381(2262), 20220188. DOI: 10.1098/rsta.2022.0188. **Snippet-verified** via
  WebFetch of PMC full text this sweep (direct quote extracted, not a full
  independent read of the whole paper's methods).
- **Earlier estimate, April 2004-October 2012 (8.5 yr):** 17.2 Sv mean, 1.25 PW
  heat transport [unverified — model-knowledge-flavored search-engine synthesis
  this sweep, not traced to a specific primary quote; treat as lower-confidence
  than the Johns et al. 2023 figure above and prefer the latter].
- **Instrument precision:** transport estimates accurate to ±1.5 Sv (10-day values)
  / ±0.9 Sv (annual values). [Snippet-verified via WebSearch synthesis; specific
  source paper not individually re-confirmed this sweep — likely Smeed et al./
  McCarthy et al. RAPID array methods papers; flagged for a follow-up dedicated
  fetch before catalog lock.]
- **Standard observing program citation:** RAPID-MOCHA-WBTS array at 26.5°N,
  continuous since April 2004 — the standard continuous-observation citation per
  task brief. Canonical data-release citation: "Atlantic meridional overturning
  circulation observed by the RAPID-MOCHA-WBTS array at 26°N from 2004 to 2024"
  (EDMED record, https://edmed.seadatanet.org/report/6178/). **Snippet-verified**
  (title/existence only, not a primary read of the dataset documentation).

### AMOC weakening trend
- **2004-2020 linear trend:** -0.6 ± 0.8 Sv/decade (not significant at 95%).
  Source: Moat, B.I. et al. (2020). Pending recovery in the strength of the
  meridional overturning circulation at 26°N. *Ocean Science* 16, 863-874.
  **Snippet-verified** via WebSearch (title/journal/volume/page confirmed; exact
  trend figure taken from a search-engine synthesis quoting the paper, not from a
  direct-fetched quote — treat trend NUMBER as measured-untested pending a direct
  fetch).
- **2004-2023 extended trend:** -1.0 Sv/decade [90% CI: -0.4 to -1.6], reported as
  significant at 95% in a more recent extension. [unverified — model-knowledge-
  flavored search synthesis this sweep; likely from McCarthy et al. (2025) or an
  RAPID data-release update; source paper NOT individually pinned down this sweep,
  flagged for follow-up.]

### Heat transport (energy_rate_density input candidate)
- **Time-mean meridional heat transport (MHT), 2004-2020:** 1.20 ± 0.12 PW at
  26.5°N. Same source: Johns et al. (2023), snippet-verified as above.
- **Pre-2009 vs. post-2009 shift:** 1.32 PW (before 2009) -> 1.15 PW (2009-2016), a
  0.17 PW reduction associated with a 2.5 Sv AMOC drop. [Snippet-verified via
  WebSearch synthesis quoting what is very likely Smeed et al. (2018, or similar)
  *Journal of Climate* work on the 2009 heat-transport reduction; exact citation
  NOT individually confirmed this sweep — follow-up needed.]
- **Phi_m derivation status:** NOT attempted. Converting 1.2 PW to a free energy
  rate density requires a defensible mass denominator for "the AMOC" (whole basin?
  the overturning limb's water mass? per the task brief, this is the same category
  of problem as the-internet's rejected mass figure). No published Phi_m value
  found. Recommend `energy_rate_density: unknown` with the 1.2 PW figure carried as
  supporting narrative/context only, not forced into a derived erg s^-1 g^-1 number.

### Gulf Stream transport (disambiguation figures, NOT AMOC-equivalent)
- **Florida Strait (upper 1000 m):** 32.9 ± 1.2 Sv time-averaged.
- **Cape Hatteras:** 57.3 ± 1.9 Sv.
- **Line W (offshore New England):** 75.6 ± 4.7 Sv.
  Source: Heiderich, J. & Todd, R.E. (2020). Along-Stream Evolution of Gulf Stream
  Volume Transport. *Journal of Physical Oceanography* 50(8). **Snippet-verified**
  via WebSearch/NOAA repository listing; not independently fetched in full.
  Illustrates transport grows substantially downstream as the Gulf Stream entrains
  recirculating water — this growth is wind-driven gyre recirculation, NOT AMOC
  overturning strength, reinforcing the disambiguation point.
- **Long-term Gulf Stream (Florida Current) trend:** ~4% slowdown over ~40 years,
  described as "first conclusive, unambiguous observational evidence" of change.
  [unverified — model-knowledge-flavored search synthesis; likely Piecuch (2020) or
  similar Florida Current transport-trend paper; citation NOT pinned down this
  sweep, follow-up needed before use.]

### Characteristic timescales
- **Global thermohaline "conveyor belt" full-loop transit time:** ~1000 years
  (commonly cited), with a broader range of 1000-2000 years depending on stream
  layer choice cited in some treatments. Source (best available this sweep):
  Rahmstorf, S. (2006). Thermohaline Ocean Circulation, in *Encyclopedia of
  Quaternary Sciences*, Elsevier (PIK Potsdam-hosted PDF,
  pik-potsdam.de/~stefan/Publications/Book_chapters/rahmstorf_eqs_2006.pdf).
  **Snippet-verified** (title, venue, and headline figure confirmed via WebSearch
  synthesis; full chapter NOT primary-read this sweep). This is model-knowledge-
  adjacent territory ([unverified — model knowledge] for the specific 1000-2000 yr
  range framing) but the ~1000 yr headline is widely corroborated across
  independent tertiary sources (Britannica, textbook treatments) and is safe to
  enter as a class-general order-of-magnitude figure with Rahmstorf as the
  best-identified anchor citation.
- **AMOC/RAPID observational cadence:** continuous since April 2004 (20+ years as
  of 2024) — this is an *observation-system* timescale, not a system dynamics
  timescale; keep separate from the dynamical timescales above.
- **Deep water formation / overturning "turnover":** commonly described via the
  same ~1000 yr figure; no separate, more granular sub-process timescale (e.g.
  Labrador Sea convection event duration, weeks-months) was independently
  source-verified this sweep — flagged as a gap, likely recoverable from Buckley &
  Marshall (2016) review (see below) on a follow-up read.
- **Mesoscale eddy timescale:** not quantified this sweep (eddies ~100 km spatial
  scale noted, but characteristic lifetime/turnover time not sourced) — flagged
  gap.

### Spatial extent
- No single authoritative "characteristic linear extent" figure was directly
  fetched this sweep. AMOC basin scale is Atlantic-basin-spanning
  (~O(10^7 m), consistent with planetary-climate's own O(10^7 m) Earth-scale
  figure) [unverified — model-knowledge order-of-magnitude inference from basin
  geography, not a specific citation]. Mesoscale eddies (~100 km = 10^5 m) are a
  named sub-scale structure. Recommend entering spatial_extent as an
  order-of-magnitude class-general figure (O(10^7 m), basin-spanning) with explicit
  flag that no dedicated citation was recovered — candidate for a targeted
  follow-up against Buckley & Marshall (2016) or Talley et al. *Descriptive
  Physical Oceanography* (not fetched this sweep).

### Fractal dimension, degree distribution, extreme event statistics
- **fractal_dimension_spatial:** NO published fractal dimension for ocean
  circulation structure (coastlines, eddy fields, or the overturning pattern
  itself) was found this sweep. Recommend `unknown`. (Searched specifically;
  mesoscale eddy literature describes a "universal structure" in normalized
  coordinates but this is not a fractal-dimension claim.)
- **degree_distribution:** not applicable — ocean circulation is not naturally a
  network system in this catalog's sense (field/continuum topology, per the
  category's likely `interaction_topology` classification); recommend N/A rather
  than unknown, pending drafting-stage confirmation.
- **extreme_event_statistics:** no tail-exponent / power-law study of AMOC
  strength fluctuations, heat-transport extremes, or related event statistics was
  found this sweep. Recommend `unknown` (not measured-untested — no candidate
  study was even found to flag as untested).

### Chaos / predictability
- Mehling, O., Börner, R., & Lucarini, V. (2024). Limits to predictability of the
  asymptotic state of the Atlantic Meridional Overturning Circulation in a
  conceptual climate model. *Physica D: Nonlinear Phenomena* 459, 134043.
  arXiv:2308.16251. **Primary abstract read** (WebFetch of arXiv abstract page
  succeeded; full-text methods/results NOT fetched this sweep). Key claims:
  system is a slow bistable ocean coupled to a fast chaotic atmosphere; the
  asymptotic state (which stable branch AMOC ends up on) depends sensitively on
  initial conditions near a fractal basin boundary with "almost full phase space
  dimension"; quantified via maximum Lyapunov exponent and chaotic-saddle lifetime
  (specific numeric values NOT recovered from the abstract — full PDF needed).
  **Important scoping caveat: this is a conceptual/toy climate model (bistable box
  model + simplified atmosphere), NOT a finding about the real ocean's measured
  Lyapunov exponent or predictability horizon.** Do not present as an
  observational predictability-horizon figure (unlike, e.g., the atmosphere's
  ~2-week predictability horizon precedent named in the chaos_sensitivity column
  definition). Recommend entering as a qualitative/rubric-supporting citation with
  this caveat explicit, not as a quantitative Lyapunov value.
- No observationally-derived Lyapunov exponent or predictability-horizon figure
  for the real AMOC/ocean circulation was found this sweep. Recommend
  `chaos_sensitivity` quantitative sub-value: unknown at the observational level;
  qualitative rubric judgment can still proceed citing Mehling et al. as
  theoretical support for "high sensitivity near tipping thresholds specifically."

### instance_population
- Per task brief reasoning, confirmed via cross-check against planetary-climate's
  own comparative set (Venus/Mars/Titan, lines ~18-31 and ~138 of
  planetary-climate.yaml): those three comparative exemplars have no liquid-water
  ocean (Venus: no surface ocean, ~737 K; Mars: no standing liquid ocean, thin CO2
  atmosphere; Titan: methane/ethane hydrocarbon lakes, not a salinity-driven
  water ocean). AMOC-style thermohaline overturning specifically requires a liquid
  water ocean with salinity-driven density gradients. **Recommend
  instance_population: n=1 (Earth-unique within the known comparative set)**,
  flagged explicitly per task instructions rather than assumed silently — this is
  a within-planetary-climate singleton, not a class admitting a population
  distribution the way tropical cyclones (~85 storms/yr) do. Titan's methane cycle
  is the closest analog in the existing catalog's comparative set and is NOT
  AMOC-equivalent (no thermohaline salinity mechanism; not primary/snippet-verified
  as an overturning analog this sweep — would need dedicated Titan-hydrology
  literature to even evaluate).

### numerosity / component_ontology
- No dedicated numerosity source (e.g., water-parcel count, eddy count) was found
  or expected to exist in a directly citable form — recommend treating this the
  same way the-hurricane/climate entries treat continuum systems: numerosity as
  "not meaningfully countable, continuum system" or a very rough parcel-count
  order-of-magnitude if a defensible discretization convention is adopted at
  drafting time. Flagged as a drafting-stage decision, not resolved this sweep.

---

## Canonical review sources for the entry source list (3-5)

1. **Buckley, M.W. & Marshall, J. (2016).** Observations, inferences, and
   mechanisms of the Atlantic Meridional Overturning Circulation: A review.
   *Reviews of Geophysics* 54(1). DOI: 10.1002/2015RG000493. **Snippet-verified**
   (title/venue/scope confirmed via WebSearch; not primary-read this sweep). The
   standard comprehensive AMOC review — recommend as the entry's anchor review
   citation; high-priority follow-up for a full primary read.
2. **Johns, W.E. et al. (2023).** Towards two decades of Atlantic Ocean mass and
   heat transports at 26.5°N. *Phil. Trans. R. Soc. A* 381(2262), 20220188. DOI:
   10.1098/rsta.2022.0188. **Snippet-verified** (direct quotes extracted via
   WebFetch this sweep) — best available primary observational-summary source for
   the headline Sv/PW figures above.
3. **Moat, B.I. et al. (2020).** Pending recovery in the strength of the
   meridional overturning circulation at 26°N. *Ocean Science* 16, 863-874.
   **Snippet-verified** (WebSearch only this sweep).
4. **Armstrong McKay, D.I. et al. (2022).** Exceeding 1.5°C global warming could
   trigger multiple climate tipping points. *Science* 377(6611), eabn7950.
   Primary-read (inherited from Phase 1, per planetary-climate.yaml provenance).
5. **van Westen, R.M. & Dijkstra, H.A. (2023).** Asymmetry of AMOC Hysteresis in a
   State-of-the-Art Global Climate Model. *GRL* 50(19), e2023GL106088.
   arXiv:2308.14098. Snippet-verified (inherited).

---

## Standing flags for verifiers / drafting

- Two AMOC trend figures in circulation (-0.6 Sv/decade for 2004-2020 vs.
  -1.0 Sv/decade for 2004-2023) were both recovered only via WebSearch synthesis,
  not direct-fetched quotes — a drafting-stage or verification-stage direct fetch
  of Moat et al. (2020) and the more recent extension (likely McCarthy et al. 2025,
  GRL, "Signal and Noise in the AMOC at 26°N" — title only, not yet pinned to
  specific numbers) is needed before either trend number is entered as
  measured-confidence.
- The 32.9/57.3/75.6 Sv Gulf Stream along-stream figures and the "4% slowdown over
  40 years" Gulf Stream trend claim are WebSearch-synthesis level, not
  direct-fetched — same follow-up need.
- energy_rate_density: deliberately left as a derivation NOT attempted (see above)
  — do not let a later drafting pass force a Phi_m number from the 1.2 PW figure
  without a defensible mass denominator.
- fractal_dimension_spatial and extreme_event_statistics: actively searched and
  came up empty — record as `unknown`, not as "not yet searched."
