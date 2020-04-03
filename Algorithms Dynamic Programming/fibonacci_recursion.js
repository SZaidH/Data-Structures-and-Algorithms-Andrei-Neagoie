//Fibonacci Sequence using recursion
function fibonacci(n){
    if(n < 2){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

let n = 10;
console.log(fibonacci(n));