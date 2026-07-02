# Web App Concept

> **Status (2026-07-02, v0.2):** BUILT and redesigned — the "scholarly reference" identity (light paper theme, Source Serif 4 / Source Sans 3, design spec in [app/DESIGN.md](../app/DESIGN.md)). The Table's aspirational form below now EXISTS: the landing page renders a true periodic-table grid (category rows × PC1-bin columns from the analysis output, expansion-queue ghost tiles). Also added: content pages /myths (folklore register), /concepts (mention-only measures), /methods (pipeline + validation program), a real landing narrative, OG/meta, mobile + a11y pass. Dev: `npm --prefix app run dev` (port 4321). Deploy: `netlify.toml` chains validator → analysis → build. This document remains the product-concept reference; the code is the implementation.

The public face of the definitive reference. Layered by design (decision D5): a science-museum surface with a researcher's evidence layer one click down.

## Views

**1. The Table** — the signature view. A grid of all classes, arranged along meaningful axes. v0.1: category × characteristic scale. Aspirational: data-derived axes from the analysis (below) — the actual "periodic table of complexity."

**2. System profile** — one page per class/instance.
- *Public layer:* narrative summary, headline attributes, emergent phenomena, visuals.
- *Evidence layer:* the full panel — every value with citation, every rubric score with justification and confidence, verification status. Data export (YAML/JSON) per entry.

**3. Compare** — pick 2–4 systems; radar chart / parallel coordinates across the panel. Where the "a hurricane and the NYSE have the same feedback structure" moments happen.

**4. The Map** — all systems embedded in metric space (PCA/UMAP over the panel), clusters visible and explorable. This is the discovery instrument; if a periodic-table structure exists in the data, it shows up here first. Run first at Phase 5 on the pilot 10 as a smoke test of commensurability.

## Stack proposal (confirm before Phase 5 — no build until then)

- **Astro** static site — content-driven, zero backend (dragon #1), interactive islands only where views need them
- **D3** for Table / Compare / Map custom views
- Data pipeline: `data/*.yaml` → validated → JSON at build time; the git repo IS the database
- Deploy: **Netlify**
- Alternative if React is preferred: Next.js static export

Analysis (clustering, PCA, correlations) lives in a `analysis/` notebook/scripts directory in-repo, not in the app; the app renders its outputs.
