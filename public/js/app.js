var app = angular.module('DBJApp', ['ngAnimate', 'ngSanitize', 'ngRoute', 'ui.tinymce']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {templateUrl: 'views/home.html'})
    .when('/admin', {templateUrl: 'views/admin.html', controller : 'adminMainCtrl'})
    .when('/articles/:slug', {templateUrl: 'views/article.html', controller : 'articleCtrl'})
})
