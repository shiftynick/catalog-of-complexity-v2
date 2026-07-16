# Road Traffic Systems — Quantitative Source Sweep

Sweep date: 2026-07-16. Scope note: this class is the road-network flow system —
metro-area road graphs plus the vehicle flow dynamics on them (per the brief's
atomicity: driver-vehicle units; driver internals out-of-scope(human)).

## GROUP A — IDENTITY & SCALE

### spatial_extent
- **Freeway/arterial network (urban)**: characteristic linear extent ~10^4-10^5 m
  (a metro road network spans tens of km; individual links hundreds of m to few km).
  [unverified — model knowledge; order-of-magnitude only, no dedicated citation found].
- **Sugiyama 2008 circular-road experiment**: circuit length = 230 m (single-lane
  circular track, 22-23 vehicles). Primary-read attempt on IOPscience returned
  HTTP 403 (paywall-gate on the fetch tool despite open-access status); value
  is widely reported in secondary sources (e.g. Hossenfelder's contemporaneous
  write-up) but NOT primary-read by this sweep — flag for a direct-PDF retry.
  evidence_status: measured-untested (secondary-corroborated, not primary-verified
  by this sweep).

### characteristic_timescales
- Car-following reaction time: ~1 s (standard traffic-engineering perception-reaction
  time assumption) [unverified — model knowledge].
- Stop-and-go wave period: minutes (Sugiyama-type oscillations, ~O(10-100 s) per
  cycle in ring experiments) [unverified — model knowledge, not primary-read].
- Jam propagation / whole-episode duration: tens of minutes to hours (rush-hour
  breakdown-recovery cycle) [unverified — model knowledge].
- Network lifetime (infrastructure): decades [unverified — model knowledge].
All timescales here are UNVERIFIED — no primary source fetched successfully this
sweep; a follow-up primary read of Helbing 2001 or Treiber/Kesting's textbook is
needed before class-general values can be upgraded past qualitative confidence.

### numerosity / instance_population
- **Numerosity (vehicles in operation, global)**: ~947 million passenger cars +
  ~335 million commercial vehicles ≈ 1.28 billion vehicles in use worldwide, 2015
  estimate, OICA-sourced (via Statista secondary citation). Source: OICA
  (International Organization of Motor Vehicle Manufacturers), "Number of vehicles
  in use worldwide" — https://www.statista.com/statistics/281134/number-of-vehicles-in-use-worldwide/
  citing OICA. Snippet-verified (search-snippet only; OICA primary page not
  directly fetched this sweep — oica.net/statistics/ exists but was not opened).
  evidence_status: measured-untested (secondary aggregator, primary OICA table
  not directly read).
- **US registered vehicles**: FHWA Highway Statistics 2022, Table MV-1 ("2022
  State Motor-Vehicle Registrations") — table exists at
  https://www.fhwa.dot.gov/policyinformation/statistics/2022/mv1.cfm but the
  search snippet did NOT surface the national total figure; the page was not
  directly fetched. Folk figure ~2.8×10^8 US registered vehicles is
  [unverified — model knowledge] pending a direct fetch of mv1.pdf.
- **instance_population**: every metro-area road network is one instance; on the
  order of thousands of distinct metropolitan networks globally (UN/World Bank
  urban-agglomeration counts run ~1700+ agglomerations >300k population) — this
  count itself is [unverified — model knowledge], not separately sourced this
  sweep. class-general level; a real (non-n=1) population, satisfying
  instance_population's epistemic-possibility test for class-level distributions.

### energy_rate_density
- No published Phi_m or fuel-consumption-per-network-mass figure found or expected
  to exist; both power (fuel energy throughput) and mass (vehicles? + roadbed?)
  denominators are ill-defined at class-general level, matching the the-internet
  precedent flagged in the brief. Recommend: **unknown**, evidence_status: unknown.
  No search was run for this column since the brief pre-diagnosed it as
  not-forceable and no candidate paper surfaced incidentally.

## GROUP B — STRUCTURE

### fractal_dimension_spatial
- No source retrieved this sweep. Road-NETWORK spatial fractal dimension has a
  literature (street-network box-counting studies report D~1.7-1.9 for grid-like
  urban street patterns) but no specific citation was fetched — **not searched
  this sweep due to time budget; flag for follow-up.** Do not record a value
  without a primary/snippet read.

### degree_distribution
- Not searched this sweep. The brief frames interaction_topology as
  hierarchical-mixed (static road graph + continuum-like flow), so a network
  degree-distribution claim would apply to the INFRASTRUCTURE graph only, which
  is a separate literature (transportation network science: road graphs are
  reported as near-planar with low, non-power-law degree — e.g. most nodes
  degree 3-4) — [unverified — model knowledge], not sourced this sweep.

## GROUP C — DYNAMICS

### extreme_event_statistics (measurand: jam propagation speed; NOT a tail-exponent measurand)
- Wide moving jam downstream-front propagation speed: **empirically ~15-20 km/h**,
  remarkably constant across widely different traffic/road conditions — Kerner &
  Rehborn (1996) is the originating empirical claim; corroborating measurements:
  -15 km/h on I-5 North, average -16 km/h on German autobahn A5 (per a secondary
  synthesis found via search, likely drawing on Kerner's "Microscopic features of
  moving traffic jams," arXiv:physics/0510167 — NOT itself fetched/primary-read
  this sweep). measurand_type: this is a PROPAGATION-SPEED constant, not a
  heavy-tail/power-law statistic — it does NOT belong in extreme_event_statistics
  as a tail exponent; it is better placed as a qualitative/quantitative fact
  under emergent_phenomena's order_parameter and/or temporal_correlation-adjacent
  narrative. Flagging this measurand-type mismatch explicitly for the drafter.
  evidence_status: measured-untested (snippet-only, no primary read of Kerner &
  Rehborn 1996 or the arXiv corroboration this sweep).
- No CSN-grade jam-size or jam-lifetime tail-exponent fit was found for REAL
  (field-measured) traffic this sweep. Nagel & Paczuski 1995 "Emergent traffic
  jams" (PRE 51:2909) is a CA-model result per the brief, not measured field
  statistics — not independently re-verified this sweep (relying on brief's
  characterization). Recommend capping any criticality-adjacent claim at
  mechanism_status: proposed, per the brief's mechanism-alone-caps-at-1 rule.

### memory_hysteresis / capacity drop
- **Capacity drop magnitude**: reported range 2%-25% across studies; a commonly
  cited freeway-ramp-merge example is ~500 veh/h (11.9%) drop below pre-breakdown
  maximum flow. Source: MDPI "Capacity Drop at Freeway Ramp Merges... A Tutorial
  Report" (Sustainability 15(3):2050, 2023) — https://www.mdpi.com/2071-1050/15/3/2050
  — snippet-verified only (search-result summary, not the full paper fetched).
  evidence_status: measured-untested.
- Hysteresis is visible as two distinct branches (deceleration vs acceleration)
  in the speed-density / flow-density fundamental diagram; post-breakdown outflow
  at a bottleneck is lower than the pre-breakdown maximum at the same density —
  a genuine path-dependence claim, distinct from the fundamental diagram's normal
  scatter. This is the citable bistability/metastability material the brief asks
  for tipping_transitions' ≥2 case (capacity drop + FD hysteresis + Kerner
  metastable synchronized-flow states) — NOT itself a "congestion episode" of
  the does_not_count clause, because it is a modeled, thresholded, named
  mechanism with quantified magnitude, satisfying single-modeled-mechanism-is-2.
  Recommend tipping_transitions score 2 (not 1, not 3 — no systematic multi-element
  inventory analogous to climate exists), contingent on the drafter primary-reading
  at least one capacity-drop/hysteresis paper before finalizing (this sweep only
  snippet-verified).
- Geroliminis & Sun 2011 (MFD-hysteresis) — brief instructs upgrading from
  snippet to primary; this sweep did NOT fetch that paper directly (time budget;
  prioritized the new spine sources instead). Flag as outstanding for the
  drafter/verifier stage.

### Fundamental diagram reference values (supporting numbers, not a named panel column but useful for narrative/anchoring)
- Practical freeway lane capacity: ~2000-2400 veh/h/lane (historical range 1950→2000
  under evolving driver behavior/vehicle tech); a commonly used nominal figure is
  2200 veh/h/lane. Example Dutch-motorway calibration: free-flow speed u0=110 km/h,
  critical density kc=27 veh/km/lane, jam density kj=110 veh/km/lane, giving
  capacity ≈2241 veh/h/lane. Source: TU Delft OCW "Chapter 4. Fundamental diagrams"
  course notes (https://ocw.tudelft.nl/wp-content/uploads/Chapter-4.-Fundamental-diagrams.pdf)
  and FHWA "Traffic Stream Characteristics" (Hall) — both snippet-verified only
  via search summaries, neither fetched in full.

## Sources fetch failures / outstanding primary reads
- Sugiyama et al. 2008 (IOPscience, doi:10.1088/1367-2630/10/3/033001): WebFetch
  returned HTTP 403 despite the journal's open-access status — likely a bot-block
  on the fetch tool, not an actual paywall. RETRY with a direct-download approach
  (e.g. IOPscience PDF link or an arXiv mirror) at drafting time; this is the
  single highest-priority re-fetch given the brief's emphasis on this as "THE
  emergence core."
  Reference: Sugiyama, Y., Fukui, M., Kikuchi, M., Hasebe, K., Nakayama, A.,
  Nishinari, K., Tadaki, S. & Yukawa, S. (2008). Traffic jams without
  bottlenecks—experimental evidence for the physical mechanism of the formation
  of a jam. New Journal of Physics 10, 033001.
- Helbing, D. (2001). Traffic and related self-driven many-particle systems.
  Rev. Mod. Phys. 73, 1067. arXiv:cond-mat/0012229 was fetched but returned as an
  unreadable binary PDF stream to the fetch tool (saved locally at
  C:\Users\shift\.claude\projects\N--coc\2f961e2a-5343-46b1-aa19-422fa6499e4c\tool-results\webfetch-1784221376139-f93r7o.pdf)
  — NOT primary-read this sweep. Needs a proper PDF-text-extraction pass (e.g.
  via the pdf skill) before the drafter can cite specific numeric content from it.
- Geroliminis, N. & Daganzo, C.F. (2008). Existence of urban-scale macroscopic
  fundamental diagrams: some experimental findings. Transportation Research Part
  B 42(9), 759-770. Located via search (ScienceDirect/RePEc listings) but not
  fetched — snippet-verified only: confirms Yokohama field experiment, MFD
  linking space-mean flow/density/speed, scatter collapses when averaged over
  a large area. No specific numeric MFD parameter values recovered this sweep.
- Geroliminis, N. & Sun, J. (2011). Hysteresis phenomena of a macroscopic
  fundamental diagram in freeway networks. Transportation Research Part B 45(9),
  1643-1656 (already in repo per research/phase4/cities-sources.md lines 320-333,
  snippet-verified, no numeric value recovered there either) — NOT upgraded to
  primary this sweep; remains snippet-verified. Upgrade attempt deferred.
- Lighthill, M.J. & Whitham, G.B. (1955). On kinematic waves II: a theory of
  traffic flow on long crowded roads. Proc. R. Soc. A 229, 317. Not fetched —
  [unverified — model knowledge] per the brief's own framing.
- Nagel, K. & Schreckenberg, M. (1992). A cellular automaton model for freeway
  traffic. J. Physique I 2, 2221. Not fetched — [unverified — model knowledge].
- Kerner, B.S. & Rehborn, H. (1996). Experimental properties of complex traffic
  flow: induction of synchronized flow. Phys. Rev. E 53, R4275 (or related 1996
  papers) — the likely origin of the ~15-20 km/h jam-propagation-speed figure;
  not directly located/fetched this sweep, only via secondary search summaries.

## Canonical review/source list for the entry (3-5 targets)
1. Helbing, D. (2001). Traffic and related self-driven many-particle systems.
   Rev. Mod. Phys. 73, 1067. [snippet-located; PDF fetch failed to parse — retry]
2. Sugiyama, Y. et al. (2008). Traffic jams without bottlenecks. New J. Phys.
   10, 033001. [located; fetch 403'd — retry via alternate route]
3. Geroliminis, N. & Daganzo, C.F. (2008). Existence of urban-scale macroscopic
   fundamental diagrams. Transportation Research B 42, 759. [snippet-verified]
4. Geroliminis, N. & Sun, J. (2011). Hysteresis phenomena of a macroscopic
   fundamental diagram in freeway networks. Transportation Research B 45, 1643.
   [already in repo, snippet-verified — coordinate upgrade with cities.yaml]
5. Kerner, B.S. — three-phase traffic theory corpus (e.g. Kerner & Rehborn 1996,
   Phys. Rev. E 53:R4275, and Kerner's later synthesis works) for the
   synchronized-flow/wide-moving-jam empirical taxonomy and the contested
   three-phase-vs-LWR status. [not directly fetched; located via secondary
   synthesis only]

## Notes on the D20 breaker classification (jam as new-entity)
Not independently re-adjudicated by this sweep (out of scope for a quantitative
source sweep) — but the recovered ~15-20 km/h constant propagation-speed figure
is exactly the empirical handle the registry test needs: a wide moving jam is
trackable through successive detector stations at a near-invariant speed,
supporting (not by itself settling) the "trackable, countable, birth-and-death
macro-object" reading. Hand this number to the drafter/registry-classification
step with its evidence_status (measured-untested, snippet-only) attached.
