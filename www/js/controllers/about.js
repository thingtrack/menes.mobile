'use strict';

/* About Controllers */
angular.module("myApp.controllers.about", [])
.config(["$routeProvider", function($routeProvider){
	$routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'});
}])
.controller('AboutCtrl', ["$scope", function($scope){

    $scope.changeHeaderTitle("Sobre nosotros");
    $scope.addHeaderLeftButton("Menu", "#main-menu", "ui-icon-bars");
}]);