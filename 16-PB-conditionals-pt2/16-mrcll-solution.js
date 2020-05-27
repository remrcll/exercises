"use strict";

// Store Mark's and John's mass and height in variables.

let markHeight = 195;
let johnHeight = 185;

let markWeight = 91;
let johnWeight = 79;

// Calculate both their BMIs and store their BMIs in variables.

let markBmi = markWeight / (markHeight * markHeight);
let johnBmi = johnWeight / (johnHeight * johnHeight);

// Create a boolean variable containing information about whether Mark has a higher BMI than John.

let markBmiHigherOrNot = Math.max(markBmi, johnBmi) === markBmi ? true : false;

// Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").

markBmi > johnBmi ? console.log(`Is Mark's BMI higher than John's? Yes it's ${markBmiHigherOrNot}!`) : console.log(`Is Mark's BMI higher than John's? No it's ${markBmiHigherOrNot}!`);

// Create an if statement which prints the name and BMI of the person with the highest BMI.

if (markBmiHigherOrNot === true) {
    console.log("Mark");
} else {
    console.log("John");
}