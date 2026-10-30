const sumAll = function(num1, num2) {
    if ((num1 < 0 || !Number.isInteger(num1)) || (num2 < 0 || !Number.isInteger(num2))) {
        return "ERROR";
    }
    
    let arr = [num1, num2].sort((a,b) => a - b);
    let from = arr[0];
    let to = arr[1];

    let sum = 0;
    
    // Check inputs

    // Sort inputs


    // Loop $from to $to 
    for (i = from; i <= to; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
