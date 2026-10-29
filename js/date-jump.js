import { TYPE_COLORS, typeLabel } from './event-types.js'

// Floating month picker; only days listed in the calendar can be picked
const MONTH = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', month: 'long', year: 'numeric' })
const SHORT = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric' })
const LONG = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', weekday: 'long', month: 'long', day: 'numeric' })
const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const MAX_COLORS = 4
const OTHER = '#9ca3af'

let iso = d => d.toISOString().slice(0, 10)
let parse = s => new Date(s + 'T00:00:00Z')
let addDays = (s, n) => { let d = parse(s); d.setUTCDate(d.getUTCDate() + n); return iso(d) }
let monthOf = s => s.slice(0, 7)
let addMonths = (m, n) => { let d = parse(m + '-01'); d.setUTCMonth(d.getUTCMonth() + n); return monthOf(iso(d)) }

function h(tag, attrs = {}, ...children) {
  let el = document.createElement(tag)
  for (let [k, v] of Object.entries(attrs)) {
    if (v === null || v === undefined || v === false) continue
    if (k.startsWith('on')) el.addEventListener(k.slice(2), v)
    else if (k === 'text') el.textContent = v
    else el.setAttribute(k, v === true ? '' : v)
  }
  el.append(...children.flat().filter(c => c !== null && c !== undefined && c !== false))
  return el
}

function dateJump(calendarEl) {
  let days = new Map(), month = null, focused = null
  let groups = () => [...calendarEl.querySelectorAll('.fc-list-day-and-events')]
  let dateOf = g => g.querySelector('.fc-list-day[data-date]')?.dataset.date
  let today = () => {
    let d = new Date()
    return [d.getFullYear(), d.getMonth() + 1, d.getDate()].map(n => String(n).padStart(2, '0')).join('-')
  }

  function collect() {
    days = new Map()
    for (let g of groups()) {
      let date = dateOf(g), rows = [...g.querySelectorAll('.fc-list-event')], byColor = new Map()
      if (!date || !rows.length) continue
      for (let r of rows) {
        let color = r.dataset.color || TYPE_COLORS.Event
        if (!byColor.has(color)) byColor.set(color, { color, count: 0, types: new Set() })
        byColor.get(color).count++
        byColor.get(color).types.add(typeLabel(r.dataset.type || 'Event'))
      }
      let mix = [...byColor.values()].sort((a, b) => b.count - a.count)
      let rest = mix.slice(MAX_COLORS - 1)
      if (mix.length > MAX_COLORS) mix = [...mix.slice(0, MAX_COLORS - 1), { color: OTHER, count: rest.reduce((n, m) => n + m.count, 0), types: new Set(rest.flatMap(m => [...m.types])), other: true }]
      days.set(date, { group: g, count: rows.length, mix })
    }
  }

  let noun = n => `${n} event${n === 1 ? '' : 's'}`
  let typesOf = m => m.other ? `Other (${[...m.types].join(', ')})` : [...m.types].join(' / ')
  let summary = info => info.mix.map(m => `${m.count} ${typesOf(m)}`).join(', ')

  function bar(info) {
    let at = 0, stops = info.mix.map(m => `${m.color} ${at}% ${(at += m.count / info.count * 100)}%`)
    let width = Math.min(6 + (info.count - 1) * 4, 28)
    let el = h('span', { class: 'blr-dj__bar', 'aria-hidden': 'true' })
    el.style.width = width + 'px'
    el.style.background = info.mix.length === 1 ? info.mix[0].color : `linear-gradient(90deg, ${stops.join(', ')})`
    return el
  }

  function tipFor(btn) {
    let info = days.get(btn.dataset.date)
    if (!info) return hideTip()
    tip.replaceChildren(h('strong', { text: `${SHORT.format(parse(btn.dataset.date))} · ${noun(info.count)}` }),
      ...info.mix.map(m => h('span', { class: 'blr-dj__tiprow' }, h('i', { style: `background:${m.color}` }), `${m.count} ${typesOf(m)}`)))
    tip.hidden = false
    let box = dialog.getBoundingClientRect(), b = btn.getBoundingClientRect(), t = tip.getBoundingClientRect()
    let left = Math.min(Math.max(b.left + b.width / 2 - t.width / 2 - box.left, 6), box.width - t.width - 6)
    let above = b.top - box.top - t.height - 6
    tip.style.left = left + 'px'
    tip.style.top = (above > 4 ? above : b.bottom - box.top + 6) + 'px'
  }
  let hideTip = () => { tip.hidden = true }

  function current() {
    let top = null
    for (let g of groups()) {
      if (g.getBoundingClientRect().top > 24) break
      top = g
    }
    return top ? dateOf(top) : null
  }

  function jump(date) {
    let day = days.get(date)
    if (!day) return
    dialog.close()
    let reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    day.group.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    let head = day.group.querySelector('.fc-list-day')
    head.tabIndex = -1
    head.focus({ preventScroll: true })
  }

  let sorted = () => [...days.keys()].sort()
  let first = () => sorted()[0]
  let last = () => sorted().at(-1)

  function weekend() {
    let t = today(), sat = addDays(t, (6 - parse(t).getUTCDay() + 7) % 7)
    return sorted().find(d => d >= addDays(sat, -1) && d <= addDays(sat, 1)) || sorted().find(d => d >= sat)
  }

  function nearest(from, step) {
    let list = sorted()
    if (step > 0) return list.find(d => d >= addDays(from, step)) || list.at(-1)
    return list.findLast(d => d <= addDays(from, step)) || list[0]
  }

  let title = h('h2', { class: 'blr-dj__title', id: 'blr-dj-title', 'aria-live': 'polite' })
  let prev = h('button', { type: 'button', class: 'blr-dj__nav', 'aria-label': 'Previous month', onclick: () => show(addMonths(month, -1)) }, '‹')
  let next = h('button', { type: 'button', class: 'blr-dj__nav', 'aria-label': 'Next month', onclick: () => show(addMonths(month, 1)) }, '›')
  let grid = h('div', { class: 'blr-dj__grid', role: 'grid', 'aria-labelledby': 'blr-dj-title' })
  let quick = h('div', { class: 'blr-dj__quick' })
  let tip = h('div', { class: 'blr-dj__tip', role: 'tooltip', hidden: true })
  let dialog = h('dialog', { class: 'blr-dj', 'aria-labelledby': 'blr-dj-title' },
    h('div', { class: 'blr-dj__head' }, prev, title, next,
      h('button', { type: 'button', class: 'blr-dj__close', 'aria-label': 'Close', onclick: () => dialog.close() }, '×')),
    grid, quick, tip)
  let dayOf = e => e.target.closest?.('.blr-dj__day[data-date]:not(:disabled)')
  // Tooltips only for a mouse or the keyboard; touch taps jump straight away
  let opening = false
  let canHover = matchMedia('(hover: hover) and (pointer: fine)')
  grid.addEventListener('pointerover', e => { let b = e.pointerType === 'mouse' && canHover.matches && dayOf(e); b ? tipFor(b) : hideTip() })
  grid.addEventListener('pointerleave', hideTip)
  grid.addEventListener('focusin', e => { let b = dayOf(e); b && !opening && b.matches(':focus-visible') ? tipFor(b) : hideTip() })
  grid.addEventListener('focusout', hideTip)
  dialog.addEventListener('close', hideTip)
  let label = h('span', { class: 'blr-dj__label', text: 'Dates' })
  let fab = h('button', { type: 'button', class: 'blr-dj__fab', 'aria-haspopup': 'dialog', hidden: true, onclick: open })
  fab.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>'
  fab.append(label)
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close() })
  grid.addEventListener('keydown', onKey)
  document.body.append(fab, dialog)

  function show(m, focusDate) {
    month = m
    title.textContent = MONTH.format(parse(m + '-01'))
    prev.disabled = !first() || m <= monthOf(first())
    next.disabled = !last() || m >= monthOf(last())
    let start = m + '-01', lead = (parse(start).getUTCDay() + 6) % 7
    let cells = []
    for (let d = addDays(start, -lead); cells.length < 42; d = addDays(d, 1)) cells.push(d)
    while (cells.length > 35 && cells.slice(-7).every(d => monthOf(d) !== m)) cells.length -= 7
    let t = today(), here = current()
    focused = focusDate && days.has(focusDate) ? focusDate : [here, t].find(d => d && monthOf(d) === m && days.has(d)) || sorted().find(d => monthOf(d) === m)
    let rows = [h('div', { role: 'row', class: 'blr-dj__row' }, WEEKDAYS.map((w, i) => h('span', { role: 'columnheader', class: `blr-dj__wd${i > 4 ? ' is-weekend' : ''}`, 'aria-label': w }, w[0] + w[1])))]
    for (let i = 0; i < cells.length; i += 7) {
      rows.push(h('div', { role: 'row', class: 'blr-dj__row' }, cells.slice(i, i + 7).map((d, j) => {
        let info = days.get(d), outside = monthOf(d) !== m
        let cls = ['blr-dj__day', j > 4 && 'is-weekend', outside && 'is-outside', d === t && 'is-today', d === here && 'is-current'].filter(Boolean).join(' ')
        let text = String(parse(d).getUTCDate())
        if (outside) return h('span', { role: 'gridcell', class: cls, 'aria-hidden': 'true' })
        return h('span', { role: 'gridcell' }, h('button', {
          type: 'button', class: cls, 'data-date': d, disabled: !info, tabindex: d === focused ? 0 : -1,
          'aria-current': d === t ? 'date' : null,
          'aria-label': `${LONG.format(parse(d))}, ${info ? `${noun(info.count)}: ${summary(info)}` : 'no events'}`,
          onclick: () => jump(d),
        }, h('span', { class: 'blr-dj__num', text }), info ? bar(info) : h('span', { class: 'blr-dj__bar is-empty', 'aria-hidden': 'true' })))
      })))
    }
    grid.replaceChildren(...rows)
  }

  function onKey(e) {
    let step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[e.key]
    let target = step ? nearest(focused, step)
      : e.key === 'PageUp' ? nearest(addDays(focused, -28), 0) || first()
      : e.key === 'PageDown' ? nearest(addDays(focused, 28), 0) || last()
      : e.key === 'Home' ? first() : e.key === 'End' ? last() : null
    if (!target) return
    e.preventDefault()
    if (monthOf(target) !== month) show(monthOf(target), target)
    focused = target
    grid.querySelectorAll('button[data-date]').forEach(b => { b.tabIndex = b.dataset.date === target ? 0 : -1 })
    grid.querySelector(`button[data-date="${target}"]`)?.focus()
  }

  function open() {
    collect()
    if (!days.size) return
    let here = current(), wk = weekend()
    show(monthOf(here || first()))
    quick.replaceChildren(
      h('button', { type: 'button', class: 'blr-dj__chip', onclick: () => jump(first()) }, first() === today() ? 'Today' : 'Soonest'),
      wk && h('button', { type: 'button', class: 'blr-dj__chip', onclick: () => jump(wk) }, 'This weekend'))
    dialog.showModal()
    opening = true
    grid.querySelector('button[tabindex="0"]')?.focus()
    opening = false
  }

  let scheduled = false
  function refresh() {
    if (scheduled) return
    scheduled = true
    requestAnimationFrame(() => {
      scheduled = false
      let any = calendarEl.querySelector('.fc-list-day[data-date]')
      fab.hidden = !any
      let here = current()
      label.textContent = here ? SHORT.format(parse(here)) : 'Dates'
      fab.setAttribute('aria-label', here ? `Jump to date, now at ${LONG.format(parse(here))}` : 'Jump to date')
    })
  }
  addEventListener('scroll', refresh, { passive: true })
  new MutationObserver(refresh).observe(calendarEl, { childList: true, subtree: true })
  refresh()
}

export { dateJump }
