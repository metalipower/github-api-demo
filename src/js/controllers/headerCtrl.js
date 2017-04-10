app.controller('headerCtrl', ['authService', function(authService){
    var ctrl = this;
    ctrl.authService = authService;
}]);