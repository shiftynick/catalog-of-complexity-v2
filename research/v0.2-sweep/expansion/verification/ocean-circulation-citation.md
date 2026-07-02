# Citation check — ocean-circulation.yaml

Adversarial web-verification of load-bearing cited values. Target: `N:\coc\data\classes\ocean-circulation.yaml`.
Reference: `schema/panel-spec.yaml`, `schema/anchors/*.yaml`, `research/v0.2-sweep/expansion/ocean-circulation-sources.md`.

Verdict key: **PASS** (source read, states claim) / **PARTIAL** (approximately right, discrepancy noted) /
**UNVERIFIABLE** (unreachable) / **FAIL** (source contradicts or omits the claim).

---

## 1. Johns et al. (2023) — AMOC transport and heat transport (`energy_rate_density`, `openness_dissipation`, sources.johns2023)

Claim: mean AMOC transport 16.9 ± 1.2 Sv and mean meridional heat transport 1.20 ± 0.12 PW, 2004–2020 record
(April 2004 – December 2020), *Phil. Trans. R. Soc. A* 381(2262), 20220188, DOI 10.1098/rsta.2022.0188.

- Fetched full text at the correct PMC record (**PMC10590663** — note the entry's own citation text does not
  give a PMC ID, but the DOI/journal/volume/issue/page are correct and this is the right paper).
- Direct quote recovered: *"The mean AMOC strength and MHT derived from the 2004 to 2020 record acquired thus
  far are 16.9 ± 1.2 Sv"* and *"1.20 ± 0.12 PW"*, covering April 2004 through December 2020.
- Matches the entry's `characteristic_timescales` (RAPID record "20+ years as of 2024"), `energy_rate_density`
  method note (1.20 ± 0.12 PW), and `openness_dissipation` justification (same figure) exactly.

**Verdict: PASS.** Values, uncertainty, and period confirmed by direct-fetched primary-source quote — stronger
than the entry's own "snippet-verified" annotation suggests; could be upgraded to primary-read.

---

## 2. van Westen & Dijkstra (2023) — AMOC hysteresis width (`tipping_transitions`, `memory_hysteresis`, sources.vanwesten2023)

Claim: hysteresis width ~0.4 Sv in freshwater forcing between AMOC collapse/recovery thresholds, asymmetric
(sea-ice feedback), CESM GCM. Cited as *GRL* 50(19), e2023GL106088, arXiv:2308.14098.

- Fetched arXiv abstract page (arxiv.org/abs/2308.14098) successfully this check (the entry's own provenance
  says every attempt to fetch the full PDF failed and the abstract/methods were never primary-read — that is
  now superseded: the abstract itself was fetched cleanly).
- Abstract confirms: *"a hysteresis width of about 0.4 Sv"*; *"The AMOC recovery is about a factor six faster
  than the AMOC collapse"*; asymmetry attributed to North Atlantic sea-ice distribution effects.
- **Discrepancy found:** the published journal record is **Geophysical Research Letters, Volume 50, Issue 22**
  (confirmed via AGU's own table-of-contents listing, `agupubs.onlinelibrary.wiley.com/toc/19448007/2023/50/22`,
  which lists this exact article), not **Issue 19** as given in the entry's `sources.vanwesten2023` citation
  block. This same wrong issue number (50(19)) also appears in `research/v0.2-sweep/expansion/ocean-circulation-sources.md`
  and is inherited unchanged from `planetary-climate.yaml`'s prior citation — a pre-existing error being
  propagated, not newly introduced by this entry.

**Verdict: PASS on the substantive claim (0.4 Sv, asymmetric, sea-ice-driven) — content fully confirmed.
FIX on the citation metadata (issue number 19 → should be 22).**

---

## 3. Armstrong McKay et al. (2022) — AMOC threshold 1.4–8°C (`tipping_transitions`, sources.mckay2022)

Claim: AMOC collapse threshold 1.4–8°C sustained global warming, *Science* 377(6611), eabn7950.

- Direct full-text PDF fetch of the paper (via a mirrored copy and the NERC repository copy) did not yield
  readable table text in this environment (PDF text extraction failed both times — binary/compressed content).
- Cross-checked against two independent secondary/tertiary sources that both report the specific number:
  (a) a WebSearch synthesis quoting the paper directly: *"Armstrong McKay et al (2022) estimated with low
  confidence a global warming threshold for AMOC collapse of ~4°C (1.4-8°C)"*; (b) the Global Tipping Points
  Report 2023 (an independent scientific assessment, `report-2023.global-tipping-points.org`, section 1.4.2.1
  Atlantic circulation), which is known in the field to reproduce the Armstrong McKay et al. table directly.
- Both independently corroborate the 1.4–8°C range with a ~4°C central estimate at low confidence, consistent
  with the entry's claim.
- Not independently primary-read this check (PDF extraction failed) — same limitation the entry itself
  discloses (inherited Phase-1 primary-read claim, not re-verified this sweep).

**Verdict: PASS at snippet/tertiary-corroboration level** (two independent secondary sources agree exactly on
1.4–8°C); full primary-source table was not directly re-readable in this environment, so this does not rise
above what the entry itself already discloses as its evidence tier for this figure.

---

## 4. Moat et al. (2020) — AMOC weakening trend (`robustness_resilience`, sources.moat2020)

Claim in entry: *"-0.6 ± 0.8 Sv/decade (2004-2020, not significant at 95%)"*, attributed to Moat, B.I. et al.
(2020), *Ocean Science* 16, 863-874, "Pending recovery in the strength of the meridional overturning
circulation at 26° N."

**This is the most significant finding of this check.**

- Fetched the paper's own abstract/landing pages (Copernicus `os.copernicus.org/articles/16/863/2020/`,
  Ifremer Archimer repository copy, and a University of Southampton eprints copy) directly.
- **The paper's actual data period is April 2004 – September 2018**, not "2004-2020" as stated in the
  entry's `characteristic_timescales`/`sources.moat2020` citation text and its `robustness_resilience`
  justification. Two independent fetches of the paper's own pages both state the record ends September 2018.
- **No linear trend value in Sv/decade (with or without uncertainty) was found anywhere in the paper's
  fetched abstract/summary content.** One fetch explicitly reports that the paper uses change-point analysis
  rather than a single linear-trend statistic for the full record ("the tendency of the time series through
  2016 was not monotonic" — the paper's own reasoning for NOT reporting a simple linear trend).
  A different, well-attested 0.6 Sv **per year** (not per decade) decline figure exists in the literature but
  belongs to a short 2007–2011 interannual anomaly window in Johns et al. (2023) — a different paper, different
  units (per year vs. per decade), different period, and explicitly labeled by Johns et al. as an anomaly, not
  a long-term trend. This is a plausible source of confusion but is NOT the same claim as "-0.6 ± 0.8 Sv/decade,
  2004-2020."
- The specific, well-documented per-decade AMOC trend figure that DOES exist in the literature for a
  comparable period is McCarthy et al. (2025, GRL, "Signal and Noise in the Atlantic Meridional Overturning
  Circulation at 26°N"): **-1.0 [-0.4 to -1.6] Sv/decade for 2004-2023, reported as SIGNIFICANT at the 95%
  level** — the opposite significance conclusion from what the entry states. The sweep report itself flags
  this second figure explicitly as "NOT independently pinned to a specific citable primary source" and
  deliberately excludes it, which is appropriate caution — but the entry's own -0.6/"not significant" figure
  turns out to be the one with the sourcing problem, not the excluded one.
- Every WebSearch synthesis that produced a "-0.6 ± 0.8 Sv/decade... not significant at 95%" framing did so
  as free-form model-generated prose, never as a directly quoted sentence from a fetched primary source. This
  is consistent with the entry's own honest flag (`provenance.flags`) that this number came from "WebSearch
  synthesis... not a direct-fetched primary quote" — but this check went further (attempting direct fetches of
  the actual paper) and still could not locate the number in the source, nor confirm the paper covers 2020 at
  all.

**Verdict: FAIL (severity: blocker).** Two independent, material problems: (a) the citied paper's own period is
2004–2018, not 2004–2020 as stated in the entry; (b) the specific trend value "-0.6 ± 0.8 Sv/decade" could not
be located in the source paper via direct fetch, and available evidence suggests it may not exist in that form
in that paper at all — it does not match the paper's own methodology (change-point analysis, not a reported
single linear trend for the full record, per the paper's own text). This value should not be carried in the
catalog as `evidence_status: measured-disputed` — at minimum it needs a direct verified primary-source quote
before being retained at all; the period label ("2004-2020") is independently wrong regardless of the trend
number's fate.

---

## 5. Rahmstorf (2006) — thermohaline conveyor-belt transit time ~1000 years (`characteristic_timescales`, sources.rahmstorf2006)

Claim: ~1000-year (range 1000-2000-year) full-loop transit time, Rahmstorf, S. (2006), *Encyclopedia of
Quaternary Sciences*, Elsevier (PIK-hosted PDF).

- Located and fetched the exact PIK-hosted PDF URL cited in the entry
  (`pik-potsdam.de/~stefan/Publications/Book_chapters/rahmstorf_eqs_2006.pdf`); PDF text extraction failed in
  this environment (binary/compressed content, consistent with the McKay 2022 PDF extraction failure above —
  an environment limitation, not a sourcing problem).
- Corroborated via independent WebSearch synthesis and a related Rahmstorf fact-sheet page
  (`pik-potsdam.de/~stefan/thc_fact_sheet.html`, same author, same institution): *"The loop takes more than
  1,000 years to complete."* This matches the entry's headline figure.
- The entry itself already discloses this is snippet-verified only, full chapter not primary-read, and the
  1000-2000-yr range framing is explicitly flagged `[unverified — model knowledge]`-adjacent. This check did
  not upgrade that status (same PDF-extraction limitation), but did independently corroborate the ~1000-yr
  headline via a second, independent same-author source.

**Verdict: PASS at snippet-verified level** (matches the entry's own claimed evidence tier; independently
corroborated via a second same-author source, headline figure only — the entry's own honest caveat about the
1000-2000-yr range and full-chapter non-read stands uncontradicted).

---

## 6. Mehling, Börner & Lucarini (2024) — AMOC predictability / fractal basin boundary (`chaos_sensitivity`, sources.mehling2024)

Claim: conceptual bistable-ocean/chaotic-atmosphere model; AMOC's asymptotic state depends sensitively on
initial conditions near a fractal basin boundary with "almost full phase space dimension"; quantified via
Lyapunov exponent and chaotic-saddle lifetime. *Physica D* 459, 134043, arXiv:2308.16251.

- Fetched the arXiv abstract page directly. Confirmed: title, authors (Mehling, Börner, Lucarini), journal
  (*Physica D: Nonlinear Phenomena*), volume 459, article 134043 (2024) all correct.
- Abstract text independently reproduces the entry's key claims essentially verbatim: *"the asymptotic state
  depends sensitively on the initial condition in the proximity of a fractal basin boundary"*; *"a fractal
  basin boundary with almost full phase space dimension, implying vanishing predictability of the second
  kind near the basin boundary"*; Lyapunov exponents and chaotic-saddle lifetimes used as the quantification
  method.
- The entry's explicit scoping caveat (conceptual/toy model, not a real-ocean observational finding) is
  consistent with the abstract's own framing (a "conceptual climate model").

**Verdict: PASS.** Full match on bibliographic metadata and substantive claims at the abstract level, which is
exactly the evidence tier the entry itself claims ("primary abstract read... full-text NOT fetched").

---

## Component_ontology / unverified counts (not independently web-checked)

The entry already labels the western-boundary-current count (~5), gyre count (~10), and deep-water-formation
site count (handful, 3-5) as `[unverified — model knowledge]`. These are structural/vocabulary claims rather
than single load-bearing citations and were not prioritized for web verification per the adversarial-priority
instruction (quantitative columns and primary-read-marked values first); no citation exists yet to check
against. Flagged as a **note** only — the entry's own honesty labeling here is already appropriate and does
not need a blocker/fix at citation-check level (a coverage/plausibility check is the more appropriate place
for this gap).

---

## Summary table

| # | Citation | Column(s) | Verdict | Severity |
|---|----------|-----------|---------|----------|
| 1 | Johns et al. 2023 (16.9 Sv, 1.20 PW) | energy_rate_density, openness_dissipation, characteristic_timescales | PASS | — |
| 2 | van Westen & Dijkstra 2023 (0.4 Sv hysteresis) | tipping_transitions, memory_hysteresis | PASS (content); FIX (GRL issue number 19→22) | fix |
| 3 | Armstrong McKay et al. 2022 (1.4-8°C) | tipping_transitions | PASS (tertiary-corroborated) | — |
| 4 | Moat et al. 2020 (-0.6 ± 0.8 Sv/decade, 2004-2020, not sig.) | robustness_resilience | FAIL | blocker |
| 5 | Rahmstorf 2006 (~1000 yr) | characteristic_timescales | PASS (snippet-verified level, matches disclosed tier) | — |
| 6 | Mehling et al. 2024 (fractal basin boundary) | chaos_sensitivity | PASS | — |
