(function() {
    'use strict';

    angular
        .module('mrApp')
        .controller('MainCtrl', MainCtrl);

    function MainCtrl($scope, localStorageService) {
        var pipeInStore = localStorageService.get('pipes');
        $scope.pipes = pipeInStore || [];
        $scope.$watch('pipes', function() {
            localStorageService.set('pipes', $scope.pipes);
        }, true);
    }
})();
