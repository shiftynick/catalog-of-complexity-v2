# Consistency check — weather-systems

Role: commensurability enforcer. Audited every rubric/hybrid score in
`data/classes/weather-systems.yaml` against the anchor library
(`schema/anchors/*.yaml`, all 15 files), all filling_rules
(`schema/panel-spec.yaml`), and cross-entry coherence against the two
adjacent nested entries this draft explicitly comparators against —
`data/classes/tropical-cyclones.yaml` and `data/classes/planetary-climate.yaml`
(both `status: verified`). Also read `docs/schema.md`, `docs/roster.md`,
and the sweep report `research/v0.2-sweep/expansion/weather-systems-sources.md`.
Entry not edited; findings only.

Reference set read in full: self_organization, nonlinearity, memory_hysteresis,
feedback, information_processing, modularity, openness_dissipation,
chaos_sensitivity, adaptive_capacity, robustness_resilience, decentralization,
cascade_susceptibility, tipping_transitions, emergence, criticality.

---

## Column-by-column audit

### GROUP A — Identity & scale (structured/quantitative — audited for
cross-entry convention coherence, not anchor-scored)

- **spatial_extent** — recorded as an explicit range ("1e5 to >1e6" m),
  correctly justified against Neu et al. (2013)'s own headline diameter
  statement and explicitly contrasted with tropical-cyclones' point estimate
  (~1e6 m). Consistent with `filling_rules.no-guessing` (no collapse to a
  misleading point estimate). No issue.
- **numerosity** — recorded as an explicit range with the ~3-5x
  method-uncertainty named per Neu et al.'s own central finding, not averaged
  away. Consistent with `power-law-rigor`/`no-guessing` discipline. No issue.
- **instance_population** — `evidence_status: measured-untested`. Per
  panel-spec (line 31), `measured-untested` is defined specifically for
  *power-law tail claims whose statistical rigor has not been assessed*. This
  column's ERA5-2026 standing-count figure (~34 NH/~28 SH cyclones) is not a
  power-law/tail claim; the entry's own note explains the label was chosen
  because the citation is WebFetch/snippet-level, not full-text primary-read
  — a *citation-provenance* caveat, not a *statistical-rigor* caveat. The
  sibling entries handle an identical situation differently: tropical-cyclones'
  `rudeva-gulev2007` (also snippet-only, WebFetch-403-blocked) is carried at
  `evidence_status: measured` with confidence downgraded and a citation-level
  read-status annotation, not relabeled `measured-untested`. **NOTE** —
  defensible judgment call, but a minor vocabulary misuse relative to the
  spec's stated definition and inconsistent with how the sibling entries
  handle the same "snippet-only" situation.
- **component_ontology** — `itself_complex: moist-convection-cells` and
  `itself_complex: tropical-cyclones` both match tropical-cyclones.yaml's own
  identical declarations verbatim (moist-convection-cells is deliberately kept
  distinct from the Rayleigh-Bénard convection-cells class, per tropical-cyclones'
  own coverage-check history). Consistent. No issue.
- **energy_rate_density** — `unknown`, honestly reported gap, explicitly
  declines to borrow tropical-cyclones' derived ~1.5-6e2 erg/s/g figure per
  `no-guessing` (a narrower, physically different system's estimate). Correct
  application of the rule. No issue — but see openness_dissipation below,
  which leans on this same gap inconsistently.

### GROUP B — Structure

- **interaction_topology** (field/continuum) — matches both siblings. No issue.
- **interaction_ontology** — `type_count: 4`, `alphabet_closure: closed`,
  identical 4-type physical alphabet (momentum/pressure, latent-heat,
  surface-flux, radiative) verbatim-consistent with tropical-cyclones and
  planetary-climate's own 4-type closed alphabets, per
  `filling_rules.interaction-typing`. No issue.
- **degree_distribution** (not-applicable) — matches both siblings' identical
  field/continuum treatment. No issue.
- **modularity** (score 1) — matches the modularity anchor's scale-1 text
  ("fuzzy, gradational... no stable preferred partition") and matches both
  siblings' identical score/reasoning at the adjacent nested rungs. No issue.
- **hierarchy_depth** (value 2) — HIGH commensurability-risk column per
  panel-spec's own note; audited the full three-entry ladder:
  tropical-cyclones = 3 (parcels→cells(1)→rainband/eyewall(2)→vortex(3));
  weather-systems = 2 (parcels→cells/fronts(1)→weather-system structure(2));
  planetary-climate = 4 (parcels→cells/eddies(1)→weather systems(2)→
  circulation cells/gyres(3)→coupled system(4)). The conventions are mutually
  consistent: weather-systems correctly omits tropical-cyclones' TC-specific
  rainband/eyewall sub-level (a structure specific to a single coherent
  warm-core vortex, not generic to the broader family), and planetary-climate
  correctly counts weather-systems itself as an intermediate rung one level up.
  No issue — this is a genuinely well-executed instance of the ladder
  convention the panel-spec asks for.
- **fractal_dimension_spatial** (1.35) — reused from Lovejoy (1982), same
  primary-read citation as tropical-cyclones and planetary-climate, correctly
  annotated as a reassignment/shared-home candidate rather than a fabricated
  independent measurement. No issue.
- **decentralization** (score 4) — matches the Sun/tropical-cyclones/
  planetary-climate "no privileged controller" anchor text exactly. No issue.

### GROUP C — Dynamics

- **nonlinearity** (score 4) — matches tropical-cyclones' and
  planetary-climate's score 4, and the scale-4 text ("nonlinearity pervasive
  AND load-bearing... formation, intensification, collapse, or pattern
  selection all depend on nonlinear terms"). Frontogenesis/baroclinic
  instability/monsoon-onset threshold behavior are legitimate parallel
  mechanisms to WISHE for the broader class. No issue.
- **feedback** (score 3) — self-consciously scored one point below
  tropical-cyclones' 4, with an explicit, defensible rationale (baroclinic
  energy conversion is "more often presented as an energy SOURCE description
  than an explicit closed feedback loop" in the primary literature). Three
  loops listed (baroclinic reinforcing, diabatic reinforcing, friction
  balancing) satisfy the anchor's own requirement that every score ≥2 carry
  an itemized loop list (sign + mechanism). Matches scale-3 text ("multiple
  feedback loops... continuously active and required to explain
  characteristic dynamics"). No blocking issue; the baroclinic-conversion
  loop's closure (temperature gradient → circulation → sharpened gradient →
  ...) is asserted rather than as crisply closed as WISHE, but this is
  already acknowledged in the justification's own hedging. **NOTE** only.
- **openness_dissipation** (score 3) — **FIX**. The anchor's own notes state:
  "Every score of 3-4 should be traceable, even loosely, to a literal number
  in watts, joules/s, or kg/s cited in energy_rate_density or in this
  column's justification." This entry's `energy_rate_density` is `unknown`
  (no watts figure anywhere in the entry — confirmed, a genuine and honestly
  reported literature gap), and the openness_dissipation justification itself
  contains no literal throughput number, only a qualitative
  baroclinic-instability narrative. Contrast planetary-climate's own score-3
  on this same column, which is explicitly grounded in a real number
  (~1.2e17 W absorbed solar throughput) even though it is *also* held at 3
  rather than 4 for a different (collapse-timescale) reason. Weather-systems'
  score 3 currently rests on qualitative narrative alone with zero
  quantitative traceability — thinner evidentiary support than any other
  score ≥3 on this column in the verified catalog. Either the score should be
  reconsidered (a 2 — "modest throughput... dissipation is a secondary rather
  than defining feature" — is arguably a closer fit for a class with no
  citable watts figure at all) or the justification needs an explicit
  acknowledgment that this specific entry breaks the anchor's own
  traceability convention and why that is still defensible.
- **chaos_sensitivity** (score 4) — matches tropical-cyclones' 4 and is one
  point above planetary-climate's 3, with a well-reasoned "true home of the
  figure" argument that is consistent with planetary-climate's own anchor
  text (which explicitly defers the ~2-week figure to the weather subsystem).
  Charney 1966's read-status ("search-summary level — not independently
  fetched as full text") is an existing, already-flagged limitation shared
  identically across all three weather-related entries — not a new problem
  introduced here. No new issue.
- **criticality** (score 1, mechanism_status: proposed) — **FIX**, the most
  consequential finding in this audit. The entry cites Peters & Neelin (2006)
  — a paper about GENERAL tropical atmospheric convection/precipitation
  (TRMM data, ocean basins), which the entry's own sources block and its own
  justification both explicitly confirm was **already primary-read and
  rejected as out-of-scope for the sibling tropical-cyclones entry**
  ("found NOT tropical-cyclone-specific... rejected there as out-of-scope,"
  causing tropical-cyclones' own criticality score to be rescored 1→0). The
  weather-systems entry reassigns the identical citation here instead.
  The criticality anchor's `boundary_clarifications.published-claim-required`
  rule states explicitly: mechanism status requires the SOC/critical-point
  mechanism to be "formally proposed FOR THE SCOPED SYSTEM in the primary
  literature, not for a related model system," and "a rater's own inference
  from adjacent literature... does not clear the bar." The entry's own
  "ORCHESTRATOR SCOPING CALL" justifies inclusion via a component_ontology
  link to MCCs — but Peters & Neelin's paper never names MCCs (Maddox 1980's
  discrete IR-cloud-shield-defined structures) or any of this entry's actual
  exemplars (extratropical cyclones, monsoons, atmospheric rivers); it studies
  general precipitation-field critical-point statistics over tropical ocean
  basins, sitting — as the entry itself concedes — "nearer the tropical-cyclone
  boundary this entry explicitly excludes." This is precisely the kind of
  adjacent-literature inference the anchor's rule was written to disallow, and
  the same paper on the same facts was already resolved the other way (0, not
  1) for the immediately adjacent sibling entry citing an identical
  boundary-exclusion rationale. Recommend rescoring to **0/none** (matching
  tropical-cyclones' own resolution) unless a citation specific to
  extratropical cyclones, monsoons, MCCs, or atmospheric rivers can be
  located — consistent with the `mechanism-alone-caps-at-1` and
  `published-claim-required` rules read together. The entry's own provenance
  block already self-flags this as a "standing scoping uncertainty," which is
  appropriate transparency but does not resolve the anchor conflict.
- **extreme_event_statistics** — `unknown`, `measurand_type: temporal-event`
  correctly assigned per `filling_rules.measurand-required`. Correctly
  declines to force-fit Sienz et al. (2010)'s GPD framework into a power-law
  alpha, and correctly declines to borrow Corral's TC-specific PDI figure.
  Exemplary compliance with `power-law-rigor` and `no-guessing`. No issue.
- **temporal_correlation** — `unknown`, consistent with tropical-cyclones'
  own identical treatment (no established measurand, left unknown rather
  than stretched). No issue.
- **tipping_transitions** (score 1) — **FIX**. Internal inconsistency within
  the entry itself: the justification for this column states "no specific
  bifurcation mechanism or threshold estimate for a weather-systems-class
  transition was identified and primary-read this sweep." But the entry's
  own `feedback` column (line 397) and `emergence` column (line 621) and
  `emergent_phenomena` list (line 688) all independently cite "bombogenesis"
  — a formally named, quantitatively thresholded (the literature-standard
  ≥1 Bergeron ≈ 24 hPa/24h criterion, illustrated in-entry by storm Klaus's
  -35 hPa/24h) regime-transition phenomenon that is actively studied as a
  forecasting problem. This is structurally identical to tropical-cyclones'
  own citation of "rapid intensification (threshold/switch-like transition
  actively studied as a forecasting problem)" as one of the two named
  mechanisms earning tropical-cyclones a score of **2** on this same column.
  The tipping_transitions anchor's own `single-modeled-mechanism-is-2`
  boundary clarification states plainly: "one named mechanism with a proposed
  threshold or bifurcation analysis in the primary literature = 2." Monsoon
  onset (also discussed elsewhere in this entry as a formally documented,
  progressive, threshold-driven circulation reversal, e.g. IMD onset
  criteria) is a second plausible candidate the entry dismisses as merely
  "informally discussed." As currently justified, this column undersells
  evidence the entry itself presents elsewhere; recommend rescoring to
  **2**, consistent with tropical-cyclones' own precedent and the entry's own
  bombogenesis citation, or explicitly explaining in the justification why
  bombogenesis does not qualify as a "specific bifurcation mechanism... with
  a proposed threshold" when Sanders & Gyakum's 24 hPa/24h criterion is
  exactly that.

### GROUP D — Information & memory

- **memory_hysteresis** (score 1) — matches tropical-cyclones' identical
  score/reasoning (relaxation memory only, no bistability documented at the
  individual-system level; longer-timescale memory correctly deferred to the
  parent planetary-climate entry per the scoping note). No issue.
- **information_processing** (score 0) — matches the Sun/tropical-cyclones/
  planetary-climate canonical-0 reasoning exactly (pure physical transport,
  no detection-transmission-response chain; frontal/convective triggering
  correctly treated as a threshold/bifurcation, not detection, per the
  anchor's own does_not_count). No issue.

### GROUP E — Adaptation

- **adaptive_capacity** (score 0) — matches tropical-cyclones' and
  planetary-climate's identical score/reasoning (fixed physics, no
  response-function revision; feedbacks operate, they do not learn). No issue.
- **variation_selection** (absent) — matches both siblings. No issue.

### GROUP F — Emergence & robustness

- **emergence** (score 3) — matches tropical-cyclones' score-3 reasoning
  almost verbatim (bombogenesis criteria / frontal classification /
  baroclinic-instability framework / MCC-AR detection-algorithm definitions as
  the field's genuine working vocabulary, held at 3 rather than 4 for the same
  "storm-resolving NWP narrows but does not eliminate the macro-theory"
  reasoning). No issue.
- **self_organization** (score 4) — matches the scale-4 text and both
  siblings' identical score/reasoning. **NOTE**: the justification claims the
  Zhu & Newell (1998) atmospheric-river flux-concentration statistic
  (>90% of midlatitude water-vapor flux through ~10% of the hemispheric
  circumference) is "exactly the kind of concentration signature the
  self_organization anchor's tropical-cyclones and river-networks entries
  cite for their own top scores." Checked against `self_organization.yaml`
  directly: neither anchor entry actually cites a comparable
  concentration/flux-share statistic — tropical-cyclones' anchor justification
  is about spontaneous eyewall/rainband assembly, river-networks' is about
  Horton's-laws dendritic branching. The AR statistic is a genuinely good,
  independently sufficient argument for score 4 on its own qualitative merits
  (a small fraction of the domain organizing to carry the overwhelming
  majority of a conserved flux is a strong self-organization signature), but
  the specific claim that the anchor file "cites" an equivalent statistic for
  its own top-scored systems is not accurate as written — a minor
  overstatement of anchor support, not a scoring problem.
- **robustness_resilience** (score 1, level: exemplar(extratropical-cyclone))
  — matches tropical-cyclones'/Katrina's identical score and reasoning
  exactly, correctly scored at the exemplar level (not class level) per the
  anchor's own does_not_count clause distinguishing class-level persistence
  from exemplar-level robustness. No issue.
- **cascade_susceptibility** (score 0) — matches tropical-cyclones' and the
  stars floor-anchor's identical reasoning (continuum reorganization, not
  component-to-component failure propagation). No issue.

---

## Filling-rules audit

- **no-guessing**: well observed throughout — energy_rate_density,
  extreme_event_statistics, temporal_correlation all correctly left `unknown`
  rather than borrowed or force-fit from sibling entries or adjacent papers.
- **power-law-rigor**: well observed — Sienz et al.'s GPD framework
  correctly not translated into a power-law alpha; numerosity's method-spread
  correctly recorded as a range, not a misleadingly clean point estimate.
- **soc-two-claims**: correctly kept criticality (event-statistics +
  mechanism status) and extreme_event_statistics (tail exponent) as separate
  columns/claims, per the entry's own explicit note under criticality. Well
  observed as a *structural* matter — see the criticality FIX above for the
  *substantive* mechanism-status finding.
- **no-market-chaos**: not directly applicable to this entry (no
  markets-adjacent claim made); N/A.
- **measurand-required**: satisfied — extreme_event_statistics carries
  `measurand_type: temporal-event` and a named measurand; characteristic_timescales
  entries name their measurands where evidence_status is `measured`.
- **level-required**: satisfied on every attribute checked; robustness_resilience
  correctly uses `exemplar(extratropical-cyclone)` rather than class-general,
  matching the column's own documented default.
- **atomicity-convention**: correctly declared in the scoping note (moist air
  parcels, ~1 km^3, matching tropical-cyclones' and planetary-climate's
  identical convention one level down/up respectively) — genuinely
  cross-entry-consistent, a real strength of this entry.
- **interaction-typing**: satisfied — 4-type closed alphabet, individuated by
  mechanism/carrier, verbatim-consistent with both siblings.

## Level-tag audit

All `level:` tags checked are correctly `class-general` except
`robustness_resilience` (`exemplar(extratropical-cyclone)`), which correctly
matches the column's own stated default. No missing or malformed level tags
found in the columns reviewed.

## Cross-entry coherence (relations block)

`relations.contains: [tropical-cyclones]` is correctly reciprocated by
tropical-cyclones.yaml's own `part_of: [weather-systems, planetary-climate]`.
`relations.part_of: [planetary-climate]` is correctly reciprocated by
planetary-climate.yaml's own `contains: [weather-systems, ...]`. The
deliberate omission of `moist-convection-cells` from this entry's own
`contains` (reached transitively via tropical-cyclones instead, to preserve
planetary-climate's strict level-by-level hierarchy_depth ladder) is an
explicit, well-reasoned editorial call, self-flagged in provenance as
revisitable. No reciprocity errors found.

---

## Summary of severities

- **Blocker**: none found. No fabricated values, citations, or DOIs;
  `unknown` used correctly and often; no anchor-contradicting scores that
  would poison the catalog if published as-is (the two `fix` items below are
  scoping/traceability judgment calls the entry itself already partially
  flags, not undisclosed fabrications).
- **Fix** (3): criticality's mechanism_status/score likely too generous given
  the anchor's own published-claim-required rule and the identical citation's
  prior rejection for the sibling tropical-cyclones entry; tipping_transitions
  likely undersells the entry's own bombogenesis evidence relative to the
  anchor's single-modeled-mechanism-is-2 rule and tropical-cyclones' own
  precedent; openness_dissipation's score 3 rests on zero quantitative
  traceability (energy_rate_density is unknown), thinner support than the
  anchor's own "every score of 3-4 should be traceable" requirement.
- **Note** (3): instance_population's `measured-untested` label is a minor
  misuse of a vocabulary term defined specifically for power-law tail-rigor
  caveats, not citation-read-status caveats; feedback's baroclinic-loop
  closure is asserted rather than as crisply closed as the WISHE comparator
  (already self-hedged in the entry); self_organization's justification
  slightly overstates what the self_organization anchor file actually says
  about tropical-cyclones' and river-networks' own top-score evidence.
