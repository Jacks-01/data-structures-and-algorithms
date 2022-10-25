'use strict';

const merge = (left, right) => {

    let arr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    return [...arr, ...left, ...right]
};

const mergeSort = arr => {

    const midpoint = Math.floor(arr.length / 2);

    if (arr.length < 2) {
        return arr;
    }

    const left = arr.splice(0, midpoint);
    return merge(mergeSort(left), mergeSort(arr));
};

let myArray = [8, 4, 23, 42, 16, 15];
console.log(mergeSort(myArray));