# Quantitative source sweep — convection-cells (Rayleigh-Bénard)

Scope: laboratory Rayleigh-Bénard convection (primary exemplar). Mesoscale atmospheric
cellular convection and Bénard-Marangoni cells are named as boundary cases, NOT scored
here (per task framing) — they belong to a separate moist-convection-cells /
atmospheric-cells queue entry if pursued later.

## 1. Critical Rayleigh number (Ra_c) — THE top target, citation debt payoff attempt

The value is boundary-condition-dependent; three canonical figures recur across the
literature (fluid layer heated from below, no-slip vs. stress-free top/bottom):

| Boundary conditions | Ra_c | Source (as found) |
|---|---|---|
| rigid-rigid (both no-slip) | 1707.762 (often rounded "1708") | Chandrasekhar 1961 is the standard citation for this result; also independently attributed to Pellew & Southwell (1940), *Proc. R. Soc. Lond. A* 176, 312 — an exact rigorous solution to the linearized stability problem that Chandrasekhar's monograph reproduces/systematizes. |
| free-free (both stress-free) | 27π⁴/4 ≈ 657.51 | Rayleigh 1916, *Phil. Mag.* 32, 529 (original paper) — closed form, exactly solvable. |
| rigid-free (one no-slip, one stress-free — "kettle" case) | ≈ 1100.65 (also seen as ~1101) | Chandrasekhar 1961. |

Critical wavenumber for rigid-rigid case: k_c ≈ 3.117 (cell width/depth aspect ratio at
onset ≈ 2π/k_c ≈ 2.02, i.e., convection rolls have width roughly equal to layer depth).

**Read status: [unverified — model knowledge / WebSearch-snippet-verified].** I did NOT
primary-read Chandrasekhar 1961 (the physical monograph) nor Cross & Hohenberg 1993 in
full — both remain un-fetched full texts. WebSearch snippets (aggregated from
Scholarpedia/Wikipedia/secondary citations, and one ResearchGate/journal snippet
explicitly stating "Rc = 1707.762" for rigid-rigid, attributing it to Chandrasekhar via
Pellew & Southwell 1940) corroborate the values from multiple independent
tertiary/secondary sources, which raises confidence above pure model-knowledge but does
NOT constitute a primary read. The entry should record these as
**snippet-verified, evidence_status: measured**, with the explicit caveat that the
primary monograph pages have not been opened by this project, and the citation debt
(registry.json line 1520 tag) is NOT fully discharged — it is now corroborated by
multiple secondary snippets rather than resting on model knowledge alone. Recommend a
follow-up primary-read task if the entry wants to close the debt completely (Chandrasekhar
1961 §II, or Pellew & Southwell 1940 directly, or Cross & Hohenberg 1993 §II.B which
restates all three boundary-condition values together).

Cross & Hohenberg 1993 (Rev. Mod. Phys. 65, 851) — confirmed via WebSearch snippet to
contain the free-free value 27π⁴/4 explicitly, consistent with the table above. Full text
not fetched; still [unverified — model knowledge] for anything beyond that one snippet.

## 2. Nusselt-Rayleigh scaling (heat transport law)

Classical (near-onset / moderate Ra, single-scaling regime): **Nu ~ Ra^(1/3)** — often
called the "1/3 law," consistent with a heat flux independent of layer depth (boundary-
layer scaling argument).

Grossmann-Lohse (GL) unifying theory: Nu(Ra,Pr) and Re(Ra,Pr) as sums of terms with
different exponents depending on whether thermal/kinetic boundary layers or bulk
dominate — NOT a single clean exponent across the accessible Ra range; exponent
"effectively" drifts from ~0.28 to ~0.31 in the classical regime and is predicted to
approach ~1/2 (log-corrected) in the hypothesized "ultimate regime" at very high Ra.

Sources (titles/venues confirmed via WebSearch, NOT primary-read):
- Grossmann, S. & Lohse, D. (2000). "Scaling in thermal convection: a unifying theory."
  *J. Fluid Mech.* 407, 27. [unverified — model knowledge, title/venue snippet-verified]
- Ahlers, G., Grossmann, S. & Lohse, D. (2009). "Heat transfer and large scale dynamics
  in turbulent Rayleigh-Bénard convection." *Rev. Mod. Phys.* 81, 503.
  [unverified — model knowledge, title/venue/DOI-page snippet-verified via APS link]

Per filling_rules.power-law-rigor: this is a scaling-EXPONENT claim, not a tail-event
statistic, so CSN-grade fitting doesn't strictly apply, but the entry should still state
evidence_status: measured (extensive controlled experimental confirmation across decades)
while flagging that the exponent is regime-dependent, not universal — record as a
piecewise/regime-conditioned value, not a single number, to avoid overclaiming a single
"the" exponent.

## 3. Spatial extent, timescales, cell geometry

- Typical laboratory cell: fluid layer depth (gap) on the order of **1-4 cm** (examples
  found: 3 cm gap with 28 cm diameter; 3 cm gap, aspect-ratio-10 large cells; 19.9 cm
  diameter x 40 cm height slender cells; a 74 mm-diameter small cell). Order of magnitude:
  **spatial_extent ~ 10^-2 m (gap/roll scale) to ~10^-1 m (full apparatus diameter)**,
  level: class-general (apparatus-dependent, stated as a range not a single value).
  Large-scale facility: "Barrel of Ilmenau" reaches Ra up to ~10^12 (much larger vessel,
  meters-scale). [unverified — model knowledge / WebSearch-snippet]
- Characteristic timescales: the natural scale is the **vertical thermal diffusion time
  τ = h²/κ** (h = layer depth, κ = thermal diffusivity of the working fluid). For a
  water layer with h ~ 1 cm, κ_water ≈ 1.4×10^-7 m²/s, giving τ ~ 700 s (order 10^2-10^3 s)
  — this is a DERIVED order-of-magnitude estimate by this project, not a published figure;
  evidence_status: derived, measurand: vertical thermal diffusion time, level: class-general
  (apparatus/fluid-dependent). Pattern formation/roll relaxation near onset occurs on a
  few multiples of τ; turbulent regimes (high Ra) exhibit much faster convective turnover
  times set by free-fall velocity U_f = sqrt(gβΔT h), typically seconds or less for
  lab-scale cells. No single citable "system lifetime" — apparatus runs indefinitely while
  externally driven (dissipative, not a natural lifespan).

## 4. Numerosity / component counts, instance_population

- component_ontology: fluid parcels (atomicity convention, mirrors weather-systems/
  tropical-cyclones). numerosity of parcels: not a citable discrete count (continuum
  approximation) — record as unknown/not-applicable at the parcel level; the more
  natural discrete count is **roll/cell number** in a given aspect-ratio apparatus,
  which is set by the critical wavenumber k_c≈3.117 (aspect ratio Γ = width/depth ~ 10
  gives O(10-20) convection rolls across the cell) — derived from k_c, not independently
  published for a specific apparatus.
- instance_population: RB convection is an **unboundedly replicable laboratory class** —
  not a fixed population of natural instances. Framing (per task instruction): an
  "instance" = one experimental cell/run under one set of boundary conditions and one
  working fluid; there is no natural standing count or formation rate to report the way
  tropical-cyclones (~85 storms/yr) does. Record instance_population as N/A-by-framing /
  unbounded, with the scoping_note stating this explicitly as the catalog's first pure-lab
  class.

## 5. Energy rate density (Phi_m)

No published system-specific Phi_m (erg/s/g) found for laboratory RB convection in
Chaisson's table or elsewhere via search. A derivation (heat flux through the cell,
divided by fluid mass) is in-principle possible but is strongly apparatus- and
fluid-dependent (plate ΔT, fluid choice, cell geometry all vary experiment to
experiment) — no single canonical figure exists to derive against. Per task instruction
and the-internet precedent (data/classes/the-internet.yaml lines 179-202): **record
energy_rate_density: unknown**, evidence_status: unknown, rather than forcing a
one-off derivation from an arbitrarily chosen apparatus. Nearest proxy in-repo: geosphere
Fm=75 erg/s/g (research/v0.2-sweep/verification-debt/chaisson-and-bvalue.md) — explicitly
a proxy for a different system, NOT to be used as this entry's value.

## 6. Fractal dimension (spatial)

No citable fractal dimension found for the RB roll/cell pattern itself — near-onset
convection produces regular periodic roll/hexagonal patterns (NOT fractal); at higher Ra,
spiral-defect chaos produces a disordered but not obviously fractal pattern. No study
located quantifying D for RB cell boundaries analogous to San Andreas trace or coastline
studies. Record fractal_dimension_spatial: unknown / not-applicable — the near-onset
pattern is periodic (D=2, trivial), and no rigorous D has been published for the chaotic
regime pattern that this sweep could locate.

## 7. Extreme event statistics / criticality / tipping / chaos

- extreme_event_statistics: no tail-exponent literature located for RB convection events
  (no discrete "events" analogous to storms/quakes in the classical lab paradigm) — record
  unknown. (Moist atmospheric convection has such a literature — Peters & Neelin 2006 — but
  that is out of this entry's scope per the task's scoping guidance; see criticality below.)
- criticality: onset of convection is a clean **supercritical bifurcation**, not
  criticality per schema/anchors/criticality.yaml (no scale-invariant event statistics).
  Peters & Neelin 2006 (Nature Physics, doi:10.1038/nphys314 — order parameter exponent
  beta=0.215±0.02, finite-size scaling gamma/nu=1.54(4), TRMM 2000-2005, primary-read at
  v0.2 per research/v0.2-sweep/verification-debt/tropical-cyclones.md Item 3 Candidate B)
  concerns GENERAL moist tropical atmospheric convection, not idealized lab RB — does NOT
  transfer to this entry. Score criticality: 0, mechanism_status: none, for lab RB;
  scoping_note should name Peters & Neelin 2006 as the reason moist-convection-cells stays
  a separate future queue entry with its own criticality literature.
- tipping_transitions: conduction<->convection onset is a formally modeled bifurcation
  with a published threshold (Ra_c, see Section 1) — plausibly scores 2 under the
  single-modeled-mechanism-is-2 rule (named mechanism + bifurcation analysis in primary
  literature, even though the primary texts are not yet fetched by this project). For
  supercritical RB (the classical case, most fluids e.g. water/air Boussinesq case),
  onset is a continuous bifurcation — NOT bistability between two stable states at the
  same parameter value. Hysteresis / genuine bistability is a feature of subcritical/
  non-Boussinesq variants (documented in the pattern-formation literature, e.g., mentioned
  in Cross & Hohenberg 1993's discussion of non-Boussinesq effects) — I did not find a
  specific citable hysteresis-width measurement in this sweep; flag as a gap.
- chaos/predictability: spiral-defect chaos (Morris, Bodenschatz, Cannell & Ahlers,
  *Phys. Rev. Lett.* 71, 2026 (1993), "Spiral defect chaos in large aspect ratio
  Rayleigh-Bénard convection" — confirmed via WebSearch/Semantic Scholar/APS link, title
  and venue snippet-verified, full text not fetched) is a secondary transition to
  spatiotemporal chaos at Ra well above onset (large-aspect-ratio cells, Prandtl number
  σ≈1). No specific Lyapunov exponent or predictability-horizon figure located in this
  sweep for RB convection specifically — flag as a gap; record temporal_correlation and
  chaos_sensitivity quantitative sub-fields as unknown pending a targeted search of the
  spiral-defect-chaos dynamical-systems literature.
- degree_distribution: not applicable — interaction_topology is field/continuum, not a
  network.

## 8. Canonical review sources for the entry source list (3-5)

1. Chandrasekhar, S. (1961). *Hydrodynamic and Hydromagnetic Stability*. Oxford:
   Clarendon Press. [unverified — model knowledge / multiply snippet-corroborated;
   NOT primary-read] — standard monograph, Ra_c for all three boundary-condition cases.
2. Cross, M.C. & Hohenberg, P.C. (1993). "Pattern formation outside of equilibrium."
   *Rev. Mod. Phys.* 65, 851-1112. doi:10.1103/RevModPhys.65.851. [unverified — model
   knowledge / title+one-value snippet-verified; NOT primary-read] — canonical
   pattern-formation review; amplitude equations, pattern selection (Busse balloon),
   critical Rayleigh numbers.
3. Ahlers, G., Grossmann, S. & Lohse, D. (2009). "Heat transfer and large scale dynamics
   in turbulent Rayleigh-Bénard convection." *Rev. Mod. Phys.* 81, 503.
   [unverified — model knowledge; title/venue snippet-verified] — Nu-Ra-Pr scaling review.
4. Morris, S.W., Bodenschatz, E., Cannell, D.S. & Ahlers, G. (1993). "Spiral defect chaos
   in large aspect ratio Rayleigh-Bénard convection." *Phys. Rev. Lett.* 71, 2026.
   [unverified — model knowledge; title/venue snippet-verified] — secondary chaotic
   transition.
5. Rayleigh, Lord (J.W. Strutt) (1916). "On convection currents in a horizontal layer of
   fluid, when the higher temperature is on the under side." *Phil. Mag.* 32, 529-546.
   [unverified — model knowledge] — founding theoretical paper (free-free Ra_c=27π⁴/4);
   paired historically with Bénard 1900's founding experimental observations.

## Notes on emergence/self-organization/alphabet-closure/atomicity (per task framing,
not independently re-verified by this sweep — carried through as instructed)
- emergence: PINNED at 3 per schema/anchors/emergence.yaml lines 105-126 (Ra as order
  parameter, Ra_c~1708, amplitude/Ginzburg-Landau equations near threshold).
- self_organization: anchor ~4 territory — thermal gradient is forcing, not templating;
  pattern is spontaneous (does_not_count clause does not apply here).
- interaction_topology: field/continuum.
- atomicity: fluid parcels (mirrors weather-systems/tropical-cyclones convention).
- alphabet_closure: closed (buoyancy, viscous shear, thermal diffusion — fixed by physics).
