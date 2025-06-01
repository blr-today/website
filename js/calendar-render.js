import { Calendar } from '@fullcalendar/core'
import iCalendarPlugin from '@fullcalendar/icalendar'
import listPlugin from '@fullcalendar/list'
import adaptivePlugin from '@fullcalendar/adaptive'

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
    validRange: function(nowDate) {
      return {
        start: nowDate
      };
    },
    showNonCurrentDates: false,
    weekends: true,
    multiMonthMaxColumns: 1,
    eventDidMount: function(info) {
      // A proper keyword is in uppercase
      let keywords = info.event.extendedProps.keywords.filter(x=>
        x === x.toUpperCase() && x.length >=3 
      )

      // If this page only has a single tag
      // Then we remove that tag from the list of shown tags
      // So that the Indiranagar Page does not use that tag for eg.
      if (pageTags.length == 1) {
        keywords = keywords - [...new Set(pageTags)]
      }
      
      let element = info.el
      let el = element.querySelector('.fc-list-event-time')
      // Add a child element that shows the list of keywords at the very end
      if (el && keywords.length > 0) {
        let keywordsElement = document.createElement('div');
        for (let i = 0; i < keywords.length; i++) {
          let keyword = keywords[i];
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
          // Use a display: block if we are in small screens
          if( window.innerWidth < 600) {
            keywordElement.style.display = 'inline-block';
            // Do not take complete width
            keywordElement.style.width = 'fit-content';
          }
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
  return calendar;
}
  
export { renderCalendar };
