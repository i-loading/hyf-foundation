// Ex 2
/*
Create a variable that is 24 times 55
Create a const and set it to be equal to your name
With javascript console.log the first character in your name
Create an array with 3 strings, three numbers and three booleans
console.log the 4. element in the array made above
Optional with javascript console.log the last character in your name.
*/

let number = 55 * 24;
const myName = "Ivan";
console.log(myName[0]);
let myArr = ["one", "two", "three", 1, 2, 3, true, true, true];
console.log(myArr[3]);
console.log(myName[myName.length - 1]);

// Ex 3
/*
Fix the errors
Fix the errors in this script:
const name = "benjamin";
name = "benjamin-better";

const pizzaPrice = 78;
const pizzaPriceDiscounted = pizzaprice - 10;

const users = ["peter", "Johnny", "Børge"];

const lastUser = users[3];
console.log(lastUser);
*/

let someName = "benjamin";
someName = "benjamin-better";

const pizzaPrice = 78;
const pizzaPriceDiscounted = pizzaPrice - 10;

const users = ["peter", "Johnny", "Børge"];

const lastUser = users[users.length - 1];
console.log(lastUser);

// Ex 4
/*
Pizza project

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

// Done! =)
