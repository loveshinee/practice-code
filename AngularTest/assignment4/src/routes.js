(function () {
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];

	function RoutesConfig($stateProvider,$urlRouteProvider){

		$urlRouteProvider.otherwise('/');

		$stateProvider
		.state('home',{
			url: '/',
			templateUrl: 'src/category/templates/home.template.html'
		})
		.state('mainCategory',{
			url: '/main-category',
			templateUrl: 'src/category/templates/main-category.template.html',
			controller: 'MainCategoryController as mainCategory',
			resolve: {
				categories: ['MenuDataService',function(MenuDataService){
					return MenuDataService.getAllCategories();
				}]
			}
		});
	}
})();