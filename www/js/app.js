'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngCordova',
  'angular-flexslider',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'mobiscroll-datetime',
  'mobiscroll-listview',
  'mobiscroll-number',
  'LocalStorageModule'
]).
config(['$routeProvider', function($routeProvider) {
  
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);
