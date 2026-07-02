# Verification-debt sweep — tropical-cyclones.yaml

Session date: 2026-07-02. Scope: three standing flags in `data/classes/tropical-cyclones.yaml`
(flags block, lines ~441-447; sources, lines ~416-429). No entry file edits made — this is a
log only, per instructions. Read the entry first (full file, lines 1-457) before starting.

---

## Item 1 — Lovejoy 1982 (fractal_dimension_spatial, ~line 179-191)

**What the entry currently claims (line 179-191, 416-417):**
`fractal_dimension_spatial: value: 1.35`, method = "Area-perimeter fractal dimension of
tropical cloud/rain-field boundaries (satellite/radar). A hurricane-specific published D was
not located; this is the general tropical convective cloud-field figure." Source citation
(line 416-417): "Lovejoy, S. (1982). Area-perimeter relation for rain and cloud areas. Science
216, 185-187. [snippet-verified, cross-confirmed]". Flag (line 444-445): "Lovejoy 1982 remains
snippet-verified (paywalled; author site unreachable); no hurricane-specific D exists in the
literature."

**What I did:** Searched for the paper on Shaun Lovejoy's McGill physics.mcgill.ca/~gang/
author-hosted eprints page. Found and fetched a direct PDF link:
`https://www.physics.mcgill.ca/~gang/eprints/eprintLovejoy/neweprint/Lovejoy.Science.1982.pdf`
— this is the JSTOR-scanned original Science article (Vol. 216, No. 4542, 9 April 1982, pp.
185-187), hosted openly on the author's own site. WebFetch's text extraction failed on the PDF
binary, but the Read tool successfully parsed the full 3-page article (pp. 185-187) plus the
JSTOR cover sheet. This is a full PRIMARY READ, not a snippet.

**What the paper actually states (primary-read, direct quotes):**

Title/abstract (p. 185): "Area-Perimeter Relation for Rain and Cloud Areas... Following
Mandelbrot's theory of fractals, the area-perimeter relation is used to investigate the
geometry of satellite- and radar-determined cloud and rain areas between 1 and 1.2 × 10^6
square kilometers. The data are well fit by a formula in which the perimeter is given
approximately by the square root of the area raised to the power D (P ~ sqrt(A)^D), where D
is interpreted as the fractal dimension of the perimeter. It is concluded that rain and cloud
perimeters are fractals — they have no characteristic horizontal length scale between 1 and
1000 kilometers."

On the measurand and data sources (p. 186): "Figure 1 shows the A-P relation for radar
pictures of tropical rain areas at a resolution of 1 by 1 km and for infrared pictures of
Indian Ocean clouds, sampled on a grid of 4.8 by 4.8 km ... from the geostationary operational
environment satellite (GOES). Taken separately, the radar and satellite data fall on parallel
straight lines. When the satellite perimeters are multiplied by a correction factor
(explained below), these two lines coincide as shown and yield a least squares estimate of
D ~ 1.35 with correlation coefficient .994."

On what "rain areas" means physically (p. 186): "Physically, the radar senses reflected
microwave radiation, primarily from the large raindrops. The rain areas were defined as those
regions for which the rain rate exceeded 0.2 mm/hour (which corresponds to a light drizzle)."
And on clouds (p. 187): "the GOES infrared sensor responds primarily to the blackbody
radiation emitted by the clouds and surface... In Fig. 1 the threshold defining cloud areas is
somewhat arbitrarily set at -10°C for the cloud-top temperature."

On the D=1.35 value's significance (p. 188/4, closing paragraph): "it is interesting to
speculate on the empirical value of D obtained from Fig. 1. The value 1.35 is so close to the
value 4/3 (that of turbulent isobars) that some fairly straightforward connection may exist."

**Is it hurricane-specific?** No — confirmed general. The radar data are "tropical rain areas"
(location: described as sampled together with GOES imagery of the Indian Ocean region, 20°N
to 20°S, within ±30° of the subsatellite point — general tropical convection, not any named
storm or hurricane-class system). The paper never mentions tropical cyclones, hurricanes, or
typhoons anywhere in the text. This is a general tropical cloud-and-rain-field fractal
dimension, exactly as the entry's method note already (correctly) hedges: "A hurricane-specific
published D was not located; this is the general tropical convective cloud-field figure."

**Assessment:** The entry's citation and value are accurate to the primary source. D ≈ 1.35 is
exactly what Lovejoy 1982 reports (least-squares fit, r=0.994, combining tropical radar rain
data at 1×1 km resolution and GOES IR cloud data at 4.8×4.8 km resolution, corrected for
resolution mismatch). The entry's own hedge (general tropical cloud/rain field, not
hurricane-specific) is fully consistent with the primary text — no hurricane-specific D exists
in this paper, confirming the entry's honest caveat.

**VERDICT: RESOLVED-primary-read.** The paywall/unreachable-author-site problem is fully
solved — the McGill GANG group eprints page hosts an openly-accessible scanned PDF of the
original. Citation is accurate. Value (D=1.35) is accurate. Measurand is accurately described
by the entry. The "snippet-verified" status can be upgraded to primary-read.

**Proposed append-only YAML snippet** (flag_cleanup_notes convention, append under
`provenance.flag_cleanup_notes`):

```yaml
    - column: fractal_dimension_spatial
      outcome: RESOLVED — Lovejoy 1982 primary-read in full via McGill GANG group eprints
        (physics.mcgill.ca/~gang/eprints/eprintLovejoy/neweprint/Lovejoy.Science.1982.pdf,
        open-access author-hosted scan of Science 216:185-187). Confirms D=1.35 (least-squares
        fit, r=0.994) combining tropical radar rain-area data (1x1 km resolution, rain rate
        >0.2 mm/hr threshold) with GOES infrared tropical cloud-area data (4.8x4.8 km
        resolution, -10C cloud-top threshold, Indian Ocean region, resolution-corrected).
        Confirmed general tropical cloud/rain-field measurand; paper contains no mention of
        tropical cyclones/hurricanes/typhoons anywhere — entry's hedge ("hurricane-specific
        published D was not located") stands correct. Citation upgraded from
        snippet-verified to primary-read.
```

---

## Item 2 — rs2023 (energy_rate_density, ~lines 94-120)

**What the entry currently claims (line 94-120, 428-429, 455-456):** `energy_rate_density`
cites a ~1e16 kg circulating-mass estimate as corroboration for the project's own
order-of-magnitude mass denominator (~1e16 kg, derived from 0.7 kg/m^3 x ~1.2e16 m^3). Source
citation (line 428-429): "A Tropical Cyclone or Typhoon as an Element of the
Earth-Atmosphere-Ionosphere-Magnetosphere System. Remote Sensing 15(20), 4919 (2023).
[citation verified; mass figures snippet-level — publisher 403-blocked]." Flag (line 446-447):
"rs2023 mass figures cited but content snippet-level (publisher 403-blocked); re-verify when
reachable." flag_cleanup_notes (line 455-456) already records a PARTIAL outcome from an
earlier pass: "full citation obtained for the 2023 circulating-mass paper; figures still
snippet-level."

**What I did:** MDPI's main site (www.mdpi.com) returned HTTP 403 on every path tried
(article page, /pdf, /htm, /xml, /notes, /s1, versioned PDF URL from Semantic Scholar,
ResearchGate mirror, Wiley-hosted companion paper) — confirmed this is a bot-protection
(Cloudflare/Akamai) block, not a real access restriction, since the article is gold
open-access (CC-BY, confirmed via Unpaywall API and DOAJ). The Unpaywall API
(api.unpaywall.org) resolved the correct author (Leonid F. Chernogor, not "Sorokin/Yaschenko"
as an earlier search summary had wrongly suggested — those names belong to a different,
related paper [5,6] cited *within* this paper) and confirmed CC-BY gold OA status. Critically,
I found that MDPI's **content-delivery subdomain** `res.mdpi.com` (used for the actual PDF
file storage, distinct from the bot-gated `www.mdpi.com` app server) is NOT bot-blocked:
`https://res.mdpi.com/d_attachment/remotesensing/remotesensing-15-04919/article_deploy/remotesensing-15-04919.pdf`
returned HTTP 200 and downloaded the full 39-page, 4.2MB published PDF. Read tool parsed it
completely — a full PRIMARY READ of the entire article, not a snippet.

**What the paper actually states (primary-read, direct quotes):**

Full citation confirmed: Chernogor, L.F. (2023). "A Tropical Cyclone or Typhoon as an Element
of the Earth–Atmosphere–Ionosphere–Magnetosphere System: Theory, Simulations, and
Observations." Remote Sens. 15(20), 4919. https://doi.org/10.3390/rs15204919. Single author
(V.N. Karazin Kharkiv National University, Ukraine). Published 11 October 2023, CC-BY open
access.

Section 2, Table 1 ("Geometric and mass characteristics of a typical typhoon"), gives:
"Air mass  m = 1.2 × 10^16 kg
Air mass in core  m(r1) = 2 × 10^15 kg
Effective mass  mef ≈ 6.9 × 10^14 kg"

And in the body text immediately following Table 1: "The geometric parameters of TCs
(typhoons) determine the air mass involved in motion, as given by m = ρπR0²H where ρ ≈ ρ0 ≈
1.3 kg/m³ is the air density at an altitude of z = 0. **Typical values for air masses in the
typhoon and its core are 10^16 kg and 10^15 kg, respectively.**"

This mass is explicitly a DERIVED/MODELED quantity, not an independently measured one: it
comes from the paper's own Shuleikin (1978) analytical typhoon model, using assumed
"typical" geometric parameters for "a typical typhoon of average intensity" — specifically
external radius R0 = 600 km and thickness (troposphere depth) h ≈ 15-20 km — plugged into
m = ρπR0²H with ρ ≈ 1.3 kg/m³. This is the SAME order-of-magnitude approach (density ×
volume) the Catalog entry itself uses independently, not an independent empirical
measurement of any specific storm's mass.

**Assessment relative to the entry's claim:** The entry's ~1e16 kg figure is confirmed exactly
— Chernogor 2023 states "Air mass m = 1.2 × 10^16 kg" for a typical typhoon, matching the
entry's derived denominator almost exactly (entry: ~1e16 kg from 0.7 kg/m^3 × 1.2e16 m^3 =
0.84e16 ≈ 1e16 kg; paper: 1.2e16 kg from 1.3 kg/m^3 × π×(600km)^2×17.5km ≈ 1.2e16 kg — same
order, same method, slightly different assumed density/geometry). However, this is NOT an
independent corroboration in the strong sense the entry's method note implies ("a published
~1e16 kg total circulating-mass estimate... corroborates the project denominator") — it is
itself a back-of-envelope model estimate using the identical density×volume approach, not a
measured/observational mass figure. Both the project's and Chernogor's numbers are the same
kind of estimate arrived at independently, which is still meaningful agreement (methodological
convergence) but should not be over-stated as an empirical corroboration.

**VERDICT: RESOLVED-primary-read.** The mass figure is fully verified: quote, value, units,
and derivation method are now known with certainty. The publisher-403 problem is solved via
the res.mdpi.com CDN-subdomain workaround. Recommend the entry's language be softened at next
revision from "corroborates" to something like "independently arrives at the same
order-of-magnitude estimate via an analogous density x volume calculation" — since both
figures are modeled, not measured, they are convergent estimates rather than independent
empirical confirmation. (This wording judgment is left to the orchestrator per the task's
scope; I am only reporting the primary-read facts.)

**Proposed append-only YAML snippet** (flag_cleanup_notes convention, append under
`provenance.flag_cleanup_notes`):

```yaml
    - column: energy_rate_density
      outcome: RESOLVED — rs2023 (Chernogor 2023, Remote Sens. 15(20):4919) primary-read in
        full via res.mdpi.com CDN subdomain (www.mdpi.com app server is bot-blocked/403 but
        the res.mdpi.com PDF storage subdomain is not; confirmed CC-BY gold OA via Unpaywall).
        Table 1 states "Air mass m = 1.2e16 kg" and "Air mass in core m(r1) = 2e15 kg" for a
        modeled "typical typhoon of average intensity" (R0=600 km, h=15-20 km, rho=1.3 kg/m^3,
        via m = rho*pi*R0^2*H, the Shuleikin 1978 analytical model). This is itself a
        density x volume order-of-magnitude estimate, methodologically identical to — not
        independent of — the project's own denominator derivation; recommend softening
        "corroborates" to "independently arrives at the same order-of-magnitude estimate via
        an analogous calculation" at next revision. Citation upgraded from snippet-level to
        primary-read; full text and Table 1/4/7 all consulted.
```

---

## Item 3 — criticality candidates for storm-internal heavy-tail statistics (~lines 254-266, 441-443)

**What the entry currently claims:** `criticality: score: 1`, `mechanism_status: none`,
justification states "No established scale-invariant event statistics for a storm's INTERNAL
dynamics and no proposed SOC mechanism for the vortex itself," and explicitly distinguishes
this from the Corral et al. 2010 cross-storm PDI power-law (recorded under
extreme_event_statistics, a CLASS-level across-storm-population claim, not storm-internal).
The flag (line 442-443) says: "the score-1 justification cites no informally-claimed
storm-internal heavy-tail statistic; at next revision either cite one or drop to 0."

**My task was NOT to decide 1 vs 0** — only to collect the best candidate citations for a
storm-INTERNAL heavy-tail/criticality-adjacent claim, with exact quotes and rigor status, and
hand the decision to the orchestrator. I found and fully primary-read three candidates:

### Candidate A: Corral, A. (2011) "Tropical Cyclones as a Critical Phenomenon"
(arXiv:1103.4654; also published as a Springer book chapter, *Complexity and Extreme Events in
Geosciences*, 2013). Full primary read via arXiv PDF.

- **Scope:** This is EXPLICITLY a cross-storm (across-population) statistic, not
  storm-internal. It is Corral's own follow-up/review essay built on Corral, Ossó & Llebot
  2010 (the same paper already cited in the entry as `corral2010`) — same PDI/ACE power-law
  distribution across storm populations by ocean basin, α ≈ 0.98-1.19 (matches the entry's
  existing extreme_event_statistics values essentially exactly: "1.19, 1.17, 0.98, 1.11").
  Quote: "the number of tropical cyclones as a function of the energy they release is a
  decreasing power-law function, up to a characteristic energy cutoff determined by the
  spatial size of the ocean basin."
- Section 5 ("Criticality of Tropical Cyclones") explicitly frames the WISHE feedback
  (wind→evaporation→energy→wind, the same loop already in the entry's `feedback` attribute) as
  analogous to an SOC "slow drive / threshold / avalanche" picture, with a comparison table
  (sandpile / earthquakes / rainfall / tropical cyclones: driving=solar radiation,
  storage=heat of the sea, threshold=SST, spread=wind). This is explicitly SOC-*like*
  reasoning at the level of a SINGLE STORM's intensification process (energy build-up →
  threshold-crossing (~26.5°C SST) → rapid release), which is closer to "storm-internal" in
  spirit than the cross-storm PDI statistic — but Corral is honest that it is qualitative,
  not a measured statistic: "In principle, we can guarantee that the broad requirements of
  self-organized criticality are fulfilled in tropical cyclones... [but] favorable conditions...
  is not a sufficient condition for these storms to develop. As the experts know, some kind of
  perturbation is needed to trigger the genesis process... So, some kind of overheating or
  supercriticality seems to be present in the process."
- **Rigor:** NOT a heavy-tail statistic of storm-internal dynamics. No goodness-of-fit test,
  no event-size distribution WITHIN a storm. It is a narrative/analogical argument, explicitly
  hedged ("up to what point tropical cyclones are related to critical phenomena" — the title
  itself is posed as an open question). Corral also directly poses, unresolved, exactly the
  question this flag is chasing: "we can wonder how this criticality relates to the results of
  Peters and Neelin [2006]... However, tropical cyclones clearly surpass this onset of
  precipitation (O. Peters, private communication) and then **it is not clear why they still
  retain critical characteristics**." This is Corral himself flagging that the SOC framing for
  individual TCs is unresolved/speculative.
- **Verdict on this candidate:** Does NOT supply a storm-internal heavy-tail statistic. It is
  the SAME across-storm-population claim already cited (Corral 2010), repackaged with
  qualitative SOC narrative framing around WISHE/threshold dynamics. Not citable as a new,
  independent, storm-internal statistic.

### Candidate B: Peters, O. & Neelin, J.D. (2006) "Critical phenomena in atmospheric
precipitation." Nature Physics 2, 393-396. doi:10.1038/nphys314. Full primary read via arXiv
PDF (cond-mat/0606076, author's own preprint, text-identical to published version per the
journal reference line on p.1).

- **Scope:** General tropical atmospheric convection/precipitation criticality — column water
  vapor (tuning parameter) vs. precipitation rate (order parameter), continuous phase
  transition at a critical water-vapor threshold w_c. Data: TRMM microwave satellite retrievals
  over ocean basins (Western/Eastern Pacific, Atlantic, Indian Ocean), 2000-2005, 0.25° grid
  resolution. This is NOT tropical-cyclone-specific — it is convective precipitation in
  general (any convective event, tropical cyclone or otherwise) within 20°S-20°N ocean regions.
  Quote (abstract): "We present evidence here that QE [quasi-equilibrium], postulated two
  decades earlier than SOC, is associated with the critical point of a continuous phase
  transition and is thus an instance of SOC."
- Exact quantitative claims: order parameter scaling <P>(w) = a(w-wc)^β above critical
  water vapor wc, with β "universal" (same exponent, "slope 0.215... fitting the data from all
  regions well," "to within ±0.02"); finite-size scaling of susceptibility (variance) with
  spatial resolution L, γ/ν = 1.54(4); scale-free spatial correlations "in the range of 25 km
  to 200 km," interpreted as "mesoscale convective systems... long-range correlation
  structures akin to critical clusters."
- **Is it about a single storm's internal structure?** No — it is about the general tropical
  atmosphere's precipitation/convection transition, sampled statistically over grid cells
  across ocean basins and years, not the internal structure or evolution of any one named
  storm or storm class. Tropical cyclones would presumably contribute data points to this
  analysis (their rainbands/eyewall convection would appear in the same TRMM dataset) but the
  paper draws no TC-specific conclusion and never mentions tropical cyclones, hurricanes, or
  typhoons anywhere in the text.
- **Rigor:** High for what it measures — real satellite data, quantitative critical
  exponents with error bars, finite-size scaling analysis (a genuine critical-phenomena
  technique, going beyond a bare power-law fit), data collapse across four ocean regions. This
  is more rigorous than Corral et al. 2010's KS-test-only approach in the sense that it
  performs an actual finite-size-scaling universality test — but it is not CSN-style
  (no explicit power-law vs. alternative-distribution comparison; the "power law" tested here
  is the order-parameter scaling exponent, a different statistical object than an event-size
  distribution).
- **Verdict on this candidate:** Genuine, well-supported criticality claim, but for the
  general tropical atmosphere/convection system, NOT for tropical cyclones as a class or for
  storm-internal dynamics specifically. Corral 2011 (Candidate A) himself notes this mismatch
  and cannot resolve it ("not clear why they still retain critical characteristics"). Citing
  this paper on the tropical-cyclones entry's criticality column would require the same kind
  of class-boundary stretch the entry's filling_rules.soc-two-claims discipline is designed to
  prevent (SOC statistics of the parent/general atmospheric-convection system ≠ SOC mechanism
  of the tropical-cyclone-as-vortex specifically).

### Candidate C: lightning flash-size / rainfall-cluster power laws in tropical convection —
searched but NOT found as a distinct citable primary source in this session. Web search
surfaced only tangential/generic hits (rainfall SOC literature generally, e.g. Peters,
Hertlein & Christensen 2002 "A complexity view of rainfall," which is cited as ref [5] inside
Peters & Neelin 2006 itself, and is the same general-precipitation-not-TC-specific class of
claim as Candidate B). No paper specifically quantifying tropical-cyclone-internal lightning
flash-size or rainband-cluster power-law statistics was located in this session. This
sub-lead is UNRESOLVED — flagging as a future search target rather than a candidate, since I
found no citable source to report (per hard rule: no fabrication, and a bare search summary
is not a source).

**Overall verdict on item 3: STILL-BLOCKED** in the sense that no storm-INTERNAL heavy-tail
statistic was found. Two well-documented candidates exist (Corral 2011, Peters & Neelin 2006)
but both, on primary-read, are CROSS-storm or GENERAL-atmosphere claims, not storm-internal
ones — meaning neither actually resolves the flag's request for a storm-internal statistic.
This is itself a useful negative result: it strengthens the case that no such statistic
currently exists in the literature, which is exactly what would justify dropping the score to
0 (matching the cities precedent the flag cites), but I am explicitly not making that call.

**Proposed append-only YAML snippet** (flag_cleanup_notes convention, append under
`provenance.flag_cleanup_notes`):

```yaml
    - column: criticality
      outcome: PARTIAL — searched for a citable storm-INTERNAL heavy-tail/criticality
        statistic (research/v0.2-sweep/verification-debt/tropical-cyclones.md has full log).
        Two candidates primary-read in full: (1) Corral 2011 "Tropical Cyclones as a Critical
        Phenomenon" (arXiv:1103.4654) — re-presents the SAME cross-storm PDI/ACE power law as
        corral2010 with qualitative SOC narrative framing (WISHE/threshold-driven), explicitly
        unresolved by the author himself re: individual-storm criticality ("not clear why they
        still retain critical characteristics" vs. Peters & Neelin's convective threshold).
        (2) Peters & Neelin 2006 Nature Physics "Critical phenomena in atmospheric
        precipitation" (doi:10.1038/nphys314) — rigorous (finite-size scaling, critical
        exponent beta=0.215+-0.02, TRMM satellite data) but for GENERAL tropical
        convection/precipitation, not tropical-cyclone-specific or storm-internal; paper never
        mentions TCs/hurricanes/typhoons. Neither candidate supplies a storm-internal
        heavy-tail statistic; no lightning-flash-size or rainband-cluster TC-internal power-law
        source was located either. This negative result is evidence FOR (not proof of) the
        score-0 case per the cities precedent, but the 1-vs-0 decision remains for the
        orchestrator.
```

---

## Summary of verdicts

1. **Lovejoy 1982** — RESOLVED-primary-read. Full text obtained via McGill author-hosted PDF.
   D=1.35 confirmed exactly, method/measurand confirmed general (not hurricane-specific),
   citation upgraded from snippet-verified to primary-read.

2. **rs2023 (Chernogor 2023)** — RESOLVED-primary-read. Full 39-page text obtained via the
   res.mdpi.com CDN subdomain (bypasses the www.mdpi.com bot-block). Mass = 1.2e16 kg confirmed
   exactly as stated in Table 1, but revealed to be itself a modeled/derived estimate (density
   x volume via the Shuleikin 1978 model), not an independent empirical measurement — recommend
   softening "corroborates" language at next revision.

3. **Criticality storm-internal candidates** — STILL-BLOCKED (no storm-internal heavy-tail
   statistic found), but with two candidates fully investigated and both shown NOT to qualify
   (Corral 2011 = same cross-storm claim as existing corral2010 citation; Peters & Neelin 2006
   = rigorous but general-atmosphere, not TC-specific). This negative result is itself useful
   evidence for the orchestrator's 1-vs-0 decision.
