'use strict';

/* Directives */


angular.module('myApp.directives', [])
	.directive('applyJqm', function() {
	    return {
	      link: function(scope, elm, attr) {
			      elm.parent().trigger('create');
			    }
		};
   	})
   	.directive('applyJqmList', function () {
  	 return {
      	link: function (scope, elm, attr) {
  	             if (scope.$last) { 
      	             elm.parent().listview('refresh');
      	         }
              }
        };
    })
    .directive('applyJqmSelectRefresh', function(){
      return{
        restrict: 'A',
        link: function(scope, element, attrs) {
          var unbindWatcher = scope.$watch(attrs.ngModel, function(newValue, oldValue) {
           if (newValue != undefined && oldValue === undefined) {
              element.selectmenu('refresh');
              unbindWatcher();
            }
          });
        }      
      }  
    })
    .directive('mainMenu', function() {
   	return {
   		templateUrl: 'partials/common/main-menu.html'
     };
   });
