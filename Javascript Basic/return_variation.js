// Returning Boolean Values From Functions
function isLess(a, b){
    return a < b
}

console.log(isLess(10, 12))  // true
console.log(isLess(13, 12))  // false


// Returning Early Pattern from Functions
function abTest(a, b) {
    if (a < 0 || b < 0){
        return undefined;
    }
    
    // 2 ^ (sqrt(a) + sqrt(b))
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
}

console.log(abTest(-2, 2))  // undefined
console.log(abTest(4, 4))   // 16


// Counting Card
// just a little game, the rules is when  we see a lower card 
// the count varible goes up and when we see a higher card 
// the count variable goes down

var count = 0;
function cc(card){
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
                        
        default:
            break;
    }

    // ternary variable
    var holdbet = "Hold";
    if (count > 0) {
        holdbet = "bet"
    }

    return count + " " + holdbet
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(4))  // 1 bet


