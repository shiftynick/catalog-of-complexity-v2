# Phenomena Registry — first emergence-pattern findings

**Date:** 2026-07-03 · **Mandate:** D20 (the emergence-first lens) · **Data:** 63 emergent
phenomena classified from the 15 verified entries' emergent_phenomena blocks (+1 excluded:
world-GDP, which fails the SFI emergence test — it is conceded aggregation, not emergence) ·
**Method:** typed classification per [SPEC.md](SPEC.md) (novelty_kind × onset × persistence ×
effective_theory, substrate and generating interactions bound to the host entries' ontologies),
three classifier agents, one adversarial consistency verifier ([verification.md](verification.md),
all recommendations applied), analysis in [analyze.mjs](analyze.mjs) → [registry.json](registry.json).

## Epistemic status — read first

Same discipline as docs/findings.md: this is **exploratory pattern description over anchored
judgments**, single-model-family classification, one adversarial pass, and — the verifier's
most important caveat — the phenomena themselves were NAMED upstream by the entry drafters,
so counts partly reflect naming granularity, not nature. Physical systems got sliced into
more named sub-objects than social ones. Every pattern below is a hypothesis with a stated
test, not a result.

## The candidate law: entity/function complementarity across the closure gradient

| novelty_kind | closed | constrained | open |
|---|---|---|---|
| new-entity | **12** | **0** | **0** |
| new-function | **0** | **4** | **2** |

Every individuable emergent **object** in the catalog (eyewalls, granules, galactic bars,
ocean eddies) lives in a closed-alphabet physical system; every emergent **capability**
(price discovery, global reachability, grammar, agglomeration economies, ECI, hub/authority
structure) lives in a constrained or open one. Slogan form: **physics makes things, society
makes capabilities.**

- **Verifier's verdict:** SURVIVES-WEAKENED (entity side) / SURVIVES (function side, clean
  after the solar-dynamo reclassification). The entity zeros in constrained/open are partly
  naming artifact — cities' named neighborhoods and the Internet's Tier-1 ASes would
  plausibly score new-entity had the entries listed them as separate phenomena.
- **The test this prediction makes:** a traffic jam is a trackable, countable, birth-and-death
  macro-object in a *constrained* system. If road-traffic-systems enters the catalog and its
  jam scores new-entity (it should), the strong reading dies and the honest reading becomes
  "entities are rarer, not absent, outside physics." Batch 2's convection cells and BZ
  patterns add closed-side entities either way. **road-traffic-systems is hereby elevated in
  queue priority** (D20 consequence).

## The recurring motifs (same novelty|onset|persistence signature, ≥3 lineages, ≥2 categories)

Compositional kin are lineage-deduplicated (the eyewall/vortex/weather-systems triple counts
once). Eight motifs; the five with faces:

1. **The dissipative cell** — `new-entity | threshold-bifurcation | sustained-while-driven`
   (3 lineages: solar granulation, the tropical-cyclone vortex complex, extratropical
   cyclones). The classical Prigogine dissipative structure, recovered from classification
   alone. Physical only. Batch 2's Rayleigh-Bénard cells are its type specimen and will join.
2. **The rank-size law** — `new-statistics | always-present-at-scale | self-sustaining`
   (5 lineages: city sizes, word frequencies, firm sizes, strategy ecology, web degree
   distribution). **Exclusively socio-economic/cultural** — the social systems' signature
   emergent, with no onset and no driving requirement: it is simply there wherever large
   populations of competing/replicating units exist.
3. **The bistable engine** — `new-dynamics | threshold-bifurcation | self-sustaining`
   (4 lineages after noting the sunspot-cycle/solar-dynamo pair are mechanism-and-signature
   of one phenomenon: AMOC on/off bistability, delta lobe-switching, the solar cycle, gyre
   overturning). Physical only. Batch 2's BZ oscillator is the chemistry-scale member and
   the direct test of whether this motif is substrate-general.
4. **The frozen network record** — `new-structure | crossover-gradual | frozen`
   (4 lineages: dendritic drainage networks, river fractal branching, the Internet's AS
   hierarchy, the Web's topic communities). **The first motif that genuinely crosses the
   physical/social divide**: erosion and commerce leave the same *kind* of fossil — a
   hierarchical network structure that persists when the fast dynamics pause.
5. **The drifting collective rhythm** — `new-dynamics | crossover-gradual |
   sustained-while-driven` (4 lineages: volatility regimes, the business cycle, the AMOC
   overturning cell, search-driven discoverability concentration). **Also crosses the
   divide.** Collective slow modes with no sharp onset, sustained by throughput.

Motifs 4 and 5 are the strongest current answer to the governing question ("how does
many-like-things-interacting look ACROSS systems?"): interaction leaves hierarchical fossils,
and driven collectives develop slow rhythms, *regardless of what the units are*.

## Two structural observations

- **Sharp onsets come with theories.** Phenomena with a formal threshold/bifurcation have
  quantitative effective theories in 12/14 cases; episodic-triggered phenomena in only 3/7.
  The Krakauer criterion (emergence = qualitative mechanism change) is visible in the
  literature's own structure: where there is a control parameter, there is a theory.
- **Substrate interchangeability is ~50/50** (30 yes / 33 no) across phenomena — emergence
  in this catalog does not require interchangeable units at the phenomenon level, which
  mildly complicates the "large numbers of LIKE things" intuition: half the catalog's
  phenomena ride on heterogeneous unit populations (traders, faults, countries).

## Standing tests for the next batch (all pre-registered here)

1. Does the BZ oscillator join the bistable-engine motif (physical, chemistry-scale)? Does
   anything social ever join it?
2. Do Rayleigh-Bénard cells and turbulent coherent structures land in the dissipative-cell
   motif with *entry-cited* control parameters (Ra_c is the best-documented threshold in
   this literature — no more [unverified] onset citations)?
3. Does the traffic jam break the entity-closure law?
4. Does firms' entry hand the rank-size motif its 6th lineage (Axtell) and does the motif
   stay social-only?

## Provenance note

Registry layer only (prove-then-formalize, D8/D20): no catalog entry, schema, or anchor file
was modified. Promotion of the taxonomy into entries' emergent_phenomena blocks awaits a
D-entry once the taxonomy survives batch 2.
