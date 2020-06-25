'use strict';

//1.

console.log(`
1. Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.
`);

const check = (num, obj) => obj["min"] <= num && obj["max"] >= num ? true : false;

console.log(check(4, {
    min: 0,
    max: 5
})); // ➞ true
console.log(check(4, {
    min: 4,
    max: 5
})); // ➞ true
console.log(check(4, {
    min: 6,
    max: 10
})); // ➞ false
console.log(check(5, {
    min: 5,
    max: 5
})); // ➞ true

//2.

console.log(`
2. Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]
`);

const scrabbleArray = [{
    tile: "N",
    score: 1
}, {
    tile: "K",
    score: 5
}, {
    tile: "Z",
    score: 10
}, {
    tile: "X",
    score: 8
}, {
    tile: "D",
    score: 2
}, {
    tile: "A",
    score: 1
}, {
    tile: "E",
    score: 1
}];

let result = 0;
const addScore = arr => {
    for (let i = 0; i < arr.length; i++) { 
        result += scrabbleArray[i].score;
    }
    return `The player's maximum score: ${result}`;
}

console.log(addScore(scrabbleArray));