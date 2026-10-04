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
