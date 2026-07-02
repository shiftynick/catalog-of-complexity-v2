# Phase 1 Synthesis Memo

Orchestrator synthesis of the four evidence reports in this directory into [schema/panel-spec.yaml](../../schema/panel-spec.yaml). Reports were treated as leads; headline values were cross-checked against orchestrator knowledge of the primary literatures (CSN table values, Newman's network table, Bettencourt exponents, LLW feature list, Holland's seven basics, tipping-element counts) and held up. Per-citation verification is deferred to the citation-checker stage by design.

## Panel outcome

28 columns across six groups (19 core, 9 extended), four kinds: quantitative, rubric, hybrid, categorical. Key structural additions beyond the original sketch:

- **`evidence_status` on every value** — "measured-disputed" and "qualitative" are different kinds of not-knowing (dynamics report, uncertainty #1).
- **`level` on every value** — some statistics attach per-instance (San Andreas b-value), others only across a class (Zipf's law of city sizes).
- **`filling_rules`** — binding anti-folklore rules for research agents and verifiers (see register below).

## Editorial calls (the judgment layer)

1. **Adaptation is a dimension, not an entry criterion.** LLW (adaptation neither necessary nor sufficient) vs. Holland/Mitchell (definitional for CAS) is a genuine framework conflict. The catalog scores `adaptive_capacity` 0–4 where 0 is legitimate and informative (Sun: 0, NYSE: 4). Likely the sharpest CAS/non-CAS axis in the eventual table.
2. **Emergence fixed in the weak/epistemic sense** (macro order requiring new descriptive terms / order parameters). Strong-emergence claims are out of scope.
3. **Fractal dimension split** into `fractal_dimension_spatial` and `temporal_correlation` — a fault trace's geometry and a price series' roughness are different measurands; one column for both would violate commensurability.
4. **Openness/dissipation anchored in literal physics** for all systems (cities consume watts) — kills the literal/metaphorical drift the framework survey flagged for socio-economic entries.
5. **Chaisson Φm becomes a partly derived column.** Only the Sun has a directly published pilot value; computing Φm for hurricanes, cities, the Internet from published throughput/mass figures is an original contribution, always flagged `evidence_status: derived`.
6. **Folded/dropped attributes:** non-decomposability → emergence; building blocks → hierarchy_depth; path-dependence → memory_hysteresis; tagging → dropped (CAS-agent-specific, unusable for half the catalog); diversity → component_diversity (extended); Bar-Yam's complexity profile → methodological lens in the conceptual layer.
7. **Information processing kept with strict anchors** despite being strained for astrophysical/geophysical systems — differential scores are data, but anchors must exclude mere signal propagation.
8. **Formal complexity measures → conceptual layer.** Only Shannon-type entropy and fractal dimension survived as fillable; the celebrated deep measures (Kolmogorov, logical depth, thermodynamic depth, effective complexity) have no verified numeric value for any real macroscopic non-biological system. The catalog's columns are empirical regularities plus anchored rubrics — that honesty is a positioning strength.

## Folklore register (encoded as filling_rules)

| Folklore | Status | Rule |
|---|---|---|
| "Everything is a power law / scale-free" | Most famous power laws failed CSN's test; power grid degree distribution is exponential | power-law-rigor |
| "Earthquakes are the textbook SOC example" | G-R statistics solid; SOC *mechanism* contested (Watkins et al. 2016) | soc-two-claims |
| "Markets exhibit low-dimensional chaos" | Debunked (1990s BDS-test literature) | no-market-chaos |
| "Climate maximizes entropy production" (Paltridge MEP) | Contested hypothesis, not settled physics | recorded per-entry, evidence_status: measured-disputed |
| CA earthquakes: CSN rejection vs. G-R b≈1 | Different variables and fitting rigor — a real tension | recorded, not silently resolved |

## Verification queue (for the citation-checker, before any entry publishes)

- All hurricane PDI/ACE figures and G-R b-values — search-snippet sourced, primary papers not read.
- Solar-cycle Lyapunov figure (~15.9 months) — single unopened study.
- LLW 2013, Cilliers 1998, Bar-Yam 2002, Siegenfeld & Bar-Yam 2020 — PDFs failed extraction; feature lists rest on cross-checked secondary sources.
- Missouri River fractal-dimension range; six-market entropy study; turbulence ε-machine authorship — flagged inline in formal-measures.md.
- Érdi feature list — possible search-conflation with Mitchell's vocabulary; treated as low-confidence, excluded from the merge.
- Internet cascade-size distribution — possible genuine literature gap; revisit under CDN/BGP/outage terminology.

## Phase 1b outcome (anchors)

All 15 rubric/hybrid columns have anchor files in `schema/anchors/` — 11 drafted by Sonnet agents, 4 by the orchestrator (the two confusable pairs: decentralization/self_organization = locus-of-control vs. genesis-of-order; adaptive_capacity/robustness_resilience = mechanism vs. outcome). All 11 agent files were read and vetted by the orchestrator.

Orchestrator adjudications during harmonization:
- **emergence: sun 1→2, english 2→3** — the draft scored both on their least emergent aspect rather than their characteristic macro-phenomena (dynamo effective theory; population-level convention and diachronic law). Recorded in emergence.yaml notes.
- **criticality two-claim structure**: resolved inside the rubric — the scale levels jointly encode event-statistics evidence and mechanism status; entries additionally record `mechanism_status` per the panel-spec definition. No spec change needed.
- Accepted against initial suspicion: english nonlinearity=1 (well-argued; LLW hold nonlinearity non-necessary), internet emergence=2, sun openness=4 (absolute-flux vs. mass-normalized Φm tension explicitly reconciled in the file's notes).

Additions to the verification queue from Phase 1b:
- chaos_sensitivity.yaml cites an incomplete NYSE source ("No evidence of chaos but some evidence of dependence in the US stock market", Chaos, Solitons & Fractals — authors/year missing). Complete the citation; do not fill from memory.
- Modularity Q values (Internet AS graph, power grids, urban mobility) are all [unverified — model knowledge]; the source corpus has clustering coefficients only. Entry research must source real Q papers or score qualitatively.
- Solar-flare power-law claim in criticality.yaml (α_F≈1.8, ~13 orders of magnitude) needs a primary citation (Aschwanden-school SOC literature).
- ERCOT voltage collapse (saddle-node bifurcation, textbook power-systems dynamics) flagged in tipping_transitions.yaml as a likely legitimate ≥2 score pending a dedicated literature check — Phase 2/3 follow-up.

## Next: Phase 2

Schema + roster lock (time-boxed per dragon #3): finalize the entry schema against panel-spec v0.2, lock the pilot 10, draft the full ~40-class roster. Then Phase 3: hand-build the first 2–3 entries.
