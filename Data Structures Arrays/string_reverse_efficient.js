//Given a string, write function that reverses it
//Example: "Hi my name is John", should be reversed to "nhoJ si eman ym iH"

const string_reverse = str => str.split('').reverse().join('');

str = "Hi my name is John";
console.log(string_reverse(str));