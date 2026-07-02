# Citation Check — Class Entry "the-internet"

**Checker:** Citation Checker (adversarial), Phase 4.
**Method:** Web-verified the load-bearing quantitative/primary-read citations in
`data/classes/the-internet.yaml`, prioritizing values marked `primary-read` in the
entry's own `sources:` block and the highest-stakes quantitative columns
(degree_distribution, fractal_dimension_spatial, temporal_correlation,
characteristic_timescales, numerosity/component_ontology, energy_rate_density). A
search snippet alone is never treated as PASS. Where the primary PDF's text layer
was corrupted/misaligned on extraction (Newman 2003's Table II proved to have a
systematic row-shift bug across every mirror tried), independent primary-read
companion sources by the same author were located and used to cross-check specific
numbers instead of accepting the garbled table at face value.

Tools used: WebSearch, WebFetch, plus direct `curl` + local `pdftotext -layout`
against several PDFs when WebFetch's own extractor returned only binary/compressed
stream content (the same limitation reported by the entry's own sourcing notes for
Leland et al. 1994 and Broido & Clauset 2019's Nature.com page).

---

## 1. `newman2003` — degree_distribution, modularity (context), fractal-adjacent framing

**Entry's claim (degree_distribution):** "Newman 2003 Table II: n=10,697, mean degree
z=5.98, mean geodesic length l=3.31, clustering C=0.39, assortativity r=-0.189
(disassortative)," 2001 RouteViews-derived AS-level snapshot, alpha=2.5 power-law tail
fit.

**Verdict: PARTIAL.** Table II itself (SIAM Review 45(2), 167-256) could not be
cleanly primary-read this session: every mirror fetched (Cornell, UVM/pdodds, BU
physics, arXiv PDF and TeX source) produced a text extraction with a **systematic
row-shift artifact** — numeric columns bleed into the wrong row label (e.g. "10,697"
lands on the "software classes" text row, "5.98" lands on "software packages," while
"3.31" and the citation pair "86, 148" correctly land on the "Internet" row). This
was reproduced independently across four different PDF sources/mirrors, so it is a
structural property of how this specific two-column table was encoded, not a
one-off fetch failure.

However, two independent facts were confirmed by a genuine primary-read of a
different Newman-authored paper, "The origin of degree correlations in the Internet
and other networks" (arXiv:cond-mat/0303327, fetched and rendered cleanly via local
`pdftotext -layout`):
> "on the structure of the Internet at the autonomous system level, for which
> n = 10,697 and m = 31,992, which gives a mean degree of z̄ = 2m/n = 5.98149."
> "...we use the data of Chen et al. [20] from 2001..."

This exactly confirms **n=10,697, z=5.98, and the 2001 vintage** cited in the entry —
independently, via primary text, not via the garbled Table II. A second Newman
companion paper, "Mixing patterns in networks" (Phys. Rev. E 67, 026126 (2003), arXiv
cond-mat/0209450, also cleanly extracted), independently confirms **r = -0.189** for
"network of direct peering relationships between autonomous systems on the Internet,
**April 2001**" (its own Table II, footnote h) — matching the entry's r=-0.189 and
2001 date exactly.

**Not independently confirmed this session:** l=3.31 (mean geodesic length) and
C=0.39 (clustering coefficient) for the Internet row specifically. The raw
(mis-aligned) extraction placed "3.31" on the Internet row's line, consistent with
the entry's claim, but given the demonstrated row-shift bug elsewhere in the same
table this cannot be scored PASS on its own. One WebSearch snippet surfaced a
conflicting figure ("clustering coefficient of 0.24" for Internet ASes) attributed
loosely to "Newman and colleagues" but not traceable to a specific citable location —
this is noted as a discrepancy signal, not used to override the entry's C=0.39, since
neither figure could be pinned to primary text this session.

alpha=2.5: not independently re-confirmed this session (matches panel-spec.yaml's own
"Internet AS-level alpha~2.5" reference note, so it is at minimum consistent with the
project's existing baseline, but that baseline citation has the identical
unconfirmed-Table-II problem).

**Net assessment:** the load-bearing identity numbers (n, z, vintage, r) are now
primary-confirmed via independent companion papers; l and C remain PARTIAL
(plausible, table-position-consistent, but not primary-confirmed this session due to
a genuine, reproducible extraction obstacle rather than a citation-checker shortcut).
Severity: fix (re-verify l, C directly against a clean table render — e.g. a
university library PDF viewer — before treating as fully verified; do not treat as a
blocker since the two most decision-relevant numbers, n and the alpha=2.5 dating, are
now independently supported).

## 2. `broido-clauset2019` — degree_distribution

**Entry's claim:** ~4% of networks "strongly scale-free," ~52% "weakest possible
evidence"; Internet AS graph's specific Strongest/Strong/Weak/Super-Weak/Not-scale-
free classification NOT confirmed (Nature.com blocked, only arXiv abstract
primary-read).

**Verdict: PASS** for the two percentages and the "not confirmed" honesty claim.
Direct fetch of the arXiv abstract page (arxiv.org/abs/1801.03400) reproduces the
abstract verbatim: "only 4% exhibiting the strongest-possible evidence of scale-free
structure and 52% exhibiting the weakest-possible evidence... a handful of
technological and biological networks can be called strongly scale free." This
matches the entry's 4%/52% figures exactly. The abstract, confirmed via direct fetch,
does **not** name the Internet AS graph's specific category — the entry's claim that
this classification "could NOT confirm" is itself verified true: I attempted to fetch
the arXiv PDF full text (arxiv.org/pdf/1801.03400) and it returned only
binary/compressed stream content, unreadable this session, so Table 1's row-level
detail remains genuinely inaccessible, exactly as the entry states. No fabrication;
appropriately conservative. Highest-priority re-verification target correctly
flagged by the entry itself (provenance.flags).

## 3. `yook2002` — fractal_dimension_spatial

**Entry's claim:** D_f = 1.5 ± 0.1, box-counting method, uniform random placement
would give D_f ~ 2, PMC full-text primary-read (PMC129681).

**Verdict: PASS**, with one under-disclosed scoping nuance (fix, not blocker).
Directly fetched pmc.ncbi.nlm.nih.gov/articles/PMC129681. Confirms verbatim: "The
slope of the straight line indicates that D_f ≈ 1.5 ± 0.1 for each dataset,"
box-counting method, uniform random distribution would give D_f ≈ 2.0 for
comparison. Router-level analysis used 228,265 routers; AS-level analysis used
12,409 ASs from the "Network Analysis Infrastructure." Every numeric figure the
entry attributes to this source is confirmed.

**Fix-level finding:** the primary text states the box-counting log-log plot is
explicitly computed "for North America" (Figure 2a's population-density comparison),
not a stated-global dataset — the entry's method text does not flag this
geographic-scope caveat (it says "population density" generically without noting the
North-America-only box-counting analysis). This does not invalidate D_f=1.5 as a
citable figure but is a scoping precision gap worth recording. Data vintage: the
paper does not state an explicit date for the underlying AS/router snapshot beyond
publication year 2002 — entry already flags this correctly as unstated.

## 4. `leland1994` — temporal_correlation

**Entry's claim:** "H ~ 0.7-0.85 (later survey literature)... NOT independently
confirmed from any primary or snippet source this session... H~0.9 is often quoted
in secondary sources... but was NOT independently confirmed."

**Verdict: PARTIAL — and this checker's primary-read now resolves what the entry
left open, revealing the entry's own recorded range undershoots the primary paper.**
The entry's provenance notes state the primary PDF could not be fetched (SSL error at
ccr.sigcomm.org). This checker located and successfully fetched a different mirror of
the same paper's earlier (1993 SIGCOMM) version — cs.auckland.ac.nz/courses/
compsci742s2c/resources/LTWW93.pdf — via direct `curl` + local `pdftotext -layout`,
which rendered cleanly (unlike the Newman table). Primary text confirms:

- Individual byte-count traces: H = 0.75 (AUG89.LB), H = 0.80 (AUG89.MB), H = 0.85
  (AUG89.HB).
- The paper's own headline MLE-based estimates (Table 1 / Figure 3, four traces
  spanning the 1989-1992 Bellcore Morristown data): "quite stable and fluctuate only
  slightly in the **0.85 to 0.95** range."
- A specific point estimate is given verbatim: "point estimate Ĥ = 0.90 and a
  95%-confidence interval [0.85, 0.95]" for trace AUG89.MP.

This means: (a) the "H~0.9" figure the entry describes as unconfirmed secondary
folklore is in fact **directly stated in the primary paper** as a specific point
estimate (0.90, CI [0.85,0.95]); (b) the entry's own catalogued value of "H ~
0.7-0.85" is **too low** relative to the paper's own headline packet-level MLE
result (0.85-0.95) — it is closer to the byte-level graphical-method sub-range
(0.75-0.85) but does not capture the paper's actual reported ceiling. The
self-similarity/long-range-dependence phenomenon claim itself remains solidly
confirmed (uncontested).

Severity: **fix**. The entry was appropriately cautious in flagging this value as
needing re-verification (exactly the right epistemic move), and this check confirms
the caution was warranted — but in the opposite direction from what "H~0.7-0.85 vs.
H~0.9 folklore" implied: the primary paper's own range (0.85-0.95, packet-level MLE)
sits *above* the entry's recorded 0.7-0.85, and the H~0.9 figure the entry flagged as
unconfirmed-folklore is actually the paper's own explicit point estimate. Recommend
widening/correcting the recorded value to something like "H ~ 0.75-0.95 across
methods and traces (byte-level graphical estimates 0.75-0.85; packet-level MLE
estimates 0.85-0.95, point estimate 0.90 for the AUG89 trace)" with the 1993/1994
paper now citable as primary-read.

## 5. `apnic-huston` — numerosity, component_ontology, characteristic_timescales

**Entry's claim (numerosity/component_ontology):** "~83,739 unique AS numbers ... as
of June 2025" (potaroo.net) and "~80,000 active ASes" (APNIC Blog "BGP in 2025",
2026-01-08).

**Verdict on the AS-count snapshot figures: PASS-adjacent (snippet-corroborated,
consistent with a primary-fetched companion figure).** Direct fetch of
potaroo.net/ispcol/2025-06/daybgp.html returned HTTP 403 (blocked this session, as
the entry itself already discloses — snippet-only is the correct, honest status).
However, WebSearch independently surfaced the same 83,739 figure attached to the same
date (BGP table snapshot, dated from data as of 2025-05-08 per the article),
corroborating but not upgrading to primary-read. Separately, this checker directly
fetched blog.apnic.net/2026/01/08/bgp-in-2025/ (the second cited source) successfully.
It reports **~77,900 IPv4 ASes as of January 2026** (not exactly "~80,000," but in
the same order of magnitude and roughly consistent after accounting for IPv4-only vs.
all-AS-family counting differences with the 83,739 figure) — this part is now
**PASS, primary-read**.

**Entry's claim (characteristic_timescales, line 104): "AS count roughly doubled
~2015-2025."** **Verdict: FAIL.** The same directly-fetched primary source
(blog.apnic.net/2026/01/08/bgp-in-2025/) contains **no 2015 data point at all** — its
own year-by-year table only goes back to January 2022 (72,800 ASes) through January
2026 (77,900 ASes), a ~7% cumulative increase over four years (~2%/year), and the
article explicitly states "the growth of the AS count started to decline in late
2020 and has continued to decline in the ensuing years." This is the **opposite**
framing from "roughly doubled 2015-2025." The specific "~47,000 in 2015" figure that
the entry's own sources block (`apnic-huston` citation, line 712) attributes to this
same article does not appear anywhere in the primary-fetched text. A WebSearch
performed independently for that figure returned a search-engine-generated summary
asserting the 47,000/2015 claim as if sourced from the article, but the actual fetched
article contains no such number — this looks like a hallucinated/phantom figure that
entered the research chain via an AI-search summary rather than the cited primary
source itself.

Severity: **blocker** for the `characteristic_timescales` "roughly doubled
~2015-2025" claim specifically (line 104) — it is not merely unconfirmed, the
directly-fetched cited source's own data contradicts it (2% CAGR with declining
growth rate since 2020 is not "roughly doubled" territory over a 10-year window
unless the 2015 baseline itself is right, and no primary source for that baseline
was found). The `numerosity`/`component_ontology` AS-count range
(~75,000-83,739, 2025/26) itself is fine and should NOT be revised. Only the growth-
trajectory narrative and its "~47,000 in 2015" input are affected. Recommend either
sourcing a real 2015 AS-count figure (e.g., from CAIDA AS Rank historical data or an
APNIC report actually covering that year) or downgrading the claim to "AS count grew
from ~10,697 (2001) to ~75,000-84,000 (2025), order of magnitude unchanged but
absolute count up roughly 7-8x over 24 years; recent (2022-2026) growth is a modest
~2%/year with a declining rate since 2020 per APNIC" — a materially different
characteristic-timescale story than "doubled in a decade."

## 6. `itu2025` — numerosity, component_ontology

**Entry's claim:** ~6.0 billion Internet users, 2025.

**Verdict: PASS, primary-read.** Direct fetch of
itu.int/en/mediacentre/Pages/PR-2025-11-17-Facts-and-Figures.aspx confirms verbatim:
"an estimated 6 billion people – about three-quarters of the world's population – are
using the Internet in 2025." This upgrades the entry's own "snippet-only" status
note for this citation — the press release itself IS now directly fetched and
confirms the figure exactly, including the "~75% of world population" framing
implicit in the entry's percentage-adjacent phrasing. Recommend the entry's source
note be updated from "snippet-only: press release... not opened" to primary-read,
since this checker did open it directly.

## 7. `dnib2025` — numerosity, component_ontology

**Entry's claim:** 386.9 million registered domains, end of 2025, +22.7 million /
+6.2% y/y.

**Verdict: PASS (snippet-corroborated across multiple independent outlets,
consistent with primary publisher).** WebSearch surfaced the DNIB's own primary page
(dnib.com/articles/the-domain-name-industry-brief-q4-2025) and Verisign's own blog
republishing the same release, both stating 386.9 million domains, +22.7 million /
+6.2% year-over-year — figures corroborated identically across at least five
independent outlets (Verisign, BusinessWire, CircleID, NamePros, MarketScreener), all
consistent with the entry's number. Not independently primary-fetched this session
(the DNIB/Verisign pages themselves were not opened, only cross-corroborated via
search), so this remains snippet-verified rather than a full primary-read upgrade,
but the consistency across five independent republications of the same underlying
release meaningfully raises confidence beyond a single snippet.

## 8. `iea-energy-ai` — energy_rate_density, openness_dissipation

**Entry's claim:** data-center electricity consumption 415 TWh globally in 2024
(~1.5% of world electricity consumption).

**Verdict: PASS, primary-read.** Direct fetch of
iea.org/reports/energy-and-ai/energy-demand-from-ai confirms verbatim: "electricity
consumption from data centres is estimated to amount to around 415 terawatt hours
(TWh), or about 1.5% of global electricity consumption in 2024." Exact match. This
upgrades the entry's "snippet-only" status for this citation — the IEA report page
itself is now directly fetched and confirms the figure exactly. Recommend updating
the entry's source note from "snippet-only" to primary-read. The entry's derived
conversion (415 TWh/yr ÷ 8760 h/yr ≈ 4.74e10 W) is correct arithmetic
(415e12 Wh / 8760 h = 4.737e10 W).

The separate "~260-360 TWh/yr, 2022" network-infrastructure-only figure remains
correctly flagged by the entry as unclear-chain/snippet-only; this checker did not
find a citable primary source for it either and does not upgrade its status.

## 9. Mass figure for `energy_rate_density` — correctly REJECTED, no action needed

The entry's rejection of the "~100 million tons" Internet-infrastructure-mass claim
as untraceable to any primary/peer-reviewed source is correct and appropriately
conservative; this checker did not attempt to independently re-source it (the entry
already treats it as illegitimate input, consistent with the no-fabrication rule).
No finding.

## 10. `spatial_extent` (4e7 m, geometric estimate) — no dedicated source claimed

The entry explicitly does not cite a source for this figure and flags it as an
unverified order-of-magnitude geometric inference. No citation to check; correctly
handled as model-knowledge-flagged rather than fabricated-citation.

---

## Summary of source-status upgrades identified this session

Several citations the entry marks `snippet-only` were successfully primary-fetched
by this checker and should be upgraded in a future revision:
- `itu2025` (ITU press release) — now primary-read, confirms exactly.
- `iea-energy-ai` (IEA Energy and AI report page) — now primary-read, confirms
  exactly.
- `leland1994` — a mirror of the 1993 SIGCOMM CCR version (not the exact 1994
  IEEE/ACM ToN "extended version" cited, but the closely related earlier paper by the
  same four authors, same title, same dataset) is now primary-readable and contains
  concrete H-values that update the entry's own recorded range.
- Newman's AS-graph n/z/r/vintage figures — now cross-confirmed via two independently
  primary-read companion papers (cond-mat/0303327, cond-mat/0209450), even though the
  main SIAM Review Table II itself remains stuck behind a reproducible PDF-extraction
  defect across every mirror tried.
- `apnic-huston`'s second source (APNIC Blog "BGP in 2025") — now primary-read;
  confirms the current-count figure but contradicts the "~47,000 in 2015 / roughly
  doubled" growth narrative built on top of it.
