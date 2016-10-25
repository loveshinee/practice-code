/*
* create a component called that shows all of the menu items for a particular category
*/
(function () {
	'use strict';

	angular.module('MenuApp')
	.component('eachItem',{
		templateUrl:'src/category/templates/item-detail.template.html',
		bindings:{
			item: '<'
		}
	});
})();