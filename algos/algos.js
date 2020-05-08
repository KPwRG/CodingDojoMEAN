// Array: Bubble Sort For review, create a function that uses BubbleSort to sort an unsorted array in-place.

function bubbleSort(arr) {
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3, 0, 2, 5, -1, 4, 1]));

// Array: Bubble Sort es6

var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, -8];

// be careful: this is a very basic implementation which is nice to understand the deep principle of bubble sort (going through all comparisons) but it can be greatly improved for performances
function bubbleSortBasic(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[j - 1] > array[j]) {
                [array[j - 1], array[j]] = [array[j], array[j - 1]];
            }
        }
    }
    return array;
}

console.log(bubbleSortBasic(array.slice())); 

// SList: Bubble Sort Create a function that uses BubbleSort to sort a linked list. The list nodes contain .val, .next and other attributes you should not reference.


// Array: Selection Sort For review, create a function that uses SelectionSort to sort an unsorted array in-place array to sort array to sort

var array = [9, 2, 5, 6, -4, 3, 7, 10, 1, 8];

// swap function helper
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function selectionSort(array) {
    for (var i = 0; i < array.length; i++) {
        var min = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (i !== min) {
            swap(array, i, min);
        }
    }
    return array;
}

console.log(selectionSort(array));

// Array: Selection Sort es6

var array = [9, 2, 5, 6, 4, 3, 7, -10, 1, 8];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (i !== min) {
            [array[i], array[min]] = [array[min], array[i]];
        }
    }
    return array;
}

console.log(selectionSort(array));

// SList: Selection Sort Create a function that sorts a singly linked list using selection sort. Nodes contain .val, .next and other attributes you should not reference.


// Array: Merge Sort
// Use the combineArrrs() function to construct mergeSortArr() for an unsorted array.


var arr = [23, 56, 8, 75, 5, 1, 99, 43, 88, 11];

function mergeSortArr(arr){
    if (arr.length <= 1){
        return arr;
    }
    var mid = Math.floor(arr.length/2);
    var left = mergeSortArr(arr.slice(0,mid));
    var right = mergeSortArr(arr.slice(mid));
    return combineArrs(left, right)

}

function combineArrs(arr1, arr2){
    
}
console.log(combineArrs());

mergeSortArr(arr);