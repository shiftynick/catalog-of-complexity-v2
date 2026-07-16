# Plausibility check — chemical-oscillators

Adversarial re-derivation of every derivable number, unit check, timescale-nesting
check, hierarchy_depth/component_ontology cross-check, and evidence_status/confidence
conformance against schema/panel-spec.yaml.

## 1. numerosity — re-derived Avogadro calculation

Entry's `numerosity.value`: "~1e23-1e24 molecules/ions (order of magnitude, 1 L batch
preparation)".

Entry's own `method` field states the derivation inputs explicitly: "standard
FKN-recipe reagent concentrations (~0.01-0.1 M bromate, malonic acid, and
cerium/ferroin catalyst/indicator ions) multiplied by Avogadro's number for a 1 L
batch."

Re-derivation:
- N_A = 6.022e23 /mol
- Per species, 1 L, C = 0.01 M -> N = 0.01 * 6.022e23 = 6.02e21
- Per species, 1 L, C = 0.1 M -> N = 0.1 * 6.022e23 = 6.02e22
- Combined across the ~3 named species (bromate + malonic acid + cerium/ferroin) at
  the SAME stated concentration band:
  - low end: 3 x 6.02e21 ~ 1.8e22
  - high end: 3 x 6.02e22 ~ 1.8e23

So the inputs stated in the entry's own method field (0.01-0.1 M, three species)
support a combined range of **~1.8e22 to 1.8e23**, i.e. order of magnitude
**~1e22-1e23**. The recorded value of **~1e23-1e24** is approximately one order of
magnitude too high at both ends relative to the method's own stated inputs — the
upper bound in particular (1e24) would require a combined concentration of ~1.7 mol/L
summed across species, well outside the "~0.01-0.1 M" band the method text itself
gives.

Checked against literature-typical FKN concentrations for sanity: classic FKN-type
recipes commonly run bromate ~0.1-0.3 M and malonic acid ~0.05-0.5 M (cerium/ferroin
catalyst much lower, ~0.001-0.005 M) — somewhat higher than the "~0.01-0.1 M" the
entry itself states for all three species uniformly. Using these more realistic
literature-typical values instead (bromate 0.2 + malonic acid 0.3 + catalyst 0.003 ~
0.5 M combined) gives N ~ 3e23 — which WOULD support a value in the 1e23-1e24 band.
So the recorded value is plausible against typical real recipe concentrations, but is
**inconsistent with the concentration figures the entry's own method paragraph
cites** (0.01-0.1 M for all three species). This is an internal arithmetic
inconsistency between the stated inputs and the recorded output — the method text
and the value do not agree by roughly a factor of 5-10.

This same figure is echoed in `component_ontology.parts[0].count_oom` ("~1e23-1e24
(1 L batch, see numerosity)"), so the inconsistency propagates to a second column.

**Flag: fix.** Either the method's stated concentration band (0.01-0.1 M) should be
widened to match realistic FKN concentrations (~0.1-0.5 M) to justify 1e23-1e24, or
the recorded value should be lowered to ~1e22-1e23 to match the stated 0.01-0.1 M
band. As written the two do not derive each other.

## 2. Timescale nesting

- Batch oscillation period: ~10-100 s (commonly ~30-60 s)
- Batch reaction lifetime (transient oscillation train): ~1e3-1e4 s (tens of minutes
  to ~1-2 hours)
- Ratio -> ~10 to ~1000 oscillation cycles per batch run.
- Summary prose says the reaction "swings its color back and forth... dozens or
  hundreds of times." At the low end of the period range (100 s) and high end of
  lifetime (1e4 s), the ratio is only 100 cycles (fine, "hundreds"); at the fast end
  (30 s period, 1e4 s lifetime) the ratio is ~333 (still "hundreds," fine). At the
  extreme fast/long corner (10 s period, 1e4 s lifetime) the ratio reaches ~1000,
  mildly exceeding "hundreds," but this is an edge case of two independently-quoted
  OOM ranges, not a hard contradiction, and the commonly-cited sub-ranges (30-60 s
  period) keep the ratio safely in the tens-to-few-hundreds band the prose describes.
  **No flag** — internally consistent within normal-cited sub-ranges; only the
  outer-OOM corners stretch the prose, which is expected in an order-of-magnitude
  entry.

Trigger-wave speed (~1-10 mm/min, commonly ~2-6 mm/min) is consistent with standard
BZ literature figures (commonly cited ~0.1 mm/s = 6 mm/min); no issue.

CSTR period-doubling cascade described as "seconds-scale" — consistent with a CSTR
base oscillation period typically shorter than the batch's 30-60 s (CSTR periods
are commonly reported in the 10s-of-seconds range in the Simoyi/Wolf/Swinney-era
literature); no contradiction, though the entry doesn't state a specific CSTR base
period figure to check against (recorded qualitatively — acceptable, no fabricated
number).

## 3. hierarchy_depth vs. component_ontology — double-counting check

`hierarchy_depth.value = 1` (molecules/ions -> whole reacting medium, no
intermediate meso-scale level in the stirred regime).
`component_ontology.parts` lists exactly one part type (the combined
substrate/oxidant/catalyst/intermediate population) at the atomic level.

No double-count: the single part type is the atomic level, and the "1" level counted
is the aggregate whole above it — matches the convention text, which explicitly notes
the unstirred spiral-wave regime is state, not an extra nested level. Consistent.

## 4. evidence_status / confidence conformance

- `chaos_sensitivity`: evidence_status: measured, sources [sws1982, rss1983],
  confidence: medium. Per panel-spec, "measured" = published measurement,
  uncontested. Simoyi/Wolf/Swinney 1982 is snippet-verified (abstract retrieved
  directly) and does support a period-doubling/chaos experimental finding, so
  "measured" is defensible for that half of the claim. Roux/Simoyi/Swinney 1983 is
  explicitly flagged as not primary-read (verifier_flags entry present) — this is
  correctly surfaced as a standing debt rather than silently upgraded, and the score
  is not resting solely on the unverified companion paper. No conformance issue.

- `tipping_transitions`: evidence_status: measured-untested. Panel-spec defines
  measured-untested narrowly as "published measurement whose statistical rigor (e.g.
  CSN-grade tail testing) has not been assessed — power-law tail claims default here
  until assessed." The Hopf-bifurcation claim here is not a power-law/tail claim, so
  this evidence_status label is a slight semantic stretch of the vocabulary's stated
  scope (which is written specifically around tail-testing rigor). It doesn't
  misrepresent evidentiary strength in a way that would poison the catalog — the
  underlying claim (Hopf bifurcation modeled in Field & Noyes 1974) is snippet-level
  confirmed and the justification text is transparent about the citation only being
  title/abstract-confirmed — but it is a vocabulary-fit note.
  **Flag: note.**

- `characteristic_timescales` list entries: fkn1972 timescale carries
  evidence_status: measured-untested with the same narrow-vocabulary-fit
  consideration (not a tail claim). Same **note**-level observation as above; not
  independently re-flagged per-line since it's the same root observation.

- `criticality` (score 0, mechanism_status: none) and `extreme_event_statistics`
  (unknown): correctly NOT forcing a power-law claim absent evidence, per
  filling_rules.power-law-rigor and no-guessing. Conforms.

- `energy_rate_density`: unknown, with an explicit, reasoned refusal to force an
  apparatus-specific derivation that wouldn't generalize (cites D18). Conforms to
  no-guessing; no arithmetic to check since no value is asserted.

## 5. Unit checks

- spatial_extent: 1e-1 m, unit m — consistent with detail sub-figures (0.05-0.15 m
  vessel; 0.025 m gel reactor is the same OOM, 1e-2-1e-1). Fine.
- energy_rate_density: unit erg s^-1 g^-1 matches panel-spec's Phi_m unit
  convention; value unknown so no numeric check applies.
- characteristic_timescales: all given in s or convertible (mm/min for wave speed is
  a rate, not itself a timescale, but is presented inside the same list structure
  as a supplementary quantity — panel-spec's characteristic_timescales column is
  unit: s; the wave-speed entry is technically a velocity, not a timescale. This is
  a minor schema-fit observation: the column is nominally for timescales, and a
  propagation SPEED is a related-but-different quantity. It doesn't misstate
  anything, but is worth flagging as a coverage/schema-fit **note**, not a
  plausibility error.

## Summary of arithmetic/consistency issues found

1. numerosity value (~1e23-1e24) does not follow from the method paragraph's own
   stated inputs (~0.01-0.1 M x 3 species x Avogadro -> ~1.8e22-1.8e23); off by
   roughly one order of magnitude at both ends. Propagates into
   component_ontology.parts[0].count_oom. — **fix**
2. measured-untested evidence_status applied to non-power-law claims
   (tipping_transitions Hopf bifurcation; characteristic_timescales fkn1972 entry)
   stretches a vocabulary term panel-spec defines narrowly around tail-testing
   rigor. Not misleading, but a vocabulary-fit mismatch. — **note**
3. characteristic_timescales includes a propagation-speed entry (mm/min) inside a
   column whose panel-spec unit is s (timescales). Substantively fine and clearly
   labeled, but a minor column-fit note. — **note**

No blockers found: no fabricated citations, no hierarchy_depth double-counting, no
power-law claims made without support, no unit errors, no evidence_status/confidence
combination that would misrepresent an unsupported claim as solid.
