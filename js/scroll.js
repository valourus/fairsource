var scrollY = 0;
var distance = 50;
var upInterval;
function autoScrollTo(div) {
    var currentY = window.pageYOffset;
    var divY = document.getElementById(div).offsetTop;
    var bodyHeight = document.body.offsetHeight;
    var yPos = currentY + window.innerHeight;
    if (currentY > divY) {
        up(divY)
    }
    else if(currentY < divY){
        autoScrollDown(divY)
    }
}

function up(divY){
    upInterval = setInterval(function(){autoScrollUp(divY)},20);
}

function autoScrollUp(divY){
    var currentY = window.pageYOffset;
    if(currentY >= divY+distance){
        scrollY = currentY-distance;
        window.scroll(0, scrollY);

    } else{
        clearInterval(upInterval);
    }
}

function autoScrollDown(divY){
    var currentY = window.pageYOffset;
    var animator = setTimeout('autoScrollDown(\''+divY+'\')',20);
    if(currentY <= divY-distance){
        scrollY = currentY+distance;
        window.scroll(0, scrollY);
    } else {
        clearTimeout(animator);
    }
}