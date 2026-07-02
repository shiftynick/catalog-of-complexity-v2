# Coverage check — weather-systems.yaml

Role: adversarial coverage checker. Assume the entry is incomplete until proven
otherwise. Scope: all 30 panel-spec columns, all 9 required structural blocks,
sweep-report orphan values, and relations reciprocity against docs/roster.md and
existing data/classes/ entries.

Target: `N:\coc\data\classes\weather-systems.yaml` (status: draft)
References: `schema/panel-spec.yaml` (v1.0-frozen), `schema/anchors/*.yaml` (15
files), `docs/schema.md`, `docs/roster.md`,
`research/v0.2-sweep/expansion/weather-systems-sources.md`.

No edits made to any file. This is a read-only check log.

---

## 1. Column-by-column presence audit (30 panel-spec columns)

panel-spec.yaml declares 30 columns total: `category` (top-level entry field,
not under `attributes:`) plus 29 columns filed under `attributes:`.

| # | column | present? | notes |
|---|---|---|---|
| 1 | category | YES (line 9, `geophysical`) | matches vocabulary |
| 2 | spatial_extent | YES | quantitative, range, detail sub-fields |
| 3 | characteristic_timescales | YES | list of 4 named timescales |
| 4 | numerosity | YES | quantitative, range; **missing `unit:` field** (see §3) |
| 5 | instance_population | YES | measured-untested, low confidence |
| 6 | component_ontology | YES | 7 part types listed |
| 7 | energy_rate_density | YES | present-but-unknown (see §3 fillable judgment) |
| 8 | interaction_topology | YES | field/continuum |
| 9 | interaction_ontology | YES | 4 types, closed alphabet |
| 10 | degree_distribution | YES | not-applicable, qualitative |
| 11 | modularity | YES | rubric score 1 |
| 12 | hierarchy_depth | YES | value 2, method note |
| 13 | fractal_dimension_spatial | YES | D=1.35, Lovejoy 1982 |
| 14 | decentralization | YES | rubric score 4 |
| 15 | nonlinearity | YES | rubric score 4 |
| 16 | feedback | YES | rubric score 3, 3 loops listed |
| 17 | openness_dissipation | YES | hybrid score 3 |
| 18 | chaos_sensitivity | YES | hybrid score 4, measured |
| 19 | criticality | YES | hybrid score 1, mechanism_status: proposed |
| 20 | extreme_event_statistics | YES | present-but-unknown |
| 21 | temporal_correlation | YES | present-but-unknown |
| 22 | tipping_transitions | YES | hybrid score 1 |
| 23 | memory_hysteresis | YES | hybrid score 1 |
| 24 | information_processing | YES | rubric score 0 |
| 25 | adaptive_capacity | YES | rubric score 0 |
| 26 | variation_selection | YES | categorical, absent |
| 27 | emergence | YES | rubric score 3 |
| 28 | self_organization | YES | rubric score 4 |
| 29 | robustness_resilience | YES | rubric score 1, exemplar-level |
| 30 | cascade_susceptibility | YES | hybrid score 0 |

**Verdict: zero columns missing entirely.** All 30 panel-spec columns are
structurally present in the entry. Several carry `evidence_status: unknown`
(energy_rate_density, extreme_event_statistics, temporal_correlation) — per
the coverage-checker's own brief, present-but-unknown is not a defect; it is
the legal, honestly-reported state per filling_rules.no-guessing. Judged
fillable-from-literature vs. genuinely unmeasured for each in §3.

## 2. Required structural blocks (docs/schema.md)

| block | present? | notes |
|---|---|---|
| exemplars | YES (line 12) | 3 exemplars: extratropical-cyclone (primary), monsoon-system, atmospheric-river — each with a note |
| scoping_note | YES (line 27) | boundary discipline, atomicity convention, exclusion of tropical-cyclones stated explicitly |
| summary | YES (line 56) | accessible-layer prose, one paragraph |
| relations | YES (line 71) | part_of + contains, both annotated |
| component_ontology | YES (line 185, inside attributes) | 7 part types |
| interaction_ontology | YES (line 256, inside attributes) | 4 types, closure verdict |
| emergent_phenomena | YES (line 686) | 4 phenomena with order_parameter |
| sources | YES (line 696) | 13 source entries, each with read-status annotation |
| provenance | YES (line 726) | drafted_by, verification block (all "pending" — expected for status: draft), flags list (5 entries) |

**Verdict: all 9 required structural blocks present.** `status: draft` is
consistent with `provenance.verification` showing all four checks
`pending` — this coverage check is itself one of those four checks; no
internal contradiction.

## 3. Fillable-from-literature judgment for every `unknown`/gap

Three columns carry `evidence_status: unknown` at the value level, plus one
structural gap inside component_ontology, plus one field omission in
numerosity, examined below.

### 3a. energy_rate_density — value: unknown
The entry states no published power/mass figure was located for extratropical
cyclones, monsoons, or atmospheric rivers as a class, and explicitly declines
to borrow tropical-cyclones' derived ~1.5-6e2 erg/s/g figure (correctly, per
filling_rules.no-guessing — it is a narrower warm-core system's estimate).

**Judgment: fillable-from-literature, not yet attempted.** panel-spec.yaml's
own method note for this column states: "For most systems this must be
DERIVED by us from published energy-throughput and mass figures —
evidence_status: derived." The sweep report and entry both name a concrete
candidate source (Peixoto & Oort 1992, general-circulation energy-budget
textbook — Lorenz-cycle available-potential-energy/kinetic-energy conversion
rates) but confirm it "was not checked this sweep." Tropical-cyclones' own
entry shows the expected pattern: a DERIVED value computed by the project
from published throughput/mass inputs, not merely copied from a source. This
is a genuine, honestly-flagged gap, but it is a **fix-before-verified**
severity candidate, not a blocker — the entry correctly declines to guess,
but the derivation path (Peixoto & Oort general-circulation energy budget,
scaled to a synoptic-eddy kinetic-energy-generation rate and a comparable
mass denominator to tropical-cyclones' own convention) is a standard
textbook figure, not a research frontier. Recommend before promotion past
draft.

### 3b. extreme_event_statistics — value: unknown
Sienz et al. (2010, Tellus A) is named as the closest extratropical-cyclone-
specific extreme-value paper but was only snippet-verified, uses a GPD
framework (not the column's "tail exponent alpha" definition), and the entry
correctly declines to force-fit a translation without a primary read.

**Judgment: fillable-from-literature (partially), pending a primary-read
pass.** Sienz et al. 2010 is a named, concrete candidate that could
potentially populate this column post-primary-read, though the entry is
correct that a GPD shape parameter cannot simply substitute for alpha
without an explicit translation/justification (filling_rules.measurand-required,
power-law-rigor). Genuinely unmeasured in the CSN-2009-alpha sense pending
that follow-up; the entry's `unknown` designation is honest and appropriately
cautious, not a defect. Note-level only.

### 3c. temporal_correlation — value: unknown
No measurand chosen this sweep; entry names a candidate (interannual NH
cyclone-count autocorrelation, supportable in principle from Neu et al. 2013
data) but does not attempt it.

**Judgment: fillable-from-literature (partially) but requires new analysis,
not a literature lookup** — Neu et al. 2013 does not itself report an
autocorrelation statistic; computing one would require this project to
derive it from the paper's underlying data (not available) or find a
different published Hurst-exponent/autocorrelation study of cyclone-count
or storm-track time series. No such study was named as located. **Judgment:
genuinely unmeasured**, consistent with tropical-cyclones' own identical
`unknown` treatment of this column (per the entry's own note). Note-level
only.

### 3d. component_ontology — two internal `count_oom: unknown` sub-fields
- "convective cells / frontal zones" — count_oom: unknown
- "mesoscale convective complexes (MCCs)" — count_oom: unknown

**Judgment: MCC count_oom is plausibly fillable.** The sweep report's own
Maddox (1980) MCC section gives detailed size/duration thresholds but no
global annual MCC count/frequency figure was located or entered — this may
be a genuine literature gap (MCC census/climatology studies exist regionally,
e.g. US Great Plains MCC frequency counts by Maddox and others) that a
follow-up targeted search could resolve; not attempted this sweep, not
flagged in the entry's own provenance.flags either (a minor omission — see
§5). Note-level.

**"Moist air parcels" count_oom** is explicitly deferred with a stated
reason (a genuine derivation, not a search gap): "would follow
tropical-cyclones' ~1e7-per-system convention... left unconverted pending a
dedicated derivation." This is honestly reported as a to-do, not hidden.
Note-level, arguably fillable via straightforward scaling arithmetic from
tropical-cyclones' own convention (spatial_extent ratio cubed), flagged in
§5.

### 3e. numerosity — missing `unit:` field
panel-spec.yaml declares `unit: count (order of magnitude)` for numerosity.
The entry's numerosity block has no `unit:` key at all (compare
spatial_extent, which correctly carries `unit: m`). **Judgment: not a
weather-systems-specific defect** — tropical-cyclones.yaml's own numerosity
block is missing the same field, so this is a pre-existing cross-entry
convention gap, not an error introduced by this entry. Recorded as a note,
not a fix, given the precedent; but the consistency/schema-conformance
question is worth flagging to the orchestrator once for both entries.

## 4. Orphan values in the sweep report never integrated into the entry

Cross-read of every quantitative finding in
`research/v0.2-sweep/expansion/weather-systems-sources.md` against the
entry's `attributes` and `sources` blocks.

**FOUND: Hoskins & Hodges (2002) is a named orphan.** The sweep report lists
it as the #2 of "5 canonical review sources for the entry source list"
(explicitly requested count: 3-5), describing it as "the single strongest...
foundational storm-track climatology paper repeatedly cited by Neu et al.
2013 itself as the baseline climatology reference," and flags it as "a
high-priority follow-up primary-read target." It never appears anywhere in
the entry — not in `sources:`, not cited by any attribute, not mentioned in
`provenance.flags`. The entry's own `sources:` block contains only 13 of the
sweep's ~14+ named candidate citations, and this is the one substantive,
sweep-recommended citation that was dropped without acknowledgment (contrast:
Rudeva & Gulev 2007, also snippet-verified/not-fetched, WAS integrated with
an explicit re-fetch flag both in the entry and in provenance.flags — Hoskins
& Hodges received no equivalent treatment).

All other sweep-report quantitative findings were checked against the entry
and found integrated (with consistent read-status labels carried through):
spatial_extent (diameter, effective radius, modern ERA5 radius, AR
dimensions, MCC cloud shield) — all present in `detail:`; numerosity and
instance_population figures — present; fractal_dimension_spatial,
criticality (β, γ/ν) — present; MCC definition/thresholds — present in
component_ontology; AR standing count and >90%-flux/~10%-circumference
figure — present (self_organization justification); monsoon season length
and Sahel-MCC-organization link — season length present, but see below.

**Partial orphan: Sahel monsoon rainfall/MCC-organization link.** The sweep
report's monsoon section flags a "genuinely primary-adjacent figure": "About
80-90% of the total rainfall amount in the Sahel comes from storms larger
than 80,000-100,000 km² that last longer than 6 hours," explicitly noting
this "directly overlaps with the Maddox 1980 MCC size convention... a
genuine physical link worth noting in the entry's scoping/component_ontology."
This 80-90%/Sahel-MCC linkage figure and its cross-connection insight do not
appear anywhere in the entry (component_ontology's monsoon-circulations part
type has no MCC cross-reference; the Sahel spatial-extent figures — ~5,000 km
east-west, 4-20°N band — are also absent from spatial_extent's `detail:`
block, which currently only covers extratropical/AR/MCC figures, not
monsoon). This is a smaller, secondary orphan relative to Hoskins & Hodges,
but a real one: a self-organization-relevant cross-connection the sweep
explicitly surfaced as noteworthy was not carried into the entry.

**Not orphans (correctly excluded):** Neiman et al. 2008 and Lavers et al.
2012 regional AR-landfall-frequency figures are explicitly marked
exemplar/regional-level in the sweep report, not global class-general
numbers — correctly not entered into instance_population (which is
class-general scoped here). Guan & Waliser (2015) AR width convention
(400-1000 km) is a secondary/derived figure alongside Newell et al. 1992's
already-cited primary figure — reasonable to omit as redundant, not a
defect.

## 5. Relations audit against docs/roster.md and data/classes/

`relations.part_of: [planetary-climate]`
- planetary-climate.yaml exists (`data/classes/planetary-climate.yaml`).
- Its own `relations.contains` (line 81) lists
  `[weather-systems, tropical-cyclones, ocean-circulation, river-networks]`,
  with an inline comment explicitly marking weather-systems "unresolved ->
  roster expansion queue" from the parent's side.
- **Reciprocity check: PASS.** Both sides name each other. The parent
  correctly does not resolve weather-systems to a promoted/verified status
  (it remains `status: draft`), consistent with weather-systems not yet
  being verified.

`relations.contains: [tropical-cyclones]`
- tropical-cyclones.yaml exists and its own `relations.part_of` (line 41)
  is `[weather-systems, planetary-climate]`.
- **Reciprocity check: PASS**, and this is the strongest, most explicit
  reciprocal edge in the entry (both sides use matching subtype-of language
  in their inline comments).

`moist-convection-cells` (mentioned in component_ontology and provenance.flags,
NOT listed in `relations.contains`)
- Not yet a `data/classes/` entry — correctly treated as unresolved,
  roster-expansion-queue.
- Cross-checked against tropical-cyclones.yaml: its own `relations.contains`
  is `[moist-convection-cells]` (line 42), and its component_ontology marks
  it `itself_complex: moist-convection-cells` with an explicit note
  distinguishing it from Rayleigh-Bénard convection cells.
- **Consistency check: PASS.** weather-systems' own decision NOT to
  duplicate this edge (reached transitively via tropical-cyclones per its
  own hierarchy_depth ladder argument, documented in both the relations
  inline comment at lines 88-102 and provenance.flags) is an explicit,
  reasoned editorial call, not an omission — and it does not contradict
  tropical-cyclones' own listing (no reciprocity break, since
  weather-systems never claims to directly contain moist-convection-cells).
  This is a legitimate judgment call, correctly flagged as such in
  provenance.flags for future revisit — not a coverage defect.

`docs/roster.md` cross-check: weather-systems is correctly listed among the
current "relations expansion queue" items (docs/roster.md line 3) alongside
ocean-circulation, moist-convection-cells, etc. — the roster document and
this entry's own self-description are consistent.

**No missing or unreciprocated relations edges found.**

## 6. Anchor-consistency spot checks relevant to coverage (not full re-scoring)

Sampled `criticality`, `feedback`, `modularity`, and `chaos_sensitivity`
anchors to confirm the entry's rubric scores are structurally complete
(loop lists present where required, mechanism_status present where required)
rather than re-litigating the scores themselves (out of this checker's scope
— that is the plausibility/consistency checkers' job).

- `feedback` (score 3): anchor notes require "every anchor at score >=2 MUST
  include the structured loop list." Entry's `feedback.loops` has 3 entries
  with name/sign/mechanism — **structurally complete.**
- `criticality` (score 1, mechanism_status: proposed): anchor's
  `mechanism-alone-caps-at-1` boundary clarification requires
  `mechanism_status: proposed` field for exactly this configuration — entry
  has it (line 468). **Structurally complete.**
- `chaos_sensitivity` (score 4): anchor requires "traceable to a specific
  Lyapunov exponent, doubling time, or predictability-horizon figure with a
  citation" for any 3-or-4 score — entry cites Charney 1966 + MDPI 2024 with
  the ~2-week/2-5-day figures. **Structurally complete.**
- `modularity` (score 1): no Q value claimed or required at this score band
  (anchor's Q range for 1 is "roughly 0.0-0.2 where computable" — entry
  correctly does not claim a computed Q, consistent with a continuum-fluid
  system having no natural network representation). **Structurally
  complete.**

No structural (missing-required-subfield) defects found in the sampled
rubric/hybrid columns.

## 7. Summary of severity-worthy findings

- **FIX**: Hoskins & Hodges (2002) — sweep-recommended, high-priority
  citation entirely absent from the entry despite being named the #2 of 5
  canonical sources and explicitly flagged as the baseline climatology
  reference Neu et al. 2013 itself cites. Should at minimum be added to
  `sources:` with an appropriate read-status annotation (existence/title
  confirmed via WebSearch, not primary-read) and a `provenance.flags` entry,
  matching the treatment given to every other unfetched-but-named source in
  this entry.
- **FIX**: `energy_rate_density: unknown` — panel-spec's own method note for
  this column expects a DERIVED value computed from published
  energy-throughput/mass figures where a direct published figure doesn't
  exist (as tropical-cyclones.yaml does). A concrete candidate source
  (Peixoto & Oort 1992) is named but unchecked. This is fillable-from-
  literature, not genuinely unmeasured, and should be attempted before
  verified status.
- **NOTE**: Sahel monsoon/MCC rainfall-organization link (80-90% of Sahel
  rainfall from MCC-scale storms) surfaced in the sweep report as a
  self-organization-relevant cross-connection but not carried into the
  entry's component_ontology or self_organization justification.
- **NOTE**: `numerosity` missing the panel-spec-declared `unit:` field
  (pre-existing pattern shared with tropical-cyclones.yaml, not unique to
  this entry).
- **NOTE**: MCC `count_oom: unknown` in component_ontology — a regional MCC
  frequency/census literature plausibly exists (not searched this sweep,
  not flagged in provenance.flags either).
- **NOTE**: "moist air parcels" `count_oom` left unconverted pending a
  scaling derivation from tropical-cyclones' own 1e7-per-system convention —
  honestly flagged as a to-do already, arguably a same-session-fillable
  arithmetic exercise rather than a research gap.

No blocker-severity findings: no fabricated value, citation, or DOI found;
no anchor contradiction found; no missing column, missing structural block,
or broken relations-reciprocity edge found.
