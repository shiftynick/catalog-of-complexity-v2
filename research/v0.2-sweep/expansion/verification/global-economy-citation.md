# Citation check — global-economy

Date: 2026-07-02. Adversarial web-verification pass against the draft entry
`data/classes/global-economy.yaml`, prioritizing load-bearing quantitative
claims and everything marked primary-read in the entry/sweep report. Every
citation below was fetched live this session (not re-used from the sweep
report's own characterization) except where noted UNVERIFIABLE. Verdicts:
PASS (source read, states claim) / PARTIAL (approximately right, discrepancy
noted) / UNVERIFIABLE (source unreachable) / FAIL (source contradicts or does
not contain claim).

No catalog file or reference file was edited. This is a check log only.

---

## 1. Axtell (2001), Science 293(5536), 1818-1820 — firm-size Zipf claims (`extreme_event_statistics`)

**Method:** Located and fetched the actual published Science article full text
via an author-mirror PDF (faculty.sites.iastate.edu, file
`ZipfDistributionFirmSizes.RAxtell2001.pdf`, distinct from an earlier
"submitted to Nature" draft-manuscript mirror also hosted on the same site
under a different filename — the two are NOT the same document and report
different numbers; the published Science paper's text was used for all
verdicts below). Extracted via pdftotext; full text read.

### 1a. "alpha = 1.059 (employee-based, OLS slope -2.059, SE 0.054, adjusted R^2=0.992)"
**Verdict: PASS.** Paper's Fig. 1 caption (verbatim, OCR-garbled minus sign):
"The solid line is the OLS regression line through the data, and it has a
slope of [-]2.059 (SE = 0.054; adjusted R2 = 0.992), meaning that [alpha =]
1.059; maximum likelihood and nonparametric methods yield similar results."
Exact match to all four numbers cited in the entry.

### 1b. "alpha = 0.994 (receipts-based)"
**Verdict: PASS.** Paper body (main text): "Basing firm size on receipts, a
Zipf distribution describes the data ([alpha] = 0.994) (Fig. 2)." Exact
match. (Note: the entry does not cite the receipts SE/R2 — Fig. 2's own
caption reports slope 0.994, SE=0.064, adjusted R2=0.976 — so this is not a
discrepancy, just an omission the entry doesn't claim to fill.)

### 1c. "alpha consistently in 0.994-1.004 across all years 1988-1997 (all-business-entities series)"
**Verdict: FIX — discrepancy confirmed, entry conflates two different tables/methods.**
The paper contains TWO distinct exponent series, and the entry's claim
matches neither one cleanly:
- **Table 2** (1992 Census data only, OLS regression, two categories):
  "Firms with employees" alpha = 0.994 (SE 0.043); "All businesses" alpha =
  0.995 (SE 0.031). This is where the entry's lower bound "0.994" actually
  comes from — but it is a SINGLE YEAR (1992), not a range across 1988-1997,
  and it is the "firms with employees" row, not the "all-business-entities"
  row the entry attributes it to.
- **Table 3** (1988-1997, ten years, "all firms" per the entry's own
  framing, but computed via a closed-form implicit formula from N and A —
  equation (4) in the paper — NOT via OLS regression): the actual printed
  alpha values are 1997: 0.9966, 1996: 0.9986, 1995: 0.9983, 1994: 1.0004,
  1993: 1.0008, 1992: 1.0009, 1991: 1.0004, 1990: 0.9995, 1989: 1.0006,
  1988: 1.0039. The TRUE range of this series is **0.9966-1.0039**, not
  "0.994-1.004" as stated in the entry. The entry's lower bound (0.994) does
  not appear anywhere in Table 3 and is off by roughly 3x the actual
  variation (true spread ~0.0073 vs. claimed spread ~0.010, and the claimed
  floor is below every actual value in the series).
- Additionally, Table 3's method is explicitly NOT OLS regression (it's the
  implicit-equation estimate from total firm count N and total employment
  A, equation 4) — a different estimation method from the OLS regression
  that produced Table 2's 0.994/0.995 and the entry's own headline
  employee/receipts alphas. The entry's method paragraph does not flag this
  method distinction, which is a secondary, minor issue riding on the same
  root cause.

**Suggested fix:** Replace "alpha consistently in 0.994-1.004 across all
years 1988-1997 (all-business-entities series)" with the accurate range
"0.9966-1.0039 (1988-1997, Table 3, computed via the paper's closed-form
N/A estimator, eq. 4 — not OLS)" — or, if the intent was to cite Table 2's
single-year 1992 OLS figures, restate as "0.994 (firms with employees) /
0.995 (all businesses), OLS regression, 1992 data only (Table 2)" and drop
the "across all years 1988-1997" framing, which belongs to Table 3's
different series and different method. This is evidence_status-relevant:
Table 3's values, since they are not from OLS/MLE regression at all but a
closed-form approximation, arguably deserve their own explicit method note
distinct from Table 2's OLS framing already flagged as measured-untested.

### 1d. N = 5,541,918 U.S. firms with employees, 1997 Census
**Verdict: PASS.** Table 1 in the paper: Census column, "Total" row = 5,541,918.
Also independently confirmed in the companion working paper "Firm Sizes:
Facts to Fantasies" (Brookings CSED WP44, same author): "(105,299,123
employees/5,541,918 firms)."

### 1e. "~2.1e7 total U.S. business entities (1997) incl. nonemployer" (numerosity / component_ontology)
**Verdict: PASS, arithmetic confirmed.** Paper body: "there were some 5.5
million firms that had at least one employee at some time during 1997,
there were another 15.4 million business entities in that year with no
employees." 5,541,918 + 15,400,000 = 20,941,918 ~ 2.1e7. Matches the
entry's figure exactly (entry appropriately rounds and labels this
measured/primary-read).

### 1f. "Axtell himself states non-U.S. firm-size Zipf behavior is 'a conjecture that can only be tested once individual governments make available... data that purport to be comprehensive'"
**Verdict: PASS, exact quotation.** Paper's closing paragraph, verbatim:
"The Zipf distribution may describe firm sizes in other countries as well, a
conjecture that can only be tested once individual governments make
available—and in some cases gather for the first time—data that purport to
be comprehensive." Word-for-word match (modulo OCR line breaks).

### 1g. "explicitly NOT the CSN-2009-grade maximum-likelihood-plus-goodness-of-fit-testing standard (no KS test, no comparison against alternative distributions such as log-normal is reported)"
**Verdict: PASS.** Confirmed by reading the full paper: it reports only OLS
log-log regression slopes, standard errors, and adjusted R^2. No
Kolmogorov-Smirnov test, no maximum-likelihood alpha estimate with a
formal xmin selection procedure, and no explicit comparison against
log-normal or other alternative distributions appears anywhere in the text.
The "measured-untested" evidence_status is correctly assigned.

---

## 2. Clauset, Shalizi & Newman (2009), SIAM Review 51(4), 661 — firm size absence from CSN's 24-dataset table

**Verdict: PASS**, verified two ways: (a) directly against the companion
data page (sites.santafe.edu/~aaronc/powerlaws/data.htm), fetched live this
session, which lists all 24 (well, ~22 numbered + 2 unnumbered, totaling 24)
datasets by name — no firm-size dataset appears; the closest wealth-adjacent
entry is "Richest Americans' net worth," confirmed present. (b) Cross-checked
against this catalog's own primary-read transcription in
`research/phase1/quantitative-backbone.md` (Table 6.1 reproduction): "Net
worth of richest Americans (mil. USD)... alpha=2.3(1), p=0.00... none —
ruled out," and the accompanying explicit statement "No wealth/stock-market-
return dataset with alpha is in this specific table (wealth here = net
worth of richest Americans, ruled out as power law)." No firm-size row
exists in either independent source. The entry's claim ("Confirmed NOT
present in Clauset-Shalizi-Newman's (2009) 24-dataset table... 'Net worth of
richest Americans' is the closest wealth-adjacent CSN row and is a
different, explicitly REJECTED quantity, not to be conflated") is fully
accurate.

---

## 3. Hidalgo & Hausmann (2009), PNAS 106(26), 10570-10575 — Economic Complexity Index / Method of Reflections

**Method:** Fetched a full-text PDF mirror (squarespace-hosted,
`HidalgoHausmann_PNAS_2009.pdf`) and extracted via pdftotext; read in full.

### 3a. Method of Reflections description, k_c,0 = diversity, k_p,0 = ubiquity
**Verdict: PASS.** Paper text confirms verbatim: "kc,0 and kp,0 represent,
respectively, the observed levels of diversification of a country (the
number of products exported by that country), and the ubiquity of a product
(the number of countries exporting that product)." The iterative
"Method of Reflections" mechanism, its symmetric treatment of country and
product nodes, and the even/odd-order variable interpretation are all
confirmed as described in the entry.

### 3b. "complexity measures... are correlated with a country's income level, and DEVIATIONS from that relationship are predictive of future growth"
**Verdict: PASS, near-verbatim.** Paper abstract, confirmed directly: "we
show that the measures of complexity we derive are correlated with a
country's level of income, and that deviations from this relationship are
predictive of future growth. This suggests that countries tend to converge
to the level of income dictated by the complexity of their productive
structures." Matches the entry's paraphrase and its closing quoted phrase
exactly.

### 3c. SITC revision 4, 4-digit level; cross-checked against COMTRADE Harmonized System and NAICS
**Verdict: PASS.** Paper's Methods section, verbatim: "products disaggregated
according to 3 alternative data sources and classifications: First, the
Standard International Trade Classification (SITC) revision 4 at the 4-digit
level... second, the COMTRADE Harmonized System at the 4-digit level; and
third, the North American Industry Classification System (NAICS) at the
6-digit level." Exact match to the entry's method description.

### 3d. The entry's DELIBERATE non-citation of a specific ECI-income correlation coefficient, and its note that r=0.7 is "a related within-model diagnostic," not the headline claim
**Verdict: PASS — the entry's caution is correct and well-founded.** Directly
confirmed in the primary text: "Fig. 1C shows that there is a strong
negative correlation between kc,0 and kc,1 (10, 11)" — this is the
diversity-vs-mean-ubiquity relationship, NOT an ECI-vs-income correlation.
The r=0.7 (and r=0.55) values appear as annotations on model/simulation
panels (Fig. 2, the theoretical model validation figures), not as a single
headline empirical ECI-income correlation statistic. The entry's decision
NOT to cite a specific ECI-income r-value, and to instead flag multiple
candidate r-values (0.63, -0.73, 0.59, -0.54) as unreliably-attributed
figure-caption fragments, is the epistemically correct call — asserting any
one of those as "the" ECI-income correlation would have been a fabrication
risk. No headline single ECI-vs-GDP Pearson r is stated as a clean, singular
figure anywhere I could locate in the primary text either; the entry's
caution matches the source's actual ambiguity.

---

## 4. Brock & Sayers (1988), J. Monetary Econ. 22(1), 71-90 — chaos_sensitivity / nonlinearity

**Method:** Full PDF not freely accessible (ScienceDirect paywalled,
`doi.org/10.1016/0304-3932(88)90170-5` not fetched). Verified via multiple
independent secondary summaries (IDEAS/RePEc abstract page, EconPapers,
Semantic Scholar), consistent with the entry's own "[snippet-verified]"
labeling — this session's search did NOT upgrade this citation to
primary-read, and neither does the entry claim primary-read status for it.

**Verdict: PASS (snippet-level, consistent with entry's own evidence_status).**
Confirmed via independent secondary sources: (a) the paper tests U.S.
macroeconomic series for low-dimensional deterministic chaos using data
series matching the entry's stated windows — employment (1950-I to
1983-IV), unemployment (1949-I to 1982-IV), monthly post-war industrial
production, and pig-iron production (1877-1937); (b) "evidence of chaos was
weak but their tests may have been too weak to detect it" — matches the
entry's characterization of the authors' own non-rejection caveat; (c)
"evidence of nonlinearity was present" in the same series — matches the
entry's claim that genuine nonlinearity (BDS-test-detected) is
distinguished from the chaos non-finding. The entry does not overclaim
primary-read status for this source and appropriately keeps it at
evidence_status: measured-disputed / snippet-verified. The Frank & Stengos
(1988) and Frank et al. (1988) corroborating-paper claims were NOT
independently re-verified this session (both original papers unfetched);
the entry already flags these as "[snippet-only, secondary-source
attribution, original papers not independently fetched]," which is the
correct, honest label — no further action needed, not escalated to a flag.

---

## 5. Energy Institute (2024) Statistical Review of World Energy — energy_rate_density / openness_dissipation

**Verdict: PASS (snippet-level, consistent with entry's own evidence_status).**
Cross-checked against an independent secondary summary (dieselnet.com news
coverage, which quotes the report directly): "Global primary energy
consumption has reached a record absolute high, up 2% on the previous year
to 620 Exajoules (EJ)" for 2023 — confirms the entry's "~620 EJ/yr (2023)"
figure exactly. The implied 2022 figure (620 / 1.02 ~ 608 EJ) is consistent
with the entry's stated "~607 EJ/yr (2022)" within rounding. The entry
correctly labels this snippet-only (the Energy Institute's own report PDF
returned 403 Forbidden on direct fetch this session too, reproducing the
same access failure the sweep report already recorded) and does not
overclaim primary-read status.

**Arithmetic check (derived, not sourced):** 620 EJ/yr = 6.2e20 J/yr; divided
by seconds/year (3.1536e7) = 1.966e13 W. The entry's stated "~1.97e13 W"
(energy_rate_density) and "~2e13 W" (openness_dissipation, rounded) are both
arithmetically correct conversions of the 620 EJ/yr figure. PASS.

---

## 6. World Bank World GDP figures ($105.69T 2023 / $111.3T 2024) — emergent_phenomena narrative only, not a scored column

**Verdict: PASS (snippet-level, consistent with entry's own evidence_status),
non-load-bearing.** This figure is used only in the narrative
`emergent_phenomena` list (not a scored/quantitative column with its own
evidence_status), so the bar for rigor is lower, but was still checked.
Direct fetch to data.worldbank.org returned no extractable numeric table
this session (reproducing the sweep report's own failure), but multiple
independent secondary sources converge on the right order of magnitude:
world 2024 nominal GDP ~$111.3T is corroborated by a direct web-search
snippet citing World Bank data ("worth 111326.37 billion US dollars in
2024"), and the 2023 ~$105T figure is corroborated independently by IMF-
sourced secondary coverage (Visual Capitalist's "$105 Trillion World
Economy"). No contradicting figure was found. The entry already flags this
correctly as snippet-only in its own sources block and its provenance.flags
"World GDP / global firm count / degree_distribution" note.

---

## 7. UN membership figures (~195: 193 member states + 2 observer states) — numerosity / component_ontology

**Verdict: PASS**, general public-record fact, independently confirmed via
multiple current sources this session (worldpopulationreview.com,
Wikipedia's "Member states of the United Nations," UN Visitors Centre): 193
UN member states + 2 non-member observer states (Holy See, State of
Palestine) = 195. Matches the entry exactly. The entry's own
"[unverified — model knowledge / general public record]" label is
appropriately modest for a figure this stable and uncontroversial, though
strictly this WAS re-verified live this session via web search (upgrading
it beyond pure model knowledge, for what it's worth — not requiring an
entry change, just noting the check occurred).

---

## 8. Not independently re-verified this session (already honestly flagged unknown/gap in the entry — no verification action needed)

The following columns are recorded as `unknown` or flagged as confirmed
literature gaps in the entry and its own provenance.flags, and were not
re-searched for this citation-focused pass since there is no citation to
check (no claim made): `fractal_dimension_spatial`, `degree_distribution`,
`temporal_correlation`, the temporal-event half of `extreme_event_statistics`
(recession/crisis severity distributions), `characteristic_timescales`'
system-lifetime row, `energy_rate_density`'s mass denominator, global
(non-U.S.) firm count precision, and `criticality`. This is consistent with
`no-guessing` — no fabricated citation exists here to fail.

---

## Summary of verdicts

| # | Claim | Column | Verdict |
|---|---|---|---|
| 1a | Axtell alpha=1.059, slope -2.059, SE 0.054, R2=0.992 | extreme_event_statistics | PASS |
| 1b | Axtell alpha=0.994 (receipts) | extreme_event_statistics | PASS |
| 1c | Axtell alpha "0.994-1.004 across 1988-1997, all-business-entities" | extreme_event_statistics | **FIX — table/method conflation, true range 0.9966-1.0039** |
| 1d | N=5,541,918 U.S. firms with employees, 1997 | numerosity / component_ontology | PASS |
| 1e | ~2.1e7 total U.S. business entities 1997 | numerosity / component_ontology | PASS |
| 1f | Axtell's non-US-conjecture quote | extreme_event_statistics (level justification) | PASS, exact quote |
| 1g | OLS-only, no CSN-grade testing | extreme_event_statistics (evidence_status) | PASS |
| 2 | Firm size absent from CSN 24-dataset table | extreme_event_statistics (method note) | PASS |
| 3a | Method of Reflections / diversity / ubiquity definitions | information_processing, emergence | PASS |
| 3b | Complexity correlates with income; deviations predict growth | information_processing, emergence | PASS, near-verbatim |
| 3c | SITC rev.4 / COMTRADE HS / NAICS classifications | information_processing, emergence | PASS |
| 3d | Deliberate non-citation of ECI-income r; r=0.7 flagged as model-diagnostic | information_processing, emergence | PASS — correct caution |
| 4 | Brock & Sayers nonlinearity-yes/chaos-no, series windows | chaos_sensitivity, nonlinearity | PASS (snippet-level, as labeled) |
| 5 | ~620 EJ/yr (2023) / ~607 EJ/yr (2022) | energy_rate_density, openness_dissipation | PASS (snippet-level, as labeled) |
| 5b | 620 EJ/yr -> ~1.97e13 W / ~2e13 W | energy_rate_density, openness_dissipation | PASS (arithmetic) |
| 6 | World GDP $105.69T (2023) / $111.3T (2024) | emergent_phenomena (narrative) | PASS (snippet-level, non-load-bearing) |
| 7 | ~195 UN member+observer states | numerosity / component_ontology | PASS |

**One fix-severity finding, no blockers.** All primary-read claims in the
entry (Axtell 2001, Hidalgo & Hausmann 2009, CSN 2009 absence check) were
independently re-fetched and read in full this session and hold up under
adversarial re-verification, with one exception: the Axtell "0.994-1.004
across 1988-1997" range in `extreme_event_statistics` conflates a single-year
(1992) OLS-regression figure from Table 2 with a ten-year (1988-1997),
different-method (closed-form eq. 4) series from Table 3, whose actual range
is 0.9966-1.0039. This does not change the entry's qualitative conclusion
(the Zipf/near-unity finding is robust across years and methods either way)
but the specific numeric range as written is not what the cited table
contains and should be corrected before verified status.
