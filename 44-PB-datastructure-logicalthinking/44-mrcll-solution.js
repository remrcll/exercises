'use strict';

//1

const array = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
array.sort();
console.log(array);

//2 

const array2 = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
array2.sort();
console.log(array2);

//3

array2.sort(function (currentNumber, previousNumber) {
    console.log(currentNumber); // 130000
    console.log(previousNumber); // 1
    return currentNumber - previousNumber;
    // returns a positive numbers => keep this order
    // if returns a negative numbers => turn both around
});
console.log(array2);

array.sort(function (currentMonth, previousMonth) {
    //const arrayOfMonth = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Dec'];
    const currentNumber = arrayOfMonth.indexOf(currentMonth);
    const previousNumber = arrayOfMonth.indexOf(previousMonth);
    return currentNumber - previousNumber;
});
console.log(array);