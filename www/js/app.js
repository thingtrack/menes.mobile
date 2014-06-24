'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngDialog',
  'angular-carousel',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'mobiscroll-datetime',
  'mobiscroll-listview',
  'mobiscroll-number'
]).
config(['$compileProvider', function($compileProvider){
  	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
}]).
config(['$routeProvider', function($routeProvider) {
  
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);
