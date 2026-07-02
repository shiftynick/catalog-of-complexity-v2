# Citation check — world-wide-web.yaml

Date: 2026-07-02. Verifier role: CITATION CHECKER (adversarial). Target entry:
`data/classes/world-wide-web.yaml` (status: draft). Reference documents read:
`schema/panel-spec.yaml`, `data/classes/the-internet.yaml` (for reused source keys
newman2003, broido-clauset2019, dnib2025), `research/v0.2-sweep/expansion/world-wide-web-sources.md`,
`research/v0.2-sweep/verification-debt/the-internet.md` (prior primary-read verdicts reused here).

Method: web-verified every load-bearing quantitative citation. Where possible, fetched
primary sources directly (raw PDF bytes via WebFetch, then re-extracted with
`pdftotext -raw`/`-layout`, Git-Bash-bundled poppler) rather than trusting WebFetch's
own LLM-summarized read, per this project's own established practice (the entry's
sources block documents this same technique being used during drafting). A search
snippet alone was never treated as sufficient for PASS.

---

## 1. Newman 2003, Table II — WWW (nd.edu domain) row

**Entry claims** (numerosity.detail, degree_distribution): n=269,504, m=1,497,135,
z=5.55, l=11.27, alpha_in/out=2.1/2.4, C^(1)=0.11, C^(2)=0.29, r=-0.067.

**Verification**: Fetched `arxiv.org/pdf/cond-mat/0303516` (the raw PDF was saved
locally by the fetch tool since WebFetch's own text layer was garbled); re-extracted
with `pdftotext -raw` (NOT `-layout`, which mis-shifts Table II's rows — this is the
same "row-shift extraction bug" flagged in the-internet.yaml's own verification-debt
log). The `-raw` extraction produced a single, correctly-ordered table line:

> `WWW nd.edu directed 269 504 1 497 135 5.55 11.27 2.1/2.4 0.11 0.29 -0.067 14, 34`

This matches the entry's n, m, z, l, alpha, C^(1), C^(2), and r values **exactly**,
digit for digit.

**Verdict: PASS** (primary-read this session, direct raw-PDF extraction).

## 2. Newman 2003, Table II — WWW (Altavista crawl) row

**Entry claims**: n=203,549,046 (~2.04e8), m=2,130,000,000 (~2.13e9), z=10.46,
l=16.18, alpha_in/out=2.1/2.7, clustering/assortativity not given (dashes).

**Verification**: Same `pdftotext -raw` extraction of the Newman 2003 PDF:

> `WWW Altavista directed 203 549 046 2 130 000 000 10.46 16.18 2.1/2.7 74`

No clustering/r values follow before the next row starts — confirms the entry's
"dashes — too large to compute at the time" characterization matches the source
(no C^(1)/C^(2)/r columns populated for this row).

**Verdict: PASS** (primary-read this session, direct raw-PDF extraction).

## 3. Barabási & Albert 1999 — WWW dataset (N=325,729, k=5.46, gamma=2.1±0.1, in-degree only)

**Entry claims**: N=325,729, mean degree k=5.46, credited to reference (6); in-degree
exponent gamma_www=2.1±0.1; explicitly states NO out-degree exponent is reported
anywhere in the paper.

**Verification**: Fetched the stable mirror `pdodds.w3.uvm.edu/files/papers/others/1999/barabasi1999a.pdf`
directly; WebFetch's own text layer again dropped Greek-letter/exponent characters, so
the raw PDF (saved locally by the fetch tool) was re-extracted with `pdftotext -raw`.
Exact quotes obtained from the primary text:

> "(B) WWW, N = 325,729, k = 5.46 (6)." [Fig. 1 caption]

> "The dashed lines have slopes (A) actor = 2.3, (B) www = 2.1 and (C) power = 4."

> "Information about P(k) can be obtained using robots (6), indicating that the
> probability that **k documents point to** a certain Web page follows a power law,
> with gamma_www = 2.1 ± 0.1 (Fig. 1B) (9)."

"k documents point to a certain Web page" is explicitly an **in-degree** measurand
(incoming links), confirming the entry's claim that this is in-degree only. No
out-degree figure appears anywhere in the read text. Reference (6) is not traced to
its full citation in the excerpt obtained, consistent with the entry's own flagged
uncertainty about whether reference (6) is the same nd.edu crawl as Newman's own
"nd.edu domain" row (entry correctly does NOT assume identity — appropriately hedged,
not a citation defect).

**Verdict: PASS** (primary-read this session, direct raw-PDF extraction; matches
entry's numbers and in-degree-only scope claim exactly).

## 4. Broido & Clauset (2019) — WWW/hyperlink graphs not named in technological-networks passage

**Entry claims**: the paper's technological-networks passage names CAIDA
autonomous-systems, "several peer-to-peer networks," and "a few digital circuit
networks" by name; WWW/hyperlink graphs are NOT named in that passage; whether the
broader corpus classifies WWW elsewhere is explicitly left UNCONFIRMED (not asserted
as a negative finding).

**Verification**: Reused `research/v0.2-sweep/verification-debt/the-internet.md`
Item 2's own primary-read transcript (direct `pdftotext -layout` extraction of
`arxiv.org/pdf/1801.03400`, exact quote already captured there):

> "Among the categories representing direct evidence, less than half exhibit the
> weakest form of direct evidence (43% Weakest). This group includes about half of
> the CAIDA autonomous systems networks, several peer-to-peer networks, and a few
> digital circuit networks... Networks in this category [Strong] include the other
> half of the CAIDA graphs."

Confirms: only CAIDA-AS, P2P, and digital-circuit networks are named in that passage;
no WWW/hyperlink-graph mention appears in the material already primary-read for this
project. The entry's careful "unconfirmed, not negative" framing (full SFAnalysis
corpus not fetched) is the epistemically correct characterization of a literature gap,
not an overclaim.

**Verdict: PASS** (reused primary-read; epistemic framing checked and appropriate).

## 5. WorldWideWebSize.com — >= 3.98 billion indexed pages, frozen 2025-01-15

**Entry claims**: "at least 3.98e9 (worldwidewebsize.com, frozen at its 2025-01-15
value; tracking now broken — Google has blocked the site's automated retrieval since
that date...)."

**Verification**: Fetched `worldwidewebsize.com` directly this session. Confirmed
verbatim:

> "The indexed web contains at least 3.98 billion pages" — last updated
> Wednesday, January 15, 2025.

> "Since January 15, 2025 we cannot receive any data from Google. They make it very
> difficult to automatically retrieve data from the search engine."

Matches the entry's figure, freeze date, and stale-tracking characterization exactly.

**Verdict: PASS** (primary-read this session, direct fetch of the source page itself).

## 6. Google Official Blog (2008-07-25) — 1 trillion unique URLs

**Entry claims**: "1e12 (1 trillion unique URLs Google's indexing systems had
encountered as of July 2008, after exact-duplicate de-duplication...)."

**Verification**: Direct WebFetch of `googleblog.blogspot.com/2008/07/we-knew-web-was-big.html`
returned only header/nav boilerplate (dynamic content not rendered by the fetch tool);
a Wayback Machine mirror was unreachable ("Claude Code is unable to fetch from
web.archive.org"). Fell back to WebSearch, which returned multiple independent
contemporaneous secondary sources corroborating the exact figure and framing,
including a source with the number in its own title ("Google Breaks the URL
Barrier - 1 Trillion Unique URLs At ONCE," StepForth, 2008-07-25) and
TechCrunch/VentureBeat/PCWorld/Wikinews pieces from the same date, all describing
Google's indexing systems processing "1 trillion (1,000,000,000,000) unique URLs...
at once," obtained after de-duplication of exact-duplicate URLs.

**Verdict: PASS**, but downgraded confidence: the primary blog post itself could not
be directly re-fetched this session (dynamic/JS-rendered page, and the Wayback mirror
was blocked at the tool level) — this is corroborated via multiple independent
contemporaneous secondary sources rather than a fresh primary read, consistent with
the entry's own honest "[snippet-verified]" annotation for this source. No
discrepancy found. **Note, not blocking**: the entry's own source annotation says
"snippet-verified this session, via archived copy of googleblog.blogspot.com" — this
verifier could not independently reproduce a direct fetch of the archived copy (the
tool blocked web.archive.org access), so this check relied on independent secondary
corroboration instead of confirming the archived-copy fetch specifically. The
underlying number and framing are solidly corroborated regardless.

## 7. DNIB Q4/annual 2025 — 386.9 million registered domains, +22.7M/+6.2% y/y

**Entry claims**: "~3.9e8 (386.9 million, end-2025, DNIB/Verisign...)," explicitly
labeled snippet-only, reusing the-internet.yaml's identical source-key and citation
string.

**Verification**: WebSearch confirmed via DNIB.com's own report page, Verisign's own
blog/investor-relations press release, and multiple independent secondary aggregators
(BusinessWire, CircleID, NamePros): "The fourth quarter of 2025 closed with 386.9
million domain name registrations... Domain name registrations increased by 22.7
million, or 6.2%, year over year." Matches the entry's figures exactly. Citation
string in world-wide-web.yaml correctly retains the "[snippet-only...]" hedge
matching the-internet.yaml's own annotation (no discrepancy found between the two
entries' citation strings on this point, despite an initial mis-read during this
check that was corrected on closer inspection).

**Verdict: PASS**.

## 8. Kleinberg 1999 — bibliographic details

**Entry claims**: Kleinberg, J.M. (1999). "Authoritative sources in a hyperlinked
environment." Journal of the ACM 46(5), 604-632.

**Verification**: WebSearch confirmed via ACM Digital Library (DOI 10.1145/324133.324140)
and multiple independent bibliography aggregators: Journal of the ACM, Vol. 46, No. 5
(1999), pp. 604-632. Matches exactly.

**Verdict: PASS** (bibliographic details only).

## 9. Kleinberg 1999 — experimental dataset scale ("~2,000-page base set / ~20,000-page neighborhood")

**Entry's `sources.kleinberg1999` citation string claims**: "Core HITS-algorithm
contribution and ~2,000-page base set / ~20,000-page neighborhood experimental scale
confirmed at this tier [snippet-verified]."

**Verification**: Fetched `cs.cornell.edu/home/kleinber/auth.pdf` directly (the
Cornell-hosted primary PDF, the same URL the entry's own citation string names);
WebFetch's own summarized read asserted the "~2,000/~20,000" figures but could not
locate the exact passage. Re-extracted the raw PDF with `pdftotext -raw` and searched
the actual primary text. The paper's own stated methodology (Section 2, "Constructing
a Focused Subgraph of the WWW"):

> "For a parameter t (typically set to about **200**), we first collect the t
> highest-ranked pages for the query sigma from a text-based search engine... We
> refer to these t pages as the root set R."

> "...in our experiments we construct it by invoking the Subgraph procedure with the
> search engine AltaVista, t = 200, and d = 50. We find that S [the base set] typically
> satisfies points (i), (ii), and (iii) above -- its size is generally in the range
> **1000-5000**."

No "~2,000-page base set" or "~20,000-page neighborhood" figure appears anywhere in
the primary text read this session (checked specifically for "2000," "20,000," and
"neighborhood" — none of these match the claimed scale). The paper's own stated
scale is: root set t ~ 200 pages, expanded base set S ~ 1,000-5,000 pages. No
"20,000" figure of any kind was located.

**Verdict: FIX**. This is a citation-string-level error, not a claim used anywhere in
a scored column's justification text (grep of the entry confirms "2,000" / "20,000"
never appear in any attribute justification — the erroneous figure lives only inside
`sources.kleinberg1999`'s citation string, which is source-block metadata, not a
column value). It does not appear to poison any specific scored attribute (modularity,
information_processing, and emergence all cite Kleinberg 1999 only for its qualitative
HITS-algorithm contribution, not for this specific dataset-scale number), which is why
this is scored FIX rather than blocker — but the citation string itself asserts a
specific, checkable numeric claim that the primary source does not support, and it
carries a "[snippet-verified...confirmed at this tier]" annotation implying a
verification that in fact returned an incorrect number. Recommend either (a) correcting
the citation string to state the paper's actual figures (root set t~200; base set
S~1,000-5,000, no "neighborhood" figure of ~20,000 located), or (b) removing the
specific numeric claim from the citation string entirely if it is not load-bearing for
any column.

## 10. Cross-check: numerosity historical-milestone framing (2008 vs. current, non-comparability)

The entry explicitly states the 2008 "1 trillion unique URLs" figure and the current
"3.98e9 indexed pages" figure are "definitionally incommensurable... and must not be
combined or compared as if measuring the same thing" (numerosity note and provenance
flag). This is consistent with both sources' own framing (Google's 2008 post describes
URLs *encountered/crawled*, a cumulative-ever count; worldwidewebsize.com measures
pages *currently indexed*, a point-in-time snapshot) — no fabrication or conflation
found.

---

## Summary of verdicts

| # | Citation / claim | Verdict |
|---|---|---|
| 1 | Newman 2003, WWW nd.edu row (all 9 figures) | PASS |
| 2 | Newman 2003, WWW Altavista row | PASS |
| 3 | Barabási & Albert 1999, N/k/gamma, in-degree-only scope | PASS |
| 4 | Broido & Clauset 2019, WWW not named in tech-networks passage | PASS |
| 5 | worldwidewebsize.com, 3.98e9 pages, frozen 2025-01-15 | PASS |
| 6 | Google 2008 blog, 1 trillion unique URLs | PASS (secondary-corroborated; primary fetch blocked at tool level) |
| 7 | DNIB Q4 2025, 386.9M domains, +22.7M/+6.2% y/y | PASS |
| 8 | Kleinberg 1999 bibliographic details | PASS |
| 9 | Kleinberg 1999 "~2,000/~20,000" dataset-scale claim (citation string only) | **FIX** |
| 10 | 2008-vs-current numerosity non-comparability framing | PASS (no fabrication) |

No blocker-severity findings. One fix-severity finding (item 9): a specific,
checkable numeric claim inside the `sources.kleinberg1999` citation string
("~2,000-page base set / ~20,000-page neighborhood") is not supported by the primary
text, which instead states root set t~200 and base set size 1,000-5,000 pages. This
does not appear to poison any scored attribute value (Kleinberg is cited elsewhere
only for the qualitative HITS contribution), but the citation string's own
"[snippet-verified... confirmed at this tier]" annotation overstates the verification
that was actually performed, and should be corrected before verified status.
