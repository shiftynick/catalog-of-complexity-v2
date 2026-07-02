# Plausibility Check — planetary-climate

Checker role: adversarial re-derivation of every derivable number; unit-conversion audit; timescale-nesting audit; hierarchy_depth vs component_ontology double-counting audit; evidence_status/confidence panel-spec compliance audit; anchor-consistency audit. Entry not edited. Target: `N:\coc\data\classes\planetary-climate.yaml`. Reference: `schema/panel-spec.yaml`, `schema/anchors/*.yaml` (15 files), `docs/schema.md`, `docs/roster.md`, `research/phase4/planetary-climate-sources.md`.

---

## 1. Re-derivations performed

### 1.1 spatial_extent
- Claimed: planetary_diameter detail "1.274e7 m (R_earth = 6.371e6 m)".
- Re-derived: 2 × 6.371e6 = 1.2742e7 m. **Matches.**
- Order-of-magnitude value (1e7 m) is a correct OOM rounding of 1.274e7 m. **OK.**

### 1.2 characteristic_timescales
- "~1 day (~1e5 s)": 86,400 s ≈ 8.6e4 s, correctly OOM-rounded to ~1e5 s. **OK.**
- "~2 weeks (~1.2-1.7e6 s)": 14 days = 1,209,600 s ≈ 1.21e6 s, inside the claimed 1.2–1.7e6 s range. **OK.**
- Holocene cross-reference in `numerosity`-adjacent note ("since Holocene onset ~1.17e4 yr = 3.7e11 s"): 1.17e4 yr × 3.156e7 s/yr = 3.69e11 s. **Matches** (entry correctly leaves this as an illustrative, non-committed unknown rather than filling the column with it — correct per filling_rules.no-guessing).
- No nesting violation: fastest (~1e5 s) < dominant/predictability (~1.2e6 s) < system lifetime candidate (~1e11-1e12 s), correctly ordered and left `unknown` where no citable figure exists.

### 1.3 energy_rate_density — Φ_m (THE MAJOR FINDING)
Entry states three figures: ~75 (Chaisson geosphere proxy), ~233 (atmosphere-mass-normalized solar throughput, this project), ~0.20 (whole-planet-mass-normalized solar throughput, this project). Re-derived both project figures independently from the entry's own stated inputs:

- Absorbed solar power: 1.2e17 W = 1.2e24 erg/s (1 W = 1e7 erg/s). **Correct conversion.**
- Atmosphere mass: 5.15e18 kg = 5.15e21 g.
  - Φ_m,atm = 1.2e24 / 5.15e21 = **233.0 erg s⁻¹ g⁻¹**. Matches entry's "~233." **CORRECT.**
- Whole-planet mass: 5.97e24 kg = 5.97e27 g.
  - Φ_m,planet = 1.2e24 / 5.97e27 = **2.01e-4 erg s⁻¹ g⁻¹** (0.000201, i.e. ~2×10⁻⁴).
  - **Entry states ~0.20 erg s⁻¹ g⁻¹ — this is wrong by a factor of ~995 (~1000×), consistent with a kg→g unit-conversion slip** (dividing erg/s by a mass expressed as if it were already in grams at the kg numeric value, or equivalently a stray factor-of-1000 dropped in the g-conversion step). Re-derived correct value: **~2.0×10⁻⁴ erg s⁻¹ g⁻¹**, not ~0.20.

- Compounding the problem: the entry's own narrative states the two derived figures (233 and 0.20) "differ by ~1000x purely on which mass convention is used to normalize the climate system's mass." This ~1000x framing is **only self-consistent because the 0.20 figure is itself wrong**: since both figures share the same numerator (absorbed power), the TRUE ratio between them must equal the mass ratio planet/atmosphere = 5.97e24 kg / 5.15e18 kg ≈ **1.16 × 10⁶ (1.16 million), not ~1000**. Re-derivation: Φ_m,atm / Φ_m,planet(correct) = 233 / 2.01e-4 ≈ 1.16×10⁶, matching the mass ratio exactly (as it must, algebraically). The stated "~1000x" is therefore not an independent plausible framing but an artifact of the same arithmetic error — i.e., the error is load-bearing in the entry's own comparative narrative, not just a stray fifth digit.
- This exact same error (0.20 erg/s/g, ~1000x framing) also appears verbatim in the sweep report `research/phase4/planetary-climate-sources.md` (section E, "Mass (kg)" and the summary table), so it propagated from the sweep into the entry rather than being introduced fresh at draft time — but it is wrong in both places.
- Cross-check: absorbed power alternate route (241 W/m² × Earth surface area 5.1e14 m²) = 1.229e17 W, consistent with the claimed ~1.2e17 W and with the openness_dissipation section's 1.74e17 W intercepted / ~1.2e17 W absorbed figures (1361 W/m² × π×(6.371e6)² = 1.735e17 W, matching the claimed 1.74e17 W in `openness_dissipation`). Those figures are internally consistent and correct — only the final whole-planet Φ_m division is wrong.

**Severity: blocker.** This is a fabricated-by-arithmetic-error numeric value under `evidence_status: derived`, off by three orders of magnitude, and it also supports a false "~1000x" comparative claim inside the same attribute's justification prose. It should not be published as ~0.20; the corrected value is ~2×10⁻⁴ erg s⁻¹ g⁻¹, and the "~1000x" framing needs to become "~10⁶x" (or the whole-planet convention needs to be dropped/reworded) once corrected.

### 1.4 openness_dissipation power figures
- Intercepted power: 1361 W/m² × π×(6.371e6 m)² = 1361 × 1.2752e14 m² = 1.735e17 W. Entry states "~1.74e17 W ... cross-section 1.274e14 m²" — cross-section figure has a typo risk (1.274e14 vs correct 1.2752e14) but this is within rounding and does not change the OOM or the ~1.74e17 W headline; **not a material error**, both numbers are mutually consistent to 3 sig figs.
- Absorbed power (~241 W/m² net, ×4πR²): 241 × 5.1006e14 m² = 1.229e17 W ≈ "~1.2e17 W" claimed. **OK.**
- Score-3 (not 4) reasoning versus stars/tropical-cyclones anchors (both scored 4 for openness_dissipation): entry's own reasoning (interruption of flux collapses circulation over days-to-weeks, comparable to not dramatically shorter than the system's own weather timescale) is qualitatively defensible and does not contradict any specific anchor value (no direct planetary-climate anchor exists in openness_dissipation.yaml, so this is comparative reasoning against sibling anchors, which is legitimate under the hybrid-column methodology). No anchor contradiction found.

### 1.5 tipping_transitions
- "16 tipping elements... 9 global 'core' + 7 regional 'impact'": 9+7 = 16. **Arithmetic correct**, matches the entry's own anchor (`schema/anchors/tipping_transitions.yaml`, planetary-climate score-4 justification, identical framing and citation).
- AMOC threshold (1.4–8°C) and hysteresis width (~0.4 Sv) match both the anchor file and the sweep report verbatim. **Consistent across all three documents.**
- Score 4 matches the anchor's own reserved-for-climate ceiling case exactly (anchor explicitly states "Reserved for climate; no other system in this catalog is expected to reach this level"). **No contradiction.**

### 1.6 memory_hysteresis
- Score 4, AMOC ~0.4 Sv hysteresis width, matches `schema/anchors/memory_hysteresis.yaml`'s planetary-climate anchor verbatim (same score, same justification content, same "model-derived not observed" caveat, same evidence_status: measured-disputed). **Consistent.**
- Minor citation-completeness note (not a plausibility defect): the anchor file cites van Westen, Jansen & Dijkstra (2024, Sci. Adv. 10, eadk1189) alongside the 2023 GRL/arXiv version; the entry cites only the 2023 GRL/arXiv paper. Not an arithmetic or contradiction issue — flagged as a note only, more properly a citation-check item.

### 1.7 chaos_sensitivity
- Score 3 matches `schema/anchors/chaos_sensitivity.yaml`'s planetary-climate anchor verbatim (same score, same weather-vs-climate Lorenz distinction, same "no validated climate-level Lyapunov exponent" reasoning). **Consistent — no contradiction.**
- Correctly distinguishes the climate system's score (3) from tropical-cyclones' inherited weather-subsystem score (4), matching that entry's own hierarchy (checked against tropical-cyclones.yaml's chaos_sensitivity, not reproduced in full here but the ~2-week predictability figure and Charney 1966/MDPI 2024 citations are used identically in both entries).

### 1.8 feedback
- Score 4 matches `schema/anchors/feedback.yaml`'s planetary-climate anchor essentially verbatim (same 4 loops, same signs, same "roughly doubling" and "Arctic amplification" language). **Consistent.**
- The `does_not_count` clause (feedback vs. adaptive learning distinction) is correctly respected: adaptive_capacity is separately scored 0, and the entry's own adaptive_capacity justification explicitly invokes "feedbacks operate, they do not learn" — correctly non-conflated per the anchor notes.

### 1.9 adaptive_capacity
- Score 0 matches `schema/anchors/adaptive_capacity.yaml`'s planetary-climate anchor verbatim (same score, near-identical justification text, including the "sharpest possible contrast against financial-markets' 4" framing, which matches the anchor's own notes section describing this column as "the catalog's sharpest CAS/non-CAS discriminator axis"). **Consistent.**

### 1.10 hierarchy_depth vs component_ontology (double-counting audit)
- `hierarchy_depth` = 4, convention: fluid parcels (atoms) → convective cells/eddies (1) → weather systems (2) → circulation cells/ocean gyres/storm tracks (3) → global coupled system (4).
- `component_ontology` parts list: atmospheric fluid parcels, ocean water masses, ice sheets/cryosphere bodies, weather systems, human institutions (out-of-scope).
- Cross-check: no part is double-counted as both a "part" and a separate "level" — ice sheets/cryosphere appear only in component_ontology (a structural component, not a hierarchy_depth aggregation level) and are correctly not listed in the hierarchy_depth chain, since hierarchy_depth explicitly counts *fluid-dynamical aggregation* levels, not the discrete cryosphere component. This is a defensible convention (cryosphere is parallel structure, not a level of fluid organization) — **no double-count found**.
- Minor inconsistency (not a double-count, an omission): hierarchy_depth's level-1 ("convective cells / eddies") has no corresponding entry in component_ontology's parts list — component_ontology jumps from "atmospheric fluid parcels" directly to "weather systems" without an intermediate "convective cells/eddies" part type. This is a coverage gap, not a plausibility contradiction (the two columns are allowed to have different granularity per their different definitions), so it is recorded as a **note**, not a fix or blocker.
- Cross-entry check against tropical-cyclones (`hierarchy_depth: 3`, convention: parcels → convective cells (1) → rainband/eyewall complexes (2) → storm-scale vortex (3)): planetary-climate's claim of being "one level deeper... because the climate system contains organized weather systems as an intermediate aggregation level" is consistent with the `contains: [weather-systems, tropical-cyclones, ocean-circulation]` relation and with tropical-cyclones' own level-3 counting stopping at the storm-vortex scale. **No contradiction.**

### 1.11 interaction_ontology — type_count and closure-comparison wording
- `type_count: 5` matches the actual list length (momentum/pressure-gradient, latent-heat/moisture, radiative exchange, surface enthalpy/momentum flux, albedo feedback coupling = 5 items). **Arithmetic correct.**
- Cross-checked against tropical-cyclones' interaction_ontology (`type_count: 4`: momentum/pressure-gradient, latent-heat/moisture, surface enthalpy flux, radiative exchange). The planetary-climate entry's justification states it shares "four of these five types... verbatim" and is "extended with the radiative and albedo-feedback channels." **This wording is internally inconsistent**: radiative exchange is already one of the 4 types tropical-cyclones has (it is one of the "four... shared verbatim"), so it cannot also be an "extension." Only albedo feedback coupling is actually new relative to tropical-cyclones. This is a wording/logic slip in the justification prose, not a wrong type_count or a wrong closure verdict — flagged as a **fix**.

### 1.12 fractal_dimension_spatial
- D ≈ 1.35 for cloud-field boundary — no arithmetic to re-derive (it's a cited measured value), cross-checked as internally consistent with tropical-cyclones' own citation of the same D≈1.35 figure (same Lovejoy 1982 source). Range check: 1.30–1.40 (Luo et al. 2007) brackets 1.35 correctly; a fractal dimension of 1.35 for a 2D boundary curve is physically plausible (between 1 = smooth line and 2 = space-filling). **No implausibility found.**
- Correctly NOT extended to Venus/Mars/Titan without a citation (recorded as absent/unknown for comparative exemplars) — correct `filling_rules.no-guessing` compliance.

### 1.13 extreme_event_statistics and criticality — power-law-rigor / soc-two-claims compliance
- `extreme_event_statistics`: value `unknown`, explicitly declines to borrow tropical-cyclones' basin-level PDI alpha (~0.98–1.19). Correct application of `filling_rules.no-guessing` — no power-law tail claim is made for the class as a whole, so `filling_rules.power-law-rigor` is not triggered (nothing to default to measured-untested).
- `criticality`: score 1, `mechanism_status: proposed`, explicitly separates the tipping/bifurcation claim (scored under tipping_transitions) from the event-statistics claim (scored here), correctly citing `filling_rules.soc-two-claims`. **Correctly compliant** — this is one of the more carefully executed columns in the entry.

### 1.14 instance_population
- "n >= 4 (Earth, Venus, Mars, Titan)" — count is a simple enumeration, correct (4 named systems). Comparative figures for Venus (~92-95 bar, ~737 K), Mars (~6 mbar, ~210 K), Titan (~94 K) are honestly marked where uncertain and are consistent with general planetary-science literature to the level of precision claimed (order-of-magnitude/qualitative, not independently re-verified this pass — already correctly flagged `[unverified]` in the entry itself, so no further action needed here beyond noting the honesty is appropriate).

---

## 2. Evidence_status / panel-spec compliance scan

Panel-spec (`schema/panel-spec.yaml`, `evidence_status` note) states evidence_status is "required on every value." The following attributes do not carry an explicit top-level `evidence_status` field: `numerosity`, `component_ontology`, `interaction_topology`, `interaction_ontology`, `degree_distribution`, `temporal_correlation`, `variation_selection`. This is a structural/coverage gap rather than a numeric-plausibility defect (values themselves — `unknown`, `not-applicable`, `absent`, `field/continuum`, `closed` — are individually defensible and not fabricated), so it is recorded as a **note** for the coverage checker rather than a plausibility blocker. Flagging here for completeness since it was surfaced during the sweep.

---

## 3. Summary of findings by severity

- **Blocker (1):** `energy_rate_density` whole-planet-normalized Φ_m value (~0.20 erg s⁻¹ g⁻¹) is arithmetically wrong by a factor of ~1000 (correct value ≈ 2.0×10⁻⁴ erg s⁻¹ g⁻¹); the entry's own "~1000x" comparative-ratio narrative is only self-consistent because of this same error (true ratio between the two derived Φ_m conventions is ~1.16×10⁶, not ~1000). Same error also present in the source sweep report `research/phase4/planetary-climate-sources.md`.
- **Fix (1):** `interaction_ontology` justification text incorrectly implies "radiative exchange" is a channel added beyond tropical-cyclones' shared alphabet, when radiative exchange is actually already one of the 4 types shared verbatim with tropical-cyclones; only "albedo feedback coupling" is the genuine 5th/new type. Wording should be corrected to avoid the false impression of two new channels.
- **Note (2):** (a) `hierarchy_depth`'s "convective cells / eddies" level-1 has no corresponding part-type entry in `component_ontology`'s parts list — a coverage gap between the two columns' granularity, not a contradiction. (b) Several structured/categorical columns (`numerosity`, `component_ontology`, `interaction_topology`, `interaction_ontology`, `degree_distribution`, `temporal_correlation`, `variation_selection`) lack an explicit `evidence_status` field despite panel-spec stating it is required on every value — a coverage/schema-completeness matter, individual values themselves are not implausible.

## 4. Items checked and found sound (no issues)
- spatial_extent diameter arithmetic (2×R_earth).
- characteristic_timescales unit conversions (day→s, 2 weeks→s, Holocene yr→s) and internal nesting order (fastest < dominant < lifetime).
- energy_rate_density atmosphere-normalized Φ_m (~233 erg/s/g) — correctly derived.
- openness_dissipation intercepted/absorbed power figures (1.74e17 W, 1.2e17 W) and their two independent derivation routes.
- tipping_transitions element count (9+7=16) and AMOC threshold/hysteresis figures, cross-checked against the dedicated anchor file and sweep report — fully consistent across all three documents.
- memory_hysteresis, chaos_sensitivity, feedback, adaptive_capacity scores — all verified to match their respective anchor files in `schema/anchors/` essentially verbatim (these columns carry direct planetary-climate anchors per the entry's own provenance note, and the check confirms the reuse was faithful, not drifted).
- hierarchy_depth double-counting audit — no component double-counted as both a discrete part and a fluid-organization level; the depth-4-vs-tropical-cyclones-depth-3 comparison is consistent with the `contains` relation.
- interaction_ontology type_count (5) matches actual list length; type_count for tropical-cyclones (4) cross-checked and confirmed.
- fractal_dimension_spatial value (D≈1.35) internally consistent with cited range (1.30–1.40) and with tropical-cyclones' citation of the same source.
- extreme_event_statistics and criticality columns correctly comply with filling_rules.power-law-rigor and filling_rules.soc-two-claims (no borrowed/fabricated tail exponent, tipping vs. event-statistics claims kept separate).
