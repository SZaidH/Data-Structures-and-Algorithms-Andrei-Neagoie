const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        let smallNum = i;
        for (let j = i + 1; j < length; j++) {
            if (array[smallNum] > array[j]) {
                smallNum = j;
            }
        }
        let temp = array[i];
        array[i] = array[smallNum];
        array[smallNum] = temp;
    }
    return array;
}

console.log(selectionSort(numbers));