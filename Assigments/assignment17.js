// Assignment17:1)Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

// 2)Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.


let myCountry = {
     country : 'India',
     capital : 'Delhi',
     language : 'Hindi',
     population : 1408.0,   // million
     neighbours : ['Bangladesh', 'Nepal', 'China']
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries are [${myCountry.neighbours}] and a capital called ${myCountry.capital}.`);


myCountry.population += 2  // million
console.log(`Population After Increment : ${myCountry.population} million.`);
 
myCountry["population"] -= 2   //  million
console.log(`Population After Decrement : ${myCountry["population"]} million.`);

myCountry.neighbours.push('India')
console.log(myCountry.neighbours);
