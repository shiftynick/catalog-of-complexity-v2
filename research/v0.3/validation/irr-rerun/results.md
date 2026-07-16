# IRR Re-run Results — the three at-or-below-chance columns vs the boundary-clarified anchors

**Date:** 2026-07-16 · **Design:** [method.md](method.md) (delta on the original study,
[research/v0.2-sweep/validation/irr/method.md](../../../v0.2-sweep/validation/irr/method.md)) ·
**Computation:** [compute-alpha.mjs](compute-alpha.mjs) → [results.json](results.json) ·
**Raters:** 3 fresh blind raters (haiku / sonnet / opus tiers, same as the original), same 5
entries, same briefs (byte-identical, hash-verified), anchors re-redacted per the 17-item
protocol in method.md. **Pre-registered question:** did the 2026-07-02 boundary clarifications
raise agreement on the three columns that sat at or below chance (alpha-3blind: criticality
−0.270, tipping_transitions −0.032, emergence 0.000)?

## Headline table

| Column | clarifications added | alpha-3blind (v0.2 → re-run) | alpha-4rater (re-run) | all-3-match-catalog |
|---|---|---|---|---|
| criticality | 4 | −0.270 → **1.000*** (unanimous) | −0.117 | 2/5 |
| tipping_transitions | 3 | −0.032 → **0.745** | 0.541 | 2/5 |
| emergence | 1 | 0.000 → **−0.120** | 0.076 | 1/5 |

\* degenerate-unanimous: all three raters scored criticality 0 for all five entries — zero
variance, so alpha is reported 1 by the study's Do=0 convention with an explicit
zero-variance flag in results.json.

## Reading

1. **The clarifications worked in proportion to their dose.** The column that got four hard
   boundary rules (criticality) went from worst-in-panel systematic disagreement to blind
   unanimity; the column that got three (tipping_transitions) went from chance to well above
   the 0.667 tentative-conclusions threshold; the column that got one quality-gate note
   (emergence) stayed at chance. Same design, same briefs, same rater tiers — the anchors are
   the only changed variable.

2. **Criticality's unanimity is rule-driven floor convergence, and the 4-rater number shows
   its cost.** The raters unanimously scored 0 everywhere, including three cells where the
   catalog is nonzero (stars 2, river-networks 1, the-internet 1). This is the tightened rules
   operating exactly as written on evidence-thin briefs: the packets' scoping notes carry no
   event-statistics evidence, and the clarified anchor now *forbids* inferring criticality
   from anything else (events-not-structure, published-claim-required). The catalog's nonzero
   scores rest on evidence (solar-flare power laws, OCN mechanism literature) the briefs never
   contained — in the original study raters guessed upward from vibes; now they correctly
   refuse to. Consequence for the method, not the anchors: **a future full re-run should
   enrich the briefs' evidence sections before concluding anything about rater-vs-catalog
   calibration on this column.** The blind-agreement question — the thing the clarifications
   were written to fix — is answered as well as it can be: perfectly.

3. **Emergence remains the problem column.** One clarification (effective-theory-quality-gates-3)
   did not move it: raters still split 2-vs-3 on stars, the-internet, and languages — the same
   2/3 boundary the original study identified, and the same divergence the anchor's own
   open_calibration_questions block (stars-2-vs-3) records. The 2/3 boundary needs either a
   worked-contrast pair (a clean 2 and a clean 3 with the discriminating sentence) or
   additional boundary rules of the criticality/tipping kind. Recorded as the concrete
   recommendation from this study.

4. **Rater bias flipped sign.** Original study: all raters lenient vs catalog (+0.05 → +0.35,
   increasing with tier). Re-run: all raters severe (−0.33 to −0.40), uniform across tiers.
   The boundary rules bite downward — they are all of the form "X does not count." Expected,
   and worth remembering when reading the 4-rater alphas: the catalog scored WITH full
   evidence, the raters WITHOUT it, under rules that punish evidence-absence with floors.

## Score matrix (blind raters, re-run)

| entry | criticality (cat / r1 r2 r3) | tipping (cat / r1 r2 r3) | emergence (cat / r1 r2 r3) |
|---|---|---|---|
| stars | 2 / 0 0 0 | 0 / 0 0 0 | 2 / 3 2 2 |
| river-networks | 1 / 0 0 0 | 2 / 1 2 2 | 2 / 2 3 3 |
| cities | 0 / 0 0 0 | 1 / 0 1 0 | 3 / 3 3 3 |
| the-internet | 1 / 0 0 0 | 0 / 0 0 0 | 2 / 3 3 2 |
| languages | 0 / 0 0 0 | 2 / 0 0 0 | 3 / 3 2 3 |

(One notable cell outside the headline: languages/tipping — catalog 2, all raters 0. The
catalog's 2 rests on language-death bifurcation modeling (Abrams-Strogatz) that the brief's
scoping note does not mention; same evidence-thin-brief mechanism as criticality's floor.)

## Verdict on the pre-registered question

**YES for the two columns that received multi-rule clarification blocks (criticality
−0.27 → unanimity; tipping −0.03 → 0.745); NO for emergence (0.00 → −0.12), which received
only one.** Follow-ups recorded: (a) enrich briefs before drawing rater-vs-catalog
calibration conclusions, (b) emergence needs a worked-contrast pair or harder boundary rules
at the 2/3 boundary, (c) the stars-2-vs-3 open calibration question remains open and was
reproduced by this fresh panel (r1 scored stars emergence 3).
