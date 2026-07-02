# Consistency check — world-wide-web

Role: consistency checker (commensurability enforcer). Date: 2026-07-02.
Target: `data/classes/world-wide-web.yaml` (status: draft).
References read in full: `schema/panel-spec.yaml`; all 15 files in
`schema/anchors/`; `docs/schema.md`; `docs/roster.md`;
`research/v0.2-sweep/expansion/world-wide-web-sources.md`; the full text of
`data/classes/the-internet.yaml` (the entry's own declared mirror/reciprocal
comparator, cited in nearly every justification block).

No edits made to the entry or any reference file, per instructions. This log
records the audit only.

---

## Method

For every rubric/hybrid column, the entry's score and justification were
checked against (a) the anchor scale text, (b) the nearest worked anchor(s),
and (c) the-internet.yaml's parallel column, since world-wide-web explicitly
frames itself as the-internet's mirror/reciprocal entry throughout. For every
quantitative/structured/categorical column, filling_rules
(power-law-rigor, soc-two-claims, no-market-chaos, measurand-required,
atomicity-convention, interaction-typing, level-required, no-guessing) and
`level` tagging were checked.

---

## Column-by-column findings

### category — categorical
`cultural-informational`. Matches roster.md's own placement of "the World
Wide Web" under Cultural & informational alongside languages/Wikipedia/social
networks. Consistent with the-internet's `infrastructure` category — the two
sibling entries deliberately sit in different category buckets, which is
itself informative (network substrate vs. content/graph layer) rather than
an inconsistency. No issue.

### spatial_extent — quantitative
`not-applicable`, with a note distinguishing this from financial-markets'
own not-applicable-spatial precedent. Reasonable and internally consistent
with the scoping_note's explicit exclusion of physical infrastructure.
No issue. **Note (not blocking):** the-internet.yaml records `spatial_extent:
4e7 m` (Earth-circumference order estimate) rather than not-applicable for
what is arguably an analogous "no true point location, but a global
footprint" case. This is defensible (the Internet DOES own physical cabling;
the Web's scoping note explicitly assigns all physical footprint to
the-internet), but the asymmetry (the-internet gets a numeric estimate,
world-wide-web gets not-applicable for what could be read as the same
underlying "no citable measurement" situation) is worth a one-line
cross-reference acknowledging the choice was deliberate, not an oversight.
Minor — does not rise above note.

### characteristic_timescales — quantitative
Four timescale rows, order-of-magnitude, mostly [unverified — model
knowledge]/qualitative, matching the-internet's own comparably-caveated rows
in kind. One structural observation: the "crawl-to-crawl graph growth" row
is labeled as effectively recording system lifetime rather than an
inter-crawl growth rate (both Newman crawls are ~1999-2000), and the entry
is honest about this substitution. Consistent with filling_rules.no-guessing
(page-load half-life left `unknown` rather than using the uncitable "~100
day" webpage-lifespan folklore figure). No issue.

### numerosity / component_ontology — quantitative / structured
`measured-disputed`, multi-typed, matching the-internet's own
`measured-disputed` treatment of its numerosity for the identical structural
reason (genuinely different measurands, not competing measurements of one
quantity). Atomicity convention (pages/hyperlinks as the single-layer atoms)
is clearly and repeatedly stated, and is correctly distinguished from
the-internet's dual-atomicity (AS-nodes vs. packets/flows) — this is the
entry's most load-bearing atomicity claim and it is well justified: the Web's
characteristic dynamics (linking, retrieval, ranking) genuinely do all
operate at the document/hyperlink-graph level, unlike the Internet's
topology-substrate/traffic-process split. No issue.

### instance_population — quantitative
`n = 1`, `measured`, `high` confidence, mirroring the-internet's identical
treatment verbatim in reasoning. Correct application of the D3/Phase-3
instance_population convention. No issue.

### energy_rate_density — quantitative
`unknown`, cross-referencing the-internet's own `unknown` verdict and
correctly noting the Web has no physical substrate distinct from the
Internet's. Consistent, no fabrication. No issue.

---

### interaction_topology — categorical
`network`. Matches the-internet's own value and the vocabulary in
panel-spec.yaml. No issue.

### interaction_ontology — structured
Four types (hyperlinking, HTTP retrieval, crawling/indexing, search-driven
navigation), `alphabet_closure: constrained`. Compare against
filling_rules.interaction-typing ("individuated by mechanism and carrier,
not by outcome"): **borderline finding.** "HTTP retrieval / navigation" and
"search-driven navigation" are arguably the same underlying carrier
(HTTP request-response) individuated by trigger/outcome (direct link-follow
vs. search-result-follow) rather than by mechanism — the interaction-typing
rule's own worked example ("buy and sell orders are one type... not two")
is precisely the kind of split this looks adjacent to. That said, the
justification is defensible: search-driven navigation genuinely inserts a
distinct participant (the search index) and a distinct causal channel (query
→ ranked results → follow) not present in direct hyperlink-following, so the
carrier is arguably different (index-mediated vs. direct link-mediated),
not merely a relabeled outcome. This is closer to the-internet's own
four-type list, where "packet forwarding" and "DNS resolution" are also
adjacent-but-distinct mechanisms with different participant sets — the same
granularity the-internet itself uses. **Verdict: plausible, not a violation,
but flagged as a fix-level item** because the justification paragraph does
not explicitly address the mechanism-vs-outcome distinction the way the
rule requires verifiers to check; a one-sentence addition stating why
search-driven navigation is a different *mechanism* (index-mediated
discovery), not just a different *outcome* of the same HTTP-retrieval
mechanism, would close this cleanly.

`type_count: 4` is internally consistent with the list length (4 items),
matching the-internet's, financial-markets', and others' convention of
type_count = list length.

### degree_distribution — quantitative
This is the entry's most heavily-worked column and the one most exposed to
commensurability risk (directed vs. undirected graphs, in- vs. out-degree,
three separate measurements). Checked point by point:

- **Newman 2003 Table II figures** (nd.edu: n=269,504, alpha=2.1/2.4;
  Altavista: n=203,549,046, alpha=2.1/2.7) are stated as reused from Phase 1
  primary-read, consistent with the-internet.yaml's own reuse of the same
  source and its own cross-confirmation methodology. The panel-spec.yaml
  note itself anchors "Internet AS-level alpha~2.5" against this same
  Newman-2003 baseline, so citing the WWW rows from the identical table is
  squarely inside the established evidentiary base for this source. No
  issue with the numbers as transcribed.
- **evidence_status: measured-untested** — correctly applied per
  filling_rules.power-law-rigor (pre-CSN methodology), matching
  the-internet's identical measured-untested/measured-disputed treatment of
  its own Newman-2003 alpha=2.5 claim. Correct.
- **Broido & Clauset (2019) non-transfer** — the entry explicitly declines
  to import the-internet's CAIDA-AS ~50/50 Weakest/Strong verdict onto WWW
  graphs, stating the paper does not name WWW/hyperlink graphs in the
  technological-networks passage already primary-read, and flags this as an
  unconfirmed gap rather than a negative finding. This is exactly the
  discipline filling_rules.no-guessing requires and is the single strongest
  piece of craft in this entry — a real temptation to inherit the sibling
  entry's finding by analogy was correctly resisted. No issue.
- **Barabási & Albert (1999) in-degree-only exponent** (gamma_www=2.1±0.1,
  N=325,729) — correctly flagged as measuring in-degree ONLY, correctly
  flagged as an unconfirmed-identity dataset relative to Newman's own
  "nd.edu domain" row despite the shared label. This is good practice:
  three measurements are kept as three, not silently merged into a
  consensus "~2.1" figure. No issue.
- **Directed-graph structural note**: entry explicitly warns "this graph is
  DIRECTED... must not be silently averaged or conflated" against
  the-internet's undirected AS-topology treatment. Correct and appropriately
  cautious — this is exactly the kind of measurand distinction
  filling_rules.measurand-required exists to enforce.

No blocking or fix-level issues found in degree_distribution; this column
sets a high bar for rigor discipline in the roster.

### modularity — hybrid
Score 2, justified "by analogy to the-internet's AS-graph placement"
(also 2). Checked against modularity.yaml's own the-internet anchor
(score 2, Q~0.3-0.5 unverified-model-knowledge, corroborated only by
Newman's clustering coefficient C^(2)=0.39, not a true Q). The world-wide-web
entry does the same move with its own nd.edu C^(2)=0.29 figure, explicitly
labeled as "loose corroborating context, not a modularity Q itself." This
is a faithful, non-inflationary replication of the-internet's own qualitative
placement pattern, correctly caveated as would-be-superseded by a real
published Q per the anchor's own hybrid-column instructions. No issue.

### hierarchy_depth — quantitative
Value 2 (pages → sites/domains → single global graph), explicitly scored
*shallower* than the-internet's 3-level convention (AS nodes → provider
tiers → regional fabrics → global graph), with a clear, specific reason: the
Web has no analogue to Tier-1/Tier-2/Tier-3 transit hierarchy. This is
exactly the kind of "level-counting convention... written out per entry"
docs/schema.md requires and is the single highest-commensurability-risk
column per panel-spec.yaml's own note. Checked against cities (4),
planetary-climate (4), financial-markets/languages/ocean-circulation (3
each), power-grids/stars (2 each, exemplar-level) — 2 is not an outlier
value, and the stated convention (hyperlinks as substrate/edges, not a
counted level — paralleling the-internet's own routers-as-sub-AS-substrate
and financial-markets' orders-as-substrate conventions) is applied
correctly and consistently with those precedents. No issue.

### fractal_dimension_spatial — quantitative
`not-applicable`, correctly distinguishing the (absent) claim here from
the-internet's real, sourced D_f=1.5 (Yook, Jeong & Barabási 2002) — that
figure is physical router-geography, explicitly out of this entry's scope
per its own scoping note. The entry additionally flags, honestly, that a
graph-theoretic (non-geographic) fractal dimension for the hyperlink
structure itself was not searched. No issue — correct not-applicable usage,
distinct from `unknown` (a search-was-conducted-and-failed state) and
correctly so, since geographic fractal dimension is definitionally
inapplicable here, not merely unfound.

### decentralization — rubric
Score 3, matching the-internet's own 3 exactly, and correctly applying the
decentralization anchor's own boundary-case instruction verbatim ("score the
layer where the system's characteristic behavior lives... not the
bookkeeping layer" — quoted almost exactly from decentralization.yaml's
notes). W3C/ICANN/search-engine coordination is correctly treated as
bookkeeping/discoverability rather than moment-to-moment link-graph control,
matching the anchor's the-internet reasoning (IANA/ICANN/IETF as
bookkeeping-only). This is a well-anchored score. No issue.

---

### nonlinearity — rubric
Score 1, explicitly placed *below* the-internet's 2 with a specific,
mechanistic reason (no analogue to TCP congestion-control's or BGP
route-flapping's documented nonlinear dynamics within the Web's own scoped
processes). Checked against nonlinearity.yaml's does_not_count clause
("do not double-count nonlinear-sounding vocabulary... as evidence here")
— the entry correctly declines to inflate the score on the strength of
preferential-attachment's rich-get-richer language, explicitly noting this
is a "STATISTICAL growth-model description," not evidence of nonlinear
dynamics in the interaction rule itself. This is precise, disciplined
scoring that correctly resists the anchor's own top trap (mistaking
network-growth-model vocabulary for governing-equation nonlinearity). No
issue — well below the anchor ceiling and correctly justified.

### feedback — rubric
Score 2, with two structured loops (preferential-attachment/rich-get-richer;
search-ranking feedback), both correctly stated as REINFORCING with the
required X→Y→X causal-loop structure and one-sentence mechanisms, satisfying
feedback.yaml's own binding requirement ("every anchor at score >=2 MUST
include the structured loop list"). The entry's `loops:` block does have
`sign` values as plain strings ("reinforcing") — matching the-internet's own
capitalization convention loosely (the-internet uses lowercase `sign:
balancing` / `sign: reinforcing (episodic)` too, so this is consistent
cross-entry, not a format violation). Score 2 (episodic/marginal loop
influence) is squarely consistent with the-internet's own 2 for a
structurally parallel reason (both cite their loops as mattering "at the
margins," not continuously). No issue.

### openness_dissipation — hybrid
Score 1, explicitly *lower* than the-internet's 2, with the stated reason
that this entry scopes physical flux entirely OUT of its boundary rather
than partially in (the Internet owns the substrate; the Web explicitly does
not, per its own scoping_note). Checked against openness_dissipation.yaml's
NYSE anchor (score 2: infrastructure-support flux, not the generative
mechanism) — the Web's score of 1 (even lower than NYSE/the-internet's
infrastructure-support 2) is justified by the additional step that this
entry's own boundary excludes the flux altogether, which is a stronger and
distinct claim from "flux exists but is secondary." This is a coherent,
non-arbitrary discrimination, not just a copy of an adjacent score. No
issue, though see the openness_dissipation cross-check note below under
memory_hysteresis regarding self-consistency of the "1 not 0" framing
(addressed there, not a defect here).

### chaos_sensitivity — hybrid
Score 0, explicitly placed at the floor and explicitly *below*
the-internet's 1, with the entry openly stating it declines to "inherit
the-internet's 1 by association with a different (transport-layer) system."
Checked against chaos_sensitivity.yaml's scale text — level 0 ("no evidence
of sensitive dependence... predictability limited only by measurement/data
availability, not by intrinsic trajectory divergence") is the correct
floor description for "confirmed literature gap, no candidate mechanism
identified." This is exactly right: the-internet earns its 1 specifically
because BGP route-flap storms and congestion-control oscillation are
sub-processes *within its own scoped dynamics* (routing/traffic), and the
world-wide-web entry correctly recognizes that no analogous
Web-internal sub-process was identified, rather than inheriting a nonzero
score by category-adjacency. This is disciplined score-floor honesty and a
correct application of chaos_sensitivity.yaml's requirement that any score
above 0 needs a specific candidate mechanism (even at level 1). No issue.

### criticality — hybrid
Score 0, `mechanism_status: none`. Checked against the criticality anchor's
`boundary_clarifications` (added 2026-07-02, the same date as this entry's
draft — meaning the drafter had access to the newest, most detailed version
of this anchor). Two clarifications are directly relevant:
- `events-not-structure`: entry correctly excludes the heavy-tailed
  degree_distribution from counting here, citing this exact rule and
  the-internet's identical treatment. Correct.
- `mechanism-alone-caps-at-1`: not directly triggered (no SOC mechanism
  proposal for Web-internal events was found at all, so there is nothing to
  cap), and the entry correctly reasons that the-internet's own 1 (built on
  "informal/claimed-untested heavy-tailedness of outage impact... discussed
  in engineering literature") has no Web-internal analogue, so 0 rather than
  1 is correct — again, no score inherited by category-adjacency alone. This
  matches the discipline shown on chaos_sensitivity above (both times the
  entry actively declines a free ride to the-internet's non-zero score).
  Correct application, `mechanism_status: none` is enum-conformant (matches
  cities/global-economy/languages/ocean-circulation/the-internet/
  tropical-cyclones usage of the same enum value). No issue.

### extreme_event_statistics — quantitative
`unknown`, with `measurand` field populated as required by
filling_rules.measurand-required (even for a null/unknown value, candidate
measurands are named: viral-content spread, link-rot timing, page-popularity
rank-size). The method note correctly identifies that a
page-popularity/rank-size distribution, if pursued, would be
`measurand_type: static-cross-sectional` (per panel-spec's own explicit
distinction) — this is a subtle but important discrimination the entry gets
right unprompted, matching panel-spec.yaml's exact framing of the
static-cross-sectional vs. temporal-event distinction. No issue.

### temporal_correlation — quantitative
`unknown`, explicitly declining to import the-internet's H~0.85-0.95
(Leland et al.) figure on grounds that it is a traffic/packet-layer
measurand belonging to the-internet's own dual-atomicity scope, not a
transferable Web-graph property. This is the third instance (after
chaos_sensitivity and criticality) of the entry correctly declining a score
that would have been easy to import from its sibling entry by association.
Consistent, disciplined non-transfer. No issue.

### tipping_transitions — hybrid
Score 0, matching the-internet's own 0, both correctly reasoned as
deliberate floor anchors per tipping_transitions.yaml's the-internet worked
anchor and its `alternative-stable-state-required` boundary clarification.
Consistent. No issue.

---

### memory_hysteresis — hybrid
Score 2, explicitly parallel to the-internet's own 2 (both cite structural
path-dependence in hub formation via preferential attachment / historical
linking order, without a measured hysteresis loop). This is a faithful,
correctly-scoped replication of the-internet anchor's own reasoning pattern.
Checked against memory_hysteresis.yaml's scale: level 2 ("demonstrable
path-dependence over an intermediate timescale... no published bistability
or hysteresis-loop measurement") is the correct band, and the entry
correctly distinguishes this from languages' 4 (permanent lexical fossils)
by noting link-rot means individual structural traces DO decay — a real,
non-trivial distinction properly drawn. No issue.

**Cross-check for self-consistency (fix-level):** the entry's feedback
column names "preferential attachment / rich-get-richer linking" as the
generative mechanism behind BOTH the degree_distribution heavy tail AND (via
memory_hysteresis) the hub-structure path-dependence. This is internally
consistent — the same named mechanism is correctly reused across the two
columns rather than invented twice — but the memory_hysteresis
justification does not cross-reference the feedback column by name (it
says "compounds historical linking advantage," which is the mechanism, but
does not explicitly say "see feedback"). This is a stylistic/traceability
nit, not a substantive error; noted, not blocking.

### information_processing — rubric
Score 3, matching the-internet's own 3 and explicitly invoking the same
information_processing anchor cross-reference note ("engineered systems...
for the same SCADA/protocol reasons as ERCOT"). Checked against the
anchor's does_not_count block (mere signal propagation does not count; a
firehose is not a processor) — HITS/PageRank genuinely detect
link-topology patterns and condition downstream ranking on a *constructed*
state (authority score), which clears the does_not_count bar exactly the
way the anchor's own text requires ("downstream behavior is demonstrably
conditioned on this constructed state rather than raw input magnitude").
The 3-not-4 discrimination (aggregating PUBLIC link-topology vs. NYSE's
DISPERSED PRIVATE information) is a correct, sharp application of the
emergence/information_processing 3-vs-4 boundary used elsewhere in the
panel (financial-markets' price-discovery anchor uses the identical
public/private distinction). No issue — this is one of the cleaner scores
in the entry.

---

### adaptive_capacity — rubric
Score 2, matching the-internet's own 2, both scored "with
[operators/authors] inside the boundary" per the adaptive_capacity anchor's
own does_not_count clause ("Exogenous redesign... counts only if the
entry's scoping note includes those humans as system components — the score
is boundary-sensitive, and the justification must say which boundary was
used"). **Checked carefully here because this is the sharpest potential
inconsistency risk in the entry:** the entry's own scoping_note explicitly
marks page authors as `out-of-scope(human)` "as dynamical atoms," while the
adaptive_capacity justification scores authors' link-creation ACTIONS
in-boundary, citing "the same convention power-grids uses for its
operators." This is *not* a contradiction — component_ontology's
out-of-scope(human) marking is about which entities count as the graph's
dynamical ATOMS (nodes/edges), while adaptive_capacity is explicitly
boundary-sensitive at the level of *behavior* (actions), a distinction the
panel-spec's own component_ontology note draws for exactly this reason
("living components... marked out-of-scope(human) rather than linked").
The entry's own text anticipates and defuses this by saying so directly
("out-of-scope(human) as dynamical atoms but their link-creation ACTIONS
are the events this column scores"). This is a correct and careful
application of the boundary-sensitivity rule, matching power-grids' own
precedent exactly as claimed. No issue.

### variation_selection — categorical
`present`, correctly justified with SEO-strategy variation/selection and
retention-via-imitation-and-standardization, paralleling the-internet's own
`present` verdict for protocol/routing-policy variation-selection. No
issue.

---

### emergence — rubric
Score 2, matching the-internet's own 2 almost verbatim in reasoning (real
macro-pattern with dedicated vocabulary — hub/authority, heavy-tailed
degree distribution — but no single load-bearing order-parameter theory
the field organizes around, unlike price formation). Checked against
emergence.yaml's `effective-theory-quality-gates-3` boundary clarification
(added 2026-07-02, same date, so again the newest anchor version was
available to the drafter): the 2/3 boundary requires a load-bearing
order-parameter theory with independently-measured parameters or real
predictive skill to clear 3. HITS/PageRank are real algorithms but are
tools applied to specific snapshots, not a formalized macro effective
theory of graph evolution the way potential-intensity theory is for
hurricanes (scored 3) — the entry's own text draws exactly this
distinction ("web/network science reasons at the level of specific
algorithms... rather than via a formalized macro effective theory"). This
is a correct, anchor-consistent placement. No issue.

### self_organization — rubric
Score 3, placed explicitly *one step above* the-internet's own 2, with a
specific, well-reasoned mechanism: the Web's link-formation process has
*even less* institutional templating than the Internet's Tier-1/Tier-2
peering-economics-governed topology formation (no analogue to BGP peering
agreements or exchange rulebooks governing where links form). Checked
against self_organization.yaml's scale: level 3 ("predominantly spontaneous
order; external templating present but marginal") vs. level 2 ("designed
skeleton with substantial spontaneous order... on top of it") — the
distinction drawn (protocol/HTML substrate is designed, but WHERE links
form has essentially zero design, vs. the Internet's peering/transit
skeleton which DOES partly template WHERE AS-level topology forms) is a
genuine, defensible discrimination, not an arbitrary "one step up for
flavor" score. The entry also correctly notes the resulting tension/
non-tension with decentralization (both 3 here, vs. the-internet's
2-vs-3 self_organization/decentralization split) is explicitly
acknowledged rather than silently left implicit, matching the anchor's own
instruction to treat such (dis)agreements as real signal. This is a
well-argued, anchor-literate score — one of the strongest justifications in
the entry. No issue.

### robustness_resilience — rubric
Score 3, matching the-internet's own 3 and applying the anchor's
normalization rule correctly (known destructive event classes — 
catastrophic CDN/hosting-infrastructure loss, or DNS/naming-layer collapse
— that would test recovery beyond the demonstrated envelope, same
reasoning the-internet and financial-markets both use). Consistent,
correctly normalized to the system's own perturbation spectrum rather than
absolute magnitude, per the anchor's explicit normalization warning. No
issue. Minor observation: the justification names "the DNS/naming layer
this entry's boundary excludes but depends on" as a residual risk — this is
a good, honest cross-boundary acknowledgment and does not create a
scoping contradiction (the scoping_note already treats DNS/naming as part
of the-internet's territory).

### cascade_susceptibility — hybrid
Score 1, matching the-internet's own 1 "exactly," both citing plausible-
but-undocumented link-rot/outage propagation with no dedicated cascade-size
study. Checked against cascade_susceptibility.yaml's scale — level 1
("plausible or informally discussed... no dedicated empirical or
model-based study") is the correct band for the stated evidence (informal
web-archiving/digital-preservation discussion, no fitted distribution).
Consistent with the-internet's parallel score and reasoning. No issue.

---

## Filling-rules audit (binding rules, checked globally)

- **no-guessing**: repeatedly and correctly honored — `unknown` used for
  page-load half-life, extreme_event_statistics, temporal_correlation,
  and (implicitly) for the Broido & Clauset WWW-classification question,
  each with an explicit statement that a gap was found rather than a value
  guessed around. No violations found.
- **power-law-rigor**: degree_distribution correctly carries
  `evidence_status: measured-untested` for all three exponent claims,
  matching the CSN-2009-grade non-testing status of the underlying sources.
  No violations.
- **soc-two-claims**: criticality correctly separates event-statistics
  status (none located) from mechanism status (`none`) as two distinct,
  non-averaged sub-claims. No violations.
- **no-market-chaos**: not directly applicable (this entry is not a
  market), but the analogous discipline (not inheriting a neighboring
  entry's score by association) is applied correctly at chaos_sensitivity,
  criticality, and temporal_correlation, as noted above.
- **measurand-required**: consistently satisfied — degree_distribution,
  extreme_event_statistics, and fractal_dimension_spatial all name their
  measurand explicitly and distinguish it from adjacent/similarly-named
  measurands in the-internet.yaml (packet-layer vs. graph-layer,
  geographic vs. graph-theoretic fractal dimension). This is a genuine
  strength of the entry — measurand hygiene is better here than in several
  already-verified entries.
- **level-required**: every attribute reviewed carries `level:
  class-general`, consistent with the entry's singleton-class framing and
  with instance_population's own governance of what class-level claims are
  legal. No violations found; no exemplar-level values are used, which is
  correct given the entry has exactly one exemplar that IS the whole class
  (matching the-internet's identical convention, and matching
  docs/schema.md's note that "singleton classes... are legal: one exemplar
  that is the whole class").
- **atomicity-convention**: pages/hyperlinks declared as the single-layer
  atomicity choice in the scoping_note, correctly and repeatedly
  contrasted with the-internet's dual atomicity. This is the entry's
  central, load-bearing scoping claim and it is well-executed and
  consistently applied across component_ontology, degree_distribution, and
  hierarchy_depth. No violations.
- **interaction-typing**: see the interaction_ontology finding above (the
  HTTP-retrieval / search-driven-navigation split) — the one place this
  rule's application is arguable rather than clearly correct. Flagged as
  fix-level, not blocker.

---

## Cross-entry coherence summary (vs. the-internet.yaml specifically)

The entry is explicitly authored as the-internet's mirror/reciprocal, and
the audit confirms this framing holds up under scrutiny rather than being
asserted and left unchecked:

| column | world-wide-web | the-internet | relationship stated | verdict |
|---|---|---|---|---|
| decentralization | 3 | 3 | same, same reasoning (bookkeeping-only coordination) | consistent |
| self_organization | 3 | 2 | +1, specific mechanism (less templating on link-formation) | consistent, well-argued |
| hierarchy_depth | 2 | 3 | -1, specific mechanism (no transit-tier analogue) | consistent, well-argued |
| nonlinearity | 1 | 2 | -1, specific mechanism (no congestion/BGP analogue) | consistent |
| chaos_sensitivity | 0 | 1 | -1, explicitly declines inheritance | consistent, disciplined |
| criticality | 0 | 1 | -1, explicitly declines inheritance | consistent, disciplined |
| openness_dissipation | 1 | 2 | -1, boundary excludes flux entirely | consistent |
| modularity | 2 | 2 | same, same reasoning pattern | consistent |
| memory_hysteresis | 2 | 2 | same, same reasoning pattern | consistent |
| information_processing | 3 | 3 | same, same anchor cross-reference | consistent |
| adaptive_capacity | 2 | 2 | same, same boundary convention | consistent |
| emergence | 2 | 2 | same, same reasoning pattern | consistent |
| robustness_resilience | 3 | 3 | same, same normalization | consistent |
| cascade_susceptibility | 1 | 1 | same, same reasoning | consistent |
| tipping_transitions | 0 | 0 | same, same anchor | consistent |
| feedback | 2 | 2 | same band, distinct named loops | consistent |
| temporal_correlation | unknown | measured (H~0.9) | explicitly non-transferable, correctly declined | consistent |
| degree_distribution | measured-untested, directed, 3 sources | measured-disputed, undirected, 2 sources | correctly kept distinct (directed vs. undirected) | consistent |

Every divergence from the-internet's score carries a specific, mechanistic
justification rather than an unexplained delta, and every place the entry
could have taken a "free" score by analogy (chaos_sensitivity, criticality,
temporal_correlation) it explicitly declined to do so and argued for the
independently-correct floor value instead. This is the opposite of the
failure mode consistency checks are designed to catch (uncritical
copy-paste from a sibling entry) and is the entry's strongest overall
property.

---

## Summary of severity-tagged findings

Only one fix-level finding and one note surfaced from a genuinely thorough
column-by-column and cross-entry pass; the entry is unusually disciplined
about anchor fidelity and about not inheriting scores from its sibling
entry by association. See structured findings for exact locations and
suggested remedies.
