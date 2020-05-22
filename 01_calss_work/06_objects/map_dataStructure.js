

const foodItems = new Map();
console.log("=======food Items in a map data structure======");

foodItems.set("tomato", 350);
foodItems.set("cucumber",500);
foodItems.set("onion",50);
console.log("foodItem",foodItems);

console.log(foodItems.entries());
console.log("==this is the total value of food items==");


 

console.log(foodItems.get("tomato"));
console.log(foodItems.get("cucumber"));
console.log(foodItems.get("onion"));
console.log("----");
console.log(foodItems.get("onion") + foodItems.get("tomato") + foodItems.get("cucumber") );
console.log("----");

const items = foodItems.keys();

console.log(foodItems.keys());

console.log(items.next().value);
console.log(items.next().value);
console.log(items.next().value);


 






