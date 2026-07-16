# Quantitative source sweep — turbulent-flows

Class: turbulent-flows (category: physical-chemical). Exemplars: turbulent pipe/shear flow (primary — Reynolds 1883 lineage, DP transition literature); comparative: homogeneous isotropic turbulence (K41 paradigm, wind-tunnel grid turbulence); atmospheric/oceanic turbulence NAMED but deferred to weather-systems / ocean-circulation host entries per scoping note.

All web-sourced items below were retrieved via WebSearch snippet aggregation (search-result synthesis, not full-text fetch — nature.com blocked full WebFetch behind an auth redirect). Status recorded as **snippet-verified** where a search tool returned direct quoted/paraphrased content from the source or a citing secondary source; **[unverified — model knowledge]** where no fetch was attempted this session. None are primary-read (no full-text PDF/HTML was opened and read end-to-end this session) — flagging this explicitly as the sweep's central verification debt (see uncertainties).

## 1. spatial_extent

No single class-general value — turbulence spans laminar-turbulent transition scales (pipe diameter, cm) to atmospheric/oceanic (10^3-10^7 m, deferred to host entries). Recommend recording as exemplar-level:
- Transitional pipe/Couette flow: characteristic scale = pipe diameter / gap width, O(10^-2 - 10^-1) m (experimental apparatus scale — Reynolds 1883, Avila et al. 2011, Lemoult et al. 2016 all use lab-scale rigs). [unverified — model knowledge, apparatus-scale generic]
- Inertial range (K41): spans integral scale L down to Kolmogorov microscale eta = (nu^3/epsilon)^(1/4); ratio L/eta ~ Re^(3/4) (a defining relation of the theory, not a fixed number). [unverified — model knowledge]
- evidence_status: qualitative/derived, level: class-general with named exemplar sub-values.

## 2. characteristic_timescales

- Fastest constituent process: Kolmogorov time scale tau_eta = (nu/epsilon)^(1/2) — dissipation-scale eddy turnover, order 10^-3 - 10^-1 s in lab flows depending on Re. [unverified — model knowledge]
- Dominant dynamics: integral-scale eddy turnover time (large-eddy turnover), order 1 s (wind tunnel) to much longer geophysically (deferred). [unverified — model knowledge]
- System lifetime / transition regime: puff lifetime and splitting times in pipe flow — Avila et al. 2011 (Science 333:192) report puff decay and splitting mean times that scale SUPER-EXPONENTIALLY with Re near Re_c~2040, with Poisson-like statistics of the memoryless splitting process (search-tool synthesis of the paper's abstract/discussion — snippet-verified via secondary IOP/arXiv summaries, not primary-read).
- measurand named per value; evidence_status: measured (Avila timescales), derived (Kolmogorov/integral timescales from epsilon, nu).

## 3. numerosity / component_ontology

Atomicity convention: fluid parcels (same convention as convection-cells/tropical-cyclones, per class-specific brief). Numerosity is not a meaningfully countable discrete quantity for a continuum field — record as not-applicable-by-continuum-topology, analogous to how field/continuum systems are handled elsewhere in the catalog (interaction_topology: field/continuum). evidence_status: qualitative.

## 4. instance_population

Class-level: unbounded / ubiquitous. Turbulent flow is arguably the most common complex-system regime in the catalog (any fluid flow above its critical Reynolds number). No formation-rate figure is meaningful at class level; scoping note should define an "instance" as a statistically stationary turbulent-flow realization (a specific flow configuration + Re + boundary conditions), per class-specific brief. evidence_status: qualitative, level: class-general.

## 5. energy_rate_density (Phi_m / epsilon) — THE PRE-REGISTERED TEST CASE

Kolmogorov's epsilon (turbulent kinetic energy dissipation rate per unit mass) is dimensionally NATIVE to Phi_m: epsilon has units m^2/s^3 = W/kg = erg/s/g (confirmed via dimensional-analysis search synthesis on Kolmogorov microscales / K41 sources). This is not a derived convenience for turbulence — it is literally the theory's central quantity (K41 spectrum E(k) = C*epsilon^(2/3)*k^(-5/3) is defined in terms of it).

However epsilon has NO single class-general value — it varies over many orders of magnitude by flow:
- Atmospheric boundary layer: epsilon ~ 10^-6 to 10^-2 m^2/s^3 (order-of-magnitude range; daytime convective ~10^-2, nocturnal stable ~10^-6 to 10^-4). [snippet-verified via search aggregation of ABL dissipation-rate literature — no single primary paper pinned; flag for future primary-read, e.g. Lv et al. 2023 GRL]
- Wind-tunnel grid turbulence: epsilon spans ~4.4x10^-7 to 0.40 m^2/s^3 depending on grid/free-stream velocity (a comparison study found grid epsilon=6.8x10^-3 m^2/s^3 matching free-flight epsilon=7.1x10^-3 m^2/s^3 at U=40 m/s). [snippet-verified, secondary source aggregation; primary paper not identified/pinned this session]
- Cross-reference (NOT independently re-derived, inherited per class-specific brief): weather-systems.yaml lines 241-242 carries atmospheric Lorenz-energy-cycle KE dissipation ~2.0-2.6 W/m^2 — this is an areal power density, NOT the same measurand as epsilon (W/kg); record as a related but distinct quantity if cross-referenced, do not conflate units.

RECOMMENDED ENTRY TREATMENT (per class-specific brief, D19 resolution): record energy_rate_density as exemplar-level / disclosed range with named flows, NOT a single class-general number. Method-column text should state explicitly: "This class resolves the Phi_m parked question (decisions.md) via disclosure — epsilon is well-defined per-flow (its units are Phi_m's native units, erg/s/g) but undefined at class-general level given orders-of-magnitude variation across turbulent regimes; this is the anticipated outcome of D19's review." evidence_status: measured (per named exemplar), unknown/not-applicable (class-general single value).

Sources needed fresh (per brief, none in repo): Kolmogorov, A.N. (1941). "The local structure of turbulence in incompressible viscous fluid for very large Reynolds numbers." Dokl. Akad. Nauk SSSR 30, 301-305. English translation: Proc. R. Soc. Lond. A 434, 9-13 (1991). [unverified — model knowledge, standard citation confirmed via search but not primary-read this session]. Kolmogorov, A.N. (1941). "Dissipation of energy in locally isotropic turbulence." Dokl. Akad. Nauk SSSR 32, 16-18 (companion paper defining epsilon explicitly — confirmed via ADS/SciRP reference-list search). [unverified — model knowledge]

## 6. fractal_dimension_spatial

- REUSABLE TOEHOLD (already primary-read at v0.2 sweep, research/v0.2-sweep/verification-debt/tropical-cyclones.md Item 1): Lovejoy 1982 (Science 216:185), D=1.35 for tropical rain/cloud-area perimeters, with the paper's own sentence connecting this to "the value 4/3 (that of turbulent isobars)." stars.yaml line 303 already uses "D=4/3~1.33 for isotropic homogeneous turbulence" as a comparison value. Reuse with this exact read-status: primary-read (Lovejoy), but the 4/3 turbulent-isobar figure itself is Lovejoy-quoted folklore-adjacent, not independently primary-read for turbulence itself.
- Modern citable figure, turbulent/non-turbulent interface (TNTI) fractal dimension: Sreenivasan & Meneveau (and related lineage) report D ~ 2.35 +/- 0.05 for scalar interfaces in turbulent flows across a variety of flow types, attributed to Reynolds-number similarity (Sreenivasan & Meneveau 1986, developing turbulent boundary layer). [snippet-verified via search aggregation — distinguish from a separate reported figure of D~1.3-1.4 specifically for the TNTI surface itself in some studies (different measurand/parameterization — record which convention is used, do not silently merge the two).] NEITHER fully primary-read this session — flag as sweep target for a verifier pass.
- measurand must be named per filling_rules: "D=2.35" measurand = scalar (e.g. temperature/concentration) interface fractal dimension in fully turbulent boundary layers, embedding dimension 3; "D=1.35-1.4" measurand = turbulent/non-turbulent interface (TNTI) contour, varies by flow type and embedding (2D cut vs 3D surface) — this distinction is NOT fully resolved by this sweep and should not be flattened into one number.

## 7. extreme_event_statistics

Two separate, non-conflatable claims per filling_rules.soc-two-claims / measurand_type:
(a) K41 -5/3 inertial-range spectral scaling: NOT itself a tail-exponent/heavy-tail event statistic — it's a structural/spectral scaling law, not an event-size distribution. Do not record under this column; belongs under fractal_dimension/temporal_correlation/a dedicated spectral note instead. Confirmed via K41 sources above (not itself an "extreme event").
(b) Puff lifetime/splitting-time statistics in transitional pipe flow (Avila et al. 2011): mean splitting/decay times scale super-exponentially with Re near Re_c ~ 2040; the underlying statistics are reported as Poisson-like (memoryless), NOT power-law tailed — so this is evidence AGAINST a power-law claim here, consistent with a random/memoryless process rather than heavy-tailed criticality-style events. measurand_type: temporal-event (puff lifetime/splitting events over time). evidence_status: measured (Poisson/exponential-family fit), explicitly NOT power-law — no CSN-grade tail-exponent alpha to report. [snippet-verified via search synthesis of Avila 2011 Science 333:192 abstract/discussion, IOP/arXiv secondary summaries; not primary-read]

## 8. temporal_correlation

Not directly sourced this session with a specific Hurst/correlation-structure figure for turbulence proper. K41 predicts specific frequency-domain scaling (Taylor's frozen-turbulence hypothesis maps E(k)~k^-5/3 to a temporal power spectrum ~f^-5/3 in the inertial range) — this is a well-established structural fact of the field but was not pinned to a specific primary citation with a numeric exponent beyond -5/3 itself this session. Flag as sweep target: pin a primary read of a wind-tunnel or atmospheric spectral confirmation (candidate: Grant, Stewart & Moilliet 1962, tidal-channel measurement — named in brief as the classic confirmation, [unverified — model knowledge], not fetched this session).

## 9. degree_distribution

Not applicable — turbulence is field/continuum, not a network (consistent with how planetary-climate/galaxies handled this column per class-specific brief). evidence_status: not-applicable-by-topology.

## 10. tipping_transitions

Subcritical laminar-turbulent transition (pipe/Couette) features metastable coexistence: puffs decay OR split; Avila et al. 2011's Re_c~2040 balance point is literally the boundary between net-decay and net-growth regimes — a formally modeled bistability (candidate score: 2, single-modeled-mechanism, per class-specific brief's own read of the anchor). Tension to disclose explicitly in entry text: the DP-universality-class framing (Lemoult 2016, Sano & Tamai 2016) describes this same transition as a CONTINUOUS second-order phase transition in the thermodynamic (large-domain/long-time) limit, which is in some tension with a naive "bistable tipping point" reading — both descriptions come from the same literature and should be recorded as the field's own open framing question, not resolved by this sweep. evidence_status: measured-untested pending a verifier's read of how the two framings are reconciled in the literature.

## 11. chaos_sensitivity / Lyapunov / predictability

- Historical origin: Lorenz 1963 (a convection model, not literally pipe/shear turbulence, but the founding strange-attractor low-dimensional-chaos paper); Ruelle & Takens 1971 proposed the strange-attractor "route to turbulence"; Gollub & Swinney 1975 (PRL) reported experimental confirmation of chaotic onset in Taylor-Couette flow — all three [unverified — model knowledge], not fetched this session (search budget prioritized the DP/criticality and epsilon literature per brief's stated top priority).
- Record BOTH regimes honestly per brief: (a) transitional/low-Re shear flow — low-dimensional deterministic chaos, ESTABLISHED (measured, Gollub & Swinney lineage); (b) fully developed turbulence — high-dimensional spatiotemporal chaos, positive Lyapunov spectra but "low-dimensional" no longer applies. Cross-reference note: chemical-oscillators entry's Swinney-group BZ chaos material shares provenance with (a) — coordinate the two entries' chaos columns as deliberate cross-references per brief.
- No specific predictability-horizon figure (analogous to atmosphere's ~2-week horizon) was sourced for turbulence proper this session — flag as gap.

## 12. criticality — DP universality class (top-priority item per brief)

- Lemoult, Shi, Avila, Jalikop, Avila, Hof (2016). "Directed percolation phase transition to sustained turbulence in Couette flow." Nature Physics 12, 254-258. Search-tool synthesis (snippet-verified, multiple independent secondary sources incl. ISTA repository record, Nature Physics abstract mirror, Semantic Scholar) confirms: onset of turbulence in Couette flow is a second-order phase transition in the directed percolation (DP) universality class; laminar-turbulent patterns arise from short-range interactions of turbulent domains; pattern expansion rates are set by DP critical exponents; underlying processes shown to be stochastic. Full-text NOT fetched (nature.com redirected to an auth wall this session) — no exact numeric exponent values (beta, nu_par, nu_perp) recovered; this is the sweep's single biggest verification debt (see uncertainties).
- Sano, M. & Tamai, K. (2016). "A universal transition to turbulence in channel flow." Nature Physics 12, 249-253. Snippet-verified (search synthesis + Nature Physics abstract mirror): quasi-2D channel flow experiments/simulations show critical exponents consistent with DP, confirming Pomeau's long-standing conjecture — described as the first published experimental confirmation of the DP picture for this transition, appearing back-to-back with Lemoult 2016 in the same issue.
- Barkley, D. (2016). Theoretical framework paper, J. Fluid Mech. — named in brief, NOT independently searched/confirmed this session [unverified — model knowledge].
- Avila, K., Moxey, D., de Lozar, A., Avila, M., Barkley, D. & Hof, B. (2011). "The onset of turbulence in pipe flow." Science 333, 192-196. Snippet-verified via PubMed/arXiv/IOP secondary sources: established Re_c ~ 2040 as the puff-splitting/decay balance point; described the transition as marking where sustained turbulence becomes possible.
- Review: "Directed percolation and the transition to turbulence," Nature Reviews Physics (2022), s42254-022-00539-y — exists and is on-topic (confirmed via search hit) but full text not fetched (same auth-wall issue); recommend as one of the entry's 3-5 canonical review sources once primary-read.
- Assessment against brief's proposed score (3, established event statistics + well-supported mechanism with open universality-class details): the search-level evidence is CONSISTENT with a score of 3, but because no exponent values or explicit "open questions/caveats" text was recovered from the papers themselves, a verifier should not treat this sweep's evidence as sufficient to lock the score — recommend one more full-text primary-read pass (Lemoult 2016 or Sano & Tamai 2016, per brief's explicit instruction) before finalizing.
- Per brief: record as TWO separate claims — (a) DP-class critical transition at onset (criticality column, transitional regime); (b) inertial-range scale invariance of the developed state (K41 cascade — a structural/spectral fact, belongs under temporal_correlation/fractal_dimension_spatial territory, NOT this column).

## 13. cascade statistics

The "energy cascade" (K41's inertial-range transfer of energy from large to small scales) is the class's signature phenomenon but is a continuous spectral-flux process, not a discrete cascading-failure event statistic in the blackout/avalanche sense used elsewhere in the catalog (cascade_susceptibility column). Recommend NOT populating cascade_susceptibility with a blackout-style figure; instead note in entry text that the cascade is captured via fractal_dimension/temporal_correlation/emergent_phenomena registry (order parameter: epsilon / spectral flux), consistent with the class-specific brief's registry seed.

## 14. review/source list (3-5 canonical sources for entry source list)

1. Kolmogorov, A.N. (1941). Dokl. Akad. Nauk SSSR 30, 301 (K41 spectrum). English translation: Proc. R. Soc. Lond. A 434, 9-13 (1991). [unverified — model knowledge, standard citation]
2. Frisch, U. (1995). "Turbulence: The Legacy of A.N. Kolmogorov." Cambridge University Press. (Standard monograph; includes intermittency/anomalous-scaling discussion, She & Leveque 1994 lineage.) [unverified — model knowledge, not fetched]
3. Reynolds, O. (1883). Phil. Trans. R. Soc. 174, 935. (Original pipe-flow transition experiment.) [unverified — model knowledge, not fetched]
4. Avila, K. et al. (2011). Science 333, 192-196. [snippet-verified, see above]
5. Lemoult, G. et al. (2016) Nature Physics 12, 254 AND/OR Sano & Tamai (2016) Nature Physics 12, 249 — the paired DP-confirmation papers. [snippet-verified, see above]

## Emergent phenomena registry seed (per brief, carried forward for registry step)

- Energy cascade — new-dynamics/new-statistics (registry SPEC to decide); order_parameter: epsilon / spectral flux; qualitative_difference test: a single fluid parcel has no cascade.
- Coherent structures / vortices — new-entity, trackable; puffs in transitional pipe flow are literally counted/tracked in the 2016 DP literature (feeds closed-topology entity count).
- Laminar-turbulent transition — threshold-bifurcation with Re_c cited (Avila 2011, Re_c~2040) — satisfies registry standing test #2 (entry-cited control parameter).
- Intermittency — new-statistics (anomalous scaling of higher-order structure-function exponents vs. K41's linear prediction; She-Leveque 1994 [unverified — model knowledge], the field's own acknowledged open anomaly).
