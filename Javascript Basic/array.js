// element insiide array can be any datatype
var ourArray = ["John", 23];

var myArray = ["Quincy", 1, 3, 3.6];
console.log(myArray)


//  ======= Nested Array =======
var ourArray = [["the universe", 42],
                ["Everything", 1010]]

var myArray = [["Bulls", 23],  "White Sox", 32]
console.log(myArray)


// ======= Access Array Data with Indexes =======
var ourArray = [50, 60, 70];
var ourData = ourArray[0]; // Equals 50
console.log(ourData) // 50

// ======= MModify Array Data with Indexes =======
var ourArray = [18, 64, 99];
console.log(ourArray)  // [ 18, 64, 99 ]

ourArray[1] = 45
console.log(ourArray) // [ 18, 45, 99 ]

// ======= Accesing Multi-Dimensional Arrays with Indexes =======
var ourArray = [["the universe", 42],
                ["Everything", 1010]]

var myData = ourArray[0][0];
console.log(myData)  // THe Universe

// ======= Manipulate Arrays wiht push() =======
var myArray = [["Dog", 3], ["Cat", 2]];
myArray.push( ["Bird", 4])
console.log(myArray)   // [ [ 'Dog', 3 ], [ 'Cat', 2 ], [ 'Bird', 4 ] ]

// ======= Manipulate Array wiht pop() and shift() =======
// pop function use to remove the last element in array
var ourArray = [1, 2, 3];
var removeFromOurArray = ourArray.pop()

console.log(ourArray) // [1. 2]

// shift function use to remove the first element in array
var myArray = [["Dog", 3], ["Cat", 2]];
myArray.shift()
console.log(myArray) // [ [ 'Cat', 2 ] ]

// unshift function use to add elemen in first index array
myArray.unshift(["Bird", 5])
console.log(myArray)  // [ [ 'Bird', 5 ], [ 'Cat', 2 ] ]




