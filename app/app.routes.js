(function () {
	'use strict';

	angular
		.module('mrpicklesApp')
		.config(appRouterConfig)

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
			;
	}

})();