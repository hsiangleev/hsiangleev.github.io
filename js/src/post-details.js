// build time:Wed Apr 10 2019 15:43:48 GMT+0800 (GMT+08:00)
$(document).ready(function(){function e(){var e=".post-toc";var t=$(e);var a=".active-current";function i(){$(e+" "+a).removeClass(a.substring(1))}t.on("activate.bs.scrollspy",function(){var a=$(e+" .active").last();i();a.addClass("active-current");t.scrollTop(a.offset().top-t.offset().top+t.scrollTop()-t.height()/2)}).on("clear.bs.scrollspy",i);$("body").scrollspy({target:e})}e()});$(document).ready(function(){var e=$("html");var t=200;var a=$.isFunction(e.velocity);$(".sidebar-nav li").on("click",function(){var e=$(this);var i="sidebar-nav-active";var o="sidebar-panel-active";if(e.hasClass(i)){return}var s=$("."+o);var n=$("."+e.data("target"));a?s.velocity("transition.slideUpOut",t,function(){n.velocity("stop").velocity("transition.slideDownIn",t).addClass(o)}):s.animate({opacity:0},t,function(){s.hide();n.stop().css({opacity:0,display:"block"}).animate({opacity:1},t,function(){s.removeClass(o);n.addClass(o)})});e.siblings().removeClass(i);e.addClass(i)});$(".post-toc a").on("click",function(t){t.preventDefault();var i=NexT.utils.escapeSelector(this.getAttribute("href"));var o=$(i).offset().top;a?e.velocity("stop").velocity("scroll",{offset:o+"px",mobileHA:false}):$("html, body").stop().animate({scrollTop:o},500)});var i=$(".post-toc-content");var o=CONFIG.page.sidebar;if(typeof o!=="boolean"){var s=CONFIG.sidebar.display==="post"||CONFIG.sidebar.display==="always";var n=i.length>0&&i.html().trim().length>0;o=s&&n}if(o){CONFIG.motion.enable?NexT.motion.middleWares.sidebar=function(){NexT.utils.displaySidebar()}:NexT.utils.displaySidebar()}});$(document).ready(function(){$(document.body).append('<div class="lee-increase"><img src=""></div>');var e=false;$(".post-body img:not(.no-increase)").on("click",function(){var t=$(this).attr("src");var a=$(this).attr("alt");$(".lee-increase").show().children("img").attr("src",t).attr("alt",a).width("auto");$(document.body).css("overflow","hidden");e=true});$(".lee-increase").on("click",function(){$(this).hide();$(document.body).css("overflow","auto");e=false});$(document).on("mousewheel DOMMouseScroll",function(t){if(!e)return;t.preventDefault();var a=t.originalEvent.wheelDelta||-t.originalEvent.detail;var i=Math.max(-1,Math.min(1,a));var o=$(".lee-increase img").width();if(i<0){$(".lee-increase img").width(o+50)}else{$(".lee-increase img").width(o-50)}})});
//rebuild by neat 