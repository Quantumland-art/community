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
<div>
  <h1 class="communitytitle1">Community.</h1>
  <h1 class="communitytitle2">quantumland.art</h1>
</div>
<br>
<div class="communitysubtitle" style="text-align: center;">
  _art, music, software, and events_
</div>
<br>
<div class="communitybody">
  <div class="communitybodyrow">
    <div>💬 Go to Forums</div>
    <div><i class="fa-solid fa-database" style="color:#b35488;"></i> Database</div>
    <div><i class="fa-solid fa-circle-question" style="color:#cd762f;"></i> FAQs</div>
  </div>
  <br>
  <div class="communitybodyrow2">
    <div><h2>🌐 Shared in Open Access</h2>
      hosted on github, accessible to everyone
    </div>
    <div><h2>⚡ Powered by the Community</h2>
      self-maintained, and built by contributions
    </div>
    <div><h2>🔗 Connecting Art &amp; Science</h2>
      promoting new interactions and exchange
    </div>
  </div>
</div>
<br>
<style>
  .communitytitle1 {
    display: flex !important;
    line-height: 1.4285em;
    font-size: 1.12em;
/*    flex-shrink: 0 !important;*/
    background: -webkit-linear-gradient(30deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
  .communitytitle2 {
    display: flex !important;
    font-size: 0.8em;
    line-height: 0.8em;
    color: rgb(88, 88, 88);
  }
  .communitybody {
    display: flex;
    flex-direction: column;
  }
  .communitybodyrow, .communitybodyrow2 {
    display: flex;
    flex-direction: column;
  }
  .communitybodyrow > div {
    text-align: center;
  }
  @media (max-width: 600px){
    .communitybodyrow > div, .communitybodyrow2 > div {
      flex: 1 1 0;
      padding: 0.5em 0;
    }
  }
  @media (min-width: 600px){
    .communitybodyrow, .communitybodyrow2 {
      flex-direction: row;
    }
    .communitybodyrow > div, .communitybodyrow2 > div {
      flex: 1 1 0;
      padding: 0 0.5em;
    }
    .wrapper {
      max-width: 40em;
      margin: auto;
    }
  }
</style>
