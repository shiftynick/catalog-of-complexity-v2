# Catalog of Complexity

A definitive, layered reference of the world's canonical complex systems — each carrying a **commensurable panel** of metrics and attributes, full provenance behind every value, and an interactive web app to explore it all.

The strategic bet: the periodic table worked because every element gets the *same* well-defined measurements. Once many complex systems carry identical, rigorously defined measurements, groupings and patterns become visible that no one has been positioned to see — aspirationally, a **periodic table of complexity**.

## Scope

All complex systems **except living matter**. Included: physical, chemical, geological, and astrophysical systems (stars, hurricanes, fault systems, river networks) *and* human socio-technical systems (markets, cities, the Internet, languages). Excluded for now: systems whose components are organisms or tissue (cells, ecosystems, brains, immune systems).

Roughly: Morowitz's ladder of emergence, with the biological middle rungs removed.

## Structure

Entries are **classes** — the "elements" of the table (*tropical cyclones*, *financial markets*, *languages*). Each class designates famous **exemplars** (*Hurricane Katrina*, *the Sun*, *the NYSE*, *English*) that carry evidence inside the class entry: a value measured on an exemplar is recorded as `level: exemplar(<name>)`, one that holds for the kind as such as `level: class-general`. Exemplars are also the narrative anchors of each class's page in the app. *(Revised from a two-level class/instance ontology — see decision D14.)*

## Data model

- Git-versioned flat files, one per class entry (`data/classes/`)
- Two value kinds, structurally flagged apart: **quantitative** (literature-harvested, every value cited) and **rubric-scored** (ordinal scales with written justification and confidence)
- Entry lifecycle: `draft → verified → published`; adversarial verifier agents are the quality gate, flagged items go to human review

## Roadmap

| Phase | Deliverable |
|---|---|
| 0. Charter | This repo; objectives and decisions locked *(done)* |
| 1. Metric panel | Literature-grounded column spec + rubric anchors ([schema/panel-spec.yaml](schema/panel-spec.yaml), [schema/anchors/](schema/anchors/)) *(done)* |
| 2. Schema + roster lock | Entry schema v1; pilot-10 locked; full roster drafted — **time-boxed** |
| 3. Hand-built pilot | 2–3 entries researched interactively → battle-tested playbook *(done)* |
| 4. Automated pilot | Playbook encoded as agent workflow; remaining pilot entries + verification *(done — all 10 pilot classes verified)* |
| 5. v0.1 | Schema **freeze**; web app prototype; first cross-system analysis on pilot-10 *(done — schema v1.0 frozen; Astro+D3 app in `app/`; PCA/clustering in `analysis/`)* |
| 5.5. v0.2 sweep | Validation program; machine validator; pipeline v2; first expansion batch; professional site *(done — see below)* |
| 6. Public launch | Repo + site go public; scale to the full roster *(deliberately deferred — manual gate, decision D17)* |

**Current status (2026-07-02): v0.2 complete — 15 verified entries.** The v0.2 improvement sweep added: the **validation program** (blind inter-rater reliability study, leave-one-out/perturbation robustness study with per-finding survival verdicts, a three-lens hostile-referee review, and a prior-art scan — results and corrections in [docs/findings.md](docs/findings.md), evidence in [research/v0.2-sweep/](research/v0.2-sweep/)); a **machine conformance validator** ([analysis/validate.mjs](analysis/validate.mjs)) gating the build; the **parameterized entry pipeline v2** with an integrated fixer stage; the **first expansion batch** (global-economy, weather-systems, ocean-circulation, galaxies, world-wide-web — 37 agents, zero blockers, all promoted); and the **scholarly-reference website** whose landing page is a real periodic-table view (category rows × PC1 columns, expansion queue as ghost tiles). Headline from the n=15 re-analysis: the principal axis strengthened to 42.4% of variance, and the v0.1 internet↔fault-systems "odd kinship" dissolved exactly as the robustness study predicted — a worked example of the validation program doing its job. Next batch (decision D18): the dissociation candidates + the empty physical-chemical row.

## Quickstart

```
cd analysis && npm install && node run.mjs     # rebuild analysis/output/analysis.json
npm --prefix app install && npm --prefix app run dev   # app at localhost:4321
```

## The three dragons

Named failure modes from previous attempts. Every process decision must answer to them:

1. **The overengineered pipeline** — no automation before the manual process is proven; no infrastructure before entries demand it.
2. **Obscure over canonical** — the roster is locked up front, ordered by fame. Nothing exotic enters before the giants are done.
3. **The taxonomy rabbit hole** — schema work is time-boxed, frozen after the pilot; afterward only entry production can motivate schema changes.

## Repo map

- [data/classes/](data/classes/) — **the catalog**: 15 verified class entries (the git repo is the database)
- [schema/panel-spec.yaml](schema/panel-spec.yaml) — the 30-column panel, **frozen v1.0**, with binding filling rules
- [schema/anchors/](schema/anchors/) — worked 0–4 anchors for all 15 rubric/hybrid columns (what makes scores commensurable)
- [analysis/](analysis/) — Node pipeline: entries → PCA/clustering/correlations → `output/analysis.json`; plus `validate.mjs` (conformance gate, run before committing entry changes) and `robustness.mjs` (seeded sensitivity study)
- [app/](app/) — Astro + D3 app: The Table, layered profiles, Compare, Map
- [research/](research/) — the full evidence trail per phase: sweeps, verification logs, flag digests, primary-read logs
- [.claude/workflows/entry-pipeline.js](.claude/workflows/entry-pipeline.js) — the entry-production workflow v2 (parameterized via args; batch files in [.claude/workflows/batches/](.claude/workflows/batches/))
- [CLAUDE.md](CLAUDE.md) — conventions and commands for future working sessions

## Documents

- [docs/decisions.md](docs/decisions.md) — decision log D1–D19 (why everything is the way it is) + parking lot + open questions
- [docs/findings.md](docs/findings.md) — **cross-system findings** with robustness verdicts and the n=15 update, epistemic caveats attached
- [docs/roster.md](docs/roster.md) — 15 verified entries + expansion queue + full roster candidates
- [docs/metrics.md](docs/metrics.md) — the metric panel's derivation record (historical; the spec is the authority)
- [docs/schema.md](docs/schema.md) — entry format explainer (the verified entries are the living reference)
- [docs/playbook.md](docs/playbook.md) — per-entry research process + verification protocol (proven, encoded as the workflow)
- [docs/webapp.md](docs/webapp.md) — web app concept (built)
