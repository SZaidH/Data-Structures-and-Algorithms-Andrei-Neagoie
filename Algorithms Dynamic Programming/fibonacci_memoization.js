let counter1 = 0;
let counter2 = 0;

function fibonacci(n){
    counter1++;
    if(n < 2){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

function fibonacci_memoized(){
    let cache = {};
    return function fib(n){
        counter2++;
        if(n in cache){
            return cache[n];
        }
        else{
            if(n < 2){
                return n;
            }
            else{
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }
}

let n = 10;
const memoized = fibonacci_memoized();

console.log(fibonacci(n));
console.log(memoized(n));
console.log("Fibonacci normal: " + counter1 + " steps");
console.log("Fibonacci memoized: " + counter2 + " steps");