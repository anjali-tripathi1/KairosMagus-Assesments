
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



function calculateToBmi (markMass, markHeight, johnMass, johnHeight) {
    let markBmi = (( markMass / markHeight ) ** 2 ).toFixed(2)
    let johnBmi = ((johnMass /  johnHeight ) ** 2 ).toFixed(2)
    let markHigherBMI = true;
    if(markBmi > johnBmi){
         return `mark's bmi (${markBmi} is greater than john's bmi ${johnBmi}) and Result is : ${markHigherBMI}`
    } else {
         markHigherBMI = false
         return `mark's bmi (${markBmi} is less than john's bmi ${johnBmi}) and Result is : ${markHigherBMI}`
    }

}

console.log(calculateToBmi(78, 1.69, 92, 1.95));  // Data 1
console.log(calculateToBmi( 95, 1.88, 85, 1.76));  // Data 2

 


