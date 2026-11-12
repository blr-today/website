---
layout: default
permalink: /roadmap/
title: TODO
---
# TODO

## Launch Priority

- [ ] Supported list of views for each calendar
- [x] Make subscribe into a button
- [x] Show popup on clicking subscribe
- [ ] Show QR code in subscribe popup
- [x] Include PVR data, via TicketNew since PVR blocks automated access
- [x] Popup display event details.
- [x] Hide unused hours for each calendar. Moot, the list view has no hour grid.
- [x] Test the behaviour with identical events in multiple calendars, with same UID
	See if we can get away with some really cool ideas. (Update: Does not look like this plan will work.
	Duplicates are now merged during ingest instead, see [duplicates](/_debug/duplicates/))
- [x] Add full map support. See [map](/map/)
- [x] Create a neighbourhoods page. Listed on [calendars](/calendars/)
- [x] Ingest PVR. PVR INOX screenings come through TicketNew
- [x] Show tags in calendar view https://github.com/blr-today/website/issues/19
- [x] Check include/exclude
- [x] Add Footer
- [x] Add about page
- [x] Show curated events in home page
- [x] Convert tag pages into markdown pages
      so we can provide some commentary on each page
      giving links to upstream socials, and subscribe
      features. We can put the query details
      within the page front-matter!
- [x] Add favicon
- [x] Fork fullcalendar/icalendar so we can add support for event colors.
- [x] Set a visible range based on the calendar to only show relevant dates.
      https://fullcalendar.io/docs/visibleRange
- [x] Hide past events
- [x] Setup build pipeline
- [x] Add combination tag support
- [x] Fetch events.db

# Ingestion
- [x] Fancy tagging https://github.com/blr-today/ingest/issues/49
- [x] Event combinations https://github.com/blr-today/ingest/issues/48
- [ ] Nominatim (+cache) to add GeoCoordinates to every Place
- [x] Create tags for Event.@type
- [x] Tag UC events, and other cool hosts