function strToColor(str) {
    var hashed = hash(str)
    var R = hashed.substring(0,2)
    var G = hashed.substring(2,4)
    var B = hashed.substring(4,6)

    return '#' + R + G + B;
}

function randomColorAsHexStr() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function getRGB(str){
    // return strToColor(str);
    return randomColorAsHexStr();
}

function buildIdenticon(str) {
    var color = getRGB(str)

    return "<div style='background-color:" + color
           + "; width: 10px; height:10px; float:left; margin: 2px 2px 0px;' />"
}


$("a[href^=user]").each(function () {
    var str = $(this).text();
    var identicon = buildIdenticon(str);

    $(this).append(identicon)
})
