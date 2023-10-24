---
layout: page
title: Home
id: home
permalink: /
---

<!-- # Welcome! 🌱

<p style="padding: 3em 1em; background: #f5f7ff; border-radius: 4px;">
  Take a look at <span style="font-weight: bold">[[Your first note]]</span> to get started on your exploration.
</div>

This digital garden template is free, open-source, and [available on GitHub here](https://github.com/maximevaillancourt/digital-garden-jekyll-template).

The easiest way to get started is to read this [step-by-step guide explaining how to set this up from scratch](https://maximevaillancourt.com/blog/setting-up-your-own-digital-garden-with-jekyll).

<strong>Recently updated notes</strong>

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 5 %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<style>
  .wrapper {
    max-width: 46em;
  }
</style> -->
<div class="communitybody">
  <div class="communitybodyrow">
    <div>💬 Go to Forums</div>
    <div><i class="fa-solid fa-database" style="color:#b35488;"></i> Database</div>
    <div><i class="fa-solid fa-circle-question" style="color:#cd762f;"></i> FAQs</div>
  </div>
  <div class="communitybodyrow">
    <div><h2>🌐 Shared in Open Access</h2><br>
      hosted on github, accessible to everyone
    </div>
    <div><h3>⚡ Powered by the Community</h3><br>
      self-maintained, and built by contributions
    </div>
    <div><h2>🔗 Connecting Art &amp; Science</h2><br>
      promoting new interactions and exchange
    </div>
  </div>
</div>

<style>
  .communitybody {
    display: flex;
    flex-direction: column;
  }
  .communitybodyrow {
    display: flex;
  }
  .communitybodyrow > p {
    flex: 1 1 0;
    text-align: center;
  }
</style>
