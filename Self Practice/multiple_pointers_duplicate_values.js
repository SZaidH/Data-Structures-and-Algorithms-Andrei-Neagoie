// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length (LeetCode)
var removeDuplicates = function(nums) {
    // declaring pointer
    let i = 0;
    // looping through the array
    for(let j = 1; j < nums.length; j++){
        // if pointers are equal, remove the duplicate value (using splice() in this instance)
        if(nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));