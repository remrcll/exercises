'use strict';

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