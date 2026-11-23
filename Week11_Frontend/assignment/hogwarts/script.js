const nameInput = document.getElementById("nameInput");
const sortBtn = document.getElementById("sortBtn");
const resultText = document.getElementById("resultText");
const houseDescription = document.getElementById("houseDescription");

const houses = [
  {
    name: "Gryffindor",
    color: "#740001",
    desc: "Where dwell the brave at heart!",
  },
  {
    name: "Hufflepuff",
    color: "#ecb939",
    desc: "Where they are just and loyal!",
  },
  {
    name: "Ravenclaw",
    color: "#0e1a40",
    desc: "Where those of wit and learning will always find their kind!",
  },
  {
    name: "Slytherin",
    color: "#1a472a",
    desc: "Those cunning folk use any means to achieve their ends!",
  },
];

let currentHouse = "";

sortBtn.addEventListener("click", function () {
  const userName = nameInput.value.trim();

  if (userName === "") {
    resultText.textContent = "Please enter your name first!";
    houseDescription.textContent = "";
    document.body.style.backgroundColor = "#f4f4f4";
    return;
  }

  let chosenHouse;
  do {
    const randomIndex = Math.floor(Math.random() * houses.length);
    chosenHouse = houses[randomIndex];
  } while (chosenHouse.name === currentHouse);

  currentHouse = chosenHouse.name;

  resultText.textContent = `${userName} belongs in ${chosenHouse.name}!`;

  houseDescription.textContent = chosenHouse.desc;
  document.body.style.backgroundColor = chosenHouse.color;

  sortBtn.textContent = "Not happy? Try Again!";
});
