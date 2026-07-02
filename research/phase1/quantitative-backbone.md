# Quantitative Backbone — Cross-System Metrics for the Catalog of Complexity

**Status of web verification:** Web access succeeded throughout this research session. Primary sources were retrieved and read directly (full text/tables extracted from PDFs) for: Chaisson (2001/2010/2011), Clauset-Shalizi-Newman (2009), Newman (2003), and Bettencourt et al. (2007). Secondary/supporting facts (Gutenberg-Richter b-values, Zipf's law history, hurricane PDI/ACE definitions) were confirmed via web search snippets from multiple independent sources but I did not obtain full original-paper page images for those; where a specific number could not be pinned to a primary-source table, it is flagged **[unverified — model knowledge]** or **[not recovered]** below. No numeric values in this report were fabricated; anything I could not confirm is explicitly marked.

---

## 1. Eric Chaisson's Free Energy Rate Density (Φ_m)

**Definition:** Φ_m = free energy flow rate per unit mass of a system, in erg s⁻¹ g⁻¹ (cgs). It measures how much energy flows *through* a gram of a structure's mass per second — a mass-normalized power density. Chaisson proposes it as a single unifying quantitative complexity metric spanning physical, biological, and cultural systems.

**Primary sources retrieved in full:**
- Chaisson, E.J. (2001). *Cosmic Evolution: The Rise of Complexity in Nature*. Harvard University Press. [Not independently re-verified in this session — cited within the 2010/2011 paper as the origin of the framework; values below are from the follow-up papers which explicitly update/restate the 2001 table.]
- Chaisson, E.J. (2010/2011). "Energy Rate Density as a Complexity Metric and Evolutionary Driver." *Complexity* 16(3), 27–40. DOI: 10.1002/cplx.20323. **Full text retrieved and read.**

### Table 1 — Summary values (Chaisson 2010/2011, Table 1, "Average Energy Rate Densities")

| System | Age (Gya) | Φ_m (erg s⁻¹ g⁻¹) | In catalog scope? |
|---|---|---|---|
| Milky Way (galaxy) | 12 | 0.5 | astrophysical |
| Sun (star) | 5 | 2 | astrophysical |
| Earth's geosphere | 4 | 75 | geophysical/physical-chemical |
| Plants, generally | 3 | 900 | **out-of-scope (biological)** |
| Animals, generally | 0.5 | 40,000 | **out-of-scope (biological)** |
| Human society | 0 | 500,000 | socio-economic |

### Table 2 — Sun across its evolutionary stages (Chaisson 2010, Table 2)

| Stellar phase | Time relative to now (Gy) | Φ_m (erg s⁻¹ g⁻¹) |
|---|---|---|
| Newborn star | −5 | ~1 |
| Current Sun | 0 | 2 |
| Subgiant star | +6.2 | ~4 |
| Red giant | +6.9 | ~120 |
| AGB star | +7 (i.e. +17 total in one caption's labeling — text says ~0.7 Gy after leaving main sequence) | ~2,000 |

(Note: main text also gives a more massive 10-M☉ star example: Φ_m ≈ 600, 1800, 2600, 4000 erg/s/g while fusing H, He, C, and O respectively — illustrating how Φ_m rises through successive fusion cycles for massive stars, eventually ending in supernova.)

### Table 3 — Plants (Chaisson 2010, Table 3) — **out-of-catalog-scope, biological, included for context per instructions**

| Plant type | Time (Mya) | Example | Efficiency ε (%) | Φ_m (erg/s/g) |
|---|---|---|---|---|
| Tropical grasses (C4) | 30 | Maize, sugarcane | 2.5 | 22,500 |
| Temperate zone herbs | 125 | Wheat, tomato | 1.5 | 13,500 |
| Deciduous trees | 125 | Oak, beech | 0.8 | 7,200 |
| Evergreen trees | 350 | Pine, fir, larch | 0.6 | 5,500 |
| Protists | >470 | Phytoplankton, algae | 0.1 | 900 |

### Table 4 — Human society across cultural stages (Chaisson 2010, Table 4)

| Human type | Time (kya) | Φ_m (erg/s/g) | kW per person |
|---|---|---|---|
| Technologists | 0 | 2 × 10⁶ | 12.5 |
| Industrialists | 0.2 | 5 × 10⁵ | 2.7 |
| Agriculturists | 10 | 10⁵ | 0.6 |
| Hunter-gatherers | 300 | 4 × 10⁴ | 0.2 |
| Australopithecines | 3,000 | 2 × 10⁴ | 0.1 |

**Additional specific figures verified from the full text:**
- Sun today: L☉ ≈ 4×10³³ erg/s, M☉ ≈ 2×10³³ g → Φ_m ≈ 2 erg/s/g (this is the average rate of the Sun's H-fusion energy release per unit mass — matches Table 1).
- White dwarf (end state of Sun): Φ_m ≈ 0.002 erg/s/g, heading to Φ_m = 0 as a black dwarf.
- United States (present-day, most energy-intensive nation): Φ_m ≈ 2×10⁶ erg/s/g (matches "technologists" row).
- Global average citizen, 1970: Φ_m ≈ 5×10⁵ erg/s/g (80,000 kcal/day per capita, matches "industrialists" row).
- Earth's entire biosphere via photosynthesis: Φ_m ≈ 900 erg/s/g on average (out-of-scope, biological, included in Table 1/3 above).

**Coverage verdict for our 6 categories:**
| Category | Chaisson value recovered? |
|---|---|
| Astrophysical (Sun, stars, galaxies) | **YES** — Milky Way 0.5, Sun 2, red giant 120, AGB 2000, massive star fusion stages 600–4000 erg/s/g |
| Geophysical (Earth's geosphere; by extension climate) | **YES** — Earth's geosphere 75 erg/s/g (whole-Earth heat flow proxy; not a Katrina- or San-Andreas-specific value) |
| Physical-chemical (climate as a planetary system) | Partial — only via "Earth's geosphere" 75 erg/s/g; no separate climate-system Φ_m located |
| Socio-economic (NYC, NYSE) | **YES** — human society values (agriculturists→technologists, 2×10⁴ to 2×10⁶ erg/s/g); no city- or market-specific Φ_m located, but the "society"/"technologists" figure is the closest applicable proxy |
| Infrastructure/technological (Internet, ERCOT) | Partial — "machines"/"technologists" category (Φ_m ≥ 10⁶ erg/s/g, astronaut/ISS example ~10⁷ erg/s/g) is the generic proxy; no grid- or Internet-specific figure found |
| Cultural-informational (English) | **NOT recovered** — no language-specific Φ_m in Chaisson's papers |

Out of our 10 pilot systems specifically: Sun (direct value), San Andreas Fault (no fault-specific value; only generic "Earth's geosphere"), Katrina/climate (no storm-specific value; only generic "Earth's geosphere"), Mississippi (not found), NYC/NYSE (only generic "society"/"technologists" national-scale proxy, not city- or market-specific), Internet/ERCOT (only generic "machines"/"technologists" proxy), English (not found). **Directly computed, system-specific Φ_m values exist for only 1 of our 10 pilots (the Sun); the rest would require new calculation by the catalog team using Chaisson's method, not lookup.**

---

## 2. Power-Law Tail Exponents — Clauset, Shalizi & Newman (2009)

**Citation:** Clauset, A., Shalizi, C.R., Newman, M.E.J. (2009). "Power-law distributions in empirical data." *SIAM Review* 51(4), 661–703. arXiv:0706.1062. **Full text retrieved and read, including Tables 6.1, 6.2, 6.3.**

**Definition:** For p(x) ∝ x⁻ᵅ (continuous) or discrete equivalent, α is the fitted scaling exponent above a lower cutoff x_min, estimated via maximum likelihood; a Kolmogorov-Smirnov goodness-of-fit test yields a p-value (power law is "plausible" if p > 0.1, ruled out if p ≤ 0.1).

### Full Table (24 real-world datasets, exact values as printed in Table 6.1/6.2/6.3)

| Quantity | n | x̂_min | α̂ (±SE) | p-value | Verdict (power-law support) |
|---|---|---|---|---|---|
| Frequency of word use (Moby Dick) | 18,855 | 7±2 | 1.95(2) | 0.49 | **GOOD** — only dataset rated "good"; no alternative distribution fits as well |
| Protein interaction degree (yeast) | 1,846 | 5±2 | 3.1(3) | 0.31 | moderate |
| Metabolic degree (E. coli) | 1,641 | 4±1 | 2.8(1) | 0.00 | **none** — ruled out |
| Internet degree (AS level, May 2006) | 22,688 | 21±9 | 2.12(9) | 0.29 | with cut-off |
| Telephone calls received (AT&T) | 51,360,423 | 120±49 | 2.09(1) | 0.63 | with cut-off |
| Intensity of wars (1816–1980) | 115 | 2.1±3.5 | 1.7(2) | 0.20 | moderate |
| Terrorist attack severity (1968–2006) | 9,101 | 12±4 | 2.4(2) | 0.68 | moderate |
| HTTP size (kilobytes) | 226,386 | 36.25±22.74 | 2.48(5) | 0.00 | **none** — ruled out |
| Species per genus (mammals) | 509 | 4±2 | 2.4(2) | 0.10 | with cut-off |
| Bird species sightings | 591 | 6679±2463 | 2.1(2) | 0.55 | moderate |
| Blackouts (customers ×10³) | 211 | 230±90 | 2.3(3) | 0.62 | moderate |
| Sales of books (×10³ copies) | 633 | 2400±430 | 3.7(3) | 0.66 | moderate |
| **Population of cities (×10³)** | 19,447 | 52.46±11.88 | **2.37(8)** | 0.76 | moderate |
| Email address book size | 4,581 | 57±21 | 3.5(6) | 0.16 | with cut-off |
| Forest fire size (acres) | 203,785 | 6324±3487 | 2.2(3) | 0.05 | with cut-off |
| Solar flare intensity (peak gamma-ray) | 12,773 | 323±89 | 1.79(2) | 1.00 | with cut-off |
| **Earthquake intensity (California, max amplitude ×10³)** | 19,302 | 0.794±80.198 | **1.64(4)** | 0.00 | **none** — ruled out |
| Religious followers (×10⁶) | 103 | 3.85±1.60 | 1.8(1) | 0.42 | moderate |
| Frequency of US surnames (×10³) | 2,753 | 111.92±40.67 | 2.5(2) | 0.20 | with cut-off |
| Net worth of richest Americans (mil. USD) | 400 | 900±364 | 2.3(1) | 0.00 | **none** — ruled out |
| Citations to papers (1981, by 1997) | 415,229 | 160±35 | 3.16(6) | 0.20 | moderate |
| Papers authored (mathematicians) | 401,445 | 133±13 | 4.3(1) | 0.90 | moderate |
| Hits to web sites (AOL, one day) | 119,724 | 2±13 | 1.81(8) | 0.00 | with cut-off |
| **Links to web sites (1997 crawl)** | 241,428,853 | 3684±151 | **2.336(9)** | 0.00 | with cut-off |

**Key finding stated explicitly by the authors:** "The p-values in Table 6.1 indicate that 17 of the 24 data sets are consistent with a power-law distribution. The remaining seven data sets... [HTTP connections, earthquakes, web links, fires, wealth, web hits, and the metabolic network] cannot plausibly be considered to follow a power law." Of the 17 "consistent" cases, only ONE — **word frequency in English text (Moby Dick)** — is rated "good" (convincingly power-law with no viable alternative). Most others are rated "moderate" (power law plausible but log-normal/stretched-exponential equally plausible) or "with cut-off" (power law with exponential cutoff strongly favored over pure power law).

**Coverage verdict — mapping to our 10 pilot systems:**
| Pilot system | Dataset in CSN table | α value | Passed test? |
|---|---|---|---|
| San Andreas Fault (earthquakes) | California earthquake intensity (max amplitude) | 1.64(4) | **NO — ruled out (p=0.00)**, though this uses amplitude not magnitude (see Gutenberg-Richter section below for the more standard magnitude-based b-value) |
| NYC (city size) | US city populations | 2.37(8) | moderate (not ruled out but log-normal equally good) |
| Internet | AS-level degree distribution | 2.12(9) | with cut-off (pure power law not preferred; power law + cutoff is) |
| English (word frequency) | Moby Dick word counts | 1.95(2) | **GOOD — the single cleanest power law in the whole paper** |
| Hurricane Katrina, ERCOT, NYSE, Mississippi, climate, Sun | — | — | **not directly present in this table** (though "wars," "terrorism," "wealth," "citations" etc. are tangentially socio-economic/financial-adjacent) |

No wealth/stock-market-return dataset with α is in this specific table (wealth here = net worth of richest Americans, ruled out as power law). No hurricane, river-network, power-grid-failure, or star dataset appears in this table.

---

## 3. Urban Scaling Exponents — Bettencourt, Lobo, Helbing, Kühnert & West (2007)

**Citation:** Bettencourt, L.M.A., Lobo, J., Helbing, D., Kühnert, C., West, G.B. (2007). "Growth, innovation, scaling, and the pace of life in cities." *PNAS* 104(17), 7301–7306. **Full text and Table 1 retrieved and read.**

**Definition:** Y(t) = Y₀ N(t)^β, where N = city population, Y = urban indicator. β > 1 = superlinear (increasing returns), β < 1 = sublinear (economies of scale), β ≈ 1 = linear (individual needs).

### Full Table 1 (exact values as printed)

| Indicator Y | β | 95% CI | Adj-R² | Observations | Country-Year |
|---|---|---|---|---|---|
| New patents | 1.27 | [1.25, 1.29] | 0.72 | 331 | USA 2001 |
| Inventors | 1.25 | [1.22, 1.27] | 0.76 | 331 | USA 2001 |
| Private R&D employment | 1.34 | [1.29, 1.39] | 0.92 | 266 | USA 2002 |
| "Supercreative" employment | 1.15 | [1.11, 1.18] | 0.89 | 287 | USA 2003 |
| R&D establishments | 1.19 | [1.14, 1.22] | 0.77 | 287 | USA 1997 |
| R&D employment | 1.26 | [1.18, 1.43] | 0.93 | 295 | China 2002 |
| Total wages | 1.12 | [1.09, 1.13] | 0.96 | 361 | USA 2002 |
| Total bank deposits | 1.08 | [1.03, 1.11] | 0.91 | 267 | USA 1996 |
| GDP | 1.15 | [1.06, 1.23] | 0.96 | 295 | China 2002 |
| GDP | 1.26 | [1.09, 1.46] | 0.64 | 196 | EU 1999–2003 |
| GDP | 1.13 | [1.03, 1.23] | 0.94 | 37 | Germany 2003 |
| Total electrical consumption | 1.07 | [1.03, 1.11] | 0.88 | 392 | Germany 2002 |
| New AIDS cases | 1.23 | [1.18, 1.29] | 0.76 | 93 | USA 2002-2003 |
| **Total housing** | **1.00** | [0.99, 1.01] | 0.99 | 316 | USA 1990 |
| **Total employment** | **1.01** | [0.99, 1.02] | 0.98 | 331 | USA 2001 |
| Household electrical consumption | 1.00 | [0.94, 1.06] | 0.88 | 377 | Germany 2002 |
| Household electrical consumption | 1.05 | [0.89, 1.22] | 0.91 | 295 | China 2002 |
| Household water consumption | 1.01 | [0.89, 1.11] | 0.96 | 295 | China 2002 |
| Gasoline stations | 0.77 | [0.74, 0.81] | 0.93 | 318 | USA 2001 |
| Gasoline sales | 0.79 | [0.73, 0.80] | 0.94 | 318 | USA 2001 |
| Length of electrical cables | 0.87 | [0.82, 0.92] | 0.75 | 380 | Germany 2002 |
| Road surface | 0.83 | [0.74, 0.92] | 0.87 | 29 | Germany 2002 |

**Additional figures given in main text (not table):**
- Resistive losses (electrical grid): β = 1.11 ± 0.06 (R² = 0.79) — evidence that grid networks are sub-optimal.
- Pedestrian walking speed vs. population: β = 0.09±0.02 (R² = 0.80) [also given more precisely as β=0.093, R²=0.80 in Figure 2 caption].
- New York City super-exponential growth fit: β = 1.09.
- Theoretical estimate range for superlinear exponents from an information-saturation argument: β ≈ 1.14–1.28.

**Categories (Table 2 of the paper):** β<1 → biological/economies-of-scale, sigmoidal growth; β>1 → sociological/wealth-and-innovation, boom/collapse dynamics; β=1 → individual maintenance, exponential growth.

**Coverage verdict:** This is a USA/China/EU-cities dataset, not a per-city-name table — it gives *population-scaling exponents across many cities within a system*, not a single value per named city. Directly usable as the "superlinear ~1.15" and "sublinear ~0.85" classes cited in the brief. Applicable to NYC only insofar as NYC is one of the ~300+ US MSAs in the underlying regression (not individually reported). No equivalent scaling exponent located for non-urban pilot systems (Sun, Katrina, San Andreas, Mississippi, Internet, ERCOT, NYSE, English) — this metric is inherently city-specific and does not generalize to the other 9 pilots except by loose analogy.

---

## 4. Gutenberg–Richter b-values for Fault Systems (California / San Andreas)

**Global b-value:** ~1.0, essentially universal across tectonically active regions. [Well-established seismological consensus — **unverified via primary GR 1944 paper in this session**, but confirmed via multiple independent secondary sources.]

**California-specific values found (via web search, multiple independent sources, not read as full original papers in this session):**
- Southern San Andreas Fault (within 20 km, M≥2.5): b = 1.03 ± 0.12, estimated via maximum-likelihood method. Source: Page & Felzer, "Southern San Andreas Fault Seismicity is Consistent with the Gutenberg-Richter Magnitude-Frequency Distribution" (cited via Caltech PDF, its.caltech.edu/~pagem/PageFelzer2015.pdf).
- Well-instrumented mainland California (recent decade, regional scale): b-value range 0.94±0.04 to 1.15±0.06.
- Individual fault segments in California: b-values can range more widely, roughly 0.5–1.5, sensitive to magnitude of completeness and observation window/region — i.e., segment-level b-values are noisier and less standardized than the regional ~1.0 figure.

**[unverified — model knowledge / secondary source only]** — I did not fetch or read the original Gutenberg & Richter (1944) paper or the Page & Felzer paper in full text in this session; the above are search-engine-summarized figures from what appear to be reputable seismological sources (ResearchGate-hosted, Caltech-hosted PDFs) but should be re-verified against primary literature before being placed in the catalog with full confidence.

**Coverage verdict:** Directly applicable to San Andreas Fault (1 of our 10 pilots) — recovered a regional value (b≈1.0) and a fault-specific value (b≈1.03±0.12 for southern San Andreas). Not applicable to other 9 pilots (b-value is fault-system-specific vocabulary, though the underlying Gutenberg-Richter *form* is structurally the same statistical object as a Clauset-style power-law tail exponent — see cross-reference to metric #2, where California earthquake data was explicitly tested and *rejected* as a pure power law by CSN's more rigorous statistical test, α=1.64, p=0.00. This is an important tension the catalog should flag: the classic seismological b-value (≈1) and the CSN power-law fit to the same underlying phenomenon (California earthquakes, α≈1.64, statistically rejected as power law) are not the same quantity and do not simply convert 1:1, because GR uses magnitude (log-amplitude) while CSN fit raw amplitude directly, and CSN also apply a much stricter goodness-of-fit test than traditional GR fitting.)

---

## 5. Zipf's Law — English Word Frequencies and City Sizes

**Definition:** Rank-frequency distribution p(rank) ∝ rank⁻¹ (or, in city-size framing: population ∝ 1/rank). Equivalent to a power law with exponent α ≈ 2 in the CSN probability-density convention (since Zipf's rank exponent 1 corresponds to a probability density exponent of 1+1/1 = 2 under the standard rank-size ↔ pdf transform), though conventions vary across the literature.

**English word frequency:**
- Verified via CSN (2009) full text (metric #2 above): fitted discrete power-law exponent for Moby Dick word-frequency data is **α = 1.95(2)**, and this is the single dataset in their 24-dataset study rated "good" — an excellent, uncontested power-law/Zipfian fit. This is effectively a modern, statistically rigorous confirmation of Zipf's law for English text.
- Newman (2003) review (in the network-metrics source, section III.C) references Zipf's original observation and notes Price's (1965) related finding that scientific productivity also follows k⁻α, generalizing the same rank-frequency phenomenology.

**City-size distributions:**
- Auerbach (1913) first observed the power-law/near-Zipf regularity in city sizes. Zipf (1949) popularized the "rank-size rule" with exponent ≈1 (in rank-size terms). **[Confirmed via multiple independent secondary/web sources — historical claim, not re-verified against Auerbach's or Zipf's original texts in this session.]**
- CSN's own fit to US city populations (Table 6.1, metric #2 above): discrete power-law α̂ = 2.37(8), rated only "moderate" support (log-normal fits comparably well; power law not ruled out but not uniquely favored either).
- Bettencourt et al. (2007) explicitly note in their references (footnote 31) that "Zipf's law... for the rank-size distribution of urban populations is just one example of the many scaling relationships presented in this paper" — i.e., they treat it as a known, separate prior result rather than re-deriving it themselves.
- Gabaix (1999), "Zipf's Law for Cities: An Explanation," *QJE* 114:739 — cited by Bettencourt et al. as the standard reference. **[title/journal/volume verified via search; full text not read in this session]**

**Heaps' law:** **[not recovered]** — no time was available to pursue this secondary request; flagging as not researched this session.

**Coverage verdict:** English (word frequency) — strong, rigorously verified value (α=1.95, CSN). Cities (NYC as example of city-size Zipf) — moderate-quality value recovered (α=2.37, CSN), consistent with but not identical to the "classic" Zipf exponent of 1 in rank-size form (rank-size exponent ≈1 corresponds to pdf exponent ≈2, so these are roughly consistent). No other pilot systems apply to this metric.

---

## 6. Network Structure Metrics — Mark Newman (2003), SIAM Review

**Citation:** Newman, M.E.J. (2003). "The structure and function of complex networks." *SIAM Review* 45(2), 167–256. arXiv:cond-mat/0303516. **Full text and Table II retrieved and read.**

**Definitions (as given in the paper):** n = number of vertices; m = number of edges; z = mean degree; ℓ = mean vertex-vertex (geodesic) distance; α = degree-distribution power-law exponent (if applicable); C⁽¹⁾ = clustering coefficient (triangle/triple ratio definition, Eq. 3); C⁽²⁾ = clustering coefficient (Watts-Strogatz local-average definition, Eq. 6); r = degree-assortativity coefficient (Pearson correlation of degrees across edges).

### Full Table II (rows most relevant to our pilot systems, exact values as printed)

| Network | Type | n | m | z (mean degree) | ℓ | α | C⁽¹⁾ | C⁽²⁾ | r |
|---|---|---|---|---|---|---|---|---|---|
| **Internet (AS level)** | undirected | 10,697 | 31,992 | 5.98 | 3.31 | 2.5 | 0.035 | 0.39 | −0.189 |
| **WWW (nd.edu domain)** | directed | 269,504 | 1,497,135 | 5.55 | 11.27 | 2.1/2.4 (in/out) | 0.11 | 0.29 | −0.067 |
| **WWW (Altavista crawl)** | directed | 203,549,046 | 2,130,000,000 | 10.46 | 16.18 | 2.1/2.7 (in/out) | — | — | — |
| **Power grid (Western US)** | undirected | 4,941 | 6,594 | 2.67 | 18.99 | — (exponential, not power-law) | 0.10 | 0.080 | −0.003 |
| Word co-occurrence | undirected | 460,902 | 17,000,000 | 70.13 | — | 2.7 | — | 0.44 | — |
| Roget's Thesaurus | directed | 1,022 | 5,103 | 4.99 | 4.87 | — | 0.13 | 0.15 | 0.157 |
| Citation network (SCI 1981-1997) | directed | 783,339 | 6,716,198 | 8.57 | — | 3.0/– | — | — | — |
| Physics coauthorship | undirected | 52,909 | 245,300 | 9.27 | 6.19 | — | 0.45 | 0.56 | 0.363 |
| Biology coauthorship | undirected | 1,520,251 | 11,803,064 | 15.53 | 4.92 | — | 0.088 | 0.60 | 0.127 |
| Math coauthorship | undirected | 253,339 | 496,489 | 3.92 | 7.57 | — | 0.15 | 0.34 | 0.120 |
| Film actors (collaboration) | undirected | 449,913 | 25,516,482 | 113.43 | 3.48 | 2.3 | 0.20 | 0.78 | 0.208 |
| Telephone call graph | undirected | 47,000,000 | 80,000,000 | 3.16 | 2.1 | — | — | — | — |
| Company directors | undirected | 7,673 | 55,392 | 14.44 | 4.60 | — | 0.59 | 0.88 | 0.276 |
| Email messages | directed | 59,912 | 86,300 | 1.44 | 4.95 | 1.5/2.0 | 0.16 | — | — |
| Metabolic network | undirected | 765 | 3,686 | 9.64 | 2.56 | 2.2 | 0.090 | 0.67 | −0.240 |
| Protein interactions | undirected | 2,115 | 2,240 | 2.12 | 6.80 | 2.4 | 0.072 | 0.071 | −0.156 |

**Direct hits for our pilot systems:**
- **Internet** (AS-level, n=10,697): z=5.98, ℓ=3.31, α=2.5, C⁽¹⁾=0.035, C⁽²⁾=0.39, r=−0.189 (disassortative — hubs connect to non-hubs).
- **ERCOT / power grid**: the table gives the **Western US power grid** (not ERCOT specifically, but the same class of system — high-voltage transmission network): n=4,941, m=6,594, z=2.67, ℓ=18.99 (notably large — power grids are NOT small-world), degree distribution is **exponential, not power-law** (no α given), C⁽¹⁾=0.10, C⁽²⁾=0.080, r=−0.003 (nearly uncorrelated). This is a well-known finding: power grids differ qualitatively from Internet/WWW in having no scale-free degree distribution.
- **English** (word co-occurrence network): n=460,902, m=17,000,000, z=70.13, α=2.7, C⁽²⁾=0.44. Also Roget's Thesaurus network as a related lexical-semantic network.
- **NYSE**: **not present** in this table — Newman's 2003 survey has no financial-market network row.
- **Sun, Katrina, San Andreas, Mississippi, NYC**: **not present** — these are not represented as networks in this classic table (Newman's table is Internet/WWW/social/biological/technological, not astrophysical/geophysical/hydrological/urban).

**Coverage verdict:** Internet — full row recovered directly. Power grid (ERCOT proxy via Western US grid) — full row recovered directly, though it is a *different* grid (western US, not Texas specifically) and predates ERCOT-specific modern studies. English — recovered via word co-occurrence and thesaurus networks. NYSE, Sun, Katrina, San Andreas, Mississippi, NYC — no rows in this specific 2003 table (would require a different, more recent source, e.g. a financial-network or urban-street-network paper).

---

## 7. Hurricane Energetics — Kerry Emanuel's Power Dissipation Index (PDI) and NOAA's Accumulated Cyclone Energy (ACE)

**Citation:** Emanuel, K. (2005). "Increasing destructiveness of tropical cyclones over the past 30 years." *Nature* 436, 686–688. **Not read in full text this session — definitions and headline findings confirmed via multiple independent web search summaries, not via direct PDF extraction.**

**PDI definition [confirmed via search, standard and widely cited]:** PDI is proportional to the integral over the storm's lifetime of the maximum sustained wind speed cubed (V_max³), summed over all 6-hour track observations while the storm is at least tropical-storm strength. This cubic scaling connects PDI to the physical power dissipated by surface drag, making it a genuine energy-dissipation-rate-type metric (unlike ACE, which uses V² and is more of an accounting index than a physical power measure).

**ACE definition [confirmed via search]:** ACE = sum of (V_max)² at each 6-hour interval while the system is ≥ tropical storm strength, divided by 10,000, in units of 10⁴ kt². This is NOAA's standard operational index (not Emanuel's).

**Headline finding of Emanuel (2005) [confirmed via search summaries]:** Global net tropical cyclone power dissipation (PDI) more than doubled over the 30 years prior to 2005, closely tracking tropical sea-surface temperature.

**Katrina/2005-season specific values found:**
- 2005 Atlantic season total ACE: **245.3 × 10⁴ kt²** [confirmed via search, cited as "most active season on record" at time of the paper] — season aggregate, not Katrina alone.
- 2005 season in Emanuel's PDI framework: **4.9× the historical mean power**, and **3.8× the estimated mean power under a global-warming-adjusted baseline** [confirmed via search summary of Emanuel's own framing].
- Hurricane Wilma (2005, same season as Katrina): ACE contribution ≈ 32 units (×10⁴ kt²) [confirmed via search].
- **Hurricane Katrina's own individual ACE or PDI value: NOT RECOVERED.** Multiple targeted searches did not surface a specific, citable numeric ACE or PDI value isolated to Katrina alone (as distinct from the 2005 season total). This should be pulled directly from NOAA's HURDAT2 best-track database or a dedicated per-storm ACE calculation if the catalog needs Katrina's individual number — flagging as **not recovered** rather than guessing.

**Coverage verdict:** A standard, cross-storm quantitative metric exists (PDI, and separately ACE) with clear units and a well-documented method — this is a genuine "flagship" candidate metric structurally analogous to Chaisson's Φ_m in that it's a single number per storm. However: (a) I could not verify Katrina's specific individual value in this session (only season aggregates and other storms' individual ACE), and (b) PDI/ACE apply only to tropical cyclones — they do not generalize to the other 9 pilot systems at all (this is a single-category metric, unlike Φ_m, Zipf/power-law exponents, or network metrics, which at least attempt cross-system generality).

---

## Summary Table for Orchestrator (all 7 metrics)

| Metric | Unit | # of 10 pilots with recoverable published values | Example value (system: value) | Key source |
|---|---|---|---|---|
| Chaisson Φ_m | erg s⁻¹ g⁻¹ | 1 direct (Sun); generic proxies exist for 3 more categories | Sun: 2; Milky Way: 0.5; human "technologists": 2×10⁶ | Chaisson, *Complexity* 16, 27-40 (2011) |
| Clauset-Shalizi-Newman power-law α | dimensionless | 4 (San Andreas/CA quakes, NYC, Internet, English) | English word freq: α=1.95 (GOOD fit); CA earthquakes: α=1.64 (REJECTED as power law) | Clauset et al., *SIAM Review* 51, 661 (2009) |
| Bettencourt urban scaling β | dimensionless | 1 (cities, generically — NYC only as one point among ~300+ MSAs) | New patents: β=1.27; gasoline stations: β=0.77 | Bettencourt et al., *PNAS* 104, 7301 (2007) |
| Gutenberg-Richter b-value | dimensionless | 1 (San Andreas) | Southern San Andreas: b=1.03±0.12 | Page & Felzer (via secondary search, unverified primary) |
| Zipf's law exponent | dimensionless (rank-size) | 2 (English, city sizes/NYC) | English words: α=1.95 (CSN); US cities: α=2.37 (CSN) | Clauset et al. (2009); Zipf (1949) historical |
| Newman network metrics | n, m, z, ℓ, α, C, r | 3 (Internet, ERCOT-proxy via Western US grid, English) | Internet: z=5.98, ℓ=3.31, α=2.5; Power grid: ℓ=18.99 (not small-world) | Newman, *SIAM Review* 45, 167 (2003) |
| Hurricane PDI/ACE | (m/s)³ or (kt)² summed | 1 (Katrina/hurricanes, but Katrina's own value not recovered) | 2005 season ACE: 245.3×10⁴ kt²; Katrina individual: not recovered | Emanuel, *Nature* 436, 686 (2005) — via secondary search |

## My 3 Biggest Uncertainties

1. **Gutenberg-Richter and hurricane PDI/ACE numbers came from web-search summaries, not directly-read primary sources.** Unlike Chaisson, CSN, Newman, and Bettencourt (all read as full-text PDFs with tables transcribed directly), the San Andreas b-value (1.03±0.12) and all hurricane figures (season ACE, Wilma's ACE, Katrina's "not found" status) rest on search-engine-generated summaries of papers I did not fetch and read myself. These should be re-verified against the original Gutenberg-Richter/Page-Felzer and Emanuel (2005)/NOAA HURDAT papers before being treated as citation-ready.

2. **Chaisson's Φ_m has essentially only ONE directly-computed value among our 10 pilot systems (the Sun).** The catalog's other systems (Katrina, San Andreas, Mississippi, NYC, NYSE, ERCOT, Internet, English) have no published system-specific Φ_m in Chaisson's papers — only generic category proxies ("Earth's geosphere" for planetary/climate systems, "society"/"technologists" for socio-economic and infrastructure systems). If the catalog wants Φ_m for all 10 pilots, someone will likely need to *compute* new values using Chaisson's method rather than look them up, which is a significant scope difference from what the brief may be assuming.

3. **The apparent conflict between the "classic" Gutenberg-Richter b≈1 for California earthquakes and CSN's statistical rejection of the same phenomenon as a power law (α=1.64, p=0.00, using raw shaking amplitude rather than moment magnitude) is a real tension I could not fully resolve.** These are different quantities (log-amplitude-binned magnitude-frequency vs. a KS-tested fit to raw amplitude data) and are not directly comparable, but the catalog authors should be aware that "does the San Andreas Fault follow a power law" has a different answer depending on which statistical convention and which underlying variable (magnitude vs. amplitude) is used — this nuance is easy to lose if only one source is consulted.
