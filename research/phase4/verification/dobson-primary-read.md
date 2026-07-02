# Primary-read verification: Dobson, Carreras, Lynch & Newman (2007), Chaos 17, 026103

## Task
Settle a disputed exponent figure between:
- `schema/anchors/cascade_susceptibility.yaml` (power-grids anchor): "decay exponent roughly 1.3-2.0"
- `data/classes/power-grids.yaml` (extreme_event_statistics, criticality, cascade_susceptibility columns): "roughly -1 to -2"

Both prior readings were snippet-level; PDF text extraction had failed twice before this session.

## Method
1. WebSearch located a direct-hosted PDF at PSERC (University of Wisconsin document repository):
   `https://documents.pserc.wisc.edu/documents/publications/papers/2007_general_publications/Complex-Systems-Analysis-of-Series-of-Blackouts_Aug-2004.pdf`
   This is the companion conference-proceedings paper "Complex Systems Analysis of Series of Blackouts: Cascading Failure, Criticality, and Self-organization" (Bulk Power System Dynamics and Control VI, Cortina d'Ampezzo, Italy, Aug 22-27, 2004), by the identical author set (Dobson, Carreras, Lynch, Newman) and near-identical title/content to the Chaos 2007 journal article ("...critical points, and self-organization"). It is the same research program's canonical statement of the NERC power-law finding, pre-dating the journal version by ~3 years but reporting the same dataset, figure, and exponent range.
2. WebFetch's built-in HTML/PDF conversion failed to parse this PDF (returned "corrupted" text), but the raw PDF bytes were retrievable and saved locally (472 KB) via the tool's cache.
3. Copied the saved PDF into the scratchpad and ran `pdftotext -layout` directly (Bash tool, `/mingw64/bin/pdftotext` available on this system) — this succeeded cleanly, producing readable text (833 lines).
4. The official AIP Chaos 2007 PDF (`pubs.aip.org/aip/cha/article-pdf/...`) and Dobson's own iastate.edu publications page both returned HTTP 403 (paywalled/blocked to automated fetch). ResearchGate and Academia.edu mirror pages also returned 403 to WebFetch.
5. Cross-check: a WebSearch query targeting the Chaos 2007 abstract/content specifically (not the PSERC mirror) returned an independent search-engine synthesis of the actual journal paper's text, which reproduced the identical sentence verbatim (see below) — corroborating that the PSERC 2004 proceedings paper and the Chaos 2007 journal paper state the same exponent range in the same words.

## Verbatim text from the paper (PSERC-hosted PDF, extracted via pdftotext -layout)

Section "2.1 Power tails in North American blackout data":

> "We consider the statistics of series of blackouts. The North American Electrical Reliability Council (NERC) has a documented list summarizing major blackouts of the North American power transmission system from 1984 to 1998 [45]. It is apparent that large blackouts are rarer than small blackouts, but how much rarer are they? One might expect a probability distribution of blackout sizes to fall off at most exponentially as the blackout size increases. However, analyses of the NERC data show that the probability distribution of the blackout sizes does not decrease exponentially with the size of the blackout, but rather has a power law tail [15, 7, 8, 16]."

Figure 1 caption: "Log-log plot of scaled PDF of energy unserved during North American blackouts 1984 to 1998."

> "For example, Fig. 1 plots on a log-log scale the empirical probability distribution of energy unserved in the North American blackouts. **The fall-off with blackout size is close to a power dependence with an exponent between -1 and -2.** (A power dependence with exponent -1 implies that doubling the blackout size only halves the probability and appears on a log-log plot as a straight line of slope -1). Thus the NERC data suggests that large blackouts are much more likely than might be expected."

This exact range is restated later in section 4.2 when connecting the empirical finding to the CASCADE model's critical-loading simulation results:

> "If we interpret the number of components failed as corresponding to blackout size, the power law region is consistent with the North American blackout data discussed in section 2. In particular, **North American blackout data suggest an empirical distribution of blackout size with a power tail with exponent between -1 and -2.** This power tail indicates a significant risk of large blackouts that is not present when the distribution of blackout sizes has an exponential tail."

## Distinguishing the empirical exponent from the model exponent (important — source of possible confusion)

The paper reports a **second, different exponent** that is NOT the NERC empirical fit: the CASCADE model's own simulated critical-loading distribution (number of components failed, not real blackout size/energy) has:

> "...the distribution for the critical case L = 0.8, np = 1 has an approximate power law region over a range of S. The power law region has an exponent of approximately -1.4 and this compares to the exponent of -1.5 obtained by the analytic approximation..."

and separately, the branching-process approximation:

> "the probability distribution of the total number of failures has a power law form with exponent -1.5."

These -1.4/-1.5 figures describe the **CASCADE simulation model's** component-failure-count distribution at criticality (and its branching-process analytic approximation), used as a theoretical cross-check that the model reproduces power-law behavior of roughly the right shape — they are explicitly NOT the fitted exponent of the real NERC dataset. The paper is careful to keep these separate: the empirical NERC/unserved-energy fit is always stated as "between -1 and -2," and the -1.4/-1.5 figures are only ever attached to the CASCADE model and branching-process theory. No fitted point estimate (e.g., a single number with error bars) for the empirical NERC data is given anywhere in the paper — only the range "-1 to -2."

## Answers to the specific questions

- **Probability-distribution form stated by the paper**: a power-law tail — "the probability distribution of the blackout sizes does not decrease exponentially... but rather has a power law tail." Not framed as P(S) ~ S^-alpha explicitly with a named alpha; the paper writes it as "a power dependence with an exponent between -1 and -2," i.e., the exponent is presented as **negative** (a decaying power dependence), consistent with the standard P(S) ~ S^(exponent) convention where exponent is negative, NOT the alternative convention (used in the cascade_susceptibility.yaml anchor) of stating a positive "decay exponent" magnitude alpha with an implicit "S^-alpha."
- **Fitted exponent value/range, paper's own sign convention**: "an exponent between -1 and -2" (equivalently, in |alpha| terms, magnitude 1 to 2) — stated identically in two places in the paper (section 2.1, on the empirical data; section 4.2, restating the empirical finding). No tighter point estimate or confidence interval is given; it is presented as an eyeballed log-log-plot fall-off range, not an MLE fit.
- **Dataset**: North American NERC blackout list, **1984 to 1998**, measure = **energy unserved (MWh)** — per Fig. 1's caption and axis label ("Blackout size (MWh)"). Not MW lost, not customers disconnected (those measures are mentioned elsewhere in the paper only in connection with the Stubna & Fowler HOT-model literature review, not this fit).
- **Verbatim exponent sentence**: "The fall-off with blackout size is close to a power dependence with an exponent between -1 and -2." (restated as "an empirical distribution of blackout size with a power tail with exponent between -1 and -2").

## Verdict

**`data/classes/power-grids.yaml`'s phrasing ("roughly -1 to -2") is correct and matches the paper's own words and sign convention almost exactly.**

**`schema/anchors/cascade_susceptibility.yaml`'s phrasing ("decay exponent roughly 1.3-2.0") is wrong** — it appears to have taken the paper's exponent *magnitude* range (1 to 2) and become internally inconsistent by rounding the low end up to 1.3 (possibly conflating with the unrelated CASCADE-model figure of -1.4/-1.5, or with some third-party paraphrase), and by dropping the sign so it reads as a bare "decay exponent" rather than the paper's own signed convention. There is no "1.3" anywhere in the primary text for the empirical NERC/unserved-energy fit — the two numbers that actually appear near 1.3-1.5 (-1.4 and -1.5) belong to the CASCADE simulation model and its branching-process analytic approximation, not the real-world data fit that both catalog entries are citing.

## Proposed consistent phrasing (for both documents)

> "Dobson, Carreras, Lynch & Newman (2007) report that the empirical probability distribution of blackout size (energy unserved, MWh) in NERC North American blackout data (1984-1998) falls off with 'a power dependence with an exponent between -1 and -2' (paper's own words and sign convention: P(size) ~ size^exponent, exponent in [-2, -1]). This is distinct from the paper's CASCADE-model/branching-process theoretical exponent of approximately -1.4 to -1.5, which describes the simulated component-failure-count distribution at critical loading, not the real NERC data fit."

Both catalog documents should drop the anchor's "1.3-2.0 decay exponent" phrasing entirely and standardize on "-1 to -2" (or, if a magnitude-only convention is preferred for readability, "|exponent| approximately 1 to 2" — but NOT "1.3" anywhere, since that number does not appear in the primary source for this measurand).

## Sources fetched
- PSERC-hosted PDF (primary-read, full text extracted via pdftotext -layout): https://documents.pserc.wisc.edu/documents/publications/papers/2007_general_publications/Complex-Systems-Analysis-of-Series-of-Blackouts_Aug-2004.pdf
- AIP official Chaos 2007 PDF: blocked (HTTP 403)
- iandobson.ece.iastate.edu/publications.html: blocked (HTTP 403)
- ResearchGate / Academia.edu mirrors: blocked (HTTP 403) to direct WebFetch, but corroborated via WebSearch's independent summarization of the Chaos 2007 content, which reproduced the identical "-1 and -2" sentence verbatim.
