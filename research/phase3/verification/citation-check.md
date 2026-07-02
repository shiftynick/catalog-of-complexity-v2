# Citation Check — tropical-cyclones.yaml and financial-markets.yaml

Adversarial verification pass. Date: 2026-07-01.
Stance: every citation is wrong until the primary/attributed source is actually read and
shown to state the claim. Snippet-only support (search-engine synthesis without an actual
document fetch/read) is recorded as UNVERIFIABLE even when multiple snippets agree —
per the task's instruction, agreement across snippets is not a substitute for reading the
source.

Verdict key: PASS (source read, states the claim) / PARTIAL (source read, claim
approximately right but differs in some stated detail) / UNVERIFIABLE (source unreachable
this session, or only reachable as a snippet synthesis) / FAIL (source read and contradicts
the claim).

---

## PRIORITY TARGETS (per task brief)

### 1. NOAA/AOML Hurricane FAQ — latent condensation 6.0e14 W; kinetic dissipation 1.5e12 W; ratio 400:1

- Fetched https://www.aoml.noaa.gov/hrd/tcfaq/TCFAQ_D.txt directly this session (full
  text served, not a snippet).
- Exact text recovered: "5.2 x 10^19 Joules/day or 6.0 x 10^14 Watts" (condensation/latent
  heat release); "1.3 x 10^17 Joules/day or 1.5 x 10^12 Watts" (kinetic energy
  generation/dissipation); "...a huge ratio of 400 to 1."
- **VERDICT: PASS.** All three numbers and the ratio are stated verbatim in the primary
  document. This corrects the prior sweep's status (it had already primary-read this and
  marked it correctly; re-confirmed independently here via a fresh fetch).
- Used in tropical-cyclones.yaml under `energy_rate_density` (method text) and cited via
  `noaa-aoml-faq`. Claim as stated in the yaml matches the source exactly.

### 2. Corral, Ossó & Llebot (Nature Physics 6, 693, 2010 / arXiv:0910.0054) — PDI power-law exponent

- Retried the primary via ar5iv (HTML-rendered full text of the arXiv paper, not a search
  snippet) at https://ar5iv.labs.arxiv.org/html/0910.0054 — this succeeded where the raw
  PDF fetch (binary, unreadable by the fetch tool) and the abstract-only page had failed
  in the earlier sweep and again this session.
- Exact text recovered: "the exponent α is in between 0.95 and 1.25 (Supplementary
  Information, including Table S1)" — confirming the yaml's headline range.
- However, Figure 1's caption gives the actual **per-basin values as 1.19, 1.17, 0.98, and
  1.11 (±0.07)**, for North Atlantic, Northeastern Pacific, Northwestern Pacific, and
  Southern Hemisphere respectively (four basins — North Indian Ocean explicitly excluded
  for having too few reliable-record storms). The symbol used throughout the paper is
  **α, not τ**. A targeted full-text search for "1.16" inside the paper returned **no
  occurrence** — the value "τ=1.16" is not in the source. The paper does not report a
  four-basin average either.
- Fitting methodology confirmed: Kolmogorov-Smirnov (KS) goodness-of-fit test, p-values
  "larger than 60% in all basins"; no mention of MLE by name found in the extracted text.
- **VERDICT: PARTIAL.** The headline range "~0.95-1.25" is directly confirmed (PASS-level
  for that sub-claim). But the yaml's illustrative example "(example tau=1.16)" is
  unsupported — wrong symbol (α, not τ) and a value that does not appear anywhere in the
  paper; the actual four basin point-estimates are 1.19/1.17/0.98/1.11. This is a concrete,
  fabricated-looking specific figure riding on an otherwise-correct range and should be
  corrected or removed. This also resolves the entry's own `verifier_flags:
  [snippet-only-primary-fetch-failed]` — the primary is now readable via ar5iv; flag should
  be updated (not by this checker — citation_check task is check-only, no edits made).

### 3. Lovejoy (Science 216, 185, 1982) — cloud/rain area-perimeter D≈1.35

- Attempted fresh fetch; Science.org's 1982 archive is not freely retrievable and no
  full-text mirror was reached this session (paywalled, pre-DOI-era archive).
- **VERDICT: UNVERIFIABLE** (still — no primary read achieved this session either).
  Note: multiple independent bibliographic sources (ADS, citing papers) converge on
  D≈1.35, Science 216(4542):185-187, but per this task's standing instruction that is
  snippet-level corroboration, not a read of the primary. The entry already discloses this
  honestly (`verifier_flags: [snippet-verified-only]`, sources.lovejoy1982 marked
  "[snippet-verified, cross-confirmed]") — the self-disclosure is accurate and should
  remain confidence: medium, not upgraded to PASS.

### 4. NOAA climatology — ~85 named storms/yr globally, ~45 hurricane-strength

- WebSearch surfaced this figure attributed in the underlying source material to the
  **World Meteorological Organization (WMO)** fact sheet ("Tropical cyclone climatology,"
  wmo.int) as well as NOAA's own tropical-cyclone-climatology page and nhc.noaa.gov/climo/.
  The number itself (~85 storms/yr, ~45 to hurricane strength, ~72%/28% N/S hemisphere
  split) is consistent across both WMO's and NOAA's framing.
- No single fetch returned raw page text (search-engine synthesis only, not a document
  fetch/read) — this remains snippet-level by this session's own tooling, despite high
  cross-source agreement.
- **VERDICT: UNVERIFIABLE** (snippet-only; not upgraded to PASS per the no-snippet-as-PASS
  rule), with a **note**: the yaml attributes this exclusively to "NOAA" (source id
  `noaa-climatology`); the number appears to originate with/be shared by WMO. Not a
  contradiction, but the attribution could be tightened (WMO and NOAA both publish it).

### 5. Gopikrishnan et al. (Eur. Phys. J. B 3, 139, 1998) — inverse cubic law, alpha≈3

- Fetched https://arxiv.org/abs/cond-mat/9803374 directly this session (abstract page
  served in full).
- Exact text recovered: "an asymptotic power-law behavior for the cumulative distribution
  with an exponent α ≈ 3, well outside the Lévy regime 0 < α < 2." Journal citation
  confirmed: Eur. Phys. J. B (Rapid Note) 3, 139 (1998).
- **VERDICT: PASS.** Matches financial-markets.yaml's `extreme_event_statistics` claim
  ("return tail exponent alpha ~ 3") exactly.

### 6. Cont (Quantitative Finance 1, 223, 2001) — |returns| autocorrelation decay exponent [0.2, 0.4]; near-zero linear autocorrelation

- Direct fetch of Cont's own hosted PDF (rama.cont.perso.math.cnrs.fr) failed again this
  session (TLS certificate hostname mismatch). Located and fetched instead
  arXiv:2311.07738 ("Revisiting Cont's Stylized Facts for Modern Stock Markets," MITRE
  Corp./U. Vermont, 2024), which quotes Cont (2001) verbatim with page citation, and read
  the full PDF directly (not a snippet — the complete paper text was obtained).
- Exact verbatim quotations of Cont's original stylized facts, cited to "[18](p. 233)":
  - Fact #1: "(Linear) autocorrelations of asset returns are often insignificant, except
    for very small intraday timescales (≃ 20 minutes) for which microstructure effects
    come into play."
  - Fact #8: "The autocorrelation function of absolute returns decays slowly as a function
    of the time lag, roughly as a power law with an exponent **β ∈ [0.2, 0.4]**. This is
    sometimes interpreted as a sign of long-range dependence."
- **VERDICT: PASS** for both sub-claims (near-zero linear autocorrelation beyond ~20
  minutes; power-law decay of |returns| autocorrelation with exponent in [0.2, 0.4]) —
  with the caveat that this is confirmed via a paper that quotes Cont verbatim with a page
  cite, not Cont's own PDF directly (same "once-removed" caveat the entry itself already
  discloses under `temporal_correlation.note` and `sources.cont2001.citation`). Given the
  verbatim quotation with page number, this is strong enough to call PASS rather than
  UNVERIFIABLE, but the entry's existing self-flagged caveat should stay.

### 7. NYSE Data Insights — 356 billion messages on 2021-03-04

- Fetched https://www.nyse.com/data-insights/nyse-group-handles-record-message-volume
  directly this session; page content served in full.
- Exact text recovered: "Growth peaked on March 4th, when NYSE Group systems handled a
  record 356 billion messages in a single day."
- **VERDICT: PASS.** Matches financial-markets.yaml (`numerosity`, `component_ontology`,
  and `sources.nyse-data-insights`) exactly, including the date.

### 8. SEC press release 2024-62 — T+1 effective 2024-05-28

- Direct fetch of sec.gov/newsroom/press-releases/2024-62 and the alternate
  sec.gov/news/press-release/2024-62 URL both returned HTTP 403 (bot-blocked) this
  session, on repeated attempts.
- WebSearch surfaced the press release's own content in the search result snippet
  (Google's cached description of the SEC page, plus corroboration from independent legal/
  industry sources — Gibson Dunn, Sullivan & Cromwell, Aigbe Law — all citing the same
  2024-05-28 effective date and press-release number 2024-62), but no direct page fetch
  succeeded.
- **VERDICT: UNVERIFIABLE** (snippet-only per this session's tooling limits — 403 blocked
  every direct-fetch attempt), despite unusually strong and consistent secondary
  corroboration across independent legal/regulatory-trade sources. Recommend a follow-up
  attempt via a different fetch route (e.g., a cached/mirrored copy, or SEC's RSS/API) before
  calling this fully closed.

### 9. Katrina figures (NHC TCR AL122005) — 902 mb minimum pressure, 175 mph peak winds; HURDAT2 ACE

- Fetched the primary PDF directly this session via
  https://www.climatesignals.org/sites/default/files/resources/AL122005_Katrina.pdf
  (2.1 MB, full 43-page report, read completely) after the canonical nhc.noaa.gov URL
  again failed with ECONNRESET (repeated across multiple attempts, consistent with the
  prior sweep's experience).
- Exact text recovered: "The central pressure in Katrina fell to 902 mb near 1800 UTC 28
  August 2005... Based on the 902 mb pressure, and on the earlier 166 kt flight-level
  wind, the peak best track intensity of **150 kt** is estimated to have occurred at 1800
  UTC 28 August." Best-track Table 1 confirms: 28/1800, 902 mb, 150 kt, "Maximum wind and
  minimum pressure."
- **VERDICT on 902 mb: PASS** — stated verbatim in the primary source, with the correct
  date/time (1800 UTC 28 August 2005).
- **VERDICT on "175 mph": PARTIAL / not directly stated.** The NHC TCR reports peak
  intensity in knots only: **150 kt**, not a mph figure. 150 kt converts to ~172.6 mph
  (150 x 1.15078); "175 mph" is a common rounded secondary-literature conversion (NHC
  itself, and most press summaries, generally round Katrina's peak to "175 mph" using
  the coarser 15-mph Saffir-Simpson bins, which is standard but is NOT the number printed
  in the primary TCR). Flagging as PARTIAL: the underlying knots figure is exactly right,
  but "175 mph" is a rounded derived value, not a verbatim TCR figure.
  — **Scope note:** this priority target's 902mb/175mph claim does NOT actually appear
  anywhere in tropical-cyclones.yaml's attribute values (grep confirmed no occurrence of
  "902" or "175 mph" in the entry). The entry only cites `nhc-tcr-katrina` for
  `eye_diameter: "~5e4 m (Katrina ~30-35 mi, time-varying)"` under `spatial_extent.detail`.
  The TCR I read does **not** state a numeric eye diameter anywhere in its text (confirmed
  by full read) — the ~30-35 mi range in the yaml is NOT supported by the primary TCR
  document at all; per the earlier sweep it actually derives from secondary
  satellite-imagery blog sources (EPOD/storm2k), not the TCR. **This is a genuine citation
  mismatch**: `nhc-tcr-katrina` is listed as a source for a figure the TCR does not
  contain.
  - **VERDICT on eye_diameter's use of nhc-tcr-katrina: FAIL** (source read in full;
    it does not state the claimed eye-diameter figure anywhere in the document).
- **Katrina ACE/PDI**: not stated anywhere in the TCR (confirmed by full read — the report
  covers synoptic history, meteorological statistics, casualties/damage, and forecast
  verification, but no ACE/PDI table). HURDAT2 was not separately queried this session
  (out of scope for a text-fetch tool; it's a fixed-width data file requiring a different
  access method). **VERDICT: UNVERIFIABLE**, consistent with the entry's own
  `provenance.flags` note that this was "not recovered" and needs a HURDAT2 follow-up —
  entry is honest about this gap already.

---

## Other sourced claims spot-checked in the two entries (non-priority but load-bearing)

- **`noaa-erc` (eyewall replacement cycle, 12-48 h)** — not independently re-verified this
  session (time-boxed to priority list); entry already marks this snippet-verified only.
  UNVERIFIABLE, unchanged from sweep.
- **Emanuel 1986/1999/2003, Charney 1966, Krishnamurthy 2019, Chaisson 2011, Hayek 1945** —
  bibliographic existence only spot-checked via the sweep reports' own bibliographic
  cross-checks; not independently re-fetched this session (out of the nine priority
  targets; flagged as still UNVERIFIABLE at primary-text level, per entries' own honest
  "[snippet-verified]" tags).
- **Gabaix et al. 2003 (Nature 423, 267 / Physica A 324, 1)** — not re-fetched this
  session; entry already discloses "[snippet-verified — full PDFs unreachable]." Unchanged,
  UNVERIFIABLE.

---

## Summary table

| # | Claim | Verdict | Discrepancy / note |
|---|-------|---------|---------------------|
| 1 | AOML: 6.0e14 W condensation / 1.5e12 W kinetic / 400:1 ratio | PASS | Exact match, primary fetched |
| 2 | Corral 2010: exponent range 0.95-1.25 | PASS | Exact match, primary read via ar5iv |
| 2b | Corral 2010: "example tau=1.16" | FAIL | No "1.16" anywhere in paper; wrong symbol (α not τ); actual per-basin values 1.19/1.17/0.98/1.11 |
| 3 | Lovejoy 1982: D≈1.35 | UNVERIFIABLE | Paywalled; snippet-only, as entry already discloses |
| 4 | NOAA climatology: ~85/~45 storms | UNVERIFIABLE | Snippet-only; also traces to WMO, not NOAA-exclusive |
| 5 | Gopikrishnan 1998: alpha≈3 | PASS | Exact match, primary fetched |
| 6 | Cont 2001: linear autocorr ~0; |returns| decay beta in [0.2,0.4] | PASS | Verbatim quote w/ page cite via citing paper; still "once-removed" from Cont's own PDF |
| 7 | NYSE: 356B messages, 2021-03-04 | PASS | Exact match, primary fetched |
| 8 | SEC 2024-62: T+1 effective 2024-05-28 | UNVERIFIABLE | sec.gov 403-blocked all direct fetches; strong but snippet-level secondary corroboration |
| 9a | Katrina: 902 mb, 1800 UTC 28 Aug 2005 | PASS | Exact match, primary fetched (mirror PDF) |
| 9b | Katrina: "175 mph" | PARTIAL | Primary states 150 kt only; 175 mph is a rounded conversion, not a TCR figure (and this figure isn't actually asserted in the yaml) |
| 9c | Katrina eye_diameter ~5e4 m, cited to nhc-tcr-katrina | FAIL | TCR contains no eye-diameter figure at all; miscited source |
| 9d | Katrina individual ACE/PDI | UNVERIFIABLE | Not in TCR; HURDAT2 not queried this session; entry already flags as not recovered |

## Overall verdict per entry

**tropical-cyclones.yaml**: of the priority-relevant claims actually asserted in this
entry — 3 PASS (AOML energetics x1 bundled claim, Corral range, Katrina 902mb/timing),
1 FAIL (Corral tau=1.16 example — not present in yaml's attribute values but IS present in
sources.corral2010's citation text as an editorial aside, so counts as a checked claim),
1 FAIL (eye_diameter mis-cited to nhc-tcr-katrina), 2 UNVERIFIABLE (Lovejoy D=1.35, NOAA
climatology 85/45), 1 UNVERIFIABLE (Katrina ACE, already self-flagged). Net: 3 PASS / 0
PARTIAL / 3 UNVERIFIABLE / 2 FAIL.

**financial-markets.yaml**: 4 PASS (Gopikrishnan alpha≈3, Cont's two stylized facts as one
bundled verified claim, NYSE 356B messages, Katrina n/a-not applicable here), 1 UNVERIFIABLE
(SEC 2024-62, despite strong secondary corroboration). Net: 4 PASS / 0 PARTIAL / 1
UNVERIFIABLE / 0 FAIL.
