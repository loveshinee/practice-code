/*
* create a component called that shows all of the menu items for a particular category
*/
(function () {
	'use strict';

	angular.module('menuapp')
	.component('eachItem',{
		templateUrl:'src/templates/item.template.html',
		bindings:{
			items:'<'
		}
	});
})();