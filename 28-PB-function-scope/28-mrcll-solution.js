'use strict';
//1.

const exponential = (num1, num2) => {

    if (isNaN(num1) === false && isNaN(num2) === false) {
        for (let i = 1; i <= num2; i++) {
            let result = (num1 ** i);
            console.log(result);
        }
    } else {
        console.log('Either of the values are not a number');
    }
}
exponential('hello', 5);
exponential(3, 5);
exponential(2, 8);

//2. 

let myFavourite = 'banana';

const printFavoriteFruit = (x) => {
    myFavourite = "My favorite fruit is: Orange";
    console.log(myFavourite);
}

printFavoriteFruit(myFavourite);

//3. 
const exponent = (num1, num2) => {
    let result = (num1 ** num2);
}

//console.log(result);
// It' not possible to reach it, because the result 
// is saved inside the function's scope locally, and only lives there.

exponent(3, 5);