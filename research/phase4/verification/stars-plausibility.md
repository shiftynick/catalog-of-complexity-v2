# Plausibility Check — Class Entry "stars"

**Checker role:** adversarial re-derivation of every derivable number; unit-conversion
audit; timescale-nesting audit; hierarchy_depth-vs-component_ontology double-counting
audit; evidence_status/confidence combination audit against panel-spec.
**Target:** N:\coc\data\classes\stars.yaml
**References used:** schema/panel-spec.yaml, schema/anchors/*.yaml (15 files),
docs/schema.md, docs/roster.md, research/phase4/stars-sources.md.
**Method:** independent re-derivation (PowerShell arithmetic) of every quantity that
is presented as derived or cross-checkable; manual audit of every rubric/hybrid score
against its cited anchor file; manual audit of hierarchy_depth's counting convention
against component_ontology's part list; manual audit of evidence_status assignments
against filling_rules.

---

## 1. Arithmetic re-derivations

### 1a. Energy rate density Φ_m (energy_rate_density, openness_dissipation)
Entry claims: Φ_m = L☉/M☉ = 3.828e26 W / 1.98892e30 kg = 1.925e-4 W/kg = 1.925 erg/s/g,
matching Chaisson's published 2 erg/s/g "to within rounding."

Independent re-derivation:
- L/M = 3.828e26 / 1.98892e30 = **1.9246626...e-4 W/kg** — matches entry's 1.925e-4 W/kg. CONFIRMED.
- Unit conversion W/kg -> erg/s/g: 1 W = 1e7 erg/s; 1 kg = 1e3 g; so 1 W/kg = 1e4 erg/s/g.
  1.9246626e-4 W/kg * 1e4 = **1.9246626 erg/s/g** — matches entry's stated 1.925 erg/s/g. CONFIRMED.
- This is within ~4% of Chaisson's published 2 erg/s/g, a reasonable "matches to within
  rounding" claim (Chaisson's own inputs likely use slightly different L☉/M☉ figures/rounding).
- **Verdict: unit conversion and arithmetic are both correct.** This is actually a
  frequently-botched conversion (W/kg vs erg/s/g differ by 1e4, not 1e3 or 1e7, because
  the two unit changes — energy and mass — compound); the entry gets it right.

### 1b. Mass-to-energy conversion rate (openness_dissipation: "~4.3 million tonnes/s")
Independent re-derivation via E=mc²: dm/dt = L/c² = 3.828e26 W / (2.998e8 m/s)² =
**4.259e9 kg/s = 4.26 million tonnes/s** (using precise c=299792458 m/s: 4.259e9 kg/s,
same result to 3 sig figs). Entry/anchor state "~4.3 million tonnes/s" — matches within
rounding. CONFIRMED, not fabricated (this figure is inherited verbatim from the
openness_dissipation.yaml anchor, and both independently reproduce correctly).

### 1c. Timescale span claim ("roughly 15 orders of magnitude," granule lifetime to
main-sequence lifetime)
Granule lifetime ~10 min = 600 s. Main-sequence lifetime ~1e10 yr = 3.15576e17 s.
Ratio = 5.26e14; log10(ratio) = **14.72**, rounds to "roughly 15 orders of magnitude"
as claimed. CONFIRMED.

### 1d. Timescale nesting (monotonicity check)
granule (6e2 s) < supergranule (~1.6e5 s) < magnetic cycle (~3.5e8 s) < current age
(~1.45e17 s) < main-sequence lifetime (~3.15e17 s). Strictly monotonic, no nesting
violation. Current age (4.6 Gyr) < main-sequence lifetime (~10 Gyr) is also physically
correct (Sun is roughly mid-life). CONFIRMED, no contradiction.

### 1e. Extreme_event_statistics tail-exponent fractions
Entry states theoretical predictions 9/5=1.8 (3-D thermal model), 13/9≈1.44 (SOC model),
7/3≈2.33 (2-D thermal model). Independent computation: 9/5=1.8, 13/9=1.4444...,
7/3=2.3333... — all three match the entry's stated values exactly. CONFIRMED.

### 1f. Granule-count order-of-magnitude sanity (geometric cross-check)
Entry's numerosity: "~1e6-4e6 granulation cells," diameter ~1,000-1,500 km.
Independent check: solar surface area 4πR☉² = 6.08e18 m². Dividing by a single
granule's cross-sectional area (πd²/4) for d=1000 km gives ~7.7e6 cells to fully tile
a sphere; for d=1500 km gives ~3.4e6 cells. This full-sphere-tiling estimate (~3-8e6)
is the same order of magnitude as, and brackets, the entry's stated ~1e6-4e6 range
(the entry's range is for the visible disk at any instant, which is smaller than a
full-sphere tiling estimate, so a mild skew is expected and not a contradiction).
**No order-of-magnitude contradiction; independently plausible.**

### 1g. Chaisson Φ_m stage-progression monotonicity (energy_rate_density)
newborn ~1 -> main-sequence ~2 -> subgiant ~4 -> red giant ~120 -> AGB ~2000 erg/s/g,
and 10-M☉ star H-burning ~600 -> O-burning ~4000 erg/s/g: both sequences are
monotonically increasing, consistent with standard stellar-evolution physics (more
centrally concentrated/faster burning in later stages). No inversion.

---

## 2. Unit and geometry checks

### 2a. fractal_dimension_spatial — POSSIBLE INTERNAL CONTRADICTION (flagged)
Entry states: "D=1.25 (small granules)... D=2.15 (large granules)... Perimeter-area
fractal dimension (P ∝ A^(D/2))."

For a perimeter-area relation P ∝ A^(D/2) applied to a **2D projected planar boundary
curve** (which is what "photosphere granule boundary geometry (2D projected)" — the
entry's own stated measurand — describes), the fractal dimension D of a plane curve is
bounded: 1 ≤ D ≤ 2, where D=1 is a smooth Euclidean curve and D=2 is a
maximally space-filling/convoluted curve. D=2.15 exceeds the maximum admissible value
for a 2D boundary-curve fractal dimension under this convention.

This is a real, load-bearing tension: either (a) the entry/source's "D" for large
granules is reported under a different normalization than the P∝A^(D/2) convention
the entry states as its method (some solar-physics granulation literature has used
inconsistent conventions for this ratio historically), or (b) the reported value is a
transcription/verification error, or (c) there is a genuine but unremarked-upon
peculiarity in the primary source. The entry's own verifier_flags already mark this
row `snippet-verified-only, single-1986-study-not-primary-read` — appropriately
cautious — but does not flag the D>2 geometric implausibility specifically. This
should be caught before the entry is promoted past "measured-untested," and a
primary-read pass of Roudier & Muller (1986) should specifically resolve whether
D=2.15 is reported under the same P∝A^(D/2) convention stated in the entry's method
field.

**Severity: fix.** Not a blocker because the entry already carries appropriately
humble evidence_status (measured-untested) and confidence (low) and explicitly flags
the source as not primary-read — but the specific mathematical implausibility (D>2 for
a 2D perimeter-area exponent) should be recorded as a citation/verification action
item, since as currently worded the method line and the reported value are in tension.

### 2b. Energy-rate-density unit conversion (Group A)
Already verified correct in 1a above — flagging here only to note the entry passes a
check that is a very common source of unit errors in this kind of catalog (W/kg vs
erg/s/g conflated with a 1e3 or 1e7 factor instead of the correct 1e4). No issue.

---

## 3. Hierarchy_depth vs component_ontology — double-counting audit

This is the specific audit called out in the task brief, and it surfaces a genuine
(if nuanced) issue.

**component_ontology** lists three parts as coordinate list items, each carrying the
same schema fields (count_oom, interchangeable, itself_complex):
1. granulation cells — declared atom
2. supergranulation cells — own role field: "composite — larger-scale convective
   aggregate"
3. sunspots/active regions — own role field: "magnetic-flux-tube surface
   manifestations, tied to the dynamo cycle rather than the convective cascade"

**hierarchy_depth** (value=3) states its counting convention as: granulation cells
(atoms) -> supergranulation cells (level 1) -> active-region/magnetic-cycle
organization (level 2) -> star-scale hydrostatic/thermal structure (level 3).

Two issues:

1. **component_ontology's own schema role is atomic-part enumeration** (per
   panel-spec.yaml: "the system's atomic parts... A list of part types... grounds
   numerosity"). But two of the three listed items (supergranulation cells, sunspots)
   are NOT atoms by the entry's own account — supergranulation is explicitly
   self-described as "composite," and sunspots are explicitly said to belong to a
   different generative mechanism (dynamo) than the convective cascade the atom
   (granulation) belongs to. This means component_ontology mixes an atom-level entry
   with two non-atom, structurally different-status entries in a list whose schema
   purpose is atom enumeration. This is mitigated by the fact that numerosity itself
   correctly counts ONLY the granulation cells (not supergranulation cells or
   sunspots) — so the actual numeric payload isn't double-counted — but the
   component_ontology list's shape does not match its schema's stated purpose, and a
   careless reader could double-count supergranulation cells' count_oom (marked
   "unknown," so not currently a live risk) into a future numerosity revision.

2. **hierarchy_depth's chain conflates two mechanistically distinct organizing
   principles as if they were one nested compositional ladder.** Supergranulation is a
   larger-scale convective mode (same broad mechanism family as granulation: buoyant
   overturning), so granules -> supergranules is at least a defensible "aggregate of
   the same phenomenon at larger scale" step. But active-region/magnetic-cycle
   organization is NOT compositionally built from supergranulation cells — it is a
   product of the global dynamo (differential rotation + tachocline field generation,
   per the entry's own interaction_ontology row), a different physical mechanism
   entirely, co-located in the photosphere but not "made of" supergranulation cells
   the way supergranulation is (loosely) an aggregate flow pattern over many granules.
   Treating "convective-scale hierarchy" and "magnetic/dynamo-scale organization" as
   successive rungs of one ladder is the kind of category-mixing the hierarchy_depth
   vs. modularity distinction (per modularity.yaml's own notes) warns against, and
   arguably inflates hierarchy_depth by counting a different axis of organization as
   if it were "one level higher."

**Severity: fix.** Not a blocker — hierarchy_depth=3 is not wildly implausible for a
star (three organizational tiers above the atom is a defensible order-of-magnitude
count), and the entry does show its work (an explicit, inspectable counting
convention, as panel-spec requires), which is exactly what lets this audit catch the
issue. But the convention as written conflates two different physical hierarchies
(convective-scale aggregation vs. magnetic/dynamo organization) into a single linear
count, and component_ontology's list includes non-atomic items in a schema slot meant
for atomic parts. Recommend the consistency checker/orchestrator either (a) explicitly
justify why convective-scale and dynamo-scale organization belong on the same ladder,
or (b) split the two into a clearer note acknowledging they are orthogonal axes,
analogous to how the entry already (correctly) treats radial shell structure as an
orthogonal axis excluded from the lateral hierarchy_depth count.

---

## 4. Rubric/hybrid score audit against anchor files

All 15 rubric/hybrid columns were checked against their corresponding
schema/anchors/*.yaml file, where stars is a worked anchor. Full agreement found in
every case (score AND justification text closely paraphrase or directly reuse the
anchor's own worked stars/Sun case):

| Column | Entry score | Anchor score | Match |
|---|---|---|---|
| modularity | 1 | 1 | Yes — justification matches anchor almost verbatim |
| decentralization | 4 | 4 | Yes |
| nonlinearity | 3 | 3 | Yes |
| feedback | 2 | 2 | Yes — loop list matches anchor's two loops exactly |
| openness_dissipation | 4 | 4 | Yes — "4.3 million tonnes/s" figure matches anchor |
| chaos_sensitivity | 2 | 2 | Yes — "~16 months" single-study figure matches anchor |
| criticality | 2 | 2 | Yes — alpha~1.8, dragon-king critique both match |
| memory_hysteresis | 1 | 1 | Yes |
| information_processing | 0 | 0 | Yes — canonical 0 per spec's own expectation |
| adaptive_capacity | 0 | 0 | Yes |
| robustness_resilience | 4 | 4 | Yes |
| cascade_susceptibility | 0 | 0 | Yes — deliberate floor anchor |
| tipping_transitions | 0 | 0 (class-general; no stars anchor exists in
  tipping_transitions.yaml — entry's own reasoning, not contradicted by any anchor) | Consistent |
| emergence | 2 | 2 | Yes — matches the Phase-1b-adjudicated score (raised 1->2) exactly, including the "alpha-effect/turbulent diffusivity" reasoning |
| self_organization | 4 | (no stars anchor exists — self_organization.yaml's worked anchors are tropical-cyclones, river-networks, the-internet, power-grids, languages, as the entry itself correctly states) | Entry correctly cites tropical-cyclones (score 4) as nearest comparator; internally consistent with that anchor's reasoning (dissipative structure, no template) |

No rubric-score contradictions found. Every score cross-checked exactly matches its
cited anchor, and the two columns without a direct stars anchor
(self_organization, tipping_transitions-as-worked-anchor) are correctly flagged as
such in the entry's own provenance/justification text rather than silently
presented as anchor-backed.

---

## 5. Evidence_status / confidence combination audit (panel-spec compliance)

Checked every quantitative/hybrid attribute's evidence_status against
filling_rules.power-law-rigor, filling_rules.soc-two-claims, and the
evidence_status enum (measured / measured-untested / measured-disputed / derived /
qualitative / unknown):

- **extreme_event_statistics**: evidence_status=measured-untested. Correct per
  filling_rules.power-law-rigor — no CSN-2009-grade MLE+KS fit exists for solar/
  stellar flare energy distributions per the entry's own honest accounting; defaults
  to measured-untested exactly as the rule prescribes.
- **criticality**: evidence_status=measured (top-level, hybrid column), with the
  justification explicitly splitting event-statistics ("measured" per the anchor) from
  mechanism ("contested") per filling_rules.soc-two-claims — this exactly mirrors the
  precedent set by the criticality.yaml stars anchor itself (also evidence_status:
  measured at the top level with the same internal split), and the
  earthquake-fault-systems anchor (same pattern). Consistent, not a violation.
- **chaos_sensitivity**: measured-disputed, matching the anchor exactly and correctly
  reflecting genuinely split literature (not defaulted to "qualitative" despite being
  contested — appropriately distinguishes "contested with real quantitative studies on
  both sides" from "no measurement framework exists").
- **fractal_dimension_spatial, numerosity, temporal_correlation, instance_population**:
  all measured-untested, confidence low/medium, each with an explicit
  single-study/snippet-verified caveat in the note or verifier_flags field — correctly
  humble, no unearned "measured" claims found anywhere in the entry.
- **energy_rate_density, openness_dissipation**: measured, confidence high — justified,
  since Chaisson (2011) Table 1 is primary-read (per provenance) and independently
  arithmetic-verified in section 1a above.
- No column was found claiming evidence_status=measured for a power-law tail without
  CSN-grade support (the one power-law-flavored claim, extreme_event_statistics, is
  correctly measured-untested).
- No "derived" evidence_status appears on the star's own attribute rows (the
  Phi_m/L/M cross-check is explicitly described as "derived" and "ours" within the
  energy_rate_density method text, correctly distinguished from Chaisson's own
  "measured" published Φ_m=2 — this is exactly the intended usage per panel-spec's
  evidence_status definitions).

**No evidence_status/confidence rule violations found.**

---

## 6. Citation/value spot-checks (light — full citation audit is a separate checker's job)

- IAU 2015 nominal L☉=3.828e26 W and M☉=1.98892e30 kg — these are the well-known IAU
  2015 Resolution B3 nominal values; consistent with the resolution's published
  figures [checked against general astronomical knowledge, not independently
  re-fetched this pass — this is the citation checker's remit, not re-litigated here,
  but no arithmetic or order-of-magnitude problem found using these inputs].
- R☉=6.957e8 m — matches the IAU 2015 nominal solar radius. Consistent.
- All cross-references between entry sections (e.g., alpha~1.8 appearing in both
  criticality and extreme_event_statistics; "~4.3 million tonnes/s" appearing in
  openness_dissipation and matching its own anchor; "~16 months" appearing in
  chaos_sensitivity matching its anchor) are internally consistent — no
  contradictory restatement of the same figure found anywhere in the entry.

---

## 7. Overall assessment

The entry is unusually careful about arithmetic: every number that invites
independent re-derivation (Φ_m from L/M with correct W/kg->erg/s/g unit conversion,
the mass-loss rate from E=mc², the 15-orders-of-magnitude timescale span, the
power-law exponent fractions 9/5, 13/9, 7/3) reproduces correctly under independent
computation. Timescale nesting is monotonic and physically sane throughout. Every
rubric/hybrid score matches its cited anchor file exactly, including scores and
justification language for all 15 anchor-bearing columns, and the two
not-directly-anchored judgment calls (self_organization, tipping_transitions) are
correctly flagged as such rather than silently presented as anchor-backed.

Two genuine issues surfaced:
1. fractal_dimension_spatial's large-granule D=2.15 exceeds the mathematically valid
   range (1-2) for the stated P∝A^(D/2) 2D perimeter-area convention — an internal
   contradiction between the stated method and the stated value that the existing
   verifier_flags do not specifically call out, and that should be resolved by a
   primary-read of Roudier & Muller (1986) before this row is promoted past
   measured-untested.
2. hierarchy_depth's counting convention conflates two mechanistically distinct
   organizational axes (convective-scale aggregation vs. magnetic/dynamo-scale
   organization) into one linear ladder, and component_ontology's part list mixes an
   atomic part (granulation cells) with two non-atomic, differently-sourced structures
   (supergranulation cells, sunspots) in a schema slot intended for atomic-part
   enumeration — mitigated by numerosity correctly counting only the true atom, but
   worth tightening before verified status.

Neither issue is a fabrication, miscitation, or catalog-poisoning error; both are
genuine internal-consistency/rigor gaps appropriate for "fix" severity ahead of
verified status.
