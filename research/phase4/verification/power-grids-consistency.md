# Consistency Check — power-grids

Checker: CONSISTENCY CHECKER (commensurability enforcer)
Target: `N:\coc\data\classes\power-grids.yaml`
Reference set: `schema/panel-spec.yaml`; `schema/anchors/*.yaml` (15 files, all read in full);
`docs/schema.md`; `docs/roster.md`; `research/phase4/power-grids-sources.md`;
cross-entry references: `data/classes/tropical-cyclones.yaml`, `data/classes/financial-markets.yaml`
(the two verified entries).
Date: 2026-07-02. No edits made to the entry or any reference file per instructions.

---

## Method

1. Read the full entry and enumerated all 30 attribute columns.
2. For each of the 15 rubric/hybrid columns, read the corresponding `schema/anchors/<column>.yaml`
   in full and compared: (a) whether power-grids is itself a worked anchor there — if so, exact
   score + justification-substance match required; (b) if not anchored, tested the score against
   the scale text and the nearest neighboring anchors (earthquake-fault-systems, the-internet,
   financial-markets, tropical-cyclones, stars, cities as applicable).
3. Audited all six `filling_rules` (power-law-rigor, soc-two-claims, no-market-chaos,
   measurand-required, atomicity-convention, interaction-typing) against the entry's actual text.
4. Audited every `level:` tag for internal consistency (same evidentiary basis should carry the
   same level tag across sibling columns) and against `docs/schema.md`'s D14 convention.
5. Cross-read `tropical-cyclones.yaml` and `financial-markets.yaml` (both `status: verified`) for
   parallel-construction coherence (hierarchy_depth convention, loop-list format, source-annotation
   discipline, orphan-source hygiene, evidence_status usage).
6. Checked every citation to another anchor file / entry mentioned inline in a justification
   against that file's actual content (i.e., verified the cross-references themselves, not just
   the reasoning built on them).

---

## Columns where power-grids IS the worked anchor — score/justification match

| Column | Anchor score | Entry score | Match |
|---|---|---|---|
| modularity | 3 | 3 | Score matches. Justification substance matches **except** a factual detail: the anchor's own justification calls ERCOT "one of three **MAJOR** North American grids"; the entry (correctly, per its own sweep and its `instance_population` correction) calls it "one of the three **MINOR** North American interconnections." See Finding 2. |
| decentralization | 1 | 1 | Exact match, justification near-verbatim. |
| information_processing | 3 | 3 | Exact match, justification near-verbatim (SCADA/AGC/market layer reasoning, held below 4 for governor-droop hardwiring). |
| adaptive_capacity | 2 | 2 | Exact match, justification near-verbatim (rule-mediated, episodic, boundary-sensitive scoring with ISO inside). |
| self_organization | 1 | 1 | Exact match, justification near-verbatim. |
| robustness_resilience | 2 | 2 | Exact match; entry adds the Feb 2021 casualty/cost detail and interconnection-isolation point as elaboration, consistent with and not contradicting the anchor. |
| cascade_susceptibility | 3 (measured-disputed) | 3 (measured-disputed) | Score and evidence_status match. **Numeric exponent mismatch**: anchor states "roughly 1.3-2.0"; entry states "roughly -1 to -2." See Finding 1 (this is the most serious finding). |

No score drift found on any of the seven power-grids-anchored columns. The one blocking-tier
problem in this set is a **numeric** mismatch (Finding 1), not a score mismatch.

---

## Columns NOT anchored to power-grids — tested against scale text and neighbors

| Column | Score | Verdict |
|---|---|---|
| nonlinearity | 3 | Justification explicitly benchmarks against earthquake-fault-systems (score 3, "nonlinearity concentrated at bifurcation/threshold, quasi-linear otherwise") — an apt, well-matched comparison. Consistent with scale text. |
| feedback | 3 | Loop list present and well-formed (required at score ≥2 per feedback.yaml). Benchmarked against hurricane's WISHE (4) and financial-markets (3) — reasoning parallels the financial-markets anchor's "central but not sole organizing description" logic closely and correctly. Consistent. |
| openness_dissipation | 2 | Defensible but internally strained — see Finding 3. |
| chaos_sensitivity | 1 | Score and reasoning are fine on their own terms, but the justification cites "comparable to the-internet anchor's reasoning in chaos_sensitivity.yaml" — **the-internet is not an anchor in that file at all** (anchors present: planetary-climate, tropical-cyclones, financial-markets, earthquake-fault-systems, stars, river-networks). See Finding 4. |
| criticality | 2, mechanism_status: contested | Score matches the criticality.yaml scale-2 text well and correctly implements filling_rules.soc-two-claims (two sub-claims, not averaged). `mechanism_status: contested` is enum-conformant and matches the analogous earthquake-fault-systems entry's usage. **Level-tag inconsistency** with sibling columns citing the same underlying data — see Finding 5. |
| extreme_event_statistics | (value, not scored) | Uses the same "-1 to -2" figure as criticality — see Finding 1. `evidence_status: measured-disputed`, `level: class-general` — appropriately conservative and consistent with cascade_susceptibility's tagging. |
| temporal_correlation | (value, not scored) | Explicitly downgraded to evidence_status: unknown despite a specific number existing in the snippet, per filling_rules.measurand-required — correct, careful application of the rule. Consistent with catalog discipline (cf. financial-markets' temporal_correlation, which is measurand-named and evidence_status: measured because the source was actually confirmed). |
| tipping_transitions | 2 | Correctly and explicitly resolves the exact ERCOT boundary case flagged (but left unanchored) in tipping_transitions.yaml's own notes. Well-reasoned, matches scale-2 text precisely (named mechanism, single case, no systematic inventory). |
| memory_hysteresis | 2 | Matches memory_hysteresis.yaml scale-2 text precisely; the earthquake-fault-systems comparison ("demonstrable path-dependence... no published hysteresis-loop measurement") is accurate to that anchor's actual reasoning. Consistent. |
| emergence | 2 | Reasoning is sound and correctly applies the emergence.yaml scale-2/3 boundary (one formalized order parameter for voltage collapse, but not the field's PRIMARY mode of study, unlike price formation for markets). Minor wording imprecision: justification says the score sits "between the-internet's 2 and tropical-cyclones'/convection-cells' 3," but the assigned score (2) is not literally between two anchors — it equals the-internet's score. Cosmetic only; the underlying placement logic is correct. Note-level only. |

---

## Filling-rules audit

- **power-law-rigor**: Correctly applied throughout. `extreme_event_statistics` and `cascade_susceptibility` both carry `evidence_status: measured-disputed` (not a bare "measured") because CSN-2009-grade rigor was not confirmed for Dobson et al. 2007 (snippet-only, extraction failed twice) — this is the right label per the panel-spec's own distinction between `measured-untested` (rigor not yet assessed) and `measured-disputed` (contested on statistical or mechanistic grounds); the entry documents that the paper's power-law-vs-alternative classification is actively disputed by CSN-tradition critics, which is specifically what `measured-disputed` is for. Correct rule application, independent of the numeric-sign problem in Finding 1.
- **soc-two-claims**: Correctly implemented in `criticality` (event statistics vs. mechanism recorded as two distinguishable sub-claims, mechanism_status separately tagged) and consistent with `cascade_susceptibility`'s parallel treatment, exactly as both anchor files instruct. No violation found.
- **no-market-chaos**: Not directly applicable (power-grids is not a market), but the entry correctly distinguishes bifurcation-structure claims from chaos-sensitivity claims in `chaos_sensitivity`'s justification ("a bifurcation and a positive Lyapunov exponent are logically distinct claims"), which is the same discipline this rule enforces for markets. No violation.
- **measurand-required**: Correctly and carefully applied in `temporal_correlation` — the Hurst-exponent snippet is explicitly held at `evidence_status: unknown` rather than `measured` because the measurand (grid identity, sampling rate) was not confirmed, even though a specific number exists in the source. This is exactly the rule's intended effect and is one of the entry's strongest pieces of evidentiary discipline.
- **atomicity-convention**: Declared clearly in the scoping note (bus/node and transmission line/edge, per Deka & Vishwanath's 5,514-node/6,522-edge graph), consistent in kind with tropical-cyclones' (air parcels) and financial-markets' (trading agents/orders) atomicity declarations — each entry picks the level at which characteristic dynamics operate, not the finest physical grain. No violation.
- **interaction-typing**: `interaction_ontology` individuates by mechanism/carrier (power flow, frequency sync, telemetry/control, market/dispatch) — four genuinely mechanism-distinct types, not outcome-based splits. Consistent with the rule. One citation-accuracy problem within this column's justification — see Finding 6.

---

## Level-tag audit (filling_rules.level-required + docs/schema.md D14)

- **Finding 5** (below): `criticality` tagged `level: exemplar(ercot)` while `extreme_event_statistics`
  and `cascade_susceptibility` — citing the *same* Dobson et al. (2007) North-American-wide,
  non-ERCOT-specific finding — are tagged `level: class-general`. All three columns' own
  justification text says the finding is inherited at the class level ("no ERCOT-specific ...
  fit exists"). The `exemplar(ercot)` tag on `criticality` is inconsistent with its own stated
  evidentiary basis and with its two sibling columns in the same entry.
- `hierarchy_depth` is tagged `exemplar(ercot)`, consistent with the entry's overall
  ERCOT-primary-exemplar framing and comparable to earthquake-fault-systems' and cities'
  `hierarchy_depth` tagging pattern (exemplar/class-general as appropriate to their own primary
  exemplars). No problem with the tag itself — see Finding 7 for a different problem with this
  column's *content*.
- All other level tags read as intentional and defensible on inspection (e.g. `interaction_topology`/
  `interaction_ontology` class-general, matching both tropical-cyclones and financial-markets'
  practice of scoring physics/mechanism-fixed columns at class level even when the entry's other
  columns are exemplar-scoped).

---

## Cross-entry coherence (vs. tropical-cyclones.yaml, financial-markets.yaml)

- **hierarchy_depth convention**: Correctly follows the panel-spec's declared convention (atoms
  not counted as a level; count aggregation levels up to and including the whole) — matches
  earthquake-fault-systems, the-internet, and cities' entries exactly in form. **However**, the
  panel-spec explicitly states: *"Composition BETWEEN catalog entries ... lives in the entry-level
  relations block (part_of / contains) ... not in this column."* Power-grids' level-3 ("the North
  American grid-of-grids the interconnection couples into only weakly, via limited DC ties")
  is composition between power-grids and a not-yet-existing sibling entry, not a level inside
  ERCOT's own boundary — a direct violation of this explicit rule. Contrast tropical-cyclones,
  whose `hierarchy_depth` stops at "storm-scale vortex" (strictly inside its own boundary) and
  separately records `relations: part_of: [weather-systems, planetary-climate]` for the
  compositional fact. Power-grids' own `relations.part_of` is `[]` (unresolved), so the
  compositional claim is not recorded where the schema says it belongs and is instead smuggled
  into a column the spec explicitly reserves for intra-boundary levels only. See Finding 7.
- **Loop-list format** (feedback column): power-grids' loop list is structurally identical in
  form to tropical-cyclones' and financial-markets' (`name`, `sign`, `mechanism` triples),
  satisfying feedback.yaml's binding requirement. Consistent.
- **Citation/evidence-status discipline**: power-grids' `sources:` block annotates every citation
  primary-read vs. snippet-only, matching the discipline of both verified entries. One orphan
  source found — see Finding 8 (compare: tropical-cyclones' provenance log explicitly records
  "Emanuel 1999 orphan integrated" as a coverage-check fix, i.e., this is a known failure mode
  the project already polices for; power-grids has one such case still outstanding).
- **mechanism_status enum**: `contested` is used consistently with earthquake-fault-systems.yaml's
  and financial-markets.yaml's usage of the same enum value for structurally similar
  "proposed-and-disputed SOC mechanism" situations. No drift.
- **evidence_status: measured-untested vs. measured-disputed**: power-grids never uses
  `measured-untested` where `measured-disputed` would be more accurate or vice versa, as far as
  checked — consistent with tropical-cyclones' correct use of `measured-untested` for a
  rigor-not-yet-assessed case (Corral 2010) versus power-grids' correct use of `measured-disputed`
  for a rigor-actively-contested case (Dobson 2007).

---

## Findings (full detail)

### Finding 1 — BLOCKER: blackout tail-exponent sign/magnitude contradicts the class's own anchor
`cascade_susceptibility.yaml`'s power-grids anchor (the entry's own worked anchor for this exact
column, exact same Dobson et al. 2007 citation) states: *"decay exponent roughly **1.3-2.0** for
North American unserved-energy data, 1984-1998."* The entry states, in three places
(`extreme_event_statistics` value, `criticality` justification, and `cascade_susceptibility`
justification itself), an exponent of *"roughly **-1 to -2**"* — a different sign convention
and a materially different numeric range from the anchor it is supposed to match. This is not
merely a sign-convention quibble: a CCDF decay exponent of "-1 to -2" and "1.3-2.0" describe
different tail behavior, and the entry never reconciles the discrepancy or acknowledges that its
own class anchor states a different number for the identical source and identical measurand. The
entry's own sources file (`power-grids-sources.md`) independently repeats "approximately -1 and
-2," suggesting this session's sweep re-derived (or mis-transcribed) a different figure from the
anchor's without cross-checking against the anchor file at all — exactly the drift the
consistency check exists to catch. Because Dobson et al. (2007) was snippet-only in both the
original anchor-drafting pass and this session (extraction failed twice), neither number has been
primary-verified; the catalog currently contains two different numbers for the same citation in
two different files, and this entry does not surface that conflict anywhere. This would poison
the catalog if published as-is (a wrong or internally contradictory tail-exponent value under a
`measured-disputed` label reads as authoritative).

### Finding 2 — FIX: modularity anchor/entry disagree on "major vs. minor" and the entry doesn't flag it
`modularity.yaml`'s power-grids anchor justification calls ERCOT "one of **three major** North
American grids." The entry's `modularity` justification instead says "one of the three **MINOR**
North American interconnections, per this entry's corrected `instance_population` framing" — and
the entry is very likely *right* (its own `instance_population` and the sweep report both
establish, from primary Wikipedia/DOE sourcing, that ERCOT is one of the three *minor*
interconnections by capacity, correcting an apparent error in the original task framing that also
leaked into the anchor file when it was drafted). The score (3) still matches and is not in
dispute. But the entry silently overwrites a factual claim embedded in its own governing anchor
file's justification without flagging the anchor file itself as needing a downstream correction —
readers comparing the entry side-by-side with the anchor (exactly what this checker was asked to
do) will find the two documents making opposite factual claims about the same system. Recommend
flagging the anchor file itself for a future correction pass (out of scope for this entry, since
edits to schema files were disallowed) and having the entry's provenance flags note that the
anchor's "major" language is superseded rather than leaving the contradiction unremarked.

### Finding 3 — FIX: openness_dissipation=2 justification undermines its own reasoning against the cities anchor
The entry holds `openness_dissipation` at 2 (not 3, where cities/NYC sits) specifically because
"the physical infrastructure (towers, lines, substations) persists on a timescale far longer than
any interruption would damage." But the cities anchor (`openness_dissipation.yaml`, NYC, score 3)
uses the *same* observation — "city structure (streets, buildings) persists physically on a much
longer timescale than a short interruption would damage" — as part of its reasoning for why NYC
is capped at 3 rather than 4, not as a reason to drop below 3. The entry's chosen distinguishing
argument therefore does not actually distinguish ERCOT from the NYC case; if anything, ERCOT's own
justification text states a *faster* collapse-of-function timescale ("load shedding within
minutes," per the Feb 2021 event) than NYC's implied multi-day blackout-degradation timescale,
which if anything argues toward 3, not away from it. The "transport not transformation" argument
(paralleling NYSE's score-2 "throughput sustains the computing substrate, not the price-formation
mechanism") is a more defensible route to a 2, but the entry leads with the weaker, self-undermining
argument first. Not a blocker (the final score is plausible either way and the entry ultimately
settles on the more defensible NYSE-parallel argument), but the justification should be tightened
so it doesn't cite an argument that its own comparison anchor already rejects.

### Finding 4 — FIX: justification cites a nonexistent worked anchor
`chaos_sensitivity`'s justification states the score is "comparable to the-internet anchor's
reasoning in chaos_sensitivity.yaml." **`chaos_sensitivity.yaml` contains no anchor for
`the-internet`** — the file's anchors are: planetary-climate, tropical-cyclones, financial-markets,
earthquake-fault-systems, stars, river-networks (verified by reading the full file). This is a
miscitation of the reference material itself — the kind of claim this consistency check is
specifically tasked with catching. The underlying score (1) may still be defensible on the scale
text alone (weak/localized sensitive dependence, no rising chaos evidence), but the supporting
citation to a specific anchor entry that does not exist should be removed or corrected before
verified status.

### Finding 5 — FIX: level-tag inconsistency between sibling columns sharing one evidentiary basis
`criticality` is tagged `level: exemplar(ercot)`. `extreme_event_statistics` and
`cascade_susceptibility` — both citing the identical Dobson et al. (2007) finding, and both
explicitly stating in their own justification text that "no ERCOT-specific ... fit exists" and the
finding is inherited at the class level — are tagged `level: class-general`. Per
`filling_rules.level-required` and the panel-spec's explicit statement that this is what the
consistency checker audits hardest, these three columns should carry the same level tag given they
rest on the same (non-ERCOT-specific) evidence. `criticality` appears to be the outlier and should
most likely be `class-general` to match its own justification text and its two sibling columns.

### Finding 6 — NOTE: interaction_ontology justification cites the wrong anchor file for its "constrained" parallel
`interaction_ontology`'s justification says the grid's alphabet_closure reasoning is "the same
'constrained' reasoning as financial-markets' anchor (**decentralization.yaml** notes the
ERCOT/NYSE contrast directly)." `decentralization.yaml` discusses locus-of-control (ERCOT=1,
NYSE=2), not alphabet_closure or interaction typing at all. The actual correct parallel is
financial-markets.yaml's own `interaction_ontology` entry (which independently arrives at
`alphabet_closure: constrained` for structurally similar reasons — a fixed formal set changeable
only through institutional governance). Note: `interaction_ontology` has no dedicated anchor file
among the 15 in `schema/anchors/`, so "financial-markets' anchor" for this column can only mean the
financial-markets.yaml entry itself, not a schema anchor file — the parenthetical citing
`decentralization.yaml` is simply the wrong file. The underlying comparison is sound; only the
citation is wrong. Low severity — does not affect the score or the substance of the reasoning.

### Finding 7 — FIX: hierarchy_depth level-3 violates the panel-spec's composition-vs-hierarchy rule
`panel-spec.yaml`'s `hierarchy_depth` column note is explicit: *"Counts levels INSIDE the entry's
boundary. Composition BETWEEN catalog entries ... lives in the entry-level relations block
(part_of / contains) ... not in this column."* The entry's `hierarchy_depth` level 3 is "the North
American grid-of-grids the interconnection couples into only weakly, via limited DC ties" —
composition with an entry outside ERCOT's own scoping-note boundary (indeed, outside the catalog
entirely, since no `energy-systems`/`north-american-grid-of-grids` entry exists yet). The entry's
own `relations.part_of` is `[]` (explicitly left unresolved, with a comment flagging
"energy-systems / North American grid of grids" as a roster-expansion candidate) — so the
compositional fact is recorded in the wrong place (a quantitative column meant to be strictly
intra-boundary) rather than in the place the schema designates for it. Contrast tropical-cyclones,
whose `hierarchy_depth` stops cleanly at its own top level (storm-scale vortex) and records its
part_of relation (`[weather-systems, planetary-climate]`) separately, exactly as the rule
prescribes. Recommend either (a) capping `hierarchy_depth` at 2 (buses -> zones -> ERCOT-wide) and
moving the grid-of-grids link to `relations.part_of`, or (b) explicitly justifying why the DC-tie
coupling constitutes an intra-boundary level rather than inter-entry composition — the entry
currently does neither, it just declares the level while acknowledging in the same sentence that
it is "intentionally NOT synchronously tied," which is itself evidence the coupling is boundary
crossing, not a level inside the system.

### Finding 8 — NOTE: orphan source (pagani-aiello)
`pagani-aiello` is defined in the `sources:` block with a full annotated citation but is never
referenced via any attribute's `sources: [...]` list — it appears only in prose inside
`fractal_dimension_spatial`'s `note` field, and that attribute carries no `sources:` field pointing
to it. This is the same failure mode tropical-cyclones' provenance log explicitly caught and fixed
at flag-cleanup ("Emanuel 1999 orphan integrated") — recommend the same fix here (add
`sources: [pagani-aiello]` to `fractal_dimension_spatial`) before promotion to verified. Likely
belongs to coverage_check's remit as much as this check's, but flagged here as it surfaced during
the anchor cross-read.

### Finding 9 — NOTE: minor wording imprecision in emergence justification
`emergence`'s justification frames the score as sitting "between the-internet's 2 and
tropical-cyclones'/convection-cells' 3," but the assigned score (2) is literally equal to
the-internet's, not strictly between two values (there is no fractional score on this 0-4 rubric).
The underlying placement logic (one formalized order parameter for a specific phenomenon,
short of a field-organizing macro-theory) is sound and correctly applies the emergence.yaml
scale-2/3 boundary — this is purely a wording tightening, not a scoring problem.

---

## Not flagged (explicitly checked and found sound)

- All seven power-grids-anchored rubric/hybrid scores match their anchors exactly on the numeric
  score.
- `feedback`'s loop list satisfies the binding structural requirement.
- `filling_rules.soc-two-claims`, `no-market-chaos` (by analogy), `measurand-required`, and
  `atomicity-convention` are all correctly and carefully applied, with `temporal_correlation`'s
  deliberate `evidence_status: unknown` despite a specific number in hand being a standout example
  of rule discipline.
- `tipping_transitions` and `memory_hysteresis` both correctly resolve exactly the boundary cases
  their respective anchor files flag as open, with well-matched scale-text citations.
- Citation annotation discipline (primary-read vs. snippet-only, per source) is thorough and
  consistent with the two verified entries throughout the `sources:` block.
- `energy_rate_density`'s `unknown` verdict is a model example of `filling_rules.no-guessing`
  (explicit refusal to back into a fabricated conductor-mass mix), directly comparable in rigor to
  how tropical-cyclones handled its own (successful) energy_rate_density derivation.
