// Item array removal
const names = [
  "Peter",
  "Yana",
  "kristina",
  "Ahmad",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
names.splice(names.indexOf(nameToRemove), 1);

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']

// When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function timeEstimation({ speed, destinationDistance }) {
  const estimation = destinationDistance / speed;
  const hours = Math.floor(estimation);
  const minutes = ((estimation - Math.floor(estimation)) * 60).toFixed(0);
  const plural = Math.floor(estimation) === 1;

  return `${hours} hour${plural ? "" : "s"} and ${minutes} minute${plural ? "" : "s"}`;
}

const travelTime = timeEstimation(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

// Series duration of my life
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 2,
    hours: 20,
    minutes: 8,
  },
  {
    title: "Naruto",
    days: 3,
    hours: 16,
    minutes: 0,
  },
  {
    title: "La casa de papel",
    days: 2,
    hours: 0,
    minutes: 16,
  },
];
const lifeDurationMinutes = 80 * 365 * 24 * 60;

function logOutSeriesText(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let formula =
      ((element.days * 24 * 60 + element.hours * 60 + element.minutes) /
        lifeDurationMinutes) *
      100;
    total += formula;
    console.log(`${element.title} took ${formula.toFixed(3)}% of my life`);
  }
  console.log(`In total that is ${total.toFixed(2)}% of my life`);

  return;
}
logOutSeriesText(seriesDurations);

// Smart-ease - Back to the basics!
// NOnoN0nOYes (Note taking app)
const notes = [];

function saveNote(content, id) {
  return notes.push({ content, id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {
  if (typeof id !== "number" || id === null) return "Use the correct id.";
  for (let i = 0; i < notes.length; i++) {
    const element = notes[i];
    if (element.id === id) return element;
  }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    const element = notes[i];
    console.log(
      `The note with id: ${element.id}, has the following note text: ${element.content}`,
    );
  }
}

logOutNotesFormatted(); // should log out the text below
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

// Unique feature: ability to delete notes
function deleteNotes(id) {
  for (let i = 0; i < notes.length; i++) {
    const element = notes[i];
    if (element.id === id) return notes.splice(element, 1);
  }
}
deleteNotes(1);
console.log("new notes", notes);

// CactusIO-interactive (Smart phone usage app) optional
const activities = [];
let usageLimitMinutes = 75;

function addActivity(date, activity, duration) {
  return activities.push({
    date,
    activity,
    duration,
  });
}

function showStatus(activitiesArr) {
  if (activitiesArr.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  let totalDuration = 0;
  for (let i = 0; i < activitiesArr.length; i++) {
    totalDuration += activitiesArr[i].duration;
  }

  console.log(
    `You have added ${activitiesArr.length} activities. They amount to ${totalDuration} min. of usage`,
  );

  if (totalDuration > usageLimitMinutes) {
    console.log("You have reached your limit, no more smartphoning for you!");
  }
}

function getMostSpentActivity(activitiesArr) {
  if (activitiesArr.length === 0) return "No activities recorded yet.";

  let mostSpent = activitiesArr[0];

  for (let i = 1; i < activitiesArr.length; i++) {
    if (activitiesArr[i].duration > mostSpent.duration) {
      mostSpent = activitiesArr[i];
    }
  }

  return `You spent the most time on ${mostSpent.activity} (${mostSpent.duration} min).`;
}

showStatus(activities);

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Facebook", 20);
addActivity("23/7-18", "News", 28);

showStatus(activities);
console.log(getMostSpentActivity(activities));

// CodeWars 1
function createArray(number) {
  const newArray = [];
  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}

// CodeWars 2
let candidate = {
  minSalary: 120000,
};
let job = {
  maxSalary: 140000,
};
function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary)
    throw new Error("Info is missing");
  if (candidate.minSalary - candidate.minSalary * 0.1 <= job.maxSalary)
    return true;
  else return false;
}
console.log(match(candidate, job));

// CodeWars 3
let candidates = [
  {
    desiresEquity: true,
    currentLocation: "New York",
    desiredLocations: ["San Francisco", "Los Angeles", "Colorado"],
  },
  {
    desiresEquity: false,
    currentLocation: "Chicago",
    desiredLocations: ["New York", "Austin"],
  },
  {
    desiresEquity: true,
    currentLocation: "Seattle",
    desiredLocations: ["Kentucky", "Portland"],
  },
];

let jobNew = {
  equityMax: 0,
  locations: ["New York", "Kentucky"],
};

function match(job, candidatesArr) {
  return candidatesArr.filter((candidate) => {
    const equityMatch = !candidate.desiresEquity || job.equityMax > 0;

    const locationMatch = job.locations.some(
      (jobLoc) =>
        jobLoc === candidate.currentLocation ||
        candidate.desiredLocations.includes(jobLoc),
    );

    return equityMatch && locationMatch;
  });
}

let matchedCandidates = match(jobNew, candidates);
console.log(matchedCandidates);
