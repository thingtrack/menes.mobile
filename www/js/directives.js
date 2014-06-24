'use strict';

/* Directives */


angular.module('myApp.directives', [])
	.directive('applyJqm', function() {
	    return {
	      link: function(scope, elm, attrs) {
			      elm.parent().trigger('create');
			    }
		};
   	})
   	.directive('applyJqmList', function () {
  	 return {
      	link: function (scope, elm, attrs) {
  	             if (scope.$last) { 
      	             elm.parent().listview('refresh');
      	         }
              }
        };
    })
    .directive('applyJqmListRefresh', function(){
      return{
        link: function(scope, elm, attrs) {
           scope.$watch(attrs.ngModel, function() {
              elm.listview('refresh');
          });
        }      
      }  
    })
    .directive('applyJqmSelectRefresh', function(){
      return{
        link: function(scope, elm, attrs) {
          var unbindWatcher = scope.$watch(attrs.ngModel, function(newValue, oldValue) {
           if (newValue != undefined && oldValue === undefined) {
              elm.selectmenu('refresh');
              unbindWatcher();
            }
          });
        }      
      }  
    })
    .directive('applyJqmPopup', function(){
      return {
        link: function(scope, elm, attrs) {
            var dialogId = '#' + attrs.applyJqmPopup;
            elm.bind('click', function(e) {
                $(dialogId).popup('open');                
            });
        }
      };
    })
    .directive('mainMenu', function() {
   	return {
   		templateUrl: 'partials/common/main-menu.html'
     };
   })
   .directive('reminderWarningPopup', function() {
    return {
      templateUrl: 'partials/common/popup-reminder-warning.html'
     };
   });
