// Age-ify (A future age calculator)
let yearOfBirth = 2003; // number
let yearFuture = 2120; // number
let futureAge = yearFuture - yearOfBirth;
console.log(`You will be ${futureAge} years old in ${yearFuture}`);

// Goodboy-Oldboy (A dog age calculator)
let dogYearOfBirth = 2005;
let dogYearFuture = 2015;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = false;
console.log(
  `Your dog will be ${shouldShowResultInDogYears ? `${dogYear * 7} dog` : `${dogYear} human`} years old in ${dogYearFuture}`,
);

// Housey pricey (A house price estimator)
let volumePeter = 8 * 10 * 10;
let gardenPeter = 100;
let volumeJulia = 5 * 11 * 8;
let gardenJulia = 70;
let housePricePeter = volumePeter * 2.5 * 1000 + gardenPeter * 300;
let housePriceJulia = volumeJulia * 2.5 * 1000 + gardenJulia * 300;

if (housePricePeter > 2500000) {
  console.log(`Peter pays too much. He pays ${housePricePeter - 2500000} more`);
} else {
  console.log(
    `Peter pays too little. He pays ${2500000 - housePricePeter} less`,
  );
}
if (housePriceJulia > 1000000) {
  console.log(`Julia pays too much. He pays ${housePriceJulia - 1000000} more`);
} else {
  console.log(
    `Julia pays too little. He pays ${1000000 - housePriceJulia} less`,
  );
}

// Ez Namey (Startup name generator)
let firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "Bright",
  "Modern",
  "Smart",
  "Creative",
  "Happy",
  "Fast",
  "Bold",
];

let secondWords = [
  "Solutions",
  "Ideas",
  "Growth",
  "Launch",
  "Design",
  "Teams",
  "Systems",
  "Strategy",
  "Results",
  "Success",
];

const randomNumber = Math.floor(Math.random() * 10);
let randomFirstWord = firstWords[randomNumber];
let randomSecondWord = secondWords[randomNumber];
let startupName = `${randomFirstWord} ${randomSecondWord}`;

console.log(
  `The startup: "${startupName}" contains ${startupName.length} characters`,
);
