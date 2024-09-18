---
title: Unwanted Events
tags: '["LOW-QUALITY", "NOTINBLR", "WOOWOO", "DANDIYA", "BUSINESS"]'
subscribe: false
sqlite:
- data: events
  file: events.db
  query: |
    SELECT *
    FROM events
    WHERE EXISTS (
        SELECT 1
        FROM json_each(:tags) AS tags
        WHERE tags.value IN (
            SELECT value
            FROM json_each(event_json->'$.keywords')
        )
    )
    ORDER BY event_json -> '$.startDate'
    ;
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