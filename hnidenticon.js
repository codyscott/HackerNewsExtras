var userNameToColor = { }

function strToColor(str) {
    var hashed = hash(str)
    var R = hashed.substring(0,2)
    var G = hashed.substring(2,4)
    var B = hashed.substring(4,6)

    // bug: these need to be 2 digits alwasys
    return '#' + R + G + B;
}

function randomColorAsHexStr() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function getRGB(str){
    if (!userNameToColor.hasOwnProperty(str)) {
        userNameToColor[str] = randomColorAsHexStr();
    }

    return userNameToColor[str];
}

function embiggenUserName(str) {
    return "<p style='font-size:15'>"+str+"</p>"
}

function buildIdenticon(str) {
    var color = getRGB(str);
    var first = str.charAt(0).toUpperCase();

    return "<div style='background-color:" + color + "; width: 30px; height:30px; float:left; margin: 2px 2px 0px;' >"
         + "<p style='font-weight:bold;font-size:12;text-align:center;vertical-align:middle;color:#FFFFFF''>" + first + "</p>" + "</div>"
}

$("a[href^=user]").each(function () {
    // change margin to fit
    var div = $(this).closest('div');
    div.css('margin-top', '2px')
    div.css('margin-bottom', '5px')

    var str = $(this).text();
    var identicon = buildIdenticon(str);

    $(this).append(identicon)
})
