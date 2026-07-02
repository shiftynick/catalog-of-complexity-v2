# Plausibility check — global-economy

Date: 2026-07-02. Checker role: adversarial plausibility (arithmetic, unit,
order-of-magnitude, internal-consistency verifier). Entry status at check
time: draft. Files not edited (read-only check per task brief).

Reference documents read: `schema/panel-spec.yaml` (frozen v1.0), all 15
files in `schema/anchors/` (decentralization, modularity, openness_dissipation,
criticality, hierarchy_depth [does not exist as an anchor — quantitative
column, no dedicated anchor file], plus the other 13 read for context and
cross-entry comparison), `docs/schema.md`, `docs/roster.md`,
`research/v0.2-sweep/expansion/global-economy-sources.md` (the sweep report),
and `data/classes/financial-markets.yaml` + `data/classes/the-internet.yaml`
as the entry's own declared comparators.

---

## 1. Re-derived numbers

### 1.1 energy_rate_density / openness_dissipation power conversion
Entry states: "world primary energy consumption ~620 EJ/yr (2023)... 620
EJ/yr = 6.2e20 J/yr, an average continuous power draw of ~1.97e13 W" and
elsewhere (openness_dissipation) "~2e13 W."

Re-derivation: 620e18 J / (365.25*24*3600 s) = 620e18 / 3.15576e7 s =
1.9646...e13 W. **Matches** the stated 1.97e13 W (and the rounded ~2e13 W)
to 3 significant figures. Also checked the 607 EJ/yr (2022) figure:
607e18 / 3.15576e7 = 1.9235e13 W — internally consistent with the "slightly
below" framing implied by the entry. **PASS — no arithmetic error.**

### 1.2 U.S. business-entity total (numerosity / component_ontology)
Entry states: "5,541,918" firms with employees + "~15.4 million
'nonemployer' business entities" (per the sweep report, §3) = "~2.1e7" total
U.S. business entities.
Re-derivation: 5,541,918 + 15,400,000 = 20,941,918 ≈ 2.09e7 ≈ stated 2.1e7.
**PASS.**

### 1.3 Axtell (2001) Zipf/Pareto exponent relationship
Entry states: OLS log-log regression slope -2.059 (SE 0.054) -> Pareto tail
exponent alpha = 1.059 (employee-based); slope-to-alpha gap = 2.059 - 1.059
= 1.000, consistent with the standard convention gap between a
(rank-)size-frequency/density regression slope and the complementary-CDF
Pareto tail exponent (off-by-one, the same convention Axtell's own paper
uses and flags). Internally self-consistent arithmetic; the paper's own
convention is not independently re-verified against the original PDF in
this pass (that is the citation checker's job), but the entry's own two
numbers (slope, alpha) are mutually consistent under the stated relationship
and the receipts-based alpha (0.994) and slope are not given, so nothing to
cross-check there beyond internal plausibility (all reported alphas cluster
tightly around 1.0, consistent with the paper's "Zipf" framing). **PASS —
no arithmetic error detected in the reported figures' internal relationship.**

### 1.4 World GDP nominal growth (emergent_phenomena / sources)
$105.69T (2023) -> $111.3T (2024): re-derived YoY nominal growth = 5.31%.
Plausible order of magnitude for nominal world GDP growth (inflation + real
growth combined); not a red flag. Already correctly flagged snippet-level
in the entry and in provenance.flags — no additional action needed.

---

## 2. Timescale nesting check (characteristic_timescales)

Ordering check: transaction/price-adjustment (~1e0-1e5 s) < business cycle
(~1e8-1e9 s stated) < system lifetime (unknown, but implied to be larger
still, decades-to-millennia) — the ORDERING is sound and correctly nested;
no inversion.

**However, the business-cycle magnitude itself does not fully support its
own stated upper bound.** The entry lists three named business-cycle
periodizations to justify "~1e8-1e9 s": NBER-style cycles (~2-10 yr),
Kitchin inventory cycles (~3-5 yr), Juglar fixed-investment cycles (~7-11
yr). Re-derivation:
- 2 yr = 6.31e7 s
- 10 yr = 3.156e8 s
- 11 yr (longest cited, Juglar) = 3.471e8 s
- 1e9 s = 31.7 yr

None of the three cited periodizations reaches anywhere near 1e9 s (31.7
years) — the longest (Juglar, 11 yr) tops out at ~3.5e8 s, well short of an
order of magnitude higher at 1e9 s. The stated range "~1e8-1e9 s" therefore
overstates its own supporting evidence by roughly half an order of
magnitude at the top end; the range implied by the entry's own cited
figures is closer to ~6e7-3.5e8 s (i.e., essentially "~1e8 s," a single
order of magnitude, not a full decade span 1e8-1e9). This is a real,
checkable order-of-magnitude looseness, not a citation problem (the
sub-cycle lengths themselves are standard/uncontroversial) — a fix-level
finding.

---

## 3. hierarchy_depth vs. scoping_note / component_ontology (HIGH-RISK
COLUMN — the convention-audit column per the task brief)

This is the most significant finding of this check.

**The scoping_note (lines 57-78) explicitly and repeatedly declares
national economies as the entry's atomicity population** — i.e., the
lowest-level components at which the class's characteristic dynamics
operate (per filling_rules.atomicity-convention):

> "(b) National economies (~195) are declared the entry's
> component_ontology / atomicity population: the lowest level at which the
> class's OWN CHARACTERISTIC dynamics... actually operate, exactly as
> 'traders' are NYSE's atoms rather than the neurons of the humans
> involved... (c) Firms... are NOT the primary atomicity choice for this
> entry's characteristic dynamics — parallel to how the-internet tracks
> end-user devices as an adjacent population distinct from its AS-node
> structural atom."

This is an explicit, reasoned, and correct application of the convention
(directly and correctly parallel to how the-internet.yaml treats AS nodes,
not end-user devices, as its atom for structural columns — verified by
reading the-internet.yaml's own scoping_note and hierarchy_depth directly).

**But hierarchy_depth's own method text (lines 321-329) inverts this
declaration:**

> "firms (atoms, per the deeper population) -> national economies (1, this
> entry's declared atomicity level) -> regional trade blocs/currency areas
> (2) -> the integrated global system (3)."

This makes **firms** — the population the scoping_note explicitly and
twice states is "NOT the primary atomicity choice" — the level-0 atom for
the hierarchy count, and demotes **national economies** — the population
explicitly declared as the actual atom — to level 1. This is exactly the
double-counting/miscounting risk the task brief flagged: the entry uses
one atom definition (national economies) in its scoping_note and
component_ontology (where national economies, firms, and households are
listed as three parallel/sibling part-types, not nested levels — see
lines 179-204), and a *different* atom definition (firms) in
hierarchy_depth, without reconciling the two.

Compare directly against the-internet.yaml's own hierarchy_depth (verified
by reading it): "AS nodes (atoms) -> provider tiers (1) -> regional/
national peering fabrics and IXPs (2) -> the single global routed graph
(3)" — the-internet counts UP from its declared structural atom (AS nodes)
and explicitly does NOT insert end-user devices (its own deeper/adjacent
population, exactly analogous to global-economy's firms) as an extra
level below the atom. global-economy's hierarchy_depth breaks this
parallel it claims to be following.

**Effect on the final value:** the entry's hierarchy_depth is still
recorded as **3**, matching financial-markets' and the-internet's own
value. If the convention were applied consistently with the scoping_note
(national economies as level-0 atom, per the entry's own declared
resolution), the correct count under the SAME method the entry describes
would be: national economies (atoms, 0) -> regional trade blocs/currency
areas (1) -> the integrated global system (2) — i.e., **2**, not 3, unless
an additional intermediate level is identified. Alternatively, if firms
are to be included as an extra level below national economies (a
defензible choice, given firms are a real, deeper, characteristic-dynamics-
relevant population per numerosity/extreme_event_statistics), that
requires the scoping_note to be revised to say firms ARE part of the
atomicity/hierarchy count after all — which contradicts its current
explicit language. Either resolution is legitimate; what is not legitimate
is asserting both simultaneously across different columns of the same
entry. This is a genuine internal inconsistency, not a mere wording
quibble — hierarchy_depth is explicitly flagged by panel-spec.yaml as
"HIGH commensurability risk — the counting convention is what the
consistency checker audits hardest," and the atomicity-convention filling
rule requires that "each entry declares its atomicity choice in the
scoping note" and be internally auditable against it.

**Severity: fix.** The numeric value (3) may turn out to survive a
corrected recount (e.g., if a level is relabeled rather than removed), but
the current method text as written is not self-consistent with the
entry's own scoping_note, and must be corrected — either by changing the
method text to start counting from national economies (likely changing
the value to 2, absent an identified missing intermediate level), or by
formally revising the scoping_note's atomicity declaration to include
firms in the counted hierarchy (with corresponding edits to
component_ontology's parallel-list framing, which currently treats firms,
national economies, and households as three sibling part types rather
than nested levels).

---

## 4. component_ontology.itself_complex notation (minor, flagged as note)

`firms` part-type is tagged `itself_complex: out-of-scope(human) / firms`
(line 193). Panel-spec's controlled format is
`<catalog-entry-id> | out-of-scope(<what>) | no` — a single value, not a
slash-joined pair. This is ambiguous (is "firms" itself out-of-scope(human),
or is it a separate unresolved catalog-entry-id "firms," or both?) relative
to the single-value convention used everywhere else in this same entry
(e.g., `itself_complex: no` for national economies, `itself_complex:
out-of-scope(human)` for households) and in comparator entries
(financial-markets: `itself_complex: out-of-scope(human) / firms` — same
non-conformant pattern, so this is a pre-existing pattern copied from
financial-markets, not a new error, but still schema-non-conformant
notation). Not a plausibility/arithmetic error and does not by itself
change any score; recorded as a note since it borders on the
consistency-checker's remit more than this checker's arithmetic/unit remit.

---

## 5. evidence_status / confidence pairing check (filling_rules)

Spot-checked every attribute with `evidence_status: measured`,
`measured-disputed`, `measured-untested`, or `unknown` for whether they
carry the required supporting apparatus per panel-spec's column_kinds and
filling_rules:

- `numerosity` (measured-disputed): carries `sources: [axtell2001,
  un-membership]` — appropriate, matches the "published but statistically
  or mechanistically contested" definition (global firm count genuinely
  diverges 300-430M across aggregators). **PASS.**
- `instance_population` (measured, confidence high): n=1 for a genuine
  singleton is a definitional/epistemic fact rather than a measurement in
  the ordinary sense, but this exactly parallels the-internet.yaml's own
  treatment (verified) and is explicitly reasoned as such in the entry's
  note. **PASS, consistent with precedent.**
- `extreme_event_statistics` (measured-untested, exemplar(firms)): correctly
  applies filling_rules.power-law-rigor — Axtell's method is flagged
  explicitly as OLS, not CSN-2009-grade (no KS test, no alternative-
  distribution comparison reported), and the entry does NOT claim
  `measured` for this row despite Axtell's own confident "unambiguous"
  language. This is the single cleanest, most careful application of the
  power-law-rigor rule in the entry. **PASS — correctly conservative.**
- `chaos_sensitivity` (measured-disputed, score 1): correctly applies
  filling_rules.no-market-chaos ("nonlinear dependence: yes, deterministic
  chaos: no accepted evidence") and is explicitly verified (not merely
  inherited) via Brock & Sayers (1988), snippet-verified via multiple
  independent secondary summaries. Matches financial-markets' identical
  chaos_sensitivity structure and score. **PASS.**
- `criticality` (score 0, mechanism_status: none, evidence_status: unknown):
  checked directly against the criticality anchor file's scale text and
  boundary_clarifications (events-not-structure,
  events-of-the-scoped-system, mechanism-alone-caps-at-1). The entry
  correctly matches the anchor's floor case (0: "No scale-invariant event
  statistics reported or sought... no SOC or critical-point mechanism has
  been proposed") and correctly distinguishes itself from
  financial-markets' OWN criticality entry (scored 1, a different, narrower
  market-internal SOC claim, explicitly not double-counted here per the
  scoping note's exclusion of re-scoring contained children). **PASS —
  correctly scoped, no conflation with the contained financial-markets
  child.**
- `energy_rate_density` (unknown): checked the claimed "confirmed absence
  of any candidate denominator" framing against the actual candidate
  concept named (UNEP International Resource Panel "global material
  footprint") — the entry correctly identifies this as a FLOW
  (gigatonnes/yr) rather than a STOCK, and correctly declines to misuse a
  flow figure as a stand-in mass denominator for a stock-normalized
  Phi_m calculation. This is the right call: conflating a material FLOW
  with the MASS denominator Chaisson's Phi_m requires would itself have
  been a unit/conceptual error, and the entry avoids it. **PASS — the
  entry actively avoids a plausible-looking but wrong derivation here.**

No mismatched evidence_status/confidence combinations were found among the
scored/valued attributes (i.e., no attribute claims `measured` without a
source, and no attribute claims a power-law tail without either CSN-grade
support or the required `measured-untested` label).

---

## 6. Score-level plausibility vs. anchors (spot checks)

- `modularity` (2): compared directly against modularity.yaml's scale
  text and the financial-markets/cities anchors (both also 2). The
  entry's justification (regional trade blocs/currency areas with denser
  internal trade but heavy cross-bloc coupling via arbitrage/global supply
  chains) matches the scale's "moderate, identifiable modularity...
  substantial cross-module flow" description for level 2, not the stronger
  insulation required for 3. **Plausible, well-anchored.**
- `decentralization` (3): compared against decentralization.yaml's scale
  and the explicit "infrastructure-category guidance" (real-time steering
  vs. bookkeeping-only discriminator, added at the 2026-07-02 cross-entry
  audit). IMF/WTO/BIS/G20 are correctly characterized as
  surveillance/standard-setting/conditionality (bookkeeping-tier
  authority), not real-time dispatch — matching the-internet's own score-3
  reasoning (IANA/ICANN/IETF: naming/standards, not traffic steering).
  **Plausible, correctly applies the infrastructure-guidance
  discriminator.**
- `openness_dissipation` (3): matches cities' anchor level (3) with a
  correctly literal-physical-flux justification (no "economic
  disequilibrium" metaphor leakage, which the anchor's does_not_count
  section explicitly bans) and a real citable throughput figure
  (~1.97-2e13 W, re-derived correct in §1.1). Tagged evidence_status:
  measured, which is arguably MORE defensible than cities.yaml's own
  openness_dissipation (tagged qualitative despite also having a citable
  NYC energy figure) — noted as a cross-entry inconsistency in cities'
  favor of tightening, not a problem with this entry.
- `chaos_sensitivity` (1) / `nonlinearity` (3): internally consistent with
  each other — nonlinear dependence detected (BDS test, Brock & Sayers
  1988) but no accepted chaos evidence, exactly the no-market-chaos
  pattern; nonlinearity's own score (3, "most day-to-day activity is
  quasi-linear; nonlinearity load-bearing at turning points/crises") is a
  reasonable, non-contradictory pairing with a low chaos_sensitivity score
  (nonlinear dependence does not imply low-dimensional chaos — the entry
  correctly keeps these distinct, matching the panel-spec's own note that
  nonlinearity is "neither necessary nor sufficient" for chaos).

No score was found to be off by more than one point from what its own
cited evidence and stated anchor comparison would support.

---

## Summary of findings carried to structured output

1. **[fix] hierarchy_depth** — method text uses firms as the level-0 atom,
   directly contradicting the scoping_note's explicit, twice-stated
   declaration that national economies (not firms) are the atomicity
   population, and inconsistent with component_ontology's parallel
   (non-nested) listing of national economies/firms/households as three
   sibling part-types. The-internet.yaml's own hierarchy_depth (verified)
   correctly counts up from its declared atom without inserting its deeper
   adjacent population (end-user devices) as an extra level — global-
   economy's hierarchy_depth breaks the very parallel it claims to follow.
   Needs either a corrected level count starting from national economies,
   or an explicit, reasoned revision of the scoping_note's atomicity
   declaration to include firms in the hierarchy — not both framings left
   standing simultaneously.

2. **[fix] characteristic_timescales (business cycle row)** — stated range
   "~1e8-1e9 s" is not supported by its own three cited constituent
   periodizations (NBER ~2-10 yr, Kitchin ~3-5 yr, Juglar ~7-11 yr), all of
   which top out at ~3.5e8 s (11 years); 1e9 s = ~31.7 years, roughly 3x
   the longest cited cycle. The re-derivable range from the entry's own
   figures is ~6e7-3.5e8 s, not up to 1e9 s.

3. **[note] component_ontology.itself_complex notation** — `out-of-scope
   (human) / firms` is a slash-joined pair, not a single value per panel-
   spec's `<catalog-entry-id> | out-of-scope(<what>) | no` format. Inherited
   pattern from financial-markets.yaml (same non-conformant notation
   there), so not a new error introduced by this entry, but still worth
   recording for a future consistency pass across both entries.

No blocker-level findings (no fabricated values, no miscited figures, no
anchor contradictions in the rubric/hybrid scores themselves, no unit
errors in the power/energy conversion, no evidence_status/confidence
combinations that violate filling_rules). The entry is unusually careful
about the power-law-rigor and no-market-chaos rules specifically, and
correctly avoids several plausible-looking wrong derivations (flow-vs-stock
conflation for energy_rate_density's mass term; criticality double-counting
against financial-markets' own contained-child criticality entry).
