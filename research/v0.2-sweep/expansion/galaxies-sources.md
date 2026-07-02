# Quantitative source sweep — galaxies

Session date: 2026-07-02. Scope: recover citable quantitative-column values for a
prospective `galaxies` class entry (category: astrophysical; primary exemplar:
Milky Way; comparative: M31/Andromeda; elliptical vs. spiral morphological
classes). Log-only pass — no `data/classes/galaxies.yaml` file created, per task
scope (sources sweep only).

---

## A. IDENTITY & SCALE

### spatial_extent

- **Milky Way disk diameter**: commonly cited ~26.8 +/- 1.1 kpc (D25 isophotal
  diameter; ~87,400 +/- 3,600 ly) up to ~30 kpc depending on convention/tracer;
  disk thickness ~400-500 pc (thin disk), spiral-arm region ~1000 ly thick.
  Extended dark-matter halo (not the luminous/stellar system) may reach
  diameter ~613 kpc (~2 Mly) in some simulations.
  Source: Wikipedia "Milky Way" (aggregates multiple published figures; NOT
  itself primary) — [unverified — model-search-tool summary, not
  primary-read]. A primary source for the D25 figure would need direct
  retrieval (e.g., Goodwin, Gribbin & Hendry 1998, or a modern Gaia-based
  study); not done this session. **snippet-only, not primary-read.**
- **M31/Andromeda disk diameter**: ~152,000 ly (D25, ~46.6 kpc) to ~220,000 ly
  cited for the extended disk (roughly 2x Milky Way's). Source: Wikipedia
  "Andromeda Galaxy" aggregation — [unverified — model-search-tool summary].
  **snippet-only.**
- Recommend flagging both figures `evidence_status: measured-untested` pending
  a primary-read of a dedicated structural-parameters paper (candidates:
  Karachentsev & Kaisin 2013 for Local Group galaxy sizes; Gaia-based Milky Way
  disk-edge papers, e.g. an arXiv 2025 "Galactic Self-Portrait" hit surfaced
  but not read this session — arxiv.org/pdf/2507.17629).

### characteristic_timescales

- **Solar orbital (galactic) period**: ~220-240 Myr (commonly rounded 225-230
  Myr), at Sun's galactocentric radius (~8 kpc), orbital speed ~220 km/s.
  Source: multiple aggregator sites (Wikipedia "Galactic year", EarthSky,
  Physics Factbook) — [unverified — model-search-tool summary, converges
  tightly across independent secondary sources but no primary paper
  read]. **snippet-only.**
- **Bar pattern rotation period**: ~160-180 Myr, from bar pattern speed
  ~35-40 km/s/kpc (dynamical modeling). Source: arXiv:2012.10130 (Shen &
  Zheng-ish "The Bar and Spiral Arms in the Milky Way: Structure and
  Kinematics" review, RAA 20:159, 2020) — surfaced via search, abstract-level
  only, **not primary-read this session.**
- **Milky Way age**: ~13.6 Gyr (oldest stars/globular clusters, beryllium
  cosmochronometry; globular cluster age range 11-13 Gyr, with M92 at ~13.8
  Gyr). Source: multiple secondary aggregations (Science News, Universe
  Today, Space.com) — [unverified — model-search-tool summary].
  **snippet-only.** NOTE: this conflicts numerically with the Chaisson
  2010/2011 Table 1 Milky Way "Age = 12 Gya" figure (see energy_rate_density
  below) — the two ages are NOT the same measurand: Chaisson's is evidently a
  characteristic evolutionary/formation age used for his energy-rate-density
  argument, not a stellar-population oldest-star age. Record both, do not
  silently reconcile.
- **Milky Way-Andromeda merger timescale**: ~8 Gyr from now (+/- 1-2 Gyr
  simulation uncertainty). Source: secondary summary of simulation literature
  (Big Think aggregation of van der Marel et al.-type work) —
  [unverified — model-search-tool summary]. **snippet-only.**
- **Spiral-arm crossing / density-wave dynamical time**: order ~4 Myr for a
  tracer to cross an arm's width under density-wave theory (secondary
  summary) — **snippet-only**, low confidence in the specific figure.
- Overall: NO timescale in this list has been primary-read this session.
  Recommend a follow-up primary-read pass before promoting any of these to
  `measured` (all currently at best `measured-untested` / snippet-only).

### numerosity / component_ontology (atomic parts)

**Atomicity decision — flagged for orchestrator judgment, not resolved here.**
Per filling_rules.atomicity-convention, the atom should be the part at which
the class's CHARACTERISTIC dynamics operate. Candidates:
  1. **Individual stars** — mirrors stars.yaml's own atomicity but arguably
     too fine-grained: galaxy-scale dynamics (rotation curves, spiral density
     waves, bar formation, mergers) are collective/statistical phenomena over
     the stellar population plus gas/dark matter, not resolved
     star-by-star.
  2. **Star clusters / stellar populations + giant molecular clouds** — a
     coarser atom that better matches the scale at which spiral-arm and
     merger dynamics are actually modeled (N-body/SPH simulations typically
     use particles representing populations, not literal single stars for
     the luminous baryonic component).
  3. A **dual ontology** (cf. languages.yaml precedent: speakers + lexical
     units) may fit best: stars (for stellar-population statistics,
     numerosity, instance_population-style counts) AND gas/dark-matter fluid
     components (for the field/continuum dynamical layer) as two distinct
     part-type rows.
  Recommendation for the drafting agent: state explicitly in the scoping note
  (as directed) that this is a deliberate departure-or-non-departure from
  stars.yaml's atom, with reasoning, rather than defaulting silently.

- **Milky Way star count**: reuse stars.yaml's own instance_population figure
  verbatim: "~1-4e11 stars standing population" (sources: mw-star-count,
  kennicutt-evans2012, van-dokkum-conroy2010; evidence_status:
  measured-untested in that entry). Commonly cited round figures in
  secondary sources: 100-400 billion stars [unverified — model
  knowledge/search-tool aggregation, consistent with stars.yaml's range].
- **Andromeda star count**: "~1 trillion stars" (secondary aggregation,
  Wikipedia/space.com) vs Milky Way's 200-400 billion — **snippet-only**, not
  primary-read; also in tension with the near-equal-mass finding below
  (mass ~ light only if M/L ratios match, which is not guaranteed — flag,
  do not treat star-count and mass parity as the same claim).

### instance_population (class-level: how many galaxies exist)

- **Conselice et al. 2016** ("The Evolution of Galaxy Number Density at z<8
  and its Implications," ApJ 830:83, arXiv:1607.03909): **primary-read this
  session** via WebFetch of the arXiv abstract page. Direct quote/result:
  "the total number of galaxies in the universe up to z = 8 is
  2.0(+0.7/-0.6) x 10^12" — i.e., ~2 trillion galaxies in the observable
  universe, with the paper's own explicit caveat that this is "almost a
  factor of ten higher than would be seen in an all sky survey at Hubble
  Ultra-Deep Field depth" (i.e., ~90% of counted galaxies are inferred from
  the stellar mass function / number-density evolution model, not directly
  observed). **This is the paper's own stated uncertainty and method
  caveat — treat the figure as model-dependent, not a direct census.**
  Read depth: abstract + methods summary via WebFetch (single-model
  extraction of the arXiv abstract page), not a full-PDF pdftotext primary
  read as was done for Chaisson — record as **primary-read (abstract/
  methods level)**, one tier below the gold-standard Chaisson read.
- **Older/superseded estimates**: field consensus prior to Conselice 2016
  clustered around ~1-2 x 10^11 galaxies (order of magnitude lower) —
  [unverified — model knowledge, the pre-2016 consensus figure was not
  independently re-sourced this session, only referenced via Conselice's own
  framing of the revision].
- **Post-2016 status**: search surfaced a 2024 JWST/MIRI paper (Wang et al.,
  arXiv:2403.02399 / ApJL, "JWST/MIRI Reveals the True Number Density of
  Massive Galaxies in the Early Universe") that revises number-density
  estimates for massive galaxies at high redshift, but no search result
  gave an explicit new all-sky total-galaxy-count figure superseding
  Conselice's 2 trillion. **Not confirmed either way whether a newer
  headline total exists; flag as open.**
- **RECOMMENDATION**: enter as `evidence_status: measured-disputed`
  (explicitly modeled/inferred, ~10x larger than direct-survey depth, and a
  field that revised itself by 10x once already within living memory —
  directly analogous to the-internet's singleton/disputed-count treatment
  pattern, though here the dispute is about a genuine class-level population
  count, not a singleton).

### energy_rate_density

- **Milky Way Phi_m = 0.5 erg/s/g, Age = 12 Gya** — Chaisson 2010/2011,
  "Energy Rate Density as a Complexity Metric and Evolutionary Driver,"
  Complexity 16(3):27, DOI 10.1002/cplx.20323, Table 1. **FULLY
  PRIMARY-READ AND RE-CONFIRMED** this session's sibling verification-debt
  pass (research/v0.2-sweep/verification-debt/chaisson-and-bvalue.md, Item
  1) via the author-hosted PDF
  (lweb.cfa.harvard.edu/~ejchaisson/reprints/EnergyRateDensity_I_FINAL_2011.pdf),
  content-stream-order pdftotext extraction, cross-checked against two
  independent body-text callouts (Sun=2 erg/s/g, Plants=900 erg/s/g) that
  rule out the naive `-layout` misalignment. **USE DIRECTLY**:
  `level: exemplar(milky-way)`, `evidence_status: measured`, source
  `chaisson2011`. This is the single gold-standard figure for this column.
- **Back-computation check (NOT to be presented as independently measured)**:
  Phi_m = L/M. Using Licquia & Newman (2015, ApJL 806:96,
  arXiv:1407.1078 — hierarchical Bayesian meta-analysis, **primary-quality
  citation surfaced but abstract/secondary-summary only this session, not
  full-PDF primary-read**) total stellar mass M* = 6.08 +/- 1.14 x 10^10
  Msun, and a luminosity figure of order ~4-8 x 10^10 Lsun (I-band /
  K-band figures cited in secondary sources; range not tightly pinned) —
  a back-of-envelope Phi_m from independently sourced L and M would land in
  a similar (same order of magnitude, erg/s/g) ballpark as Chaisson's 0.5,
  but doing this arithmetic explicitly was judged out of scope for a
  citable "measured" figure and NOT performed numerically this session.
  If the drafting agent wants a `derived` cross-check value, compute it
  explicitly, cite both L and M sources, and label `evidence_status:
  derived` — never present it as `measured`.
- **Milky Way luminosity**: no single clean total-bolometric figure was
  pinned down; secondary sources give I-band ~4x10^10 Lsun and K-band total
  (disk+bulge) ~9.5x10^10 Lsun — band-dependent, NOT bolometric, and
  **snippet-only**. The task brief's candidate figure of ~5e36 W
  [unverified — model knowledge] is roughly consistent in order of
  magnitude with ~1-2x10^10 Lsun bolometric (1 Lsun = 3.828e26 W), i.e. a
  bolometric luminosity in the ~4-8x10^10 Lsun secondary-sourced range would
  correspond to ~1.5-3x10^37 W, somewhat higher than 5e36 W — flag this
  discrepancy for the drafting agent rather than resolving it; do not
  present either figure as reconciled without further work.

---

## B. STRUCTURE

### interaction_topology

Per task brief and cross-entry precedent (planetary-climate.yaml,
`interaction_topology: field/continuum`, "no meaningful discrete-node
representation for the fluid dynamics"), galaxies should almost certainly
score **field/continuum** (gravitational N-body/continuum dynamics in
space), NOT network. No literature search performed specifically on this
point since it is a categorical/framing decision rather than a citable
quantity, but flagging for the drafting agent to make the explicit call and
write the scoping note, per the task brief's own steer. `degree_distribution`
is correspondingly likely **not applicable** for this class (network-only
column) — recommend explicit `not-applicable` entry with a one-line
justification, mirroring how planetary-climate.yaml handles non-network
columns.

### fractal_dimension_spatial

- **Galaxy two-point correlation function**: xi(r) ~ r^-gamma with gamma ~
  1.8 (the classic "1.8 power law," valid on scales roughly < 10 h^-1 Mpc),
  implying a small-scale correlation/fractal dimension D2 = 3 - gamma ~ 1.2
  for galaxy clustering. On smaller scales (within clusters), slope ranges
  -1.6 to -2.25, i.e., D ~ 1.4 to 0.5. Scale-dependent transition:
  gamma ~ 1.8 for r < 3 h^-1 Mpc (cluster regime) vs. gamma ~ 0.8 for
  larger scales (filament/supercluster regime) — NOT a single scale-free
  fractal across all scales, a genuinely bounded/scale-dependent power law.
  Source surfaced: Bagla, Yadav & Seshadri-type "Correlation function:
  biasing and fractal properties of the cosmic web," A&A (2020) — **fetch
  attempt returned HTTP 403 this session; NOT primary-read, only
  WebSearch-snippet level.** The classic gamma~1.8 result traces to
  Peebles-era work (Peebles 1980, "The Large-Scale Structure of the
  Universe") and has been reconfirmed in SDSS-era studies; neither a
  Peebles primary source nor a modern SDSS paper (e.g., Zehavi et al.) was
  directly fetched and read this session. **RECOMMENDATION: measured-untested
  at best, pending a primary-read of one canonical source (Peebles 1980 or
  a specific SDSS correlation-function paper) — this IS a power-law claim
  and is therefore subject to filling_rules.power-law-rigor; no CSN-2009-
  grade fit-rigor statement was found for this figure this session, so it
  cannot enter as a clean CSN-passing power law.** Measurand: galaxy
  spatial two-point correlation function (static-cross-sectional structure,
  not a temporal-event distribution).

### degree_distribution

Not applicable — see interaction_topology above (field/continuum framing;
no network representation identified in literature this session).

---

## C. DYNAMICS

### extreme_event_statistics

No characteristic "extreme event" statistics (in the sense of a
temporal-event heavy-tail distribution, e.g. flares/storms/blackouts) were
identified for the galaxy class itself this session. Candidate analogues
not pursued: galaxy merger mass-ratio distributions, starburst luminosity
functions. Flag as an open research item, not `unknown` yet (insufficient
search effort to assert absence) — recommend a dedicated follow-up search
before the drafting agent commits to `unknown`.

### temporal_correlation, tipping_transitions, chaos/Lyapunov

Not investigated this session — outside the time budget after prioritizing
the Conselice/Chaisson/fractal-dimension threads per the task brief's
explicit priority list. Flag as open for a follow-up sweep.

---

## Summary table

| quantity | value | unit | source | primary-read-or-snippet |
|---|---|---|---|---|
| Milky Way Phi_m (energy_rate_density) | 0.5 | erg s^-1 g^-1 | Chaisson 2010/2011, Complexity 16(3):27, Table 1 | **primary-read** (full PDF, re-confirmed this session) |
| Milky Way age (Chaisson figure) | 12 | Gya | Chaisson 2010/2011, Table 1 | primary-read (same table) |
| Milky Way age (stellar/globular-cluster) | ~13.6 (range 11-13.8) | Gyr | secondary aggregation (Science News, Universe Today, Space.com) | snippet-only |
| Observable-universe galaxy count | 2.0 (+0.7/-0.6) x 10^12 | count | Conselice et al. 2016, ApJ 830:83, arXiv:1607.03909 | primary-read (abstract/methods level) |
| Milky Way stellar mass | 6.08 +/- 1.14 x 10^10 | Msun | Licquia & Newman 2015, ApJL 806:96, arXiv:1407.1078 | snippet/secondary-summary only |
| Milky Way disk diameter | ~26.8 +/- 1.1 (up to ~30) | kpc | secondary aggregation (Wikipedia "Milky Way") | snippet-only |
| Andromeda disk diameter | ~46.6 (D25) to ~220,000 ly extended | kpc / ly | secondary aggregation (Wikipedia "Andromeda Galaxy") | snippet-only |
| Solar galactic orbital period | ~220-240 | Myr | secondary aggregation (multiple sites) | snippet-only |
| Milky Way bar pattern period | ~160-180 | Myr | arXiv:2012.10130 (RAA 20:159, 2020) | snippet (abstract-level) |
| MW-Andromeda merger timescale | ~8 (+/-1-2) | Gyr from now | secondary aggregation of simulation literature | snippet-only |
| Milky Way star count (reuse) | ~1-4 x 10^11 | stars | stars.yaml instance_population (mw-star-count, kennicutt-evans2012, van-dokkum-conroy2010) | inherited, not re-verified |
| Galaxy correlation function slope | gamma ~ 1.8 (D ~ 1.2) | dimensionless | Peebles-era / SDSS-era literature (A&A 2020 fetch 403'd) | snippet-only, source access failed |

## 3 biggest uncertainties

1. **The 2-trillion-galaxies figure is model-inferred, not observed, and the field revised itself by 10x once already (2016)** — a 2024 JWST paper on massive high-z galaxy number density was found but not read closely enough to confirm whether it further revises Conselice's total; treat instance_population as measured-disputed, not measured, and flag for a dedicated follow-up read of the JWST paper before finalizing.
2. **fractal_dimension_spatial (gamma~1.8, D~1.2) has no primary-read source this session** — the one paper fetch attempted (A&A 2020) returned HTTP 403, and the classic result's root citation (Peebles 1980) was never directly retrieved; this is a power-law claim and therefore squarely subject to filling_rules.power-law-rigor — it should not be entered above measured-untested without a CSN-grade or at least primary-read source.
3. **The atomicity/component_ontology choice (individual stars vs. stellar populations/gas vs. dual ontology) was deliberately left as an open judgment call for the drafting agent** rather than resolved here, since it is an editorial decision under filling_rules.atomicity-convention rather than a recoverable fact — resolving it wrong risks silently breaking cross-entry comparability with stars.yaml and planetary-climate.yaml.
