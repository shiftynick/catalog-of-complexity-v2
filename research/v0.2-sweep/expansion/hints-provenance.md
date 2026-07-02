# Hint-block provenance log — batch-1-v0.2 (global-economy, weather-systems, ocean-circulation, galaxies, world-wide-web)

Date: 2026-07-02. Scope: this is a provenance log for `.claude/workflows/batches/batch-1-v0.2.json`'s hint blocks — where each hinted value/claim came from, and its read-status. No catalog entries or other files touched. This is prep for the sweep agents, not the sweep itself; values below still need the sweep's own verification pass before entering a drafted entry.

---

## global-economy

- **Bettencourt et al. 2007 PNAS Table 1, GDP-scaling rows** (beta=1.15/1.26/1.13 for China/EU/Germany city-GDP scaling) — **primary-read in Phase 1**, `research/phase1/quantitative-backbone.md` lines ~135-166. Flagged in the hint as only indirectly relevant to global-economy (it's a city-level scaling exponent, already cities.yaml's own material) — included to warn against double-counting, not as a ready-to-use global-economy citation.
- **CSN 2009 firm-size Zipf** — status UNCONFIRMED. Phase 1's read of CSN's 24-dataset table (`quantitative-backbone.md`) captured country/city/word data explicitly but I did not find firm-size data confirmed present in that excerpt. Hint flags this as needing direct re-check against CSN's own Table 6.1, not an assumption either way.
- **Axtell 2001 (Science 293:1818, "Zipf Distribution of U.S. Firm Sizes")** — [unverified — model knowledge]. Not fetched or read by this project at any point. Named in the task brief as candidate canonical material; passed through as a lead only.
- **Hidalgo & Hausmann 2009 PNAS, economic complexity index** — [unverified — model knowledge]. Not fetched or read by this project. Named in the task brief; passed through as a lead only.
- **World GDP ~1e14 USD, world primary energy ~6e20 J/yr** — [unverified — model knowledge], taken from the task brief's own seed figures. Not independently verified this session.
- **no-market-chaos precedent** — financial-markets.yaml's existing `chaos_sensitivity` column ("nonlinear dependence: yes, deterministic chaos: no evidence") is a real, already-verified entry in the catalog (checked via Bash grep of the relations blocks and Read of the file header this session) and is the correct anchor comparator per the task's filling-rules instruction; the hint asks the sweep to verify rather than assume the same verdict transfers to macro/business-cycle literature.
- **The singleton-vs-population atomicity question** is a genuine open call, not sourced from any document — flagged as the single hardest decision in the batch, modeled on the-internet.yaml's n=1 treatment (primary-read this session, full file).

## weather-systems

- **planetary-climate.yaml's component_ontology "weather systems" row** (`~85 named tropical storm-strength systems/yr globally`, tropical-cyclones-only, extratropical/synoptic counts "not recovered") — read directly from `data/classes/planetary-climate.yaml` lines ~171-175 this session. This is the entry's own numerosity gap, explicitly not to be filled by borrowing tropical-cyclones' figure.
- **Lorenz 2-week predictability horizon** (`~1.2-1.7e6 s`, sources charney1966 + mdpi2024-predictability) — reused verbatim from `data/classes/planetary-climate.yaml` lines ~114-118 and its `sources:` block (~lines 733-736). Planetary-climate's own citation annotations mark charney1966 as snippet-verified and mdpi2024-predictability as snippet-verified via WebSearch — neither is a full primary-read; the hint carries that status forward honestly rather than upgrading it.
- **Peters & Neelin 2006 (Nature Physics, doi:10.1038/nphys314)** — **primary-read this session** (via arXiv preprint cond-mat/0606076, text-identical to published version), logged in full at `research/v0.2-sweep/verification-debt/tropical-cyclones.md`, Item 3, Candidate B. Exact figures (beta=0.215+/-0.02, gamma/nu=1.54(4), 25-200km scale-free spatial correlations) are quoted directly from that log. The log's own finding — that this paper is general-tropical-convection, not TC-specific — is the basis for reassigning it to weather-systems in this hint.
- **Lovejoy 1982 (Science 216:185-187)** — **primary-read this session** (McGill author-hosted PDF), logged at `research/v0.2-sweep/verification-debt/tropical-cyclones.md`, Item 1. D=1.35 confirmed general tropical cloud/rain-field figure, explicitly not hurricane-specific per the paper's own text — same reassignment logic as Peters & Neelin.

## ocean-circulation

- **AMOC hysteresis ~0.4 Sv (van Westen & Dijkstra 2023, GRL, arXiv:2308.14098)** — reused verbatim from `data/classes/planetary-climate.yaml` lines ~523-543 and its `sources:` block. Status there is explicitly "snippet-verified via Phase 1 + this sweep's WebSearch; full arXiv PDF exceeded fetch-tool size limit, methods/results not primary-read" — carried forward unchanged, not upgraded.
- **AMOC threshold 1.4-8C sustained warming, part of the Armstrong McKay et al. 2022 16-element inventory** — reused from the same planetary-climate.yaml block, citing mckay2022 (Science 377:eabn7950), which planetary-climate.yaml records as primary-read in Phase 1.
- **RAPID-MOCHA-WBTS 26N AMOC strength (~15-20 Sv) and ~1 PW heat transport** — [unverified — model knowledge]. Not sourced from any file in this repo; flagged in the hint as needing a fresh citable fetch, not carried as confirmed.
- **Gulf Stream vs. AMOC disambiguation** — general domain knowledge, not sourced from a specific document; flagged as a scoping trap for the sweep to resolve explicitly in the scoping_note.

## galaxies

- **Chaisson Table 1, Milky Way Fm=0.5 erg/s/g, Age=12 Gya** — **primary-read and independently re-confirmed this session**, full detail at `research/v0.2-sweep/verification-debt/chaisson-and-bvalue.md`, Item 1 (Chaisson's own author-hosted PDF, `pdftotext` content-stream-order extraction, cross-checked against two independent in-text callouts of the Sun=2 and Plants=900 rows). This is the strongest, most load-bearing citation in the entire batch and is flagged as such in the hint.
- **stars.yaml's instance_population, Milky Way ~1-4e11 stars** — read directly from `data/classes/stars.yaml` lines ~135-140, sourced there to mw-star-count, kennicutt-evans2012, van-dokkum-conroy2010. Reused by reference (same figure, same sources) to keep the two entries from silently diverging, per the task's cross-entry consistency instruction.
- **Milky Way luminosity ~5e36 W** — [unverified — model knowledge], not sourced from any file; explicitly flagged in the hint not to be back-computed from the Chaisson Fm ratio and presented as independently measured.
- **Observable universe ~2e12 galaxies (Conselice et al. 2016, ApJ 830:83)** — [unverified — model knowledge], taken from the task brief's own seed figure. Not fetched or read by this project. Hint explicitly flags the older ~1-2e11 estimate as a competing figure and recommends measured-disputed pending verification, analogous to the-internet's connected-device-count treatment (a genuine structural analogy drawn from that entry, primary-read this session).
- **Galaxy correlation-function slope gamma~1.8** — [unverified — model knowledge], general cosmology-literature figure from training knowledge, not sourced from any file in this repo. Flagged as needing a citation, not asserted.

## world-wide-web

- **Newman 2003 Table II, WWW (nd.edu domain) and WWW (Altavista crawl) rows** — **primary-read in Phase 1**, transcribed in full at `research/phase1/quantitative-backbone.md` lines ~211-229 (part of the same Table II primary-read that grounds the-internet.yaml's own AS-level row, sources key `newman2003`, already a resolved citation in that entry). Both rows' exact figures (n, m, z, l, alpha in/out, C1, C2, r) are copied directly from that file into the hint, not re-derived.
- **the-internet.yaml's singleton-class framing and dual-atomicity precedent** — read in full this session (`data/classes/the-internet.yaml`, entire file). The hint's instruction to mirror its exemplars/instance_population structure is a direct structural citation to that entry, not an external source.
- **Broido & Clauset 2019 six-rung taxonomy and CAIDA AS-graph Weakest/Strong ~50/50 split** — **primary-read this session** (direct `pdftotext` extraction of the raw arXiv PDF, arxiv.org/pdf/1801.03400), logged in full at `research/v0.2-sweep/verification-debt/the-internet.md`, Item 2. The hint correctly notes this classification is for AS-graphs, not WWW hyperlink graphs, and instructs the sweep not to assume transfer without checking whether Broido & Clauset's corpus separately covers WWW/hyperlink networks.
- **Barabasi & Albert 1999 (Science 286:509)** — [unverified — model knowledge / not yet primary-read by this project]. Named as the historical origin of the ~2.1 WWW degree-exponent folklore; flagged as pre-CSN-2009 methodology requiring measured-untested status unless a CSN-grade re-test is located.
- **Kleinberg 1999 (JACM), HITS/hub-authority** — [unverified — model knowledge / not yet primary-read]. Passed through as a lead for modularity/hierarchy_depth, not a sourced claim.
- **Registered domains ~3.9e8 (DNIB, end 2025)** — reused from `data/classes/the-internet.yaml` (its own `numerosity` block, sources itu2025/dnib2025/apnic-huston), read this session. Hint explicitly raises the double-counting question between the two entries and asks the sweep to state the distinction rather than silently duplicate.
- **"Over 1 trillion unique URLs" (2008) and indexed-web-size tracking** — [unverified — model knowledge], general/training knowledge, not sourced from any file in this repo.

---

## Cross-cutting notes

- All five hint blocks explicitly instruct the drafting sweep to re-verify every `[unverified — model knowledge]` item before it can enter a drafted entry at anything above `evidence_status: qualitative`/`measured-untested`, per CLAUDE.md's non-negotiable conventions.
- Three values are flagged in this log as arguably mis-homed in existing verified entries and better suited to this batch's new entries (Peters & Neelin 2006 and Lovejoy 1982 -> weather-systems; AMOC hysteresis -> ocean-circulation as primary rather than secondary home). This is a hint for the sweep/drafting agents to consider, not a change made to any existing entry — no catalog file was edited during this task.
- Filling-rule landmines flagged per class: power-law-rigor (world-wide-web degree distributions, galaxies clustering exponent, global-economy firm-size Zipf), no-market-chaos (global-economy, by direct analogy to financial-markets), soc-two-claims (weather-systems criticality — event-statistics vs. mechanism-status are separate sub-claims).
