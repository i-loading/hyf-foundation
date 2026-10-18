const student = {
  name: "John",
  age: 32,
  pet: null,
  subject: ["JS", "React"],
  car: {
    color: "red",
  },
};

const students = [
  student,
  {
    name: "Ben",
    age: 300,
  },
];

console.log(students.includes(student));

console.log(students[0].car.color);

// CodeWars 1
var questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
  },
];

for (let i = 0; i < questions.length; i++) {
  const element = questions[i];
  element.usersAnswer = null;
}

// CodeWars 2
var array = [["white", "goodness"]]; //returns [{white: 'goodness'}, ...]
function colourAssociation(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    newArr.push({ [element[0]]: element[1] });
  }
  return newArr;
}
colourAssociation(array);

// CodeWars 3
function createArray(number) {
  const newArray = [];
  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}

// CodeWars 4
function correctTail(body, tail) {
  if (body[body.length - 1] === tail) return true;
  else return false;
}
console.log(correctTail("Fox", "x"));

// CodeWars 5
function findLongest(str) {
  var spl = str.split(" ");
  var longest = 0;

  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return longest;
}

// CodeWars 6
const arr = [
  {
    username: "David",
    status: "online",
    lastActivity: 9,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
  {
    username: "John",
    status: "online",
    lastActivity: 100,
  },
];
const whosOnline = (friends) => {
  const status = {};

  for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    let currentState;

    if (element.status === "offline") {
      currentState = "offline";
    } else if (element.status === "online" && element.lastActivity > 10) {
      currentState = "away";
    } else {
      currentState = "online";
    }

    if (!status[currentState]) {
      status[currentState] = [];
    }
    status[currentState].push(element.username);
  }

  return status;
};
console.log(whosOnline(arr));

const pet = {
  name: "Buddy",
  type: "dog",
  age: 2,
};
console.log(pet.name);
pet.age = 3;
pet.color = "brown";

delete pet.type;
console.log(pet);

const shoppingList = ["Milk", "Bread", "Eggs", "Apples", "Cheese"];
for (let i = 0; i < shoppingList.length; i++) {
  const element = shoppingList[i];
  if (element === "Eggs") console.log("Don’t forget the eggs!");
  console.log(`${i + 1}: ${element}`);
}
console.log("Total items: " + shoppingList.length);

const studentsArr = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 42 },
  { name: "Charlie", score: 73 },
  { name: "Diana", score: 95 },
  { name: "Eve", score: 38 },
];

let count = 0;
for (let i = 0; i < studentsArr.length; i++) {
  const element = studentsArr[i];
  if (element.score >= 50) {
    element.passed = true;
    count++;
    console.log(`${element.name} passed`);
  } else element.passed = false;
}
console.log(`${count} students passed`);

console.log(studentsArr);
