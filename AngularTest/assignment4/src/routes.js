(function () {
	'use strict';

	angular.module('menuapp')
	.config(RouteConfig);

	RouteConfig.$inject = ['$stateProvider','$urlRouteProvider'];

	function RouteConfig($stateProvider,$urlRouteProvider){

		$urlRouteProvider.otherwise('/');

		$stateProvider
		.state('home',{
			url: '/',
			templateUrl: 'index.html'
		})
		.state('category',{
			url: '/categories',
			templateUrl: 'src/templates/category.template.html'
		})
		.state('item',{
			url: '/item',
			templateUrl: 'src/templates/item.template.html'
		});
	}
})();