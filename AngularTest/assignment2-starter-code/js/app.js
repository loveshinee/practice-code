(function () {
	'use strict';
	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController',ToBuyController)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
	var toBuy = [
  		{ "name": "cookies", "quantity": 10 },
  		{ "name": "cookies", "quantity": 10 },
  		{ "name": "cookies", "quantity": 10 },
  		{ "name": "cookies", "quantity": 10 },
  		{ "name": "cookies", "quantity": 10 }
	];


	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		

	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {

	}

	function ShoppingListCheckOffService() {
		var service = this;

		service.moveItem = function () {
			
		} 
		


	}
})();