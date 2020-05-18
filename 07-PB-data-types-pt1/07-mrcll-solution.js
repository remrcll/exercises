"use strict"

// 1. Declare a variable and assign a string as a value. Make sure the string is at least 6 characters long. Print the variable to the console.

let myString = "This string is more then 6 characters";
console.log(myString);

// 2. Access the 2nd and 6th elements of the string. Print the elements to the console. Make sure you have selected the right index numbers.

console.log(myString[1] + " and " + myString[5]);

// 3. Declare a variable called name and assign a string as a value.

let name = "mrcll";

// 4. Declare a variable called age and assign a number as a value.

let age = 18;

// 5. Declare a variable called year and assign a number as a value.

let year = 1911;

// 6. Print the following: "name is age in year", using your declared variables.

console.log(`${name} is ${age} in ${year}`);

// 7. Declare a variable called isMarried and assign a boolean value.

let isMarried = false;

// 8. Print the following "name is married: true/false", using your declared variables.

name = isMarried ? console.log(`${name} is married: true`) : console.log(`${name} is married: false`);

// 9. Declare a variable called programmingLanguage and assign the string "JavaScript". Declare a variable called isFun and give it a value of true. Print "JavaScript is fun: true" to the console, using your declared variables.

let programmingLanguage = "JavaScript";
let isFun = true;
let answer;

answer = isFun ? `${programmingLanguage} is fun: true` : `${programmingLanguage} is fun: false`;
console.log(answer);


// 10. Print the J and S of JavaScript from the variable programmingLanguage to the console.

console.log(programmingLanguage[0] + " and " + programmingLanguage[4]);

// 11. Print the length of the string "JavaScript" to the console.

console.log(programmingLanguage.length);