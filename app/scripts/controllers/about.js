'use strict';

/**
 * @ngdoc function
 * @name mrpicklesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mrpicklesApp
 */
angular.module('mrpicklesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
