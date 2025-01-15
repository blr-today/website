---
title: Unwanted Events 👻
type: collection
tags: '["LOW-QUALITY", "NOTINBLR", "WOOWOO", "DANDIYA", "BUSINESS"]'
excludeTags: '[]'
sqlite:
- data: events
  file: events.db
  query: |
    WITH 
    allowlist_tags AS (
      SELECT value FROM json_each(:tags)
    )
    SELECT *
    FROM events
    WHERE EXISTS (
        SELECT 1
        FROM allowlist_tags
        WHERE allowlist_tags.value IN (
        SELECT value
        FROM json_each(event_json->'$.keywords')
    ))
    ORDER BY event_json -> '$.startDate';
subscribe: false
# This is such a trash event page, that we don't want links here to impact our rankings
noindex: true
--- 
This is a meta calendar that lists events that have been excluded
from other calendars. This is primarily meant for debugging.

If you find an event you think is worth curating, but in this list
,please let me know. Explanations for the tags:

- `LOW-QUALITY`: Low Quality events
- `NOTINBLR`: Events listed as Bangalore, but not in Bengaluru
- `WOOWOO`: Pseudoscientific Events
- `DANDIYA`: Too many Dandiya events happening these days.
- `BUSINESS`: Business and Networking events.