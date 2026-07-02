# Quantitative source sweep — world-wide-web

Date: 2026-07-02. Scope: panel-spec.yaml quantitative columns (schema/panel-spec.yaml
read in full this session) for the new class entry `world-wide-web`. Singleton-class
framing mirrors `data/classes/the-internet.yaml` exactly (see instance_population
below). No new file other than this report was touched.

---

## 1. Singleton-class precedent (mirrored from the-internet.yaml)

Read in full: the-internet.yaml `exemplars` block (lines 11-21) and
`instance_population` block (lines 128-144).

**world-wide-web should adopt the identical pattern:**

- `exemplars`: a single entry, id `world-wide-web`, name "The World Wide Web (the
  singular global system)", note explaining this is a singleton (n=1): every
  quantitative row is a single-instance time-series measurement (the same Web
  observed via different crawls at different dates — nd.edu 1999, Altavista
  1999-2000, present-day index-size tracking), never a sample from a population of
  webs.
- `instance_population`: value "n = 1 (standing population); formation rate not
  applicable", evidence_status: measured, confidence: high, with the same framing
  the-internet uses: this is a definitional/epistemic fact governing which
  class-level statistical claims are legal, not a measurement gap. It EXPLICITLY
  FORBIDS cross-sectional "many webs" statistical claims — there is one Web,
  sampled/crawled at different times, not multiple independent web instances.
- `relations.part_of`: [the-internet] (the Web rides on top of the network layer
  the-internet.yaml scopes; the-internet.yaml already declares `contains:
  [world-wide-web]`, so this is the natural inverse edge — not yet added to either
  file by this sweep, flagged for the drafting step).

## 2. Atomicity / scoping note material

Atoms: pages/documents (HTML documents, the graph NODES) and hyperlinks (the graph
EDGES) — these are literally Newman 2003 Table II's own unit of analysis for the WWW
rows. This is a SINGLE-LAYER atomicity choice, in explicit contrast to
the-internet.yaml's DUAL atomicity (AS-nodes for network-structure columns vs.
packets/flows for traffic-dynamics columns). Recommend the scoping_note state this
contrast plainly: the Web's characteristic dynamics (linking, information retrieval,
hub/authority structure) all operate at one level — the document/hyperlink graph —
unlike the Internet's genuinely bi-layered topology-substrate/traffic-process
structure.

## 3. Degree distribution — Newman 2003 Table II (GOLD, reused, no re-research)

Already primary-read in Phase 1 (`research/phase1/quantitative-backbone.md`, lines
209-238, "Full text and Table II retrieved and read") and independently
primary-confirmed a second time via ar5iv HTML rendering of cond-mat/0303516 at the
v0.2 sweep (`research/v0.2-sweep/verification-debt/the-internet.md`, Item 1) for the
Internet-AS row (methodology cross-check only; the WWW rows themselves were not
re-fetched this session because Phase 1's transcription already carries full C^(1)/
C^(2) values with no row-shift ambiguity for these two rows).

Two directed-graph rows, DIFFERENT in/out-degree exponents (structural note: this
graph is directed, unlike the Internet AS-graph and the-internet.yaml's undirected
AS-topology treatment):

- **WWW (nd.edu domain)**: n=269,504, m=1,497,135, z(mean degree)=5.55, l(mean
  geodesic distance)=11.27, alpha=2.1/2.4 (in-degree/out-degree), C^(1)=0.11
  (global transitivity, Eq. 3), C^(2)=0.29 (mean local clustering, Eq. 6),
  r=-0.067 (weakly disassortative).
- **WWW (Altavista crawl)**: n=203,549,046 (~204 million), m=2,130,000,000
  (~2.13 billion), z=10.46, l=16.18, alpha=2.1/2.7 (in/out-degree). Clustering
  and assortativity: not given (dashes in Table II — too large to compute at the
  time).

Source: Newman, M.E.J. (2003). "The structure and function of complex networks."
SIAM Review 45(2), 167-256. Table II. [primary-read, Phase 1, full text and table;
cross-confirmed methodology via independent ar5iv re-fetch of the Internet-AS row at
v0.2 sweep]. Reuse the-internet.yaml's exact `newman2003` source-key citation string.

**evidence_status**: measured-untested (pre-CSN-2009 fit methodology, per
filling_rules.power-law-rigor — same treatment the-internet.yaml gives its own
Newman 2003 alpha=2.5 claim).

## 4. Barabási & Albert 1999 — primary-read this session (NEW, upgrades evidence base)

Citation: Barabási, A.-L. & Albert, R. (1999). "Emergence of Scaling in Random
Networks." Science 286(5439), 509-512. DOI: 10.1126/science.286.5439.509.

**[PRIMARY-READ this session]** — fetched via a stable mirror
(pdodds.w3.uvm.edu/files/papers/others/1999/barabasi1999a.pdf); WebFetch's own PDF
parse of this mirror was garbled (Greek-letter/exponent characters silently dropped),
so the raw PDF (auto-saved by the fetch tool) was re-extracted directly with
`pdftotext -layout` (Git-Bash-bundled poppler) and read as raw text — the same
technique used for Broido & Clauset 2019 in the-internet.yaml's verification-debt
pass. Exact quotes obtained:

> "(B) WWW, N = 325,729, k = 5.46 (6)." [Fig. 1 caption, dataset description]

> "The dashed lines have slopes (A) actor gamma=2.3, (B) www gamma=2.1 and (C)
> power gamma=4."

> "...point to a certain Web page follows a power law, with gamma_www = 2.1 +/- 0.1
> (Fig. 1B) (9)."

**Critical scope finding**: this paper measures ONLY the **in-degree** distribution
(P(k) = probability a page is pointed to by k other pages) — "the probability that a
Web page has k links... follows a power law, with gamma_www=2.1+/-0.1" — NOT
out-degree. No out-degree exponent is reported anywhere in the main text (contrast
Newman 2003's table, which gives both in- and out-degree exponents for its two WWW
rows). Dataset: N=325,729 vertices, mean degree k=5.46, credited to reference (6) —
a DIFFERENT, earlier, smaller crawl than either of Newman 2003's two WWW rows
(nd.edu N=269,504; Altavista N=203,549,046) — likely the Albert/Jeong/Barabási
1999 Nature paper's own nd.edu-domain crawl (a distinct, earlier nd.edu-based dataset
from the one appearing in Newman's table under the same "nd.edu domain" label; the
two are NOT confirmed identical without checking reference (6) directly, which was
not done this session — flag for a follow-up pass if the distinction matters).

evidence_status: measured-untested (pre-CSN-2009; the paper itself acknowledges,
elsewhere in the same paragraph, that "the exponents obtained for the different
networks are scattered between 2.1 and 4" with no formal goodness-of-fit testing).
This is the historical origin of the "the Web is scale-free, gamma~2.1" folklore
Broido & Clauset (2019) later stress-tested at the network-corpus level (see #5).

## 5. Broido & Clauset 2019 — WWW/hyperlink graphs NOT separately classified

Full six-rung taxonomy and the CAIDA AS-graph Weakest/Strong ~50/50 split were
already primary-read in the-internet.yaml's own verification-debt pass
(`research/v0.2-sweep/verification-debt/the-internet.md`, Item 2, direct pdftotext
extraction of arxiv.org/pdf/1801.03400). Re-examined that transcript this session
rather than re-fetching.

**Finding: their technological-networks subsection names CAIDA autonomous-systems
networks, "several peer-to-peer networks," and "a few digital circuit networks" as
the specific technological-network types discussed by name. WWW/hyperlink graphs are
NOT named anywhere in the quoted technological-networks passage.** Their paper's
domain coverage (per its own stated scope: social, biological, technological,
information networks) plausibly includes information/citation-style networks under a
different domain heading, but this was not confirmed — no hyperlink-graph or WWW
entry was found in the material already primary-read for this project, and
re-fetching the full corpus table (their supplementary data / SFAnalysis repository)
was out of scope for this sweep. **Per the no-fabrication rule: this entry should
state explicitly that Broido & Clauset's CAIDA-AS verdict (~50/50 Weakest/Strong)
does NOT transfer to WWW hyperlink graphs, and that whether their corpus separately
classifies WWW/hyperlink networks at all is UNCONFIRMED, not negative** — a literature
gap in this project's research, not a confirmed absence in the paper itself.

## 6. Kleinberg 1999 — HITS (hub/authority structure)

Citation: Kleinberg, J.M. (1999). "Authoritative sources in a hyperlinked
environment." Journal of the ACM 46(5), 604-632. (Preliminary versions: SODA 1998;
IBM Research Report, May 1997.)

**[snippet-verified this session]** — fetched the paper's own Cornell-hosted PDF
(cs.cornell.edu/home/kleinber/auth.pdf) via WebFetch (model-summarized, not
independently re-extracted with pdftotext). Core contribution: the HITS algorithm,
computing mutually-reinforcing "hub" and "authority" scores from hyperlink topology
alone (minimal text analysis) via iterative eigenvector-style weight updates.
Experimental datasets reported at the scale of a ~2,000-page base set expanded to a
~20,000-page neighborhood via inlinks/outlinks — small relative to the crawl scales
in Newman 2003 or Barabási & Albert 1999, appropriate to its role as a
ranking-algorithm demonstration rather than a topology-statistics study.

Candidate use: literature base for `modularity` or `hierarchy_depth` (hub/authority
bipartite-like structure is a form of link-topology organization distinct from pure
degree-distribution statistics), NOT itself a source for degree_distribution numbers.
Recommend citing as qualitative/structural background only; no numeric column value
should be drawn from it directly.

## 7. Web size / numerosity (pages, domains)

**Indexed page-count tracking (measured-disputed, snippet-verified this session):**
worldwidewebsize.com's current published estimate: **at least 3.98 billion pages**,
most recent update dated 2025-01-15; the site itself states data collection from
Google has been interrupted since that date ("They make it very difficult to
automatically retrieve data from the search engine"), so this figure is STALE
(frozen at its January 2025 value, not live-updated through the 2026-07-02 sweep
date) and should be labeled as such. Methodology (their own description, snippet-
verified): combines Google/Bing/Yahoo/Ask index-size estimates via daily word-
frequency sampling against a >1M-page DMOZ background corpus, subtracting an
estimated cross-engine overlap. This is a well-known, long-standing methodological
approach but inherently indirect (extrapolation from search-count sampling, not a
direct crawl census) — evidence_status: measured-disputed is appropriate (the
class-general note in this project's earlier sweep instructions already flagged this
space's "well-known methodological disagreement").

Source: WorldWideWebSize.com (De Kunder, M., ongoing tracking study; methodology
paper: de Kunder, M., et al., "Estimating search engine index size variability: a
9-year longitudinal study," Scientometrics, also on PMC — title/venue confirmed via
search snippet, not itself primary-read this session).

**Historical milestone (snippet-verified this session):** Google's official blog,
"We knew the web was big..." (2008-07-25/2025 archive of googleblog.blogspot.com),
states Google's indexing systems processed **"a trillion (1,000,000,000,000) unique
URLs on the web at once"** as of July 2008, after de-duplication of exact-duplicate
URLs. This is a historical milestone announcement, not a current-size estimate — 18
years stale relative to this sweep's date — but it is a useful anchor point
distinguishing "unique URLs ever seen" (Google's 2008 figure, a much larger and
differently-defined quantity, includes URLs never crawled/indexed) from "pages
currently indexed" (worldwidewebsize.com's much smaller ~4-billion figure, a
narrower and more conservative definition). This definitional distinction should be
stated explicitly in the entry, not silently conflated — the two numbers are not
comparable snapshots of the same measurand.

**Registered domains — dual-framing note (per sweep brief):** the-internet.yaml
already carries ~3.9e8 (386.9 million, end-2025, DNIB/Verisign, snippet-only) under
its own numerosity. Recommend world-wide-web ALSO cite this exact figure but under
explicitly different framing: for the-internet, domains are the NAMING LAYER (DNS
namespace entries); for world-wide-web, domains are best framed as WEB SITES
(the population of distinct site-level entry points into the page/hyperlink graph,
one level of aggregation above individual pages). State this distinction explicitly
in world-wide-web's numerosity note rather than silently duplicating the figure with
no differentiating context. Reuse the-internet.yaml's `dnib2025` source-key citation
string.

## 8. Energy rate density (Phi_m)

No dedicated power/mass figures for "the Web" as distinct from "the Internet" (data
centers, routers) were located or sought further this session — the-internet.yaml's
own energy_rate_density column is already `unknown` (mass figure rejected as
unsourced; power figure scope-ambiguous), and the Web has no separate physical
infrastructure layer of its own (it rides entirely on Internet infrastructure — data
centers, transmission links). Recommend world-wide-web's energy_rate_density be
recorded `unknown` with a cross-reference note to the-internet.yaml's identical
verdict, explicitly stating that the Web has no distinguishable physical substrate
separate from the Internet's — this is a scoping observation, not a fresh gap.

## 9. Other columns — not recovered this session (explicitly unknown/not searched)

- **spatial_extent**: not separately searched; the Web has no independent physical
  extent distinct from the Internet's global cable/data-center footprint (same
  4e7 m Earth-circumference-order estimate the-internet.yaml uses would logically
  apply, but was not independently re-derived or re-sourced this session — flag for
  drafting to decide whether to cross-reference or duplicate).
- **characteristic_timescales**: not searched this session. Candidates for a future
  pass: page-load/HTTP round-trip time (fast end), page/content update or link-rot
  half-life (middle), Web's own lifetime since 1989/1991 (Berners-Lee proposal /
  first public site) as the slow end. None sourced here.
- **fractal_dimension_spatial**: not applicable in the same sense as the-internet's
  router-geography D_f=1.5 (Yook/Jeong/Barabási 2002) — that figure measures
  physical router placement, a network-layer property already fully owned by
  the-internet.yaml. Whether a fractal dimension has been measured for the
  hyperlink-graph's LINK structure itself (as opposed to physical geography) was
  not searched this session; flag as open.
- **extreme_event_statistics**: not searched. No candidate located for "the Web's
  characteristic events" (link-rot events? viral-content size distributions? page
  popularity/traffic rank-size, which would be static-cross-sectional per the
  measurand_type distinction, not temporal-event) — flag as open, likely `unknown`
  pending a dedicated search.
- **temporal_correlation**: not searched. The Internet's own H~0.85-0.95
  (Leland et al.) is a TRAFFIC/packet-layer measurand, explicitly NOT a Web/
  hyperlink-graph property per the-internet.yaml's own dual-atomicity distinction —
  does not transfer.
- **tipping elements / cascade statistics**: not searched this session; no
  candidate literature identified (link-rot cascades, search-engine-index collapse
  events are speculative categories, not literature this sweep confirmed exists).
- **chaos/Lyapunov/predictability**: not searched; no expectation of a literature
  base distinct from the-internet's own confirmed gap.

## 10. Canonical review sources for the entry source list (3-5)

1. Newman, M.E.J. (2003). "The structure and function of complex networks." SIAM
   Review 45(2), 167-256. [primary-read, Phase 1 + v0.2 methodology cross-check]
2. Barabási, A.-L. & Albert, R. (1999). "Emergence of Scaling in Random Networks."
   Science 286(5439), 509-512. [primary-read this session, pdftotext extraction]
3. Broido, A.D. & Clauset, A. (2019). "Scale-free networks are rare." Nature
   Communications 10, 1017. DOI: 10.1038/s41467-019-08746-5. [primary-read via
   the-internet.yaml's existing verification-debt pass, reused]
4. Kleinberg, J.M. (1999). "Authoritative sources in a hyperlinked environment."
   Journal of the ACM 46(5), 604-632. [snippet-verified this session]
5. Clauset, A., Shalizi, C.R. & Newman, M.E.J. (2009). "Power-law distributions in
   empirical data." SIAM Review 51(4), 661. [already a resolved schema-level source
   key, csn2009 — the rigor standard against which #1 and #2's exponent claims are
   both marked measured-untested]

---

## Open items / follow-ups flagged for drafting

- Confirm whether the-internet.yaml's `contains: [world-wide-web]` should be
  mirrored with a `part_of: [the-internet]` edge in the new entry (very likely yes,
  per D14 relations convention).
- Reference (6) in Barabási & Albert 1999 (the exact source of their N=325,729 WWW
  crawl) was not independently traced — likely Albert, Jeong & Barabási (1999),
  "Diameter of the World-Wide Web," Nature 401, 130, a DIFFERENT nd.edu-domain
  crawl from Newman 2003's own "WWW (nd.edu domain)" row (N=269,504). These are
  probably NOT the same dataset despite the shared nd.edu label — do not silently
  conflate; state both as separate, differently-sized nd.edu-era crawls if both are
  used in the entry.
- Whether Broido & Clauset's corpus contains a hyperlink/WWW-graph category at all
  remains unconfirmed (see #5) — worth one more targeted search pass before the
  entry is finalized, since it directly affects whether degree_distribution's
  power-law-rigor counterweight applies to WWW the way it does to the-internet's
  AS-graph.
