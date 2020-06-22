'use strict';

// 1. The Greater Numbers. Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.


const findGreatest = (arr, compare) => {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > compare) {
            result = result + arr[i] + ' ';
        }
    }
    return result;
}
console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));


// //2. For the longest word. Create a function to find the longest word in a given string.

function findLongestWord(str) {
    let strSplit = str.split(' ');
    let longestWord = '';
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord.length) {
            longestWord = strSplit[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord("this is a web development course"));

//3. Reverse. Create a function to reverse a number.
// i.e. reverse(34532) ➞ 23543

let myArray = [3, 4, 5, 3, 2];
console.log(myArray.reverse());

// or 

function reverseANumber(n) {
    n = n + "";
    return parseInt(n.split("").reverse().join(""));
}
console.log(reverseANumber(34532));

//4. AEIOU: Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string.

function vowelCount(str) {
    let variable = str.replace(/[^aeiou]/gi, "");
    //console.log(variable);
    return str.replace(/[^aeiou]/gi, "").length;
}

const vowelCountResult = vowelCount("hello");
console.log(vowelCountResult);

// 5 Missing numbers

const missingNums = (arr, count = 10) => {
    for (let i = 1; i <= count; i++) {
        if (arr.indexOf(i) === -1) {
            return (i);
        }
    }
}

console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

// 6. Cubed. Create a function that takes in an array of numbers and returns the sum of its cubes.

const sumOfCubes = arr => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] ** 3;
    }
    return result;
}

console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));

//7. Dictionary. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.

const dictionary = (str, arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith(str)) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(dictionary("bu", ["button", "breakfast", "border"])); // ["button"]
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])); // ["triplet", "tries", trip"]
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"])); // []

//8. Even Number Generator. Create a function that finds all even numbers from 1 to the given number.

const evenNums = num => {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            result.push(i);
        }
    }
    return result;
}

console.log(evenNums(8)); // [2, 4, 6, 8]
console.log(evenNums(4)); // [2, 4]
console.log(evenNums(2));