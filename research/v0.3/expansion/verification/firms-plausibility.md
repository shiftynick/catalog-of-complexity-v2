# Firms — plausibility check (v0.3)

Adversarial re-derivation pass: arithmetic, unit conversions, timescale nesting,
hierarchy_depth vs. component_ontology, evidence_status/confidence combinations
against panel-spec.yaml filling_rules.

## 1. Cross-file numerosity reuse — VERIFIED, no transcription error

firms.yaml's numerosity/instance_population figures (~5.5e6 US employer firms;
~2.1e7 total US entities incl. nonemployer; ~3-4e8 globally, disputed) were
diffed against global-economy.yaml lines 144-145 and 191 (the row firms.yaml
claims to reuse verbatim). Confirmed identical. No drift.

## 2. Axtell alpha/slope relationship — re-derivation attempted, resolved as pre-verified upstream

firms.yaml states: "OLS log-log regression slope = -2.059 ... => Pareto tail
exponent alpha (employee-count) = 1.059." On first pass this reads as an
arithmetic error — the standard CCDF-slope convention (P(size>s) ~ s^-alpha,
slope of log(rank/N) vs log(size) = -alpha) would make slope and alpha equal
in magnitude, not related by slope = -(alpha+1) or similar. Re-derivation:
1.059 != |-2.059|, and no simple published transform (1/x, x-1, 2x) connects
0.994 (receipts, "essentially exactly alpha=1") to a slope of comparable
magnitude without knowing Axtell's specific regression form.

Traced to research/v0.2-sweep/expansion/global-economy-sources.md line 227-229
and its verification file (v0.2-sweep/expansion/verification/global-economy-citation.md
line 26-30), which quote Axtell's own paper text directly: "slope of [-]2.059
(SE = 0.054; adjusted R2 = 0.992), meaning that [alpha =] 1.059" — this exact
slope->alpha mapping is Axtell's own reported figure (primary-read, PASS-verified
at v0.2), not a derivation performed by this project. It is almost certainly an
artifact of Axtell's specific regression specification (likely a two-parameter
rank-size fit where the fitted slope isn't the bare Pareto exponent) rather than
a project error. Reused verbatim per firms.yaml's own note — correctly not
re-derived here.
**Verdict: not a defect in firms.yaml.** Flagged as a NOTE only, recommending
the entry (or the anchor) eventually gloss *why* slope and alpha diverge by
roughly a factor of ~2, since a reader re-deriving from the stated slope alone
would (as I did) suspect an error. This is a documentation clarity note, not a
correctness finding — the underlying number is a verbatim primary-source quote,
already PASS-verified at v0.2.

## 3. hierarchy_depth — INTERNAL INCONSISTENCY FOUND (fix)

Value: "3-5 (typical): individual employee (atom) -> team/department (1) ->
business unit/division (2) -> firm-level management (3) -> (for multinationals)
corporate parent (4)."

Re-derivation: the enumerated level list runs atom, 1, 2, 3, 4 — i.e. a MAXIMUM
of 4 levels above the atom for the multinational case explicitly described in
the enumeration. The stated range "3-5" is not supported by the list actually
given: nothing in the enumeration reaches a 5th level. Either (a) the range
should read "3-4" to match the enumeration, or (b) a 5th level (e.g., a holding
company / group level above "corporate parent," or splitting "team" from
"department") is intended but was never written into the list.
This is exactly the kind of hierarchy_depth commensurability problem the
column's own panel-spec note flags as "HIGH commensurability risk." Does not
rise to blocker (no double-counting of a component as both a part AND a level —
component_ontology's "internal teams / routines" part type is a legitimate
coarser aggregate of the finer team/business-unit/management breakdown given
here, not a duplicate entity), but the stated numeric range and the worked
enumeration disagree and should be reconciled before verified status.

## 4. characteristic_timescales — order-of-magnitude spot checks

- "annual reporting / growth-rate cycle ~3e7 s (one year)": 1 year = 3.156e7 s.
  Correct order of magnitude, matches Stanley et al.'s annual measurand. OK.
- "young-firm survival window ~1e8 s (a few years)": 1e8 s / 3.156e7 s/yr ≈
  3.17 years — consistent with "a few years." OK.
- "daily operational cycle ~1e5 s (a business day)": a literal business day
  (e.g., 8-9 working hours) is ~2.9e4-3.2e4 s, which rounds to the 1e4-1e5
  boundary — closer to 3e4 than 1e5. 1e5 s (~27.8 hours) is closer to one full
  CALENDAR day (86,400 s) than to a working shift. Minor mismatch between the
  stated order of magnitude and the "business day" label; the qualitative
  point (daily operational cycle) is sound regardless. NOTE severity — a
  labeling/OOM-rounding nit, not a substantive error.

## 5. numerosity per-firm employee-count arithmetic — re-derived, correct

Note claims: "mean ~20 employees/firm is plausible given N=5.5e6 firms against
~1.1e8 total 1997 private employment." Re-derivation: 1.1e8 / 5.5e6 = 20.0
exactly. Arithmetic is correct, and the entry itself already flags this as an
unconfirmed-division, honestly labeled (not stated as measured). No issue.

## 6. degree_distribution (Newman 2003 board-interlock) — internally consistent

n=7,673 directors, mean degree z=14.44, clustering C=0.59 (network) / 0.88
(one-mode projection), assortativity r=+0.276. These are transcribed figures
(not derived here), match research/v0.3/expansion/firms-sources.md's citation
of the same Phase-1 transcription. No arithmetic to re-derive (no
distribution-fit exponent is claimed, correctly, per the entry's own caveat).
No issue.

## 7. extreme_event_statistics — measurand_type field vs. mixed value content (note)

The column declares a single measurand_type: static-cross-sectional, but the
value text bundles TWO claims: (a) the Zipf/Pareto rank-size claim (genuinely
static-cross-sectional) and (b) the Stanley et al. growth-rate scaling claim,
which research/v0.3/expansion/firms-sources.md itself describes as
"cross-sectional-conditional-on-size" rather than a pure rank-size structure —
arguably a distinct measurand character bundled under one measurand_type tag.
Not an arithmetic error and not a fabrication; flagged as a NOTE for the
consistency checker's attention (measurand-required / one measurand_type field
covering two distinct measurands), not a plausibility blocker.

## 8. evidence_status / confidence combinations — checked against panel-spec vocabulary

All evidence_status values used (measured, measured-untested, measured-disputed,
derived[implied but not labeled], qualitative, unknown) are within the
panel-spec vocabulary (lines 29-35). Spot-checked pairings:
- extreme_event_statistics: measured-untested + confidence medium — correct
  per filling_rules.power-law-rigor (OLS-only, no CSN retest -> defaults to
  measured-untested). Consistent.
- numerosity: measured-disputed + confidence medium — appropriate given the
  explicit "3-4e8 globally, disputed" component; the US figure alone would
  support "measured," but the column bundles the disputed global figure too,
  so measured-disputed is the more conservative and correct choice for the
  whole value string. Consistent.
- characteristic_timescales survival-window row: evidence_status: unknown
  despite a numeric figure (42-50%) being stated in the value/note text. This
  is DELIBERATE and correctly applied per the entry's own reasoning (HTTP 403
  blocked all bls.gov fetches; the figure is search-snippet only, not
  page-verified) — this is exactly what "unknown" is for per no-guessing:
  the qualitative pattern is asserted, the quantitative figure is honestly not
  vouched for. Correct, not an inconsistency.
- No instance found of "measured" paired with a missing source, or "derived"
  paired with a missing method — no violation located.

## 9. No double-counting check (component_ontology vs. hierarchy_depth vs. numerosity)

Numerosity counts firms themselves (the class population), not internal
components — no overlap with component_ontology's internal parts list.
component_ontology's three part types (employees/managers; internal
teams/routines; capital assets) are disjoint categories, not nested
double-counts of each other. hierarchy_depth's enumerated levels are a finer
decomposition of the "internal teams/routines" component_ontology row, which
is legitimate elaboration, not double-counting the same entity as both a part
and a level. Only issue located is the 3-5 vs. enumerated-max-4 mismatch
already flagged in section 3.

## Summary of findings

One fix-severity internal inconsistency (hierarchy_depth range vs. its own
worked enumeration), two note-severity documentation-clarity items (the
Axtell slope/alpha relationship is unexplained though correctly sourced; the
"business day" timescale label runs ~3x below the stated 1e5 s order of
magnitude), and one note-severity structural observation (extreme_event_statistics
bundles two measurands under one measurand_type tag, better suited to the
consistency checker). No blockers: no fabricated values, no unit errors, no
arithmetic errors in the entry's own derivations (the two re-derivable
arithmetic claims — the ~20 employees/firm division and the ~3.17-year
survival-window conversion — both check out exactly), and all cross-file
numerosity figures reused from global-economy.yaml were verified identical
with no transcription drift.
