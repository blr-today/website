import { Calendar } from '@fullcalendar/core'
import iCalendarPlugin from '@fullcalendar/icalendar'
import listPlugin from '@fullcalendar/list'
import adaptivePlugin from '@fullcalendar/adaptive'
import { subscribeButton } from "./subscribe.js";
import { openEventModal, loadDetails, eventType } from "./event-modal.js";
import { markLiked } from "./likes.js";
import { tagKind, visibleKeywords, shownTags } from "./tags.js";

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

const DAY = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' })
const WEEKDAY = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', weekday: 'short' })


function renderCalendar(url, pageTags = [], onlyTags = null, locationTags = []){
  let tagged = event => shownTags(event.extendedProps.keywords, locationTags, pageTags, onlyTags)

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
    listDayFormat: ({ date }) => `${DAY.format(date.marker)} (${WEEKDAY.format(date.marker)})`,
    listDaySideFormat: false,
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
      openEventModal(info.event, tagged(info.event), info.el)
    },
    eventMouseEnter: info => { loadDetails(info.event) },
    eventDidMount: function(info) {
      alignTimeColumn(calendarEl)
      let keywords = tagged(info.event)

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
  let facets = e => [{ group: 'type', name: eventType(e) }].concat([...visibleKeywords(e.extendedProps.keywords, pageTags, onlyTags)]
    .map(name => ({ group: tagKind(name, locationTags), name })).filter(f => ['activity', 'location', 'price'].includes(f.group)))
  if (filterEl) import('./tag-filter.js').then(m => m.tagFilter(calendar, filterEl, facets))
  document.fonts.ready.then(() => alignTimeColumn(calendarEl));
  return calendar;
}

export { renderCalendar, subscribeButton };
