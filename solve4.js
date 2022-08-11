// problem no. 04

// ------ calculate public bus fare -------

function publicBusFare(totalPerson) {
    if (typeof(totalPerson) != "number") {
        return "Please give a valid number"
    }
    else {
        let microBus = totalPerson % 50;
        let publicBus = microBus % 11;

        let publicBusFare = publicBus * 250;

        return publicBusFare;
    }
}

console.log(publicBusFare(512));