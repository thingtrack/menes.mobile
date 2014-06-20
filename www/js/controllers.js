'use strict';

/* Controllers */
angular.module('myApp.controllers', [
    'myApp.controllers.home',
    'myApp.controllers.about',
    'myApp.controllers.facilities',
    'myApp.controllers.location',
    'myApp.controllers.services',
    'myApp.controllers.reminder',
    'myApp.controllers.suggestions'
])
.controller('MainCtrl', ['$scope', '$window', function($scope, $window) {

    function Button(text, url, icon) {
        this.text = text;
        this.url = url;
        this.icon = icon;
    }

    $scope.headerTitle;
    $scope.headerLeftButtons = [];
    $scope.headerRightButtons = [];

    $scope.changeHeaderTitle = function(title) {
        $scope.headerTitle = title;
    };

    $scope.addHeaderLeftButton = function(text, url, icon){
        $scope.headerLeftButtons.push(new Button(text, url, icon));
    }

    $scope.addHeaderRightButton = function(text, url, icon){
        $scope.headerRightButtons.push(new Button(text, url, icon));
    }

    $scope.$on('$locationChangeStart', function(scope, next, current){
        
        // Clean header
        $scope.headerTitle = "";
        $scope.headerLeftButtons.length=0;
        $scope.headerRightButtons.length=0;
    });
}]);