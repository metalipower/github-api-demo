app.component('userRepos', {
    templateUrl: 'components-html/user-repos.html',
    bindings: {
        username: '='
    },
    controller: function(githubServices){
        var ctrl = this;
        ctrl.mensagem404 = 'Não foi possível obter a lista de repositórios ou esse usuário não tem repositórios ainda.';

        githubServices.findUserRepos(ctrl.username, 0, 1, function (status, repos) {
            if (status === 404) {
                ctrl.showMensagem404 = true;
                return;
            }
            ctrl.repos = repos;
        });

    }
});