# Cities — Source Research (Catalog of Complexity, Phase 4)

Class entry: **cities** (category: socio-economic). Primary exemplar: **New York
City** (NYC metro area / NYC proper as noted per value). Secondary exemplar:
**Tokyo** (Greater Tokyo Area). Compiled 2026-07-02.

Methodology note: every value below states whether it was **primary-read** (a
document was fetched and its actual text/tables read directly in this
session), **snippet-verified** (recovered only via search-engine result
snippets/AI-summarized search results, original document not opened), or
**reused-from-Phase1** (primary-read in an earlier session, per
`research/phase1/quantitative-backbone.md`, cited here with that provenance
carried forward unchanged). Per `filling_rules.power-law-rigor`, all power-law
/ tail-exponent claims are tagged with fit-rigor status; per
`filling_rules.no-guessing`, anything not recovered is marked **unknown**,
not estimated.

---

## 1. Spatial extent

- **NYC (city proper) land area**: 302.6 sq mi = **783.8 km²** (five boroughs;
  water area excluded). Widely reproduced figure (Wikipedia "New York City",
  citing US Census Bureau data). **Snippet-verified** — Census QuickFacts page
  was found in results but the specific land-area figure was read from the
  Wikipedia aggregation, not fetched directly from census.gov in this
  session; treat as high-confidence (Census-sourced, consistent across
  independent aggregators) but not primary-read.
- **NYC metro area (CSA)**: New York-Newark, NY-NJ-CT-PA Combined Statistical
  Area — geographic extent not independently pinned down to a km² figure in
  this session; population given below (Section 2). **unknown** (area figure
  not recovered).
- **Tokyo Special Wards (23 wards)**: **627 km²** (242 sq mi), ~9.73M
  residents. **Snippet-verified** (Wikipedia "Special wards of Tokyo",
  multiple consistent aggregator sources).
- **Tokyo Metropolis (Tokyo-to, incl. Tama district + islands)**: ~**2,188
  km²**. **Snippet-verified**, single-source aggregator (hokushinfudosan.co.jp
  real-estate site) — lower confidence, should be re-checked against Tokyo
  Metropolitan Government statistics before catalog lock-in.
- **Characteristic linear extent (order of magnitude)**: for a single
  large city core, **O(10¹–10² km)**; for a metro/CSA, **O(10²–10³ km)**
  is a reasonable order-of-magnitude bound implied by the NYC CSA
  (spans NY/NJ/CT/PA, roughly 150–200 km across) — this is a **derived**
  order-of-magnitude judgment from the population/area figures above, not a
  directly published "characteristic extent" figure; flagged
  evidence_status: derived.

---

## 2. Instance population (class-level, per schema note — this is the
   column that governs whether class-statistical claims like Zipf are
   epistemically supported; cities is a very high-n class)

- **Number of megacities (>10M inhabitants) worldwide, 2018**: **33**.
  Source: UN DESA, "68% of the world population projected to live in urban
  areas by 2050" (2018 Revision of World Urbanization Prospects press
  release), un.org/development/desa. **Snippet-verified** — the press-release
  HTML page was fetched via WebFetch and its extracted text read directly in
  this session (counts as primary-read of the secondary press release, not
  of the underlying WUP 2018 full report/highlights PDF, which failed to
  parse as text — see caveat below).
- **Projected megacities by 2030**: **43**. Same source.
- **"One in eight people live in 33 megacities worldwide; close to half of
  urban dwellers live in settlements <500,000"** — same source, direct quote.
- **UN WUP 2018 full report/highlights PDF**
  (population.un.org/wup/assets/WUP2018-Highlights.pdf): fetch was attempted
  directly; the tool could not parse the binary/compressed PDF stream into
  text in this session, so the annex table ("world's cities with 1 million
  inhabitants or more in 2018") giving the exact **count of 1M+ cities**
  could NOT be extracted. **unknown** (count of cities >1M population is
  NOT recovered as a precise number in this session — only the >10M
  megacity counts above were recovered, via the secondary press page).
  Flag for re-attempt with a working PDF text extractor.
- **World's largest urban agglomerations, 2018 (WUP 2018 rankings)**:
  1. Tokyo ~37M (largest), 2. New Delhi ~29M, 3. Shanghai ~26M,
  4. Mexico City and São Paulo ~22M each, 5. Cairo/Mumbai/Beijing/Dhaka
  ~20M each. **Snippet-verified** (same UN DESA press page).

---

## 3. Population figures — NYC and Tokyo (component of numerosity /
   instance-level anchors, not itself "numerosity" — see Section 6)

- **NYC city proper population**: **8,478,000** (Vintage 2024, July 2023–July
  2024), US Census Bureau. **Snippet-verified** (Census QuickFacts page
  identified in search results; figure read from search-engine summary of
  that page, not fetched directly as the primary Census table in this
  session).
- **NYC metro area (New York-Newark-Jersey City MSA)**: **19,940,274**
  (2024 estimate). **Snippet-verified**, same caveat.
- **NYC combined statistical area (CSA, broader, incl. CT/PA)**: **~22.3
  million** (2024 estimate). **Snippet-verified.**
- **Tokyo (Greater Tokyo Area)**: UN WUP 2025 edition cites **33.4 million**
  (rank 3 globally, per Nippon.com secondary reporting of the UN report);
  other Greater Tokyo Area definitions give **~37 million** (commonly cited
  figure, e.g., MacroTrends metro-area series, UN WUP 2018 edition per
  Section 2 above). **The exact figure is definition-sensitive** — Japan's
  own statistical conventions (Tokyo-to, Greater Tokyo Area, National Capital
  Region) yield different totals; no single value should be treated as
  uncontested. All figures here are **snippet-verified**, not primary-read
  from a UN table.
- **Tokyo 23 Special Wards**: **~9.73 million** (2024/2025 estimate).
  **Snippet-verified.**

---

## 4. Urban scaling exponents (Bettencourt et al. 2007) — REUSED FROM
   PHASE 1, primary-read, not re-verified this session

Per `research/phase1/quantitative-backbone.md` §3: Bettencourt, Lobo,
Helbing, Kühnert & West (2007), "Growth, innovation, scaling, and the pace
of life in cities," *PNAS* 104(17), 7301–7306 — **full text and Table 1
retrieved and read** in Phase 1.

Selected exponents (Y = Y₀N^β, N = population; full table of 21 indicators
in Phase 1 report):
- New patents: **β = 1.27** [1.25, 1.29], adj-R²=0.72, USA 2001, n=331
  (superlinear — innovation)
- Gasoline stations: **β = 0.77** [0.74, 0.81], adj-R²=0.93, USA 2001, n=318
  (sublinear — infrastructure economies of scale)
- Total housing: **β = 1.00** [0.99, 1.01], adj-R²=0.99 (linear — individual
  needs)
- Total wages: β = 1.12; GDP (multiple country datasets): β = 1.13–1.26;
  Total electrical consumption: β = 1.07; Length of electrical cables:
  β = 0.87; Road surface: β = 0.83.
- **NYC-specific**: super-exponential growth fit gives **β = 1.09** (main
  text, not the cross-sectional table).
- Evidence status: **measured** (regression fit, not a tail-exponent power
  law in the CSN sense — this is a scaling-law slope, not subject to the
  power-law-rigor filing rule, which applies to event-size tail
  distributions).
- Level: **class-general** (fit is across ~300+ US MSAs; NYC is one data
  point plus one exemplar-level super-exponential figure).

---

## 5. Zipf's law for city sizes — REUSED FROM PHASE 1

Per Phase 1 quantitative-backbone.md §5, from Clauset, Shalizi & Newman
(2009), *SIAM Review* 51(4), 661 (CSN's Table 6.1, full text primary-read
in Phase 1):
- **US city populations (n=19,447 cities), discrete power-law fit**:
  x_min = 52,460 ± 11,880; **α̂ = 2.37(8)**; CSN fit verdict: **"moderate"**
  — power law not ruled out but log-normal fits comparably well; NOT one of
  CSN's clean confirmed cases (contrast with English word frequency,
  α=1.95, rated "good," the one clean fit in CSN's 24-dataset study).
- Evidence status per `power-law-rigor` rule: **measured-untested** would
  actually understate this — CSN explicitly tested it and rated it
  "moderate," so this is better tagged **measured** with an explicit
  "moderate, contested vs. log-normal" caveat, not a bare untested claim.
  Record both the α value AND the moderate-not-good verdict; do not round
  up to "confirmed power law."
- Historical framing: Auerbach (1913) first observed the regularity;
  Zipf (1949) popularized rank-size exponent ≈1 (rank-size convention),
  which is NOT numerically the same object as CSN's pdf-exponent
  convention (α≈2.37) — the two conventions differ by the standard
  rank-size↔pdf transform (rank exponent 1 ↔ pdf exponent 2), so ≈2.37 is
  "roughly consistent with" but not a direct check of the classic Zipf
  value of 1. **[unverified — historical Zipf/Auerbach claim not
  re-checked against primary texts in Phase 1 or this session.]**
- Gabaix (1999), "Zipf's Law for Cities: An Explanation," *QJE* 114:739 —
  standard theoretical reference, cited by Bettencourt et al. **Title/
  journal/volume snippet-verified; full text not read.**
- Level: **class-general** (US city-size distribution as a whole; NYC is
  one point in the underlying dataset, not individually reported).

---

## 6. Numerosity / component ontology

- No published "atomic part count" framework exists for cities analogous to
  Bettencourt's scaling-law dataset. Candidate atomic parts and their
  order-of-magnitude counts, from the population figures above (treated as
  **derived**, evidence_status: derived, not a directly published
  "numerosity" figure):
  - Individual residents (out-of-scope(human) per atomicity-convention):
    NYC city proper ~8.5×10⁶ (O(10⁷)); NYC metro ~2.0×10⁷ (O(10⁷));
    Tokyo Greater Area ~3.3–3.7×10⁷ (O(10⁷)).
  - Buildings/parcels: **unknown** — no citable count recovered this
    session (NYC DCP/DOF parcel counts likely exist but were not searched
    for/verified; flag for follow-up).
  - Households: NYC ~3.1–3.4M housing units order of magnitude, **not
    independently verified this session** — **unknown**, do not use
    uncross-checked figure.
- **Coverage verdict**: numerosity is NOT well served by a single citable
  source for cities; the component_ontology structured field will need to
  enumerate residents / buildings / firms / vehicles / infrastructure nodes
  separately, most of which remain **unknown** pending targeted searches
  (e.g., NYC Department of Finance property counts, NYC DOT vehicle
  registration counts).

---

## 7. Energy rate density (Chaisson Φ_m) — inputs and derivation

**Chaisson's own table value, REUSED FROM PHASE 1** (primary-read,
Chaisson 2010/2011, *Complexity* 16(3), 27, Table 4, "Human society across
cultural stages"):
- **"Technologists" (present day)**: Φ_m = **2×10⁶ erg s⁻¹ g⁻¹**,
  equivalently **12.5 kW per person**. This is Chaisson's own generic
  proxy for present-day technological human society (not city-specific),
  explicitly noted in Phase 1 as the closest applicable figure for
  socio-economic entries including cities — no city- or NYC-specific Φ_m
  exists in Chaisson's published tables. Evidence status: **measured**
  (Chaisson's own figure), but **not NYC-specific** — using it for the
  cities entry requires an explicit "generic proxy, not city-measured" flag.
- **Derivation check performed this session** (evidence_status: **derived**,
  flagged as ours per the schema's method note): Chaisson's
  12.5 kW-per-person figure for "technologists" implies an assumed body
  mass of ~62.5 kg per person (12,500 W ÷ (2×10⁶ erg/s/g × 10⁻⁴ W·g/(kg·
  erg/s)) = 62.5 kg) — i.e., Chaisson's Φ_m for human society normalizes
  power throughput by human BODY mass, not by city infrastructure mass.
  This is an important interpretive note for how the catalog should
  compute a city-specific Φ_m if it chooses to (city infrastructure mass
  vastly exceeds population body mass, so a city-infrastructure-normalized
  Φ_m would be orders of magnitude SMALLER than the "technologists" figure
  — these are not interchangeable without specifying the mass convention).

**NYC-specific power input (recovered this session, for a possible
city-specific derivation)**:
- **NYC total annual energy consumption**: ~1.04 Quad Btu (1,040 TBtu)
  across residential/commercial/industrial/transportation sectors (2022) +
  ~430 TBtu for electricity generation ≈ **1.47×10¹⁵ BTU/yr total**.
  Source: NYC Mayor's Office of Climate & Environmental Justice (MOCEJ)
  figure as reported in the NPCC4 report, Yoon et al. (2024), *Annals of
  the New York Academy of Sciences*, "Climate change, energy, and energy
  insecurity in New York City." **Snippet-verified** (figure read from
  search-engine summary of the NYAS article page; the peer-reviewed NPCC4
  article itself was not fetched and read directly in this session).
  - Converted: 1.47×10¹⁵ BTU/yr × 1055.06 J/BTU ÷ 3.156×10⁷ s/yr
    ≈ **4.9×10¹⁰ W** ≈ **4.9×10¹⁷ erg/s**. (evidence_status: derived,
    unit conversion performed this session from the snippet-verified BTU
    figure.)
  - **NYC electricity-only consumption**: ~55.7 TWh/yr (≈55.7 billion kWh),
    a subset of the total above. **Snippet-verified**, multiple consistent
    secondary sources (Quora aggregation of EIA-style figures; Columbia
    QSEL energy-mapping project referenced but not independently opened).
    Lower-confidence than the MOCEJ total-energy figure; flagged for
    re-verification against EIA's New York state/NYC-specific tables
    directly.
- **Mass input**: using NYC city-proper population (8.478×10⁶) × an assumed
  ~62 kg/person body mass (global adult average, **[unverified — model
  knowledge, not sourced this session]**) gives mass ≈ 5.26×10¹¹ g. Dividing
  the derived power (4.9×10¹⁷ erg/s) by this body-mass figure gives
  **Φ_m ≈ 9.3×10⁵ erg s⁻¹ g⁻¹** (evidence_status: derived, ours) — same
  order of magnitude as, but about half of, Chaisson's generic
  "technologists" figure (2×10⁶), which is a reasonable cross-check given
  NYC's high transit-share/lower-per-capita-energy profile relative to the
  US national average implicit in Chaisson's figure.
  - **This is a body-mass-normalized Φ_m, NOT an infrastructure-mass-
    normalized one.** No citable "mass of NYC's built infrastructure"
    figure was located this session — computing an infrastructure-
    normalized Φ_m (which would be far smaller) remains **unknown**
    pending that mass figure.
- **Tokyo**: no power or mass figures for a Tokyo-specific Φ_m derivation
  were pulled this session (out of scope given NYC-primary focus); flag as
  **unknown** for Tokyo, follow-up candidate.

---

## 8. Fractal dimension (spatial) — urban boundary/form

**Foundational framework, REUSED context from general knowledge, primary
paper NOT read this session:**
- Batty, M. & Longley, P. (1994). *Fractal Cities: A Geometry of Form and
  Function.* Academic Press. Established box-counting methodology for
  urban boundary (D_b) and form (D_f) dimensions; general finding that
  boundary dimension typically falls **1.0–1.5** and form (area-filling)
  dimension **1.5–2.0**. **[unverified — snippet/secondary-source
  characterization of the book's findings; the book itself was not
  fetched/read in this session.]**
- Batty, M. & Longley, P. (1987). "Fractal-Based Description of Urban
  Form." *Environment and Planning B* 14(2). **Snippet-verified**
  existence/citation only; not read.

**Specific empirical values recovered (snippet-verified, NOT primary-read
this session; none are NYC- or Tokyo-specific)**:
- Cardiff, UK: boundary fractal dimension **D = 1.23–1.29**.
  Source characterization unclear from snippets (attributed in aggregate
  to Batty/Longley-style box-counting analyses); **not independently
  pinned to a single citable paper this session — treat cautiously.**
- 33 Chinese mining cities (2006 data): boundary dimension range
  **1.126–1.299** (mean ≈1.227); form dimension range **1.626–1.799**
  (mean ≈1.691). Source: Song, Y., Wang, S.J., Ye, Q., Wang, X.W. (2012),
  "Urban spatial morphology characteristic and its spatial differentiation
  of mining city in China," *Areal Research and Development* 31(1):45-39
  [in Chinese]. **Snippet-verified**, citation details from a
  secondary/aggregator source, not the original Chinese-language journal
  article.
- German central-place cities: Munich D=1.7327, Nuremberg D=1.6852,
  Stuttgart D=1.8370, Frankfurt D=1.4811 (form dimension). Source not
  independently pinned to a specific paper/DOI this session —
  **snippet-verified only, low confidence, needs primary citation before
  catalog use.**
- **No NYC- or Tokyo-specific fractal dimension value was recovered this
  session.** This is a real gap: record as **unknown** for the primary/
  secondary exemplars specifically, while noting the general city-boundary
  range (D≈1.1–1.4) and city-form range (D≈1.5–2.0) as class-general,
  snippet-verified, non-exemplar-specific context.

---

## 9. Extreme event statistics

- **City-size distribution (Zipf/power-law tail)**: covered in Section 5
  above (α=2.37, CSN "moderate" verdict). This IS the class's primary
  extreme-event/heavy-tail statistic (largest cities are the "extreme
  events" of the size distribution).
- **No other extreme-event statistic specific to cities as a system
  (e.g., urban fire sizes, riot sizes, infrastructure failure sizes) was
  searched for or recovered this session** — candidates for follow-up
  (urban fire size distributions, protest/riot size distributions have
  published power-law claims in the sociophysics literature but were not
  investigated here). **unknown.**

---

## 10. Temporal correlation

- **Traffic congestion / Macroscopic Fundamental Diagram (MFD) hysteresis**:
  well-documented qualitative phenomenon — flow-density relationships in
  urban road networks show path-dependent hysteresis loops (loading vs.
  unloading of congestion trace different curves). Key reference:
  Mahmassani, H.S. and collaborators, multiple papers on hysteresis in
  freeway/network fundamental diagrams (loop-detector data from Chicago,
  Portland, Irvine); Geroliminis & Sun (2011), "Hysteresis phenomena of a
  Macroscopic Fundamental Diagram in freeway networks," *Transportation
  Research Part B*. **Snippet-verified** — titles/findings characterized
  from search summaries; no paper opened directly, and **no single
  citable numeric hysteresis-loop magnitude (e.g., a specific Sv-style
  figure, analogous to the AMOC ~0.4 Sv anchor example) was recovered.**
  Evidence status: **qualitative** phenomenon confirmed to exist in the
  literature; quantitative loop-size figure is **unknown**.
- **No Hurst-exponent or other long-range-correlation figure for any city
  signal (e.g., population growth, energy demand, traffic volume time
  series) was recovered this session.** **unknown.**

---

## 11. Degree distribution (network systems only)

- Cities are not usually modeled as a single network in the catalog's
  network-systems sense (interaction_topology for "cities" as a class is
  more plausibly hierarchical-mixed/field, not a pure network) — but
  transportation and mobility networks WITHIN cities are network objects.
  No specific degree-distribution exponent for an intra-urban network
  (street network, transit network, mobility flow network) was recovered
  this session. Louf, Roth & Barthelemy (2014), "Scaling in Transportation
  Networks," *PLOS ONE* 9(7):e102007, is a strong candidate primary source
  for this (title/journal/volume **snippet-verified**, not read) — flagged
  for follow-up rather than filled here. **unknown** for this sweep.

---

## 12. Modularity (urban network community structure)

- The anchor's suggestion of a Q value for city mobility-network community
  detection (à la Louvain/Girvan-Newman applied to commuting flows) was
  actively searched for. Multiple methodological papers on applying
  modularity maximization / Louvain community detection to urban commuting
  and mobility networks were found (e.g., work characterized as
  "Arcaute et al. (2015)... network science measures including modularity"
  in the context of "Constructing cities, deconstructing scaling laws";
  general urban-mobility community-detection literature, e.g. Kim & Lee
  2025 on Seoul transit communities). **No specific citable Q value for
  NYC or Tokyo mobility networks was recovered** — search results
  characterized methods and general modularity-value ranges (Q>0.3
  indicates "clear community structure" as a rule of thumb) but did not
  surface a pinned NYC- or Tokyo-specific number with a clean citation.
  **Remains [unverified]/unknown, as flagged in the assignment brief** —
  this sweep did not resolve it. Best candidate follow-up: Arcaute, E. et
  al. (2015), "Constructing cities, deconstructing scaling laws,"
  *J. R. Soc. Interface* — title/general topic **snippet-verified**, not
  read; should be fetched directly in a follow-up pass.

---

## 13. Tipping elements / regime shifts

- No formal, quantified "list of N tipping elements" analogous to
  Armstrong McKay et al. 2022's 16 climate tipping elements exists for
  cities as a class. Literature found is qualitative/conceptual:
  "Urban Tipping Points" research network (urbantippingpoints.org) and
  papers using "tipping point" as a metaphorical leverage-point framing
  for sustainability transitions (e.g., work on infrastructure regime
  shifts under climate stress, water-distribution-system resilience
  studies using multi-agent simulation to characterize regime-shift
  behavior). **Snippet-verified**, general characterization only — no
  specific city-system tipping element (with named threshold/mechanism,
  analogous to AMOC collapse or permafrost thaw) was pinned down with a
  number. Evidence status: **qualitative** (susceptibility rubric
  applies); the quantitative count+list sub-field is **unknown/not
  formally established** for this class, distinct from climate's
  formally-enumerated 16.

---

## 14. Cascade statistics

- **2003 Northeast Blackout** (relevant infrastructure-cascade event
  affecting NYC): affected an estimated **50 million people** across 8 US
  states + Ontario, including New York City; triggered by an Ohio
  transmission-line/tree contact and a software alarm-system bug at
  FirstEnergy, cascading over ~3 hours; economic losses estimated up to
  **$10 billion** (Electricity Consumers Resource Council estimate).
  Source: Wikipedia "Northeast blackout of 2003" aggregating NERC/DOE
  investigative reports. **Snippet-verified** — the underlying primary
  investigative report (US-Canada Power System Outage Task Force, 2004)
  was not fetched/read directly this session.
- **General power-grid cascading-failure size-distribution claims** (e.g.,
  Dobson et al. 2007 blackout-size power-law claim) are already flagged in
  the schema itself as **measured-disputed** (cascade_susceptibility
  column note) — this is a cross-cutting infrastructure statistic, not
  city-specific, and was not re-verified this session; carry the existing
  schema-level flag forward rather than re-deriving.
- **No city-specific cascade statistic (e.g., a fitted blackout-size or
  cascading-infrastructure-failure exponent specifically for NYC or
  Tokyo)** was recovered. **unknown.**

---

## 15. Chaos / Lyapunov / predictability

- No published Lyapunov exponent, predictability-horizon figure, or
  low-dimensional deterministic-chaos claim specific to city dynamics
  (population, economic, or traffic time series) was searched for or
  recovered this session. Per the schema's `no-market-chaos` rule
  (financial markets: nonlinear dependence yes, deterministic chaos no
  evidence) — an analogous "nonlinear yes / chaos unproven" verdict is
  plausible for urban systems generally but was NOT independently
  verified this session for cities specifically. **unknown**, flagged
  for a dedicated follow-up search (traffic-flow chaos literature, e.g.
  car-following-model bifurcation studies, is a plausible source but was
  not investigated here).

---

## 16. Canonical review sources for the entry source list (3–5 recommended)

1. **Bettencourt, L.M.A., Lobo, J., Helbing, D., Kühnert, C., West, G.B.
   (2007). "Growth, innovation, scaling, and the pace of life in cities."
   *PNAS* 104(17), 7301–7306.** — Primary-read in Phase 1; the foundational
   urban-scaling-exponent paper. Already in `panel-spec.yaml` sources as
   `bettencourt2007`.
2. **Bettencourt, L. & West, G. (2010). "A unified theory of urban
   living." *Nature* 467(7318), 912–913.** DOI: 10.1038/467912a.
   **Snippet-verified** citation (title/vol/pages/DOI cross-confirmed
   across multiple independent aggregators: mindat.org, Nature.com,
   RePEc, ADS — high citation confidence despite not being primary-read).
   Short, highly-cited Nature comment framing cities as a complex-systems
   research program; strong candidate as a canonical review-level source.
3. **Batty, M. (2012). "Building a science of cities." *Cities* 29,
   S9–S16.** **Snippet-verified** citation (semanticscholar/researchgate/
   academia.edu cross-confirm the venue and pagination; PDF fetch attempt
   at complexcity.info failed with a connection error this session, so
   full text was NOT read). Canonical review framing cities explicitly as
   complex systems requiring a dedicated scientific approach.
4. **Batty, M. & Longley, P. (1994). *Fractal Cities: A Geometry of Form
   and Function.* Academic Press.** **[unverified — not fetched/read this
   session, characterization via secondary sources only]** — the
   foundational text for spatial/fractal treatment of urban form; underlies
   Section 8 above. Include with a clear "not primary-read" flag.
- Bettencourt, L. (2021). *Introduction to Urban Science: Evidence and
  Theory of Cities as Complex Systems.* MIT Press — surfaced via Santa Fe
  Institute news page as a recommended comprehensive guide; **not
  independently verified/read this session**, offered as a 5th candidate
  only if the entry wants a textbook-length treatment alongside the four
  papers above.

---

## Summary table (see final response for the condensed version)

All values below are cross-referenced to the section that documents their
full citation and primary-read/snippet-verified status; this table is a
navigation aid only, not a replacement for the sections above.

| # | Quantity | Section |
|---|---|---|
| 1 | Spatial extent (NYC, Tokyo) | §1 |
| 2 | Instance population (megacity counts) | §2 |
| 3 | NYC/Tokyo population | §3 |
| 4 | Urban scaling exponents β | §4 |
| 5 | Zipf city-size α | §5 |
| 6 | Numerosity | §6 |
| 7 | Energy rate density Φ_m | §7 |
| 8 | Fractal dimension | §8 |
| 9 | Extreme event statistics | §9 |
| 10 | Temporal correlation | §10 |
| 11 | Degree distribution | §11 |
| 12 | Modularity | §12 |
| 13 | Tipping elements | §13 |
| 14 | Cascade statistics | §14 |
| 15 | Chaos/predictability | §15 |
| 16 | Canonical review sources | §16 |

---

## Session-level caveats (apply across the whole report)

- The UN World Urbanization Prospects 2018 Highlights PDF and the full WUP
  2018 Report PDF both failed to parse as extractable text via WebFetch in
  this session (binary/compressed stream error) — this is why the precise
  "number of cities >1M population" figure (as opposed to the >10M
  megacity counts, which WERE recovered via a secondary HTML press page)
  remains unknown. Re-attempt with a dedicated PDF-text tool in a follow-up
  session.
- One direct PDF fetch (complexcity.info, Batty's "Building a science of
  cities") failed with a connection error (ECONNREFUSED) — citation
  metadata was still recoverable via secondary aggregators, but full text
  was not read.
- No claim in this report should be read as primary-read unless explicitly
  marked as such; the default status for anything sourced via WebSearch
  snippets in this session is **snippet-verified**, one tier below the
  Phase-1 standard of full-text primary reads.
