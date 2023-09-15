import express from 'express';
import proxy from 'express-http-proxy';
import { URL } from 'url';
import path from 'path';

const {
  PAGE_URL = 'https://notion.notion.site/Notion-Official-83715d7703ee4b8699b5e659a4712dd8',
  GA_TRACKING_ID,
} = process.env;

const { origin: pageDomain, pathname: pagePath } = new URL(PAGE_URL);
const pageId = path.basename(pagePath).match(/[^-]*$/);

// fake trigger 09
// Map start page path to "/". Replacing URL for example:
// - https://my.notion.site/0123456789abcdef0123456789abcdef -> https://mydomain.com/
// - /My-Page-0123456789abcdef0123456789abcdef -> /
// - /my/My-Page-0123456789abcdef0123456789abcdef -> /
const ncd = `var ncd={
  href:function(){return location.href.replace(location.origin,"${pageDomain}").replace(/\\/(?=\\?|$)/,"/${pageId}")},
  pushState:function(a,b,url){history.pushState(a,b,url.replace("${pageDomain}",location.origin).replace(/(^|[^/])\\/[^/].*${pageId}(?=\\?|$)/,"$1/"));pageview();},
  replaceState:function(a,b,url){history.replaceState(a,b,url.replace("${pageDomain}",location.origin).replace(/(^|[^/])\\/[^/].*${pageId}(?=\\?|$)/,"$1/"));pageview();}
};`.replace(/\n */gm, '');

const ga = GA_TRACKING_ID
  ? `<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${GA_TRACKING_ID}');
</script>`
  : '';

const pageview = `
<style> 
  :root {
    --jutifycont: center;
    --oldtitlevis: hidden;
    --oldtitleline: 0;
    --beforecont: 'Community.'; 
    --aftercont: 'quantumland.art'
    --biglogo: none;
    --mainmargin: 80px;
  }
  .notion-topbar > div > div:nth-last-child(1), .notion-topbar > div > div:nth-last-child(2), .notion-topbar > div > div:nth-last-child(3) { 
    display:none !important; 
  }
  .notranslate.shadow-cursor-breadcrumb > div:nth-child(1) > div:nth-child(2) {
    display: none !important;
  }
  .notranslate.shadow-cursor-breadcrumb > div:nth-child(1) > a > div > div:nth-child(2) {
    display: none !important;
  }
  .katex-display > .katex {
    padding-right: 0 !important;
  }
  .pseudoSelection > .notion-record-icon.notranslate {
    display: var(--biglogo) !important;
  }
  .notion-page-controls {
    margin-top: var(--mainmargin) !important;
  }
  .notion-selectable.notion-page-block {
    justify-content: var(--jutifycont);
  }
  h1 {
    visibility: var(--oldtitlevis);
    line-height: var(--oldtitleline);
    width: initial !important;
  }
  h1:before{
    content: var(--beforecont);
    visibility: visible !important;
    display: flex !important;
    line-height: 1.4285em;
    font-size: 1.12em;
    flex-shrink: 0 !important;
    background: -webkit-linear-gradient(30deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	  color: transparent;
  }
  h1:after{
    content: var(--aftercont);
    visibility: visible !important;
    display: flex !important;
    font-size: 0.8em;
    line-height: 0.8em;
    color: rgb(88, 88, 88);
  }
  a[href^="https://ochland.notion.site"] {

  }
  .notion-selectable.notion-equation-block > div > div {
    pointer-events: none;
    cursor: default;
  }
  .notion-link-token.notion-focusable-token.notion-enable-hover:hover {
    background: rgba(55, 53, 47, 0.08);
  }
  .notion-link-token.notion-focusable-token.notion-enable-hover > span {
    opacity: 1 !important;
  }
  // .notion-page-mention-token.notion-text-mention-token.notion-focusable-token.notion-enable-hover:after {
  //   content: '';
  //   position: absolute;
  //   width: 100%; height: 100%;
  //   top: 0; left: 0;
  //   cursor: pointer;
  // }
</style>
<script>
  window.pagePath = location.pathname + location.search + location.hash;
  function pageview(){
    var pagePath = location.pathname + location.search + location.hash;
    if (pagePath !== window.pagePath) {${
      GA_TRACKING_ID
        ? `
      gtag('config', '${GA_TRACKING_ID}', {'page_path': pagePath});`
        : ''
    }
      window.pagePath = pagePath;
    }
  }
  window.addEventListener('popstate', pageview);
</script>
<script>
  let previousUrl = "";
  const observer = new MutationObserver(() => {
    if (window.location.href !== previousUrl) {
      previousUrl = window.location.href;
      var r = document.querySelector(':root');
      if(window.location.href != "https://notion-custom-domain-ten.vercel.app/"){
        r.style.setProperty('--jutifycont', 'initial'); 
        r.style.setProperty('--oldtitlevis', 'visible'); 
        r.style.setProperty('--oldtitleline', '1.2em'); 
        r.style.setProperty('--beforecont', '""');
        r.style.setProperty('--aftercont', '""');
        r.style.setProperty('--biglogo', 'block');
        r.style.setProperty('--mainmargin', '8px');
      } else {
        r.style.setProperty('--jutifycont', 'center'); 
        r.style.setProperty('--oldtitlevis', 'hidden'); 
        r.style.setProperty('--oldtitleline', '0'); 
        r.style.setProperty('--beforecont', '"Community."');
        r.style.setProperty('--aftercont', '"quantumland.art"'); 
        r.style.setProperty('--biglogo', 'none');
        r.style.setProperty('--mainmargin', '80px');
      }
      if (previousUrl.substr(0,28) == "https://ochland.notion.site/"){
        window.location.href = "https://notion-custom-domain-ten.vercel.app/"+previousUrl.substr(28);
      }
    }
    // my contant mutations here
    // const clickablelink = document.querySelector('.notion-link-token.notion-focusable-token.notion-enable-hover');
    // const clickablelinkparent = clickablelink.parentNode;
    // clickablelinkparent.style.padding = "0.25rem 0.5rem";
    // clickablelinkparent.onmouseover = function(){clickablelinkparent.style.setProperty('background', 'rgba(55, 53, 47, 0.08)');};
    // clickablelinkparent.onmouseout = function() {clickablelinkparent.style.setProperty('background', 'transparent');};
    // get all links
    const alllinks = document.querySelectorAll(".notion-page-mention-token.notion-text-mention-token.notion-focusable-token.notion-enable-hover");
    for (let i = 0; i < alllinks.length; i++) {
      if(alllinks[i].href.substr(0,28) == "https://ochland.notion.site/"){
        // alllinks[i].onclick = function(e) {
        //   e.preventDefault();
        //   window.location = newlink;
        // };
        // alllinks[i].style.setProperty('pointer-events', 'none');
        // alllinks[i].style.setProperty('cursor', 'pointer', 'important');
        // alllinks[i].addEventListener("click", function(event){
        //   event.preventDefault();
        //   window.location.href = "https://notion-custom-domain-ten.vercel.app/"+alllinks[i].href.substr(28);
        // });
        // alllinks[i].setAttribute("href", newlink);
        // alllinks[i].href = "https://notion-custom-domain-ten.vercel.app/"+alllinks[i].href.substr(28);
      }
    }
  });
  const config = { subtree: true, childList: true };
  // start observing change
  observer.observe(document, config);
</script>`;

const app = express();

app.use(
  proxy(pageDomain, {
    proxyReqOptDecorator: (proxyReqOpts) => {
      if (proxyReqOpts.headers) {
        proxyReqOpts.headers['accept-encoding'] = 'gzip';
      }
      return proxyReqOpts;
    },
    proxyReqPathResolver: (req) => {
      // Replace '/' with `/${pageId}`
      return req.url.replace(/\/(\?|$)/, `/${pageId}$1`);
    },
    userResHeaderDecorator: (headers, userReq) => {
      if (headers['location']) {
        // "https://www.notion.so/syncCookies?backUrl=https%3A%2F%2Fmy.notion.site%2F0123456789abcdef0123456789abcdef%3Fv%3D1"
        // -> "https://mydomain.com/syncCookies?backUrl=https%3A%2F%2Fmydomain.com%2F0123456789abcdef0123456789abcdef%3Fv%3D1"
        headers['location'] = headers['location'].replace(
          /(https?)(:\/\/|%3A%2F%2F)[^.]+\.notion\.(so|site)/g,
          `${userReq.headers['x-forwarded-proto']}$2${userReq.headers['x-forwarded-host']}`,
        );
      }

      if (headers['set-cookie']) {
        // "Domain=notion.site" -> "Domain=mydomain.com"
        // "; Domain=notion.site;' -> '; Domain=mydomain.com;"
        const domain = (userReq.headers['x-forwarded-host'] as string).replace(
          /:.*/,
          '',
        );
        headers['set-cookie'] = headers['set-cookie'].map((cookie) =>
          cookie.replace(
            /((?:^|; )Domain=)((?:[^.]+\.)?notion\.(?:so|site))(;|$)/g,
            `$1${domain}$3`,
          ),
        );
      }

      const csp = headers['content-security-policy'] as string;
      if (csp) {
        headers['content-security-policy'] = csp.replace(
          /(?=(script-src|connect-src) )[^;]*/g,
          '$& https://www.googletagmanager.com https://www.google-analytics.com',
        );
      }

      return headers;
    },
    userResDecorator: (_proxyRes, proxyResData, userReq) => {
      if (/^\/app-.*\.js$/.test(userReq.url)) {
        console.log("this is a print of proxyResData:");
        console.log(proxyResData);
        return proxyResData
          .toString()
          .replace(/^/, ncd)
          .replace(/window.location.href(?=[^=]|={2,})/g, 'ncd.href()') // Exclude 'window.locaton.href=' but not 'window.locaton.href=='
          .replace(/window.history.(pushState|replaceState)/g, 'ncd.$1');
      } else if (/^\/image[s]?\//.test(userReq.url)) {
        return proxyResData;
      } else {
        // Assume HTML
        return proxyResData
          .toString()
          .replace('</body>', `${ga}${pageview}</body>`);
      }
    },
  }),
);

if (!process.env.VERCEL_REGION) {
  const port = process.env.PORT || 3000;
  app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`),
  );
}

export default app;
