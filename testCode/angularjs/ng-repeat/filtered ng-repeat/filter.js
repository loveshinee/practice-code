

var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);


function NumberFilter(value) {
	return value > 5 ;
}

var arrayFilter = numberArray.filter(NumberFilter);
console.log("filter Number array: ", arrayFilter);


var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];
console.log("Shopping List: ", shoppingList);

var searchPart =  "Bismol";
function ShopFilter(shop){
	return shop.indexOf(searchPart) !== -1;
}
var afterFilter = shoppingList.filter(ShopFilter);
console.log("filter List array: " ,afterFilter);