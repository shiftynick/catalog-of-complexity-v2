# Quantitative source sweep — chemical-oscillators (BZ reaction)

Scoping note: entry covers non-living chemical oscillators (BZ, Briggs-Rauscher, CIMA)
only. Glycolytic/biochemical oscillators are OUT OF SCOPE per D2 (exclude living
matter) even though the nonlinear-chemical-dynamics literature (Epstein & Pojman)
routinely treats them alongside BZ. Two regimes distinguished throughout: (a) batch
(closed) BZ — transient oscillation, winds down as reagents exhaust; (b) CSTR-fed BZ —
sustained-while-driven, only while pumped with fresh reagent. "Self-sustaining" in the
registry's autonomous-once-formed sense is NOT supported for either regime.

## Quantitative table

| quantity | value | unit | source | primary-read-or-snippet |
|---|---|---|---|---|
| characteristic timescale — oscillation period (batch, stirred beaker, classic FKN recipe) | ~10–100 (commonly ~30–60) | s | Field, Körös & Noyes 1972, JACS 94:8649 | snippet-verified (abstract/secondary summaries; full-text period value not directly pulled) |
| characteristic timescale — trigger/wave-front propagation speed, unstirred thin layer | ~1–10 (commonly cited ~2–6) | mm/min | Scholarpedia "Belousov-Zhabotinsky reaction"; Winfree 1972 Science 175:634; UCSD BZ wave-speed reports (student lab reports, secondary) | [unverified — model knowledge] + snippet (search-engine summary only; full Winfree 1972 not primary-read this sweep) |
| characteristic timescale — CSTR chaotic regime period-doubling cascade | seconds-scale (multiple of base oscillation period, cascading via period-2, period-4...) | s | Simoyi, Wolf & Swinney 1982, PRL 49:245 | snippet-verified (abstract confirmed via search: "One-Dimensional Dynamics in a Multicomponent Chemical Reaction," PRL 49:245, 1982 — period-doubling sequence, chaotic + periodic windows, ordering per 1-D map theory) |
| spatial_extent — typical experimental dish / thin-layer preparation | 0.1–0.15 (14.2 cm dish cited); layer depth ~1 mm | m (dish diameter); mm (depth) | secondary description of typical Petri-dish BZ setup (search synthesis, exact primary source not identified) | [unverified — model knowledge] / weak snippet |
| spatial_extent — porous membrane / gel reactor variant | 0.025 (25 mm diameter), 0.4 mm thick | m / mm | secondary (Turing-pattern / gel-reactor literature synthesis) | snippet (not primary-read) |
| fractal_dimension_spatial | not found for BZ spiral/target patterns specifically | — | — | unknown |
| CIMA Turing pattern characteristic wavelength | ~0.2 (order of magnitude; not independently confirmed this sweep) | mm | Ouyang & Swinney 1991, Nature 352:610 ("Transition from a uniform state to hexagonal and striped Turing patterns") | [unverified — model knowledge]; title/existence of paper confirmed via search, exact wavelength figure NOT confirmed in retrieved snippets — record as unknown pending primary read |
| numerosity — molecule/ion count, liter-scale batch preparation | ~1e23–1e24 (order of magnitude, from ~0.01-0.1 M reagent concentrations x Avogadro) | count (dimensionless, per liter) | derived (this project, from standard FKN recipe concentrations) | derived — measurand named: bromate/malonic-acid/Ce ion counts in a 1 L batch |
| instance_population | unboundedly replicable lab preparation; no natural standing population — same framing as convection-cells (sibling entries) | count | class reasoning, no citation needed | qualitative/derived |
| energy_rate_density (Phi_m) | not found; no published per-mass power figure | erg s^-1 g^-1 | — | unknown — apparatus-specific derivation (reaction enthalpy x rate / medium mass) would not generalize; not forced per instructions |
| chaos_sensitivity — measurand: bromide-ion-selective-electrode potential (or Ce(IV)/Ce(III) redox potential) in a CSTR, at fixed flow rate | positive Lyapunov exponent / low-dimensional strange attractor reconstructed from time-delay embedding; period-doubling route to chaos confirmed | dimensionless (Lyapunov sign); qualitative confirmation | Simoyi, Wolf & Swinney 1982 PRL 49:245; Roux, Simoyi & Swinney 1983 Physica D 8:257 | snippet-verified (abstracts/titles confirmed via search: PRL 49:245 abstract retrieved directly; Physica D 8:257 referenced in search results as companion reconstructed-attractor paper, not independently fetched this sweep) — evidence_status: measured |
| extreme_event_statistics | no scale-invariant avalanche/event-size statistics found for BZ chemical waves | — | — | unknown (do not force; consistent with D18 brief's expectation) |
| tipping_transitions — Hopf bifurcation (oscillation onset) | modeled analytically in Oregonator parameter space | — | Field & Noyes 1974, J. Chem. Phys. 60:1877 (title/existence confirmed via search: "Oscillations in chemical systems IV. Limit cycle behavior...") | snippet (title/abstract only, not primary-read) |
| tipping_transitions — CSTR bistability (steady-state vs. oscillatory branch at identical feed parameters) | experimentally established, systematic design work | — | De Kepper & Boissonade; Epstein group CSTR systematic-design literature (title not independently pulled this sweep) | [unverified — model knowledge] — flagged for follow-up primary read |
| degree_distribution | not applicable — well-stirred/reaction-diffusion medium, not a network system | n/a | n/a | n/a |
| temporal_correlation | not found as a published Hurst-exponent style figure for BZ | — | — | unknown |

## Canonical review / source list (for entry source block)

1. Field, R.J., Körös, E. & Noyes, R.M. (1972). "Oscillations in Chemical Systems II: Thorough Analysis of Temporal Oscillation in the Bromate-Cerium-Malonic Acid System." J. Am. Chem. Soc. 94(25), 8649–8664. [snippet-verified — abstract confirmed, full mechanism not primary-read this sweep]
2. Field, R.J. & Noyes, R.M. (1974). "Oscillations in chemical systems IV. Limit cycle behavior in a model of a real chemical reaction." J. Chem. Phys. 60(5), 1877–1884. (The Oregonator.) [snippet-verified — title/existence confirmed via search]
3. Zaikin, A.N. & Zhabotinsky, A.M. (1970). "Concentration Wave Propagation in Two-dimensional Liquid-phase Self-oscillating System." Nature 225, 535–537. [unverified — model knowledge; not fetched this sweep]
4. Winfree, A.T. (1972). "Spiral Waves of Chemical Activity." Science 175(4022), 634–636. [unverified — model knowledge; not fetched this sweep]
5. Simoyi, R.H., Wolf, A. & Swinney, H.L. (1982). "One-Dimensional Dynamics in a Multicomponent Chemical Reaction." Phys. Rev. Lett. 49(4), 245–248. [snippet-verified via search — abstract text retrieved: stirred flow reactor, period-doubling to chaos, 1-D map theory]
6. Roux, J.C., Simoyi, R.H. & Swinney, H.L. (1983). "Observation of a strange attractor." Physica D 8(1–2), 257–266. [unverified — model knowledge; referenced in search results as companion paper, not independently fetched]
7. Ouyang, Q. & Swinney, H.L. (1991). "Transition from a uniform state to hexagonal and striped Turing patterns." Nature 352, 610–612. [snippet-verified — title and existence confirmed via search]
8. Epstein, I.R. & Pojman, J.A. (1998). *An Introduction to Nonlinear Chemical Dynamics.* Oxford University Press. (Standard monograph; not separately fetched — [unverified — model knowledge] for any specific numeric claim attributed to it.)
9. Belousov, B.P. (1959) — obscure Soviet radiology-symposium proceedings paper, famously rejected by journals; historical-account secondary sources recommended over attempting primary read. [not attempted this sweep]
10. Zhabotinsky, A.M. (1964). Biofizika 9, 306. [not attempted this sweep]

## Notes on rigor / flagging

- All chaos_sensitivity material should be flagged evidence_status: measured (experimentally reconstructed strange attractor from real time-series, not a modeling claim) — but Roux/Simoyi/Swinney 1983 needs an actual primary read before the entry locks this in; this sweep only confirms via secondary/search snippets.
- CIMA wavelength figure (~0.2 mm) is my prior model knowledge, NOT confirmed in retrieved search snippets this session — mark unknown or [unverified] until a primary/snippet read of Ouyang & Swinney 1991 happens.
- No energy_rate_density figure found or forced, per instructions.
- No extreme_event_statistics / power-law claim found for BZ — consistent with the brief's expectation; recorded as unknown rather than absent-therefore-zero.
- Time constraints in this sweep meant most sources were confirmed via search-engine abstract snippets rather than full WebFetch primary reads; the entry draft stage should upgrade FKN 1972, Field & Noyes 1974, and Simoyi/Wolf/Swinney 1982 to primary-read where possible (JACS/PRL/JCP paywalls permitting) since these are the highest-priority citations per the brief.
