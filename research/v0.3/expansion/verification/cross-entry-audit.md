# Cross-Entry Commensurability Audit — v0.3 expansion batch
Auditor pass, 2026-07-16. Scope: all 20 catalog entries (15 pre-existing + 5 new drafts:
convection-cells, chemical-oscillators, turbulent-flows, firms, road-traffic-systems).

## 1. Full rubric/hybrid score matrix

Columns: modularity(Mod) decentralization(Dec) nonlinearity(NL) feedback(FB)
openness_dissipation(OD) chaos_sensitivity(CS) criticality(Crit) tipping_transitions(TT)
memory_hysteresis(MH) information_processing(IP) adaptive_capacity(AC) emergence(Em)
self_organization(SO) robustness_resilience(RR) cascade_susceptibility(CSc)

| Entry (category) | Mod | Dec | NL | FB | OD | CS | Crit | TT | MH | IP | AC | Em | SO | RR | CSc |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| stars (astro) | 1 | 4 | 3 | 2 | 4 | 2 | 2 | 0 | 1 | 0 | 0 | 2 | 4 | 4 | 0 |
| galaxies (astro) | 1 | 4 | 3 | 3 | 2 | 3 | 0 | 1 | 2 | 0 | 0 | 3 | 4 | 3 | 0 |
| earthquake-fault-systems (geo) | 2 | 4 | 3 | 1 | 1 | 2 | 2 | 1 | 2 | 1 | 0 | 2 | 3 | 3 | 2 |
| river-networks (geo) | 2 | 4 | 2 | 3 | 3 | 1 | 1 | 2 | 2 | 1 | 1 | 2 | 4 | 3 | 1 |
| planetary-climate (geo) | 1 | 4 | 4 | 4 | 3 | 3 | 1 | 4 | 4 | 0 | 0 | 3 | 4 | 3 | 2 |
| weather-systems (geo) | 1 | 4 | 4 | 3 | 3 | 4 | 0 | 2 | 1 | 0 | 0 | 3 | 4 | 1 | 0 |
| tropical-cyclones (geo) | 1 | 4 | 4 | 4 | 4 | 4 | 0 | 2 | 1 | 0 | 0 | 3 | 4 | 1 | 0 |
| ocean-circulation (geo) | 1 | 4 | 4 | 4 | 3 | 2 | 0 | 3 | 4 | 0 | 0 | 3 | 4 | 2 | 0 |
| convection-cells (phys-chem, NEW) | 1 | 4 | 4 | 2 | 4 | 3 | 0 | 2 | 1 | 1 | 0 | 3 | 4 | 1 | 0 |
| chemical-oscillators (phys-chem, NEW) | 0 | 4 | 3 | 4 | 3 | 3 | 0 | 2 | 1 | 0 | 0 | 3 | 4 | 0 | 0 |
| turbulent-flows (phys-chem, NEW) | 1 | 4 | 4 | 2 | 3 | 3 | 3 | 2 | 2 | 0 | 0 | 3 | 4 | 2 | 0 |
| power-grids (infra) | 3 | 1 | 3 | 3 | 2 | 1 | 2 | 2 | 2 | 3 | 2 | 2 | 1 | 2 | 3 |
| the-internet (infra) | 2 | 3 | 2 | 2 | 2 | 1 | 1 | 0 | 2 | 3 | 2 | 2 | 2 | 3 | 1 |
| road-traffic-systems (infra, NEW) | 2 | 3 | 3 | 3 | 3 | 1 | 1 | 2 | 3 | 1 | 3 | 3 | 3 | 2 | 2 |
| financial-markets (socio-econ) | 2 | 2 | 4 | 3 | 2 | 1 | 1 | 2 | 3 | 4 | 4 | 4 | 2 | 3 | 2 |
| global-economy (socio-econ) | 2 | 3 | 3 | 3 | 3 | 1 | 0 | 1 | 3 | 3 | 3 | 3 | 3 | 3 | 2 |
| firms (socio-econ, NEW) | 2 | 1 | 3 | 3 | 2 | 1 | 1 | 1 | 2 | 3 | 4 | 3 | 3 | 3 | 2 |
| cities (socio-econ) | 2 | 2 | 3 | 3 | 3 | 0 | 0 | 1 | 3 | 3 | 3 | 3 | 3 | 3 | 2 |
| languages (cult-info) | 1 | 4 | 1 | 2 | 1 | 0 | 0 | 2 | 4 | 4 | 3 | 3 | 4 | 4 | 1 |
| world-wide-web (cult-info) | 2 | 3 | 1 | 2 | 1 | 0 | 0 | 0 | 2 | 3 | 2 | 2 | 3 | 3 | 1 |

## 2. Ordering-violation hunt

**FIX — turbulent-flows.criticality = 3 sits inconsistently above earthquake-fault-systems = 2.**
The anchor scale requires level 3 = "power-law/scale-invariant event statistics well established
... AND a critical-point mechanism well supported." turbulent-flows' own
`extreme_event_statistics` column reports the *opposite* of established event statistics for its
one measured event-type (puff lifetimes: "Poisson-like, NOT power-law — evidence AGAINST a
heavy-tail claim"), and the entry's own flags admit the DP critical exponents were never
recovered (nature.com blocked). What's actually established is a *mechanism* (directed-percolation
universality) with no positive event-statistics claim — structurally the same shape as
river-networks' OCN/SOC case, which the anchor's own `mechanism-alone-caps-at-1` rule holds to a
1, explicitly to "preserve ordering against systems like earthquake-fault-systems (score 2)."
Turbulent-flows currently outranks a system with solid *measured* G-R statistics while itself
having a *negative* event-statistics result. Suggested fix: rescore to 1–2 (the DP mechanism is
markedly more rigorously established in the literature than OCN-SOC, so 2 rather than 1 is
defensible if the anchor is read as tolerating an unusually strong mechanism claim in lieu of
event statistics — but 3 overstates it under the anchor as currently worded) or add a boundary
clarification distinguishing "continuous-transition critical exponents" as an alternate route to
level 3 that doesn't require event-size statistics at all, if that is the intended reading.

**NOTE — decentralization: firms=1 sits below road-traffic-systems=3 and the-internet=3 and
financial-markets=2, which is correct once the anchor's real-time-steering-vs-bookkeeping
discriminator is applied (firms have a CEO/board that steers day-to-day operations in real time,
structurally like power-grids=1's operator, not like the-internet's bookkeeping-only registries).
This is NOT a violation — it is the anchor's own discriminator working as designed — but it does
mean the coarse "engineered systems land mid-range" heuristic the decentralization anchor's notes
explicitly warn against would have mis-scored firms; worth flagging as a confirmed correct
application, not a defect.

**NOTE — modularity: chemical-oscillators=0 is the column's first true floor score** (lower than
any existing anchor, which bottoms at stars/tropical-cyclones=1). Justification is sound (a
well-stirred reaction volume genuinely has zero subdivision, weaker even than transient
convective cells) — flagged as a new floor-anchor candidate, not an error.

**NOTE — robustness_resilience: chemical-oscillators=0 is likewise the column's first floor use**
(previous low was tropical-cyclones/Katrina=1). Reasoning (batch BZ's oscillation is destroyed by
its own routine operating-time passage, not an avoidable external shock) is sound and does not
misapply the does_not_count clause — flagged as a candidate anchor, not an error.

No other rank-order inversions were found on a side-by-side reading of justifications against
each column's anchor scale; the new-batch entries were drafted with unusually explicit
"matches/differs-from-X-anchor-because-Y" language, which made this check faster than usual and
is worth commending as a drafting convention worth carrying forward.

## 3. Polar-relationship checks

- **adaptive_capacity ~0 for physical systems**: holds cleanly. All physical-chemical/geophysical/
  astrophysical entries (old and new) score 0, except river-networks=1 (structural accommodation,
  matching its own anchor exactly). The three new physical-chemical entries
  (convection-cells, chemical-oscillators, turbulent-flows) all correctly score 0, reproducing the
  Sun/tropical-cyclones profile — no drift.
- **decentralization mid-range for engineered systems**: confirmed as a *refined* pattern, not the
  coarse one. power-grids=1, financial-markets=2, the-internet=3/world-wide-web=3,
  road-traffic-systems=3, firms=1 — these split cleanly by the anchor's real-time-steering
  discriminator (power-grids and firms both have a real steering controller; the-internet,
  world-wide-web, road-traffic-systems have only narrow/bookkeeping coordination). This is the
  single cleanest cross-entry replication in the new batch: **firms and power-grids are more alike
  on this axis than either is to its own category-mates** (firms sits with infrastructure's
  power-grids, not with fellow socio-economic financial-markets/cities/global-economy) — flagged
  below as an interesting finding.
- **alphabet_closure gradient (closed -> constrained -> open) tracking
  physical -> engineered -> social**: holds at the coarse category level for 17/20 entries, but
  **two entries are genuine, disclosed category/mechanism splits, not errors**: cities
  (socio-economic) scores **open**, not the constrained/mid-gradient position its category
  siblings (financial-markets, firms, global-economy) all occupy, because its scoping note treats
  governance and informal social-mediated interaction as inside the boundary and genuinely
  open-ended (new mobility modes, new digital-service channels). world-wide-web
  (cultural-informational) scores **constrained**, not open like its category sibling languages,
  because its actual interaction alphabet is fixed by web/HTTP standards, not by free symbolic
  invention. Both entries' own justifications name the divergence explicitly and reason from
  mechanism, not category label — this is the intended discriminating power of alphabet_closure
  doing its job (the column tracks the interaction alphabet's own openness, not a coarse
  proxy-by-category), and is one of the catalog's more interesting emergent findings (see below).

## 4. Relations graph reciprocity

All part_of / contains edges between entries that exist in the catalog are reciprocal:
cities<->global-economy(unresolved parent side noted), cities->power-grids/financial-markets/
road-traffic-systems (all reciprocated), financial-markets<->global-economy & cities,
firms<->global-economy (newly resolved this batch), galaxies<->stars, planetary-climate<->
weather-systems/tropical-cyclones/ocean-circulation/river-networks, weather-systems<->
tropical-cyclones, the-internet<->world-wide-web, road-traffic-systems<->cities (newly resolved
this batch). No dangling edge points at an existing entry without a matching reciprocal edge.
convection-cells and chemical-oscillators correctly add **no** relation edges (family-resemblance
to tropical-cyclones'/stars' convective phenomena is prose-only, per their own scoping notes, to
avoid misrepresenting mechanism-resemblance as compositional structure); turbulent-flows likewise
correctly declines edges to weather-systems/ocean-circulation for the same non-compositional
("regime, not part") reason.

**Roster expansion queue (unresolved ids referenced but not yet drafted):**
- plate-tectonics (earthquake-fault-systems part_of)
- cultures (languages part_of)
- energy-systems (power-grids part_of)
- social-networks (cities contains)
- moist-convection-cells (tropical-cyclones contains)
- photospheric-convection-cells (stars contains)
- (Bénard-Marangoni convection named as a scoped-out relative by convection-cells, deliberately
  NOT queued as a roster id — it is a family resemblance, not a compositional or roster candidate)

## 5. Measurand/atomicity drift check (new batch vs. pilot)

No drift found. All three new physical-chemical entries correctly adopt the "fluid parcel"
atomicity convention already established by tropical-cyclones/weather-systems rather than
molecules; firms and road-traffic-systems correctly adopt out-of-scope(human) for their human
components, matching financial-markets/cities precedent. extreme_event_statistics measurand_type
tagging is used correctly and with unusual care in the new batch — turbulent-flows and
road-traffic-systems both explicitly flag and avoid measurand-type mismatches (a velocity constant
recorded honestly as *not* a tail-exponent claim in both cases), and firms explicitly separates its
static-cross-sectional Zipf claim from Stanley et al.'s conditional-on-size growth-rate claim
rather than conflating them. energy_rate_density is consistently left `unknown` rather than
force-derived across all three physical-chemical entries and firms/road-traffic-systems, following
the-internet/financial-markets precedent for institutional-scale systems with no defensible mass
denominator — no drift in how that escape hatch is used.

One recurring but low-severity terminology issue, already self-flagged inside several new entries'
own provenance.flags: justifications repeatedly cite "the tropical-cyclones anchor" or "the stars
anchor" for columns (modularity, chaos_sensitivity, decentralization, etc.) where the actual worked
anchor file has no such anchor — the real precedent is the sibling *class entry's* score, not a
schema/anchors/*.yaml worked example. Scores checked out in every case spot-checked; this is a
citation-precision issue, not a scoring defect, and is already tracked inside the affected entries'
own flags rather than needing separate re-flagging here.

## Summary of method
Score matrix built by direct extraction of every rubric/hybrid attribute's `score:` field across
all 20 entries; alphabet_closure and category extracted per entry; relations blocks read in full
for all 20 entries and cross-checked pairwise for reciprocity; anchor files read for
adaptive_capacity, decentralization, information_processing, criticality to check disputed/close
calls against the anchor scale text directly.
