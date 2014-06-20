'use strict';

/* Suggestions Controllers */
angular.module("myApp.controllers.suggestions", [])
.config(["$routeProvider", function($routeProvider){
	$routeProvider.when('/suggestions', {templateUrl: 'partials/suggestions.html', controller: 'SuggestionsCtrl'});
}])
.controller("SuggestionsCtrl", ["$scope", function($scope){

    $scope.changeHeaderTitle("Sugerencias");
    $scope.addHeaderLeftButton("Menu", "#main-menu", "ui-icon-bars");
}]);