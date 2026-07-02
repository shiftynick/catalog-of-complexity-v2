# global-economy.yaml — flag-fixer log

by: workflow-agent (flag-fixer), 2026-07-02
input: 4 adversarial verifier reports (citation, plausibility, consistency, coverage) — 6 actionable (fix-severity) flags, 4 note-severity flags, 0 blocker-severity flags.
output: entry updated in place (`data/classes/global-economy.yaml`); provenance blocks appended only (verification, flags, fix_log), never rewritten. Validator re-run to zero errors on this entry.

## Applied (fix-severity)

1. **[FIX/citation] extreme_event_statistics — corrected the Axtell (2001) Table 2/Table 3 conflation.**
   The claim "alpha consistently in 0.994-1.004 across all years 1988-1997
   (all-business-entities series)" conflated two different tables and
   methods. Table 2 gives alpha=0.994 (SE 0.043, firms with employees) and
   alpha=0.995 (SE 0.031, all businesses) for **1992 only**, via OLS
   regression — this is where the "0.994" figure actually comes from, but
   mislabeled as a range. Table 3 gives the actual ten-year 1988-1997
   series, computed via a **different, closed-form method** (the paper's
   eq. 4, from total firm count N and total employment A, not OLS
   regression): true printed values 1997:0.9966, 1996:0.9986, 1995:0.9983,
   1994:1.0004, 1993:1.0008, 1992:1.0009, 1991:1.0004, 1990:0.9995,
   1989:1.0006, 1988:1.0039 — true range 0.9966-1.0039. Rewrote the value
   and method fields: the 1988-1997 range now reads "0.9966-1.0039 (Table
   3, closed-form N/A estimator, eq. 4 — not OLS)," and the single-year
   1992 OLS figures are now explicitly labeled "1992 only, OLS regression
   (Table 2)" and kept separate rather than folded into the ten-year range,
   per the verifier's suggested fix exactly.

2. **[FIX/plausibility + FIX/consistency] hierarchy_depth — recounted from national economies, not firms.**
   Both the plausibility and consistency checks independently flagged the
   same defect: the method text declared firms as the level-0 atom, directly
   contradicting scoping_note and component_ontology, both of which
   explicitly and repeatedly declare national economies (not firms) as this
   entry's atomicity population, stating firms are "NOT the primary
   atomicity choice." Verified against both cited comparators
   (financial-markets.yaml: agents[atoms]->desks/firms[1]->venues[2]->
   market[3]; the-internet.yaml: AS nodes[atoms]->provider tiers[1]->
   peering fabrics/IXPs[2]->global routed graph[3]) — both count strictly
   upward from their OWN declared atom without inserting a deeper adjacent
   population as an extra level, which global-economy's firms-as-atoms
   framing broke. Rewrote the method text to count from national economies
   (atoms) -> regional trade blocs/currency areas (1, e.g. EU/Eurozone,
   NAFTA/USMCA, ASEAN, RCEP) -> integrated global system (2). **Value
   changed from 3 to 2.** No additional genuine intermediate level was
   identified to justify preserving 3, so the count was not artificially
   propped up. This is a verifier-overrules-draft rescore per the task
   brief's binding rule, not a cosmetic edit.

3. **[FIX/plausibility] characteristic_timescales — tightened the business-cycle range to match its own cited periodizations.**
   The stated "~1e8-1e9 s" range's upper bound (1e9 s = ~31.7 yr) was not
   supported by any of the three cited cycle lengths (NBER ~2-10 yr,
   Kitchin ~3-5 yr, Juglar ~7-11 yr) — the longest, Juglar's 11 yr, is only
   ~3.47e8 s, roughly 3x smaller than the stated ceiling. Re-derived the
   correct bounds from the entry's own cited figures (2 yr = 6.31e7 s, 11
   yr = 3.47e8 s) and tightened the range to "~6e7-3.5e8 s." Did not add a
   citation for a longer secular cycle concept (e.g. Kondratiev ~40-60 yr)
   since no such source was verified this session — chose the
   narrow-and-honest fix (tighten to match existing citations) over the
   speculative-and-unverified one (add an uncited longer cycle).

4. **[FIX/consistency] cascade_susceptibility — added a citation matching the column's own evidentiary bar.**
   Score 2 (matching the financial-markets/cities anchor level) was
   well-reasoned but, unlike both precedent entries (which cite
   `[sec-cftc-flashcrash]` and `[ne-blackout-2003]` respectively), carried
   no `sources:` field — weaker than the level-2 anchor's own bar ("at
   least one dedicated study models or documents cascading failure for this
   system"). Searched for a named, verifiable source documenting 2008
   cross-border financial contagion per the flag's suggested fix (candidate
   direction: a BIS/IMF-adjacent cross-border-exposure contagion study).
   Located and **snippet-verified** (existence, authorship, venue, and year
   independently confirmed via IDEAS/RePEc, Wiley Online Library, and the
   Tilburg University research portal — full text not fetched this
   session): Degryse, H., Elahi, M.A. & Penas, M.F. (2010). "Cross-Border
   Exposures and Financial Contagion." *International Review of Finance*
   10(2), 209-240. Added `sources: [degryse-elahi-penas2010]` to the
   cascade_susceptibility attribute and a full source block under the
   entry's `sources:` section, with an honest read-status annotation
   (snippet-verified, not primary-read).

5. **[FIX/coverage] sources.world-bank-gdp — documented as intentionally narrative-only rather than force-bound.**
   The world-bank-gdp source block was defined but never referenced by any
   `attributes.*.sources` list — it only backs `emergent_phenomena[0]`'s
   ("World GDP / aggregate output") order_parameter prose. Checked
   `docs/schema.md`'s worked example: `emergent_phenomena` entries never
   carry a `sources:` field in the schema's own worked example, so this
   citation structurally cannot be "bound" into that list. Checked whether
   any quantitative column could legitimately hold a world-GDP figure
   instead: `numerosity` is a count of atomic parts, not a value-flow
   aggregate (binding a GDP dollar figure there would be a category error,
   not a fix), and `energy_rate_density`'s own note already explains in
   detail why GDP cannot serve as a mass/stock denominator for that column.
   No column is a correct destination. Took the verifier's own alternative
   suggested fix instead: added an explicit `provenance.flags` entry
   (`column: sources.world-bank-gdp`) recording that this figure is
   narrative-only by design, so a future auditor does not mistake it for an
   incomplete/orphaned binding.

## Recorded, not acted on (note-severity flags)

All 4 note-severity flags were reviewed and recorded verbatim (tagged by
originating check, dated 2026-07-02) in `provenance.flags`, appended after
the drafting agent's original flags list. No entry values were changed for
these, per each note's own low-severity/cosmetic/follow-up framing:

- plausibility / component_ontology (firms.itself_complex) — slash-joined
  `"out-of-scope(human) / firms"` value is non-conformant with panel-spec's
  controlled `<catalog-entry-id> | out-of-scope(<what>) | no` format, but is
  an inherited pattern (financial-markets.yaml's "trading agents" part-type
  uses the identical notation) — flagged for a future cross-entry
  consistency pass, not unilaterally rewritten here.
- consistency / nonlinearity — cosmetic wording only ("between cities (3)
  and financial-markets/tropical-cyclones (4)" when the score equals
  cities' own value rather than sitting strictly between); reasoning and
  score are sound and unchanged. Suggested reword recorded for a future
  copy-edit pass.
- coverage / extreme_event_statistics — the temporal-event measurand
  (recession/crisis severity or frequency distributions, candidate:
  Reinhart & Rogoff) was not searched this session; already self-flagged by
  the drafter as the single most actionable follow-up item. Recorded again
  verbatim, not re-searched (a genuine future research pass, not a fixable
  citation defect).
- coverage / degree_distribution + temporal_correlation — both correctly
  left `unknown`; both have named, unsearched candidate literatures (world
  trade network degree-distribution studies; GDP Hurst-exponent /
  long-range-dependence studies) recorded as follow-up targets, not
  resolved here per no-guessing.

## Unresolved (flagged for the orchestrator)

- None. All 6 actionable (fix-severity) flags were applied without
  fabricating any value, citation, or DOI. No two flags conflicted (the
  plausibility and consistency flags on `hierarchy_depth` targeted the same
  underlying defect and were resolved together by one edit). No flag
  required a source that could not be reached in a way that blocked a fix
  outright — the one new citation added (Degryse, Elahi & Penas 2010) was
  independently confirmed to exist via multiple aggregator sources before
  being entered, and is honestly labeled snippet-verified rather than
  primary-read.
- No reciprocity error implicating an existing entry was found. This
  entry's `relations.contains: [financial-markets, cities, firms]` edges
  were re-checked against financial-markets.yaml's and cities.yaml's own
  `relations.part_of` lists (both already list `global-economy` as an
  unresolved parent, exactly as this entry's own header comments describe)
  — both reciprocate cleanly and the validator confirms 0 errors.

## Validator status

`cd analysis && node validate.mjs` — global-economy.yaml: **0 errors, 0
warnings, 2 info lines**:
- `sources.world-bank-gdp is declared but not cited from any
  attributes.*.sources list` — expected and explained (see Applied item 5
  above and the corresponding `provenance.flags` entry); the same
  info-level pattern appears for 5 other entries in the catalog
  (financial-markets, ocean-circulation x2, power-grids, river-networks,
  the-internet, tropical-cyclones) and is not a defect.
- `relations.contains -> 'firms' has no catalog entry yet (roster expansion
  queue)` — expected; `firms` is explicitly an unresolved roster-expansion
  candidate per this entry's own relations block comment, not a broken
  reference.

Full-catalog summary after fixes: 15 entries, **0 errors**, 4 warnings (all
pre-existing, in other entries, unrelated to this pass: earthquake-fault-
systems, river-networks, the-internet, world-wide-web — same free-text-
`interchangeable` pattern), 17 info lines (mostly pre-existing
roster-expansion-queue / unused-source notices in other entries, none newly
introduced by this pass beyond the expected world-bank-gdp note already
present before this pass and now explained in provenance.flags).
