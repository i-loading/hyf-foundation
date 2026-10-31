// Slide 8
const drink = "Flat white";
const price = 42;
let quantity = 3;
const isTakeaway = true;
const cupFee = 3; // per cup, takeaway only

let totalPrice = (price + (isTakeaway ? cupFee : 0)) * quantity;

console.log(
  `New order: ${quantity} × ${drink}${isTakeaway ? " (takeaway)" : ""}`,
);
console.log(`Total: ${totalPrice} kr`);

// Bonus: every 10th coffee is free. With 8 stamps, how many free coffees and stamps left?
console.log(`\n-- Bonus: Loyalty Stamps --`);
const startingStamps = 8;
const totalStamps = startingStamps + quantity;
const freeCoffees = Math.floor(totalStamps / 10);
const stampsLeft = totalStamps % 10;

console.log(`Starting stamps: ${startingStamps}, Coffees ordered: ${quantity}`);
console.log(`Free coffees: ${freeCoffees}`);
console.log(`Stamps left: ${stampsLeft}`);

// Slide 15
function getDeliveryFee(orderTotal, distanceKm, isMember, hour) {
  let fee = isMember || orderTotal >= 300 ? 0 : 29;

  if (distanceKm > 5) {
    fee += 20;
  }

  if (hour >= 17 && hour < 20) {
    fee += 10;
  }

  return fee;
}

console.log(getDeliveryFee(250, 3, false, 12)); // 29
console.log(getDeliveryFee(250, 8, false, 18)); // 59
console.log(getDeliveryFee(150, 8, true, 18)); // 0
console.log(getDeliveryFee(320, 2, false, 18)); // 0

function canDeliver(km, hour) {
  const maxDistance = 15;
  const openingHour = 11;
  const closingHour = 22;

  const isValidDistance = km <= maxDistance;
  const isOpen = hour >= openingHour && hour <= closingHour;

  return isValidDistance && isOpen;
}

console.log(canDeliver(10, 14)); // true
console.log(canDeliver(16, 14)); // false
console.log(canDeliver(10, 23)); // false

// Slide 16
function getProgressBar(percent) {
  const clampedPercent = Math.max(0, Math.min(100, percent));
  const hashCount = Math.floor(clampedPercent / 10);

  let bar = "";
  for (let i = 0; i < 10; i++) {
    if (i < hashCount) {
      bar += "#";
    } else {
      bar += "-";
    }
  }

  return `[${bar}] ${percent}%`;
}

console.log(getProgressBar(0)); // [----------] 0%
console.log(getProgressBar(30)); // [###-------] 30%
console.log(getProgressBar(75)); // [#######---] 75%
console.log(getProgressBar(100)); // [##########] 100%

console.log(getProgressBar(-20));
console.log(getProgressBar(140));

console.log("\n-- Fake Download Progress --");
for (let p = 0; p <= 100; p += 10) {
  console.log(getProgressBar(p));
}

// Slide 20
const playlist = [
  { title: "Levitating", artist: "Dua Lipa", seconds: 203 },
  { title: "Yellow", artist: "Coldplay", seconds: 266 },
  { title: "Flowers", artist: "Miley Cyrus", seconds: 200 },
  { title: "Houdini", artist: "Dua Lipa", seconds: 185 },
];

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const paddedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
  return `${minutes}:${paddedSeconds}`;
}

console.log("-- Playlist Songs --");
playlist.forEach((song) => {
  console.log(`${song.title} — ${song.artist} (${formatTime(song.seconds)})`);
});

function getTotalTime(list) {
  const totalSeconds = list.reduce((acc, song) => acc + song.seconds, 0);
  return formatTime(totalSeconds);
}

console.log(`\nTotal Playlist Time: ${getTotalTime(playlist)}`);

function getSongsBy(list, artistName) {
  return list
    .filter((song) => song.artist.toLowerCase() === artistName.toLowerCase())
    .map((song) => song.title);
}

console.log("\nDua Lipa songs:", getSongsBy(playlist, "Dua Lipa"));

// Slide 21
const openingHours = {
  monday: { open: 8, close: 17 },
  tuesday: { open: 8, close: 17 },
  wednesday: { open: 8, close: 17 },
  thursday: { open: 8, close: 17 },
  friday: { open: 8, close: 20 },
  saturday: { open: 10, close: 14 },
  sunday: null,
};

function isOpen(day, hour) {
  const normalizedDay = day.toLowerCase();
  const schedule = openingHours[normalizedDay];

  if (!schedule) {
    return false;
  }

  return hour >= schedule.open && hour < schedule.close;
}

function getOpeningText(day) {
  const normalizedDay = day.toLowerCase();
  const schedule = openingHours[normalizedDay];

  if (!schedule) {
    return `${normalizedDay}: closed`;
  }

  return `${normalizedDay}: ${schedule.open}–${schedule.close}`;
}

console.log(isOpen("friday", 19)); // true
console.log(isOpen("saturday", 15)); // false
console.log(isOpen("sunday", 12)); // false
console.log(isOpen("Monday", 9)); // true

console.log(getOpeningText("friday")); // friday: 8–20
console.log(getOpeningText("sunday")); // sunday: closed
console.log(getOpeningText("tuesday")); // tuesday: 8–17

// Slide 22
const transactions = [
  { name: "Salary", amount: 21000, category: "income" },
  { name: "Rent", amount: -7500, category: "housing" },
  { name: "Netto", amount: -412, category: "food" },
  { name: "Rejsekort", amount: -300, category: "transport" },
  { name: "Pizza", amount: -189, category: "food" },
  { name: "Netflix", amount: -129, category: "fun" },
];

function getBalance(list) {
  return list.reduce((acc, t) => acc + t.amount, 0);
}
function getBiggestExpense(list) {
  return list.reduce((min, t) => (t.amount < min.amount ? t : min), list[0]);
}
function getSpendingByCategory(list) {
  const spending = {};
  list.forEach((t) => {
    if (t.category !== "income") {
      const positiveAmount = Math.abs(t.amount);
      spending[t.category] = (spending[t.category] || 0) + positiveAmount;
    }
  });
  return spending;
}

console.log(getBalance(transactions));
console.log(getBiggestExpense(transactions));
console.log(getSpendingByCategory(transactions));

// Slide 27
// P1 — Username generator 🪪

/* 
  1. Steps 1–2: Three more examples (one weird)
  - createUsername("Christopher", "Nolan", 1970) // "chrnol70"
  - createUsername("Søren", "Kierkegaard", 1813) // "sørkie13"
  - createUsername("X", "Z", 2024)               // "xzz24"
*/

/* s
  2. Step 4: Pseudocode (Show a mentor)
  - Function createUsername(first, last, year):
      1. Convert first name to lowercase and extract the first 3 characters.
      2. Convert last name to lowercase and extract the first 3 characters.
      3. Convert the year to a string and extract the last 2 characters.
      4. Concatenate the first part, last part, and year part together.
      5. Return the final username string.
*/

// 3. Step 5: Code it, one comment at a time
function createUsername(first, last, year) {
  // 1. Get the first 3 letters of the first name in lowercase (handles short names safely using slice)
  const firstPart = first.toLowerCase().slice(0, 3);

  // 2. Get the first 3 letters of the last name in lowercase
  const lastPart = last.toLowerCase().slice(0, 3);

  // 3. Extract the last 2 digits of the year by converting it to a string
  const yearPart = String(year).slice(-2);

  // 4. Combine all the parts together
  const username = firstPart + lastPart + yearPart;

  // 5. Return the final generated username
  return username;
}

console.log(createUsername("Ada", "Lovelace", 1815)); // "adalov15"
console.log(createUsername("Mohammed", "Ali", 1999)); // "mohali99"
console.log(createUsername("Bo", "Li", 2001)); // "boli01"
console.log(createUsername("X", "Z", 2024)); // "xzz24"

// Slide 28
// P2 — Split the bill 🍕

/* 
  1. Step 1-2: Pseudocode & Planning
  - Function splitBill(total, people, tipPercent):
      1. Edge case check: 
         - If people <= 0, return an error object or message (cannot divide by zero).
         - If tipPercent < 0, treat tip as 0 (or adjust as needed).
      2. Calculate the tip amount: total * (tipPercent / 100).
      3. Calculate totalWithTip: total + tip amount.
      4. Calculate perPerson: totalWithTip divided by people. 
      5. Return an object: { totalWithTip, perPerson }
*/

// 2. Step 3-5: Code Implementation
function splitBill(total, people, tipPercent) {
  // Edge case: 0 or negative people
  if (people <= 0) {
    return { error: "Number of people must be greater than 0." };
  }

  // Edge case: Negative tip (clamp to 0 or handle)
  const validTipPercent = tipPercent < 0 ? 0 : tipPercent;

  // Calculate total with tip
  const tipAmount = total * (validTipPercent / 100);
  const totalWithTip = total + tipAmount;

  // Calculate per person, rounding UP to ensure whole kroner and full amount covered
  const perPerson = Math.ceil(totalWithTip / people);

  return {
    totalWithTip: Math.round(totalWithTip * 100) / 100, // clean decimal formatting if needed
    perPerson,
  };
}

console.log(splitBill(400, 4, 10));
console.log(splitBill(485, 3, 0));
console.log(splitBill(300, 0, 10));
console.log(splitBill(300, 4, -5));

// B1 — Card number formatter 💳

/* 
  THE 5 STEPS:
  1. Understand the problem & inputs/outputs
  2. Write examples & edge cases
  3. Write pseudocode
  4. Code it step-by-step (one comment at a time)
  5. Test & Refine (including bonus masking)
*/

/* 
  --- Step 3: Pseudocode ---
  - Function formatCreditCardNumber(input):
      1. Check edge case: If input is invalid/non-numeric (e.g., "hello"), handle gracefully.
      2. Turn the input into a string: String(input).
      3. Loop over the characters/digits — add a space before every 4th character (or after every 4).
      4. Build the formatted string.
      5. (Bonus) Create a masked version hiding all but the last 4 digits.
      6. Return an object: { original, formatted, masked }.
*/

// --- Step 4 & 5: Implementation ---
function formatCreditCardNumber(input) {
  // 1. Handle edge case: what if someone calls it with "hello"?
  // If the input is entirely letters or non-numeric text, return an error state.
  const str = String(input);
  if (/^[a-zA-Z\s]+$/.test(str)) {
    return {
      original: input,
      formatted: "Error: Invalid card number (letters not allowed)",
      masked: "Invalid",
    };
  }

  // 2. Turn the number into a string (already done via String(input))

  // 3. Loop over the digits — add a space after every 4 digits
  let formatted = "";
  for (let i = 0; i < str.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formatted += " ";
    }
    formatted += str[i];
  }

  // Bonus: hide all but the last 4 — "**** **** **** 1111"
  let masked = "";
  if (str.length >= 4) {
    const maskedBase = str.slice(0, -4).replace(/./g, "*") + str.slice(-4);
    for (let i = 0; i < maskedBase.length; i++) {
      if (i > 0 && i % 4 === 0) {
        masked += " ";
      }
      masked += maskedBase[i];
    }
  } else {
    masked = str;
  }

  // 4. Return the object
  return {
    original: input,
    formatted: formatted,
    masked: masked,
  };
}

// Test cases
console.log(formatCreditCardNumber(123456789));
console.log(formatCreditCardNumber(4111111111111111));
console.log(formatCreditCardNumber("hello"));

// B2 — Which card is it? 💳
function getCardInfo(number) {
  const text = String(number);
  let cardType = "unknown";

  // 1. Identify card type based on starting digits and length rules
  // Visa: starts with '4', length 13 or 16
  if (text.startsWith("4") && (text.length === 13 || text.length === 16)) {
    cardType = "visa";
  }
  // Mastercard: starts with 51–55, length 16
  else if (text.length === 16) {
    const firstTwo = parseInt(text.slice(0, 2), 10);
    if (firstTwo >= 51 && firstTwo <= 55) {
      cardType = "mastercard";
    }
  }
  // Amex: starts with '34' or '37', length 15
  else if (
    (text.startsWith("34") || text.startsWith("37")) &&
    text.length === 15
  ) {
    cardType = "amex";
  }

  // 2. Bonus: Format based on card type (Amex uses 4-6-5, others use standard 4-digit blocks)
  let formatted = "";
  if (cardType === "amex") {
    // Amex: 4-6-5 grouping (e.g., 3782 822463 10005)
    formatted = `${text.slice(0, 4)} ${text.slice(4, 10)} ${text.slice(10)}`;
  } else {
    // Standard B1 formatting: space after every 4 digits
    let parts = [];
    for (let i = 0; i < text.length; i += 4) {
      parts.push(text.slice(i, i + 4));
    }
    formatted = parts.join(" ");
  }

  // Return comprehensive card info object
  return {
    original: number,
    type: cardType,
    formatted: formatted,
  };
}

console.log(getCardInfo(4111111111111111));
console.log(getCardInfo(5555555555554444));
console.log(getCardInfo(378282246310005));
console.log(getCardInfo(6011111111111117));

// B6 — To-do list ✅
/* 
  THE 5 STEPS:
  1. Understand the problem: Manage a to-do array with duplicate prevention, index-based removal via splice, and smart listing with correct singular/plural grammar and Oxford-style conjunctions for the bonus.
  2. Write examples & edge cases: Adding new items, adding duplicate items, removing existing items, removing non-existent items, empty lists, single items, two items, and 3+ items (bonus).
  3. Write pseudocode:
     - addTodo(todo): Check if `todos` includes `todo`. If yes, return already exists message. If no, push and return added message.
     - removeTodo(todo): Find index using `indexOf`. If -1, return not found message. If found, use `splice(index, 1)` and return success message.
     - listTodos(): Check length. Handle empty, 1 item, 2 items, and 3+ items with commas and "and".
  4. Code it step-by-step
  5. Test & Refine
*/

const todos = [];

// 1. addTodo — no duplicates
function addTodo(todo) {
  // Check if item already exists in the list
  if (todos.includes(todo)) {
    return `${todo} is already on your todo`;
  }

  // Add item to the array
  todos.push(todo);
  return `${todo} added to your todo`;
}

// 2. removeTodo — find it with indexOf, look up splice on MDN
function removeTodo(todo) {
  // Find the index of the todo item
  const index = todos.indexOf(todo);

  // If not found, return appropriate message
  if (index === -1) return `${todo} is not on your todo`;

  // Remove the item from the array using splice
  todos.splice(index, 1);
  return `Removed ${todo} from your todo`;
}

// 3. listTodos — mind 1 todo vs 2 todos, the empty list, and the bonus ("fishing, laundry and singing")
function listTodos() {
  if (todos.length === 0) return "You have no todos in your list.";

  // Format items nicely depending on how many there are
  let itemsFormatted = "";
  if (todos.length === 1) {
    itemsFormatted = todos[0];
  } else if (todos.length === 2) {
    itemsFormatted = `${todos[0]}, ${todos[1]}`;
  } else {
    // Bonus: 3+ items (e.g., "fishing, laundry and singing")
    const allButLast = todos.slice(0, -1).join(", ");
    const last = todos[todos.length - 1];
    itemsFormatted = `${allButLast} and ${last}`;
  }

  // Handle singular vs plural phrasing ("1 todo" vs "2 todos")
  const todoText = todos.length === 1 ? "1 todo" : `${todos.length} todos`;

  return `You have ${todoText}: ${itemsFormatted}`;
}

console.log(addTodo("fishing"));
console.log(addTodo("fishing"));
console.log(addTodo("laundry"));
console.log(listTodos());

console.log(removeTodo("fishing"));
console.log(removeTodo("dancing"));
console.log(listTodos());

console.log("\n-- Bonus Test --");
console.log(addTodo("fishing"));
console.log(addTodo("singing"));
console.log(listTodos());

// B7 — Tic-tac-toe ⭕❌
/* 
  THE 5 STEPS:
  1. Understand the problem: Manage a 3x3 2D array board (`game[row][col]`), render it visually as a text grid, and check all rows, columns, and diagonals to determine the game status (winner, loser, and whether it has ended).
  2. Write examples & edge cases: Ongoing games, winning rows/columns/diagonals, draws/full boards, and invalid placement attempts.
  3. Write pseudocode:
     - getRenderedGame(board): map rows to cell strings separated by ` | `, and join rows with `\n---+---+---\n`.
     - getGameInfo(board): check rows, columns, and diagonals using a helper function. Determine winner, loser, and if ended.
     - placeMark(board, row, col, mark): validate bounds and emptiness, then place the mark.
  4. Code implementation.
  5. Test & Refine.
*/

const game = [
  ["x", "o", " "],
  [" ", "o", " "],
  [" ", "o", "x"],
];

// 1 & 2. getRenderedGame — the board as text
function getRenderedGame(board) {
  const rowsFormatted = board.map((row) => {
    return row.map((cell) => (cell === "" ? " " : cell)).join(" | ");
  });
  return rowsFormatted.join("\n---+---+---\n");
}

// 3. getGameInfo — check rows, columns, diagonals
function getGameInfo(board) {
  let winner = null;
  let hasEnded = false;

  // Helper to check 3 cells for a win
  const checkLine = (a, b, c) => {
    if (a !== " " && a === b && b === c) {
      return a;
    }
    return null;
  };

  // Check rows
  for (let i = 0; i < 3; i++) {
    const res = checkLine(board[i][0], board[i][1], board[i][2]);
    if (res) {
      winner = res;
      hasEnded = true;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    const res = checkLine(board[0][i], board[1][i], board[2][i]);
    if (res) {
      winner = res;
      hasEnded = true;
    }
  }

  // Check diagonals
  const diag1 = checkLine(board[0][0], board[1][1], board[2][2]);
  if (diag1) {
    winner = diag1;
    hasEnded = true;
  }

  const diag2 = checkLine(board[0][2], board[1][1], board[2][0]);
  if (diag2) {
    winner = diag2;
    hasEnded = true;
  }

  // Check if board is full (draw condition if no winner)
  const isFull = board.every((row) => row.every((cell) => cell !== " "));
  if (isFull && !winner) {
    hasEnded = true;
  }

  const loser = winner ? (winner === "x" ? "o" : "x") : null;

  return {
    winner: winner,
    loser: loser,
    hasEnded: hasEnded,
  };
}

function placeMark(board, row, col, mark) {
  if (row < 0 || row > 2 || col < 0 || col > 2) {
    return "Error: Out of bounds!";
  }
  if (board[row][col] !== " ") {
    return "Error: Spot already taken!";
  }
  board[row][col] = mark;
  return `${mark} placed successfully at (${row}, ${col})`;
}

console.log("--- Initial Example Board ---");
console.log(getRenderedGame(game));
console.log(getGameInfo(game));

console.log("\n--- Bonus: Simulated Match ---");
const freshGame = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

console.log(placeMark(freshGame, 0, 0, "x"));
console.log(placeMark(freshGame, 1, 1, "o"));
console.log(placeMark(freshGame, 0, 1, "x"));
console.log(placeMark(freshGame, 2, 2, "o"));
console.log(placeMark(freshGame, 0, 2, "x"));

console.log("\nFinal Board:");
console.log(getRenderedGame(freshGame));
console.log(getGameInfo(freshGame));
