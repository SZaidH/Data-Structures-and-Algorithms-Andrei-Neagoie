// Write a function which takes a string and returns counts of each char in the string

function countString(str) {
    // declare object which will be returned in the end
    let counter = {};
    // loop through the string to find the char frequency
    for (let i = 0; i < str.length; i++) {
        // if char exists, add +1
        let char = str[i].toLowerCase();
        if (counter[char] > 0) {
            counter[char]++;
        }
        // if the char doesn't exist, add it to the object
        else {
            counter[char] = 1;
        }
    }
    // return the object
    return counter;
}

let str = "My Name is John Doe";
console.log(countString(str));