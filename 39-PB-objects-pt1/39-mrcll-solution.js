"use strict";

//1.
console.log(`
1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object.
`)

const person1 = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris"
}

for (const element in person1) { // for in iterate over the keys
    console.log(element); //all the keys
    console.log(person1[element]); // values output
}

//2.
console.log(`
2. Get Values. Create a function that returns an array of all values of an object's properties.
`)

const getObjectValues = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
}

const getValues = obj => {
    return Object.values(obj);
}

console.log(getValues(getObjectValues));

//3.
console.log(`
3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
`)

const person2 = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",
    whoIsThisPerson: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}.`;
    }
}

const callWhoIsThisPerson = person2.whoIsThisPerson.bind(person2);
console.log(callWhoIsThisPerson());

//Bonus questions

console.log(`
Bonus 1. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.
`)

const objectToArray1 = {
    A: 1,
    B: 2,
    C: 3
}

const objectToArray2 = {
    cats: 1,
    dogs: 2,
    turtles: 4
}


// const newArray = [];
// for (let i = 0; i < objectToArray.length; i++) { // 
//     newObject["weekDay" + i] = newArray[i];
// }
const bonus1 = obj => {
    return Object.entries(obj);
}

console.log(bonus1(objectToArray1));
console.log(bonus1(objectToArray2));

//Bonus 2.
console.log(`
Bonus 2. List Properties. Create a function that returns an array of properties of a javascript object.
`)

const student = {
    name: "Mike",
    class: "4A",
    course: "English"
}

const bonus2 = obj => {
    let properties = [];
    for (const element in student) { 
        properties.push(element);
    }
    return properties;
}

console.log(bonus2(student));