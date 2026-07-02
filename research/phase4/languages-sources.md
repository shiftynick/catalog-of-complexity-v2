# Languages — Quantitative Source Sweep (Catalog of Complexity, Phase 4)

Class entry: **languages** (category: cultural-informational). Primary exemplar: **English**.
Compiled 2026-07-01/02. Methodology: every value states primary-read (full document
fetched and read directly this session) vs. snippet-verified (recovered via WebSearch
AI-generated summary of search results, not independently opened as a full document)
vs. carried over from Phase 1 (research/phase1/*.md, where the primary-read/snippet
status is as recorded there). Per filling_rules.no-guessing, anything not found is
marked **unknown**, not estimated.

---

## A. IDENTITY & SCALE

### A1. spatial_extent

**Verdict: not a naturally applicable column for this class at class-general level — record as unknown/not-applicable with narrative note.**

Languages are not spatially localized objects in the way a hurricane or fault system
is; a language's "spatial extent" would have to mean either (a) the geographic range
over which it is spoken, or (b) the "shape" of its dialect-geography in linguistic
space. Neither has a standard citable order-of-magnitude figure at class-general level.
At exemplar level, English's speaker range is effectively global (used natively or
officially on every inhabited continent) — **order of magnitude ~10^7 m (Earth's
circumference, ~4×10^7 m)** if one wants a crude "range of the diaspora" figure, but
this is a derived/interpretive framing, not a measured quantity from a paper.
**evidence_status: unknown** (no citable primary measurement found); narrative note
recommended: "spatial_extent is a poor fit for this class; the more informative
class-appropriate scale variables are numerosity of speakers/languages and
component-network size (below), not a linear extent."

### A2. characteristic_timescales

Three named timescales, per column definition (fastest constituent process /
dominant dynamics / system lifetime):

1. **Fastest constituent process — information transmission rate in speech.**
   **~39 bits/s** (mean across languages, SD ≈5.1 bits/s; per-language range
   roughly 34–44 bits/s from ±1 SD), computed as information density per syllable
   (syllable conditional entropy, estimated from written-corpus statistics) ×
   syllable rate (measured from 170 speakers reading standardized texts aloud).
   17 languages, 9 language families (includes English). Source: Coupé, C., Oh,
   Y.M., Dediu, D., Pellegrino, F. (2019). "Different languages, similar encoding
   efficiency: Comparable information rates across the human communicative niche."
   *Science Advances* 5(9), eaaw2594. DOI: 10.1126/sciadv.aaw2594.
   **Snippet-verified** (recovered via WebFetch of the PMC full-text mirror,
   PMC6984970, summarized by an intermediate model rather than read verbatim by
   me in raw HTML/PDF form — treat as high-confidence but not primary-read in the
   strictest sense). evidence_status: measured. Level: class-general (cross-
   language universal claim; English was one of the 17 languages studied but no
   English-specific number was separately reported in the summary I recovered).
   Measurand: spoken information transmission rate, bits/second, from read-aloud
   standardized text.

2. **Dominant-dynamics timescale — generational language transmission / lexical
   replacement.** Core vocabulary lexical replacement operates on a
   glottochronological timescale of centuries to millennia (order **10^2–10^3
   years** per major sound/lexical-replacement cycle); intergenerational
   transmission (the mechanism by which a language persists or is broken) operates
   on a human generational timescale, order **~25 years (~10^9 s)**. **[unverified
   — model knowledge]** for the specific generational figure; the general
   "language transmission is generational" framing is linguistic-typology
   consensus but I did not pin a specific citable half-life number for English or
   for language change generally in this pass (Krauss 1992 and the lexical-
   replacement literature discuss rates qualitatively/per-lineage, not as a
   single universal half-life). evidence_status: unknown for a precise figure;
   qualitative claim only.

3. **System lifetime — language lifespan (birth to extinction/death).**
   Attested language lifespans range enormously: some documented languages persist
   for millennia (English's own lineage traceable via Old English to ~5th century
   CE, ~1500 years and counting; Indo-European family root age estimated at
   roughly **~8,120 years before present** in one recent ancestry-enabled
   phylogenetic analysis) down to single-generation death under acute suppression.
   Order of magnitude: **10^3–10^4 years** for a language lineage's characteristic
   persistence. Indo-European root-age figure: **snippet-verified**, source
   attribution unclear from search summary (surfaced via WebSearch under a Science
   paper "Language trees with sampled ancestors support a hybrid model for the
   origin of Indo-European languages," Science, and related phylogenetic work) —
   **flag for re-verification against the primary paper before citing the exact
   8,120 BP figure.** evidence_status: measured-untested (order of magnitude
   only; specific root-age number needs primary confirmation).

### A3. numerosity / component_ontology counts

Per the panel-spec worked example already anchored for this class ("english — dual
ontology: speakers (agents, out-of-scope(human)) AND lexical/grammatical units
(replicators), each with its own interaction set"):

- **Speakers (English, all L1+L2):** ~1.53 × 10^9 (**order of magnitude 10^9**).
  See instance_population/A4 below for full sourcing — same figure serves both
  columns (numerosity of the "speaker" component type for English specifically,
  and instance_population is the count of *languages*, a different level — see
  A4 for the distinction). evidence_status: measured, snippet-verified.
- **Lexical units (English wordforms/lemmas):** Oxford English Dictionary online
  contains **520,779 entries** (as of the search date, "January 2026" per the
  snippet) with 888,251 meanings; the historic complete print 2nd edition (1989)
  had 291,500 entries / 171,476 words in current use + 47,156 obsolete words.
  Commonly cited round figure "over 600,000 words" for the OED online. **Order of
  magnitude ~10^5–10^6** depending on whether one counts headword entries, senses,
  or includes technical/scientific vocabulary (which dominates raw counts).
  Source: Oxford English Dictionary (oed.com), figures via Wikipedia "Oxford
  English Dictionary" article. **Snippet-verified**, not primary-read (oed.com
  and Wikipedia article were not directly fetched this session; figures came via
  WebSearch AI summary). evidence_status: measured.
- **Word co-occurrence network size (English, as an interaction-network
  component count):** n = 460,902 nodes (word types), m = 17,000,000 edges,
  from the British National Corpus. This is the SAME dataset underlying both
  Newman (2003) Table II (already Phase-1-verified, primary-read) and
  Ferrer i Cancho & Solé (2001) below — cross-consistent. Source: Ferrer i
  Cancho, R. & Solé, R.V. (2001). "The small world of human language."
  *Proceedings of the Royal Society B* 268(1482), 2261–2265.
  DOI: 10.1098/rspb.2001.1800. **Snippet-verified** (citation confirmed via
  WebSearch; full paper not read verbatim this session — PMC1088874 available
  for future primary read). evidence_status: measured.
- **Phoneme inventory (component count at the phonological level, general
  cross-linguistic figure, not English-specific):** mean ~31–35 phonemes/language
  (PHOIBLE database: mean ≈35; UPSID sample of 451 languages: mean 31, median 29,
  mode 26), range 11 (Pirahã, Rotokas) to >140 (!Xun). English itself has ~44
  phonemes (24 consonants + ~20 vowels/diphthongs, count varies by dialect and
  analysis) **[unverified — model knowledge for the English-specific 44 figure;
  not independently re-verified via primary source this session]**.
  Cross-linguistic figures: **snippet-verified** via WebSearch, PHOIBLE
  (phoible.org) is the primary database but was not fetched directly.
  evidence_status: measured (cross-linguistic aggregate); unknown/unverified
  (English-specific count).

**Component ontology note (per atomicity-convention):** for the *class* "languages"
generally, the natural dual atomicity is (a) speakers as agents (out-of-scope(human))
and (b) linguistic units — phonemes/morphemes/words/constructions — as replicators,
exactly as the panel-spec worked example states. Numerosity should record BOTH
component-type counts, not collapse to one.

### A4. instance_population

**Standing count of living languages (class-level, i.e., how many instances of
"a language" currently exist):** **7,164 living languages**, per Ethnologue,
**27th edition (2024)**. Cross-checked: 26th edition (2023) listed 7,168 (net
+17 vs. 25th ed.); 25th edition (2022) listed 7,151; the 27th-edition change
(7,168 → 7,164, a net decrease of 4) was attributed solely to changes in
extinction status of some languages, not new discovery. A more recent WebFetch
summary (of a page claiming to be ethnologue.com directly) reported a "29th
edition, 2026, 7,170 living languages" figure that I was **unable to independently
verify** — ethnologue.com returned HTTP 403 to direct WebFetch on every attempt
this session, so all Ethnologue figures here rest on WebSearch AI-summary
snippets of Ethnologue's own pages and secondary citations (Wikipedia's
"Ethnologue" article, SIL.org), not a primary-read of ethnologue.com itself.
**Recommend using the 27th edition (2024) 7,164 figure as the better-triangulated
value** (it appeared consistently across two independent search passes), and
flagging the "29th ed./2026/7,170" figure for re-verification (edition-year
arithmetic is suspicious: Ethnologue editions have historically been roughly
annual-to-biennial, and jumping from 27th/2024 to 29th/2026 with no visibility
into a 28th edition's figures in my searches is a gap, not a confirmed number).
evidence_status: measured, **snippet-verified only, not primary-read** (Ethnologue
blocked direct fetch). Level: class-level.

**Glottolog cross-check (different classification criteria, language-vs-dialect
boundary drawn differently):** ~7,900 languages. **Snippet-verified**, source
attribution not independently pinned to a specific Glottolog release/version
number this session — flag for re-verification.

**Formation/extinction rate:** Two materially different rates surfaced, and the
tension should be recorded rather than silently resolved (analogous to the
Gutenberg-Richter b-value vs. CSN tension already flagged in Phase 1 for
earthquakes):
- **Older, widely-repeated folk figure:** "one language dies every two weeks"
  (~26/year). **This figure is explicitly NOT supported by more careful recent
  analysis** per the Catalogue of Endangered Languages (ELCat)-based estimate below.
- **More rigorous recent estimate:** Catalogue of Endangered Languages finds an
  average of **3.5 languages extinct per year** (≈1 every 4 months), i.e.
  roughly an order of magnitude slower than the "two weeks" folk figure.
  **Snippet-verified** via WebSearch (source appears to be Rosetta
  Project/Catalogue of Endangered Languages reporting, exact primary citation
  not independently confirmed this session — flag for re-verification).
  evidence_status: measured-untested (rate figure not traced to a specific
  peer-reviewed primary source in this pass).

**English speakers (exemplar-level instance count within the class):**
**~1.53 × 10^9 total (L1 + L2)**, comprising ~450 million L1 (native) speakers
and ~1,090 million L2 speakers, per Ethnologue (edition/year as fetched:
sources disagree between "2024" and "2026" attribution in different mirrors —
**flag for re-verification against a specific dated Ethnologue edition**).
A separate WebSearch pass returned a slightly different split (380M L1 / 1.135B
L2 summing to 1.515B) from the same nominal source — **the L1/L2 split is
NOT stable across snippets even though the ~1.5B total is consistent**; treat
the total (~1.5 × 10^9, order of magnitude 10^9) as the more robust figure and
the L1/L2 split as lower-confidence. evidence_status: measured,
**snippet-verified only** (Ethnologue primary page blocked; Wikipedia's "List of
languages by total number of speakers" article — which itself cites Ethnologue —
was fetched via WebFetch and is the direct source of the 1,530M/450M split
reported above). Level: exemplar (English specifically).

---

## B. STRUCTURE

### B1. degree_distribution (network systems — English lexical/syntactic networks qualify)

Two independent, mutually-consistent network studies of English word-level
networks, both **already partially captured in Phase 1** (Newman 2003) and
extended here:

- **Newman (2003) SIAM Review Table II, word co-occurrence network:**
  n=460,902, m=17,000,000, mean degree z=70.13, degree-distribution exponent
  **α=2.7**, clustering C⁽²⁾=0.44. **Primary-read** (Phase 1,
  research/phase1/quantitative-backbone.md, section 6). Also Roget's Thesaurus
  network (directed, n=1,022, m=5,103) as a related lexical-semantic network,
  no reported power-law exponent for that one.
- **Ferrer i Cancho & Solé (2001), Proc. R. Soc. B 268(1482):2261–2265:**
  same underlying British National Corpus co-occurrence data (n≈440,902–460,902
  words — minor discrepancy between the two papers' reported node counts,
  likely a preprocessing/threshold difference, not independently resolved this
  session), reporting a **two-regime power law**: degree exponent γ_< ≈ 1.5 for
  words with degree k ≤ 10^3 (the "low-degree, high-frequency-function-word"
  regime) and γ_> ≈ 2.7 for words with 10^3 < k < 10^5 (matching Newman's single
  α=2.7 for the high-degree tail). Small average path length ℓ=2.67, high
  clustering coefficient 0.437. **Snippet-verified** (citation and figures
  recovered via WebSearch summary; PMC1088874 full text not read verbatim this
  session — recommend primary read as a follow-up).

**Power-law-rigor flag: neither of these has been run through a CSN (2009)-style
maximum-likelihood + Kolmogorov-Smirnov goodness-of-fit test as far as I could
determine this session.** Both papers predate CSN (2009) and use older
log-log-regression-style exponent fitting, which CSN's own paper criticizes as
biased/optimistic relative to their MLE+KS protocol. Per filling_rules.power-law-rigor,
**this entry defaults to evidence_status: measured-untested** for the word
co-occurrence network's degree distribution — record the α≈2.7 (high-degree
regime) / γ≈1.5 (low-degree regime) values but flag the fit status as untested-
by-CSN-standard, exactly the same caveat status as most of CSN's own 24-dataset
survey before they applied rigorous testing. Level: exemplar (English,
British National Corpus-derived).

### B2. fractal_dimension_spatial

**Verdict: no citable spatial (geometric) fractal dimension found for language
as a class or for English specifically.** Searches for language phylogenetic
"branching" fractal dimension, dialect-geography fractal structure, and
syntax-tree self-similarity returned only qualitative/structural discussion
(e.g., "Persistent Topology of Syntax," arXiv:1507.05134 — a topological, not
fractal-dimension, analysis) and no numeric D value analogous to the San Andreas
Fault's D≈1.1–1.4. **evidence_status: unknown.** Narrative note: fractal
dimension is a poor natural fit for this class in the spatial sense (languages
don't have a primary spatial-geometric structure the way a coastline or fault
trace does); if a fractal-type measure is wanted for language, the better fit
is the multifractal analysis of sentence-length sequences (a temporal/sequence
fractal structure) — "Multifractal analysis of sentence lengths in English
literary texts" (arXiv:1212.3171) surfaced in search but was **not read or
verified this session**; flag as a lead for a future pass, not a citable value
today.

---

## C. DYNAMICS

### C1. extreme_event_statistics — Zipf/power-law word frequency

**This is the class's flagship, full-rigor value, already Phase-1 primary-read
and CSN-grade verified. Restating here for the panel with full annotation:**

**α = 1.95(2)**, fitted discrete power-law exponent for word-frequency data
(Melville's *Moby Dick*, n=18,855 unique word types, x̂_min=7±2), p=0.49
(Kolmogorov-Smirnov goodness-of-fit test). **This is the ONLY dataset, of 24
tested across all domains in CSN's entire study, rated "good"** — i.e., no
alternative distribution (log-normal, exponential, stretched-exponential, power
law with cutoff) fits comparably well; the power law is the clear, unambiguous
best model. Source: Clauset, A., Shalizi, C.R., Newman, M.E.J. (2009).
"Power-law distributions in empirical data." *SIAM Review* 51(4), 661–703.
arXiv:0706.1062. **Primary-read** (Phase 1, full text and Tables 6.1–6.3
retrieved and read). evidence_status: **measured** (full CSN-grade statistical
support — the rare case where the panel's default-skeptical
"measured-untested" status is explicitly NOT needed; this should be flagged in
the panel narrative as the catalog's best-attested power law of any system,
biological or not). Level: exemplar (English, specifically Melville's written
corpus as the measured text — note the measurand: written word-frequency rank,
not spoken frequency, not a different language's text).

**Contrast/context for the write-up:** of CSN's 24 datasets, 17 were "not ruled
out" but only this one was rated unambiguously "good"; blackouts, cities,
earthquakes, and web links were all weaker (moderate/with-cutoff) or rejected
outright. This makes English word frequency the single strongest power-law
claim in the entire catalog's evidentiary base to date, not just within this
class — worth stating explicitly in the entry narrative.

### C2. temporal_correlation

**Hurst exponent H ≈ 0.575 ± 0.002** (weak long-range correlation), holding up
to a scale of ~10^4 tokens, found in analysis of narrative texts; a related
reported figure is **H ≈ 0.6** for sentence-length sequences specifically
("positively linearly correlated over long distances," significantly above the
uncorrelated H=0.5 baseline). Source (for the H≈0.575 figure): apparently
Altmann, Cristadoro & Esposti or a related long-range-correlation study —
**the exact paper-to-figure attribution is not fully disambiguated in my search
pass**; candidate primary sources surfaced include Altmann, E.G., Cristadoro, G.,
Esposti, M.D. (2012), "On the origin of long-range correlations in texts,"
*PNAS* 109(29):11582–11587 (WebFetch of pnas.org returned HTTP 403, blocking
primary verification this session), and/or Montemurro & Zanette-lineage work.
**Snippet-verified only, and the specific numeric-value-to-paper mapping should
be re-verified against the primary PNAS paper before being locked into the
catalog** — flagging this explicitly as the weakest-sourced numeric claim in
this report. evidence_status: measured-untested. Measurand: word/token sequence
position (letters in some studies, word ranks/sentence lengths in others —
note that "which symbol stream" varies across the cited literature and is not
uniformly English-specific; treat as a general-language claim with English
among the corpora studied, per the broader Altmann/Montemurro/Zanette line of
work surfaced in search). Level: class-general (claimed as a cross-language
phenomenon, e.g. also replicated for Chinese narrative texts "across 2000
years" per a Hindawi *Complexity* 2018 paper surfaced but not read).

### C3. tipping_transitions / cascade statistics — language endangerment and death

Not a formally studied "tipping element" system in the climate-science sense
(no Armstrong McKay 2022-style enumerated list exists for languages), but the
class has a well-developed literature on language endangerment as a
population-dynamics/extinction process functionally analogous to a tipping
phenomenon (loss of intergenerational transmission as the critical threshold):

- **Historical alarm figure (Krauss 1992):** up to 90% of the ~6,000 languages
  extant in 1992 were projected to face possible extinction "in this century"
  (i.e., by ~2100), including 80% of North American languages specifically.
  Source: Krauss, M. (1992). "The World's Languages in Crisis." *Language*
  68(1), 4–10. DOI: 10.1353/lan.1992.0075. **Snippet-verified** (citation
  confirmed via WebSearch across multiple independent secondary sources; the
  primary *Language* journal article itself not fetched/read this session).
  evidence_status: measured-disputed — see next point.
- **Current, more rigorous re-assessment:** Krauss's 90% estimate is now
  considered too high; a more comprehensive database-driven estimate puts
  **~44-46% of living languages as endangered** (varying slightly by source —
  one figure ties this to Ethnologue's EGIDS scale). "A consensus seems to have
  developed around the likelihood of 50% loss" (this century), materially lower
  than Krauss's 90% ceiling but still describing a mass-extinction-scale
  process. **Snippet-verified**, exact primary source for the 44–46% figure not
  independently pinned down (candidate: Ethnologue's own EGIDS-based endangerment
  tallies, or Simons & Lewis-type Ethnologue analyses — flag for
  re-verification). evidence_status: measured-disputed (explicitly recorded as
  disputed per filling_rules — Krauss 1992 vs. the more recent, lower
  re-estimate is a live disagreement in the literature, not a settled number).
- **Extinction rate (cascade/attrition rate):** ~3.5 languages/year on average
  per the Catalogue of Endangered Languages (see A4 above) — this directly
  supersedes the popular "one language every two weeks" claim, which the same
  search pass found is **not supported** by the more careful ELCat-based count.
  evidence_status: measured-untested (rate not traced to a specific
  peer-reviewed primary publication this session).

**UNESCO Atlas of the World's Languages in Danger** categorizes 2,473 languages
across four endangerment tiers (vulnerable / definitely endangered / severely
endangered / critically endangered) plus extinct. **Snippet-verified**
(ich.unesco.org PDF surfaced in search but not fetched/read this session).

### C4. chaos_sensitivity / predictability

No citable Lyapunov-exponent or formal chaos/predictability-horizon figure was
found for language as a dynamical system (unlike the atmosphere's ~2-week
predictability horizon anchor cited in the panel spec). Language change and
language-competition models (e.g., Abrams-Strogatz-type language-death models,
"Modelling the dynamics of language death," *Nature* 424:900, 2003 — surfaced in
search, not read this session) are nonlinear population-dynamics models but I
found no published sensitive-dependence/chaos measurement for them.
**evidence_status: unknown.**

---

## D. ENERGY_RATE_DENSITY (Φ_m) — power (W) and mass (kg) inputs

**Verdict: NOT recovered, and no clean derivation path identified this
session — consistent with Phase 1's finding that English/language had NO
language-specific Φ_m in Chaisson's own papers** (research/phase1/
quantitative-backbone.md §1, "Cultural-informational (English): NOT
recovered"). Chaisson's generic "society"/"technologists" category
(Φ_m ≈ 2×10^4 to 2×10^6 erg s⁻¹ g⁻¹, per capita, national-population-scale) is
the nearest usable analogue, but it measures whole-society energy throughput,
not anything specific to the linguistic system per se.

**Possible derivation path flagged, NOT executed this session (would require
new computation, not lookup):** one could in principle construct a
language-specific Φ_m by taking (a) power = metabolic/energetic cost of speech
production and/or the brain's language-processing energy budget (candidate
input: brain glucose-metabolism figures for language areas, or a cruder proxy
like the metabolic cost of vocalization) and (b) mass = some characteristic
mass of the "system" (e.g., total biomass of speakers, which immediately raises
the question of whether this smuggles a biological system in through the back
door — the catalog's non-biological scope constraint makes this derivation
conceptually fraught, not just data-scarce). **No such derivation was attempted
or found in the literature searched this session.** Recommend recording
power (W): unknown, mass (kg): unknown, Φ_m: unknown, with a narrative note
explaining why this class resists the standard derivation (language is not
itself a mass-energy system in the way a hurricane or a power grid is — its
"physical instantiation" is distributed across billions of human brains and
artifacts, making the atomicity/boundary choice for a Φ_m calculation
unusually contested). evidence_status: unknown.

---

## Summary table

| quantity | value | unit | source | primary-read-or-snippet |
|---|---|---|---|---|
| Zipf/word-frequency tail exponent (English, Moby Dick) | α=1.95(2), p=0.49, CSN "good" fit | dimensionless | Clauset, Shalizi & Newman, SIAM Review 51(4):661 (2009) | **primary-read** (Phase 1) |
| Shannon entropy rate, English text | ~1.3 bits/char (Shannon 1951); modern MTurk replication at scale | bits/character | Shannon, BSTJ 30(1):50 (1951); Bentz et al., Entropy 21(12):1201 (2019) | primary-read (Phase 1) |
| Spoken information transmission rate (17 languages incl. English) | 39.15 (SD 5.10) | bits/second | Coupé et al., Science Advances 5(9):eaaw2594 (2019) | snippet-verified |
| Living languages, standing count | 7,164 (27th ed., 2024); cf. 7,168 (26th ed. 2023), 7,151 (25th ed. 2022) | count | Ethnologue, 27th edition (2024) | snippet-verified (Ethnologue blocked direct fetch, 403) |
| Language extinction rate | ~3.5/year (supersedes "1 per 2 weeks" folk figure) | languages/year | Catalogue of Endangered Languages (ELCat), via secondary reporting | snippet-verified, primary citation not pinned |
| Languages endangered (current) | ~44-46% (vs. Krauss 1992's 90% ceiling) | percent of 7,164 | Krauss, Language 68(1):4 (1992); modern re-estimate, source not fully pinned | snippet-verified, disputed (measured-disputed) |
| English speakers, total L1+L2 | ~1.53×10^9 (450M L1 / 1,090M L2, or alt. split 380M/1.135B — splits disagree) | count | Ethnologue, via Wikipedia "List of languages by total number of speakers" | snippet-verified (Wikipedia page primary-fetched; underlying Ethnologue page blocked) |
| English word co-occurrence network | n=460,902, m=17,000,000, α=2.7 (high-degree regime), γ=1.5 (low-degree regime), ℓ=2.67, C=0.44 | network stats | Newman, SIAM Review 45(2):167 (2003) [primary]; Ferrer i Cancho & Solé, Proc. R. Soc. B 268:2261 (2001) [snippet] | mixed: Newman primary-read (Phase 1); Ferrer i Cancho/Solé snippet-verified |
| Long-range temporal correlation, text sequences | H≈0.575±0.002 (up to scale 10^4); sentence-length H≈0.6 | Hurst exponent | Altmann/Cristadoro/Esposti-lineage, PNAS 109(29):11582 (2012) — exact figure-to-paper mapping unconfirmed | snippet-verified, weak (flag for re-verification) |
| OED entries (English lexicon size) | 520,779 entries (current online); 291,500 (1989 print 2nd ed.) | count | Oxford English Dictionary (oed.com), via Wikipedia | snippet-verified |
| Phoneme inventory, cross-linguistic mean | ~31-35 (range 11 to >140) | count/language | PHOIBLE database; UPSID (451-language sample) | snippet-verified |
| Energy_rate_density (Φ_m), English/language | not recovered; no derivation executed | erg s⁻¹ g⁻¹ | Chaisson, Complexity 16(3):27 (2011) — explicitly absent for this class | primary-read (Phase 1) confirms absence |
| Fractal dimension (spatial) | not found | — | — | unknown |
| Chaos/Lyapunov/predictability horizon | not found | — | — | unknown |

---

## Canonical review sources for the entry source list (3-5)

1. Clauset, A., Shalizi, C.R., Newman, M.E.J. (2009). "Power-law distributions
   in empirical data." *SIAM Review* 51(4), 661–703. — primary-read, Phase 1;
   flagship Zipf/word-frequency evidence.
2. Shannon, C.E. (1951). "Prediction and Entropy of Printed English." *Bell
   System Technical Journal* 30(1), 50–64. — foundational entropy-rate
   measurement for English (Phase 1 provenance).
3. Coupé, C., Oh, Y.M., Dediu, D., Pellegrino, F. (2019). "Different languages,
   similar encoding efficiency: Comparable information rates across the human
   communicative niche." *Science Advances* 5(9), eaaw2594. — cross-linguistic
   information-rate universal, this session.
4. Newman, M.E.J. (2003). "The structure and function of complex networks."
   *SIAM Review* 45(2), 167–256. — word co-occurrence network baseline,
   primary-read Phase 1.
5. Ethnologue (SIL International), 27th edition (2024). — standing-population
   count of living languages and speaker figures; class-level demographic
   backbone (access blocked for direct primary verification this session;
   recommend the catalog team obtain institutional/library access to verify
   the 7,164 figure directly against ethnologue.com rather than relying solely
   on search snippets).

Secondary candidate (not in the core 3-5 but strong for the network/structure
section specifically): Ferrer i Cancho, R. & Solé, R.V. (2001). "The small
world of human language." *Proceedings of the Royal Society B* 268(1482),
2261–2265.

---

## Biggest uncertainties (full list; top 3 repeated in final response)

1. **Ethnologue itself could not be primary-read.** Every fetch attempt against
   ethnologue.com returned HTTP 403 this session. All Ethnologue-derived figures
   (7,164 living languages, English's ~1.53B speakers, the L1/L2 split) rest on
   WebSearch AI-summary snippets of Ethnologue pages or on Wikipedia's citation
   of Ethnologue, not on a primary read of the source itself. The edition/year
   attribution is also internally inconsistent across snippets (one fetch
   claimed "29th edition, 2026, 7,170 languages," which does not reconcile
   cleanly with the better-triangulated "27th edition, 2024, 7,164" figure from
   a separate, cross-confirmed search pass). Recommend the catalog team access
   Ethnologue directly (library/institutional login) before locking these
   numbers in.

2. **The temporal_correlation (Hurst exponent ≈0.575) figure has the weakest
   source chain in this report.** I could not get PNAS.org to serve the
   Altmann/Cristadoro/Esposti paper (403 blocked), so the H≈0.575 and H≈0.6
   figures are WebSearch-summary artifacts with an uncertain exact
   paper-to-number mapping — there are at least three candidate research
   lineages (Altmann et al., Montemurro & Zanette, and a separate Chinese-text
   2018 study) discussing long-range text correlations, and I was not able to
   cleanly attribute the specific H-values to one specific paper with page/table
   precision. Needs a dedicated primary-source pass before catalog entry.

3. **Energy_rate_density (Φ_m) remains genuinely unrecoverable for this class,
   and I could not identify even a plausible derivation path that stays inside
   the catalog's non-biological scope.** Unlike other cultural/socio-economic
   entries where a national energy-throughput proxy at least loosely applies,
   language's "physical substrate" is distributed across human brains and
   speech/writing artifacts, making any power/mass boundary choice for Φ_m
   conceptually contested rather than merely undermeasured — this may be a
   structural (not just evidentiary) gap the catalog should flag explicitly
   rather than treat as a to-do for future search passes.
