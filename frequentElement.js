function mostFrequent(arr) {
    // Create an object to store the frequency of each element
    const freqObj = {};

    // Count the frequency of each element in the array
    for (const element of arr) {
        if (freqObj[element]) {
            freqObj[element]++;
        } else {
            freqObj[element] = 1;
        }
    }

    // Find the element with the maximum frequency
    let mostFrequentElement;
    let maxFrequency = 0;
    for (const element in freqObj) {
        if (freqObj[element] > maxFrequency) {
            maxFrequency = freqObj[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}

// Example usage
const inputArray = [1, 2, 3, 2, 4, 2, 5, 6, 2, 4, 7, 2, 8];
const result = mostFrequent(inputArray);
console.log("The most frequent element is:", result);
