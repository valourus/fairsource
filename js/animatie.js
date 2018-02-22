var BlocksSlideIn = (function () {
    var Public = {};
    var self = {};

    self.blocks = document.getElementsByClassName('expertise__block');

    window.addEventListener('scroll', function () {
        Public.onScroll();
    });

    Public.onScroll = function(){
        for(var i = 0;i < self.blocks.length;i++) {
            if(elementInViewport(self.blocks[i])){

                self.blocks[i].style.opacity = '0.7';
                self.blocks[i].style.left = '0px';
            }else{

                if(i % 2 === 0){
                    self.blocks[i].style.left = '125px';
                }else{
                    self.blocks[i].style.left = '-125px';
                }
                self.blocks[i].style.opacity = '0';
            }
        }
    };

    return Public;
})();