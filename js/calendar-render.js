import { Calendar } from '@fullcalendar/core'
import iCalendarPlugin from '@fullcalendar/icalendar'
import listPlugin from '@fullcalendar/list'
import adaptivePlugin from '@fullcalendar/adaptive'
import { atcb_action } from "add-to-calendar-button";
import { openEventModal } from "./event-modal.js";

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

function visibleKeywords(event, pageTags) {
  // A proper keyword is in uppercase
  let keywords = new Set([...event.extendedProps.keywords].map(x => x.trim()).filter(x=>
    x === x.toUpperCase() && x.length >=3 
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

  // Some keywords are always hidden, even if available
  return keywords.difference(InvisibleKeywords)
}

function renderCalendar(url, pageTags = []){

  var calendarEl = document.getElementById('calendar');
  var calendar = new Calendar(calendarEl, {
    initialView: 'listYear',
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
    weekends: true,
    eventClick: function(info) {
      let e = info.jsEvent
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) return
      e.preventDefault()
      openEventModal(info.event, visibleKeywords(info.event, pageTags), info.el)
    },
    eventDidMount: function(info) {
      alignTimeColumn(calendarEl)
      let keywords = visibleKeywords(info.event, pageTags)

      let element = info.el
      // Tags sit below the time, wrapping within the time column's width
      let el = element.querySelector('.fc-list-event-time-outer')
      if (el && keywords.size > 0) {
        let keywordsElement = document.createElement('div');
        keywordsElement.className = 'fc-list-event-keywords';
        for (let keyword of keywords) {
          let keywordElement = document.createElement('span');
          keywordElement.className = 'keyword';
          keywordElement.textContent = keyword;
          // Style it to be shown like a tag
          keywordElement.style.backgroundColor = '#f0f0f0';
          keywordElement.style.border = '1px solid #ccc';
          // no underlines
          keywordElement.style.textDecoration = 'none';
          keywordElement.style.borderRadius = '2px';
          keywordElement.style.padding = '2px 2px';
          keywordElement.style.fontSize = '0.5em';
          keywordElement.style.marginRight = '5px';
          keywordElement.style.marginBottom = '2px';
          keywordElement.style.display = 'inline-block';
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
