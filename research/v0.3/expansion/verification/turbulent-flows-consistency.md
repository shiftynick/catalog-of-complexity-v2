# Consistency check — turbulent-flows.yaml

Checker: consistency-checker subagent. Scope: audit every rubric/hybrid score
against `schema/anchors/*.yaml`, audit filling_rules compliance, audit level
tags, and cross-check against verified entries in `data/classes/` (primarily
tropical-cyclones.yaml and stars.yaml, the entry's own most-cited comparators).

Reference documents read in full: panel-spec.yaml; all 15 anchor files
touched by this entry's scored columns (decentralization, nonlinearity,
feedback, openness_dissipation, chaos_sensitivity, criticality,
tipping_transitions, memory_hysteresis, information_processing,
adaptive_capacity, emergence, self_organization, robustness_resilience,
cascade_susceptibility, modularity); docs/roster.md.

## Column-by-column audit

### decentralization = 4
Justification quotes the anchor's own `does_not_count` clause nearly
verbatim ("a turbulent cascade has hierarchy with no controller") — this
line was evidently pre-written in the anchor file with turbulence in mind.
Exact match to the stars anchor's score-4 reasoning (no privileged
controller at any scale). **No issue.**

### nonlinearity = 4
Matches the tropical-cyclones/financial-markets anchors' top-tier
reasoning: nonlinearity is definitional to the system's single most
characteristic phenomenon (the cascade), not peripheral. Clean match to
scale-4 text ("pervasive AND load-bearing... jointly responsible for the
system's most characteristic phenomena"). **No issue.**

### feedback = 2
Scale-2 text requires loops that "materially shape system behavior in
specific regimes/episodes" while modal dynamics remain open-loop — the
entry's reasoning (transition-specific loop, not organizing the full
cascade) fits this band. However, the loop list itself has a defect: the
anchor's `does_not_count` clause states "a loop only counts if there is a
documented or mechanistically clear causal path back to the variable that
started it... do not credit... a single-pass causal chain relabeled as a
loop." The entry's own text for "forward energy cascade" states in-line
that it is "not a classic loop" (a directional cross-scale transfer, no
return path) — yet it is still listed as one of only two loops backing the
score. That leaves only one loop (puff self-sustenance vs. decay) actually
satisfying the anchor's definition, and that loop's mechanism description
("internal shear regenerates turbulent fluctuations against viscous
decay") is not tied to a specific citation for the regeneration mechanism
itself (Avila et al. 2011 is cited, but that paper documents puff
decay/splitting statistics, not a named self-sustaining-process feedback
mechanism — the classical citation here would be Waleffe's self-sustaining
process (SSP) theory, not currently cited). **FIX**: either drop the
energy-cascade line from the loop list (it does not meet the anchor's loop
test by the entry's own admission) or restate the score's evidentiary base
around the one loop that qualifies, and add a citation for the
regeneration mechanism.

### openness_dissipation = 3
Compared against stars=4, tropical-cyclones=4, cities=3. Reasoning (score
3 rather than hurricane's 4 because turbulence lacks one characteristic
throughput ratio across its constituent flows) is a defensible, explicitly
argued placement below the heat-engine anchors. **No issue.**

### chaos_sensitivity = 3
Anchor requires score 4 only with a real-system, operationally-used
Lyapunov/predictability-horizon figure (per the atmosphere anchor); score 3
is for chaos established in a well-accepted reduced/model description
without an operational real-world horizon. The entry's citations for the
route-to-turbulence chaos literature (Ruelle & Takens 1971, Gollub &
Swinney 1975) are flagged [unverified — model knowledge] this session, but
the underlying claim (low-dimensional chaos established in Taylor-Couette
transitional flow, no single turbulence-wide predictability horizon
analogous to the atmosphere's) is a genuine, well-known result independent
of this session's citation-reading gap. Score 3 is the correct band; the
citation-verification debt is already flagged in provenance and is a
citation-check matter, not a consistency-scoring one. **No issue** (for
this check).

### criticality = 3, mechanism_status: established
This is the entry's most delicate column. Two sub-issues:
1. Per `filling_rules.soc-two-claims` and the anchor's explicit two-claim
   structure, event-statistics and mechanism status must be scored/recorded
   separately. The entry does record `mechanism_status: established` but
   does not explicitly restate the event-statistics half of the claim in
   the same terms the anchor scale uses ("power-law/scale-invariant EVENT
   statistics... well established") — it leans entirely on the DP-class
   assignment (which does imply scale-invariant critical scaling of the
   turbulent-fraction order parameter near Re_c, a legitimate "event
   statistics"-adjacent claim distinct from avalanche-size statistics) but
   never states this explicitly as satisfying the column's first sub-claim.
2. Cross-column tension: `extreme_event_statistics` for this same entry
   reports a **negative** power-law finding (Poisson-like puff lifetimes,
   Avila et al. 2011) for the *subcritical/transitional* regime, while
   `criticality`'s DP claim (Lemoult 2016, Sano & Tamai 2016) concerns a
   different flow geometry/regime (Couette/channel, large-domain/long-time
   limit). These are not strictly contradictory (different
   experiments/regimes), and the entry's own `tipping_transitions` section
   explicitly discloses the parallel tension between the bistable-puff
   picture and the continuous-DP-transition picture — but `criticality`'s
   own justification does not cross-reference that disclosure, leaving a
   reader to reconcile two adjacent columns' seemingly opposed evidence
   unaided. **NOTE**: add a one-line cross-reference from criticality to
   the tipping_transitions disclosure (or vice versa) so the two negative/
   positive findings in the same literature are visibly reconciled in one
   place, per the catalog's own stated practice of "recording the tension
   rather than silently resolving it."
Score of 3 itself (rather than 2, held below 4 for unrecovered exponents)
is a reasonable, well-argued placement given the two-hit, independent-
literature mechanism claim; this is not a blocking error.

### extreme_event_statistics
`measurand_type: temporal-event` present, matches filling_rules.
Recorded as a genuine negative result rather than omitted, consistent with
the catalog's practice (cf. the-internet's honest negative on cascade
statistics). **No issue.**

### tipping_transitions = 2
Matches the `single-modeled-mechanism-is-2` boundary clarification
(tropical-cyclones' RI + ERC precedent) closely: one specific, formally
modeled bistability (Avila's Re_c) = 2. The disclosed tension with the DP
literature is handled appropriately (recorded, not silently resolved), per
the catalog's stated practice for open framing tensions. **No issue.**

### memory_hysteresis = 1 — BLOCKER
The entry's own justification text describes "a finite basin of
coexistence (laminar and turbulent states can coexist **at the same Re**
depending on initial conditions) — a relaxation-memory effect" and then
scores this at anchor level 1. But the memory_hysteresis scale's own text
is explicit that level 1 requires "**No multi-stability**, no structural
scarring, no path-dependent branching," while level 3 is defined almost
word-for-word as the phenomenon just described: "the **same forcing level**
yields **different steady states** depending on the direction/history of
forcing" (and level 2 — "two different histories reaching the 'same'
macro-forcing produce measurably different states... but the system still
has a single global attractor" — is the floor for this evidence, not the
ceiling). The entry describes textbook bistability (same control parameter,
divergent outcome by initial condition) and then denies it counts as "a
true bistable hysteresis loop" in the same breath. This is a direct
contradiction between the cited evidence and the scale text used to score
it — the anchor-contradiction category this check is instructed to flag as
a blocker. **BLOCKER**: rescore to at least level 2 (path-dependence over
an intermediate timescale, single eventual global attractor across the
full Re range) or level 3 (if the coexistence basin is genuinely a stable,
non-transient multistability within the transitional Re band, which is
what the transitional-turbulence literature — puff/slug coexistence with
laminar flow at fixed Re, e.g. Avila et al. 2011's own subject matter —
generally supports), with justification rewritten to match whichever level
is actually being claimed.

### information_processing = 0
Matches the stars/tropical-cyclones canonical-0 reasoning exactly: pure
physical transport, Re_c is a bifurcation not a detection event. **No
issue.**

### adaptive_capacity = 0
Matches stars/planetary-climate canonical-0 reasoning: fixed Navier-Stokes
physics, no component revises its response function. **No issue.**

### variation_selection = absent
Consistent categorical call, justified. **No issue.**

### emergence = 3
Matches the convection-cells/tropical-cyclones anchor band (formalized
order parameter doing real explanatory/predictive work, held below 4 per
the `effective-theory-quality-gates-3` boundary clarification's spirit).
One wording issue: the justification says the K41 theory is scored "one
step above the tropical-cyclones anchor's 3-scoring reasoning... but held
below 4," which is confusingly worded — both entries score 3, so "one step
above" a same-scored anchor reads as if implying a higher score before
snapping back down. **NOTE**: rephrase for clarity; no scoring error (both
are legitimately 3).

### self_organization = 4
Matches the tropical-cyclones/river-networks/languages top-score
reasoning (canonical dissipative structure, nothing pre-specifies the
eddy hierarchy or critical exponents). **No issue.**

### robustness_resilience = 2 — FIX (level tag)
Score itself is defensible and matches the anchor's level-2 text
("moderate... known event classes within its normal environment can
destroy or permanently degrade it," matching the entry's Re_c-crossing
argument) reasonably well. However, this column's anchor file states
explicitly, as a `does_not_count` rule: "CLASS-level persistence is not
EXEMPLAR-level robustness... State the level explicitly (**level:
exemplar(<name>) is the default for this column, per D14**)." Every single
worked anchor in robustness_resilience.yaml (stars/"the Sun",
tropical-cyclones/"Katrina", power-grids/ERCOT, the-internet, languages/
English) is tagged at the named-exemplar level, never bare class-general.
turbulent-flows scores this column at `level: class-general` with no
exemplar named and no justification given for departing from the column's
stated default convention. The entry's broader scoping note argues for
class-general scoring throughout (a defensible design choice given the
regime-not-instance framing), but that global argument is never connected
back to this specific column's explicit D14 default, which the consistency
checker is instructed to enforce. **FIX**: either add an explicit
one-sentence justification for why turbulent-flows overrides this column's
stated exemplar-level default (e.g., "scored at the regime level because,
unlike a single storm instance, no single named flow is the class's
privileged robustness exemplar"), or rescore per named exemplar (e.g.,
transitional pipe flow specifically, robustness of the turbulent state to
routine Re perturbations) to match the convention every other entry in the
catalog uses for this column.

### cascade_susceptibility = 0
Matches the stars floor-anchor reasoning exactly (no component-to-component
failure-propagation literature; the cascade phenomenon captured elsewhere
in the panel). **No issue.**

### modularity = 1 — NOTE (citation precision)
Score and reasoning closely track the stars anchor (score 1: weak,
transient, gradational lateral structure — granulation cells there, puffs/
coherent structures here). The justification states this is "the same
reasoning as the tropical-cyclones anchor's score of 1 for convective
cells/rainbands" — verified against data/classes/tropical-cyclones.yaml,
this score and reasoning are real (line 166-175 of that file) and match
closely, but tropical-cyclones is **not** among modularity.yaml's worked
anchors (only stars, river-networks, cities, the-internet, power-grids,
languages appear there). Calling it "the anchor" overstates its status —
it is a comparably-scored verified entry, not a canonical worked anchor.
**NOTE**: reword to "the tropical-cyclones entry's score of 1" rather than
"the tropical-cyclones anchor," for precision (the comparison itself is
sound and the score of 1 stands).

### hierarchy_depth = 3
Counting convention is written out explicitly (parcels as atoms -> 1 ->
2 -> 3), satisfying panel-spec's requirement that the convention be
declared per entry given this column's flagged high commensurability
risk. No cross-entry anchor exists to compare directly (extended-status,
no anchors/*.yaml file), so this is a plausibility rather than consistency
matter. **No issue** for this check.

## Filling-rules audit

- **no-guessing**: temporal_correlation correctly left `unknown` rather than
  stretched. Compliant.
- **power-law-rigor**: fractal_dimension_spatial and energy_rate_density's
  epsilon figures carry `evidence_status: measured-untested` rather than a
  bare measured claim; extreme_event_statistics records an explicit
  negative power-law result. Compliant.
- **soc-two-claims**: criticality separates event-statistics and mechanism
  claims via `mechanism_status: established`, though see the note above
  about making the event-statistics half more explicit. Substantially
  compliant.
- **no-market-chaos**: not applicable to this entry.
- **measurand-required**: extreme_event_statistics, temporal_correlation,
  and fractal_dimension_spatial all name their measurand explicitly.
  Compliant.
- **atomicity-convention**: declared in the scoping note (fluid parcels at
  the flow's own integral/Kolmogorov length scale), explicitly cross-
  referenced against the tropical-cyclones/convection-cells precedent.
  Compliant.
- **interaction-typing**: three types individuated by mechanism (momentum
  transfer, nonlinear advection, viscous dissipation), closure justified by
  appeal to the fixed Navier-Stokes alphabet, matching the tropical-
  cyclones anchor's own closed-alphabet reasoning. Compliant.

## Level-tag audit

All 30 attributes are tagged `level: class-general`, consistent with the
entry's scoping note (the geophysical exemplar is explicitly named but NOT
scored, deferred to weather-systems/ocean-circulation). The one column
where this is a live issue is `robustness_resilience` (see FIX above),
whose own anchor file states an exemplar-level default; every other
column's anchor file either has no stated per-entry-level default or (for
columns like modularity/nonlinearity) treats class-general as the norm.

## Summary of findings

1 blocker (memory_hysteresis anchor-scale contradiction), 2 fixes
(feedback loop-list validity; robustness_resilience level-tag convention),
2 notes (criticality/tipping_transitions cross-reference; modularity
citation wording; emergence wording — folded into notes).
