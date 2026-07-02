# The Internet — Quantitative Source Sweep (Catalog of Complexity, Phase 4)

Class entry: `the-internet`. Category: infrastructure. Exemplars: singleton class —
the Internet is its own sole instance (n=1 at class level).
Compiled 2026-07-02.

Methodology note (per Phase 3 convention): every value below is tagged
**primary-read** (fetched/read directly from the source document) or
**snippet-only** (recovered only via search-engine snippet or AI summary of
search results, not independently opened in full). Snippet-only values are
lower-confidence and should be re-verified against the primary document
before being locked into the catalog. Values already primary-read in Phase 1
are reused with their original provenance and re-flagged with a date stamp.

---

## 0. Scoping note (atomicity + level)

Per `filling_rules.atomicity-convention`, this entry's declared atomic parts
are **Autonomous Systems (AS-level topology)** for network-structure columns
(degree distribution, clustering, assortativity) — the level at which routing
policy and the system's characteristic dynamics (BGP path selection,
peering) operate — NOT individual routers, hosts, or packets. Router-level
and traffic-level (packet/flow) measurands are used where explicitly named
(fractal dimension, temporal correlation) and are called out as a different
level from the AS graph. This dual-level structure is stated explicitly in
every relevant row below per `filling_rules.measurand-required`.

`instance_population`: **n = 1** (class-level). The Internet is a singleton:
there is exactly one Internet, not a population of instances of a type. This
is an epistemic constraint, not a missing datum — it means class-level
distributional claims (e.g., "the distribution of Internet sizes") are
**not a legal statistical object** for this entry. Every other
"cross-sectional" statistic below (AS count, degree exponent, clustering)
is therefore a single-instance time series measurement (one system observed
at different dates), not a sample from a population of internets. This
should be stated explicitly in the class entry to prevent a reader from
mistaking "n=10,697 ASes in 2001" for a population sample of size 10,697 —
it is one internet with 10,697 parts.

---

## 1. Spatial extent

- **Characteristic linear extent**: global, ~4×10^7 m (Earth's circumference,
  ~40,075 km) as the outer bound of the physical network (submarine cables,
  terrestrial backbone spanning all inhabited continents plus research
  stations). [unverified — model-knowledge order-of-magnitude estimate, not
  independently sourced this session]. Evidence status: **qualitative /
  unverified**, order of magnitude only. No dedicated "spatial extent of the
  Internet" measurement paper was located; this is a geometric inference
  from known global coverage, not a measured quantity. Flag for a dedicated
  search against submarine-cable-map literature (e.g., TeleGeography) in a
  follow-up pass if a citable figure is required.

---

## 2. Characteristic timescales

Named per `filling_rules.measurand-required`; multiple named processes, no
single "the" timescale exists for a system this heterogeneous:

- **Fastest constituent process — packet propagation/forwarding**: single-hop
  forwarding decisions and physical propagation delay operate at
  ~10^-3–10^-1 s (sub-millisecond router forwarding; cross-continental
  round-trip times commonly 10s–100s of ms). **Snippet-only**, general
  networking-domain knowledge, not tied to one paper this session —
  [unverified, order of magnitude].
- **Routing-protocol convergence — BGP**: default inter-AS route
  advertisement interval (MRAI) is 30 s for eBGP, 5 s for iBGP; full
  network-wide BGP convergence after a topology change is commonly cited
  as ranging from a few seconds to several minutes depending on AS-path
  length and update batching. **Snippet-only** (ipspace.net / Cisco
  community technical summaries; original academic source is Labovitz et
  al.'s BGP convergence measurement studies, not independently opened this
  session — flag for primary-read). Evidence status: measured (snippet
  only), order of magnitude 10^0–10^2 s.
- **Dominant infrastructure/topology growth timescale**: AS-level topology
  evolves on a scale of months–years (new ASes provisioned, peering
  relationships renegotiated); see AS-count growth trend in Section 4 below
  (~47,000 routed ASes in 2015 to ~80,000 in 2025/2026 — roughly a decade
  for near-doubling). Order of magnitude 10^8 s (years).
- **System lifetime**: ARPANET operational from 1969; commonly dated "the
  Internet" (TCP/IP-based, post-1983 flag day) to present (2026) = ~43–57
  years depending on start point chosen, order of magnitude 10^9 s.
  [unverified — standard historical dating, not independently sourced this
  session; the 1969/1983 dates themselves are uncontroversial public
  record but no primary history paper was fetched].

---

## 3. Numerosity / component counts

Component ontology candidates (structured column, not fully populated here —
flagged for the entry's `component_ontology` field):

- **Autonomous Systems (AS-level nodes)**: see Section 4 — ~10,697 (2001,
  Newman/Oregon RouteViews snapshot, primary-read Phase 1) growing to
  ~75,000–83,739 (2025) per BGP-table snapshots. **Snippet-only** for the
  current figure (see Section 4).
- **Registered domain names**: 386.9 million globally at end of 2025 (all
  TLDs), per Domain Name Industry Brief (DNIB) Q4/annual figures; +22.7
  million / +6.2% y/y, described as an all-time high. **Snippet-only**
  (aeserver.com summary of DNIB report; DNIB itself — dnib.com — is the
  primary publisher, Verisign-run, but the report itself was not opened
  directly this session). Order of magnitude: 10^8 domains.
- **Internet users (human endpoints)**: ~6.0 billion people online in 2025
  (≈75% of world population), up from 5.8 billion in 2024; 2.2 billion
  remain offline. Source: ITU "Facts and Figures 2025" (International
  Telecommunication Union), announced via ITU press release 2025-11-17.
  **Snippet-only** (ITU press release and secondary summaries; the full
  ITU Facts and Figures 2025 report PDF was not opened directly). Order of
  magnitude: 10^9 users.
- **Connected devices**: estimates cluster around 18.5–21.1 billion IoT
  devices in 2024–2025 (IoT Analytics), with broader "all connected
  devices" figures (including phones, PCs) pushing toward ~25–30 billion
  by 2026 in industry projections (various vendor/analyst sources, e.g.
  Cisco's historical "connections counter", Statista). **Snippet-only,
  multiple sources with disagreeing methodology** — treat as
  order-of-magnitude only (10^10 devices), not a precise citable figure.
  Different studies count different device classes (IoT-only vs.
  all-connected); no single canonical figure exists. Evidence status:
  measured-disputed (methodology disagreement across sources) /
  order-of-magnitude only.

Numerosity is therefore multi-typed and should be recorded as a list per
`component_ontology`, not a single scalar: {AS nodes: ~10^4–10^5},
{domains: ~10^8}, {human users: ~10^9}, {devices: ~10^10}. Each is a
different "atomic part" candidate depending on which layer of the system is
being analyzed (topology layer vs. content layer vs. human-network layer);
the entry's scoping note should state that AS-level nodes are the
atomicity choice for the network-structure columns specifically (per
Section 0), while these other counts describe adjacent but distinct
component populations (content/application layer, human layer) that are
part of the system's full component ontology.

---

## 4. Degree distribution (network systems only)

### 4a. Newman 2003 baseline (reused from Phase 1, primary-read; re-flagged with date stamp)

Source: Newman, M.E.J. (2003). "The Structure and Function of Complex
Networks." *SIAM Review* 45(2), 167–256. Table II, Internet
(AS-level) row. **Primary-read in Phase 1** (per task brief; not
re-fetched this session — reused with original provenance).

- Network: Internet at the autonomous-system level, **2001 snapshot**
  (dataset vintage per Newman's Table II sourcing, University of Oregon
  RouteViews project data as cited by Newman) — DATE-STAMP: this is a
  **2001 measurement**, now 25 years stale relative to the current AS
  graph (see 4b).
- n (number of vertices) = 10,697
- mean degree z = 5.98
- mean geodesic (path) length l = 3.31
- degree-distribution exponent (power-law tail) α = 2.5
- clustering coefficient C = 0.39
- degree assortativity coefficient r = −0.189 (disassortative — high-degree
  ASes preferentially connect to low-degree ASes, consistent with core-
  transit/customer hierarchical structure)
- Evidence status: **measured-untested** per `filling_rules.power-law-rigor`
  — Newman's Table II predates the Clauset-Shalizi-Newman (2009) rigorous
  fitting standard; α=2.5 was fit by pre-CSN methods (commonly least-
  squares on log-log or simple MLE without goodness-of-fit/alternative-
  distribution testing). Level: class-level (one system, one snapshot).

### 4b. Broido & Clauset 2019 — counterweight (primary-read this session)

Source: Broido, A.D. & Clauset, A. (2019). "Scale-free networks are rare."
*Nature Communications* 10, article 1017. DOI:
10.1038/s41467-019-08746-5. arXiv preprint: arXiv:1801.03400 (submitted
2018-01-09). **Primary-read** (arXiv abstract page fetched directly;
Nature.com version blocked by an authentication/cookie redirect wall and
could not be fetched — abstract and category-scheme details below are from
the arXiv abstract page, primary-read, plus **snippet-only** secondary
summaries — Quanta Magazine, ScienceDaily, CU Boulder BioFrontiers — for
methodological detail not visible in the abstract alone).

- Applied CSN-2009-grade statistical testing (power-law fit + goodness-of-
  fit + likelihood-ratio comparison against log-normal and other
  alternatives) to a corpus of ~1,000 real-world networks spanning social,
  biological, technological, transportation, and information domains.
- Headline finding: only ~4% of networks in the corpus met the strictest
  "strongly scale-free" criterion (power law survives goodness-of-fit,
  exponent in (2,3), and beats four alternative distributions in a
  likelihood-ratio test); ~52% showed only the weakest possible evidence;
  for roughly two-thirds of networks, no power law fit well enough to
  plausibly explain the degree distribution at all. For most networks,
  log-normal fits equally well or better than a power law.
  "A handful of technological and biological networks appear strongly
  scale-free" per the abstract, but **the specific classification of the
  Internet AS-level graph within their scale-free-strength taxonomy
  (Strongest/Strong/Weak/Super-Weak/Not scale-free) could not be
  confirmed this session** — the full results table (Table 1 in the
  paper) was not accessible through the fetches attempted (Nature.com
  paywalled/cookie-walled the primary HTML; arXiv abstract page does not
  reproduce the full table). **This is a genuine gap, not a guess: do not
  assert a specific category for the Internet AS graph without opening
  the full PDF/table.**
- Implication for the catalog: per the class-specific brief and
  `filling_rules.power-law-rigor`, this paper is the citable counterweight
  that requires `degree_distribution` to carry **evidence_status:
  measured-disputed** (or at minimum measured-untested pending the exact
  Internet-row classification) rather than a bare "confirmed scale-free"
  claim, even though Newman 2003's α=2.5 fit is a real, oft-cited
  measurement. The two claims (Newman's fit exists; whether it survives
  rigorous testing is contested by the broader literature represented by
  Broido & Clauset) should be recorded as **separate, non-resolved**
  claims per the spirit of `soc-two-claims`.
- Related/supporting snippet: a separate, directly Internet-focused
  critique — "A critical look at power law modelling of the Internet"
  (arXiv:0910.2140) — was found in search results (title only,
  **not opened**, flagged for follow-up) and appears to independently
  argue against naive power-law modeling of Internet topology
  specifically. Not primary-read; noted as a lead only.

### 4c. Current AS count (2025/2026) — snippet-only, multiple corroborating figures

- ~83,739 unique AS numbers seen in the BGP table as of June 2025, per
  Geoff Huston's "ISP Column" (APNIC), potaroo.net. **Snippet-only**
  (search-result summary of potaroo.net page; page itself not directly
  fetched this session).
- "Roughly 80,000 active autonomous systems visible in the global BGP
  routing table" as of early 2026, per APNIC Blog "BGP in 2025" (2026-01-08).
  **Snippet-only.**
  Same summary states growth "from around 47,000 in 2015" — giving a
  decadal growth trajectory: ~47,000 (2015) → ~75,000–84,000 (2025) →
  ~80,000 (cited "early 2026" figure, consistent within the same range).
- Cumulative ASN assignment (not the same as actively-routed count):
  IANA has assigned 402,332 ASNs to the five Regional Internet Registries
  (RIRs); RIRs have in turn assigned ~88,400 ASNs to network operators
  cumulatively. **Snippet-only** (RIPE policy-proposal text surfaced via
  search). This is an *allocation* figure (includes historically assigned
  but possibly unrouted/retired ASNs) and should not be conflated with the
  actively-routed BGP count above — flagged explicitly to avoid the
  catalog silently mixing the two different countable quantities.
- **Recommended catalog value**: current AS count ~75,000–80,000 (order of
  magnitude 10^4–10^5, i.e., unchanged order of magnitude from Newman's
  2001 n=10,697, but roughly 7–8× larger in absolute count).
  Evidence status: measured (snippet-only), needs primary-read
  verification against CAIDA AS Rank or APNIC/Huston source directly
  before being locked as a precise figure.

### 4d. Fractal dimension of Internet spatial structure

Source: Yook, S.-H., Jeong, H. & Barabási, A.-L. (2002). "Modeling the
Internet's large-scale topology." *Proceedings of the National Academy of
Sciences* 99(21), 13382–13386. DOI: 10.1073/pnas.172501399.
**Primary-read** (PMC full-text page fetched directly, PMC129681).

- Finding: routers and ASes, mapped onto their real-world geographic
  locations, form a fractal set whose spatial distribution strongly
  correlates with global population density.
- **Fractal dimension D_f = 1.5 ± 0.1** (box-counting method against
  population-density-weighted node placement). A random (uniform) node
  distribution would instead give D_f ≈ 2, which is visibly inconsistent
  with the measured data — the paper uses this contrast to argue for a
  population-density-driven placement model.
  Measurand: spatial distribution of router/AS locations (physical/
  geographic layer), NOT the AS-graph topology itself (a distinct
  measurand from Section 4a/4b's connectivity-degree analysis — flagged
  per `filling_rules.measurand-required`).
- Also reports linear (not exponential) decay of link-formation
  probability with geographic distance (characteristic parameter σ=1) and
  linear preferential attachment (α=1) as the AS graph's growth
  mechanism — supporting but secondary findings, recorded for context,
  not required by the panel's fractal_dimension_spatial column.
- Evidence status: **measured**, primary-read. This is the citable value
  for `fractal_dimension_spatial`. Level: class-level (one system, single
  study's snapshot; exact data vintage not stated in the excerpt
  retrieved — flag for follow-up if the paper's underlying AS-topology
  dataset date needs to be pinned down; paper published 2002, so
  data is almost certainly pre-2002).

---

## 5. Temporal correlation (traffic self-similarity)

Source: Leland, W.E., Taqqu, M.S., Willinger, W. & Wilson, D.V. (1994).
"On the Self-Similar Nature of Ethernet Traffic (Extended Version)."
*IEEE/ACM Transactions on Networking* 2(1), 1–15. (Conference version:
ACM SIGCOMM Computer Communication Review, 1993, same title.)
**Snippet-only this session** — multiple attempts to fetch the primary PDF
failed (ccr.sigcomm.org: SSL/protocol error; the paper was not
successfully opened in full). Citation details and qualitative findings
are corroborated across multiple independent secondary sources (ACM DOI
page, Semantic Scholar, SIGCOMM CCR "Lessons from..." 25-years-later
retrospective by the original/related authors) but the specific numeric
Hurst-parameter estimates reported IN THIS PAPER were not independently
confirmed from the primary text this session.

- Qualitative finding (well corroborated across secondary sources):
  Ethernet LAN traffic is statistically self-similar (fractal) across
  time scales from milliseconds to hours; no traffic model in use at the
  time (including standard Poisson-based models) captured this; traffic
  aggregation intensifies rather than smooths burstiness, contrary to
  classical queueing-theory expectation.
- Quantitative Hurst-exponent figures (from independent, later
  measurement literature — NOT from the 1994 paper's own text this
  session, since that text was not opened): Internet/network traffic
  Hurst exponent H commonly falls in the range **H ≈ 0.7–0.85** at larger
  time scales (varies by trace and estimator), with H just above 0.6 at
  sub-scales below a certain crossover point. **Snippet-only**
  (escholarship.org "Long-range dependence — Ten years of Internet
  traffic..." and related long-range-dependence survey literature,
  summarized via search, not independently opened).
- Evidence status: **measured** (self-similarity/long-range dependence
  itself is uncontested, canonical, foundational result — this is "the
  classic" per the task brief), but the exact numeric H reported by
  Leland et al. 1994 specifically should be re-verified against the
  primary paper (H≈0.9 is the figure often quoted in secondary
  literature for the original Bellcore Ethernet traces, but this specific
  number was NOT independently confirmed from a primary or even a
  snippet source this session — do not enter into the catalog without
  re-verification). Measurand: octet/packet arrival process on Ethernet
  LAN links (original 1989–1992 Bellcore traces); later literature
  extends this to WAN/backbone traffic with broadly consistent H ranges.
  Level: class-level (structural property of Internet traffic in
  general, evidenced by many independent trace studies across decades).

---

## 6. Extreme event statistics / cascade statistics

Per the task brief, this gap was already documented in Phase 1
`SYNTHESIS.md`: *"Internet cascade-size distribution — possible genuine
literature gap; revisit under CDN/BGP/outage terminology."*
This sweep revisited it under BGP/outage/cascading-failure terminology and
**confirms the gap stands** — no Internet-specific (as opposed to
power-grid-specific) cascade-size power-law study with CSN-grade rigor was
located.

- General cascading-failure literature (power grids, interdependent
  infrastructure networks) does report power-law cascade-size tails in
  some studies (e.g., Dobson et al.'s blackout-size work, already flagged
  in the panel spec itself as measured-disputed) — but this is POWER-GRID
  literature, a different system, not Internet-specific. Conflating the
  two would violate the no-fabrication rule.
- BGP-specific literature located concerns routing-table growth,
  convergence time, and topology robustness-to-attack (scale-free
  robustness/fragility arguments, themselves now undercut by the Broido &
  Clauset counterweight in Section 4b) — not a cascade-SIZE distribution
  study analogous to Dobson et al. for power grids.
  Snippet found: "A critical look at power law modelling of the Internet"
  (arXiv:0910.2140) — title suggests relevance but was not opened; flagged
  for follow-up, not usable as a citation yet.
- **Cascade anchor score stands at 1** per the task brief's instruction —
  this sweep did not surface new evidence to change that. Evidence
  status: **unknown** for an Internet-specific cascade-size tail exponent.
  This is a legal, explicit "unknown," not an omission.

---

## 7. Tipping elements

No formal, quantified "tipping element" inventory analogous to climate's
Armstrong McKay et al. (2022) 16-element list was located for the
Internet as a system. Qualitative/narrative material found instead
(single points of failure — submarine cable chokepoints, major IXPs,
DNS root infrastructure, BGP hijacking/misconfiguration incidents) is
abundant in policy/security literature (e.g., AEI "Beyond Infrastructure:
Internet Ecosystem Resilience and the Public Good," 2025,
ScienceDirect/AEI — **snippet-only**, not opened in full) but these are
qualitative resilience/systemic-risk discussions, not a quantified tipping-
element list with identified thresholds. Evidence status: **unknown**
for a quantified tipping-element inventory; qualitative discussion exists
and can inform the rubric-side (`tipping_transitions`) narrative, sourced
to the AEI/ScienceDirect piece as a lead (re-verify before citing).

---

## 8. Energy rate density (Φ_m) — power and mass inputs

Per the panel spec, this column requires published power (W) and mass
(kg) figures, with derivation flagged `evidence_status: derived` if
computed by this project.

- **Power**: data-center electricity consumption was **415 TWh** globally
  in 2024 (≈1.5% of world electricity consumption), per the IEA "Energy
  and AI" report executive summary (2024/2025 report cycle).
  **Snippet-only** (IEA report summary via search; IEA report itself not
  opened directly this session — IEA is nonetheless a high-confidence
  primary publisher and this figure is consistent across multiple
  independent secondary sources). Converting: 415 TWh/yr ÷ 8760 h/yr ≈
  **4.74×10^10 W** average continuous power for data centers alone.
  Network infrastructure (transmission, routers, not counting end-user
  devices) is separately estimated at **~260–360 TWh/yr** (2022 figure,
  **snippet-only**, source chain unclear — a secondary aggregator
  citing unnamed prior study, NOT independently traced to a named primary
  paper this session — treat with caution). Combined data-center +
  network figure would be roughly 500–700 TWh/yr ≈ **5.7–8.0×10^10 W**,
  but this combined figure is itself a search-summary extrapolation, not
  a single citable source — flag as **low-confidence, needs primary
  source** before catalog entry. End-user device power draw (billions of
  phones/PCs/IoT devices) is excluded from all figures above and would be
  a further, separately-sourced addition if a "whole system" figure is
  wanted.
- **Mass**: no citable primary-source mass figure was found. A widely
  circulated popular-science estimate ("the internet's physical
  infrastructure weighs over 100 million tons") appears only in
  non-primary blog sources (novoserve.com, progress.com) with no visible
  citation trail to a peer-reviewed or industry-primary source. Per the
  hard rule against fabrication, **this mass figure is REJECTED as a
  catalog input** — it cannot be traced to a verifiable original study
  and should not be used even as [unverified — model knowledge], since it
  did not originate from this session's own model knowledge but from an
  unsourced web claim of unknown provenance.
- **Verdict on Φ_m derivation**: **NOT computable with citable rigor at
  this time.** Power has a defensible (if snippet-only, IEA-sourced)
  order-of-magnitude figure (~10^10–10^11 W depending on scope). Mass has
  no citable source at all. Per `filling_rules.no-guessing`, the
  catalog should record energy_rate_density as **unknown** (mass input)
  with the power figure noted separately as a partial, snippet-only,
  scope-dependent input (data centers only vs. data centers + network vs.
  whole system including end-user hardware — these are three different
  system-boundary choices that would each need their own mass estimate).
  This is a case where "unknown" is the correct, non-guessed answer for
  the composite Φ_m value even though one of its two inputs is partially
  available.

---

## 9. Chaos / predictability

No dedicated Lyapunov-exponent or formal predictability-horizon study for
Internet-scale traffic or topology dynamics (analogous to the atmosphere's
~2-week predictability horizon) was located this session. BGP convergence
time (Section 2) is a related but distinct concept — a settling time after
a discrete perturbation, not a chaos/sensitivity measure. Per
`filling_rules.no-market-chaos`'s spirit (apply the same caution to other
systems where "chaos" is folklore rather than measured), **no
deterministic-chaos claim should be entered for the Internet without a
located study** — evidence status: **unknown**. The self-similar/long-
range-dependent traffic structure (Section 5) is a distinct phenomenon
from low-dimensional deterministic chaos and should not be conflated with
it in the `chaos_sensitivity` column.

---

## 10. Canonical review sources for the entry source list (3–5)

1. **Newman, M.E.J. (2003).** "The Structure and Function of Complex
   Networks." *SIAM Review* 45(2), 167–256. — Primary-read (Phase 1).
   Foundational network-science review; Table II is the AS-level
   degree-distribution baseline (Section 4a).
2. **Broido, A.D. & Clauset, A. (2019).** "Scale-free networks are rare."
   *Nature Communications* 10, 1017. DOI: 10.1038/s41467-019-08746-5. —
   Primary-read (abstract; full table not accessed). The necessary
   methodological counterweight to (1) per `power-law-rigor`.
3. **Leland, W.E., Taqqu, M.S., Willinger, W. & Wilson, D.V. (1994).**
   "On the Self-Similar Nature of Ethernet Traffic (Extended Version)."
   *IEEE/ACM Transactions on Networking* 2(1), 1–15. — Snippet-only this
   session (fetch failed); the canonical origin of Internet traffic
   self-similarity / long-range dependence (Section 5).
4. **Yook, S.-H., Jeong, H. & Barabási, A.-L. (2002).** "Modeling the
   Internet's large-scale topology." *PNAS* 99(21), 13382–13386. DOI:
   10.1073/pnas.172501399. — Primary-read. Source of the fractal-
   dimension figure (Section 4d) and a widely cited AS-topology growth
   model.
5. **International Telecommunication Union (2025).** "Facts and Figures
   2025" / Global Connectivity Report 2025. — Snippet-only (press
   release + secondary summaries). Canonical annual source for global
   Internet-user population figures (Section 3); recommend primary-read
   follow-up of the full PDF report before treating as fully verified.
6. *(Supplementary, not fully verified — candidate 6th source)*
   **CAIDA** (Center for Applied Internet Data Analysis), AS Rank /
   AS Core projects (asrank.caida.org, caida.org/projects/as-core/) —
   the standard ongoing empirical-measurement infrastructure for AS-level
   Internet topology; current AS-count figures in Section 4c should
   ultimately be sourced directly from CAIDA or APNIC's Geoff Huston
   ("ISP Column," potaroo.net) rather than secondary aggregators — flagged
   as the highest-priority primary-read follow-up for this entry.

---

## 11. Follow-up flags (for a future verification pass)

- Re-fetch Leland et al. 1994 primary PDF (or the ACM DOI-linked version)
  to confirm exact Hurst-parameter figures reported in the original paper
  rather than relying on later secondary literature's H≈0.7–0.85 range.
- Re-fetch Broido & Clauset 2019's full results table (Table 1) to find
  the Internet AS graph's EXACT classification (Strongest/Strong/Weak/
  Super-Weak/Not scale-free) rather than the current unresolved "handful
  of technological networks are strongly scale-free" abstract-level
  statement.
- Verify current AS count directly from CAIDA AS Rank or APNIC/Huston's
  ISP Column rather than secondary aggregator summaries.
- Locate a primary, citable mass-of-Internet-infrastructure estimate (or
  formally record it as permanently unknown / not meaningfully definable
  given ambiguous system boundary) before any Φ_m derivation is attempted.
- Open arXiv:0910.2140 ("A critical look at power law modelling of the
  Internet") — flagged twice above as a lead for both the degree-
  distribution and cascade-statistics sections but never opened.
- Locate a primary source for the spatial-extent figure (submarine-cable
  atlas / TeleGeography) rather than the geometric inference used here.
