(function() {
    'use strict';
    angular.module('mrApp')
        .controller('DealsCtrl', DealsCtrl);

    DealsCtrl.$inject = ['$scope', '$firebaseArray'];


    function DealsCtrl($scope, $firebaseArray) {
    }

})();
