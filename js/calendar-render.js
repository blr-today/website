import { Calendar } from '@fullcalendar/core'
import iCalendarPlugin from '@fullcalendar/icalendar'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';

function renderCalendar(url){
  var calendarEl = document.getElementById('calendar');
  var calendar = new Calendar(calendarEl, {
    initialView: 'listYear',
    plugins: [
    listPlugin,
    iCalendarPlugin,
    timeGridPlugin,
    dayGridPlugin
  ],
  events: {
    url: url,
    format: 'ics'
  }
  });
  calendar.render();
  return calendar;
}
  
export { renderCalendar };