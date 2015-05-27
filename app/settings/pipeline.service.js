(function() {

    angular
        .module('mrApp')
        .factory('PipelineService', dataService);

    dataService.$inject = ['$firebaseObject', '$firebaseArray', 'DB'];

    function dataService($firebaseObject, $firebaseArray, DB) {
        var _ref = DB.child('pipelines'),
            _obj = $firebaseObject(_ref);
        _obj.getStages = getStages;

        return {
            getOrCreate: getOrCreate
        }

        function getOrCreate(title) {
            title = title || 'Sample';
            var a = _obj.child(title);
        }

        function getStages() {
            return $firebaseArray(
                this.child('stages')
            );
        }

    }
})();