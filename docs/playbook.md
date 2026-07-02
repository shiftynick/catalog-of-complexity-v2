# Per-Entry Research Playbook (v1 — PROVEN)

> **Status (2026-07-02):** Battle-tested by hand on tropical-cyclones + financial-markets (Phase 3), then encoded and run at scale on the remaining 8 pilot classes (Phase 4) as the workflow now saved at [.claude/workflows/entry-pipeline.js](../.claude/workflows/entry-pipeline.js) (sweep → draft → 4 adversarial verifiers per entry → cross-entry audit; structured flags; fixer agents; orchestrator triage). To reuse: edit the workflow's hardcoded CLASSES list for the next batch (parameterizing via args is a known TODO). Two additions the pilot proved essential beyond the steps below: a **cross-entry commensurability audit** after all entries land, and **targeted primary-reads** to settle any entry-vs-anchor conflicts (a primary read once corrected the ANCHOR, not the entry — verify in both directions).

To be battle-tested by hand on 2–3 pilot entries (Phase 3) before any automation (Phase 4, decision D8). Steps that survive contact with reality get encoded as a single agent workflow — research → draft → verify → flag report. No queues, no dashboards, no infrastructure beyond that (dragon #1).

## Steps

**1. Scoping note.** Define the system boundary, granularity, and chosen exemplar(s); state explicitly what is inside and outside the system. One paragraph, written before any research. Most catalog quality failures are scoping failures.

**2. Source sweep.** Build the entry's source list *before* filling values: the canonical review paper(s), the standard textbook treatment, and the seminal complexity-literature papers for this system. Prefer reviews over primary papers for values; prefer primary papers for provenance of famous numbers.

**3. Panel fill.** Column by column against `panel-spec.yaml`:
- `quantitative` → find a published value; record value, unit, method, citation, confidence.
- `rubric` → score against the anchors; write the justification citing system-specific evidence.
- Nothing found → `unknown` with a note. Never interpolate, never guess.

**4. Adversarial verification** (independent agents, each prompted to refute):
- **Citation check** — does the cited source actually state the value/claim?
- **Plausibility check** — units, orders of magnitude, internal consistency.
- **Consistency check** — rubric scores vs. anchors and vs. all previously accepted entries (the commensurability enforcer).
- **Coverage check** — what's missing that the literature could have provided?

**5. Flag triage.** Every flag goes to Nick with the verifier's note and a proposed resolution. Unflagged entries proceed without human review (decision D10).

**6. Status bump.** `draft` → `verified` (all checks pass or flags resolved) → `published` (at/after public launch).

## Automation shape (Phase 4)

One Claude Code workflow per entry: fan-out research agents per column group (A–F) → draft assembly → the four verifiers in parallel → flag report as the workflow's return value. Entries land as git diffs for review. That's the whole pipeline; anything more must be justified by a bottleneck actually observed.
