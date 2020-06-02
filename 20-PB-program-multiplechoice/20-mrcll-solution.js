"use strict";

// 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

const expression1 = 'red';
switch (expression1) {
    case 'red':
        console.log(`The apple is ${expression1}.`);
        break;
    case 'blue':
        console.log(`The plum is ${expression1}.`);
        break;
    case 'green':
        console.log(`The grass is ${expression1}.`);
        break;
    case 'yellow':
        console.log(`The banana is ${expression1}.`);
        break;
    default:
        console.log(`Sorry, I don't know what is ${expression1}.`);
}

// 2. Grading
// Create a switch statement that prints different comments depending on a grade.

const expression2 = 1;
switch (expression2) {
    case 1:
        console.log(`In Hungary grade ${expression2} is the worse note.`);
        break;
    case 2:
        console.log(`In Hungary grade ${expression2} is the second worse note.`);
        break;
    case 3:
        console.log(`In Hungary grade ${expression2} is kind of a middle shit.`);
        break;
    case 4:
        console.log(`In Hungary grade ${expression2} is like almost good, but not good enough.`);
        break;
    case 4:
        console.log(`In hungary grade ${expression2} is the best note.`);
        break;

    default:
        console.log(`Note ${expression2} doesn't exist in Hungary.`);
}

// 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).

const expression3 = 'Apple';
switch (expression3) {
    case 'Banana':
        console.log(`${expression3} is yellow.`);
        break;
    case 'Orange':
        console.log(`${expression3} has orange color.`);
        break;
    case 'Strawberry':
        console.log(`${expression3} is red.`);
        break;
    case 'Apple':
        console.log(`${expression3} can be red and green, or even yellow.`);
        break;
    default:
        console.log(`Sorry, I don't know the color of ${expression3}.`);
}

// 4. Percentage Complete.
// If percentageComplete is below 30, print "Still a long way to go".
// If the percentageComplete is between 30 and 50, print "Slowly getting there".
// If percentageComplete is between 51 and 80, print "You can do it!".
// If percentageComplete is between 81 and 99, print "This is the last push!".
// If percentageComplete is 100, print "You're there. Well done!".

// let perc1 = 50;
// let perc2 = 70;

let percentageComplete = 100;
let caseResult;

if (percentageComplete < 30) {
    caseResult = 1;
} else if (percentageComplete >= 30 && percentageComplete <= 50) {
    caseResult = 2;
} else if (percentageComplete >= 51 && percentageComplete <=80) {
    caseResult = 3;
} else if (percentageComplete >= 81 && percentageComplete <= 99) {
    caseResult = 4;
} else if (percentageComplete <= 100) {
    caseResult = 5;
}
else {
    console.log(`Please enter a valid number!`)
}


switch (caseResult) {
    case 1:
        console.log("Still a long way to go");
        break;
    case 2:
        console.log("Slowly getting there");
        break;
    case 3:
        console.log("You can do it!");
        break;
    case 4:
        console.log("This is the last push!");
        break;
    case 5:
        console.log("You're there. Well done!");
        break;
    default:
        console.log(`Sorry, your result should be 100 or below.`);
}

// 5. Differences
// When should you use a switch statement versus an if else statement. Comment your answer in your js file.

// Switch case is  very useful for more than two easy cases (condition for equality )
// but we cannot use && or the ||
// and we cannot use > or < or >= <= 