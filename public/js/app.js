var app = angular.module('DBJApp', ['ngAnimate', 'ngSanitize', 'ngRoute', 'ui.tinymce', 'colorpicker.module']).constant('_', window._);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {templateUrl: 'views/home.html'})
    .when('/admin', {templateUrl: 'views/admin.html', controller : 'adminMainCtrl'})
    .when('/articles/:slug', {templateUrl: 'views/article.html', controller : 'articleCtrl'})
    .when('/articles/browse/:sort', {templateUrl: 'views/articlesBrowse.html', controller : 'articleBrowseCtrl'})
    .otherwise({redirectTo: 'views/home.html'})
})
