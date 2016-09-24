(function(){
	'use strict';
	angular.module('MsgApp',[])
	.controller('MsgController',MsgController)
	.filter('loves',LovesFilter)
	.filter('truth',TruthFilter);

	MsgController.inject = ['$scope','$lovesFilter'];
	function MsgController($scope,lovesFilter) {
		// body...
		$scope.sayMessage = function(){
			var msg = "Yaakov likes to eat healthy snacks at night!";
			return msg;
		};
		$scope.sayLovesMessage = function(){
			var msg = "Yaakov likes to eat healthy snacks at night!";
			msg = lovesFilter(msg);
			return msg;
		};
	}

	function LovesFilter() {
		// body...
		return function (input) {
			// body...
			input = input || "";
			input = input.replace("likes","loves");
			return input;
		};
	}

	function TruthFilter() {
		// body...
		return function(input,target,replace){
			input = input || "";
			input = input.replace(target,replace);
			return input;
		};
	}
})();