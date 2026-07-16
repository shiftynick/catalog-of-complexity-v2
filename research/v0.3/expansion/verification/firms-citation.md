# Citation check — firms.yaml (v0.3 expansion)

Adversarial citation verification. Method: independent web search + direct WebFetch of primary
sources where reachable, plus manual PDF text extraction (zlib-decompressed content streams) when
WebFetch's summarizer produced numbers that needed ground-truthing against raw text. A search
snippet alone was never accepted as PASS.

## 1. Axtell, R.L. (2001). "Zipf Distribution of U.S. Firm Sizes." Science 293(5536), 1818-1820.

**Verdict: PASS.**

Obtained the actual paper (open-access mirror: faculty.sites.iastate.edu/tesfatsi/archive/tesfatsi/
ZipfDistributionFirmSizes.RAxtell2001.pdf). WebFetch's own model-summarized read of this PDF
returned an internally-inconsistent set of numbers on first pass (slope "-1.059," SE "~0.004,"
R^2 "0.997" — all wrong), so the summarizer's output was NOT trusted; instead the PDF's raw content
streams were extracted directly (zlib-decompressed, parenthesis-delimited PDF string operators) and
searched as literal text. The raw extracted text states, verbatim:

> "...it has a slope of 2.059 (SE = 0.054; adjusted R^2 = 0.992), meaning that alpha = 1.059..."
> "Basing firm size on receipts, a Zipf distribution describes the data (alpha = 0.994)"
> Table 3 (theoretical exponents 1988-1997): 1997=0.9966, 1996=0.9986, 1995=0.9983, 1994=1.0004,
> 1993=1.0008, 1992=1.0009, 1991=1.0004, 1990=0.9995, 1989=1.0006, 1988=1.0039 — min 0.9966, max
> 1.0039.
> "Total [1997] ... 5,541,918" firms.
> "The Zipf distribution may describe firm sizes in other countries as well, a conjecture that can
> only be tested once individual governments make available ... data..."

Every one of these matches the entry's stated values exactly:
- N = 5,541,918 (1997 Census universe) — PASS, verbatim match.
- Employee-based alpha = 1.059, slope -2.059, SE 0.054, adjusted R^2 = 0.992 — PASS, verbatim match.
- Receipts-based alpha = 0.994 — PASS, verbatim match.
- All-business-entities 1988-1997 alpha range "0.9966-1.0039" — PASS, exact match to Table 3's min/max.
- International-scope caveat quote ("The Zipf distribution may describe firm sizes in other
  countries as well, a conjecture...") — PASS, verbatim quote match; correctly used by the entry to
  justify the exemplar(us-firm-population) scoping rather than class-general.
- evidence_status "measured-untested" (pre-CSN OLS methodology, no KS/likelihood-ratio retest) is an
  accurate characterization — the paper is OLS log-log regression only, no CSN-grade goodness-of-fit
  test appears in the extracted text.

Bonus finding (not a flag, informational only): the paper's Table 3 also states 1997 mean firm size
= 19.00 employees/firm (21.8 excluding size-0 firms) directly. The entry's numerosity column
correctly declines to state a per-firm employee count as measured ("this specific division was not
confirmed against Axtell's own tables in this sweep — left as an open follow-up") — that caution
turns out to be over-cautious (the number is right there in Table 3), but declining to state it
is not a citation error, just an available and cheap future upgrade. Noted, not flagged as blocker
or fix since the entry made no false claim.

## 2. Newman, M.E.J. (2003). "The structure and function of complex networks." SIAM Review 45(2), 167.

**Verdict: PARTIAL corroboration — could not re-verify the exact table row against raw primary text
this pass; independent secondary sources corroborate the specific numbers but a fresh primary-read
of Table II itself was not obtained.**

Attempts made: WebFetch of the arXiv abstract page (cond-mat/0303516) and PDF; WebFetch of two
independent open mirrors (math.bme.hu, pdodds.w3.uvm.edu, cs.rice.edu, cs.cornell.edu course-reading
copy). All PDF fetches either exceeded WebFetch's content-length cap or returned only binary/garbled
content from the summarizer. Manual zlib-decompression of the PDF content streams (same method that
worked cleanly for Axtell) was attempted on two of the mirrors but the extracted parenthesis-string
text did not contain readable "director"-related content in either case (likely a CID/Type0 font
encoding in this particular PDF that defeats the literal-ASCII parenthesis-string extraction method
used) — a genuine tool limitation, not a finding about the source.

Fell back to independent WebSearch corroboration (queries constructed to surface the values without
seeding all of them from the entry first): multiple independent search results (course-slide mirrors,
network-science reference pages) consistently report, for Newman's company-directors/board-interlock
row: n = 7,673 directors (914 companies), mean degree z = 14.44, and a degree correlation coefficient
r = 0.276 (one source rounded to "0.28"). These numbers match the entry's cited values. The specific
clustering-coefficient pair (C = 0.59 network / 0.88 one-mode-projection-formula) surfaced in one
search snippet matching the entry's values but not independently in a second, unrelated source.

Given (a) this citation was already primary-read and transcribed in Phase 1 of this project (per the
entry's own provenance note, research/phase1/quantitative-backbone.md line 231 — not re-litigated
here since that predates this sweep and the numbers are internally consistent with this session's
independent corroboration), and (b) independent secondary corroboration matches on the two most
distinctive figures (n=7,673, z=14.44, r=0.276), I do not treat this as FAIL. But because I could not
personally re-open the primary table this session, this is recorded as PARTIAL rather than a full
fresh PASS — recommend a follow-up primary re-read of Table II specifically (a properly OCR'd or
copy-pasted version of the SIAM Review table, rather than a raw compressed PDF) before the entry is
promoted past "verified," purely to close the loop with a genuine primary read this project can point
to.

## 3. Stanley, M.H.R. et al. (1996). "Scaling behaviour in the growth of companies." Nature 379, 804-806.

**Verdict: PASS (for the qualitative claim actually made — the entry correctly declines to state the
unconfirmed numeric beta exponent).**

Independent WebSearch (Nature.com listing, Northwestern Scholars page, Amaral Lab publications page)
confirms: publication is real, published Nature 379, 804-806 (29 Feb 1996); dataset = all publicly
traded U.S. manufacturing companies, 1975-1991; core qualitative finding = for firms of similar size,
the annual log-growth-rate distribution is exponential (tent/Laplace-shaped), not Gaussian. This
matches the entry's stated qualitative claim exactly.

The entry explicitly and correctly refuses to enter the beta exponent value (0.18-0.20) as a stated
number, flagging it "[unverified — model/search-summary, needs a real primary read]" and keeping
evidence_status at measured-untested for the whole extreme_event_statistics entry rather than
promoting the beta figure to measured. This is the right call — I could not locate the actual
Nature paper's table (paywalled) to confirm the exponent value myself either, so treating it as
unconfirmed is correct discipline, not a gap to flag.

## 4. BLS Business Employment Dynamics / Census BDS — establishment 5-year survival (~42-50%)

**Verdict: correctly downgraded already — no new PASS/FAIL to report.**

The entry already marks this evidence_status: unknown with an explicit "[unverified — search-snippet,
not primary-read]" annotation, citing HTTP 403 on all direct bls.gov fetch attempts. I independently
attempted no new fetch here (the entry's own account of the 403 blocking is plausible and consistent
with BLS's known bot-blocking behavior on bls.gov/bdm/ paths) — this is the correct, conservative
treatment of a claim that could not be source-verified, and matches the no-fabrication convention.
Not re-attempted this pass since the entry's honesty here is exactly what the citation-checker role
is meant to reward, not re-litigate absent a new fetch method.

## Summary of verdicts

| Source | Column(s) | Verdict |
|---|---|---|
| axtell2001 | numerosity, instance_population, extreme_event_statistics (Zipf tail) | PASS — verbatim-matched against raw primary-source text |
| newman2003 | degree_distribution | PARTIAL — strong independent secondary corroboration, but no fresh primary re-read of Table II obtained this pass (tool/encoding limitation) |
| stanley1996 | extreme_event_statistics (growth-rate scaling), characteristic_timescales | PASS — qualitative claim confirmed; entry correctly withholds the unconfirmed numeric exponent |
| bls-bds-survival | characteristic_timescales, variation_selection | Already correctly scoped as unknown/unverified by the entry; no independent re-check performed or needed |

No blocker-level findings. One fix-level recommendation (Newman Table II primary re-read) and one
informational note (Axtell's own Table 3 already states 19.00/21.8 employees/firm, an easy future
upgrade for the numerosity column's currently-unstated per-firm employee count, at the drafter's
discretion).
