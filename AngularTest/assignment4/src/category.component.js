/*
* create component called categories that shows all available 
* cateogries in the menu to the user
*/
(function () {
	'use strict';

	angular.module('MenuApp')
	.component('category',{
		templateUrl:'src/templates/category.tempalte.html',
		bindings:{
			categories: '<'
		}
	});
})();