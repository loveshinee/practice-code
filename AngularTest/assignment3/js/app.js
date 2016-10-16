(function () {
	'use strict';
	angular.module('NarrowItDownApp',[])
	.controller('NarrowItDownController',NarrowItDownController)
	.service('MenuSearchService',MenuSearchService)
	.directive('foundItems',FoundItems);

	function FoundItems(){
		var ddo = {
			templateUrl: 'list.html',
			scope:{
				found: '<',
				onRemove: '&'
			}	
		};
		return ddo;
	}

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var ctrl  = this;
		ctrl.find = "";	
		ctrl.foundList = [];	 
		ctrl.toFound = function(){
			var promise = MenuSearchService.getMatchedMenuItems(ctrl.find);
			// console.log(ctrl.foundList);
			promise.then(function(response){	
				ctrl.foundList = checkItem(response.data,ctrl.find);
				console.log(ctrl.foundList);
			}).catch(function(error){
				console.log("Something Wrong");
			});
			console.log(ctrl.foundList);

		};

		ctrl.removeItem = function(itemIndex){
			ctrl.foundList.splice(itemIndex,1);
		};

	}

	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http){
		var service = this;
		service.getMatchedMenuItems = function(searchTerm){
			// var foundItems = [];
			var foundItems = $http({
				methd: 'GET',
				url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
			});
			return foundItems;
		} 
	}

	function checkItem(items,searchItem){
		var foundItems = [];
		var itemList  = items.menu_items;
		// console.log(itemList.length);
		for(var i=0; i<itemList.length;i++){
			var name = itemList[i].name;
			if(name.toLowerCase().indexOf(searchItem) !== -1){
				foundItems.push(itemList[i]);
			}
		}
		return foundItems;
	}

})();