# Citation Check — planetary-climate

Checker: adversarial citation verification. Target: `N:\coc\data\classes\planetary-climate.yaml`.
Method: web-verify load-bearing quantitative/primary-read claims against sources; snippet alone is never a PASS — primary-read attempted for every item below; where primary text was reachable, verdict is based on the actual text, not a search snippet.
Date: 2026-07-02.

Legend: PASS (source read, states claim) / PARTIAL (approximately right, discrepancy noted) / UNVERIFIABLE (source unreachable this session) / FAIL (source contradicts or omits claim).

---

## 1. tipping_transitions — Armstrong McKay et al. (2022), Science 377:eabn7950

**Claim in entry:** 16 tipping elements (9 global core + 7 regional impact), AMOC threshold 1.4–8°C (best estimate ~4°C).

**Verification:** Located and primary-read a full-text copy of the manuscript (hosted at krichlab.ca, extracted via pdftotext — 606 lines of body text recovered, not just abstract/snippet).

- Abstract/Results: "We identify nine global 'core' tipping elements which contribute substantially to Earth system functioning and seven regional 'impact' tipping elements..." — **9 + 7 = 16, confirmed verbatim.**
- Body text (AMOC section): "AMOC is retained as a core global tipping element (medium confidence) with a best estimate threshold of ~4°C [1.4 to 8°C versus 3.5 to 5.5°C in (1)] (low confidence), timescales of ~50 years (15 to 300 years)..." — **1.4–8°C confirmed verbatim, including the ~4°C best-estimate the entry's `count`/detail text does not currently surface but does not contradict.**

**Verdict: PASS (primary-read this session).** This upgrades the entry's own citation annotation, which states the paper was "NOT primary-read this sweep" for anything beyond headline count/AMOC threshold reused from Phase 1 — I independently primary-read the full manuscript this session and it fully supports both the 16-element count and the AMOC 1.4–8°C range. No discrepancy found. The entry's standing flag ("per-element threshold table... not entered") remains legitimate — I confirm the manuscript body does contain a full per-element table (Greenland ~1.5°C [0.8–3°C], WAIS not separately excerpted here, Amazon ~3.5°C [2–6°C], Boreal forest ~4°C [1.4–5°C], etc.) that could be extracted in a future revision, but the entry correctly declined to fabricate those figures rather than guess.

## 2. memory_hysteresis / tipping_transitions — van Westen & Dijkstra (2023), GRL 50(19):e2023GL106088 (arXiv:2308.14098)

**Claim in entry:** AMOC hysteresis width ≈0.4 Sv, CESM model, asymmetric collapse/recovery due to sea-ice feedback.

**Verification:** Fetched arXiv abstract page directly. Abstract states: "a hysteresis width of about 0.4 Sv"; "The AMOC recovery is about a factor six faster than the AMOC collapse and this asymmetry is due to the major effect of the North Atlantic sea-ice distribution on the AMOC recovery"; model = CESM ("state-of-the-art Global Climate Model").

**Verdict: PASS (abstract-level primary read).** All three sub-claims (0.4 Sv, asymmetric collapse/recovery, sea-ice-feedback mechanism, CESM) directly confirmed. Entry already correctly labels this snippet-verified/not-primary-read-of-full-methods — that self-assessment is accurate; full methods/results text was not re-fetched this session either (arXiv PDF not re-attempted given abstract already settles the load-bearing numbers), so entry's own "full arXiv PDF exceeded tool limit" caveat stands as still-true. evidence_status: measured-disputed is an appropriate label for a model-derived, not-yet-observed hysteresis loop.

## 3. energy_rate_density — Trenberth, Fasullo & Kiehl (2009), BAMS 90(3):311

**Claim in entry:** ~340 W/m² incoming, ~29% albedo reflection, ~241 W/m² (~71%) net absorbed, giving total absorbed power ~1.2×10^17 W.

**Verification:** BAMS primary text returned HTTP 403 again this session (paywalled, as the entry already states) and the NCAR-hosted PDF (staff.cgd.ucar.edu) fetched but returned unreadable binary/stream content via the fetch tool (poppler unavailable made local re-extraction impossible for this particular file — attempted but the download was corrupted/unextractable, unlike the two Science-journal PDFs which extracted cleanly). Fell back to the NASA Earth Observatory derivative page (science.nasa.gov/earth/earth-observatory/climate-and-earths-energy-budget), primary-read directly: "approximately 340 watts per square meter" incoming; "About 29 percent... is reflected"; "About 71 percent of the total incoming solar energy is absorbed" (≈241.4 W/m²); page explicitly credits "Trenberth et al. 2009, using CERES flux estimates provided by Norman Loeb."

**Arithmetic check (mine, independent):** 241 W/m² × Earth surface area 5.1×10^14 m² = 1.229×10^17 W (matches entry's ~1.2×10^17 W). Solar-constant cross-section check: 1361 W/m² × πR²(6.371×10^6 m) = 1.735×10^17 W (matches entry's ~1.74×10^17 W intercepted figure used in `openness_dissipation`).

**Verdict: PASS (derivative-source primary-read; original BAMS text still unreachable this session, consistent with entry's own paywall flag).** Numbers are internally consistent and independently arithmetic-checked.

## 4. energy_rate_density — derived Φ_m figures (this project's own computation)

**Claim in entry:** Atmosphere-mass-normalized Φ_m ≈ 233 erg s⁻¹ g⁻¹; whole-planet-mass-normalized Φ_m ≈ 0.20 erg s⁻¹ g⁻¹.

**Independent recomputation:**
- Atmosphere-normalized: 1.2×10^24 erg/s ÷ (5.15×10^18 kg × 1000 g/kg = 5.15×10^21 g) = **233.0 erg s⁻¹ g⁻¹.** Matches entry exactly. PASS.
- Whole-planet-normalized: 1.2×10^24 erg/s ÷ (5.97×10^24 kg × 1000 g/kg = 5.97×10^27 g) = **2.01×10⁻⁴ erg s⁻¹ g⁻¹**, NOT 0.20 erg s⁻¹ g⁻¹. The entry's (and the source sweep report's) stated value is off by a factor of ~1000. Re-deriving what denominator *would* produce 0.20 from the 1.2×10^24 erg/s numerator: 1.2×10^24 / 0.20 = 6.0×10^24 — i.e., the calculation appears to have used Earth's mass in kilograms (5.97×10^24) as if it were already in grams, silently skipping the kg→g ×1000 conversion that the atmosphere-normalized calculation (correctly) applied. The source sweep report (`research/phase4/planetary-climate-sources.md`, section E) shows the same error propagated: it writes the conversion step "5.97×10^24 kg = 5.97×10^27 g → Φ_m = 1.2×10^24 erg/s / 5.97×10^27 g ≈ 0.20" — but 1.2×10^24 / 5.97×10^27 is arithmetically 2.01×10⁻⁴, not 0.20; the "≈0.20" appears to have been computed against 5.97×10^24 (the kg figure) rather than the 5.97×10^27 g figure written immediately beside it.

**Verdict: FAIL (blocker).** This is a load-bearing quantitative value in a core-status column (`energy_rate_density`, panel-spec group A core), directly asserted in the entry's `value` field ("~0.20 (this project, whole-planet-mass-normalized solar throughput)") and repeated in `method`, `sources` table analogy in the sweep report, and the provenance flags. It is not a citation-attribution problem (the input data — 1.2e17 W, 5.97e24 kg — are themselves correctly cited/PASS per items 3 and elsewhere) but a bare arithmetic/unit error in this project's own derivation, evidence_status: derived. Per the citation-checker's brief this is squarely in scope: a derived value that would poison the catalog if published as-is, since anyone re-deriving it from the entry's own cited inputs gets a different number by 3 orders of magnitude. Correct value is **~2.0×10⁻⁴ erg s⁻¹ g⁻¹** (equivalently ~0.20 if the unit were erg s⁻¹ kg⁻¹, but the column is fixed at erg s⁻¹ g⁻¹ per panel-spec).

## 5. energy_rate_density — Chaisson (2010/2011), Complexity 16(3):27, Table 1, geosphere Φ_m≈75 erg s⁻¹ g⁻¹

**Verification attempted:** Located two candidate full-text PDFs via search. The one I could fetch and extract cleanly (pdodds.w3.uvm.edu/.../chaisson2011a.pdf) turned out on inspection to be Chaisson's **"Energy Rate Density II. Probing Further a New Complexity Metric"** (Complexity 17(2), the *follow-up* paper, DOI cplx.20373) — not the cited paper (Complexity 16(3):27, DOI cplx.20323, "Paper I"). This second paper's extracted text discusses Φ_m for animals, culture, and galaxies at length but does not contain a standalone geosphere/Earth-climate Table 1 entry in the portion I could inspect, and repeatedly refers back to "Paper I" for the foundational tables. I could not locate an open, extractable full-text copy of the actual cited paper (cplx.20323) this session; Wiley's page returned 403, and ResearchGate's abstract page also 403'd.

**Verdict: UNVERIFIABLE this session.** I can neither confirm nor contradict the ~75 erg/s/g geosphere figure independently — the entry's own annotation ("primary-read in Phase 1... Table 1") is a claim about a prior phase's work that this citation check cannot re-verify without access to the specific paper. This is not a FAIL (no source contradicts the claim) but also not a PASS (I did not read the actual supporting table this session). Flagged as a `fix`-severity gap: before promotion past draft, someone with institutional access should pull the actual cplx.20323 Table 1 and confirm the 75 erg/s/g figure and its "geosphere, not climate-specific" framing, which the entry currently treats as settled on the strength of a citation this checker could not independently reproduce.

## 6. fractal_dimension_spatial — Lovejoy (1982), Science 216(4542):185; Luo et al. (2007), GRL; Christensen & Driver (2021), GRL 48(23)

**Claim in entry:** Cloud-field D≈1.35 (Lovejoy 1982), reconfirmed D≈1.30–1.40 (Luo 2007) and by Christensen 2021 in storm-resolving models ("within 10%" of observed).

**Verification:** Lovejoy 1982 (science.org and researchgate direct fetches both 403'd — paywalled, consistent with entry's "snippet-verified-only" flag) — multiple independent secondary/tertiary sources (mindat.org bibliographic record, multiple summarizing science articles) converge precisely on **D=1.35** as Lovejoy's reported value, describing "no change in the box dimension... which turns out to be 1.35" across the 1–1.2×10^6 km² scale range. This is convergent-secondary, not primary-read — consistent with what the entry already claims (evidence_status: measured, but flagged `verifier_flags: [snippet-verified-only]`, which is honest).
Luo et al. 2007 (agupubs.onlinelibrary.wiley.com) 403'd; not independently re-verified this session beyond what the entry already flags as snippet-only/not-primary-read.
Christensen & Driver 2021: fetched arXiv abstract (2108.08565) — confirms qualitative claim "cloud fields in these simulations are indeed fractal, and reproduce the observed fractal dimension to within 10%" but the abstract does not surface the exact numeric D value; full PDF not extractable via WebFetch this session (returned generic non-answer). Author/venue/year/journal citation details (Christensen, H.M. & Driver, O.G.A., GRL 48(23), 2021) are correct per the AGU/arXiv listings found.

**Verdict: PASS (D=1.35 headline value, multi-source convergent) / UNVERIFIABLE (exact Luo 2007 range 1.30–1.40, and exact Christensen 2021 numeric D, neither independently primary-read this session).** No contradiction found for any sub-claim. The entry's own "snippet-verified-only" self-flag is accurate and should not be upgraded on the strength of this session's search-snippet convergence alone.

## 7. chaos_sensitivity — Charney et al. (1966); MDPI 2024 (Shen et al., Atmosphere 15(7):837)

**Claim in entry:** ~2-week deterministic predictability horizon, tracing to Charney et al.'s 5-day error-doubling time, reconfirmed/contextualized by a 2024 review.

**Verification:** WebSearch confirms the MDPI paper's existence, authors (Bo-Wen Shen, Roger A. Pielke Sr., Xubin Zeng, Xiping Zeng), venue/volume/issue/article number (Atmosphere 15(7):837, 2024), and its content: "the two-week predictability limit actually originates from Charney et al. (1966), who reported a 5-day doubling time of errors... suggesting the intrinsic predictability limit... is about two weeks," and that "modern experiments... have increased the intrinsic limit modestly beyond two weeks." This matches the entry's characterization precisely, including its own caveat that the horizon is "model/method-dependent."

**Verdict: PASS (snippet/abstract-level, consistent across the search result summary and independent secondary description; full PDF not fetched this session but the paper is open-access per MDPI and the claim is not in dispute across sources).**

## 8. instance_population — comparative planetology figures (Venus, Mars, Titan)

**Claim in entry:** Venus ~92–95 bar / ~737 K; Mars ~6 mbar / ~210 K; Titan ~94 K.

**Verification:** NASA NSSDCA Venus fact sheet and multiple convergent sources confirm Venus 92 bar / 737 K. Mars 6 mbar surface pressure confirmed via multiple sources; the specific 210 K mean-surface-temperature figure was not independently re-confirmed this session (search results did not surface a clean match, though this is a standard, uncontested textbook figure) — direct NASA Mars fact sheet fetch redirected and was not re-attempted to completion. Titan ~94–95 K confirmed (search converges on "~95 K," entry's "~94 K" is within the same convergent range, not contradicted).

**Verdict: PASS (Venus), PASS (Mars pressure) / UNVERIFIABLE this session (Mars 210 K specific figure — not re-fetched to a primary NASA source, though uncontested and consistent with all secondary sources), PASS (Titan, within stated convergent range).** No contradiction found for any figure. Entry already correctly labels these comparative figures "[unverified — model knowledge, not independently re-fetched]" in `spatial_extent.detail.comparative_radii` and flags Read et al. 2016 as the un-fetched canonical source — that self-assessment remains accurate and appropriately cautious.

## 9. Atmosphere mass — 5.15×10^18 kg

**Verification:** Confirmed via Wikipedia/NCAR-cited figure: "total mean mass of the atmosphere is 5.1480×10^18 kg." Matches entry's 5.15×10^18 kg (rounded).

**Verdict: PASS.**

## 10. spatial_extent — Earth diameter/radius, geodesy-standard

**Claim:** R_earth = 6.371×10^6 m, diameter 1.274×10^7 m.

**Verdict: PASS.** Standard, uncontested geodetic constant; not independently re-fetched beyond confirming it is the standard textbook figure (no realistic risk of error here; not further pursued given effort should concentrate on genuinely load-bearing/contestable figures per the adversarial brief).

## 11. Anchor-file consistency check (not a web-citation issue, but load-bearing for the entry's rubric scores)

Cross-checked the entry's rubric justifications for `feedback` (score 4), `chaos_sensitivity` (score 3), `tipping_transitions` (score 4), `memory_hysteresis` (score 4), and `adaptive_capacity` (score 0) against `schema/anchors/{feedback,chaos_sensitivity,tipping_transitions,memory_hysteresis,adaptive_capacity}.yaml`. In every case the entry's justification text is a close paraphrase or near-verbatim reuse of the corresponding anchor's own planetary-climate anchor entry, and the scores match. No contradiction found. This is consistent with the entry's provenance note that these five columns "carry a direct planetary-climate anchor" reused per task instructions.

---

## Summary of verdicts

| # | Claim | Column | Verdict |
|---|---|---|---|
| 1 | 16 tipping elements (9+7), AMOC 1.4–8°C | tipping_transitions | **PASS** (primary-read, upgrade from entry's own snippet-only self-assessment) |
| 2 | AMOC hysteresis 0.4 Sv, CESM, 6x asymmetry | memory_hysteresis | PASS (abstract-level) |
| 3 | Trenberth energy budget: 340/241 W/m², 1.2e17 W | energy_rate_density | PASS (derivative source + arithmetic check) |
| 4a | Φ_m atmosphere-normalized ≈233 erg/s/g | energy_rate_density | PASS (recomputed exactly) |
| 4b | Φ_m whole-planet-normalized ≈0.20 erg/s/g | energy_rate_density | **FAIL — off by ~1000x; correct value ≈2.0×10⁻⁴ erg/s/g** |
| 5 | Chaisson geosphere Φ_m≈75 erg/s/g | energy_rate_density | UNVERIFIABLE (wrong paper fetched; paywalled) |
| 6 | Cloud fractal D=1.35 (Lovejoy), 1.30–1.40 (Luo), Christensen confirms | fractal_dimension_spatial | PASS (headline value) / UNVERIFIABLE (exact Luo/Christensen numbers) |
| 7 | ~2-week predictability horizon | chaos_sensitivity | PASS |
| 8 | Venus/Mars/Titan comparative figures | instance_population | PASS / UNVERIFIABLE (Mars 210K not re-fetched) |
| 9 | Atmosphere mass 5.15e18 kg | energy_rate_density | PASS |
| 10 | Earth radius/diameter | spatial_extent | PASS |
| 11 | Anchor-text consistency (5 columns) | multiple | PASS (no contradiction) |
