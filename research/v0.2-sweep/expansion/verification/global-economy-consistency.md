# Consistency check — global-economy

Date: 2026-07-02. Checker: consistency-checker (commensurability enforcer).
Scope: audit every rubric/hybrid score in `data/classes/global-economy.yaml`
against the 15 anchor files in `schema/anchors/`, audit all filling rules,
audit all `level` tags, and cross-check against the verified entries
`data/classes/financial-markets.yaml` and `data/classes/cities.yaml` for
cross-entry coherence. No file was edited; this is a read-only audit.

---

## Method

Read in full: `schema/panel-spec.yaml`, all 15 files in `schema/anchors/`,
`docs/schema.md`, `docs/roster.md`, `research/v0.2-sweep/expansion/
global-economy-sources.md`, `data/classes/financial-markets.yaml`,
`data/classes/cities.yaml`, and the relevant `component_ontology`/
`instance_population`/`scoping_note` sections of `data/classes/
the-internet.yaml` (the entry's own cited precedent for dual-atomicity).

Every rubric/hybrid column in global-economy.yaml was checked against its
worked anchor scale text and the nearest worked exemplars (predominantly
financial-markets and cities, both cited explicitly as comparators
throughout the entry, consistent with the task brief's instruction for
expansion/non-anchored classes). All `level` tags were extracted and
checked against the panel-spec's level definitions. All six filling_rules
were checked against their specific binding text.

---

## Column-by-column rubric/hybrid audit

### modularity (score 2)
Matches financial-markets' anchor (2) and cities' anchor (2) almost
exactly in shape: real subdivision (regional trade blocs/currency areas)
with "substantial cross-module flow" per the scale's own level-2 text.
No drift. **PASS.**

### decentralization (score 3)
Correctly applies the anchor file's own "infrastructure-category
guidance" addendum (real-time steering vs. bookkeeping discriminator):
IMF/WTO/central-bank coordination is bookkeeping/surveillance/
conditionality, not moment-to-moment steering of trade/price formation.
Matches the-internet's anchor (3) rather than financial-markets' (2),
correctly reasoned as one step more distributed because financial-markets'
single-exchange operator has narrower but more concrete real-time
authority (halting trading) than any single global-economy institution
does over trade/production/prices. **PASS**, well-reasoned application of
the anchor's own explicit cross-entry guidance note.

### nonlinearity (score 3)
Directly verified (not inherited) via Brock & Sayers (1988) BDS-test
findings of genuine nonlinear dependence in US macro time series. Matches
cities' anchor score (3) exactly. Minor wording issue: the justification
frames the score as "between cities (score 3) and financial-markets/
tropical-cyclones (4)," but the assigned score (3) equals cities' anchor
rather than sitting strictly between — this is loose phrasing, not a
miscalibration (the reasoning content correctly parallels cities': modal
day-to-day activity is quasi-linear, nonlinearity concentrated at
turning points). **NOTE**, cosmetic only.

### feedback (score 3)
Three loops listed with sign + mechanism, satisfying the anchor notes'
explicit requirement that every score >=2 carry an itemized loop list.
Matches financial-markets' and cities' anchor level (3) with directly
parallel reasoning (loops central but not totalizing outside crisis
episodes / turning points). **PASS.**

### openness_dissipation (score 3)
Matches cities' anchor (3) exactly, one below the Sun/hurricane ceiling.
Power figure verified: 620 EJ/yr = 6.2e20 J/yr / (3.156e7 s/yr) =
1.965e13 W, consistent with the entry's own stated "~1.97e13 W" /
"~2e13 W." Reasoning (large absolute throughput, small relative to
planetary/stellar fluxes, productive-capital-stock persistence longer
than an energy interruption) directly parallels the cities anchor's own
"collapse timescale longer than a hurricane's" language. **PASS**,
numerically verified.

### chaos_sensitivity (score 1)
Matches financial-markets' anchor (1) exactly, and per the anchor's own
does_not_count/binding no-market-chaos rule, correctly states "nonlinear
dependence: yes; low-dimensional deterministic chaos: no accepted
evidence" rather than averaging to a misleadingly moderate score. This is
explicitly verified via a *different* primary source (Brock & Sayers
1988, business-cycle literature) than financial-markets' own citation
(Scheinkman & LeBaron 1989 walked back by later BDS-test literature) —
the entry correctly notes this is a directly-verified parallel, not mere
inheritance. **PASS**, exemplary application of the binding rule.

### criticality (score 0, mechanism_status: none)
Matches the anchor's level-0 text and the cities/river-networks
(pre-correction) floor-case precedent exactly: "no scale-invariant event
statistics reported or sought... no SOC or critical-point mechanism...
proposed." Correctly applies boundary_clarification `events-of-the-scoped-
system`: the firm-size Zipf finding (static-cross-sectional, not an event
distribution) is NOT smuggled in here, and is correctly kept under
extreme_event_statistics only, exactly as cities keeps its Zipf city-size
finding out of its own criticality score. **PASS.**

### extreme_event_statistics (exemplar(firms), measured-untested)
Correctly labeled evidence_status: measured-untested per
filling_rules.power-law-rigor (Axtell 2001 uses OLS log-log regression,
not CSN-2009-grade MLE+goodness-of-fit testing). measurand_type is
correctly static-cross-sectional (not conflated with a temporal-event
claim). level is correctly exemplar(firms), not class-general — the
entry explicitly quotes Axtell's own caveat that non-U.S. firm-size Zipf
behavior remains "a conjecture." Confirmed absence from the CSN 24-dataset
table is asserted and cited consistently with financial-markets.yaml's own
identical claim about equity-return tails. **PASS**, rigorously argued.

### tipping_transitions (score 1)
Correctly applies boundary_clarification `single-modeled-mechanism-is-2`:
Scheffer et al.'s early-warning-signal framework is noted as "proposed as
potentially applicable to macro-financial systems in the broader
literature" but NOT specifically modeled for the global economy as scoped
here (contrast financial-markets' own score of 2, where Scheffer et al. IS
applied specifically to markets with a named threshold concept). The
entry explicitly and correctly distinguishes itself from financial-markets'
higher score on exactly the right boundary. **PASS.**

### memory_hysteresis (score 3)
Matches financial-markets' and cities' anchor level (3) — documented
path-dependent "scarring" (post-crisis regulatory regimes, labor-market
hysteresis/scarring in the labor-economics literature) without a single
canonical loop-width number, correctly held below the AMOC/English
quantitative-loop ceiling of 4. **PASS.**

### information_processing (score 3)
Matches cities' anchor level (3), correctly held below financial-markets'
top-of-scale (4). Critically, the Hidalgo-Hausmann ECI justification
clears the does_not_count bar (mere aggregation/statistics is not
sufficient) by explicitly citing the paper's finding that capital and
trade REALLOCATE based on the constructed ECI-vs-income deviation — i.e.,
a genuine downstream state-dependent response, not just "the system
carries a lot of information." **PASS**, correctly reasoned against the
column's central exclusion.

### adaptive_capacity (score 3)
Matches cities' anchor level (3) exactly, with directly parallel reasoning
(components hold internal models and adjust anticipatorily; selection
operates on firms/economies; institutional reform is real but slow
relative to a market's near-continuous churn). **PASS.**

### emergence (score 3)
Matches cities' and languages' anchor level (3), correctly held below
financial-markets' 4. The Hidalgo-Hausmann ECI is used as the load-bearing
order-parameter evidence, satisfying boundary_clarification
`effective-theory-quality-gates-3` (a formalized, predictively-used macro
theory, not merely pattern vocabulary) — this clears a higher bar than
stars' dynamo theory (held at 2 for exactly this reason) and is correctly
distinguished from that case. **PASS.**

### self_organization (score 3)
Matches cities' anchor level (3), above the-internet's designed-skeleton
anchor (2). Correctly reasons that the international institutional
skeleton "constrains but does not come close to determining" the emergent
trade/capital/firm-size patterns, directly parallel to cities' own
"skeleton constrains but does not determine" reasoning. **PASS.**

### robustness_resilience (score 3)
Matches financial-markets' and cities' anchor level (3) with directly
parallel reasoning and an explicit list of named historical perturbations
absorbed with scarring, not identity loss, plus a stated destructive-event
class that would separate 3 from 4 (systemic monetary collapse, sustained
autarky) — satisfies the anchor's normalization-rule requirement that
perturbations be named relative to the system's own spectrum. **PASS.**

### cascade_susceptibility (score 2)
Matches financial-markets' and cities' anchor level (2) in substance
(dedicated case studies exist — 2008 crisis contagion, post-2020
supply-chain cascades — establishing cascades occur without a fitted
cross-event cascade-size distribution). **FIX**: unlike financial-markets'
parallel column (which cites `sources: [sec-cftc-flashcrash]`, a named
primary/verified report) and cities' parallel column (`sources:
[ne-blackout-2003]`), this entry's cascade_susceptibility carries no
`sources:` entry at all — the 2008-crisis and supply-chain claims are
narrated from general/model knowledge without a citation, which is weaker
than the level-2 anchor's own requirement ("at least one dedicated study
models or documents cascading failure"). This is a citation/coverage gap
more than a scoring error (the score itself is plausible and the entry's
own flags block already names "Reinhart & Rogoff... not searched" as a
follow-up), but it should be tightened with at least one named source
(e.g., a specific 2008-crisis contagion study) before verified status.

---

## Cross-column internal consistency

### Atomicity contradiction: scoping_note/component_ontology vs. hierarchy_depth (FIX)
The scoping_note (lines 57-78) explicitly and repeatedly declares
**national economies** as "the entry's component_ontology / atomicity
population... exactly as 'traders' are NYSE's atoms," and states firms
are "NOT the primary atomicity choice for this entry's characteristic
dynamics." The `component_ontology` block's own per-part note reinforces
this: national economies are "Declared as this entry's primary atomicity
population per the scoping note," while firms are recorded as a
co-equal, separately-noted entry in the same parts list (not nested
beneath national economies).

However, `hierarchy_depth`'s method line (lines 321-329) contradicts this
directly: it declares **firms** as the atoms ("firms (atoms, per the
deeper population) -> national economies (1, this entry's declared
atomicity level) -> regional trade blocs/currency areas (2) -> the
integrated global system (3)"), i.e., it counts national economies as
ONE LEVEL ABOVE the atoms, not AS the atoms.

This is a direct contradiction of the entry's own declared atomicity
choice, which filling_rules.atomicity-convention specifically exists to
make auditable ("Each entry declares its atomicity choice in the scoping
note; the consistency checker audits comparable systems for comparable
choices" — here the audit target is internal, not cross-entry, but the
principle transfers: an entry's own hierarchy_depth counting convention
must use the atomicity level the entry itself declared). Compare
financial-markets.yaml, where hierarchy_depth's convention (agents [atoms]
-> desks/firms [1] -> venues [2] -> integrated market [3]) is fully
consistent with that entry's own scoping_note declaration that "trading
agents and orders" are the atoms — no analogous contradiction exists
there.

The numeric value (3) is plausible either way and this finding does not
imply the value itself is wrong, but the entry cannot simultaneously
assert "national economies are the atoms" (scoping_note, component_
ontology) and "national economies are one level above the atoms, with
firms as the atoms" (hierarchy_depth) without a contradiction. **FIX**:
either (a) restate hierarchy_depth's convention as national economies
(atoms, level 0 implicit) -> regional trade blocs (1) -> integrated
global system (2), dropping firms from the hierarchy_depth count
entirely (consistent with the scoping note's "firms are NOT the primary
atomicity choice" and with financial-markets' own convention of
excluding orders/instruments — non-atomicity-population items — from the
count), which would change the value from 3 to 2; or (b) keep firms in
the count but rewrite the scoping_note/component_ontology to acknowledge
that firms function as sub-national-economy atoms for hierarchy-counting
purposes specifically, distinct from the "characteristic-dynamics atoms"
claim used elsewhere. Recommend (a) as the more consistent fix.

### Numerosity vs. component_ontology
`numerosity`'s multi-typed value list and `component_ontology`'s parts
list report the same underlying figures (national economies ~195; US
firms with employees 5,541,918; US all business entities ~2.1e7; global
firms ~3-4e8; households ~8.2e9) without contradiction. **PASS.**

### interaction_topology / interaction_ontology
`interaction_topology: network` is consistent with `degree_distribution`
being correctly left `unknown` rather than borrowed from an unrelated
literature (the entry's own note flags this column as now "live" given
the network topology choice, exactly per the sweep report's conditional).
`interaction_ontology`'s alphabet_closure: constrained is reasoned by
direct, explicit comparison to financial-markets' own "constrained"
verdict and correctly distinguished from cities' "open" verdict (cities'
own justification is about newly-arising interaction types like
ride-hailing; global-economy's is about institutional/treaty-mediated
channels that change only through governance) — the distinction is
substantively argued, not just asserted. **PASS.**

---

## Filling rules audit

1. **no-guessing**: `unknown` used appropriately and non-evasively for
   energy_rate_density (mass figure confirmed absent, not merely
   unsearched), degree_distribution, fractal_dimension_spatial, and
   temporal_correlation, each with a specific note on what a follow-up
   search should target. **PASS.**
2. **power-law-rigor**: extreme_event_statistics correctly filed as
   measured-untested; the entry explicitly reasons through why (OLS vs.
   CSN-grade MLE+GoF). **PASS.**
3. **soc-two-claims**: criticality's event-statistics and mechanism
   sub-claims are both explicitly addressed and both null, correctly
   keeping the firm-size Zipf finding out of this column (see above).
   **PASS.**
4. **no-market-chaos**: chaos_sensitivity states the required
   "nonlinear dependence: yes / deterministic chaos: no accepted
   evidence" framing explicitly and directly, sourced independently from
   financial-markets' own citation. **PASS.**
5. **measurand-required**: extreme_event_statistics names its measurand
   explicitly ("U.S. firm-size distribution... rank-size/Pareto tail
   fit"); temporal_correlation and degree_distribution (left unknown)
   name what measurand a future search should target. **PASS.**
6. **atomicity-convention**: the scoping_note states the atomicity choice
   explicitly and at unusual length/rigor (three-tier resolution,
   explicitly flagged as revisable) — but see the hierarchy_depth
   contradiction above. **FIX** (see above; the declaration itself is
   exemplary, the downstream application in hierarchy_depth is not
   consistent with it).
7. **interaction-typing**: interaction_ontology individuates 4 types by
   mechanism/carrier (trade flow, capital flow, price/market coupling,
   institutional rule-setting), not by outcome/sign; alphabet_closure is
   argued rather than asserted. **PASS.**
8. **level-required**: every attribute carries a `level` tag; 28 of 29
   scored attributes are class-general, extreme_event_statistics is
   correctly exemplar(firms) — matching the sweep report's and the
   Axtell-paper's own explicit U.S.-only caveat. **PASS.**

---

## evidence_status audit

Spot-checked against panel-spec's six-value enum
(measured/measured-untested/measured-disputed/derived/qualitative/
unknown): all values used are enum-conformant. numerosity and
component_ontology's firms row (measured-disputed) is correctly applied
(global firm count genuinely diverges across secondary aggregators,
300-430M range, not a single settled figure) — matches the panel-spec's
definition of measured-disputed exactly ("published but statistically or
mechanistically contested" — here, methodologically contested across
sources rather than academically disputed, a defensible extension of the
category consistent with how the-internet.yaml uses measured-disputed for
its own connected-device counts).

---

## Cross-entry coherence (vs. financial-markets.yaml and cities.yaml)

The entry is unusually disciplined about stating its comparator
explicitly in nearly every rubric/hybrid justification ("Comparator:
matches X's own anchor level..."), which makes auditing straightforward
and is good practice worth normalizing across future expansion entries.
No score was found to be an unjustified outlier relative to its stated
comparator. The one structural gap (cascade_susceptibility's missing
`sources:` field) is a citation-check-adjacent finding, included here
because it bears on whether the level-2 anchor's own evidentiary bar
("at least one dedicated study") is actually met by citation, not just by
narrative recall.

---

## Overall verdict

The entry is well-calibrated against the anchor library: no blocker-level
anchor contradictions were found. One fix-level internal contradiction
(hierarchy_depth's atomicity choice vs. the scoping_note's/component_
ontology's declared atomicity choice) and one fix-level citation gap
(cascade_susceptibility lacking a sources entry) should be resolved before
promotion past draft. One cosmetic wording issue (nonlinearity's
"between X and Y" phrasing when the score equals X) is noted but does not
require a value change.
