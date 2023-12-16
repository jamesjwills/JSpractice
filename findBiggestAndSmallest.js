function findBiggestAndSmallest(numbers) {
    // Your code goes here...
    const object = {}
    if (numbers.length > 0) {
    const sortedNumbers = numbers.sort(function(a,b){return a-b});
    object.biggest = sortedNumbers[sortedNumbers.length - 1];
    object.smallest = sortedNumbers[0];
    return object;
    } else {
        return object;
    }

    }

    findBiggestAndSmallest([1, 2, 99, 100])

// returns { biggest: 100, smallest: 1 }