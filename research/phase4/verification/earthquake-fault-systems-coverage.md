# Coverage Check — earthquake-fault-systems

Adversarial pass: assume the entry is incomplete until proven otherwise. Cross-referenced against
`schema/panel-spec.yaml` (30 columns), `schema/anchors/*.yaml` (15 files), `docs/schema.md`,
`docs/roster.md`, `research/phase4/earthquake-fault-systems-sources.md`, and reciprocity against
`data/classes/*.yaml`.

---

## 1. Panel-spec column census (30 columns)

`schema/panel-spec.yaml` `columns:` block enumerated (38 total `- id:` entries under the file;
8 belong to `filling_rules`, leaving exactly 30 panel columns, Group A-F). Cross-checked against
`data/classes/earthquake-fault-systems.yaml`:

| # | Column | Present? | Where |
|---|---|---|---|
| 1 | category | YES | top-level `category: geophysical` |
| 2 | spatial_extent | YES | attributes.spatial_extent |
| 3 | characteristic_timescales | YES | attributes.characteristic_timescales (7 named timescales) |
| 4 | numerosity | YES | attributes.numerosity |
| 5 | instance_population | YES | attributes.instance_population (measured-untested + unknown, both readings recorded) |
| 6 | component_ontology | YES | attributes.component_ontology (2 part types) |
| 7 | energy_rate_density | YES (derived) | attributes.energy_rate_density |
| 8 | interaction_topology | YES | attributes.interaction_topology |
| 9 | interaction_ontology | YES | attributes.interaction_ontology (3 types, closed alphabet) |
| 10 | degree_distribution | YES (value: not-applicable, justified) | attributes.degree_distribution |
| 11 | modularity | YES | attributes.modularity (score 2) |
| 12 | hierarchy_depth | YES | attributes.hierarchy_depth (3 levels, convention stated) |
| 13 | fractal_dimension_spatial | YES | attributes.fractal_dimension_spatial (tension recorded, not merged) |
| 14 | decentralization | YES | attributes.decentralization (score 4) |
| 15 | nonlinearity | YES | attributes.nonlinearity (score 3) |
| 16 | feedback | YES | attributes.feedback (score 1, 1 loop) |
| 17 | openness_dissipation | YES | attributes.openness_dissipation (score 1) |
| 18 | chaos_sensitivity | YES | attributes.chaos_sensitivity (score 2) |
| 19 | criticality | YES | attributes.criticality (score 2, two-claims structure) |
| 20 | extreme_event_statistics | YES | attributes.extreme_event_statistics (G-R vs. CSN tension recorded) |
| 21 | temporal_correlation | YES | attributes.temporal_correlation (qualitative clustering + unknown Hurst) |
| 22 | tipping_transitions | YES | attributes.tipping_transitions (score 1) |
| 23 | memory_hysteresis | YES | attributes.memory_hysteresis (score 2) |
| 24 | information_processing | YES | attributes.information_processing (score 1) |
| 25 | adaptive_capacity | YES | attributes.adaptive_capacity (score 0) |
| 26 | variation_selection | YES | attributes.variation_selection (value: absent) |
| 27 | emergence | YES | attributes.emergence (score 2) |
| 28 | self_organization | YES | attributes.self_organization (score 3) |
| 29 | robustness_resilience | YES | attributes.robustness_resilience (score 3) |
| 30 | cascade_susceptibility | YES | attributes.cascade_susceptibility (score 2) |

**Verdict: 30/30 columns present structurally.** No column is missing-entirely. Several sub-values
correctly carry `unknown` (instance_population's fault-system-inventory reading; temporal_correlation's
Hurst exponent) or `not-applicable` (degree_distribution) with justification — per docs/schema.md and
filling_rules.no-guessing this is a legal value, not a defect on its own, though fillability is
triaged in §6 below.

---

## 2. Required structural blocks (docs/schema.md)

| Block | Present? | Notes |
|---|---|---|
| `id`, `name`, `category`, `status` | YES | id: earthquake-fault-systems, status: draft |
| `exemplars` | YES | 1 exemplar (san-andreas-fault, primary) — singleton-exemplar pattern is legal per docs/schema.md ("Singleton classes... are legal") |
| `scoping_note` | YES | detailed boundary statement; atomicity convention declared (fault segment/patch, explicitly excluding individual earthquakes and mineral grains) |
| `summary` | YES | one paragraph, accessible-layer prose |
| `relations` | YES | part_of: [plate-tectonics] (unresolved, correctly flagged); contains: [] (justified — atoms are component_ontology, not sub-entries) |
| `attributes` (component_ontology, interaction_ontology present within) | YES | see §1 |
| `emergent_phenomena` | YES | 4 items, each with `order_parameter` |
| `sources` | YES | 11 sources, each citation annotated primary-read / snippet-only / [unverified] |
| `provenance` | YES | drafted_by, scoping_and_rubrics (discloses anchor-reuse pattern: 12/15 rubric columns reuse a dedicated own-anchor, 3 use nearest-comparator), verification (all 4 checks correctly `pending`), flags (5 standing self-flags) |

All required blocks present. Spot-checked all 11 `sources:` entries — every one carries an explicit
primary-read / snippet-only / [unverified] annotation; none is left unmarked.

---

## 3. Sweep report cross-check (research/phase4/earthquake-fault-systems-sources.md) — orphan values

Read the full sweep report end-to-end and diffed every recovered value/claim against the entry.

**Confirmed integrated (no orphan):** spatial_extent (SAF total length, SSAF 602 km, seismogenic
depth range); all 7 characteristic_timescales rows (rupture duration, SAF recurrence ~150 yr,
Carrizo Plain, Pallett Creek, Biasi & Weldon 63.7 yr, sediment-resolution limit — the sweep's
separate "paleoseismic record depth ~1,350 yr documented" row is folded into the ~1,400-1,500 yr
recurrence-record figure, a reasonable merge of the same underlying datum, not a loss); numerosity
(11 SSAF sections + UCERF3 statewide 350+/2,606-2,665); instance_population (both earthquake-rate
and fault-system-count readings, including the explicit "not recovered" verdict for a global
fault-system inventory); component_ontology (fault segment/patch atomicity framing, count_oom
figures); energy_rate_density (the sweep's own back-of-envelope moment-rate -> Phi_m derivation,
all individually-flagged inputs); degree_distribution (N/A verdict + Newman 2003 cross-check
reasoning); fractal_dimension_spatial (Aviles et al. 1987 D~1.1-1.4 + Lomax & Henry 2023 smoothness
tension, recorded as two distinct measurands per filling_rules, matching the sweep's explicit
recommendation not to merge); G-R b-value 1.03+/-0.12 plus Hutton/Tormann/UCERF3 cross-figures
(extreme_event_statistics); CSN 2009 amplitude-power-law rejection (alpha=1.64(4), p=0.00); the
characteristic-earthquake-vs-unbroken-G-R adjudication; temporal_correlation ETAS/rate-clustering
figures (52%/59%/72%/93% of long-term mean) and the global comparator list (North Anatolian, Dead
Sea graben, Wellington NZ, Bear Valley swarm); criticality two-claims structure (event stats solid,
SOC mechanism contested per Watkins 2016); Geller et al. 1997 chaos/unpredictability framing;
Wesnousky 2008 cascade statistics (28 ruptures, 50%/70% multi-fault) and the "Big Seven"/Denali 2002
example.

**ORPHAN FOUND (minor) — SCEC-affiliated per-km moment-accumulation-rate figure never integrated.**
The sweep report's `energy_rate_density` section recovers a snippet-only figure — "seismic moment
accumulation rate on individual SAF segments: 1.5-1.8x10^13 N*m/yr per km of fault along the
high-slip-rate Mojave and Carrizo segments (low as 0.2x10^13 N*m/yr/km on San Jacinto segments)"
— sourced to a SCEC-affiliated study (central.scec.org/publication/1471, author/year unconfirmed,
"likely Smith-Konter & Sandwell or similar"). This figure does not appear anywhere in the entry's
`energy_rate_density` derivation chain or in the `page-felzer-2015-context` source note, which
mentions the same SCEC link only in passing without carrying the actual per-km moment-rate number.
The entry instead relies solely on its own back-of-envelope whole-system moment-rate calculation
(mu * A * slip_rate with an assumed 30 mm/yr slip rate). Low severity: the sweep itself flags this
figure as unconfirmed-author snippet-only and explicitly recommends follow-up before locking in as a
formal citation — so its omission from the entry is defensible caution, not a correctness problem —
but it was recovered and never even mentioned as a cross-check candidate or set-aside note, which is
the integration gap this check is built to catch.

**ORPHAN FOUND (minor) — Parsons (2007) "fractal fault complexity" finding and Marone (1998)
fault-strength-healing mechanism, cited only as bare bibliographic entries, not as substantive
content.** The sweep report's `criticality` section states Page & Felzer (2015) cites Parsons (2007,
*Nat. Geosci.* 1, 59-63) as finding "the pattern of seismicity clusters and gaps along the entire San
Andreas fault obeys a power-law relationship" reproducible by a "fractal fault complexity" model, and
also mentions Marone (1998) fault-strength-healing as part of the ETAS-clustering explanatory
context. In the entry, Parsons (2007) appears only inside the `page-felzer-2015` source's
citation-within-citation list (line ~762) with no substantive claim attached; Marone (1998) does not
appear at all. Both are SOC-mechanism-adjacent and CSN/G-R-adjacent findings that could have
strengthened the `criticality` or `temporal_correlation` narrative but were left as bibliography-only
mentions. Low severity — the core two-claims verdict (event stats solid / mechanism contested) is
intact and correctly sourced without them; this is additional supporting texture, not a missing
primary claim.

**No other orphans found.** All other sweep-report values either appear in the entry or are
explicitly and consistently marked `unknown`/`not recovered` in both places (formal Hurst exponent
for fault seismicity; global fault-system inventory count; a single authoritative fault-zone
damage-zone-width source; a directly-published Phi_m figure for any fault system; per-segment
numeric D values from Aviles et al. 1987 to decimal precision; a single-paper primary confirmation
of the UCERF3 statewide section/subsection counts).

---

## 4. Relations reciprocity check (roster.md + data/classes/*.yaml)

`earthquake-fault-systems.relations`:
```
part_of: [plate-tectonics]     # unresolved -> roster expansion queue
contains: []
```

`plate-tectonics` has **no entry** in `data/classes/` (confirmed via directory listing: cities,
earthquake-fault-systems, financial-markets, languages, planetary-climate, power-grids,
river-networks, stars, the-internet, tropical-cyclones — no plate-tectonics file). This is a legal,
correctly-flagged unresolved relation per docs/schema.md ("Unresolved names (no entry yet) are legal
— they form the roster expansion queue") — directly parallel to how `tropical-cyclones.yaml` handles
its own `weather-systems` unresolved link. No reciprocity defect is possible here since there is no
resolved target entry to check `contains:` against. `docs/roster.md`'s candidate list names "plate
tectonics & fault systems" as a single combined line (line 28) — the entry's scoping_note explicitly
and reasonably carves fault systems out from plate-tectonics-as-driver-forcing, consistent with the
class-vs-forcing distinction the entry draws throughout (e.g. energy_rate_density, openness_dissipation).

`relations.contains: []` is justified in-file ("fault segments are the atomic parts
(component_ontology), not sub-entries; no candidate contained complex-systems entries identified") —
a documented decision, not an omission.

Cross-checked all other pilot-10 entries that reference `earthquake-fault-systems` by name
(cities.yaml, power-grids.yaml, river-networks.yaml, stars.yaml) — all 4 references are anchor-scale
comparator citations (score comparisons in rubric justifications), not `relations` edges, so no
reciprocal `part_of`/`contains` entry is expected or missing on those files' side.

No relation ids reference non-existent or misspelled catalog ids (the only id referenced,
`plate-tectonics`, is correctly unresolved-flagged, not silently assumed resolved).

---

## 5. Anchor cross-check (schema/anchors/, 15 files)

Entry claims reuse of earthquake-fault-systems' own worked-anchor language, "per this class's own
anchor," for 8 columns: nonlinearity, feedback, openness_dissipation, chaos_sensitivity, criticality,
tipping_transitions, memory_hysteresis, information_processing.

Verified all 8 anchor files contain a `system: earthquake-fault-systems` / `exemplar: "San Andreas
Fault"` entry, AND that the anchor's own recorded score matches the entry's score exactly:

| Anchor file | earthquake-fault-systems entry found? | Anchor score | Entry score | Match? |
|---|---|---|---|---|
| nonlinearity.yaml | YES | 3 | 3 | YES |
| feedback.yaml | YES | 1 | 1 | YES |
| openness_dissipation.yaml | YES | 1 | 1 | YES |
| chaos_sensitivity.yaml | YES | 2 | 2 | YES |
| criticality.yaml | YES | 2 | 2 | YES |
| tipping_transitions.yaml | YES | 1 | 1 | YES |
| memory_hysteresis.yaml | YES | 2 | 2 | YES |
| information_processing.yaml | YES | 1 | 1 | YES |

All 8 claimed-anchor columns check out exactly — no contradiction, no fabricated "per this class's
own anchor" claim, no score drift between the anchor file and the entry.

The remaining 7 rubric/hybrid columns (decentralization, modularity, adaptive_capacity, emergence,
self_organization, robustness_resilience, cascade_susceptibility) correctly have no dedicated
earthquake-fault-systems anchor entry (confirmed absent in all 7 files) and are honestly disclosed in
`provenance.scoping_and_rubrics` as comparator-scored against the nearest worked anchor from a
DIFFERENT class. Spot-verified every cited comparator score exists and matches:

| Column | Entry's cited comparator | Comparator's own file score | Entry score | Match? |
|---|---|---|---|---|
| decentralization | stars ("the stars case, score 4") | 4 | 4 | YES |
| modularity | river-networks (Mississippi, "score 2") | 2 | 2 | YES |
| adaptive_capacity | stars ("score 0") | 0 | 0 | YES |
| emergence | stars ("score 2") | 2 | 2 | YES |
| self_organization | tropical-cyclones/river-networks ("both score 4") | 4 / 4 | 3 (deliberately held below both, justified) | consistent (entry explains the downward departure) |
| robustness_resilience | the-internet ("score 3") | 3 | 3 | YES |
| cascade_susceptibility | financial-markets ("score 2") | 2 | 2 | YES |

No anchor contradiction found anywhere in the 15-file anchor set for this entry.

---

## 6. Unknown-value fillability triage

Every `unknown` / `not recovered` / thin-evidence value in the entry was checked against the sweep
report and general literature knowledge for whether it is genuinely unmeasured or plausibly fillable.

| Column / sub-value | Status | Fillable? |
|---|---|---|
| instance_population: global standing count of fault-SYSTEM instances | unknown | **Plausibly fillable.** The GEM Global Active Faults Database (Styron & Pagani, 2020, *Earthquake Spectra* 36(1) suppl., "The GEM Global Active Faults Database") is a real, citable published global fault-system/fault-trace inventory that was not mentioned anywhere in the sweep report or the entry. [unverified — model-knowledge candidate, not independently checked this session] This is the single strongest fillability candidate found in this check; recommend a targeted fetch before treating the class-level count as a permanent unknown. |
| characteristic_timescales: individual rupture duration (~1-2 min) | qualitative, [unverified — model-knowledge scaling estimate] | Fillable — standard seismological rupture-duration-vs-magnitude scaling relations are published (e.g., Kanamori & Anderson 1975 source-scaling relations, or direct SAF-specific rupture-duration figures from finite-fault inversions of the 1857 Fort Tejon or 1906 San Francisco events). Already flagged for follow-up in the entry's own provenance; this check confirms it is a genuine, addressable gap, not a fundamental limit. |
| temporal_correlation: formal Hurst exponent for fault seismicity | unknown | Plausibly fillable, though harder — the entry already correctly notes ETAS/rate-clustering evidence is qualitative-only; a targeted search of the seismicity-declustering/long-range-correlation literature (e.g., work following Bak, Christensen & Olami-style fault-seismicity correlation studies, or explicit Hurst-exponent studies of Southern California seismicity) might recover a number, but this is a genuinely under-studied area per the sweep's own search — lower confidence of success than the GEM database candidate above. |
| energy_rate_density: apparent stress (sigma_a ~1-3 MPa) input | [unverified — model-knowledge range] | Fillable — Choy & Boatwright (1995, *J. Geophys. Res.* 100) is the standard published apparent-stress-for-earthquakes reference and would let this specific input be upgraded from unsourced model-knowledge to a cited figure. Named as a candidate source class in the sweep report itself ("Choy & Boatwright-type apparent-stress literature") but never fetched. |
| energy_rate_density: fault-zone/damage-zone width (~200 m) input | [unverified — not sourced] | Fillable — fault-damage-zone-width studies exist in the structural-geology literature (e.g., work by Faulkner, Chester & Chester on SAF damage-zone width at various sites); a specific citation was not sought this session. |
| numerosity: statewide UCERF3 section/subsection counts (350+/2,606-2,665) | measured-untested (snippet-only) | Fillable directly — this is simply an un-fetched primary source (USGS Fact Sheet 2015-3009 / Field et al. 2014 UCERF3 itself, already in the entry's reference chain via page-felzer-2015's citation list) rather than a genuine literature gap. Low-effort follow-up. |
| fractal_dimension_spatial: Aviles et al. 1987 per-segment D values | measured-untested (403-blocked twice) | Not a literature gap — the paper exists and is known, but access is blocked (paywall). A university-proxy fetch or interlibrary figure-extraction would resolve this; correctly not guessed around in the meantime. |

No column was found to be silently recorded as `unknown` when a same-session-locatable citation
would trivially resolve it (the closest case, UCERF3 statewide counts, is already correctly labeled
`measured-untested` rather than `unknown`, so it is not a no-guessing violation — just an easy
follow-up).

---

## Summary of defects found

1. **Fix (minor)** — SCEC-affiliated per-km moment-accumulation-rate figure (1.5-1.8x10^13 N*m/yr/km,
   from the sweep's `energy_rate_density` section) was recovered but never integrated into the
   entry's derivation chain or even mentioned as a set-aside cross-check candidate.
2. **Fix (minor)** — Parsons (2007) "fractal fault complexity" power-law finding and Marone (1998)
   fault-strength-healing mechanism are cited only as bare bibliographic entries (buried inside the
   `page-felzer-2015` source's citation-within-citation list) rather than integrated as supporting
   narrative content in `criticality` or `temporal_correlation`, despite being recovered by the sweep.
3. **Note** — GEM Global Active Faults Database (Styron & Pagani 2020) is a plausible, previously
   unconsidered candidate source for resolving the `instance_population` "fault systems worldwide"
   unknown; recommend a targeted fetch in a future sweep pass rather than leaving this as a permanent
   unknown.
4. **Note** — Several other thin/unverified inputs (apparent stress, fault-zone width, rupture
   duration, Aviles et al. 1987 per-segment D, UCERF3 statewide counts) are genuinely fillable from
   named or nameable literature but require follow-up fetches; all are already self-flagged in the
   entry's own `provenance.flags` block, so this check confirms rather than newly discovers most of
   them.
5. **No blockers found** — no fabricated values, no anchor contradictions (all 8 dedicated
   own-anchor scores and all 7 comparator-anchor scores checked and matched exactly), no
   missing-entirely columns (30/30 present), no miscited primary/snippet status, no relations-id
   errors, no reciprocity defect (the only relation target, `plate-tectonics`, is correctly
   unresolved and has no entry to reciprocate against).
