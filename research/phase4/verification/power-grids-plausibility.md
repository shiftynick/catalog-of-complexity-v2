# Plausibility Check — power-grids

Checker role: adversarial re-derivation of every derivable number, unit check,
timescale-nesting check, hierarchy_depth-vs-component_ontology double-counting
check, evidence_status/confidence panel-spec compliance check. Entry not
edited; findings only.

Inputs reviewed: `data/classes/power-grids.yaml`, `schema/panel-spec.yaml`,
`schema/anchors/*.yaml` (all 15), `docs/schema.md`, `docs/roster.md` (not
independently load-bearing for this check), `research/phase4/power-grids-sources.md`.

---

## 1. Arithmetic / unit re-derivation

- **Generation capacity mix sum** (component_ontology / numerosity):
  natural gas 69,890 + wind 38,695 + solar 20,809 + coal/lignite 14,321 +
  nuclear 5,448 + battery 4,695 + hydro 600 + other 113 = **154,571 MW**,
  exactly matching the stated total. PASS.
- **Wind+solar fraction** (variation_selection): (38,695+20,809)/154,571 =
  **0.3849** -> "~38%" as stated. PASS.
- **Spatial extent order of magnitude**: 1,300 km E-W span = 1.3e6 m;
  sqrt(700,000 km^2 service area) = 837 km = 8.37e5 m. Both round to OOM
  **1e6 m** as declared. PASS — the two independent inputs (linear span vs.
  sqrt(area)) are mutually consistent, which is a stronger check than either
  alone.
- **Mean degree, Western US grid** (degree_distribution / sources block):
  2 x 6,594 edges / 4,941 nodes = **2.669...** matches the entry's cited
  Newman z=2.67 exactly. PASS.
- **ERCOT nodes/edges ratio** (numerosity): 6,522/5,514 = 1.183, internally
  unremarkable, no claimed derived statistic to cross-check against it —
  no discrepancy, just noting no mean-degree scalar is claimed for ERCOT
  (correctly, per the sweep report's stated gap).
- **Uri-event figures** (robustness_resilience, characteristic_timescales):
  30 GW offline / 154,571 MW installed = 19.4% of total capacity;
  20,000 MW rolling blackout / 69 GW demand = 29% of storm-day demand.
  Both are plausible fractions for a declared-emergency event, no internal
  contradiction, and the peak-demand figure (85.4 GW, Aug 2023) is
  correctly kept distinct from the Uri winter demand figure (69 GW,
  Feb 2021) — these are different events/seasons and the entry does not
  conflate them. PASS.
- **energy_rate_density**: correctly left `unknown`; power numerator
  (8.5e10 W peak, 1.5e11 W installed) is internally consistent with the
  numbers used elsewhere (same source, same OOM), and the entry does not
  attempt a mass-denominator guess. The Chaisson "technologists" proxy
  (~2e6 erg/s/g) is recorded as context only, correctly not substituted.
  Cross-file note: `schema/anchors/openness_dissipation.yaml`'s notes block
  cites a *different* Chaisson figure, "human society at Phi_m~500,000
  erg/s/g" — a factor of 4 below the "technologists" proxy the power-grids
  entry cites (2e6 erg/s/g). These may be genuinely distinct Chaisson
  categories (not necessarily contradictory), both are labeled
  model-knowledge/context-only and neither is used as a substituted value
  in either file, so this is low-severity — noted, not blocking.

## 2. Timescale nesting (characteristic_timescales)

Protection relay (~1e-2 s) < AC cycle (~1.7e-2 s) < cascading blackout
propagation (minutes-hours) < infrastructure lifetime (decades). Strictly
increasing, correctly nested, no inversion. PASS.

## 3. hierarchy_depth vs. component_ontology (double-counting check)

component_ontology atomic parts: buses/substations, transmission lines,
generation units, system operator (out-of-scope(human)).

hierarchy_depth declares: buses/substations (atoms, level 0 implicit) ->
local balancing/weather zones (1) -> ERCOT-wide synchronous interconnection
(2) -> North American grid-of-grids (3).

No component from component_ontology is double-counted as also being a
hierarchy level (transmission lines and generation units are not
independently re-listed as levels; the system operator is not listed as a
level either) — the atoms-vs-levels distinction is respected. **However**,
level 3 ("the North American grid-of-grids") is a violation of the
panel-spec's own stated convention for this column:

> panel-spec.yaml, hierarchy_depth note: "Counts levels INSIDE the entry's
> boundary. Composition BETWEEN catalog entries (a hurricane is part of the
> climate system; a city contains a power grid) lives in the entry-level
> relations block (part_of / contains...), not in this column."

The entry's own scoping_note draws the system boundary at "a synchronous AC
transmission-and-generation network operated as a single balancing
authority" (i.e., ERCOT itself) — explicitly NOT including other North
American interconnections, which the entry itself says ERCOT is
deliberately NOT synchronously tied to (the "island" framing, reiterated in
modularity and robustness_resilience). The entry's own `relations.part_of`
is `[]` ("unresolved"), i.e., the composition into the North American
grid-of-grids is explicitly NOT yet formalized as an inter-entry
relationship — yet hierarchy_depth's method text uses exactly that
unresolved, out-of-boundary relationship to justify counting a 3rd level
inside this column. Re-derived correctly per the stated convention, the
INSIDE-boundary level count is: buses/substations (atoms) -> weather zones
(1) -> ERCOT-wide interconnection (2) = **hierarchy_depth 2**, not 3. This
is a fix-grade convention violation, not a fabrication — the underlying
facts (DC ties exist, ERCOT is not synchronously integrated) are accurately
described, but the column's own scale is being used to smuggle in
between-entry composition that the schema says belongs in `relations`.

## 4. Cross-anchor consistency spot-checks

- **decentralization** (score 1): matches `decentralization.yaml`'s
  power-grids anchor almost verbatim. PASS.
- **information_processing** (score 3): matches
  `information_processing.yaml`'s power-grids anchor almost verbatim. PASS.
- **self_organization** (score 1): matches `self_organization.yaml`'s
  power-grids anchor almost verbatim. PASS.
- **adaptive_capacity** (score 2): matches `adaptive_capacity.yaml`'s
  power-grids anchor almost verbatim. PASS.
- **robustness_resilience** (score 2): matches
  `robustness_resilience.yaml`'s power-grids anchor almost verbatim, and the
  anchor file itself flags its Uri-event source as
  "[unverified — model knowledge]" while the entry upgrades this to a cited
  `ferc-uri-report` source with evidence_status: qualitative (not measured)
  — an appropriate, non-overclaiming upgrade. PASS.
- **modularity** (score 3): entry's justification is **near-verbatim**
  reproduction of `modularity.yaml`'s power-grids anchor text, with one
  substantive and correct edit — the anchor file says ERCOT is
  "one of three MAJOR North American grids," which directly contradicts
  this same entry's own (well-sourced) instance_population correction that
  ERCOT is one of the three MINOR interconnections by capacity (2 major:
  Eastern/Western; 3 minor: Texas/Quebec/Alaska). The power-grids.yaml entry
  correctly writes "one of the three MINOR North American interconnections"
  — i.e., **the entry silently fixes a factual error that still lives in the
  reference anchor file** `schema/anchors/modularity.yaml` (line ~172:
  "one of three major North American grids"). This is not a fabrication in
  the entry — the entry is right — but it is a live contradiction between a
  binding reference document and this entry that a future consistency
  pass (or another agent trusting the anchor file at face value) could
  reintroduce. Flagged for anchor-file correction, not entry correction.
- **Q-value citations** (modularity, both entry and anchor): the "Q in the
  0.6-0.9 range" figure is explicitly labeled `[unverified -- model
  knowledge, no ERCOT-specific Q value located this sweep]` in the entry,
  correctly not asserted as measured. PASS on epistemic labeling.

## 5. extreme_event_statistics / criticality / cascade_susceptibility — exponent range check

The entry states, in three places (extreme_event_statistics.value,
extreme_event_statistics.method, criticality.justification,
cascade_susceptibility.justification), that Dobson et al. (2007) report a
blackout-size power-law-like tail with **"exponent approximately -1 to -2"**
(i.e., magnitude 1-2). This matches `research/phase4/power-grids-sources.md`
verbatim (the sweep report the entry was drafted from).

However, the catalog's own pre-existing reference anchor
`schema/anchors/cascade_susceptibility.yaml` — which is explicitly anchored
ON power-grids/ERCOT for this exact column, citing the same Dobson et al.
2007 source — states the exponent as **"roughly 1.3-2.0"**, not 1-2. A
magnitude of 1.0 (the low end the entry uses) falls outside the anchor's
stated 1.3-2.0 range. Neither document reports the underlying paper as
primary-read (both are snippet-only/reused-Phase-1 findings), so this
cannot be resolved by re-reading a locally cached primary source in this
pass — it is a genuine unresolved numeric conflict between two documents
that both claim to summarize the same figure from the same paper, and only
one (at most) can be correct. This is exactly the kind of drift the
plausibility check exists to catch: given the explicit rejection elsewhere
in the same entry of an unverifiable "-1.36+/-0.2" figure as a probable
hallucination, the lower bound of the entry's own "-1 to -2" range deserves
the same scrutiny — it does not match the more specific existing anchor.
**Flagged as a fix**: re-open Dobson et al. (2007) (or find another
extraction route) before promoting either the entry or the anchor to
verified status, and reconcile the two numbers.

## 6. evidence_status / confidence panel-spec compliance

- `energy_rate_density`: evidence_status `unknown`, no confidence field —
  consistent (unknown values need not carry a confidence per the schema
  pattern in docs/schema.md's own worked example). PASS.
- `extreme_event_statistics`, `criticality`, `cascade_susceptibility`: all
  correctly carry `measured-disputed`, consistent with
  filling_rules.power-law-rigor (no CSN-2009-grade rigor confirmed this
  session) and matching the pre-existing cascade_susceptibility.yaml
  anchor's own evidence_status choice. PASS on category (independent of the
  exponent-range numeric issue in #5).
- `temporal_correlation`: `unknown` (not `measured`) despite a specific
  number (H~0.75) existing in the snippet — correctly downgraded per
  filling_rules.measurand-required since grid identity/measurand isn't
  confirmed. This is the single cleanest example of measurand-required
  being applied correctly in the entry. PASS.
- `degree_distribution`: correctly `measured` (not `measured-untested`)
  because the finding is explicitly non-power-law, so
  filling_rules.power-law-rigor's default-to-measured-untested clause for
  power-law TAIL claims does not apply — the rule is about power-law claims
  specifically, and this is an anti-power-law (exponential) finding. PASS,
  correctly reasoned in the entry's own note.
- `hierarchy_depth`, `modularity`, `nonlinearity`, `feedback`, `emergence`,
  `self_organization`, `memory_hysteresis`, `chaos_sensitivity`,
  `information_processing`, `adaptive_capacity`: all `qualitative`,
  appropriate given no numeric measurement is claimed for any of them.
  PASS.
- `tipping_transitions`: `measured` — appropriate, since the underlying
  claim is "a specific, named, formally modeled mechanism... published in
  primary literature" (Dobson 1992), which is a real citation-backed fact
  about the literature, not a numeric measurement of the grid itself; this
  matches the anchor scale's own level-2 language, which does not require
  evidence_status: qualitative for a level-2 score. Acceptable.
- `robustness_resilience`, `openness_dissipation`: `qualitative` and
  `measured` respectively. openness_dissipation's `measured` status is
  justified because the score rests on genuinely measured power figures
  (8.5e10 W / 1.5e11 W), not a rubric judgment made up from nothing — the
  rubric SCORE is qualitative-flavored but the underlying evidence cited is
  measured, consistent with the hybrid-column pattern used elsewhere
  (openness_dissipation is a hybrid column per panel-spec). Acceptable.

## 7. Other checks

- **numerosity vs. component_ontology consistency**: node/edge counts
  (5,514/6,522) and generation-unit counts (1,100-1,460+) are correctly
  kept as two distinct, non-averaged figures in both columns, with an
  explicit note in both flagging why they aren't reconciled. No arithmetic
  or unit error found.
- **degree_distribution**: correctly labeled NOT power-law, and the CSN
  power-law-rigor rule is correctly judged not to apply (see #6). Newman
  2003 and Deka & Vishwanath 2015 numbers (n=4,941/m=6,594 vs.
  n=5,514/m=6,522) are kept as two distinct systems (Western US vs. ERCOT),
  not conflated. PASS.
- **fractal_dimension_spatial**: correctly `unknown`; no derivation
  attempted from the Barakou & Koukoula lead. PASS.
- No sign-convention or unit-conversion errors found elsewhere (W vs MW vs
  erg/s/g conversions all check out where present).

---

## Summary of findings taken to structured output

1. **[fix]** hierarchy_depth = 3 double-counts a between-entry composition
   level (the North American grid-of-grids) that the panel-spec explicitly
   assigns to `relations.part_of`/`contains`, not to this column; the
   entry's own `relations.part_of` is empty/unresolved, so the level-3
   justification rests on an out-of-boundary relationship the entry hasn't
   even formalized yet. Re-derived in-boundary count is 2.
2. **[fix]** The blackout-tail exponent magnitude range "-1 to -2" (used in
   extreme_event_statistics, criticality, and cascade_susceptibility's
   justification) does not match the existing, more specific reference
   anchor `schema/anchors/cascade_susceptibility.yaml`'s power-grids
   worked example, which states "roughly 1.3-2.0" for the identical
   Dobson et al. (2007) finding. Both are snippet-only/unread-primary
   figures; the conflict is unresolved and should not be carried into a
   verified entry without reopening the source.
3. **[note]** `schema/anchors/modularity.yaml`'s power-grids anchor text
   still says ERCOT is "one of three major North American grids," which
   the entry itself (correctly, with sourcing) contradicts by classifying
   ERCOT as one of the three MINOR interconnections. The entry is right;
   the anchor file is stale and should be corrected so it doesn't
   re-propagate the error into future entries or re-verification passes.
4. **[note]** Chaisson Phi_m proxy figures cited as context differ across
   files by a factor of ~4 (power-grids.yaml/sources: "technologists"
   ~2e6 erg/s/g; openness_dissipation.yaml notes: "human society"
   ~5e5 erg/s/g) — plausibly distinct Chaisson categories rather than a
   contradiction, both explicitly unverified/context-only and neither
   substituted as a value, so non-blocking.

All other quantitative claims in the entry (capacity-mix sum, wind+solar
percentage, spatial-extent order of magnitude via two independent routes,
Newman mean-degree recomputation, Uri-event fractions, timescale nesting)
re-derive correctly with no arithmetic, unit, or order-of-magnitude errors
found.
