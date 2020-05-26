"use strict";

// 1. What type?
// Check whether 3 is equal to "3" using loose comparison. Then, check whether they are equal while using strict comparison. Questions: Comment your answers in the js file.

//loose
console.log("Answer 1/1: " + (3 == "3"));

//strict
console.log("Answer 1/2: " + (3 === "3"));


// Is there a difference? Why/why not?
// Answer: 
// Yes, there is a difference, because if we check "loose" then it only checks if the value is matching or not, but not the type.
// With strict it's also checking the type of the value, and since the first is a number and second is a string, it prints false.

// Which comparison operator should we generally use? Why?
// Answer:
// We should use strict so it check the type too.

// What would happen if we were to use =?
// Answer: 
//It would give us an error, because = stands for assignment.


// 2. Not
// Store the value true to a variable. Using a ternary operator,print the false option by checking the value of the initial variable.

let truthy = true
console.log("Answer 2: " +  (truthy !== true ? true : false));

//3. Short Circuit
//Given the code below, what will print when when we console log name? Comment your answer in the js file.

//Answer is: Stacey;