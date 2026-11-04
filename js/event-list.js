import { TYPE_COLORS, typeLabel } from './event-types.js'
import { openEventModal } from './event-modal.js'
import { shownTags } from './tags.js'

// The map and the sources page list events the same way, each opening the event drawer
const color = type => TYPE_COLORS[type] || TYPE_COLORS.Event
const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`

function h(tag, attrs = {}, ...children) {
  let el = document.createElement(tag)
  for (let [k, v] of Object.entries(attrs)) {
    if (k === 'text') el.textContent = v
    else if (k === 'style') Object.assign(el.style, v)
    else el.setAttribute(k, v)
  }
  el.append(...children)
  return el
}

function when(start) {
  let opts = { timeZone: 'Asia/Kolkata', dateStyle: 'medium' }
  if (start.length > 10) opts.timeStyle = 'short'
  return new Date(start).toLocaleString('en-IN', opts)
}

let locationTags = null
function locations() {
  if (!locationTags) {
    try { locationTags = JSON.parse(document.getElementById('blr-location-tags')?.textContent || '[]') } catch { locationTags = [] }
  }
  return locationTags
}

// The modal reads the same shape as a FullCalendar event
function openEvent(e, row) {
  let fcEvent = {
    id: e.id, url: e.url, title: e.name, backgroundColor: color(e.type), extendedProps: { type: e.type },
    start: new Date(e.start), end: e.end ? new Date(e.end) : null,
  }
  openEventModal(fcEvent, shownTags(e.keywords || [], locations()), row)
}

function eventLink(e) {
  let a = h('a', { href: e.id ? `/event/${e.id}/` : e.url, text: e.name })
  a.addEventListener('click', ev => {
    if (ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.button === 1) return
    ev.preventDefault()
    ev.stopPropagation()
    openEvent(e, a.closest('li'))
  })
  return a
}

function eventList(title, events) {
  let sorted = [...events].sort((a, b) => a.start.localeCompare(b.start))
  return h('div', { class: 'map-popup' },
    h('strong', { text: title }),
    h('ul', {}, ...sorted.map(e => h('li', { class: e.curated ? 'is-curated' : '' },
      h('span', { class: 'map-dot', style: { background: color(e.type) }, title: typeLabel(e.type) }),
      eventLink(e),
      e.curated ? h('span', { class: 'map-badge', text: 'Curated' }) : '',
      h('br'), when(e.start)))))
}

// A floating list beside the click, for pages without Leaflet's popups
let pop = null
function closePopover() {
  pop?.remove()
  pop = null
}

// Fixed to the viewport, since body is a centred, positioned box that offsets absolute children
function showPopover(title, events, { clientX, clientY }) {
  closePopover()
  pop = h('div', { class: 'event-pop', role: 'dialog', 'aria-label': title },
    h('button', { type: 'button', class: 'event-pop__close', 'aria-label': 'Close', text: '×' }),
    eventList(`${title}: ${plural(events.length, 'event')}`, events))
  pop.querySelector('.event-pop__close').addEventListener('click', closePopover)
  document.body.append(pop)
  let { offsetWidth: width, offsetHeight: height } = pop
  let below = clientY + 12 + height <= innerHeight - 8
  pop.style.left = `${Math.max(8, Math.min(clientX + 12, innerWidth - width - 8))}px`
  pop.style.top = `${Math.max(8, below ? clientY + 12 : clientY - height - 12)}px`
}

addEventListener('scroll', closePopover)
addEventListener('resize', closePopover)
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !document.querySelector('dialog[open]')) closePopover() })
document.addEventListener('click', e => {
  if (pop && !pop.contains(e.target) && !e.target.closest('[data-events], dialog')) closePopover()
})

export { color, plural, h, when, eventList, showPopover, closePopover }
