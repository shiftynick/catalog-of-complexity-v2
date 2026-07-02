# Plausibility check — galaxies.yaml

Role: adversarial plausibility checker. Scope: re-derive every derivable
number, check unit conversions, check timescale nesting/consistency, check
hierarchy_depth convention against component_ontology (no double-counting a
component as both part and level), check evidence_status/confidence
combinations against panel-spec rules (measured requires a source; derived
requires a method; power-law tails without CSN-grade support must be
measured-untested). No entry or reference file edited per task instructions.

Reference documents consulted: schema/panel-spec.yaml, all 15
schema/anchors/*.yaml, docs/schema.md, docs/roster.md,
research/v0.2-sweep/expansion/galaxies-sources.md,
research/v0.2-sweep/verification-debt/chaisson-and-bvalue.md (prior
independent Chaisson Table 1 primary-read confirmation), data/classes/stars.yaml
(cross-entry reuse target), data/classes/tropical-cyclones.yaml and
data/classes/planetary-climate.yaml (hierarchy_depth convention precedent).

---

## 1. Unit conversions and re-derived numbers

### spatial_extent (kpc -> m)
- 1 kpc = 3.0857e19 m (standard, matches entry's stated conversion factor).
- 26.8 kpc -> 8.270e20 m (entry states "~8.3e20 m") — MATCHES.
- 30 kpc -> 9.257e20 m (entry states "~9.3e20 m") — MATCHES.
- 46.6 kpc (M31 D25) -> 1.438e21 m (entry states "~1.4e21 m") — MATCHES.
- Top-level `value: 1e21 m` is stated as "order of magnitude of the luminous
  stellar disk diameter." The Milky Way's own D25 figure (8.3-9.3e20 m) is
  right at the boundary between 1e20 and 1e21 (log10(8.3e20) = 20.92, which
  rounds to the nearest-integer power 21). This is a defensible nearest-power
  -of-ten call, reinforced by Andromeda's D25 figure (1.4e21 m) and extended
  disk figure (~2.1e21 m) sitting more comfortably in the 1e21 decade. NOTE
  (not a blocker): a reader skimming only the top-level `value: 1e21` without
  the `detail` block could get the impression the Milky Way's own disk is
  solidly 1e21 m rather than sitting at the rounding boundary; the `detail`
  block already discloses the underlying figures so this is fully auditable,
  not a fabrication.

### characteristic_timescales
- Solar orbital period from R=8 kpc, v=220 km/s: T = 2*pi*R/v =
  7.05e15 s = 223.4 Myr. Entry states "~220-240 Myr (~7-7.6e15 s)" — MATCHES
  (223 Myr falls inside the stated range; 7.05e15 s falls inside the stated
  7-7.6e15 s range).
- Bar pattern period from pattern speed 35-40 km/s/kpc: period = 2*pi/(v/R).
  35 km/s/kpc -> 175.5 Myr (5.54e15 s); 40 km/s/kpc -> 153.6 Myr (4.85e15 s).
  Entry states "~160-180 Myr (~5-5.7e15 s)" — MATCHES within rounding (the
  re-derived range is 153.6-175.5 Myr / 4.85-5.54e15 s, essentially
  coincident with the stated range).
- Chaisson "Age = 12 Gya" vs. stellar-population age ~13.6 Gyr: entry
  explicitly and correctly declines to reconcile these as the same measurand
  (Chaisson's figure is his own characteristic evolutionary-stage age
  construct, not a stellar-population age estimate) — appropriate handling,
  matches the sweep report's own flag.
- No arithmetic errors found in this block.

### fractal_dimension_spatial
- D2 = 3 - gamma = 3 - 1.8 = 1.2. Entry states "D2 = 3 - gamma ~ 1.2" —
  MATCHES. This is also the standard textbook relation between the
  two-point correlation function power-law slope and the correlation
  (fractal) dimension in 3D — the physics is right, not just the
  subtraction.

### energy_rate_density (Chaisson Phi_m) — headline figure
- Value used: Milky Way Phi_m = 0.5 erg/s/g, Age = 12 Gya, Chaisson
  Table 1. This project's own prior independent verification-debt pass
  (research/v0.2-sweep/verification-debt/chaisson-and-bvalue.md, Item 1,
  2026-07-02, same session date) primary-read the same PDF via
  content-stream-order pdftotext and cross-checked two independent
  body-text callouts (Sun=2 erg/s/g, Plants=900 erg/s/g) that rule out a
  layout-parser misalignment, and reproduced the full six-row Table 1
  including **Milky Way: Age 12 Gya, Fm = 0.5 erg/s/g** exactly as this
  entry states. This is as solid as any figure in the catalog — CONFIRMED,
  no discrepancy.

### energy_rate_density — the L/M "same order of magnitude" cross-check claim
- Entry's own text (not entered as a scored value, presented only as a
  plausibility note) claims a back-of-envelope Phi_m = L/M using Licquia &
  Newman (2015) M* = 6.08e10 Msun and secondary I-band (~4e10 Lsun) / K-band
  (~9.5e10 Lsun) luminosity figures "would land in the same order of
  magnitude" as Chaisson's 0.5 erg/s/g.
- Re-derivation: Phi_m = L/M, with 1 Lsun = 3.828e26 W = 3.828e33 erg/s, and
  M* in grams = 6.08e10 * 1.989e33 g = 1.209e44 g.
  - I-band L = 4e10 Lsun -> Phi_m = 1.27 erg/s/g (2.5x Chaisson's 0.5).
  - K-band L = 9.5e10 Lsun -> Phi_m = 3.0 erg/s/g (6x Chaisson's 0.5).
- Both re-derived figures ARE within the same power-of-ten decade as 0.5
  erg/s/g only loosely (0.1-10 erg/s/g band), but are systematically and
  non-trivially HIGHER (2.5-6x) than Chaisson's own tabulated value, not a
  tight numerical match. The entry's phrase "would land in the same order of
  magnitude" is technically defensible (same decade) but is not a neutral
  restatement of what the arithmetic actually shows — a reader could
  reasonably expect "same order of magnitude" to imply rough numerical
  agreement, when the actual gap is a factor of 3-6x. This is presented
  explicitly as unperformed arithmetic ("NOT performed numerically this
  sweep"), so no fabricated number is asserted, but the qualitative
  characterization oversells the tightness of the would-be cross-check.
  FLAG (fix): tighten or remove the "same order of magnitude" framing, or
  actually perform and cite the derived range with its real 2.5-6x spread
  disclosed, since this is a load-bearing sanity claim sitting next to a
  `confidence: high` / `evidence_status: measured` scored value.
- The entry's own text also flags an internal L discrepancy (5e36 W
  candidate figure vs. ~1.5-3e37 W implied by the 4-8e10 Lsun secondary
  range) and declines to resolve it — re-derivation confirms this gap is
  real: 4e10 Lsun = 1.53e37 W, 8e10 Lsun = 3.06e37 W, both indeed roughly an
  order of magnitude above 5e36 W. Correctly and transparently flagged by
  the entry itself; no additional issue beyond what's already disclosed.

### instance_population
- "2.0 (+0.7/-0.6) x 10^12" -> range [1.4e12, 2.7e12]. Internally consistent
  notation, no arithmetic error. WebSearch this session independently
  confirmed Conselice et al. 2016 (ApJ 830, 83) states exactly this figure
  and exactly the "~10x higher than Hubble Ultra-Deep-Field-depth" caveat
  the entry quotes — CONFIRMED externally, not just internally consistent.
  measured-disputed is the correct evidence_status given the paper's own
  admission that ~90% of the count is model-inferred.

### numerosity vs. component_ontology cross-consistency
- numerosity states "~1e11 stars per L* galaxy" (a generic
  characteristic-galaxy figure, no dedicated citation of its own beyond the
  Milky Way star-count sources reused from stars.yaml).
- component_ontology (stellar part, reused verbatim from stars.yaml) states
  "Milky Way: ~1-4e11 stars standing population."
- 1e11 sits at the low end of, and is order-of-magnitude consistent with,
  the Milky Way's own 1-4e11 range, and "~1e11 stars" is a commonly cited
  rough figure for an L* (Milky-Way-like characteristic) galaxy in the
  literature [unverified — model knowledge, not independently re-sourced
  this pass]. Not an arithmetic error, but note the "L* galaxy" framing is
  not distinctly sourced from the Milky Way-specific figure it is derived
  alongside — effectively the same underlying number relabeled as a
  class-general generic claim. NOTE, not a blocker: the method field
  already discloses this reuse, so it is auditable.

### star-formation-rate consistency across columns
- "~1-2 Msun/yr, up to ~4-8 Msun/yr by some tracers" is cited identically in
  component_ontology and openness_dissipation. Consistent, no drift between
  restatements. Order-of-magnitude consistent with Kennicutt & Evans (2012)
  canonical Milky Way SFR figures [unverified — model knowledge, ballpark
  check only].

### openness_dissipation dynamical-time cross-check
- Justification states the galaxy's structure "would persist for a galactic
  dynamical time (hundreds of Myr)" if star formation were interrupted.
  characteristic_timescales gives the solar orbital period as ~220-240 Myr,
  i.e., "hundreds of Myr" for one dynamical time is directly consistent with
  the entry's own timescale block. No contradiction.

---

## 2. hierarchy_depth vs. component_ontology (double-counting check)

- Declared convention: individual stars/molecular clouds (atoms, level 0,
  not counted) -> star clusters/OB associations/GMC complexes (1) ->
  large-scale structural components: spiral arms, central bar,
  bulge/disk/halo (2) -> whole galaxy-scale gravitational system (3). Total
  hierarchy_depth = 3.
- Cross-checked against the panel-spec's own binding convention note
  ("Counts levels INSIDE the entry's boundary. Composition BETWEEN catalog
  entries... lives in the entry-level relations block, not in this
  column") and against the two precedent entries that state their method
  explicitly:
  - tropical-cyclones: parcels (atom) -> convective cells (1) ->
    rainband/eyewall complexes (2) -> storm-scale vortex (3) = 3 levels.
  - planetary-climate: parcels (atom) -> convective cells/eddies (1) ->
    weather systems (2) -> circulation cells/gyres (3) -> global system
    (4) = 4 levels, explicitly "one level deeper... because the climate
    system contains organized weather systems as an intermediate
    aggregation level."
- galaxies' own count (atom -> 1 -> 2 -> 3, ending at "the whole
  galaxy-scale gravitational system" as level 3) follows this exact
  convention pattern (count levels of aggregation up to and including the
  whole, atom excluded) and is structurally identical in form to the
  tropical-cyclones precedent. No double-counting found: the top level (3)
  is the galaxy itself as the terminal aggregate, not a separate
  re-statement of any part already counted at level 1 or 2, and it does not
  duplicate the `relations.contains: [stars]` cross-entry link (which
  correctly lives outside this column per the panel-spec note quoted
  above). VERDICT: consistent, no issue.
- Minor structural observation (not a numeric defect): the entry's
  component_ontology declares a DUAL atom (stars/molecular clouds AND a
  separate gas/dark-matter continuum part type), but hierarchy_depth's
  method text traces only one aggregation chain (built from the stellar
  atom). The continuum branch is implicitly folded into level 2's "large
  -scale structural components" without its own explicit level-by-level
  gloss. This is a reasonable simplification (the two branches converge
  physically at the disk/bulge/halo scale) and does not produce a wrong
  count, but it is worth a NOTE for the consistency checker's cross-entry
  audit of the dual-ontology choice, which the drafting agent's own flags
  block already earmarks for review.

---

## 3. evidence_status / confidence combinations vs. panel-spec rules

Checked every attribute's evidence_status against panel-spec's definitions
(measured = published measurement, uncontested; measured-untested =
published but statistical rigor, e.g. CSN-grade tail testing, not assessed;
measured-disputed = published but contested; derived = computed by this
project, method must be stated; qualitative = rubric judgment, no
measurement framework; unknown = nothing found).

- `measured` used at: energy_rate_density (Chaisson 2011, Table 1,
  independently re-confirmed primary-read — appropriate), openness_dissipation
  (backed by a real SFR figure and the Chaisson cross-reference —
  appropriate), characteristic_timescales' "age (Chaisson evolutionary
  figure)" row (same Table 1 source — appropriate).
- `measured-untested` used at: spatial_extent, most characteristic_timescales
  rows, component_ontology's Andromeda star-count note,
  fractal_dimension_spatial. The fractal_dimension_spatial case is the
  correct application of filling_rules.power-law-rigor: this IS a power-law
  claim (xi(r) ~ r^-gamma) with no CSN-2009-grade fit-rigor statement
  located, so measured-untested is the correct ceiling per the rule's own
  text — VERIFIED CORRECT, not capped too high or too low.
- `measured-disputed` used at: instance_population — correctly applied,
  matches Conselice et al.'s own stated caveat that the figure is ~10x
  higher than direct survey-depth counts (confirmed via independent
  WebSearch this pass).
- `derived` used at: numerosity — a `method` field is present (required by
  panel-spec's column_kinds definition of derived: "computed by this
  project from published inputs, flagged as ours") — satisfied, though the
  method here is "reuse of a value from stars.yaml" rather than an
  independent computation; this is consistent with how the entry frames it
  (explicitly labeled a reuse, not an original computation) and does not
  violate the rule's letter.
- `qualitative` used correctly throughout for rubric/hybrid columns lacking
  a measurement framework (modularity, hierarchy_depth [note: hierarchy_depth
  is typed `quantitative` in this entry but carries evidence_status:
  qualitative — this matches the tropical-cyclones and planetary-climate
  precedents exactly, both of which also mark their quantitative
  hierarchy_depth value as qualitative evidence_status, since the level
  count itself is a declared convention rather than a measurement; not an
  inconsistency, matches established catalog practice], decentralization,
  nonlinearity, feedback, chaos_sensitivity, criticality, memory_hysteresis,
  information_processing, adaptive_capacity, emergence, self_organization,
  robustness_resilience, cascade_susceptibility).
- `unknown` used correctly at: extreme_event_statistics, temporal_correlation
  — both explicitly framed as "not investigated" / "insufficient search
  effort to assert genuine absence" rather than a guessed negative, matching
  filling_rules.no-guessing.
- No instance found of `measured` without a cited source, and no instance
  of `derived` without a stated method. No power-law claim found entered
  above measured-untested without CSN-grade support.

---

## 4. Rubric/hybrid score-vs-anchor-scale-text consistency

Re-read all 15 schema/anchors/*.yaml files. galaxies has no worked anchor in
any of them (confirmed independently by search this pass — matches the
entry's own provenance note), so every rubric/hybrid score here is scored
against the anchor scale TEXT with a comparator cited, not against a
directly worked galaxies case. Checked each score's justification against
the actual 0-4 scale-level text it claims to match:

- decentralization = 4: justification ("no component steers... nothing
  whose removal constitutes loss of control... the central black hole...
  does not steer galaxy-scale dynamics") matches the decentralization
  scale's top-level text reasonably well by comparison with the
  tropical-cyclones/stars anchor pattern. No issue found.
- modularity = 1: correctly distinguishes hierarchy (bulge/disk/halo,
  scored separately) from lateral modularity per modularity.yaml's own
  does_not_count clause and its Sun/tropical-cyclones precedent of scoring
  radial/gradational structure as 1, not 0 or higher. Consistent.
- nonlinearity = 3: reasoned comparison to the stars anchor's own 3.
  Plausible, no scale-text contradiction found.
- feedback = 3: three concrete named loops given, matches "multiple loops
  continuously active" language at level 3. Consistent.
- **chaos_sensitivity = 2: FLAGGED (fix).** The entry's own justification
  text describes N-body orbital chaos as "a textbook source of exponential
  sensitivity" and states "chaotic orbit families are a standard feature of
  galactic-dynamics modeling" — i.e., BROADLY ACCEPTED, ESTABLISHED-IN-MODELS
  chaos, with the only gap being the absence of an operational real-world
  predictability-horizon figure. This description matches the chaos_sensitivity
  anchor's own SCALE-3 definition almost verbatim ("Exponential sensitive
  dependence... established for a well-accepted model... domain experts
  broadly accept the system is chaotic in this sense, but a robust,
  operationally validated real-world predictability horizon has not been
  established") — not scale-2's definition, which specifically requires
  "the evidence is mixed, contested, or drawn from a small/non-replicated
  literature... some studies report exponential divergence, others do not
  replicate the finding or attribute the same unpredictability to a
  different (non-chaotic) mechanism... reflects GENUINE SCIENTIFIC
  UNCERTAINTY, not merely 'we didn't check.'" The galaxies justification
  describes no such contestation among studies — it describes an
  unperformed/unresearched question about real-world operational
  significance, not scientific disagreement about whether the phenomenon
  exists. The entry's own comparison to "the stars anchor's own
  contested-but-engaged 2" does not hold up: the stars anchor's 2 is
  grounded in genuine documented disagreement (some sunspot-cycle studies
  find chaos, others find a stochastically forced non-chaotic dynamo) — a
  fundamentally different evidentiary situation from galaxies' "textbook
  accepted, but not investigated for a real-world horizon" case. As
  written, the entry's own cited evidence more closely matches scale-3 than
  scale-2. This is a genuine anchor-scale-text mismatch, not a fabrication;
  recommend either rescoring to 3 with the justification's existing text
  (which already supports it), or rewriting the justification to actually
  describe contested/mixed evidence if 2 is to be retained.
- criticality = 0, mechanism_status: none: correctly matches scale-0's
  definition (no statistics reported/sought AND no mechanism proposed).
  Consistent, correctly distinguishes the static correlation-function slope
  (structural, scored under fractal_dimension_spatial) from event
  statistics per the events-not-structure boundary rule. No issue.
- tipping_transitions = 1 (exemplar-level): correctly applies the
  single-modeled-mechanism-is-2 boundary rule's own bar — the entry
  explicitly notes no dedicated bifurcation/threshold-style formal
  treatment was located this sweep (only descriptive simulation
  literature), which is exactly the boundary between 1 and 2 as codified.
  Consistent, well-reasoned application of the documented boundary
  clarification.
- memory_hysteresis = 2: "demonstrable path-dependence over an
  intermediate-to-long timescale," capped below 3 for lack of a published
  quantitative hysteresis loop width (paralleling the AMOC precedent).
  Consistent with the scale text as summarized in the entry (the
  memory_hysteresis anchor file was reviewed; galaxies' framing tracks the
  general AMOC-loop-width precedent it invokes).
- information_processing = 0, adaptive_capacity = 0, variation_selection =
  absent: consistent with the stars/tropical-cyclones floor-anchor pattern
  for physical (non-CAS) systems; correctly distinguishes feedback
  (physical regulation, scored 3 elsewhere) from information processing
  (representational detection/response) and adaptation, per those columns'
  own does_not_count clauses.
- emergence = 3, self_organization = 4: both scored with concrete named
  order parameters/phenomena (rotation curve, pattern speed, Hubble
  sequence) and reasoned comparison to the closest analogous anchors
  (tropical-cyclones for self_organization, given no direct galaxies
  anchor exists). No scale-text contradiction found.
- robustness_resilience = 3 (exemplar-level): capped below 4 using the
  entry's own tipping_transitions finding (the Andromeda merger as a
  qualitatively different perturbation class) as the limiting reason,
  consistent with the financial-markets/planetary-climate "known
  destructive event class caps at 3" precedent referenced. Consistent.
- cascade_susceptibility = 0: correctly distinguishes component-to-component
  failure PROPAGATION (absent) from nonlinearity/feedback (present,
  scored elsewhere), matching the stars anchor's own floor reasoning
  cited. Consistent, and the internal cross-references to "nonlinearity: 3,
  feedback: 3" were checked against the actual scored values elsewhere in
  the same file — both match exactly (lines 398 and 418 respectively).

---

## 5. Summary of numeric/derivation spot checks performed

| Check | Result |
|---|---|
| kpc -> m conversions (26.8, 30, 46.6 kpc) | all match stated m figures |
| Solar orbital period from R=8kpc, v=220km/s | 223 Myr / 7.05e15 s, inside stated range |
| Bar pattern period from pattern speed 35-40 km/s/kpc | 153.6-175.5 Myr, matches stated ~160-180 Myr |
| D2 = 3 - gamma | 1.2, matches stated value and standard cosmology relation |
| Chaisson Table 1 Milky Way row (0.5 erg/s/g, 12 Gya) | independently re-confirmed via this project's own prior primary-read log |
| Conselice 2016 headline figure (2.0 +0.7/-0.6 x10^12) | independently confirmed via WebSearch this pass |
| L/M back-of-envelope Phi_m cross-check | re-derived 1.27-3.0 erg/s/g vs. Chaisson's 0.5 — same decade but 2.5-6x higher, "same order of magnitude" framing is loose |
| hierarchy_depth convention vs. component_ontology | no double-counting; matches tropical-cyclones/planetary-climate precedent exactly |
| Andromeda "roughly 2x" MW disk diameter | 46.6/26.8 = 1.74x, acceptable loose rounding |

---

## Findings passed to structured output

1. **[fix] chaos_sensitivity score/justification mismatch.** The entry's own
   cited evidence (broadly-accepted, textbook-established orbital chaos in
   models, absent only an operational real-world horizon) matches the
   chaos_sensitivity anchor scale's level-3 definition more closely than
   level-2's "mixed/contested evidence" definition. The comparison to the
   stars anchor's contested 2 does not hold since that anchor's contestation
   is a different evidentiary situation (competing studies) than galaxies'
   "not investigated this sweep" situation.
2. **[note] energy_rate_density L/M cross-check framing.** The unperformed
   back-of-envelope Phi_m = L/M cross-check is characterized as landing in
   "the same order of magnitude" as Chaisson's 0.5 erg/s/g; re-derivation
   shows it would actually land at 1.27-3.0 erg/s/g, a real 2.5-6x
   discrepancy, same decade but not a tight match. No fabricated number is
   entered (explicitly marked not performed), but the qualitative framing
   oversells consistency next to a `measured`/`confidence: high` value.
3. **[note] numerosity's "~1e11 stars per L* galaxy" is not independently
   sourced** from the Milky Way-specific figure it sits beside — it is
   effectively the same underlying number (reused from stars.yaml via
   component_ontology) relabeled as a generic class-level claim, with no
   distinct citation of its own for the "L*" framing. Not an arithmetic
   error and fully auditable via the method field, but worth noting for
   citation-check follow-up.
4. **[note] spatial_extent top-level 1e21 m rounding.** The Milky Way's own
   D25 figure (8.3-9.3e20 m) sits at the 1e20/1e21 order-of-magnitude
   rounding boundary; the top-level value of 1e21 m is a defensible
   nearest-power-of-ten call (reinforced by Andromeda's larger figures) but
   a reader skimming only the top-level value without the `detail` block
   could get a skewed impression of the Milky Way's own figure specifically.

No blockers found. All headline quantitative figures (Chaisson Phi_m,
Conselice galaxy count, unit conversions, derived timescales, the
correlation-dimension arithmetic) re-derive correctly or were independently
confirmed. hierarchy_depth's convention is applied correctly with no
double-counting against component_ontology or the cross-entry `contains`
relation. evidence_status/confidence combinations conform to panel-spec
rules throughout, including the correct measured-untested ceiling on the
one genuine power-law claim (fractal_dimension_spatial) per
filling_rules.power-law-rigor.
