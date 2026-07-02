# Quantitative source sweep — global-economy

Date: 2026-07-02. Scope: research sweep only, per task brief. No catalog file
touched. Written against `schema/panel-spec.yaml` (frozen v1.0) column list
and filling_rules. Exemplars in scope: World economy in aggregate (primary,
singleton-at-top-scope); national economies (comparative/component evidence,
via Bettencourt et al. 2007's GDP-scaling rows); firms (candidate atomic
economic agent, via Zipf/power-law firm-size literature).

---

## 1. The atomicity / instance_population scoping call (read first)

Read in full this session: `data/classes/the-internet.yaml` (entire file,
esp. `exemplars`, `scoping_note`, and `instance_population` blocks).

**Decision (recommended to the drafting agent, not yet written into any
entry): global-economy should NOT simply mirror the-internet's flat
singleton framing. It needs a two-level declaration, explicitly justified,
because — unlike the Internet, which is genuinely single-layer at the scale
this catalog scores (AS-graph topology, one dual-atomicity split covering
both structure and traffic) — the global economy has a real, external
tension the-internet does not: the class-scope object ("the global
economy") is n=1, but a large, statistically usable population of
lower-level instances (national economies, n~195; firms, n~5.5 million in
the U.S. alone per Axtell 2001, see §3) sits directly beneath it and is
exactly what most of the catalog's citable quantitative material (Zipf
firm-size, Bettencourt GDP-scaling) actually measures.**

Proposed structure for the drafting agent (not itself a filled entry):
- `instance_population` (class-level column, per the schema's own
  definition "how many instances of the class exist... class-level only"):
  record **n = 1** for "the global economy" as the class's top-scope
  object, explicitly parallel to the-internet's treatment — this is what
  the column is actually asking (how many instances of *this class*
  exist), and the class here, like the-internet, is a singleton at the top
  of a containment hierarchy.
- A **separate, explicit scoping_note statement** (not a numeric override of
  instance_population, but prose reasoning attached to the entry, same
  place the-internet.yaml keeps its scoping_note) that the class is
  DUAL-LEVEL in a stronger sense than the-internet's dual-atomicity: (a) at
  class-general/global scope, n=1, no population exists to support
  class-level cross-sectional statistics about "global economies"; (b) a
  real sub-population of ~195 national economies exists one level down
  and *does* support statistical claims (Bettencourt's city-GDP scaling
  rows are themselves evidence of this kind of population-level regularity
  one level further down, at the city level); (c) firms are a third,
  much larger population (n~5.5e6 in the U.S. alone, Axtell 2001) that
  functions as the actual atomic/component level for numerosity and
  component_ontology, distinct from both.
- This is NOT the same move as stars.yaml's "galaxies hosting many stars"
  framing (that is a compositional/part-of relationship — stars are
  literally parts of galaxies). National economies are not "parts of" the
  global economy in the component_ontology sense so much as they ARE the
  global economy's decomposition into interacting units — closer to how
  "traders" are NYSE's atoms. The cleanest resolution: **score
  instance_population at n=1 (class-general, the entry's own scope item),
  but declare national economies (~195) as the entry's
  `component_ontology` population** (the atomic interacting parts, per
  atomicity-convention: "the lowest-level components at which the
  system's CHARACTERISTIC dynamics operate" — trade flows, capital flows,
  and macro interdependence operate at the national-economy level, not the
  firm level, for the class's OWN characteristic dynamics), **with firms
  flagged as a second, deeper population relevant to specific columns**
  (extreme_event_statistics' Zipf claim, numerosity's total count) but not
  the primary atomicity choice — parallel to how the-internet declares AS
  nodes as the network-structure atom while separately tracking human
  users/devices as adjacent populations, not the network's dynamical atoms.
  **This is a recommendation, not a resolved fact — the drafting agent
  should state the reasoning explicitly in the entry per
  filling_rules.atomicity-convention, and the orchestrator should treat it
  as open to revision.**

---

## 2. spatial_extent

**Value: whole-Earth scale, order of magnitude ~4e7 m** (Earth's
circumference, ~40,075 km), by the same geometric-inference logic
the-internet.yaml already uses for its own spatial_extent (value 4e7,
evidence_status: qualitative, "[unverified — model-knowledge order-of-
magnitude estimate, not independently sourced]"). No dedicated "spatial
extent of the global economy" measurement paper exists or would be
expected to exist; this is a structural/geometric fact (the economy is
planetary in extent — production, trade, and finance span every inhabited
continent), not a measured quantity. **Recommend reusing the-internet's own
framing and evidence_status (qualitative) rather than treating this as a
citable figure.**

---

## 3. numerosity / component_ontology / instance_population (combined —
these three columns are entangled for this entry, see §1)

### National economies (candidate primary atomic unit, per §1's recommendation)
- **n ~ 195** countries/economies (193 UN member states + 2 observer states
  [Holy See, State of Palestine], widely-cited figure). **[unverified —
  model knowledge / general public record; not independently primary-read
  from a UN primary source this session, though the figure is
  uncontroversial and stable]**. Evidence_status: qualitative if used as a
  headline count without a UN primary citation; a citable alternative is
  the number of economies covered by World Bank / IMF WEO statistical
  databases, which is typically ~190-196 depending on inclusion criteria
  (not independently confirmed this session).

### Firms (candidate secondary/deeper population — see §1)
- **n = 5,541,918** U.S. firms with at least one employee, 1997 (U.S.
  Census Bureau data, as tabulated in Axtell 2001, Table 3) — **PRIMARY-READ
  this session** (full-text pdftotext extraction of the Science 293:1818
  PDF via an author/journal mirror). Plus **15.4 million "nonemployer"
  business entities** (self-employed/partnerships) in the same year,
  bringing total U.S. business entities to ~2.1e7. This is a U.S.-only
  figure — no global firm count was located with comparable rigor (see
  below).
- **Global business count: ~3.0e8 - 4.3e8** (300-430 million, 2024/2025
  estimates) — **[unverified — model knowledge / secondary aggregator
  figures only]**, not traced to a single primary statistical source
  during this sweep; multiple estimates diverge (Statista-cited ~358.7
  million for 2025 vs. a separately cited 300-430 million range), and the
  same informal-sector undercounting problem the-internet's device-count
  section flags (measured-disputed, methodology-dependent) applies here.
  World Bank maintains an "Entrepreneurship Database" (worldbank.org/en/
  programs/entrepreneurship/total-number-of-firms) covering ~188 economies
  via business-registry administrative data, which would be the correct
  primary source for a citable aggregate figure, but its own global total
  was not extracted this session (page not fetched in full). **Recommend
  evidence_status: unknown or measured-disputed for a global firm count
  pending a direct World Bank Entrepreneurship Database fetch.**

### Numerosity as a multi-typed list (recommended framing, parallel to the-internet's numerosity block)
- national economies: ~195 (qualitative)
- firms (U.S., 1997, Census, with employees): 5,541,918 (measured, primary-read)
- firms (U.S., 1997, Census, all business entities incl. nonemployer): ~2.1e7 (measured, primary-read)
- firms (global): ~3-4e8 (measured-disputed, not primary-read)
- human participants (workers/consumers, out-of-scope(human) per the D2
  scope line, parallel to the-internet's human_users row): ~8.2e9 world
  population (2024, standard UN figure) — **[unverified — model knowledge]**,
  not independently fetched this session.

---

## 4. characteristic_timescales

No dedicated primary source read this session for macro timescales; the
following are standard, uncontroversial economics-literature figures,
recorded as **[unverified — model knowledge], qualitative, low confidence**
pending a citable source:
- transaction/price-adjustment timescale: ~1e0-1e5 s (seconds for a single
  trade to days/weeks for price adjustment in many markets)
- business cycle: ~1e8-1e9 s (NBER-style business cycles run ~2-10 years,
  i.e., ~6e7-3e8 s; "Kitchin" inventory cycles ~3-5 yr, "Juglar" fixed-
  investment cycles ~7-11 yr — all standard periodization schemes, none
  independently verified this session)
- system lifetime: the global economy as an integrated world-market system
  is often dated from post-WWII Bretton Woods (1944) or more expansively
  from the emergence of long-distance trade networks millennia ago,
  depending on scope — **no single defensible "start date" exists and this
  should be flagged as a scoping ambiguity, not resolved by picking one**,
  parallel to how the-internet.yaml flags its own 1969-vs-1983 ambiguity
  but with a much larger disagreement window here (centuries, not 14
  years).

**Recommend the drafting agent treat this column as a confirmed literature
gap requiring a dedicated follow-up search (NBER business-cycle dating
committee figures would be the correct primary source for the business-
cycle row) rather than filling from memory beyond what is stated here.**

---

## 5. energy_rate_density (Phi_m)

**Power input:** world primary energy consumption **~620 EJ/yr (2023)**,
equivalently ~607 EJ/yr (2022) — **Energy Institute, 2024 Statistical
Review of World Energy** (successor to the BP Statistical Review).
[snippet-only this session: figures drawn from secondary summaries
(Carbon Brief, Forbes, Statista coverage of the report); the Energy
Institute's own report PDF was not directly opened]. 620 EJ/yr = 6.2e20
J/yr, converting to an average continuous power draw of ~1.97e13 W — this
is consistent with, and slightly above, the task brief's seed figure of
"~6e20 J/yr." This closely parallels the-internet.yaml's own energy
treatment (a real, findable power figure) but with the opposite mass
problem described next.

**Mass input: NOT COMPUTABLE.** There is no meaningful, citable "mass of
the global economy" figure — unlike the-internet (which at least has an
unsourced, ultimately-rejected infrastructure-mass folklore figure to flag
and reject), no comparable mass claim for the global economy was found or
would be expected to exist; GDP is a value-flow measure, not a mass
measure, and no standard "total material stock of the world economy"
metric with the needed citability was located this session (candidate
concept: "global material footprint" / material stock accounting, e.g.
UNEP's International Resource Panel reports material flows in gigatonnes/
yr, which is a FLOW not a STOCK, and was not verified this session).
**Recommend energy_rate_density: unknown, evidence_status: unknown,
directly parallel to the-internet's own verifier_flag pattern
(mass-figure-rejected-unsourced) — but here the mass figure is not even a
rejected folklore claim, it is a confirmed absence of any candidate.**

---

## 6. fractal_dimension_spatial

**No candidate source located this session.** Unlike cities (boundary
fractal dimension) or the-internet (router/AS geographic placement,
Yook/Jeong/Barabasi 2002), "the spatial structure of the global economy"
has no obvious single measurand a fractal-dimension study would target —
candidate measurands (distribution of economic activity/GDP density across
space, trade-network node geography) were not searched this session.
**Recommend: unknown**, flagged for a follow-up search against economic-
geography / "urban scaling" spatial literature (Bettencourt-style; note
this would likely be a CITY-level finding reused with the same
double-counting caveat as the GDP-scaling rows, not a global-economy-
specific finding).

---

## 7. extreme_event_statistics

**Two separate measurands, per filling_rules.measurand-required and the
temporal-event / static-cross-sectional distinction:**

### (a) Firm-size distribution — static-cross-sectional
**PRIMARY-READ this session** (full text, Axtell, R.L. (2001). "Zipf
Distribution of U.S. Firm Sizes." Science 293(5536), 1818-1820. DOI:
10.1126/science.1062081):
- Employee-based firm size, 1997 Census data (N=5,541,918 firms with
  employees): OLS log-log regression slope **-2.059 (SE 0.054, adjusted
  R^2=0.992)**, giving Pareto tail exponent **alpha = 1.059** (so close to
  the special case alpha=1, "the Zipf distribution," that the paper labels
  it Zipf-distributed).
- Receipts-based firm size (same Census data): OLS log-log regression
  slope gives **alpha = 0.994** (essentially exactly alpha=1).
- All-business-entities (with and without employees, 1992-1997 series):
  alpha consistently in the **0.994-1.004** range across every year
  1988-1997 (Table 3 in the paper, all years given).
- Confirmed **NOT present** in Clauset-Shalizi-Newman's (2009) 24-dataset
  table (research/phase1/quantitative-backbone.md's own primary-read
  transcription, re-checked directly against the full table this session
  — no firm-size row exists among the 24 datasets; "Net worth of richest
  Americans" is the closest wealth-adjacent CSN row and is explicitly
  REJECTED as a power law by CSN, p=0.00 — a different quantity from firm
  size, not to be conflated).
- **Per filling_rules.power-law-rigor**: Axtell's method is **ordinary
  least-squares log-log regression**, explicitly NOT the CSN-2009-grade
  maximum-likelihood-plus-goodness-of-fit-testing standard (no KS test, no
  comparison against alternative distributions such as log-normal is
  reported in the paper). **This claim must enter the catalog as
  evidence_status: measured-untested**, exactly the same status CSN's own
  paper assigns by implication to any power-law claim fit only by
  pre-2009-style OLS regression. Axtell's own text is confident
  ("unambiguous," "the Zipf distribution... describes the data... over
  nearly six decades of firm size") but that confidence predates the
  CSN methodological standard this catalog requires; the strength of the
  fit (adjusted R^2 = 0.99+ across multiple independent measures and 10
  years of data, Table 3) is genuinely unusual among power-law claims and
  worth noting as a mitigating factor, but does not substitute for
  CSN-style testing.
- Measurand_type: **static-cross-sectional** (rank-size-style distribution
  of firm sizes at a point in time, no event/frequency structure) — same
  category as Zipf city-size and word-frequency claims elsewhere in the
  catalog, explicitly NOT a temporal-event distribution.
- Level: exemplar (U.S. firms specifically; the paper explicitly flags
  that non-U.S. firm-size Zipf behavior is "a conjecture that can only be
  tested once individual governments make available... data that purport
  to be comprehensive" — i.e., NOT yet established as a class-general
  claim across all national firm populations, only as a robust U.S.
  finding across multiple years/definitions).

### (b) Recession/crisis event statistics — temporal-event
**No source located this session.** Candidate framings (GDP-contraction
severity distributions, financial-crisis frequency/magnitude a la
Reinhart & Rogoff's "This Time Is Different") were not searched. **Flagged
as an open literature-search item for the drafting sweep**, not resolved
here — recommend evidence_status: unknown until searched.

---

## 8. temporal_correlation

**No source located/verified this session.** Candidate measurand: GDP
growth-rate time series (Hurst exponent / long-range dependence). A
WebSearch this session found general Hurst-exponent methodology
literature but no macro/world-GDP-specific study with a citable H value —
this is a confirmed gap for this sweep, not a resolved finding. Business-
cycle literature (see §9, chaos_sensitivity) is the adjacent, actually-
verified body of work; it addresses nonlinearity/chaos, not long-range
correlation specifically, and should not be conflated with this column.
**Recommend: unknown**, flagged for a follow-up search targeting
econophysics/macro-time-series literature specifically (e.g., searches for
"detrended fluctuation analysis GDP" or "long memory business cycle" were
not run this session).

---

## 9. chaos_sensitivity (no-market-chaos filling rule — VERIFIED, not just assumed)

**Confirmed by direct verification, not by unchecked inheritance from
financial-markets.yaml:**
- **Brock, W.A. & Sayers, C.L. (1988). "Is the Business Cycle Characterized
  by Deterministic Chaos?" Journal of Monetary Economics 22(1), 71-90.**
  [snippet-verified this session via multiple independent secondary
  summaries — abstract/findings confirmed, full text not fetched]. Finding:
  weak-to-absent evidence of low-dimensional deterministic chaos in U.S.
  macroeconomic time series (employment 1950-1983, unemployment
  1949-1982, monthly industrial production, pig-iron production
  1877-1937); genuine NONLINEARITY was detected via the BDS test in
  several of these series, but the authors explicitly caution their tests
  "may have been too weak to detect" chaos, i.e., this is a
  weak/non-rejection result, not a strong disproof.
- Corroborating secondary finding (same search, same confidence level):
  Frank & Stengos (1988, Canadian data) and Frank et al. (1988,
  international data) are reported to have reached the same "no evidence
  of chaos" conclusion independently, broadening the finding beyond a
  single country/dataset — **[snippet-only, secondary-source attribution,
  original papers not fetched]**.
- **This is a genuine, directly-verified parallel to financial-markets.yaml's
  own chaos_sensitivity treatment** ("nonlinear dependence: yes,
  deterministic chaos: no evidence," evidence_status: measured-disputed,
  score 1) — recommend global-economy score identically (score ~1,
  nonlinear dependence yes / low-dimensional chaos no accepted evidence),
  explicitly citing Brock & Sayers 1988 as the business-cycle-literature
  analog to financial-markets' BDS-test citation, per the task's
  instruction to verify rather than assert the parallel. Evidence_status:
  measured-disputed (published, but the authors' own “tests may be too
  weak” caveat and 1988 vintage mean this is not an uncontested null
  result — parallel treatment to financial-markets, not identical wording).

---

## 10. tipping_transitions / cascade statistics / criticality

**No dedicated formal literature located or searched deeply this session**
beyond the chaos-sensitivity item above. Candidate topics not investigated:
financial-contagion cascade models (distinct from financial-markets.yaml's
own scope, which is markets/exchanges specifically, not the broader real
economy), supply-chain cascade literature (post-2020 relevance),
sovereign-debt-crisis contagion. **Flagged as open for the drafting sweep**;
recommend unknown/qualitative floor scores pending a dedicated search,
consistent with filling_rules.no-guessing.

---

## 11. degree_distribution — NOT APPLICABLE

Per panel-spec.yaml, this column is explicitly "network systems only." The
global economy's interaction_topology is more plausibly hierarchical-mixed
or network (trade/capital-flow networks between the ~195-economy
population are a real network object — international trade network
literature, e.g. gravity-model and complex-network trade studies, was NOT
searched this session and is flagged as a follow-up). If the drafting
agent scores interaction_topology as network or hierarchical-mixed, this
column becomes live and should be searched (candidate: world trade network
degree distribution / node-strength studies — a distinct literature from
Bettencourt's city-scaling and from CSN's dataset table, neither of which
covers this).

---

## 12. Hidalgo & Hausmann (2009) — economic complexity index (ECI)

**PRIMARY-READ this session** (Hidalgo, C.A. & Hausmann, R. (2009). "The
Building Blocks of Economic Complexity." PNAS 106(26), 10570-10575. DOI:
10.1073/pnas.0900943106) — full-text PDF fetched and extracted via
pdftotext.
- Core method: the **"Method of Reflections"** — trade data (Standard
  International Trade Classification, SITC revision 4, 4-digit level; also
  cross-checked against COMTRADE Harmonized System and NAICS
  classifications) is interpreted as a bipartite network M_cp connecting
  countries (c) to the products (p) they export (a country counts as an
  exporter of product p if its Revealed Comparative Advantage exceeds a
  threshold). The method iteratively calculates a symmetric family of
  variables for both node types: for countries, k_c,N (generalized
  measures, with k_c,0 = **diversity**, the number of products a country
  exports); for products, k_p,N (with k_p,0 = **ubiquity**, the number of
  countries exporting that product). Even-order variables for countries
  are generalized ubiquity measures of their exports; odd-order variables
  relate to neighbor-diversity structure. The Economic Complexity Index
  (ECI) is built from this iterative family (confirmed the mechanism; the
  exact ECI normalization formula beyond kc,0/kc,1 was not fully extracted
  from the garbled table/figure regions of the PDF text this session, only
  the core reflections recursion and the diversity/ubiquity definitions).
- Confirmed finding: a strong **negative correlation between k_c,0 and
  k_c,1** (diversity vs. mean ubiquity of a country's exports) — the paper
  states this explicitly (Fig. 1C discussion) and reports a correlation of
  r=0.7 for a related within-model diagnostic (the exact headline
  ECI-vs-GDP correlation coefficient was not cleanly extracted from this
  session's PDF text; multiple r-values, e.g. Pearson correlations of
  0.63, -0.73, 0.59, -0.54, appear in figure-caption fragments in the
  extracted text but could not be reliably attributed to specific claims
  given the PDF's garbled table layout — **do not cite a specific
  ECI-income correlation coefficient without a cleaner re-extraction**).
- Headline qualitative claims (abstract, cleanly extracted): complexity
  measures derived this way are correlated with a country's income level,
  and DEVIATIONS from that relationship are predictive of future economic
  growth — i.e., countries with complexity higher than their current
  income would predict tend to grow faster, "suggesting that countries
  tend to converge to the level of income dictated by the complexity of
  their productive structures."
- **Recommended use**: this is strong candidate justification material for
  `information_processing` and/or `self_organization` rubric columns at
  the national-economy / global-trade-network level (the ECI construction
  itself is a form of distributed information aggregation — no single
  agent holds "the" complexity value, it emerges from the whole trade
  network's structure, structurally analogous to price formation in
  financial-markets' information_processing=4 justification). **This
  needs the drafting agent to write the specific rubric justification; the
  sweep only confirms the paper is real, primary-readable, and says what
  the task brief expected.**

---

## Summary table

| quantity | value | unit | source | primary-read-or-snippet |
|---|---|---|---|---|
| World GDP (nominal) | 105.69 (2023) / 111.3 (2024) | trillion USD | World Bank (via WorldBank data portal, secondary aggregation) | snippet (search-engine summary of World Bank portal; portal page itself returned no extractable figures on direct fetch) |
| World primary energy consumption | ~620 (2023) / ~607 (2022) | EJ/yr (~6.2e20 / 6.07e20 J/yr) | Energy Institute, 2024 Statistical Review of World Energy | snippet (secondary coverage; report PDF not opened) |
| U.S. firms with employees (1997) | 5,541,918 | count | Axtell (2001) Science 293:1818, Table 3, citing U.S. Census Bureau | **primary-read** (full text pdftotext) |
| U.S. firm-size Zipf exponent (employees) | alpha = 1.059 (OLS slope -2.059, SE 0.054) | dimensionless | Axtell (2001), same | **primary-read**; evidence_status: measured-untested (OLS, not CSN-grade) |
| U.S. firm-size Zipf exponent (receipts) | alpha = 0.994 | dimensionless | Axtell (2001), same | **primary-read**; measured-untested |
| CSN 2009 24-dataset table | firm size NOT present as a row | n/a | Clauset, Shalizi & Newman (2009), SIAM Review 51:661 | primary-read in Phase 1; re-confirmed absent this session |
| Global business count | ~3.0e8-4.3e8 (diverging estimates) | count | Statista/secondary aggregators, World Bank Entrepreneurship Database (not directly fetched) | snippet, measured-disputed |
| Number of countries | ~195 (193 UN members + 2 observers) | count | UN membership figures, general public record | snippet / [unverified — model knowledge] |
| Business-cycle deterministic chaos | no accepted evidence (nonlinearity: yes, via BDS test) | qualitative verdict | Brock & Sayers (1988), J. Monetary Econ. 22:71 | snippet (multiple independent secondary summaries; original paper not fetched) |
| Economic Complexity Index method | Method of Reflections; k_c,0=diversity, k_p,0=ubiquity; ECI predicts future growth deviations | method + qualitative finding | Hidalgo & Hausmann (2009), PNAS 106:10570 | **primary-read** (full text pdftotext) |
| Spatial extent | ~4e7 (Earth circumference order-of-magnitude) | m | geometric inference, no dedicated source (parallels the-internet.yaml) | qualitative, [unverified — model knowledge] |
| Fractal dimension, temporal correlation, tipping/cascade stats, timescales, degree distribution | not found | n/a | — | confirmed gaps, recommend `unknown` |

## Three biggest uncertainties

1. **The atomicity/instance_population scoping call is a genuine judgment
   call, not a lookup.** I recommend n=1 at class scope with national
   economies (~195) as the declared component_ontology population and
   firms as a deeper secondary population, but this is my proposed
   resolution, not a settled fact — the orchestrator/drafting agent should
   treat §1 as a starting hypothesis to accept, modify, or reject with its
   own reasoning, exactly as the task brief demanded.

2. **World GDP and global energy figures rest on search-engine-summarized
   secondary aggregation, not a directly-opened World Bank/IMF/Energy
   Institute primary table.** Direct fetches to data.worldbank.org,
   worldometers.info, tradingeconomics.com, and imf.org all failed (403
   Forbidden or empty extraction) this session; the $105.69T/$111.3T and
   620 EJ figures are convergent across multiple independent secondary
   summaries and are very likely correct, but carry snippet-only status
   and should be upgraded via a direct World Bank API/CSV pull or IMF WEO
   database query if a fully primary-read figure is required.

3. **Global (non-U.S.) firm-count and any temporal-event-type economic
   crisis/recession statistics remain complete gaps.** No citable global
   firm total was pinned to a single primary source, and no
   recession/crisis-severity distribution literature was searched at all
   this session (out of scope given time; flagged, not attempted) — both
   are likely recoverable (World Bank Entrepreneurship Database for the
   former; Reinhart & Rogoff-style crisis chronologies for the latter) but
   require dedicated follow-up fetches before entering the catalog above
   `unknown`/qualitative status.
