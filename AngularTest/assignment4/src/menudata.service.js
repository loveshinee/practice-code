/*
*create a service called MenuDataService,on the data module
*two method: getAllCategoties   getItemsForCategory
*/

(function (){
	'use strict';

	angular.module('Data')
	.service('MenuDataService',MenuDataService);
	
	MenuDataService.$inject = ['$http'];
	function MenuDataService($http){
		var service = this;
		service.getAllCategories = function(){
			var categories = $({
				method:'get',
				url:'https://davids-restaurant.herokuapp.com/categories.json'
			});
			return categories;
		};

		service.getItemsForCategory = function(item){
			var specItem = $({
				method:'get',
				url:'https://davids-restaurant.herokuapp.com/menu_items.json?category='+item
			});
			return specItem;
		}
	}
})();