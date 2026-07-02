# Verification-debt sweep: Chaisson Table 1 (planetary-climate) & San Andreas b-value confirmation (earthquake-fault-systems)

Session date: 2026-07-02. Scope: two standing verification-debt items. No catalog entries edited — this is a log-only pass per task instructions; append-only YAML snippets are proposed below for the entry maintainers to apply.

---

## Item 1 — Chaisson 2010/2011 Table 1, geosphere Phi_m

**Target claim** (data\classes\planetary-climate.yaml, flags block ~lines 822-839, source entry `chaisson2011` ~line 726): geosphere Phi_m ~= 75 erg/s/g, from Chaisson, "Energy Rate Density as a Complexity Metric and Evolutionary Driver," *Complexity* 16(3):27 (2010/2011), DOI 10.1002/cplx.20323 ("Paper I"). Flagged because the Wiley page for Paper I returned HTTP 403 in Phase 4, and the only full text fetchable at that time was the distinct follow-up "Energy Rate Density II" (DOI cplx.20373), which does not contain a standalone geosphere entry.

**Access route used**: Eric Chaisson's own author-hosted reprints page at Harvard CfA. A direct WebSearch (not a generic Google query but a targeted search for the author's own site) surfaced the exact file:

`https://lweb.cfa.harvard.edu/~ejchaisson/reprints/EnergyRateDensity_I_FINAL_2011.pdf`

This is Paper I itself (confirmed by title page: "Energy Rate Density as a Complexity Metric and Evolutionary Driver / E. J. CHAISSON / Wright Center and Physics Department, Tufts University... and Harvard College Observatory"), distinct from the "Energy Rate Density II" galley also hosted on the same page. WebFetch returned only binary/undecoded content (the tool's HTML->markdown conversion failed on this PDF), so the raw PDF was saved locally and read with `pdftotext` (both `-layout` and default/content-stream-order modes) rather than WebFetch's built-in extraction. **This is a primary read of Paper I's own PDF**, not a snippet or secondary summary.

**Read-status: primary-read (full PDF text extracted and inspected directly).**

### The Table 1 alignment problem, and how it was resolved

`pdftotext -layout` visually mis-renders Table 1 because the source PDF is two-column and the table sits in the right column while body text flows in the left column at the same vertical position; the layout-preserving extraction interleaves them and produces a visually plausible but WRONG row alignment (it appeared to show "Earth's geosphere" paired with 900 and "Sun" paired with 75). This apparent mismatch could easily cause a careless reader to conclude the entry's ~75 erg/s/g geosphere figure was wrong (i.e., that it was actually the Sun's value).

Two independent checks resolved this:

1. **Content-stream-order extraction** (`pdftotext` without `-layout`, which follows the PDF's internal text-drawing order rather than guessing 2D layout) pulls the table as three clean column-blocks:

   ```
   TABLE 1
   Average Energy Rate Densities
   System
   Human society Animals, generally Plants, generally Earth's geosphere Sun Milky Way
   Age (Gya)
   0 0.5
   3 4 5 12
   Fm [erg/s/g]
   500,000 40,000
   900 75 2 0.5
   ```

   Concatenating each column top-to-bottom gives 6 systems paired 1:1 with 6 ages (0, 0.5, 3, 4, 5, 12) and 6 Fm values (500,000; 40,000; 900; 75; 2; 0.5):

   | System | Age (Gya) | Fm [erg/s/g] |
   |---|---|---|
   | Human society | 0 | 500,000 |
   | Animals, generally | 0.5 | 40,000 |
   | Plants, generally | 3 | 900 |
   | **Earth's geosphere** | **4** | **75** |
   | Sun | 5 | 2 |
   | Milky Way | 12 | 0.5 |

2. **Cross-check against the paper's own body-text callouts to Table 1**, which independently pin two of the six rows and disambiguate the alignment beyond doubt:
   - On the Sun: *"a typical G2-type star having a current luminosity L ~ 4x10^33 erg/s and a mass M ~ 2x10^33 g, making Fm ~ 2 erg/s/g, as listed in Table 1"* — confirms **Sun = 2 erg/s/g**, not 75.
   - On plants: *"the value of Fm for the biogeochemical process of photosynthesis is, again on average for the vast majority of Earth's plant life, 900 erg/s/g, as given in Table 1"* — confirms **Plants, generally = 900 erg/s/g**, not Earth's geosphere.

   Both quotes are primary-read, directly from the extracted body text of the same PDF, and both are 100% consistent with the corrected 1:1 alignment above — and neither is consistent with the visually-misleading `-layout` rendering.

   A full-document grep for "geosphere" found exactly one occurrence in the entire paper: the Table 1 system-name list itself. There is no dedicated body-text sentence discussing the geosphere row the way the Sun and plants rows are discussed — consistent with the entry's own flag noting the geosphere figure is not further elaborated/derived in text, only tabulated.

**Conclusion**: Table 1's correct row is **Earth's geosphere: Age = 4 Gya, Fm = 75 erg/s/g**. This reproduces and confirms the Phase 1 primary read exactly. The entry's existing value, framing ("whole-geosphere heat-flow proxy... a physically DIFFERENT quantity from solar throughput"), and citation are all correct as recorded. The Phase 4 "UNVERIFIABLE" annotation can now be upgraded to a genuine primary-read confirmation.

No contradicting figure was found anywhere else in the paper. The DOI (10.1002/cplx.20323), volume/issue/page (16(3):27), and "Paper I" identity are all confirmed from the PDF's own header/metadata (title page reproduces the article title, author, and affiliations verbatim as cited in the entry).

**VERDICT: RESOLVED-primary-read**

### Proposed append-only YAML snippet (planetary-climate.yaml)

To be appended under the existing `chaisson2011` source entry's citation annotation (do not rewrite the existing text — append a new sentence) and as a new `provenance.flags` follow-up note, and a new `fix_log` entry if/when a maintainer chooses to apply it:

```yaml
# --- proposed append to sources.chaisson2011.citation (append a sentence, do not remove existing text) ---
# ADDENDUM (2026-07-02, verification-debt sweep): Phase-4-and-later re-verification
# SUCCEEDED this session via the author's own hosted reprint —
# https://lweb.cfa.harvard.edu/~ejchaisson/reprints/EnergyRateDensity_I_FINAL_2011.pdf
# (Paper I itself, confirmed by title page; distinct from the 'II' galley on the same
# page). Primary-read via pdftotext content-stream-order extraction (the -layout mode
# visually misaligns this two-column PDF's Table 1 and must not be used for this table).
# Table 1 confirmed row-for-row: Human society 0 Gya/500,000 erg-s-1-g-1; Animals,
# generally 0.5 Gya/40,000; Plants, generally 3 Gya/900; Earth's geosphere 4 Gya/75;
# Sun 5 Gya/2; Milky Way 12 Gya/0.5. Cross-confirmed against two independent body-text
# callouts pinning Sun=2 erg/s/g and Plants=900 erg/s/g, which rules out the
# layout-tool's apparent (mis)alignment. Geosphere Phi_m ~75 erg/s/g is CONFIRMED,
# primary-read, full text (not the 'II' follow-up). See
# research/v0.2-sweep/verification-debt/chaisson-and-bvalue.md, Item 1.

# --- proposed new provenance.flags entry (append, keep prior flags intact) ---
    - column: energy_rate_density
      note: >
        RESOLVED 2026-07-02 (verification-debt sweep): the Chaisson geosphere
        Phi_m~75 erg/s/g figure, previously UNVERIFIABLE in Phase 4 due to a
        Wiley 403, has now been primary-read directly from Paper I's own PDF
        (Chaisson's author-hosted reprint at lweb.cfa.harvard.edu/~ejchaisson).
        Table 1 confirmed exactly: Earth's geosphere, Age 4 Gya, Fm = 75
        erg/s/g, cross-checked against two independent in-text callouts of
        the Sun's (=2) and Plants' (=900) Table 1 values, which also exposed
        and corrected a naive pdftotext -layout misreading of this
        two-column PDF's table. No further action needed on this citation;
        the earlier 'obtain institutional/library access' follow-up flag is
        superseded and can be closed.

# --- proposed new fix_log entry (append) ---
    - date: 2026-07-02
      by: verification-debt sweep agent
      changes:
        - "chaisson2011 / energy_rate_density: upgraded the geosphere Phi_m~75
           erg/s/g citation from Phase-1-primary-read-unreproduced (Phase 4
           UNVERIFIABLE annotation) to independently reproduced primary-read,
           via Chaisson's own author-hosted PDF of Paper I. See
           research/v0.2-sweep/verification-debt/chaisson-and-bvalue.md."
```

---

## Item 2 — San Andreas b-value confirmation pass

**Target claim** (data\classes\earthquake-fault-systems.yaml): b = 1.03 ± 0.12 primary-read from Page & Felzer (2015), *Southern San Andreas Fault Seismicity is Consistent with the Gutenberg-Richter Magnitude-Frequency Distribution*, BSSA 105(4), doi:10.1785/0120140340. Believed CLOSED; this is a confirmation-only pass.

Relevant entry locations checked:
- `criticality` (~line 493 area): cites b=1.03+/-0.12 (M>=2.5, within 20 km of SSAF, UCERF3 catalog, maximum-likelihood method), consistent with statewide b=1.0 (Hutton et al. 2010; UCERF3/Field et al. 2014) and b=0.95 (Tormann et al. 2010).
- `extreme_event_statistics` (~line 526): same b-value figure, restated as the G-R magnitude-frequency slope, `evidence_status: measured`, `confidence: high`.
- `sources.page-felzer-2015` (~line 792): "primary-read in full this session — full PDF text fetched and read directly."
- `provenance.flags` block (~line 922 onward): reviewed in full. No flag entry references the b-value as open, uncertain, or unconfirmed. The only fault-related flags concern *other* columns: `energy_rate_density` (derived/unsourced inputs), `fractal_dimension_spatial` (Aviles et al. 1987 inaccessible), `chaos_sensitivity` (Geller et al. 1997 snippet-only), `instance_population` (scoping ambiguity), `numerosity` (UCERF3 section counts snippet-only). The b-value itself is not among them.

**Access route used**: WebSearch located an author-hosted copy at Caltech: `http://www.its.caltech.edu/~pagem/PageFelzer2015.pdf` (Morgan Page's own page). WebFetch's HTML conversion failed on the binary PDF (as with Item 1), so the raw PDF was saved and read directly with `pdftotext`. **This is a primary read of the paper's own full text**, matching (and independently reproducing) the entry's own claimed primary-read status.

**Read-status: primary-read (full PDF text extracted and inspected directly).**

### Exact quote (body text, b-value section)

> "The b-value in southern California is difficult to estimate precisely because of network and processing changes over time. Catalog magnitudes are not perfect, and different estimates of b-value are quite commonly reported in the literature due to differences in the time period, region, and minimum magnitude used. For example, Hutton et al. (2010) obtain a b-value of 1.01 +/- 0.04 for M >= 4.2 between 1932-1980 and a b-value of 0.992 +/- 0.003 for M >= 1.8 between 1981-2008 for a well-instrumented region in the center of the Southern California Seismic Network. Tormann et al. (2010) examine seismicity inside a similar region... this recalibration changes the b-value estimate from 1.16 to 0.95. **When we examine the post-ML-recalibration seismicity from the UCERF3 catalog within 20 km of the SSAF, we estimate a b-value of 1.03 +/- 0.12 (for M >= 2.5) using the maximum-likelihood method (Aki, 1965; Shi and Bolt, 1982). This is consistent with both the statewide b-value of 1.0 (as seen by Hutton et al., 2010, and used by UCERF3, Field et al., 2014) and 0.95 (found by Tormann et al., 2010).**"

Every element the entry states is confirmed verbatim against this primary quote:

| Entry claim | Paper text | Match |
|---|---|---|
| b = 1.03 +/- 0.12 | "we estimate a b-value of 1.03 +/- 0.12" | Confirmed |
| M >= 2.5 | "(for M >= 2.5)" | Confirmed |
| within 20 km of SSAF | "seismicity from the UCERF3 catalog within 20 km of the SSAF" | Confirmed |
| UCERF3 catalog | "the UCERF3 catalog" | Confirmed |
| maximum-likelihood method | "using the maximum-likelihood method (Aki, 1965; Shi and Bolt, 1982)" | Confirmed |
| consistent with statewide b=1.0 (Hutton et al. 2010 / UCERF3 Field et al. 2014) | "consistent with... the statewide b-value of 1.0 (as seen by Hutton et al., 2010, and used by UCERF3, Field et al., 2014)" | Confirmed |
| consistent with b=0.95 (Tormann et al. 2010) | "and 0.95 (found by Tormann et al., 2010)" | Confirmed |

The reference-list entries for Aki (1965), Field et al. (2014, UCERF3, doi:10.1785/0120130164), and Felzer (2013, UCERF3 catalog appendix) were also located in the paper's bibliography, matching the entry's own citation chain exactly.

**Flags block re-check**: confirmed — no flag in the current `provenance.flags` list references the b-value, criticality event-statistics claim, or extreme_event_statistics as open/unresolved. The b-value is fully closed.

**VERDICT: CONFIRMED-CLOSED**

### Proposed append-only YAML snippet (earthquake-fault-systems.yaml)

```yaml
# --- proposed new fix_log entry (append) ---
    - "b-value confirmation pass (verification-debt sweep, 2026-07-02): re-fetched
       Page & Felzer (2015) full text independently via Morgan Page's own hosted PDF
       (its.caltech.edu/~pagem/PageFelzer2015.pdf) and re-confirmed verbatim: b =
       1.03 +/- 0.12, M >= 2.5, within 20 km of SSAF, UCERF3 catalog,
       maximum-likelihood method (Aki 1965; Shi & Bolt 1982), consistent with
       statewide b=1.0 (Hutton et al. 2010 / UCERF3 Field et al. 2014) and b=0.95
       (Tormann et al. 2010). No discrepancy found; entry's criticality and
       extreme_event_statistics columns require no change. See
       research/v0.2-sweep/verification-debt/chaisson-and-bvalue.md, Item 2."
```

No entry edits were made by this agent, per task instructions — only this log file was written.
