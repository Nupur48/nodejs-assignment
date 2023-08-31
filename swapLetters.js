const letters = ['a', 'b', 'c', 'd'];
const left = 0;
const right = letters.length - 1;
while (left < right) {
    [letters[left], letters[right]] = [letters[right], letters[left]];
    left++;
    right--;
}
console.log(letters);