var imgDefer=document.getElementsByTagName("img");for(var i=0;i<imgDefer.length;i++){if(imgDefer[i].getAttribute("data-src")){imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src"))}};

function resizeThumbnail(parentID, size, size2) {
    var parent = document.getElementById(parentID),
        image = parent.getElementsByTagName('img');
    for (var i = 0; i < image.length; i++) {
        image[i].src = image[i].src.replace(/\/s1600/, "/s" + size + "");
        image[i].width = size;
        image[i].height = size2;
    }
}
resizeThumbnail('Blog1', 300, 170);resizeThumbnail('PopularPosts1', 280, 140);

