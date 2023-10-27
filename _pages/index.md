---
layout: page
title: Home
id: home
permalink: /
---

<br>
<br>
<div class="communitytitle">
  <h1 class="communitytitle1">Community.</h1>
  <h1 class="communitytitle2">quantumland.art</h1>
</div>
<br>
<div class="communitysubtitle" style="text-align: center;">
  <i>art, music, software, and events</i>
</div>
<br>
<div class="communitybody">
  <div class="communitybodyrow">
    <div><a target="_self" href="{{ site.baseurl }}/forum">💬 Go to Forums</a></div>
    <div><a target="_self" href="{{ site.baseurl }}/database"><i class="fa-solid fa-database" style="color:#b35488;"></i> Database</a></div>
    <div><a target="_self" href="{{ site.baseurl }}/faqs"><i class="fa-solid fa-circle-question" style="color:#cd762f;"></i> FAQs</a></div>
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
  nav {
    display: none;
  }
  .communitytitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .communitytitle1 {
    line-height: 1.2em;
    font-size: 3.03em;
    background: -webkit-linear-gradient(30deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
  .communitytitle2 {
    font-size: 2.1em;
    margin-top: auto;
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
<script>
  var urls = document.getElementsByTagName("a");
  for (var i = 1; i < urls.length; i++) {
    urls[i].target = "_self";
  }
</script>
