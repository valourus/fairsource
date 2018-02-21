var DrawLineModule = (function() {
    var public = {};
    public.running = false;
    public.c = document.getElementById("canvas");
    public.updateInterval = {};

    var ctx = public.c.getContext("2d");
    var currPos = {x: 480, y: 20};
    var lastPos = {x: 480, y: 20};
    var goal = {x: 590, y: 20};

    public.reset = function() {
        currPos = {x: 480, y: 20};
        lastPos = {x: 480, y: 20};
        goal = {x: 590, y: 20};
        public.running = false;
        clearInterval(public.updateInterval);
    };

    function _draw() {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.moveTo(lastPos.x, lastPos.y);
        ctx.lineTo(currPos.x, currPos.y);
        ctx.stroke();
    }

    public.update = function () {
        lastPos = {x: currPos.x, y: currPos.y};

        if (currPos.x === 590 && currPos.y === 20) {
            goal = {x: 590, y: 380};
        }
        if (currPos.x === 590 && currPos.y === 380) {
            goal = {x: 50, y: 380};
        }
        if (currPos.x === 50 && currPos.y === 380) {
            goal = {x: 50, y: 320};
            setTimeout(function () {
                if (currPos.x === 50 && currPos.y === 320) {
                    lastPos = {x: 120, y: 20};
                    currPos = {x: 120, y: 20};
                    goal = {x: 160, y: 20};
                }
            }, 800);
        }
        if(currPos.x === 150 && currPos.y === 20) {
            clearInterval(public.updateInterval);
        }
        if (currPos.x > goal.x) {
            currPos.x -= 2;
        } else if (currPos.x < goal.x) {
            currPos.x += 2;
        }
        if (currPos.y > goal.y) {
            currPos.y -= 2;
        } else if (currPos.y < goal.y) {
            currPos.y += 2;
        }
        _draw();
    };
    return public;
})();
function elementInViewport(el) {
    let top = el.offsetTop;
    let height = el.offsetHeight;

    while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
    }

    return (
        top >= (window.pageYOffset - 200) && (top + height - 200) <= (window.pageYOffset + window.innerHeight)
    );
}
window.addEventListener("scroll" , function() {
    if(elementInViewport(DrawLineModule.c) && !DrawLineModule.running) {
        DrawLineModule.running = true;
        DrawLineModule.updateInterval = setInterval(DrawLineModule.update, 0);
    } else if(!elementInViewport(DrawLineModule.c)) {
        DrawLineModule.c.getContext("2d").clearRect(0,0,600,400);
        DrawLineModule.reset();
    }
});