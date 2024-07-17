---
layout: default
title: blr.today
---
**curating events in bengaluru**

<h2>Event Calendars</h2>
<ul>
{% for page in site.html_pages %}
{% if page.layout == 'events' %}
<li>
	<a href="{{page.url}}">{{page.title}}</a>
</li>
{% endif %}
{% endfor %}
</ul>
