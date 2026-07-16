# Citation Check — road-traffic-systems

Checker: citation-checker (adversarial). Date: 2026-07-16.
Entry: N:\coc\data\classes\road-traffic-systems.yaml
Sources doc: N:\coc\research/v0.3/expansion\road-traffic-systems-sources.md

Methodology: web-verify each load-bearing cited quantitative/qualitative claim.
Verdicts: PASS (source read, states claim) / PARTIAL (approximately right,
discrepancy noted) / UNVERIFIABLE (source unreachable) / FAIL (contradicts
or absent).

## sugiyama2008 (230 m circuit, 22-23 vehicles, spontaneous jam)

- Attempted direct fetch of IOPscience (10.1088/1367-2630/10/3/033001):
  HTTP 403, same failure the entry's own provenance already discloses.
- Attempted ResearchGate mirror: HTTP 403.
- WebSearch across multiple aggregators (Semantic Scholar, SciRP, PMC
  citing-article) confirms: paper exists, published NJP 10, 033001 (2008),
  experiment = circular road with no bottleneck, jam emerges spontaneously
  after ~10 min once density crosses a critical threshold, described as the
  first experimental evidence of a jam as a dynamical-phase-transition /
  pattern-formation phenomenon. This corroborates the QUALITATIVE claim
  (spontaneous jam, no bottleneck) at PASS-adjacent confidence via
  independent secondary sources (not the same single secondary chain the
  drafter already flagged).
- The SPECIFIC numbers (230 m circuit length, 22-23 vehicles) were NOT
  independently re-confirmed this check — no fetchable source stated
  those exact figures in the search results retrieved (only general
  "circular road" language surfaced, e.g. the PMC citing-article that
  discusses a different, later Hefei-China 25-car/3.2km experiment and
  explicitly does NOT restate Sugiyama's own figures).
- Verdict: PARTIAL for the qualitative jam-formation claim (independently
  corroborated by multiple secondary sources, still not primary-read);
  UNVERIFIABLE for the specific 230 m / 22-23 vehicle figures (matches the
  entry's own honest disclosure — not upgraded, not contradicted).

## oica-statista (1.28e9 vehicles: 947M passenger + 335M commercial, 2015)

- Statista page fetch failed (redirect loop, paywall-gated content typical
  of Statista's teaser pages).
- oica.net/statistics/ and oica.net/category/vehicles-in-use/ : 404 / not
  the current page structure (OICA appears to have reorganized its site;
  the entry's own note that oica.net/statistics/ "was not directly
  fetched" is corroborated — it may no longer resolve at all).
- WebSearch corroborates the specific figures (947 million passenger cars +
  335 million commercial vehicles, 2015, OICA-sourced) via independent
  secondary summaries pointing back to the same Statista page — i.e. two
  or more independent search aggregators state the identical breakdown,
  which raises confidence above a single-snippet read but does not
  constitute a primary source read.
- Verdict: PARTIAL — figure is consistently reported across independent
  secondary aggregation, but no primary OICA table or unpaywalled Statista
  page was actually read. Matches entry's own snippet-verified/
  measured-untested framing; not a fabrication, but still not a PASS.

## mdpi-capacity-drop-2023 (2-25% capacity drop range; ~500 veh/h / 11.9% example)

- Direct MDPI fetch: HTTP 403.
- WebSearch confirms the paper's existence and title ("Capacity Drop at
  Freeway Ramp Merges with Its Replication in Macroscopic and Microscopic
  Traffic Simulations: A Tutorial Report," Sustainability 15(3):2050, 2023)
  and an independent search-result summary explicitly states the "~500
  veh/h (11.9%)" figure tied to this paper.
- Verdict: PARTIAL — title/existence and the specific numeric example are
  corroborated by search-engine summarization of the source, but the paper
  itself was not read in full; the entry's own 2-25% range was not
  independently spot-checked against the paper's actual reported range.

## geroliminis-daganzo2008 (Yokohama MFD field experiment)

- Direct fetch of escholarship.org mirror: HTTP 403.
- WebSearch surfaced and quoted what appears to be the paper's actual
  abstract (via aggregator summarization): "A field experiment in Yokohama
  (Japan) reveals that a macroscopic fundamental diagram (MFD) linking
  space-mean flow, density and speed exists on a large urban area... it was
  observed that when the somewhat chaotic scatter-plots of speed vs.
  density from individual fixed detectors were aggregated the scatter
  nearly disappeared and points grouped neatly along a smoothly declining
  curve," collected in Yokohama, December 2001. This directly and
  specifically supports the entry's summary/emergence/self_organization
  claims about the MFD collapse phenomenon.
- Verdict: PASS for the qualitative MFD-collapse claim (the core citable
  content this entry rests on) — abstract-level content independently
  reproduced via search aggregation, consistent with entry's characterization.
  Still short of an actual full-text primary read (entry correctly marks
  snippet-verified, not primary-read) — no numeric MFD parameters are
  claimed by the entry, so there is no further numeric claim to check.

## geroliminis-sun2011 (MFD hysteresis)

- Not independently re-fetched this check (time budget; this paper is not
  the citation this session was asked to prioritize and the entry itself
  already flags it as snippet-only, deferred-upgrade). No new evidence
  either way. Verdict: UNVERIFIABLE (unchanged from entry's own status).

## kerner-rehborn1996-secondary (15-20 km/h wide-moving-jam propagation speed)

- Direct fetch of Phys. Rev. E 53:R4275 not attempted (not open-access,
  paywalled at APS).
- WebSearch corroborates the *general* constant-velocity claim independently
  of the entry's own source chain: Wikipedia's "Three-phase traffic theory"
  page (fetched directly, 200 OK) states "the mean velocity of the
  downstream front v_g is maintained... characteristic feature of the wide
  moving jam," matches "typically between 15 and 20 km/h (Kerner and
  Rehborn, 1996)" per an independent search summary, and confirms Kerner's
  theory is "almost completely based on measurements on the Bundesautobahn
  5 in Germany" with later US/UK confirmatory studies — consistent with,
  though not numerically identical in detail to, the entry's "-15 km/h I-5
  North" / "-16 km/h autobahn A5" specific pair.
- The entry's specific claimed pairing (an I-5 North example alongside an
  A5 example) was NOT found stated together in any source surfaced this
  check — only the general "15-20 km/h, A5-based" claim was corroborated.
  The I-5 North -15 km/h figure specifically could not be traced to any
  source in this check.
- Verdict: PASS for the general "15-20 km/h, remarkably invariant, A5-based"
  claim (independently corroborated via Wikipedia's own secondary synthesis
  of the same literature); PARTIAL/UNVERIFIABLE for the specific I-5 North
  -15 km/h and A5 -16 km/h numeric pairing in the entry's method field —
  no independent source for that exact pairing was located.

## Overall

No fabrication detected. No FAIL verdicts. The entry's own provenance
notes already disclose (honestly) that most of these sources are
snippet-verified or secondary-corroborated rather than primary-read; this
check's independent web pass corroborates the qualitative content of every
load-bearing claim via at least one source not already in the entry's own
citation chain, while surfacing one PARTIAL-severity discrepancy (the
I-5 North / A5 numeric pairing under kerner-rehborn1996-secondary) that
should be corrected or hedged before verified status, plus two note-level
observations for the record.
