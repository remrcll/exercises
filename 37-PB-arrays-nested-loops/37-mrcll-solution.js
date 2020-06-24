'use strict';

//1. Write a program to construct the following pattern:

const tree = (arr) => {

    let result = '';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 1; j++) {
            result = result + ("* ");
        }
        console.log(result);
    }
}

tree(['*', '*', '*', '*']);

// Martinas solution: build a half pyramid with return
const halfPyramid = (lines) => {
    let array = [];
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j <= i; j++) {
            array.push("*"); // the amount of stars per line
            //console.log(array);
        }
        array.push("\n"); // insert a new line break special character
    }
    return " " + array.join(" ");
}
console.log("Task 1: Pyramid");
console.log(halfPyramid(4));
// mohameds number pyramid
function mohamedsPyramid(lines) {
    let string = '';
    for (let i = 0; i < lines; i++) { // forwards
        for (let j = i; j >= 0; j--) { // backwards accordingly to i
            string += j + " ";
        }
        string += "\n"; // new line break
        //console.log(string);
    }
    return string;
}
console.log(mohamedsPyramid(10));


//2. Write a program which prints the elements of the following array:

let arr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

for (let i = 0; i < arr.length; i++) {
    console.log(`row ${i}`);
    for (let j = 0; j < arr[i].length; j++) {
        console.log(" " + arr[i][j]);
    }
}

//3. Write a program that will output the following using loops:

const third2 = arr => {
    let result1 = '';
    let result2 = '';
    for (let i = 0; i <= 3; i++) {
        for (let j = 1; j < arr[0].length; j++) {
            result1 += arr[0][i] + ' ';
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < arr[1].length; j++) {
            result2 += arr[1][j] + ' ';
        }
    }
    return `${result1} 
${result2}`;
}

console.log(third2([
    [1, 2, 3, 4],
    [0, 1, 2, 3, 4]
]));

//Vincenzo solution: 

const printNumbers = () => {
    let arrayOne = [];
    let arrayTwo = [];
    for (let i = 1; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            if (j !== 0 && j !== 4) {
                arrayOne.push(i);
            }
            arrayTwo.push(j);
        }
    }
    console.log(arrayOne.join(" "));
    console.log(arrayTwo.join(" "));
}
printNumbers();