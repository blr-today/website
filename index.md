---
layout: default
title: "Event Calendars | blr.today"
permalink: /calendars/
---
<style>
  .calendar-intro p { margin: .1em 0 .8em; font-size: 90%; color: var(--cdark); }
</style>

{%- assign calendarPagesGrouped = site.html_pages | where: "layout", "events" |group_by: "type" -%}
{%- for group in site.data.calendar_types -%}
{%- assign key = group[0] -%}
## {{group[1].title}}
<small>{{group[1].description}}</small>

<ul>
{%- for group in calendarPagesGrouped -%}
	{%- if group.name == key -%}
	{%- for page in group.items -%}
	{% assign eventCount=page.events | size %}
	<li data-eventcount="{{eventCount}}">
		<a href="{{page.url}}">{{page.title}}</a>
		{%- assign intro = page.content | markdownify | extract_element: "blockquote" | first | replace: "<blockquote>", "" | replace: "</blockquote>", "" %}
		<div class="calendar-intro">{{ intro }}</div>
	</li>
	{%- endfor -%}
	{%- endif -%}
{%- endfor -%}
</ul>
{%- endfor -%}