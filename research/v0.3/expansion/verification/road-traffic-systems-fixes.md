# road-traffic-systems — flag-fixer log (2026-07-16)

Fixer: workflow-agent (flag-fixer), 2026-07-16
Source: four adversarial verifier passes (citation, plausibility, consistency, coverage) on the draft at `data/classes/road-traffic-systems.yaml`.

## Applied (blocker/fix severity)

1. **[FIX/citation] extreme_event_statistics.method** — Hedged the I-5 North (-15 km/h) / German autobahn A5 (-16 km/h) numeric pairing. No source pairs these two examples together; only the general ~15-20 km/h class range and the A5 empirical base are independently corroborated (Wikipedia's three-phase-traffic-theory synthesis, cross-checked via search aggregation). The specific pairing is disclosed as resting solely on the unfetched `kerner-rehborn1996-secondary` synthesis.

2. **[BLOCKER/plausibility] spatial_extent** — The recorded top-level value (1e4 m, evidence_status: measured-untested, sources: [sugiyama2008]) conflated two different figures at two different scales: an unsourced metro-network order-of-magnitude figure and the Sugiyama ring-circuit figure (230 m), which `sugiyama2008` does not support at the metro scale. Split into two explicit, individually labeled sub-values under `detail` (metro_network_span: unverified model knowledge, no source; sugiyama_ring_circuit: 230 m, secondary-corroborated). Removed `sugiyama2008` from the attribute's top-level `sources` list. Downgraded the top-level `value`/`evidence_status` from `1e4`/`measured-untested` to `unknown`/`unknown`, since no single sourced measurement supports one top-level class-general number.

3. **[FIX/consistency] nonlinearity** — Rescored 4 → 3. The entry's own `feedback` justification admits free-flow driving is "largely open-loop car-following," which is the same quasi-linear-modal-state-plus-nonlinear-edge-phenomenon shape the anchor file scores 3 for earthquake-fault-systems, not the hurricane anchor's pervasive-4 case. Nonlinearity is central to the characteristic breakdown/jam/MFD phenomena but not pervasive across the whole free-flow-dominant duty cycle.

4. **[FIX/consistency] chaos_sensitivity** — Rescored 2 → 1, for direct consistency with the-internet's entry, which uses the same clean local-sensitivity-vs-aggregate-predictability argument to justify a score of 1 (anchor level 2 requires contested/mixed literature evidence, not a clean split — that's level 1's text).

5. **[FIX/consistency] adaptive_capacity** — Rescored 2 → 3. The justification's own content (anticipatory route switching in response to perceived congestion; learned habitual routes/departure times) is the anchor's level-3 text (internal models, anticipatory adjustment), not level 2's explicit exclusion of anticipation. Retained the existing "not 4" rationale (no population-level selection/retention; road-graph substrate adapts on a much slower institutional timescale).

6. **[FIX/coverage] emergent_phenomena (Macroscopic fundamental diagram)** — Added the nominal practical freeway lane capacity (~2000-2400 veh/h/lane, nominal ~2200) and a calibrated illustrative three-parameter fit (u0=110 km/h, kc=27 veh/km/lane, kj=110 veh/km/lane, implied capacity ~2241 veh/h/lane), sourced to a new `sources.tudelft-fhwa-mfd-capacity` entry (snippet-verified, not primary-read).

## Unresolved (could not fix honestly this pass)

1. **instance_population** (coverage flag: fetch the UN World Urbanization Prospects agglomeration count) — Attempted `WebFetch` on `population.un.org/wup/assets/WUP2018-Highlights.pdf`; the tool returned encoded/binary content with no readable figure extracted (same PDF-parsing failure already disclosed for `helbing2001` in this entry). Left `value`/`evidence_status` unchanged (order-of-magnitude / unknown) rather than fabricate the exact agglomeration count. **Needs**: a proper PDF-text-extraction pass, or an HTML-rendered UN data table, in a future sweep.

2. **degree_distribution** (coverage flag: check Cardillo et al. 2006) — Fetched the arXiv abstract (`arxiv.org/abs/physics/0510162`); confirmed the paper exists and studies planar urban-street-network graphs (meshedness coefficient, short cycles, global efficiency, cost) but the abstract itself does not state a degree-distribution finding, and the full PDF could not be parsed (binary stream, same failure mode as above). Left `unknown` rather than assert the unconfirmed "near-planar, low-degree" claim against this specific citation without having actually read the result.

3. **fractal_dimension_spatial** (coverage flag: check Lammer, Gehlsen & Helbing 2006) — Fetched the arXiv abstract (`arxiv.org/abs/physics/0603257`); the paper reports an effective **travel-time-weighted metric-space dimension d>2** for German road networks — a different measurand than the D~1.7-1.9 spatial box-counting fractal dimension the entry's own note surmised. This paper does not support filling this column with the surmised value. Left `unknown` rather than force-fitting a mismatched measurand under a citation that doesn't actually support it.

## Notes recorded (not acted on — note severity)

All nine note-severity findings from the four verifiers were appended to `provenance.flags` in the entry, each tagged `[note, flag-fixer 2026-07-16]`:
numerosity (OICA fetch 404/paywall, but consistently secondary-corroborated); spatial_extent/sugiyama2008 exemplar (independently corroborated qualitatively, numeric details unconfirmed); extreme_event_statistics range/example optics (both examples sit at the low end of the stated range); tipping_transitions/criticality lane-count self-consistency (implied ~4200 veh/h pre-breakdown flow not cross-checked against lane-capacity figures); memory_hysteresis (Treiterer & Myers 1974 not primary-read — correct conservative call, flagged as priority re-fetch); robustness_resilience level convention (class-general vs. the anchor's stated exemplar default — matches existing the-internet/financial-markets precedent, not an entry-specific defect); sources coverage gap (Lighthill & Whitham 1955; Nagel & Schreckenberg 1992 absent without an orphan-flag courtesy); temporal_correlation (no candidate literature identified); component_ontology/numerosity per-network counts (no clean canonical citation found).

## Provenance handling

- `provenance.verification.*` statuses flipped from `pending` to `complete` (all four checks ran).
- A new `provenance.fix_log` block was appended (append-only) recording every applied change tagged `[FIX/<check>]` or `[BLOCKER/<check>]`, plus the three unresolved items.
- `provenance.flags` (pre-existing, append-only) had the nine note-severity findings appended at the end; no existing flag entries were altered or removed.

## Validator result

`cd analysis && node validate.mjs` → **road-traffic-systems — PASS (0 error, 0 warn, 2 info)**. The two info lines (`sources.tudelft-fhwa-mfd-capacity` and `sources.helbing2001` declared but not cited from any attribute's `sources` list) are benign and match the existing pattern seen across other verified entries in this catalog (e.g. chemical-oscillators, turbulent-flows) where reference/candidate sources are intentionally carried without being cited by a specific attribute value.
