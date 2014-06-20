'use strict';

/* Location Controllers */
angular.module("myApp.controllers.location", [])
.config(["$routeProvider", function($routeProvider){
	$routeProvider.when('/location', {templateUrl: 'partials/location.html', controller: 'LocationCtrl'});
}])
.controller("LocationCtrl", ["$scope", function($scope){

    $scope.changeHeaderTitle("Ubicación");
    $scope.addHeaderLeftButton("Menu", "#main-menu", "ui-icon-bars");
}]);