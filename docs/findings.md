# First Cross-System Findings (v0.1 pilot analysis)

**Date:** 2026-07-02 · **Data:** 10 verified class entries × 16 columns (15 rubric/hybrid scores + encoded alphabet_closure) · **Method:** column-wise z-scores → PCA; Euclidean distances → average-linkage clustering; Pearson correlations on raw scores · **Pipeline:** [analysis/run.mjs](../analysis/run.mjs) → [analysis/output/analysis.json](../analysis/output/analysis.json) · **Rendered:** the app's Map view.

## Read this first: epistemic status

n = 10, and the inputs are anchored rubric judgments, not measurements. Everything below is **exploratory pattern description generating hypotheses**, not established results. What would strengthen (or kill) these findings: more entries (Phase 6 roster scaling), leave-one-out sensitivity checks, and re-analysis after any anchor recalibration. Do not cite these numbers outside the project without this paragraph attached.

**Update (v0.2 sweep, 2026-07-02):** the leave-one-out and perturbation checks have now been run — see [Robustness & validation](#robustness--validation-v02-sweep-2026-07-02) below for per-finding survival verdicts, and two statistical caveats that apply to everything in this file: (1) the headline correlations are the largest of ~120 pairwise tests, so at n=10 only r=0.952 survives a Bonferroni-style correction (critical r ≈ 0.90) — the 0.85–0.87 pairs are suggestive, not "statistically held"; (2) the 10 entries are not independent samples — the catalog's own relations graph nests several of them (planetary-climate contains tropical-cyclones; cities contains power-grids and financial-markets), which inflates apparent cross-entry structure.

## The axes

- **PC1 (37.9% of variance): informational-adaptive vs. energetic-chaotic.** Positive loadings: information_processing (0.39), adaptive_capacity (0.36), alphabet_closure (0.35). Negative: chaos_sensitivity (−0.36), openness_dissipation (−0.28). The catalog's primary dimension separates systems that *process and adapt* from systems that are *driven and turbulent*. Notably, this is not "complex vs. simple" — both poles are maximally complex, differently.
- **PC2 (20.5%): violent dynamism vs. distributed durability.** Nonlinearity (−0.42) and feedback (−0.33) against robustness_resilience (0.41), decentralization (0.35), self_organization (0.31).

## The correlations

| Pair | r | Reading |
|---|---|---|
| information_processing ↔ adaptive_capacity | **0.952** | Empirically near-identical in this pilot — systems adapt exactly to the degree they process information. Holland's CAS coupling, recovered from data. |
| decentralization ↔ self_organization | 0.872 | The two columns the anchors fight hardest to keep conceptually distinct co-vary strongly; the worked contrasts (power-grids: controlled-but-self-organized-in-failure) are the informative off-diagonal cases. |
| information_processing ↔ alphabet_closure | 0.868 | — |
| modularity ↔ self_organization | **−0.853** | **The surprise.** Spontaneously organized systems are *less* modular here: design produces modules, self-assembly produces continua. Unpredicted; worth a dedicated look as the roster grows. |
| adaptive_capacity ↔ alphabet_closure | 0.850 | The panel-spec's registered hypothesis (D13) **is supported directionally** — while financial-markets breaks it pointwise (constrained alphabet, ceiling adaptivity), the anomaly the spec said would be the interesting part. (Wording softened at v0.2: at n=10 with 120 pairwise tests, r=0.850 does not clear multiple-comparison correction — see Robustness below.) |

## The clusters (average linkage, unsupervised)

1. **Socio-technical**: cities + financial-markets join first (closest pair in the catalog), power-grids attaches later.
2. **Geophysical-dissipative**: planetary-climate + tropical-cyclones pair — the compositional relation (climate *contains* storms) rediscovered from scores alone.
3. **The odd kinship**: the-internet's nearest neighbor is **earthquake-fault-systems** — both networky, non-adaptive at component level, weakly chaotic, criticality-adjacent. Cross-category kinship is exactly what the catalog exists to surface; flagged for investigation. *(v0.2 robustness verdict: FRAGILE — survives only 6/10 leave-one-out runs. Treat as an intriguing anecdote, not a finding, until the roster grows.)*
4. **languages** joins late as the lone cultural-informational entry — likely an artifact of category coverage (n=1), not deep structure.

## Cross-audit observations (from the Phase 4 commensurability audit)

- The **alphabet_closure gradient** (closed → constrained → open) tracks the physical → engineered → social divide across all 10 entries with zero exceptions.
- **power-grids' double nature**: most centrally controlled entry (decentralization 1) AND the only 3 on cascade_susceptibility — control and self-organized failure coexist on different axes.
- **tropical-cyclones out-scores its container** planetary-climate on openness_dissipation — hybrid columns measure dynamical centrality relative to a system's own timescale, not raw wattage; composition does not imply monotonicity.

## Robustness & validation (v0.2 sweep, 2026-07-02)

Full study: [research/v0.2-sweep/validation/robustness-report.md](../research/v0.2-sweep/validation/robustness-report.md) (pipeline: `analysis/robustness.mjs`, seeded and reproducible). Method: leave-one-out (LOO) re-runs of the full PCA/correlation/clustering pipeline (10 runs), exhaustive single-cell ±1 score perturbations, and 1000-trial Monte Carlo 5-cell perturbations. All numbers below refer to the v0.1 matrix (before the tropical-cyclones criticality 1→0 rescore of the same date; re-analysis lands with the n=15 batch).

**Survival verdicts on the four headline findings:**

| Finding | Verdict | Load-bearing number |
|---|---|---|
| PC1 = informational-adaptive vs. energetic-chaotic | **SENSITIVE** | info_processing + adaptive_capacity stay top-2 in 10/10 LOO runs, no sign flips; but the #3 loading reshuffles in 3/10 runs, and PC1's variance share ranges 36.5–39.9% under single-cell perturbation |
| info_processing ↔ adaptive_capacity (r=0.952) | **ROBUST** | LOO range 0.945–0.962; Monte-Carlo 5th–95th pct 0.905–0.960 — never leaves strong-positive territory. Also the only correlation that survives multiple-comparison correction (see below) |
| modularity ↔ self_organization (r=−0.853) | **ROBUST** (direction) | negative in 10/10 LOO runs (−0.949 to −0.730); Monte-Carlo band never crosses zero; widest perturbation swing of the set (−0.953 to −0.614) |
| the-internet ↔ fault-systems kinship | **FRAGILE** | survives 6/10 LOO runs — demoted to anecdote |

(The cities+financial-markets closest pair survives 8/10 LOO runs — reasonably stable.)

**Corrections adopted from the adversarial statistics review** ([hostile-review-statistics.md](../research/v0.2-sweep/validation/hostile-review-statistics.md); the same review audited `analysis/run.mjs` line-by-line and found the implementation **clean** — no arithmetic bugs):

1. **Multiple comparisons**: the reported correlations are the top order statistics of ~120 pairwise tests. At n=10 the Bonferroni-corrected critical |r| ≈ 0.90: only the 0.952 coupling survives; 0.85–0.87 pairs are hypothesis-generating only.
2. **PC2 vs PC3**: explained variance 20.5% vs 19.8% — statistically indistinguishable at n=10; PC2's identity ("violent dynamism vs distributed durability") should not be treated as ordered above PC3.
3. **Non-independence**: entries related by part_of/contains are not independent draws; the geophysical cluster (climate + cyclones) partially rediscovers the catalog's own composition graph and shared anchors, not just nature's structure.
4. **Ordinal-as-interval**: Spearman's rho tracks Pearson within |Δ|≤0.04 for all five headline pairs, so the ordinal objection is empirically blunted for these specific findings — but future pairs must check this, not assume it.

**Blind inter-rater reliability** ([results](../research/v0.2-sweep/validation/irr/results.md)): 3 independent raters (haiku/sonnet/opus tiers), 5 entries × 15 rubric columns, self-anchors redacted (a deliberate conservative bias). Pooled ordinal Krippendorff's α = 0.86, but the per-column table is the real result: adaptive_capacity, chaos_sensitivity, information_processing, and self_organization are solid (α ≥ 0.84) — the anchors for the catalog's most load-bearing axes reproduce blind. Three columns sat at or below chance (criticality −0.27, tipping_transitions −0.03, emergence 0.00), all failing the same way: raters agreed on facts but applied scale boundaries differently. Consequence: those three anchors received dated boundary-clarification blocks (schema/anchors/, 2026-07-02) codifying existing practice — events-not-structure and scoped-system rules for criticality, alternative-stable-state and current-system rules for tipping_transitions, effective-theory-quality for emergence. One genuine rater-vs-catalog divergence (stars' emergence, unanimous 3 vs catalog 2) is recorded as an open calibration question rather than silently resolved. All three raters skewed slightly lenient vs the catalog, increasing with model tier (haiku +0.05 → opus +0.35).

The full hostile-referee panel (psychometrics, complexity science, statistics) and the blind inter-rater reliability study live in [research/v0.2-sweep/validation/](../research/v0.2-sweep/validation/); their remaining open attacks (anchor↔sample circularity, single-model-family rating, column-redundancy artifacts in PCA) are logged there and stand as known limitations of v0.2.

## n=15 update (v0.2 expansion batch, 2026-07-02)

Five entries added through the automated pipeline v2 (global-economy, weather-systems, ocean-circulation, galaxies, world-wide-web; batch locked by Nick), all four verifiers + integrated fixer + cross-entry audit, zero blocker flags, promoted same day. Analysis re-run on the full 15×16 matrix (which also incorporates the day's two criticality rescores). All caveats from the epistemic-status paragraph and the Robustness section still apply — n=15 is still small, and three of the five new entries are compositional kin of existing entries, which deepens (not resolves) the non-independence caveat.

**How the headline numbers moved (10 → 15):**

| Statistic | n=10 | n=15 |
|---|---|---|
| PC1 explained variance | 37.9% | **42.4%** (PC2 19.5%, PC3 15.5% — now separated) |
| information_processing ↔ adaptive_capacity | 0.952 | **0.957** |
| modularity ↔ self_organization | −0.853 | **−0.870** |
| adaptive_capacity ↔ alphabet_closure | 0.850 | 0.871 |
| decentralization ↔ self_organization | 0.872 | 0.888 |

PC1's identity is unchanged and sharper: information_processing (+0.36), chaos_sensitivity (−0.34), adaptive_capacity (+0.32), alphabet_closure (+0.31) — the informational-adaptive vs. energetic-chaotic axis survived five new systems it was never fit to.

**Verdicts on the standing hypotheses (below):**

1. **info ↔ adaptivity degeneracy: still degenerate (0.957)** — but the batch contained none of the predicted dissociators (chemical oscillators, bureaucratic systems), so this round adds n without adding a real test. The dissociation candidates remain the priority for the next batch.
2. **modularity ↔ self_organization: still negative and slightly stronger (−0.870)** — same caveat: no physical-chemical entries yet (that category row is still empty), so the designed test is still pending.
3. **the-internet ↔ earthquake-fault-systems kinship: DISSOLVED, as the robustness study's FRAGILE verdict predicted.** With real kin available, the-internet's nearest neighbor is now world-wide-web (its own contained child, d=2.34) and then global-economy (3.54); fault-systems drops to d=3.95. The v0.1 "odd kinship" is best read retrospectively as a loneliness artifact of a sparse roster — a concrete demonstration of why n=10 cluster stories needed the epistemic-status paragraph. (Asymmetric residue: fault-systems' own nearest neighbor is still the-internet, because the geophysical-networky corner remains sparse.)

**New observations from the cross-entry audit at n=15** (log: [research/v0.2-sweep/expansion/verification/cross-entry-audit.md](../research/v0.2-sweep/expansion/verification/cross-entry-audit.md)):

- **The alphabet_closure gradient is now a zero-exception law across 15 independently drafted entries**: 8 closed (all physical), 5 constrained (all engineered/institutional), 2 open (both cultural). Still consistent with the "re-encodes the folk taxonomy" attack from the hostile complexity-science review — the anomaly hunt (a physical system with an open alphabet, or a social one with a closed alphabet) is what would make this a discovery rather than a relabeling.
- **Complexity metrics do not compose monotonically with containment.** Two clean cases: global-economy (decentralization 3) contains financial-markets (2) — aggregating many differently-governed subsystems dilutes central control; ocean-circulation (robustness 2) sits inside planetary-climate (3) — a subsystem can be nearer its own tipping threshold than the coupled system containing it. Together with v0.1's tropical-cyclones-out-dissipating-its-container observation, "composition does not imply monotonicity" is now a recurring cross-system pattern worth a dedicated write-up.
- **The compositional pairs are the tightest pairs**: cities+global-economy (d=1.92) and weather-systems+tropical-cyclones (d=1.59) are now the closest pairs in the catalog. Partly genuine kinship, partly the non-independence caveat made visible — related entries share anchors, verifiers, and containment edges.

## n=20 update (v0.3 expansion batch 2, 2026-07-16)

Five entries added through pipeline v2 (convection-cells, chemical-oscillators, turbulent-flows, firms, road-traffic-systems; batch list signed off by Nick with road-traffic-systems in the fifth slot per D20's queue elevation). All four verifiers + integrated fixer + cross-entry audit; one audit-level rescore applied at orchestrator triage (turbulent-flows criticality 3 → 2, restoring anchor ordering against earthquake-fault-systems' measured G-R 2 — the DP-transition literature publishes the stronger claim, but this project's evidence base for it is search-synthesis only). This batch **fills the previously empty physical-chemical category row** (three entries) and was the designed test of both standing hypotheses. Non-independence caveat deepens again: firms sits inside global-economy, road-traffic-systems inside cities.

**How the headline numbers moved (15 → 20):**

| Statistic | n=15 | n=20 |
|---|---|---|
| PC1 explained variance | 42.4% | **45.1%** (PC2 17.3%, PC3 12.2%) |
| information_processing ↔ adaptive_capacity | 0.957 | **0.882** |
| modularity ↔ self_organization | −0.870 | **−0.830** |
| information_processing ↔ alphabet_closure | (0.868 at n=10) | 0.872 |
| adaptive_capacity ↔ alphabet_closure | 0.871 | 0.859 |
| decentralization ↔ self_organization | 0.888 | 0.811 |
| chaos_sensitivity ↔ information_processing | — | **−0.827** (new to the top five) |

**Multiple-comparison status flips favorable at n=20**: Bonferroni-corrected critical |r| ≈ 0.713 (α=0.05/120 two-tailed, df=18, computed 2026-07-16) — all five top pairs now clear correction, versus exactly one at n=10/15. The catalog's headline correlations are no longer only-suggestive.

**Verdicts on the standing hypotheses:**

1. **info ↔ adaptivity: the degeneracy finally moved (0.957 → 0.882) — but the predicted dissociator was the wrong suspect.** Chemical-oscillators, the designed breaker, landed 0/0 on both columns: a BZ reaction, scored honestly against the anchors, neither processes information in the anchor's sense nor adapts — floor-degenerate, not dissociating. The dissociation actually came from **road-traffic-systems (information_processing 1, adaptive_capacity 3)** — drivers' anticipatory rerouting and demand adaptation give the system real adaptive capacity while its information processing stays thin — plus firms (3 vs 4). Eight of 20 entries now carry a ≥1-point gap between the two columns. Reading: the near-identity was partly a roster artifact; the residual structure now has faces, and "adaptation exceeding processing" (traffic) is a different failure of the identity than the long-predicted "processing without adaptation" (bureaucracies — still uncatalogued).
2. **modularity ↔ self_organization: SURVIVED its designed test (−0.830).** The physical-chemical row landed exactly on the trend line — chemical-oscillators is the new extreme point (modularity 0, self_organization 4; the catalog's first double-floor/ceiling on the pair), convection-cells and turbulent-flows both 1/4. Self-assembly produces continua; the correlation now spans an entirely new category without weakening in direction. This graduates from "surprise" to the catalog's most theory-shaped finding.
3. **the-internet ↔ fault-systems kinship: stays dissolved** at n=20 (fault-systems still attaches to the internet+web cluster late, at merge height 4.49 — the geophysical-networky corner remains sparse; still an anecdote).

**New cross-system observations at n=20** (cross-audit log: [research/v0.3/expansion/verification/cross-entry-audit.md](../research/v0.3/expansion/verification/cross-entry-audit.md)):

- **The dissipative-structure cluster now spans thirteen orders of magnitude in scale.** Convection-cells joins the tropical-cyclones + weather-systems pair at merge height 2.31 (third merge in the whole catalog), chemical-oscillators joins the same cluster next — a lab dish, a hurricane, and a synoptic storm system land in one unsupervised cluster from scores alone. Turbulent-flows instead pairs with galaxies (h=3.53) — the energetic, non-adaptive, high-decentralization profile finds its own odd couple.
- **The alphabet-closure law holds at n=20 with zero exceptions on the physical side**: all 11 closed-alphabet entries are physical/geophysical/astrophysical; the three new physical-chemical entries all landed closed, firms and road-traffic-systems landed constrained. The audit's flagship contrast: the two category-defiers (cities scores open against its constrained socio-economic category-mates; world-wide-web scores constrained against its open cultural category-mate languages) are both argued from interaction mechanism, not category label — the column is discriminating, not relabeling. The anomaly hunt (a physical system with a non-closed alphabet) remains open.
- **Composition non-monotonicity gains its sharpest case yet**: firms (decentralization 1) sits inside global-economy (3) — the audit's observation that a firm has a real-time-steering controller (CEO/board) makes it structurally closer to power-grids (1) than to any of its own category-mates. Child-out-scores-parent also recurs: firms' adaptive_capacity 4 vs global-economy's 3.

## The phenomena registry (v0.3 opening, 2026-07-03 — the D20 emergence-first lens)

Per Nick's reframing (decision D20), the pattern hunt now also runs one level down: over the
**emergent phenomena themselves** (63 classified from the 15 entries, one adversarial
verification pass applied). Full findings with epistemic caveats:
[research/v0.3/phenomena-registry/FINDINGS.md](../research/v0.3/phenomena-registry/FINDINGS.md).
Headlines, all pre-registered with their tests:

- **Candidate law — entity/function complementarity**: all 12 individuable emergent *objects*
  sit in closed-alphabet physical systems; all 6 emergent *capabilities* sit in
  constrained/open ones ("physics makes things, society makes capabilities"). Partly a
  naming-granularity artifact per the verifier; the traffic jam (road-traffic-systems, queue
  priority raised) is the designated breaker.
- **Eight recurring emergence motifs**, five with faces: the dissipative cell, the rank-size
  law (exclusively social, 5 lineages), the bistable engine (exclusively physical), and —
  the two that genuinely cross the physical/social divide — **the frozen network record**
  (drainage networks ≍ AS hierarchy ≍ web communities) and **the drifting collective rhythm**
  (volatility regimes ≍ business cycle ≍ AMOC overturning).
- **Sharp onsets come with theories**: threshold-bifurcation phenomena carry quantitative
  effective theories in 12/14 cases vs 3/7 for episodic ones.

**Batch-2 update (2026-07-16) — all four pre-registered tests resolved** (18 new phenomena
classified and adversarially verified; registry now 81 phenomena / 20 systems; full write-up in
[FINDINGS.md](../research/v0.3/phenomena-registry/FINDINGS.md)):

- **The entity/function law's strong form is DEAD, as pre-registered**: the traffic jam
  classified new-entity in a constrained-alphabet system and survived hostile review
  (closure table now 15/1/0). The weak form stands and the function side stays perfectly
  clean (0/4/2): *physics makes things easily, society makes them rarely, but only society
  makes capabilities.*
- **The BZ oscillator FAILED to join the bistable engine** (sustained-while-driven, not
  self-sustaining — no stored gradient), which sharpened the motif's membership rule: bistable
  engines run on *storage*. Plate tectonics (elastic strain) is the new designated probe.
- **The dissipative-cell motif gained its type specimen**: convection rolls with the project's
  first entry-cited Ra_c (1707.762), plus turbulence puffs (Re_c ≈ 2040) — 3 → 5 lineages,
  lab dish to synoptic storm.
- **The rank-size motif took its 6th lineage (firm sizes, lineage-deduplicated against
  global-economy) and stays exclusively social** at n=20.

## The dream-headline analysis (2026-07-16, Workstream B — the four candidates at n=20)

The v0.2 review left four headline candidates open. A dedicated pass at n=20 (robustness re-run: [research/v0.3/validation/robustness-report-n20.md](../research/v0.3/validation/robustness-report-n20.md); inversion census: this section) now lets the data rank them:

**(a) The alphabet-closure law — STRENGTHENED, and its overreach was cut back by a pre-registered test.** The entry-level law stands at **zero exceptions across 20 independently drafted entries** (11 closed — all physical; 6 constrained — all engineered/institutional; 3 open — cultural + cities). The phenomena-level strong corollary (entities only in closed systems) was killed exactly as pre-registered by the traffic jam — which is what a real law's boundary looks like being mapped, not a relabeling artifact. The two category-defying entries (cities open, world-wide-web constrained) argue closure from mechanism against their own category labels. What it still needs: the anomaly hunt (granular media and plasmas are the physical-side probes in the roster candidates).

**(b) PC1 as THE axis — GROWING but still composition-SENSITIVE.** Variance share climbed monotonically with n (37.9% → 42.4% → 45.1%) and the informational-adaptive pole survives every LOO run; but the #3–5 loadings still reshuffle in 3/20 LOO runs and PC2/PC3 identities remain unstable. A real but not-yet-crisp headline.

**(c) info ≡ adaptivity — the identity BROKE this round (0.957 → 0.882), and the breakage has structure.** Eight of 20 entries now carry a ≥1 gap, in two opposite directions: *adaptation without processing* (road-traffic-systems +2, firms +1) and *processing without adaptation* (the-internet, power-grids, world-wide-web, languages, earthquake-fault-systems, convection-cells at −1). The identity was a roster artifact; what remains is a **two-sided residual taxonomy** that the missing bureaucratic-systems-style entry would test directly.

**(d) Composition non-monotonicity — SYSTEMATIZED, and it has a shape.** Census across all 13 containment edges × 15 rubric/hybrid columns: **36/195 scored parent-child pairs invert (18.5%), touching 11 of 13 edges** — non-monotonic composition is the norm, not a curiosity. The inversions concentrate overwhelmingly in the **sharp-dynamics columns**: criticality inverts on 7 of 13 edges, chaos_sensitivity on 5, tipping_transitions on 4 — versus zero on decentralization-toward-parents and near-zero on the structural columns. Reading: **aggregation smooths — containers average over their subsystems, so the sharpest member out-scores its whole on precisely the spiky columns.** Financial-markets is the extreme case, out-scoring BOTH its containers (cities and global-economy) on nonlinearity, criticality, tipping, information_processing, adaptive_capacity, AND emergence — the catalog's hottest subsystem sits two levels deep.

**Ranking the data suggests:** (d) is the most *finished* result (a census with a mechanism-shaped pattern, no pending dependencies); (a) is the most *law-like* (zero exceptions, survived a designed kill-test at its corollary layer, clear falsification program); (c) just became *newly alive* (the identity broke into an interpretable two-pole structure); (b) needs more roster. A defensible composite headline: **"complexity metrics do not compose: the parts are spikier than the wholes"** (d) with (a) as the second act — but this is Nick's call, per the open question.

## Standing hypotheses for the next analysis round

*(Rewritten 2026-07-16 after the n=20 batch resolved the previous three: #1 partially dissociated via road-traffic-systems, #2 survived its designed test, #3 stays dissolved.)*

1. Does information_processing ↔ adaptive_capacity keep sliding at n≈30, and does the "adaptation exceeding processing" pole (road-traffic-systems +2, firms +1) acquire more members? The mirror candidate — processing WITHOUT adaptation, the long-predicted bureaucratic-systems case — is still uncatalogued and is now the more informative missing entry.
2. Does the alphabet-closure law survive the anomaly hunt — specifically, is there a famous physical system with a non-closed interaction alphabet anywhere in the roster candidates (granular media? plasmas?), or a social one with a closed alphabet?
3. Does modularity ↔ self_organization (−0.830, direction-robust across two designed tests) survive entries built to break it — highly modular self-organized systems (software ecosystems? supply chains?)?
4. The phenomena-registry pre-registered tests carried forward from the batch-2 classification (see the registry section above and FINDINGS.md for the resolved and open ones).
