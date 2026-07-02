# Plausibility check — weather-systems.yaml

Adversarial re-derivation pass: arithmetic, unit conversions, timescale nesting,
hierarchy_depth vs. component_ontology double-counting, evidence_status/confidence
consistency against panel-spec.yaml definitions. Reference docs consulted:
schema/panel-spec.yaml, schema/anchors/*.yaml (all 15), docs/schema.md,
docs/roster.md, research/v0.2-sweep/expansion/weather-systems-sources.md,
data/classes/tropical-cyclones.yaml, data/classes/planetary-climate.yaml (sibling
entries for cross-entry convention checks).

No edits made to the entry or any reference file, per task instructions.

---

## 1. Unit conversions re-derived

- **ERA5 modern radius**: "~4.4-5.4° latitude" -> "~490-600 km" (`spatial_extent.detail.modern_era5_radius`).
  Re-derived at 111 km/degree of latitude (standard geodetic conversion):
  4.4 x 111 = 488.4 km; 5.4 x 111 = 599.4 km. **Matches the stated ~490-600 km
  range exactly.** The entry's own hedge ("[snippet-tool-derived unit conversion,
  unverified this sweep]") is honest but the conversion itself checks out — no
  arithmetic error here.
- **MCC cloud-shield area -> equivalent diameter cross-check**: >100,000 km²
  (Maddox 1980 convention) implies an equivalent circular diameter of
  sqrt(4*100000/pi) ≈ 357 km (3.6e5 m) — comfortably inside the entry's own
  `spatial_extent` class-general range (1e5 to >1e6 m). No contradiction between
  the MCC size convention (component_ontology) and the headline spatial_extent
  range.
- **Lifetime distribution -> seconds**: "mode 1-2 days, tail to 7-8 days" ->
  claimed "~1e5-1e6 s". Re-derived: 1 day = 8.64e4 s, 2 days = 1.73e5 s, 7 days =
  6.05e5 s, 8 days = 6.91e5 s. The mode's lower bound (8.64e4 s) rounds to the
  stated 1e5 floor and the tail's upper bound (6.91e5 s) sits inside the 1e6
  ceiling — consistent as an order-of-magnitude bracket, not a precise claim, and
  not misleading.
- **Predictability horizon -> seconds**: "~2 weeks" -> claimed "~1.2-1.7e6 s".
  2 weeks = 1.21e6 s dead center of the stated 1.2-1.7e6 s range. Consistent
  (matches tropical-cyclones.yaml's and planetary-climate.yaml's identical
  reused figure/annotation verbatim).
- **Monsoon season length**: "~100-120 days" = 8.64e6-1.037e7 s. Not converted to
  seconds in the entry (only days are given) — no arithmetic to check, but no
  inconsistency either.

## 2. Numerosity — value field does not match its own method field (FIX)

`numerosity.value`: "~6,000-28,000 NH extratropical-cyclone tracks per 20-yr
seasonal aggregate (DJF/JJA), method-dependent by ~3-5x"

`numerosity.method` (and the sources sweep report, and provenance.flags) state
the two seasonal ranges SEPARATELY and correctly:
- DJF (winter): ~6,000-21,000
- JJA (summer): ~5,000-28,000

The headline `value` field silently combines these into "6,000-28,000" — taking
the DJF low bound (6,000) and the JJA high bound (28,000). The true combined
range across both seasons is **5,000-28,000** (JJA's own low bound is smaller
than DJF's). This is a genuine, checkable arithmetic/transcription slip: the
paper never reports "6,000" as a lower bound for the union of both seasons: 6,000
is DJF-only. It understates the low end of the class's own reported uncertainty
by ~17%, and mixes a DJF-only lower bound with a JJA-only upper bound under a
label ("DJF/JJA") that implies both bounds are cross-season. Not a fabrication
(both numbers are real, correctly cited elsewhere in the same entry) and not
directionally alarming (doesn't inflate the figure), but should be corrected to
either "5,000-28,000" (true combined range) or, better, kept as two explicitly
separate ranges as the `method` field already does. The provenance.flags note at
line ~740 separately quotes "6,000-21,000 winter tracks" (DJF only, correctly
scoped) — internally inconsistent with the headline value's implied DJF/JJA
combination.

The "~3-5x method-dependence" characterization itself is fine: 21,000/6,000 = 3.5x
(DJF) and 28,000/5,000 = 5.6x (JJA) — both round sensibly to "roughly 3-5x," and
this matches the source paper's own framing ("roughly a factor of 3-5"). Only the
combined point-value transcription is off.

## 3. hierarchy_depth vs. component_ontology — no double-counting found

Weather-systems declares hierarchy_depth = 2: parcels (atoms, uncounted) ->
convective cells/frontal zones (1) -> weather-system-scale structure itself (2).
Cross-checked against component_ontology's parts list: "moist air parcels" (the
atomic level, correctly not counted as a hierarchy level), "convective cells /
frontal zones" (explicitly role: "first aggregation level" = level 1), and
"extratropical cyclones... MCCs... atmospheric rivers... monsoon circulations"
(the named level-2 structures). No part type is counted twice as both a "part"
and a separate "level" in a way that would double-count. This mirrors
tropical-cyclones' 3-level convention (parcels -> convective cells (1) ->
rainband/eyewall complex (2) -> storm-scale vortex (3)) and planetary-climate's
4-level convention (parcels -> convective cells/eddies (1) -> weather systems (2)
-> circulation cells/gyres (3) -> coupled system (4)), and the claimed
"one-level-shallower-than-TC, one-level-shallower-than-planetary-climate-at-its-
own-rung" relationship is arithmetically and conceptually consistent across all
three sibling entries. No inconsistency found.

Little's-law-style sanity check (not something the entry itself derives, offered
here only as an independent plausibility cross-check, not a finding): using the
entry's own numerosity (300-1,050 DJF tracks/winter-season, back-computed from
6,000-21,000 tracks / 20 winters) and its own lifetime distribution (mode
1-2 days, tail 7-8 days), a mean lifetime of ~4 days over a ~90-day DJF season
implies a standing population of roughly 13-47 cyclones — comfortably bracketing
the entry's separately-sourced instance_population figure of "~34 NH... standing
at any analysis time-step in winter." The two independently-sourced quantitative
columns (numerosity from Neu et al. 2013; instance_population from the 2026 ERA5
update) are mutually plausible under a simple queueing identity, which is a mild
positive consistency signal, not a claim the entry itself makes or needs to make.

## 4. evidence_status / confidence — panel-spec conformance

Swept all `evidence_status` values against panel-spec.yaml's controlled
vocabulary (measured / measured-untested / measured-disputed / derived /
qualitative / unknown) and the binding filling_rules.

- All `qualitative` rubric scores correctly omit a `confidence` field, matching
  the convention in tropical-cyclones.yaml and planetary-climate.yaml.
- `unknown` values (energy_rate_density, extreme_event_statistics,
  temporal_correlation) correctly carry no fabricated number and no confidence
  field — clean per filling_rules.no-guessing.
- **`instance_population.evidence_status: measured-untested` is a definitional
  mismatch (FIX, not blocker).** Panel-spec's own gloss for `measured-untested`
  is specific: "published measurement whose statistical rigor (e.g., CSN-grade
  tail testing) has not been assessed — power-law tail claims default here until
  assessed." The instance_population figures (~34 NH / ~28 SH / 5-6 Arctic
  standing cyclones) are not a tail-statistics or power-law claim at all — the
  actual caveat the entry itself states is a **read-status** issue (WebFetch
  HTML-extraction of the 2026 ERA5 paper, not an independent full-text
  primary-read), which is a citation-provenance concern, not a statistical-rigor
  concern. The catalog's own established idiom for read-status caveats is a
  bracketed annotation on the citation itself (e.g. tropical-cyclones.yaml's
  "[snippet-verified]" tags, or this same entry's own
  rudeva-gulev2007/newell1992/maddox1980/zhu-newell1998 citations, all of which
  stay `evidence_status: measured` at the column level while carrying the
  caveat in the source annotation) — not a column-level evidence_status
  downgrade. Using `measured-untested` here stretches the enum's defined meaning.
  This is a conservative (safe-direction) mislabel — it does not overstate
  confidence — so it is recorded as a fix, not a blocker: recommend either
  reclassifying to `evidence_status: measured` with the read-status caveat kept
  in the note/citation (consistent with this entry's own treatment of
  rudeva-gulev2007 etc.), or, if the drafters intend evidence_status to also
  encode read-status/snippet-level provenance (a broader use than panel-spec's
  literal text supports), flagging that as a schema-interpretation question for
  the consistency checker rather than resolving it unilaterally here.

## 5. openness_dissipation = 3 — anchor self-consistency note (FIX-adjacent, recorded as note)

The openness_dissipation anchor's own `notes` field states: "Every score of 3-4
should be traceable, even loosely, to a literal number in watts, joules/s, or
kg/s cited in energy_rate_density or in this column's justification." This
entry's `energy_rate_density` is `unknown` (no published class-level power/mass
figure was located — an honestly-reported gap, not a guess), and the
`openness_dissipation` justification explicitly and correctly states no such
literal-watts figure exists for the class ("no published order-10^12-10^13 W-
scale power figure exists for this broader class... the literal-watts case for 4
is not currently supportable"). The entry uses this absence to justify scoring
ONE BELOW tropical-cyclones' 4 rather than matching it — a defensible,
conservative move — but the resulting score of 3 is itself not traceable to any
literal number either (unlike, e.g., planetary-climate's openness_dissipation=3,
which IS traceable to a literal absorbed-solar-power figure of ~1.2e17 W). The
qualitative case for "genuine dissipative structure" (baroclinic energy
conversion, latent-heat release, structure collapsing on interruption) is
reasonably argued from the physics and mirrors the textbook description of
extratropical cyclones as heat engines, so a 2-3 range is plausible on
qualitative grounds — but per the anchor's own traceability requirement, a score
of 3 sits in mild tension with "no literal number exists at all for this class,"
not just "the number that exists is smaller than tropical-cyclones'." Recorded
as a note for the consistency checker rather than a plausibility blocker, since
this is fundamentally an anchor-application judgment call (is qualitative
mechanism-based reasoning sufficient at 3 without ANY citable throughput number,
or does the absence of energy_rate_density mechanically cap this column lower,
e.g. at 2?), not a re-derivable arithmetic error.

## 6. criticality — anchor rule application (note, not a plausibility defect)

Score 1 / mechanism_status: proposed, citing Peters & Neelin (2006) for GENERAL
tropical convection, not extratropical cyclones/monsoons/atmospheric rivers
specifically. Checked against schema/anchors/criticality.yaml's
boundary_clarifications:
- `published-claim-required`: requires the SOC/critical-point mechanism to be
  "formally proposed FOR THE SCOPED SYSTEM in the primary literature, not for a
  related model system." The entry's own justification transparently
  acknowledges this citation is a reassignment for an "adjacent but distinct
  system" and scores 1 rather than 2 specifically because of this rule — a
  correct, self-aware application of the rule as literally worded, not a
  plausibility/arithmetic issue. This is a genuine scoping judgment call
  (already flagged three times in the entry's own provenance.flags) that
  belongs to the consistency/scoping layer, not this check.
- Distinguishing from extreme_event_statistics (measurand_type discipline):
  correctly kept separate — criticality here records an order-parameter
  critical-exponent claim (beta=0.215, static/critical-point framing per the
  sources doc's own explicit note), while extreme_event_statistics is correctly
  left `unknown` for a temporal-event tail-exponent claim that was not located.
  No conflation of the two claim types (filling_rules.soc-two-claims honored).

## 7. Other arithmetic/unit spot-checks — clean

- AR dimensions (~2,000 km long x 300-500 km wide) vs. spatial_extent's ">1e6 m"
  upper bound: 2,000 km = 2e6 m, consistent with the stated open-ended ">1e6"
  upper bound (not contradicted).
- AR moisture-flux concentration (">90% of midlatitude water-vapor flux" through
  "~10% of hemispheric circumference at 35°N") — internally consistent
  qualitative concentration statistic, correctly used only in
  self_organization's justification (a legitimate use) and not double-counted
  as a numerosity or extreme_event_statistics figure.
- Track-matching-rate figure (~50-70%) and deep-cyclone-fraction figures
  (2-8% NH, 4-12% SH) are transcribed unchanged from the sources sweep report;
  no arithmetic performed on them by the entry, nothing to re-derive, no
  inconsistency found.
- Propagation speed (20-50 km/hr, extreme >110 km/hr) — plausible order of
  magnitude for synoptic systems, not directly used in any derived column,
  no arithmetic dependency to check.
- feedback loop citing storm Klaus (2009, -35 hPa/24h): matches the sources
  sweep's own case-study figure (35 hPa (24h)^-1) verbatim; correctly scoped as
  a case-study illustration inside a class-general feedback description, not
  presented as a population statistic (the sources doc itself flags this as
  "n=2, not class-level statistics" and the entry does not misuse it as such).

## 8. Summary of arithmetic/consistency verdicts

| Item | Verdict |
|---|---|
| ERA5 deg->km radius conversion | Confirmed correct |
| MCC area -> diameter vs. spatial_extent range | Consistent, no contradiction |
| Lifetime days -> seconds vs. stated 1e5-1e6 s | Consistent (OOM bracket) |
| Predictability horizon weeks -> seconds | Confirmed correct, matches siblings |
| numerosity headline value vs. its own method field | **Inconsistent — FIX** |
| hierarchy_depth vs. component_ontology | No double-counting, consistent with TC/planetary-climate conventions |
| numerosity vs. instance_population (Little's-law check) | Mutually plausible |
| instance_population evidence_status: measured-untested | **Definitional mismatch — FIX** |
| openness_dissipation=3 traceability to a literal number | **Tension with anchor's own note — recorded as note** |
| criticality mechanism-for-scoped-system rule | Correctly, transparently applied (not a plausibility defect) |
| AR/MCC dimension cross-checks | Clean |
