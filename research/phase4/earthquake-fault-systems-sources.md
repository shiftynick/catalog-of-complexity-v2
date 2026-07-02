# Quantitative Source Sweep — Class Entry "earthquake-fault-systems" (exemplar: San Andreas Fault)

**Sweep owner:** Phase 4 quantitative source sweep, per schema/panel-spec.yaml column list.
**Scope:** category = geophysical; primary exemplar = San Andreas Fault (SAF), with the well-studied
Southern San Andreas Fault (SSAF) sub-region carrying most of the class's citable quantitative literature.
**Reuse note:** The following are REUSED from research/phase1/quantitative-backbone.md and
research/phase1/dynamics-criticality.md (primary-read provenance stays there, pointer given below,
not re-derived): CSN 2009 rejection of raw CA-earthquake-amplitude power law (alpha=1.64(4), p=0.00);
Watkins et al. 2016 SOC two-claim framing; the b-value ~1.0/1.03±0.12 figure (Page & Felzer) — THIS SWEEP
UPGRADES that citation from snippet-only to **primary-read**, see Group C below.

---

## A. IDENTITY & SCALE

### spatial_extent
- **San Andreas Fault SYSTEM total length: >800 mi (~1,287 km)**, described as "more than 800 miles long."
  Source: USGS General Interest Publication, "The San Andreas Fault," https://pubs.usgs.gov/gip/earthq3/safaultgip.html.
  **Primary-read** (fetched directly, USGS government primary source; note this is a general-public GIP
  page, not a peer-reviewed paper, but it is the responsible federal agency's own figure).
- **Southern San Andreas Fault (SSAF) alone, sum of the 11 named sections in Page & Felzer 2015 Table 1**:
  36+63+59+50+37+98+35+43+56+56+69 = **602 km** (Parkfield, Cholame, Carrizo, Big Bend, Mojave North,
  Mojave South, San Bernardino North, San Bernardino South, Mill Creek, Garnet Hill, Coachella). Source:
  Page, M. & Felzer, K. (2015), Table 1 (full citation below). **Primary-read** (fetched full PDF text
  directly this session).
- **Seismogenic depth (locking depth): ~11–20 km range cited across studies; ~14–15 km commonly cited for
  the southern San Andreas specifically.** Source: secondary synthesis of geodetic locking-depth literature
  (e.g. work on "Locking depths estimated from geodesy and seismology along the San Andreas Fault System,"
  SCEC-affiliated). **Snippet-only** — the specific locking-depth paper (likely Smith-Konter, Thatcher,
  Bürgmann or similar) was not opened in full this session; treat as approximate range, not
  single-paper-verified.
- **USGS GIP page depth statement**: fault "extends to depths of at least 10 miles" (~16 km).
  **Primary-read**, same USGS GIP source as above.
- evidence_status: measured (length figures); measured-untested (depth range, snippet-synthesized across
  sources with some spread). level: exemplar (SAF/SSAF).

### characteristic_timescales (list, measurand named)
| Timescale | Value (order of magnitude) | Measurand | Source | Verification |
|---|---|---|---|---|
| Individual rupture duration (M~7.9 event) | ~1–2 min | coseismic slip duration, 1857 Fort Tejon-scale rupture | General seismological consensus for rupture duration scaling with fault length at ~2-3 km/s rupture velocity; [unverified — model knowledge, not independently re-sourced this session] | not verified this session — flag for follow-up |
| Large-earthquake recurrence interval, southern SAF | ~150 years (over past 1,400–1,500 yr) | interval between M≥7-class ruptures at a given paleoseismic site | USGS GIP, "The San Andreas Fault" | **primary-read** |
| Large-earthquake recurrence interval, Carrizo Plain segment | ~137 yr average, but with a documented 272-yr gap | interval between large (paleoseismic) ruptures at Carrizo Plain site | Akçiz et al. (2009), *J. Geophys. Res.* 114, doi:10.1029/2007JB005285, as cited/quoted in Page & Felzer (2015) | **primary-read** (quoted directly within the Page & Felzer 2015 full text) |
| Large-earthquake recurrence interval, Pallet Creek (Mojave segment) | ~132 yr average, gaps up to ~300 yr | interval between large ruptures at Pallet Creek site | Sieh, Stuiver & Brillinger (1989), *J. Geophys. Res.* 94, 603–623, as cited in Page & Felzer (2015) | **primary-read** (quoted within Page & Felzer 2015) |
| M≥7 earthquake rate, SSAF (Biasi & Weldon 2009a "stringing pearls" paleoseismic reconstruction) | 0.0157/yr, i.e. average repeat time **63.7 years** | SSAF-wide M≥7 nucleation/participation rate | Biasi, G.P. & Weldon, R.J. (2009a), *Seismol. Res. Lett.* 80, 381, as used quantitatively in Page & Felzer (2015) | **primary-read** (the 0.0157/yr and 63.7-yr figures are stated explicitly in Page & Felzer 2015 body text) |
| Paleoseismic record depth/duration at SSAF sites | ~1,350 years documented | length of the paleoseismic rupture-signature record on the SSAF | Page & Felzer (2015) | **primary-read** |
| Sediment-layer resolution / event-separation limit | ~20 yr (wet regions), ~50 yr (dry regions, e.g. Carrizo Plain) | minimum time needed between events to distinguish them stratigraphically | Page & Felzer (2015), citing G. Biasi personal communication 2009 | **primary-read** |

level: exemplar (SAF/SSAF). Fastest constituent process (individual rupture, ~minutes) is **not verified**
this session and should not be cited without follow-up; the recurrence-interval figures ARE
primary-verified via full-text read of Page & Felzer (2015).

### numerosity / component_ontology
- **SSAF subdivided into 11 named fault sections** in the UCERF3-consistent framework used by Page & Felzer
  (2015), Table 1: Parkfield, Cholame, Carrizo, Big Bend, Mojave North, Mojave South, San Bernardino North,
  San Bernardino South, Mill Creek, Garnet Hill, Coachella (lengths 35–98 km each). **Primary-read**
  directly from the paper's Table 1.
- **UCERF3 statewide fault model: >350 fault sections total across California** (compared to 16 in the 1988
  WGCEP model and ~200 in the 2007 model), subdivided further into **2,606 or 2,665 subsections**
  depending on fault-model version (FM3.1 vs FM3.2). Source: USGS/SCEC UCERF3 summary materials
  (pubs.usgs.gov/fs/2015/3009). **Snippet-only** — the USGS fact-sheet PDF was located via search but not
  independently fetched/opened this session; figures are consistent across multiple independent
  UCERF3-summary sources (SCEC, Wikipedia citing USGS), moderate-to-high confidence but flagged for
  primary re-verification.
- **Atomic-parts framing per atomicity-convention**: the natural "atomic part" for a fault system's
  characteristic dynamics is the **fault segment/patch** (a spatially discrete portion of the fault
  surface capable of independent slip nucleation), NOT individual earthquakes (which are events/dynamics,
  not structural parts) and not mineral grains (below the characteristic-dynamics scale). This sweep
  recommends component_ontology record fault segments (count_oom ~10² for SSAF alone per UCERF3
  subsectioning; ~10³ statewide) as the atomic part type, interchangeable: no (segments have
  distinct slip rates/behaviors per Page & Felzer Table 1).
- evidence_status: measured (11-section SSAF count, primary-read); measured-untested (350+/2606+ statewide
  UCERF3 counts, snippet-only). level: exemplar (SSAF 11-section count) / class (statewide UCERF3 count).

### instance_population
- **This column is the sharpest scoping question for this class entry.** If "instances of the class" means
  discrete EARTHQUAKES (the class's characteristic *events*, not the class itself), then:
  - California statewide seismicity: **~500–1,500 earthquakes/year overall (all magnitudes recorded)**;
    **50–200 felt (M≥3.0)/year**; **5–10 potentially damaging (M≥5.0)/year**. Source: USGS historical
    catalog statistics, widely summarized. **Snippet-only** — not independently opened as a single primary
    USGS catalog-statistics page this session; figures are broadly consistent with the Hutton et al. (2010)
    and UCERF3/Felzer (2013) catalog descriptions referenced inside Page & Felzer (2015), which describe
    the modern instrumental catalog (1984–2011, M≥2.5 within 20 km of SSAF) without giving a single
    aggregate annual count in the text extracted this session.
  - Global: **~20,000+ earthquakes/year detected worldwide** (USGS, "about 55 per day"); **~1 M≥8.0 event
    per year on average worldwide** (USGS). **Snippet-only**, standard USGS public figures, not
    independently primary-read this session.
- If "instances of the class" instead means discrete FAULT SYSTEMS (San Andreas as one instance of the
  class "earthquake fault systems," alongside North Anatolian, Wellington NZ, Dead Sea graben, Chinese
  faults, New Madrid, etc. — all explicitly named as comparison faults inside Page & Felzer 2015's "Evidence
  of Rate Changes around the World" section), then: **standing population of major continental transform/
  strike-slip fault systems is order 10¹–10² globally (no single citable inventory count located this
  session)** — **NOT RECOVERED** as a clean citable number; flag as unknown rather than guess a figure.
- evidence_status: measured-untested (event-rate figures, snippet-only); unknown (standing count of
  fault-system instances worldwide — no inventory paper located). level: class.

### energy_rate_density (Phi_m) — DERIVED, inputs shown explicitly
No published Phi_m value for the San Andreas Fault (or fault systems generically) was located in Chaisson's
own tables (per Phase 1 quantitative-backbone.md, which surveyed Chaisson 2011 exhaustively and did NOT
report a geophysical-fault-system entry). **This sweep computes an order-of-magnitude DERIVATION** from
published inputs; evidence_status: derived, flagged as ours per panel-spec method note.

**Power input (W) — via seismic moment accumulation rate and apparent stress:**
- Seismic moment accumulation rate on individual SAF segments: **1.5–1.8×10¹³ N·m/yr per km of fault**
  along the high-slip-rate Mojave and Carrizo segments (low as ~0.2×10¹³ N·m/yr/km on San Jacinto
  segments), from geodesy+seismicity joint inversion. Source: SCEC-affiliated study, "Locking depths
  estimated from geodesy and seismology along the San Andreas Fault System: Implications for seismic
  moment release" (ResearchGate listing; central.scec.org/publication/1471). **Snippet-only** — full paper
  (likely Smith-Konter & Sandwell or similar) not opened this session; author/year not independently
  confirmed, flag for follow-up before locking in citation.
- This sweep's own back-of-envelope moment-rate calculation (evidence_status: derived, ours):
  M0_rate = mu * A * slip_rate, using rigidity mu = 3×10^10 Pa, fault-plane area A = L x depth =
  1.287×10^6 m x 1.5×10^4 m ≈ 1.93×10^10 m^2 (whole SAF system length x 15 km seismogenic depth), and a
  mid-range geodetic slip rate of 30 mm/yr (see spatial_extent/slip-rate note below) gives
  **M0_rate ≈ 1.7×10^19 N·m/yr**.
- Converting moment rate to radiated-energy rate via apparent stress (sigma_a/mu)*M0, using a typical
  apparent stress sigma_a ~ 1–3 MPa [Choy & Boatwright-type apparent-stress literature, unverified this
  session — model-knowledge range, NOT independently sourced] gives **radiated seismic power on the order
  of 3x10^7 to 6x10^7 W** for the whole SAF system (derived, ours; sensitive to the sigma_a assumption by
  roughly a factor of 3).
- Cross-check using Kanamori's older empirical ratio Es ~ M0/2×10^4 gives **~2.8×10^7 W**, consistent order
  of magnitude with the apparent-stress calculation above.
- **evidence_status: derived (ours). This power estimate should be treated as order-of-magnitude
  (10^7–10^8 W) pending a primary-read of an actual published SAF-system seismic-energy-budget paper —
  none was found and independently opened this session.**

**Mass input (kg) — seismogenic fault-zone volume:**
- Using SAF system length 1,287 km, seismogenic depth 15 km, and an assumed characteristic fault-zone
  (damage-zone) width of ~200 m [order-of-magnitude estimate, not sourced to a specific fault-zone-width
  paper this session — unverified], and standard crustal rock density 2,700 kg/m^3:
  **Volume ≈ 3.86×10^12 m^3; Mass ≈ 1.0×10^16 kg.**
- evidence_status: derived (ours), with an explicitly flagged unverified input (fault-zone width).

**Resulting Phi_m:**
- **Phi_m ≈ 5×10^-5 erg s^-1 g^-1** (apparent-stress method) to **~3×10^-5 erg s^-1 g^-1** (Kanamori-ratio
  method) — i.e. **order 10^-5 to 10^-4 erg s^-1 g^-1**.
- Context: this is **many orders of magnitude below** Chaisson's published benchmarks for the Sun (~2),
  Earth's geosphere (~75), or any biological/technological system (10^4–10^6+), consistent with tectonic
  fault systems being an extremely slow, low-power-density energy-release process compared to stellar
  fusion or biological metabolism. This comparison itself is **derived (ours)**, not a published claim.
- **evidence_status: derived. level: exemplar (SAF system).** Every input above is individually flagged;
  none of the numeric ingredients were fabricated, but the width-of-damage-zone input in particular is a
  plausibility-level estimate, not sourced — the whole Phi_m figure should be treated as a rough
  order-of-magnitude placeholder pending a dedicated primary-source energy-budget study.

---

## B. STRUCTURE

### interaction_topology / interaction_ontology
- Not the focus of this sweep (rubric/structured column, out of quantitative scope), but noted for
  context: fault systems are best described as **field/continuum or network-mediated** (elastic stress
  transfer through the crust) — Page & Felzer (2015) explicitly frame the SSAF's interaction with other
  faults as "faults interact as a complex network" (direct quote, primary-read, Discussion section) when
  arguing against the characteristic-earthquake model. This quote is a useful class-general citation for
  interaction_topology / alphabet_closure = closed (elastic stress transfer is described in the panel-spec
  note itself as the fault system's entire alphabet).

### fractal_dimension_spatial
- **Classic figure**: Aviles, C.A., Scholz, C.H. & Boatwright, J. (1987), "Fractal Analysis Applied to
  Characteristic Segments of the San Andreas Fault," *Journal of Geophysical Research* 92(B1), 331–344,
  DOI: 10.1029/JB092iB01p00331. Method: measures increase in total fault-trace length as a function of
  decreasing measurement "ruler" size (divider/box-counting method), over a length band of **0.5–1,000
  km**, applied to six segments of distinctive seismic behavior (plus three alternative branches south of
  San Bernardino). **Snippet-verified only in this session** — direct fetch of the AGU publisher page
  returned HTTP 403 (paywall), and a ResearchGate mirror also returned 403. The specific per-segment D
  values (commonly cited elsewhere in the literature as ~D=1.0-1.3, individual segment values not
  independently confirmed to two decimal places this session) were **NOT independently re-extracted from
  the primary paper this session** — the panel-spec's own note citing "D~1.1-1.4 by segment" should
  continue to carry its existing snippet-verified status; this sweep did not upgrade it to primary-read
  despite attempting to do so (two fetch attempts both blocked).
- **NEW TENSION TO RECORD** (found this sweep, not previously known): Lomax, A. & Henry, P. (2023),
  "Major California faults are smooth across multiple scales at seismogenic depth," *Seismica* 2(1),
  article 324, DOI: 10.26443/seismica.v2i1.324. **Primary-read** (full abstract fetched directly).
  Using an enhanced relocation method (NLL-SSST-coherence) applied to relocated seismicity along major
  California strike-slip faults, the authors find that "relocated seismicity at seismogenic depth along
  major fault segments and around large-earthquake ruptures often defines **smooth, planar or arcuate,
  near-vertical surfaces** across the sub-km to 10's-of-km scales" and conclude that "surface traces of
  strike-slip fault zones reflect complex, shallow deformation and **not directly** simpler, main slip
  surfaces at depth." **This directly qualifies/tensions with the classic Aviles et al. (1987) fractal
  (rough, self-similar) characterization of the SAME fault system**: Aviles et al. measured the SURFACE
  TRACE (mapped at the surface, 0.5-1000 km band) and found fractal roughness D~1.1-1.4; Lomax & Henry
  (2023) measured SEISMOGENIC-DEPTH geometry via relocated hypocenters and found smoothness/planarity at
  depth. **Record both, per filling_rules: these measure different things (surface trace geometry vs.
  depth-seismicity-defined fault-plane geometry) and should not be silently merged into one
  fractal-dimension verdict** — the class entry should note that "San Andreas fault trace is fractal at
  the surface (D~1.1-1.4, Aviles et al. 1987) but appears smooth/planar at seismogenic depth (Lomax &
  Henry 2023)," flagging this as an open measurand-dependent tension analogous to the G-R/CSN tension.
- evidence_status: measured-untested (Aviles et al. 1987, D value not independently re-verified this
  session, existing snippet-verified status maintained); measured (Lomax & Henry 2023 primary-read for the
  qualitative smoothness claim; they do not report a single new numerical D to replace Aviles's). level:
  exemplar (SAF).

### degree_distribution
- **Not applicable / N/A.** Fault systems are not naturally represented as a discrete node-edge network in
  the standard complex-networks literature (Newman 2003's survey, cross-checked in Phase 1
  quantitative-backbone.md §6, contains no geophysical/fault-system row). Some authors (Page & Felzer 2015,
  quoted above) use "network" metaphorically for fault-interaction/multi-fault-rupture behavior, but no
  citable degree-distribution exponent exists for this system. Record as N/A, not unknown, per the
  column's "network systems only" scope.

---

## C. DYNAMICS

### extreme_event_statistics — the G-R vs. CSN tension (TOP PRIORITY ITEM, addressed)

**(a) Gutenberg-Richter b-value — NOW PRIMARY-READ (upgraded from Phase 1's snippet-only status):**

Full citation: **Page, M. & Felzer, K. (2015), "Southern San Andreas Fault Seismicity is Consistent with
the Gutenberg-Richter Magnitude-Frequency Distribution," *Bulletin of the Seismological Society of
America* 105(4), pp. [Early Edition, unpaginated at fetch], DOI: 10.1785/0120140340.** Published August
2015; manuscript received 20 November 2014; published online 16 June 2015. **PRIMARY-READ** — full PDF
text fetched and read directly this session (http://www.its.caltech.edu/~pagem/PageFelzer2015.pdf).

Exact quote (verbatim from the paper, Discussion of b-value estimation): *"When we examine the
post-ML-recalibration seismicity from the UCERF3 catalog within 20 km of the SSAF, we estimate a b-value
of 1.03 ± 0.12 (for M ≥ 2.5) using the maximum-likelihood method (Aki, 1965; Shi and Bolt, 1982). This is
consistent with both the statewide b-value of 1.0 (as seen by Hutton et al., 2010, and used by UCERF3,
Field et al., 2014) and 0.95 (found by Tormann et al., 2010)."*

Supporting figures, all primary-read from the same paper:
- **Hutton et al. (2010)**: b = 1.01 ± 0.04 for M≥4.2, 1932–1980; b = 0.992 ± 0.003 for M≥1.8, 1981–2008
  (well-instrumented central Southern California Seismic Network region). Full citation: Hutton, K.L.,
  Woessner, J. & Hauksson, E. (2010), "Earthquake monitoring in southern California for seventy-seven
  years," *Bull. Seismol. Soc. Am.* 100, 423–446.
- **Tormann et al. (2010)**: b-value estimate changes from 1.16 to 0.95 across a local-magnitude
  recalibration by the network. Full citation: Tormann, T., Wiemer, S. & Hauksson, E. (2010), "Changes of
  reporting rates in the southern California earthquake catalog...," *Bull. Seismol. Soc. Am.* 100,
  1733–1742, DOI: 10.1785/0120090124.
- Statewide/UCERF3 baseline: b = 1.0, per Field et al. (2014), "Uniform California Earthquake Rupture
  Forecast, Version 3 (UCERF3): The Time-Independent Model," *Bull. Seismol. Soc. Am.* 104, 1122–1180,
  DOI: 10.1785/0120130164.
- Method citations for MLE b-value estimation: Aki, K. (1965), *Bull. Earthq. Res. Inst.* 43, 237–239;
  Shi, Y. & Bolt, B.A. (1982), *Bull. Seismol. Soc. Am.* 72, 1677–1687.

evidence_status: measured. level: exemplar (SSAF, within 20 km capture zone, M≥2.5, post-recalibration
UCERF3 catalog). **This b-value is a directly measured statistical fit reported with an explicit method
and uncertainty (±0.12) from a peer-reviewed, primary-read source — the strongest-provenance figure in
this entire sweep.**

**(b) The CSN 2009 tension — restated, not resolved:**
Per Phase 1 (primary-read there): Clauset, Shalizi & Newman (2009), *SIAM Review* 51(4), 661, formally
**rejected** the raw California-earthquake-intensity (max-amplitude) dataset as a clean power law: fitted
exponent alpha=1.64(4), goodness-of-fit p=0.00 ("none — ruled out" in CSN's own verdict language). This is
a **different measurand** (event amplitude/intensity distribution tested via CSN's MLE+KS-test+bootstrap
protocol) from the G-R b-value (event MAGNITUDE distribution, log-linear frequency count, not
independently CSN-tested in Page & Felzer 2015 — the paper reports fit quality via visual consistency
across catalogs, not a KS-test/bootstrap p-value in the CSN sense).
**Recorded per filling_rules.power-law-rigor and soc-two-claims: G-R b~1.0-1.03 stands as a directly
measured, well-replicated magnitude-frequency slope (multiple independent studies converge:
0.95-1.16 range); the CSN-style amplitude-based power-law test failed for a related but distinct dataset.
Do not resolve this tension silently — both are true simultaneously about different measurands of the same
underlying system.** Additionally: Page & Felzer (2015)'s own central finding is that G-R (unbroken
power-law) magnitude scaling holds even where the older "characteristic earthquake" hypothesis (Wesnousky
et al. 1983; Schwartz & Coppersmith 1984) predicted a break from G-R at high magnitudes — this is a THIRD
distinct claim (characteristic-vs-GR debate) that this sweep's primary source explicitly adjudicates in
favor of unbroken G-R, at least for the SSAF magnitude-frequency distribution.

evidence_status: measured-disputed is NOT the right label for the b-value itself (it is well-replicated
and uncontested as a magnitude-frequency slope); the CSN amplitude-power-law rejection remains
measured (rejected) for its own distinct dataset. Both facts coexist per soc-two-claims-style handling.

### temporal_correlation / clustering
- Directly relevant, primary-read material from Page & Felzer (2015): seismicity rate variability over
  time due to aftershock clustering (ETAS modeling, Ogata 1988) — e.g., **median 30-day seismicity rate is
  only 52% of the long-term mean**, 1-year median is 59% of mean, 10-year median is 72% of mean, and even
  100-year windows show a median at 93% of the mean with "anomalously slow, non-Gaussian convergence" due
  to correlated neighboring time windows (citing Naylor, Main & Touati 2009, *J. Geophys. Res.* 114,
  doi:10.1029/2008JB005870). **Primary-read**, full citation in References list above.
  measurand: SSAF seismicity rate (event count per unit time), ETAS-simulated. evidence_status: measured
  (simulation-based, not raw temporal-correlation exponent like Hurst H — no citable Hurst exponent for
  fault seismicity was located this session; flag as NOT RECOVERED for a formal Hurst-exponent figure).
- Global-scale rate clustering evidence collected in the same paper (all primary-read, all with their own
  citations already listed in the References section of Page & Felzer 2015): North Anatolian Fault
  clustering (Ambraseys 1970; Hartleb et al. 2006); Dead Sea graben clustering, 0–8 events per 5,000-yr
  window (Marco et al. 1996); Wellington Fault NZ slip-rate variation >10x over time (Ninis et al. 2013);
  Bear Valley creeping-section swarm of 77 M≥4 events in 1970-1975 alone (Vidale & Shearer 2006 context).
- evidence_status: measured (qualitative/descriptive clustering evidence, primary-read); unknown (no
  single quantitative Hurst exponent or formal long-range-correlation statistic for fault seismicity was
  found this session).

### criticality / SOC (two-claims structure, reused from Phase 1)
- **(a) Event-statistics evidence: SOLID** — G-R power-law magnitude-frequency scaling per above.
- **(b) Mechanism status: CONTESTED.** Reused directly from Phase 1's dynamics-criticality.md, itself
  anchored on: Watkins, N.W., Pruessner, G., Chapman, S.C., Crosby, N.B. & Jensen, H.J. (2016), "25 Years
  of Self-Organized Criticality: Concepts and Controversies," *Space Science Reviews* 198, 3–44,
  DOI: 10.1007/s11214-015-0155-x (also arXiv:1504.04991). Phase 1 verdict, reused verbatim: "Earthquakes
  are the textbook example of SOC" is folklore-adjacent — the power-law statistics are solid, the SOC
  interpretation is not settled science. Page & Felzer (2015) itself is agnostic on SOC as a mechanism
  label but its rate-change/ETAS-clustering explanation (aftershock-triggering-driven fluctuations,
  Marone 1998 fault-strength-healing mechanism, Parsons 2007 "fractal fault complexity" stress-focusing
  model) is broadly compatible with, but does not explicitly invoke, SOC framing. Parsons (2007), *Nat.
  Geosci.* 1, 59-63, is cited within Page & Felzer (2015) as finding "the pattern of seismicity clusters
  and gaps along the entire San Andreas fault obeys a power-law relationship" reproducible by a model of
  "fractal fault complexity" — this is an additional SOC-adjacent citation, **primary-read only as quoted
  within Page & Felzer (2015)**, not independently fetched as its own primary source this session.
- evidence_status: measured (event statistics) / qualitative (mechanism, contested). level: class-general
  (mechanism debate is about fault systems generically, not just SAF).

### tipping_transitions / chaos_sensitivity — prediction impossibility (Geller et al. 1997)
- Full citation, **confirmed via search-engine synthesis, snippet-only, not independently fetched as full
  text this session**: Geller, R.J., Jackson, D.D., Kagan, Y.Y. & Mulargia, F. (1997), "Earthquakes Cannot
  Be Predicted," *Science* 275(5306), 1616–1617, DOI: 10.1126/science.275.5306.1616. Core argument
  (snippet-synthesized): citing chaos theory, any small earthquake has some nonzero chance of cascading
  into a large event, with the outcome depending on unmeasurably fine details of subsurface conditions —
  making short-term deterministic prediction inherently impossible; the authors also note prediction
  claims are rarely posed as objectively testable hypotheses. A companion/critical-review citation also
  located: Geller, R.J. (1997), "Earthquake prediction: a critical review," *Geophysical Journal
  International* 131(3), 425-450 — **snippet-only**, not opened.
- This is the chaos/predictability-horizon anchor for the class entry: unlike the atmosphere's ~2-week
  quantitative predictability horizon (Phase 1 reuse), earthquake fault systems have **no established
  deterministic predictability horizon at all** — the Geller et al. framing is that short-term prediction
  is not merely difficult but is argued to be fundamentally impossible given sensitive dependence on
  unresolvable subsurface state. This is qualitatively, not quantitatively, comparable to the atmosphere
  Lyapunov-exponent figure; **no Lyapunov exponent or quantitative chaos metric for fault-system dynamics
  was located this session** — flag as NOT RECOVERED for a numeric chaos_sensitivity figure; the column
  should record the rubric/qualitative side (chaos_sensitivity: high, per Geller et al. 1997) without a
  numeric companion.
- evidence_status: qualitative (no numeric predictability-horizon or Lyapunov exponent found).
  level: class-general.
- No formal "N tipping elements" inventory (Armstrong McKay 2022-style) exists for fault systems — this is
  expected and was not found; **record as N/A/unknown for the climate-style tipping-elements list format**,
  while noting the qualitative point that individual fault segments/asperities can be framed as
  quasi-tipping-elements (locked patches that release stress catastrophically), which is exactly the
  characteristic-earthquake-vs-GR debate Page & Felzer (2015) addresses — but this is narrative, not a
  citable "N elements" figure.

### cascade statistics
- Multi-fault/cascading rupture evidence, **primary-read from Page & Felzer (2015)**: citing Wesnousky
  (2008), *Bull. Seismol. Soc. Am.* 98, 1609-1632, of 28 surface-rupturing M≥6 earthquakes with documented
  details, **14 (50%) involved two or more separately named faults**; of the remaining 14, **10 (70%)
  clearly involved rupture of multiple geologically distinct fault segments**. Additionally, of the "Big
  Seven" (seven M>7.8 continental strike-slip earthquakes since 1900, per Haeussler et al. 2004, *Bull.
  Seismol. Soc. Am.* 94, S23-S52), **4 of 7 involved rupture on a fault other than the main strike-slip
  strand** (the Denali 2002 earthquake is given as the detailed example: nucleated on the previously
  unknown Susitna Glacier fault, ruptured ~200 km of the Denali fault, then continued ~100 km on the
  Totschunda fault). These are the clearest citable "cascade statistics" for this class entry.
- evidence_status: measured (documented case counts from a systematic compilation, Wesnousky 2008, quoted
  within a primary-read source). level: class-general (multi-fault rupture statistics span California and
  Alaska strike-slip systems, not SAF alone).

---

## D/E/F — Information, adaptation, emergence
Out of quantitative scope for this sweep (rubric-only columns per panel-spec); not addressed here except
to note information_processing and adaptive_capacity are expected to score at or near 0 for this class per
panel-spec's own worked-example framing (mere physical stress-transfer, no state-dependent information
response) — this is a rubric judgment call for the qualitative-frameworks pass, not this quantitative sweep.

---

## Canonical review/source list for the class entry (3-5 sources)

1. **Page, M. & Felzer, K. (2015)**, "Southern San Andreas Fault Seismicity is Consistent with the
   Gutenberg-Richter Magnitude-Frequency Distribution," *Bull. Seismol. Soc. Am.* 105(4), doi:
   10.1785/0120140340. **Primary-read in full this session.** The single best-anchored quantitative source
   for this entry — b-value, recurrence intervals, fault-segment structure, multi-fault rupture stats,
   ETAS clustering, and an explicit engagement with the characteristic-earthquake-vs-GR debate.
2. **Clauset, A., Shalizi, C.R. & Newman, M.E.J. (2009)**, "Power-law distributions in empirical data,"
   *SIAM Review* 51(4), 661. **Primary-read in Phase 1** (reused here) — source of the CSN power-law-rigor
   standard and the specific CA-earthquake-amplitude rejection (alpha=1.64(4), p=0.00).
   Also this project's methodological anchor for filling_rules.power-law-rigor generally.
3. **Watkins, N.W. et al. (2016)**, "25 Years of Self-Organized Criticality: Concepts and Controversies,"
   *Space Science Reviews* 198, 3. **Primary-read in Phase 1** (reused) — the SOC-mechanism-contested
   anchor.
4. **Geller, R.J., Jackson, D.D., Kagan, Y.Y. & Mulargia, F. (1997)**, "Earthquakes Cannot Be Predicted,"
   *Science* 275(5306), 1616. **Snippet-only this session** — the chaos/unpredictability anchor;
   recommend a follow-up primary-read pass before final lock-in.
5. **Aviles, C.A., Scholz, C.H. & Boatwright, J. (1987)**, "Fractal Analysis Applied to Characteristic
   Segments of the San Andreas Fault," *J. Geophys. Res.* 92(B1), 331. **Snippet-verified only** (fetch
   blocked by paywall twice this session) — the classic fractal-dimension anchor, now in explicit tension
   with item 6.
6. **Lomax, A. & Henry, P. (2023)**, "Major California faults are smooth across multiple scales at
   seismogenic depth," *Seismica* 2(1), article 324, doi: 10.26443/seismica.v2i1.324. **Primary-read
   (abstract) this session** — NEW find, qualifies the classic Aviles et al. fractal-roughness picture with
   a depth-vs-surface-trace distinction; recommend inclusion as a modern counterpoint/complement source.

---

## Summary of explicit gaps (NOT RECOVERED — do not fabricate)

- Numeric Lyapunov exponent or quantitative predictability-horizon figure for fault-system dynamics
  (Geller et al. 1997's argument is qualitative/theoretical, not a measured horizon in days like the
  atmosphere's ~2 weeks).
- Standing global population count of "fault system" instances (class-level instance_population by the
  fault-systems-as-instances reading) — no inventory paper located.
- A single authoritative fault-zone damage-zone width figure to replace this sweep's own 200 m estimate
  used in the energy_rate_density mass derivation — flagged explicitly as an unverified input.
- A directly published (not this-sweep-derived) Phi_m/energy-rate-density figure for any fault system —
  none exists in Chaisson's own published tables per Phase 1's exhaustive survey.
- Per-segment numeric D values from Aviles, Scholz & Boatwright (1987) — paper access blocked (403) on
  both AGU publisher and ResearchGate mirror this session; existing snippet-verified D~1.1-1.4 range from
  the panel-spec note was not independently re-confirmed to decimal precision.
- A formal Hurst exponent or other quantitative long-range temporal-correlation statistic for fault
  seismicity (only qualitative/simulation-based clustering evidence was found).
- A single-paper primary confirmation of the UCERF3 "350+ fault sections / 2,606-2,665 subsections"
  statewide figures (currently snippet-only via secondary UCERF3 summaries).
