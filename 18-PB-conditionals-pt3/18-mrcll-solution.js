"use strict";

let aleezaScoreOne = 89;
let aleezaScoreTwo = 120;
let aleezaScoreThree = 103;

let lizScoreOne = 116;
let lizScoreTwo = 94;
let lizScoreThree = 123;

let maryScoreOne = 97;
let maryScoreTwo = 134;
let maryScoreThree = 105;

let aleezaAverage = (aleezaScoreOne + aleezaScoreTwo + aleezaScoreThree) / 3;
let lizAverage = (lizScoreOne + lizScoreTwo + lizScoreThree) / 3;
let maryAverage = (maryScoreOne + maryScoreTwo + maryScoreThree) / 3;

console.log(aleezaAverage, lizAverage, maryAverage);

if (aleezaAverage > lizAverage) {
    console.log(`The winner is Aleeza's team, with an average score of ${aleezaAverage}.`);
} else if (aleezaAverage === lizAverage) {
    console.log(`It's a draw with an average score of ${aleezaAverage}`);
} else {
    console.log(`The winner is Liz's team, with an average score of ${lizAverage}.`);
}

//1.d 

if (aleezaAverage > lizAverage) {
    if (aleezaAverage > maryAverage) {
        console.log(`The winner is Aleeza's team, with an average score of ${aleezaAverage}.`);
    } else {
        console.log(`The winner is Mary's team, with an average score of ${maryAverage}.`);
    }
} else if (aleezaAverage === lizAverage) {
    if (aleezaAverage === maryAverage) {
        console.log(`It's a draw with an average score of ${aleezaAverage}`);
    }
    else if (lizAverage > maryAverage) {
        console.log(`The winner is Liz's team, with an average score of ${lizAverage}.`);
    } else {
        console.log(`The winner is Mary's team, with an average score of ${maryAverage}.`);
    }
} else {
    if (lizAverage > maryAverage) {
        console.log(`The winner is Liz's team, with an average score of ${lizAverage}.`);
    } else {
        console.log(`The winner is Mary's team, with an average score of ${maryAverage}.`);
    }
}