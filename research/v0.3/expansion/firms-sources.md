# Firms — quantitative source sweep (v0.3)

Scope: class entry "firms" (category: socio-economic). Exemplars — quantitative: 1997 U.S.
Census employer-firm universe (Axtell 2001); narrative: TBD by drafter (Walmart or GM,
fame-gated, pick one).

Read N:\coc\schema\panel-spec.yaml before filling columns — filling_rules quoted inline below
where load-bearing.

## 1. REUSE — already primary-read at v0.2 (do not re-research, reuse verbatim)

**Axtell, R.L. (2001). "Zipf Distribution of U.S. Firm Sizes." Science 293(5536), 1818-1820.
DOI 10.1126/science.1062081.**
Read-status: PRIMARY-READ (v0.2 sweep). Citation block: global-economy.yaml lines 793-802.
Extraction log: research/v0.2-sweep/expansion/global-economy-sources.md lines 223-257.
Verification: research/v0.2-sweep/expansion/verification/global-economy-citation.md.

Values to reuse verbatim into firms.yaml:
- Employee-based firm sizes, 1997 U.S. Census Bureau universe, N = 5,541,918 employer firms.
- OLS log-log regression slope = -2.059 (SE 0.054, adjusted R^2 = 0.992) => Pareto tail
  exponent alpha (employee-count) = 1.059.
- Receipts-based firm-size alpha = 0.994.
- All-business-entities series 1988-1997: alpha range **0.9966-1.0039** (CORRECTED range —
  use this, not the earlier 0.994-1.004 figure, which was a table/method conflation fixed at
  global-economy-citation.md line 286).
- evidence_status: measured-untested (OLS-based, pre-CSN methodology; no CSN-grade retest of
  firm sizes exists in this project's source base).
- CSN 2009's 24-dataset table RE-CONFIRMED (primary-read) to NOT include firm sizes
  (global-economy.yaml line 802) — no upgrade available from that source.
- Scope caveat, PASS-verified direct quote (global-economy-citation.md line 96): "The Zipf
  distribution may describe firm sizes in other countries as well, a conjecture..." — the
  Zipf claim is U.S.-scoped only. Recommend level tag: exemplar(us-firm-population) — Axtell
  tested only the U.S. universe; do not promote to class-general without a non-US retest.
- measurand_type: **static-cross-sectional** (rank-size law over firms at a point/period in
  time — same class as city-size Zipf; must NOT be filed as extreme_event_statistics'
  temporal-event flavor, and must NOT leak into the criticality column per soc-two-claims /
  events-not-structure).

**Newman, M.E.J. (2003). "The structure and function of complex networks." SIAM Review 45(2),
167. Table II, company-directors (board interlock) row.**
Read-status: PRIMARY-READ (Phase 1), transcribed research/phase1/quantitative-backbone.md
line 231. Values: n = 7,673 directors, mean degree z = 14.44, clustering C = 0.59 (network)
/ 0.88 (extrapolated one-mode-projection formula, per Newman's two C columns), assortativity
r = +0.276. Label precisely: this is the **board-interlock projection network**, not "the
firm network" generically — do not overstate scope to supply-chain or ownership ties, which
Newman's table does not cover.

## 2. FRESH SWEEP — new material, all WebSearch/WebFetch, no full primary read obtained

### Growth-rate scaling (Stanley et al. 1996)

**Stanley, M.H.R., Amaral, L.A.N., Buldyrev, S.V., Havlin, S., Leschhorn, H., Maass, P.,
Salinger, M.A. & Stanley, H.E. (1996). "Scaling behaviour in the growth of companies."
Nature 379, 804-806. DOI 10.1038/379804a0.**
Read-status: SNIPPET-VERIFIED (WebFetch of nature.com landing page returned citation,
dataset description, and the qualitative growth-distribution finding directly from the
article's abstract/metadata — but the numeric beta exponent was NOT visible in that fetch;
paywalled beyond abstract).
- Confirmed by direct fetch: dataset = all publicly traded U.S. manufacturing companies,
  1975-1991. Finding: for firms of similar size, annual log-growth-rate distribution has an
  **exponential (tent-shaped/Laplace) form**, not Gaussian; the spread (std dev) of that
  distribution **decreases with firm size as a power law over ~7 orders of magnitude**.
- Beta exponent value: NOT independently confirmed by primary read. A secondary WebSearch
  synthesis (not primary-read; treat as [unverified — model/search-summary, needs a real
  primary read before entry use]) reports beta = 0.20 +/- 0.03 (sales), 0.18 +/- 0.03
  (employees), 0.18 +/- 0.03 (assets), 0.18 +/- 0.03 (COGS), 0.20 +/- 0.03 (PP&E), and notes
  follow-on theoretical work (Sutton-lineage) predicting beta in [0.14, 0.20] depending on
  the average number of sub-units per firm. **Do not enter these numbers as measured without
  a primary read of the Nature paper or a reliable secondary (e.g. the Amaral Lab or
  ResearchGate PDF) confirming the exact table.**
- measurand_type: temporal-event-adjacent but really a cross-sectional-conditional-on-size
  scaling law — name the measurand explicitly if used: "annual log growth rate of sales /
  employees / assets, conditional std dev vs. firm size." Candidate for temporal_correlation
  or extreme_event_statistics column; drafter must decide which column houses it and state
  why (my read: it's a distribution-shape/scaling law, closer to a second
  extreme_event_statistics entry — the tail shape of growth rates — than to Hurst-type
  temporal_correlation, since no serial/autocorrelation claim is made here).
- evidence_status: measured-untested (candidate) pending a primary read; a CSN-grade retest
  of this specific claim was not found in this sweep.
- Related/citable secondary literature located but NOT read: PNAS 2008 "The size variance
  relationship of business firm growth rates" (pnas.org/doi/10.1073/pnas.0810478105) —
  WebFetch blocked (403); Amaral Lab publication page (amaral.northwestern.edu) — not fetched
  this pass, worth a follow-up primary read before entry finalization.

### Post-CSN retest search for firm-size power law (targeted, per brief)

No clean CSN-grade (KS-test + likelihood-ratio) retest of firm-SIZE distributions was
confirmed via primary or snippet read this pass. Candidates surfaced by search, NONE
primary- or snippet-verified (WebFetch blocked by paywalls on all of these):
- Aoyama, Fujiwara, Ikeda, Iyetomi & Souma (2011). *Econophysics and Companies: Statistical
  Life and Death in Complex Business Networks.* Cambridge University Press. [unverified —
  model/search-summary only]
- Fujiwara, Di Guilmi, Aoyama, Gallegati & Souma (2004). "Do Pareto-Zipf and Gibrat laws hold
  true? An analysis with European firms." (arXiv cond-mat/0310061 — fetchable in principle,
  not fetched this pass; flag for follow-up.) [unverified]
- A paper titled "Zipf Law and the Firm Size Distribution: a critical discussion of popular
  estimators" (ResearchGate ID 249012495, author likely Cirillo) appears to be exactly the
  kind of critical/methodological retest the brief asks about, but I could not retrieve
  abstract or authorship with confidence in this pass — **do not cite until read**.
- **Verdict for the entry: keep Axtell's measured-untested status; no upgrade found.** This
  is a "worth one more targeted search" item the brief flagged — I spent the one search: no
  clean confirmed hit. Recommend a follow-up primary-read pass on the arXiv cond-mat/0310061
  paper specifically (it's open-access, unlike the Springer/ResearchGate items) if the
  drafter wants to pursue the upgrade further.

### Firm demography — entry/exit/survival (BLS Business Employment Dynamics / Census BDS)

Read-status: **SEARCH-SNIPPET ONLY** — every direct WebFetch to bls.gov (bdm/, spotlight
page, ted article, and the raw table7.txt) returned HTTP 403 (bot-blocked); could not
primary- or even page-fetch-verify any BLS number this pass.
- Recurring figure across independent search snippets: "roughly eight in ten establishments
  reach year 1... about half reach year 5," and separately "approximately 42%-50% of newborn
  establishments survived the first five years, depending on birth year." Source: BLS
  Business Employment Dynamics (BED) / Census Business Dynamics Statistics (BDS),
  establishment-age-and-survival series, specifically **Table 7 "Survival of private sector
  establishments by opening year"** at bls.gov/bdm/us_age_naics_00_table7.txt (page located,
  content NOT retrieved — blocked).
- evidence_status if entered: **measured-untested / [unverified — search-snippet, not
  primary-read]** — this is NOT yet the "easy primary-read upgrade" the brief anticipated;
  BLS's site actively blocks the fetch tool available in this pass. A human or a
  differently-configured fetch (e.g. curl with a browser UA, or the Census BDS CSV API rather
  than the BLS HTML tables) would likely succeed — flagging as a follow-up task, not resolved
  here.
- Candidate citation once verified: U.S. Bureau of Labor Statistics, Business Employment
  Dynamics, "Establishment Age and Survival Data," Table 7 (bls.gov/bdm/bdmage.htm); or U.S.
  Census Bureau, Business Dynamics Statistics, "Firm/Establishment Survival" tables
  (census.gov/programs-surveys/bds.html).
- variation_selection column evidence: this figure (whatever its exact value) is illustrative
  support for "present" regardless of precise percentage — entry/exit is well-documented at
  the qualitative level even before the exact BDS number is pinned down.

### Canonical secondary/theory citations (not independently verified this pass — flagged per brief as [unverified — model knowledge])

- Coase, R.H. (1937). "The Nature of the Firm." *Economica* 4(16), 386-405. [unverified —
  model knowledge; canonical, extremely likely correct, not fetched this pass]
- Nelson, R.R. & Winter, S.G. (1982). *An Evolutionary Theory of Economic Change.* Harvard
  University Press / Belknap Press. [unverified — model knowledge; canonical]
- Gibrat, R. (1931). *Les Inégalités Économiques.* Paris: Sirey. [unverified — model
  knowledge; the proportional-growth null model Stanley et al. test against]
- March, J.G. & Simon, H.A. (1958). *Organizations.* Wiley. [unverified — model knowledge;
  cheap citation for organizational learning / adaptive_capacity if drafter wants it]

## 3. Column-by-column notes for the drafter (synthesis, not new data)

- **spatial_extent**: no natural single figure — an individual firm's facilities span from a
  single storefront to global (Walmart: multinational). Likely `unknown` or a qualitative
  note at class-general level; do not force a number.
- **characteristic_timescales**: candidates — daily operational cycle (~1e5 s), annual
  reporting/growth-rate cycle (~3e7 s, matches the Stanley et al. measurand), firm lifespan
  (median far below mean due to heavy right skew; BDS 5-year survival ~50% implies a
  characteristic "young firm" timescale of ~1e8 s / a few years, with a long tail — cite the
  BDS figure once verified).
- **numerosity**: per-firm employee count as the within-firm component count. Derivable from
  Axtell's own tables if the total-employment figure underlying the 1997 Census universe is
  in the primary-read material (global-economy-sources.md) — check there before treating as
  unknown; mean ~20 employees/firm is a plausible order-of-magnitude given N=5.5e6 firms
  against ~1.1e8 total 1997 private employment, but this specific division was NOT
  independently verified this pass — mark derived + measured-untested if used, and show the
  arithmetic in the entry.
- **instance_population**: reuse global-economy.yaml line 191's figures identically (~5.5e6
  US employer firms primary-read; ~2.1e7 total US entities; ~3-4e8 global, disputed,
  secondary) — do not diverge.
- **energy_rate_density**: unknown (no defensible mass denominator — the-internet precedent).
- **degree_distribution**: Newman 2003 board-interlock figures above; label as
  board-interlock projection specifically, not general firm network; no power-law claim
  attached in Newman's table for this row — record distribution class as reported (Newman's
  table records mean degree/clustering/assortativity, not a fitted exponent for this row) —
  do not fabricate an alpha for it.
- **extreme_event_statistics**: TWO separate items, per measurand-required — (a) firm-size
  rank-size Zipf (Axtell, static-cross-sectional, alpha~1.0-1.06, measured-untested,
  exemplar(us-firm-population)); (b) growth-rate distribution shape/scaling (Stanley et al.,
  exponential/Laplace form + size-dependent spread scaling beta, measurand = annual log
  growth rate, currently unverified-pending-primary-read for the beta value itself).
- **chaos_sensitivity**: score 1, no deterministic-chaos claim — cite financial-markets.yaml
  lines 241-251 and global-economy.yaml lines 449-471 as sibling treatments; no-market-chaos
  rule applies.
- **variation_selection**: present — Nelson & Winter 1982 as canonical citation (unverified
  model knowledge, cheap/standard), BDS entry/exit figures (once verified) as the quantitative
  backing.

## 4. Three biggest uncertainties (surfaced to orchestrator)

1. Stanley et al. 1996's beta exponent value(s) are NOT primary-read — only a secondary
   search-summary reports 0.18-0.20. This is the single highest-value fact this entry wants
   and it is currently sourced below this project's normal bar. Needs a real primary read
   (open-access PDF candidates: ResearchGate/Amaral Lab mirrors) before entry.
2. BLS/Census establishment-survival figures are blocked by bot-detection for this tool in
   this pass (all bls.gov fetches 403'd) — the "~50% at 5 years" figure is snippet-only, not
   even page-verified, despite the brief's expectation this would be an easy primary-read
   upgrade. May need a different fetch method (browser-driven, curl, or the Census BDS
   CSV/API route) to actually close this out.
3. No confirmed post-CSN rigorous retest of the firm-size power law was found — several
   candidate papers surfaced (Aoyama et al. 2011 book, Fujiwara et al. 2004 arXiv paper, a
   possible Cirillo critical-estimators paper) but none was read; the arXiv paper
   (cond-mat/0310061) is open-access and the most promising single follow-up if the
   evidence_status upgrade is worth pursuing further.
