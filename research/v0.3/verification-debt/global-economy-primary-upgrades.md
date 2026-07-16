# global-economy — primary-read upgrade pass (standing item)

**Date:** 2026-07-16
**By:** orchestrated standing-item pass (subagent, direct API pulls via curl)
**Target:** the standing flag in `data/classes/global-economy.yaml` (`provenance.flags`, "World GDP / global firm count / degree_distribution") — three figures resting on search-engine-summarized secondary aggregation from the 2026-07-02 draft session, flagged for upgrade to primary-read via direct API/CSV pulls.

## Summary

| Figure | Result | Old status | New status |
|---|---|---|---|
| World GDP (nominal) | **UPGRADED** | snippet-only, $105.69T (2023) / $111.3T (2024) | primary-read, $107.35T (2023) / $111.67T (2024) / $118.35T (2025), WB API + IMF WEO cross-check |
| Global firm count (~3-4e8) | **NOT upgraded** | measured-disputed, secondary | unchanged — no WB API total-firm-stock indicator exists |
| World primary energy consumption (~620 EJ/yr 2023, Energy Institute) | **NOT upgraded** | snippet-only | unchanged — energyinst.org 403 Forbidden, same failure as 2026-07-02 |
| Trade-network degree distribution | not attempted | unsearched literature gap | unchanged (literature search, not an API pull — out of this pass's scope) |

## Pull 1 — World Bank API, world GDP (SUCCESS)

- **Endpoint:** `https://api.worldbank.org/v2/country/WLD/indicator/NY.GDP.MKTP.CD?format=json&date=2020:2025&per_page=10`
- **Indicator:** NY.GDP.MKTP.CD — GDP (current US$); **country:** 1W / WLD (World)
- **Retrieved:** 2026-07-16; response header `lastupdated: 2026-07-13`
- **HTTP:** 200, well-formed JSON, direct from the World Bank's own data service — qualifies as a primary read of the statistical source.
- **Values returned (current US$):**

| Year | Value |
|---|---|
| 2020 | 86,388,502,867,289 |
| 2021 | 98,780,038,374,127 |
| 2022 | 102,862,471,365,575 |
| 2023 | 107,348,614,073,350 |
| 2024 | 111,669,432,109,121 |
| 2025 | 118,350,166,039,396 |

- **Vs. the 2026-07-02 snippet figures:** 2023 was recorded as $105.69T (now $107.35T, +1.6%); 2024 as $111.3T (now $111.67T, +0.3%). Interpreted as World Bank data revisions between vintages — the earlier secondary summaries were faithful to the vintage they summarized, not wrong. Entry updated to the current-vintage values with both noted.

## Pull 2 — IMF WEO DataMapper API, world GDP cross-check (SUCCESS)

- **Endpoint:** `https://www.imf.org/external/datamapper/api/v1/NGDPD`
- **Series:** NGDPD — GDP, current prices, billions of US$; **group code:** WEOWORLD (the API ignores per-country path filters and returns the full dataset; WEOWORLD extracted from the JSON. Other group codes present: ADVEC, OEMDC, EURO, MECA.)
- **Retrieved:** 2026-07-16; HTTP 200, well-formed JSON, direct from imf.org — primary read. (Note: the plain WEO page at imf.org 403'd in the 2026-07-02 session; the DataMapper API endpoint does not.)
- **Values (WEOWORLD, billions US$):** 2023: 107,245.572 / 2024: 111,598.554 / 2025: 118,175.485
- **Cross-check:** agrees with the World Bank API within ~0.1% for 2023–2025. Recorded as a new source key `imf-weo-datamapper` in the entry.

## Pull 3 — global firm count (FAILED — no such indicator)

- **Attempted:** `IC.BUS.NREG` (New businesses registered, number) for WLD → HTTP 200 but **all values null** at the world aggregate; `IC.BUS.NDNS.ZS` (New business density, registrations per 1,000 people 15–64) for WLD → has values (e.g. 2023: 6.12, 2024: 5.15) but is a **flow density**, not a firm-stock count; `IC.BUS.TOTL` → does not exist ("The indicator was not found. It may have been deleted or archived.").
- **Also probed:** the WB `indicator?search=` endpoint — the search parameter is non-functional (returns the unfiltered indicator list), so a manual scan of candidate codes was used instead.
- **Conclusion:** the World Bank Entrepreneurship Database, which the entry's numerosity note named as the correct primary source, tracks **new-registration flows only** — there is no WB API indicator for total global firm stock. The ~3-4e8 figure stays `measured-disputed` on secondary aggregators. No fake upgrade recorded; numerosity note and standing flag annotated with this finding.

## Pull 4 — Energy Institute Statistical Review (FAILED — 403)

- **Attempted:** `https://www.energyinst.org/statistical-review` (with redirect-follow) → **HTTP 403 Forbidden**, identical failure mode to the 2026-07-02 session. (Not a WB/IMF source; attempted only because it sits in the same standing flag.)
- **Also attempted:** World Bank proxy `EG.USE.COMM.KT.OE` (energy use, kt oil equivalent) → indicator archived/not found; and in any case WB energy-use data ends ~2015 and would not substitute for the Energy Institute's 2023 ~620 EJ figure.
- **Conclusion:** the ~620 EJ/yr figure in `energy_rate_density.method` stays snippet-level. Annotation left as-is.

## Same-pass cosmetic fix (batch-2 pipeline flag)

- `component_ontology.parts[firms].itself_complex` cleaned from the non-conformant slash-pair `out-of-scope(human) / firms` to the single controlled value `firms`, now that `data/classes/firms.yaml` exists; the out-of-scope(human) framing for the human interior of firms is preserved in the inline comment and scoping note. financial-markets.yaml's parallel notation deliberately untouched (cross-entry consistency follow-up).

## Entry changes made (all logged in the append-only `provenance.fix_log`, by: "orchestrated standing-item pass, 2026-07-16")

1. `emergent_phenomena[0].order_parameter` — updated to current-vintage values, primary-read, prior figures noted.
2. `sources.world-bank-gdp` — rewritten to primary-read with endpoint, indicator code, retrieval date, exact values, and vintage-revision note.
3. `sources.imf-weo-datamapper` — new cross-check source block added.
4. `attributes.numerosity.note` — appended the Entrepreneurship-Database negative finding.
5. `component_ontology.parts[firms].itself_complex` — cosmetic fix above.
6. `provenance.flags` — resolution notes appended (never deleted) to the World-GDP flag and the component_ontology flag.

## Validator

`cd analysis && node validate.mjs` — run after the edits; see the session record for the result (expected: global-economy passes with 0 errors).
