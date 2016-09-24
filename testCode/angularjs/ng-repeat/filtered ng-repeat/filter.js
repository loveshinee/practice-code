var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);


function NumberFilter(value) {
	// body...
	return value > 5 ;
}

var arrayFilter = numberArray.filter(NumberFilter);
console.log("filter Number array: ", numberArray);


var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];
console.log("Shopping List: ", shoppingList);