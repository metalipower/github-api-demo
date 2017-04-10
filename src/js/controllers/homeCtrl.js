app.controller('homeCtrl', ['githubServices', function(githubServices){
    var ctrl = this;
    ctrl.search = function(){
        //Remove focus of input to hide keyboard on mobile devices
        document.querySelector('#username').blur();
        githubServices.findUser(ctrl.username, function(status, user){
            if(status === 404){
                ctrl.user = '';
                ctrl.exibirMensagem404 = true;
                return;
            }
            ctrl.exibirMensagem404 = false;
            ctrl.user = user;
        });
    };
    ctrl.cleanView = function(){
        delete ctrl.user;
    };
}]);