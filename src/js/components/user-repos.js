app.component('userRepos', {
    templateUrl: 'components-html/user-repos.html',
    bindings: {
        username: '=',
        publicRepos: '='
    },
    controller: function(githubServices){
        var ctrl = this;
        ctrl.limit = 5;
        ctrl.page = 1;
        ctrl.totalPages;
        ctrl.mensagem404 = 'Não foi possível obter a lista de repositórios ou esse usuário não tem repositórios ainda.';
        ctrl.$onInit = function(){
            if(ctrl.publicRepos === 0){
                ctrl.exibirMensagemRepos404 = true;
                return;
            }
            ctrl.exibirMensagemRepos404 = false;
            ctrl.totalPages = Math.ceil(ctrl.publicRepos / ctrl.limit);
            findUserRepos();
        };
        var findUserRepos = function(username){
            githubServices.findUserRepos(ctrl.username, ctrl.page, ctrl.limit, function (status, repos) {
                if (status === 404) {
                    ctrl.exibirMensagemRepos404 = true;
                    return;
                }
                ctrl.exibirMensagemRepos404 = false;
                ctrl.repos = repos;
            });
        };
        ctrl.pageNext = function(){
            ctrl.page++;
            findUserRepos();
        };
        ctrl.pageBack = function(){
            ctrl.page--;
            findUserRepos();
        };
    }
});