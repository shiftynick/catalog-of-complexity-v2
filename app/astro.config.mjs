import { defineConfig } from 'astro/config';

// Static output, no adapter needed — deployed as a static site (Netlify).
export default defineConfig({
  output: 'static',
  site: 'https://catalog-of-complexity.netlify.app',
});
