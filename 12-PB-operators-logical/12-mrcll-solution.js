"use strict";

// 0: Declare two variables: "a" with the value of true, and "b" with the value of false.

let a = true;
let b = false;

// 1. Check the result of:
// a) a AND b.

console.log(a && b);

//BONUS: false because both of them should be true or false to be true. 

// b) a OR b.

console.log(a || b);

//BONUS: True because it'S enough for one of them to be true;

// c) NOT (a AND b).

console.log(!(a && b));

// BONUS: True, because originally it's not true, but we reversed it with being not true, so if the question is if "it's not true" then the answer is true.

// 2. Declare three more variables "x", "y", "z". Give these variables number values.

let x = 10;
let y = 15;
let z = 20;

// 2. Check the result of whether:
// a) x is greater than z AND x is greater than y.

console.log(x > z && x > y);

// BONUS:  False, because both of the statements should be either true or false to be true;

// b) x is NOT equal to y.

console.log(x !== y);

//BONUS: True, because 10 is not equal to 15;

// c) z is less than y OR z is greater than x.

console.log(z < y || z > x);

//BONUS: true because with or it'S enough that one of the statement is true. In this case (z > x);

//d) x is equal to z OR x is NOT equal to y.

console.log(x === z || x !== y);

//BONUS: True because it's enough that one of the statements are true, in this case : x != y;

// e) x is greater than or equal to 10 AND y is less than or equal to 10.

console.log(x >= 10 && y <= 10);

// BONUS: false, because one of the statement is false already.

// f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.

console.log((x * z) < 100 || (x * y) > 100);

// BONUS true, because one of the statements is true, in this case: (x * y) > 100); 




