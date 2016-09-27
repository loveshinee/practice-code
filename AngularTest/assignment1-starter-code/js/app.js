(function () {
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){
		$scope.menuList = '';
		$scope.message  = '';
		$scope.checkMenu = function(){
			var menuArray = $scope.menuList.split(",");
			// console.log(menuArray);
			var j=0;
			for(var i=0;i<menuArray.length;i++){				
				if(menuArray[i].trim() != ""){
					j = j+1;
				}				
			}

			if(j == 0){
				$scope.message = "Please enter data first";
			}else if(j > 3){
				$scope.message = "Too much";
			}else if(j >= 1 && j <=3){
				$scope.message = "Enjoy!";
			}
			// console.log(j);
		}
	}
})();