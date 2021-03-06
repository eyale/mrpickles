(function() {
    'use strict';

    angular
        .module('mrApp')
        .config(appRouterConfig)

    appRouterConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$uiViewScrollProvider', '$locationProvider'];

    function appRouterConfig($stateProvider, $urlRouterProvider, $uiViewScrollProvider, $locationProvider) {

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
            .state('internal.deals', {
                url: '/deals',
                views: {
                    'container@internal': {
                        templateUrl: '/deals/deals.html',
                        controller: 'DealsCtrl as deals'
                    }
                }
            })
            .state('internal.activities', {
                url: '/activities',
                views: {
                    'container@internal': {
                        templateUrl: 'activities/activities.html',
                        controller: 'ActivitiesCtrl as Activities'
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
            })
            .state('internal.contact', {
                url: '/contact',
                views: {
                    'container@internal': {
                        templateUrl: 'layout/contact.html'
                    }
                }
            })
            .state('internal.training', {
                url: '/training',
                views: {
                    'container@internal': {
                        templateUrl: 'layout/training.html'
                    }
                }
            });
    }

})();
