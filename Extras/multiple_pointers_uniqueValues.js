// Implement a function which accepts a sorted array, and counts the unique values in the array

function uniqueValues(nums){
    // declare variable that will act as a counter for the loop
    let i = 0;
    // loop through the array
    for(let j = 1; j < nums.length; j++){
        // if value of the pointers are not equal, increment the pointer and assign the index position to it 
        if(nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j];
        }
    }
    // return variable
    return i+1;
}

let nums = [1,2,3,4,4,4,7,7,12,12,13];
console.log(uniqueValues(nums));