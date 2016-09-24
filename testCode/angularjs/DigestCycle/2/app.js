(function(){
	'use strict'
	angular.module('CounterApp',[])
	.controller('CounterController',CounterController);

	CounterController.inject = ['$scope','$timeout'];
	function CounterController($scope,$timeout) {
		// body...
		$scope.counter = 0;

		// $scope.upCounter = function () {
		// 	setTimeout(function () {
		// 		// body...
		// 	$scope.counter++;
		// 	console.log("counter!");
		// 	$scope.$digest();
		// 	},1000);
		// };
		// $scope.upCounter = function () {
		// 	setTimeout(function () {
			
		// 		$scope.$apply(function () {
			
		// 			$scope.counter++;
		// 			console.log("counter!");
		// 	});

		// 	},1000);
		// };
		$scope.upCounter = function () {
			// body...
			$timeout(function () {
				// body...
				$scope.counter++;
				console.log("counter!");
			},1000);
		}


	}
})();