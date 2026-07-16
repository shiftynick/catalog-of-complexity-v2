# Plausibility check — convection-cells.yaml

Adversarial re-derivation of numbers, unit/timescale checks, hierarchy/component
double-counting check, evidence_status/mechanism_status combinations, and internal
anchor-citation verification.

## 1. Re-derived numbers

- **Ra_c rigid-rigid = 1707.762** ("1708"): standard textbook value (Pellew & Southwell
  1940 exact solution, reproduced in Chandrasekhar 1961 SS II) — consistent, order of
  magnitude and precision both correct per multiply-corroborated snippets. OK.
- **Ra_c free-free = 27π⁴/4**: re-derived — π⁴ = 97.4091, ×27 = 2630.05, ÷4 = 657.51.
  Matches entry/sweep exactly. OK.
- **Ra_c rigid-free ≈ 1100.65**: standard intermediate value between the other two
  boundary cases; consistent with literature convention (order 1100, between 657 and
  1708). OK — not independently re-derivable analytically (no closed form), but the
  ordering and magnitude are physically sane (mixed boundary should sit between the two
  pure cases, which it does).
- **Critical wavenumber k_c ≈ 3.117**, wavelength ratio 2π/k_c: re-derived — 2π/3.117 =
  2.0158, matches entry's "≈2.02." OK.
- **Roll count derivation**: entry states aspect ratio Γ~10 gives "O(10-20) rolls." Redoing
  this: critical wavelength λ_c ≈ 2.02·h; a single convection roll (one rising + one
  sinking limb) occupies half a wavelength ≈ 1.01·h. For a cell of width 10h, that gives
  ≈10 rolls, not 10-20. The stated range is roughly 2x generous on the upper end but is
  explicitly flagged in the entry as non-independently-published and derived only for an
  order-of-magnitude illustration — not a load-bearing catalog value (recorded under
  numerosity as "not a citable discrete count... left unknown"). Flagged as a **note**
  (loose derivation, not wrong enough to poison a real column value, since the column
  itself is correctly left `unknown`).
- **Thermal diffusion time τ = h²/κ**: for h = 0.01 m, κ_water ≈ 1.4×10⁻⁷ m²/s:
  τ = (0.01)² / 1.4×10⁻⁷ = 1×10⁻⁴ / 1.4×10⁻⁷ ≈ 714 s. Falls squarely inside the entry's
  stated "~1e2-1e3 s" range. OK.
- **Spatial extent**: 1e-2 m order-of-magnitude for the gap, ~1e-1 m for full apparatus
  diameter — consistent with the cited example apparatus dimensions (3 cm gap/28 cm
  diameter; 3 cm gap AR-10; 19.9 cm × 40 cm; 74 mm cell). OK, correctly framed as a range
  rather than a single figure.

## 2. Unit checks

- `energy_rate_density` unit `erg s^-1 g^-1` matches the panel's Chaisson-convention unit
  used elsewhere in the catalog (e.g. geosphere Fm=75 erg/s/g precedent correctly cited
  and correctly NOT reused here). Value `unknown` — appropriately not fabricated given no
  canonical apparatus to derive against. OK.
- `characteristic_timescales`: all three sub-entries (diffusion time, convective
  turnover, system lifetime) use consistent units (s) and the derivation method (τ=h²/κ,
  U_f=√(gβΔT·h)) is dimensionally sound: [U_f] = √(m/s² · 1/K · K · m) = √(m²/s²) = m/s. OK.

## 3. Timescale nesting

Thermal diffusion time (~10²-10³ s) sits above convective turnover (~1 s or less,
turbulent regime) — physically correct nesting (diffusive relaxation is slow; convective
overturn, once organized, is fast). No inversion or contradiction. System lifetime
correctly recorded as "indefinite while driven," consistent with `openness_dissipation`
score 4 (organization exists only for as long as throughput persists) — no contradiction
between columns.

## 4. Hierarchy_depth vs. component_ontology double-counting check

`hierarchy_depth = 2`: fluid parcels (atoms) → rolls/hexagonal cells (1) → whole-layer
pattern/spatiotemporal-chaos regime (2). `component_ontology.parts` lists only "fluid
parcels" as the atomic part (continuum, interchangeable, not itself complex) — rolls and
the whole-pattern level are NOT separately listed as `parts` entries, so there is no
double-count of a single structure as both a "part" and a "level." This mirrors the
tropical-cyclones convention exactly (verified against data/classes/tropical-cyclones.yaml
lines 177-187: parcels → convective cells (1) → rainband/eyewall complexes (2) →
storm-scale vortex (3) = 3; component_ontology there likewise lists only the atomic
parcel level). Convection-cells is correctly shallower (2 vs. 3) because it lacks the
intermediate rainband/eyewall-complex level — internally consistent, no violation of the
panel-spec's level-counting convention (schema/panel-spec.yaml lines 209-222, "counts
levels INSIDE the entry's boundary"). OK.

## 5. evidence_status / mechanism_status / score combinations

- `criticality`: score 0, `mechanism_status: none`, `evidence_status: qualitative`. Per
  schema/anchors/criticality.yaml scale (0 = "no scale-invariant event statistics
  reported or sought... no SOC/critical-point mechanism proposed") this combination is
  internally valid. The entry correctly invokes `boundary_clarifications.events-of-the-
  scoped-system` implicitly (Peters & Neelin 2006 concerns moist atmospheric convection,
  a different scoped system, and is correctly excluded) — this parallels the anchor's own
  precedent for tropical-cyclones' 1→0 rescore on the identical scoping principle. OK, no
  filling_rules violation (no unsupported power-law claim is smuggled in).
- `tipping_transitions`: score 2, hybrid. Per schema/anchors/tipping_transitions.yaml
  `boundary_clarifications.single-modeled-mechanism-is-2` (one named mechanism + threshold
  in primary literature = 2), Ra_c is exactly such a mechanism/threshold. Consistent, not
  inflated to 3 (no systematic multi-element inventory exists for RB). OK.
- `memory_hysteresis`: score 1, hybrid, `evidence_status: qualitative`. Scale definition
  1 = "weak, short-lived relaxation memory only... no multi-stability, no structural
  scarring" — matches the entry's justification (relaxation lag of a few τ, no documented
  bistability for the classical supercritical case). OK, no contradiction with the
  entry's own acknowledgment that non-Boussinesq/subcritical variants show real
  hysteresis (correctly out of scope per the entry's own scoping_note).
- `energy_rate_density`, `fractal_dimension_spatial`, `extreme_event_statistics`,
  `temporal_correlation`, `numerosity`, `instance_population`: all recorded `unknown`
  with an explicit "searched, not found" note rather than silent gaps — matches
  filling_rules (unknown is always legal; no fabrication). OK.

No instance found of a "measured" evidence_status lacking a source, or a "derived" value
lacking a stated method — the two derived quantities (τ=h²/κ, U_f) both carry explicit
methods and are correctly tagged `derived`, not `measured`.

## 6. Internal anchor-citation verification (source-file cross-check)

Checked every "matches the anchor" claim against the actual referenced file/lines:

- **emergence** (score 3): entry cites `schema/anchors/emergence.yaml, lines 105-126`.
  Verified — a dedicated `system: convection-cells` anchor entry exists at exactly those
  lines, justification text matches almost verbatim. **Correct citation.**
- **self_organization** (score 4): entry cites `schema/anchors/self_organization.yaml,
  lines ~27-29, cross-referencing the stars entry`. **This citation is wrong.**
  self_organization.yaml contains NO `system: stars` anchor at all (checked the full
  83-line file), and lines 27-29 are the tail end of the `tropical-cyclones` anchor entry
  (lines 21-30), not a stars entry. There is also no dedicated `convection-cells` anchor
  in this file. The score of 4 itself is plausible and consistent with the scale
  definition (spontaneous roll pattern, thermal gradient forces but does not template),
  and parallels the tropical-cyclones anchor's actual reasoning (score 4, "nothing
  specifies the form in advance") — but the entry's specific pointer (file, line range,
  and named cross-referenced system) is factually incorrect. **Flagged as a fix**: correct
  the citation to point at the tropical-cyclones anchor entry (lines 21-30) or drop the
  spurious line-number/system claim.
- **modularity, decentralization, tipping_transitions, memory_hysteresis,
  cascade_susceptibility** ("matches/same reasoning as the tropical-cyclones anchor"):
  none of these five schema/anchors/*.yaml files actually contain a `tropical-cyclones`
  entry (confirmed by repo-wide grep — tropical-cyclones anchors exist only in
  emergence.yaml, robustness_resilience.yaml, chaos_sensitivity.yaml,
  openness_dissipation.yaml, feedback.yaml, nonlinearity.yaml, self_organization.yaml).
  However, cross-checking against `data/classes/tropical-cyclones.yaml` itself shows each
  of these five column justifications there uses near-identical reasoning and phrasing
  (modularity score 1 "weak, transient lateral structure... not insulated modules";
  decentralization score 4 "no component steers the others... same reasoning as the
  stars anchor"; tipping_transitions score 2 "two named, formally modeled regime-shift
  mechanisms"; memory_hysteresis score 1 "essentially a function of current
  environment... short relaxation lags"; cascade_susceptibility score 0 "no
  component-to-component failure propagation... same floor-anchor reasoning as stars").
  This confirms the convection-cells entry's "tropical-cyclones anchor" phrasing is
  informally referencing the **tropical-cyclones class entry's own scored justifications**
  (an established informal precedent-citation pattern already used elsewhere in this
  catalog, e.g. tropical-cyclones itself cites "the stars anchor" this same way for
  decentralization/cascade_susceptibility, where "stars anchor" likewise means the stars
  class entry, not always a schema/anchors file line). Not a fabrication, but the
  loose/ambiguous use of the word "anchor" to mean two different things (schema anchor
  file vs. sibling class entry) is worth a **note** for a future terminology-consistency
  pass, since the self_organization case above shows this looseness can slide into an
  actual factual error when a specific file+line citation is added on top of it.

## 7. Other checks

- `alphabet_closure: closed`, `type_count: 3` (buoyancy coupling, viscous momentum
  exchange, thermal diffusion) — count matches the three listed `interaction_ontology.
  types` entries exactly. OK, no miscount.
- `component_ontology.parts` lists exactly one part (fluid parcels) consistent with
  `numerosity`'s "continuum, not independently countable" framing — no contradiction.
- Spiral-defect-chaos citation (Morris, Bodenschatz, Cannell & Ahlers, PRL 71:2026, 1993)
  page/volume numbers consistent between the entry body and the `sources` block
  (71:2026-2029) — no transcription mismatch.
- Rayleigh 1916 volume/page (Phil. Mag. 32, 529-546) and Ra_c=27π⁴/4 consistent between
  body text and sources block.
- No unit-conversion errors located (all SI, no stray CGS/SI mixing except the
  deliberately-CGS `erg s^-1 g^-1` for energy_rate_density, which matches the catalog-wide
  Chaisson convention used by every other entry, e.g. the-internet/geosphere precedents
  cited).

## Summary of flags

1. **fix** — `self_organization` justification mis-cites its internal source: claims
   schema/anchors/self_organization.yaml lines ~27-29 contain a "stars entry," but that
   file has no stars anchor at all, and lines 27-29 belong to the tropical-cyclones
   anchor. The score (4) is independently defensible against the tropical-cyclones
   anchor's actual text, but the citation itself needs correcting.
2. **note** — the roll-count illustration ("O(10-20) rolls" for aspect ratio Γ~10) is
   roughly 2x generous versus a direct re-derivation from k_c (~10 rolls, not 10-20);
   harmless since the underlying column (`numerosity`) is correctly left `unknown` and
   the illustration is explicitly flagged as non-independently-published.
3. **note** — catalog-wide informal use of "the tropical-cyclones anchor" to mean the
   tropical-cyclones class entry's own justification (not a schema/anchors/*.yaml file)
   recurs across five columns here (modularity, decentralization, tipping_transitions,
   memory_hysteresis, cascade_susceptibility); not wrong, but the terminology overlap
   with genuine schema-anchor citations is a latent source of exactly the kind of error
   found in item 1, and would benefit from a consistency-pass disambiguation (e.g.,
   "matches tropical-cyclones.yaml's own scoring" vs. "matches the schema anchor").

No blockers found. No fabricated values, no arithmetic errors in load-bearing (published)
numbers, no evidence_status/mechanism_status rule violations, no hierarchy/component
double-counting.
