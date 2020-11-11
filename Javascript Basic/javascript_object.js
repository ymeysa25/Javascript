// object is same like array but we use properties to call the values
/*
var objectName = {
    propertiesName : Values,
    ...
}
*/

var ourDog = {
    "name" : "Camper",
    "Legs" : 4,
    "tails" : 1,
    "friends" : ["Joe", "Tesla"]
}

// == How to call object values ==
// accessing with dot notation
console.log(ourDog.name)

// accessing with Bracket Notation
console.log(ourDog['tails'])

// accessing object properties with variables
key_name = "name"
console.log(ourDog[key_name])

// ==== Manipulating Object ====\
console.log("==== Manipulating Object ====")
var myFav = {
    "foods" : ["Bakso", "Pizza", "Rendang"],
    "sports": ["basket", "volly"],
    "drinks" : ["cola", "juice", "tea", "coffee"]
}

// updating Obj Properties
myFav.foods = ["Pizza", "Rendang"]
console.log(myFav.foods)  // [ 'Pizza', 'Rendang' ]

// Add new properties to an Object
myFav['movie'] = "The Avenger"
console.log(myFav.movie)  // The Avenger

// deleting properties to an object
delete myFav.movie
console.log(myFav.movie)  // undefined

// Testing Object Properties
console.log(myFav.hasOwnProperty("interest"))  // false
console.log(myFav.hasOwnProperty("sports"))  // true


