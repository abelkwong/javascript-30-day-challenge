/* 
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.

decrement() reduces the current value by 1 and then returns it.

reset() sets the current value to init and then returns it. 
*/


var createCounter = function(init) {
    let count = init;

    function increment() {
        return ++count;
    }

    function decrement() {
        return --count;
    }

    function reset() {
        count = init;
        return count;
    }

    return {
        increment: increment,
        decrement: decrement,
        reset: reset
    }
};

// Similar to regular class structure
class Counter {
    constructor(init) {
        this.init = init;
        this.count = count;
    }

    increment() {
        return ++this.count;
    }

    decrement() {
        return --this.count;
    }

    reset() {
        this.count = this.init;
        return this.count;
    }
}