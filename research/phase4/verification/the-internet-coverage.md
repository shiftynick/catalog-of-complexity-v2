# Coverage Check — the-internet

Checker: COVERAGE CHECKER (adversarial). Date: 2026-07-02.
Target: `N:\coc\data\classes\the-internet.yaml`
References: `schema/panel-spec.yaml`, `schema/anchors/*.yaml` (15 files),
`docs/schema.md`, `docs/roster.md`, `research/phase4/the-internet-sources.md`.

No edits made to the entry or any reference file (read-only check).

---

## 1. Panel-spec column coverage (30 columns)

Extracted all `- id:` entries from `schema/panel-spec.yaml` (29 attribute
columns + top-level `category`) and cross-checked against the entry's
top-level `category:` field and `attributes:` block keys.

Result: **30/30 present.**

- `category` — top-level field, `infrastructure`. Present.
- Group A (7): spatial_extent, characteristic_timescales, numerosity,
  instance_population, component_ontology, energy_rate_density — all present
  as attribute keys.
- Group B (6): interaction_topology, interaction_ontology, degree_distribution,
  modularity, hierarchy_depth, fractal_dimension_spatial, decentralization —
  all present. (7 listed; all 7 present.)
- Group C (8): nonlinearity, feedback, openness_dissipation, chaos_sensitivity,
  criticality, extreme_event_statistics, temporal_correlation,
  tipping_transitions — all present.
- Group D (2): memory_hysteresis, information_processing — both present.
- Group E (2): adaptive_capacity, variation_selection — both present.
- Group F (4): emergence, self_organization, robustness_resilience,
  cascade_susceptibility — all present.

No column is missing entirely. Every column carries an explicit value
(including `unknown` for chaos_sensitivity.score, energy_rate_density.value,
extreme_event_statistics.value) — per filling_rules.no-guessing, "unknown"
present-but-declared is legal and NOT a defect; only fully absent columns
would be. None are absent.

## 2. Structural blocks required by docs/schema.md

- `exemplars`: present, 1 entry (singleton class, correctly modeled per
  schema.md's explicit note: "Singleton classes (e.g., the-internet) are
  legal: one exemplar that is the whole class").
- `scoping_note`: present, states dual atomicity (AS-level for
  network-structure columns, packet/flow-level for traffic columns) per
  filling_rules.atomicity-convention.
- `summary`: present, one paragraph, accessible-layer tone as required.
- `relations`: present (`part_of: []`, `contains: [world-wide-web]`).
  `world-wide-web` is a legal unresolved roster-queue reference — confirmed
  present in docs/roster.md's "Infrastructure & technological" candidate list
  (not yet a class entry in data/classes/), so leaving it unresolved is
  correct per schema.md's explicit convention, not a gap.
- `component_ontology`: present, structured, 5 typed parts.
- `interaction_ontology`: present, structured, 4 types, type_count and
  alphabet_closure both filled.
- `emergent_phenomena`: present, entry-level list, 4 items, each with
  name + order_parameter as required.
- `sources`: present, 7 keyed citations, each annotated primary-read vs.
  snippet-only per the hard rule (checked individually, see Section 5).
- `provenance`: present — drafted_by, verification block (4 checks, all
  correctly `pending` since this is itself the coverage-check pass), and a
  5-item `flags` list surfacing the entry's own top self-identified gaps.

All required structural blocks are present and populated.

## 3. Relations / roster reciprocity check

Searched `data/classes/*.yaml` for any reference to `the-internet` as a
relations-block member (not just prose mentions). Result: no other existing
entry (cities, earthquake-fault-systems, financial-markets, languages,
power-grids, river-networks, stars, tropical-cyclones) lists `the-internet`
in its own `part_of` or `contains` array. All other file-matches on
"the-internet" are prose comparator references inside rubric justifications
(anchor-scale comparisons: languages, earthquake-fault-systems,
financial-markets, power-grids, river-networks, stars, cities), not relation
entries. No reciprocity gap exists to flag — none of the other 8 entries in
data/classes/ have a plausible compositional relation to the-internet that is
missing.

the-internet's own `contains: [world-wide-web]` is a one-way, deliberately
unresolved forward reference (roster-queue placeholder) — correct as-is,
nothing to reconcile against an entry that doesn't exist yet.

`part_of: []` — checked for a plausible missing candidate (e.g., some
"global digital economy" or "infrastructure" super-system). No such class
exists in the roster's pilot-10 or full candidate list as a natural container
for the Internet; empty is a considered value, not an obviously missing one.

## 4. Anchor cross-check (schema/anchors/*.yaml, 15 files)

For every rubric/hybrid column where the-internet.yaml's justification cites
"per this class's own anchor," verified the anchor file actually contains a
dedicated the-internet worked-example block, and that score/evidence_status
match:

| Column | Anchor file has dedicated the-internet block? | Score in anchor | Score in entry | Match |
|---|---|---|---|---|
| modularity | yes | 2 | 2 | match |
| decentralization | yes | 3 | 3 | match |
| nonlinearity | yes | 2 | 2 | match |
| tipping_transitions | yes | 0 | 0 | match |
| memory_hysteresis | yes | 2 | 2 | match |
| emergence | yes | 2 | 2 | match |
| self_organization | yes | 2 | 2 | match |
| robustness_resilience | yes | 3 | 3 | match |
| criticality | yes | 1 | 1 | match |
| cascade_susceptibility | yes | 1 | 1 | match |
| feedback | **no dedicated block** | n/a | 2 | entry does NOT claim a dedicated anchor — wording is "matching the feedback anchor scale's level 2" (the generic 0-4 scale text, which does exist) plus comparators to financial-markets(3)/tropical-cyclones(4), both of which DO check out against feedback.yaml's real anchors. No false claim. |
| openness_dissipation | **no dedicated block** | n/a | 2 | entry correctly says "Per this class's own anchor family (openness_dissipation.yaml, financial-markets NYSE comparator at score 2)" — explicitly names NYSE as the comparator, not a fabricated the-internet anchor. financial-markets' NYSE score in openness_dissipation.yaml is indeed 2. No false claim. |
| chaos_sensitivity | **no dedicated block** | n/a | unknown | entry explicitly does NOT claim a dedicated anchor exists; scores `unknown` and cites the atmosphere's score-4 anchor only as a comparison target, correctly noting no Internet-specific study was located. No false claim. |
| information_processing | **no dedicated block** | n/a | 3 | entry says "Per the information_processing anchor's cross-reference note" and accurately quotes the anchor file's `notes:` section verbatim (Internet "not separately anchored... but explicitly flagged as expected to land in the 3-4 range 'for the same SCADA/protocol reasons as ERCOT'"). Accurate paraphrase of real anchor-file text. No false claim. |
| adaptive_capacity | **no dedicated block** | n/a | 2 | entry cites the financial-markets anchor (score 4) as contrast/comparator, correctly. adaptive_capacity.yaml's own notes section separately lists "robust + adaptive (languages, the-internet)" in its 2x2 discussion — confirms the-internet's placement is anchor-consistent even without a full dedicated worked block. No false claim. |

**Finding**: four anchor files (feedback.yaml, openness_dissipation.yaml,
chaos_sensitivity.yaml, information_processing.yaml, and adaptive_capacity.yaml
— five, not four) have no dedicated the-internet worked-example entry, but in
every case the-internet.yaml's own justification prose is careful not to
overclaim a dedicated anchor — it either names the real comparator anchor it's
actually using, or (chaos_sensitivity) explicitly records the absence and
scores `unknown`. This is good practice, not a defect, but it IS a standing
gap in the anchor-file layer itself (five anchors lack a the-internet worked
example that the ten worked/scored columns above do have) — noted as a
process gap for the anchor-authoring track, not a defect in this entry.

## 5. Sources block / citation-linkage audit

All 7 keyed sources (newman2003, broido-clauset2019, yook2002, leland1994,
itu2025, dnib2025, iea-energy-ai, apnic-huston — 8 actually, recount below)
carry explicit primary-read vs. snippet-only annotation in their `citation:`
string, satisfying the hard rule.

Recount: newman2003, broido-clauset2019, yook2002, leland1994, itu2025,
dnib2025, iea-energy-ai, apnic-huston = **8 source keys**.

Cross-checked which of these 8 are actually *referenced by key* inside an
attribute's `sources: [...]` array (not just named in prose/method/note text):

- newman2003 — referenced (degree_distribution, modularity)
- broido-clauset2019 — referenced (degree_distribution)
- yook2002 — referenced (fractal_dimension_spatial)
- leland1994 — referenced (temporal_correlation)
- itu2025 — **never referenced by key** in any `sources:` array (only named
  in component_ontology's inline text, "6.0 billion, 2025, ITU")
- dnib2025 — **never referenced by key** (only named inline, "386.9 million,
  end 2025, DNIB")
- iea-energy-ai — **never referenced by key** (only named inline in
  energy_rate_density's `method` prose, "IEA")
- apnic-huston — **never referenced by key** (only named inline in
  component_ontology / degree_distribution prose, "APNIC/Huston")

`numerosity` (type: quantitative, evidence_status: measured-disputed) has
**no `sources:` field at all**, even though its value draws directly on
itu2025 (human users), dnib2025 (domains), and apnic-huston (AS nodes) — all
three exist as defined source keys and are simply not wired to this
attribute. Compare stars.yaml's numerosity (also type: quantitative), which
does carry `sources: [granulation-secondary]` — establishing that
quantitative-typed columns in this catalog are expected to carry a `sources:`
array. the-internet's numerosity is the outlier.

`characteristic_timescales`'s "BGP route-convergence" row carries
`evidence_status: measured` with `sources: []` (empty) and no source key
defined anywhere for Labovitz et al. (the note honestly says "original
academic source... not independently opened" but no placeholder/lead source
entry was added even as snippet-only, unlike how itu2025/dnib2025/iea-energy-ai
were added despite equivalent snippet-only status). The "AS-level topology
growth" row in the same list has no `sources` field at all (not even `[]`).

`component_ontology`'s inline-citation-without-sources-array pattern (e.g.,
"10,697 in 2001, Newman/RouteViews; ~75,000-83,739 in 2025/26, APNIC/Huston"
inside `count_oom` text, no `sources:` key on the column) matches the
established catalog convention for `type: structured` columns (verified
against power-grids.yaml's component_ontology, which uses the same
inline-citation-in-text pattern with no top-level `sources:` key) — NOT a
defect, just noting it for contrast with numerosity's gap above.

## 6. Sweep report (research/phase4/the-internet-sources.md) orphan-value check

Compared every quantitative figure recovered in the sweep against the entry
to find recovered-but-never-integrated values:

- Spatial extent (4e7 m geometric estimate) — integrated, matches sweep
  exactly, same unverified/qualitative flagging.
- Characteristic timescales (all 4 named processes) — integrated, matches.
- AS node counts (10,697 / 75,000-83,739) — integrated.
- Registered domains (386.9M, DNIB) — integrated.
- Human users (6.0B, ITU) — integrated.
- Connected devices (18.5-21.1B IoT; up to 25-30B all-connected) — integrated,
  though entry's component_ontology "connected devices" row states
  "1.85-2.1e10" for IoT (matches sweep's 18.5-21.1 billion) and the
  higher "2.5-3e10" figure in the entry's `numerosity.detail` note broadly
  matches the sweep's "~25-30 billion by 2026" range (within rounding).
- Degree distribution (Newman 2003 full Table II row: n, z, l, alpha, C, r)
  — integrated in full (all six statistics present in the entry's `method`
  field, not just alpha).
- Broido & Clauset 2019 counterweight — integrated, including the explicit
  statement that the exact Internet-row classification was not confirmed.
- Fractal dimension (Yook et al., D_f=1.5+/-0.1) — integrated, plus the
  measurand-distinctness note.
- Temporal correlation (Leland et al., H~0.7-0.85 secondary-literature
  reconstruction) — integrated, with the primary-vs-secondary numeric gap
  flagged identically to the sweep.
- Extreme event statistics / cascade gap — integrated as `unknown`, matches.
- Tipping elements — **partially orphaned**. The sweep (Section 7) names a
  specific lead: AEI "Beyond Infrastructure: Internet Ecosystem Resilience
  and the Public Good" (2025, ScienceDirect/AEI, snippet-only) as the source
  for the qualitative "submarine-cable chokepoints, major IXPs, DNS root
  infrastructure" discussion. The entry's `tipping_transitions.justification`
  reuses this exact qualitative content (same three examples: submarine-cable
  chokepoints, major IXPs, DNS root infrastructure) but never adds an AEI
  source key to the `sources:` block or names the source even loosely in the
  entry text — the content is used unattributed. This is defensible under
  the no-fabrication rule (the sweep explicitly says "re-verify before
  citing," so NOT citing it is correct), but the entry could have flagged the
  lead explicitly in `provenance.flags` (as it does for four other columns)
  rather than silently absorbing the qualitative content with no traceability
  back to where it came from. Low-severity note, not a blocker: no false
  citation was created, but the provenance trail for this specific sentence
  is thinner than it should be.
- Energy rate density (IEA 415 TWh, mass rejected) — integrated in full,
  including the explicit rejection of the "~100 million tons" figure and the
  reasoning for why (unsourced blog origin, not project model-knowledge).
- Chaos/predictability gap — integrated as `unknown`, matches.
- Current AS count / CAIDA follow-up flag — integrated into
  `component_ontology`'s note field indirectly (both counts present) but the
  sweep's **specific allocation-vs-routed distinction is an orphan**: the
  sweep (Section 4c) explicitly surfaces "IANA has assigned 402,332 ASNs to
  the five RIRs; RIRs have in turn assigned ~88,400 ASNs to network operators
  cumulatively" as a *different* countable quantity from the actively-routed
  BGP count, and explicitly warns "should not be conflated with the
  actively-routed BGP count above — flagged explicitly to avoid the catalog
  silently mixing the two." The entry's `component_ontology` AS-nodes row
  only carries the actively-routed figures (10,697 / 75,000-83,739) and never
  mentions the allocation figures (402,332 / 88,400) at all — so there is no
  risk of conflation, but the sweep's flagged distinction is simply dropped
  rather than recorded. This is a genuine recovered-but-never-integrated
  orphan value. Fillable-from-literature: yes, the candidate source is
  already named in the sweep (RIPE policy-proposal text surfaced via search,
  snippet-only) — a follow-up pass could add a short parenthetical
  distinguishing "allocated (~88,400 RIR-assigned cumulative) vs.
  actively-routed (~75,000-83,739) ASNs" to component_ontology or its note.

## 7. Fillable-from-literature vs. genuinely-unmeasured judgment on every `unknown`

- `energy_rate_density.value: unknown` (mass input) — genuinely unmeasured
  per this session's search; sweep explicitly rejects the only circulating
  figure as unsourced. Candidate source for a future attempt: none identified
  in the sweep beyond the rejected blog claim; would need a dedicated
  infrastructure-mass inventory study (none known to exist). Judged
  genuinely unmeasured, not merely unfound.
- `chaos_sensitivity.score: unknown` — genuinely unmeasured; no Lyapunov/
  predictability-horizon study for Internet traffic or topology was located
  across two independent sweeps (Phase 1 + Phase 4). Judged genuinely
  unmeasured.
- `extreme_event_statistics.value: unknown` — genuinely unmeasured; confirmed
  gap across two sweeps, correctly distinguished from the power-grid-specific
  Dobson et al. literature (different system, not conflatable).
- `component_ontology` "routers / physical infrastructure nodes":
  `count_oom: unknown` — flagged by the entry itself as "not recovered in the
  Phase 4 sweep." Fillable-from-literature candidate: CAIDA's router-level
  topology projects (Rocketfuel/Skitter-descended, or CAIDA Macroscopic
  Topology) plausibly hold an order-of-magnitude router count; not searched
  this session. Judged plausibly fillable in a follow-up, not confirmed
  unmeasured in the absolute sense — correctly left `unknown` rather than
  guessed.
- `modularity` Q value — not `unknown` exactly (scored qualitatively at 2)
  but explicitly notes "no specific Q value confirmed." Fillable-from-
  literature candidate: named already in the entry/anchor
  ("[unverified — model knowledge]... a verified published Q would supersede
  this qualitative placement") — likely candidate papers are AS-graph
  community-detection studies (e.g., work building on CAIDA AS-relationship
  data with Louvain/Newman modularity clustering); not searched this session,
  correctly flagged as a placeholder rather than fabricated.

## 8. Miscellaneous structural notes (non-blocking)

- `provenance.verification` all four checks correctly show `pending` — this
  coverage-check pass itself has not yet been recorded back into the entry
  (out of scope for this checker to edit, per instructions).
- `status: draft` is correct/consistent with `verification` all-pending
  (contrast financial-markets.yaml and tropical-cyclones.yaml, both
  `status: verified` only after "all four checks completed").
- Dual-atomicity declaration in scoping_note is honored consistently
  throughout Group B/C columns (degree_distribution and fractal_dimension_
  spatial both explicitly name their measurand as required by
  filling_rules.measurand-required; temporal_correlation likewise).

---

## Summary of defects found (feeds structured output)

1. **fix** — numerosity: `evidence_status: measured-disputed` but no
   `sources:` array despite three already-defined, relevant source keys
   (itu2025, dnib2025, apnic-huston) existing unused in the entry-level
   sources block.
2. **fix** — characteristic_timescales: BGP route-convergence row marked
   `evidence_status: measured` with `sources: []` and no corresponding
   source-key entry anywhere (Labovitz et al. never added even as a
   snippet-only lead, unlike equivalent-confidence claims elsewhere in the
   same entry).
3. **note** — component_ontology / numerosity: sweep-recovered ASN
   allocation-vs-routed distinction (IANA 402,332 assigned; RIRs ~88,400
   cumulative assigned) never integrated into the entry, even as a footnote
   avoiding conflation with the actively-routed AS count.
4. **note** — tipping_transitions: qualitative content (submarine-cable
   chokepoints, IXPs, DNS root) reused from the sweep's AEI/ScienceDirect
   lead without attribution or a provenance.flags entry recording the lead,
   even though not citing it as a formal source is correct per the
   no-fabrication rule.
5. **note** — five anchor files (feedback.yaml, openness_dissipation.yaml,
   chaos_sensitivity.yaml, information_processing.yaml, adaptive_capacity.yaml)
   lack a dedicated the-internet worked-example block, unlike the other ten
   rubric/hybrid columns. Not a defect in the-internet.yaml itself (its
   prose is careful not to overclaim), but a standing gap in the anchor
   layer worth flagging for the anchor-authoring track.
