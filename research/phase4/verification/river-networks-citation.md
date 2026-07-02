# Citation Check — river-networks

Checker: adversarial citation verification. Target: `N:\coc\data\classes\river-networks.yaml`.
Reference docs: `schema/panel-spec.yaml`, `schema/anchors/*.yaml` (15 files), `docs/schema.md`,
`docs/roster.md`, `research/phase4/river-networks-sources.md`.

Method: web-verified load-bearing quantitative citations and cross-checked the 8 rubric/hybrid
columns whose entry text is "reused verbatim" from a `schema/anchors/*.yaml` anchor, against the
actual anchor file text. A search snippet alone is not treated as PASS; independent
corroboration across >=2 sources, or a directly-fetched primary/near-primary document, is
required for PASS. Verdicts: PASS / PARTIAL / UNVERIFIABLE / FAIL.

---

## 1. Anchor-reuse verbatim checks (8 columns claim "reused verbatim" or scored against a named anchor)

| Column | Anchor file | Verdict | Note |
|---|---|---|---|
| tipping_transitions | tipping_transitions.yaml:111-127 | PASS | Entry justification text matches the anchor almost word-for-word (paraphrased, same content, same score 2, same OCRS/Atchafalaya reasoning). |
| criticality | criticality.yaml:144-160 | PASS | Entry matches anchor almost verbatim, score 0, same "static topological vs. event-statistics" distinction. |
| information_processing | information_processing.yaml:126-143 | PASS | Score 1, same superelevation-ratio/fault-threshold analogy, matches anchor closely. |
| cascade_susceptibility | cascade_susceptibility.yaml:114-132 | PASS | Score 1, same Old River Control Structure / Bonnet Carre / Morganza framing, matches anchor. |
| modularity | modularity.yaml:90-110 | PASS | Score 2, same sub-basin (Missouri/Ohio/Upper Mississippi/Arkansas-White-Red) reasoning, matches anchor. |
| chaos_sensitivity | chaos_sensitivity.yaml:181-203 | PASS (with one internal inconsistency, see Sec. 3) | Anchor score is **1**; entry attributes chaos_sensitivity **score 1** as well — consistent (the anchor and the entry both score 1; my first read mis-stated this as an anchor/entry mismatch and was corrected on re-check of the entry text at line 356). |
| adaptive_capacity | adaptive_capacity.yaml:48-58 | PASS | Score 1, "structural accommodation counts at most 1," matches anchor verbatim in substance. |
| self_organization | self_organization.yaml:31-40 | PASS | Score 4, same "no template specifies the branching structure" reasoning, matches anchor. |
| decentralization | decentralization.yaml (stars comparator, not a river-networks anchor) | PASS | River-networks has no dedicated decentralization anchor; entry correctly uses the stars/Sun anchor (score 4, "nothing to remove whose absence would constitute loss of control") as the stated comparator, and this is an accurate paraphrase of that anchor's text. |

All 8-9 anchor-linked rubric/hybrid columns check out: the entry's prose is a faithful
representation of the actual anchor file content, not a fabricated or drifted paraphrase.

## 2. Quantitative citation web-verification

### rigon1996 — Rigon et al. (1996), "On Hack's Law," WRR 32(11), 3367-3374
- Fetched the actual PDF (hydrology.usu.edu/dtarb/96WR02397.pdf) and extracted full text.
  **CONFIRMED primary-read is genuine** — the "[PRIMARY-READ IN FULL this sweep]" tag on this
  source is accurate; the paper was actually opened and its content matches usage.
- Confirmed exact matches to entry text:
  - "L = 1.4A^0.6" (Hack 1957 original relation) — verbatim in the paper's eq. (1). PASS.
  - Muller (1973) exponent 0.6 / 0.5 / 0.47 by basin-size class (thresholds 8,000 mi^2 /
    10^5 mi^2, i.e. 20,720 km^2 / 259,000 km^2) — verbatim match to entry's
    `emergent_phenomena` Hack's-law order_parameter text. PASS.
- **FAIL/PARTIAL — misattribution:** rigon1996 is also listed in `sources:` for
  **`spatial_extent`** (line 83) and **`numerosity`** (line 107). The paper is entirely about
  Hack's law (length-area scaling) for basins in the 50-2000 km^2 range; it contains **no
  mention of the Mississippi, no drainage-area figures, no total stream-segment counts, and no
  discussion of Horton bifurcation/length ratios (R_B, R_L)** — confirmed by full-text search of
  the extracted PDF text (zero hits for "bifurcation," "R_B," "Mississippi," "segment," "stream
  order"). The entry's own `method:` prose for both columns correctly attributes the actual
  numbers to `mississippi-usgs-wikipedia` (spatial_extent) and to Horton's law +
  `moussa2009`/`rodriguez-iturbe-rinaldo1997`-derived R_B (numerosity) — rigon1996 contributes
  nothing to either value. This is a source-list padding error: citing a genuinely-read,
  on-topic paper as support for values it does not contain. Severity: fix (not blocker — the
  paper is real, on-topic for the class, and correctly used elsewhere; it is simply
  over-attached to two columns it doesn't support).

### mississippi-usgs-wikipedia (drainage area, channel length, discharge)
- Fetched en.wikipedia.org/wiki/Mississippi_River directly.
- Drainage area with Atchafalaya: confirmed 1,245,000 mi^2 / 3,220,000 km^2 (entry: ~3.2e6
  km^2). PASS.
- Drainage area, mainstem alone: confirmed 1,151,000 mi^2 / 2,980,000 km^2 (entry: ~2.98e6
  km^2). PASS.
- Mainstem length from Lake Itasca: Wikipedia currently gives 2,340 mi (3,766 km) in one place
  and "2,350 mi (3,782 km)" in another (the article carries both figures in different
  infobox/body locations). Entry states 3,782 km. **PARTIAL** — the entry's figure is one of two
  slightly different figures the source itself carries (3,766 vs 3,782 km, a ~16 km / 0.4%
  discrepancy); not wrong, but the source is not internally uniform on this exact number.
- Length from Brower's Spring (Missouri headwater), "4th-longest river system": confirmed 3,710
  mi / 5,971 km. PASS, exact match.
- Discharge at Delta (with Atchafalaya): confirmed 21,300 m^3/s (673 km^3/yr), 1980-2021. PASS.
- Discharge at St. Louis: confirmed 5,680 m^3/s (200,500 cfs), 1933-2024. PASS.
- Discharge at Vicksburg: confirmed 20,910 m^3/s. PASS (this figure appears only in the sweep
  doc, not load-bearing in the entry itself).
- Discharge at Baton Rouge: Wikipedia currently gives 16,570 m^3/s (585,100 cfs); the sweep doc
  (research/phase4/river-networks-sources.md) records 16,800 m^3/s — a ~1.4% discrepancy,
  probably a stale/rounded pull. **Not load-bearing in the entry itself** (the entry's only
  quantitative use, in `openness_dissipation`, cites the range "5,680-21,300 m^3/s," which is
  the St Louis-to-Delta span and is exactly correct) — noted for the record, not a live entry
  defect.

### mississippi-delta-wikipedia (delta lobe-switching, delta plain age)
- Fetched en.wikipedia.org/wiki/Mississippi_River_Delta directly.
- Lobe-switching/avulsion cycle "~1,000-1,500 years": confirmed verbatim — "the river avulsed
  its course in search of a shorter route to the Gulf of Mexico approximately every 1,000-1,500
  years." PASS.
- Modern delta plain age "~4,500 yr": confirmed verbatim — "formed over the last approximately
  4,500 years." PASS.
- **FAIL — Holocene delta plain age:** entry's `characteristic_timescales` states "~7,000 yr
  (Holocene delta plain since post-glacial sea-level stabilization)." The cited source
  (Wikipedia "Mississippi River Delta") actually states: "The modern day Mississippi River Delta
  plain began to evolve during the Holocene Epoch (around **7,500 to 8,000 years ago**) due to
  the deceleration of sea level rise." The entry's "~7,000 yr" figure is below the source's
  stated 7,500-8,000 yr range — a genuine, non-trivial (7-14%) undershoot of the source's own
  number, not a rounding artifact. Severity: fix.
- **FAIL — Frazier 1967 attribution:** the entry's `characteristic_timescales` note and the
  `mississippi-delta-wikipedia` source citation both state the lobe-switching figure traces to
  "secondary aggregation of Frazier (1967) and Kolb & Van Lopik (1958)" and flag Frazier as
  "[unverified] primary ... citation not directly read this sweep." Direct fetch of the current
  Wikipedia "Mississippi River Delta" article's reference list shows **Kolb & Van Lopik (1958)
  is cited, but Frazier (1967) is not mentioned anywhere in the article**. The entry cites a
  source for an attribution the source does not actually make. This may reflect a since-edited
  Wikipedia page (the sweep was conducted at an earlier point) rather than a fabrication by the
  drafting agent, but as it stands today the citation does not support the Frazier attribution.
  Severity: fix (the underlying lobe-switching NUMBER is independently confirmed correct; only
  the author-attribution chain is unsupported by the cited page as it currently reads).

### flood-power-law-hydrology (extreme_event_statistics)
- Identified via independent web search as Malamud, B.D. & Turcotte, D.L. (2006), "The
  applicability of power-law frequency statistics to floods," Journal of Hydrology 322, 168-180
  — this author/year attribution, which the entry itself flags "[unverified]... likely Malamud &
  Turcotte, not independently confirmed," is now **independently corroborated** by a search hit
  giving the exact volume/page numbers. Upgrade candidate: this attribution can now be
  considered snippet-confirmed via an independent source (not full-text primary-read).
- Alpha range "0.27-0.90" and drainage areas "41-95,300 km^2" across six USGS gauges: confirmed
  via an independent search summary quoting the paper's methods almost verbatim ("power-law
  exponent alpha ranged from 0.27 to 0.90... drainage areas examined ranged from 41 to 95,300
  km^2"). PASS on the numeric range itself.
- **FAIL — "Mississippi-specific alpha: unknown" / "six non-Mississippi-specific US gauges":**
  independent web search identifies the six gauge stations used in Malamud & Turcotte (2006) as:
  Arroyo Seco (CA), Mora River (NM), Wenatchee River (WA), Elkhorn River (NE), Humboldt River
  (NV), and **"Mississippi River at St Paul, MN."** One of the six stations in this exact,
  cited study **is a Mississippi River (mainstem) gauge.** The entry's characterization — "six
  US gauge stations" described as producing a range "Mississippi-specific alpha: unknown" and
  the sources doc's phrase "six non-Mississippi-specific US gauges" — mischaracterizes the
  study's own station list. A Mississippi-specific alpha value likely does exist within this
  cited source (the individual station-level alpha for St Paul, MN was not extractable from
  available web access in this check — paywalled full text — so the exact number remains
  UNVERIFIABLE), but the entry's blanket claim that no Mississippi-specific figure exists in
  this literature, or that all six gauges are non-Mississippi, is not supported and is
  contradicted by the station list itself. Severity: fix (the aggregate 0.27-0.90 range and
  drainage-area figures are still correctly reported as a class/instance-level range; the defect
  is the false "no Mississippi station in this study" framing, which should be corrected to
  "one of the six stations is a Mississippi River gauge at St. Paul, MN; the station-specific
  alpha for that gauge was not extracted in this sweep" rather than implying no Mississippi data
  exists in the cited literature at all).

### hurst1951 / danube-hurst (temporal_correlation)
- Nile Hurst exponent "H ~ 0.79 (R/S) to 1.02 (DFA)": independently corroborated by a separate
  web search hit quoting "Hurst exponents ranging from 0.79 (R/S) to 1.02 (DFA)" for Nile River
  discharge from a comparative multi-method table (a different paper than Hurst 1951 itself,
  consistent with the entry's own flag that these values trace to "a comparative Hurst-exponent
  table," not Hurst's original papers). PASS at the snippet-corroboration level the entry
  itself claims (entry marks this evidence_status: measured, confidence: low, with an explicit
  "primary Hurst papers not directly read" flag — the entry's own epistemic humility here is
  accurate and appropriately hedged, not overclaimed).
- Danube discharge "H in range 0.67-0.85": could not independently corroborate the exact number
  in this check (arXiv PDF fetch of the cited preprint failed to yield readable text; only a
  binary/compressed stream was returned). **UNVERIFIABLE** in this pass — not contradicted, but
  not confirmed either. The entry already marks this snippet-verified/not-primary-read, so the
  entry's own epistemic status is not overclaimed; recorded as UNVERIFIABLE rather than FAIL.

### cerbelaud2024 (characteristic_timescales — peak-flow event duration)
- Independently confirmed via a second, distinct search hit (a different source page,
  acerbelaud.com publications listing) quoting: "Peak flow events in the Mississippi basin range
  from 2 days upstream to 30 days downstream, exhibiting acute spatial variability" — this is a
  near-exact match to the entry's phrasing, including the specific term "acute spatial
  variability." PASS — now corroborated by two independent sources (AGU abstract summary +
  author's own publication page), stronger than mere single-snippet verification, though still
  short of a full-text primary read (the AGU/Wiley PDF returned HTTP 403 in this check).

### irbr2018 (instance_population — 310 international river basins, 47.1%)
- Fetched the McCracken & Wolf (2019) PDF directly (programme.worldwaterweek.org host) — this is
  the primary source itself, not a secondary aggregator. **Confirmed directly from the primary
  document**: 310 international/transboundary river basins in the 2018 register, covering 47.1%
  of Earth's land surface excluding Antarctica, with prior counts of 263 (2002) and 214 (1978)
  also confirmed. PASS at primary-read level — stronger evidence status than the entry's own
  "snippet-verified... not primary-read of the full register document" self-assessment; this
  check upgrades the effective verification status of this specific figure to primary-read
  equivalent, though the entry's own conservative self-labeling is not a defect (it is
  appropriately cautious, just now superseded by this check's stronger result).

### strahler-wikipedia (hierarchy_depth — Strahler order 10)
- Fetched Wikipedia "Strahler number" directly. Confirmed: "The Mississippi River is of order
  10" and Amazon at order 12. PASS on the core numeric claim (hierarchy_depth value: 10).
- The entry's fuller claim — "one of only ~3 tenth-order-or-higher independent rivers reaching
  the sea globally (alongside the Amazon at order 12 and the Niger)" — is supported only at
  snippet level by a different secondary source (not the specific Wikipedia page fetched in this
  check), which states "only three of the 10th order streams are independent rivers flowing to
  the sea, the Mississippi being one of them and the Niger." Two minor looseness points, both
  PARTIAL-grade rather than FAIL: (a) the source's phrase is "10th order streams," not "10th
  order **or higher**" — literally, the Amazon (order 12) would not be counted among "the three
  10th order rivers" under the source's own wording, making the entry's parenthetical "alongside
  the Amazon at order 12" a slightly imprecise gloss of a claim about order-10-exactly rivers;
  (b) this supporting claim itself was not independently verified against a primary hydrology
  source, only a secondary snippet. Net: the load-bearing numeric value (order 10 for the
  Mississippi) is solidly confirmed; the surrounding "~3 globally" framing is snippet-level and
  slightly loosely worded. Severity: note.

### chaisson2011 (energy_rate_density)
- Cross-checked against this project's own `research/phase1/quantitative-backbone.md` (line 75):
  confirmed the exact quoted text — "Mississippi (not found)... Directly computed,
  system-specific Φ_m values exist for only 1 of our 10 pilots (the Sun)." The entry's claim
  that no Phi_m value exists for the Mississippi/river networks is accurately sourced to this
  project's own prior primary-read report. PASS.

## 3. Internal consistency spot-check (secondary to citation task, flagged where found)

- `chaos_sensitivity`: entry score is 1 (data/classes/river-networks.yaml line 356), matching
  chaos_sensitivity.yaml's river-networks anchor entry (score 1, lines 181-203) exactly. No
  discrepancy found on final check (an intermediate reading of this checker's own notes
  momentarily suggested a mismatch; corrected after re-reading both files side by side).

## Summary of verdicts

| Claim | Verdict |
|---|---|
| rigon1996 primary-read status | PASS (genuine) |
| rigon1996 as source for spatial_extent, numerosity | FAIL (misattached — paper doesn't contain these values) |
| Hack's law L=1.4A^0.6, Muller 1973 0.6/0.5/0.47 | PASS (primary-read confirmed) |
| Mississippi drainage area 3.2e6 / 2.98e6 km^2 | PASS |
| Mainstem channel length 3,782 km | PARTIAL (source carries both 3,766 and 3,782 km) |
| Mainstem length via Brower's Spring 5,971 km | PASS |
| Discharge range 5,680-21,300 m^3/s (as used in entry) | PASS |
| Delta lobe-switching cycle ~1,000-1,500 yr | PASS |
| Modern delta plain age ~4,500 yr | PASS |
| Holocene delta plain age ~7,000 yr | FAIL (source says 7,500-8,000 yr) |
| Frazier 1967 attribution via mississippi-delta-wikipedia | FAIL (source doesn't mention Frazier) |
| Flood alpha range 0.27-0.90, drainage 41-95,300 km^2 | PASS |
| "Six non-Mississippi-specific gauges" / "Mississippi alpha unknown" | FAIL (one of the six IS a Mississippi River gauge; entry's framing is contradicted) |
| Nile Hurst H 0.79 (R/S) to 1.02 (DFA) | PASS (independently corroborated) |
| Danube Hurst H 0.67-0.85 | UNVERIFIABLE |
| Cerbelaud 2024 peak-flow duration 2-30 days | PASS (independently corroborated) |
| 310 international basins, 47.1% land surface | PASS (primary-source-read in this check) |
| Strahler order 10 for Mississippi, order 12 Amazon | PASS |
| "~3 tenth-order rivers globally" framing | note (slightly loose wording vs. source) |
| chaisson2011 "Mississippi not found" | PASS (matches this project's own primary-read report) |
| 8 anchor-reused rubric/hybrid columns | PASS (all match anchor files) |
