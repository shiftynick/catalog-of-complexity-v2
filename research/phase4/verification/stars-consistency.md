# Consistency Check — Class Entry "stars" (exemplar: the Sun)

**Checker:** Consistency Checker (commensurability enforcer), Phase 4.
**Method:** Audited every rubric/hybrid score, categorical value, structured
field, and level tag in `data/classes/stars.yaml` against (a) its
corresponding worked anchor in `schema/anchors/*.yaml` (all 15 files read in
full), (b) the scale text and neighboring anchors where stars is not itself a
worked anchor, and (c) the two verified entries `tropical-cyclones.yaml` and
`financial-markets.yaml` for cross-entry coherence. Also audited all six
`filling_rules` in `schema/panel-spec.yaml` and every `level:` tag. This
check does not re-verify citation identity/content (see
`stars-citation.md`, already completed) or column-presence/orphan-data
(see `stars-coverage.md`, already completed); findings from those two
checks are referenced below only where they bear directly on
commensurability. No entry file or reference file was modified.

Date of check: 2026-07-02.

---

## 1. Anchor-by-anchor score audit (all 15 rubric/hybrid columns)

Direct comparison of `data/classes/stars.yaml` score + justification against
each `schema/anchors/*.yaml` file's worked "stars" anchor (where one exists).

| Column | Entry score | Anchor score | Verdict |
|---|---|---|---|
| decentralization | 4 | 4 | MATCH — justification near-verbatim to anchor |
| nonlinearity | 3 | 3 | MATCH — justification near-verbatim to anchor |
| feedback | 2 | 2 | MATCH — both loops (gravitational-thermal regulation; convective heat transport) reproduced exactly, satisfying feedback.yaml's binding rule that score>=2 requires an itemized loop list |
| openness_dissipation | 4 | 4 | MATCH — "~3.828e26 W," "~4.3 million tonnes/s," and the absolute-throughput-not-mass-normalized framing all reproduced correctly |
| chaos_sensitivity | 2 | 2 | MATCH — contested-literature framing, `measured-disputed`/`evidence_status` alignment; entry rounds the single-study horizon to "~16 months" vs. the sweep report's "~15.9 months" — trivial rounding, not a discrepancy, and the figure is explicitly marked non-load-bearing in both anchor and entry |
| criticality | 2 | 2 | MATCH — soc-two-claims discipline followed correctly (event statistics `measured`, mechanism `contested`, not averaged) |
| memory_hysteresis | 1 | 1 | MATCH — near-verbatim (Kelvin-Helmholtz relaxation lag vs. no bistability/hysteresis-loop reasoning) |
| information_processing | 0 | 0 | MATCH — reproduces the anchor's "canonical 0" framing verbatim, including the explicit non-double-counting of the dynamo as feedback-not-information |
| adaptive_capacity | 0 | 0 | MATCH — verbatim |
| modularity | 1 | 1 | MATCH — verbatim (onion-shell = hierarchy not modularity; granulation = weak lateral quasi-modularity) |
| emergence | 2 | 2 | MATCH — verbatim, including the "raised 1->2" adjudication logic the anchor documents for itself |
| robustness_resilience | 4 | 4 | MATCH — verbatim ("canonical robust + non-adaptive anchor") |
| cascade_susceptibility | 0 | 0 | MATCH — verbatim (deliberate floor; explicit contrast with criticality's 2, correctly not double-counted) |
| tipping_transitions | 0 | *(no stars anchor)* | Not directly anchored — see §2 |
| self_organization | 4 | *(no stars anchor)* | Not directly anchored — see §2 |

**Result: 13 of 15 rubric/hybrid scores are exact anchor matches — no drift
in either direction.** No blocker or fix found in this group.

## 2. The two unanchored columns

`self_organization.yaml` and `tipping_transitions.yaml` each have **no
worked "stars" anchor** (confirmed by direct grep: `self_organization` worked
anchors are tropical-cyclones, river-networks, the-internet, power-grids,
languages; `tipping_transitions` worked anchors are planetary-climate,
earthquake-fault-systems, financial-markets, river-networks, the-internet).

- **self_organization (score 4):** the entry explicitly states "Not directly
  anchored for stars in self_organization.yaml" and reasons from the
  tropical-cyclones anchor (score 4, "eyewall, rainbands, and the
  storm-scale circulation assemble spontaneously... nothing specifies the
  form in advance") as the nearest comparator. This reasoning survives a
  side-by-side reading against the scale text (level 4: "no designer,
  template, or blueprint at any level") and against the comparator anchor:
  granulation/sunspots/dynamo activity assemble from local buoyancy-driven
  and dynamo physics with no template, exactly parallel to eyewall/rainband
  assembly from moist convection under rotation. Score is defensible;
  self-disclosure of the missing anchor is honest and correctly flagged
  in-line. **No fix needed on the score itself** — see §6 for a related
  provenance-wording issue.
- **tipping_transitions (score 0):** the entry does not explicitly flag "not
  directly anchored for stars" the way self_organization does (it instead
  contrasts with the earthquake-fault-systems anchor: "Distinct from the
  earthquake-fault-systems anchor... no comparable informal tipping-point
  discourse exists for stellar structure either"). The score-0 placement is
  correct against the scale's own level-0 text ("No regime shift,
  bifurcation, or multi-stable behavior has been proposed or documented...")
  and is internally consistent with the entry's own framing of stellar
  evolutionary stage changes as deterministic Gyr-timescale transitions, not
  bifurcation-type regime shifts. Score is defensible. **Fix-level finding:**
  the entry's justification does not explicitly acknowledge the absence of a
  stars anchor in `tipping_transitions.yaml` the way it does for
  self_organization — a reader checking anchor coverage has to independently
  discover this (as this checker did), rather than being told inline. Minor
  documentation-parity issue, not a scoring error.

## 3. Categorical / structured columns audited against filling_rules

- **interaction_topology** (`value: field/continuum`, level: class-general):
  matches the panel-spec's controlled vocabulary exactly and is consistent
  with tropical-cyclones' identical value/justification pattern (both
  continuum-plasma/fluid systems). No issue.
- **interaction_ontology** (5 types, `type_count: 5`, `alphabet_closure:
  closed`): type_count matches the list length; alphabet_closure: closed is
  correctly justified per `filling_rules.interaction-typing` ("individuated
  by mechanism and carrier") and is consistent with tropical-cyclones' own
  `closed` verdict (both physics-only systems with no open-ended interaction
  alphabet) — the entry's own justification explicitly cross-references the
  tropical-cyclones anchor for this column ("Same closed-alphabet reasoning
  as the tropical-cyclones anchor... one level richer here"), which is
  accurate: tropical-cyclones lists 4 types, stars lists 5 (adding nuclear
  fusion and MHD dynamo coupling), a defensible and correctly-reasoned
  delta.
  - **FINDING (fix): `range` field values are not schema-conformant.**
    `docs/schema.md`/`panel-spec.yaml` define `interaction_ontology`'s
    `range` sub-field with a controlled vocabulary of exactly `local |
    network-mediated | global`. Two of the five rows in stars.yaml use
    composite, non-enum values: `"local (diffusive) to global (photon
    escape)"` (radiative transfer) and `"local to global (flux emergence,
    cycle-scale organization)"` (magnetohydrodynamic coupling) — these span
    two enum values rather than selecting one, which is a stricter
    deviation than tropical-cyclones' existing (already slightly
    non-conformant) `"global (weak relative to the above)"`, which at least
    resolves to a single enum value with a qualifier appended. Suggested
    fix: pick the single dominant/characteristic range per row (e.g.
    radiative transfer -> `global`, since photon escape at the surface is
    what defines the star's characteristic luminosity output; MHD coupling
    -> `global`, since flux emergence and cycle-scale organization are the
    column's own stated justification for scoring it non-local) and move
    the diffusive/local caveat into the `mechanism` field or a parenthetical
    note, consistent with how tropical-cyclones handles its one
    non-strict-enum row.
- **degree_distribution** (`value: not-applicable`): correctly filled per
  the sweep's own instruction ("Record as N/A... not as unknown"); matches
  tropical-cyclones' identical treatment verbatim. No issue.
- **component_ontology**: three part types, schema-conformant fields
  (`name`, `count_oom`, `interchangeable`, `itself_complex`, plus the
  `role` extension field already established by tropical-cyclones). The
  `itself_complex: convection-cells` link on the granulation-cells row is
  the entry's most consequential judgment call — audited in full in §4.
- **variation_selection** (`value: absent`): matches the panel-spec's
  controlled vocabulary (`present | absent | contested`) and is
  parallel in reasoning and phrasing to tropical-cyclones' identical
  `absent` value (both physics-only systems, no variation-selection-
  retention dynamics among components). No issue.

## 4. Cross-entry coherence: `convection-cells` vs. `moist-convection-cells`

**This is the most significant consistency finding in this entry**, and the
entry's own `provenance.flags` already anticipates it ("not yet cross-checked
against convection-cells' own scoping note... flag for the consistency
checker") — but the more relevant and already-available comparator is not
convection-cells' (not-yet-written) scoping note, it is the sibling decision
already made in `tropical-cyclones.yaml`:

- `tropical-cyclones.yaml` line 42: `contains: [moist-convection-cells]`,
  with inline comment "unresolved; distinct from Rayleigh-Benard
  convection-cells — see component_ontology." Line 92's
  `itself_complex: moist-convection-cells` comment is explicit: "deliberately
  DISTINCT from the Rayleigh-Benard convection-cells class (coverage check
  caught the conflation)."
- `stars.yaml`'s `relations.contains_note` argues, at length, the opposite
  editorial conclusion for a structurally analogous case: that solar
  granulation — also compressible, non-idealized, non-lab convection with
  boundary conditions that depart from the classical Rayleigh-Bénard
  free-free or fixed-cold-plate setup — SHOULD be folded into the *same*
  `convection-cells` id, on the grounds that "the shared generative
  mechanism (buoyancy-driven overturning above a critical driving parameter)
  outweighs the boundary-condition differences."

Both entries are convection variants that depart from idealized Rayleigh-
Bénard in comparable ways (compressibility, non-canonical boundary
conditions, a driving mechanism beyond a simple fixed temperature
differential — latent heat release for hurricanes, radiative cooling plus
stratification for granulation). The catalog now contains two precedent-
setting judgment calls that point in **opposite directions** on
structurally analogous "is this convection an instance of the
`convection-cells` class or its own thing" questions, with no articulated
principle distinguishing the two cases from each other (compressibility and
non-canonical boundary conditions are present in both; rotation and latent
heat release are present in the hurricane case but not named as the
distinguishing factor in either entry's reasoning).

- **Severity: fix.** This is not a fabrication or a wrong value — both
  entries correctly flag their own uncertainty and neither states its
  editorial call as settled fact — but it is exactly the kind of drift this
  check is charged with catching: two class entries scoring/relating a
  comparable structural feature (physical, non-idealized convection as a
  possible instance of the `convection-cells` roster candidate) via
  incompatible conventions, with the inconsistency not resolved by either
  entry despite one (tropical-cyclones) predating the other and being
  status: verified.
- **Suggested fix:** Before `stars` is promoted to `verified`, either (a)
  articulate an explicit, citable principle that distinguishes solar
  granulation from hurricane convection for `convection-cells`-membership
  purposes (e.g., rotation-driven vs. non-rotation-driven; latent-heat- vs.
  radiative/thermal-only-driven — note stars' own contains_note already
  gestures at "compressible... radiatively cooled... strongly stratified"
  without checking whether tropical-cyclones' moist convection is *also*
  compressible/non-canonical enough to warrant the same fold-in logic it
  rejected), or (b) reverse stars' `contains: [convection-cells]` link to a
  new, distinct unresolved id (e.g. `photospheric-convection-cells` or
  similar) paralleling tropical-cyclones' `moist-convection-cells`
  precedent, deferring the actual merge/split question to whoever drafts
  `convection-cells.yaml`'s own scoping note. Either resolution is
  legitimate; leaving the contradiction unaddressed across two entries is
  not.

## 5. Filling rules audit

- **power-law-rigor**: `extreme_event_statistics` correctly carries
  `evidence_status: measured-untested` with an explicit note explaining that
  no CSN-2009-grade MLE+KS test was found in the literature for solar/
  stellar flare distributions — this is the correct default per the rule
  and is consistent with how `financial-markets.yaml`'s own
  `extreme_event_statistics` handles the identical situation (CSN never
  tested equity returns either; also `measured-untested`). No issue.
- **soc-two-claims**: `criticality`'s (a) event-statistics /
  (b) mechanism-status split is correctly separated in prose and via the
  `mechanism_status: contested` field, matching the enum-conformant pattern
  used in `financial-markets.yaml` (`mechanism_status: contested`) and
  `tropical-cyclones.yaml` (`mechanism_status: none`). No issue.
- **no-market-chaos**: not applicable to this entry (financial-markets-
  specific); correctly not invoked.
- **measurand-required**: every signal-relative quantitative value in the
  entry (all 5 `characteristic_timescales` rows, `fractal_dimension_spatial`,
  `extreme_event_statistics`, `temporal_correlation`) names its measurand
  explicitly. No issue.
- **level-required**: every attribute carries a `level:` tag
  (`class-general` or `exemplar(the-sun)`). Spot-checked all 29 attributes —
  all present. No issue.
- **atomicity-convention**: the scoping_note's atomicity declaration
  (granulation cells as the nearest citable proxy "atom," with
  interaction_topology correctly scored field/continuum rather than
  particulate) is applied consistently across `numerosity`,
  `component_ontology`, and `hierarchy_depth` — verified directly:
  `hierarchy_depth`'s counting convention explicitly starts from
  "granulation cells (atoms)," matching `component_ontology`'s first part
  row and `numerosity`'s stated value. This three-way internal consistency
  is a real strength of the entry and mirrors tropical-cyclones' (parcels)
  and financial-markets' (trading agents/orders) equally consistent
  three-way agreement. No issue.
- **interaction-typing**: audited in §3; type_count/list-length match and
  closure verdict are sound; the `range` sub-field vocabulary deviation is
  flagged above (fix), not a violation of the typing principle itself
  (mechanism-and-carrier individuation, which is correctly applied — no
  interaction type is split or merged incorrectly across the 5 rows).

## 6. Provenance-text accuracy (self-consistency within the entry)

`provenance.scoping_and_rubrics` states: "anchors reused verbatim from
schema/anchors/*.yaml where stars is a worked anchor (all 15 rubric/hybrid
columns)." As established in §1–2, stars is a worked anchor in only **13**
of the 15 rubric/hybrid columns unconditionally-verbatim (self_organization
and tipping_transitions both lack a stars anchor; self_organization is
explicitly caveated one sentence later in the same provenance paragraph as
"not directly anchored," and tipping_transitions is not caveated in the
provenance block at all, only inside its own attribute justification).

- **Severity: note.** This is the same finding the coverage checker already
  surfaced (`stars-coverage.md` §4) for self_organization specifically; this
  check additionally confirms tipping_transitions is a second, unmentioned
  instance of the same undercount (the coverage check's phrasing "14 of the
  15... self_organization does not" is itself off by one — it should be 13
  of 15, with both self_organization and tipping_transitions unanchored).
  Not a blocker: no score is wrong, and the entry's own attribute-level
  justifications are honest about the gap in both cases (albeit less
  explicitly for tipping_transitions, per §2). Recommended fix for the next
  drafting pass: correct the provenance sentence to "13 of 15" and name both
  unanchored columns, or request the orchestrator add stars anchors to
  `self_organization.yaml` and `tipping_transitions.yaml` to close the gap
  upstream.

## 7. Confidence-field calibration vs. the two verified entries

Neither `tropical-cyclones.yaml` nor `financial-markets.yaml` uses
`confidence: low` anywhere — both consistently rate single-study,
snippet-verified, or methodologically-thin claims as `confidence: medium`
(e.g., tropical-cyclones' `fractal_dimension_spatial`, sourced to a single
1982 study and flagged `verifier_flags: [snippet-verified-only]`, is rated
`medium`). `stars.yaml` uses `confidence: low` six times
(`instance_population`, `numerosity`, `component_ontology`,
`fractal_dimension_spatial`, `chaos_sensitivity`, `temporal_correlation`),
including for `fractal_dimension_spatial`, which is in an essentially
identical evidentiary position to tropical-cyclones' same column (single
old study, snippet-verified only, `verifier_flags` used identically) yet
rated one notch lower.

- **Severity: note.** `confidence` has no formal rubric or anchor set in
  `panel-spec.yaml` (it is an established but informal convention shared by
  both verified entries), so this is not a rule violation, but it is a
  real commensurability drift: the same evidentiary situation
  (single-study, snippet-verified, un-primary-read) is scored `medium` in
  one verified entry and `low` in this draft for the structurally
  equivalent column. Recommend either bringing stars' six `low` ratings up
  to `medium` for parity, or — if the orchestrator judges stars'
  underlying sourcing to be genuinely thinner (e.g., `numerosity`'s
  granule count has no primary paper pinned at all, arguably weaker than
  tropical-cyclones' `fractal_dimension_spatial`, which at least has one
  identified primary paper) — documenting the calibration distinction
  explicitly so future entries know `low` is reserved for "no primary
  source identified at all" vs. `medium` for "primary source identified but
  not fetched."

## 8. Arithmetic / internal-consistency spot checks (supporting, not primary to this check)

Two derived figures were independently recomputed to confirm they are not
silently wrong before being trusted as anchoring evidence for the
consistency audit above:
- Φ_m = L☉/M☉ = 3.828e26 W / 1.98892e30 kg = 1.925e-4 W/kg = **1.925 erg
  s⁻¹ g⁻¹** — matches the entry's stated cross-check exactly, and is close
  to Chaisson's published 2 as claimed.
- Mass-to-energy conversion rate implied by L☉ via E=mc²: **~4.26 million
  tonnes/s** — matches the entry's and the openness_dissipation anchor's
  stated "~4.3 million tonnes... per second" (the entry correctly reuses
  the anchor's own figure rather than re-deriving a divergent number).

No arithmetic errors found. (Full citation-identity and numeric-content
verification is the citation checker's remit and is already complete in
`stars-citation.md`, which independently found the same two arithmetic
checks correct and additionally identified a real `iau2015` arXiv-ID
miscitation — B2 cited where B3 is meant — that this check defers to, since
it is a citation-identity finding, not a commensurability finding.)

---

## Summary of findings by severity

**Fix (2):**
1. `relations.contains: [convection-cells]` / `component_ontology`'s
   `itself_complex: convection-cells` link is inconsistent with the
   already-verified `tropical-cyclones.yaml`'s precedent
   (`moist-convection-cells`, deliberately kept distinct from
   `convection-cells` "to avoid conflation"). Two class entries reached
   opposite conclusions on a structurally analogous question with no
   articulated distinguishing principle. See §4.
2. `interaction_ontology`'s `range` field uses non-enum composite values
   ("local (diffusive) to global...", "local to global...") on 2 of 5 rows,
   deviating from the panel-spec's controlled vocabulary
   (`local | network-mediated | global`) more sharply than the existing
   tropical-cyclones precedent. See §3.

**Note (3):**
1. `tipping_transitions` (score 0) is, like `self_organization`, scored
   without a dedicated stars anchor in `schema/anchors/tipping_transitions.yaml`,
   but unlike self_organization this gap is not explicitly disclosed inline
   in the attribute's own justification. Score itself is defensible against
   scale text. See §2.
2. `provenance.scoping_and_rubrics` overstates anchor coverage ("all 15
   rubric/hybrid columns" reused from stars-specific anchors); the accurate
   count is 13 of 15 (both self_organization and tipping_transitions lack a
   stars anchor). Self-correcting within the document but should be
   tightened. See §6.
3. `confidence: low` is used six times in this entry for evidentiary
   situations that both verified entries consistently rate `confidence:
   medium`, a soft cross-entry calibration drift with no formal rubric to
   adjudicate it. See §7.

**No blockers found in this check's scope** (anchor/score fidelity, filling-
rule compliance, level tags, cross-entry coherence). All 13 anchored
rubric/hybrid scores match their anchors exactly with no drift in either
direction; the 2 unanchored scores are reasoned soundly against scale text
and the nearest comparator anchors. The one blocker-severity item known to
exist for this entry (the `iau2015` arXiv-ID miscitation, B2 vs. B3) was
found by the citation checker and is out of this check's scope by design —
flagged here only for completeness of the reader's picture, not re-litigated.
