// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

function check_item(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                return true;
            }
        }
    }
    return false;
}

console.log(check_item(array1,array2));

// O(a*b)