(function () {
	'use strict';
	angular.module('ShoppingList',[])
	.controller('AddShoppingListController',AddShoppingListController) 
	.controller('ShoppingListShowController',ShoppingListShowController)
	.service('ShoppingListService',ShoppingListService);

	AddShoppingListController.$inject  = ['ShoppingListService'];
	function AddShoppingListController(ShoppingListService){
		var itemAdder = this;
		itemAdder.itemName = '';
		itemAdder.itemQuantity = '';

		itemAdder.addItem = function(){
			ShoppingListService.addItem(itemAdder.itemName,itemAdder.itemQuantity);
		}
	}

	ShoppingListShowController.$inject = ['ShoppingListService'];
	function ShoppingListShowController(ShoppingListService){
		var showItem = this;

		showItem.items   = ShoppingListService.getItems(); 
		showItem.removeItem = function(index){
			ShoppingListService.removeItem(index);
		};
	}

	//create a service
	function ShoppingListService(){
		var service = this;
		var items =[];
		service.addItem = function(name,quantity){
			var item = {
				name: name,
				quantity: quantity
			};
			items.push(item);
		};

		service.removeItem = function(index){
			items.splice(index,1);
		};

		service.getItems = function(){
			return items;
		};
	}
})();