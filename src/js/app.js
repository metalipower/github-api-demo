var app = angular.module('githubApiDemo', ['auth0.lock', 'angular-jwt', 'ui.router']);

app.config(function($stateProvider, lockProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: '/',
            controller: 'loginCtrl',
            templateUrl: 'views/login.html',
            controllerAs: 'ctrl'
        })
        .state('home', {
            url: '/home',
            controller: 'homeCtrl',
            templateUrl: 'views/home.html',
            controllerAs: 'ctrl'
    });

    lockProvider.init({
        clientID: 'dnbNnsUWqIlJxwadpp7jfK5p5WGzDtnx',
        domain: 'metalipower.auth0.com',
        options: {
            _idTokenVerification: false
        }
    });

    $urlRouterProvider.otherwise('/');

}).run(['$rootScope', 'authService', 'lock', function($rootScope, authService, lock) {
    $rootScope.authService = authService;
    authService.registerAuthenticationListener();
    lock.interceptHash();
}]);