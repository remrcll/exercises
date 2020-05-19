"use strict";

// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

// I will go a bit crazy: 

let myPark = "I can walk in the park all day!"
myPark.includes('park') ? console.log(`Solution 1: park`) : console.log(`Solution 1: String doesn't contain the word "park"`);

// or

console.log(`Solution 2: ` + myPark.substring(18, 22));

// or 

myPark.includes('park') ? console.log(`Solution 3: ` + myPark.substring(18, 22)) : console.log(`Solution 3: String doesn't contain the word "park"`);

// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.#

let myHello = "Hello World"
console.log(myHello.toUpperCase());

// 3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.

let myEarthling = "Hello Earthling";
console.log(myEarthling.toLowerCase());

// 4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.

let myJavaScript = "JavaScript";
console.log(myJavaScript.substring(3, 6));

// 5. Check if the sentence "nice shoes" contains the letter l or n.

let myShoes = "nice shoes";
console.log(`Does the sentence "nice shoes" contain the word "l"?
` + myShoes.includes('l'));

console.log(`Does the sentence "nice shoes" contain the word "n"?
` + myShoes.includes('n'));

// 6. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB

console.log(myShoes[0] + myShoes + myShoes[0]);

// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch

console.log(myShoes.substring(myShoes.length - 3) + myShoes + myShoes.substring(myShoes.length - 3));


// 8. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB

console.log(myShoes[myShoes.length - 1] + myShoes.substring(1, myShoes.length - 1) + myShoes[0]);

// 9. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".

let firstName = "Marcell";
let city = "Berlin";
let mood = "happy";

console.log(`Hello, my name is ${firstName}. I live in ${city}, and I feel really ${mood} today.`);

// 10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

let fox = "the quick brown fox";

console.log(fox[0].toUpperCase() + fox.substring(1));