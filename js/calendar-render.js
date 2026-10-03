import { Calendar } from '@fullcalendar/core'
import iCalendarPlugin from '@fullcalendar/icalendar'
import listPlugin from '@fullcalendar/list'
import adaptivePlugin from '@fullcalendar/adaptive'
import { atcb_action } from "add-to-calendar-button";
import { openEventModal, eventType } from "./event-modal.js";
import { markLiked } from "./likes.js";

// FullCalendar's shared time width is unreliable, so size the column ourselves
let alignScheduled = false
function alignTimeColumn(calendarEl) {
  if (alignScheduled) return
  alignScheduled = true
  requestAnimationFrame(() => {
    alignScheduled = false
    let widths = [...calendarEl.querySelectorAll('.fc-list-event-time')]
      .map(el => el.getBoundingClientRect().width)
    if (widths.length > 0) {
      calendarEl.style.setProperty('--blr-time-width', Math.ceil(Math.max(...widths)) + 'px')
    }
  })
}

// Price tags from ingest, shown on every calendar
const PRICE_TAG = /^(FREE|BUDGET|PRICEY)$/
const LASTCALL = 'LASTCALL'

// Picks the tag colour: location, price or other
function tagKind(tag, locationTags) {
  if (PRICE_TAG.test(tag)) return 'price'
  if (tag === LASTCALL) return 'lastcall'
  return locationTags.includes(tag) ? 'location' : 'other'
}

function visibleKeywords(event, pageTags, onlyTags) {
  // A proper keyword is in uppercase
  // Sub-tags like SISTERSINSWEAT/SPORTS only route events to calendars
  let keywords = new Set([...event.extendedProps.keywords].map(x => x.trim()).filter(x=>
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
    keywords = new Set([...keywords].filter(k => onlyTags.includes(k) || PRICE_TAG.test(k) || k === LASTCALL))
  }

  // Some keywords are always hidden, even if available
  return keywords.difference(InvisibleKeywords)
}

function renderCalendar(url, pageTags = [], onlyTags = null, locationTags = []){
  let tagged = keywords => [...keywords].map(name => ({ name, kind: tagKind(name, locationTags) }))

  var calendarEl = document.getElementById('calendar');
  var calendar = new Calendar(calendarEl, {
    // One rolling year from today, so events across new year stay listed
    initialView: 'listUpcoming',
    views: {
      listUpcoming: {
        type: 'list',
        visibleRange: now => {
          let start = new Date(now.getFullYear(), now.getMonth(), now.getDate())
          return { start, end: new Date(start.getFullYear() + 1, start.getMonth(), start.getDate()) }
        },
      },
    },
    headerToolbar: false,
    plugins: [
      listPlugin,
      iCalendarPlugin,
      adaptivePlugin
    ],
    // We use business hours to highlight weekends
    businessHours: {
      daysOfWeek: [ 6,0 ],
      startTime: '00:00', 
      endTime: '23:59', 
    },
    contentHeight: 'auto',
    firstDay: 1, // Mon
    eventMaxStack: 200,
    dayMaxEventRows: 200,
    dayMaxEvents: 200,
    expandRows: true,
    // Late-night events ending before 6am stay on their start day
    nextDayThreshold: '06:00:00',
    validRange: function(nowDate) {
      return {
        start: nowDate
      };
    },
    showNonCurrentDates: false,
    displayEventEnd: false,
    weekends: true,
    eventClick: function(info) {
      let e = info.jsEvent
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) return
      e.preventDefault()
      openEventModal(info.event, tagged(visibleKeywords(info.event, pageTags, onlyTags)), info.el)
    },
    eventDidMount: function(info) {
      alignTimeColumn(calendarEl)
      let keywords = tagged(visibleKeywords(info.event, pageTags, onlyTags))

      let element = info.el
      markLiked(element, info.event)
      // Tags sit below the time, wrapping within the time column's width
      let el = element.querySelector('.fc-list-event-time-outer')
      if (el && keywords.length > 0) {
        let keywordsElement = document.createElement('div');
        keywordsElement.className = 'fc-list-event-keywords';
        for (let { name, kind } of keywords) {
          let keywordElement = document.createElement('span');
          keywordElement.className = `keyword blr-tag blr-tag--${kind}`;
          keywordElement.dataset.tag = name;
          keywordElement.textContent = name;
          keywordsElement.appendChild(keywordElement);
        }
        el.appendChild(keywordsElement);
      }
    },
    events: {
      url: url,
      format: 'ics'
    },
    // See blr.today/license - this codebase is AGPL
    schedulerLicenseKey: 'AGPL-My-Frontend-And-Backend-Is-Open-Source'
  });
  calendar.render();
  let filterEl = document.getElementById('blr-tag-filter')
  let facets = e => [{ group: 'type', name: eventType(e) }].concat([...visibleKeywords(e, pageTags, onlyTags)]
    .map(name => ({ group: tagKind(name, locationTags), name })).filter(f => ['location', 'price'].includes(f.group)))
  if (filterEl) import('./tag-filter.js').then(m => m.tagFilter(calendar, filterEl, facets))
  document.fonts.ready.then(() => alignTimeColumn(calendarEl));
  return calendar;
}

function subscribeButton (elementId, icsFile, title) {
  const config = {
    name: title,
    subscribe: true,
    icsFile: icsFile,
    options: ['Apple','Google','iCal','Outlook.com','Yahoo','Microsoft365','MicrosoftTeams'],
    lightMode: "system",
    listStyle: "dropup-static",
    trigger: "click",
    // The branding looks weird, we instead give credit in lots of other places.
    hideBranding: true
  };
  const button = document.getElementById(elementId);
  if (button) {
    button.addEventListener('click', () => atcb_action(config, button));
  }
}
  
export { renderCalendar, subscribeButton };
