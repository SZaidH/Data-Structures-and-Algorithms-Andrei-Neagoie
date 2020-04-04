// Given two strings, write a function to determine if the second string is an anagram of the first (using frequency counter)

function anagram(str1, str2) {
    // checking for string length
    if (str1.length !== str2.length) {
        return false;
    }

    // declare counter object
    let strCounter = {};

    // loop through the first string to add content to the counter 
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i].toLowerCase();
        if (strCounter[char] > 0) {
            strCounter[char]++;
        }
        else {
            strCounter[char] = 1;
        }
    }

    // loop through the second string to decerement the object values to 0 in case of the string being an anagram of the first string  
    for (let i = 0; i < str2.length; i++) {
        let char = str2[i].toLowerCase();
        if (!strCounter[char]) {
            return false;
        }
        else {
            strCounter[char]--;
        }
    }
    // return boolean
    return true;
}

let str1 = 'listen';
let str2 = 'silent';

console.log(anagram(str1, str2));