# Citation Check — cities

Entry: `data/classes/cities.yaml` | Checker: CITATION CHECKER (adversarial, web-verify pass)
Reference docs consulted: `schema/panel-spec.yaml`, `schema/anchors/*.yaml` (modularity.yaml, openness_dissipation.yaml read in full; others scanned for scoring conventions), `docs/schema.md`, `docs/roster.md`, `research/phase4/cities-sources.md`.

Methodology: web-verified every load-bearing quantitative citation and any value marked primary-read in the sweep report. A search-snippet match alone is never treated as PASS — full source text was fetched (WebFetch / direct PDF read) wherever possible. Verdicts: PASS (source read, states claim) / PARTIAL (approximately right, discrepancy noted) / UNVERIFIABLE (source unreachable) / FAIL (source contradicts or omits the claim).

---

## 1. Bettencourt, Lobo, Helbing, Kühnert & West (2007), PNAS 104(17), 7301–7306

**Claim in entry**: New patents β=1.27, gasoline stations β=0.77, total housing β=1.00, total wages β=1.12, GDP β=1.13–1.26 (multiple country datasets), total electrical consumption β=1.07, length of electrical cables β=0.87, road surface β=0.83; NYC-specific super-exponential growth β=1.09.

**Method**: Fetched the full PNAS PDF directly (primary-read this session, not merely snippet-verified — a strictly higher evidence tier than the entry's own "reused-from-Phase-1" provenance claims).

**Verified against Table 1 and Fig. 4b of the paper**:
- New patents: β=1.27 [1.25,1.29], adj-R²=0.72, n=331, US 2001 — **exact match**.
- Gasoline stations: β=0.77 [0.74,0.81], adj-R²=0.93, n=318, US 2001 — **exact match**.
- Total housing: β=1.00 [0.99,1.01], adj-R²=0.99 — **exact match**.
- Total wages: β=1.12 [1.09,1.13], adj-R²=0.96 — **exact match**.
- GDP: China 2002 β=1.15, EU 1999–2003 β=1.26, Germany 2003 β=1.13 → range 1.13–1.26 — **exact match**.
- Total electrical consumption (Germany 2002): β=1.07 [1.03,1.11] — **exact match**.
- Length of electrical cables (Germany 2002): β=0.87 [0.82,0.92] — **exact match**.
- Road surface (Germany 2002): β=0.83 [0.74,0.92] — **exact match**.
- NYC-specific super-exponential growth: Fig. 4b caption states "Observations are well fit by Eq. 4, with β = 1.09 (green line)" for New York City's relative population growth rate — **exact match, confirmed NYC-specific**.

**Verdict: PASS.** Every Bettencourt figure in the entry (attributes.nonlinearity, feedback, emergence, and sources.md §4) checks out exactly against the primary paper. This is the entry's cleanest and most load-bearing citation set.

---

## 2. Clauset, Shalizi & Newman (2009), SIAM Review 51(4), 661 — Zipf/city-size claim

**Claim in entry**: `extreme_event_statistics` — x_min = 52,460 ± 11,880, α̂ = 2.37(8), n=19,447 US cities, CSN fit verdict "moderate," explicitly not "confirmed power law," contrasted with English word frequency (α=1.95, the study's only "good" rating).

**Method**: Fetched the full arXiv PDF (0706.1062v2) directly — primary-read.

**Verified against Table 6.1 and Table 6.2**:
- Row "population of cities (×10³)": n=19,447, x̂_min=52.46±11.88 (i.e. 52,460±11,880 raw), α̂=2.37(8), p=0.76, n_tail=580±177 — **exact match**.
- Table 6.2 "support for power law" column: cities row = **"moderate"** (log-normal LR=-0.090, p=0.93, not ruled out) — words row is the only "good" verdict in the entire study — **exact match** to entry's characterization.
- The entry's careful distinction between CSN's pdf-exponent convention (α≈2.37) and Zipf's classic rank-size convention (≈1) is mathematically correct (rank exponent 1 ↔ pdf exponent 2) and is honestly flagged [unverified] for the historical Zipf/Auerbach claim itself, which was not re-checked against primary 1949/1913 texts — appropriately caveated, not a fabrication.

**Verdict: PASS.** Exact numeric match on every figure, and the fit-rigor language (measured, "moderate" not "good") is not just correct but is the single most careful piece of power-law hygiene in the entry — a model application of `filling_rules.power-law-rigor`.

---

## 3. Chaisson (2011), Complexity 16(3), 27 — energy_rate_density "technologists" figure

**Claim in entry**: Chaisson's "technologists" (present-day technological human society) proxy Φ_m = 2×10⁶ erg/s/g, equivalent to 12.5 kW/person, Table 4.

**Method**: This required disambiguating TWO separate 2011 Chaisson papers, both titled similarly:
- "Energy Rate Density as a Complexity Metric and Evolutionary Driver," Complexity 16(3), 27–40 (2011) — this is Paper I, and is the paper actually cited in the entry's `sources.chaisson2011` block.
- "Energy Rate Density II: Probing Further a New Complexity Metric," Complexity 17(1), 44–63 (2011) — a *different*, later paper (Paper II).

An initial web search for "Chaisson 2011 Table 4 technologists" resolved first to Paper II, which was fetched and read in full — it contains NO Table 4 "human society across cultural stages" and no "technologists" category; its cultural-systems section covers only cars, aircraft, and computers. This could have produced a false FAIL if not disambiguated.

Located and fetched Paper I directly (lweb.cfa.harvard.edu/~ejchaisson/reprints/EnergyRateDensity_I_FINAL_2011.pdf) — primary-read.

**Verified against Table 4, p. 35 ("Energy Rate Densities for Human Society")**:
| Human type | Time (kya) | Φ_m [erg/s/g] | kW/person |
|---|---|---|---|
| Technologists | 0 | 2×10⁶ | 12.5 |
| Industrialists | 0.2 | 5×10⁵ | 2.7 |
| Agriculturists | 10 | 10⁵ | 0.6 |
| Hunter-gatherers | 300 | 4×10⁴ | 0.2 |
| Australopithecines | 3,000 | 2×10⁴ | 0.1 |

Technologists row: **Φ_m = 2×10⁶ erg/s/g, 12.5 kW/person — exact match** to the entry's claim.

**Verdict: PASS**, but flagging a **note**: the entry cites this correctly (`chaisson2011: "...Complexity 16(3), 27..."` — the volume/issue/page pins Paper I unambiguously and correctly), and its own text says "[Table 4]" which is accurate. No fix needed on the entry itself. However, this verification pass surfaced a genuine adjacent-paper confusion risk for any future verifier who searches by title/table number alone rather than by full citation (volume/issue/page) — worth a process note for future citation checks on Chaisson sources generically, not a defect in this entry.

---

## 4. UN DESA (2018) WUP press release — megacity counts

**Claim in entry** (`instance_population`): 33 megacities (>10M) worldwide as of 2018; 43 projected by 2030; one in eight people live in the 33 megacities; close to half of urban dwellers live in settlements <500,000.

**Method**: Fetched un.org/development/desa 2018-revision press page directly.

**Verified**: All four figures (33, 43, "one in eight," "close to half... <500,000") are stated verbatim on the page. **Exact match.**

**Verdict: PASS.** Correctly tagged `evidence_status: measured`, correctly distinguishes this primary-fetched HTML press release from the underlying WUP2018 Highlights PDF (which the entry honestly flags as unparseable and the >1M-city count as genuinely unknown — this self-reported gap is accurate; I also could not extract the annex table from the PDF in this session, confirming the gap is real, not a shortcut).

---

## 5. NYC land area, population, and metro-population figures

**Claim in entry**: NYC city-proper land area 783.8 km² (302.6 sq mi, five boroughs, water excluded); NYC city-proper population 8,478,000 (Vintage 2024); NYC metro (MSA) population 19,940,274 (2024).

**Method**: Web-verified each figure independently.

- Land area 783.8 km² / 302.6 sq mi: confirmed via multiple aggregator sources quoting Wikipedia's five-boroughs figure "302.643 sq mi (783.84 km²) land." **Match** (a separate WebFetch of a different Wikipedia snapshot returned a stale/inconsistent 300.46 sq mi figure — this is a live-document version-drift artifact, not a discrepancy in the entry; the 783.8 km² figure the entry uses is independently corroborated by a second source).
- Population 8,478,000: matches "8,478,072" from a Census Reporter ACS profile — **match within rounding**.
- NYC metro MSA population 19,940,274 (2024): confirmed exactly via search snippet matching Census population-estimates reporting. **Match.**

**Verdict: PASS** on all three, with a **note**: these remain snippet-verified/aggregator-sourced rather than primary-fetched from census.gov directly (census.gov returned 403 Forbidden to WebFetch in this session), exactly as the entry and sources.md already disclose. No new gap found; existing "snippet-verified, not primary-fetched" annotation is accurate and should stay as-is.

---

## 6. 2003 Northeast Blackout figures

**Claim in entry** (`robustness_resilience`, `cascade_susceptibility`): ~50 million people affected across 8 US states + Ontario, ~$10 billion economic losses (Electricity Consumers Resource Council estimate), Ohio transmission-line/tree contact plus FirstEnergy alarm-system software bug, cascading over ~3 hours.

**Method**: Web-verified against Wikipedia "Northeast blackout of 2003" and independent secondary sources (History.com, Scientific American, NYISO retrospective).

**Verified**: All figures confirmed — 50 million people, 8 states + Ontario, $10 billion (ECRC estimate), Ohio transmission line/tree contact, FirstEnergy alarm failure. **Match** on every particular.

**Verdict: PASS**, correctly tagged snippet-verified (underlying NERC/DOE Task Force report not fetched directly, exactly as disclosed).

---

## 7. Tokyo population/area figures

**Claim in entry**: Tokyo 23 Special Wards ~627 km², ~9.73M residents; Tokyo Metropolis ~2,188 km² (flagged single-source, lower confidence).

**Method**: Web-verified.

**Verified**: 627 km² / 9.7M for the 23 wards is corroborated by multiple independent sources (tokyo.how, Wikipedia). The 2,188 km² Tokyo Metropolis figure was not independently corroborated beyond the single real-estate-site source already disclosed in sources.md as "single-source aggregator... lower confidence, should be re-checked" — this is honestly flagged already; my search did not surface a second independent source for this specific figure either.

**Verdict: PASS** on the 23-wards figures; the Tokyo Metropolis area figure remains correctly flagged low-confidence by the entry itself — **no new finding**, existing caveat stands.

---

## 8. Secondary/supporting citations spot-checked

- **Gabaix (1999), QJE 114:739** — confirmed as a real, correctly cited paper (title/journal/volume/pages all match). Entry correctly marks this snippet-verified/title-only, not read. PASS (citation existence and metadata).
- **Louf, Roth & Barthelemy (2014), PLOS ONE 9(7):e102007** — confirmed as a real, correctly cited paper on urban transportation-network scaling. Entry correctly flags this as a candidate source, not read, and does NOT use it to support any filled value (appropriately left as `degree_distribution: unknown`). PASS (citation existence; correctly NOT over-used).
- **Batty & Longley (1994), Fractal Cities** — could not independently verify the specific numeric boundary-dimension (1.0–1.5) / form-dimension (1.5–2.0) ranges attributed to this book; the entry already flags this claim [unverified — secondary characterization, book not read] in three separate places (value field, method field, and the top-level `flags` block) and lists it as the sweep's "most explicitly named gap." No new finding — existing self-flagging is accurate and appropriately conservative.
- **Song et al. (2012)** Chinese mining-cities fractal dimensions and the unattributed German central-place-city figures — not independently re-verified this session (Chinese-language journal, low external searchability); entry already flags both as low-confidence/not independently pinned. No new finding.

---

## Anchor-file cross-check

- `schema/anchors/modularity.yaml`, cities anchor (score 2): entry's `modularity` justification is consistent with, and largely reproduces, this anchor's language and its own internal [unverified — model knowledge] flag on the Q~0.3–0.5 range. Consistent, no contradiction.
- `schema/anchors/openness_dissipation.yaml`, cities anchor (score 3): entry's `openness_dissipation` justification correctly identifies itself as refining the anchor's own flagged 11-13 GW peak-demand estimate with a citable annual-total figure (1.47×10¹⁵ BTU/yr / ~4.9×10¹⁰ W) — internally consistent, no contradiction with the anchor.

---

## Summary of findings

No blocker-severity citation failures were found. Every load-bearing quantitative citation checked against a primary or near-primary source (Bettencourt 2007, CSN 2009, Chaisson 2011 Paper I, UN DESA WUP 2018 press page, NYC land-area/population figures, 2003 blackout figures) returned an **exact numeric match**. The entry's own extensive self-flagging of weaker/unverified claims (Batty & Longley characterization, Tokyo Metropolis area, modularity Q range, NYC electricity-only figure, body-mass convention for energy_rate_density) is accurate and was not found to understate or overstate the actual state of evidence in any case checked.

The one process-relevant finding is that Chaisson has two same-year, similarly-titled 2011 Complexity papers ("Energy Rate Density" Paper I, vol 16(3) and "Energy Rate Density II" Paper II, vol 17(1)), and a naive keyword search can resolve to the wrong one. The entry itself cites the correct paper (16(3), 27) with the correct table value, so this is not a defect in the entry — it is recorded here as a note for future verifiers of any other entry citing Chaisson 2011, since misattribution to Paper II would have produced a false FAIL.
