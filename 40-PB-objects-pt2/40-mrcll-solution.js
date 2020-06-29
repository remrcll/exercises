'use strict';

//1.

console.log(`
1. Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.
`);

const check = (num, obj) => obj.min <= num && obj.max >= num;

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

//3.

console.log(`
3. Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.
`);

const emptyOrNot = obj => Object.entries(obj).length === 0;

console.log(emptyOrNot({})); // ➞ true
console.log(emptyOrNot({
    a: 1
})); // ➞ false

//4.

console.log(`
4. Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
`);

const countLetters = str => {
    let result = {};
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        count = str.split(str[i]).length - 1;
        result[str[i]] = count;
    }
    return result;
};

console.log(countLetters("tree")); // ➞ {t: 1, r: 1, e: 2}

//5.

console.log(`
5. Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.
`);

const freeShipping = obj => {
    let arr = Object.values(obj);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum > 50 ? true : false;
};

console.log(freeShipping({
    "Sponge": 3.50,
    "Soap": 5.99
}));

console.log(freeShipping({
    "Surround Sound Equipment": 499.99
}));

console.log(freeShipping({
    "Wool": 13.99,
    "Knitting Needles": 15.50,
    "Bag": 13.99
}));

//6.

console.log(`
6. Programming Object.
`);

const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages[3] = "Go";
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = true;

console.log(programming);

for (let i = 0; i < programming.languages.length; i++) {
    console.log(programming.languages[i]);
}

for (const keys in programming) {
    console.log(keys);
}


for (let each in programming) {
    console.log(programming[each]);
}

programming.isReCh = function () {
    if (this.isRewarding === true && this.isChallenging === true) {
        return `Learning the programming languages: ${programming.languages.join(", ")} is rewarding and challenging.`;
    }
}
console.log(programming.isReCh());