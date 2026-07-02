# Blind Inter-Rater Reliability (IRR) Study — Method

## Design

5 sampled catalog entries (`stars`, `river-networks`, `cities`,
`the-internet`, `languages`) x 15 rubric/hybrid columns (list below) x 3
independent blind rater agents, scored against the catalog's own anchor
scales (`schema/anchors/*.yaml`), and compared against this catalog's
existing (published) scores for the same 75 cells.

Each blind rater receives, per entry:

- a **redacted anchor file** for each of the 15 columns
  (`packets/anchors-redacted/<column>.yaml`) — the full 0-4 scale text,
  `does_not_count` exclusion rules, and worked anchor examples for the 5
  NON-sampled classes (tropical-cyclones, financial-markets, power-grids,
  earthquake-fault-systems, planetary-climate, plus incidental
  calibration-only anchors such as granular-media and convection-cells where
  a column happens to use them) — with every worked example naming a
  sampled class or its exemplar removed;
- a **brief packet** for the entry being scored
  (`packets/brief-<id>.md`) — id, name, category, the exemplars block, and
  the scoping_note verbatim, and nothing else (no scores, no justifications,
  no summary/ontology/sources — see contamination-map.md for the redaction
  audit and packet-cleanliness confirmation).

Raters score each of the 15 columns 0-4 (hybrid columns also carry a
qualitative sub-claim per their own scale, e.g. criticality's
mechanism_status, but the comparison metric here is the numeric score) with
a written justification, exactly as the catalog's own production pipeline
requires, but with no access to any existing score, justification, or
narrative content for the entry.

The resulting 3 blind scores per (entry, column) cell are compared to each
other (rater-rater agreement) and to the catalog's existing published score
for that cell (rater-catalog agreement), which functions as a reference/
"gold" rating produced under the catalog's normal (non-blind, anchor- and
comparator-informed) production process.

## Statistic

**Ordinal Krippendorff's alpha**, computed per column across the 4 raters
(3 blind raters + the catalog's own existing score treated as a 4th rater
for the rater-catalog comparison, or alternatively computed twice: once
among the 3 blind raters only, once including the catalog score) using the
ordinal difference function (weighted by squared rank distance on the 0-4
scale, matching the ordinal — not nominal or interval — nature of the
rubric). Krippendorff's alpha is preferred over simple percent-agreement or
Cohen's/Fleiss' kappa because:

- it handles the >2-rater case natively (3 blind raters, or 3 blind +
  1 catalog);
- it handles missing data gracefully, which matters if a rater declines to
  score a cell (e.g., treats "no anchor example for this class" as
  insufficient basis and returns `unknown` rather than guessing, which the
  catalog's own `no-guessing` filling_rule explicitly permits);
- the ordinal weighting means a 1-point disagreement (e.g., 2 vs. 3) is
  penalized less than a 3-point disagreement (e.g., 0 vs. 4), matching how
  the anchor scales themselves are written as an ordered progression rather
  than unordered categories.

Report alpha per column (15 values) plus an aggregate alpha pooling all 75
cells, so entry-level and column-level patterns (e.g., "this column is
inherently harder to score blind" vs. "this entry has thinner anchor
coverage") are both visible rather than averaged away.

## Redaction rule and its known cost

**Rule applied:** for each of the 15 anchor files, every worked anchor-list
entry (`anchors:` block item) whose `system:` (or named exemplar) matches
one of the 5 sampled classes or their exemplars was deleted in its entirety
(the `system`, `exemplar`, `category`, `score`, `justification`,
`evidence_status`, and `sources` fields together) and replaced with a
single visible marker line:
`# [redacted for blind IRR study — worked example removed]`. Scale text,
`does_not_count` rules, and worked examples for non-sampled classes were
left untouched, since raters need at least one worked calibration example
per column to anchor their own judgment (per the task's explicit design —
this is why non-sampled-class anchors, e.g. tropical-cyclones or
financial-markets, remain in every redacted file). A small number of
`notes:` sections also referenced a sampled class or its score in
descriptive prose without a dedicated `score:`-bearing anchor block; the
clearest of these (ones that would hand a rater a specific number, e.g. an
"ORCHESTRATOR ADJUDICATION" note quoting a before/after score, or a
2x2-quadrant note naming which sampled system sits in which cell) were also
redacted or genericized. See `contamination-map.md` for the full per-column
audit, including the handful of lower-risk prose mentions that were left
in place because they name a class without attaching a number to it.

**Known cost (a conservative bias, stated explicitly per the task brief):**
removing a class's own worked anchor means blind raters lose the single
most load-bearing calibration point for that exact class — several columns
in this catalog were originally scored by direct analogy to a same-class or
very-close-comparator anchor (e.g., the catalog's own production entries
routinely say "per this class's own anchor" for anchors that exist, or
"scored against the scale text with the nearest anchored comparator" when
they don't). Redacting a class's self-anchor forces blind raters back onto
scale text plus a *different* class's worked example, which is a harder and
noisier judgment task than the catalog's own non-blind pipeline was ever
asked to perform. The expected effect is to **depress measured agreement**
for the sampled classes relative to what the catalog's true production
process achieves (which does allow self-anchors and cross-references to
prior entries) — i.e., this study's alpha values should be read as a
**lower bound / conservative estimate** of the catalog's real scoring
reliability, not as an unbiased estimate of it. A low alpha under this
design does not by itself indicate the panel-spec's anchors are unusable in
production; it indicates blind, self-anchor-free scoring is harder, which
is the deliberately harder condition this study is designed to test.

## The 15 rubric/hybrid columns

Per `schema/panel-spec.yaml`, every column with `kind: rubric` or
`kind: hybrid` (columns with `kind: quantitative`, `categorical`, or
`structured` are out of scope for this study):

| # | Column id | Group | Kind |
|---|---|---|---|
| 1 | `decentralization` | B — Structure | rubric |
| 2 | `modularity` | B — Structure | hybrid |
| 3 | `nonlinearity` | C — Dynamics | rubric |
| 4 | `feedback` | C — Dynamics | rubric |
| 5 | `openness_dissipation` | C — Dynamics | hybrid |
| 6 | `chaos_sensitivity` | C — Dynamics | hybrid |
| 7 | `criticality` | C — Dynamics | hybrid |
| 8 | `tipping_transitions` | C — Dynamics | hybrid |
| 9 | `memory_hysteresis` | D — Information & Memory | hybrid |
| 10 | `information_processing` | D — Information & Memory | rubric |
| 11 | `adaptive_capacity` | E — Adaptation | rubric |
| 12 | `emergence` | F — Emergence & Robustness | rubric |
| 13 | `self_organization` | F — Emergence & Robustness | rubric |
| 14 | `robustness_resilience` | F — Emergence & Robustness | rubric |
| 15 | `cascade_susceptibility` | F — Emergence & Robustness | hybrid |

(`variation_selection`, group E, is `kind: categorical` and is excluded;
all Group A "Identity & Scale" columns are `quantitative` or `structured`
and excluded; `interaction_topology` and `interaction_ontology`, Group B,
are `categorical`/`structured` and excluded; `degree_distribution`,
`hierarchy_depth`, `fractal_dimension_spatial`, `extreme_event_statistics`,
`temporal_correlation`, group A's `spatial_extent`,
`characteristic_timescales`, `numerosity`, `instance_population`,
`component_ontology`, `energy_rate_density` are all `quantitative` or
`structured` and excluded.)
