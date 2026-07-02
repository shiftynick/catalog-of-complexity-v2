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

## Standing hypotheses for the next analysis round

1. Does information_processing ↔ adaptive_capacity stay near-degenerate at n≈40, or do dissociating systems appear (candidates: chemical oscillators — processing-free adaptation-free; bureaucratic systems — processing without adaptation)?
2. Does modularity ↔ self_organization stay negative once physical-chemical entries (convection cells, BZ reaction) enter?
3. Is the internet/fault-systems kinship robust to leave-one-out and to adding more infrastructure entries?
