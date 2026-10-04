// Must tags OR within a group and AND across groups; any never tag hides an event
const LABEL = { 1: 'Must', 0: 'Any', '-1': 'Never' }
const CLS = { 1: 'must', 0: 'any', '-1': 'never' }
const GROUPS = { type: 'Event type', location: 'Area', price: 'Price' }
const PRICE_ORDER = ['FREE', 'BUDGET', 'VALUE', 'PRICEY']
const PRICE_WORDS = { FREE: 'free', BUDGET: 'under ₹500', PRICEY: 'at least ₹2,000' }

function h(tag, attrs = {}, ...children) {
  let el = document.createElement(tag)
  for (let [k, v] of Object.entries(attrs)) {
    if (v === null || v === undefined || v === false) continue
    if (k.startsWith('on')) el.addEventListener(k.slice(2), v)
    else if (k === 'text') el.textContent = v
    else el.setAttribute(k, v === true ? '' : v)
  }
  for (let c of children.flat(Infinity)) {
    if (c === null || c === undefined || c === false || c === '') continue
    el.append(c instanceof Node ? c : String(c))
  }
  return el
}

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback }
}

function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)) } catch {}
}

function typeLabel(type) {
  if (type === 'Event') return 'Uncategorized'
  if (type === 'ChildrensEvent') return "Children's"
  if (type === 'CourseInstance') return 'Course'
  return type.replace(/Event$/, '').replace(/([a-z])([A-Z])/g, '$1 $2')
}

function list(items, word) {
  if (items.length < 2) return items.join('')
  return `${items.slice(0, -1).join(', ')} ${word} ${items.at(-1)}`
}

function describe({ shown, total, must, never }) {
  let noun = n => n === 1 ? 'event' : 'events'
  let types = must.type.length ? `${list(must.type, 'or')} ` : ''
  let where = (must.location.length ? ` in ${list(must.location, 'or')}` : '') +
    (must.price.length ? ` where entry is ${list(must.price, 'or')}` : '')
  let all = total === 1 ? 'The only event is hidden.' : `All ${total} events are hidden.`
  let lead = shown === 0 ? (types || where ? `No ${types}events${where}. ${all}` : all)
    : !types && !where ? (shown === total ? `Showing all ${total} ${noun(total)}.` : `Showing ${shown} of ${total} ${noun(total)}.`)
    : `Showing ${shown} ${types}${noun(shown)}${where}, out of ${total}.`
  let place = [
    never.location.length && `in ${list(never.location, 'or')}`,
    !must.price.length && never.price.length && `where entry is ${list(never.price, 'or')}`,
  ].filter(Boolean)
  let out = [
    !must.type.length && never.type.length && `${list(never.type, 'and')} events`,
    place.length && `events ${place.join(never.location.length > 1 ? ', or ' : ' or ')}`,
  ].filter(Boolean)
  return out.length ? `${lead} Leaving out ${out.join(', as well as ')}.` : lead
}

function areaNames() {
  try {
    return new Map(JSON.parse(document.getElementById('blr-tag-info')?.textContent || '[]').map(t => [t.id, t.title?.replace(/\s*\[.*\]$/, '')]))
  } catch { return new Map() }
}

function tagFilter(calendar, root, facetsOf) {
  let storeKey = `blr-tag-filter ${location.pathname}`
  let state = new Map()
  let events = [], tags = [], keysOf = new Map(), hidden = new Set()
  let areas = areaNames()
  let words = {
    type: t => t.label.toLowerCase(),
    location: t => areas.get(t.label) || t.label,
    price: t => PRICE_WORDS[t.label] || t.label.toLowerCase(),
  }
  let panel = h('div', { class: 'blr-tf__panel', id: 'blr-tf-panel', hidden: true })
  let count = h('span', { class: 'blr-tf__count' })
  let toggle = h('button', {
    type: 'button', class: 'blr-tf__toggle', 'aria-expanded': 'false', 'aria-controls': 'blr-tf-panel',
    onclick: () => {
      panel.hidden = !panel.hidden
      toggle.setAttribute('aria-expanded', String(!panel.hidden))
      desc.hidden = panel.hidden && state.size === 0
    },
  }, 'Filter ', count)
  let desc = h('p', { class: 'blr-tf__desc', 'aria-live': 'polite', hidden: true })
  root.append(toggle, panel, desc)

  const get = key => state.get(key) || 0
  const groupOf = key => key.slice(0, key.indexOf(':'))

  function set(key, value) {
    if (value) state.set(key, value)
    else state.delete(key)
    save(storeKey, Object.fromEntries(state))
    apply()
    draw()
  }

  function keep(event) {
    let keys = keysOf.get(event)
    if (keys.some(k => get(k) < 0)) return false
    let musts = [...state].filter(([, v]) => v > 0).map(([k]) => k)
    return Object.keys(GROUPS).every(g => {
      let wanted = musts.filter(k => groupOf(k) === g)
      return wanted.length === 0 || keys.some(k => wanted.includes(k))
    })
  }

  function apply() {
    let next = new Set(events.filter(e => !keep(e)))
    calendar.batchRendering(() => events.forEach(e => {
      if (next.has(e) !== hidden.has(e)) e.setProp('display', next.has(e) ? 'none' : 'auto')
    }))
    hidden = next
    count.textContent = hidden.size ? `· hiding ${hidden.size} of ${events.length}` : `· ${events.length} events`
    root.classList.toggle('is-filtering', state.size > 0)
    let pick = v => Object.fromEntries(Object.keys(GROUPS).map(g => [g, tags.filter(t => t.group === g && get(t.key) === v).map(words[g])]))
    desc.textContent = describe({ shown: events.length - hidden.size, total: events.length, must: pick(1), never: pick(-1) })
    desc.hidden = panel.hidden && state.size === 0
  }

  let label = t => [h('span', { class: 'blr-tf__name', text: t.label }), h('small', { text: t.count })]
  // Tap a chip to cycle any, must, never
  let chips = () => Object.entries(GROUPS).map(([g, title]) => {
    let ts = tags.filter(t => t.group === g)
    return ts.length > 0 && h('div', { class: 'blr-tf__group' }, h('h4', { text: title }), h('div', { class: 'blr-tf__chips' }, ts.map(t => h('button', {
      type: 'button', class: `blr-tf__chip is-${CLS[get(t.key)]}`, 'data-group': t.group, title: `${t.label}: ${LABEL[get(t.key)]}`,
      onclick: () => set(t.key, { 0: 1, 1: -1, '-1': 0 }[get(t.key)]),
    }, { 1: '★ ', '-1': '⊘ ' }[get(t.key)], label(t)))))
  }).filter(Boolean)

  function draw() {
    panel.replaceChildren(...chips(), h('p', { class: 'blr-tf__foot' },
      h('span', { text: hidden.size ? `${hidden.size} of ${events.length} events hidden` : `All ${events.length} events shown` }),
      state.size > 0 && h('button', { type: 'button', class: 'blr-tf__reset', onclick: () => { state.clear(); set(':', 0) }, text: 'Reset' }),
      h('button', { type: 'button', class: 'blr-tf__feedback', 'data-feedback': 'tag-filter', text: 'Feedback' })))
  }

  function init() {
    calendar.off('eventsSet', init)
    let { activeStart, activeEnd } = calendar.view
    events = calendar.getEvents().filter(e => (e.end || e.start) >= activeStart && e.start < activeEnd)
    let counts = new Map()
    for (let e of events) {
      let facets = facetsOf(e)
      keysOf.set(e, facets.map(f => `${f.group}:${f.name}`))
      for (let f of facets) {
        let key = `${f.group}:${f.name}`
        if (!counts.has(key)) counts.set(key, { key, group: f.group, label: f.group === 'type' ? typeLabel(f.name) : f.name, count: 0 })
        counts.get(key).count++
      }
    }
    let rank = t => t.group === 'price' ? PRICE_ORDER.indexOf(t.label) : -t.count
    tags = [...counts.values()].sort((a, b) => rank(a) - rank(b) || a.label.localeCompare(b.label))
    for (let [key, v] of Object.entries(load(storeKey, {}))) if (counts.has(key) && (v === 1 || v === -1)) state.set(key, v)
    root.hidden = tags.length === 0
    apply()
    draw()
  }

  if (calendar.getEvents().length) init()
  else calendar.on('eventsSet', init)
}

export { tagFilter, describe }
