'use strict';

/**
 * @ngdoc overview
 * @name mrpicklesApp
 * @description
 * # mrpicklesApp
 *
 * Main module of the application.
 */
angular
    .module('mrApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'LocalStorageModule'
    ])
    .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('ls');
    }]);
