'use strict';

/**
 * @ngdoc function
 * @name directivesTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the directivesTestApp
 */
angular.module('directivesTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
