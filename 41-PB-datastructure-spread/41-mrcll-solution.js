"use strict";

let euroCountries = ["country1", "country2", "country3"];
let asianCountries = ["country4", "country5", "country6"];

let combinedCountries1 = euroCountries + asianCountries; //we get a string
let combinedCountries2 = [...euroCountries, ...asianCountries]; //we get an array //unpack
let combinedCountries3 = [].concat(euroCountries, asianCountries); //also get an array //concat
let combinedCountries4 = euroCountries.concat(asianCountries); //same concat as before in a different way

console.log(combinedCountries1, combinedCountries2, combinedCountries3);

let newArray1 = ['new1', 'new2', 'new3'];
let newArray2 = ['new4', 'new5', 'new6'];
let saveCombinedNew = [...newArray1, ...newArray2];

console.log(saveCombinedNew);

//2. Copying Arrays

let newArray3 = ['reallyNew1', 'reallyNew2', 'reallyNew3'];
let saveNew = [...newArray3];

console.log(saveNew);

//3. Find the Largest...

let listOfNumbers = [1, 2, 3];
let max;
const findLargest = arr => max = Math.max(...arr);

console.log(findLargest(listOfNumbers));

//4. Find the Smallest
let min;
const findSmallest = arr => min = Math.min(...arr);
console.log(findSmallest(listOfNumbers));

//5. Clone and Merge

const person = {
    name: "John"
}
const job = {
    role: "Teacher"
}

//5.1 Clone the person object.

const clonePerson = person;

//5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.

const employee = {
    ...person,
    ...job
};
console.log(employee);

//5.3 Then change the values of the properties in the employee object.

employee.name = 'Jim';
employee.role = 'Driver';

console.log(employee);