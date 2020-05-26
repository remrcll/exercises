"use strict";

// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let myNum1 = 10;
let myNum2 = 66;
let myNum3 = 99;

if ((myNum1 >= 50 && myNum1 <= 99) || (myNum2 >= 50 && myNum2 <= 99)) {
    console.log("true");
}

// First I wanted to do:
// if (myNum1 || myNum2 >= 50 && myNum1 || myNum2 <= 99) {
//     console.log("true");
// }
// but it doesn't work properly, doesn't matter if I put things in brackets or not, and I don't understand why...

// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

if ((myNum1 >= 50 && myNum1 <= 99) || (myNum2 >= 50 && myNum2 <= 99) || (myNum3 >= 50 && myNum3 <= 99)) {
    console.log("true");
}

// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. 

let a = 5;
let b = 10;
let c = 15;
// First try doesn't work: 

// if (a > (b || c)) {
//     console.log(a);
// }

// if (b > (a || c)) {
//     console.log(b);
// }

// if (c > (a || b)) {
//     console.log(c);
// }

//Second try: 

if (Math.max(a, b, c) === a) {
    console.log(a);
}

if (Math.max(a, b, c) === b) {
    console.log(b);
}

if (Math.max(a, b, c) === c) {
    console.log(c);
}

//3/2 Then change the values of the variables to see if your conditional still works.

a = 60;
b = 50;
c = 20;

if (Math.max(a, b, c) === a) {
    console.log(a);
}

if (Math.max(a, b, c) === b) {
    console.log(b);
}

if (Math.max(a, b, c) === c) {
    console.log(c);
}

//4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
// It is a pretty confusing question...

let myString = "Hello World";
let newString = "Py" + myString;

if (newString[0] + newString[1] === "Py") {
    console.log(myString);
}

//5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.

if ((myNum1 + myNum2) >= 50 && (myNum1 + myNum2) <= 80) {
    console.log(65);
} else {
    console.log(80);
}

//or

let mySum = myNum1 + myNum2;

if (mySum >= 50 && mySum <= 80) {
    console.log(65);
} else {
    console.log(80);
}

//6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

if ((mySum === 8) || (myNum1 - myNum2 === 8)) {
    console.log(true);
}

//7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.

let d = 15;

if ((c === 15) || (d === 15) || ((d + c) === 15)) {
    console.log("true");
}

//8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.

let myNum4 = 49;
let myNum5 = 10;

if ((myNum4 % 7 === 0) || (myNum5 % 11 === 0)) {
    console.log("true");
}

//9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

if (myNum4 === myNum5) {
    console.log((myNum4 + myNum5) * 3);
}

else {
    console.log(myNum4 + myNum5);
}

//10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

if (myNum1 > 19) {
    console.log((myNum1 - 19) * 2);
}

else {
    console.log(myNum1 - 19);
}

//11. BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".

let firstName = "Aria";
let age = 82;

if (age < 18) {
    console.log(`${firstName} is a child`);
}
 
if (age >= 13 && age < 20) {
    console.log(`${firstName} is a teenager`);
}

if (age >= 20 && age < 30) {
    console.log(`${firstName} is a young adult`);
}

else {
    console.log(`${firstName} is an adult`);
}

