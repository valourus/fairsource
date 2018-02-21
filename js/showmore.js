var ArticlesShow = (function(){
    Public = {};
    self = {};

    window.onload = function(){
        self.articles = document.getElementsByClassName('linksandresources__article');
        self.button = document.getElementById('showbutton');

        self.button.addEventListener('click',_displayControl);
    };

    function _displayControl(){
        if(self.button.innerText === 'Load more'){

            self.articles[8].style.display = 'block';
            self.articles[7].style.display = 'block';
            self.articles[6].style.display = 'block';
            self.button.innerText = 'Show less';
        }else{

            self.articles[8].style.display = 'none';
            self.articles[7].style.display = 'none';
            self.articles[6].style.display = 'none';
            self.button.innerText = 'Load more';
        }
    }

    return Public;
})();