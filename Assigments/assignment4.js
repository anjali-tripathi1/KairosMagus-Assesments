// Assignment:4---Basic Operators﻿
// If your country split in half, and each half would contain half the population, then how many people would live in each half?

// Increase the population of your country by 1 and log the result to the console.

// Finland has a population of 6 million. Does your country have more people than Finland?

// The average population of a country is 33 million people. Does you country have less people than the average country?

// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

let country = 'India' 
let continent = 'Asia'
let population = 1408.0  // million
let eachHalf = population / 2
console.log(`Each Half is:  ${eachHalf} million`);
population++
console.log(`Population increase by 1 : ${population} million`);



let populationFinland = 6  // million
console.log(`Does ${country} have more people than Finland : ${population > populationFinland ? 'true' : 'false'}` );

let averageCountry = 33  // million
console.log(`Does ${country} have less people than averageCountry : ${population < averageCountry ? 'true' : 'false'}` );


language = 'English'
let description = `${country} is in ${continent} and its ${population} is million people speak ${language}`
console.log(description);