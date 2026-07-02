# Plausibility check — ocean-circulation.yaml

Role: adversarial plausibility checker. Scope: arithmetic re-derivation, unit
checks, order-of-magnitude sanity, hierarchy_depth/component_ontology
double-counting audit, evidence_status/confidence panel-spec compliance.
Not in scope: citation existence/accuracy (citation checker), cross-entry
consistency of rubric calibration (consistency checker), missing-column
coverage (coverage checker) — though findings that clearly belong to those
lanes are noted briefly where discovered incidentally.

Reference documents read: schema/panel-spec.yaml, schema/anchors/
(tipping_transitions, memory_hysteresis, criticality, chaos_sensitivity,
robustness_resilience read in full; others consulted as needed),
docs/schema.md context via panel-spec, research/v0.2-sweep/expansion/
ocean-circulation-sources.md, data/classes/planetary-climate.yaml (parent
entry, cross-reference source for reused figures), data/classes/
tropical-cyclones.yaml (structural precedent for continuum-system
conventions).

## 1. Arithmetic / unit re-derivations

### 1.1 spatial_extent (1e7 m, Atlantic basin meridional span)
Re-derived independently: equator to ~65°N subpolar North Atlantic ≈
65° × 111 km/° ≈ 7,215 km ≈ 7.2e6 m. log10(7.2e6) = 6.86, which rounds to
order-of-magnitude 1e7 m under standard order-of-magnitude convention
(closer to 10^7 than 10^6 on a log scale). **Plausible, correctly derived.**
Consistent with planetary-climate.yaml's own O(10^7 m) Earth-diameter figure,
as the entry itself notes. No issue.

### 1.2 AMOC heat transport vs. volume transport cross-check
16.9 ± 1.2 Sv transport, 1.20 ± 0.12 PW heat transport (Johns et al. 2023,
both figures used consistently). Rough independent sanity check: Q = ρ·cp·ΔT·V.
For 1 Sv = 1e6 m³/s, ρcp ≈ 4.1e6 J/(m³·K); for a plausible mean
northward-minus-southward temperature contrast of order 10-15°C, 16.9 Sv
implies Q ≈ 16.9e6 × 4.1e6 × ~12 ≈ 8.3e14 W ≈ 0.83 PW — same order of
magnitude as the cited 1.20 PW (exact match not expected; real AMOC heat
transport is a layered-structure calculation, not a single-ΔT bulk estimate).
**No contradiction found; figures are physically consistent with each other.**

### 1.3 AMOC weakening trend arithmetic
-0.6 ± 0.8 Sv/decade (Moat et al. 2020, 2004-2020, "not significant at 95%").
Over the 16-year record this implies a total drop of ≈0.6 × 1.6 ≈ 0.96 Sv,
about 5.7% of the 16.9 Sv mean — a small, physically plausible fractional
change. The "not significant at 95%" characterization is consistent with an
error bar (0.8 Sv/decade) comparable in magnitude to the point estimate
itself under either a 1-sigma-SE or already-95%-CI reading of the ± figure.
**No arithmetic or unit problem.**

### 1.4 energy_rate_density non-derivation sanity check
The entry declines to derive a Phi_m (erg s^-1 g^-1) value, citing absence of
a defensible mass denominator. Independently reconstructed a naive estimate
using an arbitrary "upper 1000 m across the Atlantic basin" volume
convention (~1e16 m³ → ~1.025e19 kg = 1.025e22 g) against the 1.2 PW
(1.2e24 erg/s) throughput: Phi_m ≈ 117 erg/s/g. This lands in the same rough
range as planetary-climate's own two divergent, convention-dependent Phi_m
figures (~75 geosphere-proxy, ~233 atmosphere-normalized) — which confirms
the entry's own point: the number is entirely convention-dependent and any
one choice would be arbitrary. **The `unknown` call is the correct,
epistemically honest one; not a coverage gap masquerading as a plausibility
problem.**

## 2. hierarchy_depth vs. component_ontology double-counting audit

hierarchy_depth = 3, convention: water parcels (atoms, uncounted) → mesoscale
eddies (level 1) → named substructures [boundary currents, gyres,
deep-water-formation sites] (level 2, three component_ontology part-types
collapsed into one organizational tier) → basin-scale/global overturning
(level 3, the whole scoped system — NOT itself listed as a component_ontology
part).

Checked against component_ontology's 5 listed parts (water parcels,
mesoscale eddies, western boundary currents, subpolar/subtropical gyres,
deep-water formation sites): every part maps to exactly one hierarchy level
(parcels = atom, not counted as a level per the project-wide atomicity
convention; eddies = level 1; the three named-substructure types together
= level 2). The top level (3) is the class itself, not a listed part,
matching the tropical-cyclones/planetary-climate convention exactly.
**No double-counting of any component_ontology part as two hierarchy
levels, and no component counted as both a "part" and the whole.**

Cross-entry note (belongs more properly to the consistency checker, flagged
here only because it surfaced during the audit): planetary-climate.yaml's
own hierarchy_depth=4 convention keeps "weather systems" and "circulation
cells/gyres/storm tracks" as two SEPARATE levels, whereas ocean-circulation
collapses its three analogous named-substructure types into a single level.
Both conventions are internally defensible on their own terms (no ocean-
circulation part is asserted to nest inside another — gyres do not contain
boundary currents in a strict compositional sense, so one flat level is a
legitimate choice) — this is a level-counting-convention judgment call, not
a plausibility error, but the consistency checker should confirm the
counting convention is applied comparably across sibling continuum entries.

## 3. evidence_status / confidence panel-spec compliance sweep

Panel-spec (filling_rules, "level-required" + the meta.column_kinds
preamble): "evidence_status [is] required on every value." Programmatically
enumerated every top-level attribute block in ocean-circulation.yaml and
checked for a present `evidence_status:` key:

| Column | evidence_status present? |
|---|---|
| spatial_extent | yes |
| characteristic_timescales | yes |
| numerosity | yes |
| instance_population | yes |
| component_ontology | **no** |
| energy_rate_density | yes |
| interaction_topology | **no** |
| interaction_ontology | **no** |
| degree_distribution | **no** |
| modularity | yes |
| hierarchy_depth | yes |
| fractal_dimension_spatial | **no** |
| decentralization | yes |
| nonlinearity | yes |
| feedback | yes |
| openness_dissipation | yes |
| chaos_sensitivity | yes |
| criticality | yes |
| extreme_event_statistics | yes |
| temporal_correlation | **no** |
| tipping_transitions | yes |
| memory_hysteresis | yes |
| information_processing | yes |
| adaptive_capacity | yes |
| variation_selection | **no** |
| emergence | yes |
| self_organization | yes |
| robustness_resilience | yes |
| cascade_susceptibility | yes |

7 columns lack the required field: component_ontology, interaction_topology,
interaction_ontology, degree_distribution, fractal_dimension_spatial,
temporal_correlation, variation_selection.

Cross-checked against planetary-climate.yaml (the sibling continuum entry
whose own provenance.fix_log documents a prior verification pass that
explicitly added this missing field to five columns: numerosity,
temporal_correlation, degree_distribution, variation_selection,
interaction_topology). Result: in the now-verified planetary-climate.yaml,
degree_distribution, fractal_dimension_spatial, temporal_correlation, and
variation_selection all carry evidence_status; interaction_topology carries
it too (post-fix). Only component_ontology and interaction_ontology remain
without it there — consistent with `type: structured` columns apparently
being treated project-wide as carrying `confidence` in lieu of
`evidence_status` (both entries agree on this point, so it reads as
convention rather than defect).

**This means 5 of the 7 missing-field columns in ocean-circulation
(interaction_topology, degree_distribution, fractal_dimension_spatial,
temporal_correlation, variation_selection) reproduce a class of omission
that was already identified and corrected in the sibling entry
planetary-climate.yaml — i.e., this is a known, previously-fixed defect
pattern recurring in a new draft, not a novel judgment call.** The remaining
2 (component_ontology, interaction_ontology) match an accepted project-wide
structured-type convention and are not flagged.

## 4. Rubric/hybrid re-scoring spot checks against anchor text

### 4.1 tipping_transitions = 3 (exemplar(amoc))
Anchor level 3 requires: "systematic inventory... named mechanisms and
threshold estimates for each; at least one instance shows empirical
evidence consistent with approach-to-transition (e.g. critical slowing
down)... even if full confirmation is still pending for most elements."
The entry solidly satisfies "named mechanism + threshold estimate" (Stommel
1961 salt-advection mechanism, ~0.4 Sv hysteresis width, 1.4-8°C threshold —
both properly sourced to mckay2022/vanwesten2023, both already present in
this entry's own sources block). The "approach-to-transition" /
early-warning-signal leg is invoked only to explain why the score is NOT
pushed to 4 ("AMOC specifically has a real early-warning-signal literature
[van Westen, Jansen & Dijkstra 2024]... but this entry does not
independently verify that early-warning-signal claim... this sweep") — that
2024 EWS paper is not in this entry's own `sources:` block at all (it is
cited only inside the memory_hysteresis anchor file, a different document).
This is a defensible score (the level-3 "named mechanism + threshold"
criterion is independently and solidly met without leaning on the EWS
claim), and the entry is appropriately conservative about not over-claiming
the EWS evidence. Flagged as a **note**: the level-3 scale text's own
"approach-to-transition" clause was written with a multi-element-inventory
context in mind (Armstrong McKay's 16 elements) and its application to a
single-exemplar AMOC-only entry is not unambiguous; worth the orchestrator's
attention at the next anchor-calibration pass, not a blocking issue since
the entry does not actually rest its score on the unverified claim.

Also note: this block lacks a `confidence` field (present in
planetary-climate's own tipping_transitions block, confidence: medium) —
minor, cosmetic, not required by panel-spec.

### 4.2 chaos_sensitivity = 2 (class-general)
Anchor level 2: "evidence is mixed, contested, or drawn from a small/
non-replicated literature." The entry's sole citation (Mehling, Börner &
Lucarini 2024) is a single conceptual/toy bistable-box-model study, not
independently corroborated — this fits the disjunctive "small/non-replicated
literature" clause of level 2 even though there is no actual *contested*
finding (no competing study disputes it). This is a legitimate, if
borderline, application of level 2 — the entry's own justification text
explicitly quotes the "small/non-replicated literature" language from the
anchor, showing deliberate care in the scoring. **Not a plausibility error**;
noted as a borderline anchor-application call for the record.

### 4.3 memory_hysteresis = 4, tipping_transitions vs. criticality = 0
The entry's criticality=0 justification explicitly invokes and correctly
paraphrases the criticality.yaml anchor's own worked example ("a system can
have a single sharp tipping point with no power-law event statistics, e.g.
AMOC collapse, and score high on tipping_transitions while scoring low
here") — this is the anchor file's own textbook illustration, used
correctly and accurately quoted in substance. **Verified consistent, no
issue.**

### 4.4 robustness_resilience = 2 (exemplar(amoc))
Checked against the robustness_resilience anchor's ERCOT precedent (score 2:
"known event classes within its normal environment can cause system-scale
failure"). AMOC's analogous known-event-class is large freshwater forcing
crossing the ~0.4 Sv/1.4-8°C threshold. Correctly structured parallel;
score and justification match the anchor's own worked pattern. The
(statistically insignificant) -0.6 Sv/decade trend figure is used correctly
as evidence FOR persistence ("has not yet shown significant weakening"),
not misread as evidence of degradation. **No issue.**

### 4.5 decentralization = 4 / self_organization = 4
Both scored 4, each justified on its own distinct axis (locus of control vs.
origin of order) per panel-spec's explicit instruction that these are
distinct dimensions requiring separate justification. Correctly
differentiated language in both blocks (no circular justification, no
conflation). **No issue.**

### 4.6 openness_dissipation = 3
The comparative claim ("unlike a hurricane's Carnot-engine structure...
collapses the storm within about a day") is independently cross-checked
against tropical-cyclones.yaml's own openness_dissipation block, which does
state this exact "collapses... within ~a day" figure with its own citations
(Emanuel 1986/1999). **Cross-reference confirmed accurate, no fabrication.**

## 5. Source-usage discipline checks

- Confirmed the entry uses ONLY the higher-confidence Johns et al. (2023)
  16.9 Sv / 1.20 PW figures throughout every attribute that touches AMOC
  transport/heat-transport; the lower-confidence "17.2 Sv / 1.25 PW"
  alternative figure flagged in the sweep report as unverified-synthesis
  is correctly never entered into any attribute value.
- Confirmed the unverified "~-1.0 Sv/decade" extended-trend figure and the
  Gulf Stream "~4% slowdown over ~40 years" claim (both flagged in the sweep
  report as WebSearch-synthesis-only, not direct-fetched) are correctly
  excluded from every scored attribute and appear only in the sources/
  provenance narrative documenting why they were withheld. **Good
  discipline; matches the sweep's own recommendation exactly.**

## 6. Summary of severity-classified findings

See structured output. One **fix**-level finding (missing evidence_status
field on 5 columns, reproducing a defect class already caught and corrected
in the sibling planetary-climate.yaml entry). Two **note**-level findings
(tipping_transitions' EWS-clause application to a single-exemplar entry;
chaos_sensitivity's borderline "small/non-replicated" vs. "contested"
reading) recorded for the record, not blocking. No **blocker**-level
findings: no fabricated values, no unit errors, no arithmetic errors, no
hierarchy_depth/component_ontology double-counting, no evidence_status/
confidence combination that violates the measured-requires-source or
derived-requires-method rules.
