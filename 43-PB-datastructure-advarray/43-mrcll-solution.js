'use strict';

// 1. Get total orders

const orders = [{
        amount: 250
    },
    {
        amount: 400
    },
    {
        amount: 100
    },
    {
        amount: 325
    }
];
// console.log(Object.values(orders[]));
let amounts = [];
for (let key in orders) {
    let value = orders[key];
    let result = amounts.push(value.amount);
}

const sum = amounts.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});

console.log(sum);

//2.

const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 

const newArray = arrayOfNumbers.map((value) => {
    return value + 1; 
});

console.log(newArray);

// 5. 
const sum3 = arr => arr.reduce((previous, current) => previous + current);

console.log(sum3([1, 2, 3, 4, 5]));
console.log(sum3([6, 7, 7]));


// 6. 
const squareRoot = arr => arr.map((value) => Math.sqrt(value));

console.log(squareRoot([4, 9, 16, 25, 44]));