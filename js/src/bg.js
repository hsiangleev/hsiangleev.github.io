// build time:Wed Apr 29 2020 09:23:39 GMT+0800 (GMT+08:00)
(function(){var t={1:"https://uploadbeta.com/api/pictures/random",2:"https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture",3:"http://acg.bakayun.cn/randbg.php",4:"https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302",11:"https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302&device=mobile"};var e=t["4"];if($(document.body).width()<768)e=t["11"];$(document.body).append('<div class="lee-bg">'+'<img src="'+e+'" />'+"</div>");$.get("https://v1.hitokoto.cn/",{},function(t){$(".site-description.motion-element").text(t.hitokoto)})})($);
//rebuild by neat 