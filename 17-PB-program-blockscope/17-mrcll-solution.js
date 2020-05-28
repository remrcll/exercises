"use strict";
//1 .Depending on the value of a variable (determiner), assign a value to x.
let myVar = 10;
// If determiner is less than 0, x's value should be "Less than 0"
// If determiner is greater or equal 0, x's value should "Greater or equal to 0".

// First try, without understanding that the answer should be a simple string.

if (myVar < 0) {
    let x = 0 - Math.random();
    console.log(x)
} else {
    let x = Math.random();
    console.log(x)
}

//Second try: 

let x;
console.log(x = myVar < 0 ? 'Less than 0' : 'Greater or equal to 0');



// 2.
let updater;
let determiner = Math.random();
if (determiner >= 0) {
    updater = "Greater or equal to 0";
    let message = "Positive integer";
    console.log(message);
} else {
    let updater = 'Less than 0';
    let message = 'Negative integer';
    console.log(message);
}
//console.log(message); error: message is not defined

//3.

let age = 17;
let drunk = true;
console.log(age >= 18 ? "you can drink beer" : "you can't drink beer");

if (age >= 18) {
    console.log("you can drink beer");

    if (drunk) {
        console.log("you can't drive");
    } else {
        console.log("you can drive");
    }
} else {
    console.log("you can't drink beer");
    if (drunk) {
        console.log("your parents will be sad");
    } else {
        console.log("good boy/girl");
    }
}