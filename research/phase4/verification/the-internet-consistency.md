# Consistency Check — the-internet

Checker: consistency-checker (commensurability enforcer). Scope: audit every rubric/hybrid
score in `data/classes/the-internet.yaml` against `schema/anchors/*.yaml` (15 files),
audit the six `filling_rules`, audit all `level` tags, and cross-check against the two
verified entries (`tropical-cyclones`, `financial-markets`) for cross-entry coherence.
No edits made to the entry or any reference file, per instructions.

Reference set read in full: schema/panel-spec.yaml; docs/schema.md; docs/roster.md;
research/phase4/the-internet-sources.md; all 15 files in schema/anchors/; both verified
entries in full; prior consistency-check report for planetary-climate (for format/rigor
calibration).

---

## 1. Directly-anchored columns (the-internet is a worked anchor)

Ten columns carry a direct the-internet anchor block in schema/anchors/*.yaml. Checked
word-for-word (score, justification substance, evidence_status, level) against the entry.

| column | anchor score | entry score | anchor evidence_status | entry evidence_status | verdict |
|---|---|---|---|---|---|
| decentralization | 3 | 3 | qualitative | qualitative | MATCH — "narrow coordination points... none steers traffic/topology moment to moment... hence 3 rather than 4" reproduced verbatim, including the "score the layer where characteristic behavior lives, not the bookkeeping layer" boundary-case guidance |
| self_organization | 2 | 2 | qualitative | qualitative | MATCH — "designed skeleton, spontaneous order on top: the definition of a 2" reproduced verbatim; the deliberate cross-column disagreement with decentralization (2 vs 3) is explicitly restated and correctly attributed to genesis-vs-control being distinct axes, matching the anchor's own notes block |
| nonlinearity | 2 | 2 | qualitative | qualitative | MATCH — TCP AIMD / BGP flapping vs. "core packet forwarding... designed to behave close to linearly" reproduced near-verbatim |
| modularity | 2 | 2 | qualitative | qualitative | MATCH — Tier-1/2/3 hierarchy, Q~0.3-0.5 [unverified-model-knowledge] framing, Newman C=0.39 corroborating (not equivalent) evidence — all reproduced faithfully |
| criticality | 1 | 1 | qualitative | qualitative | MATCH — topology-vs-event-statistics separation (soc-two-claims), literature-gap framing, arXiv:0910.2140 lead-not-citation treatment all reproduced; entry adds `mechanism_status: none`, correctly matching the anchor's own substance ("No SOC or critical-point mechanism... has been formally proposed") — see also Finding I2 below for a subtlety worth recording |
| memory_hysteresis | 2 | 2 | qualitative | qualitative | MATCH — "textbook case of structural path-dependence... hub structure reflects historical order... scores only 2 because there is no measured hysteresis loop or bistability at the operational level" reproduced verbatim |
| tipping_transitions | 0 | 0 | qualitative | qualitative | MATCH — "no regime-shift or alternative-stable-state literature... deliberate floor anchor... highly engineered, redundant infrastructure systems are not automatically tipping-prone" reproduced verbatim |
| emergence | 2 | 2 | qualitative | qualitative | MATCH — congestion collapse/recovery, traffic self-similarity, AS-level hub hierarchy as recognizable-but-not-order-parameter-level macro pattern; "no single widely load-bearing order parameter... unlike price formation" reproduced verbatim |
| robustness_resilience | 3 | 3 | qualitative | qualitative | MATCH — "designed for partial failure... routing reconverges... BGP route leaks, DNS dependencies... scars, not identity loss" reproduced verbatim, correctly normalized against financial-markets' identical 3-vs-4 cap logic |
| cascade_susceptibility | 1 | 1 | qualitative | qualitative | MATCH — graph-theoretic modeling vs. fitted empirical outage-size distribution gap, Phase 1 finding "re-confirmed Phase 4," reproduced verbatim including the explicit non-conflation with the Dobson et al. power-grid literature |

Level tags: all ten are `class-general` in both the anchor and the entry — correct, since
none of these are exemplar-specific measurements and the entry has no named sub-instance
below "the Internet" itself (consistent with the singleton-class framing declared in the
scoping_note and instance_population).

**No anchor-contradicting score found among the ten directly-anchored columns.** This is
the strongest possible result for this section — the entry appears to have been drafted
directly from (or in lockstep with) the anchor file text, likely because the-internet
anchors were themselves drafted with this entry in mind (per the-internet-sources.md's
compilation date matching the entry's provenance date).

---

## 2. Columns with no direct the-internet anchor, checked against scale text and
   neighboring anchors

Five columns (feedback, openness_dissipation, chaos_sensitivity, information_processing,
adaptive_capacity) have no worked the-internet block in their anchor files and must be
tested against the scale text and the nearest comparator anchors instead.

| column | entry score | tested against | verdict |
|---|---|---|---|
| feedback | 2 | scale level-2 text; ERCOT absent, financial-markets (3) as ceiling comparator | MATCH — justification text ("loops matter at the margins or during identifiable episodes, not continuously") is close to a direct quote of the scale's own level-2 definition; correctly placed one below financial-markets (3) and two below tropical-cyclones (4); the required structured `loops:` list (TCP AIMD, BGP route-flap) is present with sign + mechanism per the anchor's binding format requirement ("every anchor at score >=2 MUST include the structured loop list") |
| openness_dissipation | 2 | financial-markets/NYSE anchor (2), explicitly cited by the entry as its comparator | MATCH — near-paraphrase of the NYSE anchor's own language ("keeps the COMPUTING SUBSTRATE running... not what generates the... characteristic dynamics" vs. entry's "keeps the COMPUTING/TRANSMISSION SUBSTRATE running; it does not generate the network's characteristic routing/traffic dynamics"); correctly distinguishes literal power draw (real, ~4.74e10 W data-center figure, snippet-only) from the metaphorical "disequilibrium" framing the does_not_count clause bans |
| chaos_sensitivity | unknown | does_not_count clause (BGP convergence != chaos); no-market-chaos spirit extended by analogy | MATCH, well-reasoned — explicitly declines to conflate "settling time after a discrete perturbation" (BGP convergence) with sensitive-dependence, and explicitly declines to treat traffic self-similarity/LRD as chaos evidence — this is the correct extension of the anchor's own does_not_count discipline ("General unpredictability... do NOT by themselves establish chaos_sensitivity") to an unanchored system. `unknown` (not a placeholder low score) is the legal answer per filling_rules.no-guessing |
| information_processing | 3 | ERCOT (3, explicit "expected 3-4 range for the same SCADA/protocol reasons" note); financial-markets (4) as ceiling | MATCH — BGP route selection as detect-and-conditionally-respond, TCP congestion-state-dependent transmission, correctly distinguished from financial-markets' 4 (dispersed private information -> novel public statistic) on the grounds that Internet routing responds to "locally visible protocol state" rather than aggregating genuinely dispersed information. This is a substantive, non-arbitrary distinction, not a rote copy of the ERCOT case |
| adaptive_capacity | 2 | ERCOT (2); languages (3) — anchor's own cross-column notes explicitly list "the-internet" alongside "languages" as a robust+adaptive example, without assigning it languages' exact score | See Finding I1 below — plausible but worth a second look |

**Finding I1 (note):** `adaptive_capacity` score 2. The anchor file's own notes block
explicitly pairs "the-internet" with "languages" as an example of the robust+adaptive
quadrant ("robust + non-adaptive (stars), robust + adaptive (languages, the-internet)"),
but languages itself scores 3 on this column while the-internet scores 2 — a one-point
gap the notes don't explain or license. On a side-by-side reading against the entry's own
justification text ("operators renegotiate peering, provision new capacity, and standards
bodies revise protocols in response to observed failure modes... post-congestion-collapse
TCP redesign... route-flap damping added after observed instability episodes") this reads
closer to level 3's language ("Many components possess internal models and adjust
behavior anticipatorily; adaptation is real but slow, partial, or weakly strategic") than
to level 2's ("Some components systematically change behavior via feedback or selection
among fixed rules... without anticipation or internal models") — TCP's 1980s redesign and
route-flap damping were anticipatory engineering responses to a diagnosed failure mode,
not selection-among-fixed-rules in the ERCOT sense (protection-scheme re-tuning, bidding
adjustment). The entry's own comparator is financial-markets' 4, not languages' 3, which
sidesteps rather than resolves the anchor-notes pairing. This is a plausible, arguable
finding: the entry's score is defensible (ERCOT's justification uses very similar
"episodic... rule-mediated" language and also lands at 2), but the specific pairing the
anchor notes invoke (the-internet ~ languages) is not reflected in the final scores, and
the entry does not address or resolve that tension. Not a blocker — the justification is
principled and internally coherent, just not reconciled against the anchor file's own
cross-reference.

**Finding I2 (note):** `criticality` — entry sets `mechanism_status: none`, matching the
anchor's substance exactly. No inconsistency found here (raised only because the sibling
planetary-climate consistency check flagged a mechanism_status/score mismatch on this same
column; the-internet's field is set correctly and requires no fix — recorded for
completeness, not as a finding requiring action).

---

## 3. Filling rules audit

- **power-law-rigor**: `degree_distribution` is the column under most direct test —
  Newman 2003's alpha=2.5 is explicitly labeled "measured-untested on its own terms" in
  the note, composited to `measured-disputed` at the column level once the Broido &
  Clauset (2019) counterweight is folded in; this is a defensible composite label (a
  genuine contest between two publications, not an unassessed claim) and is consistent
  with panel-spec's `measured-disputed` definition ("published but statistically or
  mechanistically contested"). `extreme_event_statistics` is correctly left `unknown`
  rather than borrowing power-grid cascade-size exponents (Dobson et al.) from a different
  system — the entry explicitly names this as a fabrication risk and declines it.
  `temporal_correlation`'s H-value is flagged `measured-disputed` specifically because the
  primary 1994 paper could not be fetched and the number is reconstructed from secondary
  literature — correctly not silently upgraded to `measured`. PASS.
- **soc-two-claims**: Explicitly invoked by name in both `degree_distribution` ("per
  filling_rules.soc-two-claims-style discipline") and `criticality` ("per
  filling_rules.soc-two-claims: recorded as a separate, non-resolved claim from
  degree_distribution's topology claim") — correctly keeps the topology scale-free
  question separate from the event-statistics/mechanism question, exactly mirroring the
  criticality.yaml anchor's own the-internet entry. PASS.
- **no-market-chaos**: Not directly applicable (no financial-market claims made in this
  entry), but its spirit is correctly extended to `chaos_sensitivity` (BGP convergence
  time is explicitly distinguished from a chaos/sensitivity measure, "the same discipline
  that keeps financial-markets' documented nonlinear dependence from being scored as
  chaos"). PASS by analogy, correctly cited.
- **measurand-required**: Checked across all quantitative/hybrid signal-relative columns.
  `degree_distribution` names "AS-level topology degree distribution (RouteViews/BGP-
  derived AS graph)"; `fractal_dimension_spatial` names "spatial distribution of
  router/AS physical locations... distinct from the AS-graph CONNECTIVITY topology";
  `temporal_correlation` names "octet/packet arrival process on network links"; `energy_
  rate_density` and `extreme_event_statistics` name their (unresolved) measurands
  explicitly even while recording `unknown`. The scoping_note's dual-atomicity
  declaration (AS nodes for network-structure columns; packets/flows for traffic-dynamics
  columns) is the load-bearing mechanism that makes this rule checkable at all here, and
  it is applied consistently — no column conflates the two measurands. PASS.
- **level-required**: Checked mechanically — 29 of 29 attribute columns carry an explicit
  `level:` field (all `class-general`, correctly, since the entry declares no named
  sub-instance below "the Internet" itself per instance_population's n=1 declaration).
  PASS.
- **atomicity-convention**: Declared explicitly and unusually thoroughly in the
  scoping_note — a DUAL atomicity (AS nodes for topology columns, packets/flows for
  traffic columns), stated as itself a datum about the system's bi-layered nature. This
  is a legitimate elaboration of the convention, not a violation of it (the rule requires
  a declared choice audited for comparable-system comparability, not a single scalar
  choice) — and it is checked, column-by-column, against financial-markets' single-
  atomicity choice (traders/orders) and tropical-cyclones' single-atomicity choice (air
  parcels): both simpler systems get a single atomicity declaration, the-internet's dual
  declaration is justified by an explicit contrast ("a network is genuinely bi-layered...
  in a way a hurricane's single-fluid continuum is not"). PASS, and a stronger-than-
  typical execution of this rule.
- **interaction-typing**: `interaction_ontology`'s four types (BGP peering/route
  advertisement, packet forwarding/data transfer, DNS resolution, standards/naming
  coordination) are each individuated by mechanism/carrier, not outcome or sign — no
  feedback loop is mislabeled as an interaction type (the entry's `feedback.loops` list,
  TCP AIMD and BGP route-flap propagation, is kept entirely separate from
  `interaction_ontology`'s list, with no double-counting of the same physical content
  under two columns — contrast the interaction-typing violation found in the sibling
  planetary-climate consistency check, where an "albedo feedback coupling" interaction
  type duplicated content already scored under `feedback`). `type_count: 4` is
  arithmetically correct against the list length. `alphabet_closure: constrained` is
  justified by direct analogy to financial-markets' exchange-rulebook case ("Same
  'constrained' reasoning as financial-markets' exchange rulebook"), which is a legitimate
  cross-entry consistency check performed by the entry itself. PASS.

All six filling rules are honored, with no violations found — a stronger result than the
sibling planetary-climate check, which found one filling-rule failure (interaction-typing).

---

## 4. Schema kind (type) conformance

Checked entry `type:` tags against `panel-spec.yaml`'s `kind:` declarations for every
column:

- `modularity` — panel-spec declares `kind: hybrid`; entry correctly uses `type: hybrid`.
  This is notable: both verified reference entries (tropical-cyclones, financial-markets)
  and planetary-climate all use `type: rubric` for this column (a known catalog-wide
  drift previously flagged and left unfixed as "not entry-specific"), but the-internet
  matches panel-spec exactly here, alongside cities and power-grids. No fix needed;
  recorded as the entry being on the correct side of a catalog-wide split, not creating
  a new inconsistency.
- All other rubric/hybrid `type:` tags match panel-spec exactly: decentralization
  (rubric), nonlinearity (rubric), feedback (rubric), openness_dissipation (hybrid),
  chaos_sensitivity (hybrid), criticality (hybrid), tipping_transitions (hybrid),
  memory_hysteresis (hybrid), information_processing (rubric), adaptive_capacity
  (rubric), emergence (rubric), self_organization (rubric), robustness_resilience
  (rubric), cascade_susceptibility (hybrid), variation_selection (categorical),
  interaction_topology (categorical), degree_distribution (quantitative),
  extreme_event_statistics (quantitative), temporal_correlation (quantitative).

No kind-conformance issues found.

---

## 5. Cross-entry coherence spot checks (vs. tropical-cyclones, financial-markets)

- `hierarchy_depth` counting convention: the-internet declares "AS nodes (atoms) ->
  provider tiers (1) -> regional/national peering fabrics and IXPs (2) -> the single
  global routed graph (3)," explicitly noting this is "a consistency choice parallel to
  financial-markets treating orders as interaction substrate, not an aggregation level" —
  directly and correctly cross-references the financial-markets convention (agents ->
  desks/firms (1) -> venues/exchanges (2) -> integrated market (3)) and the tropical-
  cyclones convention (parcels -> cells (1) -> rainband/eyewall complexes (2) -> vortex
  (3)). All three land at 3 levels using the same "count aggregation levels above the
  atoms, up to and including the whole" rule. PASS.
- `openness_dissipation` comparator: explicitly modeled on financial-markets' NYSE anchor
  at score 2 (both infrastructure-support, not generative-mechanism, framings) — checked
  above in section 2, MATCH.
- `information_processing` comparator: explicitly contrasts with financial-markets' 4
  (dispersed-private-information aggregation into a novel public statistic) to justify
  landing at 3 rather than 4 — a substantive, correctly-reasoned distinction, not a bare
  assertion. PASS.
- `decentralization` (3) vs `self_organization` (2): the entry explicitly invokes the
  decentralization.yaml anchor's own worked "Internet" boundary case and the
  self_organization.yaml anchor's own worked disagreement note — both cited essentially
  verbatim, and the disagreement between the two columns is treated as intended signal
  per both anchor files' own guidance, matching the anchors' own cross-column framework
  exactly (not merely internally self-consistent, but externally validated against the
  anchor files themselves). PASS — best-executed sibling-distinction pairing found in
  this review relative to the planetary-climate precedent check.
- `adaptive_capacity` (2) vs `robustness_resilience` (3): forms a plausible "robust +
  moderately adaptive" cell in the adaptive_capacity.yaml notes' 2x2 framework (paired
  with languages as the other named robust+adaptive case, though at different absolute
  scores — see Finding I1). Internally coherent; the outcome/mechanism sibling
  distinction (robustness_resilience.yaml's own framing) is respected — the entry does
  not double-count institutional adaptation as robustness or vice versa.
- `variation_selection` (present): consistent with the-internet's decentralization/self-
  organization profile and with financial-markets' `present` value; correctly contrasts
  its own weaker/slower mechanism ("Weaker and slower than financial-markets' continuous
  strategy churn, but a real present mechanism, not absent") against the financial-
  markets anchor rather than asserting parity. PASS.
- `spatial_extent`: unlike financial-markets' `not-applicable-spatial` escape value (a
  genuinely non-spatial institutional system), the-internet correctly retains a
  numeric order-of-magnitude estimate (4e7 m) because the system does have genuine
  physical spatial extent (submarine cables, terrestrial backbone) — the right schema
  choice given the different system character, not an inconsistency with the financial-
  markets precedent. PASS.
- Singleton/`instance_population` framing (n=1): applied consistently throughout the
  entry (scoping_note, exemplars note, instance_population itself, and the numerosity
  block) with no instance where a cross-sectional AS-count or exponent figure is
  mistakenly treated as a population sample rather than a single-instance time series —
  checked specifically per the entry's own stated concern about this exact
  misinterpretation risk. PASS.
- No-fabrication discipline on `energy_rate_density`: the explicit rejection of the
  "~100 million tons" mass figure as untraceable to any citable primary source (not even
  entered as "[unverified — model knowledge]" because it did not originate from the
  project's own model knowledge) is the strongest no-fabrication execution found across
  the reviewed entries — stricter than, e.g., tropical-cyclones' or financial-markets'
  handling of comparably uncertain figures (which are entered as `[unverified — model
  knowledge]` rather than rejected outright, because those specific figures DID originate
  as the drafting agent's own model knowledge). The entry's distinction between "my own
  uncertain estimate" (legal, flagged) and "an unsourced web claim of unknown provenance"
  (illegal, rejected) is a correct and non-obvious application of the hard rule against
  fabrication. PASS, noted as exemplary.

---

## Summary of findings carried to structured output

1. **I1 (note)** — `adaptive_capacity` score 2 sits in a one-point gap against the anchor
   file's own notes-block pairing of "the-internet" with "languages" (which scores 3) as
   the catalog's robust+adaptive example; the entry's own justification language ("post-
   congestion-collapse TCP redesign," "route-flap damping added after observed
   instability episodes") reads closer to level 3's "adjust behavior anticipatorily" than
   level 2's "without anticipation or internal models." Defensible and internally
   coherent (parallels the ERCOT anchor's own score-2 case), but the tension with the
   anchor notes' own pairing is not addressed or resolved anywhere in the entry. Worth a
   second look before verified status; not a blocker.
2. No other findings. No anchor-contradicting score was found among the ten directly-
   anchored columns (decentralization, self_organization, nonlinearity, modularity,
   criticality, memory_hysteresis, tipping_transitions, emergence, robustness_resilience,
   cascade_susceptibility all match their anchors exactly in score, evidence_status, and
   justification substance). All five unanchored rubric/hybrid columns (feedback,
   openness_dissipation, chaos_sensitivity, information_processing, adaptive_capacity)
   survive a side-by-side reading against the scale text and the nearest comparator
   anchors. All six filling rules are honored with no violations (a stronger result than
   the precedent planetary-climate check, which found one interaction-typing violation).
   All 29 data columns carry level tags, all class-general, correctly reflecting the
   entry's singleton-instance (n=1) framing. All `type:` kind tags conform to panel-spec,
   including `modularity: hybrid` (correct, unlike a known catalog-wide drift in three
   other entries toward `rubric`). Cross-entry coherence against tropical-cyclones and
   financial-markets is strong throughout, with several instances of the entry explicitly
   and correctly invoking the comparator entries' own anchor language rather than merely
   asserting parity.

No fabricated values, citations, DOIs, or pages were found. The entry's no-fabrication
discipline on the rejected mass figure (energy_rate_density) is the strongest execution
of that hard rule observed in this review pass.
