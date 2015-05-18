(function() {
    'use strict';
    angular.module('mrApp')
        .controller('DealsCtrl', DealsCtrl);

    DealsCtrl.$inject = ['$scope', '$firebaseArray'];


    function DealsCtrl($scope, $firebaseArray) {
        var vm = this;
        var ref = new Firebase('https://glaring-fire-4469.firebaseio.com/deals');
        vm.deals = $firebaseArray(ref)

        vm.addDeal = addDeal;

        function addDeal() {
            vm.deals.$add({
                personName: vm.personName,
                companyName: vm.companyName,
                dealTitle: vm.dealTitle,
                dueDate: vm.dueDate
            }).then(function(){
                vm.personName = '';
                vm.companyName = '';
                vm.dealTitle ='';
                vm.dueDate= '';
            });
            swal('Your '+ vm.dealTitle +' is added to data base.');
        };


        vm.removeEl = false;
        vm.valueButton = 'Add deal';
        vm.showForm = function() {
            if (!vm.removeEl) {
                vm.removeEl = true;
                vm.valueButton = 'Close form';
            } else {
                vm.removeEl = false;
                vm.valueButton = 'Add deal';
            };
        };

    }

})();
