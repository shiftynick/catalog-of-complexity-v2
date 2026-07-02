# River Networks — Quantitative Source Sweep (Phase 4)

Class entry: `river-networks`. Category: geophysical. Primary exemplar: Mississippi River basin.
Compiled per `schema/panel-spec.yaml` filling rules (no-guessing, power-law-rigor, measurand-required,
level-required, atomicity-convention). Evidence status marked per value. Primary-read vs snippet-verified
noted per citation per rule (distinguish primary-read vs snippet-verified in every citation annotation).

---

## A. IDENTITY & SCALE

### spatial_extent
- **Mississippi basin drainage area: ~3.2 x 10^6 km^2** (1,245,000 mi^2, with Atchafalaya sub-basin
  included; ~2,980,000 km^2 for Mississippi mainstem basin alone, i.e. without Atchafalaya).
  Level: exemplar (Mississippi basin). Evidence status: measured.
  Source: USGS ("The Fragile Fringe — The Mississippi River," usgs.gov educational resource) — snippet-verified
  (WebFetch summary of Wikipedia's "Mississippi River" article, which itself cites USGS Water-Year Summary
  reports; USGS figure of ~3,200,000 km^2 independently corroborated in a second USGS publication hit,
  "Watershed Boundary Dataset for Mississippi," pubs.usgs.gov/sim/3020). Order of magnitude: 10^6 km^2 =
  ~10^12 m^2 linear extent characteristic length ~10^6-10^6.5 m (basin spans ~2,500-3,000 km E-W/N-S).
  **[unverified]** exact USGS primary-document page/table not directly primary-read in this sweep — both
  figures (2.98M vs 3.22M km^2) are snippet-corroborated from secondary aggregation (Wikipedia), not
  read directly off a USGS PDF table.
- Mississippi mainstem channel length: 3,782 km (2,340 mi) from Lake Itasca; 5,971 km (3,710 mi) if
  measured from the Missouri River's most distant source (Brower's Spring) — the conventional "4th
  longest river system in the world" figure. Snippet-verified (Wikipedia, citing USGS/NPS).
  Evidence status: measured.

### characteristic_timescales (measurands named)
- **Flood-wave/hydrograph travel time (basin-scale routing signal):** median ~6 days globally to reach
  basin terminus (empirical relations + lagged cross-correlation routing models); Mississippi basin peak
  flow EVENT DURATION specifically ranges ~2 days (upstream, small tributaries) to ~30 days (downstream,
  lower Mississippi) — "acute spatial variability." Level: exemplar. Evidence status: measured.
  Source: Cerbelaud et al. (2024), "Peak Flow Event Durations in the Mississippi River Basin and
  Implications for Temporal Sampling of Rivers," *Geophysical Research Letters* — snippet-verified
  (WebSearch summary of the AGU abstract page, not full-text read).
- **Delta lobe-switching / avulsion cycle (dominant morphodynamic timescale):** ~1,000-1,500 years per
  cycle (natural, pre-engineering). Level: exemplar (Mississippi delta). Evidence status: measured.
  Source: Mississippi River Delta geomorphology literature, snippet-verified via Wikipedia
  "Mississippi River Delta" page (secondary aggregation of primary delta-lobe-chronology literature,
  e.g. Frazier 1967 delta-lobe framework, Kolb & Van Lopik 1958) — **[unverified]** primary Frazier/Kolb
  citation not directly read in this sweep, flagged for follow-up.
- **Delta/deltaic plain formation (system "lifetime" at current configuration):** modern delta built over
  ~4,500 years (surface deposition); Holocene delta plain overall ~7,000 years (since post-glacial sea-level
  stabilization). Level: exemplar. Evidence status: measured, snippet-verified (Wikipedia "Mississippi
  River Delta," secondary aggregation).
- **Fastest constituent process — individual flood-pulse rise/fall at a single gauge:** days (see peak
  flow event duration above, 2-30 days depending on location); no faster constituent process (e.g.
  storm-runoff concentration time at headwater scale) was pinned to a Mississippi-specific citable number
  in this sweep — recorded as **unknown** for the sub-day/headwater-concentration-time entry specifically,
  rather than guessed.

### numerosity / component counts
- **Strahler stream order of Mississippi mainstem at mouth: 10** (one of only ~3 tenth-order-or-higher
  independent rivers reaching the sea globally, alongside the Amazon [order 12] and Niger). Level:
  exemplar. Evidence status: measured. Source: Wikipedia "Strahler number," citing Strahler (1952,
  1957) — snippet-verified (WebFetch summary), not primary-read of Strahler's original paper.
- **Total stream-segment count: unknown (not found as a Mississippi-specific citable figure in this
  sweep).** No USGS or academic source located gives a direct enumerated total. A DERIVED order-of-magnitude
  estimate is possible from Horton's bifurcation law: with bifurcation ratio R_B ~ 4 (see Horton ratios
  below) and stream order 10, total first-order (headwater) stream count ~ R_B^9 ~ 4^9 ~ 2.6 x 10^5,
  and total stream segments (all orders) via geometric series ~ R_B^9 x (R_B/(R_B-1)) ~ 3.5 x 10^5,
  i.e. **order of magnitude 10^5-10^6 total stream segments**. Evidence_status: **derived** (computed by
  this project from Horton's law + observed Strahler order; NOT a published enumerated count — flag
  explicitly as our extrapolation, per method note on energy_rate_density-style derivations).
  Atomicity convention note: for this class, the atomic parts are individual stream LINKS/channel
  segments between confluences (the level at which Horton's laws and Strahler ordering operate), not
  water parcels or sediment grains.
- **Component ontology (structured, informal note for this sweep, not the full column):** one dominant
  part type — channel links/segments, interchangeable within order class, ordered 1-10 (Strahler);
  no itself-complex sub-parts identified as a distinct part type in this sweep.

### instance_population
- **310 international (transboundary) river basins**, per the 2018 update to the International River
  Basin Register (covering 47.1% of Earth's land surface excluding Antarctica); superseding the earlier
  263-basin (2002) and 214-basin (1978 UN) counts. Level: class-general (global river-basin population,
  not Mississippi-specific — this is the count relevant to instance_population's "how many instances of
  the class exist" definition; the class "river networks" includes national/non-transboundary basins too,
  so 310 is a LOWER BOUND / transboundary-only subset, not a total global count of all river basins).
  Evidence status: measured. Source: Oregon State University "International River Basin Register" /
  transboundarywaters.ceoas.oregonstate.edu, and McCracken & Wolf (2019), "Updating the Register of
  International River Basins of the World," presented at World Water Week — snippet-verified (WebSearch
  summaries of both the OSU register page and the McCracken/Wolf PDF), not primary-read of the full
  register document.
- **Total global count of ALL river basins (national + international) of any size: unknown** — no
  citable global enumeration found in this sweep (basins are typically counted only above some area
  threshold, and thresholds vary by source; "major river basins of the world" maps, e.g. GRID-Arendal,
  are cartographic/illustrative rather than an authoritative enumerated count). Recorded as unknown rather
  than guessed.

### energy_rate_density (Phi_m)
- **No published system-specific Phi_m value exists for the Mississippi basin or river networks generally**
  in Chaisson's energy-rate-density corpus. Phase 1's quantitative-backbone report (primary-read of
  Chaisson 2011) explicitly confirms: "Mississippi (not found)... Directly computed, system-specific
  Phi_m values exist for only 1 of our 10 pilots (the Sun)." Source: `research/phase1/quantitative-backbone.md`
  lines 75, 283 (primary-read of Chaisson, E.J. (2011), "Energy Rate Density as a Complexity Metric and
  Evolutionary Driver," *Complexity* 16(3), 27-40, DOI 10.1002/cplx.20323).
- **Derivation feasibility (not attempted/completed in this sweep — flagged for Phase 5 computation):**
  A DERIVED Phi_m would require (a) power input in W — candidate: total gravitational potential energy
  dissipation rate of the basin's water flux, computable in principle from mean discharge (~1.7-2.1 x 10^4
  m^3/s per below) x water density x g x mean elevation drop, which is a standard geomorphic
  stream-power calculation but was NOT computed in this sweep (would be evidence_status: derived, and
  should be flagged explicitly as project-computed per method note in the schema); and (b) mass in kg —
  candidate: total water mass in the active channel network + floodplain storage, or alternatively the
  mass of the solid Earth material (denudation) being moved, neither of which has a ready citable figure.
  **Recorded as: Phi_m = unknown (no published value); derivation possible in principle from discharge +
  basin relief data but not completed here — do not guess a number.**

---

## B. STRUCTURE

### fractal_dimension_spatial
- **Canonical relation: D = log(R_B)/log(R_L)** (bifurcation ratio over length ratio), the standard
  Horton-law-derived planform/network fractal dimension for river networks. With R_B ~ 4 and R_L ~ 2.3
  (see Horton ratios below), D ~ log(4)/log(2.3) ~ **1.9** (order-of-magnitude consistent with the
  Phase-1-reported "typically D ~ 1.9 for real drainage networks"). Measurand: planform channel-network
  branching geometry (Horton-ratio-derived D, not box-counting D of an individual channel's sinuosity).
  Level: class-general. Evidence status: derived (computed from the Horton-ratio formula using typical
  published ratio values; this is the standard textbook derivation, not a fabricated number, but is one
  step removed from a directly-measured single D). Source: Rodriguez-Iturbe, I. & Rinaldo, A. (1997),
  *Fractal River Basins: Chance and Self-Organization*, Cambridge University Press — snippet-verified
  (WebSearch summaries of the book's content and citing secondary sources; the book itself was NOT
  primary-read/full-text-accessed in this sweep — flagged **[unverified against primary text]**).
- **Independent corroborating estimate — topological fractal dimension D_T: 1.7 < D_T < 1.8** for
  natural river networks generally (distinct measurand: topological/Tokunaga-based D, not the
  Horton-ratio planform D above — the two are related but not identical estimators, per the panel-spec's
  own caution that "fractal dimension is not one measurement protocol but a family"). Source: Tokunaga/
  Peckham self-similar-tree literature (e.g. Mantilla et al. 2010, *JGR Earth Surface*, "Testing
  statistical self-similarity in the topology of river networks"; Peckham 1995, *Water Resources
  Research*) — snippet-verified (WebSearch summary), not primary-read.
- **Regional sub-basin figure (flagged as unverified in Phase 1, reused here with same flag):** fractal
  dimension of river lengths in Missouri sub-basin (part of the Mississippi basin) ranging 1.036-1.291,
  average 1.158 — this is a DIFFERENT measurand (individual channel-length/sinuosity fractal dimension,
  not network-branching D) and Phase 1 explicitly could not pin the primary citation beyond a search-engine
  summary. **[unverified — corroborated-but-not-primary-source-checked, per research/phase1/formal-measures.md
  line 160]. Do not treat as citable without a follow-up primary-source check.**

### Horton ratios (bifurcation, length) — structural inputs, not a panel column but load-bearing for
fractal_dimension_spatial and numerosity derivations above
- **Bifurcation ratio R_B: "mainly between 3.5 and 4.5"** across studied basins (order-independent per
  Horton's law), consistent with the class-brief's stated anchor of ~4; "most British rivers have a
  bifurcation ratio of between 3 and 5" (independent corroborating range from a different regional
  literature). Level: class-general. Evidence status: measured. Sources: (a) Moussa (2009), "Definition
  of new equivalent indices of Horton-Strahler ratios...," *Water Resources Research* — snippet-verified,
  citing "values... of the same order of those given in the literature by Rodriguez-Iturbe and Rinaldo
  (1997)"; (b) Wikipedia "Strahler number" citing a British-rivers empirical source — snippet-verified.
- **Length ratio R_L: "mainly between 2 and 3"** (consistent with class-brief anchor ~2.3). Level:
  class-general. Evidence status: measured. Same source as R_B above (Moussa 2009 / Rodriguez-Iturbe &
  Rinaldo 1997 secondary attribution) — snippet-verified, not primary-read of Rodriguez-Iturbe & Rinaldo
  1997 directly.
- **Area ratio R_A: "mainly between 3.5 and 7"** (bonus Horton ratio, not requested but co-reported in
  the same source). Evidence status: measured, snippet-verified.

### degree_distribution (network systems only)
- River networks are trees (each node/confluence has exactly one downstream link — no cycles), so the
  "degree distribution" in the Newman-2003 network-science sense is a **structurally trivial/degenerate
  case** (every non-leaf, non-root node has upstream-degree = number of confluent tributaries, typically
  2 per Strahler/Horton convention, plus 1 downstream link) — this is NOT the same object as the
  Horton bifurcation-ratio statistics above, which describe stream-COUNT scaling across ORDER, not a
  node-degree distribution in the graph-theoretic sense. **No citable power-law or other degree-distribution
  fit for river-network node degree was located in this sweep** (unsurprising, since the tree topology
  makes node in-degree essentially a narrow, non-heavy-tailed count, typically 2-3, rather than a
  scale-free hub-and-spoke structure like the Internet AS graph). Recorded as: **not applicable in the
  Newman-2003 sense / unknown for any published fit** — do not conflate with Horton's laws, which belong
  under fractal_dimension_spatial and the (non-panel) Horton-ratio inputs above.

---

## C. DYNAMICS

### extreme_event_statistics (tail exponent alpha + CSN-grade fit status, per power-law-rigor rule)
- **Flood discharge upper-tail scaling: Q ~ T^alpha with alpha ranging 0.27-0.90** across six USGS
  hydrologic stations (drainage areas 41-95,300 km^2, spanning very different climatic regions,
  74-110 water-years of record), where Q is peak discharge and T is recurrence interval — this is a
  documented power-law-form fit to partial-duration flood series, generally good for medium/large events.
  Level: instance (per-gauge-station), not yet a single class-level or Mississippi-specific alpha.
  **Evidence status: measured-untested** per filling_rules.power-law-rigor — the cited study (Malamud
  & Turcotte-style flood power-law literature) predates and was not benchmarked against CSN
  (2009)'s formal statistical-rigor test (MLE + Kolmogorov-Smirnov goodness-of-fit + likelihood-ratio
  comparison to alternatives); CSN's own 24-dataset corpus (per Clauset's companion data page,
  aaronclauset.github.io/powerlaws/data.htm) does **not include a river-discharge or flood dataset**, so
  no CSN-grade verdict exists either way for this system — default to measured-untested per the rule's
  explicit instruction. Source: "The applicability of power-law frequency statistics to floods,"
  *Journal of Hydrology* (ScienceDirect/ADS listing) — snippet-verified (WebSearch summary), not
  primary-read of the full paper; author/year not independently confirmed beyond the search snippet
  (likely Malamud & Turcotte 2006 based on journal/title match, but this attribution is **[unverified]**
  pending primary-source check).
- **More recent methodological literature (2023-2024) explicitly applies CSN-style MLE + KS-statistic
  rigor to streamflow heavy-tail testing** (Basso et al. or related, "Inferring heavy tails of flood
  distributions through hydrograph recession analysis," *Hydrology and Earth System Sciences* 27,
  4369-2023) — confirms confirmed-heavy-tailed cases exist for daily streamflow, ordinary peak flows, and
  monthly flow maxima at some (not all) US sites, using the Clauset-style estimator. **No single
  Mississippi-basin-specific alpha with a CSN-grade verdict was extracted in this sweep** — this is a
  methodology confirmation, not a pinned exemplar number; flagged for Phase 5 follow-up to extract a
  specific Mississippi gauge result if the full text is read.
- **Recorded panel value:** alpha range 0.27-0.90 (instance-level, six non-Mississippi-specific US gauges),
  evidence_status: measured-untested; Mississippi-specific alpha: unknown.

### temporal_correlation (Hurst exponent, measurand named)
- **River discharge Hurst exponent — Nile: H ~ 0.79 (R/S method) to 1.02 (DFA method)**, the founding
  case (Hurst himself analyzed multi-decade annual Nile levels; H > 0.5 indicates persistent long-range
  dependence). Level: exemplar (Nile, not Mississippi — used here as the class's canonical/founding
  case per the discipline's own convention, since Hurst's method originates from this exact system).
  Evidence status: measured. Source: Hurst, H.E. (1951, 1956a,b, 1957) foundational papers — snippet-verified
  secondary attribution (WebSearch summary of a comparative Hurst-exponent table), primary Hurst papers
  not directly read.
- **Danube discharge: H in range 0.67-0.85** (long-term persistence confirmed). Level: exemplar
  (different river, included as corroborating range for the class-general "river discharge shows strong
  persistent long-range correlation" claim). Evidence status: measured, snippet-verified. Source:
  "Changes in long-term properties of the Danube river level and flow induced by damming" (arXiv
  preprint) — snippet-verified, not primary-read.
- **Mississippi-specific Hurst exponent: unknown** — no Mississippi-basin-specific H value was located
  in this sweep; recorded as unknown rather than extrapolated from the Nile/Danube analogues. Measurand
  for all values above: annual (Nile) or daily/monthly (Danube) discharge time series via rescaled-range
  (R/S) and/or detrended fluctuation analysis (DFA).

### tipping_transitions — ANCHOR ALREADY ESTABLISHED, REUSED VERBATIM
- **Score: 2/4.** River/delta systems have documented avulsion dynamics (channel abruptly abandoning its
  course once a threshold gradient advantage is reached) — mechanistically understood regime-shift
  phenomenon in fluvial geomorphology. The Mississippi's own engineered Old River Control Structure
  exists specifically because the lower Mississippi was approaching a natural avulsion toward the
  Atchafalaya. Real, named, thresholded mechanism (score >=2), but no systematic multi-element inventory
  or quantified early-warning-signal literature comparable to the climate case (stops at 2).
  Evidence status: qualitative. Source: `schema/anchors/tipping_transitions.yaml` lines 111-127
  (primary-read of this project's own prior anchor file — the anchor itself cites no external DOI,
  sources: [] in the YAML, i.e. it is a project-authored synthesis rather than a single citable paper).
  **Quantitative supplement found this sweep:** delta lobe-switching interval ~1,000-1,500 years
  (see characteristic_timescales above) — this is the closest citable "threshold timescale" figure for
  the avulsion tipping element, though it characterizes cycle PERIOD, not a hard geomorphic threshold
  metric (e.g. a critical superelevation ratio) — no such threshold metric (e.g. Mohrig et al.-style
  superelevation-ratio criterion) was pinned to a specific citable number for the Mississippi in this
  sweep; recorded as unknown for that more specific sub-claim.

### cascade_susceptibility
- Per Phase 1's dynamics-criticality report (primary-read basis): river-basin flood cascades are
  identified as a system with "only qualitative/simulation evidence" available (no power-law exponent
  comparable to the power-grid blackout case, Dobson et al. 2007, 1.3-2.0, itself contested). Source:
  `research/phase1/dynamics-criticality.md` line 71 (primary-read of this project's own Phase 1 synthesis).
  **No quantitative cascade-size distribution or exponent for river-basin flood cascades was located in
  this sweep** — recorded as unknown/narrative-only, consistent with Phase 1's prior finding.

### chaos_sensitivity / predictability
- **Not resolved in this sweep with a citable Mississippi-specific figure.** A search hit ("Chaos and
  scaling in daily river flow," arXiv) suggests low-dimensional chaos claims exist in the hydrology
  literature for some river discharge series, but this sits in the same contested territory as the
  market-chaos debunking the panel-spec explicitly warns about (filling_rules.no-market-chaos analog) —
  **flagged, not adopted**: the deterministic-chaos-in-streamflow literature is itself disputed (many
  apparent low-dimensional-chaos signatures in geophysical time series were later shown to be artifacts
  of short/noisy records — this is a general methodological caveat, not a claim this sweep verified
  against the specific paper found). Recorded as: chaos_sensitivity quantitative figure = unknown;
  do not adopt an unverified deterministic-chaos claim per the spirit of the no-market-chaos rule.

---

## Mississippi-specific quantitative anchors (USGS-sourced, class-brief-flagged as citable)

- **Drainage area: ~3.2 x 10^6 km^2** (see spatial_extent above). Evidence status: measured,
  snippet-verified.
- **Mean discharge: reported range across sources/gauge locations —**
  - At the Delta (with Atchafalaya), 1980-2021 average: 21,300 m^3/s (673 km^3/yr).
  - At Vicksburg: 20,910 m^3/s average.
  - At Baton Rouge: 16,800 m^3/s average (range 4,000-41,000 m^3/s).
  - At St. Louis (upstream, smaller contributing area): 5,680 m^3/s average.
  - A separately-encountered figure: "19,920 m^3/s... discharges into the Gulf of Mexico" (a different
    search hit, same order of magnitude as the Delta figure above but not numerically identical —
    **discrepancy noted, not resolved**; likely reflects different averaging periods/methodologies).
  - The class brief's own stated anchor value (~1.7 x 10^4 m^3/s = 17,000 m^3/s) falls between the
    Baton Rouge (16,800) and Vicksburg (20,910) figures and is **consistent with, though not identical
    to, any single one of the located figures** — treat the brief's "~1.7e4 m^3/s" as itself a legitimate
    order-of-magnitude USGS-family figure (likely a specific-gauge or specific-period average not
    individually re-derived in this sweep), and the range 5,680-21,300 m^3/s (location-dependent) as the
    fuller citable picture for the panel entry.
  - All discharge figures: evidence status measured; snippet-verified (Wikipedia "Mississippi River,"
    which attributes figures to "USGS Water-Year Summary" reports per-gauging-station — the underlying
    USGS station reports were not individually primary-read in this sweep).

---

## Source list for entry (3-5 canonical reviews, per task instructions)

1. **Rodriguez-Iturbe, I. & Rinaldo, A. (1997).** *Fractal River Basins: Chance and Self-Organization.*
   Cambridge University Press. — THE canonical monograph-level review for this class (Horton ratios,
   Hack's law, OCN theory, network fractal dimension). Snippet-verified in this sweep (not primary-read
   full text); flagged for Phase 5 primary-source acquisition if a physical/institutional copy or
   full-text PDF becomes available — the book is widely cited but was not directly opened here.
2. **Rigon, R., Rodriguez-Iturbe, I., Maritan, A., Giacometti, A., Tarboton, D.G. & Rinaldo, A. (1996).**
   "On Hack's law." *Water Resources Research* 32(11), 3367-3374. DOI/paper number 96WR02397. —
   **PRIMARY-READ IN FULL in this sweep** (complete PDF text retrieved and read). Authoritative source
   for Hack's law exponent (h=0.6 original Hack 1957 value; Muller 1973 basin-size-dependent range
   0.6/0.5/0.47; area-exceedance exponent beta~0.43-0.46; the beta+h=1 relation) and its connection to
   basin elongation, self-affinity (Hurst exponent of basin boundaries), and fractal channel sinuosity.
3. **Hack, J.T. (1957).** "Studies of Longitudinal Stream Profiles in Virginia and Maryland." *U.S.
   Geological Survey Professional Paper* 294-B, 45-97. — Original source of Hack's law (L = 1.4A^0.6).
   Citation confirmed via primary-read of Rigon et al. (1996) reference list (i.e. this citation is
   itself primary-source-confirmed even though Hack's original 1957 paper was not independently opened).
4. **Clauset, A., Shalizi, C.R. & Newman, M.E.J. (2009).** "Power-law distributions in empirical data."
   *SIAM Review* 51(4), 661-703. — The statistical-rigor standard invoked by this catalog's
   power-law-rigor rule; relevant here because the CSN 24-dataset corpus notably does NOT include a
   river/flood dataset, which is itself informative for the extreme_event_statistics fit-status call.
   Already a project-wide source (`schema/panel-spec.yaml` sources.csn2009); not independently re-read
   in this sweep beyond confirming (via Clauset's companion data page) that no hydrology dataset is
   in the 24-dataset list — snippet-verified.
5. **Newman, M.E.J. (2003).** "The structure and function of complex networks." *SIAM Review* 45(2),
   167-256. — Reused from the project-wide source list (`schema/panel-spec.yaml` sources.newman2003) as
   the baseline reference explaining why river networks (as trees) fall outside the degree_distribution
   column's applicable scope in the way scale-free hub networks (Internet AS-level) do not.

---

## Cross-references to prior project work (reused, not re-derived)

- `schema/anchors/tipping_transitions.yaml` (lines 111-127): river-networks tipping_transitions anchor,
  score 2/4, reused verbatim above.
- `research/phase1/quantitative-backbone.md`: confirms no system-specific Chaisson Phi_m value exists for
  Mississippi (line 75), and no Newman-2003-table network row exists for Mississippi (line 241) since
  it is not represented as a graph in that classic dataset.
- `research/phase1/formal-measures.md` (line 160, 164, 190): source of the D~1.9 Horton-ratio-derived
  canonical fractal dimension claim and the flagged-unverified Missouri sub-basin fractal-dimension range
  (1.036-1.291); reused and re-flagged identically here (not re-verified this sweep).
- `research/phase1/dynamics-criticality.md` (line 71): source of the cascade_susceptibility
  "qualitative/simulation-only" verdict for river-basin flood cascades.
- `research/phase1/SYNTHESIS.md` (line 39): flags the Missouri fractal-dimension figure as needing
  primary-source re-verification — status unchanged in this sweep (still not independently verified).

## Outstanding unknowns (recorded as legal "unknown," not guessed)

- Mississippi-specific: total enumerated stream-segment count (only a Horton-derived estimate exists,
  evidence_status derived); Hurst exponent for Mississippi discharge specifically; chaos/predictability
  horizon figure; Phi_m (energy rate density) value or even the raw power/mass inputs needed to derive it;
  a specific avulsion-threshold metric (e.g. critical superelevation ratio) distinct from the ~1,000-1,500
  yr cycle period.
- Class-general: total global count of ALL river basins (only the 310-basin INTERNATIONAL/transboundary
  subset is citable); a CSN-grade-tested tail exponent specifically for flood discharge (only
  measured-untested pre-CSN and partially-CSN-style-but-not-Mississippi-specific figures exist);
  node-degree distribution in the Newman-2003 graph-theoretic sense (structurally near-trivial for a
  tree topology — recorded as not-applicable/unknown rather than fabricated).
