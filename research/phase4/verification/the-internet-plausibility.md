# Plausibility Check — the-internet

Checker: adversarial plausibility pass (arithmetic re-derivation, unit
conversion, hierarchy/atomicity convention audit, evidence_status/confidence
combination audit, cross-column and cross-anchor consistency).
Target: `data/classes/the-internet.yaml`.
References used: `schema/panel-spec.yaml`, all 15 `schema/anchors/*.yaml`,
`docs/schema.md`, `docs/roster.md`, `research/phase4/the-internet-sources.md`.
Date of check: 2026-07-02. No edits made to the entry or any reference file
per instructions.

---

## 1. Unit conversions re-derived

- **Power figure (energy_rate_density note)**: "415 TWh/yr globally (2024)
  ~ 4.74e10 W average continuous draw." Re-derived independently:
  415e12 Wh/yr x 3600 s/h / (8760 h/yr x 3600 s/h) = 415e12 / 8760 Wh per h
  -> average W = 415e12 Wh x 3600 / (8760x3600 s) = 4.7374e10 W. **Confirmed
  correct to 3 sig figs** (entry states 4.74e10 W).
- **Spatial extent**: Earth's circumference re-derived from R=6,371,000 m:
  2*pi*R = 40,030,174 m ~ 4.0e7 m. Entry's "~4e7 m" / "40,075 km" figure is
  consistent (entry's 40,075 km uses the equatorial value, a defensible
  variant of the same order-of-magnitude quantity). **No error.**
- **Domain growth arithmetic**: "386.9 million, +22.7 million / +6.2% y/y."
  Re-derived: (386.9-22.7)/364.2 implied prior-year base; 22.7/364.2 = 6.23%,
  matches stated 6.2%. **Internally consistent.**
- **Numerosity scalar checks**: 386.9M ~ "3.9e8" (OK, rounds correctly);
  6.0B ~ "6e9" (OK, exact). **No error.**

## 2. Cross-column numeric consistency

- **FINDING (fix): "AS count roughly doubled ~2015-2025" is an overstatement.**
  The entry's `characteristic_timescales` row for "AS-level topology growth"
  states: "AS count roughly doubled ~2015-2025" as supporting context for the
  ~1e8 s order-of-magnitude timescale. Re-derived from the entry's own cited
  figures (component_ontology / apnic-huston source: ~47,000 ASes in 2015 ->
  ~75,000-83,739 in 2025): growth factor is 75000/47000 = 1.60x to
  83739/47000 = 1.78x, NOT ~2x. "Roughly doubled" is not a fair characterization
  of a 60-78% increase. This does not change the order-of-magnitude timescale
  conclusion (growth over ~1 decade either way), but the specific "doubled"
  language is a factual overstatement of the entry's own cited numbers and
  should be corrected to "grew roughly 60-80%" or "grew by a factor of
  ~1.6-1.8x."

- **FINDING (fix): characteristic_timescales "AS-level topology growth" order-
  of-magnitude label (~1e8 s) does not match its own stated range ("months-
  years").** Re-derived: 1 month ~ 2.59e6 s (log10 ~ 6.41); 1 year ~ 3.15e7 s
  (log10 ~ 7.50); even 10 years ~ 3.15e8 s (log10 ~ 8.50). The label "~1e8 s
  (months-years...)" straddles nearly three orders of magnitude internally
  ("months" alone implies ~1e6 s, not 1e8 s) and the single point-value 1e8 s
  is only accurate for a multi-year-to-decade span, not "months." Since the
  parenthetical evidence actually cited (AS-count growth over ~2015-2025, i.e.
  a decade) supports a ~1e8.5 s (decade-scale) reading, the "months-years"
  qualifier is the part in tension with the numeral, not the numeral itself.
  Recommend either dropping "months" from the label or splitting into two
  timescale rows (month-scale operational AS churn vs. decade-scale aggregate
  topology growth) so the OOM value matches its own named range. Compare to
  the adjacent "system lifetime" row, which IS internally consistent (43-57
  yr -> log10(s) = 9.13-9.25, correctly rounds to "~1e9 s").

- **Device-count figure inconsistency (note, trivial).** `numerosity.detail.
  connected_devices` states "IoT ~18.5-21.1e9 2024-25" while
  `component_ontology`'s connected-devices row states "IoT ~1.85-2.1e10."
  18.5e9 = 1.85e10 (exact match) but 21.1e9 != 2.1e10 (21.1e9 vs. 21.0e9,
  a ~0.5% rounding drift between the two mentions of the same cited range).
  Trivial, but worth aligning to a single canonical rounding in a future
  edit pass.

## 3. hierarchy_depth convention vs. component_ontology (double-counting check)

`hierarchy_depth` declares: AS nodes (atoms, uncounted) -> provider tiers (1)
-> regional/national peering fabrics & IXPs (2) -> the single global routed
graph (3). Cross-checked against `component_ontology`, which lists AS nodes,
routers, human users, connected devices, and registered domains as parts —
none of "provider tiers," "peering fabrics," or "the global routed graph" is
separately double-listed as a *component* in component_ontology, so there is
no double-count of an atom as both a part and a level.

Cross-checked the "counting the whole system as the topmost level" convention
against sibling entries for consistency (per panel-spec's HIGH-commensurability-
risk flag on this column): `financial-markets` counts "the integrated market
system" as level 3 (same pattern), `power-grids` counts "the ERCOT-wide
synchronous interconnection" as level 2 and the cross-entry NA-grid coupling
as level 3, `cities` counts "the city-wide municipal system" as level 4. The
Internet's use of "the single global routed graph" as its own topmost counted
level (3) is consistent with this established cross-catalog convention, not
an entry-specific double-count. **No error — convention correctly applied
and cross-consistent with sibling entries.**

## 4. evidence_status / confidence combination audit (panel-spec discipline)

- `degree_distribution`: top-level `evidence_status: measured-disputed` with
  the internal narrative correctly distinguishing Newman's fit alone
  (would be `measured-untested` "on its own terms," per
  filling_rules.power-law-rigor) from the composite disputed status driven by
  the Broido & Clauset (2019) counterweight. This is the CORRECT resolution
  per filling_rules.power-law-rigor and soc-two-claims — confirmed compliant,
  not a mechanical default.
- `criticality` (score 1, mechanism_status: none) and `cascade_susceptibility`
  (score 1) and `tipping_transitions` (score 0) were checked against each
  other and against `degree_distribution`'s topology claim for the
  soc-two-claims discipline (a topology power-law claim must not leak into an
  EVENT-statistics criticality score). The entry explicitly separates these
  ("this is a TOPOLOGY claim... not an EVENT-statistics claim") — compliant.
- `energy_rate_density`: `value: unknown`, `evidence_status: unknown`,
  `confidence: n/a`. Per filling_rules.no-guessing this is legal; the
  "verifier_flags" field additionally documents why (mass figure rejected as
  unsourced, power figure scope-ambiguous). No numeric value is asserted
  alongside "unknown" — compliant (no leakage of the partial 4.74e10 W figure
  into a computed Phi_m).
- `chaos_sensitivity`: `score: unknown` (hybrid column) — legal per
  no-guessing; correctly distinguishes BGP convergence (a settling time) from
  a chaos/sensitivity claim, matching the chaos_sensitivity anchor's
  does_not_count block almost verbatim. Compliant.
- All 15 rubric/hybrid scores (decentralization=3, self_organization=2,
  nonlinearity=2, feedback=2, modularity=2, hierarchy_depth=3,
  openness_dissipation=2, criticality=1, tipping_transitions=0,
  memory_hysteresis=2, information_processing=3, adaptive_capacity=2,
  emergence=2, robustness_resilience=3, cascade_susceptibility=1) were
  diffed word-for-word against their corresponding anchor-file "the-internet"
  worked example. **All 15 scores and justifications match their anchor file
  exactly** (verbatim or near-verbatim reuse) — no drift between the anchor
  and the entry found.
- `feedback` (score 2) carries a structured `loops:` list with 2 entries
  (TCP AIMD, sign: balancing; BGP route-flap, sign: reinforcing), each with a
  mechanism string — satisfies the feedback anchor's binding requirement that
  "every anchor at score >=2 MUST include the structured loop list."
  Compliant.

## 5. Fractal dimension and Newman-figure sanity checks (external corroboration)

- **Yook, Jeong & Barabasi (2002) D_f = 1.5 +/- 0.1**: independently
  corroborated via web fetch of the PMC full-text
  (https://pmc.ncbi.nlm.nih.gov/articles/PMC129681/): confirmed D_f = 1.5 +/-
  0.1 via box-counting on 228,265 routers, random placement would give D_f =
  2, sigma=1 (linear distance decay), alpha=1 (linear preferential
  attachment) — **all four figures the entry cites or references (D_f=1.5+/-
  0.1, "random placement ~2," sigma=1, alpha=1) are externally confirmed
  correct.**
- **Newman (2003) Table II Internet-AS-level row** (n=10,697, z=5.98,
  l=3.31, C=0.39, r=-0.189, alpha=2.5): could not be re-fetched to primary
  text this session (PDF text-extraction failures on both the UVM-hosted and
  arXiv-hosted copies) but the paper's existence/venue/page range was
  confirmed via search, and a plausibility re-derivation was run: a
  homogeneous random-graph small-world estimate for N=10,697, z=5.98 gives
  ln(N)/ln(z) ~ 5.19, while the reported l=3.31 is somewhat SHORTER — this is
  the expected direction and rough magnitude for a hub-dominated,
  disassortative (r=-0.189) power-law-tailed topology versus a homogeneous
  random graph, i.e. internally plausible, not a red flag. This set of
  figures is widely known/canonical in network science and matches this
  checker's independent model knowledge of the Newman 2003 paper. No
  arithmetic contradiction found; full re-verification against primary text
  remains a citation-check (not plausibility-check) matter, already flagged
  in the entry's own provenance block for Broido & Clauset but NOT
  separately flagged for the Newman Table II figures themselves (the entry
  treats Newman 2003 as settled Phase-1 primary-read provenance) — this
  checker did not find grounds to contradict that treatment.

## 6. Energy/mass figures — sources-document arithmetic error (does NOT appear in the entry)

Found a genuine arithmetic error, but it lives in `research/phase4/
the-internet-sources.md` (Section 8), NOT in the graded entry: the sweep
report computes "Combined data-center + network figure would be roughly
500-700 TWh/yr" by summing 415 TWh/yr (data centers) + 260-360 TWh/yr
(network infra). Re-derived: 415+260=675 and 415+360=775, i.e. the correct
combined range is ~675-775 TWh/yr, not "500-700 TWh/yr" as the sweep report
states. **This is a real arithmetic error, but it does not propagate into
the-internet.yaml** — the entry itself never states a combined TWh/W figure;
it cites the 415 TWh/4.74e10 W data-center figure and the 260-360 TWh
network-only figure as two separate, non-summed quantities, and correctly
lands on `energy_rate_density: unknown`. Flagged here as a note for the
sources document's own accuracy (out of scope for editing under this task's
instructions, but worth a downstream fix so the bad combined figure is never
later copied into the entry or another entry).

## 7. Modularity anchor Q-band ambiguity (pre-existing, not entry-specific)

`modularity` score=2, justification cites "Q roughly 0.3-0.5 [unverified]."
Per the modularity anchor's own scale, Q 0.2-0.4 -> score 2, Q 0.4-0.6 ->
score 3; the cited 0.3-0.5 range straddles both bands (crossing at Q=0.4).
This ambiguity is inherited verbatim from `schema/anchors/modularity.yaml`'s
own the-internet anchor (same wording, same score) — i.e. it is a pre-
existing softness in the anchor file itself, reproduced faithfully rather
than introduced by this entry. Since the underlying Q value is explicitly
marked `[unverified — model knowledge; no specific figure confirmed]` and the
column is correctly scored qualitatively pending a real Q, this is recorded
as a note, not a fix, specific to this entry.

## 8. Timescale nesting

Re-checked all four `characteristic_timescales` rows for monotonic OOM
ordering: 1e-3-1e-1 s (packet) < 1e0-1e2 s (BGP convergence) < 1e8 s
(topology growth) < 1e9 s (system lifetime). Monotonically increasing and
correctly nested — no ordering violation. (The topology-growth row's
internal label/range mismatch is flagged separately in Section 2 above; the
nesting *order* itself, independent of that mismatch, is fine.)

## 9. Sources block / citation-annotation spot checks (light touch — full citation audit is citation_check's job)

- IEA power figure and TWh->W conversion: verified arithmetically correct
  (Section 1).
- DNIB domain-growth percentage: internally consistent (Section 1).
- Yook et al. 2002 D_f, sigma, alpha figures: externally corroborated via
  primary-text fetch (Section 5) — strengthens confidence beyond what the
  entry's own "primary-read" tag already claims.
- Newman 2003 Table II figures: not independently re-fetched to primary text
  this session (tooling limitation, not a red flag) — see Section 5.
- No fabricated DOIs, page numbers, or citations were identified in the
  `sources:` block; all citations carry primary-read/snippet-only
  annotations per the sweep methodology, consistent with the entry's overall
  discipline.

---

## Summary of severity classification

- **blocker**: none found. No fabricated value, no anchor contradiction, no
  wrong-order-of-magnitude error that would poison the catalog.
- **fix**: 2 items — (a) "AS count roughly doubled ~2015-2025" overstates
  the entry's own cited growth figures (actual: 1.6-1.78x); (b) the
  "AS-level topology growth" timescale row's OOM label (~1e8 s) is in tension
  with its own stated "months-years" range.
- **note**: 3 items — minor IoT-device-count rounding drift between two
  mentions of the same range; modularity Q-band ambiguity inherited from the
  anchor file itself; a genuine TWh arithmetic error in the sources sweep
  report (not the entry) that should be fixed before anyone reuses that
  document's combined-power figure.
