var app = angular.module('DBJApp', ['ngAnimate', 'ngSanitize', 'ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {templateUrl: 'views/home.html'})
    .when('/admin', {templateUrl: 'views/admin.html', controller : 'adminCtrl'})
})
