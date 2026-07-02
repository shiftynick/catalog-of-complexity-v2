# Financial Markets (NYSE exemplar) — Source Recovery Report

Compiled 2026-07-01. All values below were checked via live web search/fetch on this date.
Markers: **[PRIMARY-READ]** = fetched the primary document itself and quoted/paraphrased from its text.
**[SNIPPET]** = only a search-engine summary/snippet was available (primary source paywalled, cert error, or 403).
**[UNVERIFIED — model knowledge]** = not confirmed online in this session; flagged for caution, do not put in catalog without further check.

---

## 1. Scale & identity (NYSE exemplar)

| Quantity | Value | Notes |
|---|---|---|
| Listed companies (NYSE) | ~2,400 companies | **[SNIPPET]** Multiple secondary aggregator sources (IG.com, general finance sites) converge on "over 2,400 companies" listed on NYSE. Could not reach nyse.com "about" page directly (network/tool limitation) or WFE database (403 Forbidden on fetch) to pin an exact count as of a specific date. Treat as approximate, order-of-magnitude reliable, not a precise citation.
| NYSE domestic market capitalization | ≈ $28–31 trillion (varies by month in 2024–2026) | **[SNIPPET]** Aug 2024: WFE-reported figure of Nasdaq $28.2T overtaking NYSE's $28T (per Voronoi/Statista summary of WFE data). By ~March 2026: NYSE cited at "approximately $31.0 trillion," now in 2nd place behind Nasdaq (per secondary summary of WFE ranking). No primary WFE page was successfully fetched (403 errors); figures come from secondary financial-media summaries of WFE data, consistent across sources.
| US total stock market cap (all exchanges) | $69.0 trillion (as of Jan 1, 2026) | **[SNIPPET]** Siblis Research aggregator, summarized via search snippet: "$68,963,152.8 million" total US market cap combining NYSE + Nasdaq + OTCQX, with ~$7 trillion added through 2025.
| NYSE average daily trading volume | ≈1.54 billion shares / ≈$80.6 billion (mid-November 2025 snapshot) | **[SNIPPET]** From a secondary market-data summary; specific to a mid-Nov 2025 period, not a long-run average. Treat as illustrative of order of magnitude, not a precise long-run mean.
| NYSE record single-day share volume | 30.98 billion shares | **[SNIPPET]** PYMNTS.com (Aug 2025), attributed to NYSE President Lynn Martin, describing April 9, 2025 (S&P 500 rallied 9.5% that day). Illustrates volatility-driven peak, not typical volume.
| NYSE Group daily order/message volume | ~1.2 trillion order messages/day (current, 2025); record 356 billion messages in a single day on March 4, 2021; ~350 billion messages was "a volatile day" ~4 years before 2025 | **[PRIMARY-READ for the 2021 record]** NYSE's own "Data Insights" page (nyse.com/data-insights/nyse-group-handles-record-message-volume) was fetched directly and confirms: 356 billion messages, March 4, 2021, "roughly 2.6× average Q4 2020 levels," no degradation in client latency/throughput. **[SNIPPET for the 2025 figures]** PYMNTS.com quoting NYSE President Lynn Martin: "about 1.2 trillion order messages each day" currently (2025) vs. "about 350 billion incoming order messages" on a volatile day ~4 years prior; over 1 trillion messages on multiple days April 3–9, 2025. A message = one instruction to buy/sell/cancel/modify. Note the apparent ambiguity between "1.2 trillion per day" as a new normal vs. record peak days — the PYMNTS piece is not fully precise on which; flag for the catalog as approximate.
| Characteristic timescales | HFT tick-to-trade: ~100 ns–few µs (FPGA) up to sub-millisecond (software); example breakdown 500ns order generation + 2.5µs network + 1.5µs ack = 4.5µs total | **[SNIPPET]** Aggregated from trading-technology blog posts (Medium/QuantVPS/LuxAlgo), not peer-reviewed. Order-of-magnitude only; treat these vendor/blog figures as illustrative, not authoritative. London Stock Exchange Millennium Exchange cited as "126 microseconds average latency" — again a secondary/marketing-adjacent source.
| Settlement cycle | T+1 (one business day), effective May 28, 2024 | **[PRIMARY-READ]** SEC press release (sec.gov/newsroom/press-releases/2024-62, "SEC Chair Gensler Statement on Upcoming Implementation of T+1 Settlement Cycle") confirms the amended Rule 15c6-1 shortening settlement from T+2 to T+1, compliance date May 28, 2024. Prior regime was T+2 (2017–2024), T+3 before that (pre-2017) — this longer history is [UNVERIFIED — model knowledge] for the exact pre-2017 dates, not re-confirmed in this session.
| Market cycles | Daily (open/close), quarterly earnings, ~4-year business cycle, decadal boom-bust (e.g., 2000 dot-com, 2008 GFC, 2020 COVID crash) | [UNVERIFIED — model knowledge] — general characterization, not tied to a specific citation. Recommend catalog either omit precise cycle-length citation or mark descriptive/qualitative only.

---

## 2. Extreme-event statistics — the "inverse cubic law"

### 2a. Gopikrishnan, Meyer, Amaral, Stanley (1998) — the original cubic-law paper
**[PRIMARY-READ]** Fetched arXiv cond-mat/9803374 abstract directly.

- **Title**: "Inverse Cubic Law for the Probability Distribution of Stock Price Variations"
- **Authors**: P. Gopikrishnan, M. Meyer, L.A.N. Amaral, H.E. Stanley
- **Journal**: European Physical Journal B (Rapid Note), vol. 3, p. 139, 1998
- **Data**: Trades and Quotes (TAQ) database, every trade for all stocks in three major US stock markets, Jan 1994 – Dec 1995 (2-year period)
- **Sample size**: 40 million data points ("substantially larger than studied hitherto")
- **Result** (verbatim from abstract): "an asymptotic power-law behavior for the cumulative distribution with an exponent α ≈ 3, well outside the Lévy regime 0 < α < 2."
- Note: exact error bars on α were not legible in the fetched abstract/PDF excerpt; the paper's companion/extended piece is usually cited alongside:

### 2b. Plerou, Gopikrishnan, Amaral, Meyer, Stanley (1999) — extended version
**[SNIPPET]** Per multiple secondary bibliographic sources (SciRP reference lists): "Scaling of the Distribution of Price Fluctuations of Individual Companies," Physical Review E, vol. 60, pp. 6519–6529 (1999). This is the fuller companion paper to the 1998 EPJ B rapid note, same TAQ dataset/period, individual-company-level scaling. Could not fetch the actual PRE text in this session (not attempted directly — recommend a follow-up fetch of the APS/PRE page or arXiv mirror if available before citing exact α confidence intervals).

### 2c. Gabaix, Gopikrishnan, Plerou, Stanley (2003) — theory + volume/trade-count tails
**[SNIPPET]** Nature paywalled (redirect to login); could not fetch full text. Bibliographic facts confirmed via multiple independent secondary sources (PubMed, Nature's own metadata page, ideas.repec.org, Harvard Scholar page):
- **Title**: "A theory of power-law distributions in financial market fluctuations"
- **Journal**: Nature 423 (6937), pp. 267–270, May 2003. DOI: 10.1038/nature01624
- Model: large market-activity fluctuations driven by trades of large institutional participants ("large-trader hypothesis").

### 2d. Gabaix, Gopikrishnan, Plerou, Stanley — "Understanding the cubic and half-cubic laws of financial fluctuations," Physica A 324 (2003), pp. 1–5
**[SNIPPET]** Attempted direct fetch of the BU-hosted PDF (polymer.bu.edu/hes/articles/ggps03a.pdf) but got a TLS certificate error (expired cert on that host), so this is search-snippet-level, not primary-read. Reported values, consistent across two independent search-result summaries:
- **Returns tail exponent** ("cubic law of returns"): α ≈ 3
- **Volume tail exponent** ("half-cubic law of volumes"): ζ_V ≈ 3/2 (≈1.5)
- **Number-of-trades tail exponent** ("cubic law of number of trades"): ζ_N ≈ 3.4, with one snippet giving "average value of 3.40 ± 0.05" from fitting cumulative distributions of 1000 stocks — **this specific error bar (±0.05) is SNIPPET-level only and should be treated cautiously**; I was not able to verify it against the actual paper text due to the cert failure. Recommend re-attempting the fetch via a different route (Google cache, ResearchGate PDF, or SSRN) before hard-citing ±0.05 in the catalog.

### 2e. Statistical critique — does the cubic law survive CSN-2009-style scrutiny?
**[PRIMARY-READ for CSN paper's existence/scope; SNIPPET for its direct application to finance]**
- Clauset, Shalizi, Newman, "Power-law distributions in empirical data," SIAM Review 51(4), 661–703 (2009). Confirmed via multiple sources (arXiv 0706.1062, SIAM Review). This paper's core contribution: standard least-squares log-log fitting of power laws is unreliable; proposes MLE + Kolmogorov-Smirnov goodness-of-fit + likelihood-ratio testing framework.
- **Important finding from this session**: I could NOT find, via search, that Clauset/Shalizi/Newman's 2009 paper directly re-analyzes the Gopikrishnan/Plerou/Gabaix stock-return cubic-law dataset as one of their worked examples. Their canonical worked examples (from general knowledge of the paper, [UNVERIFIED — model knowledge] for the specific list) are things like word frequencies, city populations, wealth, and other classic "power law claims" — finance/stock-return tails may or may not be among their ~24 datasets; I did not confirm this either way in live search. **This is a genuine gap: I cannot confirm or deny that CSN (2009) specifically stress-tested the equity-return cubic law.** The catalog entry should either (a) mark "no confirmed direct CSN re-analysis of the equity tail-exponent literature found" or (b) commission a follow-up dedicated to reading the CSN paper's dataset list.
- Separately, there is a broader literature of critiques/replications of the cubic law (e.g., papers questioning universality across markets, time periods, and fitting windows — titles surfaced in search included "Size matters: some stylized facts of the stock market revisited" and "On the origin of power-law fluctuations in stock prices," both arXiv preprints) but I did not read these in full; **[SNIPPET titles only, not read]** — flagging as leads, not verified critique content.

---

## 3. Stylized facts (Cont 2001) — temporal correlation & memory

**[PRIMARY-READ]** — Successfully fetched full text via a secondary paper (arXiv 2311.07738v2, "Revisiting Cont's Stylized Facts for Modern Stock Markets," MITRE Corp., 2023) which quotes Cont (2001) verbatim with page citations back to the original (p. 233 of Quantitative Finance 1, 223–236). Direct fetch of Cont's own hosted PDFs failed (TLS cert errors on rama.cont.perso.math.cnrs.fr; connection refused on www-stat.wharton.upenn.edu mirror), so treat the exact wording below as **primary-read-once-removed**: verbatim quotations preserved by a citing paper, not read directly from Cont's PDF myself in this session.

- **Full citation**: Cont, R. (2001). "Empirical properties of asset returns: stylized facts and statistical issues." *Quantitative Finance*, 1(2), 223–236. DOI: 10.1088/1469-7688/1/2/304.
- Cont enumerates **11 stylized facts** total. Relevant ones recovered verbatim:

  1. **Absence of autocorrelations** (linear): "(Linear) autocorrelations of asset returns are often insignificant, except for very small intraday timescales (≃20 minutes) for which microstructure effects come into play."
  2. **Heavy tails**: "The (unconditional) distribution of returns seems to display a power-law or Pareto-like tail, with a tail index which is finite, higher than two and less than five for most data sets studied." (This is Cont's own tail-index range — note it brackets, and is broadly consistent with, but not identical to, the sharper α≈3 "cubic law" point estimate from Gopikrishnan et al.)
  6. **Volatility clustering**: "Different measures of volatility display a positive autocorrelation over several days, which quantifies the fact that high-volatility events tend to cluster in time."
  8. **Slow decay of autocorrelation in absolute returns**: "The autocorrelation function of absolute returns decays slowly as a function of the time lag, roughly as a power law with an exponent β ∈ [0.2, 0.4]." — this is the long-range-dependence / memory stylized fact. Note: Cont expresses this as a power-law decay exponent β for the autocorrelation function itself, not as a Hurst exponent H; a Hurst-exponent framing (H > 0.5, persistent) is the standard translation used elsewhere in the literature but I did not find Cont assigning a specific H value in the text recovered here. Do not fabricate an H value — if the catalog wants an explicit Hurst number, it should come from a dedicated long-memory paper (e.g., Cont's own "Long range dependence in financial markets," which I attempted to fetch — see below — or Lo (1991), Mandelbrot).
  - Also note Fact #1's caveat that absence of autocorrelation "does not seem to hold systematically when the time scale is increased: weekly and monthly returns do exhibit some autocorrelation" (paraphrased from search-snippet layer, slightly less certain than the directly-quoted facts above — **[SNIPPET]** for this specific caveat sentence).

- **Attempted but failed**: Rama Cont's own paper "Long range dependence in financial markets" (rama.cont.perso.math.cnrs.fr/pdf/FE05.pdf) — TLS certificate mismatch prevented fetch. This would likely contain explicit Hurst-exponent values; flagging as a good follow-up target (try via Google Scholar cache or a mirror).

---

## 4. Energetics (Chaisson Φ_m honesty test)

**No citable, NYSE-specific, primary-sourced power-draw figure was recovered.** Details:

- The NYSE's Mahwah, NJ data center (technically now branded as part of ICE's "US Liquidity Center," shared/colocation facility housing NYSE matching engines plus many colocated trading firms) — **[SNIPPET]**, from a datacenter-industry directory listing (inflect.com) and a separate secondary description, is reported to have "28 MW of total site power" capacity across a 396,000 sq ft, 28-acre Tier-4-guided facility. A different, apparently distinct or older listing (EuroNextNJ1 at the same street address) cites "2.2 MW" capacity — the discrepancy between 28 MW and 2.2 MW was not resolved in this session and suggests these may refer to different sub-facilities, different tenants, or outdated/conflicting directory data.
- Critically: **28 MW (or 2.2 MW) is a facility power-capacity figure from a colocation-industry directory, not a measured/audited actual energy draw, and not exclusively attributable to NYSE's own trading/matching infrastructure** (the facility hosts many colocated third-party trading firms' servers alongside NYSE's own systems). This is not a citation I would put in the catalog panel as a clean Φ_m-style figure — it conflates facility capacity with actual draw and conflates NYSE-owned compute with tenant compute.
- I found no sector-level, peer-reviewed or government-sourced (e.g., EIA, LBNL) estimate specifically carving out "securities-exchange computing" as a sub-category of data-center energy use. The EIA/LBNL/Pew data found (U.S. data centers: 183 TWh in 2024, ~4% of U.S. electricity) is for data centers broadly (dominated by cloud/AI hyperscale), not exchanges specifically.
- **Recommendation: mark this field `unknown` in the catalog**, or at most note qualitatively "NYSE's primary matching-engine data center (Mahwah, NJ) sits within a colocation campus reported at ~28 MW site power capacity (SNIPPET-level, non-primary, capacity not consumption, not NYSE-exclusive) — no audited or peer-reviewed NYSE-specific energy-draw figure was found." Do not present a single clean number as if it were Chaisson-comparable Φ_m data; the honest answer is this is currently unknown/unverifiable to the standard the catalog requires.

---

## 5. Canonical sources for the entry's source list

All five bibliographic entries below were independently confirmed via search (title/journal/year/publisher cross-checked across ≥2 sources each); none required primary full-text read since only bibliographic metadata was needed.

1. **Cont, R. (2001)**. "Empirical properties of asset returns: stylized facts and statistical issues." *Quantitative Finance*, 1(2), 223–236. DOI: 10.1088/1469-7688/1/2/304. **[PRIMARY-READ, once-removed — see Section 3]**
2. **Hayek, F. A. (1945)**. "The Use of Knowledge in Society." *The American Economic Review*, 35(4), 519–530. **[SNIPPET, bibliographic only]** — confirmed via multiple independent sources including hosted copies (uchicago.edu, statisticaleconomics.org, yale.edu), volume/issue/pages consistent across all.
3. **O'Hara, M. (1995)**. *Market Microstructure Theory*. Cambridge, MA: Blackwell Publishers. ISBN 1-55786-443-8. **[SNIPPET, bibliographic only]** — confirmed via bookseller/library listings (AbeBooks, Open Library, Harvard Book Store) and an Oxford Academic (Review of Financial Studies) book review record.
4. **Mantegna, R. N. & Stanley, H. E. (2000)**. *An Introduction to Econophysics: Correlations and Complexity in Finance*. Cambridge University Press. ISBN corroborated via Cambridge's own assets page (assets.cambridge.org front matter). **[SNIPPET, bibliographic only, but Cambridge's own hosted front-matter PDF was located]**.
5. **U.S. Securities and Exchange Commission & Commodity Futures Trading Commission (2010)**. "Findings Regarding the Market Events of May 6, 2010." Joint SEC-CFTC report, released September 30, 2010. Hosted directly at sec.gov/files/marketevents-report.pdf. **[SNIPPET — URL located and confirmed live on sec.gov, but I did not fetch/read the report body itself in this session]**. A "Preliminary Findings" version also exists (sec.gov/sec-cftc-prelimreport.pdf, earlier in 2010) — the catalog should cite the final September 30, 2010 report, not the preliminary one, unless deliberately citing both.

---

## Summary of what was NOT recovered / could not be verified

- Exact, dated, primary-sourced NYSE listed-company count (only "~2,400" via secondary aggregators).
- Exact NYSE-specific market cap figure tied to one clean date+primary source (WFE pages all 403'd; figures triangulated from secondary financial media citing WFE).
- Error bars on the α≈3 cubic-law exponent from the primary PRE 1999 or Nature 2003 papers (both paywalled/uncooperative hosts).
- Whether CSN (2009) directly re-tested the equity-return cubic law as one of its worked datasets — genuinely unresolved, not just uncited.
- Any Hurst-exponent numeric value directly from Cont (only the autocorrelation-decay exponent β∈[0.2,0.4] was recovered, which is related but not identical).
- Any credible, NYSE-attributable, non-facility-capacity energy/power figure. This should likely be `unknown` in the catalog.
