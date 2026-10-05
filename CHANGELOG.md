---
layout: changelog
permalink: /changelog/
title: changelog
---

## October 2026

- `New` The [map](/map/) shows upcoming events by venue, coloured by event type, with curated events highlighted.
- `Fixed` More events have a location: Urbanaut, Bangalore International Centre, Science Gallery, Lavonne, Sisters in Sweat and Adidas Runners venues. Events at venues still "to be announced" no longer get a made-up location.
- `New` Clicking an event opens its details beside the calendar, with posters, tickets and an Add to Calendar button.
- `New` Send feedback from the menu, the footer, the filter or an event popup.
- `New` Like events with ♥. Likes stay in your browser and liked events are highlighted on every calendar.
- `New` Filter large calendars like [Curated](/) by event type, area and price.
- `New` Coloured area and price tags, and a "seats left" ribbon on events that are almost full.
- `New` Calendars list the next twelve months, so events after New Year show up.
- `New` Events listed on several sites (a venue's own site, District, Urbanaut, Putting Scene and others) now show up once. Calendars for a single site link to that site's listing, while [Curated](/) and other calendars prefer the venue's or organiser's own page.
- `New` The [duplicates](/duplicates/) page lists every upcoming event found on more than one site, with links to each listing.
- `Fixed` Courtyard Koota event dates are read correctly again.
- `Removed` The screensaver button on calendar pages.
- `Fixed` District, AllEvents and PUMA Runs calendars.
- `Fixed` More events are placed in a neighbourhood. Cox Town and Shanti Nagar are now part of CBD, and most of east Bangalore is under Whitefield.
- `Cal` Added new calendar for [North Bangalore](/cal/north).
- `Cal` [Ace of Pubs](/cal/aceofpubs) is back.

## September 2026

- `Fixed` The site showed no events from the end of August because the event data download broke. Fixed on 24th September.
- `New` All events are available as JSON at [/api/events.json](/api/events.json).
- `New` The latest event database is at [/api/events.db](/api/events.db).
- `Fixed` Atta Galatta, Adidas Runners, MAP, The White Box, Urbanaut, Lavonne, Trove, Sumukha, Sisters in Sweat, Bangalore Chess Club, Putting Scene, Creative Mornings and PUMA Runs calendars.
- `Fixed` Pedal In Tandem rides showed up 5½ hours late.
- `Fixed` Underline Center no longer lists past events, and events without ticket links now link to the Underline Center page.
- `Fixed` Science Gallery BLR now uses the new QUANTUM exhibition, and its events show up on the [Science Gallery](/cal/scigallery) and [Curated](/) calendars again.
- `Fixed` Champaca calendar was empty since it stopped putting dates in event titles.
- `Fixed` The site now picks up new events within a few minutes of every update.
- `Fixed` Club nights, pub promotions, business expos, out-of-town trips and pseudoscience events are filtered out of more calendars.
- `Fixed` Late-night events that end after midnight now show once, on the day they start, with their real end time.
- `Removed` PVR Cinemas 🪦 blocks all automated access. PVR INOX screenings are still covered through TicketNew.
- `Cal` Added new calendar for [Main Mission](/cal/mainmission), also included in [Fitness](/cal/fitness).
- `Cal` Added new calendars for [Indian Institute of World Culture](/cal/iiwc) and [Bangalore Astronomy Club](/cal/bac), both included in [Curated](/). Stargazing trips outside Bengaluru only show on the Astronomy Club calendar.

## February 2026
- `Fixed` Skillboxes, Goethe Institut, Putting Scene, BlrBirders, Pedal In Tandem, Sumukha calendars
- `Cal` Added new calendar for [India Running](/cal/indiarunning)
- `Cal` Renamed Insider to [District](/cal/district) everywhere
- `Cal` Renamed BNGBirds to [BlrBirders](/cal/blrbirders)
- `Cal` Removed Ace of Pubs because their website is misconfigured.
- `Cal` Added new [Penciljam](/cal/penciljam) calendar

## September 2025

- `Fixed` Updates broke for a while because my homeserver went down. Fixed mid-September.

## August 2025

- `Cal` Fixed and renamed Venn -> [Putting Scene](/cal/puttingscene).
- `Fixed` [Pedal In Tandem](/cal/pedalintandem) calendar.
- `Fixed` Dropped online events from Champaca calendar.

## July 2025

- `Fixed` Shivaji-Nagar is now included in CBD.
- `New` Added this changelog.
- `Feature` Add to Calendar now works across multiple operating systems and devices.
- `Cal` [Sabha BLR](/cal/sabha) calendar
- `Cal` [Conosh](/cal/conosh) calendar
- `Cal` [Choe Khor Sum Ling Centre](/cal/cksl) calendar
- `New` feature - Run a screensaver on any calendar page
- `Fixed` [Goethe-Institut](/cal/goethe) calendar
- `Fixed` Science Gallery BLR now uses the new Calorie Exhibition
- `Fixed` Sisters in Sweat moved from sistersinsweat.in to sistersinsweat.com
- `Removed` Together.buzz 🪦 was a community events startup in Bangalore.

## May 2025
- `Cal` [Artzo](/cal/artzo) calendar
- `Cal` [Pedal In Tandem](/cal/pedalintandem) calendar


## April 2025
- `Removed` Zomato Events 🪦 was a short lived platform that was live in 2024. It
  hosted a few niche events, notably the Diljit and Seedhe Maut concerts for
  that year. It was killed pretty quickly once Zomato bought insider.

## January 2025

- `Cal` [BNGBirds](/cal/bngbirds) calendar
- `Cal` [Lavonne](/cal/lavonne) calendar

## September 2024
- `Cal` [The Whitebox](/cal/thewhitebox) calendar
- `Cal` [The Parallel Cinema Club](/cal/tpcc) calendar
- `Cal` calendars for various neighbourhoods.

## August 2024
- `Cal` [Bangalore Chess Club](/cal/bcc) calendar

## June 2024
- `Removed` Mello.fun 🪦 was an Accel funded events startup that curated events. 

<script>
	document.querySelectorAll('article code').forEach(el => {
		const content = el.textContent.toLowerCase().replace(/\s+/g, '-');
		el.className += ' badge-' + content;
	});

</script>