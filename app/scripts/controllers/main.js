(function() {
    'use strict';

    angular
        .module('mrApp')
        .controller('MainCtrl', MainCtrl);

    function MainCtrl($scope, $firebaseArray) {
        $scope.massage = $firebaseArray(ref);
        var ref = new Firebase('https://glaring-fire-4469.firebaseio.com/');
    }
})();
