(function(){
window.GITBOOK_ICON_MAP={"blog-posts.html": {"icon": "envelopes-bulk"}, "collection-gallery.html": {"icon": "arrow-up-right-dots"}, "custom-liquid.html": {"icon": "terminal"}, "frequently-asked-questions.html": {"icon": "sliders"}, "newsletter.html": {"icon": "envelope-open-dollar"}, "template-404-page.html": {"icon": "ban"}, "template-blog.html": {"icon": "table-cells-large"}, "template-cart.html": {"icon": "cart-circle-exclamation"}, "template-default-blog-post.html": {"icon": "table-cells-large"}, "template-password-page.html": {"icon": "lock"}, "template-search-result.html": {"icon": "magnifying-glass"}};
function loadFA(){
if(!document.querySelector("link[href*='font-awesome']")){
var l=document.createElement("link");l.rel="stylesheet";
l.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
document.head.appendChild(l);}}
function normalize(h){if(!h)return"";return h.split("/").pop().split("#")[0].split("?")[0];}
document.addEventListener("DOMContentLoaded",function(){
loadFA();var map=window.GITBOOK_ICON_MAP||{};
var selectors=["#book-summary a",".book-summary a",".summary a",".nav a"];
selectors.forEach(function(sel){document.querySelectorAll(sel).forEach(function(a){
if(a.querySelector("i"))return;var href=a.getAttribute("href")||a.getAttribute("data-path")||"";
var key=normalize(href);var entry=map[key]||map[href];
if(entry&&entry.icon){var i=document.createElement("i");i.className="fa-solid fa-"+entry.icon;
a.insertBefore(i,a.firstChild);a.insertBefore(document.createTextNode(" "), a.children[1]);}});});
document.querySelectorAll("div.embed-placeholder[data-embed-src]").forEach(function(d){
var src=d.getAttribute("data-embed-src");if(!src)return;var iframe=document.createElement("iframe");
iframe.src=src;iframe.frameBorder=0;iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
iframe.allowFullscreen=true;iframe.loading="lazy";iframe.style.width="100%";iframe.style.height=d.getAttribute("data-embed-height")||"360px";
d.parentNode.replaceChild(iframe,d);});});})();