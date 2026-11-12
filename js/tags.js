// Price tags from ingest, shown on every calendar
const PRICE_TAG = /^(FREE|BUDGET|PRICEY)$/
const LASTCALL = 'LASTCALL'

// Tags come from _data/tags.yml, and a slash in an activity names its parent
function tagInfo() {
  try { return JSON.parse(document.getElementById('blr-tag-info')?.textContent || '[]') } catch { return [] }
}
const INFO = tagInfo()
const ACTIVITY = new Set(INFO.filter(t => t.kind === 'activity').map(t => t.id))
const DESCRIPTION = new Map(INFO.map(t => [t.id, t.description]))

// Hover text names the whole tag, then says what it means
function tagTip(tag) {
  return [tag.id, tag.kind !== 'other' && DESCRIPTION.get(tag.id)].filter(Boolean).join(' · ')
}

// Picks the tag colour: location, price, activity or other
function tagKind(tag, locationTags) {
  if (PRICE_TAG.test(tag)) return 'price'
  if (tag === LASTCALL) return 'lastcall'
  if (ACTIVITY.has(tag)) return 'activity'
  return locationTags.includes(tag) ? 'location' : 'other'
}

// LIVE-MUSIC/JAZZ shows as LIVE-MUSIC and JAZZ, each keeping its full id
function splitTags(keywords) {
  let seen = new Map()
  for (let k of keywords) {
    let parts = ACTIVITY.has(k) ? k.split('/') : [k]
    parts.forEach((name, i) => {
      let id = parts.slice(0, i + 1).join('/')
      if (!seen.has(id)) seen.set(id, name)
    })
  }
  return [...seen].map(([id, name]) => ({ id, name }))
}

function visibleKeywords(all, pageTags = [], onlyTags = null) {
  // A proper keyword is in uppercase
  // Sub-tags like SISTERSINSWEAT/SPORTS and -CURATED only route events to calendars
  let keywords = new Set([...all].map(x => String(x).trim()).filter(x=>
    x === x.toUpperCase() && x.length >= 3 && (!x.includes('/') || ACTIVITY.has(x)) && !x.startsWith('-')
  ))

  // If this page only has a single tag
  // Then we remove that tag from the list of shown tags
  // So that the Indiranagar Page does not use that tag for eg.
  let InvisibleKeywords = new Set([
    'HIGHAPE', 'SKILLBOXES', 'INSIDER', 
    'MV EVENT', 'ALLEVENTS', 'DISTRICT', 'BOOKMYSHOW']);

  keywords = keywords.difference(new Set(pageTags))

  if (onlyTags) {
    keywords = new Set([...keywords].filter(k => onlyTags.includes(k) || PRICE_TAG.test(k) || k === LASTCALL || ACTIVITY.has(k)))
  }

  // Some keywords are always hidden, even if available
  return keywords.difference(InvisibleKeywords)
}

// A tag another tag on the event already implies, across families
const IMPLIED = {
  'FITNESS/RUNNING': ['OUTDOORS'], 'FITNESS/CYCLING': ['OUTDOORS'],
  'OUTDOORS/TREK': ['FITNESS', 'OUTDOORS/NATURE-WALK'], 'OUTDOORS/BIRDING': ['OUTDOORS/NATURE-WALK'],
  'OUTDOORS/STARGAZING': ['OUTDOORS/NATURE-WALK'],
  'MUSIC-MAKING/JAM': ['LIVE-MUSIC'], 'NIGHTLIFE/KARAOKE': ['MUSIC-MAKING'],
  'COOKING/COFFEE': ['TASTING/COFFEE-TEA', 'TASTING'], 'COOKING/MIXOLOGY': ['TASTING/DRINKS', 'TASTING'],
  'COOKING/CLASS': ['TASTING/FOOD', 'TASTING'],
  'BOOKS/AUTHOR-TALK': ['BOOKS/BOOK-CLUB'], 'SOCIAL/DATING-MIXER': ['COUPLES'],
  'GAMES/BOARDGAMES': ['SOCIAL'], 'GAMES/QUIZ': ['SOCIAL'], 'GAMES/SOCIAL-DEDUCTION': ['SOCIAL'],
  'ON-STAGE/OPEN-MIC': ['SHOW'], 'ON-STAGE/IMPROV': ['SHOW/IMPROV', 'SHOW'],
}

function implied(tags) {
  return new Set(tags.flatMap(t => IMPLIED[t.id] || []))
}

// A tag the title already spells out, as HERITAGE-WALK on a heritage walk, says nothing new
function obvious(name, title) {
  let words = title.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean)
  return name.toLowerCase().split('-').every(w =>
    words.some(x => x === w || (Math.min(x.length, w.length) >= 4 && (x.startsWith(w) || w.startsWith(x)))))
}

// Tags as the calendar rows and the event modal show them; a title drops the obvious ones
function shownTags(keywords, locationTags, pageTags = [], onlyTags = null, title = '') {
  // Every event here has the page's tags, and so their parents, as SHOW on the comedy calendar
  let queried = new Set(pageTags.flatMap(p => p.split('/').map((_, i, a) => a.slice(0, i + 1).join('/'))))
  let tags = splitTags(visibleKeywords(keywords, pageTags, onlyTags)).filter(t => !queried.has(t.id))
  let redundant = title ? implied(tags) : new Set()
  tags = tags.filter(t => !title || PRICE_TAG.test(t.id) || t.id === LASTCALL || !(redundant.has(t.id) || obvious(t.name, title)))
  // A parent with a child shown, so small screens can show the child alone
  return tags.map(t => ({ ...t, kind: tagKind(t.id, locationTags), parent: tags.some(o => o.id.startsWith(t.id + '/')) }))
}

export { PRICE_TAG, IMPLIED, tagKind, tagTip, visibleKeywords, shownTags, obvious }
