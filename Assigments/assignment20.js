// Assignment20:1)Let's bring back the populations array from a previous assignment.

// 2)Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.

// 3)Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.



let populations = [1408.0, 1441, 432, 6.04]   // million

function percentageOfWorld1 (country, populations) {
    return `${country}'s Population is ${populations} million that is ${(populations / 7900 * 100).toFixed(1)} % of the world.`
   
}

let percentages2 = []
for(let i = 0; i < populations.length; i++){
    const countries = ['India', 'China', 'America', 'Singapore']
    percentages2.push(percentageOfWorld1(countries[i], populations[i]))
    
}

console.log(percentages2);



let percentages = [
     percentageOfWorld1('India', populations[0]),
     percentageOfWorld1('China', populations[1]),
     percentageOfWorld1('America', populations[2]),
     percentageOfWorld1('Singapore', populations[3])
]

console.log(percentages);
