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