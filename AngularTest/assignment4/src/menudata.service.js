/*
*create a service called MenuDataService,on the data module
*two method: getAllCategoties   getItemsForCategory
*/

(function (){
	'use strict';

	angular.module('data')
	.service('MenuDataService',MenuDataService);
	
	MenuDataService.$inject = ['$http'];
	function MenuDataService($http){
		var service = this;
		service.getAllCategories(){
			var categories = $({
				method:'get',
				url:'https://davids-restaurant.herokuapp.com/categories.json'
			});
			return categories;
		}

		service.getItemsForCategory(item){
			var specItem = $({
				method:'get',
				url:'https://davids-restaurant.herokuapp.com/menu_items.json?category='+item
			});
			return specItem;
		}
	}
})();