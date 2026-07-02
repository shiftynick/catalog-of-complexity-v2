# Entry Schema (v1 — FROZEN with panel-spec v1.0, 2026-07-02)

The shape below is now proven against all 10 verified entries in [data/classes/](../data/classes/) — consult those (especially tropical-cyclones.yaml and financial-markets.yaml, the hand-built gold pair) as the living reference; this document explains the shape. Panel columns are specified in `schema/panel-spec.yaml` (frozen v1.0, D15). Per decision D14, entries are **classes**; famous instances appear as named **exemplars** carrying evidence inside the class entry. Real entries additionally carry `provenance.fix_log` / `flag_cleanup_notes` blocks accumulated during verification — treat these as append-only history.

```yaml
# data/classes/tropical-cyclones.yaml
id: tropical-cyclones
name: Tropical cyclones
category: geophysical
status: draft                  # draft | verified | published

exemplars:                     # evidence carriers + narrative anchors (D14)
  - id: hurricane-katrina
    name: Hurricane Katrina (2005)
    note: primary worked exemplar; exceptionally well-instrumented
  - id: hurricane-andrew
    name: Hurricane Andrew (1992)

summary: >
  One-paragraph accessible-layer description. Written for the science-museum
  reader; the evidence layer below is for the researcher.

relations:                     # the compositional graph (D13)
  part_of: [planetary-climate] # systems this class is embedded in
  contains: []                 # complex subsystems, by catalog id where one exists
  # Unresolved names (no entry yet) are legal — they form the roster
  # expansion queue, still fame-gated per dragon #2 before promotion.
  # Finer-grained recursion (atomic parts that are themselves complex
  # systems) lives in attributes.component_ontology, not here.

attributes:
  energy_flux_density:
    type: quantitative
    level: exemplar(hurricane-katrina)   # class-general | exemplar(<id>)  (D14)
    value: 0.5                 # illustrative only
    unit: W/kg
    method: "Free energy rate density per Chaisson (2001)"
    sources: [chaisson2001]
    confidence: medium
  self_organization:
    type: rubric
    level: class-general
    score: 4                   # 0-4, anchored per schema/anchors/self_organization.yaml
    justification: >
      Eyewall and rainband structure arise spontaneously from moist convection
      under rotation; no external templating. Matches the class's own anchor
      in self_organization.yaml.
    sources: [emanuel2003]
    confidence: high
  max_lyapunov_exponent:
    type: quantitative
    level: class-general
    value: unknown             # 'unknown' is legal and never guessed around
    note: "Storm-scale figure not established; the atmosphere-level ~2-week horizon is recorded under chaos_sensitivity."

emergent_phenomena:
  - name: Eyewall
    order_parameter: "tangential wind maximum radius"
    note: ...

sources:
  chaisson2001:
    citation: "Chaisson, E. (2001). Cosmic Evolution: The Rise of Complexity in Nature. Harvard UP."
  emanuel2003:
    citation: "Emanuel, K. (2003). Tropical cyclones. Annu. Rev. Earth Planet. Sci., 31."
    url: https://doi.org/10.1146/annurev.earth.31.100901.141259

provenance:
  drafted_by: agent            # agent | human
  verification:
    citation_check: pass
    plausibility_check: pass
    consistency_check: flagged   # anything flagged goes to human review
    coverage_check: pass
  flags:
    - column: self_organization
      by: consistency_check
      note: "Score 4 — confirm against anchor set."
```

Conventions worth restating:
- Every attribute value carries `level` (class-general vs. exemplar-measured) and, for signal-relative quantities, names its measurand (panel-spec filling rules).
- Singleton classes (e.g., `the-internet`) are legal: one exemplar that is the whole class. The parked `instance_population` attribute, if adopted, records n per class and governs which class-statistical claims are possible.
- Class-level generalizations must be marked as literature-direct or generalized-from-exemplars in their justification.
