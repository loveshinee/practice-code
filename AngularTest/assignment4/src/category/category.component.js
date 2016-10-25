/*
* create component called categories that shows all available 
* cateogries in the menu to the user
*/
(function () {
	'use strict';

	angular.module('MenuApp')
	.component('category',{
		templateUrl: 'src/category/templates/categoryList.template.html',
		bindings: {
			categories: '<'
		}
	});
})();