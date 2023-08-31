//Write a function that concatenates two arrays using the spread operator.



function concatenateArrays(arr1, arr2) {

    return [...array1, ...array2];

}



// Example usage:

const array1 = [1, 2, 3];

const array2 = [4, 5, 6];

const concatenatedArray = concatenateArrays(array1, array2);

console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]