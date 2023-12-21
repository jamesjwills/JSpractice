//This function should take two numbers as its arguments, n and x. The return value should be equal or greater than n and the nearest multiple of x.
//The function should return -1 when provided a 0 for the nearest multiple.

function roundUpToNearestMultiple(n, x) {
    if (x == 0) {
        return -1;
    }

    let i = 1;
    while (x * i < n) {
        i++;
    }
    return x * i;
}

console.log(roundUpToNearestMultiple(21, 5));
console.log(roundUpToNearestMultiple(4, 3));
console.log(roundUpToNearestMultiple(4, 17));
console.log(roundUpToNearestMultiple(41, 0));
console.log(roundUpToNearestMultiple(81, 9));