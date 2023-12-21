function checkIsPrime(num) {
    // Your code goes here...
    if (num == 1) {
        return false;
    }
    let i = 2;
    while (num % i != 0 && i < Math.floor(sqrt(num))) {
        i++;
    }
    if (i === num) {
        return true;
    } else {
        return false;
    }
    
    }

console.log(checkIsPrime(2));
// returns true

console.log(checkIsPrime(4));
// returns false