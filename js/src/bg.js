;(function() {
    var obj={
        "1": "https://uploadbeta.com/api/pictures/random",                                          // 必应风景人物
        "2": "https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture",        // 必应每日图片
        "3": "http://acg.bakayun.cn/randbg.php",                                                    // 二次元
        "4": "https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302",                   // 风景（有点慢）
        "11": "https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302&device=mobile",    // 手机 
    }
    var src=obj["4"];
    if($(document.body).width()<768) src=obj["11"];
    $(document.body).append(
        '<div class="lee-bg">'+
            '<img src="'+src+'" />'+
        '</div>'
    )

    $.get("https://v1.hitokoto.cn/",{},function(data) {
        $(".site-description.motion-element").text(data.hitokoto);
    })

})($)