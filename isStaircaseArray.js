//function which takes an array of integers as input and outputs
//a staircase array: an array of subarrays of integers where each subarray is 
//one digit longer than the previous one
//returns false if cannot be done.

const isStaircaseArray = function(nums) {
    let staircase = [];
    let columnLength = 0;
    while (nums.length > 0) {
        columnLength++;
        let column = [];

        for (let i = 0; i < columnLength; i++) {
            column.push(nums.shift());
            if (nums.length == 0 && i < columnLength - 1) {
                return false;
            }
            
        }
        staircase.push(column);

    }
    return staircase;

}

console.log(isStaircaseArray([1,2,3,4,5,6]));
console.log(isStaircaseArray([1,2,3]));
console.log(isStaircaseArray([1,2,3,4,5]));

