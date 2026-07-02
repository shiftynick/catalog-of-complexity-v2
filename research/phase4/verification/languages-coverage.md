# Coverage Check — languages

Verifier: coverage checker (adversarial stance — entry presumed incomplete
until proven otherwise). Checked against `schema/panel-spec.yaml` (panel
columns, counted directly, not taken from doc prose), `docs/schema.md`
(entry-structure spec), all 15 files in `schema/anchors/`, and
`docs/roster.md`. Cross-referenced against `research/phase4/languages-sources.md`
(the sweep report) and against every other entry currently in `data/classes/`
(cities, earthquake-fault-systems, financial-markets, planetary-climate,
power-grids, river-networks, stars, the-internet, tropical-cyclones) for
relations reciprocity and rubric-score cross-entry consistency. No entry file
or reference file was modified by this check.

Date of check: 2026-07-02.

---

## 0. Panel column count (ground truth, counted directly)

`schema/panel-spec.yaml`'s `columns:` block enumerated directly: **30 columns
total** — category, spatial_extent, characteristic_timescales, numerosity,
instance_population, component_ontology, energy_rate_density,
interaction_topology, interaction_ontology, degree_distribution, modularity,
hierarchy_depth, fractal_dimension_spatial, decentralization, nonlinearity,
feedback, openness_dissipation, chaos_sensitivity, criticality,
extreme_event_statistics, temporal_correlation, tipping_transitions,
memory_hysteresis, information_processing, adaptive_capacity,
variation_selection, emergence, self_organization, robustness_resilience,
cascade_susceptibility.

## 1. Column completeness

Verified by direct enumeration of `languages.yaml`'s top-level `category:` key
(`cultural-informational`) and the 29 keys under `attributes:`. **All 30 spec
column ids are present** — none missing entirely. No stray/legacy attribute
keys outside the 30-column spec were found.

This is column-KEY presence only; several values carry `unknown` or
`not-applicable` — inventoried in Section 4 below as fillable-vs-
genuinely-unmeasured, not counted as missing columns.

### Missing `evidence_status` field (mechanical/structural defect — systemic pattern, not unique to this entry)

panel-spec.yaml states under `evidence_status:` — "# required on every
value." Checked every one of the 29 attribute blocks by line range for an
explicit `evidence_status:` key. **Four blocks lack it entirely:**

- `component_ontology` (lines 161-179) — has `confidence: medium` but no
  `evidence_status:` key.
- `interaction_topology` (lines 204-212) — categorical value `network`, note
  present, no `evidence_status:` key.
- `interaction_ontology` (lines 213-242) — structured, 4 types, type_count
  and alphabet_closure and justification all present, but no
  `evidence_status:` key anywhere in the block (not even per-type).
- `variation_selection` (lines 547-557) — categorical value `present`,
  justification present, no `evidence_status:` key.

All other 25 attribute blocks (including every list-item inside
`characteristic_timescales`) correctly carry `evidence_status:`. This exact
four-column omission pattern (component_ontology, interaction_topology,
interaction_ontology/degree_distribution-adjacent structured/categorical
columns, variation_selection) was independently found in the stars and
planetary-climate coverage checks — this is a project-wide drafting-template
gap for structured/categorical columns, not something specific to this
entry's research quality. **FINDING (fix)**, low-to-moderate severity: intent
is unambiguous from context in all four cases (component_ontology and
interaction_ontology/interaction_topology would clearly be `qualitative` or
a mix of `measured`/`qualitative` per sub-part; variation_selection would be
`qualitative`), so this does not poison the catalog, but it is a mechanical
non-compliance with a binding panel-spec rule that should be fixed before
verified status.

## 2. Structural blocks (docs/schema.md)

All required blocks present: `id`, `name`, `category`, `status`, `exemplars`,
`scoping_note`, `summary`, `relations`, `attributes`, `emergent_phenomena`,
`sources`, `provenance`. `provenance.verification` block present with all
four sub-checks stubbed `pending` (correct — this is the coverage checker's
own pass, one of four). `provenance.flags` records four drafting-agent
self-flagged uncertainty items, all substantively engaged below.

`exemplars` is a singleton (English) — legal per schema.md ("singleton
classes are legal") and matches roster.md's designated exemplar for class #10
("Languages | English").

`emergent_phenomena` has 4 entries (Grammar, Zipf's law, Sound
change/grammaticalization clines, Lexical/semantic network structure), each
with name + order_parameter, matching schema.md's required shape. Complete.

`sources` has 10 keyed citations, every single one carrying an explicit
primary-read / snippet-verified / [unverified] annotation — this satisfies
the task's HARD RULE distinguishing primary-read vs. snippet-verified in
every citation annotation. Genuine strength of this entry.

No structural block required by schema.md is missing.

## 3. Relations vs. docs/roster.md and existing data/classes/ entries (reciprocity)

- `relations.part_of: [cultures]` — `cultures` does not exist as a
  `data/classes/` entry and is not itself a named roster.md candidate (the
  closest roster.md items are "Cultural & informational" category-level
  candidates like writing systems, science, legal systems, social networks,
  Wikipedia, music traditions — none named exactly "cultures"). Correctly
  marked "unresolved -> roster expansion queue" per the schema.md convention
  (unresolved names are legal). **FINDING (note)**: unlike every other
  current entry's `part_of` targets (galaxies, plate-tectonics,
  global-economy, weather-systems/planetary-climate), which are all literal
  roster.md line items even when undrafted, "cultures" is not itself a named
  roster.md candidate anywhere — it is a reasonable implied parent category
  but the entry should ideally note this distinction (a genuinely new
  roster-queue addition, not an existing-but-undrafted roster item) since the
  consistency/roster-expansion process may expect roster.md itself to be
  updated with "cultures" as a candidate before the link resolves.
- `relations.contains: []` — no candidate sub-entries claimed. Reasonable;
  no other entry lists `languages` as a `part_of` or `contains` target
  (checked via grep across all 9 sibling entries — the only "languages"
  string hits are comparative mentions inside rubric justifications in
  cities.yaml, stars.yaml, and the-internet.yaml, none of which are
  relations blocks). No reciprocity violation.
- Roster.md's designated exemplar for class #10 is "English" — matches the
  entry's `exemplars` list exactly (id: english).

No relations/reciprocity defects found beyond the note above.

## 4. Anchor cross-check (schema/anchors/*.yaml, all 15 files read directly)

`languages` (or `english`) carries a **direct, named anchor** in exactly
**10 of the 15** anchor files, and in every one of those 10 the entry's
score/justification is a close-to-verbatim match:

| Column | Anchor score | Entry score | Match? |
|---|---|---|---|
| modularity | 1 | 1 | Yes — "loosely distinguishable clusters," registers/dialects reasoning reproduced closely |
| decentralization | 4 | 4 | Yes — "no authority controls English usage," French-academy contrast reproduced verbatim |
| nonlinearity | 1 | 1 | Yes — logistic-curve adoption / threshold-contagion framing reproduced closely |
| memory_hysteresis | 4 | 4 | Yes — irregular verbs / etymological doublets / Great Vowel Shift spelling-fossil examples reproduced verbatim |
| information_processing | 4 | 4 | Yes — unbounded generativity / context-dependent disambiguation ("bank") reproduced verbatim |
| adaptive_capacity | 3 | 3 | Yes — "speakers hold internal models...weakly strategic and slow" reproduced verbatim |
| emergence | 3 | 3 | Yes — grammar/Neogrammarian sound laws/Zipf alpha=1.95 reasoning reproduced verbatim, including the anchor's own "held below 4" caveat |
| self_organization | 4 | 4 | Yes — Esperanto contrast case reproduced verbatim |
| robustness_resilience | 4 | 4 | Yes — conquests/migrations/contact-vocabulary-absorption reasoning reproduced verbatim, including the resist-vs-embrace tension note |
| openness_dissipation | 1 | 1 | Yes — "no independent literal energy/matter throughput...belongs to the speaker/infrastructure substrate" reproduced verbatim |

**Verification of the entry's own "no worked anchor exists" claims:** the
entry's `provenance.flags` states that feedback, chaos_sensitivity,
criticality, tipping_transitions, and cascade_susceptibility have "No worked
anchor exists for this class in schema/anchors/ for these five columns."
Checked all five anchor files directly: **all five files exist and are fully
populated with scale text, does_not_count rules, and 4-6 worked anchors each
for OTHER classes** (planetary-climate, tropical-cyclones, financial-markets,
earthquake-fault-systems, stars, river-networks, the-internet, power-grids,
granular-media) — but **none of the five contains a `languages` or `english`
entry in its own `anchors:` list.** The entry's claim is accurate in the
narrow, correct sense (no languages-specific worked anchor), and the entry
correctly scores these five columns "against the scale text with the nearest
comparator class... cited in each justification," which is exactly the
prescribed fallback behavior. **No defect** — this is the same honest
unanchored-column handling seen in stars' self_organization and confirmed
correct practice in the stars coverage check. Spot-checked the five
justifications against the actual scale-text definitions in each anchor file
(chaos_sensitivity level 0, criticality level 1, tipping_transitions level 2,
feedback level 2, cascade_susceptibility level 1) — all five entry
justifications correctly paraphrase and apply the stated scale-level
language, not fabricated or misapplied. Comparator classes cited
(financial-markets, the-internet, river-networks) are accurately quoted from
those same anchor files' own worked examples (e.g., financial-markets scores
1 on chaos_sensitivity per the anchor file, matching the entry's comparator
citation exactly).

## 5. Sweep report (research/phase4/languages-sources.md) vs. entry — orphan/unintegrated values check

Read the full sweep report (443 lines) and cross-checked every recovered
quantity/citation against the entry.

**Fully integrated (recovered value appears in entry, correctly annotated):**
- spatial_extent not-applicable framing — integrated with the sweep's exact
  recommended narrative note.
- characteristic_timescales: spoken information rate (~39 bits/s, Coupe et
  al. 2019), generational transmission (~25 yr, [unverified]), and lineage
  persistence (1e3-1e4 yr, Indo-European 8,120 BP flagged as unconfirmed) —
  all three integrated, including the sweep's exact hedges.
- numerosity/component_ontology: speakers (~1.53e9), OED lexical units
  (520,779), word co-occurrence network (460,902 nodes), phoneme inventory
  (~31-35 cross-linguistic mean, ~44 English) — all integrated.
- instance_population: 7,164 living languages (27th ed. 2024), Glottolog
  ~7,900 cross-check, extinction rate ~3.5/yr, the "29th ed./2026/7,170"
  reconciliation flag, and the 403-blocked-Ethnologue caveat — all
  integrated verbatim, including the sweep's explicit recommendation to use
  27th-ed./2024 as the better-triangulated figure.
- degree_distribution: Newman (2003) alpha=2.7 + Ferrer i Cancho & Sole
  (2001) two-regime (gamma=1.5/alpha=2.7) + CSN-untested flag — integrated.
- fractal_dimension_spatial: unknown verdict + the multifractal-sentence-
  length lead correctly NOT promoted to a value — integrated per the
  sweep's own "not a citable value today" instruction.
- extreme_event_statistics: CSN alpha=1.95(2), p=0.49, Moby Dick n=18,855 —
  integrated in full, including the "only dataset of 24 rated good" framing.
- temporal_correlation: H~0.575 +/- 0.002 (and H~0.6 sentence-length),
  pnas.org-403-blocked caveat, three-candidate-lineage ambiguity — integrated
  verbatim, correctly kept at measured-untested.
- tipping_transitions: Krauss 1992's 90% ceiling vs. modern ~44-46%
  re-estimate, ELCat 3.5/yr extinction rate — integrated as
  measured-disputed.
- chaos_sensitivity: "no citable Lyapunov figure... Abrams-Strogatz
  language-death models... not read this session" — integrated verbatim.
- energy_rate_density: NOT recovered, Chaisson primary-read confirms
  absence, the biological-boundary-smuggling reasoning (D2) — integrated in
  full, including the sweep's exact structural-vs-evidentiary framing.

**Orphan / recovered-but-not-integrated (present in sweep, absent from entry):**

1. **Shannon entropy rate for English text (~1.3 bits/char, Shannon 1951;
   modern MTurk-scale replication, Bentz et al., Entropy 21(12):1201, 2019)**
   — the sweep's own summary table (research/phase4/languages-sources.md,
   line 398) explicitly lists this row and marks it **primary-read (Phase
   1)** — a HIGHER evidentiary tier than most of what IS in the entry (most
   of the entry's quantitative values are snippet-verified only). This value
   does not appear anywhere in languages.yaml — not in
   characteristic_timescales, not in information_processing, not in
   extreme_event_statistics, not in sources:, not even as a flagged
   omission in provenance.flags. The entry's own header comment claims
   "best-documented language for both corpus statistics (Zipf, **entropy**,
   network structure)" (line 17) — explicitly promising entropy content that
   never materializes in the body. **This is a genuine, high-confidence
   orphan**: a primary-read figure with a named citable source (Shannon,
   BSTJ 30(1):50, 1951 — a canonical, load-bearing citation in information
   theory) that would directly strengthen information_processing (currently
   scored 4 on qualitative grounds alone, with no quantitative
   corroboration) and could stand as an additional characteristic_timescales
   or a new implicit sub-metric. **FINDING (fix)**: recommend adding the
   Shannon entropy-rate figure (~1.3 bits/character, later refined
   estimates ~0.6-1.3 bits/char range across the literature) as a named,
   sourced data point, most naturally under information_processing's
   justification (quantitative corroboration of the qualitative score) or as
   a fourth characteristic_timescales-adjacent measurand — candidate source
   already primary-read and sitting in the project's own Phase 1 files
   (research/phase1/quantitative-backbone.md, per the sweep's own citation
   chain), so this is a copy-in, not a new-research task.

2. **UNESCO Atlas of the World's Languages in Danger (2,473 languages
   categorized across 4 endangerment tiers)** — sweep line 344, explicitly
   flagged snippet-only ("ich.unesco.org PDF surfaced in search but not
   fetched/read this session"). Absent from the entry's tipping_transitions
   or instance_population. Lower-severity than item 1 since it was never
   primary-read or even snippet-confirmed beyond a bare mention, and the
   entry's tipping_transitions column already covers language-endangerment
   quantification adequately via Krauss/ELCat. **FINDING (note)**: a
   legitimate secondary data point for a future pass, not a current defect,
   since the sweep itself did not verify it enough to be catalog-ready and
   the entry is not worse off omitting an unverified figure.

3. Cross-check: the sweep's "Biggest uncertainties" top-3 list (Ethnologue
   access, temporal_correlation sourcing, energy_rate_density structural
   gap) maps 1:1 onto `provenance.flags` items 1-3. The sweep's numbered
   list also implicitly covers the feedback/chaos_sensitivity/criticality/
   tipping_transitions/cascade_susceptibility unanchored-columns issue via a
   different flag item (#4 in provenance.flags, not literally in the sweep's
   own numbered list but consistent with its C4 section) — no silent drops
   found among the sweep's explicitly labeled uncertainty items.

## 6. Cross-entry consistency spot-checks relevant to coverage (not a full consistency pass)

- `emergence` score 3 for languages is explicitly used as a comparator
  inside `cities.yaml` (line 633: "Comparator: matches languages' anchor
  level (emergence.yaml, score 3)") and `self_organization`/
  `robustness_resilience` score-4 pairing is cited in cities.yaml (line 656)
  and stars.yaml (line 536) — the languages entry's scores are being relied
  upon as anchors by sibling entries already drafted after it, meaning any
  future correction to these two scores would have downstream consistency
  implications for cities and stars. Noted for the record; not itself a
  coverage defect in this entry.
- the-internet.yaml (line 332) contrasts its own decentralization score of 3
  against "languages" scoring 4 — consistent with the languages entry's
  actual decentralization score (4), confirming no drift between the two
  entries' mutual cross-references.

---

## Summary of findings

30/30 panel-spec columns present in some form (value + justification/note),
all required schema.md structural blocks present, no relations-reciprocity
violation, and 10 of the 10 columns with a languages/english-specific worked
anchor in schema/anchors/ match their anchor files essentially verbatim. The
entry's claim that feedback/chaos_sensitivity/criticality/
tipping_transitions/cascade_susceptibility lack a worked anchor for this
class is verified accurate (the anchor files exist and are populated for
other classes, but none has a languages-specific entry), and the entry's
scale-text-based fallback scoring for those five columns is sound and
non-fabricated. The most substantive finding is a genuine sourced orphan: the
Shannon (1951) English entropy-rate figure (~1.3 bits/char), marked
primary-read in the sweep report's own summary table and explicitly
name-checked in the entry's own header comment ("Zipf, entropy, network
structure"), never made it into the entry body, sources block, or
provenance.flags — a fillable-from-already-primary-read-material gap, not a
new-research task. A second, lower-priority orphan (UNESCO's 2,473-language
endangerment atlas) is correctly excluded given its unverified snippet-only
status. Four attribute blocks (component_ontology, interaction_topology,
interaction_ontology, variation_selection) are missing the panel-spec-
mandated `evidence_status:` field, a systemic drafting-template gap also
found in the stars and planetary-climate coverage checks rather than an
entry-specific defect. One minor note: `part_of: [cultures]` links to a
name that is not itself a literal roster.md line item (unlike every other
current entry's part_of targets), which the roster-expansion process should
be aware of. No fabricated values, DOIs, or page numbers were found; every
`unverified`, snippet-verified, and primary-read claim in the entry is
correctly and explicitly labeled as such.
