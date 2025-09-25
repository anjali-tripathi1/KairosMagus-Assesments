// Assignment18:1)Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

// 2)Call the describe method.

// 3)Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

let myCountry = {
     country : 'India',
     capital : 'Delhi',
     language : 'Hindi',
     population : 1408.0,   // million
     neighbours : ['Bangladesh', 'Nepal', 'China'],
    
}

myCountry.describe = function () {
     console.log(`${this.country} has ${this.population} million ${this.language}-speaking people and ${this.neighbours.length} neighbouring countries are [${this.neighbours}] and a capital called ${this.capital}.`)
}

myCountry.describe()


