'use strict';

//1. Addition

const addTo = firstNumber => {
    return secondNumber => firstNumber + secondNumber;
}

let sum = addTo(3)(4);
console.log(sum);


//2. Multiply

const multiply = firstNumber => {
    return secondNumber => firstNumber * secondNumber;
}

let result = multiply(3)(4);
console.log(result);

//3. Calculate Money Saved till Pension Day!

(function (age, retirement, salary, percent = 5) {
    if (age > retirement) {
        console.log(`You're already retired!`)
    } else {
        let years = retirement - age;
        let months = years * 12;
        let monthlySaving = salary * percent / 100;
        console.log(months * monthlySaving);
    }

})(40, 65, 2000);

const multiplier3 = (factor) => {
    return number => number * factor;
}
const twoTimes = multiplier3(3);
console.log(twoTimes(7));