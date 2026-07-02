# Plausibility check — world-wide-web

Role: adversarial plausibility checker. Re-derive every derivable number, check
unit conversions, check timescale nesting, check hierarchy_depth against
component_ontology for double-counting, check evidence_status/confidence
combinations against panel-spec (schema/panel-spec.yaml) and filling_rules.
Reference documents read in full: schema/panel-spec.yaml, the target entry
(data/classes/world-wide-web.yaml), data/classes/the-internet.yaml (comparator
entry, the sole existing precedent this entry mirrors throughout), schema/anchors/
self_organization.yaml, schema/anchors/decentralization.yaml,
schema/anchors/nonlinearity.yaml, and the sweep report
research/v0.2-sweep/expansion/world-wide-web-sources.md. Entry not edited.

Date: 2026-07-02.

---

## 1. Re-derived arithmetic

### 1a. Newman 2003 Table II — mean degree z (directed graph convention)

Entry (degree_distribution.method) claims:
- nd.edu domain: n=269,504, m=1,497,135, z=5.55
- Altavista: n=203,549,046, m=2,130,000,000, z=10.46

Re-derivation: for a DIRECTED graph, Newman's Table II convention for mean
degree is z = m/n (not 2m/n, which would be the undirected convention used
elsewhere in the same table for undirected rows like the Internet AS-graph).

```
nd.edu:     m/n = 1,497,135 / 269,504     = 5.555  -> matches claimed z=5.55  OK
Altavista:  m/n = 2,130,000,000/203,549,046 = 10.464 -> matches claimed z=10.46 OK
```

Both check out exactly under the directed-graph convention. **The entry's own
directed-graph note ("this graph is DIRECTED... must not be silently averaged
or conflated") is itself consistent with getting z right via m/n rather than
2m/n** — no arithmetic error. PASS.

### 1b. Degree-exponent range claim

Entry's degree_distribution.value states: "TWO independent crawls plus one
earlier, differently-sourced dataset all cluster near alpha~2.1-2.7."

Individual exponents cited in .method:
- Newman nd.edu: in=2.1, out=2.4
- Newman Altavista: in=2.1, out=2.7
- Barabási & Albert (in-degree only): gamma=2.1±0.1

Full set = {2.1, 2.4, 2.1, 2.7, 2.1}. Min=2.1, max=2.7. **The stated range
"2.1-2.7" is the exact min/max of the cited figures.** PASS.

### 1c. Registered-domains figure

386.9 million -> 3.869e8, entry states "~3.9e8" in three places (numerosity
detail, component_ontology, cross-referenced from the-internet.yaml's
identical dnib2025 figure). Correct rounding. PASS.

### 1d. Historical milestone (Google 2008)

"1 trillion (1,000,000,000,000) unique URLs" = 1e12. Entry's
`historical_milestone_unique_urls: "1e12"` is the correct scientific-notation
transcription. PASS.

### 1e. System-lifetime timescale (OOM check)

Entry: system lifetime "~1e9 s (~35 years: Berners-Lee's 1989 CERN proposal /
1991 first public site to present)," dated 2026-07-02.

```
1989-03 proposal -> 2026-07-02: ~37.3 years -> 1.18e9 s
1991-08 first site -> 2026-07-02: ~34.9 years -> 1.10e9 s
1e9 s expressed in years: 31.7 years
```

The claimed "~35 years" is accurate (34.9-37.3 depending on which start date is
used); "~1e9 s" is the correct order of magnitude for both (an OOM bucket
spans a factor of ~3, and 1.1-1.2e9 s rounds cleanly to the 1e9 s bucket).
PASS, no contradiction between the "~35 years" figure and the "~1e9 s" OOM
label.

---

## 2. Internal inconsistency found (FIX)

### component_ontology.parts[pages].count_oom range excludes the entry's own cited figure

Line 160:
> `count_oom: "~1e8-1e11 depending on definition and date (269,504 in the 1999
> nd.edu crawl; ~2.04e8 in the 1999-2000 Altavista crawl; at least 3.98e9
> currently indexed...)"`

The stated range floor is 1e8. The FIRST figure cited in the same parenthetical
as supporting evidence for that range is 269,504 pages (nd.edu crawl), which is
~2.7e5 — **three orders of magnitude below the stated range floor of 1e8**. The
range as written does not actually bound all the values it cites in its own
justification.

This is a genuine internal inconsistency (the range and its own supporting
list of instances disagree), not a citation error — 269,504 is correctly
transcribed and correctly attributed to Newman 2003 elsewhere in the entry
(numerosity.detail, degree_distribution.method). The fix is arithmetic/range
correction, not a source problem.

Compare: the sibling row, hyperlinks (line 164), states "~1e6-1e9" and its
cited figures are 1,497,135 (~1.5e6) and ~2.13e9 — both fall inside 1e6-1e9
(2.13e9 is right at/just above the 1e9 ceiling, tolerable as an OOM bound).
The pages row's floor is simply set too high relative to its own earliest
cited instance.

**Severity: fix.** Suggested correction: widen the floor to ~1e5-1e11 (or
state the range as bounding only the "current era" figures ~1e8-1e11 and
explicitly except the 1999 nd.edu figure as "sub-range, historical" ). This
does not poison the catalog (the underlying instance-level numbers are all
correct and correctly sourced) but the summary range is misstated and should
not stand as written.

---

## 3. Hierarchy_depth vs component_ontology — no double-counting found

Entry declares hierarchy_depth=2: pages (atoms, level 0 implicit) -> sites/
domains (level 1, aggregation of pages under one registered domain) -> the
single global page/hyperlink graph (level 2). Hyperlinks are explicitly
excluded from the level count ("interaction substrate/tokens... not a
separate counted aggregation level"), and page authors are excluded as
out-of-scope(human).

Cross-checked against component_ontology.parts, which lists four part types:
pages, hyperlinks, sites/domains, authors. The hierarchy_depth convention
picks exactly two of these (pages as atoms, sites as level 1) and gives
explicit, non-circular reasons for excluding the other two (hyperlinks =
substrate, not a level; authors = out-of-scope(human)). No component is
counted as both a "part" and a separately-numbered "level" — pages are the
atom (level 0 by convention, not itself numbered in the "2" total) and sites
are level 1; the graph-as-a-whole is level 2, a bona fide aggregation above
sites, not a restatement of any one part type. **No double-counting.** PASS.

Comparison against the-internet.yaml's hierarchy_depth=3 (AS nodes -> tiers(1)
-> regional fabrics(2) -> global graph(3)) is coherent: WWW's shallower count
is explicitly justified by the absence of a Tier-1/Tier-2/Tier-3 transit-style
intermediate layer among sites, which is a real, non-fabricated structural
difference between the two systems (sites do not have peering/transit
relationships with each other the way ASes do). PASS.

---

## 4. Timescale nesting

Four characteristic_timescales rows: page-load (~1e-2-1e0 s), link-rot
half-life (unknown), "crawl-to-crawl graph growth" (~1e9 s), system lifetime
(~1e9 s). Fastest to slowest: 1e-2 s < ... < 1e9 s ≈ 1e9 s. No inversion
(nothing claims a "dominant dynamics" timescale slower than the system
lifetime, or a "fastest" timescale that isn't actually the fastest).

**Note (not a blocker):** the "crawl-to-crawl graph growth" row and the
"system lifetime" row carry the *same* order-of-magnitude value (~1e9 s) and,
per the row's own admission, measure the *same thing* — the entry states
outright that because the nd.edu (1999) and Altavista (~1999-2000) crawls are
"effectively contemporaneous," this row "records the SYSTEM's own age, not an
inter-snapshot growth timescale." That is an honest, well-flagged
self-disclosure (not a fabrication or a silent duplication), but it does mean
the panel now carries two rows under different names that are numerically and
conceptually redundant, which could read as an attempt to pad the timescale
list to four entries. This is a wording/scoping question for the drafting
step, not a plausibility defect — the math is not wrong, the row is just
honestly mislabeled as measuring something it admits it doesn't measure. Flag
as a note.

---

## 5. evidence_status / confidence combinations vs panel-spec

Checked every evidence_status value in the entry (22 occurrences) against
panel-spec's six-value enum (measured, measured-untested, measured-disputed,
derived, qualitative, unknown) — all values used are legal members of the
enum; no invalid or invented status strings.

- `degree_distribution`: evidence_status: measured-untested — REQUIRED by
  filling_rules.power-law-rigor for any power-law claim without CSN-2009-grade
  testing. All three exponent measurements (Newman x2, Barabási & Albert) are
  pre-CSN. Correctly applied. PASS.
- `numerosity`: evidence_status: measured-disputed, confidence: low — multiple
  genuinely different measurands (indexed pages vs. unique-URLs-ever-seen vs.
  registered domains vs. graph nodes/edges at different crawl dates), one of
  which (indexed-page tracking) has an acknowledged broken/stale methodology.
  This mirrors the-internet.yaml's identical numerosity treatment exactly
  (same rationale: distinct measurands, not competing measurements of one
  quantity). Legitimate use of measured-disputed. PASS.
- `instance_population`: evidence_status: measured, confidence: high, with NO
  `sources:` field. Per panel-spec, "measured requires a source." However,
  this is a pre-existing pattern copied verbatim from the-internet.yaml's own
  instance_population column (also `measured`/`high` with no sources block),
  justified there and here as "n=1 is definitionally certain, not because a
  survey was conducted" — a tautological/definitional fact about a singleton
  class, not an empirical measurement requiring citation. Not a fresh problem
  introduced by this entry; flagged only as a **note** since the same pattern
  is already accepted precedent in a verified entry (the-internet.yaml, status:
  verified). If it is to be revisited, it should be revisited for both entries
  together, not this one alone.
- `energy_rate_density`: value: unknown, evidence_status: unknown, confidence:
  n/a, unit still declared (erg s^-1 g^-1) per panel-spec's requirement that
  the unit be stated even when the value is unknown. Correct. PASS.
- Hybrid columns (modularity, chaos_sensitivity, criticality, tipping_transitions,
  memory_hysteresis, cascade_susceptibility) all carry a rubric score plus
  qualitative justification; none fabricates a quantitative half where none
  exists (chaos_sensitivity=0 and criticality=0 both explicitly state "no
  study located" rather than inventing a number). Per panel-spec, hybrid
  columns require "rubric score, PLUS quantitative evidence where published" —
  the "where published" qualifier makes an empty quantitative half legal when
  none exists, and the-internet.yaml's own chaos_sensitivity column
  establishes this exact precedent ("The QUANTITATIVE half of this hybrid
  column remains empty — no exponential-divergence figure exists to record").
  PASS.
- `criticality.mechanism_status: none` — required structured field present
  and correctly set (no SOC/critical-point mechanism proposed for any
  Web-internal event class). PASS.

---

## 6. Power-law-rigor and SOC-two-claims discipline

- `degree_distribution` (topology/static claim) vs `criticality` (dynamical
  event-statistics claim): the entry explicitly separates these per
  filling_rules.soc-two-claims-style reasoning, citing the criticality
  anchor's own boundary_clarifications ("events-not-structure") to justify
  NOT letting the heavy-tailed degree distribution count toward criticality.
  This is the same discipline the-internet.yaml applies to its own AS-graph
  degree distribution vs. its criticality column. Correctly kept separate;
  no conflation. PASS.
- `extreme_event_statistics`: correctly left `unknown` rather than
  repurposing the (already-recorded, separately-labeled) static degree
  distribution as an event-size distribution — the entry explicitly names
  the measurand_type distinction (temporal-event vs. static-cross-sectional)
  per panel-spec's requirement and declines to guess toward either. PASS.

---

## 7. Cross-entry numeric consistency (the-internet.yaml comparator)

- Registered domains figure (386.9M / DNIB 2025) reused identically between
  the two entries, with explicitly different framing (DNS naming layer vs.
  web sites) rather than silently duplicated — consistent, non-contradictory,
  and the differentiation is substantive (site aggregation layer above pages
  vs. naming-layer entry in DNS), not cosmetic. PASS.
- Newman 2003 source-key and citation string reused verbatim from
  the-internet.yaml (same source, same paper, different table rows) — no
  drift between the two entries' citation strings for the shared source. PASS.
- hierarchy_depth (WWW=2 vs Internet=3), nonlinearity (WWW=1 vs Internet=2),
  self_organization (WWW=3 vs Internet=2), decentralization (WWW=3 =
  Internet=3), openness_dissipation (WWW=1 vs Internet=2) — every comparative
  claim in the WWW entry's justifications that references the Internet's
  score correctly states the Internet's actual score as recorded in
  the-internet.yaml (spot-checked against the source file read in full this
  session: Internet hierarchy_depth=3, nonlinearity=2, self_organization=2,
  decentralization=3, openness_dissipation=2 — all match). No misquoted
  comparator scores. PASS.

---

## 8. Findings summary

One **fix**-level internal inconsistency (component_ontology pages count_oom
range 1e8-1e11 self-contradicts its own cited 269,504/~2.7e5 supporting
figure). One **note**-level redundancy (two characteristic_timescales rows
carry the same ~1e9 s value and, per the entry's own admission, measure
essentially the same thing under different names). No blockers: no arithmetic
errors, no unit-conversion errors, no evidence_status misuse, no
hierarchy_depth double-counting, no power-law-rigor or SOC-two-claims
violations, no misquoted comparator figures against the-internet.yaml. All
directed-graph mean-degree, exponent-range, and OOM/timescale derivations
re-checked and confirmed correct.
