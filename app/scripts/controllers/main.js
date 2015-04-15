(function() {
    'use strict';

    angular
        .module('mrApp')
        .controller('MainCtrl', MainCtrl);

    function MainCtrl($scope, PubNub) {
        PubNub.init({
            publish_key:'pub key',
            subscibe_key:'sub key',
            uuid:'an_optional_user_uuid'
        })
    }
})();
