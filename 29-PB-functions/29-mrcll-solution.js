'use strict';

//1. 

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