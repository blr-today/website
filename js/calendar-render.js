import { Calendar } from '@fullcalendar/core'
import iCalendarPlugin from '@fullcalendar/icalendar'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import multiMonthPlugin from '@fullcalendar/multimonth'
import listPlugin from '@fullcalendar/list'
import adaptivePlugin from '@fullcalendar/adaptive'

function renderCalendar(url){
  var calendarEl = document.getElementById('calendar');
  var calendar = new Calendar(calendarEl, {
    initialView: 'listYear',
    plugins: [
      listPlugin,
      iCalendarPlugin,
      timeGridPlugin,
      dayGridPlugin,
      multiMonthPlugin,
      adaptivePlugin
    ],
    businessHours: {
      daysOfWeek: [ 6,7 ], // Sat - Sun
      startTime: '00:00', // a start time (10am in this example)
      endTime: '23:59', // an end time (6pm in this example)
    },
    firstDay: 1,
    eventMaxStack: 200,
    dayMaxEventRows: 200,
    dayMaxEvents: 200,
    expandRows: true,
    views: {
      dayGridTwoDays: {
        type: 'dayGrid',
        duration: { days: 2 }
      },
      timeGridTwoDays: {
        type: 'timeGrid',
        duration: { days: 2 }
      }
    },
    showNonCurrentDates: false,
    weekends: true,
    multiMonthMaxColumns: 1,
    events: {
      url: url,
      format: 'ics'
    },
    // See blr.today/license - this codebase is AGPL
    schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source'
  });
  calendar.render();
  return calendar;
}
  
export { renderCalendar };