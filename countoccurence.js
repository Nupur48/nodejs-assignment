//Implement a function that counts the occurrences of each element in an array using `reduce`.



function countOccurrences(fruits) {

    return fruits.reduce(function (accumator, currentValue) {
        accumator[currentValue] ? ++accumator[currentValue] : accumator[currentValue] = 1, accumator
    });

}



// Example usage:

const fruits = ['apple', 'banana', 'orange', 'apple', 'banana'];

const occurrences = countOccurrences(fruits);

console.log(occurrences);

// Output: { 'apple': 2, 'banana': 2, 'orange': 1 }