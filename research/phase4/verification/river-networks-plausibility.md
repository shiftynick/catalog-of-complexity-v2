# Plausibility Check — river-networks

Checker role: adversarial re-derivation of every derivable number, unit-check,
timescale-nesting check, hierarchy_depth vs component_ontology double-counting
check, evidence_status/confidence panel-spec compliance check.

Target: `N:\coc\data\classes\river-networks.yaml`
References: `schema/panel-spec.yaml`, `schema/anchors/*.yaml` (15 files),
`docs/schema.md`, `docs/roster.md`, `research/phase4/river-networks-sources.md`.

No edits made to the entry or any reference file, per instructions.

---

## 1. Re-derived numbers

### 1.1 `numerosity` — Horton bifurcation derivation (PASS)

Entry claims: R_B ~ 4, Strahler order 10 → first-order count ~ R_B^9 ~ 2.6e5;
total segments ~ R_B^9 x (R_B/(R_B-1)) ~ 3.5e5, "order of magnitude 1e5-1e6."

Re-derivation:
- 4^9 = 262,144 ≈ 2.6e5. Matches.
- Geometric series total = 262,144 x (4/3) = 349,525.3 ≈ 3.5e5. Matches.
- 3.5e5 falls inside the claimed "1e5-1e6" order-of-magnitude band. Correctly
  derived and correctly labeled `evidence_status: derived` with method shown.
- **Verdict: arithmetic correct, no issue.**

### 1.2 `fractal_dimension_spatial` — Horton-ratio D derivation (FAIL — arithmetic error)

Entry's own worked method: "Canonical relation D = log(R_B)/log(R_L)... With
R_B ~ 3.5-4.5... and R_L ~ 2-3, D ~ log(4)/log(2.3) ~ 1.9."

Re-derivation:
```
log(4)/log(2.3) = 1.6644...
```
This is **1.66, not 1.9**. The entry plugs in R_B=4 and R_L=2.3 explicitly and
asserts the result is ~1.9; it is not. Checked the full plausible input space:
- R_B=4, R_L=2.3 → D=1.664
- R_B=4, R_L=2.0 (low end of the entry's own stated R_L range) → D=2.00
- R_B=4, R_L=2.1 → D=1.868
- R_B=4.14, R_L=2.15 (literature example, Upper Jaguaribe basin, via web
  spot-check) → D=1.856, consistent with the ~1.9 literature range cited
  elsewhere.

So D~1.9 IS a defensible literature-consistent value in general (confirmed via
a web sanity check turning up an independent worked example, R_B=4.14/R_L=2.15
→ D=1.93, and a general literature range D 1.7-2.5), but the entry's own
specific worked arithmetic (R_B=4, R_L=2.3) does not produce it — it produces
1.66. Either the stated inputs are wrong, or the stated output (1.9) was
carried over from the literature without actually being re-derived from the
stated R_B/R_L, or R_L should read ~2.05-2.1 rather than 2.3. As written, the
method text is self-contradictory: a reader who executes the exact
computation the entry tells them to execute gets a different number than the
entry reports.

This also affects the `verifier_flags` situation: the existing flag
(`rodriguez-iturbe-rinaldo-1997-never-primary-read`) addresses citation
provenance, not this arithmetic problem — the arithmetic error is undetected
by the existing flag and is a distinct issue.

**Verdict: BLOCKER-grade arithmetic error in a `derived` value's own shown
method** — the panel-spec requires derived values to state a method: the
method as stated does not reproduce the stated result. This poisons the one
directly-computed quantitative structural metric for this class if published
uncorrected.

### 1.3 `spatial_extent` — unit-field mismatch (FAIL — unit error)

`value: 3.2e6`, `unit: m^2`, with an inline comment: "NOTE: recorded per
column unit (m); see detail for the basin-AREA figure in km^2."

- Panel-spec column definition (`schema/panel-spec.yaml` line 84-88):
  `spatial_extent` unit is **m** (linear extent), not m^2.
- The entry's own method text says the value 3.2e6 represents "characteristic
  linear extent... order-of-magnitude 10^6 m" — i.e., the number is meant to
  be in **meters**, not square meters.
- As literally labeled (`unit: m^2`), 3.2e6 m^2 = 3.2 km^2, which is
  absurdly small for a continental drainage basin (actual area ~3.2e6 km^2 =
  3.2e12 m^2) — off by six orders of magnitude from the true area, and
  inconsistent with the entry's own stated linear-extent intent (3.2e6 m =
  3,200 km, which is a plausible characteristic length and matches the
  method text's "~2,500-3,000 km" span statement).
- This is a straightforward mislabeled-unit bug: the `unit:` field should
  read `m`, not `m^2`, to match both the panel-spec column definition and
  the entry's own stated intent. The area figure (~3.2e6 km^2) is correctly
  and separately reported in `detail.drainage_area` with its own explicit
  km^2 unit, so the underlying area number is fine — only the top-level
  `unit:` tag on the `value:` field is wrong.

**Verdict: FIX-grade unit-label error.** Not a blocker because the intended
value and the correct area figure are both recoverable from the surrounding
text/detail block (a careful human reader will not be misled), but a
machine-readable consumer of `unit:` + `value:` alone would get 3.2 km^2,
which is wrong by ~6 orders of magnitude versus the actual basin area and
inconsistent with the panel-spec's own column unit.

### 1.4 Timescale nesting (PASS)

`characteristic_timescales` chain: fastest constituent process (unknown,
implicitly sub-day/days) < peak-flow event duration (2-30 days) < delta
lobe-switching cycle (1,000-1,500 yr) < system lifetime (4,500-7,000 yr).

Re-derivation: lifetime / cycle period = 4500/1500 to 7000/1000 = 3.6 to 7
lobe-switching cycles fit inside the stated system lifetime — internally
consistent (a "lifetime" timescale should comfortably exceed several
instances of the "dominant dynamics" timescale nested inside it, which it
does here by roughly an order of magnitude). No inversion, no contradiction.

### 1.5 `openness_dissipation` discharge range (PASS)

Entry cites "mean discharge 5,680-21,300 m^3/s depending on gauge location."
Cross-checked against the sweep doc's per-gauge figures (St. Louis 5,680;
Baton Rouge 16,800; Vicksburg 20,910; Delta 21,300 m^3/s) — the cited range's
endpoints (5,680 low, 21,300 high) exactly match the sweep doc's lowest and
highest reported gauge averages. Correctly transcribed, no invented range.

### 1.6 Hack's law cross-check (informational only, not a flag)

Hack's law L=1.4·A^0.6 is mentioned only in `emergent_phenomena` as
descriptive order-parameter text (h=0.6/0.5/0.47 per Muller 1973), not
computed or asserted as a specific number anywhere in the entry, so there is
no re-derivable claim to check here. For context: plugging the classic h=0.6
into A=2.98e6 km^2 wildly overpredicts length (~10,700 km vs actual
3,782-5,971 km), while the basin-size-dependent h=0.5 variant gives ~2,417
km — much closer to the actual range. This is exactly consistent with the
entry's own caveat that the Hack exponent is basin-size-dependent, and
because the entry never actually performs this computation or cites a
specific predicted-vs-actual number, there is nothing to flag.

### 1.7 Strahler order-10 claim (PASS, corroborated)

"Mississippi is one of only ~3 tenth-order-or-higher independent rivers
reaching the sea globally (alongside the Amazon at order 12 and the Niger)."
Independent web spot-check corroborates: Mississippi = 10th order at mouth,
Amazon = 12th order, and the "only three 10th-order-or-higher independent
rivers reaching the sea, including the Niger" framing is independently
attested. Consistent, not fabricated.

### 1.8 Mainstem length (PASS, within normal source variance)

3,782 km ≈ 2,350 mi vs. commonly cited 2,320-2,340 mi (3,734-3,766 km) —
within the normal measurement variance river-length figures always show
across sources; not a plausibility problem.

---

## 2. Hierarchy_depth vs component_ontology double-counting check

`component_ontology` declares one part type — channel links/segments,
Strahler-ordered 1-10, `itself_complex: no`. `hierarchy_depth` (value 10)
explicitly uses Strahler order itself as the level-counting convention,
described as "first-order headwater links (atoms) aggregating through
confluences up to the order-10 mainstem."

This is NOT a double-count: the atomic part (a single channel link at some
Strahler order) is the base unit: the 10 hierarchy levels are the successive
confluence-based aggregations of those same atoms (order-1 links joining to
form order-2 reaches, etc.), which is precisely what `hierarchy_depth`'s
panel-spec definition asks for ("nested organizational levels... built from
atomic parts"). The component_ontology count_oom ("1e5-1e6... ordered
Strahler 1-10") and the hierarchy_depth value (10 levels) are describing the
same object at two different panel columns (total count vs. depth of
nesting) without either column re-counting the same thing as both "a part"
and "a level" in a circular way. Verdict: **no double-counting violation.**

The drafter's own `provenance.flags` entry on `hierarchy_depth` already
correctly identifies this column's convention choice (order-as-level) as
something for the consistency checker to audit against cross-entry
convention (tropical-cyclones' aggregation-level count of 3, financial-
markets' institutional-tier count of 3) — that is a cross-entry
commensurability question properly owned by the consistency checker, not a
plausibility defect within this entry.

---

## 3. Evidence_status / confidence panel-spec compliance

Checked every attribute's `evidence_status` against the panel-spec's
controlled vocabulary (measured / measured-untested / measured-disputed /
derived / qualitative / unknown) and the filling rules (no-guessing,
power-law-rigor, measurand-required, level-required).

- `numerosity`: `derived`, method stated (Horton's law + observed order),
  confidence low, sources cited. Complies with "derived requires a method."
- `extreme_event_statistics`: `measured-untested` for a pre-CSN power-law-
  form flood-tail fit (alpha 0.27-0.90) — this is exactly the panel-spec's
  own prescribed default ("power-law tail claims default here until
  assessed") given that CSN's 24-dataset corpus excludes hydrology.
  Correctly applied, not inflated to `measured`.
- `criticality`: hybrid, score 0, `mechanism_status: none`, `evidence_status:
  qualitative`. Consistent with its own anchor (criticality.yaml, verified
  verbatim match) and correctly kept separate from the
  `extreme_event_statistics` alpha per `filling_rules.soc-two-claims` — the
  entry's own justification text states this separation explicitly and
  matches the anchor's own notes section almost word for word.
- `degree_distribution`: value `not-applicable`, **no `evidence_status` field
  present at all** (not even a literal `unknown`/`qualitative` tag). Panel-
  spec states evidence_status is "required on every value." This is a
  schema-completeness gap, not a wrong or fabricated value — a FIX-grade
  finding.
- `energy_rate_density`: `evidence_status: unknown`, no `confidence` field.
  This mirrors the schema.md worked example (`max_lyapunov_exponent: value:
  unknown` also omits confidence) — omitting confidence when the value
  itself is unknown is consistent project convention, not a violation.
- All rubric/hybrid columns reused from anchors (self_organization,
  criticality, tipping_transitions, information_processing,
  cascade_susceptibility, modularity, chaos_sensitivity, adaptive_capacity,
  decentralization-comparator) were cross-read against their source anchor
  files in `schema/anchors/`. Every reused score, justification, and
  `evidence_status` matches its anchor file verbatim or near-verbatim — no
  score drift, no silent re-justification, no anchor contradiction found.

---

## 4. Anchor-file cross-checks performed

Read in full and compared against entry text: `modularity.yaml`,
`criticality.yaml`, `chaos_sensitivity.yaml`, `decentralization.yaml`,
`self_organization.yaml`, `tipping_transitions.yaml`,
`information_processing.yaml`, `cascade_susceptibility.yaml`,
`adaptive_capacity.yaml`. All nine river-networks/Mississippi anchor entries
(where present) match the class entry's scores and justifications exactly;
no discrepancy found. (`decentralization.yaml` has no dedicated
river-networks anchor — the entry correctly cites the *stars* anchor as
"closest comparator" rather than fabricating a nonexistent river-networks
anchor row, which matches what's actually in the file.)

---

## 5. Summary of findings

| # | Column | Severity | Issue |
|---|--------|----------|-------|
| 1 | fractal_dimension_spatial | blocker | Stated method "D ~ log(4)/log(2.3) ~ 1.9" is arithmetically wrong: log(4)/log(2.3) = 1.66, not 1.9. The ~1.9 figure is literature-plausible in general but not reproduced by the entry's own shown calculation with its own stated inputs. |
| 2 | spatial_extent | fix | `unit: m^2` contradicts both the panel-spec column definition (unit = m, linear extent) and the entry's own method text, which explicitly says the value 3.2e6 is meant to be read in meters, not square meters. As labeled, 3.2e6 m^2 = 3.2 km^2, six orders of magnitude too small for the actual basin. |
| 3 | degree_distribution | fix | No `evidence_status` field present at all, contrary to panel-spec's "required on every value" rule (value is `not-applicable`, but the required field is simply missing rather than filled with an appropriate status token). |

No numerosity, timescale-nesting, hierarchy_depth/component_ontology
double-counting, or anchor-contradiction issues were found. Discharge-range,
Strahler-order, and mainstem-length figures all independently checked out
against their cited sources and/or plausible external corroboration.
