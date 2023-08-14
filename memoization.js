function memoize(func) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log('Using cached result');
            return cache.get(key);
        }

        const result = func(...args);
        cache.set(key, result);
        return result;
    };
}

// Example function to be memoized
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Apply memoization to the fibonacci function
const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(10));  // This will calculate and cache
console.log(memoizedFibonacci(10));  // This will use the cached result
