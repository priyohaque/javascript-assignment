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
