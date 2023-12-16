function findTicketPrices(emailString) {
    // Your code goes here...
    
    for (let i = 0; i < emailString.length; i++) {
        if (!isNaN(parseInt(emailString[i]))) {
            return true;
        }
        }
        return false;
    }

    
    findTicketPrices("Hello, I think I can pay 11 pounds, is that alright?");
    // returns true
    
    findTicketPrices("I would be willing to pay 30 for a ticket");
    // returns true
    
    findTicketPrices("Thanks for making this event pay what you can afford!");
    // returns false