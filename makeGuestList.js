function makeGuestList(person) {
    
    function extractFromObj () {
        let fname, lname;
        for (let i = 0; i < person['name'].length; i++) {
            if (person['name'][i] === ' ') {
                fname = person['name'].slice(0,i);
                lname = person['name'].slice(i+1);
                return [fname, lname];
            }
        }
    }

    let extractedNames = extractFromObj();
    
    return {
        firstName: extractedNames[0],
        lastName: extractedNames[1],
        age: person.age
    };
    }

   console.log(makeGuestList({name: "Paul Erdos", age: 40}))