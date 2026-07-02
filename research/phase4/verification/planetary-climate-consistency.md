# Consistency Check — planetary-climate

Checker: consistency-checker (commensurability enforcer). Scope: audit every rubric/hybrid
score in `data/classes/planetary-climate.yaml` against `schema/anchors/*.yaml` (15 files),
audit the six `filling_rules`, audit all `level` tags, and cross-check against the two
verified entries (`tropical-cyclones`, `financial-markets`) for cross-entry coherence.
No edits made to the entry or any reference file, per instructions.

Reference set read in full: schema/panel-spec.yaml; docs/schema.md; docs/roster.md;
research/phase4/planetary-climate-sources.md; all 15 files in schema/anchors/; both
verified entries in full.

---

## 1. Directly-anchored columns (planetary-climate is a worked anchor)

Five columns carry a direct planetary-climate anchor in schema/anchors/*.yaml. Checked
word-for-word against the entry's score, justification substance, evidence_status,
sources, and level.

| column | anchor score | entry score | anchor evidence_status | entry evidence_status | verdict |
|---|---|---|---|---|---|
| feedback | 4 | 4 | qualitative | qualitative | MATCH — loop list (water-vapor, ice-albedo, Planck, cloud) reproduced with identical sign/mechanism content |
| chaos_sensitivity | 3 | 3 | qualitative | measured | **evidence_status drift** — anchor file says `qualitative`; entry says `measured`, citing charney1966 + mdpi2024-predictability. See finding C1. |
| tipping_transitions | 4 | 4 | measured | measured | MATCH — 16-element count, AMOC 1.4-8°C, van Westen 0.4 Sv all reproduced correctly |
| memory_hysteresis | 4 | 4 | measured-disputed | measured-disputed | MATCH — AMOC hysteresis width, model-derived flag, ice-sheet bistability all reproduced |
| adaptive_capacity | 0 | 0 | qualitative | qualitative | MATCH — "feedbacks operate, they do not learn" reproduced near-verbatim |

Level tags: feedback/chaos_sensitivity/adaptive_capacity are `class-general` in both the
anchor and the entry (consistent — these are class-level claims about climate physics
generally, not Earth-specific measurements). tipping_transitions and memory_hysteresis
are tagged `exemplar(earth)` in the entry, which is correct and arguably *more* precise
than the anchor file's bare "Earth" exemplar label — the AMOC/16-element evidence is
genuinely Earth-specific (the entry's own scoping_note flags this explicitly), so this
is a good-faith improvement, not a drift.

**Finding C1 (fix):** `chaos_sensitivity` evidence_status. The chaos_sensitivity.yaml
anchor for planetary-climate is explicitly `evidence_status: qualitative` (score 3
matches the scale's own definition: "broadly accepted chaotic character... without an
established real-world quantitative horizon at the climate-system level" — i.e., no
number attaches to the *climate-level* score itself). The entry instead sets
`evidence_status: measured`, justified by citing the ~2-week horizon — but the entry's
own justification text says that horizon "belongs to the WEATHER subsystem, not the
climate system scored here." Citing a measured number that the justification itself
says doesn't apply to the scored system, while still claiming evidence_status: measured
for the class-level score, is an internal contradiction. The anchor file's own
`evidence_status: qualitative` is the more defensible label given the entry's own
argument. This is a real drift from the anchor, not just a stylistic variance — flag for
correction (evidence_status: measured -> qualitative, or restate the justification to
own the "measured" label consistently).

---

## 2. Columns anchored via a sibling system (analogy reasoning), checked against scale text

| column | entry score | analogized to | verdict |
|---|---|---|---|
| decentralization | 4 | stars (4) + tropical-cyclones (4, class-analogous) | MATCH — "no component steers the others," forcing-not-control clause correctly invoked |
| nonlinearity | 4 | tropical-cyclones (4) | MATCH — Clausius-Clapeyron, ice-albedo, threshold monsoon/ENSO transitions correctly mapped to scale-4's "pervasive AND load-bearing at multiple scales" |
| information_processing | 0 | stars (0) + tropical-cyclones (0) | MATCH — correctly invokes does_not_count clause on ice-albedo/water-vapor feedback ("nothing reads albedo as a symbol") |
| self_organization | 4 | tropical-cyclones (4) + river-networks (4) | MATCH — "nothing specifies the form... in advance," forcing-vs-templating distinction correctly applied |
| emergence | 3 | tropical-cyclones (3) | MATCH — reasoning structure (macro-theory necessary but storm/climate-resolving models narrow that necessity) reproduced faithfully one level up |
| modularity | 1 | stars (1, granulation) + tropical-cyclones (1) | MATCH — "fuzzy, gradational... no stable preferred partition" correctly applied to Hadley/Ferrel/polar cells |
| robustness_resilience | 3 | financial-markets (3) | MATCH, well-reasoned — correctly invokes the anchor's own exemplar-level default and the "known destructive event classes" cap-at-3 logic; consistent normalization against financial-markets |
| cascade_susceptibility | 2 | power-grids (3, level-3 anchor) vs level-2 scale text | MATCH — correctly distinguishes "at least one dedicated study models/documents cascading dynamics" (2024 tipping-cascade review) from a fitted cross-event size distribution (level 3, reserved for Dobson et al.-grade blackout data); appropriately does not reach for the power-grids ceiling |
| criticality | 1 | earthquake-fault-systems (2), financial-markets (1) | **See finding C2 below — score is arguable against the scale's own OR-clause wording** |
| openness_dissipation | 3 (exemplar earth) | stars (4), tropical-cyclones (4) | Reasoned, defensible departure from the ceiling — see discussion below, no blocker |

**Finding C2 (note):** `criticality` score 1 with `mechanism_status: proposed`. The
scale's level-2 definition reads: "Power-law... statistics established... **AND/OR** a
specific self-organized-criticality or critical-point mechanism has been formally
proposed in the primary literature — but the mechanism claim is either untested or
actively contested." The entry's own justification states plainly that "a mechanism is
proposed and taken seriously in the primary literature" (Scheffer 2009, Armstrong McKay
2022's bifurcation/critical-slowing-down framework), which on the scale's literal OR
wording would satisfy level 2's mechanism clause even with weak/absent event statistics.
The entry's counter-argument — that this is a tipping/bifurcation claim, not an
SOC/criticality claim, per filling_rules.soc-two-claims, and therefore should not count
toward this column at all — is a defensible reading of the criticality/tipping_transitions
boundary (criticality.yaml's own notes support the general principle that a system can
have a sharp bifurcation with no power-law event statistics and score low here). But the
entry sets `mechanism_status: proposed` (not `none`), which is itself an acknowledgment
that a mechanism claim exists in the literature — the tropical-cyclones anchor for
this same column, by contrast, uses `mechanism_status: none` for its score-1 case
("no proposed SOC mechanism for the vortex itself"). Setting `mechanism_status: proposed`
while scoring 1 (a level nominally reserved for "no mechanism claim beyond speculation")
is an inconsistent combination within the entry's own two fields — either the mechanism
counts (push toward 2, matching the scale text) or it doesn't (mechanism_status should be
`none`, matching tropical-cyclones' contrast case). This is a plausible, arguable finding,
not a clear blocker — the entry's reasoning is transparent and defensible, but the
score/mechanism_status pairing does not cleanly survive a side-by-side reading against the
scale text or against the tropical-cyclones sibling case.

**openness_dissipation discussion (no finding):** Scored 3 (exemplar earth) against
stars' and tropical-cyclones' ceiling of 4. The entry's collapse-timescale argument
(interrupting solar flux would collapse fast weather within days-to-weeks, "comparable to,
not dramatically shorter than," the system's own fast timescale, unlike the sub-lifetime
collapse the scale's 4 requires) is a genuine, non-arbitrary distinction that engages
directly with the anchor's own text ("removing the flux causes rapid... collapse... rather
than the much-faster-than-structural-timescale collapse the anchor scale's 4 requires").
This survives a side-by-side reading; verdict PLAUSIBLE, not flagged.

---

## 3. Filling rules audit

- **power-law-rigor**: No power-law claim is entered without CSN-grade support or an
  explicit `measured-untested` label anywhere in this entry. `extreme_event_statistics`
  and `temporal_correlation` are both correctly left `unknown` rather than borrowing a
  sibling entry's exponent (tropical-cyclones' PDI alpha, e.g.) — explicitly and
  correctly cited as the reason. PASS.
- **soc-two-claims**: Explicitly invoked and correctly applied in `criticality`'s
  justification to keep the tipping-elements bifurcation literature out of the
  event-statistics claim. PASS (see Finding C2 for a residual tension in execution, not
  in principle).
- **no-market-chaos**: Not applicable to this entry (no financial-market claims made).
  N/A.
- **measurand-required**: `characteristic_timescales` entries name their measurand
  explicitly ("synoptic-scale weather system lifetime," "atmospheric forecast-skill
  limit, error-doubling"). `temporal_correlation` names its candidate measurand ("global
  mean surface temperature record... Hurst exponent / DFA") even though left unknown.
  `extreme_event_statistics` names its measurand ("tail statistics of climate-system-level
  characteristic events"). PASS.
- **level-required**: Checked programmatically — every attribute in the entry carries an
  explicit `level` field (`class-general` or `exemplar(earth)`); none omitted. PASS.
- **atomicity-convention**: Declared explicitly in the scoping_note ("fluid parcels...
  at synoptic/mesoscale-resolving scale... not molecules"), and explicitly cross-referenced
  against tropical-cyclones' own convention ("the same atomicity convention is used for
  consistency across the two entries"). Checked against tropical-cyclones' scoping_note
  ("moist air parcels at convection-resolving scale") — consistent choice, same
  fluid-parcel logic, appropriately scaled up. PASS.
- **interaction-typing**: **FAIL** — see Finding C3 below. The stated rule ("individuated
  by mechanism and carrier, not by outcome or sign") is violated by the fifth
  `interaction_ontology` entry.

**Finding C3 (fix):** `interaction_ontology` — "albedo feedback coupling" listed as a
5th interaction *type* is a mechanism/carrier vs. outcome/loop conflation, and produces
a type_count/closure claim inconsistent with the entry's own cross-reference to
tropical-cyclones. The entry's justification claims "four of these five types are shared
verbatim" with tropical-cyclones' 4-type list — arithmetically consistent (the four
physical-transport types: momentum/pressure-gradient, latent-heat/moisture, radiative
exchange, surface enthalpy flux, are indeed all present in both lists) — but the 5th
type, "albedo feedback coupling," is described in its own `mechanism` field as: "surface
reflectivity... alters absorbed shortwave radiation, which in turn alters the surface
state generating that reflectivity" — i.e., a causal *loop*, not a distinct physical
carrier. The physical carrier here is radiative exchange (already type 3); "feedback"
is precisely the causal-loop-structure concept `filling_rules.interaction-typing`
excludes from this column ("not by outcome or sign") and that the `feedback` column
(group C) is built to capture — indeed, the entry's own `feedback.loops` list already
scores "ice-albedo feedback" as one of its four loops (line 360), so the same physical
content is being credited twice under two different columns: once correctly as a
feedback loop (feedback: 4), and again, miscategorized, as if it were a fifth
independent interaction mechanism (interaction_ontology: type_count 5). Neither
tropical-cyclones nor financial-markets' interaction_ontology lists a feedback-loop-as-
type; this is a planetary-climate-specific deviation from both anchor practice and the
entry's own peer entries. Suggested fix: remove "albedo feedback coupling" from the
`types` list (fold its physical content into the existing "radiative exchange" entry's
description if useful context), correct `type_count` to 4, and adjust the justification's
"four of these five... extended with the radiative and albedo-feedback channels" framing
to no longer claim a 5th physical channel exists. This does not change `alphabet_closure`
(still correctly `closed`).

---

## 4. Schema kind (type) conformance

Checked entry `type:` tags against `panel-spec.yaml`'s `kind:` declarations for each
column. All match panel-spec except:

- `modularity` — panel-spec declares `kind: hybrid`; entry uses `type: rubric`. **This
  is NOT a planetary-climate-specific defect** — both verified reference entries
  (tropical-cyclones line 157-167, financial-markets line 168-178) make the identical
  `type: rubric` choice for modularity, and no published network-modularity Q value
  exists for any of the three entries' representations (no data to make the hybrid
  quantitative half meaningful). Recorded as a cross-entry-coherent, catalog-wide
  schema/practice drift, not a planetary-climate-specific inconsistency — note only,
  not scoped to fix in this entry alone.

All other rubric/hybrid `type:` tags (decentralization: rubric; nonlinearity: rubric;
feedback: rubric; openness_dissipation: hybrid; chaos_sensitivity: hybrid; criticality:
hybrid; tipping_transitions: hybrid; memory_hysteresis: hybrid; information_processing:
rubric; adaptive_capacity: rubric; emergence: rubric; self_organization: rubric;
robustness_resilience: rubric; cascade_susceptibility: hybrid) match panel-spec exactly.

---

## 5. Cross-entry coherence spot checks (vs. tropical-cyclones, financial-markets)

- `hierarchy_depth` convention: planetary-climate (4 levels: parcels -> eddies ->
  weather systems -> circulation cells/gyres -> whole system) is explicitly declared as
  "one level deeper than tropical-cyclones (3)" because it nests weather systems as an
  intermediate level, consistent with the `contains: [weather-systems, tropical-cyclones,
  ocean-circulation]` relation. Internally coherent; correctly respects the panel-spec's
  instruction that hierarchy_depth counts levels INSIDE the boundary while composition
  BETWEEN entries lives in `relations`. PASS.
- `interaction_topology`: `field/continuum` in both planetary-climate and
  tropical-cyclones — consistent, and explicitly cross-referenced as such. PASS.
- `variation_selection`: `absent` in both planetary-climate and tropical-cyclones, with
  near-identical justification language ("fixed physics... no differential replication
  or selection"). Correctly contrasts with financial-markets' `present`. PASS.
- `decentralization` vs `self_organization` sibling-distinction: planetary-climate scores
  4/4 on both, matching tropical-cyclones' 4/4 — both are "no controller, no template"
  cases, consistent with the decentralization.yaml notes' worked contrast (ERCOT
  disagrees across the two columns; climate/hurricane agree, like the Sun). PASS.
- `adaptive_capacity` (0) vs `robustness_resilience` (3, exemplar earth): correctly
  reproduces the "robust + non-adaptive" 2x2 cell the adaptive_capacity.yaml notes
  describe (paired with stars as the other robust+non-adaptive case) — internally
  coherent with the catalog's own stated axis logic. PASS.
- `spatial_extent`, `energy_rate_density` derivation style (multiple candidate figures
  carried rather than collapsed to one, with an explicit open editorial flag on the mass-
  normalization convention) mirrors the honest-uncertainty style used in tropical-cyclones'
  own energy_rate_density entry (two figures, kinetic vs. throughput basis, both kept).
  Stylistically and epistemically consistent across entries. PASS.

---

## Summary of findings carried to structured output

1. **C1 (fix)** — `chaos_sensitivity.evidence_status` set to `measured`, contradicting
   both the anchor file's own `qualitative` label and the entry's own justification text
   (which says the one measured figure, the ~2-week horizon, belongs to the weather
   subsystem, not the climate-level claim being scored).
2. **C3 (fix)** — `interaction_ontology` lists "albedo feedback coupling" as a 5th
   interaction type, violating `filling_rules.interaction-typing` (mechanism/carrier vs.
   outcome/loop) and double-crediting content already scored under `feedback`. Inflates
   `type_count` to 5 vs. the 4 that would match tropical-cyclones' parallel list and the
   rule's own individuation standard.
3. **C2 (note)** — `criticality` score 1 paired with `mechanism_status: proposed` sits
   in tension with the scale's literal level-2 OR-clause and with the tropical-cyclones
   sibling anchor's `mechanism_status: none` for its own score-1 case. The entry's
   soc-two-claims defense is reasonable but the mechanism_status field as currently set
   does not cleanly resolve the tension — worth a second look before verified status,
   not a blocker given the transparent, principled reasoning already in place.
4. **Note** — `modularity` typed `rubric` rather than panel-spec's `hybrid`; catalog-wide
   drift shared with both verified entries, not planetary-climate-specific. No action
   needed on this entry alone.

No fabricated values, citations, DOIs, or pages were found. No anchor-contradicting score
was found among the five directly-anchored columns (feedback, tipping_transitions,
memory_hysteresis, adaptive_capacity match exactly; chaos_sensitivity's score matches,
only its evidence_status label drifts). All six filling rules are substantively honored;
one (interaction-typing) is violated in execution despite being correctly stated in
principle elsewhere in the entry. All level tags are present and defensible against the
two verified entries' own conventions.
