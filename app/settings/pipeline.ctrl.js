(function() {
    'use strict';
    angular.module('mrApp')
        .controller('PipelineSettingsCtrl', PipelineSettingsCtrl);

    PipelineSettingsCtrl.$inject = ['$scope'];


    function PipelineSettingsCtrl($scope) {
        var vm = this;
        vm.check = 'asd';
        vm.sel = null;


        vm.addStage = addStage;
        vm.selEl = selectEl;


        init();

        function addStage(title) {
        	vm.pipeline.push({
        		title: title
        	});
        }

        function selectEl (el) {
        	vm.sel = el;
        }


        function init() {
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

    }

})();
