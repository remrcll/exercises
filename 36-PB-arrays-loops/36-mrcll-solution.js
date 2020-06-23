'use strict';

// 1. sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.

const sumOfNumbers = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumOfNumbers([2, 4, 6, 9, 55]));
console.log(sumOfNumbers([2, 6, 5]));
console.log(sumOfNumbers([7, 11, 3]));

//2. Hello Friend Create an array filled with your friends' and family's names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. Bonus: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.

const helloFriend = arr => {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += 'Hello' + arr[i] + '! ';
    }

    return result;
}

console.log(helloFriend(['Friend1', 'Friend2', 'Friend3', 'Friend4', 'Friend5']));

//3. City Names. Create an array of city names. Loop through the array and add the city names to a string. Example of expected output: "Berlin, Paris, Prague, Rome".

const cityNames = arr => {
    let result = '';
    let result2 = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] + ', ';
    }
    result = result.substring(0, result.length - 2);
    return result;
}

console.log(cityNames(['City1', 'City2', 'City3', 'City4', 'City5']));

//4. Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer.

// NOT DONE YET

// const oddsEvens = arr => {

//     let result = []; 
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             result += result.push(i);
//             result -= 1;
//         }
//     }
//     return result;
// }

// console.log(oddsEvens([3, 5, 2, 4])); // ➞ expected output: [4, 6, 1, 3]
// console.log(oddsEvens([6, 9, 10, 20])); // ➞ expected output: [5, 10, 9, 19]

//5. Capitalize. Create a program that capitalises the first letter of each element in an array of names. 

const capitalize = arr => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
    }
    return result;
}

console.log(capitalize(["matt", "sara", "lara"])); // ➞ ["Matt", "Sara", "Lara"]

console.log(capitalize(["samuel", "MARIA", "luke", "mary"])); // ➞ ["Samuel", "Maria", "Luke", "Mary"]

console.log(capitalize(["Cynthia", "Karen", "Jane", "Carrie"])); // ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

//6. No Duplicates! A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below.

//NOT DONE YET

// const noDuplicates = arr => {

// }
// console.log(noDuplicates([1, 4, 4, 7, 7, 7]));// ➞ [1, 4, 7]

// console.log(noDuplicates([1, 6, 6, 9, 9])); // ➞ [1, 6, 9]

// console.log(noDuplicates([2, 2, 2, 2, 2, 2])); // ➞ [2]

// console.log(noDuplicates([5, 10, 15, 20, 25])); // ➞ [5, 10, 15, 20, 25]