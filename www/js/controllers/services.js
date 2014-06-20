'use strict';

/* Reminder Controllers */
angular.module("myApp.controllers.services", [])
.config(["$routeProvider", function($routeProvider){
	$routeProvider.when('/services', {templateUrl: 'partials/services.html', controller: 'ServicesCtrl'});
	$routeProvider.when('/services/medicine', {templateUrl: 'partials/services-medicine.html', controller: 'ServicesMedicineCtrl'});
	$routeProvider.when('/services/shop', {templateUrl: 'partials/services-shop.html', controller: 'ServicesShopCtrl'});
	$routeProvider.when('/services/hairdressing', {templateUrl: 'partials/services-hairdressing.html', controller: 'ServicesHairdressingCtrl'});
    $routeProvider.when('/services/urgency', {templateUrl: 'partials/services-urgency.html', controller: 'ServicesUrgencyCtrl'});
    $routeProvider.when('/services/reproduction', {templateUrl: 'partials/services-reproduction.html', controller: 'ServicesReproductionCtrl'});
	$routeProvider.when('/services/physiotherapy', {templateUrl: 'partials/services-physiotherapy.html', controller: 'ServicesPhysiotherapyCtrl'});
}])
.controller("ServicesCtrl", ["$scope", function($scope){

    $scope.changeHeaderTitle("Nuestros servicios");
    $scope.addHeaderLeftButton("Menu", "#main-menu", "ui-icon-bars");    
}])
.controller("ServicesMedicineCtrl", ["$scope", function($scope){

	$scope.changeHeaderTitle("Medicina Vet");
    $scope.addHeaderLeftButton("Servicios", "#/services", "ui-icon-arrow-l");
}])
.controller("ServicesShopCtrl", ["$scope", function($scope){

	$scope.changeHeaderTitle("Tienda");
    $scope.addHeaderLeftButton("Servicios", "#/services", "ui-icon-arrow-l");
}])
.controller("ServicesHairdressingCtrl", ["$scope", function($scope){

	$scope.changeHeaderTitle("Peluquería");
    $scope.addHeaderLeftButton("Servicios", "#/services", "ui-icon-arrow-l");
}])
.controller("ServicesUrgencyCtrl", ["$scope", function($scope){

	$scope.changeHeaderTitle("UCI Urgencias");
    $scope.addHeaderLeftButton("Servicios", "#/services", "ui-icon-arrow-l");
}])
.controller("ServicesReproductionCtrl", ["$scope", function($scope){

	$scope.changeHeaderTitle("Reproducción");
    $scope.addHeaderLeftButton("Servicios", "#/services", "ui-icon-arrow-l");
}])
.controller("ServicesPhysiotherapyCtrl", ["$scope", function($scope){

	$scope.changeHeaderTitle("Fisioterapia");
    $scope.addHeaderLeftButton("Servicios", "#/services", "ui-icon-arrow-l");
}]);