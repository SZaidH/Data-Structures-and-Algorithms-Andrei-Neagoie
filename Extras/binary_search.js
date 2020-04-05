// Search for a specific number (and it's index value) from a sorted array using the divide and conquer approach (binary search)

function findNum(nums, val){
    // declare starting, ending and middle variables
    let start = 0;
    let end = nums.length-1;
    let middle = Math.floor((start + end)/2);
    // loop through the array and implement the divide and conquer approach
    while(val !== nums[middle] && start < end){
        if(val > nums[middle]){
            start = middle + 1;
        }
        else{
            end = middle - 1;
        }
        middle = Math.floor((start + end)/2);
    }
    // return middle variable
    if(nums[middle] === val){
        return `Value ${nums[middle]} Found! The index position is ${middle}`;
    }
    else{
        return `Value not found`;
    }
}

const nums = [12, 16, 19, 32, 41, 63, 76, 83, 98];
const val = 76;
console.log(findNum(nums, val));