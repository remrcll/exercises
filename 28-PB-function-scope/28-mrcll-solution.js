'use strict';
//1.

const exponential = (num1, num2) => {

    if (num1 && num2 !== isNaN) {
        for (let i = 1; i <= num2; i++) {
            let result = (num1 ** i);
            console.log(result);
        }
    }
}

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