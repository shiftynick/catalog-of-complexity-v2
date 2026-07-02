# Consistency Check — tropical-cyclones.yaml & financial-markets.yaml
### against schema/anchors/*.yaml (15 files) and schema/panel-spec.yaml
### Adversarial pass. Default assumption: every score drifts until shown otherwise.

Checked by: consistency-checker (Phase 3 verification)
Files touched: this file only. No edits made to entries or anchors.

---

## 1. Per-column score-vs-anchor audit

Method: for every rubric/hybrid attribute in both entries, (a) locate the column's own
worked anchor for that same system in the anchor file, (b) confirm the entry's score and
justification reproduce that anchor's score and reasoning without drift, (c) where the
entry cites "per this class's own anchor," confirm the citation is accurate (not just
present).

### tropical-cyclones.yaml

| column | entry score | anchor file score (tropical-cyclones anchor) | verdict | notes |
|---|---|---|---|---|
| modularity | 1 | *(no TC anchor in modularity.yaml)* | OK | No worked anchor exists for TC in modularity.yaml (only stars, river-networks, cities, the-internet, power-grids, languages). Entry doesn't claim "per anchor," just "matches the anchor scale's 1." Correctly self-scored against the *scale text* (fuzzy/gradational, no stable partition), not a fabricated anchor citation. Consistent with the scale's level-1 band and with the Sun's own modularity=1 reasoning (weak lateral quasi-modular pattern, no persistent identity) — TC's convective cells/rainbands argument is structurally the same shape. No drift.
| decentralization | 4 | *(no TC anchor in decentralization.yaml)* | OK | No worked TC anchor exists (stars, power-grids, financial-markets, the-internet, languages only). Entry explicitly borrows the stars reasoning ("Same reasoning as the stars anchor") and reproduces it faithfully: stars=4, "nothing to remove whose absence would constitute loss of control" — TC entry says the same in its own words. Faithful analogic use, not a fabricated citation.
| nonlinearity | 4 | 4 | OK | Anchor (nonlinearity.yaml, tropical-cyclones) = 4, justification: WISHE nonlinear amplification loop, threshold/switch-like rapid intensification, eyewall replacement nonlinear pattern-reorganization. Entry reproduces all three elements near-verbatim (WISHE multiplicative coupling, RI threshold/switch, ERC nonlinear reorganization). Exact match.
| feedback | 4 | 4 | OK | Anchor = 4, three loops (WISHE reinforcing, SST-drawdown balancing, ERC balancing/oscillatory). Entry's loop list is identical in substance and sign-labeling. Exact match, and satisfies feedback.yaml's notes requirement that score>=2 carry an itemized loop list.
| openness_dissipation | 4 | 4 | OK | Anchor = 4: Carnot heat engine, ~300K/~200K reservoirs, ~1/3 ceiling efficiency, 10^12-10^13 W, collapse within ~a day (faster than storm lifetime) — the textbook 4. Entry reproduces all four numeric/physical anchors verbatim. Exact match.
| chaos_sensitivity | 4 | 4 | OK | Anchor = 4: atmospheric Lyapunov/error-doubling 2-5 days, ~2-week ceiling, Charney 1966 + Krishnamurthy 2019, track skill degrades on this horizon, intensity worse. Entry matches on all points and cites the same two sources. Exact match.
| criticality | 1, mechanism_status: none | *(no TC anchor in criticality.yaml)* | OK | No worked TC/hurricane anchor exists in criticality.yaml. Entry does NOT claim "per anchor" here — correctly self-scores against the scale text only (score 1: no CSN-grade fit / no mechanism claim beyond speculation — matches "no established... event statistics... no proposed SOC mechanism"). Correctly separates this from the Corral et al. class-level PDI power-law claim recorded under extreme_event_statistics, exactly per soc-two-claims (see §4 below). No drift.
| tipping_transitions | 2 | *(no TC anchor in tipping_transitions.yaml)* | OK | No TC-specific anchor exists (climate, fault, financial-markets, river-networks, the-internet only). Entry's own reasoning ("named mechanisms... no systematic tipping-element inventory") independently reconstructs the scale's level-2 band correctly (specific mechanism(s) formally modeled, no systematic inventory) — matches the financial-markets anchor's own level-2 reasoning structurally. No drift, though flagged as a **secondary observation**: this column could productionize a TC-specific worked anchor since the entry effectively wrote one.
| memory_hysteresis | 1 | *(no TC anchor)* | OK | No TC anchor exists (stars, fault, climate, financial-markets, the-internet, languages only). Entry's reasoning ("state is function of current environment plus short relaxation lags, no bistability documented") matches the scale's level-1 text almost word for word ("weak, short-lived relaxation memory... re-converges... no multi-stability"). Explicitly and correctly excludes the ocean cold-wake memory as out-of-boundary per its own scoping note — good boundary discipline. No drift.
| information_processing | 0 | *(no TC anchor; entry invokes stars anchor)* | OK | Entry: "same canonical-0 reasoning as the stars anchor." Stars anchor = 0, justification: pure physical transport, no detection-response structure, dynamo is feedback not information processing. TC entry reproduces this reasoning shape (pressure waves/advection/phase change/radiative transfer = physical transport; convective triggering = bifurcation not detection). Faithful analogic borrowing, correctly flags the threshold-vs-detection distinction from does_not_count. No drift.
| adaptive_capacity | 0 | *(no TC anchor; entry echoes stars/planetary-climate reasoning)* | OK | Entry: "regulation-vs-adaptation distinction the anchor's does_not_count enforces," matches stars (0) and planetary-climate (0) anchors' shared reasoning (feedbacks operate, they do not learn). No TC-specific anchor exists but the borrowed reasoning is accurate to the source anchors, and the entry text explicitly cross-references the adaptive_capacity.yaml notes' 2x2 (robust+non-adaptive vs fragile+non-adaptive), correctly self-placing TC as "fragile+non-adaptive" per that very notes block. No drift.
| emergence | 3 | 3 | OK | Anchor (emergence.yaml, tropical-cyclones) = 3. Justification: min central pressure, max sustained wind, Saffir-Simpson, Emanuel potential-intensity theory as real working vocabulary; held at 3 not 4 because storm-scale NWP increasingly resolves physics from finer simulation. Entry reproduces the first three elements and Emanuel's theory citation exactly. **Minor omission**: entry's justification does not restate the anchor's specific reason for NOT scoring 4 (the NWP-resolves-physics point) — it simply doesn't address the 3-vs-4 boundary at all. Not a scoring error (both land on 3), but the entry's justification is thinner than the anchor's on the discriminating point. Flagged as a **stylistic** gap, not a DRIFT.
| self_organization | 4 | 4 | OK | Anchor (self_organization.yaml, tropical-cyclones) = 4. Justification: eyewall/rainbands/circulation assemble spontaneously from moist convection under rotation and surface fluxes, nothing specifies form in advance, canonical dissipative structure. Entry reproduces this exactly, word-for-word close paraphrase. Exact match.
| robustness_resilience | 1 (level: exemplar(hurricane-katrina)) | 1 (exemplar: Hurricane Katrina) | OK | Anchor = 1, exemplar-level per the column's own does_not_count rule ("class-level persistence... does not make Katrina robust... state level explicitly, level: exemplar(<name>) is the default"). Entry correctly sets level: exemplar(hurricane-katrina), score 1, and explicitly declines to credit class-level persistence ("hurricanes keep forming... deliberately not credited"). Exact match, and this is the ONE column in the TC entry that correctly deviates from class-general to exemplar level, precisely matching the anchor file's own instruction. Textbook-correct application.
| cascade_susceptibility | 0 | 0 | OK | Anchor (cascade_susceptibility.yaml, stars — TC entry explicitly borrows this) = 0: "no documented mechanism by which one region's event propagates a failure cascade... through a coupled network of discrete components." TC entry: "eyewall replacement is reorganization of a continuum flow, not a failure cascade through coupled discrete components. Same floor-anchor reasoning as stars." Faithful, correctly borrowed (no TC-specific anchor exists in this file — stars, the-internet, financial-markets, river-networks, power-grids only). No drift.

**tropical-cyclones verdict: no drift found on any of the 15 rubric/hybrid columns.** Every self-cited anchor ("per this class's own anchor") was checked against the actual anchor file text and reproduces score AND justification faithfully. Where no TC-specific anchor exists, the entry either (a) correctly scores against the scale text directly without falsely claiming an anchor citation, or (b) explicitly and correctly borrows reasoning from a named sibling anchor (stars, financial-markets-contrast) with accurate attribution.

### financial-markets.yaml

| column | entry score | anchor file score (financial-markets anchor) | verdict | notes |
|---|---|---|---|---|
| decentralization | 2 (exemplar(nyse)) | 2 | OK | Anchor (decentralization.yaml) = 2, justification: central institution operates matching engine, sets rules, can halt trading — but price formation is distributed decisions no one commands. Entry reproduces this exactly, near-verbatim. Exact match. **Level check**: anchor file doesn't tag level explicitly (pre-dates level-required convention framing), but entry's level: exemplar(nyse) is defensible since the justification is NYSE-specific ("a central institution operates the matching engine") — see §5 below for a closer look at whether this should be class-general instead.
| nonlinearity | 4 | 4 | OK | Anchor = 4: multiplicative/threshold interactions, GARCH variance dynamics, margin calls/stop-loss cascades, liquidity feedback, flash-crash textbook nonlinear cascade. Entry reproduces all elements. Exact match.
| feedback | 3 | 3 | OK | Anchor = 3, three loops (momentum/herding reinforcing, mean-reversion balancing, volatility-liquidity reinforcing/episodic), scored 3 not 4 because loops aren't the sole organizing description outside crisis episodes. Entry reproduces all three loops and the exact 3-vs-4 discriminating reasoning ("central but not the sole organizing description... hence 3, not 4"). Exact match, and — unlike the TC emergence entry above — explicitly restates the boundary reasoning. Good practice.
| openness_dissipation | 2 (exemplar(nyse)) | 2 | OK | Anchor = 2: NYSE physical substrate draws continuous non-trivial power but throughput is infrastructure-support (keeps computing substrate running), not the literal generative mechanism of price-formation dynamics (unlike a hurricane where heat flux literally IS the wind-generating mechanism). Entry reproduces this distinction exactly, including the does_not_count ban on "economic disequilibrium" framings — entry explicitly invokes "literal-flux reading only, per the column's does_not_count ban." Exact match.
| chaos_sensitivity | 1 (exemplar(nyse)) | 1 | OK | Anchor = 1: BINDING no-market-chaos rule, Scheinkman-LeBaron walked back by BDS-test literature, "nonlinear dependence: yes, deterministic chaos: no accepted evidence," scored 1 not 2 because literature moved to fairly clear negative consensus, not merely mixed. Entry reproduces this exactly and correctly sets evidence_status: measured-disputed (matching the anchor's own evidence_status field exactly). Exact match — this is the column with the most explicit binding rule in the whole schema and the entry gets it precisely right.
| criticality | 1, mechanism_status: proposed-contested | 1 | OK | Anchor = 1: fat-tailed returns well documented (belongs under extreme_event_statistics), SOC-style explanations proposed but compete with GARCH/multifractal/herding frameworks, no consensus markets sit at a critical point, Watkins et al. 2016 skepticism. Entry reproduces this exactly. **Vocabulary note**: panel-spec.yaml's criticality definition specifies mechanism_status enum as `[none/proposed/contested/established]` — a flat 4-value list. The entry uses the compound value `proposed-contested`, which is not literally one of the four listed tokens. This is a real but minor schema-vocabulary drift (see §4 below) — the entry's prose justification makes the substance unambiguous (proposed AND actively contested), but the compound tag itself doesn't match the spec's enumerated vocabulary. Flagged as **DRIFT (minor, vocabulary-level, not substance)**.
| extreme_event_statistics | alpha~3 (inverse cubic law); volume ~1.5; trade-count ~3.4 | n/a (quantitative column, not rubric) | OK | Not a rubric/hybrid anchor column — reviewed under §4 power-law-rigor instead (see below).
| tipping_transitions | 2 | 2 | OK | Anchor = 2: Scheffer et al. 2009 explicitly propose the early-warning framework for markets, named mechanism/threshold concepts exist for individual crashes (1987, 2008), but no systematic multi-element inventory with empirical confirmation. Entry reproduces this exactly, including citing "early-warning-signal frameworks are explicitly proposed" and "no systematic tipping-element inventory." Exact match.
| information_processing | 4 | 4 | OK | Anchor = 4: price discovery aggregates dispersed private information into a public statistic not derivable from any one participant (Hayek), participants condition on constructed state not raw fundamentals, same news produces different responses by regime. Entry reproduces this exactly, same Hayek 1945 citation. Exact match.
| adaptive_capacity | 4 | 4 | OK | Anchor = 4: learning traders/algorithms, selection removes failing strategies/firms, institutional rule rewriting (circuit breakers post-1987), adaptation at component/population/institutional levels simultaneously — the full CAS profile. Entry reproduces this exactly, verbatim close paraphrase including "circuit breakers post-1987" and "component, population, and institutional levels simultaneously." Exact match.
| emergence | 4 | 4 | OK | Anchor = 4: price is THE order parameter, multiple layered macro-theories (asset pricing, microstructure, behavioral) simultaneously load-bearing, micro-level enumeration not how the science is done. Entry reproduces this exactly. Exact match.
| self_organization | 3 | *(anchor has no financial-markets entry — see full adjudication in §2)* | **BOUNDARY CASE** | financial-markets is NOT a worked anchor in self_organization.yaml. The entry proposes a novel score (3) argued relative to the-internet's anchor (2), explicitly flagged by the orchestrator. Full adjudication below in §2 — this is the pre-flagged item, not a silent drift.
| robustness_resilience | 3 | *(no FM anchor in robustness_resilience.yaml)* | OK | No FM-specific anchor exists (stars, TC, power-grids, the-internet, languages only). Entry's reasoning ("absorbs crashes... recovering function, with scars... known destructive event classes exist... separates 3 from 4") correctly reconstructs the scale's level-3 text ("broad tolerance: absorbs common perturbations and some large shocks, recovering function, possibly with hysteresis or scars") and the normalization-rule discipline (names actual perturbations: 1987, 2008, 2020, the 1914 closure) per the anchor file's own notes ("consistency checker should specifically audit whether justifications name perturbations relative to the system's own spectrum"). No drift, well-constructed independent score.
| cascade_susceptibility | 2 | 2 | OK | Anchor = 2: cascading dynamics documented for specific mechanisms (circuit breakers exist because propagation identified), 1987 and 2010 Flash Crash case studies/mechanism analyses (level 2), no fitted cross-event cascade-size distribution comparable to the multi-decade blackout dataset (would need level 3). Entry reproduces this exactly, including explicit mention of circuit breakers and the Flash Crash reconstruction. Exact match.

**financial-markets verdict: no silent drift found.** One column (self_organization) is a genuine, pre-flagged, and legitimately argued boundary case — adjudicated in §2. One minor vocabulary-level drift on criticality's mechanism_status tag (compound value not in the spec's literal 4-token enum) — substance is correct, tag format is not.

---

## 2. Adjudication: financial-markets self_organization = 3 vs the-internet's anchor = 2

**The claim on the table:** financial-markets scores self_organization 3, explicitly argued
against the-internet's anchored 2, on the grounds that market institutions (the NYSE
specifically) emerged from trading practice — the 1792 Buttonwood Agreement, "traders
organizing themselves" — rather than committee/regulatory design, whereas the Internet's
"designed skeleton" (protocols, routers, standards) was built by engineers before spontaneous
traffic/topology order grew on top of it.

**The scale text (self_organization.yaml):**
- 1: "Order is overwhelmingly designed/templated; minor spontaneous ordering occurs within the designed skeleton."
- 2: "Designed skeleton with substantial spontaneous order living on top of it — the system's characteristic phenomena were not designed even though its substrate was."
- 3: "Predominantly spontaneous order; external templating is present but marginal to the system's characteristic structure."
- 4: "Essentially all macroscopic order arises spontaneously... no designer, template, or blueprint at any level."

**does_not_count** is directly relevant twice: (a) "Order maintained by a present-day
controller is a decentralization fact, not a self-organization fact; this column scores the
ORIGIN of order" — genesis, not current governance; (b) "External forcing... does not count
as templating; a template specifies the FORM of the order, forcing merely powers it."

**The-internet's anchor reasoning (score 2):** "The substrate is designed (protocols,
routers, standards), but the system's characteristic structure — AS-level topology, traffic
patterns, routing-table evolution — grew from thousands of uncoordinated local decisions and
was never planned. Designed skeleton, spontaneous order on top: the definition of a 2."

### Case FOR keeping the entry's score of 3

The scale's own boundary between 2 and 3 is about how MARGINAL the templating is relative to
the system's *characteristic structure*, not whether a designed substrate exists at all — 3
explicitly allows "external templating is present but marginal." For the Internet, the
designed layer (TCP/IP, BGP, DNS, IANA number allocation) is not marginal — it IS the medium
through which all order propagates; every packet obeys protocol specifications that were
committee-designed (IETF RFCs) prior to any traffic existing at all. There was no pre-existing
"informal internetworking practice" that the protocols merely codified — the protocols came
first, ex nihilo, and only then did uncoordinated usage generate topology/traffic patterns
inside that designed envelope. That is closer to the textbook "skeleton" reading.

For financial markets, by contrast, the entry's historical claim is that organized trading
practice (merchants and brokers meeting under a buttonwood tree, agreeing amongst themselves
to trade only with each other and fix commissions) *preceded* and *generated* the formal
rulebook — the rulebook is a later crystallization/codification of a spontaneous practice, not
a precondition for it the way IP is a precondition for the Internet's existence. If the
"template" only formalizes what already self-organized, the entry's argument that it counts as
templating that is "marginal to the system's characteristic structure" (level 3's language) —
codifying, not specifying — has real scale-text support. The entry's own phrase "codifies
rather than specifies the system's order" tracks the does_not_count line's genesis/present-
control distinction reasonably closely: the rulebook is arguably not the ORIGIN of order at
all, just an ex-post administrative record of it, which would put financial-markets' designed
component even further from "skeleton" status than the Internet's protocol stack.

### Case AGAINST the entry's score (i.e., for keeping/aligning to 2)

The historical-origin argument proves less than it claims. The scale asks about the origin of
the system's CURRENT characteristic order, not the origin of the sector 234 years ago. A modern
public securities market — the NYSE as actually scored, per its own scoping note ("the public
securities market... exemplified by the NYSE: trading agents..., the order flow they generate,
the listed instruments, and the matching/clearing mechanism plus its rule set") — operates
today inside an extremely heavy, continuously-enforced designed skeleton: SEC regulation,
Reg NMS, exchange rulebooks defining order types, circuit breakers, market-maker obligations,
clearing/settlement mechanics (T+1), listing requirements. This is arguably a MORE pervasive
and MORE actively load-bearing designed substrate than the Internet's protocol layer — BGP and
TCP/IP are comparatively thin and have not fundamentally changed in decades, whereas exchange
market structure is actively re-templated by regulators after nearly every crisis (Reg NMS
2005, circuit breaker redesign after 2010, T+1 in 2024). The entry's own robustness_resilience
justification says exactly this: "regulation, volatility regimes" are the SCARS the system
carries from perturbation — i.e., the entry elsewhere treats regulatory re-templating as a live,
continuously operating force, which cuts against calling the designed layer "marginal" for
self_organization purposes.

Moreover, the-internet's 2 is not about the mere fact of a founding design event vs. a founding
spontaneous event — it is about whether TODAY's characteristic order (topology, traffic
patterns for the Internet; price formation, liquidity provision, strategy ecology for markets)
lives INSIDE a designed formal envelope that constrains its possibility space. Both systems
qualify: the Internet's AS-level topology cannot arise except through BGP-conformant peering;
a market's price-formation dynamics cannot arise except through exchange-conformant order types
and matching-engine rules. In both cases, the *substrate* is designed and the *characteristic
phenomena* (price; topology/traffic) are the emergent part. That is structurally identical to
the-internet's own 2-justification sentence almost clause-for-clause: "the system's
characteristic structure... grew from thousands of uncoordinated local decisions... within" a
designed skeleton. Financial markets' price formation equally "grew from" (and continues to
grow from) millions of uncoordinated trading decisions within an exchange-rulebook skeleton.
On a strict parallel reading, financial-markets should land at 2, not above it.

The 1792 Buttonwood anecdote, while true, describes the origin of the INSTITUTION category
(organized securities trading as a practice), not the origin of the NYSE's *current*
characteristic order, which was substantially re-designed by federal securities law starting in
1933-34 (SEC creation), by NMS/electronic trading rules, and by post-flash-crash regulatory
re-engineering. If "genesis" is read at the founding-moment grain the entry uses for markets,
symmetry would require reading the Internet's genesis at its own founding grain too — and
ARPANET's design long preceded value-generating internetworking traffic, so the same logic
would, if anything, favor the Internet's spontaneous-order case being judged on 50+ years of
subsequent decentralized growth (which is exactly what its anchor already credits it for,
capping at 2 not 1).

### Verdict

**Lower to 2** — align financial-markets with the-internet's anchor rather than keep the
entry's 3, and do not amend the anchor file.

The entry's argument conflates two different "origin" questions: origin of the *institution as
a historical category* (self-organized in 1792) versus origin of the *system's current
characteristic order* (price formation constrained by a heavily, continuously, and actively
re-templated regulatory/rulebook skeleton — Reg NMS, circuit breakers, T+1, listing rules). The
scale's does_not_count clause anchors genesis to "what local process generates the order," and
the order the entry itself scores throughout the rest of the panel (price discovery,
information_processing=4; adaptive_capacity=4 citing "the institution itself rewrites rules in
response to crises") is generated within, and continuously reshaped by, a designed formal
envelope every bit as constraining as the Internet's protocol layer — arguably more so, given
the entry's own robustness_resilience justification credits "regulation" as a standing scar
mechanism. The Buttonwood anecdote is real and worth keeping in the justification prose as
color, but it describes the birth of organized trading as a practice, not a reason the modern,
heavily codified NYSE's characteristic phenomena sit predominantly outside its designed
skeleton. Structurally, financial-markets and the-internet are the same shape: designed
substrate, spontaneous characteristic macro-order (price; topology/traffic) on top — the
textbook level-2 case as written. The entry's own words ("the modern formalized rulebook is
designed, but it codifies rather than specifies the system's order") is actually a level-2
argument dressed as a level-3 conclusion: "codifies... the order" is exactly the "designed
skeleton with substantial spontaneous order living on top" language the scale uses for 2, not
the "templating is marginal" language it uses for 3. No amendment to the anchor scale is
needed — the scale's 2-vs-3 line is principled as written; the entry's own justification prose,
read literally, argues for 2 and should be re-scored to match. This should be corrected in the
entry (score 3 -> 2, drop the "scored 3 rather than the-internet's 2" framing, keep Buttonwood
as historical color establishing "predominantly spontaneous ORIGIN of the practice" while
still landing on the class-2 designed-skeleton-plus-spontaneous-order judgment) rather than
left as a standing boundary flag.

---

## 3. Cross-entry polar-pair coherence check

panel-spec.yaml's editorial framing (adaptive_capacity notes: "Sun: 0. NYSE: 4. Both
legitimate.") and the financial-markets entry's own summary ("The archetypal complex adaptive
system... opposite pole" from tropical-cyclones) explicitly set the two entries up as poles.
Checked each named pair:

| pair | TC | FM | anchor-scale support | verdict |
|---|---|---|---|---|
| adaptive_capacity | 0 | 4 | adaptive_capacity.yaml anchors both exactly at these values (stars/TC-style reasoning = 0; financial-markets anchor = 4, explicitly worded "at the opposite pole from tropical-cyclones' 0" IN THE ENTRY TEXT ITSELF, and the anchor file's own notes block frames the same 2x2). | OK — polarity holds and is anchor-grounded on both ends, not just asserted.
| information_processing | 0 | 4 | information_processing.yaml: stars anchor = 0 (TC entry borrows this reasoning explicitly); financial-markets anchor = 4 (Hayek aggregation). Both ends match worked anchors exactly (see §1 tables). | OK — full polarity, both ends are exact anchor matches, not analogical stretches.
| alphabet_closure | closed | constrained | panel-spec.yaml interaction_ontology note: "closed -> constrained -> open gradient is this catalog's nearest analogue to chemical valence." TC justification: "canonical closed-alphabet system," fixed by physics. FM justification: "fixed formal set... but the alphabet DOES change through governance (new order types added institutionally)... constrained thus sits genuinely between the hurricane's physics-closed alphabet and a society's open one." | OK — FM's justification explicitly triangulates against TC's closed pole and an implicit open pole (not in these two entries but named in the panel-spec note), correctly using TC as the reference floor. Internally coherent gradient positioning.
| openness (openness_dissipation) | 4 | 2 | openness_dissipation.yaml: TC anchor = 4 (Carnot heat engine, literal flux IS the mechanism). FM anchor = 2 (real throughput but infrastructure-support, not generative of price dynamics). Both match their anchors exactly per §1. | OK — polarity holds (4 vs 2, not literally 4 vs 0, but the task description's framing of "4 vs 2" matches the actual anchor-grounded scores, so this is not a contradiction — see note below.

**Note on the openness pair:** the task prompt frames this pair as "4 vs 2," which is
correct — this is NOT a 4-vs-0 polar opposite like the other three pairs, and that is
appropriate: financial markets are not thermodynamically closed (there IS genuine physical
throughput — data-center power), so a floor score of 0 would be wrong and is correctly not
what either the anchor or the entry claims. The "polarity" here is real but weaker (extreme
vs moderate, not extreme vs floor), which is itself the correct, non-contradicted reading of
the anchor scale — flagging this as **OK**, not a mismatch, but noting the asymmetry is real
and intentional, not an error to chase.

No pair is contradicted by justification text in either entry. All four holds check out
against the anchor scales directly (not merely against each other), which is the right
standard — polarity that only holds by mutual reference without anchor grounding would be
suspect; here, each end of each pair independently reproduces its own anchor's score and
reasoning (with alphabet_closure being categorical rather than anchor-scored, so it is
checked against the panel-spec note and the internal scale-gradient logic instead).

---

## 4. Filling-rules audit

### power-law-rigor (Corral 2010, cubic-law values)

- **tropical-cyclones extreme_event_statistics** (Corral et al. 2010, PDI tail exponent
  ~0.95-1.25): evidence_status: **measured**, confidence: **low**, verifier_flags:
  [snippet-only-primary-fetch-failed, no-CSN-grade-critique-located]. Note explicitly states:
  "Per filling_rules.power-law-rigor this stays confidence: low until the primary paper is
  read and its fitting methodology assessed against CSN-2009 standards." **OK** — this is
  correct handling: the rule requires CSN-2009-grade support OR an explicit
  "claimed-untested" label; the entry doesn't claim CSN-grade rigor, flags the gap honestly,
  and keeps evidence_status at measured (the paper's OWN fit, not the class's invention) while
  confidence is downgraded. This is the rule working as intended, not a violation — a stricter
  reading might ask why evidence_status isn't itself "measured-disputed" or paired with an
  explicit "claimed-untested" tag, but "measured + confidence:low + explicit verifier_flags +
  explanatory note" arguably satisfies the rule's spirit better than a blunter tag would.
  Judged **OK**, with a note that "claimed-untested" as a literal tag was available and not
  used — a defensible but not the only defensible choice.

- **financial-markets extreme_event_statistics** (Gopikrishnan 1998 / Gabaix 2003, cubic law
  alpha~3; volume ~1.5; trade-count ~3.4): evidence_status: **measured**, confidence:
  **medium**, verifier_flags: [csn-cross-check-unresolved, volume-and-tradecount-errorbars-
  snippet-only]. Note: "Whether CSN 2009 re-tested equity-return tails as a worked dataset was
  not confirmed this session... recorded as an open question, per filling_rules.power-law-
  rigor." **OK** — same pattern as TC: honest flag of unresolved CSN-grade status, not a
  silent claim of rigor. Correctly handled.

Both entries handle the rule identically and correctly: publish-with-flag rather than either
(a) silently asserting CSN-grade rigor that wasn't checked, or (b) omitting the value
entirely. **No violation in either entry.**

### soc-two-claims (criticality mechanism_status recorded separately)

- **tropical-cyclones criticality**: score 1, mechanism_status: **none**, explicitly separates
  the individual-storm criticality claim (none) from the Corral et al. class-level PDI
  power-law claim, which it explicitly redirects to extreme_event_statistics ("is a CLASS-level
  event-statistics claim recorded under extreme_event_statistics, not evidence the individual
  storm sits at a critical point — per filling_rules.soc-two-claims discipline"). **OK** —
  textbook-correct application; the entry actively cites the rule by name and applies it
  correctly to prevent event-statistics evidence leaking into a mechanism claim.

- **financial-markets criticality**: score 1, mechanism_status: **proposed-contested**,
  separates "heavy-tailed returns... recorded under extreme_event_statistics" from the SOC-
  mechanism claim ("compete unresolved with GARCH, multifractal, and herding frameworks").
  **OK on substance** — correctly separates the two claims per the rule. **Minor DRIFT on
  vocabulary**: as flagged in §1, panel-spec.yaml's criticality column definition specifies the
  mechanism_status vocabulary as `[none/proposed/contested/established]`, and the criticality
  anchor file's own worked anchors use single tokens implicitly (earthquake-fault-systems is
  described as "contested" in prose but doesn't set a literal mechanism_status field in the
  YAML at all — the anchor file predates the field). The financial-markets entry's compound
  `proposed-contested` is a reasonable hybrid but is not literally one of the four enumerated
  values. This is the one place in either entry where a structured field doesn't literally
  match its controlled vocabulary. **Recommend**: either add `proposed-contested` (and
  presumably `none-contested`, etc.) to the panel-spec enum explicitly, or have the entry pick
  the single closest token (`contested`) and move "proposed" into prose only. Flagged as
  **DRIFT (vocabulary/schema-conformance, not substance)**.

### no-market-chaos

financial-markets chaos_sensitivity = 1, evidence_status: **measured-disputed**, explicitly
states "nonlinear statistical dependence: yes (volatility clustering), low-dimensional
deterministic chaos: no accepted evidence." This is a verbatim application of the rule's exact
required phrasing pattern. **OK, exact compliance.**

### measurand-required

Checked every quantitative/hybrid signal-relative value in both entries:
- TC: extreme_event_statistics names measurand explicitly ("per-storm power dissipation index
  (PDI) across storms, per ocean basin"). temporal_correlation is left `unknown` specifically
  because "no established measurand chosen for the class" — this is the rule working
  correctly in the negative case (no-guessing wins over stretching a measurand). **OK.**
- FM: extreme_event_statistics names measurand ("normalized return distribution tails
  (per-stock and index, minutes-to-days timescales)"). temporal_correlation names measurand
  explicitly and unusually carefully ("autocorrelation functions of returns vs of absolute
  returns — the distinction is the datum"). **OK, exemplary compliance** — this is the
  strongest measurand-naming in either entry, correctly treating the returns-vs-|returns|
  distinction as itself the substantive finding rather than glossing over it.

No measurand-required violations found in either entry.

### atomicity-convention

- TC scoping_note: "Atomicity per filling_rules.atomicity-convention: moist air parcels at
  convection-resolving scale (order 1 km^3), aggregating first into convective cells." **OK**
  — correctly matches the rule's own worked example ("a hurricane's are air parcels, not
  molecules").
- FM scoping_note: "Atomicity per filling_rules.atomicity-convention: trading agents and
  orders — not neurons, not firms' internal org charts." **OK** — correctly matches the rule's
  own worked example ("a market's atoms are traders and orders, not neurons").

Both entries declare atomicity explicitly and both choices match the rule's own canonical
examples for these exact two systems (the rule was seemingly written with these two systems in
mind). **No violation, exact compliance both directions.**

### interaction-typing

- TC interaction_ontology: 4 types (momentum/pressure-gradient, latent-heat/moisture exchange,
  surface enthalpy flux, radiative exchange), individuated by mechanism/carrier, not
  sign/outcome. No pair looks like an outcome-based double-count (e.g., no separate "warming"
  vs "cooling" entries). alphabet_closure: closed, justified by physics-fixed alphabet. **OK.**
- FM interaction_ontology: 4 types (order flow submit/amend/cancel bundled as ONE type —
  correctly following the rule's own explicit worked example, "buy and sell orders are one
  type (order flow), not two" — trade execution, public information broadcast, rule-
  setting/listing agreements), individuated by mechanism/carrier. alphabet_closure:
  constrained. **OK** — this is a direct, correct application of the rule's own named example;
  submit/amend/cancel are correctly NOT split into three types the way a careless entry might
  split them by outcome.

Both type_count fields (4 and 4) are consistent with their respective lists' actual lengths.
**No violation in either entry; FM's order-flow bundling is a clean textbook application of
the rule's own worked example.**

### level-required

Every attribute in both files carries an explicit `level:` field (confirmed by direct grep —
29 occurrences in TC, 29 in FM, one per scored attribute). **No violation** — full mechanical
compliance. Substantive correctness of the level CHOICE (class-general vs exemplar) is
assessed separately in §5 below, since "present" and "correct" are different questions.

---

## 5. Level-tag correctness (class-general vs exemplar)

Checked every `level: exemplar(...)` tag in both entries for whether the underlying evidence
is genuinely exemplar-specific vs. actually a class-general claim mistagged, and vice versa
(class-general tags that smuggle in exemplar-only evidence).

### tropical-cyclones — one exemplar tag: robustness_resilience (exemplar(hurricane-katrina))

Correct, and required — robustness_resilience.yaml's does_not_count explicitly mandates
exemplar level as the DEFAULT for this column ("level: exemplar(<name>) is the default for this
column, per D14") specifically to prevent class-level persistence ("hurricanes keep forming")
from being miscounted as exemplar robustness. The entry does exactly this and explicitly
declines the class-level reading. **Correct tag, correctly justified.**

No other TC attribute smuggles exemplar-only evidence under a class-general tag: spot-checked
energy_rate_density (class-general, but method note honestly flags "mass denominator is a
project estimate" rather than presenting Katrina-specific numbers as class-general fact — the
underlying power figures ARE NOAA/AOML class-general FAQ figures, not Katrina-specific, so
class-general is the right tag), fractal_dimension_spatial (class-general, but explicitly notes
"a hurricane-specific published D was not located; this is the general tropical convective
cloud-field figure" — correctly NOT tagged as Katrina-exemplar since the value is a genuinely
class-general (if imperfectly sourced) tropical-convection figure, not measured on Katrina
specifically). **No mistagging found.**

### financial-markets — five exemplar tags: characteristic_timescales, numerosity,
energy_rate_density, decentralization, openness_dissipation, chaos_sensitivity (six, not five)

- **characteristic_timescales** (exemplar(nyse)): values are NYSE-specific (order-message
  processing rate implied by NYSE message volume; T+1 settlement effective for US markets
  specifically). **Correct** — genuinely exemplar-sourced, not class-general claims in
  disguise.
- **numerosity** (exemplar(nyse)): "~2.4e3 listed companies; ~1.5e9 shares... traded daily" —
  explicitly NYSE-specific counts, not a financial-markets-class-wide figure (which would need
  to aggregate across all global exchanges — explicitly flagged as unresolved in
  instance_population's own note). **Correct.**
- **energy_rate_density** (exemplar(nyse)): unknown, but scoped to "no citable NYSE-specific
  energy-draw figure exists" — correctly exemplar-scoped since the sweep was specifically
  about NYSE's Mahwah facility, not a class-wide claim. **Correct.**
- **decentralization** (exemplar(nyse)): justification is NYSE-specific ("a central institution
  operates the matching engine... can halt trading"). **Borderline but defensible**: the
  decentralization ANCHOR FILE itself tags this exact reasoning under "system: financial-
  markets, exemplar: New York Stock Exchange" without a class-general/exemplar distinction (the
  anchor file predates the level convention). Since every OTHER exchange also has a matching-
  engine operator with halt authority, this reasoning plausibly generalizes to the class, and
  arguably SHOULD be class-general like nonlinearity/feedback/adaptive_capacity are. Tagging it
  exemplar(nyse) is not wrong (NYSE is literally what's cited) but is inconsistent with how the
  entry treats structurally identical class-general reasoning elsewhere (nonlinearity=4,
  feedback=3, adaptive_capacity=4 are all class-general despite being justified via NYSE-
  specific facts like "circuit breakers post-1987" and "Flash Crash mechanics"). **Flagged as a
  minor internal inconsistency** — not a violation of any filling rule, but a commensurability
  wrinkle: the entry doesn't apply a consistent test for when NYSE-flavored justification text
  earns an exemplar tag vs. a class-general tag. decentralization, openness_dissipation, and
  chaos_sensitivity get exemplar(nyse); nonlinearity, feedback, information_processing,
  adaptive_capacity, emergence, self_organization, robustness_resilience, cascade_susceptibility
  — all justified with equally NYSE-specific facts — get class-general. See recommendation
  below.
- **openness_dissipation** (exemplar(nyse)): justification is explicitly about "the NYSE's own
  Mahwah, NJ data center" — genuinely exemplar-specific (a different exchange's power draw
  would differ), unlike decentralization's reasoning which is structural/generic to any
  central-matching-engine exchange. **Correct**, and a useful contrast case showing the
  distinction CAN be made consistently — this is why decentralization's tag looks like drift by
  comparison.
- **chaos_sensitivity** (exemplar(nyse)): justification cites the BDS-test/Scheinkman-LeBaron
  literature, which tested specific market return series (CRSP, DJIA) — arguably exemplar-
  flavored (specific datasets) but the no-market-chaos rule and its conclusion are stated as
  applying to "financial markets" as a class ("Financial markets specifically get 'nonlinear
  dependence: yes...'" — panel-spec's own filling_rules.no-market-chaos names the class, not
  NYSE). **Borderline, same pattern as decentralization** — could reasonably be class-general
  instead, since the rule itself is written at the class level.

**Verdict on level tags**: no outright VIOLATION (nothing is measured-on-an-exemplar-but-
falsely-claimed-as-class-general, which would be the serious direction of error). But
financial-markets shows a real, if minor, **inconsistency** in when exemplar-vs-class-general
is applied — decentralization and chaos_sensitivity are tagged exemplar(nyse) despite reasoning
that is generically class-level (any central-operator exchange; the class-level no-market-chaos
rule), while structurally similar NYSE-justified columns elsewhere (nonlinearity, feedback,
adaptive_capacity, information_processing) are correctly tagged class-general. This is a
borderline call, not a clear DRIFT, but worth flagging for the entry author: **recommend
re-tagging decentralization and chaos_sensitivity to class-general** to match the treatment of
every other NYSE-justified-but-class-level column in the same entry, OR conversely tightening
nonlinearity/feedback/adaptive_capacity/etc. to exemplar(nyse) if the orchestrator wants
maximal caution — but the current split-the-difference state is the one internally
inconsistent option.

---

## Summary of findings (for final report)

1. All 15 rubric/hybrid columns in both entries were checked against their anchor files.
   Every self-cited anchor ("per this class's own anchor") was verified to accurately
   reproduce both the score and the substance of the justification. No silent score drift
   found anywhere.
2. self_organization=3 (financial-markets) is a genuine, seriously-arguable boundary case;
   full adjudication above concludes the entry's own justification prose actually supports
   level 2 more than level 3, and recommends lowering to 2 rather than amending the anchor.
3. All four polar pairs hold and are independently anchor-grounded on both ends.
4. Filling rules: power-law-rigor, soc-two-claims (substance), no-market-chaos, measurand-
   required, atomicity-convention, and interaction-typing are all correctly applied in both
   entries. One minor vocabulary-conformance drift: financial-markets criticality.
   mechanism_status uses "proposed-contested," a compound value not literally in panel-spec's
   4-token enum (none/proposed/contested/established).
5. Level tags: no violations. One internal-consistency wrinkle in financial-markets: three
   NYSE-justified columns (decentralization, openness_dissipation, chaos_sensitivity) are
   tagged exemplar(nyse), but only openness_dissipation's underlying evidence is genuinely
   exemplar-specific; decentralization and chaos_sensitivity's reasoning is class-level and is
   inconsistent with how the entry tags equally NYSE-justified columns elsewhere
   (nonlinearity, feedback, adaptive_capacity, information_processing — all class-general).
