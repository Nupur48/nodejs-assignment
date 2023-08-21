function numRotation(arr, n) {
    let min = arr[0];
    let minIndex = 0;
    for (let i = 0; i < n; i++) {
        if (min > arr[i]) {
            min = arr[i];
            minIndex = i;
        }
    }
    return minIndex;
}

//console.log(search([3, 5, 6, 7, 0, 1, 3, 3], 3, 3, 5));
let arr = [3, 5, 6, 7, 0, 1, 3, 3];
let n = arr.length;
console.log("num rotation", numRotation(arr, n));