# The Metric Panel

The columns of the periodic table. This is the science core of the project: the panel must be **commensurable** — "hierarchy depth" or "feedback" must mean the same thing for a hurricane and for the power grid — or the whole comparison collapses into vibes.

> **Status (2026-07-01):** Phase 1 **complete**. The authoritative spec is [schema/panel-spec.yaml](../schema/panel-spec.yaml) (v0.3 — 29 columns after decisions D13/D14), synthesized from four evidence reports in [research/phase1/](../research/phase1/) — reasoning and editorial calls in [SYNTHESIS.md](../research/phase1/SYNTHESIS.md). Rubric anchors for all 15 rubric/hybrid columns live in [schema/anchors/](../schema/anchors/).

## Phase 1 task

Derive the panel from the literature (decision D7). Anchor sources for the survey:

- **Seth Lloyd**, *Measures of Complexity: A Nonexhaustive List* (IEEE Control Systems, 2001) — ~40 proposed measures grouped as difficulty-of-description, difficulty-of-creation, degree-of-organization
- **Ladyman, Lambert & Wiesner**, *What is a complex system?* (Eur. J. Phil. Sci., 2013) — feature markers: numerosity, disorder/diversity, feedback, non-equilibrium, spontaneous order, robustness, nested/hierarchical structure, history/memory, adaptation, emergence
- **Geoffrey West**, *Scale* — scaling exponents as cross-system quantities
- **Eric Chaisson**, *Cosmic Evolution* — free energy rate density Φm, one of the few genuinely cross-system quantitative metrics (spans galaxies → stars → society)
- **Bak** (self-organized criticality), **Prigogine** (dissipative structures), **Haken** (synergetics), **Holland** (complex adaptive systems), **Newman** (networks review), **Mitchell** (*Complexity: A Guided Tour*), **Bar-Yam** (*Dynamics of Complex Systems*)

**Phase 1 deliverable** — for every column: name · precise definition · value type · unit · measurement/scoring procedure · rubric anchors with worked examples from **≥3 different systems** · literature source for the definition. That spec becomes `schema/panel-spec.yaml` and is the single authority the research agents fill against.

## Value types

| Type | Contents | Flagged as |
|---|---|---|
| `quantitative` | value + unit + method + citation(s) + confidence | hard data |
| `rubric` | score (0–4) + written justification + confidence | structured judgment |
| `categorical` | value from a controlled vocabulary | classification |
| `narrative` | curated prose (e.g., list of emergent phenomena) | description |

`unknown` is always a legal value and is never guessed around.

## Candidate panel (SUPERSEDED — kept for history; the live spec is [schema/panel-spec.yaml](../schema/panel-spec.yaml))

**A. Identity & scale**
category · spatial extent [m] · characteristic timescales [s] · numerosity (component count, order of magnitude) · component diversity (# of distinct component types) · energy flux density [W/kg] (Chaisson Φm)

**B. Structure**
interaction topology (lattice / network / field / mixed) · degree-distribution class · modularity · hierarchy depth (# of organizational levels) · scale-free vs. characteristic-scale

**C. Dynamics**
nonlinearity (rubric) · dominant feedback loops (count, sign) · distance from equilibrium / dissipation (rubric + Φm) · chaos (max Lyapunov exponent where measured) · criticality / SOC evidence (rubric + citations) · phase transitions & tipping points · extreme-event statistics (power-law tail exponent where established — e.g., Gutenberg–Richter b-value, market return tails)

**D. Information & memory**
memory / hysteresis (rubric) · information storage & processing (rubric + notes) · history/path dependence (rubric)

**E. Adaptation & evolution**
adaptive capacity (rubric — do components change behavior in response to environment?) · variation–selection dynamics present? (categorical + justification)

**F. Emergence & robustness**
emergent phenomena (curated narrative list + order parameters) · self-organization (rubric) · robustness/resilience (rubric) · cascade susceptibility (rubric + evidence)

## Commensurability rules

1. Every rubric column ships with **anchor examples**: worked scores for at least 3 systems of different categories, written before mass scoring begins.
2. The consistency-checker agent compares every new score against the anchors and against all previously published entries; deviations get flagged.
3. A column that can't be defined identically across categories gets split or dropped — a column that means different things in different rows is worse than no column.
