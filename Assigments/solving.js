
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













