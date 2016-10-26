(function(){
	'use strict';

	angular.module('MenuApp')
	.controller('ItemDetailController',ItemDetailController);

	ItemDetailController.$inject = ['itemList'];
	function ItemDetailController(itemList){
		var itemDetail = this;
		itemDetail.itemList = itemList;
		console.log(itemList);
	}
})();