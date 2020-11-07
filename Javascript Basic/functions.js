// function allow us to write reusable code in JS

function ourReusableFunction() {
    // inside this bracket will call everytime the fuction is called
    console.log("Hello, World")
}

ourReusableFunction()
ourReusableFunction()
ourReusableFunction()

// ======= Passing Values to Functions with Arguments =======
function ourFunctionWithArgs(a, b) {
    console.log(a + b);
}

ourFunctionWithArgs(10, 5); // 15

// func1 Global Scope and Functions =======
// scope reverse the visibility of variables

var myGlobal = 10; // this is a global scope variable

function func1(){
    var oopsGlobal = 5; // this is a local scope variable that can be used only in function
    // console.log(oopsGlobal)
}

function func2() { 
    var output = "";
    if (typeof myGlobal != "undefined")  {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;
    }

    console.log(output)
}
 
func1()
func2() 

// ======= Global Vs. Local Scope in Functions =======
 var outerWear = "T-Shirt";

 function myOutfit(){
     var outerWear = "Sweater";
     return outerWear
 }

 console.log(myOutfit())  // Sweater
 console.log(outerWear)   // T-Shirt


 // ======= Stand Line =======
 function nextLine(arr, item){
    arr.push(item);
    return arr.shift();
 }
var testArray = [1, 2, 3, 4, 5, 6];
console.log("before : " + JSON.stringify(testArray))    // before : [1,2,3,4,5,6]
console.log(nextLine(testArray, 7))                     // 1
console.log("after : " + JSON.stringify(testArray))     // after : [2,3,4,5,6,7]

// ======= Booelan =======
function ourBoolean(isItTrue){
    if (isItTrue){
        return "Yes, it's True"
    }
    return "No, it's False"
}

console.log(ourBoolean(true))
console.log(ourBoolean(false))
