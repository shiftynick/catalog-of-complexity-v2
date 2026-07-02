# Hostile Review — Statistics / Data Analysis Lens

**Target:** `analysis/run.mjs`, `analysis/output/analysis.json`, `docs/findings.md`, `schema/panel-spec.yaml`
**Reviewer stance:** hostile referee, statistics/data-analysis lens only. Not attacking the philosophy, the anchors-as-judgment epistemology, or the project's framing — attacking the math and its presentation as findings.
**Data:** n=10 systems × 16 columns (15 rubric/hybrid 0–4 scores + `alphabet_closure_encoded` {0,1,2}).

Severity key: **FATAL-if-unanswered** (invalidates a stated conclusion unless addressed) / **SERIOUS** (materially overstates confidence, must be hedged or fixed) / **QUIBBLE** (true but low-stakes, fix if convenient).

---

## Attack 1 — Multiple comparisons: the 5 headline correlations are the order statistics of 120 tests, and only one survives correction

**Severity: FATAL-if-unanswered** (as currently presented in `docs/findings.md`)

`run.mjs` lines 528–542 (`printConsoleReport`) and the `correlations.matrix` in `analysis.json` compute the full 16×16 Pearson matrix — **120 distinct off-diagonal pairs** (16 choose 2). `docs/findings.md`'s "The correlations" table (lines 16–23) reports the top 5 |r| values from exactly this pool, selected *by* being the largest.

I computed the two-tailed critical r at df=8 (n=10) both uncorrected and Bonferroni-corrected for 120 comparisons, via a self-contained incomplete-beta-function t-distribution solver (checked against the known table value t(df=8, α=.05)=2.306 — matched to 4 decimals):

- **Uncorrected α=.05, df=8: r_crit ≈ 0.632**
- **Bonferroni α=.05/120, df=8: r_crit ≈ 0.898**

Against this: only **information_processing↔adaptive_capacity (r=0.952)** clears Bonferroni. The other four headline pairs — decentralization↔self_organization (0.872), information_processing↔alphabet_closure (0.868), modularity↔self_organization (−0.853), adaptive_capacity↔alphabet_closure (0.850) — all clear the *uncorrected* threshold but **fail Bonferroni**. They are exactly the kind of "look how large the biggest few order statistics out of 120 draws are" result that regresses hard toward the null under correction or replication.

**Existing defense:** `findings.md`'s epistemic-status paragraph (line 7) says "exploratory pattern description generating hypotheses, not established results" and asks for "leave-one-out sensitivity checks" — this is real hedging and better than nothing.

**What it does NOT do:** it never states that these are the top-5-of-120, never gives an uncorrected or corrected significance threshold, and phrases individual findings in confidence language that outruns the hedge — "Empirically near-identical" (line 18), "co-vary strongly" (19), "**The surprise**... Unpredicted" (21), "**holds statistically**" (22, bolded). "Holds statistically" for a pair at r=0.850 that misses Bonferroni by a wide margin is the single most overstated line in the document — D13's hypothesis is *consistent with* the data, not statistically established by it, at this n and this comparison volume.

**Remediation:** Either (a) add the corrected threshold explicitly to findings.md and downgrade language for the four sub-Bonferroni pairs to "suggestive, not surviving correction," or (b) pre-register a small set of theory-driven pairs (e.g., the D13 alphabet_closure↔adaptive_capacity hypothesis was pre-registered per panel-spec.yaml line 189 — that one gets a pass on multiple-comparisons grounds because it was predicted in advance, not mined) and report the rest as description only, explicitly unranked by significance.

---

## Attack 2 — Compositional non-independence: rows are not exchangeable, and one "finding" is literally a tautology of the data-entry process

**Severity: FATAL-if-unanswered** (for the specific claim in findings.md line 27; SERIOUS for the pipeline generally)

Every correlation, PCA, and clustering computation in `run.mjs` treats the 10 rows as independent samples (implicit in Pearson's df=n−2=8, in z-scoring, in average-linkage). But `data/classes/*.yaml` `relations:` blocks show explicit, resolved containment:

- `cities.yaml: contains: [power-grids, financial-markets, ...]` — reciprocated in `power-grids.yaml: part_of: [cities, ...]` and `financial-markets.yaml: part_of: [global-economy, cities]`
- `planetary-climate.yaml: contains: [..., tropical-cyclones, ..., river-networks]` — reciprocated in `tropical-cyclones.yaml: part_of: [weather-systems, planetary-climate]` and `river-networks.yaml: part_of: [planetary-climate]`

That is **5 of the 10 rows** standing in a direct part-whole relationship with another row in the same n=10 sample. `findings.md` line 27 states: *"tropical-cyclones out-scores its container planetary-climate on openness_dissipation — hybrid columns measure dynamical centrality relative to a system's own timescale... composition does not imply monotonicity."* This is presented as an empirical finding, but it is closer to a coding-convention check: a subsystem entry and its container entry were scored by the same anchors, by the same verifiers, in the same phase, with explicit cross-references between their YAML files (see cities.yaml's inline comments: "cities.yaml line ~68 comment"). Any correlation involving cities/power-grids/financial-markets or planetary-climate/tropical-cyclones/river-networks pairs is partly measuring "verifiers were internally consistent when scoring related entries," not "these are independently arising natural regularities."

The clustering section (findings.md line 27) explicitly celebrates this: *"planetary-climate + tropical-cyclones pair — the compositional relation... rediscovered from scores alone."* Framed as a validity check this would be fine (it shows the anchors are self-consistent). Framed as a *finding about complex systems* it is circular: the pipeline detected that a whole and its part were scored similarly, which is closer to expected artifact than to discovery.

**Existing defense:** none in findings.md's epistemic-status paragraph — non-independence is not mentioned at all.

**Remediation:** Add an explicit non-independence caveat to the epistemic-status section naming which rows are compositionally linked; consider a sensitivity re-run with one member of each contained pair dropped; do not present the climate/cyclone or cities/power-grids/markets proximities as arm's-length discoveries.

---

## Attack 3 — n=10, p=16 PCA: loadings are not stable, explained-variance point estimates carry no uncertainty

**Severity: SERIOUS**

`run.mjs` line 376 runs PCA on a 10×16 z-scored matrix. With more variables (16) than roughly half the sample size, and only 9 degrees of freedom for variance in any direction, individual eigenvector *loadings* are extremely sample-sensitive — a single entry's score swinging by 1 point on a 0–4 scale can visibly rotate a component. `findings.md` reports specific loadings to 2 decimal places ("information_processing (0.39), adaptive_capacity (0.36), alphabet_closure (0.35)") with no bootstrap/jackknife confidence interval and no leave-one-out stability check (despite explicitly proposing LOO as future work in line 7 and in the "Standing hypotheses" section — i.e., the authors know this is needed and haven't done it yet). PC1 and PC2 together explain 58.4% of variance (`explainedVariance: [0.379, 0.205, 0.198]`) — meaning PC3, reported with a near-identical 19.8% share to PC2's 20.5%, is essentially tied with it; at this n the ordering of PC2 vs PC3 is itself not something to trust.

**Existing defense:** findings.md caveats generally ("exploratory... generating hypotheses") and explicitly flags LOO as the needed next check (line 7, line 41 standing hypothesis #3) — so the authors are aware, but the current write-up still states loadings as if precise ("Positive loadings: ... (0.39)... Negative: ... (−0.36)") without a stability caveat attached to that specific paragraph.

**Remediation:** Either bootstrap the loadings (resample rows with replacement, refit PCA, report loading sign-stability / CI) before quoting them to 2 decimals, or state loadings as directional/qualitative only ("information_processing and adaptive_capacity load positively, chaos_sensitivity negatively") without the numeric precision that implies stability it doesn't have.

---

## Attack 4 — Pearson (and PCA, which is Pearson-covariance-based) on 0–4 ordinal data with heavy ties; alphabet_closure fed as interval

**Severity: SERIOUS**

Every column is a 0–4 ordinal rubric score; I counted unique values per column in the actual matrix — most columns take only **3–5 distinct values across the 10 rows** (e.g., `modularity`: {1,2,3}, `criticality`: {0,1,2}, `emergence`: {2,3,4}, `alphabet_closure_encoded`: {0,1,2}). Pearson r and PCA (which decomposes a Pearson-style covariance/correlation structure) both assume interval-scaled, roughly continuous data; heavy ties on a coarse ordinal scale violate this, and `alphabet_closure_encoded` (`ALPHABET_CLOSURE_MAP = { closed: 0, constrained: 1, open: 2 }`, run.mjs line 56) is not even ordinal by construction so much as a 3-level nominal-with-an-implied-order category, hard-coded as if the "distance" from closed→constrained equals constrained→open — an unstated and unjustified interval assumption baked directly into a variable name (`_encoded`) that then feeds untouched into both the correlation matrix and PCA.

**I computed Spearman's rho for the 5 headline pairs to check whether this matters in practice** (see `analysis/run.mjs`'s columns via a standalone script against `analysis.json`'s raw matrix, average-rank tie handling):

| Pair | Pearson r | Spearman ρ | Δ |
|---|---|---|---|
| information_processing ↔ adaptive_capacity | 0.952 | 0.942 | −0.010 |
| decentralization ↔ self_organization | 0.872 | 0.880 | +0.008 |
| information_processing ↔ alphabet_closure | 0.868 | 0.866 | −0.003 |
| modularity ↔ self_organization | −0.853 | −0.842 | +0.011 |
| adaptive_capacity ↔ alphabet_closure | 0.850 | 0.888 | +0.039 |

**Finding: Spearman and Pearson agree closely for all 5 headline pairs (|Δ| ≤ 0.04).** This is a genuine, useful negative result — the ordinal/interval mismatch is *not* what's driving the headline correlations; rank-order structure alone reproduces them. This somewhat blunts the severity of the ordinal-data objection for these specific 5 pairs (raise to QUIBBLE for *this* finding specifically) but the general point stands for any future pair not checked, and PCA itself has no rank-based analogue in the pipeline at all — polychoric/ordinal PCA was not attempted and the interval assumption is silent and undocumented anywhere in run.mjs or panel-spec.yaml.

**Remediation:** Document the Spearman-robustness check in findings.md (cheap, already done above); add a code comment in run.mjs at `ALPHABET_CLOSURE_MAP` flagging the interval assumption explicitly; consider polychoric correlation or ordinal PCA (e.g., via optimal scaling) if/when the roster grows enough to make this worth the engineering.

---

## Attack 5 — z-score population SD (n, not n−1): small, systematic overstatement of |z| feeding both PCA and Euclidean/clustering

**Severity: QUIBBLE** (magnitude is small and internally consistent, but it is a real, checkable bug-adjacent choice)

`run.mjs`'s `populationStd` (line 189) divides by `n`, not `n−1`. I verified this against the actual output: for the `modularity` column (mean=1.7), population SD = 0.6403 vs. sample SD = 0.6749; the emitted `zmatrix[0][0]` = 0.46852, which matches `(2−1.7)/0.6403` exactly and does **not** match the sample-SD version (0.44448). So the code does what it says, consistently, and both PCA (which is scale-invariant to a uniform rescaling of all columns) and Euclidean distance (uniformly rescaled) are **not distorted by this in relative terms** — z-scoring with n vs. n-1 SD only uniformly inflates all z-scores by a constant factor sqrt(n/(n−1)) = sqrt(10/9) ≈ 1.054, which does not change PCA loadings, does not change correlation values (Pearson r is scale-invariant regardless — note correlations.matrix is computed on **raw** scores per line 420–432, not on z-scores, so this bug doesn't even touch the correlation table), and does not change relative cluster merge order (Euclidean distances all scale by the same 1.054 factor, heights in the dendrogram just come out ~5.4% larger uniformly).

**Where it *could* matter:** absolute PC coordinate magnitudes (`pca.coords`) and absolute cluster merge heights are ~5.4% inflated relative to a sample-SD convention — cosmetic for the Map view's relative layout, but any future comparison of raw magnitudes against a fixed threshold (none currently exists) would be affected. n=10 is small enough that population vs. sample SD is a genuine methodological choice point, and the more standard convention for a *sample* (which this is — 10 sampled classes, not the population of all conceivable complex-system classes) is n−1.

**Remediation:** Switch to sample SD (n−1) for closer alignment with standard practice, or add a one-line comment justifying population SD (e.g., "these are being treated as the full population of interest for v0.1, not a sample" — but that reading is in tension with findings.md explicitly wanting a bigger n later, which frames the 10 as a sample of a larger conceivable roster).

---

## Attack 6 — Average-linkage clustering on 10 points: standard instability, no stability check, "clusters" narrated as natural kinds

**Severity: SERIOUS**

`averageLinkageClustering` (run.mjs lines 226–269) is a correct, standard UPGMA implementation (verified by hand-tracing the merge logic — no bug found). But average-linkage on n=10 in 16-D Euclidean space is known to be highly sensitive to which points enter first and to the specific distance values, and no stability analysis (bootstrap resampling of rows, comparison against complete/Ward linkage, cophenetic correlation) is performed or reported. `findings.md`'s clustering section narrates specific pairs with confident, almost taxonomic language — "**The odd kinship**: the-internet's nearest neighbor is **earthquake-fault-systems**" (line 28) — as if this were a robust structural discovery. At n=10, a single UPGMA run's nearest-neighbor pairing is exactly the kind of result that can flip under a different linkage rule or a small score perturbation; the internet/fault-systems distance (3.826, per `distance` matrix) is close to several other pairwise distances in the same matrix (e.g., cities/tropical... check general spread: distances range ~3.3–8.75), so this isn't an obviously dominant, well-separated cluster structure.

**Existing defense:** findings.md does flag the "languages joins late... likely an artifact of category coverage (n=1), not deep structure" (line 29) — so the authors apply skepticism selectively, but not uniformly; the internet/fault-systems pairing gets the opposite treatment ("flagged for investigation" as if likely real) despite comparable n-fragility.

**Remediation:** Re-run clustering with complete linkage and Ward's method as a robustness check; report whether the internet/fault-systems pairing and the cities/financial-markets pairing survive; note in findings.md that with n=10 no clustering result should be read as more than "these two happened to be closest under one linkage rule this round."

---

## Code audit verdict (explicit, since a clean bill deserves to be stated as a finding)

- **PCA implementation (`ml-pca` v4.1.1, SVD method):** correct. Traced the library source (`node_modules/ml-pca/lib-esm/pca.js`): uses SVD on the (already z-scored, `center:false` so no double-centering) input matrix, eigenvalues = singular_value²/(n−1) (this IS sample-convention, n−1, inside the library — inconsistent with the hand-rolled z-score's population-SD choice noted in Attack 5, but internally harmless per that attack's analysis). Verified eigenvectors are orthonormal (‖loading vector‖²=1 for PC1/PC2/PC3, cross-dot PC1·PC2 ≈ 1.87e-16 ≈ 0) directly against `analysis.json`'s `pca.loadings` — **no bug**.
- **Correlation function (`pearson`, lines 195–211):** standard, correct covariance-over-product-of-SDs formula; correctly guards divide-by-zero. **No bug.**
- **z-score denominator:** uses population SD (n), not sample SD (n−1) — see Attack 5. **Real but low-impact choice, not a bug in the sense of contradicting the code's own documentation** (no comment claims sample-SD).
- **`alphabet_closure` encoding:** `{closed:0, constrained:1, open:2}` — correctly extracted and validated (lines 158–179, good input validation with normalization and a clear failure message for unrecognized values) but treated as interval-scaled for both Pearson and PCA with no documentation of that assumption. **Not a bug, but an undocumented and consequential modeling choice** (Attack 4).
- **Average-linkage clustering:** hand-traced the merge loop; correctly recomputes mean pairwise distance across cluster members at each step and correctly removes/merges cluster indices. **No bug.**
- **Euclidean distance matrix:** correct, symmetric, zero diagonal — confirmed against `analysis.json`. **No bug.**
- **Data-loading / fail-loudly discipline (lines 63–156):** genuinely strong — every missing/malformed/out-of-range score throws a descriptive fatal error naming the entry and column; no silent imputation anywhere. This is a real strength worth stating as a clean-audit finding, not just an absence of bugs.

**Overall: the arithmetic is correct.** Every problem identified above is a *statistical inference / presentation* problem (multiple comparisons, non-independence, small-n instability, ordinal-as-interval, population-vs-sample SD convention) layered on top of correct code, not a coding bug. The one place code and statistics intersect (Attack 5, population SD) is verified harmless to every downstream reported number except absolute (not relative) magnitudes.
