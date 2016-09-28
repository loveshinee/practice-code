(function () {
	// body...
	'use strict';
	angular.module('ShoppingList',[])
	.controller('ShoppingListController',ShoppingListController)
	.service('ShoppingListService',ShoppingListService)
	.service('WeightLossFilterService',WeightLossFilterService);

	ShoppingListController.$inject=['ShoppingListService'];
	function ShoppingListController(ShoppingListService) {
		var list = this;

		list.items = ShoppingListService.getItems();

		list.name = '';
		list.quantity = '';

		list.addItem = function(){
			ShoppingListService.addItem(list.name,list.quantity);
		};
		list.remove = function(itemIndex) {
			ShoppingListService.remove(itemIndex);
		}
	}

	ShoppingListService.$inject = ['$q','WeightLossFilterService'];
	function ShoppingListService($q,WeightLossFilterService) {
		var service =this;
		var items = [];

		service.addItem = function(name,quantity){
			var namePromise = WeightLossFilterService.checkName(name);
			var quantityPromise = WeightLossFilterService.checkQuantity(quantity);
			// console.log(namePromise);
			$q.all([namePromise,quantityPromise])
			.then(function (reponse) {
				var item = {
					name: name,
					quantity: quantity
				}
				items.push(item);
			})
			.catch(function (errorResponse) {
				console.log(errorResponse.message);
			})
		};
		service.removeItem = function (index) {
			items.splice(index,1);
		};
		service.getItems = function () {
			return  items; 
		}
	}

	WeightLossFilterService.$inject = ['$q','$timeout'];
	function WeightLossFilterService($q, $timeout) {
		var service = this;

		service.checkName = function (name) {
			var deferred = $q.defer();
			var result = {
				message: ""
			}

			$timeout(function() {
				if(name.toLowerCase().indexOf('cookies') === -1){
					deferred.resolve(result);
				}else{
					result.message = "Do not buy cookies";
					deferred.reject(result);
				}
			}, 3000);
			return deferred.promise;

		};
		service.checkQuantity = function(quantity){
			var deferred = $q.defer();
			var result = {
				message: ""
			}
			$timeout(function() {
				if(quantity < 6){
					deferred.resolve(result);
				}else{
					result.message = "Too much";
					deferred.reject(result);
				}
			}, 1000);

			return deferred.promise;
		};

	}
})();