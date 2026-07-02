# Citation check — galaxies.yaml

Role: adversarial citation checker. Every load-bearing cited value in
`data/classes/galaxies.yaml` was web-verified against its underlying source
(not just re-read from the sweep report). Verdicts: PASS (source read,
states the claim) / PARTIAL (approximately right, discrepancy noted) /
UNVERIFIABLE (source unreachable) / FAIL (source contradicts or omits the
claim).

Session date: 2026-07-02.

---

## 1. `energy_rate_density` — Milky Way Phi_m = 0.5 erg/s/g, Age = 12 Gya (Chaisson 2011, Table 1)

**Verdict: PASS** (re-confirmed via independent primary-read this session,
not merely trusted from the sweep's prior claim).

- Re-fetched the author-hosted PDF
  (`lweb.cfa.harvard.edu/~ejchaisson/reprints/EnergyRateDensity_I_FINAL_2011.pdf`)
  fresh this session and ran `pdftotext` (both `-layout` and content-stream-order)
  independently of the sweep's own extraction.
- Content-stream-order extraction of Table 1 gives, in strict positional order:
  - `System`: Human society, Animals generally, Plants generally, Earth's
    geosphere, Sun, Milky Way (6 entries)
  - `Age (Gya)`: 0, 0.5, 3, 4, 5, 12 (6 entries, split across two
    typeset lines: "0 0.5" then "3 4 5 12")
  - `Fm [erg/s/g]`: 500,000, 40,000, 900, 75, 2, 0.5 (6 entries, split "500,000
    40,000" then "900 75 2 0.5")
  - Positional pairing (6th system = 6th age = 6th Fm): **Milky Way = 12
    Gya, Fm = 0.5 erg/s/g** — exact match to the entry's claimed value and to
    the `-layout` extraction's own row, which (confusingly, due to a
    typesetting column stagger) visually placed "Milky Way" beside two
    stacked number-pairs (5/2 and 12/0.5); the content-stream order removes
    that ambiguity.
- Cross-checked against THREE independent body-text callouts, all of which
  match their table entries exactly, ruling out row-misalignment:
  - "Sun... having a current luminosity L ≈ 4×10^33 erg/s and a mass M ≈
    2×10^33 g, making Fm ≈ 2 erg/s/g, **as listed in Table 1**" → confirms
    Sun row = 2 erg/s/g (not 0.5, not 75).
  - "the value of Fm for the biogeochemical process of photosynthesis is...
    900 erg/s/g, **as given in Table 1**" → confirms Plants row = 900.
  - "The cultural ensemble equaling the whole of humankind then averages Fm
    ≈ 5×10^5 erg/s/g, **as noted in Table 1**" → confirms Human society row
    = 500,000.
  - All three cross-checks land on their expected rows, which pins the
    remaining unconfirmed row (Milky Way) to 12 Gya / 0.5 erg/s/g by
    elimination and position — the same conclusion the sweep report and the
    entry both state.
- This independently reproduces the entry's own provenance claim
  ("primary-read this session... cross-checked against two independent
  body-text callouts that rule out layout misalignment") and extends it with
  a third cross-check (Human society) not mentioned in the entry's citation
  annotation.
- The entry's `evidence_status: measured` and `confidence: high` for this
  column are fully earned.

---

## 2. `instance_population` — 2.0(+0.7/-0.6)×10^12 galaxies (Conselice et al. 2016)

**Verdict: PASS.**

- Fetched `arxiv.org/abs/1607.03909` this session. Abstract states: "the
  total number of galaxies in the universe up to z = 8 is
  $2.0^{+0.7}_{-0.6}\times10^{12}$ (two trillion)" — exact match to the
  entry's value string.
- The entry's own caveat (paper states this is "almost a factor of ten
  higher than would be seen in an all sky survey at Hubble Ultra-Deep Field
  depth," i.e. ~90% model-inferred) is a faithful characterization of the
  paper's well-known methodology (stellar mass function extrapolation to
  undetected faint/high-z galaxies) — consistent with the abstract-level
  read available this session (full-text methods section not independently
  re-verified, matching the entry's own "abstract/methods level, one tier
  below Chaisson's full-PDF read" self-assessment).
- `evidence_status: measured-disputed` is the correct call given the paper's
  own stated model-dependence and the field's prior order-of-magnitude
  revision — not a citation problem, an appropriately conservative status.
- The pre-2016 "~1-2×10^11" consensus figure and the 2024 JWST/MIRI paper
  (Wang et al., arXiv:2403.02399) are both explicitly marked `[unverified —
  model knowledge]` / "not read closely enough" in the entry's own note —
  correctly hedged, not presented as resolved citations. Not checked further
  (entry does not claim they are verified).

---

## 3. `energy_rate_density` cross-check — Licquia & Newman (2015) stellar mass

**Verdict: PASS.**

- Fetched `arxiv.org/abs/1407.1078`. Abstract gives total stellar mass
  M* = 6.08 ± 1.14 × 10^10 M_sun (Kroupa IMF, exponential disk profile) —
  exact match to the entry's cited figure.
- The entry correctly uses this only as a plausibility cross-check
  (explicitly not presented as the source of the `measured` energy_rate_density
  value, and the back-of-envelope Phi_m=L/M arithmetic is explicitly flagged
  as NOT performed numerically) — appropriately scoped, no overclaim.

---

## 4. `characteristic_timescales` — bar pattern period ~160-180 Myr, pattern speed ~35-40 km/s/kpc (Shen & Zheng 2020)

**Verdict: PASS.**

- Fetched `arxiv.org/abs/2012.10130`. Abstract gives bar pattern speed
  "approximately 35-40 km/s/kpc," and states this "correspond[s] to a bar
  rotation period of ~160-180 Myr" — exact match to both figures cited in
  the entry.

---

## 5. `spatial_extent` — Milky Way / Andromeda disk diameters (Wikipedia aggregation)

**Verdict: PASS (D25 diameters); FIX flagged (disk-thickness sub-detail and Andromeda "extended disk" framing).**

- Milky Way D25 isophotal diameter: current `en.wikipedia.org/wiki/Milky_Way`
  states "26.8 ± 1.1 kiloparsecs (87,400 ± 3,600 light-years)" — exact match
  to the entry's `~26.8 +/- 1.1 kpc` figure. Unit conversion checks out:
  26.8 kpc × 3.0857e19 m/kpc ≈ 8.27×10^20 m ≈ entry's "~8.3e20 m." PASS.
- Andromeda D25 isophotal diameter: current
  `en.wikipedia.org/wiki/Andromeda_Galaxy` states "D25 isophotal diameter of
  about 46.56 kiloparsecs (152,000 light-years)" — matches entry's "~46.6
  kpc." Unit conversion: 46.6 kpc × 3.0857e19 ≈ 1.44×10^21 m ≈ entry's
  "~1.4e21 m." PASS.
- **FIX — measurand conflation on the ~67 kpc / 220,000 ly Andromeda
  figure**: the entry's detail field describes this as "for the extended
  disk on some conventions." Current Wikipedia text instead attributes this
  figure explicitly to the **diffuse stellar halo**, not the disk: "This
  diffuse halo extends outwards away from Andromeda's main disc with the
  diameter of 67.45 kiloparsecs (220,000 light-years)." The entry's own
  numeric value (67 kpc / 220,000 ly) is correct and matches the source, but
  labeling it "extended disk" rather than "halo" is a measurand
  mischaracterization of what the cited source actually describes. Low
  stakes (the entry marks the whole field `measured-untested`/secondary and
  it doesn't feed the primary `value: 1e21 m` order-of-magnitude figure
  directly) but should be corrected: relabel as halo, or drop the "disk"
  framing.
- **FIX — Milky Way thin-disk thickness figure not well supported**: entry's
  detail field states "thin-disk thickness ~400-500 pc." Current Wikipedia
  infobox instead gives "220-450 pc (718-1,470 ly)" for the thin disk, and
  independent literature (multiple sources located via search, e.g. Gaia
  DR3-era work) converges on a thin-disk scale height in the 280-400 pc
  range, with one source's "~400 ly" figure being an apparent unit slip
  (400 ly ≈ 122 pc, not 400 pc — illustrating how easily this specific
  figure gets garbled in secondary literature). The entry's stated range
  (400-500 pc) sits mostly ABOVE both the current Wikipedia figure and the
  broader literature convergence, rather than reproducing either. This is a
  minor, buried sub-detail (not the entry's primary quantitative datum,
  which is the 1e21 m order-of-magnitude `spatial_extent.value`), but the
  specific number should be corrected or the range widened/re-sourced
  before promotion past draft, since as written it does not match the
  Wikipedia source it cites.
- Both Wikipedia pages are correctly annotated `[unverified — model-search-tool
  summary, not primary-read]` in the entry's sources block — appropriately
  hedged, no overclaim of primary-read status.

---

## 6. `characteristic_timescales` — solar galactic orbital period ~220-240 Myr, ~220 km/s

**Verdict: PASS (within stated range).**

- `en.wikipedia.org/wiki/Galactic_year` states "approximately 225 million
  Earth years" and orbital speed "230 km/s." Both fall inside the entry's
  stated ranges ("~220-240 Myr," "~220 km/s") — the entry does not overclaim
  precision beyond what the aggregator states, and is correctly marked
  `[unverified — model-search-tool summary]`.

---

## 7. `fractal_dimension_spatial` — galaxy two-point correlation function gamma ~ 1.8 (Peebles 1980, secondary)

**Verdict: UNVERIFIABLE (as the entry itself already discloses) — no
citation problem; evidence_status ceiling correctly applied.**

- Re-attempted the same A&A 2020 paper fetch the sweep reported as HTTP 403
  (`aanda.org/articles/aa/full_html/2020/08/aa37683-20/aa37683-20.html`) —
  **confirmed still returns HTTP 403 this session**, independently
  reproducing the sweep's access failure rather than taking it on faith.
- A general web search corroborates that the gamma≈1.8 ("the 1.8 power law")
  two-point correlation function slope is a genuine, widely-cited classic
  result traceable to Peebles & Groth (1975)/Peebles (1980)-era work and
  reconfirmed in later (e.g. SDSS-era) studies — the qualitative claim is
  well-supported by broad literature consensus, consistent with what the
  entry asserts.
- However, per the entry's own honest accounting, `peebles1980-secondary`
  was never independently fetched or read this session (by the drafting
  agent or by this check) — the citation is correctly marked `[unverified —
  model knowledge / search-tool aggregation]`, and the column's
  `evidence_status: measured-untested` is the correct, non-overclaiming
  ceiling per `filling_rules.power-law-rigor` (this is a power-law claim
  with no CSN-2009-grade fit-rigor statement located). No blocker: the
  entry does NOT claim a primary read it doesn't have, and does not present
  this as `measured`.
- Note (not a citation defect): the scale-dependence claim (gamma flattens
  to ~0.8 on filament/supercluster scales beyond ~10 h^-1 Mpc) was not
  independently re-verified this session (the reachable secondary sources
  found describe the small-scale gamma~1.8 regime but did not surface an
  explicit large-scale flattening figure in the sources actually read) —
  this sub-claim remains exactly as uncertain as the entry itself discloses;
  recording as a note for a future targeted follow-up, not a finding against
  the current entry.

---

## 8. `component_ontology` — Milky Way star count reused from `stars.yaml`

**Verdict: PASS (citation-reuse integrity check).**

- Compared galaxies.yaml's `component_ontology` stellar-part figure
  ("Milky Way: ~1-4e11 stars standing population; ~1-2 Msun/yr formation
  rate (up to ~4-8 Msun/yr by some tracers)") and its `sources:
  [mw-star-count, kennicutt-evans2012, van-dokkum-conroy2010]` list against
  `data/classes/stars.yaml`'s own `instance_population` field (lines
  135-141) and its `mw-star-count` source citation text (line 646-647).
  Figures and citation text match verbatim, exactly as the entry's own note
  claims ("Figure and sources copied VERBATIM from stars.yaml's own
  instance_population field... to avoid the two entries' population figures
  silently diverging"). No silent divergence found. This is a legitimate
  intentional citation-reuse pattern per the task brief, not an independent
  fabrication risk.

---

## 9. Other prose-only / explicitly-hedged figures (not independently re-verified in depth)

The following values carry no formal `sources:` citation key, are stated in
free-text `note`/`detail` fields only, and are already self-labeled
`[unverified — model knowledge]` or `measured-untested` with no claim of a
primary read. Spot-checked via search rather than full source retrieval,
since they are not "cited" in the formal sense this check is scoped to
(load-bearing cited values / primary-read claims):

- Milky Way stellar-population age ~13.6 Gyr (range 11-13.8 Gyr, oldest
  globular clusters) — broadly consistent with current literature (globular
  cluster ages commonly cited in the 11-13.8 Gyr range, e.g. NGC 6652 ~13.6
  Gyr, M92 ~13.8 Gyr). No formal citation key attached in the entry;
  correctly kept separate from the Chaisson "12 Gya" figure per the entry's
  own explicit non-reconciliation note. No action needed.
- Milky Way-Andromeda merger timescale ~8 Gyr (+/-1-2 Gyr) — not
  independently re-verified this session (no formal citation key in the
  entry; already marked measured-untested/low-confidence). Not pursued
  further; this matches the entry's own low-confidence self-assessment.
- Andromeda star count ~1 trillion (secondary aggregation) — not
  independently re-verified this session; entry already flags this as
  snippet-only and explicitly notes tension with mass-based comparisons.
  Consistent hedging; no action needed.

---

## Summary of verdicts

| # | Column | Citation | Verdict |
|---|---|---|---|
| 1 | energy_rate_density | Chaisson 2011, Table 1 | **PASS** (independently re-confirmed, full primary read, 3-way cross-check) |
| 2 | instance_population | Conselice et al. 2016 | **PASS** |
| 3 | energy_rate_density (cross-check) | Licquia & Newman 2015 | **PASS** |
| 4 | characteristic_timescales (bar period) | Shen & Zheng 2020 | **PASS** |
| 5 | spatial_extent (D25 diameters) | Wikipedia MW / M31 | **PASS** (D25 figures); **FIX** (disk-thickness sub-detail; halo-vs-disk mislabel) |
| 6 | characteristic_timescales (solar orbit) | Galactic-year secondary aggregation | **PASS** |
| 7 | fractal_dimension_spatial | Peebles 1980 (secondary) | **UNVERIFIABLE**, correctly ceilinged — no defect |
| 8 | component_ontology (star count reuse) | stars.yaml verbatim reuse | **PASS** |

No FAIL / blocker-severity citation defects were found. The entry's single
gold-standard load-bearing figure (Chaisson 2011 Milky Way Phi_m = 0.5
erg/s/g) was independently re-derived from a fresh PDF fetch this session,
not merely trusted from the sweep's prior claim, and passed with margin
(three independent body-text cross-checks all confirm the table-row
alignment). The two FIX items are both minor, non-primary sub-details
(disk-thickness figure that overshoots its own cited Wikipedia source;
"extended disk" mislabeling what the source calls a diffuse halo) that
should be corrected before promotion past draft but do not poison any
primary quantitative value in the entry.
