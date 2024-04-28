function curry(func) {
    return function curried(...args) {
        // Check if all arguments are provided
        if (args.length >= func.length) {
            return func(...args);
        } else {
            // Return a new function that accepts the remaining arguments
            return function(...moreArgs) {
                return curried(...args.concat(moreArgs));
            };
        }
    };
}

// Test the curry function with a function that adds two numbers
function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);
console.log(curriedAdd(2)(3)); // Output: 5
console.log(curriedAdd(5)(7)); // Output: 12
console.log(curriedAdd(2, 3)); // Output: 5
console.log(curriedAdd(5, 7)); // Output: 12
