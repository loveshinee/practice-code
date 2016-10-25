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

		service.getItemsForCategory = function(item){
			// var deferred = $q.defer();
			console.log(2);
			var promise = $({
				method: 'GET',
				url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category='+item
			});
			promise.then(function(response){
				deferred.resolve(response.data);
			});
			console.log(deferred.promise);
			return deferred.promise;
		}
	}
})();