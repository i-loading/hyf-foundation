// Exercise 1: Favourite Dishes
(() => {
  const favouriteDishes = [
    "Smørrebrød",
    "Wood-Fired Margherita Pizza",
    "Spicy Miso Ramen",
    "Tacos al Pastor",
  ];

  const dishList = document.querySelector("#ex1-dish-list");

  if (dishList) {
    favouriteDishes.forEach((dish) => {
      const listItem = document.createElement("li");
      listItem.textContent = dish;
      dishList.appendChild(listItem);
    });
  }
})();

// Exercise 2: Podcasts
(() => {
  const podcasts = [
    {
      name: "The mystery om of Johan Klausen Varbourg",
      imageUrl: "https://picsum.photos/536/354",
    },
    {
      name: "Tips about dogs with small legs",
      imageUrl: "https://picsum.photos/536/354",
    },
    {
      name: "You, me, we and us",
      imageUrl: "https://picsum.photos/536/354",
    },
    {
      name: "Breakfast news - Dinner edition",
    },
  ];

  const container = document.querySelector("#ex2-podcast-container");

  if (!container) return;

  const podcastList = document.createElement("ul");
  podcastList.id = "ex2-podcast-list";

  podcasts.forEach((podcast) => {
    const listItem = document.createElement("li");
    const heading = document.createElement("h1");
    heading.innerHTML = podcast.name;
    listItem.appendChild(heading);

    if (podcast.imageUrl) {
      const img = document.createElement("img");
      img.src = podcast.imageUrl;
      img.alt = podcast.name;
      listItem.appendChild(img);
    }

    podcastList.appendChild(listItem);
  });

  container.appendChild(podcastList);
})();

// Exercise 3: Image Inserter
(() => {
  function insertImage(imageUrl, elementToAppendImageTo) {
    if (!imageUrl || !elementToAppendImageTo) return;

    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Inserted image";
    elementToAppendImageTo.appendChild(img);
  }

  const imageContainer = document.querySelector("#ex3-image-container");
  insertImage("https://picsum.photos/536/354", imageContainer);

  // To append directly to <body> as shown in the prompt example:
  // insertImage("https://picsum.photos/536/354", document.querySelector("body"));
})();

// Exercise 4: Light Mode / Dark Mode
(() => {
  const themeBtn = document.querySelector("#ex4-theme-btn");

  if (!themeBtn) return;

  themeBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    themeBtn.textContent = isDark
      ? "Switch to Light Mode"
      : "Switch to Dark Mode";
  });
})();

// Exercise 5: Astronauts in Space
(() => {
  const container = document.querySelector("#ex5-astronauts-container");

  if (!container) return;

  async function loadAstronauts() {
    const primaryUrl = "http://api.open-notify.org/astros.json";
    const fallbackUrl =
      "https://corquaid.github.io/international-space-station-APIs/JSON/people-in-space.json";

    try {
      let response;
      try {
        response = await fetch(primaryUrl);
      } catch {
        response = await fetch(fallbackUrl);
      }

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();

      container.innerHTML = "";

      const summary = document.createElement("p");
      summary.textContent = `There are ${data.number} astronauts in space, they are:`;
      container.appendChild(summary);

      const list = document.createElement("ul");
      list.id = "ex5-astronaut-list";

      data.people.forEach((person) => {
        const listItem = document.createElement("li");
        listItem.textContent = person.name;
        list.appendChild(listItem);
      });

      container.appendChild(list);
    } catch (error) {
      container.textContent = "Could not load astronaut data.";
      console.error("Failed to fetch astronauts:", error);
    }
  }

  loadAstronauts();
})();

// Exercise 6: Dog Fan Website
(() => {
  const randomDogImg = document.querySelector("#ex6-random-dog-img");
  const breedDogImg = document.querySelector("#ex6-breed-dog-img");
  const breedNameEl = document.querySelector("#ex6-breed-name");
  const newBreedBtn = document.querySelector("#ex6-new-breed-btn");

  if (!randomDogImg || !breedDogImg || !breedNameEl) return;

  async function fetchRandomDog() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      randomDogImg.src = data.message;
    } catch (error) {
      console.error("Failed to fetch random dog:", error);
    }
  }

  fetchRandomDog();
  setInterval(fetchRandomDog, 2000);

  let breedList = [];

  async function showRandomBreed() {
    try {
      if (breedList.length === 0) {
        const listResponse = await fetch("https://dog.ceo/api/breeds/list/all");
        const listData = await listResponse.json();
        breedList = Object.keys(listData.message);
      }

      const randomIndex = Math.floor(Math.random() * breedList.length);
      const selectedBreed = breedList[randomIndex];

      const imageResponse = await fetch(
        `https://dog.ceo/api/breed/${selectedBreed}/images/random`,
      );
      const imageData = await imageResponse.json();

      breedDogImg.src = imageData.message;
      breedDogImg.alt = selectedBreed;
      breedNameEl.textContent = selectedBreed;
    } catch (error) {
      breedNameEl.textContent = "Could not load breed.";
      console.error("Failed to fetch breed image:", error);
    }
  }

  showRandomBreed();

  if (newBreedBtn) {
    newBreedBtn.addEventListener("click", showRandomBreed);
  }
})();
