'use strict';

// application module definition
angular.module('myDirective',[])
   .directive('myDirective', function() {
     // return the directive definition object
     return {
       // only match this directive to element tags
       restrict: 'E',
       // insert the template matching 'my-template.html'
       templateUrl: 'my-template.html'
	}; 
});
