// Slide 10
// const age = 17;
// if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log(`You can vote in ${18 - age} year${18 - age === 1 ? "" : "s"}`);
// }

// Slide 11
// const ranNum = 0;
// if (ranNum % 2 === 0 && ranNum !== 0) console.log(`${ranNum} is even`);
// else if (ranNum === 0) console.log("0 is special");
// else console.log(`${ranNum} is odd`);

// Slide 12
// const score = 51;

// if (score > 90) {
//   console.log("Excellent! 🏆");
// } else if (score > 50) {
//   console.log("You passed");
// } else {
//   console.log("Try again");
// }

// SLide 17
// const balance = -5;

// if (balance <= 0) console.log("Please deposit some money!");
// else if (balance <= 1000) console.log("Your balance is looking okay");
// else if (balance <= 3000) console.log("Your balance is looking good");
// else if (balance <= 10000) console.log("Your balance is fantastic");
// else if (balance > 10000) console.log("Your balance is AMAZING!");
// else console.log("Number is incorrect");

// Slide 19
// const items = 1;
// let label = items === 1 ? "item" : "items";
// console.log("You have " + items + " " + label);

// Slide 20
// const age = 18;
// const isStudent = false;
// if (age < 12) console.log("Free");
// else if (age >= 65 || isStudent) console.log("60kr");
// else console.log("120kr");

// Slide 29
// function introduce({ firstName, cityName = "Copenhagen" }) {
//   console.log(`Hi, I'm ${firstName} from ${cityName}`);
// }
// introduce({ firstName: "Ivan", cityName: "CPH" });
// introduce({ firstName: "Danya", cityName: "CPH" });
// introduce({ firstName: "Yasen", cityName: "CPH" });

// function logSquare(number) {
//   console.log(`${number} squared is ${number ** 2}`);
// }
// logSquare(5);

// Slide 37
// function getCircleArea(radius) {
//   return Math.PI * radius ** 2;
// }
// console.log(getCircleArea(10));

// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }
// console.log(celsiusToFahrenheit(10));

// Slide 39
// function getBalanceMessage(balance) {
//   const newMsg = "";
//   return balance > 5000
//     ? "Balance is GREAT"
//     : balance > 1000
//       ? "Balanace is good"
//       : "Balance is 0 or less";
// }

// console.log(getBalanceMessage(-20));
// console.log(getBalanceMessage(1500));
// console.log(getBalanceMessage(99999));

// Slide 40
// function getVat(price) {
//   return +(price / 4);
// }

// function getPriceWithVat(price) {
//   return +(price + getVat(price));
// }

// function getShippingCost(total) {
//   return getPriceWithVat(total) >= 500 ? 0 : 49;
// }

// function getFinalPrice(price) {
//   return getPriceWithVat(price) + getShippingCost(price);
// }

// console.log(`Final price ${getFinalPrice(400)}`);

// Slide 50
// function logString(stringToLog, numberOfTimesToLog) {
//   for (let i = 0; i < numberOfTimesToLog; i++) {
//     console.log(stringToLog);
//   }
// }

// logString("hello", 3);

// Slide 53
// for (let i = 74; i <= 98; i++) {
//   console.log(i);
// }
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("Liftoff! 🚀");
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// Slide 54
// function logString(string, amount) {
//   for (let i = 1; i <= amount; i++) {
//     console.log(`${i}: ${string}`);
//   }
// }
// logString("hello", 3);
// logString("🍕", 5);
// logString("never", 0);

// Slide 56
// function sumTo(n) {
//   let newNum = 0;
//   for (let i = 1; i <= n; i++) {
//     newNum += i;
//   }
//   console.log(newNum);
// }
// sumTo(3);
// function makeLine(n) {
//   let newLine = "";
//   for (let i = 1; i <= n; i++) {
//     newLine += "*";
//   }
//   console.log(newLine);
// }
// makeLine(3);
// function countdown(n) {
//   let newLine = "";
//   for (; n > 0; n--) {
//     newLine += `${n} `;
//   }
//   console.log(newLine);
// }
// countdown(3);

// Slide 58
// const recipients =
//   "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohamedgmail.com";

// function sendEmailTo(recipients) {
//   const recsArr = recipients.split("|");
//   let sentCount = 0;
//   for (let i = 0; i < recsArr.length; i++) {
//     const element = recsArr[i];
//     if (element.includes("@")) {
//       console.log("email sent to " + element);
//       sentCount++;
//     }
//   }
//   console.log(`Sent ${sentCount} emails`);
// }
// sendEmailTo(recipients);

// Slide 59
// const prices = [120, 45, 300, 15, 89];

// function getTotal(numbers) {
//   return numbers.reduce((prev, next) => prev + next, 0);
// }
// console.log(getTotal(prices));

// function getMax(numbers) {
//   return numbers.filter((num) => numbers.every((other) => num >= other))[0];
// }
// console.log(getMax(prices));

// function countCheap(numbers) {
//   return numbers.filter((number) => number < 100).length;
// }
// console.log(countCheap(prices));

// Slide 61
// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0) {
//     continue;
//   }
//   console.log(i);
// }
// for (let i = 1; i <= 500; i++) {
//   if (i * i > 500) {
//     console.log(i);
//     break;
//   }
// }
// function includesNumber(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === target) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(includesNumber([1, 3, 5, 7], 5));
// console.log(includesNumber([1, 3, 5, 7], 4));

// Slide 62
function fizzBuzz(iterations, firstWord, secondWord) {
  for (let i = 1; i <= iterations; i++) {
    const element = i;
    if (element % 3 === 0 && element % 5 === 0) {
      console.log(firstWord + " " + secondWord);
      continue;
    } else if (element % 3 === 0) {
      console.log(firstWord);
      continue;
    } else if (element % 5 === 0) {
      console.log(secondWord);
      continue;
    }
    console.log(i);
  }
  return;
}
console.log(fizzBuzz(15, "Hack", "Your"));
