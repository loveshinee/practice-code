(function(){
	'use strict'
	angular.module('CounterApp',[])
	.controller('CounterController',CounterController);

	CounterController.inject = ['$scope'];
	function CounterController($scope) {
		// body...
		$scope.name = "peter";
		$scope.onceCounter = 0;
		$scope.counter = 0;

		$scope.countOnce = function () {
			// body...
			$scope.onceCounter = 1;
		};
		$scope.upCounter = function () {
			$scope.counter++;
		}


		$scope.showNumberOfWatchers = function(){
			console.log("# of wathcers",$scope.$$watchersCount);
		}
		$scope.$watch(function () {
			// body...
			console.log("Digest Loop Fired");
		});
	}
})();