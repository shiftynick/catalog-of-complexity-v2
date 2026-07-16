# Blind IRR Re-Run (v0.3) — Method Delta

## What this is

A targeted re-run of the v0.2 blind inter-rater reliability study
(`research/v0.2-sweep/validation/irr/method.md` — the full design, statistic,
and redaction rationale live there and are incorporated by reference),
restricted to the three columns whose 3-blind-rater ordinal Krippendorff's
alpha came out at or below chance in the original study, scored against the
CURRENT anchors — i.e. the versions carrying the 2026-07-02
`boundary_clarifications` blocks that were written in response to that
study's results.

## Pre-registered question

**Did the 2026-07-02 boundary clarifications raise agreement on the three
at-or-below-chance columns (original alpha-3blind: criticality -0.270,
tipping_transitions -0.032, emergence 0.000)?**

Registered before any re-run rater is spawned. Success criterion is
directional (alpha-3blind higher than the original value for each column);
no threshold is pre-committed beyond that, given n=5 entries per column.

## Design deltas from the original study

Everything not listed here is identical to the original method.

1. **Columns: 3, not 15** — `criticality`, `tipping_transitions`,
   `emergence` only.
2. **Entries: same 5** — stars, river-networks, cities, the-internet,
   languages. Held fixed deliberately: the re-run measures anchor-clarity
   change, so the entry sample is a controlled variable.
3. **Briefs: byte-identical copies of the originals** (see staleness check
   below). Also a controlled variable.
4. **Raters: 3 fresh blind rater agents, one per model tier
   (haiku / sonnet / opus)** — none has seen this repository, the original
   study, or the catalog scores. Same packet-only information diet as the
   original: redacted anchor file(s) + entry brief, nothing else.
5. **Anchors: current (post-clarification) versions**, re-redacted under the
   original protocol plus the additional rules below, because the
   2026-07-02 clarifications introduced NEW contamination the original
   redaction never had to handle: worked precedents that name the sampled
   entries WITH their catalog scores.
6. **Statistic: unchanged** — ordinal Krippendorff's alpha per column,
   computed both among the 3 blind raters (alpha-3blind, the comparison
   target) and with the catalog score added as a 4th rater. 15 cells
   (5 entries x 3 columns).

## Redaction protocol for the re-run packets

Base rule (inherited verbatim from the original study): every worked
`anchors:`-block entry whose system/exemplar matches a sampled class is
deleted in its entirety and replaced with the marker
`# [redacted for blind IRR re-run — worked example removed]`. Worked
anchors for non-sampled classes, scale text, and `does_not_count` are left
untouched. Prose mentions of a sampled class WITHOUT an attached score are
left in place (the original contamination-map.md standard).

Extension for the `boundary_clarifications` blocks (new in these anchors):
the clarifications are the very treatment being tested, so their NORMATIVE
content must reach the raters intact — but several cite sampled entries as
worked precedents with before/after catalog scores. Rule applied: preserve
every rule's full normative text; anonymize or remove only the
identity-plus-score precedent material for sampled entries; precedents
citing non-sampled classes stay as-is (consistent with the original
design, where non-sampled worked anchors were deliberately retained as
calibration context).

### Every redaction made (complete list)

`packets/anchors-redacted/criticality.yaml` (vs `schema/anchors/criticality.yaml`):

1. Worked anchor block `stars / "the Sun"` (score 2) — removed, marker left.
2. Worked anchor block `the-internet` (score 1) — removed, marker left.
3. Worked anchor block `river-networks / "Mississippi River basin"`
   (score 1, including its 0->1 rescore narrative and research-path
   reference) — removed, marker left.
4. `boundary_clarifications.events-not-structure`: "IRR precedent:
   river-networks, where blind raters split 0/1/2 by counting
   Horton/drainage scaling to different degrees" -> "IRR precedent:
   [REDACTED-ENTRY], where blind raters diverged by counting static
   structural scaling to different degrees" (entry name, the 0/1/2 score
   split, and the identifying "Horton/drainage" wording removed; the rule's
   normative point — structural scaling contributes nothing — kept intact).
5. `boundary_clarifications.events-of-the-scoped-system`: the precedent
   "cities rescored 1->0 (cross-audit, 2026-07-02)" removed and replaced
   with the bracketed note "[One additional worked precedent redacted for
   blind IRR re-run — sampled entry.]"; the tropical-cyclones precedent
   (non-sampled) kept, with its `research/v0.2-sweep/verification-debt/`
   path reference dropped (raters have no repo access; paths invite
   fishing).
6. `boundary_clarifications.mechanism-alone-caps-at-1`: the entire worked
   case "Worked case: river-networks — Rinaldo et al. (1993) ... rescored
   0 -> 1 at the v0.2 sweep ..." removed and replaced with "[Worked example
   redacted for blind IRR re-run — sampled entry.]". The
   Rinaldo/OCN/formation-dynamics detail is uniquely identifying for
   river-networks even without the name, so the whole example (not just
   the name and scores) had to go. The rule's normative content
   (mechanism-only caps at 1) and its non-sampled ordering comparison
   (earthquake-fault-systems at 2) are kept in full.
7. Header comment above `boundary_clarifications`: the reference to
   `research/v0.2-sweep/validation/irr/results.md` and the alpha value
   (-0.27) genericized to "a prior blind inter-rater reliability study"
   (results.md contains the sampled entries' blind and catalog scores;
   even a path is a leak vector if a rater is ever given file access).

Retained deliberately (prose-without-score, per the original protocol):
the `notes:` sentence on Internet AS-level degree distribution being
topology-not-events; the rule-body illustrations "rank-size across cities"
and "drainage-network Horton ratios / city-boundary dimensions" inside the
clarifications — these are normative boundary illustrations carrying no
catalog score, and stripping them would gut the clarifications under test.

`packets/anchors-redacted/tipping_transitions.yaml`:

8. Worked anchor block `river-networks / "Mississippi River basin"`
   (score 2) — removed, marker left.
9. Worked anchor block `the-internet` (score 0, the deliberate floor
   anchor) — removed, marker left.
10. `boundary_clarifications.alternative-stable-state-required`: "IRR
    precedent: the-internet, where blind raters split 0/1/2 by weighting
    such episodes differently — the catalog's 0 stands because none of
    them is a documented alternative stable regime of the scoped system"
    -> "IRR precedent: [REDACTED-ENTRY], where blind raters diverged by
    weighting such transient episodes differently — under this rule none
    of those episodes documents an alternative stable regime of the scoped
    system" (entry name, the 0/1/2 split, and — critically — the phrase
    "the catalog's 0 stands" removed; the normative conclusion kept as a
    rule statement rather than a score report).
11. Header comment above `boundary_clarifications`: results.md path and
    alpha value (-0.03) genericized as in item 7.

Retained deliberately: the rule-body illustrations "BGP route-flap storms,
flash crashes with same-day recovery, congestion episodes" (rule
alternative-stable-state-required) and "the 1986 NSFNET congestion
collapse, pre-TCP-congestion-control" (rule current-system-as-scoped).
Both are Internet-adjacent and will steer a rater scoring the-internet —
but steering via the rule's normative content is exactly the treatment
under test, and neither carries a catalog score. Flagged here for
transparency, mirroring contamination-map.md's handling of the
information_processing ERCOT/Internet notes mention. The
tropical-cyclones worked precedent in single-modeled-mechanism-is-2
(non-sampled, "= 2") kept as-is.

`packets/anchors-redacted/emergence.yaml`:

12. Worked anchor block `stars / "the Sun"` (score 2) — removed, marker
    left.
13. Worked anchor block `the-internet` (score 2) — removed, marker left.
14. Worked anchor block `languages / "English"` (score 3, including its
    CSN-2009 Zipf source line) — removed, marker left.
15. `notes:` ORCHESTRATOR ADJUDICATION passage: "sun raised 1->2 and
    english raised 2->3" genericized to "two entries' scores were each
    raised by one point ... per redaction of the specific systems and
    figures for this blind study" — reusing verbatim the genericization
    the ORIGINAL study's redacted packet already used for this exact
    passage.
16. `boundary_clarifications.effective-theory-quality-gates-3`: the worked
    case "Worked case: stars/the Sun — mean-field dynamo theory ... the
    catalog holds it at 2" removed and replaced with "[Worked example
    redacted for blind IRR re-run — sampled entry.]". As with item 6, the
    dynamo-theory detail identifies stars even unnamed, so the full
    example went, not just the name/score. The rule's normative content
    (quality of the effective theory gates the 2/3 boundary) kept in full.
17. `open_calibration_questions` block (id `stars-2-vs-3`) — removed
    ENTIRELY from the rater copy, with no marker. It reports the prior
    raters' unanimous answer (all three scored stars 3 while the catalog
    holds 2) — handing it to a fresh rater would contaminate the exact
    cell it discusses, and even an anonymized marker would tip raters that
    one of their entries is a live 2-vs-3 dispute. Its absence is recorded
    here instead.

Marker-count note: a rater can see HOW MANY worked examples were redacted
per file (3 / 2 / 3) but not which systems or scores; this matches the
original study's visible-marker convention.

## Brief staleness check (performed 2026-07-16)

The five briefs were copied byte-for-byte from
`research/v0.2-sweep/validation/irr/packets/brief-*.md`. Drift check
against the current entries:

- `git log` since 2026-07-01 on the five `data/classes/*.yaml`: only
  `cities.yaml` changed after the v0.2 sweep commit (daa5574), in commit
  110dfa6 (v0.3 expansion batch 2, 2026-07-16).
- The cities diff is confined to two `relations:` bookkeeping comments
  (part_of global-economy and contains road-traffic-systems marked
  RESOLVED). No score, justification, exemplar, scoping_note, or narrative
  change; nothing touching criticality / tipping_transitions / emergence.
- stars, river-networks, the-internet, languages: untouched since the
  sweep.

Verdict: no staleness affecting the three studied columns; briefs reused
unchanged, preserving the controlled comparison. (Note for the analysis
write-up: the three 2026-07-02 rescores mentioned in the clarifications —
cities criticality 1->0, river-networks criticality 0->1, and the
tropical-cyclones rescore — all predate the brief copies and are already
reflected in the current catalog scores that will serve as the 4th-rater
reference. The reference scores for the re-run are therefore NOT identical
to the original study's reference scores for two of the 15 cells; the
alpha-3blind comparison, which is the pre-registered target, is unaffected.)

## Packet inventory

```
research/v0.3/validation/irr-rerun/
  method.md                      (this file — NOT given to raters)
  packets/
    brief-stars.md               (byte-identical to v0.2 original)
    brief-river-networks.md      (byte-identical to v0.2 original)
    brief-cities.md              (byte-identical to v0.2 original)
    brief-the-internet.md        (byte-identical to v0.2 original)
    brief-languages.md           (byte-identical to v0.2 original)
    anchors-redacted/
      criticality.yaml
      tipping_transitions.yaml
      emergence.yaml
```

Each rater receives, per entry: the entry's brief + the three redacted
anchor files, and nothing else. Raters must not be given repository
access, the original study's files, or this method doc.
