'use strict';

//1.

console.log(`1. Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.`);

const check = (num, obj) => obj["min"] <= num && obj["max"] >= num ? true : false;

console.log(check(4, { min: 0, max: 5 }));// ➞ true
console.log(check(4, { min: 4, max: 5 })); // ➞ true
console.log(check(4, { min: 6, max: 10 })); // ➞ false
console.log(check(5, { min: 5, max: 5 })); // ➞ true