# Quantitative Source Sweep — Planetary Climate

Class entry: `planetary-climate` (category: geophysical; exemplars: Earth [primary]; comparative: Venus, Mars, Titan)
Sweep date: 2026-07-01/02. Method: WebSearch (snippet-verified) + WebFetch (primary-read where content was retrievable — several PDFs exceeded the fetch tool's size limit and are marked accordingly). Reuses Phase 1 provenance per task instructions (Armstrong McKay 2022 tipping elements, AMOC hysteresis, Chaisson geosphere Φ_m) rather than re-deriving them from scratch.

---

## A. spatial_extent

- **Earth**: characteristic linear extent — planetary radius 6.371×10^6 m; often quoted as circumference ~4.0×10^7 m or diameter 1.27×10^7 m. Order of magnitude: **10^7 m** (diameter).
  - Source: standard geodesy value, snippet-verified (multiple WebSearch results, e.g. UCAR/solar-constant calculators giving R⊕ = 6371 km). evidence_status: measured. Level: exemplar (Earth), but functions as class-general order of magnitude since Venus/Mars/Titan are all within one order (Venus R=6052 km, Mars R=3390 km, Titan R=2575 km — [unverified, model knowledge, not independently re-fetched this session] — flag for a follow-up primary check before catalog entry if precision matters).
  - Vertical extent (troposphere+stratosphere, the dynamically active atmospheric layer): ~10-50 km (10^4-10^5 m) — standard atmospheric science figure, [unverified — not independently sourced this sweep, treat as placeholder pending a dedicated atmospheric-structure citation].

## B. characteristic_timescales

| Named timescale | Value (order of magnitude) | Measurand | Source | Status |
|---|---|---|---|---|
| Fastest constituent process (convective turnover / weather-system evolution) | ~1 day (10^5 s) | synoptic weather system lifetime | general meteorology; not independently primary-read this sweep — [unverified, needs dedicated citation] | measured (folklore-grade, needs pin) |
| Dominant dynamics / predictability horizon | ~2 weeks (~1.2-1.7×10^6 s) | deterministic weather forecast skill limit, chaotic error-doubling | Lorenz (1969); Charney et al. (1966) 5-day error-doubling time → ~2-week deterministic limit widely cited; recent work (Judt 2018; MDPI 2024 "Exploring the Origin of the Two-Week Predictability Limit") revisits and modestly extends this. Snippet-verified via WebSearch (MDPI 15(7):837, 2024, and academia.edu copy of "Lorenz's View on the Predictability Limit of the Atmosphere"). | measured, evidence_status: measured (well-replicated but exact horizon model-dependent; modern GCMs push modestly beyond 2 weeks) |
| System lifetime (climate system as currently configured, since onset of current ocean-atmosphere-cryosphere regime) | ~10^6-10^7 years (Quaternary-scale) is a reasonable order but **no single citable "system lifetime" value found this sweep** — recommend leaving unknown or scoping explicitly (e.g., "since Holocene onset ~11,700 yr = 3.7×10^11 s" if that's the intended boundary). evidence_status: unknown pending explicit scoping decision by editorial team. | — | — | unknown |

Note: this column needs an explicit scoping decision (what counts as "system lifetime" for an open, ~4.5-Gyr-old planetary climate system) before it can be filled with confidence — flagging rather than guessing.

## C. numerosity / component_ontology

No formal "atomic part count" literature exists for planetary climate as such (unlike e.g. a fault system's segment count). Candidate atomic parts per the atomicity-convention (characteristic-dynamics level, not molecular):
- Air parcels / grid-scale convective cells: numerosity order-of-magnitude derivable from atmosphere volume / synoptic parcel volume, but this is a **derived, not published**, figure — evidence_status would be `derived` if computed, and no one has published a canonical count. Recommend: unknown for a hard number; component_ontology entry = "air parcels (fluid continuum, interchangeable)" + "ocean water masses" + "ice sheets/sea ice (discrete, ~10 major named bodies)" + "cloud systems."
- This is fundamentally a **field/continuum system** (interaction_topology), which is why no canonical discrete count exists — flag for the structural-columns agent, not fully a quantitative-sweep deliverable.

## D. instance_population

**n ≥ 4 real, published planetary climate systems: Earth, Venus, Mars, Titan.** This directly satisfies D14's anticipation of a comparative-planetology-grounded instance population for this class.

- Standing population: **4 confirmed, well-characterized planetary/moon climate systems in the Solar System** with active atmospheric circulation (Earth, Venus, Mars, Titan); a broader instance count would include Jupiter/Saturn/Uranus/Neptune (gas/ice giant atmospheric circulation, arguably a different sub-class) and exoplanet atmospheres (thousands cataloged, but climate dynamics characterized for only a handful via transit spectroscopy — not "instances" in the same rigorous sense).
- Formation rate: not applicable in the usual sense (planetary climates don't "form" repeatedly the way storms do) — evidence_status: qualitative/not applicable, recommend recording as such rather than unknown.
- Sources (comparative planetology, snippet-verified this sweep):
  - Venus: surface pressure ~92-95 bar (95,000 mbar), surface temp ~737 K, atmosphere ~96.5% CO2. Multiple snippet-verified sources (Britannica "Atmospheres of other planets"; arXiv:2404.07669 "Venus" review — title/abstract snippet only, NOT primary-read in full this session, [unverified pending full read]).
  - Mars: surface pressure ~6 mbar, mean surface temp ~210 K, atmosphere ~95% CO2. Snippet-verified (Britannica; NASA spacemath factsheet spacemath.gsfc.nasa.gov/earth/10Page7.pdf).
  - Titan: surface temp ~94 K (near methane triple point), thick N2-dominated atmosphere, active methane hydrological cycle. Snippet-verified (search summary referencing Titan atmospheric reviews; not primary-read).
  - Venus atmospheric mass: ~4.69×10^20 kg CO2 + ~1.1×10^19 kg N2 (component breakdown) — [unverified, single search-engine-summarized figure, not primary-read against a specific paper; recommend re-verification against Seiff et al. or a NASA fact sheet before catalog entry].
  - General comparative synthesis: "Global energy budgets and 'Trenberth diagrams' for the climates of terrestrial and gas giant planets," Read et al. (2016), Quarterly Journal of the Royal Meteorological Society — identified via WebSearch, title/existence confirmed, **NOT primary-read this session** — this is likely the single best canonical comparative-planetology energy-budget source and should be prioritized for full-text retrieval before catalog lock.

## E. energy_rate_density (Φ_m inputs)

**Power (W):**
- Total solar power intercepted by Earth (cross-section, top of atmosphere): **1.74×10^17 W** (derived from solar constant 1361 W/m^2 × Earth's cross-sectional area πR²⊕ = 1.274×10^14 m^2). Snippet-verified via multiple independent WebSearch sources converging on ~1.73-1.74×10^17 W ("174 petawatts").
- Total absorbed (after ~29% albedo reflection): **~1.2×10^17 W** (241 W/m^2 × Earth surface area 5.1×10^14 m^2 ≈ 1.23×10^17 W; or equivalently 71% of 1.74×10^17 W ≈ 1.24×10^17 W). This is the figure named in the task brief and is confirmed here.
  - Source: Trenberth, K.E., Fasullo, J.T. & Kiehl, J. (2009). "Earth's Global Energy Budget." *Bulletin of the American Meteorological Society* 90(3), 311-324. Values (340 W/m^2 incoming, 29% albedo, ~241 W/m^2 net absorbed) reconfirmed via NASA Earth Observatory's "Climate and Earth's Energy Budget" page, which explicitly credits "NASA illustration by Robert Simmon, adapted from Trenberth et al. 2009, using CERES flux estimates provided by Norman Loeb." **Primary journal article itself returned HTTP 403 on WebFetch (paywalled/blocked) — snippet-verified via NASA's derivative figure and secondary summaries, NOT primary-read of the BAMS paper text this session.** evidence_status: measured (well-established, multiply-replicated figure) but citation-annotation is snippet-verified, not primary-read.
  - Net radiative imbalance (climate change signal, NOT the total throughput): 0.58-0.87 W/m^2 depending on period (von Schuckmann, Hansen et al.), i.e. ~0.3-0.4 PW net planetary energy gain — this is a distinct, much smaller quantity from the ~1.2×10^17 W total absorbed throughput; do not conflate. Snippet-verified (Hansen et al. 2011, arXiv:1105.1140, "Earth's Energy Imbalance and Implications" — abstract/summary level only).

**Mass (kg):**
- Total atmosphere mass: **5.15×10^18 kg** (Wikipedia "Atmosphere of Earth" figure, cross-confirmed by Physics Factbook and multiple textbook sources; snippet-verified, convergent across independent sources, not a single-source claim). If Φ_m is computed on atmosphere mass alone: Φ_m = 1.2×10^17 W / 5.15×10^18 kg = **~0.0233 erg/s/g... ** — wait, unit check: 1.2×10^17 W = 1.2×10^24 erg/s. Divided by 5.15×10^18 kg × 1000 g/kg = 5.15×10^21 g → Φ_m ≈ **233 erg s^-1 g^-1** if normalized to atmosphere mass only.
- Whole-Earth mass (if normalizing to full planet, the more common convention for "geosphere"): 5.97×10^24 kg = 5.97×10^27 g → Φ_m = 1.2×10^24 erg/s / 5.97×10^27 g ≈ **2.0×10^-4 erg s^-1 g^-1** if normalized to whole-planet mass. **[CORRECTED 2026-07-02 at flag cleanup: this section previously stated ≈0.20 erg s^-1 g^-1, an arithmetic error — the correct denominator (5.97×10^27 g) is written correctly above, but the value that follows had been computed by dividing by 5.97×10^24 as if it were already grams, skipping the ×1000 kg→g conversion. 1.2×10^24 / 5.97×10^27 ≈ 2.01×10^-4, not 0.20.]**
- **Recommendation: report both derivations explicitly, evidence_status: derived (this project's computation from published inputs), and flag which mass convention is used** — because both figures share the same numerator, the choice of denominator changes the answer by the mass ratio between conventions, whole-planet/atmosphere ≈ 5.97×10^24/5.15×10^18 ≈ **1.16×10^6 (~1.16 million times)**, not ~1000x as this section previously (and incorrectly) stated — this must not be silently picked.

**Chaisson's Φ_m for climasphere/geosphere:**
- Per Phase 1 (`research/phase1/quantitative-backbone.md`, already primary-read from Chaisson 2010/2011 *Complexity* 16(3):27-40, Table 1): **Earth's geosphere ≈ 75 erg s^-1 g^-1** ("whole-Earth heat flow proxy"). Phase 1 explicitly notes this is a geosphere-wide figure, NOT a climate-system-specific Φ_m — "no separate climate-system Φ_m located" in Chaisson's tables. **This sweep did not find a distinct published climasphere-specific Φ_m either.** The ~75 erg/s/g figure should be carried into this entry labeled as geosphere proxy, evidence_status: measured (Chaisson primary-read in Phase 1), but annotated "not climate-system-specific — geophysical heat-flow proxy, use with caveat." This confirms rather than overturns the task brief's ~75 erg/s/g memory figure.
- Our own derived climate-throughput Φ_m (atmosphere-normalized, ~233 erg/s/g, or whole-planet-normalized, ~2.0×10^-4 erg/s/g) is a DIFFERENT quantity from Chaisson's geosphere heat-flow figure (which uses Earth's internal/surface heat budget, not solar throughput) — do not merge them; record separately with distinct method notes.

## F. fractal_dimension_spatial

- **Cloud field boundary fractal dimension: D ≈ 1.35** (perimeter-area relation, satellite/radar imagery, spanning 1-1000 km scale range). Original source: Lovejoy, S. (1982). "Area-perimeter relation for rain and cloud areas." *Science* 216(4542), 185-187. Reconfirmed by multiple follow-on studies: Luo et al. (2007), *GRL* — "validation of the fractal dimension of cloud boundaries," reporting D≈1.30-1.40 consistent with Lovejoy 1982; Christensen et al. (2021), *GRL* 48 — "The Fractal Nature of Clouds in Global Storm-Resolving Models" confirms the same range in modern high-resolution climate models. **Snippet-verified across 3+ independent papers this sweep; none primary-read in full text.** evidence_status: measured (well-replicated across 40+ years of literature).
- Derived 3D cloud-surface dimension D ≈ 2.35 (treating the 2D perimeter measurement as a zero-set/cross-section of a 3D fractal surface) — this is a standard but secondary inference, not a direct measurement; flag as such if used.
- Measurand: cloud-field boundary (perimeter-area scaling of satellite/radar-imaged cloud fields), NOT the climate system generally — this is the "primary SPATIAL structure" fractal dimension of the dominant visible climate feature (clouds), analogous to how coastline/fault-trace fractal dimensions are used for other classes. Level: class-general (D≈1.35 is a robust cross-instance climate-science constant for Earth's cloud fields; no equivalent published for Venus/Mars/Titan cloud/haze fractal geometry found this sweep — recommend "unknown" for comparative exemplars pending further search).

## G. extreme_event_statistics

No power-law tail statistic specific to "planetary climate" as a whole was located this sweep (as distinct from sub-phenomena like tropical cyclones or floods, which are separate catalog entries with their own tail statistics per Phase 1). Recommend: **unknown at the class level for planetary_climate itself**; cross-reference sibling entries (tropical-cyclones, etc.) rather than fabricate a climate-wide tail exponent. This is a case where "unknown is a legal value" applies squarely — do not borrow a sibling entry's exponent.

## H. temporal_correlation

- Global mean surface temperature long-range correlation: literature exists on Hurst-exponent / DFA analysis of temperature records (Koscielny-Bunde et al. 1998, *Phys. Rev. Lett.* — long-range persistence in climate records, H≈0.65-0.7 for continental stations) — **this is [unverified/model-knowledge this sweep; the specific paper and value were not re-fetched or snippet-confirmed this session** — flag for a follow-up targeted search before catalog entry; do not enter the H≈0.65 number without re-verification.

## I. degree_distribution

Not applicable — planetary climate is a field/continuum system (interaction_topology), not a network system. Recommend recording as N/A per the column's own scope ("network systems only"), not "unknown."

## J. tipping_transitions

**16 tipping elements** — Armstrong McKay, D.I., Staal, A., Abrams, J.F., et al. (2022). "Exceeding 1.5°C global warming could trigger multiple climate tipping points." *Science* 377(6611), eabn7950. DOI: 10.1126/science.abn7950. **Per task instructions, this is reused from Phase 1 primary-read** (`research/phase1/dynamics-criticality.md` line ~53 cites this directly with the 16-element count, updated from Lenton et al. 2008's 9). This sweep additionally located and attempted to primary-read the accepted-manuscript PDF (davidarmstrongmckay.com) for the full table of thresholds/timescales per element; the WebFetch tool could not reliably parse the embedded table from the raw PDF text extraction and the file exceeded direct re-fetch limits on a second attempt — **the 16-element headline count is Phase-1-verified and safe to reuse; the per-element threshold table (e.g., AMOC 1.4-8°C sustained warming, timescale ~50-250 yr; Greenland Ice Sheet ~0.8-3°C, ~1000-15000 yr, etc.) is [unverified this session at the individual-element level] — the full table should be pulled from Phase 1's original primary-read notes if that level of detail was captured there, otherwise re-fetch the manuscript with a PDF-native tool before populating per-element rows.**
- AMOC collapse threshold: snippet-confirmed this sweep at **1.4-8°C sustained global warming** (wide uncertainty range), consistent with Armstrong McKay 2022's headline finding that AMOC threshold uncertainty spans "already possible" to well above 4°C.

## K. memory_hysteresis (AMOC anchor)

**AMOC hysteresis width ≈ 0.4 Sv**, **model-derived** (not observed in the real ocean) — van Westen, R.M. & Dijkstra, H.A. (2023). "Asymmetry of AMOC Hysteresis in a State-of-the-Art Global Climate Model." *Geophysical Research Letters* 50(19), e2023GL106088. arXiv:2308.14098. Confirmed via Phase 1 (`research/phase1/dynamics-criticality.md`) and re-confirmed via this sweep's WebSearch (multiple snippets: "The hysteresis width in the CESM model (about 0.4 Sv) is measured as the difference in freshwater forcing between collapse and recovery"). Model used: CESM (Community Earth System Model), a state-of-the-art coupled GCM. Key qualitative finding also reconfirmed: collapse and recovery are asymmetric — recovery happens faster than collapse due to sea-ice feedback effects. **evidence_status: measured-disputed per task brief's anchor framing is not quite right — more precisely this is "derived"/model-derived, explicitly NOT a real-world observed hysteresis loop.** WebFetch of the full arXiv PDF text exceeded the tool's size limit this session (10 MB cap) — snippet-verified only, not primary-read of full methods/results this sweep (Phase 1 may have gone deeper; defer to Phase 1 notes if they contain a direct PDF read).

## L. chaos_sensitivity / predictability

**~2-week deterministic predictability horizon** for weather (as the fast/synoptic-scale expression of atmospheric chaos). Origin: Charney, Fjørtoft & von Neumann-adjacent work / Charney et al. (1966) reporting ~5-day error-doubling time in an early GCM, popularized as the "2-week limit" via Lorenz's chaos work (Lorenz 1963, 1969). Snippet-verified via WebSearch this sweep, citing: "Exploring the Origin of the Two-Week Predictability Limit: A Revisit of Lorenz's Predictability Studies in the 1960s," *Atmosphere* (MDPI) 15(7):837 (2024), and "Lorenz's View on the Predictability Limit of the Atmosphere," *Preprints* (MDPI) 3(3):63. Modern high-resolution/ML models (e.g., arXiv:2504.20238, "Atmospheric Predictability Beyond 30 Days with Machine Learning," 2025) push the practical/statistical limit somewhat further, but this is forecast-skill (statistical), not a change to the underlying dynamical predictability horizon. evidence_status: measured (well-established, but exact number is model/method-dependent — treat "~2 weeks" as the canonical order-of-magnitude figure, not a precise constant). Lyapunov exponent itself (inverse of the ~5-day doubling time, so λ ≈ ln(2)/5 days ≈ 0.14 /day ≈ 1.6×10^-6 /s) is a straightforward derivation from the doubling time but was not found as a directly published "the atmosphere's leading Lyapunov exponent is X" figure this sweep — if entered, should be marked evidence_status: derived.

## M. cascade statistics

No cascade-failure statistics specific to planetary climate as a whole were located (tipping-element cascade/interaction literature exists — e.g., "Climate tipping point interactions and cascades: a review," *Earth System Dynamics* 15:41 (2024), identified via WebSearch this sweep, not primary-read — this is a strong candidate for the cascade_susceptibility column's qualitative/hybrid treatment, describing INTERACTIONS between the 16 tipping elements rather than a quantitative cascade-size distribution). Recommend: qualitative/rubric treatment citing this review, with evidence_status: qualitative for the cascade-susceptibility hybrid column; no power-law cascade-size statistic found (correctly left unknown rather than guessed).

---

## Candidate canonical review sources for the entry source list (3-5)

1. **Trenberth, K.E., Fasullo, J.T. & Kiehl, J. (2009).** "Earth's Global Energy Budget." *Bulletin of the American Meteorological Society* 90(3), 311-324. — the canonical energy-budget reference; snippet-verified via NASA's derivative product this sweep, primary journal text blocked by paywall (403).
2. **Armstrong McKay, D.I. et al. (2022).** "Exceeding 1.5°C global warming could trigger multiple climate tipping points." *Science* 377(6611), eabn7950. — Phase-1 primary-read; the 16-tipping-element authority.
3. **van Westen, R.M. & Dijkstra, H.A. (2023).** "Asymmetry of AMOC Hysteresis in a State-of-the-Art Global Climate Model." *Geophysical Research Letters* 50(19), e2023GL106088 (arXiv:2308.14098). — AMOC hysteresis primary source.
4. **Read, P.L. et al. (2016).** "Global energy budgets and 'Trenberth diagrams' for the climates of terrestrial and gas giant planets." *Quarterly Journal of the Royal Meteorological Society* 142(700), 703-720. — identified this sweep as the best candidate comparative-planetology energy-budget synthesis (Earth/Venus/Mars/Titan/gas giants in one framework); title/existence confirmed via WebSearch only, **not yet primary-read — recommend prioritizing full-text retrieval before catalog lock**, since it directly serves the instance_population comparative mandate.
5. **Lovejoy, S. (1982).** "Area-perimeter relation for rain and cloud areas." *Science* 216(4542), 185-187. — canonical cloud-fractal-dimension source (D≈1.35), reconfirmed by decades of follow-up (Luo et al. 2007 *GRL*; Christensen et al. 2021 *GRL*).
6. **Chaisson, E.J. (2010/2011).** "Energy Rate Density as a Complexity Metric and Evolutionary Driver." *Complexity* 16(3), 27-40. — already Phase-1 primary-read; source of the geosphere Φ_m≈75 erg/s/g figure.

---

## Summary table of recovered quantities

| Quantity | Value | Unit | Source | Primary-read or snippet |
|---|---|---|---|---|
| spatial_extent (Earth diameter) | 1.27×10^7 | m | standard geodesy | snippet-verified |
| predictability horizon | ~2 weeks (~1.2×10^6) | s | Charney et al. 1966 / Lorenz; MDPI 2024 review | snippet-verified |
| total solar power intercepted | 1.74×10^17 | W | solar constant 1361 W/m^2 × cross-section | snippet-verified (convergent sources) |
| total absorbed solar power | ~1.2×10^17 | W | Trenberth, Fasullo & Kiehl (2009), via NASA derivative figure | snippet-verified (paywall blocked primary) |
| net radiative imbalance | 0.3-0.4 PW (0.58-0.87 W/m^2) | W | Hansen/von Schuckmann | snippet-verified |
| atmosphere mass | 5.15×10^18 | kg | Wikipedia/Physics Factbook, convergent | snippet-verified |
| whole-Earth mass | 5.97×10^24 | kg | standard value | snippet-verified |
| Φ_m, geosphere (Chaisson) | ~75 | erg s^-1 g^-1 | Chaisson 2010/2011 Table 1 | primary-read (Phase 1) |
| Φ_m, climate-throughput, atmosphere-normalized (derived) | ~233 | erg s^-1 g^-1 | this project, derived | derived (not published) |
| Φ_m, climate-throughput, whole-planet-normalized (derived) | ~2.0×10^-4 | erg s^-1 g^-1 | this project, derived | derived (not published) [corrected 2026-07-02 from arithmetic error, was ~0.20] |
| cloud field fractal dimension | 1.35 | dimensionless | Lovejoy 1982 *Science*; reconfirmed Luo 2007, Christensen 2021 | snippet-verified (3+ convergent sources) |
| tipping elements count | 16 | count | Armstrong McKay et al. 2022 *Science* | primary-read (Phase 1) |
| AMOC tipping threshold | 1.4-8 | °C sustained warming | Armstrong McKay et al. 2022 | snippet-verified |
| AMOC hysteresis width | ~0.4 | Sv | van Westen & Dijkstra 2023 *GRL* | snippet-verified (Phase 1 + this sweep) |
| instance_population | ≥4 (Earth, Venus, Mars, Titan) | count | comparative planetology (Britannica, NASA factsheets, Read et al. 2016 candidate) | snippet-verified |
| Venus surface pressure/temp | ~95 bar / 737 K | bar, K | Britannica; NASA spacemath factsheet | snippet-verified |
| Mars surface pressure/temp | ~6 mbar / 210 K | mbar, K | Britannica; NASA spacemath factsheet | snippet-verified |
| Titan surface temp | ~94 K | K | comparative planetology reviews | snippet-verified |
