# Flag Cleanup — tropical-cyclones.yaml

Agent run: resolve the 5 open `provenance.flags` items in
`data/classes/tropical-cyclones.yaml`. No edits made to the entry; findings
only, for the orchestrator to apply. Date of research: 2026-07-01/02.

---

## Flag 1 — Corral et al. 2010 rigor vs. CSN-2009

**Column:** `extreme_event_statistics`
**Task:** assess Corral, Osso & Llebot (2010), "Scaling of tropical cyclone
dissipation," *Nature Physics* 6, 693-696, arXiv:0910.0054, against
Clauset-Shalizi-Newman (2009) "Power-law distributions in empirical data"
standards (MLE fitting, goodness-of-fit testing, comparison against
alternative distributions).

**Method:** primary-read via ar5iv (`https://ar5iv.labs.arxiv.org/abs/0910.0054`,
redirected from `ar5iv.org/abs/0910.0054`; the abs-page redirect resolved to
the full HTML paper, which WebFetch parsed in two passes — one general
methods query, one targeted re-search of the full text for specific terms).

**Findings, with direct quotes from the primary:**

1. **Maximum-likelihood estimation:** NOT FOUND. A targeted re-search of the
   full text for "maximum likelihood," "regression," "least squares," "fit,"
   and "estimator" returned zero hits. The paper states exponents "in
   between 0.95 and 1.25" with uncertainties "±0.07" but the numerical
   fitting procedure is not described in the main text — the paper
   references its own Supplementary Information for exponent details, which
   is not part of the ar5iv HTML render and was not independently retrieved.
   **Verdict component: fitting method UNSTATED in the accessible text**,
   not confirmed as MLE.

2. **Goodness-of-fit testing:** CONFIRMED PRESENT. Direct quote: "The
   Kolmogorov-Smirnov (KS) test yields p-values larger than 60% in all
   basins." A second KS test (two-sample, comparing basins to each other)
   is also reported, with p-values "around 15%" and, per Figure 2's caption,
   individual values of 90%, 73%, 44%, and 73%. This is real, quantitative
   goodness-of-fit testing — the paper does not merely eyeball a log-log
   plot.

3. **Comparison against alternative heavy-tailed distributions
   (lognormal, truncated power law, exponential, Weibull):** NOT FOUND. No
   mention of any alternative-distribution comparison anywhere in the
   accessible text.

4. **Citation of Clauset, Shalizi & Newman (2009):** NOT FOUND. No mention
   of "Clauset," "Shalizi," "Newman," or "power-law distributions in
   empirical data" anywhere in the text. Note on timing: Corral et al. was
   submitted to arXiv in October 2009 (0910.0054) and published in Nature
   Physics in 2010; CSN was published in SIAM Review in 2009 (also
   available on arXiv from 2007). The two are contemporaneous-to-slightly-
   overlapping, so non-citation is plausible on timing grounds alone, not
   necessarily a methodological gap per se — but it does mean the paper was
   not built to CSN's explicit checklist.

**Basin names and exponents** (confirms the entry's existing values exactly):
North Atlantic α=1.19, Northeastern Pacific α=1.17, Northwestern Pacific
α=0.98, Southern Hemisphere α=1.11 (all ±0.07, per Figure 1a caption).

**VERDICT: NEAR-CSN.** The paper performs real quantitative goodness-of-fit
testing (KS test, both one-sample against the fitted power law and
two-sample cross-basin), which is more rigorous than a bare log-log
regression — it cannot be dismissed as "eyeballed." However it falls short
of full CSN-2009 compliance on two counts: (a) the exponent-fitting method
itself (MLE vs. regression) is not stated in the accessible main text, and
(b) there is no statistical comparison against alternative distributions
(lognormal, truncated power law), which is the single most
distinguishing/hardest CSN requirement and is conspicuously absent. Net:
better than "NOT-CSN" (this is not a naive regression-only paper), but it
does not meet the full CSN bar. Recommend the entry's `evidence_status:
measured-untested` be revised to reflect "goodness-of-fit tested, but no
alternative-distribution comparison located" rather than left as a blanket
"rigor unassessed" — the rigor HAS now been assessed, and it's a nuanced,
partial pass.

**Caveat:** the Supplementary Information (referenced by the paper for
exponent-fitting detail) was not retrieved in this session. If it contains
an explicit MLE description, verdict component (1) could upgrade to
CSN-GRADE on that point specifically — but the alternative-distribution gap
(3) would still cap the overall verdict at NEAR-CSN.

---

## Flag 2 — 2023 circulating-mass paper (MDPI)

**Column:** `energy_rate_density`
**Task:** locate, verify, and produce a full citation for the "MDPI 2023"
circulating-mass paper referenced in `research/phase3/verification/coverage-check.md`
(~1e16 kg total, ~1e15 kg core).

**Method:** WebSearch located the paper immediately; WebFetch on the MDPI
page itself returned HTTP 403 (paywall/bot-block), and a ResearchGate mirror
also returned HTTP 403. Neither the actual mass figures nor their
derivation could be independently verified from the primary text in this
session — this is a **citation-only, NOT primary-read or even
snippet-content-verified** result. The figures (~1e16 kg total, ~1e15 kg
core) are taken on the strength of the coverage-check log's earlier
characterization, not independently re-confirmed against the paper's actual
text in this session.

**Full citation** (bibliographic metadata confirmed via WebSearch, title/
journal/volume/article-number/date, NOT full-text-verified):

> Full author list: NOT independently confirmed (WebFetch to both MDPI and
> ResearchGate blocked; WebSearch snippets did not surface the author byline).
> Title: "A Tropical Cyclone or Typhoon as an Element of the
> Earth–Atmosphere–Ionosphere–Magnetosphere System: Theory, Simulations, and
> Observations." *Remote Sensing* (MDPI), Vol. 15, Issue 20, Article 4919
> (2023). Published 11 October 2023. Part of the special issue "Satellite
> and Ground-Based Remote Sensing of Seismic, Volcanic and Cyclonic Activity
> in the Earth-Atmosphere-Ionosphere System." URL:
> https://www.mdpi.com/2072-4292/15/20/4919 (DOI not independently
> confirmed; standard MDPI DOI pattern would be
> 10.3390/rs15204919 — NOT verified, inferred from journal/volume/article-number
> convention, mark as [unverified]).

**VERDICT: PARTIALLY RESOLVED.** The paper exists, is locatable, and a full
bibliographic citation (title/journal/volume/article-number/date/URL) can be
added to the entry's `sources:` block — this is a real upgrade over the
current "2023 study, snippet-level" phrasing. However, the specific mass
figures (~1e16 kg / ~1e15 kg) were NOT re-verified against primary text in
this session (paywalled on both routes attempted); the entry should
continue to mark the mass corroboration itself as snippet-level pending an
actual full-text read, but can upgrade the citation completeness. The DOI
should be independently confirmed before publication-grade citation (mark
[unverified] until then).

---

## Flag 3 — Katrina ACE, computed from HURDAT2 / NHC best track

**Column:** exemplar-statistics (Katrina ACE/PDI)
**Task:** compute Katrina's ACE mechanically from best-track data.

**Method:** Direct HURDAT2 bulk-file fetches (nhc.noaa.gov/data/hurdat/,
multiple filename guesses) and IBTrACS/ArcGIS REST endpoints all failed
(ECONNRESET / 404 / connection refused — the raw multi-megabyte files
exceed what WebFetch could reliably retrieve in this sandbox; no local
outbound network access via Bash/PowerShell curl either — both blocked).
**Successfully retrieved instead: the primary NHC Tropical Cyclone Report
itself** (`https://www.nhc.noaa.gov/data/tcr/AL122005_Katrina.pdf`, Knabb,
Rhome & Brown, updated 4 January 2023), which was fetched via WebFetch,
saved as a local PDF, and read in full with the Read tool — this is a
**primary-read**, not a snippet. Table 1 ("Best track for Hurricane Katrina,
23-30 August 2005") gives the complete official 6-hourly best-track series,
which is the same underlying data as HURDAT2 (both are NHC-maintained and
values match: Table 1's synoptic entries are HURDAT2's entries for
AL122005).

**Extracted wind series** (synoptic times only: 0000/0600/1200/1800 UTC;
statuses TS/HU; wind >= 34 kt; TD, extratropical, and the two non-synoptic
landfall rows at 1110Z/1445Z 29 Aug excluded per the standard ACE
definition):

```
24/1200  35 kt (TS)   25/1800  60 kt (TS)   27/1800 100 kt (HU)  29/0600 125 kt (HU)
24/1800  40 kt (TS)   26/0000  70 kt (HU)   28/0000 100 kt (HU)  29/1200 110 kt (HU)
25/0000  45 kt (TS)   26/0600  65 kt (HU)   28/0600 125 kt (HU)  29/1800  80 kt (HU)
25/0600  50 kt (TS)   26/1200  75 kt (HU)   28/1200 145 kt (HU)  30/0000  50 kt (TS)
25/1200  55 kt (TS)   26/1800  85 kt (HU)   28/1800 150 kt (HU)  30/0600  40 kt (TS)
                       27/0000  90 kt (HU)
                       27/0600  95 kt (HU)
                       27/1200 100 kt (HU)
```
(24 entries total; excluded: 23/1800-24/0600 as TD at 30kt; 30/1200 onward
as TD/extratropical, all <34kt at those stages.)

**Computation:** ACE = 1e-4 x sum(V_max^2) over the above 24 entries.

Sum of squares = 35^2+40^2+45^2+50^2+55^2+60^2+70^2+65^2+75^2+85^2+90^2+95^2
+100^2+100^2+100^2+125^2+145^2+150^2+140^2+125^2+110^2+80^2+50^2+40^2
= **200,050**

**ACE = 200,050 x 1e-4 = 20.0 x 10^4 kt^2** (i.e., 20.0 "ACE units").

**Cross-check:** No pre-published individual-storm ACE figure for Katrina
specifically was located in this session (WebSearch across Wikipedia,
Weather Underground, tropical-cyclones.fandom.com, and general search did
not surface a citable "Katrina ACE = X" secondary figure). As a plausibility
check: the 2005 Atlantic season's published total ACE is 245.3 x 10^4 kt^2
(widely cited, e.g. via NOAA-derived climatology summaries); Katrina at 20.0
would be about 8% of the full season's total from one storm, which is
consistent with Katrina being one of several major hurricanes (Dennis,
Katrina, Rita, Wilma, all Category 4-5) in an unusually active 28-storm
season — plausible order of magnitude, not anomalous. Hurricane Ivan
(2004), a longer-lived, higher-ACE storm, is reported elsewhere at ACE=70.4;
Katrina's shorter high-intensity duration relative to Ivan is consistent
with a substantially lower value. No exact match found, so this is a
**self-computed, transparently-shown figure, not independently
corroborated against a second published number** — mark accordingly.

**VERDICT: RESOLVED (computed).** ACE ≈ 20.0 x 10^4 kt^2, computed directly
from the NHC TCR's official best-track Table 1 (primary-read), full
extraction and arithmetic shown above. Recommend citing as "computed by
this project from NHC TCR Table 1 best-track data (primary-read); no
independent published cross-check located" rather than presenting as a
looked-up figure.

---

## Flag 4 — Lovejoy 1982 primary + hurricane-specific fractal dimension

**Column:** `fractal_dimension_spatial`
**Task:** verify D~1.35 in the Lovejoy 1982 primary; search for a
hurricane-specific published fractal dimension.

**Method:** Attempted physics.mcgill.ca/~gang/ (Lovejoy's own page) —
NOT attempted directly in this session (deprioritized after early routes to
the paper itself failed; see below). Attempted the paper via WebSearch,
which surfaced JSTOR, Science (publisher, paywalled), ADS abstract,
ResearchGate PDF listing, and secondary discussions (a WordPress
science-blog post, a Springer book chapter, and citing papers). No open PDF
of the 1982 Science paper was successfully fetched in this session — this
result is **snippet-level only, same status as before this research pass**,
not upgraded to primary-read.

**Findings (snippet-level, cross-confirmed across multiple independent
secondary mentions):** Lovejoy (1982), "Area-Perimeter Relation for Rain and
Cloud Areas," *Science* 216(4542), 185-187,
doi:10.1126/science.216.4542.185. Multiple independent secondary sources
(mindat.org bibliographic record, ADS abstract, a cloud-fractals blog post,
and a ResearchGate figure caption calling it "the famous Lovejoy (1982)
plot") consistently describe the finding as: perimeter P scales with area A
as P ~ sqrt(A)^D, cloud/rain areas examined from about 1 to 1.2x10^6 km^2,
with the conclusion that rain and cloud perimeters are fractal with no
characteristic length scale between about 1 and 1000 km. The specific
numeric value D~1.35 was NOT independently re-derived or re-quoted from a
primary source in this session — it is carried over from the entry's
existing citation, which the entry itself already marks
`[snippet-verified, cross-confirmed]`. This session's searches corroborate
the paper's existence, exact citation, and general finding, but did not
newly verify the specific "1.35" figure against primary text.

**Hurricane-specific fractal dimension search:** No hurricane-specific
published D was located. Searches for storm cloud shield / rainband
fractal-dimension studies returned only tropical-convection-general results
(the same Lovejoy-type area-perimeter literature applied broadly to
tropical cloud fields, not a hurricane-specific figure) and unrelated
star-formation/turbulence papers. This matches the entry's own existing
honest statement that "a hurricane-specific published D was not located;
this is the general tropical convective cloud-field figure."

**VERDICT: UNRESOLVED (unchanged from current status).** Lovejoy 1982
remains snippet-level only — this session did not gain primary access
(physics.mcgill.ca/~gang/ was not successfully queried; commercial/JSTOR
routes are paywalled). No hurricane-specific fractal dimension exists in
the literature as far as this and the prior session's searches can
determine. Recommend leaving the entry's existing
`verifier_flags: [snippet-verified-only]` in place — this flag is not
resolvable without either (a) successfully reaching
physics.mcgill.ca/~gang/ or a similar open-access mirror in a future
session, or (b) institutional journal access.

---

## Flag 5 — Katrina eye diameter, citable source

**Column:** `spatial_extent` (detail.eye_diameter)
**Task:** find a primary/authoritative source for Katrina's eye diameter, or
confirm none exists.

**Method:** The NHC Tropical Cyclone Report (primary-read in full this
session, see Flag 3) explicitly contains NO eye-diameter figure anywhere in
its text or Table 1 — this independently reconfirms the entry's own
existing citation note ("NHC TCR ... contains NO eye-diameter figure").
However, NHC's **individual operational Forecast/Advisory products**
("fstadv" bulletins), archived at nhc.noaa.gov/archive/2005/mar/, are
themselves primary NOAA/NHC real-time operational products (not secondary
imagery-based reports) and routinely include a structured "EYE DIAMETER"
field, populated from reconnaissance-aircraft and radar fixes at the time
of issuance. Four were fetched directly and read:

- Advisory 18 (27/2100Z Aug 27): **EYE DIAMETER 45 NM**
- Advisory 22 (28/1200Z Aug 28): **EYE DIAMETER 25 NM**
- Advisory 24 (28/2100Z Aug 28, ~3h after 150kt peak intensity, max
  sustained winds 145 kt): **EYE DIAMETER 25 NM**
- Advisory 26 (29/0900Z Aug 29, shortly before Louisiana landfall, max
  sustained winds 130 kt): **EYE DIAMETER 30 NM**

These are primary NOAA operational data, individually citable by advisory
number/timestamp, e.g.: "NWS/NHC, Hurricane Katrina Forecast/Advisory
Number 24, 2100 UTC 28 August 2005" (archived at
nhc.noaa.gov/archive/2005/mar/al122005.fstadv.024.shtml). This resolves the
entry's stated concern (the previous figure was "imagery-based secondary
reports") by substituting operational NHC advisory data instead — a
categorically better source class.

**VERDICT: RESOLVED.** A citable primary source exists: NHC's real-time
Forecast/Advisory bulletins for Katrina, which report EYE DIAMETER directly
and vary from 45 NM (27/2100Z, still intensifying) down to 25 NM (near peak
intensity, 28/1200Z-2100Z) and up to 30 NM (29/0900Z, weakening
pre-landfall). Recommend citing the near-peak-intensity value (25 NM ≈
4.6x10^4 m, consistent with the entry's existing ~5e4 m order-of-magnitude
figure) with the advisory number/timestamp as the source, replacing the
"[unverified — imagery-based secondary reports]" flag with a primary NHC
operational citation. Note the time-varying nature (30-45 NM outside peak
intensity) should probably stay in the `detail` field as-is, since it's
consistent with and now better-sourced than the entry's current
"time-varying" phrasing.

---

## Summary table

| Flag | Column | Verdict | Key result |
|---|---|---|---|
| 1 | extreme_event_statistics | RESOLVED (nuanced) | Corral 2010 = NEAR-CSN: real KS goodness-of-fit testing present, but no MLE statement found in main text and no alternative-distribution comparison — falls short of full CSN-2009 compliance on that count. |
| 2 | energy_rate_density | PARTIALLY RESOLVED | Full bibliographic citation recovered (MDPI *Remote Sensing* 15(20):4919, 2023) but mass figures NOT re-verified against primary text (403 on both MDPI and ResearchGate) — citation completeness improved, content still snippet-level. |
| 3 | exemplar-statistics (Katrina ACE) | RESOLVED (computed) | ACE = 20.0 x 10^4 kt^2, computed from NHC TCR Table 1 best-track data (primary-read), full wind series and arithmetic shown; no independent published cross-check found. |
| 4 | fractal_dimension_spatial | UNRESOLVED | Lovejoy 1982 still not reached in primary form; existing snippet-verified citation stands; no hurricane-specific D exists in literature. |
| 5 | spatial_extent (eye diameter) | RESOLVED | NHC Forecast/Advisory bulletins (primary, operational) give EYE DIAMETER directly: 25-45 NM across the storm's life, 25 NM near peak intensity (Advisory 22/24, 28 Aug). Citable by advisory number. |
