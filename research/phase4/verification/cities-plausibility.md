# Plausibility Check — cities

Checker role: adversarial re-derivation of every derivable number, unit
conversion, timescale-nesting check, hierarchy_depth-vs-component_ontology
double-counting check, and evidence_status/confidence-vs-panel-spec
consistency check. Target: `data/classes/cities.yaml`. Comparison surface:
`schema/panel-spec.yaml`, all 15 `schema/anchors/*.yaml` files,
`docs/schema.md`, `docs/roster.md`, `research/phase4/cities-sources.md`.
No edits made to any file. Date of check: 2026-07-02.

---

## 1. energy_rate_density (Phi_m) — full re-derivation

Inputs claimed: NYC total annual energy 1.47e15 BTU/yr; population
8.478e6; assumed 62 kg/person body mass.

Re-derivation:
- Power: 1.47e15 BTU/yr x 1055.06 J/BTU / 3.156e7 s/yr = **4.914e10 W**
  (entry states ~4.9e10 W — MATCH)
- In erg/s: 4.914e10 W x 1e7 = **4.914e17 erg/s** (entry states ~4.9e17
  erg/s — MATCH)
- Mass: 8.478e6 people x 62 kg/person x 1000 g/kg = **5.256e11 g** (entry
  states ~5.26e11 g — MATCH)
- Phi_m = 4.914e17 / 5.256e11 = **9.349e5 erg/s/g** (entry states ~9.3e5 —
  MATCH, to 2 sig figs)
- Ratio to Chaisson's "technologists" figure (2e6): 9.349e5 / 2e6 = 0.467
  — entry's "roughly half" characterization is accurate.
- Cross-check: Chaisson's own 12.5 kW/person back-calculates to an implied
  62.5 kg/person body mass (12500 W x 1e7 erg/s/W / 2e6 erg/s/g / 1000 g/kg
  = 62.5 kg) — entry states this exactly; re-derivation confirms it.

Verdict: **all four chained arithmetic steps re-derive exactly to the
values stated.** This is the entry's most load-bearing derived number and
it is clean. evidence_status: derived is correctly assigned (computed by
this project from published inputs, per panel-spec definition), and the
method field carries the required ours-flag and caveats (body-mass vs.
infrastructure-mass convention, NYC-electricity-only-subset caveat).

Secondary check: NYC total (1.47e15 BTU) is stated elsewhere (sources.md)
to decompose as 1040 TBtu (sectors) + 430 TBtu (electricity generation) =
1470 TBtu = 1.47e15 BTU — exact arithmetic match. The entry's separately
cited "electricity alone ~55.7 TWh/yr" figure is NOT the same quantity as
the 430 TBtu fuel-input-for-generation figure (that's understandable —
430 TBtu is primary fuel energy, 55.7 TWh is delivered electricity after
generation losses). Reverse-checking: 430 TBtu of fuel at a plausible
thermal-plant efficiency of ~40-45% yields ~50-57 TWh delivered — squarely
consistent with the cited 55.7 TWh figure. These two figures are NOT
contradictory, but the entry does not spell out this reconciliation, which
could read as two loosely-related numbers rather than two consistent views
of the same energy budget. Noted, not flagged (correct and non-misleading
as written, just under-explained).

## 2. spatial_extent — re-derivation and internal consistency

- sqrt(783.8 km^2) = 28.0 km = 2.8e4 m — entry's "order of 3e4 m" for
  NYC-proper characteristic linear scale is a correct order-of-magnitude
  match.
- The method field's own worked estimate for the CSA span is "roughly
  1.5-2e5 m across" (150-200 km, NY/NJ/CT/PA) — this is geographically
  sound (the NY-NJ-CT-PA CSA's longest reasonable diagonal is on this
  order).
- However, the **recorded point value is `8e5` m** (800 km) — this is
  4-5x LARGER than the entry's own specific CSA-span estimate (1.5-2e5 m)
  computed two sentences earlier in the same method field, and physically
  implausible as a "characteristic linear extent" for the NYC metro
  region: 800 km is roughly the distance from NYC to Cleveland, OH or to
  Norfolk, VA — far beyond any reasonable NYC CSA/metro boundary.
- The value is nominally still inside the stated "1e5-1e6 m" order-of-
  magnitude band the method text claims to be drawing from, but sits at
  the extreme high end of that band with no justification connecting it
  to the specific 1.5-2e5 m figure actually derived. This looks like
  either a transcription/rounding slip (e.g., confusing 8e4 or 2e5 with
  8e5) or an unexplained jump to the top of a wide OOM band.

**FLAG (fix): spatial_extent value (8e5 m) is inconsistent with, and
substantially larger than, the entry's own supporting CSA-span estimate
(1.5-2e5 m) in the same method field.** Suggested correction: either
recompute to ~2e5 m (matching the entry's own CSA-span figure) or add
explicit reasoning for why the recorded value should sit near the top of
the 1e5-1e6 m band rather than near the entry's own computed midpoint.

## 3. criticality score vs. cited comparator anchor

Entry (line ~463): "Scored 1, matching the river-networks floor-anchor
logic (criticality.yaml)."

Checked against `schema/anchors/criticality.yaml`: the river-networks
anchor is explicitly the **deliberate floor anchor, scored 0** ("This is
the deliberate floor anchor: a system can be highly self-organized and
fractal ... while scoring 0 here"). Cities.yaml's own justification
establishes an evidentiary position for cities that is identical in kind
to river-networks' position — no internal (within-a-single-city)
event-statistics power-law was sought or found, and no SOC mechanism has
been proposed for city-internal dynamics — yet cities is scored 1, one
point above the anchor it says it is "matching." The justification text
that follows ("a system can be highly self-organized and even fractal
while scoring low here") is verbatim-adjacent to river-networks' own score-0
justification, and does not independently articulate what earns cities
the extra point over the literal floor case.

Cross-checked against the criticality scale text itself: level 0 requires
"no scale-invariant event statistics reported or sought... no SOC or
critical-point mechanism proposed"; level 1 requires "heavy-tailed or
bursty event statistics... informally observed or claimed" (even if
untested) OR a rigorous fit that rejects the power-law hypothesis. Cities'
own justification records neither an informal internal-event claim nor a
rejected fit — it records an explicit absence of any internal-event
statistics search. By the scale's own text, this reads closer to level 0
than level 1.

**FLAG (fix): criticality score (1) is inconsistent with its own cited
comparator (river-networks, scored 0) and with the criticality scale's
level-0/level-1 boundary text, given the entry's own stated evidence
(zero internal-event-statistics claims, informal or otherwise).**
Suggested correction: either lower to 0 to match the stated comparator
and scale text, or add an explicit justification for the extra point
(e.g., citing the class-level Zipf claim as adjacent, weak evidence, while
being careful this doesn't quietly reintroduce the size-distribution
claim the entry's own text says must NOT count here per
filling_rules.soc-two-claims).

## 4. Tokyo Metropolis population figure — uncited number

`exemplars` (id: tokyo, note field) states: "23 Special Wards ~9.73M vs.
Tokyo Metropolis ~14M vs. Greater Tokyo Area 33.4-37M depending on UN WUP
edition and source."

Checked against `research/phase4/cities-sources.md` (the entry's own
declared sweep-report source): Section 1 and Section 3 both discuss Tokyo
Special Wards (627 km^2, ~9.73M) and Tokyo Metropolis area (~2,188 km^2,
population NOT given) and Greater Tokyo Area (33.4M and ~37M, both
sourced). **No "~14M" Tokyo Metropolis population figure appears anywhere
in the sweep report.** This number has no citation, no [unverified] flag,
and no entry in `sources:` — it is presented inline in a sentence
otherwise built entirely from sourced, traceable figures (9.73M and
33.4-37M both trace cleanly to the sweep), making the unflagged number
easy to mistake for equally sourced.

The number itself is not implausible on its face (Tokyo-to/Tokyo
Metropolis population is commonly cited in the ~13.9-14M range in general
reference sources), so this is not a fabricated-and-wrong value in the
sense of being false — but it fails this catalog's explicit sourcing
discipline (HARD RULE: never state a value without distinguishing
primary-read vs. snippet-verified, and mark model-knowledge claims
[unverified]). Every other quantitative claim in this entry that comes
from the drafting agent's general knowledge is explicitly bracketed
"[unverified — model knowledge]" (e.g., the 62 kg/person figure, the
Q~0.3-0.5 modularity range, the 11-13 GW peak-demand figure in the
openness_dissipation anchor). This one is not.

**FLAG (fix, borderline blocker): unsourced, unflagged "~14M" Tokyo
Metropolis population figure in the exemplars note — no citation exists
in cities-sources.md or the sources: block, and it is not marked
[unverified] as this catalog's own convention requires for every other
comparable model-knowledge number in this same entry.** Suggested
correction: either add an explicit [unverified — model knowledge, not
sourced this sweep] flag matching the entry's own established convention,
or remove the figure and mark it unknown per filling_rules.no-guessing,
or (best) source it against Tokyo Metropolitan Government population
statistics in a follow-up sweep.

## 5. Zipf/CSN pdf-exponent vs. rank-size-exponent transform

Entry claims: "rank exponent 1 <-> pdf exponent 2," so CSN's alpha=2.37
is "roughly consistent with, but not a direct re-confirmation of," the
classic Zipf value of 1 [flagged unverified in the entry itself].

Re-derivation: standard transform is q = 1/(alpha-1) for a Pareto tail,
where q is the rank-size exponent. For alpha=2: q=1 (exact match to the
entry's stated correspondence). For CSN's alpha=2.37(8): q = 1/1.37 =
0.730 — a real, non-trivial deviation from the classic Zipf q=1 (about
27% off), not merely a rounding nuance.

Verdict: the entry's stated pdf-exponent<->rank-exponent correspondence
(2<->1) is mathematically correct, and the entry appropriately hedges the
alpha=2.37 case as "roughly consistent with, but not a direct
re-confirmation of" the classic value, with an explicit [unverified] flag
on the underlying historical-claim comparison. This is honest, adequately
hedged, and does not overclaim — no flag warranted; recording as a
"note" only because a future entry might quietly drop the hedge and
call 2.37 vs. implied q=0.73 "roughly consistent" without noting the ~27%
gap is non-trivial.

## 6. hierarchy_depth vs. component_ontology — double-counting check

hierarchy_depth (value 4) convention: residents/households + buildings/
parcels treated jointly as the level-0 atomic base -> blocks (1) ->
neighborhoods (2) -> boroughs/districts (3) -> city-wide (4).
component_ontology lists residents/households and buildings/parcels as
two separate PART TYPES, both at the same (atomic) level — not as two
hierarchy LEVELS. No double-counting found: both part types sit at the
hierarchy's atom tier, consistent with panel-spec's atomicity-convention
and the hierarchy_depth column's own note that relations.contains
composition (power grids, financial markets, etc. as separate catalog
entries nested inside the city) is correctly excluded from this count.
**No issue.**

## 7. Timescale nesting check

- Daily commute/activity cycle: ~1e5 s (diurnal). Actual: 1 day = 86,400 s
  = 8.64e4 s, correctly rounds to ~1e5 s.
- Building/infrastructure replacement: "decades (~1e9 s)." One decade =
  3.156e8 s (order 1e8-1e9, borderline); "decades" plural (implying
  multiple, e.g. 3 decades = 9.47e8 s =~ 1e9 s) supports the stated OOM.
  Acceptable order-of-magnitude judgment, correctly flagged qualitative.
- Neighborhood land-use turnover: "years to decades" — correctly nested
  between the daily cycle and the infrastructure-replacement timescale,
  no numeric value given (appropriately qualitative).
- City lifetime: NYC founded 1624; as of 2026 this is 402 years = 1.269e10
  s. Entry states "~1.3e10 s and rising" — re-derivation confirms correct
  rounding (1.269e10 rounds to 1.3e10).
- **Nesting order is monotonic and correctly ordered**: 1e5 s (daily) <
  ~1e9 s (infrastructure) < years-to-decades (neighborhood, unquantified
  but consistent) < 1.3e10 s (city lifetime). No inversion found.

## 8. Numerosity / population figure cross-consistency

- 8.478e6 (NYC city proper, used precisely in energy_rate_density) vs.
  ~8.5e6 (used as a rounded order-of-magnitude figure in
  component_ontology and numerosity) — consistent, appropriately
  different precision for different purposes.
- 8.478e6 correctly rounds to order-of-magnitude 1e7 (log10(8.478e6) =
  6.928, closer to 7 than 6 by standard nearest-power-of-ten convention),
  consistent with numerosity's "~1e7 residents" framing.
- NYC metro/MSA (~2.0e7, 2024 estimate) and NYC CSA (~2.23e7) are cited
  consistently between component_ontology and the sources.md report — no
  contradiction found.
- Tokyo Greater Area range (3.3-3.7e7) is consistent between
  component_ontology and the exemplars note (33.4-37M), modulo the
  unsourced "~14M" Metropolis figure flagged in Section 4 above.

## 9. Fractal dimension figures — arithmetic spot-check

- 33 Chinese mining cities: boundary D range 1.126-1.299 stated mean
  ~1.227; simple range midpoint = 1.2125. Form D range 1.626-1.799 stated
  mean ~1.691; simple range midpoint = 1.7125. Stated means differ
  slightly from simple midpoints, which is expected and correct for a
  33-city empirical sample (means need not equal range midpoints) — not
  an error.
- German central-place cities: sources.md gives four individual values
  (Munich 1.7327, Nuremberg 1.6852, Stuttgart 1.8370, Frankfurt 1.4811);
  cities.yaml summarizes this as "D=1.48-1.84" — re-derivation confirms
  min=1.4811 rounds to 1.48 and max=1.8370 rounds to 1.84. Correct
  summary of the four-value set.

## 10. Bettencourt scaling exponents — cross-reference

beta=1.27 (patents) and beta=0.77 (gasoline stations) are used
identically in both `nonlinearity` and `emergent_phenomena`, and match
`research/phase4/cities-sources.md` section 4 exactly (which in turn
attributes them to a Phase-1 primary read of Bettencourt et al. 2007).
No drift between the two internal citations of the same numbers. No
issue.

## 11. UN megacity figures — plausibility sanity check

"One in eight people worldwide live in the 33 megacities" (2018): 1/8 of
~7.6 billion (2018 world population) = ~950M. 33 megacities each >10M,
several cited at 20-37M (Tokyo 37M, Delhi 29M, Shanghai 26M, etc.) can
plausibly sum to order 900M-1B. Order-of-magnitude consistent; this is a
UN-sourced claim reused verbatim, not this project's own arithmetic to
re-derive further, and it passes a basic sanity check.

## 12. evidence_status / confidence combinations vs. panel-spec

Reviewed every evidence_status assignment in the entry (measured x9,
derived x2, qualitative x14, unknown x2) against panel-spec's
requirement that measured requires a source and derived requires a
method:
- All `measured` entries carry a `sources:` list pointing to either
  cities-sources-phase4, csn2009, bettencourt2007, or un-wup2018-press —
  satisfied in every case, including numerosity, instance_population,
  component_ontology.residents/households, extreme_event_statistics, and
  fractal_dimension_spatial.
- Both `derived` entries (spatial_extent, energy_rate_density) carry a
  full `method:` field with the calculation spelled out — satisfied.
- extreme_event_statistics is correctly filed as `measured` (not
  `measured-untested`) because CSN 2009 explicitly assessed and rated the
  fit "moderate" rather than leaving it statistically unassessed — this
  matches panel-spec's own worked precedent (Gutenberg-Richter/California
  earthquake sizes) and the evidence_status vocabulary's precise
  definition of measured-untested ("whose statistical rigor... has not
  been assessed"). Correctly reasoned, not a violation.
- fractal_dimension_spatial is filed `measured` despite having zero
  NYC/Tokyo-specific data — defensible on a strict reading (the
  underlying Song et al. 2012 and German-cities figures are genuinely
  published measurements, even if not exemplar-specific), and the entry
  compensates with `confidence: low` and explicit
  `verifier_flags: [not-exemplar-specific, ...]`. Borderline but
  adequately hedged — noted, not flagged.
- `unknown` entries (buildings/parcels, firms/economic establishments)
  correctly carry no fabricated source and an explicit note naming the
  un-searched candidate source — satisfied.

**No evidence_status/confidence violations of the panel-spec's binding
rules found.**

## 13. Anchor-comparator cross-checks (all rubric/hybrid columns)

Checked every "matches/between/closest to X's anchor" claim against the
actual anchor file text:
- openness_dissipation (score 3): matches the entry's own directly-worked
  cities/NYC anchor in openness_dissipation.yaml verbatim (score 3,
  identical justification logic, same 11-13 GW [unverified] figure
  superseded by the newer 1.47e15 BTU/yr citable total). Consistent.
- modularity (score 2): matches the entry's own directly-worked
  cities/NYC anchor in modularity.yaml verbatim (score 2, same Q 0.3-0.5
  citation carried unchanged, same [unverified] flag preserved).
  Consistent.
- decentralization (score 2, comparator NYSE score 2): justification
  mirrors the NYSE anchor's level-2 text closely and appropriately.
  Consistent.
- nonlinearity (score 3, between the-internet 2 and financial-markets 4):
  correctly characterized as landing between the two cited anchors.
  Consistent.
- feedback (score 3, comparator NYSE score 3): loop list is present
  (agglomeration/urban scaling, congestion, land-value/zoning) satisfying
  the feedback anchor notes' requirement that score>=2 carry an itemized
  loop list with sign and mechanism. Consistent.
- chaos_sensitivity (score 1, reasoning by analogy to the no-market-chaos
  finding): correctly flagged with verifier_flags:
  [comparator-reasoning-not-a-direct-anchor-or-measurement], appropriately
  hedged as a judgment call. Consistent with the anchor's own
  distinctions (does not conflate nonlinearity with chaos).
- criticality (score 1): **see Section 3 above — FLAGGED.**
- tipping_transitions (score 1): correctly distinguished from
  memory_hysteresis per the anchors' own notes (tipping_transitions=1
  for absence of a formal inventory; memory_hysteresis=3 for broader
  path-dependence evidence) — no conflation. Consistent with
  earthquake-fault-systems' analogous near-floor score 1 in the same
  anchor file.
- memory_hysteresis (score 3, comparator NYSE score 3): reasoning
  parallels the NYSE anchor closely (structural path-dependence +
  qualitatively-confirmed-but-not-numerically-pinned hysteresis).
  Consistent.
- information_processing (score 3, "between" ERCOT anchor score 3 and
  NYSE anchor score 4): landing exactly AT the ERCOT anchor's score while
  describing itself as "between" is a mild overstatement of position
  (it's at the lower anchor's exact level, not strictly between two
  scores) — cosmetic, not a scoring error; the written reasoning
  correctly explains why it does not reach 4. Noted, not flagged.
- adaptive_capacity (score 3, between power-grids score 2 and
  financial-markets score 4): correctly positioned; reasoning
  (residents/firms hold internal models, municipal government revises
  post-crisis) matches the scale's level-3 text closely. Consistent.
- emergence (score 3, matches languages anchor score 3): Bettencourt's
  scaling laws as the order-parameter claim is a sound level-3 case,
  consistent with the anchor's own convection-cells/tropical-cyclones
  worked examples of the same score. Consistent.
- self_organization (score 3, above the-internet score 2, below the
  authorless-anchors score 4): correctly positioned per the scale text.
  Consistent.
- robustness_resilience (score 3, matches NYSE anchor score 3): the cited
  perturbation spectrum (2003 blackout, 9/11, Sandy, 1975 fiscal crisis)
  is exemplar-specific and appropriately named per the anchor's own
  normalization rule (perturbations must be named relative to the
  system's own characteristic spectrum). Consistent.
- cascade_susceptibility (score 2, matches NYSE anchor score 2): correctly
  distinguishes the city-level case (inherits a power-grid cascade
  study, not a city-internal fitted distribution) from a true level-3
  case. Consistent with the cascade_susceptibility scale's own level-2/
  level-3 boundary.

## Summary of arithmetic/derivation spot checks performed

| Check | Result |
|---|---|
| Phi_m power conversion (BTU/yr -> W -> erg/s) | exact match |
| Phi_m mass conversion (population x body mass) | exact match |
| Phi_m final division | exact match (9.35e5 vs stated ~9.3e5) |
| Chaisson 12.5kW/person -> 62.5kg back-calc | exact match |
| sqrt(783.8 km^2) -> characteristic linear scale | correct OOM |
| spatial_extent recorded value (8e5 m) vs. own CSA estimate (1.5-2e5 m) | **MISMATCH — flagged** |
| NYC total energy (1040+430 TBtu = 1470 TBtu) | exact match |
| Electricity 55.7 TWh vs. 430 TBtu fuel input (thermal-efficiency reconciliation) | consistent, not misleading |
| Zipf pdf-exponent (2.37) vs. rank-size transform (implies q=0.73, not 1) | correctly and adequately hedged in-entry |
| hierarchy_depth level count vs. component_ontology atoms | no double-counting |
| Timescale nesting (1e5 s < 1e9 s < decades < 1.3e10 s) | monotonic, correct |
| NYC founding-year timescale (1624 -> 402 yr -> 1.269e10 s) | correct rounding to 1.3e10 |
| Fractal-dimension range summaries (Chinese, German cities) | correct |
| Bettencourt exponents cross-entry consistency | consistent |
| criticality score (1) vs. cited river-networks floor anchor (0) | **MISMATCH — flagged** |
| Tokyo Metropolis "~14M" population figure | **UNSOURCED, UNFLAGGED — flagged** |
| evidence_status/confidence vs. panel-spec rules | no violations found |
| All 15 rubric/hybrid anchor-comparator claims | 14 consistent, 1 flagged (criticality) |

## Overall assessment

This is a well-hedged, carefully sourced draft with unusually disciplined
self-flagging of its own uncertainty (verifier_flags, explicit
[unverified] tags, a dedicated provenance.flags block naming its own top
uncertainties). The single most load-bearing derived number in the entry
(energy_rate_density / Phi_m) re-derives exactly across all four
arithmetic steps. No fabricated citations, DOIs, or page numbers were
found; every "measured" and "derived" value traces to a named source or
method. Three issues survive adversarial re-derivation: an internally
inconsistent spatial_extent point value (recorded value contradicts the
method field's own supporting calculation and is physically implausible
at face value), a criticality score that is one point higher than the
comparator anchor it explicitly claims to match (with no independent
justification for the extra point), and one genuinely unsourced,
unflagged population figure (Tokyo Metropolis ~14M) sitting inside an
otherwise fully-traceable sentence — a real gap given this catalog's hard
rule that model-knowledge claims must be marked [unverified], which every
other comparable figure in this same entry correctly does.
