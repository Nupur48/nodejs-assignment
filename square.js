//Write a function to find the square of each element in an array using `map`.



function squareElements(numbers) {
    return numbers.map(Math.sqrt);


}



// Example usage:

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = squareElements(numbers);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]