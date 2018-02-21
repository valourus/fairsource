var ArticlesShow = (function(){

    Public = {};
    self = {};
    self.articles = document.getElementsByClassName('linksandresources__article');
    self.button = document.getElementById('showbutton');

    Public.displayControl = function(){

        if(self.button.innerText === 'Load more'){
            document.getElementById('links').style.height = "1520px";
            document.getElementById('links').style.transition = "0.5s";
            self.articles[8].style.display = 'block';
            self.articles[7].style.display = 'block';
            self.articles[6].style.display = 'block';
            self.button.innerText = 'Show less';
        }else{
            document.getElementById('links').style.height = "1150px";
            document.getElementById('links').style.transition = "0.5s";
            self.articles[8].style.display = 'none';
            self.articles[7].style.display = 'none';
            self.articles[6].style.display = 'none';
            self.button.innerText = 'Load more';
        }
    };

    return Public;
})();