// Write a function which accepts a sorted integer array. The function should find the first pair where the sum is 0, otherwise return undefined

function sumZero(arr) {
    // declare variables, one with the value of the first index, the other having the last index
    let left = 0;
    let right = arr.length - 1;
    // loop through array to find a pair with the sum being 0
    while(left < right){
        // declaring the sum variable
        let sum = arr[left] + arr[right];
        // if sum equals zero, return the pair
        if(sum === 0){
            return [arr[left], arr[right]];
        }
        // if sum is greater than 0, decrement right
        else if(sum > 0){
            right--;
        }
        // if sum is lesser than 0, increment left
        else{
            left++;
        }
    }
    // if no sum 0 found, return undefined
    return undefined;
}

let arr = [-4, -3, -2, -1, 0, 1, 2, 3, 10];
console.log(sumZero(arr));