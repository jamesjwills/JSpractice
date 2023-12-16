function orderSupplies(supplies, guests) {
    let supplyCost = 0;
    for (let key in supplies) {
        
        supplyCost += supplies[key];
        
    }

    return supplyCost*guests;
    }

console.log(orderSupplies({ cake: 2, iceCream: 7 }, 2));

// should return 18

console.log(orderSupplies({ plates: 2, cups: 1, forks: 1, partyHats: 4 }, 20));
// should return 160