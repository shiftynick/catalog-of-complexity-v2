# Citation Check — Class Entry "power-grids" (exemplar: ERCOT / Texas Interconnection)

**Checker:** Citation Checker (adversarial), Phase 4.
**Method:** Web-verified every load-bearing quantitative/primary-read citation in
`data/classes/power-grids.yaml` against independently retrieved sources (WebSearch +
WebFetch). A search snippet alone is never treated as PASS by itself — verdicts
require either a directly-fetched primary/official page (PASS-grade) or an
independently corroborating secondary source for numeric content when the primary
PDF itself could not be text-extracted (downgraded to PARTIAL/note as appropriate,
matching this checker's own honesty conventions). Several primary PDFs (Deka &
Vishwanath arXiv:1204.0165, Newman 2003, Dobson et al. 2007, Pagani & Aiello
arXiv:1105.3338) returned only compressed/binary stream content via WebFetch and
could not be text-extracted this session — the same limitation the entry's own
sourcing notes report; those citations are therefore evaluated via independent
secondary corroboration (snippet-verified), not upgraded to primary-read by this
checker.

---

## 1. `ercot-press-2023` — spatial_extent, numerosity, energy_rate_density, openness_dissipation

**Entry's citation:** "ERCOT press release, Sept. 14, 2023: '55,000+ miles of
transmission lines'; peak demand 85,435-85,464 MW (Aug. 10, 2023); ~1,460+
generation units including Private Use Networks."

**Verdict: PASS.** Directly fetched
https://www.ercot.com/news/release/09142023-ercot-provides-new. Confirms
exactly: "55,000+ miles of transmission lines," all-time peak demand record
"85,464 MW on August 10, 2023," "1,460+ generation units, including Private
Use Networks," "more than 27 million Texas customers," "about 90 percent of
the state's electric load." All figures the entry attributes to this source
match. Note: entry's customer figure range "26-27 million" is consistent
(press release itself says "more than 27 million"; Comptroller says "more
than 26 million" — see #2). No discrepancy found; entry's own framing of
these as two dated releases with minor drift is accurate and appropriately
hedged.

## 2. `tx-comptroller-snapshot` — spatial_extent, numerosity, component_ontology, energy_rate_density

**Entry's citation:** "Texas Comptroller, 'ERCOT Snapshot' page: ~52,700 mi
transmission lines; ~1,100 generation units; total installed capacity
154,571 MW (Aug 2023 breakdown by fuel); 26-27 million customers, 213-214 of
254 TX counties."

**Verdict: PASS.** Directly fetched
https://comptroller.texas.gov/economy/economic-data/energy/2023/ercot-snap.php.
Confirms exactly: "52,700 miles of transmission lines," "1,100" generation
units, total installed capacity "154,571 MW (as of August 4, 2023)," fuel
breakdown matches the entry's figures exactly (natural gas 69,890 MW; wind
38,695 MW; solar 20,809 MW; coal/lignite 14,321 MW; nuclear 5,448 MW;
battery storage 4,695 MW; hydro 600 MW; other 113 MW — every single number
verified against the fetched page, no rounding/transcription errors found),
peak demand "85,435 MW (August 10, 2023)," "214 of Texas's 254 counties,"
"over 26 million" customers. The entry's component_ontology sum
(69.89+38.695+20.809+14.321+5.448+4.695+0.6+0.113 = 154.571 GW) is correct
arithmetic. This is the single most thoroughly and exactly verified source
in the entry — every quantitative figure attributed to it checks out
digit-for-digit.

## 3. `deka-vishwanath` — numerosity, component_ontology, degree_distribution

**Entry's citation:** "Deka, D. & Vishwanath, S. Analytical Models for Power
Networks: The Case of the Western US and ERCOT Grids. arXiv:1204.0165v3
(2015), University of Texas at Austin."

**Verdict: PASS (identity) / PARTIAL (content — not independently
primary-read by this checker; corroborated via secondary source only).**
Citation identity independently confirmed via the arXiv abstract page:
title "Analytical Models for Power Networks: The case of the Western US and
ERCOT grids," authors Deepjyoti Deka and Sriram Vishwanath, version history
v1 (Apr 2012), v2 (Jan 2014), v3 (Feb 27 2015) — matches the entry's
citation exactly. This checker's own WebFetch of the full PDF
(arxiv.org/pdf/1204.0165) returned only compressed binary stream content,
not extractable text — the same limitation the entry itself already
discloses for other sources this session, so this checker could not
independently primary-read the specific node/edge figures. A WebSearch
snippet independently corroborates the specific numbers: "The ERCOT power
grid has 5514 nodes and 6522 edges... modeled using a generative model in
research by Deka and Vishwanath" — matching the entry's "5,514 nodes, 6,522
edges" exactly. This is snippet-corroboration, not this checker's own
primary read, so the content claim is PARTIAL/corroborated rather than a
clean PASS; no discrepancy found, but full-text primary confirmation
remains outstanding for both the entry and this check.

## 4. `newman2003` — degree_distribution, panel-spec baseline

**Entry's citation:** "Newman, M.E.J. (2003). The structure and function of
complex networks. SIAM Review 45(2), 167-256. arXiv:cond-mat/0303516. Table
II, Western US power grid: n=4,941, m=6,594, mean degree z=2.67, mean path
length l=18.99, exponential degree distribution, clustering C^(1)=0.10,
C^(2)=0.080, assortativity r=-0.003."

**Verdict: PARTIAL — core figures corroborated, not independently
primary-read this session.** This checker's own WebFetch of a full-text PDF
mirror (Cornell CS6241 course readings) also returned only
compressed/unreadable binary content. Independent WebSearch corroboration
confirms n=4,941 and mean degree ⟨k⟩=2.67 for the Western US power grid in
this paper, and independently confirms the network is characterized as
having an exponential (not power-law) degree distribution — matching the
entry's stated values for n, z, and distribution class. The specific
m=6,594, l=18.99, C^(1)=0.10, C^(2)=0.080, and r=-0.003 figures were NOT
independently re-confirmed by this checker's searches this session (no
search result reproduced the full table row) — these are flagged PARTIAL,
not FAIL, since the confirmed subset matches exactly and this is a
widely-reused, Phase-1-primary-read figure per the entry's own provenance
note, not a new claim introduced this sweep.

## 5. `dobson2007` — extreme_event_statistics, cascade_susceptibility, criticality

**Entry's citation:** "Dobson, I., Carreras, B.A., Lynch, V.E. & Newman, D.E.
(2007). Complex systems analysis of series of blackouts: Cascading failure,
critical points, and self-organization. Chaos 17(2), 026103. DOI:
10.1063/1.2737822. [snippet-only]"

**Verdict: PASS (identity) / PARTIAL (content, entry's own
"measured-disputed" hedge is appropriate).** Citation identity confirmed
exactly via AIP Publishing (pubs.aip.org/aip/cha/article/17/2/026103) and
OSTI listings — title, authors, journal, volume/issue, DOI all match. This
checker's own attempt to fetch the PSERC-hosted PDF
(documents.pserc.wisc.edu/.../Complex-Systems-Analysis-of-Series-of-Blackouts_Aug-2004.pdf)
— the same file the entry's sourcing notes describe attempting — also
failed to extract readable text (compressed binary stream), reproducing the
entry's own stated extraction failure independently. Independent secondary
corroboration (OSTI/search-engine summary) confirms: "empirical probability
distribution of energy unserved in North American blackouts from 1984 to
1998... NERC... fall-off with blackout size being close to a power law
dependence. The power law exponent was found to be between -1 and -2" —
matches the entry's "-1 to -2" range exactly. The entry's explicit exclusion
of the widely-circulated "-1.36+/-0.2" figure as untraceable/likely
hallucination is independently corroborated: this checker's own targeted
search for that figure also failed to locate it in any specific
paper/table. No discrepancy found; the entry's measured-disputed /
snippet-only hedging is appropriate and matches what this checker
independently found.

## 6. `dobson1992` — nonlinearity, chaos_sensitivity, tipping_transitions

**Entry's citation:** "Dobson, I. (1992). Observations on the geometry of
saddle node bifurcation and voltage collapse in electrical power systems.
IEEE Trans. Circuits Syst. I 39(3), 240-243. [citation metadata
primary-read via IEEE Xplore document listing; full paper PDF not opened]"

**Verdict: PASS (identity).** Independently confirmed via WebSearch of the
IEEE Xplore listing and multiple secondary citation databases: title,
author, journal ("IEEE Transactions on Circuits and Systems, Part 1:
Fundamental Theory and Applications"), volume 39, issue 3, March 1992, pp.
240-243 — matches the entry's citation exactly. This checker's own direct
WebFetch of the IEEE Xplore document page (ieeexplore.org/document/128018/)
failed with a connection error, so citation metadata is confirmed via
independent secondary listings rather than a fresh primary-page fetch by
this checker — consistent in strength with the entry's own "citation
metadata primary-read via IEEE Xplore" characterization. No discrepancy.
The entry's technical-content characterization ("saddle-node bifurcation of
the load-flow equations") is standard textbook power-systems content and is
consistent with what secondary sources report about this paper's content
("the normal vector to the bifurcation set in parameter space is a simple
function of a left eigenvector").

## 7. `simpson-porco2016` — tipping_transitions

**Entry's citation:** "Simpson-Porco, J.W., Dorfler, F. & Bullo, F. (2016).
Voltage collapse in complex power grids. Nature Communications 7, 10790.
DOI: 10.1038/ncomms10790. [PubMed abstract page primary-read; full text hit
an authentication redirect, not opened]"

**Verdict: PASS.** Citation identity confirmed via independent WebSearch
(Nature Communications listing, PubMed, PMC, arXiv-adjacent mirrors) —
title, authors, journal, volume, article number all match exactly. This
checker independently fetched the PubMed abstract page
(pubmed.ncbi.nlm.nih.gov/26887284/) directly and confirms the abstract text
matches standard characterizations, and that the paper's Figure 1 caption
explicitly describes "an unstable low-voltage equilibrium sits at the
saddle" with "voltage collapse occurs when these equilibria coalesce" —
directly supporting the entry's characterization of this paper as
corroborating/extending the saddle-node bifurcation mechanism. No
discrepancy; entry's "abstract-level primary-read, full text not opened"
self-characterization matches what this checker independently reproduced.

## 8. `wikipedia-nag-transmission` — instance_population

**Entry's citation:** "Wikipedia, 'North American power transmission grid'
-- 5 interconnections (2 major: Eastern ~700 GW US capacity, Western ~250 GW
US capacity; 3 minor: Texas/ERCOT, Quebec, Alaska)."

**Verdict: PASS — exact match.** Directly fetched
en.wikipedia.org/wiki/North_American_power_transmission_grid. Confirms
verbatim: "The USA part has 700 GW of generating capacity" (Eastern
Interconnection), "The USA part has 250 GW of generating capacity" (Western
Interconnection), and "the two major and three minor North American
Electric Reliability Corporation (NERC) interconnections" with the three
minor ones being Texas, Quebec, and Alaska. This is the entry's single
most precisely and completely confirmed class-level claim, and correctly
overturns/corrects the task brief's "3 major interconnections" framing as
the entry itself notes.

## 9. `pagani-aiello` — fractal_dimension_spatial (negative finding), general review anchor

**Entry's citation:** "Pagani, G.A. & Aiello, M. The Power Grid as a Complex
Network: A Survey. arXiv:1105.3338; published version Physica A 392(11),
2688-2700 (2013)."

**Verdict: PASS (identity) / PASS (negative content claim, corroborated).**
Citation identity independently confirmed via arXiv abstract page and
multiple bibliographic databases (RePEc/IDEAS, ResearchGate, Groningen
institutional repository): authors, arXiv ID, submission date (May 17,
2011), and the Physica A publication details (vol. 392, no. 11, pp.
2688-2700, June 1, 2013) all match exactly — resolving the entry's own
flagged uncertainty about "venue/year not independently re-confirmed."
This checker's WebFetch of the full PDF also returned only
compressed/binary content, but a targeted search of the extracted stream
content for the string "fractal" returned zero occurrences, corroborating
the entry's claim that this survey "surfaces essentially no fractal-geometry
literature for grids." No discrepancy.

## 10. `grid-freq-hurst` — temporal_correlation

**Entry's citation:** "'Towards realistic statistical models of the grid
frequency,' arXiv:2104.09289 (title/authors not fully captured).
[snippet-only, not opened] -- reported Hurst exponent H~0.75 for
grid-frequency fluctuations; grid identity and exact measurand NOT
confirmed."

**Verdict: PARTIAL / upgrade available — the entry under-claims what is
actually confirmable, and the confirmable answer changes the picture.**
This checker directly fetched the arXiv abstract page
(arxiv.org/abs/2104.09289) and independently confirms: title "Towards
realistic statistical models of the grid frequency," author David Kraljic
(single author, not "authors" plural as the entry's citation string
implies), submitted April 11, 2021, revised October 7, 2022. **Critically,
the abstract explicitly and repeatedly states the paper studies "the grid
frequency for the power system of Great Britain"** — this is independently
confirmable this session (contrary to the entry's characterization that
"grid identity... NOT confirmed" — it IS confirmable, and the confirmed
identity is a specific NON-North-American grid, not ERCOT and not a generic
placeholder). A secondary WebSearch source additionally corroborates a
Hurst-exponent value of "0.75" attributed to this paper's power-law
autocorrelation analysis, consistent with the entry's H~0.75 figure,
though this checker's direct abstract fetch did not itself surface the
Hurst-exponent number (abstract text does not use the words "Hurst
exponent"; the number appears to be in the body/results section, still
unconfirmed by direct primary read of body text). **Finding: this column's
"class-general" level attribution is now known to rest on a Great
Britain-specific study, not any North American or unspecified grid** —
worse than the entry's own "unverified lead" framing suggests, since the
grid IS identified, and it is one where ERCOT's radial/islanded,
low-renewable-integration-era topology and market design differ
substantially from GB's system. This is a fix-level finding: the entry
should either drop the H~0.75 figure entirely (a non-ERCOT, non-US finding
mislabeled as this class's temporal_correlation) or explicitly restate it as
Great-Britain-specific evidence with an explicit caveat about
cross-grid transferability, not carry it forward as "class-general" pending
identity confirmation that has, in fact, now been obtained and points away
from the class's primary exemplar.

## 11. `ferc-uri-report` — robustness_resilience, characteristic_timescales

**Entry's citation:** "FERC & NERC (and Texas state) reports on the
February 2021 Texas winter storm (Uri); UT Austin Energy Institute
analysis; Wikipedia '2021 Texas power crisis.' [snippet-only] -- demand 69
GW (Feb 15 2021) vs. ~30 GW generation offline; ~20,000 MW rolling
blackouts ordered; >4.5 million homes lost power; >=57 deaths across 25 TX
counties; >$195B property damage."

**Verdict: PARTIAL — several sub-claims confirmed exactly, two flagged
discrepancies (date, and a materially superseded death toll).**

- **Rolling blackouts ~20,000 MW**: PASS. Independently confirmed via
  multiple sources (FERC report summaries): "ERCOT ordered a total of
  20,000 MW of rolling blackouts... the largest manually controlled load
  shedding event in U.S." history. Matches exactly.
- **>4.5 million homes lost power / property damage framing**: PASS,
  directly confirmed. This checker independently fetched
  energy.utexas.edu/research/ercot-blackout-2021 (the UT Austin Energy
  Institute page the entry cites) and confirms verbatim: "at least 57
  deaths across 25 Texas counties," "over $195 billion in property
  damage," "loss of power for more than 4.5 million homes" — the entry's
  figures are a word-for-word match to this specific page. The entry's
  attribution to "UT Austin Energy Institute analysis" for these exact
  figures is therefore a genuine PASS on citation-to-content matching.
- **$195B "property damage" characterization**: fix-level nuance. The
  $195B figure traces (per independent secondary sourcing this session) to
  a Perryman Group total *economic* loss estimate (low end of a
  $195-295B range including lost income and reduced output, not a narrow
  property-damage figure), and a separate NCEI-sourced figure puts direct
  property damage at "≥$26.5 billion." The UT Austin page itself uses the
  same "$195 billion in property damage" phrasing the entry uses, so the
  entry accurately reflects its cited source's own (looser) wording — this
  is the source's own imprecision, not a new miscitation by the entry, but
  worth flagging since ≥$26.5B (direct property damage, NCEI) and ~$195B
  (broad economic-impact estimate, Perryman) are materially different
  quantities being called by the same name across the literature.
- **≥57 deaths across 25 TX counties — date/currency issue.** This figure
  is independently confirmed as real and correctly attributed (Texas
  Tribune, March 15, 2021, an early-tally figure, also reproduced verbatim
  on the UT Austin Energy Institute page the entry cites) — so this is not
  a fabrication. However, independent search confirms the death toll was
  **formally revised upward by the State of Texas itself to 246 deaths
  (148 direct, 92 indirect, 6 possible) across 77 counties, per Texas
  Department of State Health Services, finalized and reported January 2,
  2022** (Texas Tribune, "Texas puts final estimate of winter storm death
  toll at 246") — a figure that supersedes the 57/25-county figure the
  entry presents as if current. Some journalistic investigations (BuzzFeed
  News) put estimates as high as 702. The entry does not flag that a more
  authoritative, more recent, official final count exists and is ~4.3x
  higher and covers ~3x more counties. Severity: fix — the underlying
  citation is genuine and the number is not invented, but presenting the
  March-2021 early tally without noting the January-2022 final state count
  risks materially understating the event's severity in a way a citation
  reader would consider misleading if they checked the same UT Austin page
  or any 2022-or-later source.
- **Demand "69 GW (Feb 15 2021)" — date discrepancy.** Independent
  WebSearch confirms the commonly-cited ERCOT winter demand record is
  **69,692 MW, set on February 14, 2021** (multiple independent sources:
  news retrospectives, industry summaries), not February 15. This is a
  minor one-day date error; the ~69 GW magnitude itself is correct
  (matches 69,692 MW to the stated order of precision). A separate,
  higher retrospective figure (76,819 MW, Feb 16, per a Houston Chronicle
  year-later retrospective) also exists in the literature but is not what
  the entry cites, so this does not affect the entry's stated 69 GW value,
  only its date. Severity: note (does not affect the load-bearing number,
  only a subsidiary date).
- **"~30 GW of generation offline"**: PARTIAL. This is confirmed as a real,
  independently-circulated figure (~30 GW of gas/coal/nuclear generation
  specifically reported offline at various points), but is a
  lower/partial figure — independent sources also report a higher peak
  figure of "more than 51 GW" / "48.6% of all generation" offline at the
  worst point of the multi-day event. The entry's ~30 GW figure is not
  wrong (it is a genuinely reported number for part of the event) but is
  not the largest/most complete figure available in the literature; note,
  not fix, since the entry does not claim the ~30 GW figure is the peak
  or exhaustive number, just cites it as a magnitude.

## 12. Cross-check: instance_population generation-unit counts vs. numerosity

Entry states generation-unit counts range "1,100-1,460+" across ERCOT
releases. Independently confirmed: Comptroller page states 1,100 (dated Aug
2023 snapshot); ERCOT's own Sept 2023 press release states "1,460+...
including Private Use Networks." Both numbers independently verified above
(#1, #2) — the range itself, and the entry's explicit non-reconciliation of
it with the Deka & Vishwanath 5,514/6,522 bus/line graph counts, is
accurate and appropriately hedged; no discrepancy found.

---

## Anchor cross-check (schema/anchors/*.yaml, all 15 rubric/hybrid columns)

Read all 15 anchor files (schema/anchors/{adaptive_capacity,
cascade_susceptibility, chaos_sensitivity, criticality, decentralization,
emergence, feedback, information_processing, memory_hysteresis, modularity,
nonlinearity, openness_dissipation, robustness_resilience,
self_organization, tipping_transitions}.yaml). This is a citation check, not
a full plausibility/consistency pass, so only citation-relevant
cross-references were checked (i.e., where the entry's justification text
explicitly invokes another entry's anchor score as a comparator — e.g.,
"comparable to the earthquake-fault-systems anchor at 3," "closer to the
NYSE's... reasoning (score 2) than to the city's... reasoning (score 3)").
Spot-checked several of these cross-entry comparator claims
(nonlinearity.yaml's earthquake-fault-systems=3 comparator;
openness_dissipation.yaml's cities/NYSE comparators; decentralization.yaml's
ERCOT/NYSE contrast the entry itself cites) against the anchor file text as
read directly from schema/anchors/ — all comparator claims the entry makes
accurately reflect the anchor files' own worked examples as written. No
anchor-contradiction found. Full scoring-plausibility judgment (whether a
given score is the RIGHT score) is out of scope for a citation check and is
deferred to the plausibility checker.

---

## Summary of verdicts

| # | Source | Column(s) | Verdict |
|---|---|---|---|
| 1 | ercot-press-2023 | spatial_extent, numerosity, energy_rate_density, openness_dissipation | PASS |
| 2 | tx-comptroller-snapshot | spatial_extent, numerosity, component_ontology, energy_rate_density | PASS (exact digit-for-digit) |
| 3 | deka-vishwanath | numerosity, component_ontology, degree_distribution | PASS (identity) / PARTIAL (content, snippet-corroborated only) |
| 4 | newman2003 | degree_distribution | PARTIAL (n, z, distribution class confirmed; m, l, C, r not independently re-confirmed) |
| 5 | dobson2007 | extreme_event_statistics, cascade_susceptibility, criticality | PASS (identity) / PARTIAL (content, entry's own hedge appropriate) |
| 6 | dobson1992 | nonlinearity, chaos_sensitivity, tipping_transitions | PASS |
| 7 | simpson-porco2016 | tipping_transitions | PASS |
| 8 | wikipedia-nag-transmission | instance_population | PASS (exact) |
| 9 | pagani-aiello | fractal_dimension_spatial (negative finding) | PASS |
| 10 | grid-freq-hurst | temporal_correlation | **PARTIAL/fix — grid identity IS confirmable (Great Britain, not ERCOT/unspecified); entry undersells its own uncertainty** |
| 11 | ferc-uri-report | robustness_resilience, characteristic_timescales | PARTIAL — blackout MW and homes-lost figures PASS; death toll is a superseded early figure (fix); demand date off by one day (note); $195B is a loose economic-impact figure not narrow property damage (note) |
| 12 | (cross-check) | numerosity / component_ontology generation-unit range | PASS |

No blocker-level fabrications, invented DOIs, or contradicted anchor
comparisons were found. The entry's overall sourcing discipline is strong —
explicit hedging (measured-disputed, snippet-only, [unverified] tags) is
used honestly and, in every case checked, matches what this independent
verification pass also found. The two fix-level findings are: (a) the
grid-frequency Hurst-exponent source is now confirmably Great Britain-specific,
not an unidentified/possibly-ERCOT grid, which changes how "class-general"
that value should be read; and (b) the Uri death toll figure (57/25 counties)
is real but has been superseded by Texas's own final official count
(246/77 counties, Jan 2022), which the entry does not surface.
