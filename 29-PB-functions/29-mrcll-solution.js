'use strict';

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

let cube = 3;

const cubeSums = (num1 = 0, num2 = 0, num3 = 0) => {

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

const dictionary = (string1, string2) => {
    let result = string2.startsWith(string1) ? true : false;
    return result;
}

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

const lessThanOrEqualToZero = (num1) => {
    let result = num1 <= 0 ? true : false;
    return result;
}

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

const calculateBaseToExponent = (num, exp) => {
    return num ** exp;
}

const calculateBaseToExponentResult1 = calculateBaseToExponent(5, 5);
console.log(calculateBaseToExponentResult1);

const calculateBaseToExponentResult2 = calculateBaseToExponent(10, 10);
console.log(calculateBaseToExponentResult2);

const calculateBaseToExponentResult3 = calculateBaseToExponent(3, 3);
console.log(calculateBaseToExponentResult3);

//6.

console.log(`
7. Dog Years. 
`);

