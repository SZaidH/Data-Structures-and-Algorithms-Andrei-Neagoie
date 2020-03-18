//Given two sorted arrays, merge them together
//[0,3,4,31] [4,6,30]

function merge_arrays(arr1, arr2){
    for(let i = 0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }
    return arr1;
}

arr1 = [0,3,4,31];
arr2 = [4,6,30];

console.log(merge_arrays(arr1,arr2));
//O(n)