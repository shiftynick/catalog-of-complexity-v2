# Citation check — turbulent-flows

Adversarial web-verification pass on load-bearing citations in data/classes/turbulent-flows.yaml, cross-checked against research/v0.3/expansion/turbulent-flows-sources.md.

## 1. Avila et al. 2011, Science 333:192 — Re_c ~ 2040, puff decay/splitting Poisson statistics

Searched directly for the numeric claim. Multiple independent secondary sources (ResearchGate reprint discussion, Cambridge JFM "Probabilistic thresholds..." paper, arXiv "Do extreme events trigger turbulence decay?") converge on:
- Recr,2 = 2040 ± 10 as the crossing point of decay and splitting mean-time curves — matches entry's "Re_c~2040" exactly (entry doesn't even need to round).
- Splitting is explicitly characterized as a memoryless process, following a memoryless exponential (Poisson-type) distribution.
- Mean splitting times scale superexponentially with Re.

This is an exact, multiply-corroborated match to the entry's characteristic_timescales, extreme_event_statistics, and tipping_transitions text ("Re_c~2040", "Poisson-like (memoryless)", "scale super-exponentially with Re"). Verdict: **PASS** (via secondary-source triangulation; still not a full-text primary read of Science 333:192 itself, consistent with the entry's own honest [snippet-verified, not primary-read] annotation — the annotation is accurate, not overclaimed).

## 2. Lemoult et al. 2016, Nature Physics 12:254-258 — directed percolation (DP) transition, Couette flow

Nature.com abstract page, ISTA repository record, and ADS abstract all confirm: onset of turbulence in Couette flow is a second-order phase transition in the DP universality class, characterized by universal critical exponents, driven by short-range interactions of turbulent domains. Matches entry's criticality column description closely, including the specific "short-range interactions of turbulent domains" phrasing used in the sweep doc.

Verdict: **PASS** for the qualitative DP-class claim as stated in the entry (mechanism_status: established, no numeric exponents claimed by the entry — entry is honest that beta/nu values were not recovered). The entry does not claim numeric exponent values, so there is no numeric claim to fail on this point.

## 3. Sano & Tamai 2016, Nature Physics 12:249-253 — DP transition, channel flow

Nature.com abstract confirms: quasi-2D channel-flow experiments/simulations show critical exponents consistent with directed percolation, published back-to-back with Lemoult 2016 in the same Nature Physics issue (12:249 vs 12:254). Matches entry's claim of appearing "twice, back-to-back, in the primary literature."

Verdict: **PASS**.

## 4. Sreenivasan & Meneveau 1986, JFM 173:357-386 — fractal dimension D~2.35±0.05

Multiple independent secondary sources (ResearchGate abstract summaries, NYU Scholars record, SciRP reference record) confirm: scalar interfaces in turbulent flows have fractal dimension 2.35 ± 0.05 across a variety of flows, attributed to Reynolds-number similarity. Exact numeric match to entry's D~2.35±0.05 figure and to the "Reynolds-number similarity" justification language.

Verdict: **PASS** on the D~2.35±0.05 figure and measurand (scalar/TNTI interface, developing turbulent boundary layer).

## 5. Lovejoy 1982, Science 216:185-187 — D=4/3 (~1.35) turbulent-isobar comparison figure

Multiple sources (mindat.org citation record, Science.org DOI page, ADS abstract) confirm the paper's primary result: fractal dimension D=1.35 for rain/cloud-area perimeters. This matches the entry's headline D~1.35 use. However, this search pass did NOT independently turn up the specific internal sentence connecting this to "the value 4/3 (that of turbulent isobars)" — that detail is inherited from a prior primary read at the v0.2 sweep (per the entry's own citation annotation, which discloses this chain of provenance honestly rather than claiming a fresh read). No search result contradicts the "4/3 turbulent isobar" comparison; one general secondary source description notes the perimeter-area dimension of ~1.3–1.5 has been found consistent with "other natural phenomena including... turbulent systems," which is compatible with but does not independently confirm the specific 4/3 phrase.

Verdict: **PARTIAL** — the D=1.35 headline figure is solidly confirmed; the specific "4/3 turbulent isobars" internal quote was not re-verified this session (relies on the prior v0.2 primary read, which the entry discloses honestly). Not a blocker since the entry's own citation annotation already flags this exact provenance chain and does not overclaim a fresh read.

## 6. Chaisson 2011, Complexity 16(3):27 — energy rate density units (erg/s/g)

Multiple sources (lweb.cfa.harvard.edu reprint PDF listing, pdodds.w3.uvm.edu paper PDF, Wiley abstract, PhilPapers, ADS) confirm Chaisson's energy rate density metric is expressed in units of erg s^-1 g^-1 (ergs/sec/gram), matching the entry's dimensional claim that epsilon (m^2/s^3) is unit-equivalent to Phi_m. This citation is used only as a units/framework benchmark, not for a turbulence-specific figure, consistent with the entry's own scoping.

Verdict: **PASS**.

## 7. Atmospheric boundary layer epsilon range (1e-6 to 1e-2 m^2/s^3)

Search results confirm epsilon is a standard ABL turbulence parameter with strong diurnal (daytime/nocturnal) and height dependence; one source states measured epsilon in landfalling tropical-cyclone boundary layers is O(10^-1) m^2/s^3, "much greater than typical atmospheric boundary layer values," implying typical ABL values fall below 1e-1 — consistent with, but not a tight independent confirmation of, the entry's full 1e-6 to 1e-2 range or the specific "convective ~1e-2, nocturnal stable ~1e-6 to 1e-4" breakdown. No primary paper was pinned in this session or the original sweep (the sweep doc explicitly flags "no single primary paper pinned" and recommends Lv et al. 2023 GRL as a future target, which the entry's own verifier_flags on energy_rate_density already discloses).

Verdict: **PARTIAL** — order-of-magnitude range is plausible and not contradicted, but not independently pinned to a primary source; entry already carries an honest verifier_flag (`no-primary-paper-pinned-for-abl-or-grid-figures`) covering this exact gap, so no new flag needed beyond noting it survives as still-open.

## 8. Wind-tunnel grid turbulence epsilon range (4.4e-7 to 0.40 m^2/s^3)

Not independently re-searched this session (out of scope priority vs. the DP/criticality/Avila items); this figure carries the same pre-existing verifier_flag as item 7. No new information to add — status unchanged from the sweep's own disclosure.

## Overall assessment

The highest-priority, most load-bearing citations (Avila 2011's Re_c=2040 and Poisson/superexponential puff statistics; the twin Lemoult 2016 / Sano & Tamai 2016 DP-universality claims; Sreenivasan & Meneveau 1986's D=2.35 fractal figure) all PASS web-verification via convergent independent secondary sources, with no contradictions found. The two PARTIAL items (Lovejoy's specific "4/3 turbulent isobar" internal phrase, and the ABL/grid epsilon numeric ranges) are pre-existing, already-disclosed verification debts that this session's search corroborates as plausible without fully closing — the entry's own verifier_flags and citation annotations already describe these gaps honestly, so they are recorded as notes rather than new blockers. No fabricated citations, no contradicted values, and no case where the entry's own read-status annotation ("[unverified — model knowledge]" / "snippet-verified") overclaims relative to what was actually checked.
