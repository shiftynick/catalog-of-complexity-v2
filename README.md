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
| 6. Public launch | Repo + site go public; scale to the full roster *(deliberately deferred — held for later)* |

**Current status (2026-07-02): v0.1 complete.** 10 verified entries, frozen schema, working app, first findings ([docs/findings.md](docs/findings.md)). The project is paused at the Phase 6 gate; the expansion queue and the proven entry-production workflow are ready whenever it resumes.

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

- [data/classes/](data/classes/) — **the catalog**: 10 verified class entries (the git repo is the database)
- [schema/panel-spec.yaml](schema/panel-spec.yaml) — the 30-column panel, **frozen v1.0**, with binding filling rules
- [schema/anchors/](schema/anchors/) — worked 0–4 anchors for all 15 rubric/hybrid columns (what makes scores commensurable)
- [analysis/](analysis/) — Node pipeline: entries → PCA/clustering/correlations → `output/analysis.json`
- [app/](app/) — Astro + D3 app: The Table, layered profiles, Compare, Map
- [research/](research/) — the full evidence trail per phase: sweeps, verification logs, flag digests, primary-read logs
- [.claude/workflows/entry-pipeline.js](.claude/workflows/entry-pipeline.js) — the proven entry-production workflow for scaling the roster
- [CLAUDE.md](CLAUDE.md) — conventions and commands for future working sessions

## Documents

- [docs/decisions.md](docs/decisions.md) — decision log D1–D15 (why everything is the way it is) + parking lot + open questions
- [docs/findings.md](docs/findings.md) — **first cross-system findings** from the pilot analysis, with epistemic caveats
- [docs/roster.md](docs/roster.md) — pilot 10 (all verified) + expansion queue + full roster candidates
- [docs/metrics.md](docs/metrics.md) — the metric panel's derivation record (historical; the spec is the authority)
- [docs/schema.md](docs/schema.md) — entry format explainer (the verified entries are the living reference)
- [docs/playbook.md](docs/playbook.md) — per-entry research process + verification protocol (proven, encoded as the workflow)
- [docs/webapp.md](docs/webapp.md) — web app concept (built)
