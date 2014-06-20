'use strict';

/* Facilities Controllers */
angular.module("myApp.controllers.facilities", [])
.config(["$routeProvider", function($routeProvider){
	$routeProvider.when('/facilities', {templateUrl: 'partials/facilities.html', controller: 'FacilitiesCtrl'});
}])
.controller("FacilitiesCtrl", ["$scope", function($scope){

    $scope.changeHeaderTitle("Instalaciones");
    $scope.addHeaderLeftButton("Menu", "#main-menu", "ui-icon-bars");
}]);