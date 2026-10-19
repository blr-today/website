// Price tags from ingest, shown on every calendar
const PRICE_TAG = /^(FREE|BUDGET|PRICEY)$/
const LASTCALL = 'LASTCALL'

// Activity tags and their parents come from _data/tags.yml
function activityParents() {
  try {
    return new Map(JSON.parse(document.getElementById('blr-tag-info')?.textContent || '[]')
      .filter(t => t.kind === 'activity').map(t => [t.id, t.parent || null]))
  } catch { return new Map() }
}
const ACTIVITY = activityParents()

// Picks the tag colour: location, price, activity or other
function tagKind(tag, locationTags) {
  if (PRICE_TAG.test(tag)) return 'price'
  if (tag === LASTCALL) return 'lastcall'
  if (ACTIVITY.has(tag)) return 'activity'
  return locationTags.includes(tag) ? 'location' : 'other'
}

// KINTSUGI already says ART-CRAFT, so rows show only the narrowest tags
function narrowest(keywords) {
  let parents = new Set([...keywords].map(k => ACTIVITY.get(k)).filter(Boolean))
  return new Set([...keywords].filter(k => !parents.has(k)))
}

function visibleKeywords(all, pageTags = [], onlyTags = null) {
  // A proper keyword is in uppercase
  // Sub-tags like SISTERSINSWEAT/SPORTS only route events to calendars
  let keywords = new Set([...all].map(x => String(x).trim()).filter(x=>
    x === x.toUpperCase() && x.length >= 3 && !x.includes('/')
  ))

  // If this page only has a single tag
  // Then we remove that tag from the list of shown tags
  // So that the Indiranagar Page does not use that tag for eg.
  let InvisibleKeywords = new Set([
    'HIGHAPE', 'SKILLBOXES', 'INSIDER', 
    'MV EVENT', 'ALLEVENTS', 'DISTRICT']);

  if (pageTags.length == 1) {
    keywords = keywords.difference(new Set(pageTags))
  }

  if (onlyTags) {
    keywords = new Set([...keywords].filter(k => onlyTags.includes(k) || PRICE_TAG.test(k) || k === LASTCALL || ACTIVITY.has(k)))
  }

  // Some keywords are always hidden, even if available
  return keywords.difference(InvisibleKeywords)
}

// Tags as the calendar rows and the event modal show them
function shownTags(keywords, locationTags, pageTags = [], onlyTags = null) {
  return [...narrowest(visibleKeywords(keywords, pageTags, onlyTags))].map(name => ({ name, kind: tagKind(name, locationTags) }))
}

export { PRICE_TAG, tagKind, visibleKeywords, shownTags }
