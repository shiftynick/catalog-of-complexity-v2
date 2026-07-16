# SFAnalysis repo evaluation: can it settle per-snapshot CAIDA classification?

Date: 2026-07-16
Scope: standing item from the v0.2 verification-debt log (research/v0.2-sweep/verification-debt/
the-internet.md, Item 2 "unresolved"): evaluate github.com/adbroido/SFAnalysis as (a) a source of
per-snapshot scale-free classifications for the CAIDA AS graphs, and (b) a citable source type at all.
Rule discipline: primary-read vs snippet-verified distinguished throughout; no fabrication.
No entry edits made — findings only; orchestrator decides.

---

## 1. What the repository contains (primary-read, full tree)

Method note: the GitHub rendered page and WebFetch summaries were NOT relied on for the
inventory. The full git tree JSON was fetched directly from the GitHub API
(`api.github.com/repos/adbroido/SFAnalysis/git/trees/master?recursive=1`) and enumerated locally
with a script — `"truncated": false`, so this is the complete tree, not a sample.

Provenance anchor:
- HEAD of `master` = commit `306768a769b41049b5b462ad4e3832272e418d5e`, dated 2019-07-19,
  author Anna D. Broido, message "vis.py" (per `api.github.com/repos/adbroido/SFAnalysis/commits`).
- **No tags and no releases exist** (`/tags` API returns an empty array). Any citation must be
  by commit SHA.
- License: GPL-3.0. Language: Python 2 (README states Python-3 incompatible; primary-read).

Complete inventory (3,716 tree entries):

| Path | Contents |
|---|---|
| `code/` | 7 Python files: `fit.py`, `importfiles.py`, `integration_constants.py`, `lrt.py`, `sfanalysis.py`, `sortgmls.py`, `visualisations.py` — the fitting/likelihood-ratio/categorization pipeline |
| `degreesequences/` | 3,669 `.txt` degree-sequence **input** files — the paper's replication corpus |
| `example/` | `example.ipynb` (with committed outputs — see §3), 14 Route Views example `.gml` files + their 14 degree-sequence files |
| root | `README.md`, `LICENSE`, `.gitignore` |

**There is no results file.** Zero `.csv` files anywhere in the tree; no table mapping networks or
snapshots to scale-free categories. The README (primary-read via raw.githubusercontent.com)
describes a three-step user-run pipeline — `write_degree_sequences()` →
`analyze_degree_sequences()` → `categorize_networks()` — and warns the analysis "will take a
while for many or large data sets." The repo ships the paper's inputs and code, not its outputs.

### CAIDA structure within the corpus (counted from the full tree, exact)

- 1,098 CAIDA files = **122 distinct `as-caida` snapshots** (2004-01-05 through 2007-11-12)
  × **9 simple-graph variants each** (multiplex layers customer / peer / provider / sibling /
  union, crossed with directed in / out / total where applicable).
- Separately, 733 `Route_Views_AS_graphs` files = 733 distinct daily snapshots (1997–2000,
  one `multigraphsimplified` variant each) — consistent with the well-known as-733 collection.
  These Route Views snapshots are a DIFFERENT group from the "CAIDA autonomous systems
  networks" of the paper's Weakest/Strong split quote.

This directly and quantitatively substantiates the entry's existing claim that Broido & Clauset's
unit of analysis is many simple graphs derived from each snapshot: for CAIDA it is exactly 9
degree sequences per snapshot, 122 snapshots.

## 2. Per-snapshot CAIDA classification: verdict

**NOT RECOVERABLE from the repository as it stands.** The repo contains everything needed to
*recompute* per-snapshot classifications (all 1,098 CAIDA degree sequences + the exact code), but
no pre-computed classification results. Recovering them would mean running the pipeline
ourselves: Python 2 + igraph/mpmath stack, ~25–30 s per degree sequence for the bootstrap
p-value alone (timing observed in the committed notebook outputs) → on the order of 8–9 CPU-hours
for the CAIDA subset, plus likelihood-ratio tests. That output would be a **project-computed
result, not a citation** — a different evidence class entirely (closer to analysis/ than to a
source), and adopting it would need its own decision about whether the catalog does original
network computation. Classification: **recoverable-but-needs-recomputation**, where the
recomputation is nontrivial and changes the epistemic status of the answer.

Also checked: the Nature Comms Supplementary Information (810 KB PDF per the PMC record,
PMC6399239) contains Supplementary Notes 1–6, one Supplementary Table, Figs 1–8 — no indication
of a per-network classification table, consistent with the v0.2 ar5iv read that claimed none
exists. (Snippet-level check only; the SI PDF itself was not fetched this session.)

## 3. What the repo DOES yield that is new and citable

The committed `example/example.ipynb` carries **stored output cells** — computed by the author
and committed at `306768a` — showing the full pipeline run on the 14 example Route Views
snapshots (as19981229–as19990111). Primary-read directly from the raw notebook JSON
(`raw.githubusercontent.com/adbroido/SFAnalysis/master/example/example.ipynb`), not a
summarizer:

- `analyze_degree_sequences` outputs: bootstrap p-values 0.109–0.591 (all ≥ 0.1, so the
  power-law hypothesis is not rejected for any of the 14).
- `categorize_networks` output table: **all 14 snapshots classify Weakest=True and Weak=True;
  Strong=False, Strongest=False, Super_Weak=False for every row**; median_alpha 2.25–2.28;
  n 493–561; median_ntail 366–415.

Two caveats. (1) These are Route Views 1998–99 example snapshots, NOT the CAIDA 2004–2007
snapshots the entry's flag concerns — they do not settle the CAIDA split, though they are
consistent with AS-graph snapshots landing at Weak-not-Strong rungs. (2) The n values (493–561)
are unexpectedly small for late-1998 AS graphs (public as-733 snapshots of that vintage have
n≈3000+); the example gmls sit in an `n3` size-bucket directory and may be reduced example
graphs. Recorded as observed, not interpreted — this caveat should accompany any use of these
numbers.

## 4. Citability verdict

**Citable, with conditions — as a primary-read supplementary artifact of the published paper,
not as an independent scholarly source.** Reasoning:

- **Authorship chain: confirmed.** The paper's own Code Availability statement names the repo.
  Exact quote (primary-read from the PMC open-access full text, PMC6399239): "Code for
  graph-simplification functions and power-law evaluations, and data for replication are
  available at https://github.com/adbroido/SFAnalysis". The repo author (Anna D. Broido) is the
  paper's first author. This is the paper's official replication artifact, not a third-party
  reimplementation.
- **Version/permanence: weak but workable.** No tags, no releases, no Zenodo/DOI deposit found.
  The repo has been static since 2019-07-19. Citation MUST pin the commit SHA
  (`306768a769b41049b5b462ad4e3832272e418d5e`); a bare repo URL is not acceptable under this
  project's provenance standards. Residual risk: GitHub repos can be deleted or force-pushed;
  a DOI'd deposit would be stronger. (If the orchestrator wants belt-and-braces permanence,
  the Software Heritage archive is the standard place to check/trigger a snapshot — not done
  this session.)
- **Catalog precedent: none yet, but no bar either.** Grep of `data/classes/*.yaml` finds no
  existing github/zenodo/dataset citation in any sources block; `world-wide-web.yaml` (line
  ~317, ~875) explicitly deferred this same question. Adopting repo-as-source here would be the
  first instance and should be logged as a small precedent decision (it does not touch the
  frozen schema — the citation string vocabulary already accommodates it via the read-status
  annotation).

Recommended citation form if used:

> Broido, A.D. (2019). SFAnalysis replication repository for Broido & Clauset, "Scale-free
> networks are rare," Nature Communications 10, 1017. github.com/adbroido/SFAnalysis, commit
> 306768a (2019-07-19), linked from the paper's Code Availability statement. [primary-read —
> full git tree enumerated via GitHub API (truncated:false), README and example.ipynb read raw]

## 5. Suggested entry change (NOT made — orchestrator decision)

The degree_distribution column's current text is already correct and needs no retraction. The
supportable change is a *strengthening* of the existing aggregate-split framing plus closure of
the standing "unresolved" item:

1. In `degree_distribution.method` (or note), the sentence about Broido & Clauset's
   unit-of-analysis can be made exact: the replication corpus contains 122 CAIDA AS snapshots
   (2004-01-05–2007-11-12) × 9 simple-graph variants each (1,098 degree sequences), enumerated
   from the full tree of the paper's official replication repo at commit 306768a.
2. The v0.2 "unresolved" flag item ("might resolve this further if a per-snapshot table exists
   there") can be CLOSED with a definitive negative: the repo was fetched and fully enumerated;
   **no per-snapshot classification table exists in it**; per-snapshot CAIDA classification is
   recoverable only by recomputation (~9 CPU-hours, Python 2), which would be project-original
   analysis, not a citation. The aggregate ~50/50 Weakest/Strong split from the paper's main
   text remains the best citable answer — and remains recorded as the answer, per the v0.2
   verdict that "the real finding IS the split."
3. Optionally add the repo as a source (citation form above) supporting the corpus-structure
   sentence, noting this is the catalog's first repo-as-source citation.
4. Do NOT use the notebook's 14 Route Views example classifications as evidence for the CAIDA
   claim; if recorded at all, record them under the §3 caveats as a distinct, minor observation.

## Summary table

| Question | Answer |
|---|---|
| Repo contents | Code (7 .py) + 3,669 degree-sequence inputs + example notebook; NO results files, no CSVs (full tree, truncated:false) |
| Per-snapshot CAIDA classification | Not recoverable as data; recoverable-but-needs-recomputation (~9 CPU-h, Python 2, project-original analysis) |
| Official artifact? | Yes — named in the paper's Code Availability statement (exact quote primary-read via PMC) |
| Version anchor | Commit 306768a769b41049b5b462ad4e3832272e418d5e (2019-07-19); no tags/releases |
| Citability | Yes, as a primary-read supplementary artifact, pinned to commit SHA; first such citation in the catalog (precedent to log) |
| Entry change | Strengthen unit-of-analysis sentence with exact corpus counts; close the v0.2 unresolved flag with a definitive negative; no change to the recorded ~50/50 split |
