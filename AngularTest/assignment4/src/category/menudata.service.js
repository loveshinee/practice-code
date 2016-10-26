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
		var deferred = $q.defer();
		service.getAllCategories = function(){
			var promise = $http({
				method: 'GET',
				url: 'https://davids-restaurant.herokuapp.com/categories.json'
			})

			promise.then(function(response) {
				deferred.resolve(
					response.data
				);
			});
			return deferred.promise;
		};
		// var deferred2 = $q.defer();
		service.getItemsForCategory = function(item){
			var deferred2 = $q.defer();
			var promise = $http({
				method: 'GET',
				url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category='+item
			});
			promise.then(function(response){
				deferred2.resolve(response.data.menu_items);
			});
			// console.log(deferred.promise);
			return deferred2.promise;
		}
	}
})();