'use strict';

let result;

//1. 

console.log(`
1. Add Up.
`);

const addNumbers = num => {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result = result + i;
    }
    return result;
}

addNumbers(4);
const addUp4 = addNumbers(4);
console.log(addUp4);
const addUp13 = addNumbers(13);
console.log(addUp13);
const addUp600 = addNumbers(600);
console.log(addUp600);

//2.
console.log(`
2. Cubed. 
`);
const cubeSums = (num1 = 0, num2 = 0, num3 = 0) => {
    
    let cube = 3;

    if (isNaN(num1) === false && isNaN(num2) === false && isNaN(num3) === false) {
        let cubeNum1 = num1 ** cube;
        let cubeNum2 = num2 ** cube;
        let cubeNum3 = num3 ** cube;
        return cubeNum1 + cubeNum2 + cubeNum3;
    } else {
        console.log("fuck");
    }
}

const sumOfCubes159 = cubeSums(1, 5, 9);
console.log(sumOfCubes159);

const sumOfCubes2 = cubeSums(2);
console.log(sumOfCubes2);

const sumOfCubes0 = cubeSums();
console.log(sumOfCubes0);

//3.

console.log(`
3. String Check.
`);

const dictionary = (string1, string2) => result = string2.startsWith(string1) ? true : false;

const result1 = dictionary("bu", "button");
console.log(result1);

const result2 = dictionary("tri", "triplet");
console.log(result2);

const result3 = dictionary("beau", "pastry");
console.log(result3);

//4.
console.log(`
4. Less Than or Equal to Zero?
`);

const lessThanOrEqualToZero = num1 => result = num1 <= 0 ? true : false;


const lessThanOrEqualToZero3 = lessThanOrEqualToZero(3);
console.log(lessThanOrEqualToZero3);

const lessThanOrEqualToZero0 = lessThanOrEqualToZero(0);
console.log(lessThanOrEqualToZero0);

const lessThanOrEqualToZeroMinus4 = lessThanOrEqualToZero(-4);
console.log(lessThanOrEqualToZeroMinus4);

const lessThanOrEqualToZero10 = lessThanOrEqualToZero(10);
console.log(lessThanOrEqualToZero3);

//5.

console.log(`
5. Count Occurrences. 
`);

const countOccurrences = (string, letter) => {
    let letterCount = 0;
    for (let position = 0; position < string.length; position++) {
        if (string[position] === letter) {
            letterCount += 1;
        }
    }
    return letterCount;
}

const countOccurrencesResult = countOccurrences('this is a string', 'i')
console.log(countOccurrencesResult);

//6.

console.log(`
6. X To The Power of X.
`);

const calculateBaseToExponent = (num, exp) => num ** exp;


const calculateBaseToExponentResult1 = calculateBaseToExponent(5, 5);
console.log(calculateBaseToExponentResult1);

const calculateBaseToExponentResult2 = calculateBaseToExponent(10, 10);
console.log(calculateBaseToExponentResult2);

const calculateBaseToExponentResult3 = calculateBaseToExponent(3, 3);
console.log(calculateBaseToExponentResult3);

//7.

console.log(`
7. Dog Years. 
`);

const dogAge = doggieYears => {
    let humanYears = 7;
    let result = doggieYears * humanYears;
    return `Your doggo is ${result} years old in human years!`
}

const dogAgeResult = dogAge(4);
console.log(dogAgeResult);

//8.

console.log(`
8. A Lifetime Supply...

Actually the examples are wrong, because it is not counting with the leap years,
so I will also count every year with 365 days.
`);

let death = 80;
let yearInDays = 365;
const calcSupply = (age, amountPerDay) => Math.round((death - age) * (amountPerDay * yearInDays));


const calcSupplyResult1 = calcSupply(25, 2);
console.log(calcSupplyResult1);

const calcSupplyResult2 = calcSupply(40, 3);
console.log(calcSupplyResult2);

const calcSupplyResult3 = calcSupply(40.7, 3.5);
console.log(calcSupplyResult3);

//9.

console.log(`
9. Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.
`);

const isWaldoHere = string => result = string.toLowerCase().includes("waldo") ? true : false;


const isWaldoHereResult1 = isWaldoHere('is there wal here ?');
console.log(isWaldoHereResult1);

const isWaldoHereResult2 = isWaldoHere('I found you Waldo!');
console.log(isWaldoHereResult2);

const isWaldoHereResult3 = isWaldoHere('is wally here?');
console.log(isWaldoHereResult3);

const isWaldoHereResult4 = isWaldoHere('waldo is here');
console.log(isWaldoHereResult4);

