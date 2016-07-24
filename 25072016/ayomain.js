(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-59235924-1', 'auto');
  ga('send', 'pageview');

!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://use.fontawesome.com/de0d0e5f25.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();

    var disqus_loaded = false;
    function load_disqus() {
    (function() {  // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');       
        s.src = '//ayointernet.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
    disqus_loaded = true;
    };
    window.onscroll = function(e) {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 800)) {
            //hit bottom of page
            if (disqus_loaded==false)
                load_disqus()
        }
    };

var imgDefer=document.getElementsByTagName("img");for(var i=0;i<imgDefer.length;i++){if(imgDefer[i].getAttribute("data-src")){imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src"))}};

window.cookieconsent_options = {"message":"This website uses cookies to ensure you get the best experience on our website","dismiss":"Got it!","learnMore":"More info","link":"http://ayointer.net/privacy-policy-ayointer-net/","theme":"dark-bottom"};
(function(){var e=document.createElement("script");e.async=true;e.type="text/javascript";e.src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.9/cookieconsent.min.js";(document.getElementsByTagName("HEAD")[0]||document.getElementsByTagName("BODY")[0]).appendChild(e)})();

var boxArray=["share-menu"];window.addEventListener("mouseup",function(e){for(var r=0;r<boxArray.length;r++){var o=document.getElementById(boxArray[r]);e.target!=o&&e.target.parentNode!=o&&(o.style.display="none")}});

function makemeSticky(e){function t(){var e=s.getBoundingClientRect();e.top<0?(n.className=a+" makesticking",n.style.width=i+"px"):n.className=a}var n=document.getElementById(e),s=document.createElement("div");n.parentNode.insertBefore(s,n);var i=n.offsetWidth,a=n.className+" makesticky";window.addEventListener("scroll",t,!1)}makemeSticky("text-10");

function togglePanelpost(e){var n=document.getElementById(e),l=document.getElementById("post-panel"),t="none";n.style.display==t?(n.style.display="block",l.innerHTML="<i class='fa fa-minus'></i> Posts"):(n.style.display="none",l.innerHTML="<i class='fa fa-plus'></i> Posts")};
function togglePanelpage(e){var n=document.getElementById(e),l=document.getElementById("page-panel"),t="none";n.style.display==t?(n.style.display="block",l.innerHTML="<i class='fa fa-minus'></i> Pages"):(n.style.display="none",l.innerHTML="<i class='fa fa-plus'></i> Pages")};
function togglePanelcategories(e){var n=document.getElementById(e),l=document.getElementById("categories-panel"),t="none";n.style.display==t?(n.style.display="block",l.innerHTML="<i class='fa fa-minus'></i> Categories"):(n.style.display="none",l.innerHTML="<i class='fa fa-plus'></i> Categories")};

function videoPlay(anchor){
   anchor.innerHTML = anchor.innerHTML.replace('<!--','').replace('-->','');
   anchor.onclick= null;
   return false;
};

var mql = window.matchMedia('screen and (min-width: 880px)');if (mql.matches){function makemeSticky2(e){function t(){var e=s.getBoundingClientRect();e.top<0?(n.className=a+" makesticking2 bounceInUp",n.style.width=i+"px"):n.className=a}var n=document.getElementById(e),s=document.createElement("div");n.parentNode.insertBefore(s,n);var i=n.offsetWidth,a=n.className+" makesticky";window.addEventListener("scroll",t,!1)}makemeSticky2("site-navigation");
};

  (function() {
    var dr = document.createElement('script');
    dr.type = 'text/javascript'; dr.async = true;
    dr.src = '//share.donreach.com/buttons.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dr);
  })();
