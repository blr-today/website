const DESIGNS = ['Sheet', 'Split', 'Ticket', 'Poster', 'Spec sheet']
const DESIGN_KEY = 'blr-event-design'
const TZ = 'Asia/Kolkata'
const TYPE_COLORS = {
  Event: 'dodgerblue', BusinessEvent: 'gold', CourseInstance: 'gold',
  EducationEvent: 'gold', Hackathon: 'gold', ChildrensEvent: 'deeppink',
  ComedyEvent: 'tomato', DanceEvent: 'tomato', ExhibitionEvent: 'lightsalmon',
  Festival: 'lightsalmon', FoodEvent: 'orangered', LiteraryEvent: 'mediumpurple',
  MusicEvent: 'darkslateblue', ScreeningEvent: 'lightskyblue', SocialEvent: 'yellowgreen',
  SportsEvent: 'darkorange', TheaterEvent: 'lightskyblue', VisualArtsEvent: 'lightskyblue',
}
const ATTENDANCE = {
  OfflineEventAttendanceMode: 'In person', offline: 'In person',
  OnlineEventAttendanceMode: 'Online', online: 'Online',
  MixedEventAttendanceMode: 'In person and online',
}
const AVAILABILITY = {
  InStock: 'Available', LimitedAvailability: 'Few left', SoldOut: 'Sold out',
  PreOrder: 'Pre-booking', OutOfStock: 'Sold out', Discontinued: 'Closed',
  OnlineOnly: 'Online only', InStoreOnly: 'At the venue',
}

let index = null
let dialog = null

function h(tag, attrs = {}, ...children) {
  let el = document.createElement(tag)
  for (let [k, v] of Object.entries(attrs)) {
    if (v === null || v === undefined || v === false) continue
    if (k === 'text') el.textContent = v
    else el.setAttribute(k, v === true ? '' : v)
  }
  for (let c of children.flat(Infinity)) {
    if (c === null || c === undefined || c === false || c === '') continue
    el.append(c instanceof Node ? c : String(c))
  }
  return el
}

const list = v => (v === null || v === undefined) ? [] : (Array.isArray(v) ? v.flat(Infinity) : [v])
const tail = v => typeof v === 'string' ? v.split('/').pop() : ''
const text = v => typeof v === 'string' ? v.trim() : (v && typeof v === 'object' ? text(v.name) : '')
const safeUrl = u => typeof u === 'string' && /^https?:\/\//i.test(u.trim()) ? u.trim() : null
const host = u => { try { return new URL(u).hostname.replace(/^www\./, '') } catch { return u } }
const humanize = s => s.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().replace(/^./, c => c.toUpperCase())

// The page's <noscript> block already carries every event's JSON-LD
function loadIndex() {
  if (index) return index
  index = new Map()
  for (let ns of document.querySelectorAll('noscript')) {
    if (!ns.textContent.includes('application/ld+json')) continue
    let doc = new DOMParser().parseFromString(ns.textContent, 'text/html')
    for (let script of doc.querySelectorAll('script[type="application/ld+json"]')) {
      try {
        let event = JSON.parse(script.textContent)
        let entry = { event, source: script.dataset.url, start: Date.parse(event.startDate) }
        if (!index.has(event.url)) index.set(event.url, [])
        index.get(event.url).push(entry)
      } catch { }
    }
  }
  return index
}

function findEvent(fcEvent) {
  let candidates = loadIndex().get(fcEvent.url) || []
  let start = fcEvent.start ? fcEvent.start.getTime() : 0
  return candidates.reduce((best, c) =>
    !best || Math.abs(c.start - start) < Math.abs(best.start - start) ? c : best, null)
}

function fmt(date, opts) {
  return new Intl.DateTimeFormat('en-IN', { timeZone: TZ, ...opts }).format(date)
}

function dateOnly(s) { return typeof s === 'string' && s.length === 10 }

function isAllDay(event) {
  let clock = s => fmt(new Date(s), { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
  return dateOnly(event.startDate) || Boolean(event.endDate && clock(event.startDate) === '00:00' && clock(event.endDate) === '23:59')
}

function whenText(event) {
  let start = new Date(event.startDate)
  let end = event.endDate ? new Date(event.endDate) : null
  let day = { weekday: 'long', day: 'numeric', month: 'long' }
  let time = { hour: 'numeric', minute: '2-digit' }
  if (isNaN(start)) return [event.startDate]
  let allDay = isAllDay(event)
  let parts = [h('time', { datetime: event.startDate, text: fmt(start, allDay ? day : { ...day, ...time }) })]
  if (end && !isNaN(end) && end > start) {
    let sameDay = fmt(start, { dateStyle: 'short' }) === fmt(end, { dateStyle: 'short' })
    if (allDay && sameDay) return parts
    let endOpts = allDay ? day : (sameDay ? time : { ...day, ...time })
    parts.push(' – ', h('time', { datetime: event.endDate, text: fmt(end, endOpts) }))
    let minutes = Math.round((end - start) / 60000)
    if (minutes < 24 * 60) {
      let d = [Math.floor(minutes / 60) && `${Math.floor(minutes / 60)} h`, minutes % 60 && `${minutes % 60} min`].filter(Boolean).join(' ')
      parts.push(' ', h('span', { class: 'blr-event__duration', text: `(${d})` }))
    }
  }
  return parts
}

function money(amount, currency) {
  let n = Number(amount)
  if (amount === '' || amount === null || amount === undefined || isNaN(n)) return null
  if (n === 0) return 'Free'
  try {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: currency || 'INR', maximumFractionDigits: n % 1 ? 2 : 0 }).format(n)
  } catch { return `${currency || ''} ${amount}`.trim() }
}

function offers(event) {
  let seen = new Set()
  return list(event.offers).filter(o => o && typeof o === 'object').map(o => {
    let low = money(o.lowPrice, o.priceCurrency), high = money(o.highPrice, o.priceCurrency)
    let price = low && high && low !== high ? `${low} – ${high}` : money(o.price, o.priceCurrency) || low
    return {
      name: text(o.name) || text(o.category) || null,
      price,
      value: Number(o.price ?? o.lowPrice),
      availability: AVAILABILITY[tail(o.availability)] || null,
      until: o.availabilityEnds || o.validThrough || null,
      url: safeUrl(o.url),
    }
  }).filter(o => {
    let key = `${o.name}|${o.price}|${o.availability}`
    if (!o.price && !o.name || seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function priceSummary(event, tickets) {
  let values = tickets.map(t => t.value).filter(v => !isNaN(v))
  if (event.isAccessibleForFree === true || event.isAccessibleForFree === 'true' || (values.length && Math.max(...values) === 0)) return 'Free'
  let paid = tickets.filter(t => t.value > 0).sort((a, b) => a.value - b.value)
  if (!paid.length) return tickets[0]?.price || null
  return paid.length > 1 ? `From ${paid[0].price.split(' – ')[0]}` : paid[0].price
}

function images(event) {
  let urls = list(event.image).map(i => typeof i === 'string' ? i : (i?.url || i?.contentUrl)).map(safeUrl).filter(Boolean)
  return [...new Set(urls)]
}

function addressLines(place) {
  if (typeof place === 'string') return [place]
  if (!place || typeof place !== 'object') return []
  let lines = [text(place.name)]
  let a = place.address
  if (typeof a === 'string') lines.push(a)
  else if (a && typeof a === 'object') {
    lines.push(text(a.streetAddress))
    lines.push([a.addressLocality, a.postalCode].filter(x => typeof x === 'string' && x !== 'NA').join(' '))
  }
  let out = []
  for (let line of lines.filter(Boolean)) {
    if (!out.some(o => o.toLowerCase().includes(line.toLowerCase()))) out.push(line)
  }
  return out
}

function mapUrl(place) {
  let geo = place?.geo
  if (geo && geo.latitude && geo.longitude) return `https://www.google.com/maps/search/?api=1&query=${geo.latitude},${geo.longitude}`
  let q = addressLines(place).join(', ')
  return q ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}` : null
}

function paragraphs(description) {
  let s = String(description || '')
  if (/<\/?[a-z][^>]*>/i.test(s)) {
    s = s.replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|div|li|h\d)>/gi, '\n\n')
    s = new DOMParser().parseFromString(s, 'text/html').body.textContent
  }
  return s.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean).map(p => {
    let nodes = []
    p.split('\n').forEach((line, i) => {
      if (i) nodes.push(h('br'))
      for (let part of line.split(/(https?:\/\/[^\s<>"]+)/)) {
        if (/^https?:\/\//.test(part)) {
          let url = part.replace(/[).,;:!?]+$/, '')
          nodes.push(h('a', { href: url, rel: 'noopener', target: '_blank', text: url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') }), part.slice(url.length))
        } else nodes.push(part)
      }
    })
    return h('p', {}, nodes)
  })
}

function languages(v) {
  let names
  try { names = new Intl.DisplayNames(['en'], { type: 'language' }) } catch { }
  return list(v).map(l => typeof l === 'string' ? l : text(l)).filter(Boolean)
    .map(l => { try { return names?.of(l) || l } catch { return l } })
}

function section(id, title, ...body) {
  let content = body.flat(Infinity).filter(Boolean)
  if (!content.length) return null
  return h('section', { class: `blr-event__section blr-event__${id}`, 'aria-labelledby': `blr-event-${id}` },
    h('h3', { id: `blr-event-${id}`, text: title }), h('div', { class: 'blr-event__section-body' }, content))
}

function facts(pairs) {
  let rows = pairs.filter(([, v]) => v !== null && v !== undefined && v !== '' && !(Array.isArray(v) && !v.length))
  if (!rows.length) return null
  return h('dl', { class: 'blr-event__facts' }, rows.map(([k, v]) => h('div', {}, h('dt', { text: k }), h('dd', {}, v))))
}

function personLink(p) {
  let name = text(p)
  let url = safeUrl(p?.url)
  return url ? h('a', { href: url, rel: 'noopener', target: '_blank', text: name }) : name
}

function contact(o) {
  return [
    typeof o?.email === 'string' && [' · ', h('a', { href: `mailto:${o.email}`, text: o.email })],
    typeof o?.telephone === 'string' && [' · ', h('a', { href: `tel:${o.telephone}`, text: o.telephone })],
  ]
}

function icsDate(d) { return d.toISOString().replace(/[-:]|\.\d{3}/g, '') }

function calendarLinks(event, where) {
  let start = new Date(event.startDate)
  if (isNaN(start)) return []
  let end = new Date(event.endDate || start.getTime() + 2 * 3600e3)
  if (isNaN(end) || end <= start) end = new Date(start.getTime() + 2 * 3600e3)
  let details = `${event.url}`
  let google = 'https://calendar.google.com/calendar/render?' + new URLSearchParams({
    action: 'TEMPLATE', text: event.name, dates: `${icsDate(start)}/${icsDate(end)}`, details, location: where,
  })
  let esc = s => String(s).replace(/[\\;,]/g, m => '\\' + m).replace(/\n/g, '\\n')
  let ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:blr.today', 'BEGIN:VEVENT',
    `UID:blr.today/${event.url}`, `DTSTAMP:${icsDate(new Date())}`, `DTSTART:${icsDate(start)}`, `DTEND:${icsDate(end)}`,
    `SUMMARY:${esc(event.name)}`, `LOCATION:${esc(where)}`, `URL:${event.url}`, `DESCRIPTION:${esc(details)}`,
    'END:VEVENT', 'END:VCALENDAR'].join('\r\n')
  let file = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }))
  return [
    h('a', { class: 'blr-event__button', href: google, rel: 'noopener', target: '_blank', text: 'Google Calendar' }),
    h('a', { class: 'blr-event__button', href: file, download: 'event.ics', text: 'Download .ics' }),
  ]
}

function build(fcEvent, entry, keywords) {
  let event = entry?.event || { name: fcEvent.title, url: fcEvent.url, startDate: fcEvent.start?.toISOString(), endDate: fcEvent.end?.toISOString() }
  let type = event['@type'] && event['@type'] !== 'Event' ? event['@type'] : (event.additionalType || 'Event')
  let color = fcEvent.backgroundColor || TYPE_COLORS[event['@type']] || TYPE_COLORS.Event
  let status = tail(event.eventStatus)
  let mode = ATTENDANCE[tail(event.eventAttendanceMode)] || null
  let places = list(event.location)
  let place = places.find(p => typeof p === 'string' || p?.['@type'] !== 'VirtualLocation')
  let virtual = places.find(p => p?.['@type'] === 'VirtualLocation')
  let where = addressLines(place)
  let tickets = offers(event)
  let price = priceSummary(event, tickets)
  let pics = images(event)
  let start = new Date(event.startDate)
  let primary = safeUrl(event.url)
  let links = [...new Set([primary, safeUrl(entry?.source), ...list(event.sameAs).map(safeUrl)].filter(Boolean))]
  let ages = text(event.typicalAgeRange)
  let audience = list(event.audience).map(a => typeof a === 'string' ? a : (a?.audienceType || a?.AudienceType || a?.name)).filter(Boolean)

  let stub = isNaN(start) ? null : h('div', { class: 'blr-event__stub', 'aria-hidden': 'true' },
    h('span', { class: 'blr-event__dow', text: fmt(start, { weekday: 'short' }) }),
    h('span', { class: 'blr-event__day', text: fmt(start, { day: 'numeric' }) }),
    h('span', { class: 'blr-event__month', text: fmt(start, { month: 'short' }) }),
    isAllDay(event) ? null : h('span', { class: 'blr-event__time', text: fmt(start, { hour: 'numeric', minute: '2-digit' }) }),
    price && h('span', { class: 'blr-event__stub-price', text: price }))

  let media = pics.length ? h('figure', { class: 'blr-event__media' },
    pics.map((src, i) => h('img', { src, alt: i ? '' : `Poster for ${event.name}`, loading: i ? 'lazy' : 'eager', decoding: 'async', referrerpolicy: 'no-referrer' }))) : null

  let header = h('header', { class: 'blr-event__header' },
    h('p', { class: 'blr-event__kicker' },
      h('span', { class: 'blr-event__type' }, h('span', { class: 'blr-event__dot', 'aria-hidden': 'true' }), humanize(type)),
      status && status !== 'EventScheduled' && h('strong', { class: 'blr-event__status', text: humanize(status.replace(/^Event/, '')) }),
      mode && h('span', { class: 'blr-event__mode', text: mode })),
    h('h2', { id: 'blr-event-title', class: 'blr-event__title', text: event.name }),
    h('p', { class: 'blr-event__when' }, whenText(event)),
    where[0] && h('p', { class: 'blr-event__where', text: where[0] }),
    price && h('p', { class: 'blr-event__price', text: price }),
    keywords.length > 0 && h('ul', { class: 'blr-event__tags', 'aria-label': 'Tags' }, keywords.map(k => h('li', { text: k }))))

  let actions = h('div', { class: 'blr-event__actions' },
    primary && h('a', { class: 'blr-event__button blr-event__button--primary', href: primary, rel: 'noopener', target: '_blank', text: `Open on ${host(primary)}` }),
    calendarLinks(event, where.join(', ')))

  let ticketTable = tickets.length ? h('table', { class: 'blr-event__tickets' },
    h('thead', {}, h('tr', {}, h('th', { scope: 'col', text: 'Ticket' }), h('th', { scope: 'col', text: 'Price' }), h('th', { scope: 'col', text: 'Status' }))),
    h('tbody', {}, tickets.map(t => h('tr', {},
      h('td', {}, t.url ? h('a', { href: t.url, rel: 'noopener', target: '_blank', text: t.name || 'Tickets' }) : (t.name || 'Entry')),
      h('td', { text: t.price || '—' }),
      h('td', {}, t.availability || '', t.until && !isNaN(new Date(t.until)) ? h('small', {}, ' until ', h('time', { datetime: t.until, text: fmt(new Date(t.until), { day: 'numeric', month: 'short' }) })) : null))))) : null

  let venue = (place || virtual) ? [
    where.length ? h('address', {}, where.map((l, i) => [i ? h('br') : null, l])) : null,
    facts([['Phone', place?.telephone && h('a', { href: `tel:${place.telephone}`, text: place.telephone })]]),
    place && mapUrl(place) && h('p', {}, h('a', { href: mapUrl(place), rel: 'noopener', target: '_blank', text: 'Open in maps' })),
    virtual && safeUrl(virtual.url) && h('p', {}, h('a', { href: safeUrl(virtual.url), rel: 'noopener', target: '_blank', text: 'Join online' })),
  ] : null

  let organisers = list(event.organizer).filter(o => text(o))
  let performers = list(event.performer).filter(p => text(p))
  let works = list(event.workPresented).concat(list(event.workPerformed)).map(text).filter(Boolean)
  let capacity = event.maximumAttendeeCapacity ?? event.maximumPhysicalAttendeeCapacity

  let content = h('div', { class: 'blr-event__content' }, header, actions,
    section('tickets', 'Tickets', ticketTable),
    section('venue', 'Venue', venue),
    section('attendance', 'Attendance', facts([
      ['Format', mode],
      ['Capacity', capacity && `${capacity} people`],
      ['Spots left', event.remainingAttendeeCapacity],
      ['Ages', ages],
      ['For', audience.join(', ')],
      ['Language', languages(event.inLanguage).join(', ')],
      ['Subtitles', languages(event.subtitleLanguage).join(', ')],
      ['Sport', list(event.sport).concat(list(event.sports)).map(text).filter(Boolean).join(', ')],
      ['Featuring', works.join(', ')],
    ])),
    section('organiser', organisers.length > 1 ? 'Organisers' : 'Organiser',
      organisers.length ? h('ul', {}, organisers.map(o => h('li', {}, personLink(o), contact(o)))) : null),
    section('performers', 'Performers', performers.length ? h('ul', {}, performers.map(p => h('li', {}, personLink(p)))) : null),
    section('about', 'About', paragraphs(event.description)),
    section('listings', links.length > 1 ? `Listed on ${links.length} sites` : 'Listed on',
      h('ul', {}, links.map((u, i) => h('li', {}, h('a', { href: u, rel: 'noopener', target: '_blank', text: host(u) }), i === 0 && links.length > 1 ? ' (main listing)' : null)))),
    h('nav', { class: 'blr-event__designs', 'aria-label': 'Popup design' },
      h('span', { text: 'Design (keys 1–5):' }),
      DESIGNS.map((name, i) => h('button', { type: 'button', 'data-design': i + 1, 'aria-pressed': String(design() === i + 1), title: name, text: i + 1 }))))

  return { color, image: pics[0], inner: h('div', { class: 'blr-event__inner' }, stub, media, content) }
}

function design() {
  let fromUrl = Number(new URLSearchParams(location.search).get('design'))
  if (fromUrl >= 1 && fromUrl <= DESIGNS.length) return fromUrl
  try { return Number(localStorage.getItem(DESIGN_KEY)) || 1 } catch { return 1 }
}

function setDesign(n) {
  try { localStorage.setItem(DESIGN_KEY, n) } catch { }
  let url = new URL(location.href)
  if (url.searchParams.has('design')) { url.searchParams.set('design', n); history.replaceState(history.state, '', url) }
  if (dialog) {
    dialog.dataset.design = n
    dialog.querySelectorAll('.blr-event__designs button').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.design) === n)))
  }
  toast(`Popup design ${n}: ${DESIGNS[n - 1]}`)
}

function toast(message) {
  let el = document.querySelector('.blr-event-toast') || document.body.appendChild(h('output', { class: 'blr-event-toast', role: 'status' }))
  if (dialog?.open && el.parentNode !== dialog) dialog.append(el)
  if (!dialog?.open && el.parentNode !== document.body) document.body.append(el)
  el.textContent = message
  el.classList.add('is-visible')
  clearTimeout(el.hideTimer)
  el.hideTimer = setTimeout(() => el.classList.remove('is-visible'), 1600)
}

function ensureDialog() {
  if (dialog) return dialog
  dialog = h('dialog', { class: 'blr-event', 'aria-labelledby': 'blr-event-title' })
  dialog.addEventListener('click', e => {
    if (e.target === dialog || e.target.closest('.blr-event__close')) dialog.close()
    let pick = e.target.closest('.blr-event__designs button')
    if (pick) setDesign(Number(pick.dataset.design))
  })
  dialog.addEventListener('close', () => {
    dialog.querySelectorAll('a[download]').forEach(a => URL.revokeObjectURL(a.href))
    if (history.state?.blrEvent) history.back()
  })
  // The phone's back button closes the popup instead of leaving the page
  window.addEventListener('popstate', () => { if (dialog.open) dialog.close() })
  document.body.append(dialog)
  return dialog
}

function openEventModal(fcEvent, keywords = []) {
  let d = ensureDialog()
  d.dataset.design = design()
  let { color, image, inner } = build(fcEvent, findEvent(fcEvent), [...keywords])
  d.style.setProperty('--blr-event-color', color)
  d.style.setProperty('--blr-event-image', image ? `url(${JSON.stringify(image)})` : 'none')
  d.replaceChildren(h('button', { type: 'button', class: 'blr-event__close', 'aria-label': 'Close', text: '×' }), inner)
  d.querySelectorAll('.blr-event__media img').forEach(img => img.addEventListener('error', () => {
    let figure = img.parentNode
    img.remove()
    if (figure && !figure.querySelector('img')) figure.remove()
  }))
  if (!d.open) {
    history.pushState({ blrEvent: true }, '')
    d.showModal()
  }
  d.querySelector('.blr-event__inner').scrollTop = 0
}

document.addEventListener('keydown', e => {
  if (e.ctrlKey || e.metaKey || e.altKey || e.isComposing) return
  if (e.target.closest?.('input, textarea, select, [contenteditable]')) return
  let n = Number(e.key)
  if (n >= 1 && n <= DESIGNS.length) setDesign(n)
})

export { openEventModal }
