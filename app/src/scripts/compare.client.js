// Client-side D3 radar chart for the Compare page.
// Reads the embedded JSON island (#compare-data), renders a checkbox
// list of systems (2-4 selectable), and draws category-colored radar
// polygons over the 15 rubric/hybrid columns, 0-4 rings.
import * as d3 from 'd3';

const dataEl = document.getElementById('compare-data');
const data = JSON.parse(dataEl.textContent);

const MAX_SELECTED = 4;
const MIN_SELECTED = 2;
const MIN_SIZE = 320;
const MAX_SIZE = 560;

const selectHost = document.getElementById('system-select');
const radarHost = document.getElementById('radar-host');
const legendHost = document.getElementById('radar-legend');

// Default selection: first two systems in category order (tropical-cyclones,
// financial-markets tend to be a good contrast pair if present).
let selected = new Set(data.systems.slice(0, 2).map((s) => s.id));

function renderCheckboxes() {
  selectHost.innerHTML = '';
  data.systems.forEach((sys) => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = sys.id;
    checkbox.checked = selected.has(sys.id);
    const atMax = selected.size >= MAX_SELECTED;
    checkbox.disabled = atMax && !selected.has(sys.id);

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        if (selected.size >= MAX_SELECTED) {
          checkbox.checked = false;
          return;
        }
        selected.add(sys.id);
      } else {
        if (selected.size <= MIN_SELECTED) {
          checkbox.checked = true;
          return;
        }
        selected.delete(sys.id);
      }
      renderCheckboxes();
      renderRadar();
    });

    const swatch = document.createElement('span');
    swatch.className = 'select-swatch';
    swatch.style.background = sys.color;

    const text = document.createElement('span');
    text.textContent = sys.name;

    label.appendChild(checkbox);
    label.appendChild(swatch);
    label.appendChild(text);
    selectHost.appendChild(label);
  });
}

function measureSize() {
  const available = radarHost.clientWidth || MIN_SIZE;
  return Math.max(MIN_SIZE, Math.min(MAX_SIZE, available));
}

function renderRadar() {
  radarHost.innerHTML = '';
  legendHost.innerHTML = '';

  const systems = data.systems.filter((s) => selected.has(s.id));
  const columns = data.columns;
  const labels = data.labels;
  const n = columns.length;

  const size = measureSize();
  const margin = Math.round(size * 0.173);
  const radius = size / 2 - margin;
  const center = size / 2;

  const systemNames = systems.map((s) => s.name).join(', ');
  const svg = d3
    .create('svg')
    .attr('viewBox', `0 0 ${size} ${size}`)
    .attr('width', '100%')
    .attr('height', size)
    .attr('role', 'img')
    .attr('aria-label', `Radar chart comparing ${systemNames || 'selected systems'} across ${n} rubric and hybrid metric scores, each scored 0 to 4.`)
    .style('max-width', `${size}px`)
    .style('overflow', 'visible');

  const angleFor = (i) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const rScale = d3.scaleLinear().domain([0, 4]).range([0, radius]);

  const g = svg.append('g').attr('transform', `translate(${center},${center})`);

  // Rings (0-4)
  const ringGroup = g.append('g');
  [1, 2, 3, 4].forEach((ring) => {
    ringGroup
      .append('circle')
      .attr('r', rScale(ring))
      .attr('fill', 'none')
      .attr('stroke', 'var(--border)')
      .attr('stroke-width', ring === 4 ? 1.2 : 1);
  });

  // Spokes + axis labels
  const labelFontSize = Math.max(9.5, Math.round(size * 0.0202 * 10) / 10);
  columns.forEach((col, i) => {
    const angle = angleFor(i);
    const x2 = Math.cos(angle) * radius;
    const y2 = Math.sin(angle) * radius;
    g.append('line')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', x2)
      .attr('y2', y2)
      .attr('stroke', 'var(--border-soft)')
      .attr('stroke-width', 1);

    const labelR = radius + 14;
    const lx = Math.cos(angle) * labelR;
    const ly = Math.sin(angle) * labelR;
    const anchor = Math.abs(lx) < 4 ? 'middle' : lx > 0 ? 'start' : 'end';

    g.append('text')
      .attr('x', lx)
      .attr('y', ly)
      .attr('text-anchor', anchor)
      .attr('dominant-baseline', 'middle')
      .attr('font-size', `${labelFontSize}px`)
      .attr('fill', 'var(--ink-dim)')
      .text(labels[i]);
  });

  // Ring value labels along the top spoke
  [1, 2, 3, 4].forEach((ring) => {
    g.append('text')
      .attr('x', 4)
      .attr('y', -rScale(ring) - 3)
      .attr('font-size', `${Math.max(9, labelFontSize - 1.5)}px`)
      .attr('fill', 'var(--ink-faint)')
      .text(ring);
  });

  const lineGen = d3
    .lineRadial()
    .angle((_, i) => angleFor(i) + Math.PI / 2)
    .radius((d) => rScale(d ?? 0))
    .curve(d3.curveLinearClosed);

  systems.forEach((sys) => {
    const scores = sys.scores.map((v) => (v == null ? 0 : v));
    const path = lineGen(scores);

    g.append('path')
      .attr('d', path)
      .attr('fill', sys.color)
      .attr('fill-opacity', 0.14)
      .attr('stroke', sys.color)
      .attr('stroke-width', 2)
      .attr('stroke-opacity', 0.9);

    scores.forEach((v, i) => {
      if (sys.scores[i] == null) return; // don't plot a false dot for unscored columns
      const angle = angleFor(i);
      const r = rScale(v);
      g.append('circle')
        .attr('cx', Math.cos(angle) * r)
        .attr('cy', Math.sin(angle) * r)
        .attr('r', 3.5)
        .attr('fill', sys.color)
        .append('title')
        .text(`${sys.name} — ${labels[i]}: ${sys.scores[i]}/4`);
    });
  });

  radarHost.appendChild(svg.node());

  systems.forEach((sys) => {
    const item = document.createElement('div');
    item.className = 'item';
    const swatch = document.createElement('span');
    swatch.className = 'swatch';
    swatch.style.background = sys.color;
    const label = document.createElement('span');
    label.textContent = sys.name;
    item.appendChild(swatch);
    item.appendChild(label);
    legendHost.appendChild(item);
  });
}

function debounce(fn, wait) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

const debouncedRerender = debounce(renderRadar, 150);
window.addEventListener('resize', debouncedRerender);
if (typeof ResizeObserver !== 'undefined') {
  const ro = new ResizeObserver(debouncedRerender);
  ro.observe(radarHost);
}

renderCheckboxes();
renderRadar();
