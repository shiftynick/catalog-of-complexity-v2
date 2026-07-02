# External Prior-Art Check (Workstream 2.3)

**Date:** 2026-07-02 · **Scope:** find and honestly characterize prior attempts at cross-system comparative complexity scoring — anything that scores/measures MULTIPLE heterogeneous real systems on a common complexity-related instrument. Conducted as a sweep across ten directions using WebSearch/WebFetch, cross-checked against the project's own instrument (schema/panel-spec.yaml, frozen v1.0: 30 columns across identity/scale, structure, dynamics, information/memory, adaptation, emergence/robustness groups; quantitative + rubric + hybrid + categorical + structured kinds; per-value provenance with evidence_status and read-status annotations; feeding PCA/clustering — see docs/findings.md for the first analysis round).

**Read-status key for this report:** [primary] = full text obtained and read directly. [secondary] = conclusions drawn from abstracts, reviews, tables of contents, or search-engine synthesis, not full text. [unverified] = could not access source at all; claim rests on general scholarly consensus or is explicitly flagged as a gap.

---

## 1. Chaisson — energy rate density (Φm)

**Citations:** Chaisson, E. (2001). *Cosmic Evolution: The Rise of Complexity in Nature*. Harvard University Press. · Chaisson, E.J. (2011). "Energy Rate Density as a Complexity Metric and Evolutionary Driver." *Complexity* 16(3), 27–40. · Chaisson, E.J. (2011). "Energy Rate Density II: Probing Further a New Complexity Metric." *Complexity* 17(1). · restated in later preprints (e.g. arXiv:1406.6328, 1406.2730). [secondary — abstracts, preprint excerpts, and cross-references read directly; Wiley full text paywalled]

**What it is:** Φm (erg s⁻¹ g⁻¹), the free-energy throughput per unit mass — the direct ancestor of our `energy_rate_density` column, cited verbatim in our schema (`sources: [chaisson2011]`). Chaisson computes Φm for systems spanning the full sweep of cosmic evolution — galaxies, stars, planets, plants, animals, brains, society, machines — and shows it rises roughly monotonically with time, from ~10⁻² erg/s/g (galaxies) to ≥10⁵ (modern technological society/brains).

**How it differs from ours:** This is fundamentally a **single-metric ranking along one axis** (Φm vs. evolutionary time), not a multi-dimensional panel. There is no companion dimensionality — no topology, feedback, criticality, adaptive capacity, or any second column scored alongside Φm for the same systems. It is a beautiful, famous unifying number, not a profile. Chaisson does span non-biological systems (galaxies, stars, planets, hurricanes get occasional mention) comparably to how we do, which is exactly why it earns a column in our schema — but it stops at one column.

**What it does better than us:** Φm has two decades of citation history and a genuinely elegant physical unification claim (thermodynamic throughput as *the* evolutionary driver) that our multi-column panel does not attempt to replicate or rival — we borrow it as one input among 30, not as a totalizing theory.

---

## 2. Bar-Yam — complexity profile

**Citations:** Bar-Yam, Y. (1997/2003). *Dynamics of Complex Systems*. Addison-Wesley / NECSI (available free via necsi.edu). · Bar-Yam, Y. (2002). "Complexity Rising: From Human Beings to Human Civilization, a Complexity Profile." In *Encyclopedia of Life Support Systems* (EOLSS/UNESCO). · Bar-Yam, Y. (2013). "Computationally tractable pairwise complexity profile." *Complexity* 18(5). [secondary/partial-primary — the EOLSS piece and NECSI multiscale-methods pages were read directly; the original 1997 book chapters were accessed via summary]

**What it is:** The complexity profile is explicitly **a function of scale**, not a scalar — it plots "the number of independent behaviours visible at a particular scale" as a curve C(scale), distinguishing it in kind from every single-number metric (including Chaisson's). Bar-Yam illustrates the concept with schematic curves for idealized regimes (random gas, coherent solid, correlated/specialized systems) and applies it in extended prose to **one** case study at a time — most famously human civilization's historical trajectory, plotted qualitatively across millennia.

**Cross-system tabulation?** Named real/toy systems (gas, cannonball, snowflake, infections, armies, corporations, markets) appear in a schematic 2×3 illustrative figure to demonstrate the *shape* of different profile curves — but they are drawn, not scored; there is no data table with numeric complexity-profile values computed for multiple distinct real systems side by side. The 2013 "pairwise complexity profile" paper is a computational-tractability advance (approximating the profile via pairwise dependencies for high-dimensional systems), aimed at making the *method* more applicable — it is a methods paper, not an applied comparative survey.

**What it does better than us:** The scale-resolved insight is genuinely deeper than anything in our panel — our `hierarchy_depth` column counts levels but does not produce a continuous complexity-vs-scale curve per system. If the catalog ever wants a true scale-decomposition axis, this is the citation to build from.

---

## 3. Ladyman, Lambert & Wiesner (2013) and Ladyman & Wiesner (2020)

**Citations:** Ladyman, J., Lambert, J. & Wiesner, K. (2013). "What is a complex system?" *European Journal for Philosophy of Science* 3, 33–67. (preprint: philsci-archive.pitt.edu/9044) · Ladyman, J. & Wiesner, K. (2020). *What Is a Complex System?* Yale University Press. [primary — 2013 paper's full preprint text obtained and read; 2020 book assessed via a detailed scholarly review (Kinney, *BJPS Review of Books*) plus publisher/library summaries — book itself not directly read, flagged accordingly]

**What it is:** This is the single closest conceptual relative of our rubric-column feature set. LLW 2013 surveys the complexity-science literature's candidate defining features — nonlinearity, feedback, spontaneous order/self-organization, robustness, decentralization, emergence, hierarchical organization, numerosity — and argues, feature by feature, that none is individually necessary or sufficient, before converging on a definition centered on statistical complexity ("an ensemble of many elements interacting in a disordered way, resulting in robust organisation and memory"). Our schema's own filling_rules explicitly cite LLW's verdict that nonlinearity is "neither necessary nor sufficient" (see the `nonlinearity` column note). The 2020 book expands this into a full monograph: ch. 1 lists ~10 features, ch. 2 discusses seven example systems (matter, the universe, climate, insects, markets, the web, the brain) each in its own prose section, ch. 3 elaborates features qualitatively via "perspicuously described" examples, ch. 4 gives mathematical operationalizations, ch. 5 proposes the philosophical definition.

**Cross-system tabulation? Confirmed absent.** In both the 2013 paper and the 2020 book, named real systems (birds, ant colonies, stock markets, the brain, climate, crystals, cities, the internet, corporations, social media) appear **only as one-off illustrative prose examples** — never as rows in a table scored against the feature list as columns. The BJPS reviewer of the 2020 book explicitly wanted "more precise book-keeping" of which features apply to which systems and did not find it — corroborating that no such table exists. This is a load-bearing finding: the feature *vocabulary* is almost a checklist match to our rubric columns (nonlinearity, feedback, self-organization, robustness, emergence, decentralization all appear near-verbatim in both instruments), but LLW/L&W never operationalized it as data. They built the questionnaire; nobody filled it in across multiple systems until now (as far as this sweep found).

**What it does better than us:** The philosophical rigor of the necessary/sufficient analysis is sharper and more careful than anything a scoring rubric can carry — our anchors implicitly take a position on each feature's status by scoring it, but we don't argue the meta-question the way LLW does. Their book is the better citation for *why* each column belongs in a complexity instrument at all.

---

## 4. Rescher — *Complexity: A Philosophical Overview* (1998)

**Citation:** Rescher, N. (1998). *Complexity: A Philosophical Overview*. Transaction Publishers. xviii + 219pp. [secondary — table of contents and catalog descriptions read; full text blocked (403) at the mirror attempted]

**What it is:** A purely philosophical/taxonomic treatise enumerating *modes* or *types* of complexity as concepts (compositional, structural, functional, epistemic, "law of logarithmic returns" on cognitive progress, technological escalation) rather than an empirical program. Chapters: "The Ways of Complexity," "What Complexity Involves," "Modes of Complexity," "The Complexity of the Real," "Cognitive Progress in a Complex World," "Complex Knowledge," "Technological Escalation."

**Cross-system tabulation?** No evidence found of any table scoring named real systems. This is conceptual philosophy of the pre-quantitative-complexity-science kind (Rescher is a general epistemologist, writing before the LLW-era convergence on a feature checklist). Not a close relative.

---

## 5. Mitchell — *Complexity: A Guided Tour* (2009)

**Citation:** Mitchell, M. (2009). *Complexity: A Guided Tour*. Oxford University Press. [secondary — confirmed table of contents via Library of Congress record and archive.org, plus a JASSS book review]

**What it is:** Five parts, 19 chapters, organized as sequential topic/case-study chapters (dynamics and chaos, information theory, computation, evolution and genetics, genetic algorithms, cellular automata, network science, scaling laws). Chapter 7, "Defining and Measuring Complexity," is the closest analogue to our project's ambition — it surveys candidate complexity measures (algorithmic complexity, logical depth, statistical complexity, etc.) and explicitly discusses the *difficulty* of comparing systems' complexity on a common scale.

**Cross-system tabulation?** None. The book is organized system-by-system and topic-by-topic, not as a unifying scored matrix; the JASSS review confirms this is discursive exposition, not data. Mitchell is arguably the best "why this is hard" citation for our methods section — she names the exact problem (no common scale across heterogeneous systems) that our anchored-rubric approach is a working attempt to solve.

---

## 6. Lloyd — "Measures of complexity: a non-exhaustive list" (2001)

**Citation:** Lloyd, S. (2001). "Measures of complexity: a non-exhaustive list." *IEEE Control Systems Magazine* 21(4), 7–8. [primary — full text obtained]

**What it is:** The famous ~40-measure zoo (algorithmic/Kolmogorov complexity, computational complexity, Lempel-Ziv complexity, logical depth, thermodynamic depth, statistical complexity, fractal dimension, degree of hierarchy, and more), organized under three questions: how hard is it to describe, how hard is it to create, and what is its degree of organization. Several of these measures appear by name in our own schema's `conceptual_layer` (kolmogorov_complexity, logical_depth, thermodynamic_depth, effective_complexity, statistical_complexity, excess_entropy, multiscale_entropy, complexity_profile) — we already treat this list as "theoretically central, practically uncomputable for real macroscopic systems" and surface it as educational content rather than data, per our own schema comment.

**Cross-system tabulation?** No table applying a substantial subset of Lloyd's measures across multiple real heterogeneous systems was found, either by Lloyd or in follow-up literature. Searches for applied comparative work (e.g., computing thermodynamic depth and statistical complexity side by side for named real systems) surfaced only theoretical measure-vs-measure critiques (Crutchfield/Shalizi on thermodynamic depth's subjectivity), not empirical cross-system application. This corroborates our own schema's editorial call to keep this whole layer conceptual-only — the prior art agrees these measures are essentially uncomputed for real macroscopic systems.

---

## 7. Textbooks with comparative typological tables

- **Boccara, N. *Modeling Complex Systems* (Springer).** [secondary] Organized by *model class* (mean-field approximations, cellular automata, networks, power-law/scaling phenomena), drawing examples from ecology, epidemiology, sociology, seismology, economics as illustrations of each modeling technique. No cross-system attribute table found.
- **Sayama, H. *Introduction to the Modeling and Analysis of Complex Systems* (open textbook, SUNY/Binghamton).** [secondary, weakly verified — full-text mirrors failed to load] Chapter structure is method-organized (dynamical systems basics, discrete/continuous models, chaos, cellular automata, networks, agent-based models), not a real-system comparison table, based on available descriptions.
- **Thurner, S., Hanel, R. & Klimek, P. (2018). *Introduction to the Theory of Complex Systems*. Oxford University Press.** [secondary] Chapter 1 surveys complex-systems concepts across physics, biology, and social science and reportedly includes a section on "classification of complex systems based on their entropy" — but this is a theoretical/statistical-mechanics classification scheme (entropy functionals), not an empirical table tabulating named real systems against multiple attributes. Full chapter text could not be retrieved directly (OUP chapter page returned only metadata; a secondary PDF mirror had an expired TLS certificate) — flagged as not fully verified, but no positive evidence of a comparative real-system table surfaced across two independent search passes.

None of the three textbooks contain what we do: a fixed multi-column panel scored per system with citations.

---

## 8. Structured cross-domain databases — methodological cousins

These are not complexity-science instruments, but they are the closest methodological siblings for the *pattern* of "many heterogeneous cases, coded on a common instrument, with source provenance."

**(a) Seshat: Global History Databank.** Turchin, P. et al. (2018). "An Introduction to Seshat: Global History Databank." *Journal of Cognitive Historiography* 5, 115–123. · Turchin, P. et al. (2020). "A Macroscope for Global History." *Digital Humanities Quarterly* 10(4). [secondary] Scale: ~370–414 coded historical polities; codebook of 1,500+ variables (~500 actively coded) spanning social complexity, warfare, religion, agriculture, institutions, well-being. Methodology: research assistants trained by domain experts in workshops that fix the coding scheme in advance; each value carries an uncertainty/disagreement flag and a descriptive justification tied to specific historiographical sources. **This is the closest structural cousin to our provenance discipline** — expert-coded, source-annotated, uncertainty-tagged, pre-registered-style variable definitions — but Seshat codes historical societies (a domain closer to our future socio-cultural entries than to stars/hurricanes), and has no anchored-rubric-by-worked-example mechanism analogous to our `schema/anchors/*.yaml`.

**(b) D-PLACE.** Kirby, K.R. et al. (2016). "D-PLACE: A Global Database of Cultural, Linguistic and Environmental Diversity." *PLOS ONE* 11(7), e0158391. [secondary] Scale: 1,400+ societies, built on Murdock's Ethnographic Atlas (1,291 societies, 90+ traits) and Binford's hunter-gatherer dataset (339 societies, 40 variables), plus environmental layers. Every data point cites one of 4,000+ ethnographic sources. Strong citation discipline, but looser per-value confidence tagging than Seshat or our evidence_status field.

Neither database uses a fixed cross-domain metric panel scored 0–4 with worked anchors across heterogeneous *physical/engineered* system classes — both are large ethnographic/historical variable sets within one broad domain (human societies), not a compact commensurable panel spanning astrophysical to socio-economic to infrastructure categories the way ours does.

---

## 9. Network-science comparative tables

**Newman, M.E.J. (2003). "The Structure and Function of Complex Networks." *SIAM Review* 45(2), 167–256.** [secondary — table's existence and column list corroborated via multiple independent citations and search-engine synthesis; direct table rendering failed on two PDF mirrors] Already cited as a source in our own schema (`degree_distribution` column, `sources: [newman2003]`). Table II lists roughly two dozen real-world networks (Internet AS-level, WWW, power grid, film-actor collaboration, citation networks, etc.) with columns: number of vertices, number of edges, mean degree, power-law exponent where applicable, clustering coefficient, mean geodesic distance, degree correlation. **This is purely topological/structural** — no dynamical, adaptive, or emergence-related attribute is coded per network; it is a snapshot graph-statistics table. This is precisely why our schema pulls only the `degree_distribution` datum from Newman and does not treat his table as a template for the rest of our panel — his instrument doesn't extend to dynamics.

**Albert, R. & Barabási, A.-L. (2002). "Statistical Mechanics of Complex Networks." *Reviews of Modern Physics* 74, 47–97.** [secondary] Known to contain a similar empirical-network-data review preceding the modeling sections; not directly confirmed by table read in this sweep.

**Costa, L. da F., Rodrigues, F.A., Travieso, G. & Villas Boas, P.R. (2007). "Characterization of Complex Networks: A Survey of Measurements." *Advances in Physics* 56, 167–242.** (arXiv:cond-mat/0505185) [secondary] Broader measurement survey (degree, clustering, motifs, community structure, hierarchical measures) but still confined to graph-structural characterization.

All three are topology-only surveys — a real and useful genre, but a strict subset of Group B (Structure) in our panel, with nothing corresponding to Groups C–F (dynamics, information, adaptation, emergence/robustness).

---

## 10. "Periodic table of complex systems" / atlas / LLM-era attempts

Ten-plus varied queries across this sweep ("periodic table of complex systems," "atlas of complex systems," "taxonomy of complex systems" 2020s, complexity-atlas + LLM/2023-2026, Santa Fe Institute catalog projects) turned up **no matching prior art** for a structured, provenance-tagged, cross-domain complex-systems scoring panel. Adjacent-but-distinct hits, explicitly not matches:

- **The Atlas of Social Complexity** (Castellani, B. & Gerrits, L., Edward Elgar, 2023/2024) — organized as six transdisciplinary themes and 24 topics mapping the *field* of social-complexity research (a literature atlas / concept map), not a scored database of real systems.
- **The Atlas of Economic Complexity** (Hausmann, Hidalgo et al., Harvard Growth Lab) — single-domain (trade/product-space economic complexity index across ~250 countries), not cross-system in our sense.
- **Abasy Atlas** — biological gene-regulatory-network atlas only, out of our non-biological scope anyway.
- No LLM-era (2023–2026) preprint, workshop paper, or public GitHub repo was found attempting a multi-attribute, provenance-tagged, cross-domain complex-systems panel comparable to ours.

This absence is the strongest single signal in this sweep that our specific combination — fixed 30-column panel, anchored 0–4 rubrics, per-value provenance with read-status annotation, applied uniformly across non-biological systems from astrophysical to socio-economic to infrastructure categories, feeding PCA/clustering — is not a duplicate of an existing effort. Absence of evidence from search is not proof of absence, and a targeted arXiv/Google Scholar author-network search would be the next-best confirmation step if higher confidence is ever needed before public launch.

---

## Synthesis

### (1) The three closest relatives, ranked

1. **Ladyman, Lambert & Wiesner (2013) / Ladyman & Wiesner (2020)** — closest by *feature vocabulary*. Their necessary/sufficient feature analysis (nonlinearity, feedback, self-organization, robustness, decentralization, emergence, hierarchy, numerosity) maps almost column-for-column onto our Group C/F rubric axes, and we already cite their verdict directly in our filling_rules. But they never operationalize the checklist as data — no table, no scores, no named systems beyond one-off prose examples. They built the questionnaire; we are (as far as this sweep can tell) the first to administer it systematically.

2. **Chaisson's energy rate density program** — closest by *method discipline applied to non-biological systems specifically*. It is a real, load-bearing, citable cross-system quantitative comparison spanning our exact category range (astrophysical through cultural), which is why it is one of our 30 columns rather than a rival instrument — but it is one column, not thirty, and carries no rubric/qualitative layer at all.

3. **Newman (2003) Table II / the network-science comparative-table genre** — closest by *format* (literally a table: systems as rows, quantitative attributes as columns, with citations). It is the closest thing to a "prior panel" that exists, and we already draw one datum from it. But it is topology-only — a proper subset of our Group B, with zero coverage of dynamics, information, adaptation, or emergence, which is most of what our panel measures.

Honorable mention, methodological rather than complexity-science: **Seshat: Global History Databank**, for provenance/uncertainty-tagging discipline at real database scale (~400 cases × 500 variables) — the best model in this sweep for what a mature, scaled-up version of our own provenance system could look like, even though its domain (historical polities) barely overlaps ours.

### (2) Positioning statement

What is genuinely new here is not any single ingredient — energy-rate-density comparison, feature checklists, anchored rubric scoring, and provenance-tagged cross-case databases all pre-exist us individually — but their **combination and discipline**: a *fixed, frozen, multi-column panel* (30 columns spanning identity/scale through emergence/robustness) applied *uniformly* across *heterogeneous non-biological real systems* (not one domain, not toy models), with *every value's provenance and evidential status declared* (measured / measured-untested / measured-disputed / derived / qualitative / unknown, plus primary-read/snippet-verified/unverified citation tagging), *rubric scores anchored against worked 0–4 examples* so they are commensurable rather than impressionistic, feeding an *actual statistical analysis* (PCA, clustering, correlation) that treats the panel as real data rather than illustrative prose. Ladyman/Lambert/Wiesner supply the feature ontology; Chaisson supplies one rigorously cross-system quantitative column; Newman-style network tables supply the tabular format precedent for a subset of structural columns; Seshat supplies the provenance-discipline-at-scale precedent. Nobody found in this sweep put all four together and ran the numbers. That said, this positioning claim should be read as "no prior art found in a focused sweep," not as an exhaustive literature-clearance guarantee — see the scoop-risk note below.

### (3) Scoop risk

**None found.** No direct scoop. The nearest thing to a warning sign is soft: LLW/Ladyman & Wiesner's feature list is close enough to our rubric-column set that a careful reader could ask "didn't they already do this conceptually?" — the honest answer, worth stating explicitly on a future methods/related-work page, is that they proposed the dimensions and argued about their logical status; we are the first (found in this sweep) to anchor them into a scored, cited, multi-system dataset. This is a genuine risk only in framing, not in substance — it should be addressed head-on in the related-work section rather than left for a reviewer to notice, since the resemblance is real and would look evasive if unacknowledged.
