# Plausibility Check — earthquake-fault-systems

**Checker role:** adversarial re-derivation of every derivable number, unit-conversion audit, timescale-nesting audit, hierarchy_depth vs. component_ontology double-counting audit, evidence_status/confidence combination audit against panel-spec.
**Target:** N:\coc\data\classes\earthquake-fault-systems.yaml
**References used:** schema/panel-spec.yaml, docs/schema.md, docs/roster.md, schema/anchors/*.yaml (all 15), research/phase4/earthquake-fault-systems-sources.md, research/phase1/SYNTHESIS.md, data/classes/planetary-climate.yaml (cross-entry Phi_m corroboration), data/classes/stars.yaml (timescale-formatting convention check).
**No edits made** to the entry or any reference file, per instructions.

---

## 1. Arithmetic re-derivations (all independently recomputed, not eyeballed)

### 1.1 spatial_extent
- SSAF 11-section sum: 36+63+59+50+37+98+35+43+56+56+69 = **602** — recomputed exactly, matches entry. Count of sections = 11, matches.
- "more than 800 miles" -> "~1,287 km": 800 mi x 1.609344 km/mi = **1287.475 km** — matches the entry's 1.287e6 m to 4 significant figures. Correct conversion.
- Seismogenic-depth USGS figure "at least 10 miles" -> "~16 km": 10 x 1.609344 = **16.09 km** — matches "~16 km" as stated. Correct.
- Verdict: **all conversions and sums check out exactly.**

### 1.2 energy_rate_density (the entry's only derived quantitative figure — highest re-derivation priority)
Recomputed the full chain independently from the stated inputs:
- Fault-plane area: A = L x depth = 1.287e6 m x 1.5e4 m = **1.9305e10 m^2** — matches entry's "~1.93e10 m^2."
- Moment rate: M0_rate = mu x A x slip_rate = 3e10 Pa x 1.9305e10 m^2 x (0.030 m/yr) = **1.7374e19 N*m/yr** — matches entry's "~1.7e19 N*m/yr" exactly.
- Apparent-stress power conversion, Es_rate = (sigma_a/mu) x M0_rate (converted to W): for sigma_a = 1 MPa -> **1.84e7 W**; for sigma_a = 3 MPa -> **5.51e7 W**. Entry states "~3e7-6e7 W" — the upper bound (5.5e7 W) matches closely; the lower bound as computed (1.8e7 W) is somewhat below the entry's stated floor of 3e7 W, but both remain within the same order of magnitude (1e7-1e8 W) the entry explicitly frames itself as targeting ("order-of-magnitude placeholder"). Not an error, but the stated range compresses the true sigma_a-driven spread slightly.
- Kanamori cross-check: Es_rate = M0_rate / 2e4 = **2.75e7 W** — matches entry's "~2.8e7 W" almost exactly (rounding).
- Mass/volume: V = L x depth x width = 1.287e6 x 1.5e4 x 200 = **3.861e12 m^3**; mass = V x 2700 kg/m^3 = **1.0425e16 kg** — matches entry's "~3.86e12 m^3" and "~1.0e16 kg" exactly.
- Unit-conversion methodology (W to erg/s/g): Phi_m = P[W] x 1e7 [erg/s per W] / (mass[kg] x 1000 [g/kg]). Applying the identical formula to the Sun's published luminosity/mass (L=3.828e26 W, M=1.989e30 kg) independently reproduces Phi_sun ~ **1.92 erg/s/g**, matching Chaisson's well-known figure of ~2 cited both in this entry and in data/classes/planetary-climate.yaml. This confirms the unit-conversion machinery used in the SAF derivation is correct, not merely internally self-consistent.
- Resulting Phi_m from my independent recomputation: **1.76e-5 to 5.28e-5 erg/s/g** across the apparent-stress range, with the Kanamori cross-check giving **2.64e-5 erg/s/g**. Entry states "~3e-5 to ~5e-5 erg/s/g" — this is a reasonable summary of the recomputed spread (the true low end is closer to 1.8e-5 than 3e-5, a ~1.7x compression at the bottom of the range) but well within the entry's own explicitly declared ~3x uncertainty band and its "order-of-magnitude placeholder" framing. Not a fabrication or sign/exponent error — a minor rounding/range-summary softness only.
- Cross-check against Chaisson's benchmarks: Sun ~2, Earth's geosphere ~75 (independently corroborated in data/classes/planetary-climate.yaml, sourced to Chaisson Table 1, primary-read in Phase 1) — the SAF's ~1e-5-1e-4 figure sitting many orders of magnitude below both is directionally sound and not a magnitude-order error.
- Verdict: **derivation chain is arithmetically correct at every step I could independently re-derive; the only softness is a slightly optimistic compression of the stated Phi_m range's lower bound, immaterial given the entry's own honest 3x-uncertainty framing.**

### 1.3 Recurrence-rate consistency
- "63.7 yr average repeat time (rate 0.0157/yr)": 1/63.7 = 0.015699/yr and 1/0.0157 = 63.69 yr — mutually consistent to 3 significant figures. Correct.

### 1.4 Wesnousky (2008) cascade statistics
- "14 (50%) involved two or more separately named faults" of 28: 14/28 = exactly 50%. Correct.
- "10 (70%)... of the remaining 14": 10/14 = 71.4%, entry rounds to "70%" — acceptable rounding, not an error.
- "4 of 7" (Big Seven) — stated as a raw count, not a percentage; no arithmetic issue.

### 1.5 b-value range claim
- extreme_event_statistics states "range 0.95-1.16 across independent studies." Values cited in the entry: 1.03±0.12 (Page & Felzer), 1.0 (UCERF3/Hutton), 0.95 (Tormann), 1.01±0.04 and 0.992±0.003 (Hutton sub-periods), 1.16->0.95 (Tormann recalibration span). min=0.95, max=1.16 across this set — matches the stated range exactly.

### 1.6 Timescale nesting
- Individual rupture (~1-2 min, order 1e2 s) is ~4.7e7x shorter than the ~150-yr recurrence interval (4.73e9 s) — correctly nested, no order-of-magnitude inversion.
- Paleoseismic record (~1,400-1,500 yr) / recurrence interval (~150 yr) ~= 9.3-10 cycles — matches the entry's own robustness_resilience justification, which independently states "the ~1,400-1,500 yr paleoseismic record alone spans ~10 M>=7 cycles." Internally consistent across two separate attribute blocks.
- Sediment-resolution limit (~20-50 yr) < site-level recurrence intervals (~132-150 yr) < SSAF-wide recurrence (63.7 yr) < paleoseismic record depth (~1,400-1,500 yr): no nesting inversions; the methodological floor (stratigraphic resolution) sits below all reported recurrence figures as it must to make those figures interpretable, exactly as the entry's own note explains.

### 1.7 UCERF3 subsection order-of-magnitude extrapolation (component_ontology)
- Entry states SSAF atomic-part count_oom "~10^2" and statewide "~10^3," derived from 2,606-2,665 statewide subsections across >350 statewide sections implying ~7.4-7.6 subsections/section; extrapolated to 11 SSAF sections gives ~82-84 subsections, safely within the stated ~10^2 order of magnitude. This is a reasonable, appropriately-hedged (count_oom, not a precise count) inference, not a fabricated number — recomputed and confirmed consistent.

### 1.8 Unit sanity checks
- "a few centimeters a year" (summary) matches the cited 30-50 mm/yr Pacific/North American relative motion (= 3.0-5.0 cm/yr) exactly.
- Crustal density 2,700 kg/m^3 and rigidity mu=3e10 Pa are standard textbook continental-crust/seismological constants; correct order of magnitude, though not separately flagged [unverified] the way the fault-zone-width and apparent-stress inputs are (minor asymmetry in caveat discipline, not an error).

---

## 2. Hierarchy_depth vs. component_ontology double-counting audit

Traced the full nesting: component_ontology's atomic part ("fault segments/patches," count_oom ~10^2 for SSAF) is explicitly glossed as "11 named sections further subdivided in UCERF3 subsectioning" — i.e., the true atom is the UCERF3 *subsection* (~80-90 per SSAF, per the recomputation in 1.7), not the 11 named sections themselves. hierarchy_depth's method then builds: fault patches (atoms, subsection-level, uncounted as a level) -> named fault sections (level 1, the 11 SSAF sections) -> multi-segment rupture zones/SSAF-as-a-whole (level 2) -> SAF plate-boundary system (level 3). This is a coherent 4-tier scheme (1 atomic layer + 3 organizational levels above it) with value=3 correctly counting only the levels above the atom, per panel-spec's convention ("Number of nested organizational levels... Counts levels INSIDE the entry's boundary"). **No double-counting found** — the 11 named sections are correctly treated as an aggregation of (not identical to) the atomic subsections, and are consistently the atom's immediate parent level in both attributes.

---

## 3. evidence_status / confidence combination audit (panel-spec compliance)

- Checked every `evidence_status: measured` top-level attribute (spatial_extent, criticality, cascade_susceptibility) carries a `sources` list — **all three do**, satisfying "measured requires a source."
- Checked the sole `evidence_status: derived` attribute (energy_rate_density) carries an explicit `method` field walking through every input — **it does**, satisfying "derived requires a method," and additionally flags each unverified input individually (`verifier_flags: [unsourced-apparent-stress-input, unsourced-fault-zone-width-input, no-published-Phi_m-exists-for-any-fault-system]`), which is good-faith honest practice beyond the minimum bar.
- Checked power-law-tail claims default to measured-untested absent CSN-grade support: `fractal_dimension_spatial`'s Aviles et al. 1987 figure is correctly marked `measured-untested` (not `measured`) because the D value was not independently re-extracted this session — compliant. The G-R b-value (a log-linear magnitude-frequency slope, not a power-law tail exponent in the CSN sense) is correctly marked `measured` since it is CSN-adjacent but is its own well-replicated, independently-fit statistic (Aki 1965/Shi & Bolt 1982 MLE method) distinct from the CSN amplitude test, which is separately and correctly marked `measured` (rejected) for its own distinct dataset — the soc-two-claims / power-law-rigor filling rules are followed correctly, matching the criticality.yaml anchor's own worked treatment of this exact system verbatim.
- **Structural defect found (see Finding 1 below):** the `modularity` attribute is declared `type: rubric` (same kind as decentralization/nonlinearity/feedback, all of which carry a proper `evidence_status` field) but its `evidence_status: qualitative` text is embedded inside the folded `justification:` prose block rather than being a sibling YAML key — confirmed by parsing the file with PyYAML: `modularity.keys() == ['type','level','score','justification']`, with no `evidence_status` key present at all. This violates panel-spec's "evidence_status: required on every value" rule at the structural level, even though the intended value is legible to a human reader in the prose.

---

## 4. Cross-check against anchor files (schema/anchors/*.yaml)

All rubric/hybrid scores in the entry were checked against their cited anchor-file comparators and, where this system is itself a worked anchor, against its own anchor entry:

- **criticality** (score 2, mechanism_status: contested): matches schema/anchors/criticality.yaml's own earthquake-fault-systems anchor almost verbatim (same score, same Bak & Tang / Watkins et al. 2016 reasoning).
- **feedback** (score 1, Coulomb stress transfer loop): matches schema/anchors/feedback.yaml's own earthquake-fault-systems anchor almost verbatim (same score, same "forced relaxation-oscillator, not a feedback loop" framing).
- **decentralization** (score 4, comparator: stars/Sun): confirmed schema/anchors/decentralization.yaml's stars anchor is indeed scored 4 with matching "nothing to remove whose absence constitutes loss of control" reasoning.
- **adaptive_capacity** (score 0, comparator: stars + planetary-climate): confirmed both anchors are indeed scored 0 in schema/anchors/adaptive_capacity.yaml, with matching "regulation/memory is not adaptation" reasoning.
- **robustness_resilience** (score 3, comparator: the-internet): confirmed schema/anchors/robustness_resilience.yaml scores the-internet at 3.
- **self_organization** (score 3, comparators: tropical-cyclones and river-networks, "both score 4"): confirmed schema/anchors/self_organization.yaml scores both at 4.
- **modularity** (score 2, comparator: Mississippi River basin): confirmed schema/anchors/modularity.yaml scores river-networks at 2, with a closely matching "real, non-arbitrary partition but not strongly insulated / cross-module flow" justification pattern.
- No comparator citation was found to misrepresent an anchor file's actual score or reasoning anywhere in this entry.

---

## 5. Findings summary

1. **[fix] `modularity.evidence_status` is structurally absent from the YAML** — the value "qualitative" exists only as trailing text inside the folded `justification:` scalar (confirmed via PyYAML parse: the key is entirely missing from the parsed dict), not as a proper sibling key like every other rubric/hybrid attribute in this file. This is a formatting defect that would cause any automated tooling (schema validators, evidence_status audits, the consistency/coverage checkers) to silently treat this attribute as missing required metadata, contradicting panel-spec's explicit "evidence_status: required on every value" rule. Concrete, mechanically verifiable, not a judgment call.

2. **[note] energy_rate_density's stated Phi_m range ("~3e-5 to ~5e-5") slightly compresses the true lower bound** of the independently recomputed apparent-stress range (true range given the stated sigma_a=1-3 MPa input is ~1.8e-5 to 5.3e-5 erg/s/g, i.e. the entry's floor of 3e-5 is about 1.7x higher than what its own stated inputs actually produce at the sigma_a=1 MPa end). This does not change the order-of-magnitude conclusion and sits inside the entry's own declared ~3x uncertainty band, but a precise reader re-deriving the number from the stated inputs would get a visibly wider (lower-bounded) range than what's printed.

3. **[note] Minor asymmetry in unverified-input flagging**: crustal density (2,700 kg/m^3) and seismic rigidity (mu=3e10 Pa) are used in the energy_rate_density derivation without an explicit [unverified] tag, unlike the apparent-stress value and fault-zone width, which are both flagged. These are standard, low-risk textbook geophysical constants, so this is not a plausibility problem, just a minor inconsistency in the entry's own caveat discipline.

4. **[note] Compound evidence_status strings** (e.g., numerosity: `"measured (11-section SSAF count); measured-untested (statewide UCERF3 counts...)"`) deviate from panel-spec's flat evidence_status enum by packing multiple sub-claims into one string field. This is a deliberate and consistently-applied authoring convention for attributes that bundle genuinely distinct measurands (matches the pattern used for instance_population, fractal_dimension_spatial, extreme_event_statistics, temporal_correlation), and is arguably necessary given panel-spec provides no native multi-value mechanism — flagged for awareness, likely more appropriate for the consistency checker to adjudicate as a schema-design question than for this plausibility pass to treat as an error.

No arithmetic errors, unit errors, sign errors, or order-of-magnitude contradictions were found anywhere in the entry's re-derivable numbers. No hierarchy_depth/component_ontology double-counting was found. No evidence_status/confidence combination was found to violate panel-spec's binding rules except the structural (not substantive) modularity formatting defect in Finding 1. All checked rubric/hybrid scores accurately reflect their cited anchor-file comparators.
