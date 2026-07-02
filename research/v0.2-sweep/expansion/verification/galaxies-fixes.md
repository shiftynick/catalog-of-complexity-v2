# galaxies.yaml — flag-fixer log

by: workflow-agent (flag-fixer), 2026-07-02
input: 4 adversarial verifier reports (citation, plausibility, consistency, coverage) — 5 actionable (fix-severity) flags, 10 note-severity flags, 0 blocker-severity flags.
output: entry updated in place (`data/classes/galaxies.yaml`); provenance blocks appended only (verification, flags, fix_log), never rewritten. Validator re-run to zero errors on this entry.

## Applied (fix-severity)

1. **[FIX/citation] spatial_extent — Milky Way thin-disk thickness.**
   Entry stated "~400-500 pc"; re-fetched the cited Wikipedia "Milky Way" page
   this session via WebFetch and confirmed the infobox currently reads
   "Thickness of thin disk: 220-450 pc (718-1,470 ly)" verbatim. Corrected
   `spatial_extent.detail.milky_way_disk_diameter` to "~220-450 pc" and updated
   the `wikipedia-mw-structure` source annotation to record the re-fetch and
   correction. The order-of-magnitude `spatial_extent` value (1e21 m) is
   unaffected — this was a buried sub-detail, not the primary datum.

2. **[FIX/citation] spatial_extent — Andromeda ~67 kpc figure mislabeled as disk.**
   Entry described the ~67 kpc / 220,000 ly figure as "for the extended disk
   on some conventions." Re-fetched the cited Wikipedia "Andromeda Galaxy"
   page this session via WebFetch and confirmed the figure is explicitly
   attributed to the diffuse **stellar halo**, not the disk: "This diffuse
   halo extends outwards away from Andromeda's main disc with the diameter of
   67.45 kiloparsecs." Relabeled `spatial_extent.detail.andromeda_disk_diameter`
   to attribute the figure correctly to the halo and retained it only as a
   halo-scale comparison point, not an alternative disk-diameter convention.
   Updated the `wikipedia-m31-structure` source annotation accordingly. The
   numeric value itself was already correct — only the disk/halo label was
   wrong.

3. **[FIX/plausibility] [FIX/consistency] chaos_sensitivity rescored 2 -> 3.**
   Both the plausibility and consistency verifiers independently flagged the
   same defect: the draft's own justification text (orbit-level N-body chaos
   described as a "textbook source of exponential sensitivity" and "a
   standard feature of galactic-dynamics modeling," with NO contestation
   described) matches the chaos_sensitivity anchor's level-3 definition
   ("established for a well-accepted model... domain experts broadly accept
   the system is chaotic... but a robust, operationally validated real-world
   predictability horizon has not been established") far better than
   level-2's definition, which specifically requires "mixed, contested, or
   drawn from a small/non-replicated literature" reflecting "genuine
   scientific uncertainty, not merely we didn't check." The draft's cited
   comparator (stars anchor's "contested-but-engaged 2") does not actually
   match: that anchor's 2 rests on genuinely competing findings (chaotic vs.
   stochastic-dynamo explanations for the SAME sunspot-cycle phenomenon), a
   different evidentiary situation from galaxies' "broadly accepted in
   models, unstudied at a real-world class-scale horizon" case. Rescored to
   3 and rewrote the justification to state this reasoning explicitly,
   rather than option (b) from the flags (rewriting to describe genuinely
   contested evidence, which would have required fabricating a contested
   literature that was not found this sweep). Chose the anchor-grounded
   rescore per the task's explicit instruction that "verifier findings
   overrule drafts AND anchors."

4. **[FIX/coverage] energy_rate_density — undisclosed luminosity discrepancy.**
   The sweep report (`research/v0.2-sweep/expansion/galaxies-sources.md`,
   lines 169-178) explicitly surfaces a roughly order-of-magnitude
   discrepancy between a task-brief candidate Milky Way bolometric luminosity
   (~5e36 W) and the secondary-sourced band-dependent luminosity range
   (~4-8x10^10 Lsun, implying ~1.5-3x10^37 W bolometric), and explicitly
   instructs the drafting agent to "flag this discrepancy... rather than
   resolving it." This thread was dropped from the drafted entry. Added one
   note to `energy_rate_density.method` recording the ~5e36 W vs.
   ~1.5-3e37 W (roughly 3-6x) tension and explicitly declining to reconcile
   it, mirroring how the entry already handles its two non-reconciled "age"
   measurands under `characteristic_timescales`. The primary scored value
   (Chaisson's directly-tabulated Phi_m = 0.5, evidence_status: measured,
   confidence: high) is unaffected — it is not derived from either
   luminosity figure.

5. **[NOTE-driven but treated as low-risk fix] degree_distribution — missing evidence_status.**
   The consistency verifier's suggested fix ("add evidence_status:
   not-applicable... river-networks.yaml demonstrates the correct fix") was
   attempted first, but the validator rejected it: `'not-applicable'` is not
   a legal value in `schema/panel-spec.yaml`'s `meta.evidence_status` enum
   (legal set: measured / measured-untested / measured-disputed / derived /
   qualitative / unknown). Re-inspected `river-networks.yaml` directly and
   found its OWN provenance log documents hitting this exact validator
   rejection previously and reverting to a different convention: the
   `evidence_status` field is **omitted entirely** for not-applicable
   quantitative columns, with the epistemic status carried by
   `value: not-applicable` plus a note instead (matching stars.yaml's and
   tropical-cyclones.yaml's own not-applicable degree_distribution blocks).
   The verifier's cited precedent was stale relative to river-networks'
   current, validator-passing state. Corrected `galaxies.yaml`'s
   `degree_distribution` to the omit-and-note convention instead, with an
   inline note documenting the correction and why. See "Unresolved" below —
   flagging this stale verifier guidance for the orchestrator's awareness,
   though the entry itself is fixed and validator-clean.

## Applied (small consistency/coverage completeness fixes, folded in alongside the above)

6. **temporal_correlation — added candidate measurand.**
   Per the coverage verifier's note (not fix-severity, but a one-line,
   zero-risk completeness improvement matching the entry's own established
   practice on `extreme_event_statistics`), added
   `measurand: "no established measurand identified this sweep (candidates
   not surveyed, e.g. star-formation-rate history or rotation-curve/kinematic
   residual time series)"` for consistency with planetary-climate.yaml's
   parallel unknown-`temporal_correlation` treatment (which names a
   candidate measurand even while declining to enter a value).

## Recorded, not acted on (note-severity flags)

All 10 note-severity flags were reviewed and recorded verbatim (tagged by
originating check) in `provenance.flags`, appended after the drafting
agent's original flags list. No entry values were changed for these, per
each note's own "no action required" / "low priority" guidance:

- citation / fractal_dimension_spatial — A&A 2020 fetch re-attempted and
  reconfirmed still HTTP 403 this session (independently reproduced).
- plausibility / energy_rate_density — L/M cross-check re-derivation shows a
  real 2.5-6x spread, same decade but not a tight match.
- plausibility / numerosity — the "~1e11 stars per L* galaxy" figure has no
  citation independent of the Milky Way-specific reuse.
- plausibility / spatial_extent — Milky Way's own D25 diameter sits at the
  1e20/1e21 rounding boundary.
- consistency / component_ontology — dual ontology is structurally sound but
  numerically one-sided (continuum part type's count_oom is unknown).
- coverage / extreme_event_statistics — no measurand_type field on the
  unknown value, but matches world-wide-web.yaml's identical practice.
- coverage / relations — docs/roster.md is stale relative to this
  not-yet-promoted draft (not a defect in galaxies.yaml).
- coverage / exemplars — 3 of 4 exemplars never cited via a scored
  `level: exemplar(<id>)` field, but matches planetary-climate.yaml's
  identical treatment of its own comparative exemplars.

(Two more note flags — citation/fractal_dimension_spatial and
consistency/degree_distribution — are covered above; the
consistency/degree_distribution note is subsumed into fix #5.)

## Unresolved (flagged for the orchestrator)

- **Stale verifier guidance on `degree_distribution` evidence_status.** The
  consistency verifier's suggested fix cited river-networks.yaml as
  demonstrating a working `evidence_status: not-applicable` pattern. This is
  incorrect as of this session: the validator rejects that value, and
  river-networks.yaml's own provenance log shows it already discovered and
  fixed this exact problem by omitting the field. Recommend the orchestrator
  route a correction back to whatever anchor/precedent notes the verifiers
  are drawing on, so future verifier passes on other entries don't repeat
  the same stale suggested-fix. No entry-level action needed beyond what was
  already applied to galaxies.yaml.
- No other flags required cross-entry or orchestrator-level judgment, a
  source that could not be reached, or had genuinely conflicting guidance —
  all remaining flags were either applied (fix-severity) or recorded as
  informational notes (note-severity) per instructions.

## Validator status

`cd analysis && node validate.mjs` — galaxies.yaml: **0 errors, 0 warnings,
0 info** (clean). Full-catalog summary after fixes: 15 entries, 0 errors, 4
warnings (all pre-existing, in other entries: earthquake-fault-systems,
river-networks, the-internet, world-wide-web — `interchangeable` field using
free text instead of yes/no/boolean; not in scope for this task), 16 info
lines (all pre-existing roster-expansion-queue / unused-source notices in
other entries).
