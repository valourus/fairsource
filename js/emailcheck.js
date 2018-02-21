var EmailChecker = (function () {
    let Public = {};
    let self = {};

    window.onload = function (){
        self.input = document.getElementById("email");
        self.input.addEventListener("keypress", _keyPress);
        self.input.addEventListener("keyup", _keyUp);
    }

    function _keyPress () {
        _changeStyle(self.input.value);
    }

    function _keyUp() {
        _changeStyle(self.input.value);
    }

    function _changeStyle(value){
        if(_isEmail(value)){
            self.input.style.backgroundColor = "lightgreen";
        }else{
            self.input.style.backgroundColor = "#4B8813";
        }
    }

    function _isEmail(email){
        let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return validEmail.test(email);
    }

    return Public;
})();