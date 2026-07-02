# Next-Session Brief (v0.2 → v0.3)

Written 2026-07-02 at the close of the v0.2 improvement sweep. **The previous brief (v0.1 → v0.2) was executed in full that same day** — all five workstreams; see the commit run `daa5574…1c3a8af` and the summary in [README.md](../README.md)'s status paragraph. **Read first:** [CLAUDE.md](../CLAUDE.md) (binding conventions), [docs/decisions.md](decisions.md) (now D1–D19), [docs/findings.md](findings.md) (robustness verdicts + n=15 update). Orchestrate per the efficient-fable skill.

## Constraints (non-negotiable, unchanged plus two new)

- Schema stays FROZEN (v1.0); anchor `boundary_clarifications` blocks are the legal evolution channel (three added at v0.2 after the IRR study).
- Nothing goes public — **D17: the Phase 6 gate is manual**; no public deploys, no launch prep unasked.
- Provenance history in entries is append-only.
- All filling rules apply; verifier findings overrule drafts AND anchors (both directions — two v0.2 precedents: the Dobson read, and the Rinaldo OCN-SOC read that rescored river-networks against its own anchor).
- **Run `cd analysis && node validate.mjs` before committing any entry change** (it also gates the Netlify build).
- **D19**: no effort budget — this brief bounds the scope; spend what it needs.

## Workstream A — Expansion batch 2 (D18, pre-decided; sign-off on the final list at run time)

**convection-cells (Rayleigh–Bénard), chemical-oscillators (BZ), turbulent-flows, firms** (+ optionally one queue giant, e.g. plate-tectonics). This batch is the designed test of both standing hypotheses:
1. Does info_processing ↔ adaptive_capacity (r=0.957 at n=15) finally dissociate? Chemical oscillators are the predicted breaker.
2. Does modularity ↔ self_organization stay negative once physical-chemical entries exist? That category row is currently EMPTY — this batch fills it.

Process: author the batch hints file (`.claude/workflows/batches/batch-2-v0.3.json`, follow batch-1's format and provenance-carrying density), get Nick's sign-off on the list, run `entry-pipeline.js` with `args: {batchFile, date, researchDir: 'research\\v0.3\\expansion'}`, triage, promote, re-run analysis at n≈19-20, update findings.md hypothesis verdicts. Watch for: Φm mass-normalization on turbulent-flows (the parked question's next test — disclose, don't force); the criticality anchor's new boundary rules apply hard to BZ/convection (genuine event statistics vs. oscillation ≠ criticality).

## Workstream B — Dream-headline analysis (feeds the open question)

With n≈20 after batch 2, run a dedicated analysis pass on the four candidates in decisions.md's open questions: closure-law exceptions (hunt for a physical system with a non-closed alphabet in the roster candidates), PC1 stability at n=20 (extend robustness.mjs), the info≡adaptivity identity (per-entry residuals — who's closest to breaking it?), composition non-monotonicity (systematize: all parent/child column pairs, count inversions). Output: a findings.md section that lets Nick pick the headline — or shows the data picked it.

## Workstream C — Small standing items

- IRR follow-ups: re-run the blind study's 3 low-agreement columns (criticality, tipping_transitions, emergence) against the NEW boundary-clarified anchors to measure whether tightening actually raised agreement (same design, same 5 entries, fresh raters).
- The emergence stars-2-vs-3 open calibration question (anchor file) — revisit only if a batch-2 verifier or the re-run IRR gives new signal.
- Broido & Clauset per-snapshot classification (the-internet flag): their replication repo (github.com/adbroido/SFAnalysis) might settle Weakest-vs-Strong per snapshot; evaluate whether a code repo is citable evidence first.
- global-economy: upgrade the World Bank/IMF secondary-aggregation figures to primary reads (direct API/CSV pull — the flags block lists them).

## Deliberately out of scope

Public launch (D17: manual gate), schema changes (frozen), biological systems (D2), the license (decided: CC BY 4.0 at launch, D16).
