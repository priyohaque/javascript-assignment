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