---
layout: default
title: blr.today
---
<ul>
{% for tag in site.data.tags %}
<li>
	<a href="/tags/{{tag.id|downcase}}/">{{tag.title}}</a>
</li>
{% endfor %}
</ul>