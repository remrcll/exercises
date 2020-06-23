'use strict';

// 1. sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.

const sumOfNumbers = arr => {
    let sum = 0;
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        product *= arr[i];
    }
    return `Sum = ${sum}, Product = ${product}.`;
    
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
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] + ', ';
    }
    result = result.substring(0, result.length - 2);
    return result;
}

console.log(cityNames(['City1', 'City2', 'City3', 'City4', 'City5']));

//or

const cityNames2 = cities => {
    const city = cities.join(", ");
    return city;
};
console.log(cityNames2(["Berlin", "Tbilisi", "Barselona", "Vilnius"]));

//4. Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer.


const oddsEvens = arr => {

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i] - 1);
        } else if (arr[i] % 2 !== 0) {
            result.push(arr[i] + 1);
        }
    }
    return result;
}

console.log(oddsEvens([3, 5, 2, 4])); // ➞ expected output: [4, 6, 1, 3]
console.log(oddsEvens([6, 9, 10, 20])); // ➞ expected output: [5, 10, 9, 19]

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


const noDuplicates = arr => {
    let result = [...new Set(arr)];
    return result;
}

console.log(noDuplicates([1, 4, 4, 7, 7, 7])); // ➞ [1, 4, 7]
console.log(noDuplicates([1, 6, 6, 9, 9])); // ➞ [1, 6, 9]
console.log(noDuplicates([2, 2, 2, 2, 2, 2])); // ➞ [2]
console.log(noDuplicates([5, 10, 15, 20, 25])); // ➞ [5, 10, 15, 20, 25]

//Or

function noDuplicates2(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            // we don't have it already
            newArray.push(array[i]);
            // we push it once!
        }
    }
    return newArray;
}
console.log(noDuplicates2([1, 6, 6, 9, 9])); // ➞ [1, 6, 9]
console.log(noDuplicates2([2, 2, 2, 2, 2, 2])); // ➞ [2]
console.log(noDuplicates2([5, 10, 15, 20, 25])); // ➞ [5, 10, 15, 20, 25]

//or 

function noDuplicates3(array) {
    let newArray = array;
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(newArray[i]) !== newArray.lastIndexOf(newArray[i])) {
            newArray.splice(i, 1);
            i = 0;
        }
    }
    return newArray;
}
console.log(noDuplicates3([1, 4, 4, 7, 7, 7]));
console.log(noDuplicates3([1, 6, 6, 6, 9, 9]));
console.log(noDuplicates3([2, 2, 2, 2, 2, 2]));
console.log(noDuplicates3([5, 10, 15, 20, 25]));


//7. Repeat it. Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. Print the result in an array.

const repeatIt = (item, times) => {
    let result = [];
    for (let i = 0; i < times; i++) {
        result.push(item);
    }
    return result;
}

console.log(repeatIt("example", 3)); // ➞ ["example", "example", "example"]

//Bonus: Factors. A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain: [3, 6, 12, 36]

const factor = arr => {
    let result;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] % arr[i - 1] === 0) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}

console.log(factor([1, 2, 4, 8, 16, 32])); // true
console.log(factor([1, 1, 1, 1, 1, 1])); // true
console.log(factor([2, 4, 6, 7, 12])); // false
console.log(factor([10, 1])); // false