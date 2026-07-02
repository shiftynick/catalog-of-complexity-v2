# world-wide-web.yaml — flag-fixer log

by: workflow-agent (flag-fixer), 2026-07-02
input: 4 adversarial verifier reports (citation, plausibility, consistency, coverage) — 5 actionable (fix-severity) flags, 6 note-severity flags, 0 blocker-severity flags.
output: entry updated in place (`data/classes/world-wide-web.yaml`); provenance blocks appended only (verification, flags, fix_log), never rewritten. Validator re-run to zero errors on this entry.

## Applied (fix-severity)

1. **[FIX/citation] sources.kleinberg1999 — corrected dataset-scale claim.**
   The citation string claimed a "~2,000-page base set / ~20,000-page
   neighborhood experimental scale confirmed at this tier," attributed to a
   snippet-verified WebFetch pass. Re-fetched the Cornell-hosted PDF
   (cs.cornell.edu/home/kleinber/auth.pdf) and this time extracted it with
   `pdftotext -layout` (the project's established technique for PDFs that
   WebFetch garbles) for a genuine primary read. Confirmed the flag's finding
   exactly: the paper states root set parameter t "typically set to about
   200" pages, and expanded base set S "generally in the range 1000-5000"
   pages (exact quotes captured in the corrected citation string). No
   "2,000" or "20,000" figure of any kind appears anywhere in the primary
   text. Rewrote the citation string with the correct figures and exact
   quotes, and upgraded its read-status annotation from snippet-verified to
   primary-read. No scored attribute value changed — the flag itself
   confirmed modularity, information_processing, and emergence cite this
   source only for the qualitative HITS-algorithm contribution, not the
   retracted number.

2. **[FIX/plausibility] component_ontology.parts (pages / documents) — widened count_oom floor.**
   The stated range "~1e8-1e11" excluded its own cited supporting datum (the
   1999 nd.edu crawl, 269,504 pages ~= 2.7e5) by three orders of magnitude.
   Widened the floor to ~1e5 so the range now actually bounds all three of
   its own cited data points (2.7e5 / 2.04e8 / 3.98e9), and added a one-line
   note recording the correction and its basis.

3. **[FIX/consistency] interaction_ontology — justified the mechanism-vs-outcome split.**
   filling_rules.interaction-typing requires individuation by mechanism/
   carrier, not outcome, and its own worked example warns against exactly
   the kind of split the entry makes between "HTTP retrieval / navigation"
   and "search-driven navigation" (both share HTTP as their transport
   carrier). Added an explicit paragraph to the justification stating why
   the two remain separate types on mechanism grounds: direct navigation is
   a two-participant channel (retrieving agent <-> page via an already-known
   URL/hyperlink), while search-driven navigation is a three-participant,
   index-mediated discovery channel (user -> search index -> ranked results
   -> page) with a distinct causal step (index-side HITS/PageRank-style
   computation over link topology) absent from direct navigation. This is
   the mechanism distinction the rule requires, not a same-mechanism/
   different-outcome split like the rule's own buy/sell counter-example.
   type_count=4 and alphabet_closure=constrained are unchanged; only the
   justification text was extended.

4. **[FIX/coverage] characteristic_timescales — page-load round-trip upgraded with a citable source.**
   Searched HTTP Archive / Google CrUX "State of the Web" reporting per the
   flag's suggestion. Located and snippet-verified (via WebFetch) the 2025
   Web Almanac Performance chapter (Jariyal, Rasam, Humaira & Grogg;
   almanac.httparchive.org/en/2025/performance): CrUX real-user field data
   show 74% of desktop pages and 62% of mobile pages achieve "good" Largest
   Contentful Paint (LCP < 2.5 s) as of the 2025 crawl. Upgraded the row from
   evidence_status: qualitative / [unverified — model knowledge] to
   evidence_status: measured, confidence: medium, added a new source key
   `webalmanac2025perf`, and rewrote the value to reflect what the source
   actually supports: an order-of-magnitude (~1e0 s) claim anchored to the
   2.5s LCP pass-rate threshold, not a tighter point-estimate (the fetched
   passage does not state a direct median/percentile timing figure in
   seconds — checked explicitly and confirmed absent).

5. **[FIX/coverage] characteristic_timescales — link-rot half-life: sources chased, confirmed still unknown.**
   Searched the academic link-rot/reference-rot literature per the flag's
   suggestion, specifically SalahEldeen & Nelson 2013 ("Losing My
   Revolution") and Klein et al. 2014 ("Scholarly Context Not Found," PLOS
   ONE). Primary-read SalahEldeen & Nelson (arxiv.org/abs/1209.3026, PDF
   fetched and extracted via `pdftotext -layout`; grepped for "half-life" —
   zero hits) and confirmed via search that Klein et al. report link-rot
   PREVALENCE (13-22% of references affected), not a half-life. SalahEldeen
   & Nelson report a piecewise empirical decay curve instead of a half-life
   (~11% of shared resources lost by year 1, then ~0.02%/day thereafter;
   27% lost / 41% archived by 2.5 years) — deriving a half-life from this
   non-exponential curve ourselves would not be an honest evidence_status:
   derived value, so it was not attempted. A related, real half-life figure
   was located via a secondary PMC citation (Hennessey & Ge 2013, BMC
   Bioinformatics, reportedly median URL life ~9.3 years) but the primary
   paper (bmcbioinformatics.biomedcentral.com / link.springer.com) redirected
   to an authentication wall and could not be fetched or independently
   verified this session. Per the no-fabrication rule, this was NOT entered
   as a value — row remains evidence_status: unknown. The row's note was
   expanded to record exactly which sources were chased and rejected (and
   why), and the Hennessey & Ge lead is carried into "Unresolved" below and
   into provenance.flags for a future pass with paywall access.

## Recorded, not acted on (note-severity flags)

All 6 note-severity flags were reviewed and recorded verbatim (tagged by
originating check, dated 2026-07-02) in `provenance.flags`, appended after
the drafting agent's original flags list. No entry values were changed for
these, per each note's own "no action needed" / "candidate for a future
pass" framing:

- plausibility / characteristic_timescales — crawl-to-crawl growth row and
  system lifetime row both carry ~1e9 s and are conceptually redundant under
  different names (the crawl-to-crawl row's own text already discloses this
  honestly). Left as-is; a merge/relabel decision is better made by the
  entry's maintainers or a future targeted pass than unilaterally by the
  flag-fixer.
- consistency / memory_hysteresis — missing explicit cross-reference to the
  feedback column's "preferential attachment" loop, despite consistent
  application of the mechanism across both columns.
- consistency / spatial_extent — asymmetry with the-internet.yaml's own
  numeric (not not-applicable) spatial_extent verdict, defensible but not
  explicitly reconciled in-column.
- coverage / temporal_correlation / variation_selection — missing explicit
  top-level evidence_status field, inconsistent with sibling
  unknown-valued columns in the same entry.
- coverage / extreme_event_statistics — Adamic & Huberman 2002 ("Zipf's law
  and the Internet") never located or cited as a considered-and-rejected
  static-cross-sectional candidate.
- coverage / (general — sweep/entry fidelity) — no orphaned sweep-recovered
  values found; all 30 columns present; relations reciprocate cleanly; all
  15 rubric/hybrid scores anchor-consistent. Explicitly "no action needed —
  recorded for the record."

## Unresolved (flagged for the orchestrator)

- **Hennessey & Ge 2013 half-life figure (~9.3-year median URL life) could
  not be verified this session.** Located via a secondary PMC citation
  ("Reference Hygiene and Death on the Internet," PMC8896816) but the
  primary source (BMC Bioinformatics 14(S14):S5, via biomedcentral.com and
  link.springer.com) redirected to an authentication/paywall page both
  times it was fetched. This is a real, specific, citable-looking figure
  that would upgrade `characteristic_timescales`'s link-rot row from
  unknown to measured if independently confirmed — recommend a future pass
  with institutional/library access attempt a primary or snippet-verified
  read of Hennessey & Ge 2013 directly (not just the PMC review citing it)
  before entering any number. Not entered this session; row remains
  evidence_status: unknown, which is legal per filling_rules.no-guessing.
- No other flags required cross-entry judgment, a source that could not be
  reached in a way that blocked a fix outright, or had genuinely
  conflicting guidance between flags — all remaining actionable flags were
  applied; all note-severity flags were recorded as informational.
- No reciprocity error implicating an existing entry (e.g. the-internet.yaml)
  was found — the relations.part_of/contains edge between world-wide-web
  and the-internet was already confirmed clean by the drafting pass and
  reconfirmed clean by the validator run below.

## Validator status

`cd analysis && node validate.mjs` — world-wide-web.yaml: **0 errors, 1
warning, 0 info**. The single warning
(`attributes.component_ontology.parts[3] interchangeable='out-of-scope(human)'
is not yes/no/boolean`) is a pre-existing, deliberate convention matching
the-internet.yaml's identical treatment of its own human-population part
type (which carries the same warning) — not a defect introduced or left
unfixed by this pass, and not in scope for the flag-fixer's mandate (no flag
raised it). Full-catalog summary after fixes: 15 entries, 0 errors, 4
warnings (all pre-existing, in other entries too: earthquake-fault-systems,
river-networks, the-internet — same free-text-`interchangeable` pattern),
16 info lines (all pre-existing roster-expansion-queue / unused-source
notices in other entries, none touched by this pass).
