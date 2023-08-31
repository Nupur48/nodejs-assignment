//Create a function that sums up all the numbers in an array using `reduce`.



function sumArray(numbers) {
    let sum = numbers.reduce(function (accumalator, curValue) {
        return accumalator + curValue;
    })

}



// Example usage:

const numbers = [1, 2, 3, 4, 5];

const totalSum = sumArray(numbers);

console.log(totalSum); // Output: 15