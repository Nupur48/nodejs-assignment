const timeouts = new Set();

function setSafeTimeout(callback, delay) {
    const timerId = setTimeout(() => {
        timeouts.delete(timerId);
        callback();
    }, delay);

    timeouts.add(timerId);
    return timerId;
}

function clearAllTimeouts() {
    for (const timerId of timeouts) {
        clearTimeout(timerId);
    }

    timeouts.clear();
}

// Example usage
const timer1 = setSafeTimeout(() => console.log('Timer 1 executed'), 1000);
const timer2 = setSafeTimeout(() => console.log('Timer 2 executed'), 2000);

// Clear all timeouts
clearAllTimeouts();
//In this example, the setSafeTimeout() function is used to set a timeout just like setTimeout(), but it keeps track of the timer IDs in the timeouts set. When a timer executes, it's removed from the set to keep track of active timers. The clearAllTimeouts() function loops through the set and clears each timeout using clearTimeout(), effectively canceling all pending timeouts.






