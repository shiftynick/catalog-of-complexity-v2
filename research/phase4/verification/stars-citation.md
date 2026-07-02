# Citation Check — Class Entry "stars" (exemplar: the Sun)

**Checker:** Citation Checker (adversarial), Phase 4.
**Method:** Web-verified every load-bearing quantitative/primary-read citation in
`data/classes/stars.yaml` against independently retrieved sources (WebSearch +
WebFetch). Snippet confirmation of a claim is not treated as PASS for a
citation-identity check (DOI/arXiv-ID/title/author match) — that is checked
directly against the paper's own metadata page. A search snippet corroborating
the *numeric content* of a claim is treated as PARTIAL evidence toward PASS on
content (this project's own sourcing convention for this sweep is
snippet-verified, not primary-read, for most of these sources — the checker's
job is to confirm the snippet-verified claims are actually correct, not to
newly primary-read them).

---

## 1. `iau2015` — spatial_extent, energy_rate_density

**Entry's citation string:** "Mamajek, E.E. et al. (2015). IAU 2015 Resolution
B3 on Recommended Nominal Conversion Constants for Selected Solar and
Planetary Properties. arXiv:1510.06262."

**Verdict: FAIL (citation identity) / PASS (numeric content).**

- Checked arXiv:1510.06262 directly: this ID resolves to **"IAU 2015
  Resolution B2 on Recommended Zero Points for the Absolute and Apparent
  Bolometric Magnitude Scales"** (Mamajek et al. 2015) — a *different*
  resolution (B2, bolometric magnitude zero points), not B3 (nominal
  conversion constants: radius, luminosity, mass parameter, etc.).
- The paper the entry actually needs — IAU 2015 Resolution B3 — is
  **arXiv:1510.07674** (also republished as Prša et al. 2016, AJ 152, 41,
  arXiv:1605.09788). Confirmed via arXiv abstract page and multiple secondary
  listings (ADS, ResearchGate, IOPscience).
- The two resolutions are companion papers from the same IAU working group,
  passed at the same General Assembly, which is almost certainly the source
  of the mix-up — but they are not interchangeable: B2 defines bolometric
  magnitude zero points (L_ref = 3.0128e28 W, a *defined reference*
  luminosity for the mag=0 point, NOT the Sun's luminosity), while B3 is the
  actual source of R☉=6.957e8 m, L☉=3.828e26 W, and the solar mass parameter
  used throughout this entry.
- **Numeric content is correct**: R☉ = 6.957×10⁸ m and L☉ = 3.828×10²⁶ W are
  both confirmed as the genuine IAU 2015 Resolution B3 nominal values
  (cross-checked via arXiv:1510.07674 abstract/secondary listings and Ohio
  State course notes reproducing the resolution's table). The
  spatial_extent value (6.957e8 m) and the L☉ figure used in the
  energy_rate_density cross-check derivation are both numerically right.
- **This is a real miscitation, not merely a formatting slip**: citing
  1510.06262 for Resolution B3 content points a reader at the wrong paper
  (B2, a different resolution with different, non-overlapping numeric
  content). Severity: blocker — a reader who follows this DOI/arXiv link to
  verify R☉ will land on the wrong document and be unable to confirm the
  claim from the cited source.

## 2. `chaisson2011` — energy_rate_density, openness_dissipation

**Entry's citation:** "Chaisson, E.J. (2011). Energy Rate Density as a
Complexity Metric and Evolutionary Driver. Complexity 16(3), 27-40. DOI:
10.1002/cplx.20323."

**Verdict: PASS (identity).** Confirmed via Wiley Online Library
(onlinelibrary.wiley.com/doi/abs/10.1002/cplx.20323) — title, author, volume,
page range, and DOI all match exactly. This is marked primary-read reused
from Phase 1 (research/phase1/quantitative-backbone.md); this checker did not
re-fetch the full text but confirms the citation's bibliographic identity is
correct and the Phi_m=2 erg/s/g figure is consistent with independent
secondary characterizations of the paper's content (energy rate density
defined as energy rate normalized to mass, applied across cosmic evolutionary
stages). The entry's own arithmetic cross-check (L☉/M☉ = 1.925 erg/s/g,
matching Chaisson's published 2 to within rounding) is independently
verifiable arithmetic given the correct IAU L☉/M☉ values (see #1) and checks
out: 3.828e26 W / 1.98892e30 kg = 1.925e-4 W/kg = 1.925 erg s^-1 g^-1. PASS.

## 3. `roudier-muller1986` — characteristic_timescales (granule lifetime),
   fractal_dimension_spatial

**Entry's citation:** "Roudier, T. & Muller, R. (1986). Structure of the
solar granulation. Solar Physics 107, 11-26."

**Verdict: PARTIAL / snippet-verified only, content corroborated but not
primary-read (checker unable to upgrade this).**

- Citation identity confirmed correct via Springer
  (link.springer.com/article/10.1007/BF00155337) and ADS — title, journal,
  volume, page range all match. Full text is paywalled; checker could not
  primary-read it directly (403/login-gated on Springer; PDF fetch of the
  abstract page returned no extractable text this session).
- The specific quantitative claim (**D=1.25 small granules
  perimeter~500-4,500 km; D=2.15 large granules perimeter~4,500-15,000 km;
  scale break ~1.37 arcsec; 315 granules measured; P∝A^(D/2)**) is
  independently corroborated by a WebSearch snippet that reproduces these
  exact numbers ("Roudier and Muller (1986) measured the areas and
  perimeters of 315 granules and found a power law relation P ∝ A^(D/2),
  with D = 1.25 for small granules ... and D = 2.15 for large granules")
  — this is a secondary source's paraphrase of the paper, not the paper
  itself, so it counts as corroboration, not a PASS-grade primary read.
  The entry itself already flags this correctly
  (`verifier_flags: [snippet-verified-only, single-1986-study-not-primary-read]`,
  `evidence_status: measured-untested`) — the entry's own epistemic honesty
  here is a match for what the checker independently found. No
  discrepancy; downgraded to fix-level only because full-text primary
  confirmation remains outstanding (already flagged by the entry itself as
  top uncertainty #1 — not a new finding).
- Granule lifetime characterization ("~8-20 min (mean ~10 min)") attributed
  in part to this paper's "observational context": independently confirmed
  by multiple secondary sources (Wikipedia "Solar granule," educational
  astronomy references) as the standard consensus figure. PASS on content,
  consistent with the entry's own snippet-verified framing.

## 4. `rincon-rieutord2018` — characteristic_timescales (supergranule
   lifetime)

**Entry's citation:** "Rincon, F. & Rieutord, M. (2018 update of 2010). The
Sun's Supergranulation. Living Reviews in Solar Physics 15, 6. DOI:
10.1007/s41116-018-0013-5."

**Verdict: PARTIAL.** Citation identity confirmed correct (Springer,
link.springer.com/article/10.1007/s41116-018-0013-5, and ADS
2018LRSP...15....6R both match title/journal/volume/issue/DOI). Content:
independently retrieved abstract/summary text states supergranulation has "a
dynamical evolution time of 24-48 h" — i.e., ~1-2 days, consistent with the
entry's stated "~1-2 days" range. However, the entry's parenthetical "(~1.8 d
cited)" specific point figure could not be independently confirmed from the
snippets retrieved this session — 24-48h is a wider stated range in the
retrieved summary, and no "1.8 day" figure appeared in any search result.
This is not a contradiction (1.8 d sits inside 24-48h = 1-2d) but the
specific point estimate is unconfirmed by this checker's search — flag as
fix: soften "(~1.8 d cited)" to the confirmed range, or primary-read the
review to locate the specific 1.8 d figure if it exists in the full text.

## 5. `aschwanden2022` — extreme_event_statistics, criticality

**Entry's citation:** "Aschwanden, M.J. (2022). Reconciling Power Law Slopes
in Solar Flare and Nanoflare Size Distributions. arXiv:2203.12484 (ApJL
companion, DOI: 10.3847/2041-8213/ac7b8d)."

**Verdict: PASS — strongest-verified citation in this entry.**

- Citation identity confirmed exactly via arXiv (arxiv.org/abs/2203.12484)
  and IOPscience (DOI 10.3847/2041-8213/ac7b8d) listings — title, author,
  arXiv ID, and companion-journal DOI all match precisely.
- Numeric content independently retrieved and matches the entry's value
  string **exactly**, including uncertainties:
  - alpha_E1 (SOC model) = 13/9 ≈ 1.44 theoretical, observed 1.47±0.07 —
    entry states "alpha~1.44-1.47" — matches.
  - alpha_E2 (2-D thermal model) = 7/3 ≈ 2.33 theoretical, observed
    2.38±0.09 — entry states "alpha~2.33-2.38" — matches.
  - alpha_E3 (3-D thermal model) = 9/5 = 1.80 theoretical, observed
    1.80±0.18 — entry states "alpha ~1.8 (theoretical 9/5, observed
    1.80+/-0.18)" — matches exactly, including the uncertainty figure.
  - This is a clean PASS on both citation identity and quantitative content,
    the best-supported quantitative claim in the entry.

## 6. `rypdal-rypdal2012` — temporal_correlation

**Entry's citation:** "Rypdal, K. & Rypdal, M. (2012). Is there long-range
memory in solar activity on time scales shorter than the sunspot period?
Journal of Geophysical Research: Space Physics 117, A04103. DOI:
10.1029/2011JA017283 (also arXiv:1111.4787)."

**Verdict: PASS.** Citation identity confirmed via AGU/Wiley Online Library
and arXiv listing (arxiv.org/abs/1111.4787) — matches exactly. Content
independently confirmed: retrieved summary states "SSN, TSI and TSI
reconstruction almost certainly are long-range persistent, with most
probable value H ≈ 0.7" and separately flags standard (non-DFA-corrected)
Hurst analysis giving H≈0.9 (inflated by the ~11-yr non-stationarity) —
consistent with the entry's stated "H~0.7 (range 0.70-0.77 via detrended
fluctuation analysis)" and its note about non-stationarity correction. PASS.

## 7. `mw-star-count` — instance_population (Milky Way star count)

**Entry's characterization:** "~1-4e11 stars standing population,"
snippet-verified consensus, candidate primary (Gaia Universe Model Snapshot,
arXiv:1202.0132) not fetched in full.

**Verdict: PASS (as an explicitly-labeled consensus-range claim, not a
single-paper citation).** Independently confirmed via multiple secondary
sources (NASA Blueshift, Wikipedia, BBC Science Focus, Space.com) that
100-400 billion (1e11-4e11) is the standard cited consensus range, with the
uncertainty explicitly attributed to undetected low-mass stars — matches the
entry's framing and evidence_status: measured-untested (appropriately
conservative given no single primary paper is pinned).

## 8. `kennicutt-evans2012` — instance_population (MW star formation rate)

**Entry's citation:** "Kennicutt, R.C. & Evans, N.J. (2012). Star Formation
in the Milky Way and Nearby Galaxies. ARAA 50, 531-608."

**Verdict: PASS (identity and content).** Citation identity confirmed
(arXiv:1204.3552, Annual Reviews, ADS 2012ARA&A..50..531K — all match).
Content: independently fetched the NED-hosted summary page (the same page
the entry's own sourcing notes cite) and confirmed it reports "Chomiuk &
Povich (2011) ... conclude [SFR] = 1.9 ± 0.4 M☉/yr" for the Milky Way — this
is squarely inside the entry's stated "~1-2 M☉/yr" figure. The entry's
additional "(up to ~4-8 M☉/yr by some tracers)" parenthetical for
newer gamma-ray/26Al-based re-estimates is consistent with independently
known literature (26Al-based Milky Way SFR estimates commonly run higher,
~2-4x the CO/IR-tracer consensus) but was not independently re-verified
against a specific paper this session — this sub-claim carries
evidence_status: measured-untested already and is not elevated further here;
note only, not a fix, since the entry does not overclaim its status.

## 9. `van-dokkum-conroy2010` — instance_population (observable-universe
   upper-range driver)

**Entry's citation:** "van Dokkum, P. & Conroy, C. (2010). A substantial
population of low-mass stars in luminous elliptical galaxies. Nature 468,
940-942. DOI: 10.1038/nature09578."

**Verdict: PASS (identity and characterization).** Confirmed via Nature,
PubMed, and arXiv (1009.5992) — title/journal/volume/page/DOI all match.
Independently retrieved abstract confirms the paper's actual finding: low-mass
stars found to be much more abundant than assumed (>80% of stellar number,
>60% of stellar mass in the ellipticals studied), IMF steeper than Salpeter
in the 0.1-1 M☉ range — consistent with the entry's characterization of this
paper as "driving estimates from ~10^22 up toward ~3×10^23" (that specific
multiplier was not independently re-derived by this checker, but the
qualitative direction and mechanism — an IMF revision toward more low-mass
stars raising total star-count estimates — is correctly characterized).
Entry appropriately marks this abstract-level/snippet-verified, not
primary-read, matching what the checker found.

## 10. `granulation-secondary` — numerosity (granule count ~1e6-4e6)

**Entry's characterization:** secondary/cross-confirmed sources, no single
primary paper pinned, evidence_status: measured-untested, confidence: low.

**Verdict: PASS (as an appropriately-hedged secondary claim).**
Independently confirmed via WebSearch: "at any one time, the Sun's surface
is covered by about 4 million granules," diameter ~1,500 km, lifetime 8-20
min — squarely within the entry's stated "~1e6-4e6" range and "~1,000-1,500
km diameter" figure. The entry's own low-confidence, secondary-sourced
framing is appropriate and matches what this checker independently found
(convergent secondary consensus, no single primary paper identified in
either sweep).

## 11. `petrovay2023` — chaos_sensitivity

**Entry's citation:** "Petrovay, K. Solar Cycle Prediction. Living Reviews in
Solar Physics (2020, updated 2023), arXiv:2303.12648."

**Verdict: UNVERIFIABLE this session (not independently re-fetched) — entry
already labels this "not independently fetched this session," reused context
from Phase 1. Checker did not locate independent confirmation of the arXiv ID
or the specific ~16-month/~15.9-month predictability-horizon figure
attributed elsewhere in the chaos_sensitivity anchor to "a single study" —
this figure is already explicitly flagged `[unverified — single-study figure,
cite with caution]` inside the entry's own justification text and is NOT
presented as a scored/load-bearing value (the chaos_sensitivity score of 2
rests on the contested-literature characterization generally, not on the
16-month figure specifically). No new issue found; existing hedge is
appropriate. Note only.**

## 12. Instance_population — "observable universe: ~1e22-1e24 stars"

**Verdict: PASS.** Independently confirmed via WebSearch as the standard
cited range (10^22-10^24, with 10^23 as a common midpoint estimate,
methodology = galaxy count x stars/galaxy). Matches entry's stated range and
its explicit flagging of the three-order-of-magnitude spread as an
epistemically soft, derived (not measured) estimate.

---

## Anchor cross-check (schema/anchors/*.yaml, all 15 rubric/hybrid columns)

Every rubric/hybrid score in the entry was checked against its corresponding
anchor file's worked "stars" example (schema/anchors/{modularity,
decentralization, nonlinearity, feedback, openness_dissipation,
chaos_sensitivity, criticality, memory_hysteresis, information_processing,
adaptive_capacity, emergence, self_organization, robustness_resilience,
cascade_susceptibility, tipping_transitions}.yaml). All 15 scores in
data/classes/stars.yaml match their anchor's worked "stars" value exactly:
modularity=1, decentralization=4, nonlinearity=3, feedback=2,
openness_dissipation=4, chaos_sensitivity=2, criticality=2,
memory_hysteresis=1, information_processing=0, adaptive_capacity=0,
emergence=2, self_organization=4 (self_organization has no dedicated stars
anchor per panel-spec; entry correctly notes this and reasons from the
tropical-cyclones comparator, which is itself present and consistent in
self_organization.yaml), robustness_resilience=4, cascade_susceptibility=0,
tipping_transitions=0. No anchor-contradiction found. This is a citation
check, not a full plausibility/consistency check, so this cross-check is
reported as corroborating context, not the primary deliverable.

---

## Summary of verdicts

| # | Source | Column(s) | Verdict |
|---|---|---|---|
| 1 | iau2015 | spatial_extent, energy_rate_density | **FAIL (identity) / PASS (numeric content)** |
| 2 | chaisson2011 | energy_rate_density, openness_dissipation | PASS |
| 3 | roudier-muller1986 | characteristic_timescales, fractal_dimension_spatial | PARTIAL (already self-flagged) |
| 4 | rincon-rieutord2018 | characteristic_timescales | PARTIAL (1.8d point figure unconfirmed) |
| 5 | aschwanden2022 | extreme_event_statistics, criticality | PASS (exact match) |
| 6 | rypdal-rypdal2012 | temporal_correlation | PASS |
| 7 | mw-star-count | instance_population | PASS |
| 8 | kennicutt-evans2012 | instance_population | PASS |
| 9 | van-dokkum-conroy2010 | instance_population | PASS |
| 10 | granulation-secondary | numerosity | PASS |
| 11 | petrovay2023 | chaos_sensitivity | UNVERIFIABLE (not load-bearing to score) |
| 12 | (no single source) | instance_population (observable universe) | PASS |
