(function () {
	'use strict';
	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController',ToBuyController)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
	


	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var buyCtl = this;

		buyCtl.items = ShoppingListCheckOffService.getToBuyList();
		buyCtl.toBuy = function(itemIndex){
			// console.log(1);
			ShoppingListCheckOffService.buySomeThing(itemIndex);
		};
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var boughtCtl = this;

		boughtCtl.items = ShoppingListCheckOffService.getBoughtList();
	}

	function ShoppingListCheckOffService() {
		var service = this;
		
		var toBuy = [
  			{ "name": "cookies", "quantity": 1 },
  			{ "name": "cookies", "quantity": 2 },
  			{ "name": "cookies", "quantity": 3 },
  			{ "name": "cookies", "quantity": 4 },
  			{ "name": "cookies", "quantity": 5 }
		];

		var bought = [
		];

		service.buySomeThing = function(index){

			var readyToBuy = toBuy.splice(index,1);
			console.log(readyToBuy);
			var item = {
				name: readyToBuy[0].name,
				quantity: readyToBuy[0].quantity
			}

			bought.push(item);

		};

		service.getToBuyList = function(){
			return toBuy;
 		};

		service.getBoughtList = function(){
			return bought;
		}

	}
})();