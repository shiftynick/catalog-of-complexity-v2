# HANDOFF — Catalog of Complexity, 2026-07-16

Picking this up: you're resuming a research-catalog project (non-biological complex systems,
30-column comparable metric panels, git-as-database). The v0.2→v0.3 session brief ran to full
completion this session — tree is clean, everything is committed. Nothing is broken or
half-done; what's waiting is a handful of decisions only Nick can make.

---

## TL;DR

Catalog grew from 15 → **20 verified entries** this session (batch 2: convection-cells,
chemical-oscillators, turbulent-flows, firms, road-traffic-systems — filling the previously-empty
physical-chemical category row). Both pre-registered hypothesis tests resolved, the phenomena
registry's traffic-jam test killed the entity-closure law's strong form, and a dedicated
dream-headline analysis ranked the four candidate "big findings." Everything is committed
(3 commits: `110dfa6`, `77d0905`, `37b5f74`) and the validator is green. **Nothing to fix or
resume mid-flight** — the next session starts fresh from a rewritten brief with three decisions
queued for Nick (headline pick, registry-promotion gate, batch-3 target).

---

## To pick up next

There is no in-progress work to resume. The next session should:

1. Read `docs/next-session-brief.md` in full — it's the authoritative "what's queued" doc,
   rewritten at the end of this session (v0.3 → v0.4).
2. If Nick has answered the three pending decisions (see "Open questions" below), start there.
3. If not, the default path is **Workstream A: expansion batch 3**, with candidates already
   named in the brief (granular-media, plate-tectonics, supply-chains, legal-systems) and tied
   to specific standing tests from the phenomena registry.
4. Before touching any entry: `cd analysis && node validate.mjs` to confirm the baseline is
   still green (20 entries, 0 errors as of this handoff).

```bash
cd N:\coc
cat docs/next-session-brief.md
cd analysis && node validate.mjs
```

---

## What's where

| Thing | Location |
|---|---|
| Project conventions (binding) | `CLAUDE.md` |
| Decision log (D1–D20) | `docs/decisions.md` |
| Cross-system findings + dream-headline ranking | `docs/findings.md` |
| **The next-session brief (read this first)** | `docs/next-session-brief.md` |
| Roster status + expansion queue | `docs/roster.md` |
| Catalog entries (the data) | `data/classes/*.yaml` (20 files) |
| Schema (frozen v1.0) | `schema/panel-spec.yaml` |
| Anchor scales (0–4 worked examples + boundary rules) | `schema/anchors/*.yaml` |
| Machine conformance validator | `analysis/validate.mjs` — run before every entry commit |
| Analysis pipeline (PCA/clustering/correlations) | `analysis/run.mjs` → `analysis/output/analysis.json` |
| Robustness study (LOO/perturbation) | `analysis/robustness.mjs` |
| Entry-production workflow (v2) | `.claude/workflows/entry-pipeline.js` |
| Batch-2 hints file (reference for authoring batch 3) | `.claude/workflows/batches/batch-2-v0.3.json` |
| Phenomena registry (emergence-first analysis layer) | `research/v0.3/phenomena-registry/` — `SPEC.md` (taxonomy), `FINDINGS.md` (results + pre-registered tests), `by-system/*.yaml`, `analyze.mjs` → `registry.json` |
| Batch-2 research/verification trail | `research/v0.3/expansion/` |
| IRR re-run (this session) | `research/v0.3/validation/irr-rerun/` |
| Robustness report at n=20 | `research/v0.3/validation/robustness-report-n20.md` |
| Standing-item verification logs | `research/v0.3/verification-debt/` |
| Astro+D3 web app (periodic-table view) | `app/` — dev server via `.claude/launch.json`, name `coc-app-dev`, port 4321 |

---

## Mental model (don't lose this)

- **The git repo IS the database.** Entries are YAML files under `data/classes/`, one per
  class. The Astro app in `app/` renders them; nothing is stored elsewhere.
- **Classes, not instances** (D14). "Tropical cyclones" is an entry; "Hurricane Katrina" is a
  named `exemplar` carrying evidence inside that entry, tagged `level: class-general` or
  `level: exemplar(<name>)`.
- **The schema is frozen (v1.0).** The only legal evolution channel is adding
  `boundary_clarifications` to an anchor file in `schema/anchors/` — never touch
  `panel-spec.yaml`'s column list itself without a decisions.md D-entry justified by production
  actually failing (dragon #3: no taxonomy rabbit holes).
- **Rubric/hybrid columns (15 of the 30) are anchored judgments, not measurements.** Score
  against the worked 0–4 anchor in `schema/anchors/<column>.yaml` even when no study exists.
  `unknown` is legal only for quantitative columns, never for rubric scores.
- **Verifier findings overrule drafts AND anchors.** Multiple precedents this project (Dobson
  2007, the Rinaldo OCN-SOC read) where a primary-read verifier corrected the *anchor*, not just
  the entry. Don't treat anchors as ground truth if a verifier's evidence contradicts them.
- **D20 (the emergence-first lens) is the governing research question**, stated by Nick:
  "understand a large set of complex systems and their emergent properties... see how large
  numbers of like things interacting to create new behaviors look across a wide range of
  systems." This is why the phenomena registry (`research/v0.3/phenomena-registry/`) exists as
  a parallel analysis layer on top of the 30-column panel — it classifies *emergent phenomena*
  (eyewalls, Zipf laws, traffic jams) rather than whole systems, using a typed taxonomy
  (`novelty_kind × onset × persistence × effective_theory`). It's prove-then-formalize (D8): a
  research layer only, not yet promoted into the schema. Read `SPEC.md` before classifying
  anything into it.
- **Pre-registered tests are a real methodology here, not decoration.** Standing hypotheses get
  written down in `FINDINGS.md` / `docs/findings.md` *before* the batch that will test them is
  drafted, so a result can't be quietly cherry-picked afterward. This session resolved four such
  tests and registered four new ones — read the "Batch-2 resolution" section of
  `research/v0.3/phenomena-registry/FINDINGS.md` for the pattern before adding new ones.
- **D19: no effort budget.** Sessions are opportunistic and brief-bounded — scope discipline
  lives in the written brief, not in token caps. Large fan-outs (expansion batches, validation
  studies) run as visible Workflow calls, not ad hoc.
- **D17: Phase 6 (public launch) gate is MANUAL.** Never deploy publicly or do launch prep
  unasked, no matter how many entries accumulate.
- **Orchestration pattern**: the user prefers the efficient-fable pattern
  (`.claude/skills/efficient-fable/SKILL.md`) — cheap subagents do token-heavy research/drafting/
  verification; the orchestrator (you) does judgment calls, delicate distinctions, and vets
  subagent output before accepting it. This session ran the entry-pipeline workflow (37 agents,
  ~3.3M subagent tokens) plus ~10 standalone research/classification/verification agents.

---

## What was finished this session

**Workstream A — Expansion batch 2** (commit `110dfa6`):
- Authored `.claude/workflows/batches/batch-2-v0.3.json` — dense provenance-carrying hints for
  5 classes, built from 3 parallel research agents mapping relations, reusable citations, and
  binding anchor rules.
- Ran `entry-pipeline.js` v2 as a Workflow (37 agents: 5 sweeps → 5 drafts → 20 verifiers → 5
  fixers → 1 cross-entry audit). All 5 entries promoted `draft` → `verified`.
- **Orchestrator triage on top of the pipeline's own fixes**: the cross-entry audit flagged
  `turbulent-flows.criticality=3` as breaking anchor ordering against
  `earthquake-fault-systems.criticality=2` (turbulent-flows had *negative* event-statistics
  evidence — Poisson-like puff lifetimes — while earthquake-fault-systems has measured
  Gutenberg-Richter statistics). Rescored to 2, `mechanism_status: established → proposed`,
  logged in an append-only `fix_log` entry. Also fixed two stale reciprocity comments
  (`global-economy.yaml`, `cities.yaml` — both said "unresolved" for edges batch 2 just closed).
- Validator: 20 entries, 0 errors.
- **Phenomena registry extended**: 3 classifier-agent passes covering all 5 new entries → 18
  new phenomenon records, then one adversarial verification pass (2 challenges applied: a
  convection heat-transport record reclassified `new-function → new-statistics`; the traffic
  jam's persistence corrected `self-sustaining → sustained-while-driven`). Registry regenerated
  via `analyze.mjs`: **81 phenomena / 20 systems, 0 conformance problems**.
- **All four pre-registered tests from the v0.2 session resolved** (full writeup:
  `research/v0.3/phenomena-registry/FINDINGS.md`, "Batch-2 resolution" section):
  1. BZ oscillator did **NOT** join the bistable-engine motif (no stored gradient) — an
     informative negative that sharpened the motif's membership rule.
  2. Convection rolls + turbulence puffs **both** landed in the dissipative-cell motif with
     entry-cited control parameters (Ra_c = 1707.762; Re_c ≈ 2040) — first entry-cited Ra_c in
     the project.
  3. **The traffic jam broke the entity-closure law's strong form** — classified `new-entity`
     in a `constrained`-alphabet system, survived hostile adversarial review. Closure table now
     15/1/0. Weak form stands: "entities are rarer, not absent, outside physics."
  4. Firms handed the rank-size motif its 6th lineage (Axtell 2001), lineage-deduplicated
     against global-economy's existing record; motif stays exclusively social.
- Four **new** pre-registered tests written into `FINDINGS.md` for the next batch.

**Workstream B — Dream-headline analysis at n=20** (commit `77d0905`):
- Re-ran `analysis/robustness.mjs` (LOO + 506 single-cell perturbations + seeded Monte Carlo) on
  the 20×16 matrix. Verdicts: info↔adaptivity coupling ROBUST at its new lower level (0.882);
  modularity↔self_organization ROBUST (negative in all 10 LOO runs); PC1 composition still
  SENSITIVE (reshuffles in 3/10 LOO runs).
- Wrote a new `docs/findings.md` section ranking the four historical "dream headline" candidates
  against the n=20 data:
  - **(d) Composition non-monotonicity** — systematized for the first time: 36/195 scored
    parent-child column pairs invert across all 13 containment edges (18.5%), concentrated in
    the sharp-dynamics columns (criticality inverts on 7/13 edges, chaos_sensitivity 5,
    tipping_transitions 4). Reading: aggregation smooths — containers average over subsystems,
    so the spikiest member out-scores its whole. Financial-markets is the extreme case,
    out-scoring both its containers (cities, global-economy) on 6 columns.
  - **(a) Alphabet-closure law** — zero exceptions across 20 entries; its phenomena-level
    corollary was killed exactly as pre-registered (the traffic jam), which is what a real law's
    boundary looks like being mapped, not an artifact.
  - **(c) info≡adaptivity identity** — broke into an interpretable two-pole residual structure
    (8/20 entries now diverge, in two directions: adaptation-without-processing vs.
    processing-without-adaptation).
  - **(b) PC1 as the axis** — growing (37.9% → 42.4% → 45.1%) but still composition-sensitive.
  - The data lean toward (d) as the primary headline with (a) as the second act — but this
    remains explicitly Nick's call.

**Workstream C — Standing items** (commit `37b5f74`):
- **IRR re-run**: the three at-or-below-chance columns (criticality, tipping_transitions,
  emergence) re-rated by a fresh blind panel (haiku/sonnet/opus tiers) against the
  boundary-clarified anchors added at v0.2. Same 5 entries, byte-identical briefs, anchors
  re-redacted via a documented 17-item protocol (`research/v0.3/validation/irr-rerun/method.md`).
  **Result: clarifications worked in proportion to dose** — criticality (4 rules) went
  α = −0.27 → blind unanimity; tipping_transitions (3 rules) −0.03 → **0.745**; emergence
  (1 rule) stayed at chance (0.00 → −0.12). Updated `schema/anchors/emergence.yaml`'s open
  calibration note with the reproduction and a concrete recommendation (needs a worked-contrast
  pair at the 2/3 boundary). Two methodological findings worth remembering (see Pitfalls below).
- **Broido & Clauset SFAnalysis repo** evaluated for per-snapshot classification: repo tree
  enumerated at pinned commit `306768a` — contains pipeline code + 3,669 input files but **no
  results table**; per-snapshot classification would require ~9 CPU-hours of project-original
  computation, not a citation. Closed `the-internet.yaml`'s standing flag RESOLVED-NEGATIVE; the
  aggregate ~50/50 Weakest/Strong split remains the definitive citable answer.
- **global-economy.yaml**: world GDP upgraded to primary-read via a direct World Bank API pull
  (`NY.GDP.MKTP.CD`, vintage 2026-07-13; $105.69T → $107.35T for 2023, a vintage revision not an
  error), cross-checked against an IMF WEO DataMapper pull (~0.1% agreement, new source key
  `imf-weo-datamapper`). Firm-count and energy-consumption figures were honestly **not**
  upgraded — no matching World Bank indicator exists for global firm stock, and energyinst.org
  still 403s. Cosmetic fix: `itself_complex: out-of-scope(human) / firms` → `itself_complex:
  firms` now that `firms.yaml` exists.
- Rewrote `docs/next-session-brief.md` (v0.3 → v0.4) with three Nick-decisions queued and a
  ranked primary-read debt list.
- Updated the project's auto-memory (`catalog-of-complexity.md` in the memory system) with the
  full v0.3 session summary.

---

## What's in progress / half-done

**Nothing.** All three workstreams from the v0.2→v0.3 brief ran to completion. Tree is clean,
all changes committed, validator green. This is a genuine stopping point, not a pause mid-task.

---

## Open questions for Nick

These are the three items blocking the *next* session's direction (full detail in
`docs/next-session-brief.md`):

1. **The dream headline.** Data lean toward "composition non-monotonicity" (parts are spikier
   than wholes) as primary, alphabet-closure law as second act. Nick can pick either, both, or
   defer again — this has been open since the v0.2 review.
2. **Registry promotion (D20b gate).** The phenomena taxonomy survived batch 2 intact (18 new
   classifications, zero vocabulary failures, all 4 pre-registered tests resolved cleanly). If
   Nick judges it stable enough, a new D-entry could promote the typed fields (`novelty_kind`,
   `onset`, `persistence`, `effective_theory`) from the research-only registry into entries'
   `emergent_phenomena` blocks directly (this would be a schema change — needs explicit
   sign-off per the frozen-schema rule). If not, it stays a parallel research layer for another
   batch.
3. **Batch-3 target.** Candidates already named and tied to standing tests: granular media (the
   weak entity-closure law's physical-side probe), plate-tectonics (bistable-engine storage
   probe — oldest queue giant), supply-chains / software ecosystems (modularity↔self_organization
   breakers), a bureaucratic-systems-style entry (the info-without-adaptation pole — needs a
   fame-check on the actual roster candidate name, "legal systems" is the closest).

---

## Recent commit history (last 18)

```text
37b5f74 Workstream C: IRR re-run, Broido/SFAnalysis closure, global-economy primary upgrades
77d0905 Workstream B: dream-headline analysis at n=20 + robustness re-run
110dfa6 v0.3 expansion batch 2: physical-chemical row filled, both designed tests resolved — n=20
5c609f2 D20: the emergence-first lens + the phenomena registry (first pattern results)
4c5301e Documentation consolidation at the v0.2 close
1c3a8af Periodic table: fit the full axis in a desktop viewport
02ed5cb Record D19 (no effort budget — brief-bounded sessions) + affirm Phi_m stays parked
13f64f0 Record D16-D18 from Nick's v0.2 decision review
2aae39b v0.2 expansion batch 1: five classes drafted, verified, and promoted — n=15
05ac971 v0.2 website: scholarly-reference redesign with periodic-table signature view
daa5574 v0.2 sweep: validation program, verification-debt paydown, machine validator, pipeline v2
41c629a Add improvement-sweep brief for the next session (v0.1 -> v0.2)
4908dd4 Documentation consolidation at the v0.1 / Phase 6 gate
ecb84c0 Phase 5: schema freeze, first cross-system analysis, Astro+D3 app
58eb0f7 Phase 4: all 10 pilot classes verified via automated workflow
2479c40 Phase 3: first two entries verified — tropical-cyclones, financial-markets
ba0a855 Phases 0-2: charter, metric panel v0.3, rubric anchors, roster lock
```

---

## Frequently-needed commands

```bash
# Validate all entries before committing any data/classes/*.yaml change (ALWAYS run this first)
cd N:\coc\analysis && node validate.mjs

# Re-run the full cross-system analysis (PCA, clustering, correlations)
cd N:\coc\analysis && node run.mjs

# Re-run the robustness/LOO study
cd N:\coc\analysis && node robustness.mjs

# Regenerate the phenomena registry after adding/editing by-system classification files
cd N:\coc\research\v0.3\phenomena-registry && node analyze.mjs

# Run the entry-production pipeline for a new batch (as a background Workflow, not inline)
# args: {batchFile: '.claude/workflows/batches/batch-N.json', date: 'YYYY-MM-DD', researchDir: 'research/vX/expansion'}
# Invoke via the Workflow tool with name: "entry-pipeline"

# Start the web app dev server (use the Browser pane's preview_start, NOT bash, per project convention)
# name: coc-app-dev, port 4321 (config: .claude/launch.json)
```

---

## Common pitfalls

- **The entry-pipeline Workflow can hit session usage limits mid-run.** This happened this
  session — all 5 sweep agents + the cross-audit failed with "You've hit your session limit."
  Fix: resume the SAME run (`Workflow({scriptPath, resumeFromRunId})` with the exact same
  `args`) — completed agents replay from cache, failed ones re-run live. Don't re-launch from
  scratch; you'll pay for the batch-load agent again and lose nothing but time by resuming
  correctly.
- **Workflow tool-result JSON truncates in the task notification.** When a workflow's final
  result is large (this session's batch-2 pipeline result was ~91KB), the inline notification
  cuts off mid-object. Read the `output-file` path directly with the Read tool to get the full
  result — don't try to work from the truncated inline text.
- **Boundary-clarification rules can floor a column to the point of losing signal on
  evidence-thin inputs.** The IRR re-run showed criticality going from scattered disagreement to
  *blind unanimous 0* — technically perfect agreement, but partly because the rater briefs
  (deliberately thin, by original IRR design) contain no event-statistics evidence, so raters
  correctly refuse to score above the floor. Don't read "unanimous agreement" as "the anchor is
  now perfectly calibrated" without checking whether the briefs actually carried the evidence
  that would let a rater score above 0.
- **Redacting IRR anchor files for a re-run is not a mechanical copy.** `boundary_clarifications`
  blocks cite worked precedents *by entry name, with their catalog scores* (e.g. "cities rescored
  1→0"). If any of those precedent entries are also in the current test sample, you must
  re-redact per-entry, not just reuse the original study's redacted files — a stale redaction
  leaks the answer. This session's redaction had 17 distinct decisions logged in
  `research/v0.3/validation/irr-rerun/method.md`; use that as the template, not a rubber stamp.
- **Cross-entry containment edges (`relations.contains`) get stale reciprocity comments the
  moment the child entry is drafted.** Two were caught and fixed this session
  (`global-economy.yaml`, `cities.yaml` both still said "unresolved" after their children were
  promoted). When promoting a new entry that resolves a parent's dangling relation, grep the
  parent for the old "unresolved -> roster expansion queue" comment and update it in the same
  pass — the pipeline's fixer agents don't touch files outside the entry they're drafting, so
  this is an orchestrator-level cleanup step, not something the pipeline does automatically.
- **A subagent noticing "the briefs look truncated" isn't necessarily a bug.** One IRR rater
  flagged the packet briefs as suspiciously short (35-49 lines). Verified via `wc -l` diff
  against the original v0.2 study's briefs — they were byte-identical; the original design was
  always this thin (header + exemplars + scoping note, deliberately conservative). Check before
  assuming a subagent's "this looks broken" flag means the harness actually broke something.
- **Windows path handling**: this repo runs on `N:\coc` under PowerShell/Git-Bash dual tooling.
  The Bash tool here is Git Bash (POSIX-style paths like `/n/coc` work in `cd`, but tool-reported
  paths come back Windows-style `N:\coc\...`). Don't assume one path style works everywhere —
  match whatever the specific tool/agent expects.
