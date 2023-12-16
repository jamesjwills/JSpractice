function findFirstOdd(numbers) {
    // Your code goes here...
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
            return numbers[i];
        }
    }
    }