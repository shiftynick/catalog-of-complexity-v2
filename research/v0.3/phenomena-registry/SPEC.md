# Phenomena Registry — classification spec (v1, 2026-07-03)

Purpose (decision **D20**): make emergent phenomena first-class comparable objects. Emergence
per the SFI working definition: *units interacting to produce behaviors qualitatively different
from the units themselves*, requiring a qualitative change in organization — not mere
improvement with scale. This registry is a DERIVED research layer (prove-then-formalize, D8):
no entry or schema file changes. Fields are promoted into entries later only by D-entry.

## Record shape (one YAML doc per system: `by-system/<system-id>.yaml`)

```yaml
system: <entry id>
phenomena:
  - id: <system-id>--<slug>
    name: <verbatim from the entry's emergent_phenomena item>
    order_parameter: <verbatim from the entry>
    substrate:
      part_type: <name of a part in the host entry's component_ontology — must match>
      count_oom: <from the ontology>
      interchangeable: <from the ontology>
    generating_interactions: [<names from the host entry's interaction_ontology>]
    novelty_kind: new-entity | new-dynamics | new-statistics | new-structure | new-function
    onset: threshold-bifurcation | crossover-gradual | always-present-at-scale | episodic-triggered | unknown
    onset_control_parameter: <named parameter + citation — REQUIRED iff onset is threshold-bifurcation>
    persistence: transient | sustained-while-driven | self-sustaining | frozen
    effective_theory:
      status: none | vocabulary | quantitative-contested | quantitative-predictive
      theory: <name of the theory + source key from the host entry, or 'none'>
    qualitative_difference: >
      1-3 sentences: WHY this behavior is qualitatively different from what a single unit
      does — the explicit SFI test. Name what the unit does and what the collective does.
    justification: >
      1-3 sentences defending the novelty_kind and onset choices, citing the host entry's
      own evidence (source keys) where possible.
    confidence: high | medium | low
```

## Vocabularies (binding)

**novelty_kind** — what KIND of new thing the interaction produces:
- `new-entity` — a persistent, localized, individuable macro-object (eyewall, solar granule,
  galactic bar, traffic jam). Test: you can point at one, count them, track one over time.
- `new-dynamics` — a collective temporal behavior with no single-unit analogue (sunspot
  cycle, ENSO, business cycle, volatility clustering). Test: the order parameter is a
  time-signature (period, regime, oscillation), not an object.
- `new-statistics` — a distributional law over units or events (Zipf, Gutenberg-Richter,
  degree distributions, blackout-size tails). Test: the order parameter is a distribution
  shape/exponent; no single realization exhibits it.
- `new-structure` — frozen or quasi-static spatial organization accreted by the dynamics
  (dendritic drainage networks, AS-level hub hierarchy, city segregation patterns). Test:
  persists when the fast dynamics pause; it is the RECORD of interaction, not an event.
- `new-function` — a capability the units individually lack (price discovery, global
  reachability, grammar as a shared convention). Test: describes what the system can DO,
  usable/exploitable from outside.
- Hard cases get one kind + the runner-up named in `justification`. Never two kinds.

**onset** — how the phenomenon appears as N/coupling/driving grows (the Krakauer axis):
- `threshold-bifurcation` — a formal control parameter with a published critical value or
  bifurcation (Rayleigh number, saddle-node voltage collapse, AMOC hysteresis). REQUIRES
  `onset_control_parameter` with a citation available in the host entry (or explicitly
  marked `[unverified — model knowledge]`).
- `crossover-gradual` — appears smoothly as scale/coupling increases; no sharp threshold
  claimed in the literature.
- `always-present-at-scale` — a statistical regularity present whenever the population is
  large enough to measure; no interesting onset (many new-statistics items).
- `episodic-triggered` — arises in discrete events when conditions align (cascading rupture,
  congestion collapse episodes), rather than as a standing feature.
- `unknown` — literature silent; never guess.

**persistence**: `transient` (dies away), `sustained-while-driven` (exists only under
throughput — most dissipative structures), `self-sustaining` (persists without specific
driving once formed), `frozen` (structural record).

## Evidence discipline (inherits the catalog's rules)

- Never fabricate; reuse the HOST ENTRY's citations and read-status annotations — the entry
  is your evidence base, plus its research/ sweep logs. Web research is NOT needed for this
  pass; if a classification would require a claim the entry doesn't support, choose the
  conservative vocabulary item (`unknown`, `crossover-gradual`) and say so.
- Classification is anchored judgment (like rubric scores): the justification IS the value.
- Do not invent phenomena; the registry covers exactly the items in each entry's
  emergent_phenomena block, same names, same order.
