const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5, '3');
});
promise1.then((result) => {
    console.log(result);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 10, '42');
});
promise2.then((result) => {
    console.log(result);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});
promise3.then((result) => {
    console.log(result);
});

const allPromises = [promise1, promise2, promise3];

const all = Promise.all(allPromises).then((result) => {
    console.log(result);
});