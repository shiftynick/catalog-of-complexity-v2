# Verification-debt sweep: data/classes/the-internet.yaml
Date: 2026-07-02
Scope: the two standing flags on `degree_distribution` (lines ~242-284, flags ~767-783).
Rule discipline: primary-read vs snippet-verified distinguished throughout; no fabrication.

---

## Item 1 — Newman 2003 Table II, Internet AS-level row: settle l and C

### What was tried
- `WebFetch https://arxiv.org/abs/cond-mat/0303516` — abstract page only, confirms paper identity
  ("The structure and function of complex networks," M.E.J. Newman, SIAM Review 2003). No table
  content (abstract pages never have it). Read-status: primary-read (abstract only).
- `WebFetch https://ar5iv.labs.arxiv.org/html/cond-mat/0303516` — **this rendered cleanly**, unlike
  every mirror tried in the prior session (Cornell/UVM/BU/arXiv-PDF all had the row-shift
  text-extraction bug). Fetched TWICE, independently, with two different prompts, to guard against
  a bad single extraction:
  - First fetch (broad ask for the Internet row): returned n=10,697, z=5.98, l=3.31, alpha=2.5,
    C^(1)=0.035, C^(2)=0.39, r=-0.189.
  - Second fetch (asked specifically to quote the table caption/header and re-quote the row for
    cross-check): returned an IDENTICAL row, plus the table's own caption text and the definitions
    of C^(1) and C^(2) from the paper's equations.

### Exact quotes obtained (ar5iv HTML rendering of cond-mat/0303516, primary-read)

Table II caption, quoted as extracted:
> "Basic statistics for a number of published networks. The properties measured are: type of graph,
> directed or undirected; total number of vertices n; total number of edges m; mean degree z; mean
> vertex–vertex distance ℓ; exponent α of degree distribution if the distribution follows a power law
> (or "–" if not; in/out-degree exponents are given for directed graphs); clustering coefficient C^(1)
> from Eq. (3); clustering coefficient C^(2) from Eq. (6); and degree correlation coefficient r"

Clustering coefficient definitions, quoted as extracted:
> C^(1): "3× number of triangles in the network / number of connected triples of vertices" (Eq. 3)
> — this is the transitivity-style, whole-network-ratio definition.
> C^(2): "C = 1/n ∑_i C_i" where C_i measures local clustering around vertex i (Eq. 6) — this is the
> Watts-Strogatz-style mean-of-local-clustering-coefficients definition.

Internet row, quoted as extracted (both fetches agreed exactly):

| network | type | n | m | z | ℓ | α | C^(1) | C^(2) | r | Ref(s) |
|---|---|---|---|---|---|---|---|---|---|---|
| Internet | undirected | 10,697 | 31,992 | 5.98 | 3.31 | 2.5 | 0.035 | 0.39 | −0.189 | [148], [86] |

### Resolution of the entry's C=0.39 value and the stray C=0.24 snippet

The entry currently cites "clustering C=0.39" without specifying which of the two clustering
measures that is. The primary-read table now shows **C=0.39 is C^(2)** (mean of local clustering
coefficients, Watts-Strogatz style), NOT C^(1) (which is 0.035, the global transitivity ratio). These
are genuinely different statistics computed on the same graph — an order of magnitude apart — which
is exactly the kind of ambiguity the standing flag worried about. The entry's existing C=0.39 figure
is CORRECT but was under-labeled (didn't specify C^(1) vs C^(2)).

The stray snippet claim of C=0.24 (attributed loosely to "Newman and colleagues") does NOT appear
in Table II under either clustering column for the Internet row. It cannot be reconciled with this
primary-read table and is most likely either (a) a different network science reference misattributed
to Newman, (b) a different Internet dataset/vintage not in this table, or (c) a corrupted/garbled
secondary citation. It is NOT independently confirmed anywhere in this session's reads and should
continue to be treated as an uncorroborated stray snippet, not a competing primary figure.

### Cross-check note on read reliability
Two independent ar5iv fetches (different prompts, same URL) returned byte-for-byte identical numbers
for every column in the Internet row, including the previously-unconfirmed l and C^(2). This is
strong internal consistency for a single-source read. It is still a single source (ar5iv's HTML
rendering pipeline of the same underlying TeX), not a second independent document, so this is
recorded as ONE primary-read confirmation, not a multi-source cross-confirmation — but it directly
resolves the specific problem the standing flag identified (the row-shift extraction bug), because
ar5iv's rendering pipeline is structurally different from the raw-PDF-text-extraction mirrors that
failed previously.

### VERDICT: RESOLVED-primary-read

l = 3.31 confirmed exactly as the entry currently states.
C = 0.39 confirmed exactly as the entry currently states, AND now identified specifically as C^(2)
(mean local clustering coefficient, Eq. 6), not C^(1) (global transitivity, Eq. 3, = 0.035 for this
row). The entry's number was right; the missing information was which of the two clustering
definitions it corresponds to.

### Proposed append-only fix_log / flag entries

```yaml
  # --- append to provenance.fix_log (new dated entry; do not edit existing entries) ---
  fix_log:
    - date: 2026-07-02
      by: verification-debt-researcher (v0.2 sweep)
      changes:
        - "[RESOLVED/citation] degree_distribution: Newman 2003 Table II Internet-AS row
           primary-read via ar5iv HTML rendering of cond-mat/0303516 (arXiv), which renders
           cleanly where every previously-tried PDF/TeX mirror had a row-shift extraction bug.
           Confirms, exactly matching the entry's existing figures: n=10,697, m=31,992, z=5.98,
           l=3.31, alpha=2.5, r=-0.189. CLUSTERING: the table has two distinct clustering
           definitions, C^(1) (Eq. 3, global transitivity: 3x triangles / connected triples =
           0.035 for the Internet row) and C^(2) (Eq. 6, mean of local clustering coefficients
           = 0.39 for the Internet row). The entry's existing C=0.39 figure is CONFIRMED CORRECT
           and is now labeled as specifically C^(2); C^(1)=0.035 is a new, distinct, also-primary-
           confirmed figure not previously recorded in the entry. The stray C=0.24 snippet
           previously noted as an unresolved conflicting claim does NOT appear anywhere in
           Table II under either clustering column for the Internet row and remains an
           uncorroborated, unreconciled outlier -- not adopted."
      unresolved:
        - "The C=0.24 stray snippet's origin remains untraced; it is neither confirmed nor
           reconcilable with the primary-read Table II and should be treated as noise unless a
           distinct primary source for it is later located."
```

```yaml
  # --- append to provenance.flags (new flag entry; existing flags left untouched) ---
    - column: degree_distribution
      note: >
        RESOLVED 2026-07-02 (l, C only -- see separate flag below for the Broido & Clauset
        classification, which is PARTIAL not resolved): Newman 2003 Table II's Internet AS-level
        row was primary-read cleanly via the ar5iv HTML rendering of cond-mat/0303516 (two
        independent fetches, identical results), resolving the row-shift extraction bug that
        blocked every mirror tried in the prior session. l=3.31 confirmed. C=0.39 confirmed,
        and now specifically identified as C^(2) (mean local clustering coefficient, Eq. 6 in
        Newman 2003) as distinct from C^(1) (global transitivity, Eq. 3), which is 0.035 for
        this row and is a newly-recovered figure not previously in the entry. The entry's method
        field should be updated (not done by this researcher, who is restricted to a log-only
        pass) to read "clustering C^(2)=0.39 (mean local clustering coefficient); C^(1)=0.035
        (global transitivity) also reported in the same table row" and the stray C=0.24 snippet
        should be described as unreconciled/unconfirmed rather than a live open question, since
        it does not appear anywhere in the primary-read table.
```

---

## Item 2 — Broido & Clauset 2019, Internet AS-graph taxonomy classification

### What was tried
- `WebFetch https://arxiv.org/abs/1801.03400` — abstract page only (same limitation as before:
  Nature.com is cookie-walled, this session re-confirms the abstract is accessible but full text
  is not directly rendered from the abstract page).
- `WebFetch https://ar5iv.labs.arxiv.org/html/1801.03400` (x2, different prompts) — ar5iv attempted
  a rendering, but the returned summaries were **inconsistent across the two fetches**: one said
  the CAIDA AS networks split "Weak"/"Strong", the other said "Weakest"/"Strong" and additionally
  claimed no supplementary per-network table exists. Because these two ar5iv reads disagreed on a
  material fact (Weak vs. Weakest are DIFFERENT named categories in this paper's own taxonomy), ar5iv
  summarization was judged unreliable for this specific paper and NOT used as the basis for the
  verdict.
- Fell back to `WebFetch https://arxiv.org/pdf/1801.03400`, which returned raw undecoded PDF bytes
  (WebFetch could not parse it) but the tool **saved the raw PDF to a local temp file**. Extracted
  it directly with `pdftotext -layout` (Git-Bash-bundled poppler utility) and grep'd/read the raw
  text myself. This is the most reliable read obtained this session: full original text, not an LLM
  paraphrase of a rendering.

### Exact quotes obtained (pdftotext -layout extraction of arxiv.org/pdf/1801.03400, primary-read)

Taxonomy category definitions (Section II.B, "Alternative Distributions" / results setup), quoted
as extracted, in order from weakest to strongest:

> "Super-Weak: For at least 50% of graphs, none of the alternative distributions are favored over
> the power law."

> "Weakest: For at least 50% of graphs, the power-law hypothesis cannot be rejected (p ≥ 0.1)."

> "Weak: The requirements of the Weakest set, and there are at least 50 nodes in the distribution's
> tail (n_tail > 50)."

> "Strong: The requirements of the Weak set, and that both 2 < α̂ < 3, and for at least 50% of graphs
> none of the alternative distributions are favored over the power-law."

> "Strongest: The requirements of the Strong set for at least 90% of graphs, rather than 50%, and
> for at least 95% of graphs none of the alternative distributions are favored over the power-law."

> "Networks that fail to meet any of these criteria are deemed Not Scale Free."

So the FULL, exact taxonomy (six categories, confirming the entry's existing "Strongest/Strong/Weak/
Super-Weak/Not-scale-free" list was missing one rung -- "Weakest" is a distinct category between
Super-Weak and Weak, not a synonym for either) is:

**Not Scale Free < Super-Weak < Weakest < Weak < Strong < Strongest**

CAIDA autonomous-systems networks, quoted exactly as extracted from the Results section (technological
networks subsection):

> "Among the categories representing direct evidence, less than half exhibit the weakest form of
> direct evidence (43% Weakest). This group includes about half of the CAIDA autonomous systems
> networks, several peer-to-peer networks, and a few digital circuit networks. In contrast to
> biological or social networks, however, technological networks exhibit a modest fraction of
> networks with strong direct evidence of scale-free structure (28% Strong). Networks in this
> category include the other half of the CAIDA graphs."

Domain-level context also confirmed (Fig. 7c, technological networks, n and proportions, quoted as
extracted from the figure's rendered data labels):
> Not Scale-Free: 13 (0.07); Super-Weak: 183 (0.92); Weakest: 86 (0.43); Weak: 77 (0.39);
> Strong: 55 (0.28); Strongest: 3 (0.01) [percentages are of the technological-networks subset,
> not mutually exclusive counts -- categories are nested/cumulative per the taxonomy definition]

### What this does and does not resolve

CONFIRMED (primary-read, exact quote): the CAIDA autonomous-systems (Internet AS-level) networks in
this paper's corpus are NOT given one single classification. The paper explicitly splits them:
**about half classify as Weakest, and the other half classify as Strong.** No CAIDA/AS network in
their corpus is reported reaching Strongest (only 1% of the whole technological-networks group
reaches Strongest, and the text does not attribute any of those 3 networks to CAIDA specifically).

NOT RESOLVED: the paper's main text reports this as an aggregate "about half / other half" split
across (per their Methods) 4,477 simple graphs derived from CAIDA's underlying AS topology data
(their graph-simplification procedure can produce multiple simple graphs per original network data
set). It does NOT name a single verdict for "the Internet AS graph" as one object the way Newman
2003 Table II treats it as a single row -- Broido & Clauset's unit of analysis is finer-grained
(many CAIDA graph snapshots/variants, aggregated into percentages), and the exact snapshot-to-category
mapping is not in the main text. A per-snapshot table might exist in their public replication
repository (https://github.com/adbroido/SFAnalysis, cited in the paper's Acknowledgments/data-
availability sentence) but that repository was NOT fetched this session (out of scope: a code
repository is not itself a citable academic primary source in the same sense, and fetching it was
not part of the assigned task).

### VERDICT: PARTIAL

The exact classification language and the Weakest/Strong 50-50 split for CAIDA AS networks is now
primary-read and quotable (this was previously blocked entirely). What remains open is that this is
an aggregate, not a single verdict, and the paper's main text does not resolve it to one category —
which may in fact be the correct, non-fabricated answer to record (the real finding IS the split,
not a single hidden number this session failed to find).

### Proposed append-only fix_log / flag entries

```yaml
  # --- append to provenance.fix_log (new dated entry; do not edit existing entries) ---
  fix_log:
    - date: 2026-07-02
      by: verification-debt-researcher (v0.2 sweep)
      changes:
        - "[PARTIAL/citation] degree_distribution: Broido & Clauset (2019) full text primary-read
           this session via direct pdftotext extraction of the raw PDF fetched from
           arxiv.org/pdf/1801.03400 (ar5iv HTML rendering gave internally inconsistent summaries
           across two fetches and was NOT used as the basis for this finding). Confirms the exact
           six-rung taxonomy: Not Scale Free < Super-Weak < Weakest < Weak < Strong < Strongest
           (the entry's prior text omitted 'Weakest' as a distinct rung between Super-Weak and
           Weak). Confirms, by exact quote, that CAIDA autonomous-systems (Internet AS-level)
           networks in their corpus do NOT receive one single classification: 'This group
           [Weakest, 43% of technological networks] includes about half of the CAIDA autonomous
           systems networks... Networks in this category [Strong, 28% of technological networks]
           include the other half of the CAIDA graphs.' No CAIDA/AS network is attributed to the
           Strongest category (only 3 technological networks total, 1%, reach Strongest, not
           identified as CAIDA in the main text). This is now a confirmed, quotable, primary-read
           finding rather than an unconfirmed gap -- but it is inherently a split/aggregate
           finding, not a single verdict, because Broido & Clauset's unit of analysis is many
           simple graphs derived from CAIDA snapshots, not one Internet-AS-graph object the way
           Newman 2003 treats it."
      unresolved:
        - "Whether a specific CAIDA snapshot/vintage maps to Weakest vs. Strong individually is
           not stated in the paper's main text; their public code/data repository
           (github.com/adbroido/SFAnalysis, cited in the paper's data-availability statement) was
           NOT fetched this session and might resolve this further if a per-snapshot table exists
           there, but a code repository would need separate evaluation as a citable source type."
```

```yaml
  # --- append to provenance.flags (new flag entry; existing flags left untouched) ---
    - column: degree_distribution
      note: >
        PARTIAL RESOLUTION 2026-07-02: Broido & Clauset (2019) full text now primary-read (direct
        pdftotext extraction of arxiv.org/pdf/1801.03400 raw PDF bytes, after ar5iv's HTML
        rendering gave inconsistent summaries across repeat fetches and was discarded as
        unreliable for this specific paper). Exact quote: CAIDA autonomous-systems (Internet
        AS-level) networks split roughly 50/50 between the "Weakest" category (43% of all
        technological networks, "about half of the CAIDA autonomous systems networks") and the
        "Strong" category ("the other half of the CAIDA graphs"); none confirmed in "Strongest."
        Six-rung taxonomy confirmed exactly: Not Scale Free < Super-Weak < Weakest < Weak <
        Strong < Strongest (the entry's summary previously omitted "Weakest" as its own rung).
        This resolves the "full-text blocked" problem but the paper's own answer is an aggregate
        split across many CAIDA graph snapshots, not a single verdict for "the Internet AS graph"
        -- recommend the entry's degree_distribution note be updated to state the Weakest/Strong
        split explicitly (with the exact quotes above) rather than continuing to describe the
        classification as simply "unconfirmed."
```

---

## Summary table

| Item | Verdict | Settled numbers | Source form used |
|---|---|---|---|
| 1. Newman 2003 Table II, l and C | RESOLVED-primary-read | l=3.31; C^(1)=0.035 (global transitivity); C^(2)=0.39 (mean local clustering, = the entry's existing "C=0.39") | ar5iv HTML rendering of cond-mat/0303516, 2 independent fetches, identical results |
| 2. Broido & Clauset 2019, CAIDA AS-graph classification | PARTIAL | CAIDA AS networks split ~50/50: "about half" -> Weakest (43% of tech. networks overall), "the other half" -> Strong (28% of tech. networks overall); none in Strongest (1%, not attributed to CAIDA) | Direct pdftotext extraction of raw PDF from arxiv.org/pdf/1801.03400 (full text, not ar5iv paraphrase) |
