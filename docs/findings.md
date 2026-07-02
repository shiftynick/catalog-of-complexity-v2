# First Cross-System Findings (v0.1 pilot analysis)

**Date:** 2026-07-02 · **Data:** 10 verified class entries × 16 columns (15 rubric/hybrid scores + encoded alphabet_closure) · **Method:** column-wise z-scores → PCA; Euclidean distances → average-linkage clustering; Pearson correlations on raw scores · **Pipeline:** [analysis/run.mjs](../analysis/run.mjs) → [analysis/output/analysis.json](../analysis/output/analysis.json) · **Rendered:** the app's Map view.

## Read this first: epistemic status

n = 10, and the inputs are anchored rubric judgments, not measurements. Everything below is **exploratory pattern description generating hypotheses**, not established results. What would strengthen (or kill) these findings: more entries (Phase 6 roster scaling), leave-one-out sensitivity checks, and re-analysis after any anchor recalibration. Do not cite these numbers outside the project without this paragraph attached.

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
| adaptive_capacity ↔ alphabet_closure | 0.850 | The panel-spec's registered hypothesis (D13) **holds statistically** — while financial-markets breaks it pointwise (constrained alphabet, ceiling adaptivity), the anomaly the spec said would be the interesting part. |

## The clusters (average linkage, unsupervised)

1. **Socio-technical**: cities + financial-markets join first (closest pair in the catalog), power-grids attaches later.
2. **Geophysical-dissipative**: planetary-climate + tropical-cyclones pair — the compositional relation (climate *contains* storms) rediscovered from scores alone.
3. **The odd kinship**: the-internet's nearest neighbor is **earthquake-fault-systems** — both networky, non-adaptive at component level, weakly chaotic, criticality-adjacent. Cross-category kinship is exactly what the catalog exists to surface; flagged for investigation.
4. **languages** joins late as the lone cultural-informational entry — likely an artifact of category coverage (n=1), not deep structure.

## Cross-audit observations (from the Phase 4 commensurability audit)

- The **alphabet_closure gradient** (closed → constrained → open) tracks the physical → engineered → social divide across all 10 entries with zero exceptions.
- **power-grids' double nature**: most centrally controlled entry (decentralization 1) AND the only 3 on cascade_susceptibility — control and self-organized failure coexist on different axes.
- **tropical-cyclones out-scores its container** planetary-climate on openness_dissipation — hybrid columns measure dynamical centrality relative to a system's own timescale, not raw wattage; composition does not imply monotonicity.

## Standing hypotheses for the next analysis round

1. Does information_processing ↔ adaptive_capacity stay near-degenerate at n≈40, or do dissociating systems appear (candidates: chemical oscillators — processing-free adaptation-free; bureaucratic systems — processing without adaptation)?
2. Does modularity ↔ self_organization stay negative once physical-chemical entries (convection cells, BZ reaction) enter?
3. Is the internet/fault-systems kinship robust to leave-one-out and to adding more infrastructure entries?
