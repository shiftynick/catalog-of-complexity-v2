# convection-cells — flag-fixer log (2026-07-16)

Fixer: workflow-agent (flag-fixer), 2026-07-16
Source: four adversarial verifier passes (citation, plausibility, consistency, coverage) on the v0.3-drafted `data/classes/convection-cells.yaml`.

## Applied (fix/blocker severity)

1. **[FIX/citation] sources.ahlers-grossmann-lohse2009** — page range corrected 503-537 -> 503-538. Every independent source found (Twente research portal, APS's own RMP 81(2) issue page, multiple WebSearch passes) gives 503-538; no source supports 537.

2. **[FIX/consistency] information_processing** — rescored 0 -> 1. The entry had quoted information_processing.yaml's own scale text ("a critical Rayleigh number") as justification for a 0, but that exact phrase is the scale's own canonical example of level 1 (threshold-triggered response), inverting the anchor's meaning. Rewritten to model the earthquake-fault-systems anchor (score 1: rate-and-state friction threshold, "a discrete trigger/comparison against a reference value" — the correct structural analogue to Ra vs. Ra_c), rather than the stars anchor (score 0: no threshold structure at all).

3. **[FIX/plausibility + FIX/consistency] self_organization** — corrected the anchor citation. The justification claimed "schema/anchors/self_organization.yaml, lines ~27-29, cross-referencing the stars entry," but self_organization.yaml has no stars anchor at all — lines 21-30 are the tropical-cyclones anchor (score 4). Citation retargeted to tropical-cyclones; score of 4 is independently well-supported and left unchanged.

4. **[FIX/consistency] memory_hysteresis** — corrected the anchor citation. The justification claimed to match "the tropical-cyclones anchor's level-1 reasoning," but tropical-cyclones is not an anchor in memory_hysteresis.yaml. Retargeted to the real anchor, stars (score 1: "relaxation lag... but no bistability, no hysteresis loop"); tropical-cyclones.yaml's matching score is now cited as corroborating sibling-entry evidence, not as the schema anchor. Score of 1 unchanged.

5. **[FIX/consistency] robustness_resilience** — retagged `level: class-general` -> `level: exemplar(rayleigh-benard-lab)`. robustness_resilience.yaml's does_not_count block states exemplar-level scoring is this column's default (per D14) specifically so class-level persistence isn't credited as robustness, and the entry's own justification already argued on exemplar-level grounds (narrow control-parameter envelope) while the level tag said class-general. Score of 1 unchanged.

6. **[FIX/coverage] scoping_note** — added Bénard-Marangoni convection as a third named, deliberately excluded boundary case: surface-tension-driven cellular convection at a free liquid surface, sharing the "Bénard" name with this entry's own paradigm but mechanistically distinct (surface-tension-gradient physics, not the Boussinesq buoyancy term this entry is scoped to; no fixed-temperature-driven buoyancy mechanism). Updated "Two mechanistically continuous... sibling phenomena" -> "Three", and the subsequent relation-edge sentence to name all three excluded ids (moist-convection-cells, photospheric-convection-cells, Bénard-Marangoni convection).

All six changes recorded in `provenance.fix_log` (new, append-only block) inside the entry, tagged `[FIX/<check>]`.

## Note-severity flags recorded (no action, per instructions)

Recorded verbatim (condensed) as new entries appended to `provenance.flags`:

- Citation cross-check: no misattribution/fabrication found in Cross & Hohenberg 1993, Grossmann & Lohse 2000, Morris et al. 1993, Rayleigh 1916, Pellew & Southwell 1940 — all snippet-verified, none primary-read. Existing Chandrasekhar 1961 / Pellew & Southwell 1940 primary-read debt remains top follow-up.
- criticality / extreme_event_statistics: Peters & Neelin 2006 scoping-out confirmed correct (moist atmospheric convection, not idealized lab RB).
- numerosity: "O(10-20) rolls" illustration is ~2x generous vs. a direct re-derivation from k_c~3.117 (~10 rolls). Non-blocking, numerosity value itself correctly left unknown.
- modularity / decentralization / tipping_transitions / memory_hysteresis / cascade_susceptibility / adaptive_capacity: recurring catalog-wide informal use of "the tropical-cyclones anchor" to mean tropical-cyclones.yaml's own scoring rather than a worked schema/anchors/*.yaml entry (only "stars" is worked there). Scores independently verified correct against tropical-cyclones.yaml directly; recorded as an optional cross-entry wording-consistency follow-up rather than fixed line-by-line here (the two instances a verifier flagged as blocking — self_organization, memory_hysteresis — were corrected directly above).
- chaos_sensitivity: score 3 well-supported, correctly cites the real tropical-cyclones ceiling anchor; rests partly on Morris et al. 1993 (not primary-read), already tracked as citation debt.
- component_ontology confidence field: present only on component_ontology, absent elsewhere in the entry. Not panel-spec-mandated; flagged as an optional cross-entry consistency check.

## Unresolved

None. All actionable fix/blocker-severity flags were applied without needing an unreachable source or cross-entry/orchestrator judgment call; no two flags conflicted.

## Validator

`cd N:\coc\analysis && node validate.mjs` — convection-cells: **PASS, 0 error, 0 warn, 5 info** (the 5 info lines are pre-existing "source declared but not cited from attributes" notices for snippet-verified physics citations, unrelated to this fix pass and present in the original draft).
