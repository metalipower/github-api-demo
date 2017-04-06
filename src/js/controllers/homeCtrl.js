app.controller('homeCtrl', ['githubServices', function(githubServices){
    var ctrl = this;
    ctrl.mensagem404 = '404 - Nenhum usuário encontrado';
    ctrl.search = function(){
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