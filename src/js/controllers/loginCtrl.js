app.controller('loginCtrl', ['authService', function(authService){
    var ctrl = this;
    ctrl.authService = authService;
}]);