const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let start = 0;
while (start < ingredients.length) {
    console.log(ingredients[start]);
    start = start + 1;
}
// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let j = ingredients.length-1; j >= 0; j--) {
    console.log(ingredients[j]);
}
