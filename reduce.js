

const arr = [1, 2, 3, 4];
  
    // Find sum of array elements
    // using reduce method
    const sum = arr.reduce((total, num) => total + num);
  
    console.log(sum);

    //Initial State: At the beginning of the reduce process, the accumulator total is initialized to the value of the first element in the array, which is 1. The first element 1 is assigned to total, and the callback function (total, num) => total + num is applied.

// First Iteration (1 + 2):

// Accumulator (total): 1
// Current Element (num): 2
// Calculation: total + num => 1 + 2 => 3
// New Accumulator (total): 3
// Second Iteration (3 + 3):

// Accumulator (total): 3
// Current Element (num): 3
// Calculation: total + num => 3 + 3 => 6
// New Accumulator (total): 6
// Third Iteration (6 + 4):

// Accumulator (total): 6
// Current Element (num): 4
// Calculation: total + num => 6 + 4 => 10
// New Accumulator (total): 10
// No More Elements: The array is exhausted, and the final value of the accumulator (total) is 10, which represents the sum of all elements in the array.

// Result: The value of the accumulator after the reduction is complete is 10, and this value is stored in the variable sum.

// Console Output: The line console.log(sum); prints the value of sum to the console, which is 10.