function isThisAPalindrome(str) {
    // Your code goes here...
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    if (str === reversedString) {
        return true;
    } else {
        return false;
    }
    }

    isThisAPalindrome('yay');
// returns true

isThisAPalindrome('no');
// returns false