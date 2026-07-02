# Plausibility Check — Class Entry "languages"

**Checker role:** adversarial re-derivation of every derivable number; unit-conversion
audit; timescale-nesting audit; hierarchy_depth-vs-component_ontology double-counting
audit; evidence_status/confidence combination audit against panel-spec.
**Target:** N:\coc\data\classes\languages.yaml
**References used:** schema/panel-spec.yaml, schema/anchors/*.yaml (15 files, all read:
modularity, decentralization, nonlinearity, memory_hysteresis, information_processing,
adaptive_capacity, emergence, self_organization, robustness_resilience,
openness_dissipation, chaos_sensitivity, cascade_susceptibility, feedback,
tipping_transitions, criticality), docs/schema.md, docs/roster.md,
research/phase4/languages-sources.md, research/phase1/quantitative-backbone.md
(cross-check for Newman 2003 / CSN 2009 backbone figures).
**Method:** independent re-derivation (PowerShell arithmetic) of every quantity
presented as summed/converted/derived; manual audit of every rubric/hybrid score
against its cited anchor file (10 of 15 columns have a worked "languages" anchor;
5 do not and are scored directly against scale text with named comparators — verified
those comparator scores against the actual anchor files); manual audit of
hierarchy_depth's counting convention against component_ontology's part list; manual
audit of evidence_status assignments against filling_rules (no-guessing,
power-law-rigor, measurand-required, level-required); internal cross-reference audit
(do "see X" pointers actually land on the claimed content).

---

## 1. Arithmetic re-derivations

### 1a. English speaker total (numerosity / instance_population): 450M L1 + 1,090M L2
Independent sum: 450,000,000 + 1,090,000,000 = 1,540,000,000 = 1.54e9.
Entry states "~1.53e9." Within rounding tolerance (entry itself flags the L1/L2 split
as unstable across snippets, total as the more robust figure — appropriately hedged).
Alternate snippet split (380M L1 / 1,135M L2) sums to 1.515e9, also ~1.5e9. **CONFIRMED
plausible, consistent hedging already present in the note.**

### 1b. Generational timescale unit conversion: "~25 years (~1e9 s)"
Independent conversion: 25 yr x 365.25 x 24 x 3600 s/yr = 7.889e8 s = 0.79e9 s.
Entry's "~1e9 s" is the correct order of magnitude (0.79e9 rounds to order 1e9, not
1e8) — **CONFIRMED**, order-of-magnitude framing is honest, not inflated.

### 1c. Word co-occurrence network mean degree cross-check
n=460,902, m=17,000,000 (British National Corpus, undirected). Independent calc:
mean degree z = 2m/n = 2 x 17,000,000 / 460,902 = 73.77. Newman (2003) Table II
reports z=70.13 for this exact row (verified against research/phase1/quantitative-
backbone.md line 223, itself primary-read Phase 1). The ~5% discrepancy between an
outsider's naive 2m/n and Newman's reported z is expected for a real network Newman
himself computed (his n/m figures are likely rounded/thresholded slightly differently
than a naive 2m/n reconstruction) — **not a contradiction in the entry**, which does
not itself state a mean-degree figure; flagged here only as a sanity check, no fix
needed. n=460,902, m=17e6, alpha=2.7, C=0.44 all match the Phase-1 primary-read
Newman 2003 Table II value verbatim. **CONFIRMED.**

### 1d. Zipf/CSN figures (extreme_event_statistics)
alpha=1.95(2), p=0.49, n=18,855, x_min-hat=7+/-2, Moby Dick, "only 'good' dataset of
24." Cross-checked verbatim against research/phase1/quantitative-backbone.md line 89
(Phase-1 primary-read CSN 2009 table extraction): "Frequency of word use (Moby Dick) |
18,855 | 7±2 | 1.95(2) | 0.49 | GOOD." **Exact match, CONFIRMED**, correctly the
strongest power-law claim in the catalog and correctly the one case where
evidence_status: measured (not measured-untested) is used, per filling_rules.power-
law-rigor.

### 1e. Coupe et al. (2019) speech rate range
Entry: "~39.15 bits/s (SD 5.10), per-language range roughly 34-44 bits/s."
Independent recompute: 39.15 - 5.10 = 34.05; 39.15 + 5.10 = 44.25. Rounds to
"34-44," matching the stated range exactly. **CONFIRMED.**

### 1f. OED entry count vs order-of-magnitude claim
520,779 entries; entry states "order 1e5-1e6." floor(log10(520779)) = 5, i.e. the
value sits in [1e5, 1e6). **CONFIRMED**, correct order-of-magnitude framing.
Cross-check against 1989 print 2nd ed. (291,500 entries): ratio 520,779/291,500 =
1.79x growth over ~35 years — plausible for a continuously-revised online dictionary
(OED3 revision has been ongoing since the 1990s). Not a red flag.

### 1g. Word-network node count order of magnitude
460,902 nodes; entry states "order 1e5." floor(log10(460902)) = 5. **CONFIRMED.**

### 1h. Endangerment/extinction-rate sanity
7,164 living languages (Ethnologue 27th ed.) x 44%/46% (modern re-estimate cited only
in the sources sweep, not in the entry body — see Finding 1 below) = 3,152 / 3,295
languages. Krauss's 90% x ~6,000 (1992 baseline population) = 5,400. Both are
internally coherent arithmetic; no fabricated multiplication found. "1 language every
two weeks" folk figure = 52/2 = 26/yr, correctly described as roughly an order of
magnitude faster than the ELCat 3.5/yr figure (26/3.5 = 7.4x, "roughly an order of
magnitude" is a fair characterization though closer to 0.87 orders of magnitude than a
full 1.0 — acceptable qualitative framing, not a numeric claim). **CONFIRMED, no
arithmetic errors.**

### 1i. Timescale nesting (monotonicity check)
fastest constituent process (spoken info rate, sub-second per syllable, implied ~1e-1 s
scale) << dominant dynamics (intergenerational transmission, ~25 yr ~ 7.9e8 s) <<
system lifetime (language lineage persistence, 1e3-1e4 yr ~ 3.2e10-3.2e11 s).
Strictly monotonic increasing, **no nesting violation**. English's own lineage figure
(~1,500 years, cited within the system-lifetime bullet) falls inside the stated
1e3-1e4-year order-of-magnitude band (1500 is between 1000 and 10000). **CONFIRMED**
internally consistent, and the (explicitly unused, flagged-unverified) Indo-European
~8,120 BP figure would also fall inside that band had it been used, so the class-
general order-of-magnitude claim is not contradicted by the parked figure either.

### 1j. Energy_rate_density comparator band
Entry cites Chaisson's generic "society"/"technologists" band as "~2e4-2e6 erg/s/g."
Cross-checked against research/phase1/quantitative-backbone.md (line 61: "United
States... Phi_m ~ 2x10^6 erg/s/g, matches 'technologists' row"; line 24: "Human
society... 500,000"; summary table line 271: "human 'technologists': 2x10^6"). The
lower bound (2e4, "agriculturists") is also attested in the backbone note (line 71:
"human society values (agriculturists->technologists, 2x10^4 to 2x10^6 erg/s/g)").
**CONFIRMED**, the band the entry cites and explicitly declines to substitute in is
accurately transcribed from Phase 1's verified Chaisson extraction.

---

## 2. Unit / measurand audit

### 2a. characteristic_timescales unit-convention deviation (FINDING, fix-severity)
panel-spec.yaml declares `characteristic_timescales` with `unit: s`. Every other
sampled entry (planetary-climate, river-networks, earthquake-fault-systems) expresses
its "fastest constituent process" as an actual duration in seconds (e.g. planetary-
climate: "~1 day (~1e5 s)"; river-networks: "~2 days to ~30 days"). The languages
entry instead reports the fastest-process row as a **rate** ("~39.15 bits/s"), not a
duration, with no reciprocal/duration figure given (e.g., a syllable duration in
seconds, which the underlying Coupe et al. data would support: syllable rate was
separately measured). This is a real unit-shape deviation from the column's declared
unit and from sibling entries' practice, though the substance (measurand named,
sourced, evidence_status correctly assigned) is otherwise sound. Not a numeric error,
but a schema-conformance gap a verifier should flag before promotion.

### 2b. measurand-required rule compliance
All four quantitative/signal-relative values (characteristic_timescales fastest-
process row, degree_distribution, extreme_event_statistics, temporal_correlation) name
their measurand explicitly, satisfying filling_rules.measurand-required. **PASS.**

### 2c. level-required rule compliance
Every attribute carries an explicit `level` field (class-general or
exemplar(english)). Spot-checked all 30 attribute blocks — **PASS**, no missing level
tags found.

---

## 3. hierarchy_depth vs component_ontology double-counting audit

`component_ontology` declares two atomic/replicator-side part types: (a) speakers
(agents, out-of-scope(human)) and (b) lexical/grammatical units (replicators —
phonemes, morphemes, words, constructions) as the atoms.

`hierarchy_depth` (value=3) declares the convention: phonemes/morphemes (atoms, NOT
separately numbered) -> words/lexical items (1) -> phrases/constructions (2) ->
utterances/discourse (3), and explicitly states "speakers... are not counted in this
replicator-side hierarchy... the two atomic types are not stacked into one hierarchy."

Checked for double-counting: phonemes/morphemes are the declared atomic floor (level
0, implicit, not itself one of the 3 counted levels) and are not re-counted as level 1
— level 1 is words, a distinct higher tier built from the atoms. This matches the
same "atoms are the uncounted floor" convention used in other checked entries (stars:
value 3; earthquake-fault-systems: value 3; power-grids: value 3 — all reasonable
depth values for this catalog, no outlier). **No double-counting found. CONFIRMED
correct application of the convention, and correctly flags that the dual-ontology's
second atomic type (speakers) is deliberately excluded from this hierarchy rather than
silently stacked in** — this is exactly the discipline the panel-spec's atomicity-
convention rule requires for a dual-ontology entry.

---

## 4. Rubric/hybrid score audit against anchors

10 of 15 rubric/hybrid columns have a worked "languages"/"English" anchor in
schema/anchors/*.yaml. All 10 were checked for verbatim score and justification-
substance match:

| column | anchor score | entry score | match |
|---|---|---|---|
| modularity | 1 | 1 | MATCH (justification also matches almost verbatim) |
| decentralization | 4 | 4 | MATCH |
| nonlinearity | 1 | 1 | MATCH |
| memory_hysteresis | 4 | 4 | MATCH |
| information_processing | 4 | 4 | MATCH |
| adaptive_capacity | 3 | 3 | MATCH |
| emergence | 3 | 3 | MATCH |
| self_organization | 4 | 4 | MATCH |
| robustness_resilience | 4 | 4 | MATCH |
| openness_dissipation | 1 | 1 | MATCH |

**All 10 anchored scores reproduce exactly.** No drift between the anchor file (which
the orchestrator vetted in Phase 1b) and the entry as drafted.

The remaining 5 columns (feedback, chaos_sensitivity, criticality, tipping_transitions,
cascade_susceptibility) have no worked "languages" anchor, as the entry itself
correctly discloses in provenance.flags. Each cites a named comparator class instead;
verified every comparator score against the actual anchor file:

- feedback: entry cites financial-markets (3) and tropical-cyclones (4) as comparators
  for a languages score of 2. Anchor file confirms financial-markets=3,
  tropical-cyclones=4. Entry's score of 2 sits below both, consistent with its stated
  reasoning ("loop structure operates at the population/change level, not... the
  system's modal behavior"), and the entry supplies the required structured loop list
  (2 loops, signed, mechanistic) per feedback.yaml's binding format rule for scores
  >=2. **PASS.**
- chaos_sensitivity: entry cites financial-markets (1, "no-market-chaos" binding rule)
  as nearest comparator, scores languages at 0. Anchor file confirms financial-markets
  = 1 under the binding no-market-chaos rule. Scoring languages at 0 (below the
  markets floor) is defensible given the entry's stated absence of even the weaker
  "nonlinear dependence without chaos" finding for language. **PASS.**
- criticality: entry cites financial-markets (1) as comparator, scores languages at 1.
  Anchor file confirms financial-markets=1. The entry correctly applies the anchor
  set's "static scale-free structure != event statistics" exclusion (matching the
  river-networks=0 anchor's identical reasoning for Horton's laws vs. event
  statistics) to correctly exclude Zipf's law from counting as a criticality claim.
  **PASS**, correct application of the does_not_count rule.
- tipping_transitions: entry cites financial-markets (2) as comparator, scores
  languages at 2. Anchor file confirms financial-markets=2. **PASS**, matching
  reasoning shape (single well-developed mechanism-class, not a systematic
  Armstrong-McKay-style inventory).
- cascade_susceptibility: entry cites the-internet (1) and river-networks (1) as
  comparators, scores languages at 1. Anchor file confirms the-internet=1 and
  river-networks=1. **PASS.**

All five unanchored scores are correctly placed relative to their cited comparators
and correctly flagged in provenance as carrying higher uncertainty than the 10
anchor-backed columns.

---

## 5. evidence_status / confidence combination audit

Checked every evidence_status against filling_rules and the "measured requires a
source, derived requires a method, power-law tails without CSN-grade support default
to measured-untested" panel-spec convention:

- degree_distribution (alpha=2.7/gamma=1.5, word co-occurrence network):
  evidence_status: measured-untested. **CORRECT** — Newman 2003 and Ferrer i Cancho &
  Sole 2001 both pre-date CSN (2009) and use log-log regression, not MLE+KS. This is
  exactly the case filling_rules.power-law-rigor exists to catch, and the entry
  applies it correctly (explicitly contrasted against extreme_event_statistics in its
  own note, correctly not conflating the two).
- extreme_event_statistics (alpha=1.95, Zipf): evidence_status: measured, confidence:
  high. **CORRECT** — full CSN-2009-grade MLE+KS+alternative-distribution protocol was
  applied and rated "good," the one case in the entire CSN study meeting this bar.
- energy_rate_density: value unknown, evidence_status: unknown. **CORRECT** — no
  method exists, nothing guessed, matches filling_rules.no-guessing exactly; the entry
  goes further and explains why a derivation is conceptually (not just evidentially)
  contested, which is good practice, not required but not wrong.
- All rubric/qualitative-only columns (nonlinearity, feedback loops structurally
  aside, modularity, decentralization, self_organization, robustness_resilience,
  memory_hysteresis, information_processing, adaptive_capacity, emergence) correctly
  carry evidence_status: qualitative with no numeric measurement claimed beyond the
  ordinal score. **CORRECT.**
- tipping_transitions: evidence_status: measured-disputed. **CORRECT** — Krauss 1992's
  90% ceiling vs. the modern ~44-46% re-estimate is a genuine, named, live disagreement
  in the literature (not merely "we didn't check"), matching the measured-disputed
  definition and the criticality.yaml precedent for recording disputes without
  resolving them silently.
- temporal_correlation (Hurst H~0.575): evidence_status: measured-untested, confidence:
  low. **CORRECT and appropriately conservative** — paper-to-figure attribution is
  explicitly unconfirmed (pnas.org 403-blocked), and the entry does not overstate this
  as "measured."
- instance_population (7,164 languages): evidence_status: measured, confidence: low.
  Defensible: this is a published, uncontested-in-substance figure (SIL/Ethnologue),
  just snippet-verified rather than primary-read, which the confidence: low correctly
  signals without downgrading evidence_status to unknown or qualitative (a published
  count from a named institutional source is properly "measured," even if this
  session's access to primary confirmation failed) — consistent with how numerosity
  (confidence: medium, same access problem, slightly better-triangulated) is handled
  one column up.

**No evidence_status/confidence mismatches found.** No power-law claim in the entry
lacks the required CSN-grade-or-measured-untested treatment. No "derived" claims are
made without an accompanying method statement (energy_rate_density correctly avoids
the derived label entirely since no derivation was executed).

---

## 6. Internal cross-reference audit

### 6a. Dangling cross-reference: tipping_transitions -> instance_population (FINDING, fix-severity)
`tipping_transitions`'s justification (line ~484) reads: "...vs. a modern ~44-46%
re-estimate — see instance_population." Checked the `instance_population` attribute
block (lines 140-160) in full: it discusses the 7,164 living-languages count, the
Glottolog ~7,900 cross-check, and the ~3.5/year extinction rate. **It does not contain
the 44-46% endangerment figure anywhere.** The 44-46% figure exists only in the
sources sweep report (research/phase4/languages-sources.md, section C3) and was never
carried into the instance_population attribute itself. A reader following the "see
instance_population" pointer to verify or locate the 44-46% figure will not find it
there. This is a genuine internal-consistency defect (a citation-shaped pointer to
content that isn't where it's pointed), not merely a stylistic nit — recommend either
adding the 44-46% figure (with its sourcing caveats, already well-documented in the
sweep report) to instance_population's note, or removing/correcting the cross-
reference in tipping_transitions to point at the sweep report / a new dedicated
mention instead.

### 6b. numerosity's third figure vs component_ontology's two-part list (FINDING, note-severity)
`numerosity` presents three figures: speakers (~1.53e9), lexical units (520,779 OED
entries), AND the word co-occurrence network node count (460,902). `component_ontology`
declares only two atomic part types (speakers; lexical/grammatical units). The network-
node count is a different operationalization (BNC co-occurrence graph nodes) of the
same underlying replicator population already counted via the OED figure, not a third
atomic type — the entry does not state this explicitly, so a careless reading of
numerosity could suggest three components where component_ontology declares two. This
is not a numeric contradiction (both figures are independently well-sourced and both
land at a similar order of magnitude, 1e5-1e6), but the relationship between the two
lexical-side figures (OED headword count vs. BNC network node count — different
corpora, different counting units, expected to disagree by a factor of a few) is left
implicit. Low severity: no double-counting occurs in any single numeric total (the
entry does not sum the two lexical figures together), but a one-clause note
clarifying "same replicator component, two measurement methods" would remove the
ambiguity.

### 6c. Other cross-references checked and found sound
- degree_distribution's note correctly distinguishes itself from
  extreme_event_statistics ("this is topology, not event statistics") — verified this
  is the same distinction criticality.yaml and cascade_susceptibility.yaml draw;
  consistent.
- criticality's justification correctly cross-references tipping_transitions for the
  "tipping-point-adjacent framing" caveat; tipping_transitions itself exists and
  contains that content. **Sound.**
- energy_rate_density's note correctly cross-references provenance.flags, which does
  contain the matching flag entry. **Sound.**
- fractal_dimension_spatial correctly cross-references temporal_correlation as "the
  related, partially-sourced Hurst-exponent claim" rather than substituting it in;
  temporal_correlation does contain that Hurst claim. **Sound.**

---

## 7. Summary of numeric/derivation integrity

Every arithmetic operation that could be independently re-derived (speaker-count sums,
year-to-second conversions, order-of-magnitude placements, SD-range reconstruction,
percentage x population multiplications, mean-degree sanity check) reproduced the
entry's stated figures within normal rounding tolerance. No fabricated numbers, no
silent unit-conversion errors, no order-of-magnitude contradictions were found. The
entry's honesty about weak sourcing (temporal_correlation, instance_population's
edition-attribution tension, the unused Indo-European root-age figure) is itself a
positive plausibility signal — a fabricating draft would not flag its own weakest
links this specifically. The one real unit-shape deviation (2a, rate vs. duration for
characteristic_timescales) and the one dangling cross-reference (6a) are the
substantive findings; everything else audited clean.
