# Coverage check — world-wide-web

Date: 2026-07-02. Checker role: adversarial coverage checker (assume the entry
is incomplete until proven otherwise). Reference documents read in full this
pass: `schema/panel-spec.yaml`, `docs/schema.md`, `docs/roster.md`, all 15
files in `schema/anchors/`, `research/v0.2-sweep/expansion/world-wide-web-sources.md`,
`data/classes/the-internet.yaml` (reciprocity + comparator), `docs/decisions.md`
(D1-D14 for schema-shape ground truth). Target: `data/classes/world-wide-web.yaml`
(status: draft; verification block all "pending"). No files edited.

---

## 1. 30-column structural completeness (missing-entirely vs present-but-unknown)

panel-spec.yaml defines 30 columns total: 1 top-level categorical (`category`)
+ 29 `attributes.*` columns (21 core + 8 extended, per D13's tally). Verified
by direct line-by-line grep against the entry's attribute keys:

| Group | Column | Present? | evidence_status recorded |
|---|---|---|---|
| — | category | YES (line 10, top-level) | n/a (categorical, direct value) |
| A | spatial_extent | YES (83) | qualitative -> `not-applicable` (cross-ref to the-internet) |
| A | characteristic_timescales | YES (101) | mixed: qualitative / unknown (link-rot row explicitly unknown) |
| A | numerosity | YES (110) | measured-disputed |
| A | instance_population | YES (136) | measured |
| A | component_ontology | YES (155) | (structured; confidence: low) |
| A | energy_rate_density | YES (188) | unknown |
| B | interaction_topology | YES (212) | categorical (network) |
| B | interaction_ontology | YES (217) | (structured) |
| B | degree_distribution | YES (251) | measured-untested |
| B | modularity | YES (323) | qualitative |
| B | hierarchy_depth | YES (347) | qualitative |
| B | fractal_dimension_spatial | YES (369) | `not-applicable` (no note-level evidence_status field, consistent w/ other not-applicable rows) |
| B | decentralization | YES (386) | qualitative |
| C | nonlinearity | YES (412) | qualitative |
| C | feedback | YES (437) | qualitative |
| C | openness_dissipation | YES (462) | qualitative |
| C | chaos_sensitivity | YES (486) | qualitative |
| C | criticality | YES (507) | qualitative |
| C | extreme_event_statistics | YES (533) | unknown |
| C | temporal_correlation | YES (559) | (no evidence_status field on this row itself — see finding below) |
| C | tipping_transitions | YES (576) | qualitative |
| D | memory_hysteresis | YES (593) | qualitative |
| D | information_processing | YES (617) | qualitative |
| E | adaptive_capacity | YES (645) | qualitative |
| E | variation_selection | YES (672) | (categorical: present; no explicit evidence_status field, consistent with the-internet's identical variation_selection treatment) |
| F | emergence | YES (691) | qualitative |
| F | self_organization | YES (716) | qualitative |
| F | robustness_resilience | YES (746) | qualitative |
| F | cascade_susceptibility | YES (771) | qualitative |

**Result: 30/30 columns structurally present. Zero missing-entirely columns.**
Every column carries a value or an explicit `unknown`/`not-applicable`, which
per filling_rules.no-guessing is a legal, non-defective state. No column was
silently dropped or omitted.

## 2. Structural blocks required by docs/schema.md

Checked against the schema.md worked example (tropical-cyclones.yaml) and D14:

- `id`, `name`, `category`, `status` — present (lines 8-11).
- `exemplars` — present (13-27), correctly follows the singleton pattern
  (mirrors the-internet.yaml's own exemplars block, explicitly cross-referenced).
- `scoping_note` — present (29-59), unusually thorough; explicitly states
  atomicity choice (pages+hyperlinks, single-layer) per
  filling_rules.atomicity-convention, and states the boundary in both
  directions (what's in, what's out, and why — including the reciprocal
  relationship to the-internet.yaml's own scoping note).
- `summary` — present (61-74), one paragraph, accessible-register, matches
  the schema.md template's intent.
- `relations` (`part_of`/`contains`) — present (76-78). See Section 3 below
  for the reciprocity check.
- `component_ontology` — present within attributes (155-186), correctly
  structured per filling_rules with `count_oom`/`interchangeable`/`itself_complex`
  per part.
- `interaction_ontology` — present within attributes (217-249), correctly
  structured with `type_count`/`alphabet_closure`/`justification`.
- `emergent_phenomena` — present (790-798), 4 named phenomena each with an
  `order_parameter` field, matching the schema.md template shape.
- `sources` — present (800-814), 7 source keys, each with a citation string
  and an explicit read-status annotation (primary-read / snippet-verified /
  snippet-only), consistent with the hard rule on citation annotation.
- `provenance` — present (816-888): `drafted_by`, `verification` (all four
  checks correctly marked `pending` — this entry has not yet been through
  citation/plausibility/consistency verification, consistent with `status: draft`),
  and a `flags` block with 5 self-flagged items from the drafting pass itself.

**Result: every structural block required by docs/schema.md is present.**

## 3. Relations reciprocity (docs/roster.md + data/classes/*)

- `world-wide-web.relations.part_of: [the-internet]` — checked against
  `the-internet.yaml` line 71: `contains: [world-wide-web]`. **Reciprocal,
  confirmed.** The entry's own `provenance.flags` block (lines 824-834)
  correctly self-documents this reciprocity and notes that the-internet.yaml
  was NOT edited by this drafting pass (already contained the forward edge
  before this entry was drafted) — consistent with instructions that this
  checker not edit reference files either.
- `world-wide-web.relations.contains: []` — checked against every other
  entry's `part_of` list (`grep -n "part_of:" data/classes/*.yaml`, all 13
  files). No existing entry declares `part_of: [world-wide-web]`, so an
  empty `contains` is correct — no missed reciprocal edge.
- Checked docs/roster.md's own roster-expansion-queue list (line 3): it
  names `world-wide-web` as one of the queue items now resolved by this
  entry's existence, consistent with the-internet.yaml's own flagged
  "unresolved -> roster expansion queue" comment that this entry's `part_of`
  edge specifically resolves.
- Candidate future `contains` targets are named in-line as a comment
  (`search-engines, hyperlink-based ranking systems`) but correctly NOT
  added as unresolved placeholder ids, since docs/roster.md's roster
  candidates list does not include either as a named candidate — adding
  them would have been fabricating roster entries. No defect.

**Result: relations block is fully reciprocal and correctly scoped. No
missing or dangling reciprocal edges.**

## 4. Sweep report vs entry — orphaned/unintegrated value check

Checked every numbered section of `world-wide-web-sources.md` against the
final entry for values recovered in the sweep but not carried into the
entry:

- Section 1 (singleton precedent) — fully integrated (exemplars, scoping_note,
  instance_population, relations.part_of all present as recommended).
- Section 2 (atomicity) — fully integrated into scoping_note.
- Section 3 (Newman 2003 Table II, both WWW rows) — fully integrated into
  degree_distribution and numerosity.detail (all named figures: n, m, z, l,
  alpha in/out, C^(1), C^(2), r for nd.edu row; n, m, z, l, alpha in/out for
  Altavista row — clustering/assortativity correctly recorded as "not given"
  for Altavista, matching the sweep report's own note that Table II leaves
  those cells blank).
- Section 4 (Barabási & Albert 1999) — fully integrated into degree_distribution
  with the exact quotes preserved, the in-degree-only scope caveat preserved,
  and the reference-6 tracing gap correctly carried into provenance.flags
  rather than silently dropped.
- Section 5 (Broido & Clauset 2019) — fully integrated; the "WWW not named in
  the technological-networks passage" finding and its unconfirmed (not
  negative) status are both present in degree_distribution.method and
  restated in provenance.flags.
- Section 6 (Kleinberg 1999 / HITS) — integrated into modularity, interaction_ontology
  (crawling/indexing type), information_processing, and emergence, matching the
  sweep's own recommendation ("candidate use: modularity or hierarchy_depth... citing
  as qualitative/structural background only").
- Section 7 (Web size/numerosity) — fully integrated: worldwidewebsize.com
  figure (with the stale-tracking caveat), Google 2008 blog milestone (with
  the definitional-incommensurability caveat), and the DNIB/Verisign domain
  count (with the dual-framing note vs. the-internet.yaml) are all present
  in numerosity.detail with matching caveats.
- Section 8 (energy_rate_density) — fully integrated as `unknown` with the
  cross-reference framing recommended.
- Section 9 (columns not recovered this sweep: spatial_extent,
  characteristic_timescales, fractal_dimension_spatial, extreme_event_statistics,
  temporal_correlation, tipping/cascade, chaos/Lyapunov) — ALL correctly
  recorded as `unknown`/`not-applicable`/qualitative-floor in the final entry,
  matching the sweep's own recommendations. characteristic_timescales
  specifically WAS filled (contra the sweep's "not searched" note) with
  order-of-magnitude/model-knowledge estimates explicitly flagged
  [unverified — model knowledge] — a defensible expansion beyond the sweep
  report, not a fabrication, since the values are explicitly caveated and
  the corresponding "no citable source" gap (page-load-time study, link-rot
  half-life) is preserved rather than hidden.
- Section 10 (canonical review sources) — all 5 recommended sources appear
  in the entry's `sources` block (csn2009 is referenced by name in
  filling_rules discussion but is not itself cited as a source key in this
  entry, which is correct: csn2009 is the METHODOLOGY STANDARD invoked by
  evidence_status: measured-untested, not a source this entry's values are
  drawn from — the same convention the-internet.yaml uses, where csn2009
  is also not a source key despite governing multiple evidence_status
  calls).
- "Open items/follow-ups flagged for drafting" (end of sweep report) — both
  items (part_of reciprocity; Barabási & Albert reference-6 tracing; Broido &
  Clauset corpus-coverage confirmation) are correctly carried into
  provenance.flags rather than silently resolved or dropped.

**Result: no orphaned sweep values found. Every quantitative figure and every
open caveat recovered during the sweep is either integrated into the entry or
explicitly carried forward as a provenance flag. This is unusually clean
sweep-to-entry fidelity.**

## 5. Fillable-from-literature vs genuinely-unmeasured judgment, per unknown/not-applicable value

Adversarial pass: for every column recorded `unknown`/`not-applicable`/floor-score-for-lack-of-evidence,
judging whether a specific, named candidate source plausibly exists in the
literature and should have been chased before draft, vs. is a genuine,
currently-unmeasured gap.

- **spatial_extent = not-applicable**: Defensible as scoped OUT (physical
  infrastructure belongs to the-internet.yaml), not a fillability gap — this
  is a scoping call, not a missing measurement. No action needed.
- **characteristic_timescales, page-load-time row**: Plausibly fillable —
  HTTP Archive / web.dev's "Core Web Vitals" reporting (Google's own
  CrUX/HTTP Archive dataset) publishes citable, large-sample page-load timing
  distributions (e.g. Largest Contentful Paint percentiles) that would upgrade
  this row from [unverified — model knowledge] to a primary-read measured
  figure. Named candidate: HTTP Archive / Google CrUX "State of the Web"
  reports. **FIX-level**: a live, well-known, easily fetchable data source
  exists for this specific figure and was not chased.
- **characteristic_timescales, link-rot half-life row = unknown**: The entry
  itself is right to reject the "~100 days" folklore figure as untraced. But
  a citable academic literature DOES exist on link rot half-life with rigorous
  methodology — e.g. Klein et al. 2014 ("Scholarly Context Not Found," PLOS
  ONE) on reference rot, or the more directly on-point SalahEldeen & Nelson
  2013 ("Losing My Revolution: How Many Resources Shared on Social Media
  Have Been Lost?") which fits a half-life curve to shared-URL decay. Neither
  was located/sought this sweep per the sweep report's own text. **FIX-level**:
  named candidate sources exist; this is a chaseable gap, not a floor.
- **fractal_dimension_spatial = not-applicable (physical) with an open
  question flagged for graph-theoretic fractal dimension**: the entry itself
  correctly identifies this distinction and defers the graph-structural
  question rather than fabricating an answer — legitimate `note`-level open
  item, not a defect.
- **extreme_event_statistics = unknown**: page-popularity/traffic rank-size
  literature (Zipf-like laws for website traffic, e.g. Adamic & Huberman's
  "Zipf's law and the Internet" 2002, which explicitly measures web-site
  popularity rank-size scaling) is a plausible candidate the sweep report
  itself gestures at ("page-popularity/traffic rank-size distributions, if
  pursued, would be measurand_type static-cross-sectional") but never
  actually chased. **NOTE-level** (not fix — the entry correctly identifies
  this would be a DIFFERENT measurand_type than a true event-statistics
  claim, and the panel-spec's own filling_rules require the two not be
  conflated; recording unknown rather than reaching for Adamic & Huberman
  under the wrong measurand_type is the more disciplined choice, but the
  citation is a good candidate for a dedicated future pass).
- **temporal_correlation = unknown**: no obvious near-miss candidate located
  by this checker either; genuinely underexplored territory (no established
  "Hurst exponent of link-creation rate" literature is known to this
  checker). Left as a genuine gap, not fillable with a currently-nameable
  source.
- **tipping_transitions = 0 / cascade_susceptibility = 1 / chaos_sensitivity = 0
  / criticality = 0**: cross-checked directly against the criticality anchor's
  `boundary_clarifications` (`published-claim-required`, `mechanism-alone-caps-at-1`)
  — the world-wide-web entry's criticality=0 (vs. the-internet's 1) is
  correctly justified by the ABSENCE of even an informal published claim,
  which the anchor's own rule requires before scoring 1. This is a properly
  disciplined score, not an unexamined default. No fix needed.
- **energy_rate_density = unknown**: correctly cross-references
  the-internet.yaml's own identical unknown verdict and explains why a
  Web-specific figure would require an un-sourced attribution split. No
  fillable candidate identified by this checker either. Genuine gap.

## 6. Anchor-contradiction check (rubric/hybrid scores against schema/anchors/*.yaml)

Read all 15 anchor files in full (self_organization, nonlinearity,
memory_hysteresis, feedback, information_processing, modularity,
openness_dissipation, chaos_sensitivity, adaptive_capacity,
robustness_resilience, decentralization, cascade_susceptibility,
tipping_transitions, emergence, criticality). Cross-checked every score in
the entry against its anchor's scale text and the-internet's own anchor
placement (the nearest and most load-bearing comparator, since world-wide-web
explicitly reasons "by contrast with the-internet" in nearly every
justification):

- modularity=2, decentralization=3, criticality=0, emergence=2,
  self_organization=3, temporal comparisons in chaos_sensitivity=0 and
  cascade_susceptibility=1 — all checked directly against their anchor
  files' scale text and found consistent, well-reasoned, and correctly
  differentiated from the-internet's placements where a difference is
  claimed (self_organization 3 vs. 2, criticality 0 vs. 1) with a specific,
  non-generic argument each time. No anchor contradictions found.
- No score in this entry appears to be a mechanical copy-paste of
  the-internet's score without independent justification — each rubric/hybrid
  block gives its own reasoning even where the final numeric score matches.

**Result: no anchor contradictions found.**

## 7. Minor structural/presentation observations (note-level only)

- `temporal_correlation` (attributes, line 559) and `variation_selection`
  (line 672) do not carry an explicit `evidence_status:` field at the
  top level of their block (unlike nearly every other column). For
  `temporal_correlation` this is likely intentional (the value itself is the
  literal string "unknown" with a `note`, no separate evidence_status field
  needed since the value token already states it) — but this is inconsistent
  with extreme_event_statistics and energy_rate_density in the SAME entry,
  which both use value: unknown AND evidence_status: unknown redundantly.
  Not a blocker; a minor formatting inconsistency worth normalizing at the
  next pass.
- `hierarchy_depth`'s "2 organizational levels" convention (pages -> sites ->
  global graph) is internally well-justified and explicitly contrasted with
  the-internet's 3-level convention, but no anchor file exists for
  hierarchy_depth (it is `kind: quantitative`, not rubric/hybrid, so this is
  expected and not a gap — confirmed against panel-spec.yaml's kind
  declarations).
- The `not-applicable` token used for spatial_extent and
  fractal_dimension_spatial matches the prevailing catalog convention
  (10 of 12 not-applicable values across all entries use the bare token;
  only financial-markets.yaml's spatial_extent uses the outlier
  `not-applicable-spatial`) — confirmed NOT a defect in this entry.

---

## Summary of findings by severity

- **blocker**: none found.
- **fix**: 2 (characteristic_timescales page-load-time row — chaseable HTTP
  Archive/CrUX source not pursued; characteristic_timescales link-rot
  half-life row — chaseable Klein 2014 / SalahEldeen & Nelson 2013 candidate
  not pursued).
- **note**: 3 (extreme_event_statistics — Adamic & Huberman 2002 candidate,
  correctly not used given measurand-type discipline, but worth a future
  targeted pass; temporal_correlation/variation_selection evidence_status
  field inconsistency; general observation that sweep-to-entry fidelity is
  unusually clean with no orphaned values).
