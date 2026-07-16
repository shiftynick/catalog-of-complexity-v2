# Plausibility Check — road-traffic-systems.yaml

Checker: plausibility (adversarial). Reference: schema/panel-spec.yaml, schema/anchors/*.yaml,
docs/schema.md, docs/roster.md, research/v0.3/expansion/road-traffic-systems-sources.md.
Entry NOT edited (read-only review).

## Arithmetic / unit re-derivations

1. **numerosity**: 947M passenger cars + 335M commercial vehicles = 1,282,000,000 ≈ 1.28e9. Arithmetic checks out exactly against the OICA/Statista figures quoted in the sweep report.
2. **component_ontology.driver-vehicle units count_oom** (~1e9 globally) is consistent with numerosity's 1.28e9. No double-count.
3. **capacity drop example** ("~500 veh/h (11.9%) drop"): 500/0.119 ≈ 4202 veh/h implied pre-breakdown flow. Internally consistent as a paired figure taken directly from the cited secondary source (MDPI 2023); not independently re-derived by the drafter, so no new arithmetic error introduced, though the implied ~4200 veh/h pre-breakdown flow (presumably a multi-lane merge total) was not sanity-checked against the ~2000-2400 veh/h/lane practical-capacity figures also in the sweep report — plausible only if the merge section is ~2 lanes; not verifiable further without primary read.
4. **Sugiyama ring density**: 22-23 vehicles / 230 m ≈ 1 vehicle per ~10 m of track. Physically reasonable density for triggering a car-following instability (vehicle + gap ~10 m at moderate density); no red flag.
5. **Stop-and-go wave period O(10-100 s)** cross-checked loosely against the 15-20 km/h (4.2-5.6 m/s) full-scale jam-propagation figure applied to a 230 m circuit: period ≈ 230 / 5 ≈ 46 s — falls inside the stated O(10-100 s) range. Rough consistency, not a formal derivation (the two figures come from different exemplars — ring vs. full-scale freeway — so this is a plausibility sanity check only, not a claimed identity).
6. **extreme_event_statistics** range stated as "~15-20 km/h" in the value field but the corroborating examples quoted are "-15 to -16 km/h" (I-5 North, autobahn A5) — both corroborating numbers sit at the low end of, not spanning, the stated 15-20 km/h range. Minor internal-consistency wrinkle (note, not a hard error — one is a class range, the other two specific measurements that happen to cluster low).

## hierarchy_depth vs. component_ontology

- hierarchy_depth = 3 with levels: driver-vehicle units (atom, not counted as a level) -> platoons/queues at a link (1) -> corridor/subnetwork (2) -> network-wide flow system (3, MFD).
- component_ontology.parts lists only "driver-vehicle units" and "road-graph elements" — it does NOT separately list platoons/corridor/network as parts. This matches the convention used elsewhere in the catalog (e.g., weather-systems, world-wide-web): component_ontology enumerates the dynamical *atoms/substrate*, while hierarchy_depth's intermediate levels are aggregation levels of those atoms, not separately-counted parts. No double-counting found — the atom is not also counted as level 1, and the fixed road-graph substrate (itself_complex: no) is correctly excluded from the dynamical hierarchy ladder.
- No double-counting between this entry's own hierarchy_depth and its relations.part_of: [cities] — hierarchy_depth's note explicitly scopes to levels INSIDE the entry's boundary, and cross-entry composition (road-traffic-systems being part_of cities) is correctly kept out of the hierarchy_depth column per panel-spec's own note.

## evidence_status / confidence / method consistency

- **spatial_extent — INCONSISTENCY (flagged as fix/blocker below)**: the recorded `value: 1e4` m is drawn from the "metro_network_span" detail line, which is explicitly labeled in the entry's own `detail` and `note` fields as "[unverified — model knowledge; order-of-magnitude only, no dedicated citation found this sweep]." Yet the attribute's top-level `sources: [sugiyama2008]` and `evidence_status: measured-untested` are set as if the recorded value traces to a published measurement. Sugiyama et al. 2008 supports only the 230 m ring-circuit figure (itself only secondary-corroborated, not primary-read), not the 1e4 m metro-network order of magnitude that is actually recorded as `value`. As written, a downstream reader (or the analysis pipeline, which reads `evidence_status` machine-facing) would treat the class-general spatial_extent number as a measured-untested published figure when the entry's own prose says the opposite. This is an evidence_status/citation-value mismatch, not just a wording nit.
- Also note: the `value` field silently selects the *low* end (1e4) of the detail's own stated range (1e4-1e5) without stating why the low end rather than a geometric mean or the high end was chosen — compounds the above issue.
- All other `unknown` / `qualitative` / `measured-untested` labels checked (numerosity, instance_population, degree_distribution, fractal_dimension_spatial, temporal_correlation, energy_rate_density) correctly match the entry's own honesty notes — no fabricated citations, no measured label attached to an unsourced figure elsewhere.
- criticality: score 1, mechanism_status: proposed, no CSN-grade field tail-exponent — correctly applies panel-spec/anchor's mechanism-alone-caps-at-1 rule (criticality.yaml boundary_clarifications). Matches anchor's financial-markets/river-networks precedent structure.
- extreme_event_statistics: measurand_type correctly flagged as a velocity constant, not a tail exponent, with an explicit non-power-law-claim disclaimer — correctly avoids filling_rules.power-law-rigor violation.
- memory_hysteresis: score 3, evidence_status measured-untested/confidence low — anchor's own notes state traffic hysteresis loops "would be evidence_status: measured were traffic in the pilot set" (i.e., the phenomenon class is directly observable), but this entry's specific citations (MDPI tutorial report, Geroliminis & Sun 2011) are both snippet-verified only, not primary-read — measured-untested is the epistemically honest position given this sweep's actual read-status, correctly conservative rather than jumping to "measured." No issue.
- tipping_transitions: score 2, evidence_status measured-untested, consistent with snippet-only sourcing; matches financial-markets comparator cited.

## Other checks

- No power-law/CSN-grade claims are asserted without measured-untested or better labeling; degree_distribution and fractal_dimension_spatial correctly left `unknown` rather than asserting the model-knowledge D~1.7-1.9 / near-planar-degree-3-4 figures floated in the sweep report.
- Timescale nesting: reaction time (~1s) < wave period (10-100s) < congestion episode (tens of min-hours) < infrastructure lifetime (decades) — properly nested/increasing, no inversion.
- No orphan-source citation used to support a claim it doesn't make (helbing2001 is correctly listed as uncited/orphan, not attached to any attribute value).
- Provenance flags section is thorough and matches the actual gaps found in the body (spatial_extent/timescales, extreme_event_statistics measurand mismatch, degree_distribution/fractal gaps, instance_population/energy_rate_density, relations cross-reference, tipping/hysteresis snippet-only sourcing) — no undisclosed gap found beyond the spatial_extent evidence_status mismatch above.

## Verdict summary

One clear blocker-grade inconsistency: spatial_extent's recorded value is the unsourced model-knowledge metro-network figure, but its evidence_status (measured-untested) and sources ([sugiyama2008]) present it as resting on a citation that in fact supports a different figure (the 230 m ring, not the metro-network span). Everything else checked — arithmetic, unit conversions, hierarchy_depth convention, evidence_status/confidence pairing, timescale nesting, criticality/tipping/hysteresis anchor application — is internally consistent and appropriately conservative.
