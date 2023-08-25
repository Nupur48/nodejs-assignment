function fibonacci(n) {
    if (n === 0) {
        return [];
    }
    else if (n === 1) {
        return [0]
    }
    else if (n === 2) {
        return [0, 1]
    }
    else {
        const sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence[i] = sequence[i - 1] + sequence[i - 2];
        }
        return sequence;
    }



}

const result = fibonacci(10);
console.log(result);