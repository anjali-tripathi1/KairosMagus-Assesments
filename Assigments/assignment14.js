
// Assignment14:Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

// Log to the console whether the array has 4 elements or not (true or false).

// Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.


let populations = [1408.0, 342, 1441 ,6.04 ]   
console.log(populations.length === 4 ? `array has [${populations}] ${populations.length} elements : true` : `array has [${populations}] ${populations.length} elements : false`);

function percentageOfWorld1 (country, populations) {
     return `${country}'s population is ${populations} million that is ${(populations / 7900 * 100).toFixed(1)} % of the world population.`
}

let percentages = [
     percentageOfWorld1('India', populations[0]),
     percentageOfWorld1('America', populations[1]),
     percentageOfWorld1('China', populations[2]),
     percentageOfWorld1('Singapore', populations[3]),
     
]

console.log(percentages);
