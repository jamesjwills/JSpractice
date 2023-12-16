function checkIsPrime(num) {
    // Your code goes here...
    if (num == 1) {
        return false;
    }
    let i = 2;
    while (num % i != 0 && i < num) {
        i++;
    }
    if (i === num) {
        return true;
    } else {
        return false;
    }
    
    }

    checkIsPrime(2)
// returns true

checkIsPrime(4)
// returns false