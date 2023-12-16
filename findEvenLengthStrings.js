function findEvenLengthStrings(items) {
    // Your code goes here...
    let evenLengthStrings = [];
    for (let i = 0; i < items.length; i++) {
        if (typeof items[i] == 'string' && items[i].length % 2 == 0) {
            evenLengthStrings.push(items[i]);
        }
    }
    return evenLengthStrings;
    }

findEvenLengthStrings(['hi', 'bye'])
// returns ['hi']

findEvenLengthStrings(['bye'])
// returns []

findEvenLengthStrings(['keepOnlyMe', 'notMe', 4])
// returns ['keepOnlyMe']