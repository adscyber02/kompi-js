function resizeThumb(parentID, size, size2) {
    var parent = document.getElementById(parentID),
        image = parent.getElementsByTagName('img');
    for (var i = 0; i < image.length; i++) {
        image[i].src = image[i].src.replace(/\/s1600/, "/s" + size + "");
        image[i].width = size;
        image[i].height = size2;
    }
}
resizeThumb('Blog1', 326, 180);
