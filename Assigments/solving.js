
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
eachHalf++
console.log(`Each Half Population increase by 1 : ${eachHalf} million`);



let populationFinland = 6  // million
if(population > populationFinland){
     console.log(`population ${population} million is More than populationFinland ${populationFinland} million`)
} else {
     console.log(`population ${population} million is less than populationFinland ${populationFinland} million`)  
}

let average = 33  // million

if(population < average){
      console.log(`population ${population} million is less than average ${average} million`);
      
} else {
      console.log(`population ${population} million is More than average ${average} million`);
}


let description = 'Portugal is in Europe, and its 11 million people speak portuguese'




// Assignment:5---Taking Decisions: if / else Statements﻿
// If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.





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

 

//  Assignment:7---Declare a variable numNeighbours based on a prompt input like this:

// prompt('How many neighbour countries does your contry have?');
// If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

// Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

// Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

// Test the code with different values of numNeighbours, including 1 and 0.

// Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?

// Finally, convert numNeighbours to a number, and watch what happens now when you input 1.

// Reflect on why we should use the === operator and type conversion in this situation.
 


  let numNeighbours = prompt('How many neighbour countries does your contry have?')
  if(numNeighbours == 1){
       console.log('Only 1 border.')
  } else if (numNeighbours > 1) {
       console.log('More than 1 border.')
  } else {
       console.log('No borders.')
  }

  numNeighbours(5) 
 
  