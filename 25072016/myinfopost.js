  (function() {
    var dr = document.createElement('script');
    dr.type = 'text/javascript'; dr.async = true;
    dr.src = '//share.donreach.com/buttons.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dr);
  })();

!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="http://yourjavascript.com/1810116953/related-posts-dte.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}();

!function(e,n,t){var o,c=e.getElementsByTagName(n)[0];e.getElementById(t)||(o=e.createElement(n),o.id=t,o.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3",c.parentNode.insertBefore(o,c))}(document,"script","facebook-jssdk");

    var disqus_loaded = false;
    function load_disqus() {
(function() {
    var bloggerjs = document.createElement('script');
    bloggerjs.type = 'text/javascript';
    bloggerjs.async = true;
    bloggerjs.src = '//'+disqus_shortname+'.disqus.com/blogger_item.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bloggerjs);
})();
(function() {
    var bloggerjs = document.createElement('script');
    bloggerjs.type = 'text/javascript';
    bloggerjs.async = true;
    bloggerjs.src = '//'+disqus_shortname+'.disqus.com/blogger_index.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bloggerjs);
})();
disqus_loaded = true;
    };
    window.onscroll = function(e) {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 800)) {
            //hit bottom of page
            if (disqus_loaded==false)
                load_disqus()
        }
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
               document.getElementById("cssmenu").className = "add";
          } else {
               document.getElementById("cssmenu").className = "remove";
        }
    };

function videoPlay(anchor){
   anchor.innerHTML = anchor.innerHTML.replace('<!--','').replace('-->','');
   anchor.onclick= null;
   return false;
};

    var divs = ["disqus-box", "blogger-box", "facebook-box"];
    var visibleDivId = null;
    function toggleVisibility(divId) {
      if(visibleDivId === divId) {
        visibleDivId = null;
      } else {
        visibleDivId = divId;
      }
      hideNonVisibleDivs();
    }
    function hideNonVisibleDivs() {
      var i, divId, div;
      for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if(visibleDivId === divId) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      }
    }

$(".commentbtn").click(function (e) {
$(this).addClass("btncurrent").siblings().removeClass("btncurrent");
});

(function($){    
    var newerLink = $('a.blog-pager-newer-link'); 
    var olderLink = $('a.blog-pager-older-link'); 
    $.get(newerLink.attr('href'), function (data) { 
     newerLink.html($(data).find('.post h1.post-title').text());    
    },"html"); 
    $.get(olderLink.attr('href'), function (data2) { 
     olderLink.html($(data2).find('.post h1.post-title').text());    
    },"html"); 
})(jQuery); 

