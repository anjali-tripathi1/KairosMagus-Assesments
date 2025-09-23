// Assignment13:Arrow FunctionsRecreate the last assignment, but this time create an arrow function called percentageOfWorld3.
// Assignment:13 Functions Calling Other Functions﻿
// 1)Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

// 2)To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

// 3)Call describePopulation with data for 3 countries of your choice.


//  Arrow Function

function percentageOfWorld1 (population) {
       return `has ${population} million people, which is about ${(population / 7900 * 100).toFixed(1)} % of the world `;
}



const describePopulation = (countries, population) => {
     const percentage = percentageOfWorld1(population)
     return `${countries} ${percentage}`
     
}

console.log(describePopulation('India', 1408.0));
console.log(describePopulation('America', 342));
console.log(describePopulation('China', 1441));


const describeCountry2 = (countries, population) => {
       return `${countries} has ${population} million people and Its's ${(population / 7900 * 100).toFixed(1)} of the world`
}

console.log(describeCountry2('India', 1408.0));
