"use strict";

// 1. NaN
// Question: Comment your answer in your js file: What does NaN stand for?

// NaN = Not a number.

// Check if "hello" is NaN.
console.log(isNaN("hello"));

// Check if 3 is NaN.
console.log(isNaN(3));

// What is the type of NaN?
console.log(typeof(NaN));


// 2. Rounding
// console.log(0.1 * 0.2);
// The above in JavaScript will print: 0.020000000000000004. Use a method to make sure that only 0.02 is printed.

console.log((0.1 * 0.2).toFixed(2));

// 3. Infinity
// Divide Infinity by 0.

console.log(Infinity / 0);

// Divide Infinity by Infinity.

console.log(Infinity / Infinity);

// Divide 1 by 0.

console.log(1 / 0); 