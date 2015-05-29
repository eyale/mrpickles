/* global Firebase */
(function () {
    'use strict';
    angular
        .module('mrApp')
        .controller('DealsCtrl', DealsCtrl);

    DealsCtrl.$inject = ['$scope', '$firebaseArray'];


    function DealsCtrl($scope, $firebaseArray) {
        var vm = this;

        vm.deals = $firebaseArray(
            new Firebase('https://glaring-fire-4469.firebaseio.com/deals')
        );
        
        vm.pipeline = $firebaseArray(
            new Firebase('https://glaring-fire-4469.firebaseio.com/pipeline')
        );

        vm.addDeal = addDeal;
        vm.deleteDeal = deleteDeal;
        vm.swallAddForm = swallAddForm;

        function swallAddForm() {
            alert('here must be input');
        };

        function addDeal(addObj) {
            addObj.dueDate = new Date().toString();
            debugger;
            vm.deals.$add(addObj).then(function () {
                addObj = null;
            });;

            // vm.deals.$add({
            //     personName: addObj.personName,
            //     companyName: addObj.companyName,
            //     dealTitle: addObj.dealTitle,
            //     dueDate: addObj.dueDate,
            //     stage: addObj.selected
            // }).then(function () {
            //     addObj = null;
            // });
        };

        function deleteDeal(index) {
            vm.deals.$remove(index);
        };


        vm.isRemoveEl = false;

        vm.showForm = function () {
            if (!vm.isRemoveEl) {
                vm.isRemoveEl = true;
            } else {
                vm.isRemoveEl = false;
            };
        };
//тут застрял
        vm.dragNdrop = dragNdrop;

        function dragNdrop() {
            $(function () { $('#dragable').dragable(); });
        }

    }
})();
