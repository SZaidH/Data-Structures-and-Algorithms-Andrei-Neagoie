const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i <= length; i++) {
        for (let j = 0; j <= length; j++) {
            if(array[j] > array[j+1]){
                let temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
//Time - O(n^2)
//Space - O(1)

console.log(bubbleSort(numbers));