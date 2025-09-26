// Assignment21:1)Store this array of arrays into a variable called listOfNeighbours:

// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// 2)Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country.

// 3)You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway


let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];


for(let i = 0; i < listOfNeighbours.length; i++ ){
      for(let j = 0; j < listOfNeighbours[i].length; j++){
           console.log(`Neighbour : ${listOfNeighbours[i][j]} for each country.`)
      }
}

let array = [['canada', 'Mexico', ['Norway'], ['Bangladesh'], ['America']]]
// for(let i = 0; i < array.length; i++){
//       for(let j = 0; j < array.length[i]; j++){
//             for(let k = 0; k < array.length[j]; k++ ){
//                    console.log(array[i][j][k]);
                   
//             }
//       }
// }

const index = array.indexOf('Mexico')
if(index !== -1){
    array.splice(index , 0, 'Mumbai')
}
console.log(array);
