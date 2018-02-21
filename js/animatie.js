var blocks = document.getElementsByClassName('expertise__block');
var section = document.getElementsByClassName('expertise')[0];

window.addEventListener('scroll', function() {

    var count = 1;
    for(var i = 0;i < blocks.length;i++){

        if(elementInViewport(blocks[i])){

            blocks[i].style.opacity = '0.7';
            blocks[i].style.left = '0px';
        }else{

            if(count % 2 === 0){
                blocks[i].style.left = '125px';
            }else{
                blocks[i].style.left = '-125px';
            }
            blocks[i].style.opacity = '0';
        }
    }
});

//Module *****************************************************
//
// var BlocksSlideIn = (function () {
//     var Public = {};
//     var self = {};
//
//     self.blocks = document.getElementsByClassName('expertise__block');
//     console.log(self.blocks);
//
//     window.addEventListener('scroll', function () {
//         Public.onScroll();
//         console.log("help");
//     });
//
//     Public.onScroll = function(){
//         count = 1;
//         for(var block of self.blocks){
//             console.log(elementInViewport(block));
//             if(elementInViewport(block)){
//
//                 block.style.opacity = '0.7';
//                 block.style.left = '0px';
//             }else{
//
//                 if(count % 2 === 0){
//                     block.style.left = '125px';
//                 }else{
//                     block.style.left = '-125px';
//                 }
//                 block.style.opacity = '0';
//             }
//             count++;
//         }
//     };
//
//     return Public;
// })();