# Flag Cleanup — financial-markets.yaml (Phase 3)

Session date: 2026-07-01/02. Task: resolve open provenance.flags and
verifier_flags on `N:\coc\data\classes\financial-markets.yaml` with citable
evidence. This document does not edit the entry; it is the evidence log for
the orchestrator to apply.

---

## Flag 1 — Did CSN 2009 test equity returns? (extreme_event_statistics /
csn-cross-check-unresolved)

**Answer: NO — the cubic law was never a CSN-2009-tested dataset. Its
untested-by-CSN status is now confirmed, not merely unresolved.**

Evidence: `N:\coc\research\phase1\quantitative-backbone.md`, Section 2
("Power-Law Tail Exponents — Clauset, Shalizi & Newman (2009)"), which is a
**primary-read** transcription (full text + Tables 6.1/6.2/6.3 read directly,
per that document's own header) of Clauset, Shalizi & Newman, "Power-law
distributions in empirical data," SIAM Review 51(4), 661-703 (2009),
arXiv:0706.1062.

The document reproduces CSN's full 24-dataset table verbatim (word frequency,
protein interaction degree, metabolic degree, Internet AS degree, telephone
calls, war intensity, terrorist attack severity, HTTP size, species/genus,
bird sightings, blackouts, book sales, city population, email address book
size, forest fires, solar flares, California earthquake intensity, religious
followers, US surnames, **net worth of richest Americans**, paper citations,
papers authored, AOL web hits, web links). There is no stock-return,
equity-return, or any financial-market-price dataset in the list. The nearest
financial/economic entries are "net worth of richest Americans" (wealth,
ruled out as power-law, p=0.00) and "sales of books" — neither is a return
series.

This is not an ambiguous transcription needing re-fetch: the phase1 document
explicitly states in its Section 2 coverage verdict, "No wealth/stock-market-
return dataset with α is in this specific table," and again in the summary
table ("Hurricane Katrina, ERCOT, NYSE, Mississippi, climate, Sun — not
directly present in this table"). I additionally cross-checked this against
general knowledge of the CSN paper's dataset list and found no conflict — CSN
(2009) worked established public datasets across natural/social/technological
domains and did not include a financial-returns series among the 24.

**Recommended entry update:** `evidence_status: measured-untested` can be
tightened to state affirmatively that CSN did not test equity returns (an
absence-of-evidence fact, itself now evidence-backed) rather than "not
confirmed this session." The `csn-cross-check-unresolved` verifier_flag
should be considered RESOLVED — the answer is NO with a citable primary
source (CSN's own dataset table), not an outstanding gap. The inverse-cubic-
law's status as *never subjected to CSN-grade KS/MLE scrutiny* remains true
and worth keeping in the note, just rephrased from "unresolved" to
"confirmed absent."

---

## Flag 2 — Volume and trade-count tail exponents with error bars
(verifier_flags: volume-and-tradecount-errorbars-snippet-only)

**RESOLVED**, via a citable secondary (Xavier Gabaix's own signed review
article, which quotes the primary papers' exponent values with error bars and
attributes them precisely) plus arXiv confirmation of the primary papers'
existence/scope.

- **Volume exponent:** zeta_Q = **1.53 +/- 0.07** (US individual-stock share
  volume, Gopikrishnan, Plerou, Gabaix & Stanley, "Statistical properties of
  share volume traded in financial markets," Phys. Rev. E 62, R4493 (2000);
  arXiv:cond-mat/0008113 — largest 1000 US stocks, 1994-95 data, confirmed via
  arXiv abstract page). Quoted with error bar via Gabaix, "Power Laws in
  Economics and Finance" (Annual Review of Economics, draft PDF at
  pages.stern.nyu.edu/~xgabaix/papers/pl-ar.pdf and the related
  powerLaws.pdf): "Gopikrishnan et al. (2000a) looked at the distribution of
  volume in the U.S. and found an exponent around 1.5: zeta_Q = 1.53 +/- .07."
  This matches (and pins the error bar for) the entry's existing "volume
  tails ~1.5" claim.

- **Trade-count exponent:** zeta_N = **3.4 +/- 0.05** (US, number of trades in
  a 15-minute interval; Plerou, Gopikrishnan, Gabaix & Stanley-line work,
  cited in Gabaix's review as "Plerou et al. (2001)"). A cross-market
  robustness figure is also quoted: **zeta_N = 3.17 +/- 0.1** for the Paris
  Bourse, with the authors' theoretical prediction being an exponent of
  exactly 3. This matches (and pins the error bar for) the entry's existing
  "trade-count tails ~3.4" claim almost exactly (3.4 vs 3.4+/-0.05).

**Status of primary-read vs snippet:** I was not able to get full-text
extraction of the underlying Phys. Rev. E papers themselves (arXiv PDF
fetches returned binary/undecoded content in this session's tooling) — so the
exponent+error-bar values above are **primary-read-adjacent via a quoting
secondary** (Gabaix's own signed academic review, which is itself a primary
author on the underlying papers and states the values as direct quotations
with citations), not a first-hand read of the Phys. Rev. E page proofs. This
is stronger sourcing than the entry's current "snippet-verified" Nature/
Physica A citation, but should be labeled "primary-author-review-verified"
rather than "primary-read" if the catalog's provenance taxonomy
distinguishes the two.

**Recommended entry update:** add a `plerou2000-volume` and
`plerou2001-trades` (or similarly named) source entry citing:
- Gopikrishnan, P., Plerou, V., Gabaix, X. & Stanley, H.E. (2000). Statistical
  properties of share volume traded in financial markets. Phys. Rev. E 62,
  R4493-R4496. arXiv:cond-mat/0008113.
- Plerou, V., Gopikrishnan, P., Amaral, L.A.N., Gabaix, X. & Stanley, H.E.
  (2001?) — the "number of trades" exponent (zeta_N ~ 3.4, US 15-min
  interval; zeta_N ~ 3.17 Paris Bourse), as quoted/cited in Gabaix, X.
  "Power Laws in Economics and Finance." [values quoted via Gabaix's review,
  not the original Plerou paper's own text]
Update `extreme_event_statistics.value` to read "volume tails zeta ~ 1.53 +/-
0.07; trade-count tails zeta ~ 3.4 +/- 0.05 (US), 3.17 +/- 0.1 (Paris
Bourse)" and remove `volume-and-tradecount-errorbars-snippet-only` from
verifier_flags.

---

## Flag 3 — WFE exchange count (instance_population)

**PARTIALLY RESOLVED** — a dated, citable figure exists, but WFE's own
reporting uses two different membership numbers for two different things, and
I could not get past a 403 block on world-exchanges.org's own membership page
to adjudicate directly between them in this session.

- **Full/formal WFE membership: 69 members** (exchanges and CCPs), as of
  **October 2023**, per Wikipedia's World Federation of Exchanges article,
  which states "As of October 2023, the WFE had 69 members" — Wikipedia
  cites this to WFE's own site. [primary-adjacent: Wikipedia quoting WFE, not
  WFE's page itself, which returned HTTP 403 in this session]
- **Broader "market infrastructure providers" figure: "over 250"**,
  including standalone CCPs not part of exchange groups — repeated
  consistently across multiple WFE-sourced secondary pages (Wikipedia,
  MarketsWiki-adjacent search snippets) but without a single precise count or
  a specific as-of date newer than the 69-as-of-Oct-2023 figure.
- A separately-cited **87 member CCPs and clearing services** figure (and, in
  a different/more-recent snippet, "74 member CCPs") appears in WFE's own
  clearing-statistics language — these two CCP figures conflict with each
  other across snippets and could not be dated/reconciled this session.

**Recommended entry update:** tighten `instance_population.value` to "69
member exchanges/CCPs (formal WFE membership, as of Oct 2023); WFE also
describes representing 'over 250' market infrastructure providers in total
(broader count, undated more precisely)." This is a real improvement on the
current "~60-250, definition-dependent" — it pins the low end to a specific
number and date — but full resolution (reconciling 87 vs 74 CCPs, and getting
a fresher date than Oct 2023) would need direct access to
world-exchanges.org/members/membership or world-exchanges.org/about, both of
which 403'd in this session's WebFetch tool.

---

## Flag 4 — Participant counts (component_ontology: trading agents count_oom)

**RESOLVED** for FINRA; NYSE-specific participant/member-firm counts not
separately found (NYSE uses FINRA + its own much smaller member-organization
list; not pinned this session).

- **FINRA-registered representatives: 639,723** at year-end 2025 (up from
  634,498 the prior year; 612,392 at year-end 2021). Source: FINRA 2025
  Industry Snapshot (finra.org/media-center/reports-studies/2025-industry-
  snapshot), published July 2025, reporting on the FINRA-registered-
  representative population through year-end 2025 [figures obtained via
  WebSearch summary of the FINRA press release/report page; direct PDF fetch
  of finra.org/sites/default/files/2025-07/2025-Industry-Snapshot.pdf failed
  to parse as text in this session's tooling, so this is **snippet/search-
  summary-level, not primary-read**, despite being a precise, internally
  consistent, multi-year figure].
- **FINRA member firms (broker-dealers): 3,184** at year-end 2025 (down from
  3,249 the prior year, 3,394 in 2021); 163 firms departed vs 98 new entrants
  in 2025; small firms (1-150 reps) fell to 2,832 from 3,048 in 2021. Same
  source and same caveat (search-summary level).

This directly fills the entry's `numerosity` note ("Participant/agent counts
not recovered ... candidate source per coverage check: FINRA Industry
Snapshot") and the `component_ontology` "trading agents" row currently marked
"not recovered in Phase 3 sweep; unknown."

**Recommended entry update:** set trading-agents `count_oom` to "~6e5 FINRA-
registered representatives + ~3.2e3 FINRA member firms, year-end 2025
(FINRA Industry Snapshot; excludes unregistered algorithmic/prop-trading
participants and non-US participants — a lower bound on total trading
agents, not a full count)." Add a `finra-snapshot-2025` source entry:
"FINRA (2025). 2025 Industry Snapshot. finra.org/media-center/reports-
studies/2025-industry-snapshot. [search-summary-level; direct PDF read
failed in-session]"

NYSE-specific member/participant counts (e.g., number of active NYSE member
organizations/broker-dealers with direct exchange access) were not located
distinctly from the FINRA industry-wide figures in the time available —
**UNRESOLVED** as a separate NYSE-only cut.

---

## Flag 5 — NYSE listed-company count, pinned (numerosity /
component_ontology "listed instruments")

**UNRESOLVED as a single clean number** — sources conflict sharply by
methodology/definition, and I could not reconcile them to one dated,
citable figure in the time available. This is itself a finding worth
recording rather than picking one number arbitrarily.

Figures found this session, all with some sourcing but mutually
inconsistent:
- **"Over 2,300"** — NYSE's own nyse.com/network marketing page (no date
  given; description as "innovators, game-changers and leaders," i.e. an
  informal round figure, not a statistics-table figure).
- **1,588 listed companies, end of 2025** (+4 vs prior year) — per a
  WebSearch summary attributed to Statista's NYSE/Nasdaq comparison page
  (statistics/1277216); WebFetch of that page itself failed (infinite
  redirect). This number is far below the "2,300+" figure and likely reflects
  a narrower definition (e.g., domestic NYSE-listed operating companies
  only, excluding NYSE American, ETFs, and foreign-domiciled listings).
- **2,363 listed domestic companies at NYSE's 2020 peak; 2,272 total
  (domestic + international) as of December 2023** — same WebSearch summary
  chain, sourced to Statista's "NYSE number of listed companies by domicile"
  series (statistics/1330802), not independently verified by direct fetch.
- **~3,657 domestic + 1,515 foreign operating companies across "major US
  exchanges"** (NYSE+Nasdaq combined, end of 2025) — from an early search
  summary; this is a combined-exchange figure, not NYSE-only, so not usable
  directly as the NYSE number.
- The entry's current "~2,400 (snippet)" sits within the plausible range
  bracketed by the 2020 domestic peak (2,363) and the Dec-2023 domestic+intl
  total (2,272), so it is not implausible, but I could not find a single
  primary NYSE or WFE statistics-table figure with an explicit as-of date
  that matches "~2,400" precisely.

I attempted direct fetches of nyse.com/about (404), the WFE
focus.world-exchanges.org listed-companies article (403), and a WFE FY2024
Market Highlights PDF (binary/undecoded in this session's tools) — none
succeeded in pinning a single authoritative dated figure.

**Recommendation:** leave flagged. The entry's honest framing ("~2,400
(snippet-level)") is arguably already appropriately hedged given how much
the underlying sources disagree; if anything, the note should be strengthened
to flag the 1,588-vs-2,300+-vs-2,363-vs-2,272 spread explicitly as a
methodology-dependent range rather than implying a single true value is just
waiting to be looked up. A future pass should go directly to NYSE's own
investor-relations/ICE 8-K statistical supplements (ir.theice.com) or the WFE
statistics database (subscription/registration likely required), which are
the two source types most likely to carry one canonical, dated number.

---

## Summary of source quality tiers used above

- **Primary-read (full text obtained and read in a prior session):** CSN
  2009 dataset table (via phase1 document).
- **Primary-author-review-verified (quoted with citation by one of the
  original authors in a signed review, not the original paper's own text
  read directly):** Gabaix volume/trade-count exponents.
- **Search-summary / snippet-level (WebSearch tool's own synthesis of page
  content, not a direct-fetched and read primary):** FINRA representative
  and firm counts, WFE 69-members-Oct-2023 figure (via Wikipedia), all NYSE
  listed-company counts.
- **Unresolved / conflicting, no single citable figure obtained:** NYSE
  listed-company count; WFE CCP sub-count (87 vs 74); NYSE-specific
  participant/member-firm count distinct from FINRA's industry-wide figure.

No claim above was fabricated; every number is attributed to the specific
search result or fetch that produced it, with its confidence tier stated.
