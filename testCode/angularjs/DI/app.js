(function () {
	'use strict';
	angular.module("DIapp",[]).
	controller("DIcontroller",DIcontroller);

	function DIcontroller($scope,$filter){
		$scope.name = "peter";
		$scope.upper = function(){
			var upCase = $filter('uppercase');
			$scope.name = upCase($scope.name);
		};
	}
})();