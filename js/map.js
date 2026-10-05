import { Map, TileLayer, GeoJSON, CircleMarker } from 'leaflet'
import { TYPE_COLORS, typeLabel } from './event-types.js'

const map = new Map('map').setView([12.97, 77.59], 11)

const ESRI = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/'
const attribution = 'Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
new TileLayer(ESRI + 'World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', { maxZoom: 16, attribution }).addTo(map)
new TileLayer(ESRI + 'World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}', { maxZoom: 16 }).addTo(map)

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

function isCurated(event, { tags, excludeTags }) {
  return event.keywords.some(k => tags.includes(k)) && !event.keywords.some(k => excludeTags.includes(k))
}

// Uncategorized only wins when a venue has nothing else
function topType(events) {
  let counts = {}
  for (let e of events) if (e.type !== 'Event') counts[e.type] = (counts[e.type] || 0) + 1
  return Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0] || 'Event'
}

function popup({ venue, events }) {
  return h('div', { class: 'map-popup' },
    h('strong', { text: venue || 'Unknown venue' }),
    h('ul', {}, ...events.map(e => h('li', { class: e.curated ? 'is-curated' : '' },
      h('span', { class: 'map-dot', style: { background: color(e.type) }, title: typeLabel(e.type) }),
      h('a', { href: e.url, target: '_blank', rel: 'noopener', text: e.name }),
      e.curated ? h('span', { class: 'map-badge', text: 'Curated' }) : '',
      h('br'), when(e.start)))))
}

function legend(types) {
  let el = document.getElementById('map-legend')
  for (let [type, n] of Object.entries(types).sort((a, b) => b[1] - a[1])) {
    el.append(h('li', {}, h('span', { class: 'map-dot', style: { background: color(type) } }), `${typeLabel(type)} (${n})`))
  }
}

function summary({ shown, upcoming, unwanted, nogeo, outside }, venues, curated) {
  let dropped = [
    nogeo && `${nogeo} without a location`,
    outside && `${outside} outside Bangalore`,
    unwanted && `${unwanted} from the <a href="/cal/unwanted/">unwanted</a> calendar`,
  ].filter(Boolean)
  document.getElementById('map-summary').innerHTML =
    `Showing ${plural(shown, 'event')} (${curated} curated) at ${plural(venues, 'venue')}, out of ${upcoming} upcoming. ` +
    (dropped.length ? `Left out ${upcoming - shown}: ${dropped.join(', ')}.` : '')
}

let data = await (await fetch('/map.geojson')).json()
let types = {}, curated = 0
for (let f of data.features) {
  for (let e of f.properties.events) {
    e.curated = isCurated(e, data.curated)
    curated += e.curated
    types[e.type] = (types[e.type] || 0) + 1
  }
}

let layer = new GeoJSON(data, {
  pointToLayer: (feature, latlng) => new CircleMarker(latlng, {
    radius: 5 + 3 * Math.sqrt(feature.properties.events.length),
    color: color(topType(feature.properties.events)),
    weight: 1,
    fillOpacity: 0.6
  }),
  onEachFeature: (feature, marker) => {
    let { venue, events } = feature.properties
    marker.bindTooltip(`${venue || 'Unknown venue'}: ${plural(events.length, 'event')}`)
    marker.bindPopup(() => popup(feature.properties), { maxWidth: 340 })
  }
}).addTo(map)

if (data.features.length) map.fitBounds(layer.getBounds(), { padding: [20, 20] })
summary(data.counts, data.features.length, curated)
legend(types)
