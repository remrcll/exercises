'use strict';

// 1.

console.log(`
1. Addition. Write a program to add up the numbers 1 to 20.
`)

for (let i = 0, forSum = 0; i <= 20; i++) {
    forSum = i + forSum;
    console.log(forSum);
}



// 2.

console.log(`
2. There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.
`)

let oneBottle = 'There is one bottle of beer on the wall.'
let twoBottle = 'There are two bottle of beer on the wall.'
let threeBottle = 'There are three bottle of beer on the wall.'
let fourBottle = 'There are four bottle of beer on the wall.'
let fiveBottle = 'There are five bottle of beer on the wall.'

for (let i = 0; i <= 4; i++) {

    if (i === 1) {
        console.log(oneBottle);
    }

    if (i === 2) {
        console.log(twoBottle);
    }

    if (i === 3) {
        console.log(threeBottle);
    }

    if (i === 4) {
        console.log(fourBottle);
    }

    if (i === 5) {
        console.log(fiveBottle);
    }
}

// Simple version:

console.log(`
Simple version
`)

for (let bottles = 1; bottles <= 5; bottles++) {
    console.log(bottles > 1 ? `There is ${bottles} bottles of beer on the wall` : `There is one bottle of beer on the wall. `) 
}

// 3.

console.log(`
3. The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
`)

for (let i = 0; i <= 20; i++) {
    console.log(i % 2 === 0 ? `${i} is even.` : `${i} is odd.`);
}

// 4. 

console.log(`
4. Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
`)

for (let i = 0; i <= 10; i++) {
      console.log(`${i} * 9 =  ${i * 9}`);

      //Bonus

      for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} =  ${i * j}`);
    }
}


// 5.
console.log(`
5. Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
`)

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 6.

console.log(`
6. Sum of Multiples Write a program to add the multiples of 3 and 5 under 1000.
`)


let sum = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log(sum);

//7. 

