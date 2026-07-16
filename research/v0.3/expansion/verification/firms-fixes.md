# firms.yaml — flag-fixer log

by: workflow-agent (flag-fixer), 2026-07-16
entry: data/classes/firms.yaml (status: draft)

Input: four adversarial verifier passes (citation, plausibility, consistency, coverage) — 5 actionable (fix-severity) flags, 11 notes. No blocker-severity flags were raised.

## Applied (fix-severity)

1. **[FIX/citation] degree_distribution** — Newman 2003 board-interlock figures (z=14.44, n=7,673, C=0.59/0.88, r=+0.276) could not be re-verified this pass against a fresh primary PDF read of Table II (all direct fetch attempts — arXiv, math.bme.hu, pdodds.w3.uvm.edu, cs.rice.edu, cs.cornell.edu mirrors — exceeded size caps or returned garbled text). Appended a note documenting this, the WebSearch corroboration found, and a recommendation to primary-re-read before promoting past `verified`. Value itself left unchanged (not contradicted, just not freshly confirmed).

2. **[FIX/plausibility] hierarchy_depth** — the stated range "3-5 (typical)" was inconsistent with the entry's own worked enumeration, which only reaches a 4th level (employee-atom -> team/department(1) -> business unit/division(2) -> firm-level management(3) -> corporate parent(4)). Narrowed the value to "3-4 (typical)" to match the enumeration actually given, rather than inventing an unsupported 5th tier.

3. **[FIX/consistency] criticality** — rewrote the justification. The previous text treated the firm-size Zipf rank-size distribution as "event statistics" for criticality purposes, but that same distribution is typed `measurand_type: static-cross-sectional` under `extreme_event_statistics`, and criticality's anchor `boundary_clarification` ("events-not-structure") explicitly excludes static/rank-size distributions as criticality evidence. New justification states plainly that no valid event-statistics exist at the scoped system — this is a mechanism-only claim — and tags the Bak-Sneppen-style econophysics claim `[unverified — model knowledge; no specific paper identified or cited]`. Per the anchor's mechanism-alone-caps-at-1 rule, the numeric score (1) is unchanged, as the verifier predicted.

4. **[FIX/coverage] adaptive_capacity / sources** — March & Simon (1958) and Nelson & Winter (1982) were cited inline but not registered in the entry's `sources:` block, unlike every other citation. Added `march-simon1958` and `nelson-winter1982` keys to `sources:` (both `[unverified — model knowledge, canonical]`) and added `sources: [march-simon1958, nelson-winter1982]` to the `adaptive_capacity` attribute.

5. **[FIX/coverage] extreme_event_statistics** — Gibrat (1931), the proportional-growth null model Stanley et al. (1996) test firm growth against, was surfaced by the sweep report but never integrated into the entry. Added a note explaining the Gibrat departure and a `gibrat1931` sources: entry (`[unverified — model knowledge, canonical]`), and added `gibrat1931` to the attribute's `sources:` list.

## Notes recorded (not acted on — recorded in provenance.flags per instructions)

- numerosity: Axtell Table 3 gives 19.00 employees/firm (21.8 excl. size-0) directly quotable — cheap future upgrade, no false claim made.
- extreme_event_statistics (plausibility): Axtell's slope(-2.059)->alpha(1.059) mapping looks non-standard on first derivation but is already PASS-verified primary-read Axtell text at v0.2 (research/v0.2-sweep/expansion/verification/global-economy-citation.md lines 26-30) — not a project error; a future method note would preempt reviewer confusion.
- characteristic_timescales: "daily operational cycle" ~1e5 s labeled "a business day" is closer to a calendar day than a literal working day; relabel or adjust in a future pass.
- extreme_event_statistics (measurand_type bundling): single `static-cross-sectional` tag covers both the Zipf claim and the Stanley growth-rate claim (sweep calls the latter "cross-sectional-conditional-on-size") — flagged for a future consistency/schema review.
- openness_dissipation: no literal energy-throughput figure backs the score-2 rubric judgment, unlike financial-markets' comparator citing a rough datacenter-wattage figure — future placeholder recommended.
- self_organization: the "no exchange analog re-templates the population pattern" claim (used to score firms one point above financial-markets) is a defensible but debatable judgment call — flagged for a future cross-entry audit, no change made.
- scoping_note: Coase (1937) surfaced by the sweep as relevant foundational theory, not referenced — optional future addition, backs no quantitative claim.
- component_ontology: Walmart's ~2.1e6 headcount is [unverified — model knowledge], trivially fillable from Walmart's 10-K — recommend primary-read follow-up before promoting past draft/verified.
- numerosity (derivation): per-firm employee count is derivable from global-economy-sources.md's 1997 total employment figure but was left as an open follow-up rather than computed.
- relations: global-economy.yaml's own cosmetic cleanup item (line 968-978, slash-joined "out-of-scope(human) / firms" wording) is a global-economy.yaml issue, not a firms.yaml defect — no action needed here.

All of the above were entered as items in `provenance.flags` in firms.yaml (tagged `[note/<check>]`) rather than acted on, per instructions that note-severity flags are recorded, not applied.

## Unresolved

- **numerosity (per-firm employee count / mean employees per firm)**: two separate flags (a citation note pointing to Axtell's Table 3, and a coverage note pointing to a derivable figure from global-economy-sources.md) both suggest fillable numbers, but computing or quoting either requires either (a) re-opening Axtell's Table 3 directly, which was not accessible this pass in the same way the board-interlock PDF fetches failed, or (b) pulling and dividing two figures from a different entry's source file (global-economy-sources.md) — a derivation step best done by the orchestrator/cross-entry audit rather than the flag-fixer, since it touches provenance shared with global-economy.yaml. Left as `evidence_status: unknown`/open follow-up, recorded in provenance.flags. **Reason for non-fix**: verifier flagged these as notes (not fix-severity), and both require either a fresh primary fetch or cross-entry derivation outside this fixer's remit.
- **Newman 2003 degree_distribution figures**: not independently re-confirmed via a fresh primary PDF read this pass (see Applied #1) — the citation-check flag explicitly said this "is not treated as a fail" but "falls short of a fresh primary-read confirmation." No source was fabricated or altered; the existing Phase-1 primary-read transcription stands, with the caveat appended. **Reason for non-fix**: requires a working PDF-to-text fetch route not available this session (all attempted mirrors failed); flagged for a future follow-up rather than resolved now.
- **relations / global-economy.yaml cosmetic cleanup** (line 968-978 wording, "out-of-scope(human) / firms" -> "itself_complex: firms"): this is a global-economy.yaml edit, and per task scope ("do not edit any other entry"), it is not performed here. Reported to the orchestrator as a cross-entry follow-up, not a firms.yaml defect.

## Validator

Ran `cd analysis && node validate.mjs`. Result: **firms — PASS (0 error, 0 warn, 0 info)** — clean. Full run: 20 entries, 0 errors, 4 warnings (all in other entries, pre-existing), 33 info lines (pre-existing, unrelated to firms).
