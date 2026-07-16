# Consistency check — convection-cells.yaml

Checker: consistency (commensurability enforcer)
Target: N:\coc\data\classes\convection-cells.yaml
References: schema/panel-spec.yaml; schema/anchors/*.yaml (15 files); research/v0.3/expansion/convection-cells-sources.md; data/classes/tropical-cyclones.yaml (cross-entry comparator, spot-checked)

## Method

Read the full entry and panel-spec.yaml (column definitions + filling_rules). Read all 15
anchor files. For every rubric/hybrid column scored in the entry, compared the score and
justification against (a) the scale text, (b) the nearest worked anchor(s), and (c) where the
entry claims a specific anchor file/line/system as its comparator, verified that citation
against the actual anchor file content. Cross-checked several scores against
tropical-cyclones.yaml (the sibling entry most frequently invoked as a comparator) to see
whether cited "anchor" reasoning actually appears in the schema/anchors files or is really a
sibling-entry comparison mislabeled as an anchor.

## Column-by-column findings

### emergence — score 3
Convection-cells IS a directly worked anchor in schema/anchors/emergence.yaml (lines 105-126,
score 3, exact same Ra_c~1708/Ginzburg-Landau reasoning). Entry justification is a faithful
restatement. **No drift.** Clean match.

### self_organization — score 4
Entry claims: "Per this class's own worked anchor (schema/anchors/self_organization.yaml,
lines ~27-29, cross-referencing the stars entry)." VERIFIED FALSE: self_organization.yaml
has no convection-cells anchor at all, and has no stars anchor either (its anchors are
tropical-cyclones, river-networks, the-internet, power-grids, languages). Lines 27-29 of that
file fall inside the tropical-cyclones anchor's justification, not a "stars entry." The score
itself (4) is well-supported by the scale text (spontaneous roll/hexagon assembly from a
forcing gradient, no templating) and is directionally consistent with the tropical-cyclones
anchor's identical score-4 reasoning ("nothing specifies the form in advance... canonical
dissipative structure") — but the citation naming a nonexistent "stars entry" at specific
line numbers is a fabricated/incorrect pointer into a reference document.
**FIX**: correct the citation to name the tropical-cyclones anchor (which is the real match)
and drop the false "stars entry" / line-number claim, or cite tropical-cyclones.yaml's own
self_organization score (4) as the cross-entry comparator instead of misreading the schema
anchor file.

### decentralization — score 4
Justification: "Same reasoning as the tropical-cyclones and stars anchors." stars IS an
anchor at score 4 in decentralization.yaml (correct). tropical-cyclones is NOT an anchor in
that file. Score itself is well-justified independently (no controller; local physics only)
and matches the stars anchor almost verbatim. **NOTE**: minor over-citation (bundling a
non-anchor sibling entry into "the anchors"), not a scoring problem.

### nonlinearity — score 4
tropical-cyclones IS a real, correctly-cited anchor at score 4 in nonlinearity.yaml. Entry's
comparison is accurate. **No issue.**

### feedback — score 2, with structured loop list (required for score >=2, per
feedback.yaml's notes — satisfied: two named BALANCING loops with mechanism given).
Justification mirrors the stars anchor (score 2, correctly cited and present in
feedback.yaml) almost exactly ("explain long-term stability but are not the primary driver of
... most dramatic dynamics" vs. anchor's "explain long-term stability but operate as slow
negative feedback... not a driver of rich, continuously varying characteristic behavior").
**Clean match**, no drift.

### openness_dissipation — score 4
tropical-cyclones IS the correctly-cited anchor at score 4 (openness_dissipation.yaml).
Reasoning (collapse to pure conduction "essentially instantly" on removing the driving
gradient) matches the anchor's "collapse... on a timescale comparable to or shorter than the
structure's own dynamical timescale" test cleanly. **No issue.**

### chaos_sensitivity — score 3
tropical-cyclones IS the correctly-cited ceiling anchor (score 4) and the entry explicitly
and correctly scores one point below it, citing the missing Lyapunov/predictability-horizon
figure as the reason (matches the scale's 3-vs-4 boundary text exactly: level 3 = "broadly
accepted... without an established real-world quantitative horizon"). Spiral-defect chaos
(Morris et al. 1993) is real, established, non-metaphorical spatiotemporal chaos in the
pattern-formation literature, satisfying level 3's "domain experts broadly accept the system
is chaotic" bar even without a cited exponent. **NOTE** (not a blocker): the entry's own
citation is snippet-verified/model-knowledge only (not primary-read) for the Morris et al.
paper, which is already flagged in the entry's provenance — the consistency-check dimension
of this score is sound; the citation-check dimension (separate verifier) should track the
primary-read debt.

### criticality — score 0, mechanism_status: none
Matches the tropical-cyclones anchor's own post-2026-07-02 rescoring (1->0) on the identical
"no storm/event-internal heavy-tail pattern" logic; the entry correctly distinguishes this
scoped system (idealized lab RB) from Peters & Neelin 2006's moist-atmospheric-convection
criticality finding, which does not transfer. This matches criticality.yaml's
"events-of-the-scoped-system" boundary_clarification precisely (the analogous
tropical-cyclones and cities precedents cited in that clarification). **No issue** — this is
one of the strongest-argued columns in the entry.

### tipping_transitions — score 2
Matches the tipping_transitions.yaml boundary_clarification `single-modeled-mechanism-is-2`,
which explicitly names "tropical-cyclones' rapid intensification + eyewall replacement" as
the worked case for score 2 — this citation is accurate (unlike several others below), since
tropical-cyclones genuinely appears in that clarification block (not just in the anchors:
list). The RB onset-at-Ra_c bifurcation is a fair parallel: one formally modeled mechanism,
published threshold, no systematic multi-element inventory. **No issue.**

### memory_hysteresis — score 1
Justification: "Matches the tropical-cyclones anchor's level-1 reasoning (relaxation memory
only)." VERIFIED: memory_hysteresis.yaml's anchors are stars(1), earthquake-fault-systems(2),
planetary-climate(4), financial-markets(3), the-internet(2), languages(4) — tropical-cyclones
is NOT an anchor in this file. Cross-checked tropical-cyclones.yaml directly: it does score
memory_hysteresis at 1 with near-identical reasoning ("state is essentially a function of
current environment... plus short relaxation lags; no bistability... documented"), so the
*score* is well-corroborated by a real sibling-entry precedent — but describing that sibling
entry's score as "the tropical-cyclones anchor" overstates it as if it appeared in the schema
anchor file. The much closer schema-anchor match is actually stars (score 1, "relaxation lag
... but no bistability, no hysteresis loop" — nearly the same language as this entry uses).
**FIX**: retarget the citation to the stars anchor (a real, closely-matching anchor) and/or
tropical-cyclones.yaml directly (as a sibling entry, not "the anchor").

### information_processing — score 0
**This is the most significant finding.** Justification: "matching... the anchor language
('a critical Rayleigh number' is explicitly cited in information_processing.yaml as the
canonical example of the thinnest, non-qualifying sense of 'signaling')." This citation is
literally accurate — information_processing.yaml's scale level 1 text reads: "This is
'sensing' in only the thinnest sense — a rupture criterion, a critical Rayleigh number, a
fixed melting point." **But this is the anchor's own worked example for SCORE 1, not score
0.** The entry uses this exact quote to justify scoring convection-cells at 0, when the
anchor file explicitly places "a critical Rayleigh number" — i.e., precisely this system's
own defining onset mechanism — at level 1 ("threshold-triggered response only... a fixed
physical threshold... a switch"), by name. The earthquake-fault-systems anchor (which scores
1 for an exactly parallel case — a friction threshold crossing) is the correct structural
analogue: "Rupture initiates when local shear stress... exceeds the frictional strength
threshold... a physical threshold trigger... Scored 1, not 0, because the rate-and-state
threshold is at least a discrete trigger/comparison against a reference friction value." RB
convection's Ra_c is the textbook example of exactly this kind of threshold-trigger, named
verbatim in the anchor. Scoring convection-cells at 0 (the Sun's score, reserved for pure
propagation with literally no threshold/comparison structure at all) rather than 1 (the fault
system's score, and the anchor's own explicit RB-onset-shaped example) is an anchor
contradiction, not a defensible below-anchor placement.
**FIX (should be corrected before verified status): information_processing should almost
certainly be rescored from 0 to 1**, with justification modeled on the earthquake-fault-
systems anchor rather than the stars anchor, and the misleading "canonical example of the
thinnest, non-qualifying sense" framing removed (the anchor calls it the thinnest *qualifying*
sense at level 1, not a non-qualifying one).

### adaptive_capacity — score 0
Justification: "matching the Sun/tropical-cyclones anchor precedent exactly." stars IS an
anchor at 0 (correct match, and the reasoning — "fluid parcels obey fixed physics; no
component modifies its response function" — is a near-verbatim paraphrase of the stars
anchor's language). tropical-cyclones is NOT an anchor in adaptive_capacity.yaml (its anchors
are stars, planetary-climate, river-networks, power-grids, languages, financial-markets).
**NOTE**: same over-citation pattern as decentralization/self_organization/
memory_hysteresis — folding a non-anchor sibling entry into "the anchor(s)." Score itself
(0) is correct and well-anchored via stars alone.

### variation_selection — value: absent
Consistent with adaptive_capacity=0 and the entry's overall non-CAS profile. No anchor file
exists for this categorical column; justification is a one-line assertion consistent with the
rest of the panel. **No issue.**

### robustness_resilience — score 1, level: class-general
Justification matches the tropical-cyclones/Katrina anchor (score 1, "organization
maintained only within a narrow environmental envelope") closely and correctly, and this IS a
real anchor citation (tropical-cyclones/Katrina genuinely appears at score 1 in
robustness_resilience.yaml). However: robustness_resilience.yaml's does_not_count block
states explicitly, "level: exemplar(<name>) is the default for this column, per D14" — the
column is designed to be scored at exemplar granularity specifically because class-level
persistence ("hurricanes keep forming") must not be credited as robustness. The entry's own
justification correctly invokes this exact does_not_count logic ("class-level persistence...
is deliberately not credited") — but then tags the value level: class-general rather than
level: exemplar(rayleigh-benard-lab). Given the entry's scoping_note frames lab RB as "an
unboundedly replicable experimental class" with no single natural instance (unlike Katrina),
there is a defensible reason class-general is used elsewhere in this entry — but this column
specifically calls for exemplar-level tagging by convention, and the entry has exactly one
named exemplar (rayleigh-benard-lab) it could legitimately tag. **FIX**: retag as
level: exemplar(rayleigh-benard-lab) (or add an explicit one-line note explaining why this
column departs from the D14 default for a no-natural-instance class), for cross-entry
commensurability with Katrina's exemplar-level scoring on the same column.

### cascade_susceptibility — score 0
Justification: "Same floor-anchor reasoning as stars and tropical-cyclones in
cascade_susceptibility.yaml." stars IS a real anchor at score 0 (correct, and the reasoning —
"no documented mechanism by which one region's... event propagates a failure cascade... to
otherwise unrelated regions" — matches closely). tropical-cyclones is NOT an anchor in this
file (anchors: power-grids, the-internet, financial-markets, river-networks, stars).
Cross-checked tropical-cyclones.yaml directly: it also scores 0 with nearly identical wording
("Same floor-anchor reasoning as stars in cascade_susceptibility.yaml" — notably,
tropical-cyclones.yaml's OWN text correctly cites only stars, not itself, as the anchor).
Convection-cells then compounds this by citing tropical-cyclones as if it, too, were named in
the schema file. **NOTE**: same recurring over-citation pattern; score is sound (0 is right
for a continuum system with no coupled discrete components to cascade through), citation
should say "matches stars (the only cascade_susceptibility anchor) and tropical-cyclones.yaml's
own parallel scoring," not imply both are anchors.

### modularity — score 1
Justification: "Comparable to the tropical-cyclones anchor's score of 1... scored via the
same reasoning rather than a dedicated convection-cells anchor." This is honestly phrased
(explicitly disclaims a dedicated anchor) but still calls tropical-cyclones an "anchor," when
modularity.yaml's actual anchors are stars(1), river-networks(2), cities(2), the-internet(2),
power-grids(3), languages(1) — tropical-cyclones is not among them. Cross-checked
tropical-cyclones.yaml directly: score 1, "weak, transient lateral structure... fuzzy
gradational... no insulated modules" — a genuine, well-matched precedent, just not a
schema-anchor one. The stars anchor (score 1, "weak lateral quasi-modular pattern... lack
persistent identity or strong insulation from neighbors") is actually the closer schema-level
match and is not mentioned at all. **NOTE**: score is fine; would tighten the entry to name
stars as the schema anchor and tropical-cyclones as the corroborating sibling.

### hierarchy_depth — value 2, unit organizational levels
No anchor file exists for this column (only 15 anchor files total; hierarchy_depth is not one
of them). Counting convention stated explicitly (fluid parcels -> rolls/cells (1) ->
whole-layer pattern (2)), matches the panel-spec's requirement to state the convention, and is
consistent with (shallower than) tropical-cyclones' stated convention (3 levels, with an
explicit reason: no rainband/eyewall-complex analogue). **No issue.**

### interaction_ontology / interaction_topology — closed, 3 types, field/continuum
Matches filling_rules.interaction-typing (individuated by mechanism/carrier: buoyancy
coupling, viscous momentum exchange, thermal diffusion — three genuinely distinct mechanisms,
not outcome-based double-counting) and is consistent with the tropical-cyclones closed-
alphabet precedent cited (one fewer type, correctly attributed to the fixed-temperature
boundary condition removing the surface-flux/radiative channel). **No issue.**

### degree_distribution — not-applicable
Consistent with interaction_topology = field/continuum; matches the sweep report's explicit
statement. **No issue.**

### Quantitative/unknown columns (spatial_extent, characteristic_timescales, numerosity,
instance_population, component_ontology, energy_rate_density, fractal_dimension_spatial,
extreme_event_statistics, temporal_correlation)
All correctly distinguish evidence_status (measured / derived / unknown / qualitative) per
the panel-spec vocabulary; no fabricated values; every `unknown` is accompanied by a note
documenting an active, unsuccessful search rather than an unexamined gap. energy_rate_density
correctly follows the the-internet precedent (unknown rather than a one-off derivation) and
explicitly declines to borrow the geosphere Fm=75 proxy. extreme_event_statistics correctly
carries measurand_type: temporal-event even though the value is unknown, per
filling_rules.measurand-required. **No issues.**

## Filling-rules audit

- **no-guessing**: satisfied throughout; every unknown is explained, none guessed around.
- **power-law-rigor**: no power-law claims made without CSN-grade support or explicit
  measured-untested framing; the Nu~Ra^(1/3) scaling discussion is correctly kept out of any
  column value and flagged as non-fitting a single column.
- **soc-two-claims**: criticality correctly separates event-statistics (none found) from
  mechanism status (none), per scale/anchor text.
- **no-market-chaos**: not applicable to this entry.
- **measurand-required**: satisfied (extreme_event_statistics, temporal_correlation both name
  their measurand even while unknown).
- **level-required**: satisfied on every attribute (all tagged class-general) — EXCEPT the
  robustness_resilience level-tag question raised above, which is a column-specific
  convention question (exemplar default) rather than a missing-tag violation.
- **atomicity-convention**: satisfied; fluid parcels declared and justified against the
  tropical-cyclones/weather-systems precedent.
- **interaction-typing**: satisfied; see interaction_ontology above.

## Cross-entry coherence (vs. tropical-cyclones.yaml, spot-checked)

Every score this entry claims "matches" or is "comparable to" in tropical-cyclones.yaml was
independently re-checked against that file's actual text (modularity, memory_hysteresis,
self_organization, cascade_susceptibility). In every case the *numeric score and reasoning*
genuinely correspond — the entries are mutually consistent. The issue found across five
columns (self_organization, decentralization, memory_hysteresis, adaptive_capacity,
cascade_susceptibility, modularity) is exclusively a citation-precision one: the entry
repeatedly describes a match to tropical-cyclones.yaml's own (non-anchor) score as matching
"the tropical-cyclones anchor" in the corresponding schema/anchors/*.yaml file, when
tropical-cyclones does not actually appear as a worked anchor in five of those six files
(nonlinearity, openness_dissipation, chaos_sensitivity, robustness_resilience, and
tipping_transitions's boundary_clarifications are the columns where tropical-cyclones truly
is a cited anchor, and those citations are all accurate). This is worth fixing for future
verifier/consistency-checker trust in the entry's citation apparatus, but does not by itself
indicate any wrong score.

## Summary of severities

- 1 FIX rising to near-blocker: information_processing scored 0 where the anchor's own named
  example ("a critical Rayleigh number") is explicitly the level-1 case; should likely be 1.
- 3 FIX: self_organization's fabricated line/system citation into self_organization.yaml;
  memory_hysteresis's mis-cited "tropical-cyclones anchor" (should cite stars, the real
  matching anchor); robustness_resilience's level: class-general tag conflicting with the
  column's own stated exemplar-level default and the entry's own does_not_count-based
  justification logic.
- Several NOTE-level citation-precision issues (decentralization, adaptive_capacity,
  cascade_susceptibility, modularity) that recur in a systematic pattern: labeling a
  tropical-cyclones.yaml sibling-entry comparison as if it were a schema/anchors/*.yaml
  anchor, when it is not.
- chaos_sensitivity's non-primary-read Morris et al. 1993 citation is already flagged in
  provenance and is a citation-check matter, not a consistency-check one; noted for
  completeness.
