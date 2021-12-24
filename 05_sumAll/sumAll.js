const sumAll = function(num1, num2) {
    // Return error if either argument is negative or not a number
    if (num1 < 0 || num2 < 0 || typeof num1 != 'number' || typeof num2 != 'number') {
        return "ERROR";
    }
    // add from the smallest number to the largest number
    let small = num1;
    let large = num2;
    if (num1 > num2) {
        small = num2;
        large = num1;
    }
    let ret = 0;
    for (let i = small; i <= large; i++){
        ret += i;
    }
    return ret;
};

// Do not edit below this line
module.exports = sumAll;
