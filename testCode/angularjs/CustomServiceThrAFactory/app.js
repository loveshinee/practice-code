(function () {
	'use strict';
	angular.module('ControllerListApp',[])
	.controller('ShoppingListController1',ShoppingListController1)
	.controller('ShoppingListController2',ShoppingListController2)
	.factory('ShoppingListFactory',ShoppingListFactory);

	ShoppingListController1.$inject = ['ShoppingListFactory'];
	function ShoppingListController1(ShoppingListFactory){
		var list1 = this;
		var ShoppingList = ShoppingListFactory();
		list1.items         = ShoppingList.getItem();
		list1.itemName      = '';
		list1.itemQuantity = '';

		list1.addItem = function(){
			ShoppingList.addItem(list1.itemName,list1.itemQuantity);
		};
		list1.removeItem = function(itemIndex){
			ShoppingList.removeItem(itemIndex);
		};

	}

	ShoppingListController2.$inject = ['ShoppingListFactory'];
	function ShoppingListController2(ShoppingListFactory){
		var list2 = this;
		var ShoppingList = ShoppingListFactory(3);
		list2.items         = ShoppingList.getItem();
		list2.itemName      = '';
		list2.itemQuantity = '';
		list2.addItem = function(){
			try{
				ShoppingList.addItem(list2.itemName,list2.itemQuantity);
			}catch(error){
				list2.errorMessage = error.message;
			}
		};
		list2.removeItem = function(indexItem){
			ShoppingList.removeItem(indexItem);
		};
	}

	function ShoppingListService(maxItems){
		var service = this;
		var items   = [];
		service.addItem = function(itemName,itemQuantity){
			if((maxItems === undefined) || (maxItems !== undefined) && (items.length < maxItems)){
				var item = {
					name: itemName,
					quantity: itemQuantity
				}
				items.push(item);
			}else{
				throw new Error("max items" +maxItems+"reached");
			}
		};
		service.removeItem = function(index){
			items.splice(index,1);
		};
		service.getItem = function(){
			return items;
		}

	}

	function ShoppingListFactory(){
		var factory  = function(maxItems){
			return new ShoppingListService(maxItems);
		}
		return factory;
	}
})();