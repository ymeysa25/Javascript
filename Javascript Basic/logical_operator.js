// ======= Equality Operator =======
/*
3 == 3  // True
3 == "3"  / True

=================
Strict Equality
3 === 3 // True
3 === '3'  // False
*/

console.log("======= Less Operator =======")

console.log(3 == 3)
console.log(3 == '3')

console.log(3 === 3)
console.log(3 === '3')

// ======= Inequality Operator =======
console.log("======= Inequality Operator =======")
console.log(3 != 3)  // False
console.log(3 != '3')  // False

console.log(3 !== 3)  // False
console.log(3 !== '3')  // True

// ======= Greater Operator =======
console.log("======= Greater Operator =======")
console.log(3 > 3)  // False
console.log(3 >= 3)  // True

// ======= Less Operator =======
console.log("======= Less Operator =======")
console.log(3 < 3)  // False
console.log(3 <= 3)  // True


// ======= Logical Operator =======
console.log("======= Logical Operator =======")

// AND
function testLogicalAnd(val){
    if (val <= 50 && val >= 25){
        return "Yes"
    }
    return "No"
}

console.log(testLogicalAnd(36))

function testLogicalOr(val){
    if (val < 10 || val > 20){
        return "Outside"
    }
    return "Inside"
}
console.log(testLogicalOr(6))