# chemical-oscillators — flag-fix log (2026-07-16)

Fixer: workflow-agent (flag-fixer). Source: 4 adversarial verifier reports (citation, plausibility, consistency, coverage).

## Applied (fix/blocker severity)

1. **[FIX/citation] characteristic_timescales — batch oscillation period.** The "commonly ~30-60 s" figure attributed to fkn1972 was unconfirmed by web search; secondary lecture-demo/protocol sources (RSC, CU Boulder) most commonly cite ~20 s. Softened the value string to disclose both figures and clarify neither traces to a primary read of FKN 1972.

2. **[FIX/plausibility] numerosity + component_ontology.parts[0].count_oom.** The recorded ~1e23-1e24 molecules/ions did not follow from the method paragraph's own stated ~0.01-0.1 M inputs (which re-derive to ~1.8e22-1.8e23). Corrected both fields to ~1e22-1e23 to match the entry's own stated concentration band, and added a note explaining the larger figure would fit more concentrated (~0.1-0.5 M) realistic FKN recipes but that this entry keeps the internally consistent, conservative band.

3. **[FIX/consistency] nonlinearity rescored 4 → 3.** The anchor's 4-tier requires nonlinearity pervasive AND load-bearing across multiple distinct mechanisms/subsystems simultaneously (tropical-cyclones: WISHE + SST-drawdown + eyewall-replacement; financial-markets: volatility clustering + herding + liquidity-feedback). Chemical oscillators have essentially one nonlinear kinetic mechanism (Oregonator autocatalysis) manifesting across several phenomena — structurally closer to the anchor's 3-tier (San Andreas, stars). Rewrote the justification to address the anchor's multi-subsystem test directly rather than asserting proximity to the 4s by analogy.

4. **[FIX/consistency] openness_dissipation.** Previously scored 2 at class-general level via an explicit blended average across batch (1-2) and CSTR (3) regimes — a different resolution convention than robustness_resilience's exemplar-level regime split two attributes later. Changed level to exemplar(bz-reaction), score 3 (the CSTR/Prigogine-dissipative-structure reading, the textbook showcase case), with the weaker batch reading preserved in justification prose rather than blended into the score — now using the same convention as robustness_resilience.

5. **[FIX/coverage] Zaikin & Zhabotinsky (1970) integration.** The primary paper for BZ spiral/target wave propagation appeared in the sweep report's source list but was never added to the entry. Added source key `zaikin-zhabotinsky1970` (Nature 225:535, annotated `[unverified — model knowledge; not fetched this sweep]`) and cited it from `emergent_phenomena` (Trigger/spiral/target waves) and `interaction_ontology` (molecular diffusion type).

6. **[FIX/coverage] exemplars[0].note (BZ discovery history).** The historical claims (Belousov 1959 journal rejection, Zhabotinsky 1964 rediscovery) had no citation keys or read-status annotations. Added `belousov1959` and `zhabotinsky1964` source entries, both annotated `[unverified — model knowledge; not attempted this sweep]` (matching the sweep report's own characterization), and referenced them inline in the exemplar note.

## Note-severity flags (recorded in provenance.flags, no action taken)

- plausibility: `measured-untested` applied to non-tail claims (Hopf bifurcation, fkn1972 timescale) is a vocabulary-fit stretch but not misrepresentative — left as-is.
- characteristic_timescales trigger-wave entry is a velocity, not a timescale — harmless, clearly labeled, left as-is.
- chaos_sensitivity rests on CSTR-only evidence but is tagged class-general without an explicit regime caveat (unlike openness_dissipation/robustness_resilience) — flagged for a future pass, not changed here (would require re-scoring judgment beyond this fixer's actionable remit).
- modularity justification mis-cites "the tropical-cyclones anchor" when the actual (correct) precedent is the tropical-cyclones class entry, not a worked anchors/modularity.yaml entry — comparison itself checks out, wording imprecise; left unedited (wording-only issue, not a scoring problem).
- robustness_resilience's score of 0 is the catalog's first floor-value use for this column — flagged as a possible future anchor candidate, no change needed.
- degree_distribution's `not-applicable` with no evidence_status matches established cross-entry convention — no action needed.

## Unresolved

None — all actionable (fix-severity) flags above were resolvable without fabricating any new value; all six were implemented directly. No cross-entry reciprocity issues were surfaced by the validator for this entry.

## Validator result

`cd analysis && node validate.mjs` → `chemical-oscillators — PASS (0 error, 0 warn, 3 info)`. The 3 remaining INFO notices (`belousov1959`, `zhabotinsky1964`, `epstein-pojman1998` "declared but not cited from any attributes.*.sources list") are expected: these sources are cited in prose (the exemplars note and scoping_note) rather than from an attributes-level `sources:` list, which the validator flags as informational only, not an error.
