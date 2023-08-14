

function fib(s) {
    if (s == 0) {
        return 0;

    }
    if (s == 1) {
        return 1;

    }
    return fib(s - 1) + fib(s - 2);
}
console.log(fib(5));