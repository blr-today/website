// Likes live in this browser, keyed by start day and URL, until the event ends
const LIKES = 'blr-likes'

// FullCalendar gives floating ICS times in local time, so days are local too
const isoDay = d => new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(d)

function read() {
  try { return JSON.parse(localStorage.getItem(LIKES)) || {} } catch { return {} }
}

function likeKey(fcEvent) {
  let start = fcEvent?.start
  return start && fcEvent.url ? `${isoDay(start)} ${fcEvent.url.replace(/^https?:\/\//, '')}` : null
}

const isLiked = key => Boolean(key && read()[key])

function markRows(key, liked) {
  document.querySelectorAll('.fc-list-event[data-like]').forEach(row => {
    if (row.dataset.like === key) row.classList.toggle('blr-liked', liked)
  })
}

function toggleLike(fcEvent) {
  let likes = read(), key = likeKey(fcEvent)
  if (likes[key]) delete likes[key]
  else {
    let today = isoDay(new Date())
    for (let [k, until] of Object.entries(likes)) if (until < today) delete likes[k]
    likes[key] = isoDay(fcEvent.end ? new Date(fcEvent.end - 1) : fcEvent.start)
  }
  try { localStorage.setItem(LIKES, JSON.stringify(likes)) } catch {}
  markRows(key, Boolean(likes[key]))
  return Boolean(likes[key])
}

function markLiked(el, fcEvent) {
  let key = likeKey(fcEvent)
  if (!key) return
  el.dataset.like = key
  el.classList.toggle('blr-liked', isLiked(key))
}

export { likeKey, isLiked, toggleLike, markLiked }
