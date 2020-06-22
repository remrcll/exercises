'use strict';

//1. Where Have My Four Letter Words Gone? 
const isFourLetters = arr => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 4) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(isFourLetters(["John", "James", "Jack", "Jeanne"])); //➞ ["John", "Jack"]
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"])); //➞ ["Corn"]
console.log(isFourLetters(["Dog", "Cat", "Deer"])); //➞ ["Deer"]

//2.

const monthName = num => {
    let str = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec";
    let split = str.split(' ');
    return split[num - 1];
}

console.log(monthName(3)); // ➞ "March"
console.log(monthName(12)); //➞ "December"
console.log(monthName(6)); //➞ "June"