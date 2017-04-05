app.controller('indexController', ['githubServices', function(githubServices){
    var ctrl = this;
    githubServices.findUser('acilabor', function(status, data){
        if(status === 404){
            return;
        }
        ctrl.data = data;
    });
    githubServices.findUserRepos('metalipower', 0, 1, function(status, data){
        if(status === 404){
            return;
        }
        ctrl.data = data;
    });
}]);