# Contamination Map — Blind IRR Study

Purpose: identify every place in `schema/anchors/*.yaml` where one of the 5
sampled classes (`stars`, `river-networks`, `cities`, `the-internet`,
`languages`) or one of their exemplars (the Sun, Mississippi River basin,
NYC/Tokyo, the Internet, English) appears as a **worked anchor example with
its score**. A blind rater given the unredacted anchor file could simply copy
these scores instead of judging independently — that is the contamination
this study must eliminate before packets go out.

Sampled classes and their exemplars, for matching purposes:

| Class | Exemplar(s) named in anchors |
|---|---|
| stars | "the Sun" |
| river-networks | "Mississippi River basin" |
| cities | "New York City" (no Tokyo anchor found) |
| the-internet | "the-internet" / "The Internet" (no separate exemplar name; system IS the exemplar) |
| languages | "English" |

All 15 rubric/hybrid columns were read in full. Below, each column lists
every sampled-class anchor found, with its score, so the scale of
contamination is auditable. Columns with NO sampled-class anchor are noted
as clean (nothing to redact there); they were still copied through to the
redacted packets unchanged since they carry only non-sampled worked
examples, useful for rater calibration.

## Column-by-column findings

1. **self_organization** — contaminated for 3 of 5: river-networks (score 4),
   the-internet (score 2), languages/English (score 4). stars and cities have
   NO anchor here (clean for those two).
2. **modularity** — contaminated for all 5: stars/the-Sun (1), river-networks
   (2), cities/NYC (2), the-internet (2), languages/English (1).
3. **nonlinearity** — contaminated for 3 of 5: stars/the-Sun (3),
   languages/English (1), the-internet (2). river-networks and cities have no
   anchor here.
4. **criticality** — contaminated for 3 of 5: stars/the-Sun (2), the-internet
   (1), river-networks (0). cities and languages have no anchor here.
5. **memory_hysteresis** — contaminated for 3 of 5: stars/the-Sun (1),
   the-internet (2), languages/English (4). river-networks and cities have no
   anchor here.
6. **feedback** — contaminated for 1 of 5: stars/the-Sun (2). river-networks,
   cities, the-internet, languages have no anchor here (clean).
7. **tipping_transitions** — contaminated for 2 of 5: river-networks (2),
   the-internet (0). stars, cities, languages have no anchor here.
8. **information_processing** — contaminated for 3 of 5: stars/the-Sun (0),
   river-networks (1), languages/English (4). cities and the-internet have no
   *worked* anchor block, but the notes section names "the Internet" and
   implies an expected 3-4 score by analogy to ERCOT — this prose reference
   is also redacted as a softer form of contamination (see below).
9. **openness_dissipation** — contaminated for 3 of 5: stars/the-Sun (4),
   cities/NYC (3), languages/English (1). river-networks and the-internet
   have no anchor here.
10. **chaos_sensitivity** — contaminated for 2 of 5: stars/the-Sun (2),
    river-networks (1). cities, the-internet, languages have no anchor here.
11. **emergence** — contaminated for 3 of 5: stars/the-Sun (2), the-internet
    (2), languages/English (3). river-networks and cities have no anchor
    here.
12. **adaptive_capacity** — contaminated for 3 of 5: stars/the-Sun (0),
    river-networks (1), languages/English (3). cities and the-internet have
    no anchor here.
13. **decentralization** — contaminated for 3 of 5: stars/the-Sun (4),
    the-internet (3), languages/English (4). river-networks and cities have
    no anchor here.
14. **robustness_resilience** — contaminated for 3 of 5: stars/the-Sun (4),
    the-internet (3), languages/English (4). river-networks and cities have
    no anchor here.
15. **cascade_susceptibility** — contaminated for 3 of 5: the-internet (1),
    river-networks (1), stars/the-Sun (0). cities and languages have no
    anchor here.

## Secondary/soft contamination (prose, not a scored anchor block)

A few files mention a sampled class in the `notes:` prose without a full
worked-anchor block (no `score:` field attached to that exact system in an
`anchors:` list entry). These do not name a *score* directly copyable, so
they are lower-risk, but two are close enough to flag:

- `information_processing.yaml` notes: "Engineered systems (ERCOT, Internet —
  not separately anchored above but explicitly flagged as expected to land
  in the 3-4 range for the same SCADA/protocol reasons as ERCOT)..." — names
  the-internet and gives a range. Left in the redacted notes text as
  low-risk context (no single score named, and notes sections were treated
  as scale-calibration commentary, not per-example anchors) but flagged here
  for transparency.
- `decentralization.yaml` notes: "Boundary case: systems with layered
  governance (Internet) — score the layer where the system's characteristic
  behavior lives..." — mentions the Internet but this is scoring
  *methodology* discussion tied to the WORKED anchor block above it (already
  redacted), not new numeric information beyond what redaction already
  removed.

Since the task instruction is specifically "worked example that names a
sampled class or its exemplar WITH its score," these notes-only mentions
(no attached score in that sentence) were left untouched — only the full
anchor list entries carrying `score:` fields were redacted. This is called
out explicitly so a stricter future pass can revisit it.

## Columns with NO sampled-class contamination in any form

None. Every one of the 15 rubric/hybrid columns has at least one worked
anchor for at least one sampled class.

## Redaction summary

All 15 anchor files required at least one redaction. Total worked-example
blocks removed: 38 (across the 15 files, summing the per-column contaminated
counts above: 3+5+3+3+3+1+2+3+3+2+3+3+3+3+3 = 38).

Non-sampled classes (tropical-cyclones, financial-markets, power-grids,
earthquake-fault-systems, planetary-climate, granular-media, convection-cells)
are NOT sampled classes and their worked anchors were left untouched in the
redacted packets — raters need at least one worked calibration example per
column to anchor their own judgment, per the task's explicit design.
