# Catalog of Complexity — design spec (v0.2, "scholarly reference")

Direction approved by Nick 2026-07-02: **scholarly reference work** — serif display headings,
humanist sans body, paper-white background, restrained ink palette, one accent per system
category. Think modern university-press data project (OED/Britannica register), not dashboard.
Stack stays Astro + vanilla D3; all styling stays in `src/styles/global.css` CSS custom
properties; no framework additions.

## Typography

Self-hosted via @fontsource npm packages (no external font CDN — repo must build offline):

- Display / headings: **Source Serif 4** (`@fontsource-variable/source-serif-4`) — weights 600/700 for h1–h3.
- Body / UI: **Source Sans 3** (`@fontsource-variable/source-sans-3`) — 400/600.
- Data / numbers / code: keep the `ui-monospace` system stack (`--font-mono`), no webfont.

Scale (desktop): h1 2.4rem/1.15, h2 1.5rem, h3 1.17rem, body 1rem/1.65, small .875rem,
tiny .8125rem. Headings in serif, tracking-tight; body sans. Long-form content pages get
`max-width: 68ch` measure.

## Color tokens (light "paper" theme — replaces the dark theme)

```css
--bg: #faf9f6;            /* warm paper */
--bg-raised: #ffffff;
--bg-card: #ffffff;
--bg-inset: #f1efe9;
--border: #ddd8cd;
--border-soft: #eae7de;
--ink: #1d1f21;
--ink-dim: #565c63;
--ink-faint: #8a9098;
--accent: #8a6d1f;        /* muted brass — links/highlights, use sparingly */
```

Category accents (darkened for contrast ≥4.5:1 on paper; keep the same hue identities as v0.1):

```css
--cat-astrophysical: #a06b0a;
--cat-geophysical: #2e7d4f;
--cat-physical-chemical: #2f6bbf;
--cat-socio-economic: #b8433d;
--cat-infrastructure: #6d4fc4;
--cat-cultural-informational: #0f7285;
```

Evidence-status colors (same semantics, darkened):

```css
--evidence-measured: #22803f;
--evidence-measured-untested: #9a7d0a;
--evidence-measured-disputed: #b45f17;
--evidence-derived: #2f6bbf;
--evidence-qualitative: #6a7580;
--evidence-unknown: #a9b0b7;
```

`color-scheme: light`. Update `src/lib/colors.mjs` hex fallbacks to match (D3 needs literals).
No dark mode this pass (parked; the token architecture keeps it cheap later).

## Voice & information architecture

- `/` — landing: narrative hero (what this is, why it is trustworthy) + **the periodic-table
  grid as the signature centerpiece** + short "how to read this" + links to all views.
- `/catalog` — the current category-grouped card index (moved from `/`).
- `/system/[id]`, `/compare`, `/map` — unchanged routes, restyled.
- `/myths` — the folklore register ("Complexity myths this catalog does not repeat").
- `/concepts` — the conceptual layer ("Why Kolmogorov complexity isn't a column").
- `/methods` — the pipeline as public-facing credibility (playbook, 4 adversarial verifiers,
  validator, provenance conventions, related work).

Header nav: Table (/) · Catalog · Compare · Map · Myths · Concepts · Methods. Version tag in
the header is computed from the live entry count (`getEntries().length`), never hardcoded.

## The periodic-table grid (signature view)

Pure server-rendered Astro component (`PeriodicTable.astro`), CSS grid, no D3, no client JS.

- **Rows** = the 6 categories (fixed order from `catalog.mjs`), labeled left with the
  category name in small caps.
- **Columns** = PC1 position, binned into 10 equal-width bins across the full PC1 range from
  `analysis/output/analysis.json` — so vertical alignment is meaningful: tiles in the same
  column have similar PC1. Two same-category systems in one bin stack vertically inside
  the cell.
- **Axis caption** under the grid: "← energetic-chaotic · · · informational-adaptive →
  (principal axis, PC1, 37.9% of variance)" — pull the variance number from analysis.json,
  don't hardcode.
- **Tile**: white card, 3px top border in category color; 1–2 letter element symbol
  (serif, large) in category color; class name (small); PC1 value (tiny, mono). Whole tile
  is one `<a>` to the system page; visible focus ring.
- **Element symbols** (fixed map in `catalog.mjs`, exported): stars St, tropical-cyclones Tc,
  planetary-climate Pc, earthquake-fault-systems Eq, river-networks Rv, cities Ci,
  financial-markets Fm, the-internet In, power-grids Pg, languages La. New entries get
  symbols on promotion (global-economy Ge, weather-systems We, ocean-circulation Oc,
  galaxies Ga, world-wide-web Ww).
- **Ghost tiles**: the unresolved relations expansion queue (ids referenced by entries but
  not yet drafted) render as dashed-outline tiles at the right end of their most plausible
  category row, labeled "in the queue", not clickable. The gaps ARE the periodic-table
  aesthetic: undiscovered elements.
- **Fallback** when analysis.json is absent: alphabetical order within category, sequential
  columns, and the axis caption is replaced by the existing "run the analysis" notice.
- Mobile: the grid sits in a horizontal-scroll container with `-webkit-overflow-scrolling`.

## Baseline polish (all views)

- `Base.astro` head: full meta set — description (truncated ~160 chars, escaped), canonical,
  `og:title/og:type/og:description/og:site_name`, `twitter:card=summary`. Inline SVG favicon
  (serif "C" glyph on paper, category-color underline), as a data-URI or `/favicon.svg`.
- Evidence table gets a horizontal-scroll wrapper on narrow viewports.
- Compare/Map SVGs: container-based sizing (measure parent, redraw on resize debounce);
  min font sizes; `role="img"` + `aria-label` on SVG roots; keyboard-focusable point links.
- Landmarks: `<header>/<main>/<footer>`, skip-link, single h1 per page, focus-visible styles.
- Media queries at 900px and 640px minimum; test the evidence table and both charts at 375px.
