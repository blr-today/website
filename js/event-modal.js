import 'add-to-calendar-button'

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
  InStock: 'Available', LimitedAvailability: 'Limited', SoldOut: 'Sold out',
  PreOrder: 'Pre-booking', OutOfStock: 'Sold out', Discontinued: 'Closed',
  OnlineOnly: 'Online only', InStoreOnly: 'At the venue',
}

const SIDE_BY_SIDE = matchMedia('(min-width: 60rem)')

let index = null
let cdnAllowed = null
let tagInfo = null
let dialog = null
let swaps = 0

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
  let left = Number(event.remainingAttendeeCapacity)
  let counted = event.remainingAttendeeCapacity !== undefined && event.remainingAttendeeCapacity !== null && !isNaN(left)
  return list(event.offers).filter(o => o && typeof o === 'object').map(o => {
    let low = money(o.lowPrice, o.priceCurrency), high = money(o.highPrice, o.priceCurrency)
    let price = low && high && low !== high ? `${low} – ${high}` : money(o.price, o.priceCurrency) || low
    return {
      name: text(o.name) || text(o.category) || null,
      price,
      value: Number(o.price ?? o.lowPrice),
      soldOut: ['SoldOut', 'OutOfStock'].includes(tail(o.availability)) || (counted && left <= 0),
      availability: counted && left <= 0 ? 'Sold out'
        : (counted && tail(o.availability) === 'LimitedAvailability' ? `${left} left` : AVAILABILITY[tail(o.availability)] || null),
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

function strike(soldOut, content) {
  return soldOut ? h('s', {}, content) : content
}

function priceSummary(event, all) {
  let tickets = all.filter(t => !t.soldOut)
  if (all.length && !tickets.length) return 'Sold out'
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

function cdnPrefixes() {
  if (cdnAllowed) return cdnAllowed
  try { cdnAllowed = JSON.parse(document.getElementById('blr-image-cdn')?.textContent || '[]') } catch { cdnAllowed = [] }
  return cdnAllowed
}

// Coloured tags explain themselves from _data/tags.yml
function tagTip(tag) {
  if (tag.kind === 'other') return null
  if (!tagInfo) {
    try { tagInfo = new Map(JSON.parse(document.getElementById('blr-tag-info')?.textContent || '[]').map(t => [t.id, t.description])) } catch { tagInfo = new Map() }
  }
  return tagInfo.get(tag.name) || null
}

const onCdn = src => cdnPrefixes().some(p => src.startsWith(p))

function thumb(src) {
  if (!onCdn(src) || ['localhost', '127.0.0.1'].includes(location.hostname)) return src
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=600`
}

function reportUncached() {
  let missed = new Set()
  for (let entries of loadIndex().values()) {
    for (let { event } of entries) images(event).filter(src => !onCdn(src)).forEach(src => missed.add(src))
  }
  if (missed.size) console.error(`blr.today: ${missed.size} event image(s) not in _data/image_cdn.yml, served unresized:`, [...missed])
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

const BUTTON_STYLE = [
  '--btn-background: #fff', '--btn-hover-background: #fff', '--btn-text: #222', '--btn-hover-text: #222',
  '--btn-border: #e6e6e6', '--btn-hover-border: var(--blr-event-color)', '--btn-border-radius: .25rem',
  '--btn-shadow: none', '--btn-hover-shadow: none', '--btn-active-shadow: none', '--btn-font-weight: 600',
  '--btn-padding-x: 1rem', '--btn-padding-y: .75rem', '--base-font-size-l: 15px', '--base-font-size-m: 15px',
].join('; ')

// The web component, unlike atcb_action, can drop its list down below the button
function calendarButton(event, where) {
  let start = new Date(event.startDate)
  if (isNaN(start)) return null
  let end = new Date(event.endDate)
  if (isNaN(end) || end <= start) end = new Date(start.getTime() + 2 * 3600e3)
  let day = d => new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d)
  let time = d => fmt(d, { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
  let allDay = isAllDay(event)
  return h('add-to-calendar-button', {
    class: 'blr-event__atcb', label: 'Add to calendar',
    name: event.name, location: where || null, description: event.url,
    startDate: day(start), endDate: day(end),
    startTime: allDay ? null : time(start), endTime: allDay ? null : time(end),
    timeZone: TZ,
    options: "'Apple','Google','iCal','Outlook.com','Yahoo','Microsoft365','MicrosoftTeams'",
    listStyle: matchMedia('(min-width: 40rem)').matches ? 'dropdown' : 'modal',
    trigger: 'click', hideBackground: 'true', hideBranding: 'true', hideCheckmark: 'true',
    lightMode: 'light', styleLight: BUTTON_STYLE,
  })
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
    pics.map((src, i) => h('button', { type: 'button', class: 'blr-event__zoom', 'data-index': i, 'aria-label': `View image ${i + 1} of ${pics.length}` },
      h('img', { src: thumb(src), 'data-original': src, alt: i ? '' : `Poster for ${event.name}`, loading: i ? 'lazy' : 'eager', decoding: 'async', referrerpolicy: 'no-referrer' })))) : null

  let header = h('header', { class: 'blr-event__header' },
    h('p', { class: 'blr-event__kicker' },
      h('span', { class: 'blr-event__type' }, h('span', { class: 'blr-event__dot', 'aria-hidden': 'true' }), humanize(type)),
      status && status !== 'EventScheduled' && h('strong', { class: 'blr-event__status', text: humanize(status.replace(/^Event/, '')) }),
      mode && h('span', { class: 'blr-event__mode', text: mode })),
    h('h2', { id: 'blr-event-title', class: 'blr-event__title', text: event.name }),
    h('p', { class: 'blr-event__when' }, whenText(event)),
    where[0] && h('p', { class: 'blr-event__where', text: where[0] }),
    price && h('p', { class: 'blr-event__price', text: price }),
    keywords.length > 0 && h('ul', { class: 'blr-event__tags', 'aria-label': 'Tags' }, keywords.map(k => h('li', { class: `blr-tag blr-tag--${k.kind}`, 'data-tag': k.name, 'data-tip': tagTip(k), tabindex: tagTip(k) && 0, text: k.name }))))

  let actions = h('div', { class: 'blr-event__actions' },
    primary && h('a', { class: 'blr-event__button blr-event__button--primary', href: primary, rel: 'noopener', target: '_blank', text: `Open on ${host(primary)}` }),
    calendarButton(event, where.join(', ')))

  let ticketTable = tickets.length ? h('table', { class: 'blr-event__ticket-table' },
    h('thead', {}, h('tr', {}, h('th', { scope: 'col', text: 'Ticket' }), h('th', { scope: 'col', text: 'Price' }), h('th', { scope: 'col', text: 'Status' }))),
    h('tbody', {}, tickets.map(t => h('tr', { class: t.soldOut ? 'is-sold-out' : null },
      h('td', {}, strike(t.soldOut, t.url ? h('a', { href: t.url, rel: 'noopener', target: '_blank', text: t.name || 'Tickets' }) : (t.name || 'Entry'))),
      h('td', {}, strike(t.soldOut, t.price || '—')),
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
      h('ul', {}, links.map((u, i) => h('li', {}, h('a', { href: u, rel: 'noopener', target: '_blank', text: host(u) }), i === 0 && links.length > 1 ? ' (main listing)' : null)))))

  return { color, images: pics, inner: h('div', { class: 'blr-event__inner' }, stub, media, content) }
}

// The drawer leaves the calendar usable beside it on wide screens
function show(d) {
  if (SIDE_BY_SIDE.matches) d.show()
  else d.showModal()
}

function syncMode() {
  if (!dialog?.open || dialog.matches(':modal') !== SIDE_BY_SIDE.matches) return
  swaps++
  dialog.close()
  show(dialog)
}

function ensureDialog() {
  if (dialog) return dialog
  dialog = h('dialog', { class: 'blr-event', 'aria-labelledby': 'blr-event-title' })
  dialog.addEventListener('click', e => {
    if (e.target === dialog || e.target.closest('.blr-event__close')) dialog.close()
    let zoom = e.target.closest('.blr-event__zoom')
    if (zoom) openLightbox(dialog.images, zoom.querySelector('img').dataset.original)
  })
  dialog.addEventListener('close', () => {
    if (swaps) return swaps--
    markRow(null)
    if (history.state?.blrEvent) history.back()
  })
  // The phone's back button closes the popup instead of leaving the page
  window.addEventListener('popstate', () => {
    if (ignorePop) ignorePop = false
    else if (lightbox?.open) lightbox.close()
    else if (dialog.open) dialog.close()
  })
  document.body.append(dialog)
  return dialog
}

let lightbox = null
let ignorePop = false

function openLightbox(images, current) {
  if (!lightbox) {
    lightbox = h('dialog', { class: 'blr-lightbox', 'aria-label': 'Event images' })
    lightbox.addEventListener('click', e => {
      let step = e.target.closest('[data-step]')
      if (step) return lightbox.go(Number(step.dataset.step))
      if (e.target.closest('.blr-lightbox__close') || !e.target.closest('img, button')) lightbox.close()
    })
    lightbox.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') lightbox.go(1)
      if (e.key === 'ArrowLeft') lightbox.go(-1)
    })
    lightbox.addEventListener('close', () => {
      if (history.state?.blrLightbox) { ignorePop = true; history.back() }
    })
    document.body.append(lightbox)
  }
  let track = h('ul', { class: 'blr-lightbox__track' },
    images.map((src, i) => h('li', {}, h('img', { src, alt: `Image ${i + 1} of ${images.length}`, decoding: 'async', referrerpolicy: 'no-referrer' }))))
  let counter = h('output', { class: 'blr-lightbox__count' })
  let many = images.length > 1
  lightbox.replaceChildren(track,
    h('button', { type: 'button', class: 'blr-lightbox__close', 'aria-label': 'Close images', text: '×' }),
    many && h('button', { type: 'button', class: 'blr-lightbox__prev', 'data-step': -1, 'aria-label': 'Previous image', text: '‹' }),
    many && h('button', { type: 'button', class: 'blr-lightbox__next', 'data-step': 1, 'aria-label': 'Next image', text: '›' }),
    many && counter)
  let index = () => Math.round(track.scrollLeft / track.clientWidth)
  let update = () => { counter.textContent = `${index() + 1} / ${images.length}` }
  lightbox.go = step => track.scrollTo({ left: (index() + step + images.length) % images.length * track.clientWidth, behavior: 'smooth' })
  track.addEventListener('scroll', update, { passive: true })
  history.pushState({ blrEvent: true, blrLightbox: true }, '')
  lightbox.showModal()
  track.scrollLeft = Math.max(0, images.indexOf(current)) * track.clientWidth
  update()
}

let currentRow = null

function markRow(el, color) {
  currentRow?.classList.remove('blr-event-current')
  currentRow = el
  el?.classList.add('blr-event-current')
  el?.style.setProperty('--blr-event-color', color)
}

function openEventModal(fcEvent, keywords = [], row = null) {
  let d = ensureDialog()
  let { color, images, inner } = build(fcEvent, findEvent(fcEvent), [...keywords])
  d.images = images
  d.style.setProperty('--blr-event-color', color)
  markRow(row, color)
  d.replaceChildren(h('button', { type: 'button', class: 'blr-event__close', 'aria-label': 'Close', text: '×' }), inner)
  d.querySelectorAll('.blr-event__media img').forEach(img => img.addEventListener('error', () => {
    let original = img.dataset.original
    if (img.getAttribute('src') !== original) return img.setAttribute('src', original)
    let figure = img.closest('figure')
    img.closest('button').remove()
    d.images = d.images.filter(src => src !== original)
    if (figure && !figure.querySelector('img')) figure.remove()
  }))
  if (!d.open) {
    history.pushState({ blrEvent: true }, '')
    // The page narrows beside the drawer, so keep the clicked row where it was
    let top = row?.getBoundingClientRect().top
    show(d)
    if (row && !d.matches(':modal')) scrollBy(0, row.getBoundingClientRect().top - top)
  }
  d.querySelector('.blr-event__inner').scrollTop = 0
}

SIDE_BY_SIDE.addEventListener('change', syncMode)
;(window.requestIdleCallback || setTimeout)(reportUncached)

document.addEventListener('click', e => {
  if (!dialog?.open || dialog.matches(':modal')) return
  if (e.target.closest('.blr-event, .blr-lightbox, .fc-event, .fc-list-event, [atcb-button-id], add-to-calendar-button')) return
  dialog.close()
})

document.addEventListener('keydown', e => {
  if (e.key !== 'Escape' || !dialog?.open || dialog.matches(':modal') || lightbox?.open) return
  if (!e.target.closest?.('[atcb-button-id]')) dialog.close()
})

export { openEventModal }
