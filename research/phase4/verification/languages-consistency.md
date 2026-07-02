# Consistency Check — languages

Checker role: commensurability enforcer. Audits every rubric/hybrid score in
`data/classes/languages.yaml` against `schema/anchors/*.yaml`, audits all six
binding `filling_rules`, audits `level` tags, and cross-checks against the two
verified entries (`tropical-cyclones.yaml`, `financial-markets.yaml`) for
cross-entry coherence. Does NOT re-verify citations or arithmetic (separate
checks); does NOT edit the entry or any reference file.

Reference set read in full: `schema/panel-spec.yaml`, `docs/schema.md`,
`docs/roster.md`, `research/phase4/languages-sources.md`,
`data/classes/tropical-cyclones.yaml`, `data/classes/financial-markets.yaml`,
and all 15 files in `schema/anchors/`.

---

## 1. Anchor-backed columns (10) — exact-match audit

languages.yaml declares 10 columns as scored "per this class's own anchor
(<column>.yaml)". For each, the anchor file's worked `languages`/`english`
entry was read and its score/justification compared word-for-reasoning
against the entry.

| column | entry score | anchor score | verdict |
|---|---|---|---|
| modularity | 1 | 1 | MATCH — justification, register/dialect framing, and even the C^(2)=0.44 caveat reproduced faithfully |
| decentralization | 4 | 4 | MATCH — French-academy contrast reproduced verbatim in substance |
| nonlinearity | 1 | 1 | MATCH — logistic-diffusion/threshold framing, "complexity credentials live elsewhere" reasoning reproduced |
| openness_dissipation | 1 | 1 | MATCH — "no independent literal energy/matter throughput" reasoning reproduced exactly |
| memory_hysteresis | 4 | 4 | MATCH — irregular verbs / etymological doublets / Great Vowel Shift spelling-fossil examples reproduced |
| information_processing | 4 | 4 | MATCH — "bank" context-disambiguation example and unbounded-generativity framing reproduced |
| adaptive_capacity | 3 | 3 | MATCH — "weakly strategic and slow at the system scale" reasoning reproduced, "robust+adaptive quadrant" cross-reference added (consistent addition, not drift) |
| emergence | 3 | 3 | MATCH — population-level grammar / Neogrammarian sound laws / Zipf reproduced |
| self_organization | 4 | 4 | MATCH — Esperanto contrast-case reproduced |
| robustness_resilience | 4 | 4 | MATCH — conquest/migration/contact-vocabulary examples reproduced, explicit non-double-counting note re: adaptive_capacity preserved |

**Verdict: zero drift across all 10 anchor-backed columns.** Every score and
every load-bearing piece of justification reasoning in the entry traces
cleanly to the anchor file's own worked example. This is the strongest part
of the entry and matches the discipline tropical-cyclones and
financial-markets both showed in their (already-verified) consistency
checks.

---

## 2. Unanchored columns (5) — scale-text and comparator audit

Five columns have no worked anchor for this class (`feedback`,
`chaos_sensitivity`, `criticality`, `tipping_transitions`,
`cascade_susceptibility`) and were scored directly against the scale text
with financial-markets/tropical-cyclones/the-internet as comparators, per the
drafter's own flag. Each was checked against (a) the scale text in the
relevant anchor file and (b) the comparator's actual score in
`financial-markets.yaml`/`tropical-cyclones.yaml`.

- **feedback = 2** (exemplar-english). Comparators cited: financial-markets
  (3), tropical-cyclones (4) — both verified correct against the actual
  entries. Loop list present with two loops, sign + mechanism stated per the
  anchor file's structural requirement ("every anchor at score >=2 MUST
  include the structured loop list"). Matches scale level 2 text ("loops
  matter at the margins... not continuously"). No drift found.

- **chaos_sensitivity = 0** (class-general). Comparator: financial-markets
  (1), correctly cited as scoring 1 "per the binding no-market-chaos rule."
  Languages scored one notch below markets specifically because no evidence
  even of markets' weaker "nonlinear dependence" case was found — internally
  coherent ordinal reasoning, correctly applies the no-market-chaos rule by
  reference without repeating markets' own debunking language verbatim
  (appropriate, since languages was never chaos-claimed in the first place).
  No drift found.

- **criticality = 1** (exemplar-english). Comparator: financial-markets (1).
  See Finding C-1 below — the justification's ground for scoring 1-rather-
  than-0 imports evidence from a different column in a way the criticality
  anchor's own `does_not_count` clause forbids.

- **tipping_transitions = 2** (class-general). Comparator: financial-markets
  (2), verified correct. Krauss 1992 vs. modern re-estimate framing matches
  the "single well-developed mechanism-class, not systematic inventory"
  language the anchor's own level-2 text and financial-markets' own
  justification use. No drift found.

- **cascade_susceptibility = 1** (class-general). Comparators: the-internet
  (1) and river-networks (1), both verified correct against those anchor
  entries. "Largely independent (community-by-community sociopolitical
  pressure) rather than propagating cascade" reasoning is a genuine,
  distinct argument, not a copy-paste of another entry's language. No drift
  found.

**Verdict: 4 of 5 unanchored columns are well-reasoned and correctly
positioned against comparators. 1 (criticality) has a cross-column
evidence-borrowing problem — see Finding C-1.**

---

## 3. Filling-rules audit

- **no-guessing**: Respected throughout. `spatial_extent`,
  `fractal_dimension_spatial`, `energy_rate_density` all correctly recorded
  `unknown` rather than stretched. The Indo-European 8,120 BP figure and the
  "29th ed./2026/7,170" Ethnologue figure were both explicitly identified as
  unreconciled and NOT used as recorded values — textbook compliance.

- **power-law-rigor**: Correctly and carefully applied. `degree_distribution`
  is explicitly downgraded to `measured-untested` because Newman
  (2003)/Ferrer i Cancho & Solé (2001) predate CSN and use log-log
  regression, not MLE+KS. `extreme_event_statistics` (Zipf, CSN 2009
  primary-read) is correctly left at `measured` — the entry's own note
  explicitly warns not to conflate the two, which is exactly right and shows
  the rule is understood, not just mechanically applied.

- **soc-two-claims**: The `criticality` column's hybrid structure (event
  statistics vs. mechanism, both addressed separately with
  `mechanism_status: none`) is correctly shaped per the rule. However, see
  Finding C-1 — the "two separate claims" discipline is structurally
  followed but one of the two sub-arguments imports evidence it should not.

- **no-market-chaos**: Correctly invoked by reference for
  `chaos_sensitivity`, with the market's own debunked-chaos status cited
  accurately as the comparator floor rather than confused with language's
  own (non-existent) chaos claims.

- **measurand-required**: Satisfied for every signal-relative quantity
  checked — `degree_distribution` (node degree, n/m stated),
  `extreme_event_statistics` (written word-frequency rank, Moby Dick,
  n=18,855), `temporal_correlation` (measurand explicitly hedged as varying
  across cited literature — letters vs. word ranks vs. sentence lengths —
  which is itself good practice, not a violation).

- **level-required**: Satisfied on all 29 attributes in the sense that every
  value carries a `level` tag. However, one tag is substantively wrong given
  its own attribute's content — see Finding C-2.

- **atomicity-convention**: The dual-ontology declaration (speakers as
  agents/out-of-scope(human); lexical units as replicators) is stated
  explicitly in the scoping note, matches the panel-spec's own worked
  example for this class verbatim, and is applied consistently through
  `component_ontology`, `interaction_ontology`, and `hierarchy_depth`
  (which explicitly declares it is NOT stacking the two atom types into one
  hierarchy). This is the entry's most structurally careful piece of
  reasoning and shows no internal contradiction.

- **interaction-typing**: The four interaction types in
  `interaction_ontology` are individuated by mechanism/carrier as required
  (communicative exchange; word co-occurrence; innovation
  adoption/diffusion; intergenerational transmission). "Innovation
  adoption/diffusion" and "communicative exchange" both list
  speakers<->speakers as participants but are mechanistically distinct
  (routine utterance/comprehension vs. differential population-level uptake
  of a specific new form) — a defensible, non-redundant split, not a
  buy/sell-style double-count of one mechanism.  `alphabet_closure: open`
  is justified with the same "social and cultural systems are the open end"
  language the panel-spec itself uses, and is the only `open` verdict among
  the three entries read (tropical-cyclones: closed; financial-markets:
  constrained) — correctly differentiated, not copied.

---

## 4. Level-tag audit (entry-internal + cross-entry)

All 29 `level:` tags were extracted and checked for (a) self-consistency
with their own attribute's prose and (b) consistency with how
tropical-cyclones/financial-markets tag analogous attributes.

- `hierarchy_depth = 3` (class-general) in all three entries, each with its
  own declared counting convention — this is the column the panel-spec flags
  as highest commensurability risk, and all three entries pass: the
  convention is stated explicitly and produces the same count (3) across
  three structurally different systems, which is expected (comparable
  organizational depth) rather than suspicious.

- `component_ontology = class-general` despite citing English-specific
  counts inside `count_oom` fields — checked against financial-markets'
  identical pattern (its `component_ontology` is also `class-general` while
  citing NYSE/FINRA-specific counts). Consistent; the structural
  part-type claim is class-general even when illustrative figures are
  exemplar-sourced. No issue.

- `numerosity = class-general` — checked against financial-markets, whose
  analogous `numerosity` is tagged `level: exemplar(nyse)` precisely because
  its figures are NYSE-specific. Languages' `numerosity` value is,
  by its own note's admission, "all... English-exemplar-level" — see
  Finding C-2.

- Among the five unanchored Group C/F columns, `feedback` and `criticality`
  are tagged `exemplar(english)` while `chaos_sensitivity`,
  `tipping_transitions`, and `cascade_susceptibility` are tagged
  `class-general`, despite all five justifications opening with the same
  "no worked anchor exists... scored against the scale text" framing. On
  inspection this split is partially defensible (criticality and feedback's
  justifications lean on English-specific evidence — Zipf/Moby Dick,
  English-specific diffusion examples — while the other three reason at the
  language-in-general level), but it is not explained anywhere in the entry
  and is easy to misread as arbitrary. See Finding C-3 (note-level).

---

## 5. Cross-entry coherence (vs. tropical-cyclones, financial-markets)

- **hierarchy_depth convention**: all three entries independently converge
  on 3 organizational levels above the atomic parts, each with its own
  named convention. Coherent.
- **`not-applicable` vocabulary**: languages.yaml uses `value: not-applicable`
  for `spatial_extent`; financial-markets uses `value: not-applicable-spatial`
  for the same situation (institutionally/conceptually non-spatial system);
  earthquake-fault-systems, planetary-climate, river-networks, stars, and
  tropical-cyclones all use bare `not-applicable`. financial-markets is the
  outlier, not languages — but the panel-spec does not define a controlled
  vocabulary for this escape value at all, so this is a schema gap rather
  than a languages-specific defect. Noted, not blocking.
- **`mechanism_status` enum**: languages.yaml's `criticality.mechanism_status:
  none` is enum-conformant against the values actually used across the
  catalog (`none`/`proposed`/`contested`, per financial-markets' own comment
  correcting an earlier `proposed-contested` typo). Consistent.
- **adaptive_capacity 2x2 framing**: languages.yaml's `adaptive_capacity`
  justification explicitly invokes the anchor's own "robust + adaptive"
  quadrant alongside the-internet, contrasted with tropical-cyclones
  (fragile + non-adaptive) and speculative markets (fragile + adaptive).
  This is a direct, correct restatement of the adaptive_capacity.yaml notes
  block's own 2x2 — good cross-entry integration, not fabricated framing.
- **feedback/nonlinearity comparator citations**: languages.yaml cites
  financial-markets=3 and tropical-cyclones=4 for feedback, and
  tropical-cyclones=4 for nonlinearity (as the "opposite pole" comparator)
  — both verified against the actual scores in the two verified entries.
  Correct in both cases.

No cross-entry contradictions were found beyond the `not-applicable` /
`not-applicable-spatial` spelling drift (schema-level, not languages-specific)
and the level-tag issue in Finding C-2.

---

## Findings

### C-1 (fix) — `criticality` justification imports disallowed evidence from a different column

**Column:** criticality (score 1, exemplar-english)

The justification for scoring 1 rather than 0 states: "Scored 1 rather than
0 because informal 'tipping point'-adjacent framing of language shift/death
exists (see tipping_transitions) that is heavy-tail-suggestive without
rising to a tested claim."

But `criticality.yaml`'s own `does_not_count` clause states: "Colloquial use
of 'tipping point,' 'avalanche,' or 'criticality' as metaphor does not
count — this column is about demonstrated scale-invariant event STATISTICS
and/or a stated critical mechanism, not general nonlinearity or fragility
(see cascade_susceptibility... and tipping_transitions for state-space
regime shifts)." The anchor file explicitly and by name excludes
tipping-point framing as evidence for THIS column, and explicitly assigns it
to the sibling `tipping_transitions` column instead — which languages.yaml
does score, correctly, at 2 elsewhere in the same entry. The criticality
scale's own level-0 vs. level-1 boundary turns entirely on (a) whether
heavy-tailed/bursty EVENT statistics were "informally observed or claimed"
and (b) mechanism status ("no mechanism claim beyond speculation" for 1 vs.
"no mechanism proposed" for 0) — nothing in the scale text admits
"tipping-point-adjacent framing of a different phenomenon" as a basis for
the 0-vs-1 distinction.

By the entry's own account, no event-size statistics (cascade sizes,
language-shift magnitudes) were located at all — that is a level-0
condition on the event-statistics leg, not a level-1 one. Whether the score
should actually be 0 given honest evidence, or 1 on some other legitimate
ground, is a judgment call for a rescore; what the consistency check flags
is that the STATED justification for the 0-to-1 bump relies on evidence
this column's own anchor explicitly disallows.

**Suggested fix:** Either (a) rewrite the justification to ground the 1 in
in-scope evidence (e.g., re-examine whether Krauss 1992's 90%-at-risk claim
or the ELCat extinction-rate figure constitutes an informally-claimed
heavy-tailed event statistic in its own right — a defensible but different
argument), or (b) rescore to 0 and note explicitly that no in-scope evidence
clears even the level-1 bar, consistent with how `cascade_susceptibility`
and `chaos_sensitivity` handle the analogous "nothing found" case elsewhere
in this same entry.

### C-2 (fix) — `numerosity` level tag contradicts its own note

**Column:** numerosity (level: class-general)

The attribute is tagged `level: class-general`, but its own `note` field
states explicitly: "No class-general (all-languages-summed) lexical or
speaker count was recovered; all numerosity figures here are
English-exemplar-level, per the dual-ontology scoping note." This is a
direct self-contradiction between the `level` field and the attribute's own
prose, and it fails filling_rules.level-required in substance (the rule
requires the level tag to correctly state whether the VALUE attaches at
instance or class level; here the value is exemplar-level data mistagged as
class-general).

The cross-entry comparator confirms this reading: financial-markets' own
`numerosity` attribute, in the identical situation (NYSE-specific figures,
no class-general/all-exchanges total available), is correctly tagged
`level: exemplar(nyse)`.

**Suggested fix:** Retag `numerosity` to `level: exemplar(english)`, matching
financial-markets' precedent and the attribute's own note. (`component_ontology`,
by contrast, is correctly left at `class-general` — see the audit above — because
its structural claim, the dual-ontology part-type list, genuinely is
class-general even though its illustrative counts are exemplar-sourced; do
not conflate the two columns' treatment.)

### C-3 (note) — inconsistent level tags among the five unanchored Group C/F columns, unexplained

`feedback` and `criticality` are tagged `exemplar(english)`; `chaos_sensitivity`,
`tipping_transitions`, and `cascade_susceptibility` are tagged `class-general`
— despite all five justifications opening with near-identical "no worked
anchor exists... scored against the scale text" framing, and despite the
provenance flag block treating all five as one homogeneous group needing
prioritized review. On inspection the split is not arbitrary (feedback and
criticality's justifications do lean on English-specific evidence —
diffusion-adoption dynamics, Zipf/Moby Dick — while the other three reason
about "language" as a class generally), but the entry never states this
rationale, making the split look like an oversight rather than a deliberate
choice to a future auditor. Not blocking; worth a one-line clarifying note
if/when this entry is promoted past draft.

### C-4 (note) — `instance_population` merges two evidence-quality tiers under one evidence_status

The `value` field packs together the living-language standing count
(~7,164, Ethnologue, snippet-verified) and the extinction rate (~3.5/yr,
which the entry's own companion sweep document — `languages-sources.md` —
separately and explicitly labels `evidence_status: measured-untested`,
"rate not traced to a specific peer-reviewed primary publication"). The
entry's single `evidence_status: measured` for the whole attribute is
accurate for the standing-count sub-claim but overstates the extinction-rate
sub-claim relative to how the sweep document itself characterizes it. Not
a fabrication and not blocking (the qualifying "supersedes the widely
repeated but unsupported... folk figure" language and the low `confidence`
tag partially compensate), but a future split into two sub-values with
independent `evidence_status` fields would better serve the panel-spec's
per-value evidence_status intent.

### C-5 (note) — English phoneme-count figure (~44) loses its "unverified — model knowledge" caveat on the path from sweep report into the entry

`research/phase4/languages-sources.md` explicitly tags the "English itself
has ~44 phonemes" figure as `[unverified — model knowledge for the
English-specific 44 figure; not independently re-verified via primary
source this session]`, distinct from the cross-linguistic PHOIBLE/UPSID
mean (~31-35), which it tags `measured (cross-linguistic aggregate)`.
`data/classes/languages.yaml`'s `component_ontology` block reproduces the
"~44 (English)" figure in the `count_oom` field alongside the
cross-linguistic figures with no distinguishing caveat, under a single
attribute-level `confidence: medium`. This is a minor case of an
uncertainty flag not surviving the sweep-to-entry integration step; it does
not affect any score or class-general claim, but a citation/plausibility
pass should confirm whether "~44" needs the same unverified-model-knowledge
qualifier the sweep document already assigned it.

### C-6 (note) — `not-applicable` vs. `not-applicable-spatial` spelling drift is schema-wide, not languages-specific

languages.yaml's `spatial_extent` uses `value: not-applicable`, matching
the majority convention (earthquake-fault-systems, planetary-climate,
river-networks, stars, tropical-cyclones all use the bare form).
financial-markets is the outlier with `not-applicable-spatial`. Flagged here
only because the task asked for cross-entry coherence; the fix, if any,
belongs to financial-markets or to a future panel-spec controlled-vocabulary
addition for this escape value, not to languages.yaml.

---

## Summary of severities

- blocker: 0
- fix: 2 (C-1 criticality evidence-borrowing; C-2 numerosity level-tag
  self-contradiction)
- note: 4 (C-3 unexplained level-tag split; C-4 merged evidence-quality
  tiers in instance_population; C-5 dropped uncertainty caveat on the
  44-phoneme figure; C-6 schema-wide not-applicable spelling drift)

All 10 anchor-backed rubric/hybrid scores match their anchors exactly with
no drift in either direction. All six filling rules are substantively
respected, with one localized exception (C-1). The entry's atomicity
handling (the dual speaker/replicator ontology) is the most careful piece
of reasoning in the entry and shows no internal contradiction anywhere it
is used. Cross-entry coherence against tropical-cyclones and
financial-markets holds throughout except for the two fix-level findings
above, neither of which rises to blocker severity: C-1 is a
justification-quality problem on an already-conservative score (1, not
overclaimed upward), and C-2 is a metadata tagging error, not a fabricated
or wrong value.
