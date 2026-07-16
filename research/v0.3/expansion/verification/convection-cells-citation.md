# Citation check — convection-cells.yaml (v0.3 expansion)

Adversarial web-verification of load-bearing citations in `data/classes/convection-cells.yaml`.
Reference: schema/panel-spec.yaml, schema/anchors/*, docs/schema.md, docs/roster.md,
research/v0.3/expansion/convection-cells-sources.md (sweep report).

Note on standard: the entry's own sources block already discloses every citation as
"[unverified — model knowledge]" or "snippet-verified," NOT primary-read. Per the task's PASS
bar ("a search snippet alone is never a PASS"), none of these citations can be scored PASS —
they remain, at best, PARTIAL/snippet-corroborated, exactly as the entry itself already
discloses. This check's job is to determine whether the *specific claimed values* (numbers,
volume/page/year, formulas) are contradicted, confirmed, or unreachable by web search — i.e.
to hunt for FAILs and PARTIALs among what's disclosed as unverified, and to check whether the
entry's own self-assessed severity (routed to "note"/gap rather than "blocker") is accurate.

## 1. Ra_c = 1707.762 (rigid-rigid boundaries), k_c ≈ 3.117 — attributed to Chandrasekhar 1961 / Pellew & Southwell 1940

WebSearch (multiple independent secondary/tertiary sources: Scholarpedia, ScienceDirect,
ASEE student-project PDF, arXiv papers) consistently states Rc ≈ 1707.76 (often rounded 1708),
critical wavenumber qc ≈ 3.117, attributes the rigorous linear-stability result to Pellew &
Southwell (1940), with Chandrasekhar's 1961 monograph as the standard textbook restatement.
Pellew & Southwell 1940 citation (Proc. R. Soc. Lond. A 176, 312-343) independently confirmed
via Royal Society Publishing DOI page (10.1098/rspa.1940.0092) — title, authors, journal,
volume, and page range all match the entry's `sources.pellew-southwell1940` exactly.

**Verdict: PARTIAL.** The numeric claim (1707.762, k_c=3.117) is well-corroborated by multiple
independent secondary sources and the Pellew & Southwell 1940 citation is independently
confirmed via the primary journal's own DOI landing page (title/authors/journal/volume/pages
all match). However, Chandrasekhar 1961 itself (the entry's primary cited source for this
value) was not opened by this check either — consistent with the entry's own disclosure. Not a
FAIL; the value is right and the secondary citation (Pellew & Southwell) checks out cleanly,
but Chandrasekhar 1961 remains unread. Not upgraded to blocker.

## 2. Rayleigh 1916, free-free Ra_c = 27π⁴/4 ≈ 657.51

WebSearch (SciRP, Taylor & Francis/tandfonline, Springer) confirms: Lord Rayleigh, "On
convection currents in a horizontal layer of fluid, when the higher temperature is on the
under side," Phil. Mag. Series 6, vol. 32, pp. 529-546, 1916 — title, volume, and page range
match the entry's `sources.rayleigh1916` exactly. The 27π⁴/4 closed-form value itself was not
independently re-derived by this check but is standard textbook content and not contradicted
by any source found.

**Verdict: PARTIAL** (bibliographic details confirmed by title/volume/page match across
independent aggregators; the 657.51 numeric value and its attribution to this exact paper were
not primary-read by this check, consistent with the entry's own disclosure).

## 3. Cross & Hohenberg 1993, Rev. Mod. Phys. 65, 851-1112, doi:10.1103/RevModPhys.65.851

Confirmed via APS DOI landing page (link.aps.org/doi/10.1103/RevModPhys.65.851) and multiple
independent citation aggregators (SciRP, OSTI, Caltech authors repository): title "Pattern
Formation Outside of Equilibrium," authors M.C. Cross & P.C. Hohenberg, Rev. Mod. Phys. 65,
851-1112 (1993), DOI matches exactly.

**Verdict: PASS on bibliographic identity** (title/authors/volume/pages/DOI all independently
corroborated across multiple sources including the publisher's own DOI resolver). The specific
free-free Ra_c value the entry claims this paper "restates" was not independently re-verified
against the full text (not primary-read) — that narrower claim remains PARTIAL/unverified as
disclosed.

## 4. Grossmann & Lohse 2000, J. Fluid Mech. 407, 27-56 — TITLE DISCREPANCY CHECK

The entry cites the title as "Scaling in thermal convection: a unifying theory." One
aggregator (University of Twente research portal) returned the title as "Scaling in thermal
convection: A unifying view," which would have been a FAIL-worthy title mismatch if correct.
Fetched the primary publisher page directly (Cambridge Core, cambridge.org/core/.../scaling-in
-thermal-convection-a-unifying-theory/C04F99EF099F794FC23B4939CCDB477F) to adjudicate:
confirmed title is **"Scaling in thermal convection: a unifying theory"** (matches the entry
exactly), authors Siegfried Grossmann & Detlef Lohse, volume 407, pages 27-56, year 2000,
DOI 10.1017/S0022112099007545.

**Verdict: PASS** (publisher's own article page confirms the entry's exact title, volume, page
range, and year; the Twente portal's "unifying view" wording is an aggregator error, not a
problem with the entry).

## 5. Ahlers, Grossmann & Lohse 2009, Rev. Mod. Phys. 81, 503-537 — PAGE RANGE DISCREPANCY

The entry states pages "503-537." Every independent source found (University of Twente
research portal, APS's own RMP issue-81-2 deliverables page, and a second independent
WebSearch pass) states the page range as **503-538**, not 503-537. This recurred consistently
across multiple unrelated sources with no source supporting "503-537."

**Verdict: FIX.** Off-by-one page-range error (537 vs. the correct 538). Low-stakes (does not
affect any scored value — the citation is used to support qualitative Nu-Ra scaling framing,
not a specific number drawn from a specific page) but should be corrected for citation
accuracy. Title, authors, volume, and year are all otherwise correct and independently
confirmed.

## 6. Morris, Bodenschatz, Cannell & Ahlers 1993, Phys. Rev. Lett. 71, 2026-2029 — "Spiral defect chaos"

Confirmed via APS DOI landing page (link.aps.org/doi/10.1103/PhysRevLett.71.2026) and PubMed
(PMID accessible via ncbi.nlm.nih.gov/pubmed/10054564): title "Spiral defect chaos in large
aspect ratio Rayleigh-Bénard convection," authors Morris, Bodenschatz, Cannell, Ahlers,
Phys. Rev. Lett. 71, 2026-2029 (1993), published Sept. 27, 1993. All details match the entry's
`sources.morris-bodenschatz-cannell-ahlers1993` exactly, including the affiliation (UCSB
Physics/Center for Nonlinear Science) referenced in the paper's abstract.

**Verdict: PASS on bibliographic identity** (multiple independent sources, including the
publisher's own DOI resolver, confirm every detail). The paper's content claim as used in the
entry ("a real, established chaotic regime... at Ra well above onset, large aspect ratio,
Prandtl number ~1") is consistent with the abstract summary retrieved by search but the full
text was not primary-read, so the qualitative characterization remains PARTIAL/unverified per
the entry's own disclosure.

## 7. Pellew & Southwell 1940 (as an independent source entry)

Already covered under item 1; independently confirmed via Royal Society Publishing DOI
(10.1098/rspa.1940.0092) — title, authors ("A. Pellew and R.V. Southwell"), and journal series
match exactly.

## 8. Non-citation quantitative claims spot-checked

- **Barrel of Ilmenau, Ra ~ 1e12**: not independently re-verified this check (secondary,
  non-load-bearing detail field, already flagged evidence_status: measured with a note that
  it's a range not a single figure). Not verified further given the low weight of a "detail"
  sub-field vs. a scored column value.
- **energy_rate_density, fractal_dimension_spatial, extreme_event_statistics,
  temporal_correlation — all recorded `unknown`**: nothing to citation-check; these are honest
  absence-of-evidence declarations. No web search turned up a canonical published figure for
  any of the four during independent spot-checks (energy_rate_density / Phi_m for lab RB,
  fractal dimension of spiral-defect-chaos patterns), consistent with the entry's own claim
  that a targeted search found nothing.

## Overall assessment

No FAIL was found — no citation is fabricated, misattributed to the wrong paper, or
contradicted by its source. One FIX-severity page-range error was found (Ahlers/Grossmann/
Lohse 2009: 503-538, not 503-537). All other checked citations resolve to real papers with
matching title/authors/volume/DOI, corroborated independently of the entry's own claims — a
materially stronger verification position than the entry's blanket "unverified — model
knowledge" self-disclosure suggests, though true primary-reads of the full texts (especially
Chandrasekhar 1961, the highest-priority citation debt item per the entry's own provenance
flags) remain outstanding and are correctly flagged as such in the entry.
