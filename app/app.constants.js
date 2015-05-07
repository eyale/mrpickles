(function () {
    angular
        .module('mrApp')
        .constant('DB', new Firebase("https://glaring-fire-4469.firebaseio.com/"))
        .constant('FIREBASE_URL', 'https://glaring-fire-4469.firebaseio.com/')
    ;

})();