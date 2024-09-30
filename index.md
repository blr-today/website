---
layout: default
title: "Event Calendars | blr.today"
permalink: /calendars/
---
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
	</li>
	{%- endfor -%}
	{%- endif -%}
{%- endfor -%}
</ul>
{%- endfor -%}