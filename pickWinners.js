function pickWinners(numbers) {
    const arr = [];
    for (let i = 1; i < numbers.length; i+=2) {
        if (numbers[i] % 2 != 0) {
            arr.push({seat: i, ticketCost: numbers[i]});
        }
    } 
    return arr;
    }

console.log(pickWinners([6, 7, 12, 49]))
// should return [{seat: 1, ticketCost: 7}, {seat: 3, ticketCost: 49}]
console.log(pickWinners([1, 3, 5, 7, 9, 11]))
// should return [{seat: 1, ticketCost: 3}, {seat: 3, ticketCost: 7}, {seat: 5, ticketCost: 11} ]
console.log(pickWinners([1, 6, 13, 8, 29, 50]))
// should return []