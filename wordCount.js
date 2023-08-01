const fs = require('fs');

function countWordsInFile(filename) {
    // Read the content of the file
    const content = fs.readFileSync(filename, 'utf-8');

    // Split the content into words using whitespace as the delimiter
    const words = content.split(/\s+/);

    // Remove any empty strings from the words array
    const filteredWords = words.filter(word => word !== '');

    // Count the number of words
    const wordCount = filteredWords.length;

    return wordCount;
}

const filename = 'data.txt';
try {
    const wordCount = countWordsInFile(filename);
    console.log(`The number of words in ${filename} is: ${wordCount}`);
} catch (err) {
    console.error('Error reading the file:', err.message);
}