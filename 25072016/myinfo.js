(function(e,t,n,r,i,s,o){e["GoogleAnalyticsObject"]=i;e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].l=1*new Date;s=t.createElement(n),o=t.getElementsByTagName(n)[0];s.async=1;s.src=r;o.parentNode.insertBefore(s,o)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create","UA-58195709-1","auto");ga("send","pageview");

(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/platform.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();

  function openMenu() {
    var e = document.getElementById("cssmenu");
    "inline-block" !== e.style.display ? e.style.display = "inline-block" : e.style.display = "none";
    var e = document.getElementById("menu-icon");
    "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
    var e = document.getElementById("close-menu-icon");
    "block" !== e.style.display ? e.style.display = "block" : e.style.display = "none";
    var e = document.getElementById("search-sosprofil");
    "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
    var e = document.getElementById("search-icon");
    "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
  };
function makemeSticky(e){function t(){var e=s.getBoundingClientRect();e.top<0?(n.className=a+" makesticking",n.style.width=i+"px"):n.className=a}var n=document.getElementById(e),s=document.createElement("div");n.parentNode.insertBefore(s,n);var i=n.offsetWidth,a=n.className+" makesticky";window.addEventListener("scroll",t,!1)}makemeSticky("judulblog");

var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} };

var imgDefer=document.getElementsByTagName("img");for(var i=0;i<imgDefer.length;i++){if(imgDefer[i].getAttribute("data-src")){imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src"))}};

var gcseDiv=document.getElementById("gcsengine");gcseDiv.innerHTML="<gcse:searchbox></gcse:searchbox>",function(){var e="partner-pub-2124282593506094:4825109769",t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=("https:"==document.location.protocol?"https:":"http:")+"//www.google.com/cse/cse.js?cx="+e;var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(t,c)}();
function myFunction() {
    document.getElementById("gcsresults").innerHTML = "<gcse:searchresults></gcse:searchresults>";
}myFunction();

var button=document.querySelector("#menu-search");button.addEventListener("click",function(){var t=document.querySelector(button.getAttribute("data-target"));t.style.right="0"==t.style.display?"-340px":"0"});
var button=document.querySelector("#close-menu");button.addEventListener("click",function(){var t=document.querySelector(button.getAttribute("data-target"));t.style.right="-340px"==t.style.display?"0":"-340px"});

  function openSosprofil() {
    var e = document.getElementById("sos-profil");
    "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
    var e = document.getElementById("search-box");
    "block" !== e.style.display ? e.style.display = "block" : e.style.display = "none";
    var e = document.getElementById("search-icon");
    "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
    var e = document.getElementById("close-icon");
    "block" !== e.style.display ? e.style.display = "block" : e.style.display = "none";
  };
function openMobilemenu(){var e=document.getElementById("mobile-menu-nav");"block"!==e.style.display?e.style.display="block":e.style.display="none"};


