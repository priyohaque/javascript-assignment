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