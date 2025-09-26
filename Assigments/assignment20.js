// Assignment20:1)Let's bring back the populations array from a previous assignment.

// 2)Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.

// 3)Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.



let populations = [1408.0, 1441, 432, 6.04]   // million

function percentageOfWorld1 (country, populations) {
    return `${country}'s Population is ${populations} million that is ${(populations / 7900 * 100).toFixed(1)} % of the world.`
   
}

let percentages2 = []
for(let i = 0; i < populations.length; i++){
    return percentages2.push(populations[i] / 7900 * 100)
    //  percentages2.push(percentageOfWorld1(populations[i]))
}

console.log(percentages2);


