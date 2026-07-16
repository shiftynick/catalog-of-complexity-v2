# Plausibility check — turbulent-flows

Adversarial re-derivation of numbers, unit checks, evidence_status vocabulary conformance, and internal consistency. Reference: schema/panel-spec.yaml, schema/anchors/, sweep report turbulent-flows-sources.md.

## 1. energy_rate_density — unit mismatch (FIX)

panel-spec.yaml (line 152) freezes this column's unit as `erg s^-1 g^-1`. The entry's `unit:` field correctly states `erg s^-1 g^-1`, but every numeric figure given in `detail:` is expressed in SI `m^2/s^3` (epsilon ~ 1e-6 to 1e-2 m^2/s^3 for ABL; ~4.4e-7 to 0.40 m^2/s^3 for grid turbulence), with no conversion shown.

Re-derivation: 1 W/kg = 1 m^2/s^3 = 1e7 erg / (s · 1e3 g) = **1e4 erg s^-1 g^-1**. So the displayed SI numbers are four orders of magnitude below what they'd read as if taken at face value under the entry's own declared unit (e.g. ABL epsilon ~1e-2 m^2/s^3 = 1e2 erg/s/g, not 1e-2 erg/s/g). This isn't wrong physics — the SI figures themselves are the right order of magnitude for real dissipation rates — but the entry mixes a declared cgs-style unit with undconverted SI values in the same field, which would corrupt any downstream numeric extraction/z-scoring that trusts the `unit:` label. The `method` prose does the qualitative unit-equivalence argument correctly (correctly identifies m^2/s^3 = W/kg = erg/s/g dimensionally) but never actually performs the numeric conversion for the quoted ranges.

**Suggested fix**: either restate `detail` figures in erg s^-1 g^-1 (multiply by 1e4), or change the column's displayed unit to m^2/s^3 with an explicit conversion factor noted, so a reader cannot copy the SI number under the erg/s/g label.

## 2. fractal_dimension_spatial — arithmetic slip (NOTE)

Text: "D=4/3~1.35: turbulent-isobar / TNTI-contour dimension." 4/3 = 1.333..., which rounds to 1.33, not 1.35. Minor, doesn't affect the qualitative claim (both fall inside the disclosed 1.3–1.4 range), but is a small arithmetic inaccuracy in a value presented as a direct fraction-to-decimal conversion.

## 3. evidence_status: measured-untested — vocabulary scope check (FIX)

panel-spec.yaml explicitly scopes `measured-untested` to "a published measurement whose statistical rigor (e.g., CSN-grade tail testing) has not been assessed — power-law tail claims default here until assessed" (line 31), tied to the CSN power-law filling rule. The entry applies `measured-untested` to several columns where the actual gap is "citation not primary-read this session" rather than an untested statistical/tail claim:
- `spatial_extent` (apparatus-scale figures, no power-law claim at all)
- `chaos_sensitivity` (low-dimensional vs. high-dimensional chaos characterization — not a tail-statistics question)
- `fractal_dimension_spatial` (two measurand conventions, again not a tail-exponent question)
- `tipping_transitions` (bistability vs. continuous-transition framing tension)

`criticality`'s use of `measured-untested` is defensible (DP critical exponents are exactly a CSN-adjacent power-law/critical-scaling claim not yet independently verified against primary sources). But the other four conflate "citation read-status debt" (which the entry already tracks correctly and separately via the `[unverified — model knowledge]` / `snippet-verified` annotations in the `sources:` block, per CLAUDE.md's primary-read/snippet-verified requirement) with the `evidence_status` field, which is meant to characterize the measurement itself, not this session's fetch budget. This isn't fabrication and doesn't misstate any number, but it blurs a distinction the schema and project conventions both call out as load-bearing (citation-verification status vs. evidence_status), and could set a precedent other entries copy.

**Suggested fix**: for the four columns above, either revert to `qualitative` (matching their actual epistemic status — these are field-standard facts being reported qualitatively) and rely on the citation-level `[unverified — model knowledge]` tags to carry the "not fetched this session" caveat, or add an explicit sentence in each justification clarifying that `measured-untested` here is being used in the broader "not independently re-verified" sense rather than the CSN tail-testing sense.

## 4. Re-derivations that check out (no issues found)

- **Kolmogorov microscales**: tau_eta = (nu/epsilon)^(1/2) and eta = (nu^3/epsilon)^(1/4) are the textbook-correct K41 definitions; L/eta ~ Re^(3/4) is the standard scaling result. All correctly stated.
- **Re_c ~ 2040** (Avila et al. 2011 pipe-flow transition point) — correctly and consistently used across characteristic_timescales, criticality, tipping_transitions, and the emergent_phenomena registry entry for "Laminar-turbulent transition." No drift in the number across its four uses in the file.
- **hierarchy_depth = 3**: convention is stated explicitly (parcels as atoms -> dissipation-scale eddies (1) -> inertial-range coherent structures (2) -> integral-scale flow (3)). Cross-checked against component_ontology, which lists exactly one part type ("fluid parcels," itself_complex: no) — no double-counting of a component as both a "part" and a "level"; the three counted levels are all aggregation levels above the atomic parcels, consistent with the declared convention.
- **Timescale nesting**: tau_eta (1e-3–1e-1 s) < integral-scale eddy turnover (~1 s, wind tunnel) < puff lifetime/splitting scale (grows super-exponentially near Re_c, i.e. can exceed both by orders of magnitude) — physically consistent nesting order, dissipation-scale fastest, transitional-regime timescale slowest/most divergent.
- **Units of epsilon dimensionally**: m^2/s^3 = W/kg = erg/s/g is dimensionally correct (energy per unit mass per unit time in each system) — the *dimensional* equivalence claimed in the method text is right; only the *numeric* conversion is missing (see item 1).
- **evidence_status/confidence pairing**: no case found where a `measured` value lacks a source, or a `derived` value lacks a stated method — energy_rate_density (measured, sources: [chaisson2011] used only as a Phi_m-framework citation, not a turbulence-specific figure — this is disclosed honestly in the sources block) and characteristic_timescales (derived, method stated: computed from epsilon and nu) both conform to panel-spec's requirement.
- **Power-law/CSN handling**: extreme_event_statistics correctly records a NEGATIVE power-law finding (Poisson/memoryless puff statistics) rather than asserting a heavy tail without support — conforms to the CSN filling rule. The K41 -5/3 spectral law is correctly kept out of extreme_event_statistics per the soc-two-claims rule (it's a structural/spectral law, not an event-size distribution) and instead surfaces under fractal_dimension_spatial/temporal_correlation/emergent_phenomena, matching the entry's own stated reasoning.
- **No SOC-mechanism-from-statistics leap**: criticality's DP claim is described as a positively-evidenced mechanism (not "SOC statistics therefore SOC mechanism"), consistent with filling_rules.

## 5. Other observations (NOTE, non-blocking)

- `temporal_correlation` is left `unknown` rather than asserting the Taylor's-hypothesis f^-5/3 mapping as a hard number — correct application of "unknown is always legal," good discipline.
- `component_ontology.parts[0].count_oom: unknown` paired with `numerosity: not-applicable-by-continuum-topology` is internally consistent (a continuum has no countable parts, so `unknown`/`not-applicable` rather than a fabricated order-of-magnitude count is the right call).
- The two fractal-dimension figures (D~2.35 scalar-interface vs. D~1.3-1.4 TNTI-contour) are correctly kept unmerged as different measurands — good discipline, consistent with the entry's own flag.

## Summary of severity

- 1 **fix**: energy_rate_density unit/value mismatch (declared erg/s/g, values given in unconverted m^2/s^3).
- 1 **fix**: evidence_status `measured-untested` applied outside its panel-spec-scoped meaning (CSN tail-testing) in four columns, conflating citation-read-status debt with evidence characterization.
- 1 **note**: D=4/3 rounded to "~1.35" instead of "~1.33" (arithmetic).
- No blockers found: no fabricated citations, no wrong-order-of-magnitude physical numbers, no hierarchy/component double-counting, no evidence_status/confidence combination violating panel-spec structurally, no unsupported power-law claims.
