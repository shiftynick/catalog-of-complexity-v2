# Citation Check — earthquake-fault-systems

**Role:** Citation Checker (adversarial). **Entry:** `data/classes/earthquake-fault-systems.yaml`.
**Method:** Web-verified every load-bearing quantitative/citable claim in the entry against
primary sources (full PDF text where obtainable) or, where a primary source was inaccessible,
against independent secondary corroboration. A search snippet alone is never treated as PASS.

Verdicts: **PASS** (source read, states claim) / **PARTIAL** (approximately right, discrepancy
noted) / **UNVERIFIABLE** (source unreachable) / **FAIL** (source contradicts or omits the claim).

---

## Sources fetched and read this session

1. **USGS GIP, "The San Andreas Fault"** (pubs.usgs.gov/gip/earthq3/safaultgip.html) — fetched
   and read directly. PRIMARY-READ, confirmed.
2. **Page & Felzer (2015)**, BSSA 105(4), doi:10.1785/0120140340 — downloaded full 11-page PDF
   from the author's Caltech mirror (its.caltech.edu/~pagem/PageFelzer2015.pdf) and read in full,
   including Table 1, Figures 2-5, and the full Discussion/References. PRIMARY-READ, confirmed
   (this session independently re-verifies the entry's own claimed primary-read status).
3. **Clauset, Shalizi & Newman (2009)**, SIAM Review 51(4), 661 — downloaded full 43-page PDF
   from arXiv (0706.1062) and read in full, including Table 6.1 (row "quake intensity"). This
   is a session-level independent primary re-verification beyond what the entry claims (entry
   says "reused from Phase 1"); confirms the Phase 1 claim was accurate.
4. **Lomax & Henry (2023)**, Seismica 2(1), article 324 — abstract fetched and read via the
   McGill Seismica mirror after DOI redirect. PRIMARY-READ (abstract), confirmed.
5. **Aviles, Scholz & Boatwright (1987)**, JGR 92(B1), 331-344 — fetch attempted against AGU
   Wiley host and ResearchGate mirror; both returned HTTP 403 this session (third and fourth
   attempts overall, following the entry's own two prior failed attempts). Remains
   UNVERIFIABLE beyond secondary bibliographic confirmation (title/journal/volume/page/DOI
   confirmed correct via independent search hits, but the numeric D value(s) are not
   independently re-extracted).
6. **Geller, Jackson, Kagan & Mulargia (1997)**, Science 275(5306), 1616 — full text not
   obtained (Science paywall); corroborated via an independent secondary summary (SCEC-hosted
   mirror page, scec.ess.ucla.edu/~ykagan/perspective.html) that closely paraphrases the
   argument the entry attributes to it. Remains snippet/secondary-corroborated, not
   primary-read, consistent with the entry's own honest disclosure.
7. **UCERF3 statewide fault-section/subsection counts** — USGS fact sheet
   (pubs.usgs.gov/publication/fs20153009 / fs20153009) fetched; landing content did not contain
   the specific numbers. Independently corroborated via multiple secondary summaries (Wikipedia
   UCERF3 article, SCEC UCERF3 page) converging on the same figures the entry cites. Remains
   snippet/secondary-only, consistent with the entry's own disclosure.
8. **Watkins et al. (2016)**, Space Science Reviews 198, 3 — not re-fetched in full this
   session (reused from Phase 1 per the entry); independent secondary search confirms the
   paper does discuss the Olami-Feder-Christensen earthquake-fault SOC model as a genuinely
   contested case, consistent with how the entry uses it.

---

## Claim-by-claim verification

### spatial_extent
- **"more than 800 miles" / ~1,287 km, SAF system total length"** — USGS GIP verbatim: "The
  entire San Andreas fault system is more than 800 miles long." **PASS.**
- **"extends to depths of at least 10 miles"** — USGS GIP verbatim: "extends to depths of at
  least 10 miles within the Earth." **PASS.**
- **SSAF 11-section Table 1 lengths summing to 602 km** (Parkfield 36, Cholame 63, Carrizo 59,
  Big Bend 50, Mojave North 37, Mojave South 98, San Bernardino North 35, San Bernardino South
  43, Mill Creek 56, Garnet Hill 56, Coachella 69) — matches Page & Felzer (2015) Table 1
  exactly, column-for-column, in km. Sum verified: 36+63+59+50+37+98+35+43+56+56+69 = 602.
  **PASS.**

### characteristic_timescales
- **"~150 yr [recurrence] over a documented 1,400-1,500 yr paleoseismic record" (attributed to
  USGS GIP)** — USGS GIP verbatim: "Geologic studies show that over the past 1,400 to 1,500
  years large earthquakes have occurred at about 150-year intervals on the southern San Andreas
  fault." **PASS**, exact match. Note (not a fault): Page & Felzer (2015) separately states a
  *different* number — "Documented paleoearthquake signatures on the SSAF date back 1350
  years" — for a related but distinct claim (length of the documented paleoearthquake
  signature record, not the recurrence-interval geologic-study record). The entry correctly
  attributes the 1,400-1,500 yr/150 yr figure only to USGS GIP and does not conflate it with
  Page & Felzer's 1350-year figure. No fabrication; flagged as a note for awareness only.
- **"63.7 yr average repeat time (rate 0.0157/yr)" — Biasi & Weldon 2009a, via Page & Felzer**
  — Page & Felzer (2015) verbatim: "the M ≥7 earthquake rate given by Biasi and Weldon (2009a)
  of 0.0157 per year (average repeat time of 63.7 years)." **PASS**, exact match.
- **"~137 yr average, with a documented 272-yr gap" — Carrizo Plain (Akçiz et al. 2009, via
  Page & Felzer)** — Page & Felzer (2015) verbatim: "Akçiz et al. (2009) found that the average
  repeat time for large earthquakes is about 137 years; however, a 272-year period with no
  large events occurred." **PASS**, exact match.
- **"~132 yr average, gaps up to ~300 yr" — Pallett Creek (Sieh et al. 1989, via Page &
  Felzer)** — Page & Felzer (2015) verbatim: "At Pallet Creek on the Mojave segment, Sieh et
  al. (1989) found an average repeat time of 132 years but some earthquake gaps as large as 300
  years." **PASS**, exact match. Note: the paper spells the site "Pallet Creek" (one t); the
  entry spells it "Pallett Creek" (two t's, the more common modern spelling). Cosmetic only —
  note, not a fix.
- **"~20 yr (wet regions) to ~50 yr (dry regions, e.g. Carrizo Plain)" — sediment resolution
  limit** — Page & Felzer (2015) verbatim: "In wet regions in California, it takes an average
  of approximately 20 years for a new layer to be deposited; in dry regions, such as the
  Carrizo plain, it takes about 50 years (G. Biasi, personal comm., 2009)." **PASS**, exact
  match.
- **Individual rupture duration ~1-2 min** — entry explicitly self-flags as
  `[unverified — model-knowledge scaling estimate]`. Correctly labeled; not checked further
  since the entry does not claim it is sourced.

### numerosity / component_ontology
- **11 named SSAF sections** — matches Table 1 of Page & Felzer (2015) exactly (same 11 names
  used in spatial_extent). **PASS.**
- **UCERF3 statewide: >350 fault sections (up from 16 in 1988 WGCEP, ~200 in 2007 model), 2,606
  (FM3.1) or 2,665 (FM3.2) subsections** — could not be independently primary-read from the
  USGS fact-sheet landing page this session (content not extractable via WebFetch). Independent
  secondary search (Wikipedia UCERF3 article, SCEC UCERF3 page, multiple aggregator summaries)
  converges consistently on exactly these figures: "350 fault sections... subdivided into 2,606
  subsections (FM3.1) / 2,665 (FM3.2)... up from about 200 for UCERF2." **PARTIAL-to-PASS**:
  the figures are consistent across every independent source found, but no single primary
  document was directly read confirming them in this session — same epistemic status the entry
  itself honestly discloses (`measured-untested`, "snippet-only"). Not a fabrication; correctly
  labeled by the entry. No change of verdict needed — entry's own status label is accurate and
  should not be silently upgraded to `measured` without a genuine primary read.

### interaction_topology / interaction_ontology
- **"faults interact as a complex network" — direct quote from Page & Felzer (2015) Discussion
  section** — verbatim confirmed: "...because faults interact as a complex network" — the final
  sentence of the Discussion and Conclusions section. **PASS**, exact match, correctly located.

### fractal_dimension_spatial
- **Aviles, Scholz & Boatwright (1987), D~1.1-1.4 by segment, 0.5-1,000 km ruler-size divider/
  box-counting method** — UNVERIFIABLE this session (403 on AGU Wiley host and ResearchGate
  mirror, both attempted again independently and both failed). The entry does NOT claim
  primary-read status for the numeric D value and explicitly labels it
  `measured-untested`/"snippet-verified only," consistent with what could be independently
  confirmed (title/venue/DOI check out; the specific D range is not independently
  re-extractable). No fabrication. This is the correct epistemic label already.
- **Lomax & Henry (2023) quotes** — "relocated seismicity at seismogenic depth along major
  fault segments and around large-earthquake ruptures often defines smooth, planar or arcuate,
  near-vertical surfaces across the sub-km to 10's-of-km scales" and "surface traces of
  strike-slip fault zones reflect complex, shallow deformation and not directly simpler, main
  slip surfaces at depth" — both confirmed verbatim against the fetched abstract. **PASS.**
  DOI (10.26443/seismica.v2i1.324) and article number (324) both confirmed correct.

### criticality / extreme_event_statistics (G-R b-value and CSN tension)
- **"b-value of 1.03 ± 0.12 (for M ≥ 2.5)... within 20 km of the SSAF... maximum-likelihood
  method (Aki 1965; Shi and Bolt 1982)... consistent with statewide b=1.0 (Hutton et al. 2010,
  used by UCERF3/Field et al. 2014) and b=0.95 (Tormann et al. 2010)"** — Page & Felzer (2015)
  verbatim: "we estimate a b-value of 1.03 ± 0.12 (for M ≥ 2.5) using the maximum-likelihood
  method (Aki, 1965; Shi and Bolt, 1982). This is consistent with both the statewide b-value of
  1.0 (as seen by Hutton et al., 2010, and used by UCERF3, Field et al., 2014) and 0.95 (found
  by Tormann et al., 2010)." **PASS**, exact match, including all cited sub-citations.
- **Hutton et al. (2010) underlying values** (b=1.01±0.04, M≥4.2, 1932-1980; b=0.992±0.003,
  M≥1.8, 1981-2008) — confirmed in Page & Felzer body text; the entry does not itself restate
  these precise sub-values (only the rounded "1.0" the paper itself uses in its summary
  sentence), so no discrepancy. **PASS** (no over-claim).
- **Tormann et al. (2010): recalibration changes b-value estimate from 1.16 to 0.95** —
  confirmed verbatim in Page & Felzer body text. **PASS.**
- **CSN 2009: alpha=1.64(4), goodness-of-fit p=0.00, for raw California-earthquake-amplitude
  data** — independently re-verified by primary-reading the CSN 2009 paper directly (not merely
  reusing the Phase-1 claim): Table 6.1 row "quake intensity (×10³)" gives
  x̂min=0.794±80.198, α̂=1.64(4), n=19302, and the **p column value is 0.00** (not shown in
  bold, meaning NOT statistically consistent with a power law — p≤0.1 is the paper's own
  rejection threshold). Item description (q): "The intensities of earthquakes occurring in
  California between 1910 and 1992, measured as the maximum amplitude of motion during the
  quake." **PASS**, exact match on both the alpha value and the p=0.00 rejection verdict — this
  entry's claim is now primary-verified beyond its own claimed "reused from Phase 1" status.

### cascade_susceptibility (Wesnousky 2008 / Big Seven / Denali statistics)
- **"of 28 documented surface-rupturing M>=6 earthquakes, 14 (50%) involved two or more
  separately named faults; of the remaining 14, 10 (70%) clearly involved rupture of multiple
  geologically distinct fault segments"** — Page & Felzer (2015) verbatim: "we are able to find
  further details on 28 surface-rupturing M ≥6 earthquakes. Of these, 14 (or 50%) involved two
  or more separately named faults. Of the remaining 14 earthquakes, 10 (or 70%) clearly
  involved the rupture of multiple geologically distinct fault segments." **PASS**, exact
  match, correctly attributed to Wesnousky (2008) via Page & Felzer.
- **"Big Seven" — 4 of 7 M>7.8 continental strike-slip earthquakes since 1900 involved rupture
  on a fault other than the main strand; Denali 2002 nucleated on the Susitna Glacier fault,
  ruptured ~200 km of Denali fault, continued ~100 km on Totschunda fault** — Page & Felzer
  (2015) verbatim, citing Haeussler et al. (2004): "of the so-called 'Big Seven'... four of
  these have associated ruptures on faults other than the main strike-slip fault strand... the
  earthquake nucleated on the previously unknown Susitna Glacier fault before rupturing an
  approximately 200 km stretch of the Denali fault. The rupture then continued along the
  Totschunda fault for approximately 100 km." **PASS**, exact match.

### temporal_correlation (ETAS clustering percentages)
- **"median 30-day SSAF seismicity rate is only 52% of the long-term mean; 1-year median 59%;
  10-year median 72%; even 100-year windows show a median at 93% of the mean with 'anomalously
  slow, non-Gaussian convergence'"** — Page & Felzer (2015) Figure 4 caption verbatim: "(a) The
  median seismicity rate for 30-day time periods is 52% of the mean... (b, c) For 1-year and
  10-year catalogs, the median is 59% and 72% of the mean, respectively... (d) Even for
  100-year catalogs... the median is 93% of the mean... anomalously slow, and non-Gaussian,
  convergence rate (Naylor, Main, and Touati, 2009)." **PASS**, exact match including the
  quoted phrase and the Naylor/Main/Touati attribution.

### watkins2016 (criticality mechanism-contested claim)
- Not re-fetched in full this session (reused directly from Phase 1 per the entry's own
  citation note). Independent secondary search this session confirms the paper genuinely
  discusses the Olami-Feder-Christensen model of earthquake faults as a long-standing
  contested SOC case ("Whether the dissipative version of the OFC model exhibits true SOC has
  remained a long-standing and debated issue"), consistent with how the entry uses this source
  to support "mechanism_status: contested." **PASS** (corroborated, not independently
  full-text re-verified this session — same status as the entry's own Phase-1-reuse
  disclosure).

### geller1997 (chaos_sensitivity / tipping_transitions)
- Full text not obtained (Science paywall). An independent secondary summary (SCEC-affiliated
  mirror, scec.ess.ucla.edu/~ykagan/perspective.html, listed among search results) closely
  corroborates the entry's paraphrase: the paper argues, citing chaos theory, that earthquake
  outcomes depend on "unmeasurably fine details of conditions in Earth's interior," making
  deterministic short-term prediction inherently impossible. **PASS at the corroboration
  level** — consistent with, does not contradict, the entry's claim — but remains
  snippet/secondary-sourced, not primary-read, exactly as the entry's own
  `verifier_flags: [geller1997-not-opened-as-full-text-snippet-synthesis-only]` already
  discloses. No upgrade warranted without an actual full-text read.

### energy_rate_density (derived figure)
- Entry explicitly and correctly labels this `evidence_status: derived`, with every individual
  input (apparent stress 1-3 MPa, fault-zone width 200 m) separately flagged
  `[unverified — model-knowledge]`. This is not a citation to an external published Phi_m value
  (none exists, per both the entry and Phase 1's exhaustive survey of Chaisson 2011) — it is a
  self-disclosed back-of-envelope derivation. Not a citation-fact-check target in the normal
  sense; no external source claims a specific number the entry could misrepresent. Reviewed for
  internal arithmetic consistency only: M0_rate = mu * A * slip_rate = 3e10 Pa * 1.93e10 m^2 *
  0.03 m/yr ≈ 1.74e19 N·m/yr — consistent with the entry's stated "~1.7e19 N·m/yr." Mass:
  1.287e6 m * 1.5e4 m * 200 m = 3.861e12 m^3 * 2700 kg/m^3 ≈ 1.04e16 kg — consistent with the
  entry's stated "~1.0e16 kg" and "3.86e12 m^3." Arithmetic checks out; no fabricated inputs
  found (all flagged as unverified where genuinely unsourced). No blocker.

---

## Summary table

| Claim | Source | Verdict |
|---|---|---|
| SAF system length >800 mi / ~1,287 km | USGS GIP | PASS |
| SAF depth "at least 10 miles" | USGS GIP | PASS |
| SSAF 11-section lengths, sum 602 km | Page & Felzer 2015 Table 1 | PASS |
| ~150 yr recurrence / 1,400-1,500 yr record | USGS GIP | PASS |
| Biasi & Weldon 2009a: 63.7 yr / 0.0157/yr | Page & Felzer 2015 | PASS |
| Carrizo Plain: 137 yr avg, 272-yr gap | Page & Felzer 2015 (Akçiz et al. 2009) | PASS |
| Pallett Creek: 132 yr avg, up to 300-yr gap | Page & Felzer 2015 (Sieh et al. 1989) | PASS |
| Sediment resolution 20/50 yr | Page & Felzer 2015 | PASS |
| G-R b-value 1.03 ± 0.12 (M≥2.5, 20 km) | Page & Felzer 2015 | PASS |
| Statewide b=1.0 (Hutton 2010/UCERF3), b=0.95 (Tormann 2010) | Page & Felzer 2015 | PASS |
| Tormann 2010: recalibration 1.16 → 0.95 | Page & Felzer 2015 | PASS |
| CSN 2009: alpha=1.64(4), p=0.00 | CSN 2009 primary text (Table 6.1) | PASS |
| Wesnousky 2008: 28 events, 14/28=50%, 10/14=70% | Page & Felzer 2015 | PASS |
| Big Seven: 4/7; Denali/Susitna/Totschunda distances | Page & Felzer 2015 (Haeussler 2004) | PASS |
| ETAS clustering: 52/59/72/93% | Page & Felzer 2015 Fig. 4 | PASS |
| "faults interact as a complex network" quote | Page & Felzer 2015 | PASS |
| Lomax & Henry 2023 quotes | Lomax & Henry 2023 abstract | PASS |
| Aviles 1987 D~1.1-1.4 | Aviles 1987 (paywalled) | UNVERIFIABLE (correctly labeled by entry) |
| Geller 1997 prediction-impossibility argument | Geller 1997 (paywalled) | PASS at secondary-corroboration level (correctly labeled by entry) |
| UCERF3 statewide 350/2606/2665 | USGS fact sheet (landing page only) | PARTIAL-to-PASS (secondary-corroborated; correctly labeled by entry) |
| energy_rate_density arithmetic | self-derived | internally consistent, correctly labeled `derived` |

## Overall verdict

No FAIL findings. No fabricated, miscited, or misattributed values were found among the
load-bearing quantitative claims. Every claim independently checked against primary-read
full text (Page & Felzer 2015, USGS GIP, CSN 2009, Lomax & Henry 2023 abstract) matched the
source verbatim or near-verbatim, including exact numeric values, uncertainties, and even
directly-quoted phrases. The entry's own evidence_status labels (measured / measured-untested /
derived / qualitative / unknown) are consistently honest and, where checked, matched what this
independent adversarial pass could and could not verify — the entry does not over-claim
primary-read status anywhere it was not earned. Two items (Aviles 1987 numeric D, UCERF3
statewide fact-sheet numbers) remain genuinely unverifiable to primary-source level after
repeated independent attempts this session, exactly as the entry itself discloses; these are
correctly carried as measured-untested/snippet-only rather than silently upgraded, so they are
not citation defects, only pre-existing, honestly-flagged verification gaps (recorded as notes,
not blockers, since the entry does not claim more than the evidence supports).
