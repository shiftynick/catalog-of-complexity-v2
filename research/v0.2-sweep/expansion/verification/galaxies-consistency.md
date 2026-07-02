# Consistency check — galaxies.yaml

Checker: consistency checker (commensurability enforcer). Session date: 2026-07-02.
Scope: audit every rubric/hybrid score in `data/classes/galaxies.yaml` against the
15 worked anchor files in `schema/anchors/*.yaml`, audit all filling_rules
compliance, audit every `level` tag, and cross-check against verified entries in
`data/classes/` (principally stars.yaml, planetary-climate.yaml, languages.yaml,
tropical-cyclones.yaml, river-networks.yaml, financial-markets.yaml). No edits
made to the entry or any reference file, per task instructions.

Galaxies has **no worked anchor of its own** in any of the 15 `schema/anchors/`
files (confirmed by direct inspection of all 15 files this session) — this
matches the drafting agent's own provenance note. Every rubric/hybrid score is
therefore audited against the scale text plus the nearest worked comparator(s)
the entry itself cites (predominantly stars, tropical-cyclones, and
planetary-climate — the catalog's other field/continuum-dominated,
high-decentralization, non-adaptive physical systems).

---

## Column-by-column audit

### GROUP A — Identity & scale

**spatial_extent** (quantitative, exemplar(milky-way)). Value/method/detail
block is internally consistent; the two disk-diameter figures (MW ~26.8 kpc,
M31 ~46.6-67 kpc) are correctly flagged `measured-untested` and the "1 kpc =
3.0857e19 m" conversion note is correct order-of-magnitude arithmetic
(26.8 kpc = 8.27e20 m, consistent with the "~8.3e20 m" figure given). No issue.

**characteristic_timescales** (quantitative, exemplar(milky-way)). Correctly
records the Chaisson Table-1 age (12 Gya) as a DIFFERENT measurand from the
stellar-population oldest-star age (~13.6 Gyr) rather than silently
reconciling them — this is exactly the discipline filling_rules and the
sweep report demand, and mirrors how stars.yaml/planetary-climate.yaml keep
distinct-measurand timescales separate. No issue.

**numerosity** (quantitative, class-general). The note explains why the
continuum-component half is left implicitly unknown "rather than a separate
unfilled column, since numerosity is singular per panel-spec" — this is an
accurate reading of panel-spec.yaml (numerosity has no substructure for
multiple part types the way component_ontology does; component_ontology is
where the multi-part breakdown belongs, and it is filled out there). Consistent
with planetary-climate's parallel treatment (its own field/continuum layer has
no declared parcel-count convention either, cited directly here). No issue.

**instance_population** (quantitative, class-general). Conselice et al. (2016)
figure correctly carries `measured-disputed` rather than `measured`, with the
paper's own ~10x model-inference caveat stated in the note — this is the
correct evidence_status per panel-spec's definition ("published but
statistically or mechanistically contested") and matches the sweep report's
explicit recommendation. No issue.

**component_ontology** (structured, class-general) / **scoping_note**
(atomicity). This is the entry's central editorial judgment call and the
one most worth auditing hard, per the drafting agent's own flag.

- Cross-checked against languages.yaml's dual ontology (speakers +
  lexical/grammatical units, scoping_note lines 43-57, component_ontology
  lines 212-231): the panel-spec itself (component_ontology column
  definition, lines 143-147) names "english — dual ontology: speakers
  (agents, out-of-scope(human)) AND lexical/grammatical units (replicators),
  each with its own interaction set" as a *worked example the schema
  anticipates*. Galaxies' invocation of this precedent for its own dual
  ontology (stars for population statistics + gas/dark-matter continuum for
  large-scale dynamics) is structurally analogous: two genuinely different
  part types operating at different characteristic scales, each with its own
  interaction set (interaction_ontology lists gravitational self-binding,
  density-wave coupling, star formation, and tidal/merger interaction —
  correctly spanning both atomic types). This is a legitimate, non-arbitrary
  use of the precedent, not a stretch.
- Cross-checked against stars.yaml's single-atom convention (stars.yaml uses
  granulation cells / individual stars as its sole atom) and
  planetary-climate.yaml's single-atom convention (fluid parcels only, no
  dual ontology). Galaxies' explicit departure is justified in the scoping
  note with a specific mechanistic reason (galaxy-characteristic dynamics —
  rotation curves, spiral density waves, mergers — are not resolved
  star-by-star in either observation or N-body/SPH simulation practice,
  unlike stars.yaml's finer atom, which IS how stellar-interior dynamics are
  actually resolved). This reasoning is sound and is not merely asserted —
  it ties the atom choice to `filling_rules.atomicity-convention`'s own test
  ("the lowest-level components at which the system's CHARACTERISTIC
  dynamics operate"). No inconsistency found; this survives audit.
- One thing worth flagging as a **note**, not a fix: the "individual stars
  (and star-forming molecular clouds)" atomic-part row and the "gas/
  dark-matter continuum" row are described as two PART TYPES within one
  component_ontology list (structurally correct per languages.yaml's own
  precedent, which does the same). However, unlike languages.yaml — which
  gives each atomic type its own explicit numerosity figure inside
  component_ontology.parts[].count_oom (speakers ~1.53e9; lexical units
  ~1e5-1e6) — galaxies' second part type's count_oom is `unknown`, which is
  legal (filling_rules.no-guessing) but means the entry's numerosity column
  is effectively single-valued (stellar count only) rather than a genuine
  dual-population figure the way languages.yaml's numerosity column reports
  BOTH atomic types' counts side by side. This is not an error — it is
  correctly and explicitly caveated in the numerosity note — but it means
  the dual ontology is asymmetric in practice (one atom has real numbers,
  the other doesn't), worth a coverage-check follow-up, not a consistency
  blocker.

**energy_rate_density** (quantitative, exemplar(milky-way)). Value 0.5 erg
s^-1 g^-1, Chaisson Table 1, cross-checked directly against stars.yaml's own
energy_rate_density block (Sun = 2 erg/s/g, same paper, same table) — the
entry's claim that the Milky Way anchors the low end below the Sun is
verified consistent with stars.yaml's own recorded value. `evidence_status:
measured` / `confidence: high` is justified given the described full-PDF
primary read and independent cross-check against two body-text callouts.
No issue.

### GROUP B — Structure

**interaction_topology** (categorical, class-general): `field/continuum`.
Directly matches planetary-climate.yaml's own value and reasoning for its
fluid layer, and is consistent with the entry's own dual-ontology framing
(the discrete stellar atom still interacts via a shared field, not
pairwise edges, so field/continuum is correctly the single value even
under the dual atom). No issue.

**interaction_ontology** (structured, class-general). Four types listed
(gravitational self-binding, density-wave/spiral-arm coupling, star
formation/feedback, tidal/merger interaction), `type_count: 4`,
`alphabet_closure: closed`. Per `filling_rules.interaction-typing`
(individuation by mechanism/carrier, not outcome/sign), these four are
genuinely distinct mechanisms (not a sign-split of one mechanism), so the
count is legitimate. The `closed` verdict is justified by analogy to
stars.yaml and tropical-cyclones.yaml's own closed-alphabet claims (physics
exhausts the interaction set) — reasonable and consistent with how the
catalog treats other physics-only field/continuum systems (planetary-climate
is also closed). No issue.

**degree_distribution** (quantitative, class-general): `not-applicable`.
Correctly mirrors planetary-climate's and stars.yaml's treatment of the same
non-network topology class. **Minor note** (not unique to this entry): the
block is missing an explicit `evidence_status` field. Panel-spec's
evidence_status is "required on every value." planetary-climate.yaml's
equivalent block explicitly carries `evidence_status: qualitative`;
stars.yaml's equivalent block (line 247-251) *also* omits it — so this is a
pre-existing minor completeness gap already present in at least one verified
entry, not a galaxies-specific regression, but still worth a coverage-check
fix before promotion (add `evidence_status: not-applicable` or
`qualitative`, per river-networks.yaml's own explicit resolution of exactly
this gap, cross-entry precedent at river-networks.yaml lines 195-218).

**modularity** (rubric, class-general): score 1. Justification (fuzzy,
gradational bulge/disk/halo/spiral/bar structure, no stable partition)
matches the modularity.yaml scale's score-1 band text almost verbatim
("weak, mostly gradational structure... boundaries are fuzzy... no
community-detection algorithm or domain-expert partition finds a clearly
preferred grouping") and is explicitly benchmarked against the
tropical-cyclones/planetary-climate anchor pattern for comparable rainband/
circulation-cell gradational structure (score 1 there too, by extension —
planetary-climate.yaml itself scores modularity 1). Consistent. No issue.

**hierarchy_depth** (quantitative, class-general): value 3. Convention:
atoms (stars/clouds) -> star clusters/OB associations/GMC complexes (1) ->
large-scale structural components (arms, bar, bulge/disk/halo) (2) -> whole
galaxy system (3). This is a coherent 4-rung, 0-indexed-from-atoms ladder,
structurally identical in form to stars.yaml's (2-rung: granulation ->
supergranulation -> star) and planetary-climate.yaml's (4-rung: parcels ->
eddies -> weather systems -> circulation cells/gyres -> global system, value
4) conventions. Correctly counts levels INSIDE the entry's own boundary only
(per panel-spec's explicit instruction not to conflate this with the
part_of/contains relations block) — the galaxy-cluster/cosmic-web
containment is correctly left to `relations`, not folded into this count.
No issue.

**fractal_dimension_spatial** (quantitative, class-general): gamma~1.8
correlation-function slope. Correctly and explicitly identified as a power-law
claim subject to `filling_rules.power-law-rigor`, correctly capped at
`measured-untested` given no CSN-2009-grade fit or primary read was obtained
this sweep (one fetch attempt 403'd), and correctly distinguished from a
"single scale-free fractal across all scales" by recording the gamma~0.8
large-scale flattening explicitly — this is exactly the kind of
non-oversimplified power-law handling the filling rule requires. The
measurand is named (galaxy spatial two-point correlation function,
explicitly flagged as static-cross-sectional, not a temporal-event
distribution) consistent with `filling_rules.measurand-required`. No issue.

**decentralization** (rubric, class-general): score 4. Justification directly
invokes and matches stars.yaml's and tropical-cyclones' own decentralization
anchor language almost exactly ("nothing whose removal constitutes 'loss of
control'"), and correctly distinguishes the SMBH's local dominance from
galaxy-scale steering (matching decentralization.yaml's does_not_count
clause: "a controller must be a component that steers OTHER components" —
the SMBH does not steer galaxy-scale dynamics). Consistent with stars.yaml's
own score of 4 (same anchor family, same reasoning). No issue.

### GROUP C — Dynamics

**nonlinearity** (rubric, class-general): score 3. Justification explicitly
benchmarks against stars.yaml's own nonlinearity anchor (score 3: nonlinear
core physics sets structure without producing large-amplitude nonlinear
regime shifts at the whole-system scale) and gives a parallel argument
(N-body self-gravity is nonlinear; density-wave and bar formation are
nonlinear instabilities; but bulk gravitational equilibrium is comparatively
stable over many dynamical times). This tracks the nonlinearity.yaml scale's
score-3 text ("nonlinear interactions are central... required to reproduce
observed phenomenology") without over-claiming score 4 (reserved for
"pervasive AND load-bearing at multiple scales simultaneously," which the
justification correctly declines to claim, unlike tropical-cyclones/
financial-markets which ARE in continuous large-amplitude nonlinear
upheaval). Consistent, appropriately differentiated from the score-4 anchors.
No issue.

**feedback** (rubric, class-general): score 3, three loops (star-formation/
feedback regulation [balancing], spiral density-wave self-maintenance
[reinforcing], bar-driven gas inflow [reinforcing, episodic]). Per
feedback.yaml's own binding notes ("every anchor at score >=2 MUST include
the structured loop list... name, sign, one-sentence mechanism") — this
requirement is satisfied; all three loops name mechanism and sign. The score-3
justification correctly distinguishes from a score-4 profile (no single
totalizing loop the way WISHE is for a hurricane) — this is a genuine,
non-trivial distinction properly reasoned, not just asserted. Consistent with
the scale text's score-3 band ("multiple feedback loops... continuously
active and required to explain characteristic dynamics"). No issue.

**openness_dissipation** (hybrid, exemplar(milky-way)): score 2. This is the
column most worth scrutinizing given its strict "LITERAL physical flux only"
does_not_count rule. The justification correctly uses literal star-formation
mass-throughput figures (~1-2 Msun/yr, up to ~4-8 Msun/yr) rather than any
metaphorical disequilibrium language, satisfying the binding rule. The score-2
placement (vs. the Sun's 4, tropical-cyclones' 4, cities' 3) is justified by
noting the galaxy's bulk stellar mass/rotation-curve structure would persist
for a full dynamical time (hundreds of Myr) even if star formation stopped —
i.e., the flux is NOT the thing continuously maintaining the galaxy's defining
gravitational structure the way fusion output literally IS the Sun's
structure-maintaining mechanism, or ocean heat literally IS the hurricane's.
This tracks the openness_dissipation.yaml scale's score-2 band text almost
exactly ("continuous, non-trivial throughput... but modest relative to
comparably-sized systems in the catalog, or dissipation is a secondary rather
than defining feature") and correctly cross-references the low Chaisson Phi_m
(0.5, lowest of any Chaisson-tabulated system) as corroborating, not
mechanically identical, evidence — matching the anchor notes' explicit
warning not to conflate the two columns. Well-reasoned, internally
consistent, appropriately distinguished from the Sun's score-4 case despite
both drawing on the same Chaisson data. No issue.

**chaos_sensitivity** (rubric, class-general): score 2, confidence low. This
column has the strongest, most specific binding rules in the entire panel
(chaos_sensitivity.yaml: scores of 3/4 require a specific Lyapunov/doubling-
time figure; score 2 requires genuine documented unpredictability with
"mixed, contested, or drawn from a small/non-replicated literature"). The
galaxies justification cites N-body orbital chaos as a "textbook source of
exponential sensitivity" — this is a well-established finding in galactic
dynamics (non-integrable potentials, box/chaotic orbit families are standard
in the field) — but explicitly and correctly declines to claim a
class-level, real-world predictability-horizon figure, which is exactly what
would be required for score 3 or 4. The justification's own comparison to
"the stars anchor's own contested-but-engaged 2" (stars.yaml scores
chaos_sensitivity 2, for the sunspot-cycle chaos-vs-stochastic-forcing
debate) is a reasonable analogy in KIND (genuine scientific engagement,
contested mechanism-level status) though NOT in the same specific debate —
worth flagging as a **note**: the stars anchor's score-2 rests on a
genuinely CONTESTED literature (chaotic vs. stochastic dynamo explanations
actively debate each other for the SAME phenomenon), whereas galaxies'
score-2 justification describes more of an UNINVESTIGATED gap (no targeted
search performed) than a contested finding — chaos_sensitivity.yaml's own
scale text distinguishes score 2's "contested... reflects genuine scientific
uncertainty, NOT merely 'we didn't check'" from lower scores. The
justification is self-aware about this (states explicitly "pending a
targeted literature search") and the drafting agent's own top-uncertainty
flags this column for follow-up. This is a **fix**-level finding: the
"genuine scientific uncertainty, not merely we didn't check" bar in the
anchor's own does_not_count-adjacent scale text is arguably not cleanly met
by "no search was performed to find a horizon figure" — the honest reading
of the evidence presented (orbital chaos is real and well-established;
class-level structural predictability-horizon status is simply unresearched,
not actively debated) is closer to a score-1/2 boundary case than a clean 2.
Given the entry's own low-confidence flag and explicit acknowledgment, this
is a fix worth a follow-up literature pass rather than a blocker (the entry
already flags it as such under provenance.flags), but the checker's
independent read agrees the current text conflates "well-established orbit-
level chaos, unsearched at galaxy-scale" with "contested at galaxy-scale" in
a way that should be tightened before promotion past draft.

**criticality** (hybrid, class-general): score 0, `mechanism_status: none`.
Verified against criticality.yaml's `boundary_clarifications` in full: (a)
`events-not-structure` — correctly applied; the static correlation-function
slope is correctly NOT counted here and is correctly instead recorded under
fractal_dimension_spatial, exactly per the rule's own worked precedent. (b)
`published-claim-required` — correctly applied; the entry states no
published SOC/critical-point claim for galaxy-internal dynamics was located,
and does not claim informal/observed heavy-tailedness either, so it does not
even clear level 1, let alone the mechanism-alone level-1 floor. (c) score
0 with `mechanism_status: none` is the technically correct enum pairing
(matches tropical-cyclones', the-internet's, cities', languages',
global-economy's, ocean-circulation's, and world-wide-web's own
`mechanism_status: none` usage — a real, catalog-wide-consistent enum value,
confirmed by direct grep across all `data/classes/*.yaml`). Consistent. No
issue.

**extreme_event_statistics** (quantitative, class-general): `unknown`.
Correctly distinguishes the static correlation-function slope (recorded
elsewhere) from a genuine temporal-event heavy-tail claim, and correctly
records `unknown` rather than a considered negative, per
`filling_rules.no-guessing` and identical to planetary-climate's own
class-level treatment of the same column (also `unknown`, also explicitly
distinguishing its own sub-phenomena's tail statistics as belonging to
sibling entries rather than being borrowed here). Consistent cross-entry
pattern. No issue.

**temporal_correlation** (quantitative, class-general): `unknown`, no
measurand named. This is legal (`unknown` never requires a measurand under
`filling_rules.measurand-required`, which only binds measurands to filled
signal-relative quantities) but is thinner than planetary-climate's own
`unknown` entry for the same column, which at least names a candidate
measurand (global mean surface temperature record) and cites a specific
unverified lead (Koscielny-Bunde et al. 1998) even while declining to enter a
number. Galaxies' version is a bare "not investigated this sweep." This is
not a rule violation — `unknown` is always legal without further
justification — but is a **note**-level completeness gap relative to the
cross-entry standard the checker sees elsewhere in the panel (a plausible
measurand — e.g., star-formation-rate history, or long-range correlation in
rotation-curve residuals — could have been named even while leaving the
value unknown).

**tipping_transitions** (hybrid, exemplar(milky-way)): score 1. This is the
column with a specific, catalog-wide-calibrated 1/2 boundary rule
(`single-modeled-mechanism-is-2`: "one named mechanism with a proposed
threshold or bifurcation analysis in the primary literature = 2... informal
or in-passing speculation without dedicated study = 1"). The entry's own
justification is explicit and correct on exactly this point: it states the
MW-Andromeda merger is "a real, named, modeled transition" but that no
"dedicated bifurcation/threshold-style formal treatment" was located this
sweep (the merger is treated as a simulated N-body outcome, not framed as
crossing a specific formal threshold) — this is a faithful, rule-literate
application of the boundary clarification, correctly landing at 1 rather
than 2 despite having a well-known, well-modeled, named transition
available that a less careful drafting pass might have scored 2 on fame
alone. This is one of the entry's more careful pieces of rule-following.
Consistent. No issue.

### GROUP D — Information & memory

**memory_hysteresis** (hybrid, class-general): score 2. Justification (path-
dependence of present-day morphology on specific merger/accretion history;
disk-vs-elliptical divergence from otherwise-similar present-day mass/
environment) matches the memory_hysteresis.yaml scale's score-2 band text
closely ("demonstrable path-dependence over an intermediate-to-long
timescale... system still has a single global attractor... no published
bistability or hysteresis-loop measurement"). Correctly capped below 3 for
the explicitly correct reason (no published quantitative hysteresis LOOP
width, unlike AMOC's 0.4 Sv) — this is exactly the score-2-vs-3 discriminator
the anchor scale specifies. Consistent, well-reasoned. No issue.

**information_processing** (rubric, class-general): score 0. Justification
directly and correctly invokes the "canonical-0 reasoning" shared by stars.yaml
and tropical-cyclones (pure physical transport, no detection-transmission-
response structure) and correctly applies the column's central does_not_count
exclusion to star-formation feedback specifically ("nothing in a galaxy
'reads' gas density as a symbol"). This is exactly the discipline
information_processing.yaml's notes flag as most at risk of contamination,
and the entry avoids it cleanly. Consistent with stars.yaml's own score of 0
for the analogous claim. No issue.

### GROUP E — Adaptation

**adaptive_capacity** (rubric, class-general): score 0. Matches stars.yaml's
and planetary-climate.yaml's own score-0 reasoning nearly verbatim (fixed
physics, regulation-not-adaptation distinction correctly applied to
star-formation feedback and spiral self-maintenance, which are correctly
NOT double-counted as adaptation despite scoring non-trivially under
feedback/self_organization). Consistent with the adaptive_capacity.yaml
anchor family (stars=0, planetary-climate=0) and the same
regulation-vs-adaptation discipline that column's does_not_count block
requires. No issue.

**variation_selection** (categorical, class-general): `absent`. Value is
from the panel-spec's controlled vocabulary [present, absent, contested] and
the justification (no VSR dynamics among stars/gas parcels) is a direct,
correctly-reasoned negative consistent with the class's adaptive_capacity=0
and information_processing=0 profile — this is the expected joint pattern
for a "complex-physical, non-CAS" system per panel-spec's own adaptive_capacity
definition note. No issue.

### GROUP F — Emergence & robustness

**emergence** (rubric, class-general): score 3. Justification correctly
applies the `effective-theory-quality-gates-3` boundary clarification: it
names formalized, independently load-bearing macro-theory (rotation curve as
observational basis for dark matter; density-wave pattern speed/pitch angle;
the Hubble morphological sequence as a genuine working taxonomy) that IS the
actual explanatory vocabulary of the field, not a semi-formalized/contested
effective theory the way the Sun's dynamo theory is (which the emergence
anchor explicitly holds at 2 for exactly the contested-parameters reason).
The comparison to tropical-cyclones' and planetary-climate's own score-3
justifications (potential-intensity theory; circulation-cell/tipping-element
frameworks) is apt and structurally parallel. Correctly held below 4 with a
specific, non-generic reason (N-body simulation increasingly resolves the
relevant dynamics from particle-level first principles, narrowing — though
not eliminating — the practical necessity of the macro-theory, unlike price
formation which has no tractable micro-alternative even in principle) —
this directly engages the emergence.yaml notes' own criterion for reserving
4 to cases with no tractable micro-level alternative. Consistent, careful.
No issue.

**self_organization** (rubric, class-general): score 4. No worked anchor for
galaxies exists (as the entry itself states), so this is scored against the
scale text with tropical-cyclones (score 4) as the nearest comparator. The
justification correctly applies the self_organization.yaml does_not_count
clause distinguishing external forcing/boundary conditions (cosmological
initial density perturbations) from genuine templating — "forcing merely
powers it" vs. "a template specifies the FORM" is exactly the distinction the
anchor draws, and the entry states explicitly that initial conditions are
forcing/boundary conditions, not a blueprint for spiral pitch angle, bar
strength, or morphological type. This is a correct, rule-literate
application, not a lazy top-of-scale default. Consistent with
tropical-cyclones=4, river-networks=4, languages=4, and clearly distinguished
from the-internet=2/power-grids=1 (which have designed skeletons galaxies
lacks). No issue.

**robustness_resilience** (rubric, exemplar(milky-way)): score 3.
Justification is structurally almost identical to planetary-climate.yaml's
own robustness_resilience block (score 3, same "known destructive event
classes... caps at 3 rather than 4" reasoning, explicitly cited by name in
the galaxies justification itself, drawing the parallel to
financial-markets and planetary-climate). The specific perturbations named
(minor satellite accretion — Sagittarius dwarf, Gaia-Enceladus merger; tidal
interactions; bar formation/buckling) versus the one qualitatively different
class (a major comparable-mass merger, i.e. Andromeda) is a faithful
application of the normalization rule (robustness judged against the
system's OWN characteristic perturbation spectrum) and correctly
cross-references the entry's own tipping_transitions finding rather than
treating the two columns independently. Consistent, well cross-referenced.
No issue.

**cascade_susceptibility** (hybrid, class-general): score 0. Justification
directly parallels stars.yaml's own score-0 floor-anchor reasoning nearly
verbatim (individually triggered, locally damped star-formation/supernova
events, no failure-propagation mechanism through otherwise-unrelated regions)
and explicitly and correctly notes that a system can score non-trivially on
nonlinearity (3) and feedback (3) while still scoring 0 here, because this
column specifically requires component-to-component failure PROPAGATION
through a coupled system — exactly the distinction cascade_susceptibility.yaml's
does_not_count block requires verifiers to check for. Consistent with the
stars.yaml floor anchor. No issue.

---

## Filling-rules compliance audit

- **no-guessing**: no fabricated values found; every `unknown` value
  (temporal_correlation, extreme_event_statistics, and the continuum
  component's count_oom) is legally and explicitly justified rather than
  interpolated.
- **power-law-rigor**: two power-law-adjacent claims in this entry
  (fractal_dimension_spatial's gamma~1.8 correlation slope; the tail-behavior
  language implicitly touched in criticality/extreme_event_statistics) are
  both correctly handled — fractal_dimension_spatial is explicitly capped at
  `measured-untested` with the rule cited by name, and no power-law claim is
  smuggled into criticality or extreme_event_statistics without CSN-grade
  support (both correctly resolve to 0/unknown instead).
- **soc-two-claims**: correctly kept separate; criticality's event-statistics
  and mechanism_status subclaims are both explicitly addressed and both
  resolve to none/absent, not averaged.
- **no-market-chaos**: not directly triggered (galaxies is not a market), but
  the entry's chaos_sensitivity write-up shows awareness of the same
  discipline the rule embodies (does not claim more than the evidence
  supports).
- **measurand-required**: satisfied everywhere a signal-relative quantity is
  filled (fractal_dimension_spatial names its measurand explicitly and
  distinguishes it from a temporal-event type; extreme_event_statistics names
  its candidate measurand even while unknown). temporal_correlation is the
  one column left with NO measurand named — legal under the rule (which only
  binds when a value is being filled, not when `unknown`), but flagged above
  as a completeness note relative to cross-entry practice.
- **level-required**: every attribute carries an explicit `level` tag; spot-
  checked all 24 attribute blocks — all present and correctly formed
  (class-general vs. exemplar(milky-way), consistent with panel-spec's D14
  convention). No missing or malformed level tags found.
- **atomicity-convention**: addressed at length above under component_ontology
  / scoping_note — the dual-ontology departure from stars.yaml is
  substantively justified, not merely declared, and ties directly to the
  rule's own "lowest-level components at which CHARACTERISTIC dynamics
  operate" test.
- **interaction-typing**: the four listed interaction types in
  interaction_ontology are individuated by mechanism/carrier, not by sign or
  outcome, satisfying the rule; `type_count: 4` and `alphabet_closure: closed`
  are both defensible verdicts consistent with how the catalog treats other
  physics-only field/continuum systems.

## Level-tag audit

All `level` values were spot-checked against the D14 convention
(class-general | exemplar(<id>)). All 24 attribute blocks carry a
syntactically valid level tag; the named exemplar id (`milky-way`) matches
the id declared in the entry's own `exemplars` list. No orphaned or
misspelled exemplar references found.

## Cross-entry coherence summary

Galaxies sits comfortably in the same structural family as stars.yaml and
planetary-climate.yaml (field/continuum interaction_topology, decentralization
4, adaptive_capacity 0, information_processing 0, cascade_susceptibility 0,
variation_selection absent) while being correctly differentiated from them on
columns where the entry's own reasoning earns the difference (nonlinearity 3
vs. planetary-climate's 4; feedback 3 vs. planetary-climate's 4; criticality 0
vs. earthquake-fault-systems' 2 — all differences are argued, not asserted).
The dual-ontology atomicity choice is a genuine, defensible departure from
stars.yaml's single-atom convention, directly modeled on the schema's own
languages.yaml precedent, and does not introduce any detected cross-entry
incommensurability.

---

## Summary of flags

| Column | Severity | Finding |
|---|---|---|
| chaos_sensitivity | fix | Score-2 justification conflates "well-established orbital chaos, unsearched at galaxy/class-level" with the anchor scale's score-2 requirement of "genuine scientific uncertainty... not merely 'we didn't check.'" A targeted literature pass (as the entry's own flag already recommends) should either surface a genuinely contested galaxy-scale finding to justify 2, or the score should move to 1 pending that search. |
| degree_distribution | note | Missing `evidence_status` field (panel-spec: required on every value). Same gap pre-exists in stars.yaml's equivalent block; river-networks.yaml shows the correct fix pattern (`evidence_status: not-applicable`, an explicitly legal value per that entry's own precedent-setting note). |
| temporal_correlation | note | No candidate measurand named even though the value is unknown; planetary-climate's parallel `unknown` entry names a candidate measurand and an unverified lead. Not a rule violation, but thinner than the cross-entry standard. |
| component_ontology | note | The dual ontology is legitimate and well-justified (languages.yaml precedent correctly applied), but is asymmetric in practice: only the stellar atomic type carries a real count_oom figure; the continuum atomic type's count_oom is `unknown` (legally, but making the "dual" ontology numerically one-sided). Worth a coverage-check note, not a blocker. |

No blocker-severity findings. No fabricated values, miscited sources, or
anchor contradictions were found. One fix-severity finding (chaos_sensitivity)
concerns score-justification rigor at the score-1/2 boundary, not a factual
error; it is already self-flagged by the drafting agent as needing a
follow-up literature pass, and this check concurs with and sharpens that
self-assessment.
