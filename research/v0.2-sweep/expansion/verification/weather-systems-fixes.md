# weather-systems — flag-fix log

**By:** workflow-agent (flag-fixer), 2026-07-02
**Input:** structured JSON flags from four adversarial verifiers (citation, plausibility, consistency, coverage) run against the drafted entry `data/classes/weather-systems.yaml`.
**Scope:** apply every `blocker`/`fix`-severity flag whose suggested fix could be implemented without fabricating anything; record `note`-severity flags in `provenance.flags` without acting; append all changes to the entry's own append-only `provenance.fix_log`; validate with `analysis/validate.mjs`.

All edits were made directly in `data/classes/weather-systems.yaml`. Full prose for each fix is duplicated in that file's `provenance.fix_log` (append-only, tagged `[FIX/<check>]`); this document summarizes the same work with the research trail (web verification performed this pass) that isn't reproduced in the YAML.

---

## Applied fixes (fix-severity flags)

### 1. [FIX/citation] `feedback` — Klaus deepening-rate figure
**Flag:** entry cites storm Klaus (Jan 2009) at -35 hPa/24h; independent sources report 37 hPa/24h.

**Action:** Ran an independent WebSearch this pass. Confirmed convergent case-study literature (Bay-of-Biscay/Catalonia impact studies on Klaus) reporting **>37 hPa/24h, 44 hPa/24h geostrophically adjusted to 60°N** — consistent with the verifier's finding. Could not re-fetch Neu et al. (2013)'s own Klaus passage this pass (the CentAUR PDF resists text extraction — an Adobe InDesign proof, image/stream-heavy; this limitation is independently corroborated by a citation-check note already in the entry). Per the flag's "soften" option, reworded the feedback loop's Klaus citation to state both figures explicitly (`~35-37 hPa/24h`) with sourcing and the geostrophic-adjustment caveat, rather than silently picking one number.

### 2. [FIX/plausibility] `numerosity` — value field DJF/JJA range collapse
**Flag:** headline value silently combined the DJF low bound (6,000) with the JJA high bound (28,000), understating the true combined low end.

**Action:** Changed `value` to `~5,000-28,000` (the true union of DJF ~6,000-21,000 and JJA ~5,000-28,000), with both season ranges spelled out inline in the value field itself (not just in `method`, which was already correct).

### 3. [FIX/plausibility] `instance_population` — evidence_status definitional mismatch
**Flag:** `measured-untested` is defined by panel-spec for CSN-grade tail/power-law statistical-rigor caveats, not citation read-status; this entry's own sibling sources (rudeva-gulev2007, newell1992, maddox1980, zhu-newell1998) correctly use `measured` + a read-status caveat instead.

**Action:** Reclassified `instance_population.evidence_status` from `measured-untested` to `measured`, kept `confidence: low`, and preserved (expanded) the WebFetch/snippet-level read-status caveat in the attribute note, explicitly citing the sibling-source convention this now matches.

### 4. [FIX/consistency] `criticality` — rescore 1 → 0
**Flag:** the Peters & Neelin (2006) mechanism citation was already primary-read and rejected as out-of-scope for the sibling tropical-cyclones entry (which rescored 1→0 on the same grounds); the paper never names this entry's own exemplars (extratropical cyclones, monsoons, MCCs, atmospheric rivers), and criticality.yaml's `boundary_clarifications.published-claim-required` explicitly disallows the adjacent-literature inference the draft justification made.

**Action:** Rescored `score: 1 → 0`, `mechanism_status: proposed → none`. Justification rewritten to state the rescore explicitly, cite the identical tropical-cyclones precedent, and quote the anchor's disallowed-inference clause. This is the most anchor-clear rescore in the flag set — tropical-cyclones already resolved the identical citation question.

### 5. [FIX/consistency] `tipping_transitions` — rescore 1 → 2
**Flag:** the entry's own feedback/emergence sections already cite bombogenesis, a formally named, quantitatively thresholded regime-transition mechanism, but the tipping_transitions score didn't credit it — structurally identical to tropical-cyclones' score-2 citation of rapid intensification.

**Action:** Ran a WebSearch this pass and confirmed the literature-standard bombogenesis threshold: Sanders & Gyakum (1980, *Monthly Weather Review*) define explosive cyclogenesis as a central-pressure fall ≥24 hPa/24h normalized to 60°N via a sin(lat)/sin(60°) weighting ("1 bergeron" unit). Rescored `score: 1 → 2`, cited `sanders-gyakum1980` (new source entry, title/definition-confirmed via WebSearch, not primary-read — flagged for follow-up), and matched the justification structure to tipping_transitions.yaml's `boundary_clarifications.single-modeled-mechanism-is-2` and tropical-cyclones' own precedent.

### 6. [FIX/consistency+plausibility] `openness_dissipation` — traceability gap
**Flag:** score 3 rests only on qualitative narrative; the anchor requires scores 3-4 to be traceable to a literal watts/joules/kg figure, and this entry had none (contrast planetary-climate's grounded score-3).

**Action:** Score kept at 3 (the flag offered "ground it or reconsider toward 2" as alternatives; grounding was achievable without fabrication, so pursued that branch). Ran WebSearch this pass and found convergent reanalysis-based estimates of the global atmospheric Lorenz energy cycle's kinetic-energy dissipation rate: ~1.93-2.61 W/m² global-mean (ERA-Interim trend 1.93→2.11 W/m² over 1979-2013; other reanalysis estimates in the same band). Converted to total watts via Earth's surface area (~5.1×10^14 m²): **~1.0-1.3×10^15 W**. Cited this figure in the justification (satisfying the anchor's traceability requirement) with explicit reasoning for why a class-aggregate global figure (rather than a per-system power budget like tropical-cyclones' hurricane-specific 10^12-10^13 W) keeps the score at 3 rather than 4.

### 7. [FIX/coverage] `energy_rate_density` — fill via derivation
**Flag:** panel-spec's own method note says this column should be DERIVED from published throughput/mass figures where possible, not defaulted to unknown; a candidate source (Peixoto & Oort 1992) was named but never checked.

**Action:** Used the same Lorenz-cycle wattage figure from fix #6 (~1.0-1.3×10^15 W) and divided by total atmospheric mass (5.15×10^18 kg = 5.15×10^21 g — the exact figure and convention `planetary-climate.yaml`'s own atmosphere-normalized Phi_m already uses, reused via the `wikipedia-atmosphere-mass` source). Derived **Phi_m ≈ 2.0-2.6 erg/s/g**. Filled `value: unknown → ~2.0-2.6`, `evidence_status: unknown → derived`, `confidence: low`. Explicitly flagged in the method field that this is a whole-atmosphere-aggregate figure, methodologically distinct from and not directly comparable to tropical-cyclones' per-storm ~1.5-6e2 erg/s/g figure (no borrowing occurred). Peixoto & Oort (1992) itself was **not** primary-read this pass — the derivation rests on WebSearch-convergent secondary characterizations of reanalysis literature (new `lorenz-cycle-reanalysis` source entry, annotated accordingly) — so the original follow-up-read recommendation remains open and is preserved in the new `provenance.flags` entry.

### 8. [FIX/coverage] `sources` — add Hoskins & Hodges (2002)
**Flag:** named the #2 canonical review source in the sweep report and Neu et al.'s own baseline climatology citation, but entirely absent from the drafted entry.

**Action:** Added `hoskins-hodges2002` to `sources:` with a title-confirmed-only read-status annotation (matching the sweep report's own characterization — not independently upgraded this pass), added it to `spatial_extent.sources`, and added a `provenance.flags` entry documenting it as a high-priority primary-read follow-up, matching the treatment of `rudeva-gulev2007` and `era5-2026-update`.

---

## Note-severity flags recorded (not acted on)

All 9 relevant note-severity findings were appended to `provenance.flags` (no attribute values changed):
- `self_organization` — inaccurate appeal to anchor precedent (AR flux-concentration figure stands on its own merits regardless; text-accuracy issue only)
- `component_ontology` / `self_organization` / `spatial_extent` — Sahel MCC-rainfall cross-connection not yet incorporated
- `component_ontology` — MCC count_oom gap (fillable follow-up)
- `component_ontology` — moist-air-parcel count_oom left unconverted (honest to-do already in entry text)
- `numerosity` — missing `unit:` field (pre-existing cross-entry pattern, shared with tropical-cyclones.yaml — low priority, fix consistently if addressed)
- `characteristic_timescales`/`numerosity` sweep-log citations — could not be independently re-confirmed this session (PDF extraction limitation); already appropriately hedged

Two flags were assessed as informational-only and not separately re-recorded because they document correct, already-transparent scoping decisions rather than open items: the `criticality`-column "not a plausibility defect" note (confirms the anchor was applied correctly) and the `openness_dissipation` plausibility note (superseded in substance by fix #6 above).

---

## Unresolved

None of the fix-severity flags were skipped. Two items required judgment calls documented above rather than being fully "resolved" in the sense of eliminating all residual uncertainty:

- **Klaus deepening rate**: resolved via softening/acknowledging the range (both 35 and 37 hPa/24h now cited with sources) rather than re-deriving a single authoritative figure from Neu et al. (2013) directly, because that source's PDF resists text extraction with the tools available this session. Flagged for a future primary-read pass with a text-layer-capable PDF tool.
- **energy_rate_density / openness_dissipation derivation**: grounded in WebSearch-convergent reanalysis figures rather than a primary read of Peixoto & Oort (1992) itself, which remains the recommended follow-up. The whole-atmosphere-mass-normalization convention (vs. a per-weather-system convention comparable to tropical-cyclones') is a genuine methodological choice, explicitly flagged as such in both the attribute method field and `provenance.flags`, should a future revision want a more directly comparable per-system figure instead.

No flag conflicts were found requiring orchestrator escalation, and no fix required editing any other entry (tropical-cyclones and planetary-climate were read-only precedent references, never modified).

## Validator result

`cd analysis && node validate.mjs` → **weather-systems: PASS (0 error, 0 warn, 0 info)** — clean, alongside the other 14 entries (15 total, 0 errors catalog-wide).
