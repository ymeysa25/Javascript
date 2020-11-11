function testCondition(val){
    if (val > 10){
        return "Greater than 10";
    }
    else if (val < 5){
        return "Smaller than 5";
    }
    else{
        return "Between 5 and 10"
    }
}


console.log(testCondition(7));

// ============ Golf Score ========
var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfSore(par, strokes){
    if (strokes == 1){
        return names[0]
    }
    else if (strokes <= par - 2){
        return names[1]
    }
    else if (strokes == par - 1){
        return names[2]
    }
    else if (strokes == par){
        return names[3]
    }
    else if (strokes == par + 1){
        return names[4]
    }
    else if (strokes == par + 2){
        return names[5]
    }
    else if (strokes == par + 3){
        return names[6]
    }
}

console.log(golfSore(5, 4))
console.log(golfSore(5, 2))
console.log(golfSore(5, 8))


// ============ Swicth Case  ============

function caseInSwitch(val){
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "Out of Limit";
            break;
    }

    return answer;
}

console.log(caseInSwitch(21))
 