(function () {
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider','$urlRouteProvider'];

	function RoutesConfig($stateProvider,$urlRouteProvider){

		$urlRouteProvider.otherwise('/');

		$stateProvider
		.state('home',{
			url: '/',
			templateUrl: 'src/templates/home.template.html'
		})
		.state('category',{
			url: '/category',
			templateUrl: 'src/templates/category.template.html',
			controller: 'CategoryController as category',
			resolve: {
				categories: ['MenuDataService',function(MenuDataService){
					return MenuDataService.getAllCategories();
				}]
			}
		})
		.state('item',{
			url: '/item',
			templateUrl: 'src/templates/item.template.html'
		});
	}
})();