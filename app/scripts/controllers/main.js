(function() {
    'use strict';

    angular
        .module('mrApp')
        .controller('MainCtrl', MainCtrl);

    function MainCtrl($scope, $firebaseArray) {
        var ref = new Firebase('https://glaring-fire-4469.firebaseio.com/');
        $scope.messages = $firebaseArray(ref);

        $scope.addMessage = function(e) {
            if (e.keyCode === 13 && $scope.msg) {
                var name = $scope.name || 'anonymous';
                $scope.messages.$add({
                    from: name,
                    body: $scope.msg
                });
                $scope.msg = '';
            }
        };
        $scope.pipes = $firebaseArray(ref);
        $scope.addPipeline = function() {
            var pipeName = $scope.pipeName || 'pipeName';
            $scope.pipes.$add({
                from: pipeName
            });
        }
    }
})();
