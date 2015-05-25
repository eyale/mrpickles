(function() {    'use strict';    angular.module('mrApp')        .controller('PipelineSettingsCtrl', PipelineSettingsCtrl);    PipelineSettingsCtrl.$inject = ['$scope', '$firebaseArray'];    function PipelineSettingsCtrl($scope, $firebaseArray) {        var vm = this;        vm.sel = null;        var ref = new Firebase('https://glaring-fire-4469.firebaseio.com/pipeline');        vm.pipeline = $firebaseArray(ref);        vm.addStage = addStage;        vm.isRemove = false;        vm.selectEl = selectEl;        vm.deleteStage = deleteStage;        vm.editStage = editStage;        vm.updateStage = updateStage;        init();        function deleteStage(index) {            vm.pipeline.$remove(index);        }        function updateStage(index, title) {            vm.pipeline[index].title = title;            vm.pipeline.$save(index).then(function() {                vm.createOrUpdate = true;                vm.stageTitle = '';            });        }        function editStage(index) {            alert('Please enter new title!');            vm.editStageIndex = index;            vm.stageTitle = vm.pipeline[vm.editStageIndex].title;            vm.createOrUpdate = false;        }        function addStage(title) {            if (!title) {                alert('Plese enter the name of pipe');            } else {                vm.pipeline.$add({                    title: title                }).then(function() {                    vm.stageTitle = '';                });            }        }        function selectEl(index) {                        vm.sel = vm.pipeline[index];            $scope.isRemove = true;        }        function init() {            vm.stageTitle = '';            vm.createOrUpdate = true;        }    }})();