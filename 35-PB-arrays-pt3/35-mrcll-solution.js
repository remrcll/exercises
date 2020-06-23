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

//3. Amplify the Multiples of 4. 
const amplify = num => {
    const arrNumbers = [];
    for (let i = 1; i <= num; i++) {

        if (i % 4 === 0) {
            arrNumbers.push(i * 10);
        } else {
            arrNumbers.push(i);
        }
    }
    return arrNumbers;
}

console.log(amplify(4)); // ➞ [1, 2, 3, 40]
console.log(amplify(3)); // ➞ [1, 2, 3]
console.log(amplify(25)); // ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

//4. One is not like the others...

const unique = arr => {
    let number = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            number = arr[i];
        }
    }
    return number;
}


console.log(unique([3, 3, 3, 7, 3, 3])); // ➞ 7
console.log(unique([0, 0, 0.77, 0, 0])); // ➞ 0.77
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1])); // ➞ 0

//5. 

const wordRank = str => {
    const LETTERS = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const STR_IN_ARR = str.split(' '); //separate words
    console.log(STR_IN_ARR);
    const ARR_SUM = [];
    for (let i = 0; i < STR_IN_ARR.length; i++) {
        let sum = 0;
        for (let j = 0; j < STR_IN_ARR[i].length; j++) {
            if (LETTERS.indexOf(STR_IN_ARR[i][j].toLowerCase()) !== -1) {
                sum += LETTERS.indexOf(STR_IN_ARR[i][j].toLowerCase());
            }
        }
        ARR_SUM.push(sum);
    }
    console.log(ARR_SUM); //sum of each word in array
    //to find the largest sum
    let largest = 0;
    for (let i = 0; i < ARR_SUM.length; i++) {
        if (ARR_SUM[i] > largest) {
            largest = ARR_SUM[i];
        }
    }
    console.log(`Largest sum ${largest}, index of largest is ${ARR_SUM.indexOf(largest)}`);
    let index = ARR_SUM.indexOf(largest); //index of the largest sum in arr
    return STR_IN_ARR[index];
}

console.log(wordRank("The quick brown fox.")); // ➞ "brown"
console.log(wordRank("Nancy is very pretty.")); // ➞ "pretty"
console.log(wordRank("Check back tomorrow, man!")); // ➞ "tomorrow"
console.log(wordRank("Today is Wednesday.")); // ➞ "Wednesday"

//6. 

const hackerSpeak1 = str => {
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "a") {
            arr[i] = "4";
        } else if (str[i] === "e") {
            arr[i] = "3";
        } else if (str[i] === "i") {
            arr[i] = "1";
        } else if (str[i] === "a") {
            arr[i] = "4";
        } else if (str[i] === "s") {
            arr[i] = "5";
        }
    }
    return arr.join('');
}

const hackerSpeak = str => {
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "a":
                arr[i] = "4";
                break;
            case "e":
                arr[i] = "3";
                break;
            case "i":
                arr[i] = "1";
                break;
            case "o":
                arr[i] = "0";
                break;
            case "s":
                arr[i] = "5";
        }
    }
    return arr.join('');
}

const hackerSpeak2 = str => {
    let result = str;
    result = result.replace(/a/gi, "4");
    result = result.replace(/e/gi, "3");
    result = result.replace(/i/gi, "1");
    result = result.replace(/o/gi, "0");
    result = result.replace(/s/gi, "5");
    return result;
}


console.log(hackerSpeak1("javascript is cool")); // ➞ "j4v45cr1pt 15 c00l"
console.log(hackerSpeak1("programming is fun")); //➞ "pr0gr4mm1ng 15 fun"
console.log(hackerSpeak1("become a coder")); // ➞ "b3c0m3 4 c0d3r"

console.log(hackerSpeak("javascript is cool")); // ➞ "j4v45cr1pt 15 c00l"
console.log(hackerSpeak("programming is fun")); //➞ "pr0gr4mm1ng 15 fun"
console.log(hackerSpeak("become a coder")); // ➞ "b3c0m3 4 c0d3r"

console.log(hackerSpeak2("javascript is cool")); // ➞ "j4v45cr1pt 15 c00l"
console.log(hackerSpeak2("programming is fun")); //➞ "pr0gr4mm1ng 15 fun"
console.log(hackerSpeak2("become a coder")); // ➞ "b3c0m3 4 c0d3r"