# Consistency check — road-traffic-systems

Auditor: consistency-checker subagent. Method: read the full entry
(data/classes/road-traffic-systems.yaml), the frozen panel-spec
(schema/panel-spec.yaml), all 15 anchor files (schema/anchors/*.yaml), and
diffed every rubric/hybrid/categorical/structured value against the anchor
scale text and the nearest worked comparators, plus cross-checked against
the-internet.yaml, power-grids.yaml, financial-markets.yaml, cities.yaml,
tropical-cyclones.yaml for cross-entry commensurability (hierarchy_depth
counting convention, modularity comparator claims, robustness_resilience
level-tag practice). No edits made to any file.

## Column-by-column

### Group A — identity & scale
- spatial_extent, characteristic_timescales, numerosity, instance_population,
  component_ontology, energy_rate_density: quantitative/structured, not
  anchor-scored. All honestly carry unknown/low-confidence/[unverified]
  flags rather than invented figures. No filling_rule violation found
  (no-guessing respected throughout). OK.

### Group B — structure
- interaction_topology: `hierarchical-mixed` — valid vocabulary member, and
  the static-graph-plus-flow-continuum justification is a legitimate reading
  distinct from a pure `network` call. OK.
- interaction_ontology: four types individuated by mechanism (car-following,
  lane-changing, signal control, route choice), not by outcome/sign — matches
  filling_rules.interaction-typing. `alphabet_closure: constrained` is
  well-argued (fixed by law/geometry, slowly revisable by institutional/tech
  change) and explicitly modeled on financial-markets' constrained
  reasoning. OK.
- degree_distribution, fractal_dimension_spatial: left `unknown` per
  no-guessing rather than asserting the plausible-but-uncited D~1.7-1.9 or
  low-degree-planar folklore. OK, and self-flagged in provenance.
- modularity (score 2): justification and comparator (financial-markets,
  score 2, "recognizable subunits... substantial cross-module flow")
  checked against financial-markets.yaml directly — the comparator claim is
  accurate, not a fabricated parallel. Matches anchor level 2 text. OK.
- hierarchy_depth (value 3): counting convention (atoms excluded, 3 levels
  above: link/platoon, corridor/subnetwork, network) matches the convention
  used by the-internet (3), financial-markets (3), power-grids (2),
  cities (4) — atoms-excluded counting is cross-entry consistent. OK.
- decentralization (score 3): explicitly invokes the anchor's own
  infrastructure discriminator (real-time steering vs. bookkeeping-only) and
  the-internet comparator (score 3). Checked against decentralization.yaml's
  worked note ("power-grids=1, financial-markets=2, the-internet=3... engineered,
  spanning three scale levels") — traffic signals/ramp meters are
  legitimately narrow-scope per-intersection control, matching level 3's
  "coordination points exist but are narrow in scope... do not steer
  moment-to-moment behavior." Well-calibrated. OK.

### Group C — dynamics
- **nonlinearity (score 4) — FIX.** The entry claims parity with the
  tropical-cyclones/financial-markets 4-anchors ("nonlinearity pervasive and
  load-bearing for the system's most characteristic phenomena"), but its own
  feedback-column justification states "free-flow driving well below
  capacity is largely open-loop car-following" — i.e., the system spends
  much of its operating time in a regime the entry itself describes as
  simple/non-coupled. This is structurally the same situation the
  nonlinearity anchor scores at 3, not 4, for earthquake-fault-systems
  ("between individual rupture events the fault system spends most of its
  time in slow, quasi-linear... interseismic loading is close to linear...
  nonlinearity is concentrated at rupture initiation/propagation rather than
  pervasive across the full duty cycle") and — more pointedly — the same
  reasoning the-internet (same infrastructure category) uses to score only
  2: "routine traffic engineering...designed specifically to behave close to
  linearly, and nonlinear regimes...are edge cases...rather than the modal
  operating behavior." Road traffic's free-flow-dominant, jam-as-exception
  character is the same "quasi-linear modal state + nonlinear edge
  phenomenon" shape as those 2-3 anchors, not the "pervasive at multiple
  scales/subsystems simultaneously" shape of the 4-anchors. Recommend
  downgrading toward 3 (nonlinearity central to the *characteristic*
  breakdown/jam/MFD phenomena, matching the fault-system 3, rather than
  claiming pervasiveness across the whole duty cycle) — or, if kept at 4,
  the justification must explicitly rebut the free-flow-is-quasi-linear
  point it makes elsewhere in the same entry.

- **chaos_sensitivity (score 2) — FIX.** The justification's own logic
  ("sensitivity real at the microscopic/local scale but does not propagate
  into unpredictability of the aggregate state... unlike weather's
  whole-system chaos") is close to verbatim the same shape of argument
  the-internet's entry uses to score **1**, not 2: "documented transient
  instability phenomena... qualify as sub-processes that can amplify small
  perturbations, while [the dominant/aggregate dynamics do not]." Checked
  directly against the-internet.yaml's own chaos_sensitivity value (1) and
  its justification text. The anchor scale's level 2 is reserved for
  "genuine nonlinear unpredictability... evidence is mixed, contested, or
  drawn from a small/non-replicated literature" — the entry does not claim
  contested/mixed evidence, it claims a clean local-vs-aggregate split,
  which is exactly level 1's text ("weak or highly localized sensitive
  dependence... not characteristic of the system's dominant dynamics").
  Recommend downgrading to 1 for cross-entry consistency with the-internet,
  or adding an explicit argument for why traffic's local sensitivity should
  count for more than the Internet's BGP/congestion-oscillation local
  instabilities did.

- feedback (score 3): itemized loop list present (name/sign/mechanism) as
  the anchor's notes require for any score >=2. Matches financial-markets'
  3-vs-4 reasoning almost exactly (loops central but coexist with
  substantial non-fed-back behavior) — internally consistent with the
  nonlinearity finding above (both point at "free-flow is open-loop"), which
  is good self-consistency within the entry even though it cuts against the
  nonlinearity score. OK as scored.
- openness_dissipation (score 3): correctly distinguishes the literal-flux
  requirement (does_not_count block) from any market-style metaphor; caps
  below the hurricane 4 explicitly for lack of a quantified throughput
  figure, consistent with the column's evidentiary bar. OK.
- criticality (score 1, mechanism_status: proposed): follows the
  river-networks precedent and the boundary_clarifications'
  mechanism-alone-caps-at-1 rule almost to the letter (published
  capacity-drop/three-phase mechanism, no CSN-grade field event-size
  statistics). Well-calibrated, correctly separates the two soc-two-claims
  sub-claims. OK.
- extreme_event_statistics: measurand-type mismatch (velocity constant, not
  a tail exponent) is self-flagged per filling_rules.measurand-required and
  power-law-rigor; no power-law claim is made. OK, exemplary honesty.
- temporal_correlation: unknown, not guessed. OK.
- tipping_transitions (score 2): matches boundary_clarifications'
  single-modeled-mechanism-is-2 precedent (capacity drop + hysteresis +
  three-phase states as named, thresholded, modeled mechanisms; no
  systematic multi-element inventory). Comparator to financial-markets (2)
  is accurate against financial-markets.yaml. OK.

### Group D — information & memory
- memory_hysteresis (score 3): matches anchor level 3 text (documented
  hysteresis/multistability, localized/partial) closely, and is in fact the
  entry the anchor file's own notes anticipated ("traffic hysteresis loops
  (Treiterer & Myers 1974) are the two literature-grounded quantitative
  exemplars... would be evidence_status: measured were traffic in the pilot
  set"). NOTE (not a fix): the entry conservatively uses
  evidence_status: measured-untested / confidence: low rather than
  measured, because Treiterer & Myers 1974 itself was not primary-read this
  sweep (only the MDPI capacity-drop tutorial and Geroliminis & Sun 2011,
  both snippet-verified) — this is the *correct*, more conservative call
  given the sourcing actually done, not an inconsistency; flagging only so
  a future primary read of Treiterer & Myers 1974 is recognized as the
  specific action that would bring this column in line with the anchor
  file's own prediction.
- information_processing (score 1): careful, matches the anchor's
  does_not_count block (state-dependent car-following clears the floor
  above "mere propagation," but no aggregation into a constructed public
  state within the declared atomicity boundary). The exclusion of
  navigation-app route information as "exogenous to the driver-vehicle-unit
  atomicity boundary" is a genuinely careful scope-consistent call. OK.

### Group E — adaptation
- **adaptive_capacity (score 2) — FIX.** The scale 2/3 boundary is: level 2
  = "systematically change behavior via feedback or selection among fixed
  rules... **without anticipation or internal models**"; level 3 = "many
  components possess internal models and adjust behavior **anticipatorily**;
  adaptation real but slow, partial, or weakly strategic." The entry's own
  justification describes "route switching in response to perceived
  congestion" and "learned habitual routes/departure times" — both of which
  are anticipatory, experience-conditioned behavior (a driver forms an
  internal expectation of congestion and pre-adjusts route/departure time),
  which is level 3's text, not level 2's "without anticipation." The
  entry's stated reason for not going higher (no population-level
  selection/retention, substrate does not adapt) is a level-3-vs-4
  argument, not a level-2-vs-3 argument — it argues against a 4, but the
  quoted behavior itself does not match level 2's explicit "without
  anticipation" exclusion. Recommend re-scoring to 3, with the existing
  "not 4" argument (no population-level selection, slow institutional
  substrate) retained as the reason it stops at 3 rather than 4.
- variation_selection (`contested`): legitimate vocabulary member, honestly
  hedged rather than asserted present/absent. OK.

### Group F — emergence & robustness
- emergence (score 3): matches the boundary_clarification
  effective-theory-quality-gates-3 (the MFD is a load-bearing,
  quantitatively used order parameter, not merely pattern vocabulary) and
  the tropical-cyclones/potential-intensity-theory comparator shape. OK.
- self_organization (score 3): the "exceeds the-internet's 2" argument is
  checked against self_organization.yaml's actual the-internet anchor text
  and is a fair reading (Sugiyama's zero-bottleneck jam formation is a
  stronger spontaneity claim than Internet AS-topology growth) — the
  remaining designed layer (signals/ramp meters) is correctly cited as what
  keeps it below 4. OK.
- robustness_resilience (score 2, **level: class-general**) — NOTE. The
  anchor file's does_not_count block states "level: exemplar(<name>) is the
  default for this column, per D14," and two pilot entries follow that
  (power-grids -> exemplar(ercot), tropical-cyclones ->
  exemplar(hurricane-katrina)). However this is not uniformly enforced
  across the verified set: the-internet and financial-markets (both
  entries with a named-but-diffuse anchor exemplar, same as
  road-traffic-systems' four listed exemplars) also score this column
  class-general. Road-traffic-systems' choice matches the latter,
  established precedent (no single canonical exemplar the way
  ERCOT/Katrina are); recorded as a note for a future roster-wide pass on
  this column's level-tagging discipline, not a defect specific to this
  entry.
- cascade_susceptibility (score 2): matches financial-markets' comparator
  (dedicated case studies/mechanism analyses, no fitted cross-event
  cascade-size distribution) accurately. OK.

## Filling-rules audit
- no-guessing: respected everywhere; every unknown is genuinely left
  unknown (spatial_extent's metro-network figure, numerosity's US-specific
  figure, degree_distribution, fractal_dimension_spatial,
  temporal_correlation, energy_rate_density).
- power-law-rigor: no power-law claim made anywhere; extreme_event_statistics
  explicitly declines to force the propagation-speed figure into a tail-
  exponent shape. Compliant.
- soc-two-claims: criticality column correctly separates event-statistics
  from mechanism status. Compliant.
- no-market-chaos: not directly applicable (not a market entry), but the
  chaos_sensitivity column's own local/aggregate distinction is handled with
  the same rigor the rule models (see the FIX above re: which anchor level
  that distinction actually clears).
- measurand-required: extreme_event_statistics names its measurand
  explicitly and flags the mismatch with the column's nominal tail-exponent
  definition. Compliant.
- atomicity-convention: declared explicitly and clearly in scoping_note
  (driver-vehicle unit as atom; road-graph elements as fixed substrate, not
  atoms; drivers out-of-scope(human)). Compliant, and correctly threaded
  through component_ontology, information_processing, and adaptive_capacity.
- interaction-typing: interaction_ontology's four types are individuated by
  mechanism/carrier (car-following, lane-changing, signal control, route
  choice), not by outcome/sign. Compliant.
- level-required: every value states class-general (this is a class-general
  entry throughout, per its own scoping_note; no exemplar-level value
  claimed anywhere) — internally consistent, though see the
  robustness_resilience note above re: cross-roster level-tagging practice.

## Summary of severity
- 3 **fix**-level findings: nonlinearity (score 4 not well-supported against
  the entry's own free-flow-is-open-loop admission and the-internet/
  earthquake-fault comparators — recommend 3), chaos_sensitivity (score 2
  reasoning matches the-internet's own 1, not 2 — recommend 1), and
  adaptive_capacity (score 2 justification describes anticipatory behavior
  that is level 3's text, not level 2's — recommend 3).
- 2 **note**-level findings: memory_hysteresis's measured-untested status is
  correctly conservative but flagged for a future upgrade path; robustness_
  resilience's class-general level tag departs from the anchor file's
  stated default but matches an existing cross-entry precedent (the-internet,
  financial-markets), so it is not treated as a defect.
- No **blocker**-level findings: no fabricated value, citation, or anchor
  contradiction so severe it would poison the catalog if published as-is —
  all three fix-level findings are scoring-calibration drift of one point
  against a directly comparable anchor/precedent, not invented evidence.
