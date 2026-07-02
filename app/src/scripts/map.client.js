// Client-side D3 scatter plot for the Map page: PCA PC1 x PC2, category
// colored, always-visible labels, axes annotated with top-3 |loading|
// columns per PC (signed) and explained-variance percentages, plus a
// toggleable loading-vector overlay.
import * as d3 from 'd3';

const dataEl = document.getElementById('map-data');
const host = document.getElementById('map-host');
const toggle = document.getElementById('toggle-loadings');

// Degrade gracefully: analysis.json may not exist at build time, in which
// case the page renders only the "not found" notice and neither #map-data
// nor #map-host are present.
const raw = dataEl ? dataEl.textContent.trim() : '';
const data = raw ? JSON.parse(raw) : null;

if (!data || !host) {
  // Nothing to draw — the server-rendered notice already explains why.
} else {

const width = 900;
const height = 620;
const margin = { top: 40, right: 40, bottom: 60, left: 60 };

const innerW = width - margin.left - margin.right;
const innerH = height - margin.top - margin.bottom;

const x = d3
  .scaleLinear()
  .domain(d3.extent(data.points, (d) => d.pc1))
  .nice()
  .range([0, innerW]);

const y = d3
  .scaleLinear()
  .domain(d3.extent(data.points, (d) => d.pc2))
  .nice()
  .range([innerH, 0]);

function pct(v) {
  return typeof v === 'number' ? `${(v * 100).toFixed(1)}%` : '';
}

function axisTitle(topLoadings, evPct, axisName) {
  const parts = topLoadings
    .map((r) => `${r.value > 0 ? '+' : '-'}${r.col}`)
    .join(', ');
  return `${axisName} (${evPct})${parts ? ' — ' + parts : ''}`;
}

const svg = d3
  .create('svg')
  .attr('viewBox', `0 0 ${width} ${height}`)
  .attr('width', '100%')
  .attr('height', height);

const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

// Gridlines
g.append('g')
  .attr('transform', `translate(0,${innerH})`)
  .call(d3.axisBottom(x).ticks(6).tickSize(-innerH))
  .call((axis) => {
    axis.selectAll('.domain').attr('stroke', 'var(--border)');
    axis.selectAll('line').attr('stroke', 'var(--border-soft)');
    axis.selectAll('text').attr('fill', 'var(--ink-faint)').attr('font-size', '10px');
  });

g.append('g')
  .call(d3.axisLeft(y).ticks(6).tickSize(-innerW))
  .call((axis) => {
    axis.selectAll('.domain').attr('stroke', 'var(--border)');
    axis.selectAll('line').attr('stroke', 'var(--border-soft)');
    axis.selectAll('text').attr('fill', 'var(--ink-faint)').attr('font-size', '10px');
  });

// Origin crosshair
g.append('line')
  .attr('x1', x(0)).attr('x2', x(0))
  .attr('y1', 0).attr('y2', innerH)
  .attr('stroke', 'var(--border)')
  .attr('stroke-dasharray', '3,3');
g.append('line')
  .attr('x1', 0).attr('x2', innerW)
  .attr('y1', y(0)).attr('y2', y(0))
  .attr('stroke', 'var(--border)')
  .attr('stroke-dasharray', '3,3');

// Axis titles
svg
  .append('text')
  .attr('x', margin.left + innerW / 2)
  .attr('y', height - 14)
  .attr('text-anchor', 'middle')
  .attr('font-size', '11.5px')
  .attr('fill', 'var(--ink-dim)')
  .text(axisTitle(data.pc1Top, pct(data.explainedVariance[0]), 'PC1'));

svg
  .append('text')
  .attr('transform', `translate(16,${margin.top + innerH / 2}) rotate(-90)`)
  .attr('text-anchor', 'middle')
  .attr('font-size', '11.5px')
  .attr('fill', 'var(--ink-dim)')
  .text(axisTitle(data.pc2Top, pct(data.explainedVariance[1]), 'PC2'));

// Loading vector overlay (hidden by default)
const loadingScale = Math.min(innerW, innerH) * 0.4;
const loadingGroup = g.append('g').attr('id', 'loading-vectors').style('display', 'none');

data.columns.forEach((col) => {
  const vec = data.loadings[col];
  if (!vec || vec.length < 2) return;
  const lx = vec[0] * loadingScale;
  const ly = -vec[1] * loadingScale; // flip: SVG y grows downward
  loadingGroup
    .append('line')
    .attr('x1', x(0)).attr('y1', y(0))
    .attr('x2', x(0) + lx).attr('y2', y(0) + ly)
    .attr('stroke', 'var(--accent)')
    .attr('stroke-width', 1)
    .attr('marker-end', 'url(#arrow)')
    .attr('opacity', 0.55);
  loadingGroup
    .append('text')
    .attr('x', x(0) + lx * 1.08)
    .attr('y', y(0) + ly * 1.08)
    .attr('font-size', '9px')
    .attr('fill', 'var(--accent)')
    .attr('opacity', 0.8)
    .text(col);
});

// Arrow marker def
svg
  .append('defs')
  .append('marker')
  .attr('id', 'arrow')
  .attr('viewBox', '0 0 10 10')
  .attr('refX', 8)
  .attr('refY', 5)
  .attr('markerWidth', 6)
  .attr('markerHeight', 6)
  .attr('orient', 'auto-start-reverse')
  .append('path')
  .attr('d', 'M 0 0 L 10 5 L 0 10 z')
  .attr('fill', 'var(--accent)');

if (toggle) {
  toggle.addEventListener('change', () => {
    loadingGroup.style('display', toggle.checked ? null : 'none');
  });
}

// Points
const pointGroup = g.append('g');
data.points.forEach((d) => {
  const px = x(d.pc1);
  const py = y(d.pc2);

  pointGroup
    .append('circle')
    .attr('cx', px)
    .attr('cy', py)
    .attr('r', 6)
    .attr('fill', d.color)
    .attr('stroke', 'var(--bg)')
    .attr('stroke-width', 1.5)
    .append('title')
    .text(`${d.name} (${d.category})\nPC1: ${d.pc1.toFixed(2)}  PC2: ${d.pc2.toFixed(2)}`);

  pointGroup
    .append('text')
    .attr('x', px + 9)
    .attr('y', py + 4)
    .attr('font-size', '11px')
    .attr('fill', 'var(--ink)')
    .text(d.name)
    .style('cursor', 'pointer')
    .on('click', () => {
      window.location.href = `/system/${d.id}/`;
    });
});

host.appendChild(svg.node());
}
