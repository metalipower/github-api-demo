var app = angular.module('githubApiDemo', ['auth0.lock', 'angular-jwt', 'ui.router']);

app.config(function($stateProvider, lockProvider, $urlRouterProvider, jwtOptionsProvider) {

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
            controllerAs: 'ctrl',
            data:{
                requiresLogin: true
            }
    });

    lockProvider.init({
        clientID: 'dnbNnsUWqIlJxwadpp7jfK5p5WGzDtnx',
        domain: 'metalipower.auth0.com',
        options: {
            _idTokenVerification: false
        }
    });

    jwtOptionsProvider.config({
        tokenGetter: function() {
            return localStorage.getItem('id_token');
        }
    });

    $urlRouterProvider.otherwise('/');

}).run(['$rootScope', 'authService', 'lock', '$state', function($rootScope, authService, lock, $state) {
    authService.registerAuthenticationListener();
    lock.interceptHash();
    $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
        if (toState.data && toState.data.requiresLogin === true) {
            if (!authService.isAuthenticated()) {
                $state.go('login', { toState: toState, toParams: toParams });
                e.preventDefault();
            }
        }
        if(toState.name === 'login' && authService.isAuthenticated()) {
            $state.go('home', {toState: toState, toParams: toParams});
            e.preventDefault();
        }
    });
}]);