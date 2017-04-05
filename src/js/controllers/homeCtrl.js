app.controller('homeCtrl', ['githubServices', function(githubServices){
    var ctrl = this;
    ctrl.search = function(){
        githubServices.findUser(ctrl.username, function(status, user){
            if(status === 404){
                return;
            }
            ctrl.user = user;
        });
    };

}]);