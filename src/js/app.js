var app = angular.module('githubApiDemo', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',
        controllerAs: 'ctrl'
    }).otherwise({redirectTo: '/'});
});