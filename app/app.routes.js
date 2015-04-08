(function() {
    'use strict';

    angular
        .module('mrApp')
        .config(appRouterConfig)
        .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
            localStorageServiceProvider.setPrefix('ls');
        }])
    appRouterConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$uiViewScrollProvider'];

    function appRouterConfig($stateProvider, $urlRouterProvider, $uiViewScrollProvider) {

        $urlRouterProvider.otherwise('/');


        $stateProvider
            .state('internal', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/layout/internal.html'
                    }
                }
            })
            .state('internal.home', {
                url: '/',
                views: {
                    'container': {
                        templateUrl: 'layout/content.html'
                    }
                }
            })
            .state('internal.settings', {
                url: '/settings',
                views: {
                    'container@internal': {
                        templateUrl: 'layout/settings.html'
                    }
                }
            })
            .state('internal.settings.pipeline', {
                url: '/pipeline',
                views: {
                    'container@internal.settings': {
                        templateUrl: '/settings/pipeline.tpl.html',
                        controller: 'PipelineSettingsCtrl as pipe'
                    }
                }
            });
    }

})();
