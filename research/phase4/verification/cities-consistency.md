# Consistency Check — cities

Checker: CONSISTENCY CHECKER (commensurability enforcer)
Target: `N:\coc\data\classes\cities.yaml`
Reference documents read in full: `schema/panel-spec.yaml`, all 15 files in
`schema/anchors/`, `docs/schema.md`, `docs/roster.md`,
`research/phase4/cities-sources.md`, plus the two verified entries
(`data/classes/tropical-cyclones.yaml`, `data/classes/financial-markets.yaml`)
for cross-entry coherence.

Scope of this check: rubric/hybrid score-vs-anchor fidelity, the six filling
rules, `level` tagging discipline, and cross-entry coherence. This check does
NOT re-verify citations or re-derive arithmetic from scratch (citation-check
and plausibility-check territory) except where a load-bearing derived number
needed a sanity pass to assess whether it could poison a downstream
consistency judgment.

---

## 1. Directly-worked anchors (must match exactly)

Two columns carry a directly-worked "cities"/"New York City" anchor.

- **modularity** (anchor score 2, cities score 2): justification text is
  near-verbatim reproduction of the anchor's own reasoning (boroughs/
  neighborhoods, bridges/tunnels as module-boundary proxies, Q~0.3-0.5
  [unverified] caveat carried forward unchanged). MATCH — no drift.
- **openness_dissipation** (anchor score 3, cities score 3): cities.yaml
  *refines* the anchor's own [unverified] 11-13 GW peak-demand estimate with
  a citable ~1.47e15 BTU/yr annual-total figure and keeps the anchor's score
  and "large in absolute terms but small relative to planetary/stellar
  fluxes" reasoning intact. MATCH — refinement, not contradiction.

Arithmetic spot-check on the energy_rate_density derivation feeding into the
openness_dissipation narrative: 1.47e15 BTU/yr -> 4.914e10 W -> 4.914e17
erg/s; /(8.478e6 x 62,000 g) = 5.256e11 g -> Phi_m = 9.35e5 erg/s/g.
Independently reproduced; matches the entry's stated ~9.3e5. No arithmetic
contamination of the consistency picture.

## 2. Comparator-reasoned columns (no direct anchor; scored by explicit
   comparator against the closest worked anchor)

Reviewed against the full anchor scale text and named comparators for every
rubric/hybrid column. Summary verdicts:

| Column | Score | Level | Verdict |
|---|---|---|---|
| decentralization | 2 | exemplar(nyc) | Reasoning sound; **level tag questionable** (see Finding 2) |
| nonlinearity | 3 | class-general | Sound; matches scale's level-3 text closely |
| feedback | 3 | class-general | Sound; loop list present per feedback.yaml's mandatory-loop-list rule |
| chaos_sensitivity | 1 | class-general | **Score-vs-own-justification mismatch** (see Finding 1b) |
| criticality | 1 | class-general | **Score contradicts its own cited comparator** (see Finding 1a, blocker) |
| tipping_transitions | 1 | class-general | Sound; matches anchor's level-1 text and internet/fault near-floor comparators |
| memory_hysteresis | 3 | class-general | Sound; matches financial-markets' own anchor level and reasoning shape |
| information_processing | 3 | class-general | Sound; reasoning places it correctly at power-grids' level, "between X and Y" phrasing is imprecise (note only) |
| adaptive_capacity | 3 | class-general | Sound; matches scale's level-3 text almost verbatim |
| emergence | 3 | class-general | Sound; matches languages' anchor level and reasoning |
| self_organization | 3 | class-general | Sound; matches scale's level-3 text precisely |
| robustness_resilience | 3 | exemplar(nyc) | Sound; matches financial-markets' own anchor level and reasoning near-exactly |
| cascade_susceptibility | 2 | exemplar(nyc) | Sound; matches financial-markets' own anchor level and reasoning near-exactly |

## 3. Findings

### Finding 1a — criticality: score contradicts its own cited comparator (BLOCKER)

`criticality` is scored **1** with `mechanism_status: none`. Its own
justification states: (a) no internal-event power-law study for NYC/Tokyo
was even searched for or recovered this sweep, and (b) "no SOC mechanism has
been proposed for city-internal dynamics in the material recovered," then
says this is "Scored 1, matching the river-networks floor-anchor logic
(criticality.yaml)."

But `river-networks` is explicitly the criticality anchor's **score-0**
floor case ("This is the deliberate floor anchor: a system can be highly
self-organized and fractal... while scoring 0 here"), not a score-1 case.
Per the anchor scale itself: level 0 = "No scale-invariant event statistics
reported or sought... no SOC or critical-point mechanism has been proposed."
Level 1 requires *some* positive claim ("heavy-tailed or bursty event
statistics are informally observed or claimed... OR a rigorous fit exists
but rejects the power-law hypothesis"). Cities' own text describes neither
condition — nothing was observed, claimed, fit, or rejected for city-internal
event statistics; the column is genuinely empty, exactly matching
river-networks' 0, not river-networks' comparator at a higher number. This
is an anchor-drift error: the entry names the correct comparator anchor and
then scores one notch above it without justification for the discrepancy.

Severity: blocker. This is exactly the kind of drift the consistency check
exists to catch — a column that would not survive a side-by-side reading
against the anchor it cites.

Suggested fix: either (a) rescore to 0 to match the cited river-networks
floor anchor, or (b) if the drafter intends score 1, strike the "matching
the river-networks floor-anchor logic" line and instead justify the 1
independently against the scale's actual level-1 text (which would require
identifying some informally-observed/claimed heavy-tailed city-internal
event statistic — none is currently cited in the entry).

### Finding 1b — chaos_sensitivity: score sits above what the entry's own evidence supports (FIX)

`chaos_sensitivity` is scored **1**. The justification states plainly: "No
published Lyapunov exponent, predictability-horizon figure, or
low-dimensional deterministic-chaos claim specific to city dynamics... was
recovered this sweep," and "was NOT independently verified for cities
specifically this sweep... this is a judgment call flagged for follow-up,
not a measured finding." The entry itself attaches
`verifier_flags: [comparator-reasoning-not-a-direct-anchor-or-measurement]`,
already self-flagging the uncertainty.

Per the chaos_sensitivity anchor scale, level 0 is "No evidence of sensitive
dependence... predictability is limited only by measurement/data
availability, not by intrinsic trajectory divergence" — this is a closer
match to cities' actual evidentiary state (nothing sought, nothing found)
than level 1's text, which requires "some sub-process may amplify small
perturbations" — a positive claim the entry does not actually support with
any cited mechanism. The entry's own hedging language ("judgment call... not
a measured finding") is in tension with assigning a specific nonzero score
rather than treating this as an honest unknown/0.

Severity: fix (not blocker) — the entry is transparent about the
uncertainty via its own verifier_flags, and the underlying "nonlinear yes /
chaos unproven" analogy to financial-markets is plausible reasoning, not a
fabrication. But the score itself does not currently survive a strict
side-by-side reading against the anchor scale's level-0-vs-level-1
boundary, paralleling Finding 1a's pattern (self-analogized to a floor
anchor, then scored one notch above it).

Suggested fix: rescore to 0 (no evidence of sensitive dependence sought or
found; the no-market-chaos analogy is speculative, not evidentiary), or add
an explicit sentence justifying why "some sub-process may amplify
perturbations" is nonetheless a defensible characterization of cities
specifically (congestion bifurcations are gestured at but not developed
into a level-1-qualifying claim).

### Finding 2 — decentralization: level tag likely should be class-general, not exemplar (FIX)

`decentralization` is tagged `level: exemplar(new-york-city)`, but its
justification is explicitly comparator-general reasoning ("this class is
not directly anchored... financial-markets' NYSE anchor... the reasoning
transfers cleanly... Mixed, as with an exchange operator") that does not
depend on any NYC-specific fact — it is a generic claim about
municipally-governed cities versus distributed resident/firm location
decisions. financial-markets set a direct precedent for exactly this
situation: its own `decentralization` column was retagged from an
exemplar-flavored draft to `level: class-general` at consistency-check time,
with the explicit note "retagged per consistency check: reasoning holds for
any operator-run exchange." The same retagging logic applies here: nothing
in the cities decentralization justification is NYC-specific (it never
cites a NYC-specific fact — no zoning statute, no named agency, no dataset).

Severity: fix. Not a value error, but a level-tagging inconsistency directly
against a cross-entry precedent the consistency checker is instructed to
enforce.

Suggested fix: retag to `level: class-general`, matching the financial-markets
precedent, unless a future pass adds genuinely NYC-specific evidence (a cited
NYC charter provision, a specific emergency-response case) to ground the
exemplar tag.

### Finding 3 — information_processing: "between X and Y" framing is imprecise (NOTE)

The justification says the score is "between power-grids' ERCOT anchor
(score 3) and financial-markets' top-of-scale anchor (score 4)" but the
assigned score (3) actually equals the lower comparator rather than sitting
strictly between the two. The substance of the argument is sound (real
multi-channel information layers, held below NYSE's single load-bearing
order book), so this is phrasing only, not a scoring error.

Severity: note. Suggested fix: change "landing between them" language to
"matching power-grids' level, short of financial-markets' top-of-scale" for
precision — purely cosmetic.

### Finding 4 — numerosity: evidence_status: measured applied to a value field with a large unknown component (NOTE)

`numerosity.value` is a compound string ("~1e7 residents... buildings/
parcels and households order of magnitude not independently verified this
sweep") tagged `evidence_status: measured`. The resident-count portion is
genuinely measured (Census); the building/parcel/household portion is
explicitly unknown per the note. This is not a violation of the
no-guessing rule (nothing is guessed; the note is honest and explicit), but
a single `evidence_status` tag covering a value field that mixes a measured
sub-claim with an explicitly-unknown sub-claim is a minor tagging-granularity
wrinkle worth recording for the next schema pass (component_ontology already
handles this correctly at the per-part-type level — buildings/parcels are
separately tagged `evidence_status: unknown` there — so the underlying data
model is fine; only the parent numerosity roll-up value field blends the two
without a matching split evidence_status).

Severity: note.

## 4. Filling-rule audit

- **no-guessing**: PASS. Every genuinely unrecovered value (buildings/parcel
  counts, firm counts, degree_distribution, temporal_correlation numeric
  loop-width, Tokyo Phi_m, precise >1M-city count) is recorded as `unknown`
  with an explicit reason, never interpolated. This is one of the entry's
  strongest features and matches the discipline of both verified entries.
- **power-law-rigor**: PASS. `extreme_event_statistics` (Zipf alpha-hat=2.37(8))
  is correctly filed as `measured` with the mandatory "moderate, contested
  vs. log-normal" caveat carried in the value field itself, explicitly
  declining to round up to "confirmed power law" — this is exactly the
  discipline the rule requires and mirrors tropical-cyclones' PDI-exponent
  treatment (measured-untested, near-CSN) and financial-markets' cubic-law
  treatment (measured-untested). No violation.
- **soc-two-claims**: PASS on the separation-of-claims requirement (the
  entry correctly distinguishes the class-level Zipf size-distribution claim
  from the internal-event-statistics claim that criticality should properly
  probe, and explicitly says so in the criticality justification) but see
  Finding 1a — the separation is correctly *drawn*, the resulting *score* is
  where the drift occurs.
- **no-market-chaos**: Not directly invoked (cities is not a financial
  market), but the entry correctly imports the *pattern* of the rule via
  explicit analogy in chaos_sensitivity, appropriately hedged as
  "plausible... but NOT independently verified for cities specifically."
  See Finding 1b for the resulting score concern.
- **measurand-required**: PASS. `fractal_dimension_spatial` and
  `extreme_event_statistics` both name their measurand explicitly
  (box-counting D of urban boundary/form; US city population sizes,
  discrete power-law fit). `temporal_correlation` correctly declines to
  report a measurand-named quantitative figure and is left `unknown` rather
  than stretched — matches the rule's intent.
- **atomicity-convention**: PASS. The scoping_note explicitly declares the
  dual-ontology atomicity choice (residents/households + buildings/parcels
  as atoms, explicitly not cells/neurons or bricks) and draws an explicit,
  checkable parallel to the english entry's speakers-plus-lexical-units
  split, as the rule requires ("consistency checker audits comparable
  systems for comparable choices").
- **interaction-typing**: PASS. The six interaction_ontology types (spatial
  proximity, commuting/mobility, economic exchange, infrastructure service
  delivery, governance/regulation, social interaction) are individuated by
  mechanism/carrier, not by outcome or sign — no double-counting of a single
  mechanism under two names detected.

## 5. Cross-entry coherence (vs. tropical-cyclones and financial-markets)

- Hierarchy_depth convention (count levels inside the boundary; composition
  between catalog entries lives in `relations.contains`, not here) is
  applied identically to both verified entries' own stated convention.
  Consistent.
- `sources` block citation-annotation discipline (primary-read vs.
  snippet-verified, explicitly stated per-citation) matches the rigor level
  of both verified entries; Phase-1-reused citations (bettencourt2007,
  csn2009, chaisson2011) correctly carry forward their original provenance
  tags unchanged, exactly as tropical-cyclones does for its own Phase-1
  citations.
- `provenance.verification` block correctly shows all four checks as
  `pending`, consistent with `status: draft` (contrast both verified
  entries, which show `completed`/dated entries) — no premature status
  inflation.
- Comparator-reasoning methodology (explicitly naming which anchor(s) a
  non-directly-anchored score sits at/between, per the drafter's own
  provenance note) is a reasonable and transparent extension of the
  anchor-file methodology, consistent with how both verified entries
  score their own non-anchored columns (e.g., financial-markets'
  decentralization retagging, tropical-cyclones' comparator language is
  less needed since more of its columns are directly anchored).
- No emergent_phenomena / extreme_event_statistics / criticality conflation:
  the entry explicitly and correctly keeps the Zipf city-size claim separate
  from the (unscored/unknown) internal-event criticality claim, mirroring
  tropical-cyclones' explicit PDI-vs-storm-level-criticality separation.

## 6. Overall verdict

Two directly-worked anchors (modularity, openness_dissipation) match their
anchor files exactly, with no drift in either direction. All six filling
rules are correctly applied with no violations. The entry's honesty
discipline (explicit `unknown` values, verifier_flags, standing-limitation
provenance flags) is strong and matches the bar set by the two verified
entries. The main defect is a single scoring inconsistency in `criticality`
that directly contradicts its own cited comparator anchor (river-networks,
scored 0) while assigning 1 — this is the class of error the consistency
check exists to catch and should block promotion to `verified` status until
resolved. A parallel, milder version of the same pattern appears in
`chaos_sensitivity`. A level-tagging inconsistency in `decentralization`
(exemplar tag on class-general-shaped reasoning) directly parallels a
precedent already resolved the opposite way in financial-markets and should
be fixed for consistency, though it does not misstate a score. Two
additional note-level items (an imprecise "between X and Y" comparator
phrasing in `information_processing`, and a minor evidence_status
granularity wrinkle in `numerosity`) are recorded but do not block anything.
