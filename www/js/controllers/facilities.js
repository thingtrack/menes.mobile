'use strict';

/* Facilities Controllers */
angular.module("myApp.controllers.facilities", [])
.config(["$routeProvider", function($routeProvider){
	$routeProvider.when('/facilities', {templateUrl: 'partials/facilities.html', controller: 'FacilitiesCtrl'});
}])
.controller("FacilitiesCtrl", ["$scope", "$http", function($scope, $http){

    $scope.changeHeaderTitle("Instalaciones");
    $scope.addHeaderLeftButton("Menu", "#main-menu", "ui-icon-bars");

    $scope.sportImages = {};

	$http.get('data/gallery.json').success(function(data) {
	  		$scope.images = data;
	});    
}]);