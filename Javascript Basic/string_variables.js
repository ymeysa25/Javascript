// create a string in javascript
var firstName = "Alan";
var lastName = "Turing";


// escaping literal Quotes in Strings
var myStr = "I am a \"Programmer\" from Indonesia";
console.log(myStr)  // I am a "Programmer" from Indonesia

// Quoting Strings with Single Quotes
var myStr = '<a href="facebook.com target="black>link</a>'

// escape sequence in string
/*****
CODE    OUTPUT
\'      single quote
\"      double quote
\\      backslash
\n      newline
\r      carriage return
\t      tab
\b      backspace
\f      form feed
*****/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr)

// Concenate String With plus operator
var ourStr = "I come first. " + "I came second "
console.log(ourStr)

ourStr += "I come Third"
console.log(ourStr)

// find lenght in string
myStrLength = myStr.length
console.log(myStrLength)  // 32

// Bracket Notation  to FInd First Character in String
var firstLetterOfFirstName = "";
var firtName = "Ada";
 
firstLetterOfFirstName = firstName[0]

console.log(firstLetterOfFirstName)  // A'

// String are immutable
// Setup
var myStr = "Jello World";

// change the first the first charater
myStr[0] = "H";
console.log(myStr)  // Jello World

// See the result doesn't change, so if want to change the value
// we have to change all value from string

myStr = "Hello World";
console.log(myStr)  // Hello World

// Bracket Notation to find Last Character in String
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1]

console.log(lastLetterOfFirstName) // a


//  =========== Word Blank ===========
function wordBlank(myNoun, myAdjective, myVerb, myAdverb) {
    // your code below this line
    var result = "";
    result += "The " + " " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;

    // your code above this line
    return result
}

console.log(wordBlank("dog", "big", "ran", "quickly"))
