// Javascript warmup
// username: @ivansediakin

// Step 3: Smart-ease - Goes Global
// if a person would be a woman - add a "gender" boolean check with default, f.x, man
function getFullName(
  firstName = "Unknown",
  secondName = "User",
  useFormalName = false,
) {
  return `${useFormalName ? "Lord" : ""} ${firstName} ${secondName}`;
}

const fullName1 = getFullName("Ivan", "Sediakin", true);
const fullName2 = getFullName("Tomas", "Jefferson", false);
console.log("fullName1 - ", fullName1, "fullName2 - ", fullName2);

// Event application
function getEventWeekday(daysFromToday) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const todayIndex = new Date().getDay();
  const eventIndex = (todayIndex + daysFromToday) % weekdays.length;

  return weekdays[eventIndex];
}
console.log(getEventWeekday(8));

console.log(getEventWeekday(2));

// Weather wear
function getOutfitForTemperature(temp) {
  if (temp < -10) {
    return "heavy winter coat, scarf, and gloves";
  } else if (temp < 10) {
    return "a warm jacket and long pants";
  } else if (temp < 20) {
    return "a light jacket or sweater";
  } else {
    return "shorts and a t-shirt";
  }
}
const clothesToWear = getOutfitForTemperature(18);
console.log(clothesToWear);

// Student manager
const class07Students = [];

function addStudentToClass(studentName) {
  if (!studentName || studentName.trim() === "") {
    return "You can't add an empty string to a class";
  }

  if (class07Students.includes(studentName)) {
    return `Student ${studentName} is already in the class`;
  }

  if (class07Students.length >= 6 && studentName !== "Queen") {
    return "Cannot add more students to class 07";
  }

  class07Students.push(studentName);
  return class07Students;
}

function getNumberOfStudents() {
  return class07Students.length;
}

const studentOne = addStudentToClass("Ivan");
const studentTwo = addStudentToClass("Danya");
const studentThree = addStudentToClass("Ira");
const studentFour = addStudentToClass("Ivan");
const studentFive = addStudentToClass("Vadim");
const studentSix = addStudentToClass("Yasen");
const studentSeven = addStudentToClass("Saloumeh");
const studentEight = addStudentToClass("Queen");

console.log("studentOne:", studentOne);
console.log("studentTwo:", studentTwo);
console.log("studentThree:", studentThree);
console.log("studentFour:", studentFour);
console.log("studentFive:", studentFive);
console.log("studentSix:", studentSix);
console.log("studentSeven:", studentSeven);
console.log("studentEight:", studentEight);
console.log("Total students:", getNumberOfStudents());

// addCandy function
const boughtCandy = [];
const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
  const settings = {
    sweet: 0.5,
    chocolate: 0.7,
    toffee: 1.1,
    chewingGum: 0.03,
  };

  const total = settings[candyType] * weight;

  if (canBuyMoreCandy()) {
    boughtCandyPrices.push(total);
    console.log("You can buy more, so please do!");
  } else {
    return "Enough candy for you!";
  }

  return boughtCandyPrices;
}

function canBuyMoreCandy() {
  const totalCandies = boughtCandyPrices.reduce((prev, next) => prev + next, 0);
  return amountToSpend > totalCandies;
}
console.log(addCandy("sweet", 20));
console.log(addCandy("sweet", 50));
console.log(addCandy("sweet", 50));
