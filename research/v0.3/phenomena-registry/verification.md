# Phenomena Registry — Adversarial Consistency Verification

Verifier pass over `by-system/*.yaml` (15 files, 64 phenomena) against `SPEC.md` v1
(2026-07-03) and the merged `registry.json`. Scope: cross-classifier commensurability,
not fact-checking of host-entry citations (those are inherited/trusted per SPEC's
evidence-discipline clause).

## 1. The 11-0-0 result: is new-entity really closed-only?

`novelty_x_closure` reports new-entity = {closed: 11, constrained: 0, open: 0}. I tested
this against SPEC's own operational test ("you can point at one, count them, track one
over time") on every candidate in a constrained/open system.

### financial-markets — Strategy ecology (constrained)
Classified new-statistics. The order_parameter as WRITTEN is "population shares of
strategy types" — a distributional composition, not an object. But the phenomenon
NAME plausibly admits an entity reading: an individual strategy-instance (e.g., "the
momentum funds," "a market-making desk") is arguably not point-at-able the way a
storm or a bar is — strategies are re-instantiated continuously by shifting agent
populations, unlike a Gulf Stream or a sunspot which has a location and a boundary at
an instant. The entry's own order_parameter choice (population share) is what should
drive classification per SPEC ("the order parameter is a time-signature... not an
object" / "a distribution shape"). The order_parameter here is neither a trackable
object's coordinates nor a period — it's a composition vector. **Verdict: KEEP
new-statistics.** Not a new-entity miss; the phenomenon as scoped never named a
trackable singular object.

### financial-markets — Liquidity (constrained)
order_parameter is bid-ask spread / depth — again a population-level summary
statistic, not an object. No candidate individuable "liquidity-object" is ever named.
**Verdict: KEEP new-statistics** (though see Section 3 on the episodic-triggered
onset call, which is shakier).

### the-internet — AS-level hub hierarchy (constrained)
This is the SPEC's own worked new-structure example verbatim ("AS-level hub
hierarchy" appears in the new-structure bullet, SPEC.md line 50). But scrutinize
harder: a Tier-1 AS (e.g., AS3356 Lumen, AS1299 Arelion) is individually named,
countable (~10-20 Tier-1 ASes are a matter of public record), and trackable over
time (peering-relationship changes, de-peering events are literally reported in the
industry press) — it passes the point-at-it/count-it/track-it test as cleanly as a
"named fault" in the earthquake registry's own multi-fault-cascading-rupture entry
(new-entity) or a "named AS" in BGP routing tables. The registry classified the
GRAPH-LEVEL pattern (hub/authority hierarchy as a whole), which is legitimately
new-structure — but the classifier never separately considered "individual Tier-1 AS"
as its own entity-level phenomenon, the way tropical-cyclones separately scores
Eyewall/Warm-core/Rainbands/Vortex as distinct phenomena at different aggregation
levels. This is not strictly a misclassification of the phenomenon AS NAMED
("AS-level hub hierarchy" is a structure, not an object) — but it is a **missed
phenomenon**, not a misclassified one: the registry undersamples the-internet's
entity-level phenomena relative to how finely tropical-cyclones/stars/weather-systems
were sliced. **Verdict: KEEP new-structure for the hierarchy; flag as coverage gap**
(see Section 5) rather than reclassify.

### cities — Neighborhood identity / segregation patterns (open)
Classified new-structure, onset crossover-gradual. Apply the test directly: "a
neighborhood" (e.g., the Upper East Side, Shibuya) is exactly as individuable,
nameable, countable, and trackable-over-time (gentrification, boundary shift) as a
"western boundary current" (ocean-circulation, new-entity) or a "central bar"
(galaxies, new-entity). The entry's own order_parameter is written as "spatial
clustering... (morphological; no single pinned index)" — i.e., the classifier
described the AGGREGATE PATTERN across all neighborhoods, not a single neighborhood
as an object. That's a legitimate scoping choice, but it is inconsistent with how
ocean-circulation scored western-boundary-current-intensification: that phenomenon's
substrate is explicitly "5 major western boundary current systems globally" (order-of-
magnitude COUNT of individuable objects) and was scored new-entity on exactly that
basis. cities' own substrate/count_oom line never attempts an analogous count of
neighborhoods, defaulting instead to population count. This is the sharpest true
inconsistency found in the sweep.
**Verdict: RECLASSIFY candidate — genuine hard case.** The name "neighborhood
identity" (singular, individuable) points one way; the recorded order_parameter
(population-level clustering pattern) points the other. Recommend split treatment
consistent with the SPEC's "hard cases get one kind + runner-up" rule: keep
new-structure as primary (the frozen-pattern reading the classifier chose is
defensible and matches "city segregation patterns" as SPEC's own new-structure
example, line 50) but this is weaker than presented — confidence should drop from
medium to low, and the justification should explicitly name new-entity as a
closely-argued runner-up rather than only mentioning new-statistics. Net effect: no
hard reclassification (I will not overturn the primary kind), but the certainty
underlying the 11-0-0 claim is overstated for this record specifically.

### world-wide-web — Topic/community clustering (open)
Classified new-structure. "A community" (e.g., a specific densely-linked cluster of
academic pages, or a national-domain cluster) is nameable and trackable in principle,
but this entry explicitly records NO measured community boundaries or count (no
modularity Q, no cluster count) — unlike neighborhoods (which cities at least
implicitly counts via borough-level geography) or Tier-1 ASes (which are named in
BGP data). Without ANY individuated instance ever named in the entry, there is no
evidentiary basis to score an entity-level alternative. **Verdict: KEEP
new-structure**, no reclassification — the cities case is qualitatively different
because cities' entry can name actual neighborhoods; WWW's cannot name actual
communities.

### ocean-circulation — Mesoscale eddy field (closed system — included per task's list)
Already closed, so doesn't touch the 11-0-0 claim about closed vs.
constrained/open, but worth resolving since the prompt raises it directly. order_parameter
is eddy KINETIC ENERGY (population-level energy budget), and the entry's own
component_ontology treats "mesoscale eddies" as individuable one level up from
eddy field. The classifier's own justification concedes new-entity is the runner-up.
This is the cleanest self-flagged hard case in the whole registry — the classifier
picked the order_parameter's literal grammatical form (a scalar energy figure)
over the SPEC's substantive test (can you point at an eddy? yes — eddies are
routinely tracked by altimetry, given IDs, and followed for months, exactly like a
tropical cyclone). Compare directly to tropical-cyclones' own eyewall/vortex
entries, which were scored new-entity despite ALSO having scalar order parameters
(radius of max wind, minimum central pressure) — the presence of a scalar
order_parameter did not stop the tropical-cyclones classifier from calling the
underlying object new-entity, but it did stop the ocean-circulation classifier.
That is a direct classifier-inconsistency, not a genuine domain difference.
**Verdict: RECLASSIFY.** Primary phenomenon "mesoscale eddy field" should split
attention: either (a) reclassify to new-entity (individual eddy, trackable,
countable via altimetry-based eddy-tracking databases that exist in the literature
even though this entry didn't cite one), with new-statistics as runner-up for the
aggregate KE budget, or (b) keep new-statistics as scored but explicitly note
"mesoscale eddy" as a separate unscored candidate new-entity phenomenon (an
omission, structurally the same gap as the AS-hierarchy case). I recommend (a):
flip primary to new-entity, since SPEC's own paradigm-case language ("you can point
at one, count them, track one over time") is satisfied more directly by a single
eddy than the western-boundary-current entity call already accepted for the same
system.

### Net assessment of the 11-0-0 pattern
Two genuine soft spots found (cities' neighborhood entry undersells a real
new-entity runner-up; ocean-circulation's eddy field should likely flip primary
kind to new-entity — though this doesn't change the closed/constrained split since
ocean-circulation is already closed). No constrained or open system phenomenon
clears the bar for a hard RECLASSIFY to new-entity. The AS-hierarchy and
WWW-community cases are best read as **coverage gaps** (a phenomenon the registry
never scored, because the source entries' emergent_phenomena lists didn't include an
entity-level item), not misclassifications of what IS in the registry — and SPEC
explicitly forbids inventing phenomena beyond the host entry's list ("Do not invent
phenomena," SPEC.md line 81), so this is a host-entry limitation propagating
downstream, not a phenomena-registry classification error.

**Verdict: new-entity is closed-only → SURVIVES-WEAKENED.** The pattern holds as
classified (0 hard reclassifications into constrained/open new-entity), but it is an
artifact of which phenomena each system's `emergent_phenomena` block happened to
name, not evidence that constrained/open systems structurally lack individuable
entities (Tier-1 ASes and neighborhoods plainly pass SPEC's own test and simply
weren't scored as separate phenomena upstream of this registry). The pattern should
not be read as "closed systems have entities, social/informational systems don't" —
it should be read as "this 15-system sample's entity-level phenomena happen to
cluster in closed systems," a substantially weaker claim.

## 2. Double-counting in the dissipative-structure motif

Motif `new-entity | threshold-bifurcation | sustained-while-driven`, n=5:
- planetary-climate: Weather systems
- stars: Granulation
- tropical-cyclones: Eyewall
- tropical-cyclones: Storm-scale vortex
- weather-systems: Extratropical cyclone

Lineage analysis: planetary-climate's "Weather systems" entry explicitly says in its
own justification block "this phenomenon points at resolved child catalog entries
(tropical-cyclones, and implicitly weather-systems itself)" and inherits its
onset_control_parameter FROM the tropical-cyclones/weather-systems child entries
rather than deriving one independently. tropical-cyclones' Eyewall and Storm-scale
vortex are two different aggregation-level cuts of essentially the same physical
object (the eyewall IS the storm-scale vortex's defining structural feature — the
entry's own text for "vortex" says "the entire coherent rotating circulation
itself," and "eyewall" says "the coherent, individuable ring-shaped structure" —
these are concentric/overlapping descriptions of one storm, not two independent
storms).

So the n=5 count decomposes into:
- **Lineage A (tropical cyclones broadly)**: planetary-climate/Weather-systems +
  tropical-cyclones/Eyewall + tropical-cyclones/Storm-scale-vortex + weather-systems/
  Extratropical-cyclone — 4 of the 5 members are the SAME underlying compositional
  claim (a rotating atmospheric vortex crossing an intensification threshold) sliced
  at three levels: parent-system pointer, sub-structure (eyewall), and whole-object
  (vortex), plus one sibling class (extratropical cyclone, which is a genuinely
  different phenomenon type — baroclinic, not WISHE-driven — and should NOT be
  merged with the tropical-cyclone lineage).
- **Lineage B (stellar convection)**: stars/Granulation — independent, unrelated
  physical mechanism (Rayleigh-Benard-type convective instability vs. moist
  atmospheric vortex dynamics).

Genuinely independent members: **3** (tropical vortex complex as ONE lineage,
extratropical cyclone as a second, granulation as a third) — not 5, and arguably not
even fully 3 members within the tropical lineage should count once each: eyewall and
storm-scale-vortex are two sub-object views of ONE storm system; counting both as
independent motif members inflates n from what should be roughly 2 (eyewall+vortex
merged) to the observed 3 (if planetary-climate's pointer entry is treated as
redundant with its children, as its own text admits).

**Recommendation**: adopt a `lineage` tag (free text, non-binding vocabulary
extension for the analysis layer only — no schema change per D8) on any phenomenon ID
whose object is compositionally nested inside another phenomenon ID's object in the
SAME motif bucket. Suggested tags: `lineage: tropical-cyclone-vortex-complex` for
{tropical-cyclones--eyewall, tropical-cyclones--vortex, planetary-climate--weather-
systems}; `lineage: extratropical-cyclone` standalone; `lineage: stellar-convection`
standalone. Motif counts reported in registry.json's crossTabs/motifs section should
be accompanied by a lineage-deduplicated n wherever a motif's n >= 3, since this is
exactly the kind of case where naive counts overstate independent discovery of a
pattern.

## 3. Cross-classifier onset drift (threshold-bifurcation audit)

Full threshold-bifurcation roster with onset_control_parameter citation quality:

| id | control parameter citation quality |
|---|---|
| ocean-circulation--bistable-circulation-regimes | Solid: vanwesten2023 + mckay2022, quantified hysteresis width |
| planetary-climate--ocean-circulation | Solid: same sources, duplicated from ocean-circulation (expected — shared physical system) |
| planetary-climate--ice-albedo | Medium: inventory-level citation (mckay2022), no per-element number extracted |
| planetary-climate--weather-systems | Weak: explicitly "inherits... rather than re-deriving," parasitic on child entries |
| planetary-climate--tipping-elements | Solid: mckay2022, most rigorously cited in the registry |
| weather-systems--extratropical-cyclone | Solid: Sanders & Gyakum 1980, named quantitative bombogenesis criterion |
| tropical-cyclones--eyewall | Weak: "no single pinned numerical critical value," qualitative threshold framing only |
| tropical-cyclones--vortex | Weak: same rapid-intensification citation as eyewall, still no pinned number |
| stars--granulation | Weak, explicitly [unverified — model knowledge], Ra_c not photosphere-specific |
| stars--sunspot-cycle | Weak, explicitly [unverified — model knowledge], no pinned dynamo number |
| stars--solar-dynamo | Weak, explicitly [unverified — model knowledge] |
| galaxies--spiral-arms | Weak, explicitly [unverified — model knowledge], no pinned Toomre-Q |
| galaxies--central-bar | Weak, explicitly [unverified — model knowledge] |
| river-networks--delta-lobe-switching-cycle | Weak: mechanism named, no numeric critical superelevation ratio |
| languages--sound-change-grammaticalization | Weak, explicitly [unverified — model knowledge], source "not read this session" |
| power-grids--voltage-collapse-bifurcation | Solid: Dobson 1992 + Simpson-Porco 2016, closed-form |
| earthquake-fault-systems (none scored threshold-bifurcation) | — |

**Stars got 3 threshold-bifurcations (granulation, sunspot-cycle, solar-dynamo), all
three self-flagged [unverified — model knowledge].** Compare weather-systems, which
got exactly 1 threshold-bifurcation (extratropical cyclone) but it is the
BEST-cited onset claim in the registry (Sanders & Gyakum 1980, a named quantitative
criterion actually used operationally by forecasters) — and weather-systems'
classifier explicitly declined threshold-bifurcation for MCC and monsoon, choosing
crossover-gradual/episodic-triggered instead specifically because no formal
threshold citation existed for those two. That is the DISCIPLINED pattern SPEC
intends.

The stars classifier, by contrast, applied threshold-bifurcation three times purely
on the strength of "this is a textbook bifurcation in the general physics
literature" (Rayleigh-Benard convection theory, mean-field dynamo theory) without
ANY entry-specific citation — exactly the pattern SPEC's onset guidance warns
against ("REQUIRES onset_control_parameter with a citation available in the host
entry... or explicitly marked [unverified]"). The spec technically permits the
[unverified] escape hatch, but three uses of it in one 5-phenomenon system, versus
weather-systems' zero, cities' zero, financial-markets' zero, the-internet's zero,
suggests **agent-level looseness, not physics-vs-society**. Galaxies also used
[unverified — model knowledge] twice (spiral-arms, central-bar) — likely the same
classifying agent as stars (both astrophysical, both invoke "textbook X-instability"
reasoning without entry-specific numbers).

**Recommendation**: downgrade confidence (not novelty_kind or onset value itself —
the qualitative claim "this system has a formal bifurcation in the literature" is
probably still defensible) on stars--granulation, stars--sunspot-cycle,
stars--solar-dynamo, galaxies--spiral-arms, galaxies--central-bar from medium to
low, to reflect that the onset_control_parameter is asserted by class-general model
knowledge rather than entry citation — bringing their evidentiary weight in line
with languages--sound-change-grammaticalization (already correctly scored low for
exactly this reason). This is a confidence-field correction, not a vocabulary
reclassification — none of these should flip onset away from threshold-bifurcation,
since the underlying physics claim (Rayleigh-Benard onset, dynamo self-excitation,
Toomre-Q disk instability) is genuine textbook material, just not sourced to the
host entry as SPEC technically wants.

## 4. Odd calls

**stars--solar-dynamo as new-function** (only closed-system new-function in the
registry). Justification argues the dynamo is a "capability... exploitable/
observable from outside" — but re-read SPEC's new-function test: "usable/exploitable
FROM OUTSIDE the system" (price discovery usable by traders, global reachability
usable by any host, grammar usable by any speaker). Nothing external "uses" the
solar dynamo the way an outside agent uses price discovery or global reachability —
it drives sunspots/flares/coronal structure, which are downstream PHYSICAL
CONSEQUENCES, not an externally-exploitable capability in the sense the other four
new-function entries share (price, reachability, grammar, ECI, hub/authority
ranking — all are information/service capabilities consumed by an external agent).
The classifier's own justification concedes new-dynamics is a strong runner-up (the
dynamo also drives the cyclic time-signature already separately scored as
sunspot-cycle). **Verdict: RECLASSIFY to new-dynamics**, or if new-function is
kept, it should be marked as the weakest-evidenced new-function in the registry —
this is functionally closer to a mechanism/generator (the thing that PRODUCES
sunspot-cycle's new-dynamics) than to a capability in the SPEC sense. Given
sunspot-cycle is already separately and more defensibly scored new-dynamics for
the field's TIME-SIGNATURE, and solar-dynamo's own qualitative_difference text is
about sustained regeneration of a field (a persistence/mechanism claim), I recommend
**new-structure** as third option is weaker than new-dynamics — final recommendation:
reclassify to new-dynamics, folding the distinction into justification as "the
dynamo IS the generating mechanism for the already-separately-scored sunspot cycle;
scoring it new-function double-credits the same underlying phenomenon under a
different kind." This also resolves a soft double-count between solar-dynamo and
sunspot-cycle (two records for one physical mechanism, differing mainly in whether
you look at the field-strength state variable or the count/butterfly-diagram
readout).

**planetary-climate--tipping-elements as new-statistics** ("Climate tipping
elements" — is an inventory a phenomenon?). The order_parameter is explicitly
"element-specific threshold state variables," and the qualitative_difference argues
the CATALOG of 16 elements is itself the emergent object. This is a stretch: a
literature inventory/taxonomy compiled by researchers (Armstrong McKay et al. 2022)
is a SCIENTIFIC CLASSIFICATION SCHEME, not a physical distributional regularity the
system exhibits — compare to galaxies--hubble-sequence, also new-statistics, which
is explicitly flagged the same way ("a taxonomy... not any star's property") and
carries the same category error, but at least hubble-sequence's taxonomy classifies
actually-observed galaxies (a real population with a real distribution over
morphological bins). Tipping-elements' "population" is 16 curated named subsystems
of ONE planet, which is a much weaker "population" in the SPEC new-statistics sense
(no realization/ensemble — Earth only tips once per element). Each individual
tipping element (AMOC bistability, ice-albedo) is ALREADY separately scored
elsewhere in this same system as new-dynamics/new-structure — this "tipping-elements"
record is best read as a meta-level index over phenomena the registry already
counts, not a fourth independent physical phenomenon.
**Verdict: RECLASSIFY-CANDIDATE, weak call to keep as-is with much lower
confidence** (high → low). It should not be silently counted as an independent
new-statistics data point in cross-system comparisons; recommend excluding it from
future analysis.run.mjs aggregate counts or flagging it `meta: true`, since it is
substantially a re-description of ocean-circulation--bistable-circulation-regimes
and planetary-climate--ice-albedo one level up, inflating the new-statistics /
threshold-bifurcation / frozen cell.

**global-economy--world-gdp-aggregate-output as a phenomenon at all**. This is the
sharpest "is this even emergence" case in the registry. SPEC's SFI test requires "a
qualitative change in organization — not mere improvement with scale." World GDP is
literally $E = \sum_i GDP_i$ — bookkeeping addition, explicitly conceded by the
entry's own effective_theory ("no formalized macro-dynamical theory of the aggregate
itself cited beyond bookkeeping summation"). A sum is not qualitatively different
from its addends in the SFI sense; it's a linear aggregation, not a phase
transition, distributional law, or novel capability. Contrast with cities--urban-
scaling-laws (also socio-economic, also new-statistics), which passes the bar
cleanly because Y = Y0*N^beta is NON-linear (beta != 1), meaning per-capita output
changes with scale — that IS qualitatively different from any one resident's
output. World GDP has no analogous claim: nothing in the entry argues world GDP
per-capita or per-economy behaves non-additively. The entry's own justification even
flags the citation as "narrative-only," the weakest evidentiary tier in the
registry.
**Verdict: RECLASSIFY — this phenomenon likely fails the SPEC emergence test
entirely** and should not be in the registry as an independent entry, or at minimum
should be re-justified around something non-additive (e.g., the fact that world GDP
growth correlates/desynchronizes across economies — but that IS business-cycle,
already separately scored). As currently written it is mere aggregation, the exact
failure mode SPEC's opening paragraph explicitly excludes ("not mere improvement
with scale"). Recommend flagging `evidence_status: fails-emergence-test` or removing
from cross-system statistical comparisons; if kept, confidence should be low, not
medium, and justification must name and rebut the "just a sum" objection rather
than conceding it and moving on.

## 5. General sweep — other notable inconsistencies

- **world-wide-web--hub-authority-structure vs. the-internet--global-reachability**:
  both new-function, both reasonably scored, but hub-authority's own justification
  admits new-structure is "close" and is "partially captured by the separate
  degree-distribution phenomenon below" — a soft acknowledgment of the same
  entity/structure/function entanglement flagged in Section 1's AS-hierarchy
  discussion. No change recommended; the entry's own hedging is appropriate here.

- **languages--grammar (new-function) vs. financial-markets--price (new-function)
  vs. cities--commuting-agglomeration-structure (new-function)**: all three
  "capability held/used by the collective" calls are internally consistent with
  each other and with SPEC's worked examples. No drift found among the
  socio-economic/cultural-informational new-function cluster — this group is
  well-calibrated.

- **onset_control_parameter completeness check**: two threshold-bifurcation
  records are missing the field entirely in the YAML structure examined
  (the-internet's records don't universally include onset_control_parameter as a
  key when onset != threshold-bifurcation, which is spec-compliant, but confirm no
  threshold-bifurcation record anywhere omits the required field — checked: all 16
  threshold-bifurcation records DO carry onset_control_parameter text, satisfying
  SPEC's REQUIRES clause structurally, even where evidentiary quality is weak per
  Section 3).

- **ocean-circulation--western-boundary-current-intensification and
  galaxies--central-bar** both cite class-general textbook dynamics for their onset
  (beta-effect Sverdrup/Stommel-Munk; disk-instability) but were scored
  crossover-gradual and threshold-bifurcation respectively for structurally similar
  "no pinned entry-specific critical value" situations. This is a real
  inconsistency: western-boundary-current's classifier chose the conservative
  vocabulary item given no pinned threshold, while central-bar's classifier (same
  "no pinned value" situation, explicitly conceded in its own text) chose
  threshold-bifurcation with an [unverified] tag instead. Both are defensible
  readings of SPEC's ambiguous middle ground, but they are NOT consistent with each
  other. Given SPEC's stated preference for the conservative choice under
  uncertainty ("if a classification would require a claim the entry doesn't
  support, choose the conservative vocabulary item"), **recommend
  galaxies--central-bar (and by the same logic spiral-arms) be reconsidered toward
  crossover-gradual**, matching ocean-circulation's more conservative practice — but
  I flag this as LOW confidence since "bar formation is a threshold/switch-like
  nonlinear instability" is closer to a direct quote from the host entry's own
  nonlinearity attribute than western-boundary-current's parallel claim, so the two
  cases are not perfectly matched. Net: soft recommendation only, not a firm
  reclassification.

## RECOMMENDED CHANGES

| file | phenomenon id | field | current -> recommended | reason |
|---|---|---|---|---|
| ocean-circulation.yaml | ocean-circulation--mesoscale-eddy-field | novelty_kind | new-statistics -> new-entity (primary), new-statistics (runner-up) | individual eddies are tracked/counted/IDed in the literature exactly like tropical-cyclone objects scored new-entity elsewhere in this registry; classifier let the scalar order_parameter (KE) override the SPEC substantive test despite conceding new-entity as runner-up |
| stars.yaml | stars--solar-dynamo | novelty_kind | new-function -> new-dynamics | the dynamo is the generating mechanism for the already-separately-scored sunspot-cycle time-signature, not an externally-exploitable capability in the sense of price/reachability/grammar; double-counts sunspot-cycle under a different kind |
| stars.yaml | stars--granulation | confidence | medium -> low | onset_control_parameter is [unverified — model knowledge], not entry-cited; inconsistent with weather-systems' disciplined declination of threshold-bifurcation absent a citation |
| stars.yaml | stars--sunspot-cycle | confidence | medium -> low | same reason: [unverified — model knowledge] onset citation |
| stars.yaml | stars--solar-dynamo | confidence | medium -> low | same reason: [unverified — model knowledge] onset citation |
| galaxies.yaml | galaxies--spiral-arms | confidence | medium -> low | same reason: [unverified — model knowledge] onset citation |
| galaxies.yaml | galaxies--central-bar | confidence | medium -> low | same reason: [unverified — model knowledge] onset citation |
| galaxies.yaml | galaxies--central-bar / spiral-arms | onset | threshold-bifurcation -> crossover-gradual (soft/low-confidence recommendation) | inconsistent with ocean-circulation's more conservative treatment of an equally uncited textbook threshold |
| planetary-climate.yaml | planetary-climate--tipping-elements | confidence | high -> low | the "16-element catalog" is a research taxonomy over one non-ensemble planet, not a physical distributional regularity; substantially re-describes AMOC-bistability and ice-albedo phenomena already scored elsewhere in the same system |
| global-economy.yaml | global-economy--world-gdp-aggregate-output | novelty_kind / confidence | new-statistics -> flag fails-emergence-test (or exclude from analysis); medium -> low | world GDP is explicitly conceded bookkeeping summation, not a qualitative/non-linear departure from unit behavior; fails SPEC's opening SFI test as written, unlike cities' urban-scaling-laws (non-linear beta != 1) which correctly passes |
| cities.yaml | cities--neighborhood-identity-segregation | confidence / justification | medium -> low; add new-entity as explicit named runner-up | order_parameter (aggregate clustering pattern) supports new-structure as scored, but individual named neighborhoods pass SPEC's point-at-it test as cleanly as ocean-circulation's western-boundary-current (new-entity); justification currently only names new-statistics as runner-up, omitting the stronger new-entity case |
| (analysis layer, non-binding) | tropical-cyclones--eyewall, tropical-cyclones--vortex, planetary-climate--weather-systems | new field: lineage tag | none -> lineage: tropical-cyclone-vortex-complex | the n=5 "new-entity/threshold-bifurcation/sustained-while-driven" motif is really ~3 independent lineages; 3 of its 5 members are nested/compositional views of the same storm object, inflating the apparent cross-system replication of the pattern |

## Headline verdicts

**"new-entity is closed-only": SURVIVES-WEAKENED.** Post-recommendation counts:
closed=11 (unchanged — the eddy-field reclassification adds to closed's own count,
since ocean-circulation is itself closed), constrained=0, open=0 — the raw pattern
is untouched by any recommended change, because no recommended reclassification
crosses the closed/constrained boundary. But the pattern's INTERPRETATION should be
weakened: two systems outside "closed" (cities' neighborhoods, the-internet's
Tier-1 ASes) contain phenomena that would plausibly score new-entity if the source
catalog entries had listed them as separate emergent_phenomena items — the 0s in
constrained/open reflect what got NAMED upstream, not a structural absence of
individuable objects in social/infrastructure systems. Treat the 11-0-0 split as
weak evidence for "closed physical systems get sliced more finely into named
sub-objects," not as evidence that non-closed systems structurally lack
individuable macro-objects.

**"new-function is non-closed": SURVIVES-WEAKENED.** Before changes: closed=1
(stars--solar-dynamo), constrained=4, open=2. After the recommended solar-dynamo
reclassification to new-dynamics: closed=0, constrained=4, open=2 — the pattern
becomes CLEANER and stronger (new-function genuinely zero in closed systems), which
is the opposite direction of weakening — this reclassification actually
strengthens the second headline. Net verdict for new-function: SURVIVES (post-fix),
having removed its one contaminating case.
