---
layout: default
permalink: /about
title: blr.today / about
---

blr.today is an [open-source](/license) project by [Nemo][nemo] that curates events happening in Bangalore.

**We now have a [changelog](/changelog)**

It curates events from multiple sources, cleans them up, then curates them further by tagging them nicely, and 
makes all event data available as calendars you can subscribe to.

## Core Thesis

My attempt at explaining why I think this is worth doing:

1. The vast majority of events in aggregator websites are low-quality, and
often filled with spam[^2]. The aggregators make money by listing lots of
events.

2. Small venues hosting cool events will not always publicize them on the
aggregator platforms.

3. The best UX for event discovery is your existing calendar app.

4. Events are highly structured data - but this is often not captured.

## Roadmap

Ultimately, my master plan is to give you your own personalized calendar feed,
where you get infinite customizability[^3], and create a calendar which
will include:

- Highly Rated movies in "language-of-your-choice" on Friday evenings at "your closest theater"
- F1 screenings, but only in your favorite pub
- Quizes in Indiranagar/Koramangala
- All events hosted in Bookstores
- All Dance Workshops in "JP Nagar"

and so on...

You can see my TODO list for the project at [/roadmap](/roadmap).

## History

This project is born out of a [very old idea of mine][idea],
when it was called `gardencity.events`[^4]. The original idea was to create a
Bangalore specific clone of [we build! sg][wb] [^1], which was a website
automatically curating maker events in Singapore. My first attempt [in 2018](https://github.com/captn3m0/gardencity.events) went nowhere. It was further
pushed by the success of [Putting Scene][ps] - event curation
seemed like an interesting problem to solve.

[wb]: https://webuild.sg
[wba]: http://web.archive.org/web/20171228002951/http://webuild.sg/
[ps]: https://puttingscene.com/
[idea]: https://github.com/captn3m0/ideas?tab=readme-ov-file#--bangalore-events-list

[^1]: Now defunct, but see [this archived version from 2017](http://web.archive.org/web/20171228002951/http://webuild.sg/) to see a snapshot of the site when it was functional.
[^2]: See this search for ["luxury"](https://www.townscript.com/search?place=india&q=luxury) on townscript to realize that the site has been taken over by real-estate agents.
[^3]: We will let you write your own SQL Queries.
[^4]: Unfortunately, the domain was taken by a squatter in the time it took me to get around to working on it.
[nemo]: https://github.com/captn3m0
