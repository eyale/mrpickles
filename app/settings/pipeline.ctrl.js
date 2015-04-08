(function() {
    'use strict';
    angular.module('mrApp')
        .controller('PipelineSettingsCtrl', PipelineSettingsCtrl);
    var pipesInStore = localStorageService.get('pipeline');

    $scope.pipes = pipesInStore || [];

    $scope.$watch('pipes', function() {
        localStorageService.set('pipes', $scope.pipes);
    }, true);

    PipelineSettingsCtrl.$inject = ['$scope'];


    function PipelineSettingsCtrl($scope) {
        var vm = this;
        vm.check = 'asd';
        vm.pipeline = [{
            title: 'Pipe 1'
        }, {
            title: 'Pipe 2'
        }, {
            title: 'Pipe 3'
        }, {
            title: 'Pipe 4'
        }, {
            title: 'Pipe 5'
        }];

    }

})();
