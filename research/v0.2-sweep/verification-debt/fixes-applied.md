# Fixes applied — v0.2 sweep, verification-debt + validator-conformance pass

Date: 2026-07-02. Scope: PACKAGE 1 (apply the three verification-debt research
logs) and PACKAGE 2 (validator conformance) as specified in the fixer brief.
Hard rules observed throughout: provenance history (fix_log,
flag_cleanup_notes, flags, verification blocks) is append-only — no existing
text in those blocks was rewritten or deleted; no citation/value/DOI was
fabricated; no `git` command was run; `schema/`, `docs/`, `app/`, `analysis/`
were untouched except running `analysis/validate.mjs`.

Validator end state: **all 10 entries PASS, 0 errors, exit code 0** (down from
27 errors across 8 entries at the start of this session). Remaining validator
output is 3 WARN (all `interchangeable` free-text values on component_ontology
parts — not in the fixer's mandate, not touched) and 20 INFO (all
roster-expansion-queue relation stubs and "declared but not cited" source
notes — pre-existing, informational only, not errors).

---

## PACKAGE 1 — verification-debt findings applied

### 1a. `research/v0.2-sweep/verification-debt/the-internet.md` -> `data/classes/the-internet.yaml`

- Appended a new dated `provenance.fix_log` entry (2026-07-02,
  verification-debt-researcher) recording both items from the log verbatim
  (Newman 2003 Table II l/C resolution; Broido & Clauset taxonomy partial
  resolution), plus their `unresolved` sub-lists, exactly as proposed in the
  log's YAML snippets.
- Appended two new `provenance.flags` entries (degree_distribution x2 — the
  l/C RESOLVED note and the Broido & Clauset PARTIAL RESOLUTION note), exactly
  as proposed in the log.
- Updated `attributes.degree_distribution.method` text: labeled C=0.39 as
  specifically C^(2) (mean-local-clustering, Eq. 6), recorded the
  newly-recovered C^(1)=0.035 (global transitivity, Eq. 3), described the
  six-rung Broido & Clauset taxonomy including "Weakest" as a distinct rung,
  and replaced "classification unconfirmed" framing with the confirmed
  ~50/50 Weakest/Strong CAIDA AS-networks split, including the exact quotes
  from the log. The old claim text remains fully readable in the preceding
  fix_log entry (untouched) and in the superseded parts of the note field
  that were rephrased rather than deleted-without-trace.
- Updated the `note` field under degree_distribution similarly (replaced
  "could NOT confirm the classification" language with the confirmed split,
  citing the exact quotes).
- Upgraded `sources.newman2003` and `sources.broido-clauset2019` citation
  annotations with dated ADDENDUM-style appended sentences recording the
  new primary reads (ar5iv HTML rendering for Newman; direct pdftotext
  extraction for Broido & Clauset), without deleting the original annotation
  text.

### 1b. `research/v0.2-sweep/verification-debt/chaisson-and-bvalue.md`

**-> `data/classes/planetary-climate.yaml`:**
- Appended a new dated `provenance.fix_log` entry (2026-07-02,
  verification-debt sweep agent) recording the chaisson2011/energy_rate_density
  upgrade, verbatim from the log's proposed snippet.
- Appended a new `provenance.flags` entry under `energy_rate_density` marking
  the Phi_m~75 erg/s/g figure RESOLVED (superseding, not deleting, the two
  earlier flags on the same column, which remain in place as history).
- Upgraded `sources.chaisson2011`'s citation string with an appended ADDENDUM
  recording the successful re-verification via Chaisson's CfA-hosted PDF,
  the pdftotext content-stream-order fix for the two-column table, and the
  cross-check against the Sun=2/Plants=900 callouts. Original annotation
  text preserved.

**-> `data/classes/earthquake-fault-systems.yaml`:**
- Appended the proposed confirmation `fix_log` entry (b-value
  CONFIRMED-CLOSED; no value changes) verbatim from the log's snippet.

### 1c. `research/v0.2-sweep/verification-debt/tropical-cyclones.md` -> `data/classes/tropical-cyclones.yaml`

- Appended three `provenance.flag_cleanup_notes` entries (this entry uses
  flag_cleanup_notes, not fix_log, confirmed by inspecting the existing
  block): fractal_dimension_spatial (Lovejoy 1982 RESOLVED), energy_rate_density
  (rs2023 RESOLVED), and criticality (PARTIAL — negative-search log), each
  verbatim from the log's proposed snippets.
- Upgraded `sources.lovejoy1982` citation to primary-read, recording the
  McGill GANG-group eprints access route and the confirmed D=1.35 figure
  and general (non-hurricane-specific) measurand, per the log.
- Upgraded `sources.rs2023` citation to primary-read (full author name
  Chernogor, L.F. added; DOI added), recording the res.mdpi.com CDN-subdomain
  access route and the Table 1 mass figures, per the log.
- In `attributes.energy_rate_density.method`, softened "corroborates the
  project denominator" to "independently converges on the same
  order-of-magnitude estimate (itself a modeled density x volume figure,
  Shuleikin-model based, not an independent empirical measurement)" per the
  log's explicit recommendation.
- **ORCHESTRATOR RULING applied exactly as specified**: rescored
  `attributes.criticality.score` from 1 to 0 (kept `mechanism_status: none`,
  `type: hybrid`, `level: class-general`, `evidence_status: qualitative`).
  Replaced the justification with the exact text supplied in the fixer
  brief (Corral 2011/Peters & Neelin 2006 negative-search reasoning, anchor
  level-0 match, soc-two-claims preservation of the class-level PDI power
  law). Appended the exact `flag_cleanup_notes` entry supplied
  ("column: criticality / outcome: RESOLVED — negative search documented
  (v0.2 sweep); rescored 1->0 per the audit flag's disjunction and the
  cities precedent.").

---

## PACKAGE 2 — validator conformance

### 2a. `extreme_event_statistics.measurand_type` added to all 8 entries with a real value

| Entry | Choice | One-line rationale |
|---|---|---|
| cities | `static-cross-sectional` | Zipf rank-size distribution of US city population sizes at a snapshot in time — no event structure, directly the panel-spec's own worked example. |
| earthquake-fault-systems | `temporal-event` | G-R magnitude-frequency slope (b-value) and the CSN raw-amplitude fit are both event-size/frequency distributions of discrete earthquakes accumulated over time. |
| financial-markets | `temporal-event` | Return/volume/trade-count tail exponents are fit to a 1994-95 tick-by-tick time series of discrete trading events (returns, volumes, trade counts per interval). |
| languages | `static-cross-sectional` | Zipf word rank-frequency distribution over a fixed corpus (Moby Dick) — a cross-sectional rank-size distribution, no event/time structure; matches the panel-spec's canonical Zipf example exactly. |
| power-grids | `temporal-event` | NERC blackout-size (unserved energy) distribution over the 1984-1998 historical outage record — discrete cascading-failure events over time. |
| river-networks | `temporal-event` | Peak discharge Q vs. recurrence interval T is a flood-event-size/frequency distribution (partial-duration flood series) at each gauge over a multi-decade record — an event statistic over time, not a static rank-size list. |
| stars | `temporal-event` | Solar-flare/nanoflare/stellar-superflare thermal-energy frequency distributions are event-size statistics of discrete flare events accumulated over an observing period. |
| tropical-cyclones | `temporal-event` | Per-storm power dissipation index (PDI), fit across the population of discrete storm events occurring over time within each ocean basin — an event-size/frequency distribution, not a rank-size cross-section. |

Each entry got an inline comment (or an explicit "MEASURAND_TYPE NOTE" in the
attribute's `note` field for earthquake-fault-systems and tropical-cyclones,
where a note field already existed and needed extending) recording the choice
and rationale directly in the YAML, not just in this log.

### 2b. earthquake-fault-systems.yaml composite level strings resolved

For all five flagged blocks, `level` was set to the block's primary
attachment (the exemplar/class-general the headline value actually belongs
to), and the secondary-level information was moved into the block's `note`
field (created where absent) rather than dropped:

- `numerosity` -> `exemplar(san-andreas-fault)` (headline: 11-section SSAF
  count, primary-read); statewide UCERF3 figures noted.
- `component_ontology` -> `exemplar(san-andreas-fault)` (headline: SSAF
  segment/patch counts); statewide UCERF3 subsection count noted.
- `criticality` -> `exemplar(san-andreas-fault)` (headline: Page & Felzer
  SSAF b-value event-statistics figure); class-general mechanism-contested
  verdict (Watkins et al. 2016 vs. Bak & Tang 1989) noted as a secondary,
  class-general-level claim.
- `extreme_event_statistics` -> `exemplar(san-andreas-fault)` (headline:
  SSAF b-value); CSN 2009 California-statewide amplitude-rejection
  comparator noted.
- `cascade_susceptibility` -> `exemplar(san-andreas-fault)` (score applied
  to the SAF/SSAF exemplar); Wesnousky 2008 / Haeussler 2004 case-count
  statistics (which span CA and AK strike-slip systems generally) noted as
  the comparator evidence used to score this exemplar.

No information was lost — every secondary-level claim that was previously
folded into the composite `level` string is now stated explicitly in a note.

### 2c. earthquake-fault-systems.yaml `temporal_correlation` compound evidence_status

Set to the single enum fitting the headline value — `measured` (the
simulation-based ETAS rate-clustering evidence, primary-read within Page &
Felzer 2015, which is the data that IS actually present in the value field).
The "unknown (no formal Hurst exponent found)" half of the old compound
string was moved into a new leading paragraph of the `note` field; the
underlying fact (no Hurst exponent located, not guessed) was already carried
in the `value` field itself and remains there unchanged.

### 2d. Missing read-status annotations — searched research/phase1, phase3, phase4 (incl. verification/) logs

- **earthquake-fault-systems chaisson2011**: annotated `primary-read` —
  Phase 1's `research/phase1/quantitative-backbone.md` states "Full text
  retrieved and read" for Chaisson (2010/2011); independently re-confirmed
  at the v0.2 sweep per `research/v0.2-sweep/verification-debt/chaisson-and-bvalue.md`.
  Both logs cited in the annotation.
- **financial-markets hayek1945**: annotated `snippet-verified, bibliographic
  only` — `research/phase3/financial-markets-sources.md` item 2 states
  "[SNIPPET, bibliographic only] — confirmed via multiple independent
  sources... volume/issue/pages consistent across all." Log cited.
- **financial-markets gopikrishnan2000**: annotated `primary-read-adjacent
  via a quoting secondary` — `research/phase3/flag-cleanup-financial-markets.md`
  Flag 2 states the Phys. Rev. E paper's own full text was not obtained
  (binary PDF fetch failures), but its exponent+error-bar values were
  confirmed via Gabaix's own signed review, which the log itself recommends
  labeling "primary-author-review-verified" rather than "primary-read." Log
  cited with the exact recommended framing.
- **financial-markets gabaix-review**: annotated `primary-read` — the same
  log records this review itself WAS fetched directly this session
  (pages.stern.nyu.edu/~xgabaix/papers/pl-ar.pdf) and quoted verbatim. Log
  cited.
- **river-networks newman2003**: annotated `primary-read` — Phase 1's
  `research/phase1/quantitative-backbone.md` states "Full text and Table II
  retrieved and read" for Newman (2003), explicitly confirming no
  river/hydrology row exists in Table II; `research/phase4/river-networks-sources.md`
  item 5 confirms this entry reuses that project-wide primary read as its
  scoping citation (not independently re-read in the Phase 4 sweep itself,
  but the underlying primary read is real and log-confirmed). Both logs
  cited.
- **tropical-cyclones emanuel1986**: **NO log evidence found** of any fetch
  (full-text or snippet) of this specific paper, in any phase. Annotated
  exactly per the hard-rule fallback: `[read-status unrecorded at draft —
  no verification log found; treat as unverified]`. A corresponding
  `provenance.flags` entry was added under "feedback / openness_dissipation"
  (the columns citing emanuel1986) documenting the search and recommending
  re-verification.
- **tropical-cyclones emanuel2003**: annotated `snippet-verified` —
  `research/phase3/tropical-cyclones-sources.md` Section 5 item 1 confirms
  "existence... Snippet-only (title, journal, volume, pages, and abstract
  topic confirmed via search; full text not opened)." Log cited.
- **tropical-cyclones charney1966** and **krishnamurthy2019**: annotated
  `[search-summary level — not independently fetched as full text]` —
  `research/phase1/dynamics-criticality.md`'s "What's solid" section cites
  both papers' quantitative content (the ~2-week predictability limit,
  lambda_1~0.03/3hr) via search-summary characterization, not a fetched
  primary text; `research/phase3/verification/citation-check.md` separately
  confirms neither was independently re-fetched in Phase 3. Both logs cited.
- **tropical-cyclones chaisson2011**: annotated `primary-read` — same
  underlying paper as the earthquake-fault-systems chaisson2011 case above;
  both Phase 1's and the v0.2 sweep's full-text primary reads apply to the
  paper itself, independent of which entry cites it. Both logs cited.

Judgment call: `research/phase3/verification/citation-check.md`'s "Other
sourced claims spot-checked" section groups Emanuel 1986/1999/2003, Charney
1966, Krishnamurthy 2019, and Chaisson 2011 together as "flagged as still
UNVERIFIABLE at primary-text level, per entries' own honest [snippet-verified]
tags" — but on inspection, emanuel1986's citation string never actually
carried a `[snippet-verified]` tag in the entry (unlike emanuel2003, which
did carry snippet-level support via the Phase 3 sources sweep, and unlike
Charney/Krishnamurthy, which carry search-summary-level support via Phase 1).
Rather than mechanically applying the grouped "UNVERIFIABLE... per entries'
own [snippet-verified] tags" framing to emanuel1986 (which would misrepresent
a tag that was never there), emanuel1986 was treated as having no supporting
evidence at all and given the stricter "[read-status unrecorded at draft]"
annotation plus a flags entry, per the hard rule against inventing a
read-status.

### 2e. languages.yaml temporal_correlation exemplar

Confirmed by reading the block: the H~0.575 Hurst-exponent figure genuinely
attaches to a Chinese-corpus study (Yang, Gu & Yang 2016, "A Story of the
Stone" / Hongloumeng, 34,759 sentences) — not to English. Added a new
`chinese-classical-novel` entry to the entry's `exemplars:` block with the
exact role note specified in the brief ("evidence-carrying exemplar for
temporal_correlation only (added at validator-conformance pass)"). The value
was NOT relabeled to English — that would have misattributed the measurand.

### 2f. river-networks.yaml degree_distribution evidence_status

Removed the illegal `evidence_status: not-applicable` field. Checked both
sibling conventions named in the brief: **stars.yaml** and
**tropical-cyclones.yaml** both use `value: not-applicable` with NO
block-level `evidence_status` field at all (the epistemic status is carried
entirely by the value string + note) — this is also consistent with the
validator's own `isEscapedQuantitative` allowance (quantitative columns
whose value is `unknown` or starts with `not-applicable` do not require a
block-level evidence_status). **planetary-climate**'s `qualitative`
convention was checked too but judged inapplicable here — that convention
is for a different situation (a column with no measurement framework at all
for a continuously-scored system), not river-networks' situation (a
genuinely inapplicable node-degree representation for a tree topology).
Chose the **stars/tropical-cyclones convention**: omitted evidence_status
entirely and added an explanatory EVIDENCE_STATUS NOTE stating which
convention was chosen and why.

### 2g. tropical-cyclones.yaml numerosity evidence_status

Read the block: `~1e7 dynamical parcels at the declared 1 km^3 convention`
is project-computed (circulation volume, itself derived in
component_ontology, divided by the declared 1 km^3 atomicity-convention
cell size) — not a directly published parcel count. Added
`evidence_status: derived`, with a note explaining the computation.

---

## Judgment calls / deviations from a literal reading of the brief

1. **the-internet.yaml sources.broido-clauset2019** was upgraded alongside
   `newman2003` (the brief's package 1a instruction named only newman2003
   for the source-annotation upgrade). This was necessary for internal
   consistency: the same fix_log/flags edits record a full-text primary
   read of Broido & Clauset (2019) in the `degree_distribution.method` and
   `note` fields, so leaving the `sources.broido-clauset2019` annotation
   stating "arXiv abstract page only... full Table 1 classification NOT
   accessed" unchanged would have created a direct self-contradiction within
   the same entry. The addition is purely additive (an appended ADDENDUM
   sentence), consistent with the append-only spirit even though this
   specific source key wasn't named in the instruction.
2. **planetary-climate.yaml chaisson2011** annotation got an explicit
   `[primary-read]` bracket tag appended (in addition to the narrative
   ADDENDUM text) to guarantee the validator's read-status regex matches
   unambiguously — the ADDENDUM prose alone uses the words "SUCCEEDED" and
   "CONFIRMED" but not literally the token "primary-read" until the very
   end of a long paragraph; the explicit tag removes any doubt.
3. **tropical-cyclones.yaml emanuel1986**: as detailed in 2d above, this
   citation was given the stricter "unrecorded" annotation rather than
   folded into the citation-check log's broader "UNVERIFIABLE... per
   entries' own snippet-verified tags" language, because that grouped
   language doesn't accurately describe this specific citation (which never
   carried any tag). This is a stricter, not looser, reading of the
   evidence — consistent with "never invent a read-status."
4. Several multi-line `flag_cleanup_notes` / `flags` entries in
   tropical-cyclones.yaml needed conversion from plain unquoted YAML scalars
   to `>` folded block scalars (the parenthetical "(1) ... (2) ..." numbered
   lists broke js-yaml's plain-scalar indentation parser). This is a pure
   YAML-syntax fix with no content change — verified by re-running the
   validator and confirming the file still parses to the same logical
   content.
5. WARN-level `interchangeable` free-text values (component_ontology parts,
   3 entries: earthquake-fault-systems, river-networks, the-internet) were
   left untouched — not in the explicit 2a-2g ERROR list, and the brief's
   FINISH criterion is "0 errors" (exit code 0), which is achieved without
   touching these.

## Nothing was left un-fixed

Every genuine defect the validator reported at session start was resolved.
No `validate.mjs` bug was found — every check it performed was catching a
real defect in the data files, not a validator error. `validate.mjs` was not
modified.
