# Next-Session Brief (v0.3 → v0.4)

Written 2026-07-16 at the close of the v0.3 session. **The previous brief (v0.2 → v0.3) was
executed in full this day** — all three workstreams: expansion batch 2 (n=20, physical-chemical
row filled), the dream-headline analysis, and all Workstream C standing items (IRR re-run,
Broido/SFAnalysis resolution, global-economy primary upgrades); see the commit run starting at
`110dfa6` and [docs/findings.md](findings.md)'s n=20 + dream-headline + IRR-re-run sections.
**Read first:** [CLAUDE.md](../CLAUDE.md), [docs/decisions.md](decisions.md) (D1–D20 + open
questions), [docs/findings.md](findings.md), and
[research/v0.3/phenomena-registry/FINDINGS.md](../research/v0.3/phenomena-registry/FINDINGS.md)
(batch-2 resolution section — all four pre-registered tests resolved, four new ones registered).
Orchestrate per the efficient-fable skill.

## Constraints (non-negotiable, unchanged)

- Schema stays FROZEN (v1.0); anchor `boundary_clarifications` are the legal evolution channel.
- Nothing goes public — D17: the Phase 6 gate is manual.
- Provenance history in entries is append-only.
- All filling rules apply; verifier findings overrule drafts AND anchors.
- **Run `cd analysis && node validate.mjs` before committing any entry change.**
- D19: no effort budget — this brief bounds the scope.

## Decisions Nick needs to make (blockers for their workstreams, not for the session)

1. **The dream headline** — the data now lean composition non-monotonicity ("the parts are
   spikier than the wholes"; 36/195 inversions, sharp-dynamics concentrated) with the
   alphabet-closure law as second act; findings.md's dream-headline section has the full
   ranking. Nick picks, or defers again.
2. **Registry promotion (D20b gate)** — the phenomena taxonomy survived batch 2 intact (18 new
   classifications, zero vocabulary failures, 4/4 pre-registered tests resolved). If Nick
   judges it stable, a D21 could promote the typed fields (novelty_kind, onset, persistence,
   effective_theory) into entries' emergent_phenomena blocks. If not, the registry stays a
   research layer for another batch.
3. **Batch 3 target.** Candidates, in order of what the standing tests want: **granular media**
   (the weak entity-closure law's physical-side probe + a queue-adjacent physical-chemical
   giant), **plate-tectonics** (bistable-engine storage probe + oldest queue giant), **supply
   chains / software ecosystems** (modularity↔self_organization breakers), a
   bureaucratic-systems-style entry (the info-without-adaptation pole; roster-fame check
   needed — "legal systems" is the closest famous candidate).

## Workstream A — Expansion batch 3 (once Nick picks; default: granular-media, plate-tectonics, supply-chains, legal-systems)

Same pipeline (entry-pipeline.js v2, batch file in .claude/workflows/batches/). Hints must
carry: the four NEW pre-registered registry tests (FINDINGS.md 2026-07-16 section), the weak
entity-closure probes, the bistable-engine storage prediction, and per-entry Φm guidance
(disclosure convention now has two worked precedents: the-internet unknown, turbulent-flows
per-flow range).

## Workstream B — Anchor maintenance pass (earned, not speculative)

The IRR re-run earned two specific anchor jobs (both via boundary_clarifications, the legal
channel): (1) **emergence needs a worked-contrast pair or hard boundary rules at the 2/3
boundary** — the only re-run column that didn't improve; the re-run's results.md has the
specifics. (2) The cross-entry audit suggested **chemical-oscillators as the first worked floor
anchor (0) for modularity and robustness_resilience**. Also: the audit's note-level wording
cleanup (several batch-2 entries cite "the tropical-cyclones anchor" for columns where the real
precedent is the sibling entry's score, not a schema anchor) — one consistency subagent pass.

## Workstream C — Small standing items

- **Stale cross-references**: tropical-cyclones.yaml line ~42 and planetary-climate.yaml lines
  ~82-83 still carry "weather-systems unresolved" comments (resolved since batch 1);
  stars.yaml/tropical-cyclones.yaml still say "deferred to whoever drafts convection-cells" —
  convection-cells.yaml now exists and resolved the merge/split question (affirmed non-merge).
  One consistency pass, low stakes.
- **Primary-read debt, highest value first**: Lemoult 2016 / Sano & Tamai 2016 (unblocks
  turbulent-flows criticality 2→3 per its own fix_log), Sugiyama 2008 (road-traffic's emergence
  core, open-access NJP — retry the fetch), Roux/Simoyi/Swinney 1983 (BZ chaos), Stanley et al.
  1996 beta exponent (firms), Chandrasekhar 1961 Ra_c (convection).
- **world-wide-web.yaml component_ontology warning** (validator: `interchangeable:
  'out-of-scope(human)'` is not yes/no) — one-line conformance fix, plus the 3 other warnings
  in the validator output.

## Deliberately out of scope

Public launch (D17), schema changes (frozen; boundary_clarifications only), biological systems
(D2), Φm convention (parked — resolved-by-disclosure precedent now exists).
