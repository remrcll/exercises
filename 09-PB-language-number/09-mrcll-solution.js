// 1. Concatenation.

let introSentence = "hello, my name is Fran and I am";
let age = 25;

console.log(introSentence + " " + age);

// + adds the variables together, and then outputs them as a string.

// 2. Converting

let numberOne = "1005";
console.log(parseInt(numberOne)); 

let numberTwo = "10.05";
console.log(parseFloat(numberTwo)); 

// 3. Remain There

let numberFirst = 30;
let numberSecond = 939;
let numberThird = 40.9;

console.log((numberFirst % 2) === 0 ? `${numberFirst} is even` : `${numberFirst} is odd`);
console.log((numberSecond % 2) === 0 ? `${numberSecond} is even` : `${numberSecond} is odd`);
console.log((numberThird % 2) === 0 ? `${numberThird} is even` : `${numberThird} is odd`);