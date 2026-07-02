# Coverage check — galaxies

Adversarial coverage pass against `data/classes/galaxies.yaml` (status: draft).
Reference documents: `schema/panel-spec.yaml` (frozen v1.0), `schema/anchors/*.yaml`
(15 files), `docs/schema.md`, `docs/roster.md`, sweep report
`research/v0.2-sweep/expansion/galaxies-sources.md`. Entry and reference files
were NOT modified during this check.

---

## 1. Panel-spec column census (30 columns)

`category` is a top-level field (`category: astrophysical`, line 8), consistent
with all other verified entries (stars.yaml, tropical-cyclones.yaml checked
directly) — not a defect that it lives outside `attributes:`.

All 29 remaining panel-spec columns are present under `attributes:` — verified
by diffing the ordered id list from `schema/panel-spec.yaml` (`category`,
`spatial_extent`, `characteristic_timescales`, `numerosity`,
`instance_population`, `component_ontology`, `energy_rate_density`,
`interaction_topology`, `interaction_ontology`, `degree_distribution`,
`modularity`, `hierarchy_depth`, `fractal_dimension_spatial`,
`decentralization`, `nonlinearity`, `feedback`, `openness_dissipation`,
`chaos_sensitivity`, `criticality`, `extreme_event_statistics`,
`temporal_correlation`, `tipping_transitions`, `memory_hysteresis`,
`information_processing`, `adaptive_capacity`, `variation_selection`,
`emergence`, `self_organization`, `robustness_resilience`,
`cascade_susceptibility`) against the attribute keys actually present in
`galaxies.yaml`. **Zero columns missing entirely.** Several columns carry
`value: unknown` (`temporal_correlation`, `extreme_event_statistics`) or
`not-applicable` (`degree_distribution`) — these are present-but-unknown,
which per the task brief is explicitly NOT a coverage defect (unknown is
always legal).

**Verdict: full 30/30 column coverage, no missing-entirely columns.**

---

## 2. Required structural blocks (per docs/schema.md)

| Block | Present? | Notes |
|---|---|---|
| `exemplars` | Yes | 4 exemplars: milky-way, andromeda, spiral-morphological-class, elliptical-morphological-class |
| `scoping_note` | Yes | Detailed; explicit dual-ontology atomicity declaration with justification |
| `summary` | Yes | One accessible paragraph |
| `relations` | Yes | `part_of: []`, `contains: [stars]`, with inline reasoning comment |
| `component_ontology` | Yes | 3 parts (stars, gas/DM continuum, Andromeda star count) |
| `interaction_ontology` | Yes | 4 types, `type_count: 4`, `alphabet_closure: closed` |
| `emergent_phenomena` | Yes | 5 phenomena with order_parameter fields |
| `sources` | Yes | 9 sources, each with read-status annotation |
| `provenance` | Yes | `drafted_by`, `scoping_and_rubrics`, `verification` (all "pending"), `flags` (4 self-flagged items) |

**Verdict: all required structural blocks present.**

### 2a. Exemplar utilization gap (note, not a defect)

Only `milky-way` is ever cited via a scored `level: exemplar(milky-way)` field
in `attributes`. The other three declared exemplars (`andromeda`,
`spiral-morphological-class`, `elliptical-morphological-class`) are never used
as a `level:` value anywhere in the attribute panel — Andromeda's data appears
only inline as prose/detail (spatial_extent.detail, characteristic_timescales
is silent on Andromeda, component_ontology's third list item is a Andromeda
comparative note without a `level` field of its own, since `level` is
document-level for `component_ontology`). Checked against precedent:
`planetary-climate.yaml` (Earth/Venus/Mars/Titan) does exactly the same thing —
`grep "exemplar(venus)\|exemplar(mars)\|exemplar(titan)"` returns zero hits
there too. **This matches established catalog practice for comparative
exemplars carried as narrative context rather than separately-scored
data points — not a coverage defect.**

---

## 3. Relations / roster / reciprocity check

- `galaxies.yaml` relations: `part_of: []`, `contains: [stars]`.
- `stars.yaml` relations: `part_of: [galaxies]   # unresolved -> roster expansion queue`
  (line 55), `contains: [photospheric-convection-cells]`.
- **Reciprocity confirmed**: stars.yaml's own `part_of: [galaxies]` pointer
  (previously unresolved) is now correctly reciprocated by galaxies.yaml's
  `contains: [stars]`. This is exactly the resolution the entry's own header
  comment (line 3-4) claims to make, and it checks out.
- `docs/roster.md` line 3 still lists `galaxies` inside the "unresolved
  `part_of`/`contains` ids accumulated by real entries" queue description.
  This is now **stale relative to this draft** (galaxies no longer has an
  unresolved incoming pointer from stars — the pointer is resolved by this
  very entry) — but this is a `docs/roster.md` staleness issue, not a defect
  in `galaxies.yaml` itself. Flagged as a note for whoever next edits
  roster.md (likely at promotion to `verified` status), not attributed to
  this entry as a coverage gap.
- No other verified entry's `relations` block references `galaxies` except
  stars.yaml (checked via grep across `data/classes/*.yaml`).
- Broader containment (galaxies as part of galaxy clusters / the cosmic web)
  is explicitly left unresolved by the entry's own relations comment, with a
  stated reason (no such roster entry exists, inventing one is out of scope).
  This is a reasonable, explicitly-justified scope boundary, not a silent
  omission.

**Verdict: relations reciprocity correct; one adjacent doc (roster.md) is
stale but that is not this entry's defect.**

---

## 4. Sweep-report vs. entry: orphan-value check

Cross-referenced every recovered value in
`research/v0.2-sweep/expansion/galaxies-sources.md` against the entry.

| Sweep item | Integrated into entry? |
|---|---|
| Milky Way disk diameter (~26.8 kpc D25, up to ~30 kpc) | Yes — spatial_extent.detail |
| Andromeda disk diameter (~46.6 to ~220,000 ly) | Yes — spatial_extent.detail |
| Solar galactic orbital period (~220-240 Myr) | Yes — characteristic_timescales |
| Bar pattern rotation period (~160-180 Myr) | Yes — characteristic_timescales |
| Milky Way age, stellar/globular-cluster (~13.6 Gyr) | Yes — characteristic_timescales, explicitly kept unreconciled from the Chaisson figure per sweep's own instruction |
| Milky Way age, Chaisson Table 1 figure (12 Gya) | Yes — characteristic_timescales |
| MW-Andromeda merger timescale (~8 Gyr) | Yes — characteristic_timescales |
| Spiral-arm crossing / density-wave time (~4 Myr) | **Correctly excluded** — sweep itself says "judged too low-confidence to enter"; entry's note explicitly acknowledges the omission as a recommended follow-up. Not an orphan; a deliberate, documented exclusion. |
| Milky Way star count (~1-4e11, reused from stars.yaml) | Yes — component_ontology, numerosity |
| Andromeda star count (~1 trillion) | Yes — component_ontology |
| Conselice 2016 galaxy count (2.0e12) | Yes — instance_population |
| Pre-2016 consensus count (~1-2e11) | Yes — instance_population.note |
| Chaisson Phi_m = 0.5 erg/s/g | Yes — energy_rate_density |
| Licquia & Newman stellar mass cross-check | Yes — energy_rate_density.method |
| **Milky Way luminosity discrepancy** (task-brief candidate ~5e36 W vs. secondary-sourced ~4-8x10^10 Lsun band-dependent range implying ~1.5-3x10^37 W — roughly an order of magnitude apart) | **NOT integrated.** The sweep report (lines 169-178) explicitly instructs: "flag this discrepancy for the drafting agent rather than resolving it; do not present either figure as reconciled without further work." The entry's `energy_rate_density.method` carries the L*M cross-check reasoning but drops this specific numeric-discrepancy flag entirely — it is not mentioned anywhere in the entry. See Finding F1. |
| Galaxy correlation function (gamma~1.8) | Yes — fractal_dimension_spatial |
| interaction_topology = field/continuum recommendation | Yes |
| degree_distribution = not-applicable recommendation | Yes |
| Atomicity/dual-ontology judgment call | Yes — resolved explicitly in scoping_note, flagged in provenance.flags for consistency-checker review |
| extreme_event_statistics / temporal_correlation / tipping_transitions / chaos-Lyapunov "not investigated this sweep" | Yes — entry's provenance.flags explicitly carries this forward, and each column's own note says the same |

**Verdict: one orphan value found (Milky Way luminosity discrepancy) — see F1.
All other sweep-recovered values are either integrated or deliberately and
explicitly excluded with matching justification in the entry.**

---

## 5. Anchor cross-check for rubric/hybrid columns

Galaxies has no worked anchor in any of the 15 `schema/anchors/*.yaml` files
(confirmed directly — no `system: galaxies` entry exists in any anchor file).
The entry's own `provenance.scoping_and_rubrics` correctly states this and
explains the fallback (scoring against scale text with nearest comparator
cited inline). Spot-checked two anchor files directly (`modularity.yaml`,
`decentralization.yaml`) against the entry's corresponding scores/justifications
(modularity: 1, decentralization: 4) — both cite the correct nearest
comparators (stars anchor for modularity==1 reasoning; stars/tropical-cyclones
for decentralization==4 reasoning) and the reasoning is structurally consistent
with those anchors' own scale-text and worked-example language. No anchor
contradiction found in the columns spot-checked.

Not exhaustively re-derived for all 15 rubric/hybrid columns (that is the
plausibility/consistency checkers' job, not coverage's) — this check confirms
presence and structural conformance, not correctness of every score.

---

## 6. measurand_type / measurand-required conformance

Per the frozen panel-spec (D-series addition, "Every value MUST carry
measurand_type" on `extreme_event_statistics`): galaxies.yaml's
`extreme_event_statistics` (value: unknown) does NOT carry a formal
`measurand_type:` field — the static-vs-temporal-event distinction is only
discussed in prose (the `note:` field explicitly distinguishes the
correlation-function figure, filed elsewhere, from a hypothetical
temporal-event distribution here).

Checked against precedent: every OTHER verified entry with a *populated*
`extreme_event_statistics` value does carry an explicit `measurand_type:`
field (stars, tropical-cyclones, earthquake-fault-systems, financial-markets,
power-grids, river-networks, ocean-circulation = `temporal-event`; cities,
languages, global-economy = `static-cross-sectional`). However,
`world-wide-web.yaml` — the one other entry that also leaves
`extreme_event_statistics` as `value: unknown` — likewise has NO formal
`measurand_type:` field, discussing the static/temporal-event ambiguity only
in prose (nearly identical pattern to galaxies.yaml, down to citing the same
panel-spec distinction). **This is therefore consistent with established
practice for the specific case of an undetermined/unknown value, not a
deviation** — see Finding F2 (note-level only).

`temporal_correlation` (value: unknown) has no `measurand:` field at all
(not even a "no measurand identified" framing beyond the note prose) — minor,
see Finding F3 (note-level only).

---

## 7. Fillable-from-literature judgment on open `unknown`s

| Column | unknown/gap | Fillable? |
|---|---|---|
| `numerosity` (continuum part) | unknown particle count for gas/DM continuum | Genuinely unmeasured — no literature convention exists (matches planetary-climate's identical treatment of its own fluid continuum). Not fillable. |
| `extreme_event_statistics` | unknown | Plausibly fillable — candidate sources named in-entry (galaxy merger mass-ratio distributions literature, starburst luminosity functions) but not pursued. A dedicated follow-up search (candidate: Fakhouri, Ma & Boylan-Kolchin 2010 for merger-rate/mass-ratio statistics from N-body simulations) could plausibly promote this past unknown. Flagged already in entry's own provenance.flags. |
| `temporal_correlation` | unknown | Not clearly fillable — no established measurand was even identified (unlike extreme_event_statistics, which at least names candidates); likely requires a dedicated literature search to determine if a measurand exists at all. |
| `tipping_transitions` mechanism detail | scored 1 (informal), capped below 2 | Plausibly fillable — the entry itself says no dedicated bifurcation/threshold-style treatment was searched for; a targeted search of galaxy-merger dynamical-systems literature could change this. |
| `chaos_sensitivity` galaxy-scale (vs. orbit-scale) predictability horizon | scored 2, capped below 3 pending search | Plausibly fillable — entry explicitly says the class-level question was not investigated; candidate literature exists (N-body chaos in galactic potentials, e.g. work by Merritt, Valluri on stellar-orbit chaos) but wasn't searched this sweep. |
| `fractal_dimension_spatial` primary source | capped at measured-untested; Peebles 1980 never fetched, one fetch attempt 403'd | Fillable — a modern SDSS-era correlation-function paper (e.g. Zehavi et al. 2011, or the specific one already surfaced: arXiv 2507.17629) could promote this past measured-untested with a primary read. |
| `instance_population` | measured-disputed pending JWST paper read | Fillable — Wang et al. 2024 (arXiv:2403.02399) already identified by title/arXiv-id in the entry's own sources but not read closely; a follow-up read could resolve or further substantiate the dispute. |

All of the above are already self-flagged in the entry's own
`provenance.flags` block — the drafting agent's own uncertainty list matches
this coverage check's independent read almost exactly, which is a good sign
for the entry's internal honesty but does not, by itself, resolve the
underlying gaps.

---

## Findings

### F1 (fix) — energy_rate_density: sweep-flagged luminosity discrepancy dropped from entry
The sweep report (`galaxies-sources.md` lines 169-178) explicitly surfaces a
roughly order-of-magnitude tension between a task-brief candidate Milky Way
luminosity figure (~5e36 W) and the secondary-sourced band-dependent range
(~4-8x10^10 Lsun, implying ~1.5-3x10^37 W bolometric), and explicitly
instructs: "flag this discrepancy for the drafting agent rather than
resolving it; do not present either figure as reconciled without further
work." The entry's `energy_rate_density.method` field retains the L*M
cross-check narrative (stellar mass, band-dependent luminosity figures) but
never mentions this specific numeric tension at all — the discrepancy
identified during research was silently dropped rather than carried forward
even as a caveat. The primary scored value (Chaisson's directly-tabulated
Phi_m = 0.5, evidence_status: measured) is unaffected and remains sound; this
is a completeness gap in the surrounding method narrative, not a wrong
primary value.
Suggested fix: add one sentence to `energy_rate_density.method` (or a new
`note:`) recording the ~5e36 W vs. ~1.5-3e37 W tension and explicitly
declining to reconcile it, mirroring how the entry already handles the two
non-reconciled "age" measurands in `characteristic_timescales`.

### F2 (note) — extreme_event_statistics lacks formal measurand_type field
No `measurand_type:` field is set on the `unknown`-valued
`extreme_event_statistics` column, unlike every populated instance of this
column elsewhere in the catalog. However this exactly matches
`world-wide-web.yaml`'s treatment of its own `unknown`-valued instance of the
same column (prose discussion, no formal field) — so this is consistent
catalog practice for the specific unknown/undetermined case, not a deviation
introduced by this entry. Worth a future validator-conformance pass across
both entries together (as already applied retroactively to several other
entries per their inline "validator-conformance pass, v0.2 sweep" comments),
but not a defect specific to galaxies.yaml.
Suggested fix (low priority, batch with world-wide-web.yaml): add
`measurand_type: unknown` or an equivalent explicit marker if/when a
validator-conformance pass is run across the catalog.

### F3 (note) — temporal_correlation has no measurand field
`temporal_correlation` (value: unknown) carries only a `note:` explaining
that no measurand was identified, without a `measurand:` field. This is a
very minor stylistic gap relative to columns like `extreme_event_statistics`
in the same entry, which do carry an explicit `measurand:` field even when
the value is unknown (naming candidate signals not pursued). Not a
filling_rules violation on its own terms, since filling_rules.measurand-required
applies to signal-relative quantities that are actually reported, and no
signal was identified here to name — but for internal consistency with the
entry's own practice elsewhere (e.g. extreme_event_statistics's unknown value
still names candidate measurands), this could be tightened.
Suggested fix: add `measurand: "no established measurand identified this
sweep (candidates not surveyed)"` for consistency with the entry's own
practice on extreme_event_statistics.

### F4 (note) — docs/roster.md is stale relative to this draft
`docs/roster.md` line 3 lists `galaxies` among "unresolved `part_of`/`contains`
ids accumulated by real entries," but this draft entry itself resolves the
one existing pointer (stars.yaml's `part_of: [galaxies]`) via its own
`contains: [stars]`. This is not a defect in `galaxies.yaml` — it is
`docs/roster.md` falling behind a not-yet-promoted draft, and per this task's
scope (no reference-file edits), is recorded here for whoever next updates
roster.md, likely at this entry's promotion to `verified`.

### F5 (note) — three of four exemplars never carry a scored exemplar-level value
`andromeda`, `spiral-morphological-class`, and `elliptical-morphological-class`
are declared as exemplars but never appear as `level: exemplar(<id>)` on any
attribute — all their data is carried as inline prose/detail rather than
separately-scored values. Confirmed this exactly matches
`planetary-climate.yaml`'s identical treatment of its own three comparative
exemplars (Venus, Mars, Titan) — so this is established, consistent catalog
practice for "comparative" (as opposed to "primary worked") exemplars, not a
coverage defect unique to this entry. Recorded for completeness only.

---

## Summary

30/30 panel-spec columns present (no missing-entirely columns; several
legally `unknown`/`not-applicable`). All required structural blocks
(exemplars, scoping_note, summary, relations, component_ontology,
interaction_ontology, emergent_phenomena, sources, provenance) are present
and well-formed. Relations reciprocity with stars.yaml is correctly resolved.
One real orphan value was found — a sweep-flagged, order-of-magnitude
Milky Way luminosity discrepancy that was dropped from the entry's
energy_rate_density narrative rather than carried forward as a caveat (F1,
fix-level; does not affect the entry's actual scored/cited value). Three
minor notes (F2-F4) reflect either pre-existing catalog-wide patterns
(measurand_type on unknown columns, comparative-exemplar treatment) or
adjacent-doc staleness (roster.md) rather than defects introduced by this
entry. The entry's own self-flagged uncertainty list (provenance.flags)
independently matches this check's fillable-vs-genuinely-unmeasured
assessment almost exactly, which is a good sign of drafting-agent honesty
about the entry's real evidentiary gaps.
