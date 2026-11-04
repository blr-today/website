import { showPopover } from './event-list.js'

const data = JSON.parse(document.getElementById('tag-kinds').textContent)
const [sources, locations, calendars, tags] = ['Source', 'Location', 'Calendar', 'Tag'].map(k => data.kinds[k].map(([name]) => name))
const NO_LOCATION = locations.length
const COLUMNS = [
  { title: 'Location', labels: [...locations, 'No location'], of: e => e[1] < 0 ? NO_LOCATION : e[1] },
  { title: 'Calendar', labels: ['Curated', 'Unwanted'], of: e => ['Curated', 'Unwanted'].indexOf(calendars[e[2]]) },
]
// Rows can hold several values per event, as tags do
const ROWS = [
  { title: 'Source', labels: sources, of: e => [e[0]], skip: null },
  { title: 'Location', labels: COLUMNS[0].labels, of: e => [COLUMNS[0].of(e)], skip: 0 },
  { title: 'Tag', labels: tags, of: e => e[3], skip: null },
]

const EVENTS = data.events.map((e, i) => {
  const [id, name, start, type, url, keywords] = data.details[i]
  return { id, name, start, type, url, keywords, curated: calendars[e[2]] === 'Curated' }
})
const pick = test => data.events.flatMap((e, i) => test(e) ? [EVENTS[i]] : [])

function el(tag, props = {}, ...children) {
  const node = Object.assign(document.createElement(tag), props)
  node.append(...children)
  return node
}

function draw(root) {
  const head = el('thead', {},
    el('tr', {}, el('th'), ...COLUMNS.flatMap((c, i) => [i ? el('th', { className: 'gap' }) : '', el('th', { colSpan: c.labels.length, textContent: c.title })])),
    el('tr', {}, el('th'), ...COLUMNS.flatMap((c, i) => [i ? el('th', { className: 'gap' }) : '', ...c.labels.map((l, k) => {
      const th = el('th', { className: 'col' }, el('span', { textContent: l }))
      th.dataset.events = ''
      th.onclick = ev => showPopover(l, pick(e => c.of(e) === k), ev)
      return th
    })])))
  const table = el('table', { className: 'heat' }, head)
  for (const row of ROWS) {
    const grid = row.labels.map(() => COLUMNS.map(c => c.labels.map(() => 0)))
    const totals = row.labels.map(() => 0)
    for (const e of data.events) {
      for (const r of row.of(e)) {
        totals[r]++
        COLUMNS.forEach((c, ci) => c.of(e) >= 0 && grid[r][ci][c.of(e)]++)
      }
    }
    const body = el('tbody', {}, el('tr', {}, el('th', { className: 'block', colSpan: 99, textContent: row.title })))
    row.labels.forEach((label, r) => {
      if (!totals[r]) return
      const cells = COLUMNS.flatMap((c, ci) => [ci ? el('td', { className: 'gap' }) : '', ...c.labels.map((col, k) => {
        const n = grid[r][ci][k]
        if (!n || row.skip === ci) return el('td')
        // Shaded by share of the row, so small sources read as clearly as big ones
        const heat = Math.round(100 * n / totals[r])
        const td = el('td', { textContent: n, title: `${label} · ${col}: ${n} of ${totals[r]} events (${heat}%)`, className: heat > 55 ? 'hot' : '' })
        td.style.setProperty('--heat', `${heat}%`)
        td.dataset.events = ''
        td.onclick = ev => showPopover(`${label} · ${col}`, pick(e => row.of(e).includes(r) && c.of(e) === k), ev)
        return td
      })])
      const name = el('th', { textContent: `${label} ` }, el('span', { className: 'n', textContent: totals[r] }))
      name.dataset.events = ''
      name.onclick = ev => showPopover(label, pick(e => row.of(e).includes(r)), ev)
      body.append(el('tr', {}, name, ...cells))
    })
    table.append(body)
  }
  root.replaceChildren(table)
}

draw(document.getElementById('tag-matrix'))

// The Sankey is drawn at build time; its flows and nodes name the hosts and calendar they hold
document.querySelector('.sankey')?.addEventListener('click', ev => {
  const part = ev.target.closest('[data-events]')
  if (!part) return
  const hosts = JSON.parse(part.dataset.hosts || 'null')?.map(h => sources.indexOf(h))
  const kind = part.dataset.kind
  const events = kind === 'Duplicate'
    ? pick(e => e[4].some(s => hosts.includes(s)))
    : pick(e => (!hosts || hosts.includes(e[0])) && (!kind || calendars[e[2]] === kind))
  showPopover(part.dataset.title, events, ev)
})
