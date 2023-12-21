//Given an input integer n, create a while loop that utilizes arithmetic to store the 
//frequency of each digit present in n in a dictionary frequency_map. 
//The input number n will be provided as a numeric data type, not a string. 
//For each loop iteration, you must update frequency_map before reducing n.

const digitsInNumber = function (n) {
    let frequency_map = {};
    while (n > 0) {
        const digit = n % 10;

        if (frequency_map[digit.toString()] !== undefined) {
            frequency_map[digit.toString()]++;
        } else {
            frequency_map[digit.toString()] = 1;
        }

        n = Math.floor(n / 10);
    }
    return frequency_map;
}

console.log(digitsInNumber(2354332541));