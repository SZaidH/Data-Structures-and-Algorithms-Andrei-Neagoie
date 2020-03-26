// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
let answer= 1;
function findFactorialRecursive(number) {
    if(number < 1){
        return answer;
    }
    answer *= number;
    number--;
    return findFactorialRecursive(number);
} //O(n)

function findFactorialIterative(number) {
    let answer2= 1;
    for (let i = number; i > 0; i--) {
        answer2 *= i;
    }
    return answer2;
} //O(n)

let number = 5;
console.log(findFactorialRecursive(number));
console.log(findFactorialIterative(number));