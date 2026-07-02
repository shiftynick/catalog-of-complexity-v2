# Consistency check — ocean-circulation.yaml

Role: commensurability enforcer. Audited every rubric/hybrid score against `schema/anchors/*.yaml`,
every filling rule, every `level` tag, and cross-entry coherence against `data/classes/` (primarily
`planetary-climate.yaml` and `tropical-cyclones.yaml`, the closest structural comparators this entry's
own provenance names, plus `river-networks.yaml` for the modularity comparator explicitly cited in the
entry).

Reference documents consulted: `schema/panel-spec.yaml`; all 15 files in `schema/anchors/`;
`docs/schema.md`; `docs/roster.md`; `research/v0.2-sweep/expansion/ocean-circulation-sources.md`.

Entry NOT edited, per instructions.

---

## 1. Rubric/hybrid column-by-column audit

### modularity — score 2, level class-general
Anchor scale 2: "recognizable subunits with more internal than external interaction/coupling, but
... not strongly insulated — substantial cross-module flow/interaction routinely occurs." Anchor
scale 1: "boundaries are fuzzy, overlapping, or only statistically detectable."

The entry's own justification stresses that "these subunits are not strongly insulated: gyres
exchange water at their boundaries ... and the overturning circulation explicitly links surface and
deep branches across basins (the global conveyor belt is definitionally a cross-basin coupling)."
This reads as stronger disqualifying language than the 2-anchors use. Compare directly:

- river-networks (2): cross-module interaction is "structurally forced to be exactly zero except at
  confluences" — a real, mostly-insulated partition.
- cities (2): boroughs have "somewhat porous but real boundaries," daily commuting "integrates
  the boroughs into one functional labor/housing market" — porous but bounded.
- planetary-climate (1, same physical phenomena one level up): "heat and moisture transport
  actively couples every cell and basin to its neighbors (that transport IS the system's defining
  function)" — explicitly scored 1 because the cross-boundary coupling is definitional, not
  incidental.

Ocean-circulation's own prose ("definitionally a cross-basin coupling") uses almost the identical
phrase planetary-climate uses to justify its 1, yet lands at 2. Since ocean-circulation IS (a
component of) the very structure planetary-climate scored 1 on, and the entry's own evidence reads
as "coupling is the defining function" rather than "cross-module flow occurs but subunits are still
identifiable as coherent," this is a plausible under-count on the low side, i.e., an over-score
relative to the 1-anchor's own language. Not a blocker (a defensible 2 reading exists — gyres and the
Atlantic/Pacific/Southern sectors are real, named, citable partitions, same species of claim as
river-networks/cities), but the justification as written argues more for a 1 than the 2 it assigns.
**FIX**: either score 1 to match planetary-climate's own treatment of the same cross-basin coupling,
or rewrite the justification to lead with the identifiable-partition evidence (gyre/sector boundaries)
rather than the coupling evidence, so the score and its own strongest supporting language agree.

### decentralization — score 4, level class-general
Anchor: stars=4 ("no component steers the others... nothing to remove whose absence would constitute
loss of control"). Entry's justification is verbatim-parallel to the stars anchor and to
planetary-climate's own 4. No institutional operator, purely physical system. Matches anchor exactly.
**No finding.**

### nonlinearity — score 4, level class-general
Anchor: tropical-cyclones=4, planetary-climate=4 (nonlinear Navier-Stokes/thermodynamics, threshold/
switch-like transitions, multiplicative coupling "jointly responsible for the system's most
characteristic phenomena"). Entry justification: nonlinear primitive equations, Sverdrup/Stommel
dynamics, western intensification as a nonlinear beta-effect consequence, AND AMOC's own bistability
as a multiple-equilibria hallmark. This matches the anchor's level-4 text closely and is consistent
with the sibling fluid-continuum entries. **No finding.**

### feedback — score 4, level exemplar(amoc)
Anchor: planetary-climate=4 and tropical-cyclones=4 both require, per the notes, "every anchor at
score >=2 MUST include the structured loop list." The entry supplies three itemized loops (salt-
advection, freshwater-dilution, sea-ice asymmetry) each with name/sign/mechanism — satisfies the
notes' formatting requirement. Justification argues AMOC intensification/collapse is a feedback
phenomenon in the Stommel-1961 sense, matching the anchor's "defining behavior IS a feedback
phenomenon" test. Level tag is `exemplar(amoc)`, appropriately narrower than planetary-climate's own
class-general 4 (planetary-climate scores climate's feedback portfolio broadly; this entry scores
AMOC's specific loop structure) — a legitimate and correctly-flagged narrowing, not a level-tag error.
**No finding.**

### openness_dissipation — score 3, level exemplar(amoc)
Anchor: stars=4, tropical-cyclones=4 (collapse timescale << structural timescale); cities=3 ("large in
absolute terms" but collapse timescale >> perturbation timescale); financial-markets=2 (throughput
supports infrastructure, not the generative mechanism). Entry justification places AMOC between
cities (infrastructure-support-only) and tropical-cyclones/Sun (defining, fast-collapsing throughput):
the 1.20 PW heat transport IS the mechanism generating the structure (unlike NYSE's infrastructure
framing), but the collapse/recovery timescale is multi-decade-to-century, comparable to (not much
faster than) AMOC's own overturning turnover time — correctly disqualifying it from the level-4 "much-
faster-than-structural-timescale collapse" requirement. This is a careful, correctly-reasoned
placement that explicitly engages both anchors it sits between. **No finding.**

### chaos_sensitivity — score 2, level class-general
Anchor: level 2 requires "genuine nonlinear unpredictability is documented but the evidence is mixed,
contested, or drawn from a small/non-replicated literature." Anchor does_not_count: "do not assign 4
[or, by extension, 3] on the strength of a model result alone if no real-system figure has been
validated." Mehling et al. (2024) is a single conceptual toy-model study (explicitly caveated in both
the entry and the sweep report as NOT a real-ocean measurement). The entry correctly declines to
inflate this into a 3 the way stars(2)/earthquake-fault-systems(2) sit for comparable single-study or
contested-mechanism reasons. Matches the 2-anchor band well. **No finding.**

### criticality — score 0, level class-general
Directly cites and matches the criticality.yaml anchor's own explicit "AMOC collapse" example
verbatim ("a system can have a single sharp tipping point with no power-law event statistics ... and
score high on tipping_transitions while scoring low here"). This is the textbook case the anchor
itself uses — exact match, no drift. Also correctly applies `boundary_clarifications.events-not-
structure` (AMOC's alternative-stable-states framing is bifurcation language, kept separate from
event-statistics language) and does not commit the `mechanism-alone-caps-at-1` error (mechanism_status
is `none` here, not `proposed`, so floor of 0 is the correct read, not 1). **No finding.**

### tipping_transitions — score 3, level exemplar(amoc)
Anchor: level 4 explicitly "Reserved for climate; no other system in this catalog is expected to
reach this level." The entry is careful and correct here: it explicitly declines to score AMOC
specifically at 4, citing the anchor's reservation of the ceiling to the FULL 16-element inventory
(owned by planetary-climate.yaml), and instead grounds AMOC's own 3 in the level-3 text ("systematic
inventory... named mechanisms and threshold estimates... at least one instance shows empirical
evidence consistent with approach-to-transition") — AMOC is one of the 16 inventoried elements with a
named mechanism (salt-advection feedback), a quantified hysteresis width, and a threshold estimate.
This is a correct, well-reasoned sub-ceiling placement and a good example of the entry respecting the
anchor's reserved-ceiling language rather than re-deriving 4 for a second system. **No finding.**

### memory_hysteresis — score 4, level exemplar(amoc)
Directly reuses the planetary-climate.yaml anchor figure (van Westen & Dijkstra 2023, ~0.4 Sv
hysteresis width) verbatim, with the same `measured-disputed` evidence_status the anchor itself
carries (model-derived, not an observed completed real-world loop). Matches the anchor exactly — this
IS the anchor's own citation, correctly re-homed. **No finding.**

### information_processing — score 0, level class-general
Directly and explicitly invokes the information_processing.yaml anchor's own `does_not_count` example
("heat advecting through ocean currents ... physical transport, not detection-transmission-response")
— this is the anchor's own canonical example for this exact system. Exact match, textbook case.
**No finding.**

### adaptive_capacity — score 0, level class-general
Matches planetary-climate's own anchor language almost verbatim ("rich in feedbacks... but no
component alters its response function through experience... feedbacks operate, they do not learn").
Correctly inherits the regulation-vs-adaptation distinction. **No finding.**

### emergence — score 3, level class-general
Anchor: tropical-cyclones=3 (potential-intensity theory, "formalized, predictive macro-descriptive
machinery... not a trivial relabeling of grid-cell fields," held below 4 because direct numerical
simulation remains heavily used alongside the macro-theory). Ocean-circulation's justification
parallels this almost exactly (Sverdrup transport, AMOC streamfunction/Sv, held below 4 because ocean
general circulation models still do heavy lifting alongside the macro-theory). Well-matched to its
named comparator. **No finding.**

### self_organization — score 4, level class-general
Anchor: tropical-cyclones=4, river-networks=4, planetary-climate=4 ("nothing specifies the
[pattern] in advance... a canonical dissipative structure"). Entry justification is the same
gyres/boundary-currents/overturning-assemble-spontaneously argument, correctly citing wind stress +
Coriolis (beta-effect) + density forcing as the generative local-interaction mechanism, with no
external template. Matches. **No finding.**

### robustness_resilience — score 2, level exemplar(amoc)
Anchor level 2: "known event classes within its normal environment can destroy or permanently degrade
it." Level tag correctly defaults to `exemplar(amoc)` per the anchor's own `does_not_count` rule
("CLASS-level persistence is not EXEMPLAR-level robustness... state the level explicitly") and the
entry explicitly invokes this rule ("class-level 'ocean circulation always exists in some form' is not
credited as AMOC-specific robustness") — correct application of the sibling-column distinction. Scored
between power-grids (2, "known event classes... can cause system-scale failure") and stars/languages
(4). The justification names actual perturbations relative to AMOC's own spectrum (freshwater-input
envelope, hysteresis width, 1.4-8°C threshold) per the anchor's normalization rule. **No finding**,
though see Section 3 below on the weakening-trend figure's evidence_status.

### cascade_susceptibility — score 0, level class-general
Matches the stars floor-anchor reasoning exactly (no component-to-component failure-propagation
literature; AMOC collapse is a single bifurcation of the whole state, not local-to-distant
propagation through discrete coupled components). Correctly distinguishes this from
tipping_transitions per the anchor's own notes. **No finding.**

---

## 2. Filling rules audit

- **no-guessing**: `numerosity`, `fractal_dimension_spatial`, `extreme_event_statistics`,
  `temporal_correlation`, and `energy_rate_density` are all correctly left `unknown` with an
  explicit statement of what was searched and not found, rather than a guessed figure. Compliant.
- **power-law-rigor**: no power-law claim is made anywhere in this entry (extreme_event_statistics is
  `unknown`, not a fit). Rule not triggered; trivially compliant.
- **soc-two-claims**: `criticality`'s `mechanism_status: none` is recorded distinctly from
  `tipping_transitions`' bifurcation claim (score 3) — the entry explicitly separates these two claims
  per the rule and cites the anchor's own guidance for doing so. Compliant, and unusually
  well-executed (explicit anchor citation).
- **no-market-chaos**: N/A — not a financial-markets-adjacent claim; `chaos_sensitivity` correctly
  treats the Mehling et al. toy-model result as model-only evidence, not inflated to a real-system
  chaos claim. Compliant by analogy to the rule's spirit (guards against overclaiming from
  insufficient evidence).
- **measurand-required**: `extreme_event_statistics` names candidate measurands (AMOC transport-
  strength fluctuations, meridional-heat-transport extremes) even though the value is `unknown`.
  `temporal_correlation` does NOT name a measurand before declaring `unknown` — contrast
  planetary-climate.yaml's `temporal_correlation`, which names "global mean surface temperature record
  (Hurst exponent / DFA analysis candidate measurand)" even while also `unknown`. This is a real,
  correctable gap: **FIX** — add a candidate measurand (e.g., "AMOC transport strength time series,
  Hurst exponent / autocorrelation candidate measurand") to `temporal_correlation`, matching the
  sibling entries' practice of naming a measurand even for `unknown` values.
- **level-required**: every attribute carries a `level` field. Checked all 30 columns present in the
  entry; compliant.
- **atomicity-convention**: water parcels at mesoscale-resolving discretization (order 1-10 km),
  explicitly modeled on the hurricane precedent ("atoms are parcels, not molecules"). Consistent with
  tropical-cyclones' (1 km^3 convention) and planetary-climate's (synoptic/mesoscale fluid parcels)
  atomicity choices for the same continuum-fluid family. Compliant.
- **interaction-typing**: `interaction_ontology` lists 4 types (momentum/pressure-gradient, buoyancy/
  density, wind-stress input, air-sea heat/freshwater flux), `alphabet_closure: closed`. This is one
  MORE type than tropical-cyclones' 4-type list (which has momentum, latent-heat/moisture, surface
  enthalpy flux, radiative exchange) and overlaps only partially — ocean-circulation splits "wind-
  stress momentum input" and "air-sea heat and freshwater flux" into two types where tropical-cyclones
  treats "surface enthalpy flux" as one combined type carrying both heat and moisture. This is a
  defensible, physically-motivated split (wind-stress forcing the gyres is mechanistically distinct
  from the thermohaline buoyancy forcing, unlike a hurricane where the surface flux is single-
  mindedly about intensification), and radiative exchange (present in both tropical-cyclones and
  planetary-climate's ontologies) is notably ABSENT from ocean-circulation's list. **NOTE** (not a
  blocker): radiative exchange is a real physical interaction at the ocean surface (solar heating
  contributes to the SST field driving thermohaline forcing) and appears in both sibling entries'
  ontologies; its absence here is plausible (radiative flux is folded into "air-sea heat ... flux" by
  mechanism) but is not explicitly justified as a merge the way planetary-climate explicitly justified
  its own type_count arithmetic in its fix_log. Worth an explicit one-line justification for why
  radiative exchange doesn't need its own line item, to preempt a future cross-entry audit flag.

---

## 3. Level-tag audit

All `level` tags checked against declared exemplars (`amoc`, `gulf-stream`, `thermohaline-conveyor`)
and the `class-general` default:

- `energy_rate_density`: `exemplar(amoc)` — correct, since the only concrete figure engaged (1.20 PW)
  is AMOC-specific, even though the ultimate value is `unknown`.
- `feedback`, `openness_dissipation`, `tipping_transitions`, `memory_hysteresis`,
  `robustness_resilience`: all `exemplar(amoc)` — each is correctly scoped, since the evidentiary
  basis in every case (Johns et al. 2023, van Westen & Dijkstra 2023, Moat et al. 2020, Armstrong
  McKay et al. 2022's AMOC-specific threshold) is AMOC-specific, not class-general ocean-circulation
  evidence. No exemplar(gulf-stream) or exemplar(thermohaline-conveyor) scores appear anywhere in the
  attributes block despite both being named exemplars in the entry header — this is consistent with
  the entry's own scoping_note ("Primary exemplar for scoring is AMOC... Gulf Stream and the global
  conveyor belt used only as explicitly named comparative exemplars where they supply distinct,
  non-redundant evidence") and the Gulf Stream/conveyor-belt figures are correctly confined to
  narrative-only use (Gulf Stream Sv figures kept out of attributes per the flags block;
  thermohaline conveyor's ~1000-yr transit time appears under `characteristic_timescales` as a
  class-general list item, not a scored rubric/hybrid column) — **no drift, appropriately disciplined
  use of the exemplar mechanism.**
- All remaining rubric/hybrid columns (`modularity`, `decentralization`, `nonlinearity`,
  `chaos_sensitivity`, `criticality`, `information_processing`, `adaptive_capacity`, `emergence`,
  `self_organization`, `cascade_susceptibility`) are `class-general` — correct, since none of their
  justifications depend on AMOC-specific measured figures (they reason from general fluid-dynamical
  principles common to the whole class), consistent with how tropical-cyclones and planetary-climate
  level-tag their own physics-general rubric columns.

---

## 4. Structured-field / cross-entry coherence findings

### component_ontology.itself_complex — inconsistent with the tropical-cyclones precedent
`docs/schema.md` defines `itself_complex: <catalog-entry-id> | out-of-scope(<what>) | no`, intended to
"link the compositional graph downward." `data/classes/tropical-cyclones.yaml` sets
`itself_complex: moist-convection-cells` for its convective-cells component — an UNRESOLVED roster-
queue id, not an existing catalog entry — establishing the precedent that a composite, unfilled
roster-queue candidate should be named (not `no`) when the entry's own text treats it as a legitimate
composite/complex substructure.

Ocean-circulation's `relations.contains: []` comment explicitly states: "mesoscale eddies and western
boundary currents recorded in component_ontology as named substructures, not as separate catalog
entries; no dedicated eddy-dynamics or boundary-current entry exists yet -> roster expansion queue
candidate." The `component_ontology` block itself describes mesoscale eddies, western boundary
currents, and subpolar/subtropical gyres all as `role: composite`. Despite this, all five
`component_ontology` parts (water parcels, mesoscale eddies, western boundary currents, gyres,
deep-water formation sites) are marked `itself_complex: no`.

This is inconsistent with the tropical-cyclones precedent for the composite entries specifically
(mesoscale eddies, western boundary currents, gyres) — under the established pattern these should
carry an unresolved id (e.g. `itself_complex: mesoscale-eddies`, `itself_complex: western-boundary-
currents`, `itself_complex: ocean-gyres`) matching the same roster-expansion-queue candidates named in
the `relations.contains` comment, not `no`. `no` is defensible only for the atomic water-parcels
entry and arguably for deep-water formation sites (named point-source locations rather than a
composite dynamical structure in their own right).

**FIX**: change `itself_complex` from `no` to the appropriate unresolved roster-queue id for
mesoscale eddies, western boundary currents, and subpolar/subtropical gyres, consistent with the
`moist-convection-cells` precedent in tropical-cyclones.yaml and with this entry's own
`relations.contains` comment identifying exactly these substructures as roster-expansion-queue
candidates.

### temporal_correlation — missing measurand name (see filling-rules section above)
Cross-referenced against planetary-climate.yaml's practice of naming a measurand even when the value
is `unknown`. Repeated here as the specific cross-entry precedent for the filling-rule finding above.

### provenance.verification block — all fields "pending"
`provenance.verification` shows `citation_check: pending`, `plausibility_check: pending`,
`consistency_check: pending`, `coverage_check: pending` — appropriate for a draft-status entry mid-
verification-pipeline; this consistency check is exactly the process filling in one of those four
fields. Not itself a finding, noted only so the field is not mistaken for an omission.

---

## 5. Summary of severity-worthy findings

1. **fix** — `modularity` (score 2): the entry's own justification argues cross-module coupling is
   "definitional" to the system's function, using language that matches planetary-climate's own
   modularity=1 anchor for the identical physical structures (same gyres/overturning one level up),
   not the 2-anchors' "not strongly insulated but recognizable" framing. Score and justification are
   in tension; either lower to 1 or rewrite the justification to foreground the partition evidence.

2. **fix** — `component_ontology.itself_complex` marked `no` for mesoscale eddies, western boundary
   currents, and subpolar/subtropical gyres, contradicting the tropical-cyclones precedent
   (`moist-convection-cells`) for composite substructures explicitly named as roster-expansion-queue
   candidates in this entry's own `relations.contains` comment.

3. **note** — `temporal_correlation` does not name a candidate measurand before recording `unknown`,
   unlike the sibling planetary-climate.yaml entry; the measurand-required filling rule is written for
   "signal-relative quantities" generally, and naming a measurand for an `unknown` value is established
   good practice elsewhere in the catalog even if not strictly mandated for values that are `unknown`
   outright.

4. **note** — `interaction_ontology` omits "radiative exchange" as a distinct type (present in both
   tropical-cyclones and planetary-climate's ontologies for the same fluid-continuum family) without
   an explicit one-line justification for the omission/merge, unlike planetary-climate's own
   documented type_count reasoning in its fix_log.

No blocker-severity findings: no anchor contradiction, no fabricated or miscited value, no filling-
rule violation rising to catalog-poisoning severity was found. The entry's citation handling
(evidence_status discipline, `[unverified — model knowledge]` tagging, explicit standing flags for
the two contested AMOC-trend figures and Gulf Stream figures deliberately withheld from attributes)
is unusually careful and matches or exceeds the rigor of the two verified sibling entries used as
comparators throughout this check.
