
// Assignment1:Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// Log their values to the console.

const country = 'India';
let continent = 'Asia';
let population = 1408.0;

console.log(`Country is: ${country} and Continent is: ${continent} and Population is: ${ population} in million.`);





// Assignment2:Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

// Log the types of isIsland, population, country and language to the console.


const isIsland = false;   // India is not a island
let language;
console.log(`Type of isIsland is : ${typeof (isIsland)}`);
console.log(`Type of language is : ${typeof (language)}`);
console.log(`Type of population is: ${typeof (population)}`);
console.log(`Type of country is: ${typeof (country)}`);



// Assignment3:Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

// Try to change one of the changed variables now, and observe what happens.


const spokenLanguage = 'Hindi'
console.log(`spokenLanguage is: ${spokenLanguage }`);

// const spokenLanguage = 'English'
// console.log(`spokenLanguage is: ${spokenLanguage}`);   // throws an Error




// Coding Challenge #1 
// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula: 
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter). 
// Your tasks: 
// 1. Store Mark's and John's mass and height in variables 
// 2. Calculate both their BMIs using the formula (you can even implement both 
// versions) 
// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John. 
// Test data: 
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
// m tall. 
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
// m tall. 



//   solution-1


let markMass1 = 78
let markHeight1 = 1.69

let markMass2 = 95
let markHeight2 = 1.88

let johnMass1 = 92
let johnHeight1 = 1.95

let johnMass2 = 85
let johnHeight2 = 1.76

const bmiMark1 = (markMass1 / (markHeight1 * markHeight1)).toFixed(2)
const bmiJohn1 = (johnMass1 / (johnHeight1 * johnHeight1)).toFixed(2)


const bmiMark2 = (markMass2 / (markHeight2 * markHeight2)).toFixed(2)
const bmiJohn2 = (johnMass2 / (johnHeight2 * johnHeight2)).toFixed(2)

// console.log(`Mark's Body Mass Index : ${bmiMark}`)
// console.log(`John's Body Mass Index : ${bmiJohn}`);

let markHigherBMI = true


if(bmiMark1 > bmiJohn1 ){
     console.log(`mark's bmi (${bmiMark1} is greater than john's bmi ${bmiJohn1}) and Result is : ${markHigherBMI}`);

} else {
     markHigherBMI = false
     console.log(`mark's bmi (${bmiMark1} is less than john's bmi ${bmiJohn1}) and Result is : ${markHigherBMI}`);
     
}




if(bmiMark2 > bmiJohn2 ){
     console.log(`mark's bmi (${bmiMark2} is greater than john's bmi ${bmiJohn2}) and Result is : ${markHigherBMI}`);

} else {
     markHigherBMI = false
     console.log(`mark's bmi (${bmiMark2} is less than john's bmi ${bmiJohn2}) and Result is : ${markHigherBMI}`);
     
}




//    solution-2

function calculateBmi (markMass, markHeight, johnMass, johnHeight) {
    let markBmi = ( markMass / (markHeight  * markHeight) ).toFixed(2)
    let johnBmi = (johnMass /  (johnHeight  * johnHeight )).toFixed(2)
    let markHigherBMI = true;
    if(markBmi > johnBmi){
         return `mark's bmi (${markBmi} is greater than john's bmi ${johnBmi}) and Result is : ${markHigherBMI}`
    } else {
         markHigherBMI = false
         return `mark's bmi (${markBmi} is less than john's bmi ${johnBmi}) and Result is : ${markHigherBMI}`
    }

}

console.log(calculateBmi( 78, 1.69, 92, 1.95 ));    // Data 1
console.log(calculateBmi( 95, 1.88, 85, 1.76));    // Data 2

  


// Assignment:4---Basic Operators﻿
// If your country split in half, and each half would contain half the population, then how many people would live in each half?

// Increase the population of your country by 1 and log the result to the console.

// Finland has a population of 6 million. Does your country have more people than Finland?

// The average population of a country is 33 million people. Does you country have less people than the average country?

// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.


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




// Assignment:5---Taking Decisions: if / else Statements﻿
// If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

    let newCountry = 'Portugal';
    let newPopulation = 55; // million
    if(newPopulation > averageCountry){
         console.log(`${newCountry}'s population is ${Math.abs(averageCountry - newPopulation)} million below average.`);
         
    } 

    averageCountry = 13;
    if(newPopulation > 13){
     
        console.log(`${newCountry}'s population is ${newPopulation - averageCountry} million Above average.`);
    } else {
         console.log(`${newCountry}'s population is ${Math.abs(averageCountry - newPopulation)} million below average.`);
    }

    averageCountry = 130
    if(newPopulation > averageCountry){
         console.log(`${newCountry}'s population is ${Math.abs(averageCountry - newPopulation)} million below average.`);
    } else {
         console.log(`${newCountry}'s population is ${Math.abs(newPopulation - averageCountry)} million above average.`);
        
    }

// Assignment:6--Type Conversion and Coercion﻿
// Predict the result of these 5 operations without executing them:

// console.log('9' - '5'); // -> ? 
// console.log('19' - '13' + '17'); // -> ?
// console.log('19' - '13' + 17); // -> ?
// console.log('123' < 57); // -> ?
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?
// Execute the operations to check if you were right.


 console.log('9' - '5');   
 console.log('19' - '13' + '17');  
 console.log('19' - '13' + 17);    
 console.log('123' < 57);        
 console.log(5 + 6 + '4' + 9 - 4 - 2);  

 


//   Assignment:8--Logical Operators﻿
// Comment out the previous code so the prompt doesn't get in the way.

// Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.

// Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

// If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.

// Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).



let country1 = 'portugal';
let language1 = 'English';
let population1 = 45;   // million
let isIsland1 = false;

if(language1 === 'English' && population1 < 50 && !isIsland ){
      console.log(`You should live in ${country1}`);
} else {
      console.log(`${country1} does not meet your criteria.`);
}



let country2 = 'Canada';
let language2 = 'English';
let population2 = 55;    // million
let isIsland2 = true;

if(language2 === 'English' && population2 < 50 && !isIsland2 ){
      console.log(`You should live in ${country2}`);
} else {
      console.log(`${country2} does not meet your criteria.`);
}





// Assigment-9 The switch Statement﻿
// Use a switch statement to log the following string for the given language:
// chinese or mandarin: 'MOST number of native speakers!';
// spanish: '2nd place in number of native speakers';
// english: '3rd place';
// hindi: 'Number 4';
// arabic: '5th most spoken language';
// for all other simply log 'Great language too :D'

   const key = ''   

   switch (key) {
       case 'chinese or mandarin':
          console.log('Most number of native speakers!')
         break
         
       case 'spanish' :  
         console.log('2nd place in number of native speakers!')
        break 

       case 'english' :  
         console.log('3rd place')
        break   
       
       case 'hindi' :  
         console.log('Number 4')
        break   

       case 'arabic' :  
         console.log('5th most spoken language.')
        break 
       
       default :
         console.log('Great language too')
        break  
   }
   
 



//    Assignment:10--The Conditional (Ternary) Operator﻿
// If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.


console.log(`${country1} population is ${population1 > 33 ? 'above' : 'below'} average.`);

population1 = 13
console.log(`${country1} population is ${population1 > 33 ? 'above' : 'below'} average.`);

population1 = 130
console.log(`${country1} population is ${population1 > 33 ? 'above' : 'below'} average.`);

population1 = 45
console.log(`${country1} population is ${population1 > 33 ? 'above' : 'below'} average.`);




// Code Challenge:CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
// Note: Don't round the BMI values. Leave them as they are.

    
    function calculateBmi (markMass, markHeight, johnMass, johnHeight) {
    let markBmi = ( markMass / (markHeight  * markHeight) ).toFixed(2)
    let johnBmi = (johnMass /  (johnHeight  * johnHeight )).toFixed(2)
    
    if(markBmi > johnBmi){
         return `mark's bmi (${markBmi}) is higher than john's bmi (${johnBmi})`
    } else {
        
         return `john's bmi (${johnBmi}) is higher than mark's bmi (${markBmi})` 
    }

}

console.log(calculateBmi( 78, 1.69, 92, 1.95 ));    // Data 1
console.log(calculateBmi( 95, 1.88, 85, 1.76));    // Data 2





// Assignment11:Functions 
// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

// Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

function describeCountry (country, population, capitalCity) {
       return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

console.log(describeCountry('Sigapore', 7, 'Sigapore'));
console.log(describeCountry('Finland', 10, 'Helsinki'));
console.log(describeCountry('America', 12, 'Washigaton'));




// Assignment12:Function Declarations vs. Expressions﻿
// 1)The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

// 2)To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

// 3)Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

// 4)Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

//   Function Declaration
function percentageOfWorld1 (population) {
       return ` has ${population} million people, so it's about ${(population / 7900 * 100).toFixed(1)} % of the world `;
}


console.log("China",percentageOfWorld1( 1441));
console.log("India",percentageOfWorld1( 1408.0));
console.log("America",percentageOfWorld1( 342));

//  Function Expression

const percentageOfWolrd2 = function (population) {
     return `has ${population} million people, so it's about ${(population / 7900 * 100).toFixed(1)} % of the world `;
}


console.log("China", percentageOfWolrd2(1441));
console.log("India", percentageOfWolrd2(1408.0));
console.log("America", percentageOfWolrd2(342));



// Assignment13:Arrow FunctionsRecreate the last assignment, but this time create an arrow function called percentageOfWorld3.
// Assignment:13 Functions Calling Other Functions﻿
// 1)Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

// 2)To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

// 3)Call describePopulation with data for 3 countries of your choice.


//  Arrow Function

const describePopulation = (countries, population) => {
     const percentage = percentageOfWorld1(population)
     return `${countries} ${percentage}`
     
}

console.log(describePopulation('India', 1408.0));
console.log(describePopulation('America', 342));
console.log(describePopulation('China', 1441));
