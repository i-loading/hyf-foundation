// CodeWars 1
function getCount(str) {
  const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
// CodeWars 2
function squareDigits(num) {
  const digits = String(num).split("");
  const squared = digits.map((d) => Number(d) ** 2);
  return Number(squared.join(""));
}

// CodeWars 3
function highAndLow(numbers) {
  const arr = numbers.split(" ").map((item) => Number(item));
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return `${max} ${min}`;
}

// Voice Assistant 🤖
let userName = null;
const todos = [];

function getReply(command) {
  const trimmed = command.trim();
  const lower = trimmed.toLowerCase();

  // 1. Hello my name is [Name]
  const nameMatch = trimmed.match(/^hello my name is (.+)$/i);
  if (nameMatch) {
    const name = nameMatch[1].trim();
    if (userName === name) {
      return `You already told me your name is ${userName}!`;
    }
    userName = name;
    return `Nice to meet you ${userName}`;
  }

  // 2. What is my name?
  if (lower === "what is my name?" || lower === "what is my name") {
    if (!userName) {
      return "I don't know your name yet. You can tell me by saying 'Hello my name is [Name]'.";
    }
    return `Your name is ${userName}`;
  }

  // 3. Add [item] to my todo
  const addMatch = trimmed.match(/^add (.+) to my todo$/i);
  if (addMatch) {
    const item = addMatch[1].trim();
    if (todos.includes(item)) {
      return `${item} is already on your todo`;
    }
    todos.push(item);
    return `${item} added to your todo`;
  }

  // 4. Remove [item] from my todo
  const removeMatch = trimmed.match(/^remove (.+) from my todo$/i);
  if (removeMatch) {
    const item = removeMatch[1].trim();
    const index = todos.indexOf(item);
    if (index === -1) {
      return `${item} is not on your todo`;
    }
    todos.splice(index, 1);
    return `Removed ${item} from your todo`;
  }

  // 5. What is on my todo?
  if (lower === "what is on my todo?" || lower === "what is on my todo") {
    if (todos.length === 0) {
      return "You have no todos in your list.";
    }
    const todoText = todos.length === 1 ? "1 todo" : `${todos.length} todos`;
    let itemsFormatted = "";
    if (todos.length === 1) {
      itemsFormatted = todos[0];
    } else if (todos.length === 2) {
      itemsFormatted = `${todos[0]} and ${todos[1]}`;
    } else {
      const allButLast = todos.slice(0, -1).join(", ");
      const last = todos[todos.length - 1];
      itemsFormatted = `${allButLast} and ${last}`;
    }
    return `You have ${todoText} - ${itemsFormatted}`;
  }

  // 6. What day is it today?
  if (lower === "what day is it today?" || lower === "what day is it today") {
    const now = new Date();
    const day = now.getDate();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    // Ordinal suffix helper (e.g., 1st, 2nd, 3rd, 30th)
    const getOrdinal = (n) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${getOrdinal(day)} of ${month} ${year}`;
  }

  // 7. Simple math (e.g., "what is 3 + 3" or "what is 4 * 12")
  const mathMatch = lower.match(/^what is\s*(\d+)\s*([\+\-\*\/])\s*(\d+)$/);
  if (mathMatch) {
    const num1 = Number(mathMatch[1]);
    const operator = mathMatch[2];
    const num2 = Number(mathMatch[3]);
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        break;
    }
    return String(result);
  }

  // 8. Set a timer for X minutes
  const timerMatch = trimmed.match(/^set a timer for (\d+) minutes$/i);
  if (timerMatch) {
    const minutes = Number(timerMatch[1]);
    const ms = minutes * 60 * 1000;
    setTimeout(() => {
      console.log("Timer done");
    }, ms);
    return `Timer set for ${minutes} minutes`;
  }

  return "I don't understand that command.";
}

console.log(getReply("Hello my name is Ivan")); // "Nice to meet you Benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // "singing in the shower added to your todo"
console.log(getReply("What is on my todo?")); // "You have 2 todos - fishing and singing in the shower"
console.log(getReply("Remove fishing from my todo")); // "Removed fishing from your todo"
console.log(getReply("What day is it today?")); // Dynamic human-readable date
console.log(getReply("What is 3 + 3")); // "6"
console.log(getReply("What is 4 * 12")); // "48"
console.log(getReply("Set a timer for 1 minutes")); // "Timer set for 1 minutes" (logs "Timer done" after 1 min)
