# Coverage check — chemical-oscillators

Adversarial coverage pass. Reference: schema/panel-spec.yaml (30 frozen columns),
docs/schema.md (entry shape), docs/roster.md, research/v0.3/expansion/chemical-oscillators-sources.md,
schema/anchors/*.yaml (15 files), analysis/validate.mjs (machine gate).

## 1. 30-column presence audit

Enumerated all panel-spec.yaml columns (A:7, B:7, C:8, D:2, E:2, F:4 = 30) against
`attributes.*` in the entry.

| Column | Present | Notes |
|---|---|---|
| category | yes (top-level, not attributes — correct per docs/schema.md convention) | |
| spatial_extent | yes | |
| characteristic_timescales | yes | 4 named timescales, per-item evidence_status |
| numerosity | yes | derived, measurand named |
| instance_population | yes | qualitative, reasoned absence |
| component_ontology | yes | 1 part type |
| energy_rate_density | yes | value: unknown, evidence_status: unknown |
| interaction_topology | yes | |
| interaction_ontology | yes | type_count 4, matches list length; alphabet_closure: closed |
| degree_distribution | yes | value: not-applicable (no evidence_status — matches established cross-entry convention, see \S3) |
| modularity | yes | |
| hierarchy_depth | yes | |
| fractal_dimension_spatial | yes | unknown |
| decentralization | yes | |
| nonlinearity | yes | |
| feedback | yes | 3 loops listed |
| openness_dissipation | yes | |
| chaos_sensitivity | yes | |
| criticality | yes | |
| extreme_event_statistics | yes | unknown, measurand_type omitted (legal — validator only requires measurand_type when a value is recorded; unknown is exempt) |
| temporal_correlation | yes | unknown |
| tipping_transitions | yes | |
| memory_hysteresis | yes | |
| information_processing | yes | |
| adaptive_capacity | yes | |
| variation_selection | yes | |
| emergence | yes | |
| self_organization | yes | |
| robustness_resilience | yes | level: exemplar(bz-reaction) — bz-reaction is declared in exemplars block, resolves cleanly |
| cascade_susceptibility | yes | |

**Result: all 30 columns present. No missing-entirely columns.** Every `unknown`/
`not-applicable` instance is present-but-unknown (legal per filling_rules.no-guessing),
not a structural gap.

## 2. Structural blocks (docs/schema.md)

- `exemplars`: present, 3 entries (bz-reaction, briggs-rauscher, cima-reaction) — present.
- `scoping_note`: present, detailed, explicitly handles the D2 biochemical-oscillator
  exclusion and the batch/CSTR regime split.
- `summary`: present, accessible-layer prose.
- `relations`: present (`part_of: []`, `contains: []`) — both empty. Reasonable: this
  entry is not compositionally nested in — nor does it contain — any other roster
  entry; not flagged as a defect (see \S4).
- `component_ontology`: present, passes validator's parts-shape check (name/count_oom/
  interchangeable/itself_complex all present).
- `interaction_ontology`: present, passes validator's type_count/alphabet_closure check.
- `emergent_phenomena`: present, 4 phenomena each with order_parameter.
- `sources`: present, 7 keys, each carrying a read-status annotation.
- `provenance`: present, with `verification` sub-block ("pending" for all 4 checks,
  appropriate — this is a live in-progress verification) and a `flags` list of 5
  standing verification debts, all self-consistent with the sweep report.

## 3. Machine validator (analysis/validate.mjs)

Ran `node validate.mjs` from `analysis/`. Result for chemical-oscillators:

```
== chemical-oscillators — PASS (0 error, 0 warn, 1 info) ==
  [INFO] sources.epstein-pojman1998 is declared but not cited from any attributes.*.sources list
```

Zero errors, zero warnings. The single INFO line is expected — `epstein-pojman1998`
is cited only in the scoping_note prose (framing sentence about how the field treats
chemical vs. biochemical oscillators together), not from any attribute's `sources:`
list; the same "declared-but-not-cited" pattern appears as an INFO (not an error) for
5 other verified entries (convection-cells, financial-markets, global-economy), so
this is a benign, pre-existing convention, not a defect.

Confirmed the `degree_distribution: not-applicable` pattern (no block-level
`evidence_status`) is validator-recognized as a legal escape hatch and matches the
same convention already used in earthquake-fault-systems.yaml and convection-cells.yaml
— not a coverage gap unique to this entry.

## 4. Relations / roster / reciprocity check

- `chemical-oscillators` does not appear as an id in `docs/roster.md`'s pilot-10 table
  (expected — it is a v0.3 expansion entry, not a pilot entry) but IS listed in the
  "Full roster candidates" list under **Physical & chemical**: "chemical oscillators
  (Belousov–Zhabotinsky)" — confirms fame-gate eligibility per dragon #2.
- Grepped `data/classes/*.yaml` for the string `chemical-oscillators`: only the entry's
  own file matches. No other verified entry's `relations.part_of`/`contains` or prose
  references this id, so there are zero pre-existing reciprocity obligations to check —
  consistent with the entry's own header comment ("first fully greenfield entry ...
  no existing entry references this id in any relation/component/prose").
- The entry's own `relations.part_of: []` / `contains: []` being empty is therefore
  self-consistent and requires no reciprocal edit elsewhere.
- No orphan relation ids requiring "has no catalog entry yet (roster expansion queue)"
  INFO handling (validator confirms — no such INFO line was emitted for this entry).

## 5. Sweep-report orphan-value check

Compared every row of `research/v0.3/expansion/chemical-oscillators-sources.md`
against the entry's attributes/sources to find recovered-but-never-integrated values.

Quantitative table rows — all integrated:
- oscillation period (batch), wave-front speed, CSTR period-doubling cascade →
  `characteristic_timescales` (3 timescale rows) — integrated.
- spatial_extent (dish + gel reactor) → integrated (`detail` sub-fields).
- fractal_dimension_spatial (not found) → integrated as unknown.
- CIMA wavelength (~0.2 mm, unconfirmed) → **correctly NOT integrated as a value**
  (entry explicitly declines to state it, per its own flag and the sweep's own caution)
  — this is the sweep report doing its job, not an orphan.
- numerosity, instance_population, energy_rate_density, chaos_sensitivity,
  extreme_event_statistics, tipping_transitions (both rows), degree_distribution,
  temporal_correlation → all integrated.

Canonical review / source list (10 items) vs. entry `sources:` block (7 keys:
fkn1972, fn1974, winfree1972, sws1982, rss1983, ouyang-swinney1991,
epstein-pojman1998):

- **Item 3, Zaikin & Zhabotinsky (1970), Nature 225:535** — "Concentration Wave
  Propagation in Two-dimensional Liquid-phase Self-oscillating System" — appears in
  the sweep's canonical source list but has **no corresponding key in the entry's
  `sources:` block** and is not cited anywhere in the entry, despite the entry making
  a direct, citable claim about this exact phenomenon (`emergent_phenomena: "Trigger/
  spiral/target waves"`; the `interaction_ontology.molecular diffusion` justification
  for wave propagation). Winfree (1972) is cited for wave-related timescales, but
  Zaikin & Zhabotinsky (1970) is arguably the more directly on-point primary paper for
  the wave-propagation phenomenon itself and was recovered by the sweep but never
  carried into the entry. **Flagged as a fix** — recovered-but-not-integrated citation.
- **Items 9–10, Belousov (1959) and Zhabotinsky (1964)** — both appear in the sweep's
  source list (explicitly marked "not attempted this sweep", historical-account
  sources recommended instead) and both are also **named directly in the entry's own
  prose** (`exemplars[0].note`: "discovered by Belousov (1959, rejected by journals...)
  ... rediscovered and analyzed by Zhabotinsky (1964)") — but neither has a
  corresponding `sources:` key or citation annotation backing the specific dates/claims
  asserted in that prose sentence. This is a citation-integration gap: a historical
  claim is stated as fact in the entry with no citation trail at all (not even an
  [unverified — model knowledge] flag), whereas every other factual claim in the entry
  carries a read-status-annotated source. **Flagged as a fix.**

No other orphan values found; the sweep report's "Notes on rigor/flagging" section's
own list of standing debts (Roux/Simoyi/Swinney 1983 not primary-read, CIMA wavelength,
energy_rate_density, extreme_event_statistics, CSTR bistability citation) are all
already carried into the entry's `provenance.flags` block — properly integrated as
flags rather than silently dropped or silently promoted to unflagged facts.

## 6. Anchor cross-check (spot check, not exhaustive — citation/consistency checkers own this)

Skimmed all 15 anchor files' presence; entry's rubric/hybrid justifications reference
tropical-cyclones, financial-markets, stars, cities, and convection-cells comparators
by name in a manner consistent with the anchor set existing (not fabricated anchor
claims). Full anchor-fidelity scoring is the plausibility checker's job; noted here
only as a coverage-adjacent sanity check, no defect found.

## Summary of flags

1. **[fix]** `sources` block — Zaikin & Zhabotinsky (1970), the primary paper for
   BZ spiral/target wave propagation, is present in the sweep report's canonical
   source list but was never carried into the entry's `sources:` block or cited,
   despite the entry asserting the wave-propagation phenomenon it documents.
2. **[fix]** `exemplars[0].note` (Belousov/Zhabotinsky discovery history) — states a
   specific historical claim (1959 rejection, 1964 rediscovery) with no citation key
   or read-status annotation at all, unlike every other factual assertion in the
   entry. Belousov (1959) and Zhabotinsky (1964) are named in the sweep report as
   "not attempted this sweep" but are asserted in entry prose as if established.
