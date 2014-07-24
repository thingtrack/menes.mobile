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

	$scope.slides = [
		'img/hospital-access.jpg',
		'img/operating-room.jpg',
		'img/ultrasound.jpg',		
		'img/laboratory.jpg',
		'img/operating-microscope.jpg',
		'img/cat-hospitalization.jpg',
		'img/digital-radiology.jpg',
		'img/sperm-bank.jpg',
		'img/hospitalization.jpg',
		'img/big-dog-hospitalization.jpg',
		'img/endoscopy.jpg',
		'img/monitoring-operating-room.jpg',	
		'img/feline-cages.jpg',
		'img/physiotherapy.jpg',	
		'img/consultation.jpg'	
	];   
}]);