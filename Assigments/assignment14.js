
// Assignment14:Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

// Log to the console whether the array has 4 elements or not (true or false).

// Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.


let populations = [1408.0, 342, 1441 ,6.04 ]   
console.log(populations.length === 4 ? `array has [${populations}] ${populations.length} elements : true` : `array has [${populations}] ${populations.length} elements : false`);

function percentageOfWorld1 (country, population) {
     return `${country}'s population is ${population} million that is ${(population / 7900 * 100).toFixed(1)} % of the world population.`
}

let percentages = [
     percentageOfWorld1('India', 1408.0),
     percentageOfWorld1('China', 1441),
     percentageOfWorld1('America', 342),
     percentageOfWorld1('Singapore', 6.04),
]

console.log(percentages);
