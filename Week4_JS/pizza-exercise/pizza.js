/*
Part 1
Create a special new folder called "pizza-exercise"
Inside the folder create a new html file called "index.html"
Also inside the folder create a new JavaScript file called "pizza.js"
Remember to Include the pizza.js script in the html file
Write a log statement, so you know that your javascript code is running:
console.log("I love pizza");
Create a variable to store the name of your favourite pizza
Create a variable to store the price of the pizza
Now log a statement to the console that will show the chef the entire pizza order in a language they understand, e.g. like this:
New pizza order: <name of pizza>. The price of the pizza is: <price of pizza>

Part 2
Now we will modify the program so you can order multiple pizzas and decide whether the order is takeaway.
Create a new variable to store the amount of pizzas you would like to order
Create a new variable to store whether or not the order is for takeaway
Now write a formula to calculate the total price of your pizza order, and save it in a variable called totalPrice
Modify the log statement for the chef so it includes whether or not the order is for takeaway, and now show the total price of the order:
New pizza order (takeaway: <takeaway or not?>): <amount of pizzas> <name of pizza>. Total cost for the order is: <total price>
Try to change the price of the pizza and then check if the total price is calculated correctly
*/

console.log("I love pizza");

let myFavPizza = "Home made one =)";
let pizzaPrice = Infinity;
console.log(
  `New pizza order: ${myFavPizza}. The price of the pizza is: ${pizzaPrice}`,
);

let orderAmount = 1;
let isForTakeaway = true;
const totalPrice = orderAmount * pizzaPrice;
const orderText = `
New pizza order (takeaway: ${isForTakeaway ? "yes" : "no"}): Amount - ${orderAmount}, Name - ${myFavPizza}. Total cost for the order is: ${totalPrice}
`;
console.log(orderText);
