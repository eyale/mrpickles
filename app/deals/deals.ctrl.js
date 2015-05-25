    (function() {
        'use strict';
        angular.module('mrApp')
            .controller('DealsCtrl', DealsCtrl);

        DealsCtrl.$inject = ['$scope', '$firebaseArray'];


        function DealsCtrl($scope, $firebaseArray) {
            var vm = this;
            var ref = new Firebase('https://glaring-fire-4469.firebaseio.com/deals');
            vm.deals = $firebaseArray(ref);

            vm.addDeal = addDeal;
            vm.deleteDeal = deleteDeal;
            vm.swallAddForm = swallAddForm;

            function swallAddForm() {
               alert('here must be input');
            };

            function addDeal() {
                vm.deals.$add({
                    personName: vm.personName,
                    companyName: vm.companyName,
                    dealTitle: vm.dealTitle,
                    dueDate: vm.dueDate
                }).then(function() {
                    vm.personName = '';
                    vm.companyName = '';
                    vm.dealTitle = '';
                    vm.dueDate = '';
                });
            };

            function deleteDeal(index) {
                vm.deals.$remove(index);
            };


            vm.isRemoveEl = false;
            
            vm.showForm = function() {
                if (!vm.isRemoveEl) {
                    vm.isRemoveEl = true;
                } else {
                    vm.isRemoveEl = false;
                };
            };

        }
    })();
