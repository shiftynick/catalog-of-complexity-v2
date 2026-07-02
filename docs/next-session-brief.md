# Improvement Sweep Brief (v0.1 → v0.2)

Written 2026-07-02 at the close of the founding session. **Read first:** [CLAUDE.md](../CLAUDE.md) (conventions — binding), [docs/decisions.md](decisions.md) (D1–D15 + dragons), [docs/findings.md](findings.md) (current results + standing hypotheses). Orchestrate per the efficient-fable skill; the entry-production workflow lives at `.claude/workflows/entry-pipeline.js`.

## Constraints (non-negotiable)

- Schema stays FROZEN (v1.0) unless entry production fails without a change — then a decisions.md D-entry, not drift.
- Nothing goes public: no deploys to public URLs, no external publication. Phase 6 is deliberately deferred.
- Provenance history in entries (fix_log, flag_cleanup_notes, verification blocks) is append-only — never rewritten.
- All filling rules apply to every new value. Verifier findings can overrule drafts AND anchors (both directions — precedent: the Dobson primary read corrected the anchor).

## Workstream 1 — Professional website (Nick's ask)

The v0.1 app is functional but prototype-grade. Target: a site that looks like a serious reference work.
- Visual identity: deliberate typography, spacing system, real landing-page narrative (what this is, why it's trustworthy), light polish pass on all four views. Mobile + accessibility basics. OG/meta tags.
- **The Table should become the signature view it was designed to be** — closer to an actual periodic-table grid (positioning informed by the PCA axes or category × PC1), not a card list.
- New content pages from existing assets (cheap, high-value): the **folklore register** (research/phase1/SYNTHESIS.md's debunked-claims table → "Complexity myths this catalog does not repeat"), the **conceptual layer** (panel-spec's mention-only measures → "Why Kolmogorov complexity isn't a column"), and a **methods page** (the playbook + verification pipeline as public-facing credibility).
- Keep the stack (Astro + vanilla D3); no framework migrations.

## Workstream 2 — Validation of the approach (Nick's ask)

The catalog's claims are only as good as its instrument. Three concrete studies:
1. **Inter-rater reliability**: have 2–3 independent agents blind-score a sample of entries (given only the anchor files + entry scoping notes, NOT the existing scores), then measure agreement (e.g., Krippendorff's alpha per column) against catalog scores. Low-agreement columns get anchor tightening. This is the single strongest test of the whole rubric approach.
2. **Analysis robustness**: leave-one-out PCA stability; sensitivity of the headline findings (PC1 composition, the r=0.95 info/adaptivity coupling, the negative modularity/self-organization correlation) to single entries and to plausible ±1 score perturbations. Update findings.md with survival verdicts.
3. **External validation**: literature check for prior art on cross-system scoring (complexity profiles, LLW-style comparisons) — position the catalog against it honestly; adversarial review of the panel itself by a fresh-eyes agent panel (what would a hostile referee attack first?).

## Workstream 3 — Agentic expansion pipeline (Nick's ask)

- Upgrade `.claude/workflows/entry-pipeline.js`: parameterize CLASSES via workflow `args` (currently hardcoded); fold the fixer stage INTO the workflow (Phase 4 ran fixers manually afterward); carry per-class hint blocks from a data file rather than inline.
- Then run the **first expansion batch** from the fame-gated queue — suggested: global-economy, weather-systems, ocean-circulation, plate-tectonics, world-wide-web (5 canonical giants, all already referenced by verified entries). Full verification + cross-entry audit + re-run analysis afterward (n=15 tests the standing hypotheses in findings.md).

## Workstream 4 — Machine validation of the catalog itself (added)

Real gap: nothing programmatically enforces entry conformance. Build a validator script (`analysis/validate.mjs` or similar): every entry has all 30 columns, legal evidence_status/level/measurand_type values, scores in 0–4, sources resolve, relations reciprocity holds, exemplar ids consistent. Wire it into the app build and document it as the pre-commit check.

## Workstream 5 — Verification debt paydown (added)

Standing flags across verified entries, batchable to research agents: Lovejoy 1982 primary (paywalled — try author site again), Chaisson 2011 Table 1 (institutional access), rs2023 circulating-mass figures, the-internet Newman Table II l/C confirmation, Broido & Clauset AS-graph classification, San Andreas b-value primary, tropical-cyclones criticality 1-vs-0 note. Clear what's clearable; convert the rest to permanent documented limitations.

## Deliberately out of scope this sweep

Public launch (Phase 6), the data license decision (needs Nick), biological systems (D2), schema redesign (frozen), instance-level entries (D14).
