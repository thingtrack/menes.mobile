'use strict';

/* Home Controllers */
angular.module("myApp.controllers.home", [])
.config(["$routeProvider", function($routeProvider){
	$routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
}])
.controller('HomeCtrl', ["$scope", function($scope){

    $scope.changeHeaderTitle("Principal");
    $scope.addHeaderLeftButton("Menu", "#main-menu", "ui-icon-bars");
}]);