(function() {
    'use strict';

    angular
        .module('mrApp')
        .controller('MainCtrl', MainCtrl);
        .controller('MainCtrl', function($scope, localStorageService){});
    MainCtrl.$inject = ['$scope'];

    function MainCtrl($scope) {}

})();
