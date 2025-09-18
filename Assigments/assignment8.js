//   Assignment:8--Logical Operators﻿
// Comment out the previous code so the prompt doesn't get in the way.

// Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.

// Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

// If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.

// Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).


let isIsland = false;
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
