
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



// code Challenge for functions:CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.
// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.


const calcAverage = (score1, score2, score3) => {
      return  (score1 + score2 + score3) / 3
}


let scoreDolphins1 = calcAverage(44, 23, 71)
let scoreKoalas1 = calcAverage(65, 54, 49)


let scoreDolphins2 = calcAverage(85, 54, 41)
let scoreKoalas2 = calcAverage(23, 34, 27)


function checkWinner (avgDolphins, avgKoalas) {
     if(avgDolphins >= 2 * avgKoalas){
            console.log(`Dolphins win : ${(avgDolphins).toFixed(0)} vs ${(avgKoalas).toFixed(0)}`)
     } else if (avgKoalas >= 2 * avgDolphins) {
            console.log(`Kolas win : ${(avgKoalas).toFixed(0)} vs ${(avgDolphins).toFixed(0)}`)
     } else {
           console.log('No teams win!')
     }
}


checkWinner(scoreDolphins1, scoreKoalas1)
checkWinner(scoreDolphins2, scoreKoalas2)




// code challenge for Arrays:Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.


function calcTip (bill) {
      return bill >= 50 && bill <= 300 ? `tip ${bill * 0.15} % of the bill`  :  `tip ${bill * 0.2} % of the bill` 
} 

console.log(calcTip(100));

let bills = [125, 555, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

const totals = bills.map((bill, tips) => bill + tips ); 

 console.log(bills);
 console.log(tips);
 console.log(totals);
 

