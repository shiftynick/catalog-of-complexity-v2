# Cross-Entry Commensurability Audit — v0.2 Sweep (Post-Expansion-Batch)

**Auditor:** cross-entry commensurability auditor (orchestrator role)
**Date:** 2026-07-02
**Scope:** ALL 15 catalog entries — the 10 verified pilot entries (cities,
earthquake-fault-systems, financial-markets, languages, planetary-climate,
power-grids, river-networks, stars, the-internet, tropical-cyclones) PLUS the
5 new v0.2 expansion-batch drafts (global-economy, weather-systems,
ocean-circulation, galaxies, world-wide-web).

Sources read in full: all 15 `data/classes/*.yaml` entries, `schema/panel-spec.yaml`,
all 15 files in `schema/anchors/*.yaml`.

---

## 1. Full rubric/hybrid score matrix (15 entries x 15 columns)

Scores as recorded in each entry (rubric score or hybrid's rubric component).
`na` = not scored under this framing (none found — all 15 columns are scored
in all 15 entries). Entries in **bold** are the new v0.2 batch.

| Entry | decentr | modularity | nonlin | feedback | openness | chaos | criticality | tipping | mem_hyst | info_proc | adapt_cap | emergence | self_org | robust | cascade |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| cities | 2 | 2 | 3 | 3 | 3 | 0 | 0 | 1 | 3 | 3 | 3 | 3 | 3 | 3 | 2 |
| earthquake-fault-systems | 4 | 2 | 3 | 1 | 1 | 2 | 2 | 1 | 2 | 1 | 0 | 2 | 3 | 3 | 2 |
| financial-markets | 2 | 2 | 4 | 3 | 2 | 1 | 1 | 2 | 3 | 4 | 4 | 4 | 2 | 3 | 2 |
| **galaxies** | 4 | 1 | 3 | 3 | 2 | 3 | 0 | 1 | 2 | 0 | 0 | 3 | 4 | 3 | 0 |
| **global-economy** | 3 | 2 | 3 | 3 | 3 | 1 | 0 | 1 | 3 | 3 | 3 | 3 | 3 | 3 | 2 |
| languages | 4 | 1 | 1 | 2 | 1 | 0 | 0 | 2 | 4 | 4 | 3 | 3 | 4 | 4 | 1 |
| **ocean-circulation** | 4 | 1 | 4 | 4 | 3 | 2 | 0 | 3 | 4 | 0 | 0 | 3 | 4 | 2 | 0 |
| planetary-climate | 4 | 1 | 4 | 4 | 3 | 3 | 1 | 4 | 4 | 0 | 0 | 3 | 4 | 3 | 2 |
| power-grids | 1 | 3 | 3 | 3 | 2 | 1 | 2 | 2 | 2 | 3 | 2 | 2 | 1 | 2 | 3 |
| river-networks | 4 | 2 | 2 | 3 | 3 | 1 | 1 | 2 | 2 | 1 | 1 | 2 | 4 | 3 | 1 |
| stars | 4 | 1 | 3 | 2 | 4 | 2 | 2 | 0 | 1 | 0 | 0 | 2 | 4 | 4 | 0 |
| the-internet | 3 | 2 | 2 | 2 | 2 | 1 | 1 | 0 | 2 | 3 | 2 | 2 | 2 | 3 | 1 |
| tropical-cyclones | 4 | 1 | 4 | 4 | 4 | 4 | 0 | 2 | 1 | 0 | 0 | 3 | 4 | 1 | 0 |
| **weather-systems** | 4 | 1 | 4 | 3 | 3 | 4 | 0 | 2 | 1 | 0 | 0 | 3 | 4 | 1 | 0 |
| **world-wide-web** | 3 | 2 | 1 | 2 | 1 | 0 | 0 | 0 | 2 | 3 | 2 | 2 | 3 | 3 | 1 |

Column key: decentr=decentralization, modularity, nonlin=nonlinearity,
feedback, openness=openness_dissipation, chaos=chaos_sensitivity,
criticality, tipping=tipping_transitions, mem_hyst=memory_hysteresis,
info_proc=information_processing, adapt_cap=adaptive_capacity, emergence,
self_org=self_organization, robust=robustness_resilience,
cascade=cascade_susceptibility.

---

## 2. Ordering-violation hunt (per column, side-by-side against anchor scale)

Method: for every column, read every entry's justification text (not just the
number) and check that the internal claims support the assigned rank relative
to neighboring scores, against the anchor scale text.

### decentralization — CLEAN, with one genuine surprise
Ordering 4 (stars/galaxies/ocean-circ/planetary-climate/tropical-cyclones/
weather-systems/river-networks/earthquake-faults, all no-controller physical
systems) > 3 (the-internet, world-wide-web, global-economy — bookkeeping-only
coordination) > 2 (financial-markets, cities — real authority over part of the
mechanics) > 1 (power-grids — real-time steering) holds up on inspection.
Surprise worth flagging as *data*: **global-economy (3) sits above
financial-markets (2)** despite global-economy containing financial-markets.
This is not an error — global-economy's IMF/WTO/BIS institutions genuinely do
less real-time steering than a single exchange operator's matching engine —
but it is a striking result (the whole is *more* decentralized than one of
its own parts) worth flagging as a genuine finding for docs/findings.md.

### modularity — ORDERING VIOLATION (fixed mid-audit, documented in ocean-circulation's own fix_log)
ocean-circulation's modularity was originally drafted at 2 with a
justification whose own evidence text ("cross-basin overturning is
*definitionally* part of the system's function... an explicit cross-basin
coupling") matches planetary-climate's score-1 anchor language almost
verbatim, not the anchor's own score-2 examples (river sub-basins with
near-zero cross-module flux; city boroughs with "somewhat porous but real"
boundaries). This was caught and fixed in-file at ocean-circulation's own
2026-07-02 pass (see its fix_log) to score 1, matching planetary-climate. I
independently re-checked this fix and endorse it — the corrected score is
consistent. **No further ordering violation found for this column.** Note the
now-clean ordering: power-grids (3, engineered-to-be-modular) > cities,
financial-markets, earthquake-faults, river-networks, the-internet,
world-wide-web, global-economy (all 2) > galaxies, ocean-circulation,
planetary-climate, weather-systems, stars, tropical-cyclones, languages (all
1, fluid/continuum or gradational systems).

### nonlinearity — CLEAN
4 (tropical-cyclones, weather-systems, ocean-circulation, planetary-climate,
financial-markets) > 3 (stars, earthquake-faults, power-grids, galaxies,
cities, global-economy) > 2 (river-networks, the-internet) > 1 (languages,
world-wide-web). All justifications are internally consistent: the
threshold-vs-pervasive distinction is applied the same way across old and new
entries (river-networks explicitly benchmarks itself against
earthquake-fault-systems and lands one notch below by the SAME comparative
argument structure fault-systems itself used against tropical-cyclones).
world-wide-web (1) correctly sits at the bottom, below even languages (1) —
tied, both scored for the same reason (no multiplicative governing-equation
coupling in the core generative act).

### feedback — CLEAN
4 (tropical-cyclones, ocean-circulation, planetary-climate) > 3 (cities,
financial-markets, global-economy, power-grids, weather-systems) > 2
(languages, the-internet, world-wide-web) > 1 (earthquake-fault-systems).
ocean-circulation's 4 is well-supported (Stommel bistability IS the field's
primary explanatory device for AMOC, matching the level-4 bar exactly the way
WISHE does for hurricanes). weather-systems correctly sits one below
tropical-cyclones (3 vs 4) with an explicit, honest distinguishing argument
(baroclinic instability is more often framed as energy-conversion than as a
closed loop in the primary literature) — this is exactly the kind of
disciplined one-notch differentiation the schema wants.

### openness_dissipation — CLEAN, one flagged-but-defensible squeeze
4 (stars, tropical-cyclones) > 3 (cities, ocean-circulation, planetary-climate,
global-economy, weather-systems) > 2 (financial-markets, power-grids,
the-internet) > 1 (languages, earthquake-fault-systems, world-wide-web).
weather-systems' 3 is derived (not merely comparator-scored) using the SAME
atmosphere-mass-normalization convention planetary-climate established
(~2.0-2.6 W/m^2 Lorenz-cycle dissipation), and is explicitly kept below
tropical-cyclones' 4 because it's a class-aggregate global flux, not a
per-system power budget — sound reasoning, properly disambiguated.
world-wide-web (1) correctly sits BELOW the-internet (2): the Web explicitly
scopes physical throughput entirely out of its own boundary (assigns it to
the-internet), which is a defensible and load-bearing distinction, not an
error.

### chaos_sensitivity — GENUINE SURPRISE, not an ordering violation, flagged for docs/findings.md
weather-systems (4) ties tropical-cyclones (4) and actually reasons EXPLICITLY
that it, not tropical-cyclones, is the "true home" of the 2-week
predictability-horizon figure (Lorenz derived it studying synoptic weather,
not hurricanes specifically) — and it outscores its own parent,
planetary-climate (3), which explicitly defers the figure downward "belongs
to the WEATHER subsystem, not the climate-level score." This 3-level nested
nesting (planetary-climate 3 < tropical-cyclones/weather-systems 4, i.e. a
PARENT scoring below its OWN CHILDREN on the same column) is internally
consistent and well-argued across all three entries, but it is worth flagging
explicitly as a genuine, interesting non-monotonicity: composition does not
guarantee that a parent system inherits its child's sharpest quantitative
claim at full strength — the child is closer to the well-instrumented,
directly-measured phenomenon. galaxies (3) is a comparably well-reasoned
rescore (orbital chaos is textbook-settled, not "contested," which is why it
sits at 3 not 2 — correctly distinguished from stars' 2, which rests on
genuinely CONTESTED chaotic-vs-stochastic-dynamo literature). No violation;
recommend this ordering nuance for the summary's "surprises are data" note.

### criticality — CLEAN after multiple prior corrections; verified stable
0 (cities, galaxies, global-economy, languages, ocean-circulation,
tropical-cyclones, weather-systems, world-wide-web) < 1 (financial-markets,
planetary-climate, river-networks, the-internet) < 2 (earthquake-fault-systems,
power-grids). All four "0" new-batch entries (galaxies, global-economy,
ocean-circulation, world-wide-web) correctly apply the events-not-structure
and events-of-the-scoped-system boundary_clarifications: none of them
conflates a STATIC topology/structural power-law claim (galaxies'
correlation-function gamma~1.8, ocean-circulation's AMOC bistability,
world-wide-web's degree distribution) with this column's EVENT-statistics
requirement. This is a substantive commensurability win: the new batch is
holding the line the old batch's own 2026-07-02 corrections (river-networks
0->1, cities 1->0, tropical-cyclones 1->0) established. ocean-circulation's
justification explicitly and correctly cites criticality.yaml's own AMOC
worked example as its textbook illustration.

### tipping_transitions — CLEAN
4 (planetary-climate, calibration ceiling) > 3 (ocean-circulation) > 2
(financial-markets, power-grids, river-networks, tropical-cyclones,
languages, weather-systems) > 1 (cities, earthquake-fault-systems,
galaxies, global-economy) > 0 (stars, the-internet, world-wide-web).
ocean-circulation's 3 is well-justified against the anchor's own "level 4 is
reserved for climate as the FULL system" caveat — AMOC alone, even with a
quantified hysteresis width and named mechanism, correctly stays one below
the ceiling. weather-systems' 1->2 rescore (bombogenesis, a named
Sanders-Gyakum threshold) is a good catch and correctly matches the
single-modeled-mechanism-is-2 boundary rule, mirroring tropical-cyclones'
own rapid-intensification citation for the identical reason.

### memory_hysteresis — CLEAN
4 (planetary-climate, ocean-circulation, languages) > 3 (cities,
financial-markets, global-economy) > 2 (earthquake-fault-systems, galaxies,
power-grids, river-networks, the-internet, world-wide-web) > 1 (stars,
tropical-cyclones, weather-systems). ocean-circulation's 4 directly reuses
the AMOC anchor score verbatim (correctly, since it IS the AMOC entry now)
and planetary-climate's own memory_hysteresis section correctly still cites
the identical AMOC evidence at its own exemplar(earth) level without
double-derivation-drift — both entries independently converge on the SAME
0.4 Sv figure from the SAME van Westen & Dijkstra (2023) source, which is
exactly the kind of shared-evidence consistency the audit is checking for.

### information_processing — CLEAN, strong physical/engineered/social separation preserved
Physical-system floor holds cleanly at 0 across ALL physical-continuum
systems in both batches: stars, tropical-cyclones, planetary-climate,
weather-systems, ocean-circulation, galaxies all score 0 — a full six-entry
floor cluster, with each entry's justification independently but
consistently invoking the SAME does_not_count exclusion (physical transport
≠ detection-response). Engineered systems cluster at 3 (power-grids,
the-internet, world-wide-web, global-economy): world-wide-web's HITS/PageRank
information_processing=3 justification is a genuinely well-reasoned new
addition, correctly held below financial-markets' 4 (aggregates PUBLIC
link-topology, not dispersed PRIVATE information) — a real and defensible
distinguishing argument, not just comparator-matching. cities (3) also
correctly slots into the engineered-information-layer band. Top of scale (4)
reserved for financial-markets and languages, both genuine
aggregation/inference systems. earthquake-fault-systems and river-networks
both correctly sit at 1 (threshold-trigger-only, the deliberate low anchor).

### adaptive_capacity — CLEAN, sharpest CAS/non-CAS axis holds
0 (all pure-physical systems: stars, tropical-cyclones, planetary-climate,
weather-systems, ocean-circulation, galaxies, earthquake-fault-systems) < 1
(river-networks) < 2 (power-grids, world-wide-web) < 3 (cities,
global-economy, languages) < 4 (financial-markets). This is the catalog's
cleanest and most dramatic bimodal split, and the new batch reinforces it
exactly: galaxies and ocean-circulation both land in the same 0-floor cluster
as their physical siblings for the identical regulation-vs-adaptation
reasoning, while global-economy lands at 3 (matching cities) via the same
"real but slow, institutional-timescale adaptation" argument. No violations.

### emergence — CLEAN
4 (financial-markets, sole occupant of the ceiling) > 3 (cities,
global-economy, galaxies, ocean-circulation, planetary-climate,
weather-systems, tropical-cyclones, languages) > 2 (earthquake-fault-systems,
stars, power-grids, the-internet, world-wide-web) > (river-networks alone
at 2, in the same band). The new batch's four "3" entries (galaxies,
global-economy, ocean-circulation, weather-systems) each supply a genuinely
distinct order-parameter citation (rotation curve/Hubble sequence;
Hidalgo-Hausmann ECI; Sverdrup/AMOC transport; bombogenesis/frontal
classification) rather than copy-pasting a generic justification — a good
sign for the batch's evidentiary discipline. No system besides
financial-markets claims the ceiling, consistent with the anchor notes'
explicit ceiling-effect warning.

### self_organization — CLEAN
4 (stars, tropical-cyclones, planetary-climate, ocean-circulation, galaxies,
river-networks, languages) > 3 (cities, global-economy, world-wide-web) > 2
(the-internet) > 1 (power-grids). This is the single largest score-4 cluster
in the panel (7 of 15 entries) — expected, since self_organization is
explicitly the "most load-bearing cross-framework feature" per the panel
spec. All four new-batch score-4 entries (ocean-circulation, galaxies, and
implicitly weather-systems=4 too — 8 of 15) supply genuine spontaneous-order
evidence (gyre/overturning assembly from wind-stress+Coriolis+buoyancy;
spiral-arm density-wave self-organization; AR flux-concentration statistic)
rather than defaulting to the top score by inertia. world-wide-web's 3 (one
ABOVE the-internet's 2) is a well-argued genuine finding: the Web's
link-formation process has even LESS structural templating than the
Internet's BGP/Tier-1 peering-economics-templated topology — a real, defended
asymmetry between parent and contained-child, not a mechanical inheritance.

### robustness_resilience — ORDERING TENSION, flagged (not a clear violation, but worth surfacing)
4 (stars, languages) > 3 (cities, earthquake-fault-systems, financial-markets,
global-economy, galaxies, planetary-climate, river-networks, the-internet,
world-wide-web) > 2 (power-grids, ocean-circulation) > 1 (tropical-cyclones,
weather-systems). The tension: **ocean-circulation (AMOC) scores 2**, the
same tier as power-grids, while its own PARENT planetary-climate scores 3 for
what is substantially the same underlying physical system (AMOC collapse is
literally planetary-climate's own tipping_transitions=4 ceiling-case
evidence). ocean-circulation's own justification is candid about why: it
explicitly does NOT adjudicate the contested AMOC weakening-trend literature
and treats "known event classes... CAN destroy or durably alter the current
circulation state" as decisive for a 2 rather than a 3. This is a defensible,
narrower-scope-at-the-AMOC-exemplar-level reading (matching the anchor's own
does_not_count clause that class-level persistence must not inflate an
exemplar score) — but it does mean a reader comparing planetary-climate's
robustness_resilience=3 (Earth's whole climate, including AMOC as one of 16
tipping elements) against ocean-circulation's robustness_resilience=2 (AMOC
specifically) sees the SUBSYSTEM scored more fragile than the SYSTEM
containing it, on the same evidentiary basis (both cite Armstrong McKay
2022). This is not incoherent — it is arguably the correct signal (a single
subsystem near its own tipping threshold IS more fragile than the coupled
system as a whole, which has more redundant pathways) — but it was not
explicitly flagged as a considered finding in either entry, so it is
surfaced here as a candidate for docs/findings.md rather than a fix.

### cascade_susceptibility — CLEAN
3 (power-grids) > 2 (cities, earthquake-fault-systems, financial-markets,
global-economy) > 1 (river-networks, the-internet, languages, world-wide-web)
> 0 (stars, galaxies, ocean-circulation, tropical-cyclones, weather-systems).
The new batch's floor cluster (galaxies, ocean-circulation, tropical-cyclones,
weather-systems, alongside stars) is fully consistent: all five apply the
identical "no component-to-component failure PROPAGATION through a coupled
system of discrete components" reasoning, correctly distinguishing a single
bifurcation/reorganization event (AMOC collapse, eyewall replacement, a
merger) from a cascade. global-economy's 2 (matching financial-markets and
cities) is well-evidenced with a genuinely global-scale citation
(Degryse/Elahi/Penas cross-border bank exposure), not merely inherited from
its financial-markets child.

---

## 3. Polar-relationship checks

### Physical systems ~0 on adaptive_capacity/information_processing — HOLDS, strongly
Every purely physical entry (stars, tropical-cyclones, planetary-climate,
weather-systems, ocean-circulation, galaxies, earthquake-fault-systems,
river-networks) scores 0 on adaptive_capacity except river-networks (1,
structural-accommodation-only, per the anchor's own explicit exception) and
earthquake-fault-systems (0). On information_processing, all six pure fluid/
gravitational-continuum systems (stars, tropical-cyclones, planetary-climate,
weather-systems, ocean-circulation, galaxies) score exactly 0, with
earthquake-fault-systems and river-networks at 1 (threshold-only). This is
the strongest, cleanest polar cluster in the entire panel and the new batch
(galaxies, ocean-circulation, weather-systems) reproduces it exactly, adding
three more data points to an already-strong pattern rather than diluting it.

### Engineered systems mid-range on decentralization — HOLDS, with the refined discriminator already documented
Per decentralization.yaml's own 2026-07-02 cross-entry-audit-added guidance
("real-time steering vs. bookkeeping-only" as the actual discriminator, not
raw "engineered-ness"): power-grids (1, real-time steering) < financial-
markets/cities (2, partial real-time authority) < the-internet/world-wide-web/
global-economy (3, bookkeeping-only coordination). This refined 3-tier
structure, first identified from the pilot 10, is reproduced exactly by all
three new engineered/institutional entries (global-economy=3,
world-wide-web=3, matching the-internet=3) — a genuine commensurability
success: the new batch did not need a NEW discriminator invented for it, the
existing one from the pilot generalized cleanly.

### alphabet_closure gradient (closed -> constrained -> open tracking physical -> engineered -> social) — HOLDS EXACTLY, zero violations
Verified via direct grep across all 15 entries:
- **closed** (physical, 8 entries): stars, tropical-cyclones, planetary-climate,
  weather-systems, ocean-circulation, galaxies, river-networks,
  earthquake-fault-systems.
- **constrained** (engineered/institutional, 5 entries): financial-markets,
  power-grids, the-internet, world-wide-web, global-economy.
- **open** (social/cultural, 2 entries): cities, languages.
This is a perfect, unbroken gradient across BOTH batches with no exceptions —
the single cleanest structural finding in the whole panel, and the new batch
(5/5 entries) slots into the existing 3-tier structure without requiring any
new category. This is strong positive evidence the axis is real and
well-specified, not an artifact of the pilot-10's particular composition.

---

## 4. Relations graph — reciprocity audit

All `part_of`/`contains` edges between EXISTING entries were checked for
reciprocity (both sides list each other).

| Edge | Child.part_of | Parent.contains | Reciprocal? |
|---|---|---|---|
| tropical-cyclones <-> planetary-climate | yes | yes | OK |
| tropical-cyclones <-> weather-systems | yes | yes | OK |
| ocean-circulation <-> planetary-climate | yes | yes | OK |
| river-networks <-> planetary-climate | yes | yes | OK |
| weather-systems <-> planetary-climate | yes | yes | OK |
| weather-systems -> tropical-cyclones (subtype) | (n/a, weather-systems.contains) | tropical-cyclones.part_of includes weather-systems | OK |
| galaxies <-> stars | yes (stars.part_of:[galaxies]) | yes (galaxies.contains:[stars]) | OK |
| power-grids <-> cities | yes | yes | OK |
| financial-markets <-> cities | yes | yes | OK |
| financial-markets <-> global-economy | yes | yes | OK |
| cities <-> global-economy | yes | yes | OK |
| the-internet <-> world-wide-web | yes | yes | OK |
| world-wide-web <-> the-internet | yes (part_of) | yes (contains) | OK |

**All 13 resolved edges between existing entries are fully reciprocal.** No
dangling or one-sided edges were found among resolved ids. This is a clean
result — the new batch's drafters were careful to check and reciprocate
against the existing entries' relations blocks before adding their own.

### Unresolved ids — roster expansion queue (compiled across all 15 entries)

| Unresolved id | Referenced from | Type |
|---|---|---|
| plate-tectonics | earthquake-fault-systems.part_of | parent (geophysical) |
| cultures | languages.part_of | parent (cultural) |
| road-traffic-systems | cities.contains | child (infrastructure) |
| social-networks | cities.contains | child (socio-cultural) |
| energy-systems | power-grids.part_of | parent (infrastructure, "grid-of-grids") |
| firms | global-economy.contains | child (socio-economic, atomic-agent level) |
| moist-convection-cells | tropical-cyclones.contains | child (physical-chemical) |
| photospheric-convection-cells | stars.contains | child (physical-chemical) |
| mesoscale-eddies | ocean-circulation (component_ontology.itself_complex) | child (geophysical) |
| western-boundary-currents | ocean-circulation (component_ontology.itself_complex) | child (geophysical) |
| ocean-gyres | ocean-circulation (component_ontology.itself_complex) | child (geophysical) |

Note: `moist-convection-cells` and `photospheric-convection-cells` were
deliberately kept DISTINCT (not merged into a single `convection-cells` id)
per an explicit, well-reasoned precedent chain (stars.yaml's
2026-07-02 consistency fix cites tropical-cyclones' own precedent for the
identical judgment call) — this is a correct, disciplined non-merge, not an
oversight; the merge/split question is explicitly deferred to whichever
future entry drafts `convection-cells.yaml` itself.

`galaxies` itself was the one PREVIOUSLY unresolved id in the pilot 10
(`stars.part_of: [galaxies] # unresolved`) that this batch resolved —
correctly reciprocated (galaxies.contains: [stars]), confirmed above.

---

## 5. Measurand / atomicity drift check (NEW batch vs. OLD/pilot)

### atomicity conventions — commensurable, with declared and defensible departures
- **ocean-circulation** explicitly reuses tropical-cyclones' precedent
  ("atoms are parcels, not molecules," order 1-10 km discretization) — good
  commensurability.
- **weather-systems** explicitly reuses the SAME order-1-km^3 parcel
  convention as tropical-cyclones AND explicitly notes it chose this
  specifically "for direct comparability with tropical-cyclones and
  planetary-climate" — exemplary cross-entry discipline.
- **galaxies** adopts a DUAL ontology (individual stars for population
  statistics + gas/dark-matter continuum for dynamics), explicitly modeled on
  languages.yaml's speaker+lexical-unit precedent, and explicitly reuses
  stars.yaml's OWN star-count figures and sources VERBATIM rather than
  re-deriving them — this is the single best cross-entry consistency practice
  observed in the whole batch (a shared quantity is cited once and reused
  identically, not independently re-estimated and risking silent drift).
  galaxies' own provenance.flags correctly self-identifies this dual-ontology
  choice as "genuinely contestable" and flags it for a future consistency
  pass against stars.yaml and planetary-climate.yaml — appropriately humble.
- **global-economy** adopts a three-tier atomicity resolution (singleton at
  class scope / national economies as the primary atomicity population /
  firms as a deeper population) that is MORE elaborate than any pilot
  entry's own atomicity choice. This is flagged by the entry itself
  (provenance.flags) as a considered but genuinely novel structure with "no
  other catalog entry [having] quite this three-tier structure." I concur
  this is a reasonable resolution given the genuine mereological oddity of a
  singleton-at-top-scope class with a real population one level down (the
  same n=1-vs-population-below tension the-internet.yaml pioneered for
  AS-node commensurability, extended one tier further here) — but it IS a
  structural precedent-setter, and if a 6th socio-economic entry is added
  later, the schema maintainers should decide whether this 3-tier pattern
  becomes the template or remains global-economy-specific.
- **world-wide-web** explicitly adopts a SINGLE-layer atomicity (pages +
  hyperlinks), explicitly contrasted against the-internet's DUAL atomicity
  (AS-nodes vs. packets), with the stated reason that the Web's characteristic
  dynamics genuinely operate at one level unlike the Internet's bi-layered
  topology/traffic split. This is a defensible non-mechanical choice — the
  entry does not force-fit the Internet's dual-layer template onto a system
  that does not need it.

**No atomicity drift was found: every new-batch entry either explicitly
reuses an existing convention (ocean-circulation <- tropical-cyclones;
weather-systems <- tropical-cyclones/planetary-climate; galaxies <- stars)
or explicitly and non-silently departs from the nearest precedent with a
stated reason (galaxies' dual-ontology vs. stars' single-ontology;
world-wide-web's single-layer vs. the-internet's dual-layer;
global-economy's three-tier vs. the-internet's two-tier singleton
framing).**

### measurand drift — one real finding, already caught and disclosed in-file
- **energy_rate_density mass-normalization convention** remains genuinely
  unresolved across the WHOLE catalog (not just the new batch): stars uses
  Chaisson's own published per-body Phi_m; tropical-cyclones uses a
  project-derived circulation-mass; cities uses body-mass of residents;
  planetary-climate explicitly carries an UNRESOLVED editorial question
  between atmosphere-mass-normalized (~233) and whole-planet-mass-normalized
  (~2e-4) conventions, a ~1.16-million-times spread depending on choice.
  weather-systems' new derivation (~2.0-2.6) explicitly and correctly follows
  planetary-climate's atmosphere-mass convention (not re-deriving its own),
  which is good — but it means weather-systems' figure and
  tropical-cyclones' figure (its own child/sibling system) are NOT
  apples-to-apples comparable (whole-atmosphere aggregate vs. per-storm
  circulation-mass), and both entries say so explicitly. This is not a new
  problem introduced by the batch; it is the SAME pre-existing,
  already-flagged (in planetary-climate's own provenance) commensurability
  gap in the schema itself (no declared convention for mass-normalizing a
  field/continuum system with no natural component boundary), now visible in
  one more place. Recommend this remain an open schema question
  (docs/decisions.md parking lot), not something fixable at the entry level.
- **extreme_event_statistics measurand_type** discipline (temporal-event vs.
  static-cross-sectional) is applied correctly and consistently across the
  new batch: galaxies' correlation-function slope is correctly filed under
  fractal_dimension_spatial (not this column, left `unknown` here);
  global-economy's Axtell firm-size Zipf is correctly tagged
  static-cross-sectional (matching city-size and word-frequency precedent);
  ocean-circulation and world-wide-web both correctly leave this column
  `unknown` rather than force-fitting a structural claim into it. No
  measurand-type violations found in the new batch.

---

## 6. No-column-means-different-things audit (spot checks beyond the above)

- **numerosity**: cross-checked that no new entry silently repeats a PILOT
  entry's numerosity figure without citation. Confirmed clean: galaxies
  explicitly cites and reuses stars.yaml's Milky-Way star-count VERBATIM
  (with an explicit note saying so), not a re-derivation; weather-systems
  explicitly EXCLUDES tropical-cyclones' ~85-storms/yr figure from its own
  numerosity to avoid double-counting, and says so in-line. Good discipline.
- **instance_population**: the new batch's genuinely n=1 entries
  (global-economy, world-wide-web — the latter modeled directly on
  the-internet's own singleton framing) correctly apply the SAME
  "n=1 is measured/high-confidence by definitional certainty, not survey"
  convention the-internet pioneered. galaxies' instance_population
  (2e12 galaxies, Conselice 2016) is correctly and independently sourced,
  not borrowed from anywhere. ocean-circulation's "n>=1, Earth-unique among
  the comparative planetary set" is a genuinely novel within-class-singleton
  framing (distinct from global-economy's and the-internet's simpler n=1)
  and is explicitly flagged by the entry itself as such — appropriately
  self-aware.
- **hierarchy_depth counting convention**: verified all entries count
  aggregation levels ABOVE the declared atom (not composition between
  entries, which lives in relations). All five new-batch entries correctly
  follow this convention and several (ocean-circulation, weather-systems,
  global-economy) explicitly cross-reference and match the counting logic
  used by the nearest pilot-entry comparator (tropical-cyclones,
  financial-markets) rather than inventing an independent convention. One
  self-corrected case worth noting: global-economy's hierarchy_depth was
  originally miscounted from firms (which its own scoping note excludes as
  the atomicity choice) and was caught/fixed to count from national
  economies instead, in the entry's own fix_log — the kind of internal
  self-consistency check the audit wants to see happening at draft time,
  not just at this pass.

---

## Summary

The five new v0.2 expansion-batch entries (global-economy, weather-systems,
ocean-circulation, galaxies, world-wide-web) are **commensurable with the
verified pilot 10**, not merely internally coherent. The three deliberately
architecture-level cross-entry patterns tested (alphabet_closure gradient,
physical-system floor on adaptive_capacity/information_processing, engineered
mid-range decentralization with the real-time-steering-vs-bookkeeping
discriminator) all hold with zero exceptions across all 15 entries. One
genuine ordering violation was found and had ALREADY been caught and fixed
in-file before this audit (ocean-circulation's modularity 2->1, verified
correct). The relations graph is fully reciprocal for every resolved edge
across all 15 entries, with 11 unresolved ids compiled into a single roster
expansion queue above. No fabricated citations, silently-averaged tensions,
or measurand conflations were found in the new batch; where genuine
schema-level ambiguities exist (energy_rate_density mass-normalization
convention for field/continuum systems), the new batch correctly inherits
and discloses the SAME open question already flagged in the pilot rather
than papering over it with an invented convention.

### Three most interesting cross-system observations in the score matrix

1. **The nested-system chaos_sensitivity inversion**: planetary-climate (3)
   scores BELOW both of its own children, tropical-cyclones and
   weather-systems (4 each), on chaos_sensitivity — and all three entries
   explicitly argue for this ordering rather than defaulting to
   parent-inherits-child's-best-evidence. The ~2-week predictability horizon
   is a property of WEATHER (the fast, chaotic subsystem), not of CLIMATE
   (the slow, boundary-value-problem subsystem it's nested inside) — Lorenz's
   own 1960s distinction, preserved faithfully three levels down the
   compositional hierarchy. This is a case where composition (part_of/
   contains) and quantitative-score inheritance genuinely diverge, and the
   catalog holds the line correctly rather than smoothing it into a single
   climate-system number.

2. **The alphabet_closure gradient is a true zero-exception law across 15
   independently-drafted entries spanning two separate research batches**:
   every one of 8 physical systems is closed, every one of 5 engineered/
   institutional systems is constrained, both of 2 social/cultural systems
   are open — with the new batch (5 entries, drafted independently of the
   pilot 10's authors' specific reasoning, months apart in the project
   timeline) reproducing the exact same 3-tier structure without needing a
   new category invented. This is the strongest evidence in the catalog so
   far that the closed->constrained->open axis is tracking something real
   about how these systems are built, not an artifact of anchor-copying
   within a single drafting batch.

3. **Global-economy scores HIGHER on decentralization (3) than its own
   contained child, financial-markets (2)** — the whole is more
   decentralized than one of its own parts. This is not a data error (both
   entries' reasoning is sound on its own terms: a single exchange operator
   does more real-time steering of ITS market than the IMF/WTO/BIS do of the
   ENTIRE global economy) but it is a genuinely counterintuitive result
   worth flagging for docs/findings.md — naive intuition says "more
   inclusive systems should look more like the sum of their parts," but
   decentralization does not compose that way: aggregating many
   differently-centralized subsystems, most of which (unlike a stock
   exchange) have NO central steering mechanism at all, dilutes the
   system-level control signal even though one particular contained part
   is comparatively more centralized.
