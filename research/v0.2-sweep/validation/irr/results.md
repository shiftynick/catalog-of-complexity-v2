# Blind Inter-Rater Reliability (IRR) Study — Results

Design: `method.md`. Computation: `compute-alpha.mjs` -> `results.json`. 5 sampled
entries (`stars`, `river-networks`, `cities`, `the-internet`, `languages`) x 15
rubric/hybrid columns x {catalog + 3 blind raters (haiku, sonnet, opus)}.

**No missing cells.** All 3 blind raters scored all 15 columns for all 5
entries (`unknown` was a legal response per the catalog's `no-guessing`
filling_rule; none was used), and the catalog carries a numeric score for
every one of the 75 target cells. `results.json.missing_cells` is empty.

## Column-by-column agreement

alpha-4rater = ordinal Krippendorff's alpha across catalog + 3 blind raters (4
raters/unit). alpha-3blind = the same statistic among the 3 blind raters only,
excluding the catalog. mean|delta| vs catalog = average, over blind raters, of
mean absolute deviation from the catalog score for that column. exact-match% =
fraction of the 5 entries where all 3 blind raters exactly matched the catalog
score. Worst cell = the (entry, column) with the largest spread (max - min)
across all 4 scores.

| Column | alpha-4rater | alpha-3blind | mean\|Δ\| vs catalog | exact-match% | worst cell (spread) |
|---|---:|---:|---:|---:|---|
| adaptive_capacity | 0.952 | 0.937 | 0.13 | 60% | cities (Δ1: cat 3, blind 3/3/4) |
| chaos_sensitivity | 0.881 | 0.990 | 0.27 | 60% | stars (Δ1: cat 2, blind 2/3/2) |
| information_processing | 0.852 | 0.887 | 0.40 | 40% | river-networks (Δ1: cat 1, blind 1/0/0) |
| self_organization | 0.841 | 0.847 | 0.33 | 40% | cities (Δ1: cat 3, blind 2/2/2) |
| openness_dissipation | 0.767 | 0.697 | 0.27 | 60% | the-internet (Δ2: cat 2, blind 4/2/2) |
| decentralization | 0.701 | 0.593 | 0.20 | 40% | cities (Δ1: cat 2, blind 2/2/3) |
| nonlinearity | 0.668 | 0.730 | 0.53 | 20% | stars (Δ1: cat 3, blind 3/4/4) |
| memory_hysteresis | 0.601 | 0.505 | 0.60 | 0% | cities (Δ2: cat 3, blind 2/3/4) |
| cascade_susceptibility | 0.578 | 0.627 | 0.53 | 0% | stars (Δ1: cat 0, blind 0/0/1) |
| modularity | 0.578 | 0.659 | 0.60 | 0% | stars (Δ1: cat 1, blind 0/1/1) |
| feedback | 0.513 | 0.682 | 0.33 | 60% | stars (Δ1: cat 2, blind 3/3/3) |
| robustness_resilience | 0.285 | 0.251 | 0.47 | 0% | stars (Δ1: cat 4, blind 4/3/4) |
| tipping_transitions | 0.237 | -0.032 | 0.60 | 0% | the-internet (Δ2: cat 0, blind 0/1/2) |
| emergence | 0.010 | 0.000 | 0.53 | 40% | stars (Δ1: cat 2, blind 3/3/3) |
| criticality | -0.004 | -0.270 | 0.73 | 20% | river-networks (Δ2: cat 0, blind 0/1/2) |

**Pooled (all 75 cells, all 15 columns together):**

- 4-rater (incl. catalog): alpha = **0.857** (n = 300 pairable values, 75 units)
- 3-blind-only: alpha = **0.860** (n = 225 pairable values, 75 units)

Hand-check: `chaos_sensitivity` 3-blind alpha was independently recomputed by
hand from the raw rater values (`stars`=[2,3,2], `river-networks`=[1,1,1],
`cities`=[1,1,1], `the-internet`=[1,1,1], `languages`=[0,0,0]) using the same
coincidence-matrix/ordinal-delta formula documented in `compute-alpha.mjs`;
the manual calculation reproduces the script's value to 10+ significant
figures (alpha = 0.9903448275862069, Do = 0.3, De = 31.07142857...). All 30
alpha values (15 columns x 2 rater sets) plus the 2 pooled values fall inside
[-1, 1] as required.

**Caution on the pooled numbers:** pooling across columns inflates the
observed-marginal spread (De in the alpha formula), so the pooled alpha
(0.86) looks much healthier than most individual columns and should not be
quoted as "the" reliability figure — three columns (`criticality`,
`tipping_transitions`, `emergence`) sit at or below chance agreement despite
the strong pooled number. Read the per-column table as the primary result;
the pooled figure mainly reflects that a handful of high-alpha columns
(`adaptive_capacity`, `chaos_sensitivity`, `information_processing`,
`self_organization`) carry a lot of weight.

## Per-rater bias

Mean signed bias = mean(blind score − catalog score) across all 75 cells;
positive means the rater scored more leniently (higher) than the catalog on
average. Mean|Δ| = mean absolute deviation across all 75 cells.

| Rater | Model | Mean signed bias vs catalog | Mean\|Δ\| |
|---|---|---:|---:|
| 1 | haiku | +0.053 | 0.427 |
| 2 | sonnet | +0.133 | 0.427 |
| 3 | opus | +0.347 | 0.453 |

All three blind raters skew slightly lenient relative to the catalog (mean
signed bias > 0 for all three), and the skew increases with model tier:
opus is the most lenient (+0.35) and also has the largest mean absolute
deviation (0.45), while haiku is both the closest to neutral and (tied with
sonnet) the tightest to the catalog on average magnitude. This is a small,
consistent effect (roughly a third of a scale-point on average for opus) —
not large enough to reverse any column's qualitative reading, but a
directional bias worth tracking if the study is repeated with more units.

## Findings

**Columns clearing the conventional thresholds** (alpha >= 0.667 "tentative";
alpha >= 0.8 "solid" — evaluated on alpha-3blind, the cleaner rater-rater
agreement signal, with alpha-4rater noted where it diverges):

- **Solid (>= 0.8) on both rater sets:** `adaptive_capacity` (0.952 / 0.937),
  `chaos_sensitivity` (0.881 / 0.990), `information_processing`
  (0.852 / 0.887), `self_organization` (0.841 / 0.847).
- **Tentative (0.667–0.8):** `openness_dissipation` (0.767 / 0.697 — 4-rater
  solid, 3-blind tentative), `nonlinearity` (0.668 / 0.730).
- **Below tentative on alpha-3blind but not badly:** `feedback` (0.682, just
  clears on 3-blind but only 0.513 with the catalog included — see diagnosis
  logic below), `modularity` (0.659), `cascade_susceptibility` (0.627),
  `decentralization` (0.593).
- **Clearly unreliable under this design:** `memory_hysteresis`,
  `robustness_resilience`, `tipping_transitions`, `emergence`, `criticality` —
  all below 0.6 on alpha-3blind, three of them (`tipping_transitions`,
  `emergence`, `criticality`) at or below zero, i.e. no better than chance
  agreement among independent blind raters on this 5-entry sample.

### Three lowest-agreement columns

**`criticality`** (alpha-3blind = **-0.270**, the single worst column).
Worst cell: `river-networks`, catalog = 0, blind raters = 0, 1, 2. All three
raters are reading the *same* underlying evidence — Horton's laws / drainage
power-law scaling is well documented — but landing on different verdicts
about whether it clears this column's `does_not_count` bar (static
topological/structural power laws don't count; the column requires
scale-invariant *event* statistics plus a criticality mechanism). Rater 1
("no CSN-grade statistical fit or SOC mechanism claim") reads the evidence as
insufficient (0, matching the catalog); rater 2 explicitly names the same
distinction ("this is a static topological scaling claim rather than a
scale-invariant EVENT-statistics/SOC claim") but still scores 1; rater 3 goes
further, citing "SOC-style landscape-evolution models proposed by
Rodriguez-Iturbe/Rinaldo" as "measured-grade scaling plus a proposed-but-
contested SOC mechanism" and scores 2. The disagreement is not about facts
but about how strictly to apply the column's own exclusion rule — a genuine
scoring-judgment boundary that the anchor text apparently under-constrains.

**`tipping_transitions`** (alpha-3blind = **-0.032**). Worst cell:
`the-internet`, catalog = 0, blind raters = 0, 1, 2. Rater 1 finds "no
evidence of alternative stable states for the whole-Internet system" (0,
matching the catalog). Rater 2 counts informal discussion of BGP
route-flapping/congestion collapse as "informal language plausible" but still
"no dedicated formal regime-shift study confirmed" (1). Rater 3 treats the
1980s NSFNET congestion-collapse episode as "a specific named, modeled regime
shift... with an identified threshold" and scores it a 2, matching the
column's "named modeled mechanism, no systematic inventory" band. This is the
same pattern as `criticality`: the raters agree on the underlying facts (the
NSFNET collapse happened and is documented) but disagree on whether one
well-known historical episode is enough to earn a rung above the floor, i.e.
the anchor's boundary between "0: no evidence" and "1–2: informal/single-case
mechanism" is being applied inconsistently.

**`emergence`** (alpha-3blind = **0.000**, exactly chance). Worst/only-notable
cell: `stars`, catalog = 2, blind raters = 3, 3, 3 — all three blind raters
independently agree with *each other* but unanimously diverge from the
catalog by one point. The catalog's own justification for holding stars at 2
("that theory's independent quantitative content remains contested...poor
predictive skill for cycle amplitude") makes a judgment call that mean-field
dynamo theory doesn't yet earn a load-bearing order-parameter score; all
three blind raters instead read the same convection/dynamo evidence as
comfortably clearing the "formalized effective theory used predictively" bar
for a 3, citing the Rayleigh-Bénard anchor by name. This is the sharpest
case in the whole study of raters converging on each other while diverging
from the catalog — the low alpha here reflects a real rater/catalog
disagreement, not rater noise (the three blind raters would themselves have
scored a respectable ~0.8-1.0 alpha with each other if the comparison were
limited to just this cell in isolation — see the wider `emergence` column
figures, alpha-3blind is only pulled to 0.000 because other entries have
their own more scattered disagreements, unlike this cleanly unanimous
3-vs-1 split).

## Overall verdict

Under this blind, self-anchor-redacted design, roughly a third of the 15
in-scope columns (`adaptive_capacity`, `chaos_sensitivity`,
`information_processing`, `self_organization`, and arguably
`openness_dissipation`/`nonlinearity` at the tentative band) show good to
excellent independent-rater agreement, both with each other and with the
catalog's own published scores — a meaningful positive signal that those
anchors are legible enough to reproduce blind. But five columns
(`memory_hysteresis`, `robustness_resilience`, `tipping_transitions`,
`emergence`, `criticality`) show weak-to-negative agreement, with the three
lowest converging on a common failure mode: raters agree on the underlying
facts but disagree on how to apply the column's own scale/exclusion-rule
boundary (how much informal/single-case evidence is "enough" to clear a
higher band), and in `emergence`'s case, all three blind raters converge on
each other while diverging from the catalog, suggesting that specific
anchor's contested-theory judgment call may be miscalibrated rather than
merely hard to apply. Several important caveats bound how far these numbers
should be read: n=5 sampled entries per column is a small sample for any
reliability statistic (individual worst-cell outliers move a column's alpha
substantially, as seen in `criticality` and `tipping_transitions`, where a
single 3-way split entry dominates the result); all three raters are
Claude-family models across three tiers (haiku/sonnet/opus) rather than an
independent-architecture panel, so shared training-derived scoring
tendencies could inflate agreement in ways a genuinely heterogeneous panel
would not reproduce; and the redaction of each sampled class's own worked
anchor example (per `method.md`'s stated design) removes the single most
load-bearing calibration point raters would have in the catalog's real
production pipeline, which the method document explicitly frames as a
deliberate lower-bound / conservative bias — meaning the low-alpha columns
here likely understate, and the high-alpha columns likely still meaningfully
understate, this catalog's true non-blind production reliability. This study
should be read as identifying which anchors need tightening (`criticality`
and `tipping_transitions`'s event-vs-topology and single-case-vs-inventory
boundaries look like the clearest, most actionable candidates) rather than
as a certification that the panel-spec as a whole is or isn't production-
ready.
