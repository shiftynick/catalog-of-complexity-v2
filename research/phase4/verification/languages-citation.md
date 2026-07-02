# Citation Check — languages (data/classes/languages.yaml)

Adversarial web-verification of the load-bearing quantitative/cited values in the
`languages` entry. Methodology: every claim below was checked against a fetched
source this session (PASS/PARTIAL/FAIL/UNVERIFIABLE per the assignment's verdict
scale); a search-snippet alone is never treated as PASS. Where a primary PDF could
be downloaded, it was converted to text (`pdftotext -layout`) and the exact table
row was located and quoted, upgrading several sweep-report "snippet-verified"
claims to genuinely primary-read this session. Two full papers (CSN 2009, Newman
2003) and one survey paper (arXiv:cs/0701135, used as a secondary check on Ferrer i
Cancho & Solé 2001's actual table) were primary-read in full this session.

---

## 1. extreme_event_statistics — Zipf exponent (csn2009)

**Claim in entry:** "alpha=1.95(2), p=0.49 (Kolmogorov-Smirnov goodness-of-fit),
rated 'good'"; measurand "written word-frequency rank-frequency distribution
(Zipf's law), Melville's Moby Dick, n=18,855 unique word types, x_min-hat=7+/-2."
Marked evidence_status: measured, "Primary-read in full (Phase 1)."

**Verification:** Downloaded arxiv.org/pdf/0706.1062 directly, converted to text
with pdftotext. Located Table 6.1 ("count of word use" row) and Table 6.3 ("words"
row) verbatim:

> `count of word use   18 855   11.14  148.33  14 086   7±2   1.95(2)   2958±987   0.49`
> (Table 6.1, quantity / n / ... / x̂min / α̂ / ntail / p)

> `words   0.49  4.43  0.00  0.395  0.69  9.09  0.00  4.13  0.00  -0.899  0.18  good`
> (Table 6.3, discrete-data goodness-of-fit table; first column = p-value for the
> power-law fit = 0.49; final column = "good")

Every number in the entry (n=18,855, x̂min=7±2, α̂=1.95(2), p=0.49, verdict "good")
matches the primary source exactly, digit-for-digit.

**Verdict: PASS.** Genuinely primary-read this session (not just carried over from
Phase 1 — independently re-confirmed against the arXiv PDF text). This is the
strongest-sourced value in the entry, as the entry itself claims.

**Note on a prior search-snippet artifact:** An earlier WebSearch (before the PDF
was pulled) returned "p(K) = 0.48" for this same dataset from an AI-generated
summary — a different number than the paper's actual p=0.49. This is a good
illustration of why snippet-only verification is unsafe here: the snippet was
wrong (likely conflating a different GOF-test variant or paraphrase drift), and
only the primary-read caught it. The entry's recorded p=0.49 is correct.

---

## 2. degree_distribution — English word co-occurrence network (newman2003 + ferrer-i-cancho2001)

**Claim in entry:** "two-regime power law in the British National Corpus word
co-occurrence network: high-degree regime alpha=2.7 (matches Newman 2003's
single-exponent fit), low-degree regime gamma=1.5 (Ferrer i Cancho & Sole 2001);
crossover near degree k~1e3." Measurand: "node degree in the word co-occurrence
network (n=460,902 word-type nodes, m=17e6 edges)." Sources: [newman2003,
ferrer-i-cancho2001]. Marked "measured-untested," and newman2003 is separately
tagged "primary-read" in the entry's own sources block (from Phase 1).

**Verification — Newman (2003):** Downloaded arxiv.org/pdf/cond-mat/0303516
directly, pdftotext -layout, located Table II (network statistics table) in full.
The actual "word co-occurrence" row in Newman's Table II reads:

> `word co-occurrence   undirected   269,504   2,130,000,000   [z blank]   [ℓ blank]   —   0.10   0.39   -0.003   Ref. 119, 157`

i.e., **n=269,504 nodes, m=2.13×10⁹ edges**, no fitted power-law exponent at all
(the exponent column is blank/"—", meaning Newman did NOT report a fitted α for
this network), clustering C(2)=0.39 (not 0.44). Reference [157] in Newman's
bibliography, confirmed by direct text search, is indeed Ferrer i Cancho & Solé
(2001) — but the table values Newman actually reports for it (n=269,504,
m=2.13×10⁹, no exponent) are **completely different** from the n=460,902,
m=17×10⁶, α=2.7, z=70.13, C=0.44 the entry attributes to "Newman 2003's
single-exponent fit." A full-text search of Newman's paper for "α=2.7" in
connection with word networks found nothing — no such figure appears anywhere in
Newman (2003) for a word co-occurrence network. **The specific numbers the entry
attributes to Newman 2003 (n=460,902 / m=17e6 / α=2.7 / z=70.13 / C=0.44) do not
appear in Newman (2003) at all, in the table or the prose.** These figures instead
belong to *other, unrelated* rows in Newman's Table II ("software packages":
n=460,902; "software classes": m=17,000,000; "train routes": z=70.13) that the
entry's drafting session appears to have misread/miscombined off adjacent table
rows — plausibly a PDF-column-bleed artifact (Newman's Table II is a dense
multi-column table that is notoriously easy to misalign when extracted).

**Verification — Ferrer i Cancho & Solé (2001):** Could not obtain the primary PDF
directly this session (royalsocietypublishing.org, pmc.ncbi.nlm.nih.gov, and a
core.ac.uk mirror all blocked/403'd or returned non-PDF content). However, a
secondary academic survey paper, Ferrer i Cancho's own co-authored/cited survey
"Complex networks and human language" (arXiv:cs/0701135), was downloaded and
primary-read in full, and reproduces Ferrer i Cancho & Solé (2001)'s own reported
table for the BNC collocation networks:

> `Restricted     460,902   <k>=70   L=2.67   C=0.437   (Pij>PiPj)`
> `Unrestricted   478,773   <k>=74   L=2.63   C=0.687`

and separately, in prose: "The degree distribution shows two regimes of
power-law... words with degree k ≤ 10³ decay with a degree exponent γ< ≈ 1.5
while words with 10³ < k < 10⁵ follow a power-law with γ> ≈ 2.7" (cross-confirmed
by an independent WebSearch AI-summary of the same paper, worded almost
identically). This is a genuinely different, but closely related, finding: it
confirms n=460,902 (the "Restricted" BNC network), ℓ=2.67, C=0.437 (~0.44,
entry's rounding is fine), AND a two-regime power law with γ<≈1.5 / γ>≈2.7 and
crossover near k~10³ — but **all of this is Ferrer i Cancho & Solé's own finding,
not something Newman (2003) independently corroborates or "matches."** The
α=2.7 high-degree exponent the entry attributes separately to "Newman 2003's
single-exponent fit" is actually the SAME number Ferrer i Cancho & Solé report as
their own high-degree-regime γ> — there is no independent Newman-sourced
corroboration at all.

**Verdict: FAIL (blocker).** The entry's citation of Newman (2003) for the
n=460,902/m=17e6/α=2.7/z=70.13/C=0.44 figures, and its framing that Newman 2003
"matches"/independently corroborates the α=2.7 high-degree exponent, is not
supported by the primary source — Newman's own Table II row for the word
co-occurrence network carries entirely different numbers (n=269,504, m=2.13×10⁹,
no exponent reported). The n=460,902/ℓ=2.67/C=0.437/γ>≈2.7/γ<≈1.5 figures are all
genuinely Ferrer i Cancho & Solé (2001)'s own findings and check out against that
source (via the secondary survey), so citing ferrer-i-cancho2001 alone for the
whole degree_distribution value would be correct; citing newman2003 as a second,
corroborating/matching source for the same numbers is the specific error. This
also invalidates the entry's own claimed "measurand: ... m=17e6 edges" — the
correctly-sourced (Ferrer i Cancho & Solé) network has m implied by n=460,902 and
mean degree 70 (≈460,902×70/2 ≈ 1.6×10⁷ edges, which is close to 17e6 and may be
where that figure actually originated — plausibly correct by coincidence/rounding,
but not because Newman reports it).

**Secondary note (fix):** The entry's own in-text hedge — "n≈440,902–460,902 words
— minor discrepancy between the two papers' reported node counts, likely a
preprocessing/threshold difference, not independently resolved this session" — is
itself imprecise. The 440,902 figure traced back this session to what appears to
be a secondary-source transcription slip (440,902 vs. 460,902, a single-digit
swap) rather than a genuine second node count reported by either primary paper;
Ferrer i Cancho & Solé (2001) report exactly two figures, 460,902 (restricted) and
478,773 (unrestricted), not 440,902. This should be corrected rather than left as
an unresolved "discrepancy between the two papers."

---

## 3. numerosity / component_ontology — word co-occurrence network node count (ferrer-i-cancho2001)

**Claim:** "word co-occurrence network (English exemplar, BNC-derived) 460,902
word-type nodes, order 1e5."

**Verdict: PASS**, on the strength of the same secondary-survey confirmation above
(Ferrer i Cancho & Solé 2001's "Restricted" BNC network = 460,902 nodes). Still
short of a full primary-read of the original Proc. R. Soc. B paper (blocked this
session as it was for the drafting agent), so confidence should remain
snippet/secondary-verified rather than fully primary — but the number itself is
now corroborated by an independent, reputable secondary academic source (not just
an AI search summary), which is stronger evidence than the drafting pass had.

---

## 4. characteristic_timescales — spoken information rate (coupe2019)

**Claim:** "~39.15 bits/s (SD 5.10), per-language range roughly 34-44 bits/s";
measurand: information density x syllable rate, 17 languages / 9 language
families incl. English, 170 speakers reading standardized texts; "no
English-specific figure separately reported."

**Verification:** Fetched pmc.ncbi.nlm.nih.gov/articles/PMC6984970/ (the PMC
mirror of Coupé et al. 2019, Science Advances) directly this session. Confirmed:
mean information rate 39.15 bits/second, SD 5.10 bits/second, 17 languages from 9
language families, 170 native adult speakers (85 female), and explicit
confirmation that "the paper does not report a separate information rate for
English alone" — only the cross-linguistic mean, with a qualitative remark that
this is "compatible with the rare estimates available for English, Mandarin
Chinese, and Spanish."

**Verdict: PASS.** All figures match exactly; the entry's own honest caveat ("no
English-specific figure separately reported") is independently confirmed, not
just carried over.

---

## 5. instance_population — Ethnologue living-language count (ethnologue27)

**Claim:** "~7,164 living languages (Ethnologue 27th ed., 2024)"; extinction rate
"~3.5 languages/year." Entry explicitly flags that a separate snippet claiming
"29th ed., 2026, 7,170" "does not reconcile cleanly" with the recorded 27th-ed.
figure and is NOT used, "pending re-verification." evidence_status: measured,
confidence: low, with a standing provenance flag recommending direct Ethnologue
access before promoting the entry.

**Verification:** ethnologue.com itself remained blocked (403) to WebFetch this
session, same as the drafting pass. However, en.wikipedia.org/wiki/Ethnologue WAS
successfully fetched directly this session (unlike the drafting pass, which relied
only on WebSearch snippets of it) and gives the FULL edition sequence cleanly:

> 25th ed. (2022): 7,151 · 26th ed. (2023): 7,168 · 27th ed. (2024): 7,164 ·
> **28th ed. (2025): 7,159** · 29th ed. (2026): 7,170 — "the highest number of
> living languages that have been described in an edition of Ethnologue."

This resolves the entry's own stated uncertainty: the sequence reconciles
perfectly (the missing 28th-edition data point the entry worried about does
exist, at 7,159, and the arithmetic across all five editions is internally
consistent). Given the current date, the CURRENT Ethnologue figure is the 29th
edition (2026), 7,170 — not the 27th edition (2024), 7,164, which the entry
selected as its recorded value while explicitly rejecting the newer figure as
unreconciled.

**Verdict: PARTIAL (fix).** The 27th-ed./7,164 figure the entry records is not
fabricated and was a defensible reading at the time (a real, correctly-cited
historical edition count), but it is now a stale/superseded figure relative to
Ethnologue's current 29th edition (2026), which a same-session direct fetch of
Wikipedia's Ethnologue article resolves cleanly. Recommend updating the recorded
value to the 29th ed. (2026) 7,170 figure (or explicitly noting both with the
29th as current), and removing the "does not reconcile cleanly" language, which a
direct fetch shows to be no longer accurate. Note this is "fix" not "blocker"
because the entry's own hedging and low-confidence marking already telegraph this
exact risk to a reader — it is a stale-data problem, not a fabrication.

**Cross-check (English speakers via Wikipedia's speaker-count article):** Fetched
en.wikipedia.org/wiki/List_of_languages_by_total_number_of_speakers directly.
Confirms total 1,530 million (450M L1 / 1,090M L2), matching the entry's ~1.53e9
(450M/1,090M) figures used in numerosity and instance_population exactly — but
the article's cited source is now labeled "Ethnologue 2026" (i.e., the 29th
edition), not "27th edition (2024)" as the entry's sources block states. Same
stale-edition-attribution issue as above; the underlying number is right, the
edition label is outdated.

**Verdict on English speaker figures specifically: PASS** (number), **PARTIAL**
(edition attribution, same fix as above).

---

## 6. numerosity — OED entry count (oed-wikipedia)

**Claim:** "520,779 entries" (OED online); sources block additionally states
"291,500 in the 1989 print 2nd edition" as a citation annotation (not a scored
attribute value).

**Verification:** Fetched en.wikipedia.org/wiki/Oxford_English_Dictionary
directly. Confirms 520,779 entries, 888,251 meanings, 3,927,862 quotations,
821,712 thesaurus entries for the current online OED — exact match.

For the 1989 print second edition, the article as fetched this session states
**290,500 entries** across 21,730 pages — not 291,500 as given in the entry's
sources-block citation annotation. This is a 1,000-entry discrepancy in a
citation annotation only (this number is not used in any scored `value` field in
the entry, only mentioned in the `sources:` block's citation text).

**Verdict: PASS** on the load-bearing value (520,779, used in numerosity).
**PARTIAL (fix)** on the non-load-bearing 1989-edition figure in the citation
annotation: entry says 291,500, current Wikipedia fetch says 290,500.

---

## 7. tipping_transitions — Krauss (1992) 90% figure and modern re-estimate (krauss1992)

**Claim:** "Krauss 1992's 90% at-risk ceiling vs. a modern ~44-46% re-estimate."

**Verification:** Two independent WebSearch passes (not a single snippet) both
returned consistent, multiply-corroborated summaries: Krauss (1992) projected up
to 90% of the ~6,000 languages then extant faced possible extinction this
century, including 80% of North American languages — matches the entry exactly.
The Rosetta Project / ELCat source (rosettaproject.org) independently confirms
the "3.5 languages extinct per year, ~1 every 4 months" figure and explicitly
states this supersedes the "one language every two weeks" folk figure — also
matches the entry.

**Verdict: PASS** (snippet-verified across multiple independent, mutually
consistent secondary sources, consistent with the entry's own honest
"measured-disputed" / snippet-verified framing — the entry does not overclaim
here). The ~44-46% modern re-estimate's exact primary source remains unpinned, as
the entry itself already discloses; not independently resolved this session
either, so this specific sub-figure stays UNVERIFIABLE at primary-source
granularity, matching the entry's own hedge.

---

## 8. temporal_correlation — Hurst exponent (altmann-lineage-2012)

**Claim:** "Hurst exponent H~0.575 (+/-0.002, up to scale ~1e4 tokens); related
figure H~0.6 for sentence-length sequences." Candidate source given as Altmann,
Cristadoro & Esposti (2012), PNAS 109(29):11582, with the attribution explicitly
marked UNCONFIRMED and flagged as the entry's weakest-sourced claim.

**Verification:** Downloaded the arXiv preprint of Altmann, Cristadoro & Esposti
(2012) (arXiv:1207.0658) directly and read the full text. The paper uses a
different mathematical framework entirely (autocorrelation function S(w), burst
statistics, short-/long-range exponent β) — the string "Hurst" does not appear
anywhere in the paper, and no H≈0.575 figure is present.

A follow-up WebSearch specifically chasing the "0.575±0.002... scale of 10^4"
figure returned an explicit, unambiguous attribution: this exact figure is from
**Yang, T., Gu, C., Yang, H. (2016), "Long-Range Correlations in Sentence Series
from A Story of the Stone," PLOS ONE**, published 20 September 2016 — a study of
sentence-length series in a Chinese classical novel (*A Story of the Stone* /
*Hongloumeng*, 34,759 sentences across 120 chapters), independently fetched and
confirmed directly from journals.plos.org this session: "a weak long-range
correlation, with a Hurst exponent of 0.575±0.002 up to a scale of 10⁴."

**Verdict: FAIL (blocker).** The H≈0.575 figure is real and published, but it is
NOT from Altmann, Cristadoro & Esposti (2012) PNAS as the entry's `sources` block
proposes (even as an unconfirmed candidate) — it is from Yang, Gu & Yang (2016)
PLOS ONE, studying Chinese sentence-length sequences, not the English-inclusive
"general-language phenomenon" framing the entry's measurand note implies. This
also means the entry's own note — "at least three candidate research lineages...
were not disambiguated" including "a separate 2018 Chinese-text study" — misdates
the correct source by two years (2016, not 2018) and treats it as one of several
undifferentiated candidates rather than identifying it as the actual, findable
source of the specific number recorded. Given this is the entry's own
self-flagged weakest citation, and a direct check resolves it to a source the
entry does not currently cite at all, this should be corrected: either re-attribute
the H≈0.575 figure to Yang, Gu & Yang (2016) with the correct measurand (Chinese
sentence-length series, not a generic/English-inclusive claim), or revert the
value to unknown/omit pending a check of what Altmann et al. (2012) itself
actually reports (its own long-range correlation exponent, in its own S(w)/β
framework, was not extracted this session and would need separate,
correctly-attributed treatment).

---

## 9. component_ontology note — phoneme inventory figures (PHOIBLE/UPSID)

**Claim (in-line note, not a `sources`-cited value):** "phoneme inventory ~44
(English), cross-linguistic mean ~31-35 per language (PHOIBLE/UPSID)."

**Verification:** WebSearch confirms UPSID is indeed "a statistical survey of the
phoneme inventories in 451 of the world's languages" (Maddieson), consistent with
the entry's "451-language sample" framing, but the specific mean/median/mode
figures (~31-35 mean; UPSID mean 31, median 29, mode 26) could not be
independently confirmed to a specific source page this session — no source
directly stated these summary statistics in the results returned.

**Verdict: UNVERIFIABLE** at the specific-statistic level this session (the
database's existence and rough scope check out; the exact mean/median numbers
do not yet have a session-verified primary hit). Lower priority: this note is not
in the entry's formal `sources:` block and is explicitly hedged in-line as
supplementary color, not a scored value.

---

## Summary of verdicts

| # | Column / claim | Source(s) | Verdict |
|---|---|---|---|
| 1 | extreme_event_statistics — Zipf α=1.95(2), p=0.49 | csn2009 | **PASS** (primary-read, exact match) |
| 2 | degree_distribution — n=460,902/m=17e6/α=2.7/z=70.13/C=0.44 attributed to Newman 2003 | newman2003 | **FAIL (blocker)** — these figures do not appear in Newman 2003; Newman's actual word-co-occurrence row is n=269,504/m=2.13e9/no exponent/C=0.39 |
| 2b | Same network's actual figures (460,902/ℓ=2.67/C=0.437/γ<1.5/γ>2.7) | ferrer-i-cancho2001 | **PASS** (secondary-survey-confirmed) but mis-labeled as also Newman-sourced |
| 3 | numerosity — 460,902 word-type nodes | ferrer-i-cancho2001 | **PASS** |
| 4 | characteristic_timescales — 39.15 bits/s (SD 5.10), 17 langs/9 families | coupe2019 | **PASS** (primary-read) |
| 5 | instance_population — 7,164 living languages, 27th ed. 2024 | ethnologue27 | **PARTIAL (fix)** — stale edition; current is 29th ed. 2026, 7,170; entry's own "does not reconcile" note is now resolved and outdated |
| 5b | English speakers 1.53e9 (450M/1,090M) | ethnologue27 (via Wikipedia) | **PASS** (number), **PARTIAL** (edition label stale, same issue as 5) |
| 6 | numerosity — OED 520,779 entries | oed-wikipedia | **PASS** |
| 6b | OED 1989 print ed. 291,500 entries (citation annotation only) | oed-wikipedia | **PARTIAL (fix)** — current Wikipedia fetch gives 290,500 |
| 7 | tipping_transitions — Krauss 90%, ELCat 3.5/yr | krauss1992, elcat | **PASS** (snippet-verified, matches entry's own honest framing) |
| 8 | temporal_correlation — Hurst H~0.575 | altmann-lineage-2012 | **FAIL (blocker)** — figure is real but from Yang, Gu & Yang (2016) PLOS ONE (Chinese sentence-length series), not Altmann et al. (2012) PNAS |
| 9 | component_ontology note — PHOIBLE/UPSID phoneme means | (uncited, in-line note) | **UNVERIFIABLE** |

## Overall assessment

Two of the entry's central quantitative claims — the flagship Zipf/CSN figure and
the Coupé spoken-information-rate figure — are now genuinely primary-read and
confirmed exact. But the entry's SECOND-most load-bearing structural claim (the
degree_distribution network statistics) contains a real miscitation: the specific
numbers attributed to Newman (2003) do not appear in that paper, which instead
independently reports a starkly different word-co-occurrence network (n=269,504,
no fitted exponent). This is a blocker because the entry explicitly claims Newman
"matches"/corroborates a figure that is, on inspection, Ferrer i Cancho & Solé's
own number with no independent Newman confirmation at all — a genuine
double-counting-as-independent-corroboration error, not just an imprecise
citation. Similarly, the entry's self-identified weakest citation
(temporal_correlation's Hurst exponent) turns out to be traceable to a definite,
findable, but different and uncited paper (Yang, Gu & Yang 2016) studying Chinese
text, not the "candidate" PNAS paper the entry proposes even tentatively — worth
fixing now that the correct source is known rather than leaving as a standing
"unconfirmed" flag. The instance_population and OED-1989 figures are both
minor/stale-data PARTIAL issues, not fabrications, and the entry's own
low-confidence/hedged framing on both already signals appropriate caution to a
reader.
