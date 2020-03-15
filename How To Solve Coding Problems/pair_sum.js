// Given an array, return a specific sum based on a pair of numbers

let numbers = [1,2,4,4];
const sum = 8;

function sum_check(array){
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            let pair_sum = numbers[i] + numbers[j];
            if(pair_sum == sum){
                console.log(numbers[i] + " and " + numbers[j] + " has the sum " + sum);
                break;
            }
            else{
                console.log(numbers[i] + " and " + numbers[j] + " don't add up to " + sum);
            }
        }
    }
}

sum_check(numbers);

//O(n^2)