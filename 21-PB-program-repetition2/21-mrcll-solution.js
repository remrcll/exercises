"use strict";
//1.

let i = 0;
while (i < 15) { 
    console.log(i);
    i++; 
}

console.log("First loop is over");

//2.

let i2 = 1;
while (i2 <= 20) { 
    console.log(i2);
    i2++ + i2;
}

console.log("Second loop is over");

//3.
let i3 = 0;
do {
    // at least executed once 
    console.log("The number is ", i3);
    i3++;
    // change index at the end
} while (i3 < 20) //Checks at the end of the loop


console.log("Third loop is over");