'use strict';

/* Reminder Controllers */
angular.module("myApp.controllers.reminder", [])
.config(["$routeProvider", function($routeProvider){
	$routeProvider.when('/reminder', {templateUrl: 'partials/reminder.html', controller: 'ReminderCtrl'});
	$routeProvider.when('/reminder/newReminder', {templateUrl: 'partials/reminder-new.html', controller: 'ReminderNewCtrl'});
}])
.controller("ReminderCtrl", ["$scope", "$http", "reminderService", function($scope, $http, reminderService){

    $scope.changeHeaderTitle("Recordatorios");
    $scope.addHeaderLeftButton("Menu", "#main-menu", "ui-icon-bars");
    $scope.addHeaderRightButton("Recordatorio", "#/reminder/newReminder", "ui-icon-plus");

	// inside our controller first we initialize our array
    $scope.reminders = reminderService.all();

    $http.get('data/treatment.json').success(function(data) {
        $scope.treatments = data;
    });

    $http.get('data/vaccine.json').success(function(data) {
        $scope.vaccines = data;
    });    

    $scope.getTreatment = function(id){
        
        if($scope.treatments == null){
            return null;
        }

        for (var i = 0; i < $scope.treatments.length; i++) {
            if($scope.treatments[i].id == id)
                return $scope.treatments[i].name;
        }

        return null;
    }

    $scope.getVaccine = function(reminderVaccines){

        if($scope.vaccines == null){
            return null;
        }

        if(reminderVaccines == null){
            return null;
        }

        var vaccines = "";
        for(var i = 0; i < reminderVaccines.length; i++){
            for (var j = 0; j < $scope.vaccines.length; j++) {
                if(reminderVaccines[j] == $scope.vaccines[i].id)
                    vaccines.concat($scope.vaccines[i].name + " ");
            }
        }
        
        return vaccines;
    }

    $scope.checkReminder = function (li, item, index) {
        $scope.$apply(function(){
            reminderService.check(index, true);
        });
    };

    // the action which is called from mobiscroll
    $scope.removeReminder = function (li, item, index) {
        $scope.$apply(function(){
            reminderService.remove(index);
        });
    }
}])
.controller("ReminderNewCtrl", ["$scope", "$location", "$http", "reminderService", function($scope, $location, $http, reminderService){

	$scope.changeHeaderTitle("Nuevo recordatorio");
    $scope.addHeaderLeftButton("Cancelar", "#/reminder", "ui-icon-arrow-l");
    $scope.reminder = {};
    $scope.reminder.treatment = {};

    // charge the selectable controls
    $http.get('data/pet.json').success(function(data) {
        $scope.pets = data;
        $scope.reminder.pet = 0;
    });

    $http.get('data/treatment.json').success(function(data) {
        $scope.treatments = data;
        $scope.reminder.treatment.type = 0;
    });

    $http.get('data/frequency.json').success(function(data) {
        $scope.frequencies = data;
        $scope.reminder.frequency = 0;        
    });

    $http.get('data/vaccine.json').success(function(data) {
        $scope.vaccines = data;
    });        

    $http.get('data/todo-repeat-type.json').success(function(data) {
        $scope.types = data;
    });

    $scope.changeFrequency = function(frequency){

        if(frequency == 0){
            $scope.reminder.quantity = "";
            $('#reminder-quantity').textinput('disable');            
        }else{
            $('#reminder-quantity').textinput('enable');
        }
    }

    $scope.changeTreatment = function(treatment){

        if(treatment != 0){
            $scope.reminder.treatment.vaccines= {};
            $("input[type='checkbox']").attr("checked", false).checkboxradio("refresh");
        }else{
            $scope.reminder.treatment.notes = null;
        }        
    }

    $scope.add = function(reminder){
        reminderService.addWithFrequency(reminder);
        $location.path('/reminder');        
    }
}]);