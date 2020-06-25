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