/*
*create a service called MenuDataService,on the data module
*two method: getAllCategoties   getItemsForCategory
*/

(function (){
	'use strict';

	angular.module('Data')
	.service('MenuDataService',MenuDataService);
	
	MenuDataService.$inject = ['$http','$q'];
	function MenuDataService($http,$q){
		var service = this;
		service.getAllCategories = function(){
			var deferred = $q.defer();
			var promise = $http({
				method: 'GET',
				url: 'https://davids-restaurant.herokuapp.com/categories.json'
			}).then(function(response) {
				deferred.resolve({
					categories: response.data
				});
			});
			return deferred.promise;
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