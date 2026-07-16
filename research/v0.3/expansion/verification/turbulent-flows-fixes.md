# turbulent-flows.yaml — flag-fixer log (2026-07-16)

Fixer: workflow-agent (flag-fixer), 2026-07-16. Source: 4 adversarial verifier passes (citation, plausibility, consistency, coverage) on the draft entry.

## Applied (blocker/fix severity)

1. **[FIX/plausibility] energy_rate_density unit conversion.** Declared unit is `erg s^-1 g^-1` (per panel-spec.yaml:152) but the detail figures were given in unconverted SI `m^2/s^3`. Converted (x1e4):
   - ABL: 1e-6 to 1e-2 m^2/s^3 -> 1e-2 to 1e2 erg s^-1 g^-1
   - wind-tunnel grid turbulence: 4.4e-7 to 0.40 m^2/s^3 -> 4.4e-3 to 4.0e3 erg s^-1 g^-1
   Method field rewritten to state the conversion explicitly rather than leave the unit/number mismatch.

2. **[FIX/plausibility] evidence_status scope correction.** `measured-untested` reverted to `qualitative` on four columns (spatial_extent, chaos_sensitivity, fractal_dimension_spatial, tipping_transitions). Per panel-spec.yaml:31, `measured-untested` is scoped specifically to unassessed CSN-grade statistical rigor of power-law tail claims — not general citation read-status debt. These columns' actual epistemic gap (not primary-read this session) is already honestly carried by the [unverified — model knowledge]/snippet-verified annotations in the sources block, so the evidence_status field was miscoded.

3. **[BLOCKER/consistency] memory_hysteresis rescore 1 -> 2.** The justification's own cited evidence (Avila et al. 2011: laminar/turbulent coexistence at the same Re depending on initial conditions) is a textbook example of anchor level 2 ("two different histories reaching the same macro-forcing produce measurably different states"), directly contradicting the assigned level 1 ("no multi-stability... no path-dependent branching"). Rescored to 2 and justification rewritten to explain both the match to level 2 and why level 3 was not chosen (the coexistence basin is narrow, bounded near Re_c~2040, not demonstrated as broad/persistent path-dependent branching across the class).

4. **[FIX/consistency] feedback loop list correction.** Removed "forward energy cascade" from the scored `loops` list — it is a directional cross-scale transfer with no documented return path, failing the feedback anchor's does_not_count test — and relocated it to a new `background_context` field for descriptive color without scoring weight. Added `waleffe1997` (Waleffe 1997, Phys. Fluids 9:883-900, the self-sustaining-process / SSP mechanism: streaks -> instability -> rolls -> streaks) as the citation grounding the sole remaining scored loop (puff self-sustenance vs. decay), since Avila et al. 2011 documents puff decay/splitting statistics but not the regeneration mechanism itself. Score (2) unchanged; justification and sources updated. New source citation added to the sources block, tagged [unverified — model knowledge] (not fetched this session).

5. **[FIX/consistency] robustness_resilience exemplar-default justification.** Added a sentence explaining why this column is scored class-general rather than against a named exemplar, per this column's stated D14 exemplar-level default (every other worked anchor — stars/the Sun, tropical-cyclones/Katrina, power-grids/ERCOT, the-internet, languages/English — uses a named exemplar). Justification: the Re_c-crossing vulnerability is structural to the generic regime and common across every named exemplar flow, not particular to one; transitional pipe flow (Avila et al. 2011) is named as the exemplar of choice for a future rescore against the default.

6. **[FIX/coverage] energy_rate_density cross-reference.** Added a disambiguation clause to the method field distinguishing epsilon (local per-mass turbulent kinetic energy dissipation rate, W/kg) from weather-systems.yaml's own energy_rate_density value (~2.0-2.6 erg s^-1 g^-1, an areal atmospheric Lorenz-energy-cycle KE-dissipation flux) — a different measurand — per the sweep report's explicit instruction (section 5) not to conflate the two when a reader compares entries.

## Recorded but not acted (note severity — per fixer instructions)

Six note-severity findings were appended verbatim (with attribution) to `provenance.flags` without changing entry content:
- fractal_dimension_spatial: Lovejoy 1982 headline figure solidly confirmed; the internal isotropic-turbulence-isobar sentence not independently re-verified this session (already disclosed).
- energy_rate_density: ABL/grid epsilon ranges not pinned to a primary paper; future pass could pin Lv et al. 2023 (GRL).
- fractal_dimension_spatial: arithmetic note — 4/3 = 1.333... rounds to 1.33, not 1.35; text still reads "~1.35" (left uncorrected, note-severity).
- criticality: cross-reference to the tipping_transitions/extreme_event_statistics tension is implicit across three columns rather than one explicit line; left as-is.
- modularity: justification calls tropical-cyclones "the anchor" when it is not among modularity.yaml's worked anchors (score/comparison sound; labeling-precision only); left uncorrected.
- chaos_sensitivity: chemical-oscillators.yaml shares Gollub & Swinney 1975 provenance; sweep report recommends a cross-reference; none added (inter-entry coherence only).

## Unresolved

None. All six actionable (blocker/fix) flags were fixable without fabricating any value, citation, or DOI; the Waleffe 1997 citation added for the feedback column is a standard, well-known citation for the SSP mechanism, honestly tagged [unverified — model knowledge] (not fetched this session), consistent with how every other unfetched citation in this entry is already handled.

## Validator result

`cd N:\coc\analysis && node validate.mjs` — **turbulent-flows: PASS (0 error, 0 warn, 8 info)**. The 8 info-level notes are pre-existing background citations (kolmogorov1941a/b, frisch1995, barkley2016, dp-review-2022, etc.) declared in the sources block but not cited from any attribute — informational only, not defects, and out of scope for this fix pass.
