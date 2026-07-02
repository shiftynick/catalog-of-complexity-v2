# Catalog of Complexity — project guide

A definitive, layered reference of canonical NON-BIOLOGICAL complex systems: every class entry carries the same 30-column "metric panel" (schema/panel-spec.yaml, **frozen v1.0**), with per-value provenance. The git repo IS the database; the Astro app renders it. Phases 0–5 complete; **v0.2 sweep complete (2026-07-02)**: 15 verified entries (pilot 10 + expansion batch 1: global-economy, weather-systems, ocean-circulation, galaxies, world-wide-web), validation program run (blind IRR, LOO robustness, hostile panel, prior art — verdicts in docs/findings.md, evidence in research/v0.2-sweep/), machine validator gating the build, scholarly-reference website with the periodic-table signature view. **Phase 6 (public launch) is deliberately deferred** — repo stays private until then.

## Layout

- `data/classes/*.yaml` — the catalog. One class per file (D14: classes only; famous instances are `exemplars` carrying evidence). Lifecycle: draft → verified → published.
- `schema/panel-spec.yaml` — the 30 columns + binding `filling_rules` (FROZEN; changes need a decisions.md D-entry justified by entry production failing).
- `schema/anchors/*.yaml` — worked 0–4 anchors for all 15 rubric/hybrid columns. These make scores commensurable; read the relevant anchor before scoring anything.
- `docs/decisions.md` — D1–D15 decision log + schema parking lot + open questions (license, effort budget, dream headline). Read before proposing changes.
- `docs/findings.md` — first cross-system findings (with epistemic-status caveats).
- `analysis/run.mjs` — Node pipeline: entries → z-scored matrix → PCA/clustering/correlations → `analysis/output/analysis.json`. Fails loudly on missing scores; never impute.
- `analysis/validate.mjs` — machine conformance validator (30-column presence, evidence_status/level/measurand_type vocabularies, scores 0–4, source read-status annotations, relations reciprocity). Run `cd analysis && node validate.mjs` before committing entry changes; it also gates the Netlify build chain (netlify.toml). `analysis/robustness.mjs` — seeded LOO/perturbation study behind findings.md's survival verdicts.
- `app/` — Astro + vanilla D3 (no React/Tailwind). Views: Table, system profiles (public layer + evidence layer), Compare (radar), Map (PCA).
- `research/phaseN/` and `research/v0.2-sweep/` — full evidence trail: sweeps, verification logs, flag digests, primary-read logs, validation studies (IRR, robustness, hostile reviews). Provenance is a product feature; never delete.
- `.claude/workflows/entry-pipeline.js` — the entry-production workflow, v2 (sweep → draft → 4 adversarial verifiers → integrated fixer with validator gate → cross-entry audit). Parameterized: pass `args: {batchFile, date, researchDir}` (batch data files live in `.claude/workflows/batches/`); the orchestrator still triages the returned flags and does the draft→verified status bump.

## Commands

- Analysis: `cd analysis && npm install && node run.mjs`
- App dev: `npm --prefix app run dev` (preview config: `.claude/launch.json`, name `coc-app-dev`, port 4321)
- App build: `cd app && npm install && npm run build` (works with or without analysis output; Netlify chain in `netlify.toml`)

## Non-negotiable conventions

1. **Never fabricate a value, citation, or DOI.** `unknown` is always legal for quantitative values. Every citation carries a read-status annotation (primary-read / snippet-verified / [unverified — model knowledge]).
2. **Rubric/hybrid SCORES are anchored judgments, not measurements** — score against the anchor scale even when no study exists (cities & the-internet precedents); `unknown` is for quantitative values.
3. **filling_rules are binding**: power-law claims need CSN-grade support or `evidence_status: measured-untested`; SOC statistics ≠ SOC mechanism; no market-chaos claims; measurands named; atomicity declared per entry; every value carries `level` (class-general | exemplar(<name>)).
4. **The three dragons** (named failure modes — see README): no overengineering, canonical-before-obscure (roster grows via the relations expansion queue, fame-gated), schema is frozen.
5. **Entry production pattern** (proven in Phases 3–4): research sweep → draft → citation/plausibility/consistency/coverage verifiers (adversarial, structured flags) → orchestrator triage → fixes → promote. Verifier findings overrule drafts AND anchors (a primary read once corrected the anchor, not the entry).
6. **Orchestration**: the user prefers the efficient-fable pattern (`.claude/skills/efficient-fable/SKILL.md`) — cheaper subagents do token-heavy research/drafting/verification; the orchestrator does judgment, delicate distinctions, and vets subagent output before accepting it.
