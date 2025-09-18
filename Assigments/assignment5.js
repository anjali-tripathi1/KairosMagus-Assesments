// Assignment:5---Taking Decisions: if / else Statements﻿
// If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

    let averageCountry = 33  // million
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