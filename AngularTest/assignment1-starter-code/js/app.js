(function () {
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController)
	.service('CheckListService',CheckListService);

	LunchCheckController.$inject = ['$scope','CheckListService'];
	function LunchCheckController($scope,CheckListService){
		$scope.menuList = '';
		$scope.message  = '';
		$scope.checkMenu = function(){
			var menuArray = $scope.menuList.split(",");
			// console.log(menuArray);
			$scope.message = CheckListService.checkList(menuArray);

		}
	}

	function CheckListService() {
		var service = this;
		service.message = '';
		
		service.checkList = function (list) {
			// body...
			var j=0;
			for(var i=0;i<list.length;i++){				
				if(list[i].trim() != ""){
					j = j+1;
				}				
			}
			if(j == 0){
				service.message = "Please enter data first";
			}else if(j > 3){
				service.message = "Too much";
			}else if(j >= 1 && j <=3){
				service.message = "Enjoy!";
			}
			return service.message;
		}

		
	}

})();