// problem no. 01

// ------ radian to degree conversion -------

function radianToDegree(radian) {
    if (typeof (radian) !== "number") {
        return "Please provide a valid input";
    }
    else {
        let pi = Math.PI;
        let degreeConvart = radian * 180 / pi;
        let fixedValue = degreeConvart.toFixed(2);
        let degree = parseFloat(fixedValue);

        return degree;
    }
}

console.log(radianToDegree(180));

// problem no. 02

// ------ check javascript file ------

function isJavaScriptFile(String) {
    if (typeof (String) !== 'string') {
        return "Please provide js format";
    }
    else {
        if (String.endsWith(".js")) {
            return true;
        }
        return false;
    }
}

console.log(isJavaScriptFile("solve.js"));

// problem no. 03

// ------ calculate oil price -------

function oilPrice(diesel, petrol, octane) {
    if (typeof(diesel,petrol,octane) !== "number") {
        return "Please use number as input"
    }
    else {
        let dieselRate = 114;
        let petrolRate = 130;
        let octaneRate = 135;

        let dieselPrice = diesel * dieselRate;
        let petrolPrice = petrol * petrolRate;
        let octanePrice = octane * octaneRate;

        const totalPrice = dieselPrice + petrolPrice + octanePrice;

        return totalPrice;
    }
}

console.log(oilPrice(1,2,3));

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

// problem no. 05

// ------ check the best friend -------

function isBestFriend(object1, object2) {
    if (typeof (object1, object2) !== "object") {
        return "Please provide an object";
    }
    else {
        if (object1.name == object2.friend && object2.name == object1.friend) {
            return true;
        }
        return false;
    }
}
let person1 = { name: "Sazid", friend: "Mahin" };
let person2 = { name: "Mahin", friend: "Sazid" };
console.log(isBestFriend(person1, person2))