function isPartyViable(guests) {
    let sumOfTickets = 0;
    for (let i = 0; i < guests.length; i++) {
        sumOfTickets += guests[i]["paidForTicket"];
    }

    if (guests.length < 5 || sumOfTickets < 100) {
        return false;
    } else {
        return true;
    }
    }

    const guests1 = [
        { name: "diya", paidForTicket: 15 },
        { name: "amul", paidForTicket: 2 },
        { name: "saleh", paidForTicket: 2 },
        { name: "philippa", paidForTicket: 30 },
      ]
     console.log(isPartyViable(guests1));
      // should return false
      
      const guests2 = [
        { name: "diya", paidForTicket: 15 },
        { name: "amul", paidForTicket: 2 },
        { name: "saleh", paidForTicket: 2 },
        { name: "philippa", paidForTicket: 30 },
        { name: "kev", paidForTicket: 6 },
        { name: "sarah", paidForTicket: 11 },
      ]
      console.log(isPartyViable(guests2));
      // should return false
      
      const guests3 = [
        { name: "diya", paidForTicket: 15 },
        { name: "amul", paidForTicket: 20 },
        { name: "saleh", paidForTicket: 2 },
        { name: "philippa", paidForTicket: 30 },
        { name: "kev", paidForTicket: 26 },
        { name: "sarah", paidForTicket: 11 },
      ]
      console.log(isPartyViable(guests3));
      // should return true