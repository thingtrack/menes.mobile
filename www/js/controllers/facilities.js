'use strict';

/* Facilities Controllers */
angular.module("myApp.controllers.facilities", [])
.config(["$routeProvider", function($routeProvider){
	$routeProvider.when('/facilities', {templateUrl: 'partials/facilities.html', controller: 'FacilitiesCtrl'});
}])
.controller("FacilitiesCtrl", ["$scope", "$http", function($scope, $http){

    $scope.changeHeaderTitle("Instalaciones");
    $scope.addHeaderLeftButton("Menu", "#main-menu", "ui-icon-bars");
	
	$scope.slides = [
		'img/hospital-access_m.jpg',
		'img/operating-room_m.jpg',
		'img/ultrasound_m.jpg',		
		'img/laboratory_m.jpg',
		'img/operating-microscope_m.jpg',
		'img/cat-hospitalization_m.jpg',
		'img/digital-radiology_m.jpg',
		'img/sperm-bank_m.jpg',
		'img/hospitalization_m.jpg',
		'img/big-dog-hospitalization_m.jpg',
		'img/endoscopy_m.jpg',
		'img/monitoring-operating-room_m.jpg',	
		'img/feline-cages_m.jpg',
		'img/physiotherapy_m.jpg',	
		'img/consultation_m.jpg'	
	];   
}]);