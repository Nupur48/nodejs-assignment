//Create a function that removes duplicates from an array using `Set`.



function removeDuplicates(numbers) {

    return [...new Set(numbers)];

}



// Example usage:

const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = removeDuplicates(numbers);

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]