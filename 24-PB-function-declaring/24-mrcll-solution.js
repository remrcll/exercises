"use strict";

//1.

console.log(`
Create a function that multiples a number by another number.
`)

function firstFunction(a, b) {
    console.log(a * b);
}
firstFunction(3, 4);

//2.

console.log(`
Rework the syntax of the above function so that the function declaration is stored as a value.
`)

const secondFunction = function (a, b) {
    console.log(a * b);
}
secondFunction(5, 5);

//3.

console.log(`
Rework the syntax of the function declaration so that is uses the arrow function shorthand.
`)


const thirdFunction = (a, b) => {
    console.log(a * b);
}
thirdFunction(10, 5);

//4.

console.log(`
Create functions (using all three declarations) to check the remainder of division given two numbers.
`)
//4.a
function fourthFunction(a, b) {
    console.log(a % b);
}
fourthFunction(3, 4);

//4.b

const fifthFunction = function (a, b) {
    console.log(a % b);
}
fifthFunction(11, 2);


const sixthFunction = (a, b) => {
    console.log(a % b);
}
sixthFunction(5, 2);