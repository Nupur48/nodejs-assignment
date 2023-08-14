


function reverseNameRecursive(str) {
    if (str.length > 0) {
        console.log(str.slice(-1));

        reverseNameRecursive(str.slice(0, -1));
    }
    else {
        return "";
    }

};
console.log(reverseNameRecursive("Nupur"));
