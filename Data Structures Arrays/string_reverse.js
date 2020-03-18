//Given a string, write a function that reverses it
//Example: "Hi my name is John", should be reversed to "nhoJ si eman ym iH"

function string_reverse(str){
    let arrBackwards = [];
    let totalItems = str.length - 1;

    for(let i = totalItems; i >= 0; i--){
        arrBackwards.push(str[i]);
    }
    return arrBackwards.join('');
}

str = "Hi my name is John";
console.log(string_reverse(str));

//O(n)