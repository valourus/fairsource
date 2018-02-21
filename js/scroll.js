var ScrollModule = (function () {
    var scrollY = 0;
    var distance
    var upInterval;
    var downInterval;
    var scrollLength;

    var autoScrollTo = function(div){
        clearInterval(upInterval);
        clearInterval(downInterval);
        distance = 100;
        var currentY = window.pageYOffset;
        var divY = document.getElementById(div).offsetTop;

        if (currentY > divY) {
            scrollLength = currentY - divY;
            distance = scrollLength / 25;
            _up(divY)
        }
        else if (currentY < divY) {
            scrollLength = divY - currentY;
            distance = scrollLength / 25;
            _down(divY)

        }
    };

    var _up = function (divY) {
        upInterval = setInterval(function () {
            _autoScrollUp(divY)
        }, 20);
    }

    var _down = function (divY) {
        downInterval = setInterval(function () {
            _autoScrollDown(divY)
        }, 20);
    }

    var _autoScrollUp = function (divY) {
        var currentY = window.pageYOffset;
        if (currentY >= divY) {
            scrollY = currentY - distance;
            window.scroll(0, scrollY);

        } else {
            clearInterval(upInterval);
        }
    }

    var _autoScrollDown = function (divY) {
        var currentY = window.pageYOffset;
        if (currentY <= divY - 100) {
            scrollY = currentY + distance;
            window.scroll(0, scrollY);


        } else {
            clearInterval(downInterval);
        }
    }

    return{
        autoScroll: autoScrollTo
    }
})();