# Power Grids — Source Research (Catalog of Complexity, Phase 4)

Class entry: **power-grids** (category: infrastructure). Primary exemplar: **ERCOT / Texas
Interconnection**. Reused-provenance exemplar (Group B network metrics): Western US power
grid (Newman 2003), per class-specific priorities. Compiled 2026-07-02.

Methodology note: every entry below states whether it was read from a primary source document
(PDF fetched and text-extracted directly) or only recovered via a search-engine snippet/AI
summary ("snippet-only"). Snippet-only values are lower-confidence and should be
re-verified before being locked into the catalog, per project convention.

---

## 1. Spatial extent & scale (ERCOT)

- **Transmission line miles**: figures vary slightly by publication date/source —
  ~52,700 mi (Texas Comptroller "ERCOT Snapshot" page, snippet-fetched directly,
  **primary-read** of that secondary-compiler page, dated referencing 2023),
  ~54,100+ mi and ~55,000+ mi (ERCOT's own Sept. 2023 press release, **primary-read**,
  https://www.ercot.com/news/release/09142023-ercot-provides-new — states "55,000+
  miles of transmission lines"). **Use ~52,000–55,000 miles (order of magnitude
  ~10^4-10^5 m spatial extent at the line-length level; ERCOT's own service-area
  characteristic linear extent ≈ Texas, ~1,300 km / 1.3×10^6 m E-W span)**. Numbers
  differ across ERCOT's own releases by report date — treat as a moving target,
  not a fixed constant; cite with retrieval date.
- **Service area**: 90% of Texas electric load, 213–214 of 254 Texas counties,
  >26–27 million customers (ERCOT press release and Texas Comptroller page, both
  **primary-read**, minor customer-count discrepancy between sources, 26M vs 27M,
  likely different report dates).
- **Spatial extent (order of magnitude)**: characteristic linear extent ~10^6 m
  (Texas Interconnection footprint, ~700,000 km² service area), consistent with
  infrastructure-class systems spanning a US state. evidence_status: measured.
  Source: ERCOT/Comptroller pages above.

## 2. Numerosity / component ontology (ERCOT)

- **Generation units**: reported values range 1,100 (Texas Comptroller page,
  **primary-read**) to 1,250+ (per task brief, not independently re-confirmed this
  session) to 1,460+ "including Private Use Networks" (ERCOT Sept. 2023 press
  release, **primary-read**). The 1,460+ figure is the most recent primary-sourced
  ERCOT figure recovered. **Use order of magnitude ~10^3 generation units**; do not
  assert a single precise count without a retrieval-date qualifier — ERCOT's own
  count has grown across 2023 releases.
- **Network-graph node/edge counts (topological "components," distinct from
  generation units)**: **Deka, D. & Vishwanath, S., "Analytical Models for Power
  Networks: The Case of the Western US and ERCOT Grids"** (arXiv:1204.0165v3,
  University of Texas at Austin, dated March 2015 on the DRAFT footer) —
  **PRIMARY-READ** (PDF fetched, text-extracted via pdftotext, full paper body
  read). Reports: **ERCOT connected graph = 5,514 nodes and 6,522 edges**
  (buses and transmission lines, i.e., a bus-level graph representation, finer-
  grained than the "1,460 generation units" figure — nodes here include
  substations/buses, not just generators). Companion figure for the reused
  exemplar: **Western US power grid = 4,941 nodes, 6,594 edges** (matches Newman
  2003's table exactly, confirming consistency across sources).
- **Generation capacity mix (Aug. 2023, MW, primary-read from Texas Comptroller
  page)**: total ~154,571 MW — natural gas 69,890; wind 38,695; solar 20,809;
  coal/lignite 14,321; nuclear 5,448; battery storage 4,695; hydro 600; other 113.
  Useful as a component_ontology sub-typing by generation source.

## 3. Instance population (class-level)

- **North American interconnections**: **5 total** synchronous AC grids, not 3 —
  **2 major** (Eastern Interconnection, Western Interconnection) + **3 minor**
  (Texas Interconnection/ERCOT, Quebec Interconnection, Alaska Interconnection).
  Source: Wikipedia "North American power transmission grid" (**primary-read**,
  fetched directly), consistent with U.S. DOE's "Learn More About Interconnections"
  page (title located, not independently fetched this session). **Correction to
  the task brief's framing of "3 major North American interconnections"** — the
  standard framing is 2 major + 3 minor = 5, and ERCOT is one of the *minor*
  three by capacity, not one of the majors. Eastern Interconnection (USA portion)
  ≈700 GW generating capacity; Western Interconnection (USA portion) ≈250 GW
  (same Wikipedia page, primary-read).
- **Worldwide count of national/regional power grids**: **NOT RECOVERED as a
  single citable number.** No source gives a clean global census of "N power
  grids worldwide" — the literature instead describes major synchronous regions
  qualitatively (Continental European Synchronous Grid ~25 countries; Northern
  China State Grid ~1,700 GW; IPS/UPS former-Soviet grid; SIEPAC Central America,
  6 countries; etc.), each from a different source, not from one census document.
  evidence_status: **unknown** for a global standing count — legal per
  filling_rules.no-guessing. Formation rate (grids "forming" per unit time) is
  not a meaningful framing for this class (grids are not periodically-instantiated
  events); record instance_population as: "≥5 major North American
  interconnections (citable); global count of comparable regional grids:
  unknown — no census source located."

## 4. Energy_rate_density inputs (Phi_m derivation status)

- **Power (W) input candidates**:
  - ERCOT all-time peak demand: **85,435–85,464 MW** (~8.5×10^10 W), Aug. 10,
    2023 (ERCOT press release + Texas Comptroller page, both **primary-read**;
    minor MW discrepancy between the two ERCOT-sourced figures, both ERCOT's own
    numbers from slightly different releases).
  - ERCOT total installed generation capacity: ~154,571 MW (~1.5×10^11 W),
    Aug. 4, 2023 snapshot (Texas Comptroller page, **primary-read**).
  - US national comparison (not ERCOT, context only): 2024 US net generation
    ≈4.3 PWh/yr ⇒ average continuous power ≈4.3×10^15 Wh / (365×24 h) ≈
    4.9×10^11 W (**derived** by this project from EIA-sourced figures,
    **snippet-only** for the underlying EIA number). US total installed
    generating capacity ≈1.4×10^12 W (snippet-only, EIA-adjacent sources).
- **Mass (kg) input**: **NOT RECOVERED.** No citable published figure for the
  total physical mass of the ERCOT grid (conductor + tower + transformer +
  substation mass) was found. Partial building blocks exist (e.g., ACSR
  conductor mass per km, ~0.2–1.8 t/km depending on gauge, from manufacturer
  datasheets — **snippet-only**, and using these to back into a total system
  mass would require assuming a conductor-gauge mix across ~52,000–55,000 miles
  that is not published anywhere located this session — **this would be
  fabrication, not derivation, and is explicitly not attempted**). Verdict:
  **Phi_m derivation is NOT currently possible for ERCOT/power grids from
  citable inputs** — power (numerator) is well-attested; mass (denominator) is
  an unrecovered gap. evidence_status: unknown (mass term).
- **Generic Chaisson category proxy** (reused from Phase 1, not re-derived this
  session): Chaisson's "technologists"/human-technological-society generic
  category proxy ≈**2×10^6 erg s⁻¹ g⁻¹**, and modern jet-aircraft-engine class
  examples (747-400) ≈2.7×10^7 erg s⁻¹ g⁻¹ (Chaisson 2011, *Complexity* 16(3),
  27, via Phase-1 primary-read and this session's snippet-confirmation of the
  aircraft figures). **No power-grid-specific or electrical-infrastructure-
  specific Phi_m value exists in Chaisson's published tables** — this remains
  a gap flagged already in Phase 1 (research/phase1/quantitative-backbone.md
  §"Infrastructure/technological (Internet, ERCOT)"). Any grid-specific Phi_m
  would have to be DERIVED by this project once a mass figure is found;
  currently blocked on the mass term.

## 5. Fractal_dimension_spatial

- **NOT RECOVERED — no citable numeric fractal dimension for power-grid spatial
  structure (transmission-level) was found.** Search located "Barakou &
  Koukoula, 'Fractal geometry for distribution grid topologies'" (IEEE, via
  ResearchGate/Semantic Scholar/IEEE Xplore listings, **snippet-only**, full
  text not opened) which reportedly applies box-counting fractal-dimension
  methodology to DISTRIBUTION (not transmission) grid topologies using a
  dielectric-breakdown-model synthetic generator — but no specific D value was
  extracted from any snippet, and it is unclear whether/how it would transfer
  to ERCOT's transmission-level network. Pagani & Aiello's survey (see §8)
  makes no mention of a fractal-dimension literature for power grids at all —
  its structural-metrics coverage is dominated by small-world/degree-
  distribution studies, not fractal geometry. **Record as unknown**, with the
  Barakou & Koukoula title flagged as a lead for future follow-up, not a value.

## 6. Degree distribution (network systems only) — ERCOT-specific upgrade over Newman 2003 reuse

- **Reused baseline (Newman 2003, already primary-read Phase 1, not
  re-researched)**: Western US power grid, n=4,941, m=6,594, mean degree
  z=2.67, mean path length ℓ=18.99, degree distribution **exponential, not
  power-law** (no α reported), clustering C⁽¹⁾=0.10, C⁽²⁾=0.080, assortativity
  r=−0.003. Source: Newman, M.E.J. (2003), *SIAM Review* 45(2), 167–256, Table
  II. **This remains the class-general anti-folklore datum**: power grids are
  NOT scale-free, contra popular "everything is a power law" framing.
- **NEW this session — ERCOT-specific network data, PRIMARY-READ**: Deka &
  Vishwanath (arXiv:1204.0165v3, UT Austin) directly analyze the **ERCOT grid**
  (not just a Western-US proxy): **5,514 nodes, 6,522 edges**, and report that
  the observed node-degree p.d.f. has "a significant exponential tail" for
  BOTH the Western US grid and ERCOT, best fit by a **shifted sum of two (or
  more) exponential distributions** rather than a single clean exponential or
  a power law — i.e., ERCOT's degree distribution confirms the exponential-not-
  scale-free finding directly on Texas data, with a specific functional form
  (sum-of-shifted-exponentials) more refined than Newman's single-exponential
  characterization. No single mean-degree or path-length scalar was extracted
  for ERCOT specifically (diameter is presented only as a figure/plot compared
  against a generative model, not a single reported number in the text
  extracted). Paper also cites three earlier studies independently reporting
  exponential (not power-law) degree distributions in North American grids
  (citations [3], [4], [5] in that paper — full bibliographic details not
  independently re-extracted this session, flagged as a residual gap).
  **This is a strong upgrade: the catalog can now cite an ERCOT-specific
  primary source for the exponential-degree-distribution claim, not just the
  Western-US proxy.**
- **Verdict**: degree_distribution = exponential (not power-law), CLASS-GENERAL
  finding replicated on at least two independent North American grids (Western
  US per Newman 2003; ERCOT per Deka & Vishwanath). No power-law-rigor CSN
  testing is needed here since the finding is explicitly NON-power-law —
  filling_rules.power-law-rigor is not triggered for this column's ERCOT entry.

## 7. Extreme event statistics / cascade statistics (blackout size distribution)

- **Dobson, I., Carreras, B.A., Lynch, V.E. & Newman, D.E. (2007)**, "Complex
  systems analysis of series of blackouts: Cascading failure, critical points,
  and self-organization," *Chaos* 17(2), 026103. DOI: 10.1063/1.2737822.
  **Snippet-only this session** (PDF fetched from
  documents.pserc.wisc.edu/.../Complex-Systems-Analysis-of-Series-of-Blackouts_Aug-2004.pdf
  but text extraction failed — binary/compressed content not machine-readable
  via WebFetch; not re-attempted via pdftotext this session). Reused finding
  (already flagged in Phase 1 dynamics-criticality.md, reconfirmed via
  independent search synthesis this session): blackout-size (energy unserved)
  distribution from NERC data (North American blackouts, 1984–1998 per the
  Phase-1-cited window) shows a **power-law-like fall-off with exponent between
  approximately −1 and −2** on a log-log complementary cumulative distribution
  plot. **evidence_status: measured-disputed** per panel-spec (the power-law
  claim itself, not just the exponent value, is contested on statistical-rigor
  grounds — no CSN-2009-style MLE+KS-test rigor was confirmed for this paper in
  either Phase 1 or this session). A separately-seen but **NOT independently
  confirmed** figure of "**-1.36±0.2**" appeared in secondary AI-search-summary
  text attributed loosely to "Newman/Carreras/Dobson" — **this specific number
  could NOT be traced to a specific paper or table in this session and is
  explicitly NOT included as a citable value; flagged as a likely
  search-engine conflation/hallucination risk, use only the −1 to −2 range
  from the confirmed source.**
- **ERCOT-specific cascade/blackout statistics**: **NOT RECOVERED** as a formal
  power-law or other statistical distribution fit. The February 2021 Winter
  Storm Uri event is well-documented qualitatively (ERCOT ordered ~20,000 MW
  of rolling blackouts; demand reached 69 GW on Feb. 15, 2021 while ~30 GW of
  generation was offline; >4.5 million homes lost power; ≥57 deaths across 25
  TX counties; >$195B property damage — FERC final report, UT Austin Energy
  Institute, and Wikipedia "2021 Texas power crisis," **snippet-only**, not
  independently opened as primary documents this session) — but this is a
  single large event, not a class-statistics fit, and no power-law/tail-
  exponent analysis specific to ERCOT's own blackout history was located.
  Gas-electric interdependency cascade mechanism (gas compressors depend on
  grid power; grid depends on gas generation) is documented qualitatively as
  the causal chain of the 2021 event (ScienceDirect "Cascading risks:
  Understanding the 2021 winter blackout in Texas," **snippet-only**).

## 8. Tipping elements / voltage-collapse bifurcation — DEFERRED FLAG follow-up

**Result: the deferred flag is resolved — a dedicated, citable, primary-
confirmed foundational reference exists.**

- **Dobson, I. (1992)**, "Observations on the geometry of saddle node
  bifurcation and voltage collapse in electrical power systems," *IEEE
  Transactions on Circuits and Systems I: Fundamental Theory and Applications*,
  vol. 39, no. 3, pp. 240–243. **Primary-read confirmation of citation details
  via IEEE Xplore document listing** (ieeexplore.org/document/128018/,
  fetched via search, listing page content read — title/journal/volume/issue/
  pages/year all directly confirmed on the IEEE Xplore metadata page, though
  the full paper PDF itself was not opened this session — treat citation
  metadata as primary-confirmed, technical content as textbook-standard
  [unverified in full-text detail this session]). This is the seminal paper
  establishing that voltage collapse in power systems is generically a
  **saddle-node bifurcation** of the load-flow equations — exactly the
  "textbook power-systems dynamics" citation the deferred flag called for.
- **Corroborating/extending source (primary-read attempt via PubMed abstract
  page, successfully extracted)**: Simpson-Porco, J.W., Dörfler, F. & Bullo,
  F. (2016), "Voltage collapse in complex power grids," *Nature
  Communications* 7, 10790. DOI: 10.1038/ncomms10790. **PubMed abstract
  page primary-read** (pubmed.ncbi.nlm.nih.gov/26887284/, fetched directly);
  full Nature Communications article itself hit an authentication redirect
  and was not opened. Confirms: "voltage collapse occurs through a saddle-node
  bifurcation mechanism" where a stable high-voltage equilibrium and an
  unstable low-voltage equilibrium coalesce; the paper derives a closed-form
  network-structure-dependent condition for safety from collapse. No ERCOT-
  specific case study was confirmed present in this paper (not verified either
  way from the abstract alone — full text needed to check).
- **Textbook secondary confirmation** (titles/authors/publishers located via
  search, **not independently opened**, standard-reference status only):
  Taylor, C.W., *Power System Voltage Stability* (McGraw-Hill, 1994); Van
  Cutsem, T. & Vournas, C., *Voltage Stability of Electric Power Systems*
  (Springer, 1998); Machowski, J., Bialek, J.W. & Bumby, J.R., *Power System
  Dynamics*, 2nd ed. (Wiley, 2008).
- **Tipping_transitions scoring implication**: per the anchor rubric
  (schema/anchors/tipping_transitions.yaml), a score of **2** ("at least one
  specific regime shift or tipping element is formally identified and modeled
  — a named mechanism, a proposed or estimated threshold, published in the
  primary literature — but remains a single case/small ad hoc set rather than
  a systematic inventory") is now **justified with a citable anchor**: the
  saddle-node voltage-collapse bifurcation is a single, well-established,
  formally modeled mechanism (Dobson 1992 founding paper; Simpson-Porco et al.
  2016 as a modern closed-form extension), but there is no systematic,
  multi-element "N tipping elements of power grids" inventory analogous to
  Armstrong McKay et al.'s climate inventory — so score 3 or 4 would NOT be
  supported. **Recommend tipping_transitions = 2 for power-grids, citing
  Dobson (1992) as the anchoring primary mechanism paper and Simpson-Porco et
  al. (2016) as the modern generalization**, resolving the Phase-1 deferred
  flag in SYNTHESIS.md line 56.

## 9. Temporal correlation

- **NOT RECOVERED for ERCOT specifically.** A general grid-frequency stochastic-
  process study (title/authors not fully captured — "Towards realistic
  statistical models of the grid frequency," arXiv:2104.09289, **snippet-only**,
  not opened) reportedly finds **Hurst exponent H≈0.75** for grid-frequency
  fluctuations, with the process showing Brownian/Gaussian scaling at short
  timescales transitioning to fractional-Brownian (persistent, H>0.5) scaling
  at longer timescales — but this was NOT confirmed to be ERCOT-specific (grid
  unspecified in the snippet), the paper itself was not opened, and the exact
  measurand (grid frequency in Hz, sampled at what rate, over what network) is
  not confirmed. **Flag as a promising but unverified lead — do not cite the
  H≈0.75 figure without opening the primary PDF and confirming measurand +
  grid identity**, per filling_rules.measurand-required.

## 10. Canonical review/reference sources for the entry's source list (3–5)

1. **Newman, M.E.J. (2003)**, "The structure and function of complex
   networks," *SIAM Review* 45(2), 167–256. arXiv:cond-mat/0303516.
   **PRIMARY-READ (Phase 1)** — Table II gives the Western US power grid row
   (n=4,941, ℓ=18.99, exponential degree distribution). Reused, not
   re-researched, per task brief.
2. **Dobson, I., Carreras, B.A., Lynch, V.E. & Newman, D.E. (2007)**,
   "Complex systems analysis of series of blackouts: Cascading failure,
   critical points, and self-organization," *Chaos* 17(2), 026103.
   **Snippet-only this session** (PDF located, text extraction failed).
   The cascade/blackout-statistics anchor citation, evidence_status:
   measured-disputed.
3. **Deka, D. & Vishwanath, S.**, "Analytical Models for Power Networks: The
   Case of the Western US and ERCOT Grids," arXiv:1204.0165 (v3, 2015),
   University of Texas at Austin. **PRIMARY-READ this session** (full PDF
   fetched, text-extracted, body read). The direct ERCOT-specific network-
   topology source (5,514 nodes / 6,522 edges, exponential-tail degree
   distribution) — the single most valuable new primary source recovered this
   session, upgrading the entry beyond the Western-US-grid proxy.
4. **Dobson, I. (1992)**, "Observations on the geometry of saddle node
   bifurcation and voltage collapse in electrical power systems," *IEEE
   Trans. Circuits Syst. I* 39(3), 240–243. **Primary-read citation metadata
   via IEEE Xplore listing this session.** Foundational tipping-element/
   bifurcation citation, resolving the Phase-1 deferred flag.
5. **Pagani, G.A. & Aiello, M.**, "The Power Grid as a Complex Network: A
   Survey," (arXiv:1105.3338; published version in *Physica A* 392(11),
   2688–2700, 2013 — publication venue/year not independently re-confirmed
   this session, flagged for verification). **PRIMARY-READ this session**
   (full PDF fetched, text-extracted, body read for structural-metrics
   coverage). Broad structural-network review covering small-world,
   degree-distribution, and cascading-failure topology studies across many
   national grids — good class-general review anchor for the entry's source
   list, though it surfaces essentially no fractal-geometry literature for
   grids (see §5 gap).
6. *(Supplementary, not fully verified — optional 6th)* **Simpson-Porco, J.W.,
   Dörfler, F. & Bullo, F. (2016)**, "Voltage collapse in complex power
   grids," *Nature Communications* 7, 10790. **Abstract-level primary-read**
   (PubMed listing), full text not opened. Modern extension of the
   bifurcation-based voltage-collapse framework.

---

## Summary of explicit gaps (NOT RECOVERED — do not fabricate)

- Total physical mass (kg) of ERCOT/US grid infrastructure — blocks Phi_m
  derivation entirely; power (numerator) is well-attested, mass (denominator)
  is not.
- Grid-specific (as opposed to generic "technologists" category) Chaisson
  Phi_m value — none exists in Chaisson's published tables per Phase 1 and
  this session.
- Fractal dimension of power-grid spatial structure (transmission-level) —
  no numeric D value found; distribution-level lead (Barakou & Koukoula, IEEE)
  not opened or confirmed transferable.
- Global/worldwide census count of national power grids — no single citable
  source; only qualitative regional descriptions found.
- ERCOT-specific blackout-size power-law/tail-exponent fit — only the general
  North-American/NERC-wide Dobson et al. 2007 finding exists; no Texas-specific
  statistical fit located.
- Exact single mean path length / diameter number for the ERCOT graph
  specifically (Deka & Vishwanath present diameter only as a comparative
  figure/plot against their generative model, not as one reported scalar in
  extracted text).
- Full bibliographic details for the three earlier exponential-degree-
  distribution citations referenced (but not fully re-extracted) inside Deka &
  Vishwanath 2012/2015.
- Confirmed grid-identity and full primary-source detail for the H≈0.75
  grid-frequency Hurst-exponent claim (arXiv:2104.09289) — snippet-only,
  not opened, not confirmed as ERCOT-specific.
- The "-1.36±0.2" blackout power-law exponent figure that appeared in one
  search-engine synthesis could not be traced to any specific paper/table —
  explicitly excluded as unverifiable/possible-hallucination, not used.
