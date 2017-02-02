for(var imgEl=document.getElementsByTagName("img"),i=0;i<imgEl.length;i++)imgEl[i].getAttribute("src")&&(imgEl[i].setAttribute("data-src",imgEl[i].getAttribute("src")),imgEl[i].removeAttribute("src"),imgEl[i].setAttribute("src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="));console.log(document.body.innerHTML);
var images=document.getElementsByTagName("img"),i;for(i=0;i<images.length;i++)images[i].className+=" lazyload";

(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();

function showSearchBox() {
  document.getElementById("box").style.display = "block";document.getElementById("close-icon").style.display = "block";document.getElementById("search-icon").style.display = "none";
};
function closeSearchBox() {
  document.getElementById("box").style.display = "none";document.getElementById("search-icon").style.display = "block";document.getElementById("close-icon").style.display = "none";
};

var jump=function(o){if(o)var t=jQuery(this).attr("href").replace("/","");else var t=location.hash;jQuery("html,body").animate({scrollTop:jQuery(t).offset().top-80},4e3,function(){})};jQuery(document).ready(function(o){o(document).on("click","a[href*=#]",jump),location.hash?setTimeout(function(){o("html, body").scrollTop(0).show(),jump()},0):o("html, body").show()});

if (window.matchMedia("(max-width:640px)").matches){!function(n){n.fn.menumaker=function(s){var i=n(this),e=n.extend({format:"dropdown",sticky:!1},s);return this.each(function(){return n(this).find(".button").on("click",function(){n(this).toggleClass("menu-opened");var s=n(this).next("ul");s.hasClass("open")?s.animate({width:"toggle"},"slow").removeClass("open"):(s.animate({width:"toggle"},"slow").addClass("open"),"dropdown"===e.format&&s.find("ul").show())}),i.find("li ul").parent().addClass("has-sub"),multiTg=function(){i.find(".has-sub").prepend('<span class="submenu-button"></span>'),i.find(".submenu-button").on("click",function(){n(this).toggleClass("submenu-opened"),n(this).siblings("ul").hasClass("open")?n(this).siblings("ul").removeClass("open").slideToggle():n(this).siblings("ul").addClass("open").slideToggle()})},"multitoggle"===e.format?multiTg():i.addClass("dropdown"),e.sticky===!0&&i.css("position","fixed"),resizeFix=function(){var s=700;n(window).width()>s&&i.find("ul").show(),n(window).width()<=s&&i.find("ul").hide().removeClass("open")},resizeFix(),n(window).on("resize",resizeFix)})}}(jQuery),function(n){n(document).ready(function(){n("#cssmenu").menumaker({format:"multitoggle"})})}(jQuery);
}