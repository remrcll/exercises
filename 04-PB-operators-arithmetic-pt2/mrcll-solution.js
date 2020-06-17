'use strict'

//Q.1 In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold?
let ticketPrice = 15;
let ticketIncome = 6450;

console.log("$ " + (ticketIncome / ticketPrice));

//Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
let weekInAYear = 52;
let incomePerWeek = 500;

console.log("$ " + (weekInAYear * incomePerWeek));

//Q3. Calculate the percentage of 17/30. Expected output: number%
let numberOne = 17;
let numberTwo = 30;

console.log((numberOne / numberTwo) * 100 + "%");

//Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.
let oneSide = 4.75;
let sqaureSides = 4;

console.log((oneSide * sqaureSides) + "cm");

//Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
let firstSide = 5;
let secondSide = 6;
let thirdSide = 7

console.log((firstSide + secondSide + thirdSide) + "cm");

//Q6. Calculate the area of a square. Each side is 5cm.
sqaureSides = 3;

console.log((sqaureSides * sqaureSides) + "cm2");

//Q7. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
let triangleSideOne = 5;
let triangleSideTwo = 6;
let triangleSideThree = 7;
let perimeterTriangle = (triangleSideOne + triangleSideTwo + triangleSideThree) / 2;
let countSomething = perimeterTriangle * (perimeterTriangle - triangleSideOne) * (perimeterTriangle - triangleSideTwo) * (perimeterTriangle - triangleSideThree);
let result = Math.sqrt(countSomething);

console.log(result);

//Q8. Calculate the volume of a cube. Length of each side is 9cm.
let qubeSide = 9;

console.log(qubeSide * qubeSide * qubeSide);

//Q9. Calculate the three bills including tips: €22.35 + 10% tip €26.67 + 15% tip €35.92 + 20% tip

let percentToGetOne = 10;
let percentToGetTwo = 15;
let percentToGetThree = 20;

let billOne = 22.35;
let billTwo = 26.67;
let billThree = 35.92;

let billWithTipOne = ((percentToGetOne / 100) * billOne) + billOne;

console.log("first bill with tip " + "€" + billWithTipOne);

let billWithTipTwo = ((percentToGetTwo / 100) * billTwo) + billTwo;

console.log("second bill with tip " + "€" + billWithTipTwo);

let billWithTipThree = ((percentToGetThree / 100) * billThree) + billThree;

console.log("third bill with tip " + "€" + billWithTipThree);

console.log("A9: All bills with tips together: " + "€" + (billWithTipOne + billWithTipTwo + billWithTipThree));


//Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4 What is Noemy's average hours worked per day?
let workingHoursList = [8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4];

console.log("A10: Average working hours = " + ((8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4) / workingHoursList.length));

// Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test? Expected output: Score in the sixth test: --.
let firstFiveSum = (75 + 70 + 85 + 90 + 100);
let allSum = 6 * 85;

console.log("A11: 6th test score = " + (allSum - firstFiveSum));

//Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? Expected output: James needs a minimum of --% to get an 80% average.
let totalNeed = 80 * 9;
let totalCurrent = 78 * 8;
let totalGoal = totalNeed - totalCurrent;

console.log("A12: James needs a minimum of " + totalGoal + "% to get an 80% average.");