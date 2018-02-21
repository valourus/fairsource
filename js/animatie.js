/*var blocks;
var section;
window.onload = function () {
    blocks = document.getElementsByClassName('expertise__block');
    section = document.getElementsByClassName('expertise')[0];
    console.log(blocks);
};

window.addEventListener('scroll', function() {

    let count = 1;
    for(let block of blocks){

        if(elementInViewport(block)){

            block.style.opacity = '0.7';
            block.style.left = '0px';
        }else{

            if(count % 2 === 0){
                block.style.left = '125px';
            }else{
                block.style.left = '-125px';
            }
            block.style.opacity = '0';
        }
        count++;
    }
});*/

//Module *****************************************************

var BlocksSlideIn = (function () {
    var Public = {};
    var self = {};

    self.blocks = document.getElementsByClassName('expertise__block');
    console.log(self.blocks);

    window.addEventListener('scroll', function () {
        Public.onScroll();
    });

    Public.onScroll = function(){
        let count = 1;
        for(let block of self.blocks){

            if(elementInViewport(block)){

                block.style.opacity = '0.7';
                block.style.left = '0px';
            }else{

                if(count % 2 === 0){
                    block.style.left = '125px';
                }else{
                    block.style.left = '-125px';
                }
                block.style.opacity = '0';
            }
            count++;
        }
    }

    return Public;
})();