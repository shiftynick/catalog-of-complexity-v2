# Plausibility Check — tropical-cyclones.yaml & financial-markets.yaml

Adversarial arithmetic/unit/internal-consistency audit against `schema/panel-spec.yaml`
conventions. Scope: re-derive the seven specified computations independently; no edits
made to either entry file.

---

## 1. Phi_m derivation (tropical-cyclones — `energy_rate_density`)

**Claim:** latent 6.0e14 W, kinetic 1.5e12 W, mass denominator ~1e16 kg (from 0.7 kg/m^3
x circulation volume ~1.2e16 m^3), conversion 1 W/kg = 1e4 erg/s/g, results ~600 and ~1.5
erg/s/g respectively.

**Independent re-derivation:**

- Volume: pi x (5.0e5 m)^2 x 1.5e4 m = **1.1781e16 m^3**. Entry states "~1.2e16 m^3" —
  correct to 2 sig figs. Arithmetic OK.
- Mass: 0.7 kg/m^3 x 1.1781e16 m^3 = **8.25e15 kg**. Entry states "~1e16 kg." log10(8.25e15)
  = 15.92, i.e. the true figure sits at the *top* of the 1e15 decade, essentially on the
  boundary with 1e16. Rounding to "~1e16 kg" is defensible as an order-of-magnitude
  statement but is the generous-rounding direction (a stricter OOM convention rounding at
  the geometric mean of the decade, ~3.16e15, would also land at 1e16, so this is fine
  either way). Not an error.
- Conversion factor: 1 W/kg = (1e7 erg/s)/(1e3 g) = **1e4 erg/s/g** exactly as claimed. Correct.
- Using the entry's own rounded mass (1e16 kg): latent = 6.0e14/1e16 x 1e4 = **600
  erg/s/g**; kinetic = 1.5e12/1e16 x 1e4 = **1.5 erg/s/g**. Both match the claimed values
  exactly.
- Using the *unrounded* derived mass (8.25e15 kg) instead of the stated "~1e16 kg": latent
  = 727.6 erg/s/g, kinetic = 1.82 erg/s/g — about 21% higher than the values actually
  reported. This is a compounding-rounding effect (volume rounded up, density is already
  a soft estimate, then mass rounded up again to a clean 1e16), not an arithmetic error,
  but it means the reported ~600/~1.5 are the *low* end of what the entry's own stated
  inputs support at full precision. Within the "order of magnitude" framing this is
  immaterial.
- Ratio check: 6.0e14/1.5e12 = exactly 400, matching the entry's stated "ratio 400:1."
  Correct.

**Density sanity check (0.7 kg/m^3 column mean):** Using a standard exponential
atmosphere (surface rho0 = 1.2 kg/m^3, scale height H = 8 km) integrated from 0–15 km
gives a column-mean density of **~0.54 kg/m^3** (mass-per-area / height = rho0 x H x
(1-e^(-15/8)) / 15). A simple unweighted average over 2.5 km levels gives ~0.57 kg/m^3.
The entry's 0.7 kg/m^3 is ~25–30% higher than either estimate but still same order of
magnitude, and column-mean density is sensitive to exactly which vertical weighting and
moisture correction is used (moist air is less dense than dry at the same T/p, partially
offsetting; boundary-layer-heavy weighting in a convective column also pushes the mean up
somewhat). Verdict: **plausible but on the high side; a defensible order-of-magnitude
estimate, not wrong**, and correctly flagged in `verifier_flags:
[mass-denominator-is-project-estimate]`.

**Overall verdict for item 1: OK.** All stated arithmetic reproduces exactly. The
input assumptions (density, volume) are reasonable order-of-magnitude estimates,
appropriately flagged as project estimates rather than published figures.

---

## 2. Parcel count (tropical-cyclones — `numerosity` / `component_ontology`)

**Claim:** ~1e7 parcels at 1 km^3 resolution, from circulation volume ~1.2e16 m^3.

**Re-derivation:** 1 km^3 = 1e9 m^3. 1.1781e16 m^3 / 1e9 m^3 = **1.178e7** ≈ 1e7. Matches
exactly.

**Verdict: OK.**

---

## 3. NYSE internal consistency (financial-markets — `numerosity` / `characteristic_timescales`)

**Share/dollar volume implied price:** $8.06e10 / 1.54e9 shares = **$52.34/share**. This is
a plausible market-cap-weighted average share price for U.S. large/mid caps circa 2025
(most NYSE-listed common stock trades in the $20–300 range; a handful of extreme outliers
like BRK.A trade far higher but are immaterial to a volume-weighted average). **Plausible,
no red flag.**

**Message-volume growth 2021→2025:** 1.2e12 / 3.56e11 = **3.37x** over 4 years (~38%
CAGR). This is fast but not implausible for order-message traffic — HFT/algorithmic
message volumes (including quote updates, not just trades) have historically grown at
comparable or faster rates in prior multi-year windows, and message-to-trade ratios have
been rising independently (more cancels/replaces per executed trade). However, the entry
itself flags the two figures as being of different evidentiary quality: 356e9 is
"primary-read" from NYSE Data Insights (a specific, dated record), while "~1.2e12/day 2025
peaks" is explicitly "snippet-level" from secondary aggregators (per the `numerosity` note
and `market-scale-figures` source annotation "snippet-verified"). Additionally, one
figure is a **single-day record** (2021-03-04, a known high-volatility/high-volume date)
and the other is described as "2025 **peaks**" (plural, likely also episodic highs) — so
the comparison is at least apples-to-apples in being peak-to-peak, which is appropriate.
But there is a **latent definitional risk**: "order messages" at NYSE (Data Insights)
specifically vs. whatever the secondary 2025 aggregator figure is measuring (could be
consolidated-tape events, OPRA options messages folded in, or a different exchange-group
scope, e.g. NYSE+ICE family vs. NYSE alone) are not confirmed to be the same measurand.
The entry does not explicitly verify that both figures share the same definition —
**this is a real, currently unresolved units/definition risk**, correctly implied by the
"snippet-level" caveat but not fully resolved.

**Verdict: SUSPECT** — the 3.4x growth figure is order-of-magnitude plausible but rests
on comparing a primary-verified single-day record to a snippet-level, possibly
differently-scoped 2025 statistic; the entry's own sourcing notes already hint at this
but stop short of stating the definitional-consistency risk directly.

**Secondary note (timescale precision):** `characteristic_timescales` labels order-message
processing "sub-millisecond (implied by ~1e11–1e12 messages/day)." Recomputing: at 1e11
msgs/day the average inter-message spacing is 86400 s / 1e11 = **8.64e-7 s ≈ 0.86
microseconds**; at 1e12/day it's **0.086 microseconds**. Both ends of the stated range are
2–3 orders of magnitude faster than "sub-millisecond" — they are *sub-microsecond*. The
label is technically true (sub-microsecond is a fortiori sub-millisecond) but is a
significant understatement of the actual implied speed, and could mislead a reader
comparing this timescale entry against others in the catalog that use "sub-millisecond"
to mean order 1e-4–1e-3 s rather than order 1e-7 s.

**Verdict: SUSPECT** — label imprecision (off by ~3 orders of magnitude in the
implied number, though not technically false).

---

## 4. Tail exponents internal consistency (financial-markets — `extreme_event_statistics`,
`temporal_correlation`, `chaos_sensitivity`)

Stated: return tail alpha ~3 ("inverse cubic law"), volume tail ~1.5, trade-count tail
~3.4, |return| autocorrelation power-law decay beta in [0.2, 0.4] (long memory),
chaos_sensitivity score 1 with text explicitly asserting "no accepted evidence" of
low-dimensional deterministic chaos alongside "nonlinear statistical dependence yes."

**Cross-check:** The triple (alpha_return ≈ 3, alpha_volume ≈ 1.5, alpha_tradecount ≈ 3.4)
is the well-known result from the Gopikrishnan/Plerou/Amaral/Meyer/Stanley research
program (the "inverse cubic law" paper for returns, and companion papers for volume and
trade-count tails). These three numbers are mutually consistent with each other and with
the literature as a *set* — no internal contradiction. The long-memory beta in [0.2, 0.4]
for |returns| autocorrelation (a *volatility clustering* statistic) measures a different
property than the tail exponents (a *cross-sectional distributional* statistic at a point
in time) — heavy tails and long memory in volatility are not competing or contradictory
claims; both are standard, jointly-observed "stylized facts" (Cont 2001 is literally a
survey organized around exactly this joint list). The chaos_sensitivity=1 rubric score
with "no deterministic chaos" text is likewise **not contradicted** by either the heavy
tails or the long memory: both are well-established as stochastic/statistical phenomena
(clustered volatility, fat-tailed innovations) rather than evidence of low-dimensional
deterministic dynamics — this is precisely the resolution the entry's own justification
text describes (citing the post-Scheinkman-LeBaron BDS-test consensus), and it tracks
`filling_rules.no-market-chaos` correctly.

**Citation gap:** The volume-tail (~1.5) and trade-count-tail (~3.4) figures are not
obviously covered by either `gopikrishnan1998` (returns only) or `gabaix2003` (a
theoretical mechanism paper) — the actual empirical source for those two numbers is most
likely a separate Gopikrishnan et al. (2000, Physical Review E 62) paper on volume/trade-count
statistics, which is not in the entry's `sources:` block. This is a **citation-completeness
issue**, not an arithmetic/plausibility one, but is adjacent to the mandate — flagging for
the citation checker.

**Verdict: OK** (no internal numeric contradiction) with a **SUSPECT** sub-note on
citation coverage for the volume/trade-count figures.

---

## 5. Timescale entries — units, ranges, mutual consistency

**Tropical cyclones:**
- convective overturning: ~1e3–1e4 s = 0.28–2.8 h
- eyewall replacement cycle (ERC): 12–48 h typical (range 6–54 h)
- storm lifetime: ~1–2 weeks (~1e6 s)

Re-derivation: 1 week = 168 h = 604,800 s; 2 weeks = 1,209,600 s. "~1e6 s" is a reasonable
single order-of-magnitude label for a 6.05e5–1.21e6 s range (geometric mean ≈ 8.6e5 s,
close enough to "~1e6"). **Consistent.** Nesting check: convective overturning (hours or
less) << ERC (0.5–2 days) << storm lifetime (7–14 days) — a proper timescale hierarchy
with each level 1–2 orders of magnitude longer than the one below, exactly as physically
expected. A storm lasting 7–14 days could undergo roughly 3.5–28 ERCs (lifetime/single-ERC
ratio), consistent with the literature's observation that multiple eyewall replacement
cycles can occur within a single storm's life. **No contradiction.**

**Financial markets:**
- order-message processing: sub-millisecond (see item 3 — actually sub-microsecond at the
  stated message-volume range; label imprecision noted above)
- settlement cycle: T+1 (~1 trading day, i.e. ~8.6e4 s) — dated and sourced correctly
  (SEC 2024-62, effective 2024-05-28)
- volatility regimes: months
- secular market cycles: years to decades

Nesting check: message processing (sub-ms/µs) << settlement (~1 day) << volatility
regimes (months) << secular cycles (years-decades) — proper monotonic hierarchy, each
step several orders of magnitude longer. **Consistent**, aside from the sub-millisecond
label imprecision already flagged.

**Verdict: OK** for both files' internal timescale nesting; **SUSPECT** carried over from
item 3 for the "sub-millisecond" label.

---

## 6. Hierarchy_depth conventions (both entries claim value 3)

**Tropical cyclones:** "parcels (atoms) -> convective cells (1) -> rainband/eyewall
complexes (2) -> storm-scale vortex (3)." The stated convention is "count aggregation
levels above the atomic parts up to and including the whole." This is stated explicitly
and is self-consistent with the level list (3 levels counted, ending at the whole system).

However, cross-referencing `component_ontology`: it lists **two** part types — "moist air
parcels" AND "convective cells / hot towers" (with `itself_complex: convection-cells`,
i.e., cells are themselves a separate cataloged class via compositional recursion).
Listing convective cells as a component-ontology *part type* alongside parcels, while
`hierarchy_depth` treats "convective cells" purely as *level 1* built from parcels, is a
mild tension: component_ontology's parts list is nominally the atomic-parts inventory, yet
one of its two "parts" is explicitly a level-1 aggregate elsewhere in the same entry. This
isn't a contradiction (the entry's provenance/documentation supports treating cells as a
compositionally-recursive sub-system rather than a true atom), but the schema's own
`component_ontology` definition text says parts are "the system's atomic parts, per
filling_rules.atomicity-convention" — cells are not atomic by the entry's own scoping
note ("atomic parts ... moist air parcels"). This is a minor internal labeling
inconsistency worth a verifier note, not a numeric error.

**Financial markets:** "agents (atoms) -> desks/firms (1) -> venues/exchanges (2) ->
integrated market system (3)." Orders are explicitly excluded ("treated as interaction
tokens, not a level") — a clean, stated editorial choice, consistent with itself. But
`component_ontology` declares atomic parts as **agents, orders, AND listed instruments**
(three part types, per the scoping note's own atomicity declaration: "trading agents and
orders"). "Listed instruments" (the traded securities themselves) do not appear anywhere
in the hierarchy_depth level list (not as atoms, not as any level 1/2/3 rung). This is a
bigger gap than the orders case (which is at least explicitly addressed) — listed
instruments are simply absent from the hierarchy discussion with no explanatory note.

**Convention comparability across entries:** Both entries use the same declared
convention ("levels above atoms, up to and including the whole = 3"), and both terminate
at "the whole system" as level 3. This is genuinely apples-to-apples and both hit the
schema's `level-required` and "declare the counting convention" requirements. **The
convention itself is consistently applied between the two entries.**

**Verdict: SUSPECT** — conventions match across entries (no cross-entry inconsistency),
but each entry has an internal, unexplained mismatch between its declared atomic
component-ontology parts and what actually appears in its own hierarchy_depth level list
(TC: cells double-counted as both a part-type and a level; FM: listed instruments omitted
entirely from the level list with no note).

---

## 7. evidence_status / confidence combinations vs panel-spec conventions

Panel-spec legal `evidence_status` values: measured, measured-disputed, derived,
qualitative, unknown. Both files use only legal values — no schema violation on vocabulary.

Specific combinations worth flagging:

- **tropical-cyclones `extreme_event_statistics`**: `evidence_status: measured`,
  `confidence: low`, with `verifier_flags: [snippet-only-primary-fetch-failed,
  no-CSN-grade-critique-located]` and an explicit note that "this stays confidence: low
  until the primary paper is read... no published critique was located." Per
  `filling_rules.power-law-rigor`: "A power-law claim enters the catalog only with
  CSN-2009-grade statistical support, **or explicitly labeled 'claimed-untested.'**" This
  entry's CSN-grade status is explicitly unresolved, yet the value is not labeled
  "claimed-untested" — it is labeled "measured" (with caveats via confidence/flags
  instead). This is a plausible reading of the rule (flags + low confidence convey the
  same caution) but is arguably a literal-text deviation from the stated filling rule.

- **financial-markets `extreme_event_statistics`**: same pattern — `measured`,
  `confidence: medium`, `verifier_flags: [csn-cross-check-unresolved, ...]`, explicit note
  that "whether CSN 2009 re-tested equity-return tails... was not confirmed this session."
  Same tension with `power-law-rigor` as above.

- **financial-markets `temporal_correlation`**: `evidence_status: measured`, `confidence:
  medium`, but the note states the source was "read once-removed (via a citing paper)" —
  i.e., not primary-verified against Cont 2001 itself. "Measured" for a claim that hasn't
  been checked against its own primary source is a mild overstatement; "confidence: medium"
  partially compensates but the base evidence_status arguably should carry more hedging
  (or this should wait for citation check before being called "measured" outright).

- **tropical-cyclones `energy_rate_density`**: `evidence_status: derived`, method fully
  spelled out with explicit numeric inputs and the conversion factor — this is a
  **model example** of correct 'derived' usage per panel-spec (`derived = computed by this
  project from published inputs, flagged as ours`). No issue.

- **financial-markets `energy_rate_density`**: `evidence_status: unknown`, value `unknown`
  — correct use of the "unknown is always legal" rule (`no-guessing`); the entry
  explicitly explains *why* (conflicting capacity vs. draw figures) rather than guessing.
  **Textbook-correct application.**

- **tropical-cyclones `fractal_dimension_spatial`**: `evidence_status: measured`,
  `confidence: medium`, but the entry's own method text admits "a hurricane-specific
  published D was not located; this is the general tropical convective cloud-field figure"
  — i.e., the measurand is a **proxy**, not the entry's actual system. `measurand-required`
  is technically satisfied (the measurand is named), but calling a proxy-system value
  "measured" for tropical cyclones specifically, rather than something like
  "measured (proxy measurand)," is a mild mislabel risk.

**Verdict: SUSPECT** (systemic, not a single-value bug) — a recurring soft pattern across
both entries where `evidence_status: measured` is used for claims that are explicitly
self-flagged (via notes/verifier_flags) as not fully primary-verified or not yet CSN-tested.
None of these individually looks like a fabricated or guessed value (the "no-guessing"
rule is respected throughout — every uncertain figure is candidly flagged), but the
panel-spec's five-way vocabulary has no intermediate state between "measured" and
"qualitative"/"unknown" for "measured-but-not-yet-verified-by-us" or "claimed-untested"
power laws, which may be a **schema gap** rather than an entry error — worth surfacing to
the schema owner rather than treating as a fix-the-entry issue.

---

## Summary of computations re-derived

| # | Computation | My result | Entry's claim | Match? |
|---|---|---|---|---|
| 1a | Circulation volume | 1.178e16 m^3 | ~1.2e16 m^3 | Yes |
| 1b | Mass (0.7 kg/m^3 x volume) | 8.25e15 kg | ~1e16 kg | Yes (rounds up, boundary case) |
| 1c | Phi_m latent (using stated 1e16 kg) | 600 erg/s/g | ~6e2 | Exact |
| 1d | Phi_m kinetic (using stated 1e16 kg) | 1.5 erg/s/g | ~1.5 | Exact |
| 1e | W/kg -> erg/s/g conversion | 1e4 | 1e4 | Exact |
| 1f | Latent:kinetic ratio | 400 | 400:1 | Exact |
| 2 | Parcel count | 1.178e7 | ~1e7 | Yes |
| 3a | NYSE avg share price | $52.34 | (implied ~$52) | Plausible |
| 3b | Message growth 2021->2025 | 3.37x | (implied) | Plausible, definitional-risk flagged |
| 3c | Implied message spacing at 1e11-1e12/day | 0.086-0.86 microseconds | "sub-millisecond" | True but understates by ~3 OOM |

No arithmetic errors were found anywhere in the two entries. All numeric claims that
could be independently re-derived reproduced exactly or to within stated rounding. Issues
found are all of the SUSPECT class (imprecise labeling, citation-completeness gaps,
internal labeling mismatches between component_ontology and hierarchy_depth, and a
systemic soft-evidence_status pattern) rather than ERROR-class (no case found where a
claimed number was actually wrong, unit-mismatched, or self-contradictory).
