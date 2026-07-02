// Category color lookup — mirrors the CSS custom properties in global.css.
// Exposed as JS too, for D3 client islands that need color values directly
// (CSS var() strings work fine as D3 fill values in-browser, but having a
// plain map is convenient for legends / JSON embedding).
export const CATEGORY_COLOR_VAR = {
  astrophysical: 'var(--cat-astrophysical)',
  geophysical: 'var(--cat-geophysical)',
  'physical-chemical': 'var(--cat-physical-chemical)',
  'socio-economic': 'var(--cat-socio-economic)',
  infrastructure: 'var(--cat-infrastructure)',
  'cultural-informational': 'var(--cat-cultural-informational)',
};

// Hex fallbacks (same values as the CSS) for contexts where a literal
// color string is required (e.g. D3 computing derived colors).
export const CATEGORY_COLOR_HEX = {
  astrophysical: '#a06b0a',
  geophysical: '#2e7d4f',
  'physical-chemical': '#2f6bbf',
  'socio-economic': '#b8433d',
  infrastructure: '#6d4fc4',
  'cultural-informational': '#0f7285',
};

export function categoryColorVar(category) {
  return CATEGORY_COLOR_VAR[category] || '#8a939c';
}

export function categoryColorHex(category) {
  return CATEGORY_COLOR_HEX[category] || '#8a939c';
}
