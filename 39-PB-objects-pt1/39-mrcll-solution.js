"use strict";

//1.
console.log(`
1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object.
`);

const person1 = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris"
};

for (const element in person1) { // for in iterate over the keys
    console.log(element); //all the keys
    console.log(person1[element]); // values output
};

//2.
console.log(`
2. Get Values. Create a function that returns an array of all values of an object's properties.
`);

const getObjectValues = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
};

const getValues = obj => {
    return Object.values(obj);
};

console.log(getValues(getObjectValues));

//3.
console.log(`
3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
`);

const person2 = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",
    whoIsThisPerson: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}.`;
    }
};

const callWhoIsThisPerson = person2.whoIsThisPerson.bind(person2);
console.log(callWhoIsThisPerson());

//Bonus questions

console.log(`
Bonus 1. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.
`);

const objectToArray1 = {
    A: 1,
    B: 2,
    C: 3
};

const objectToArray2 = {
    cats: 1,
    dogs: 2,
    turtles: 4
};

const bonus1 = obj => {
    return Object.entries(obj);
};

console.log(bonus1(objectToArray1));
console.log(bonus1(objectToArray2));

//Bonus Mohamed version 1

function convertToArray(obj) {
    const result = [];
    //for (let i = 0; i < Object.length; i++ ){
    for (const item in obj) {
        let newArr = [];
        newArr.push(item);
        newArr.push(obj[item]);
        result.push(newArr);
    }
    return result;
}
const objectToArray = {
    A: 1,
    B: 2,
    C: 3
}
console.log(convertToArray(objectToArray));

//Bonus 2.
console.log(`
Bonus 2. List Properties. Create a function that returns an array of properties of a javascript object.
`);

const student = {
    name: "Mike",
    class: "4A",
    course: "English"
};

const bonus2 = obj => {
    let properties = [];
    for (const element in student) {
        properties.push(element);
    }
    return properties;
};

console.log(bonus2(student));

//Bonus 3.
console.log(`
Bonus 3. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
`);

const first = {
    firstName: "John"
};

const last = {
    lastName: "Smith"
};

const merge = (obj1, obj2) => {
    let mergedObject = {};
    mergedObject = Object.assign({}, obj1, obj2);
    return mergedObject;
};

console.log(merge(first, last));

//Bonus 4.
console.log(`
4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
`);

const person3 = {
    name: "John",
    job: "teacher"
};

const swap = obj => {
    let newObject = {};

    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            newObject[obj[prop]] = prop;
        }
    }

    return newObject;
};

console.log(swap(person3));

//Bonus 5.
console.log(`
Bonus 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
`);

const bonus5 = obj => {
    let resultArray = [];

    resultArray.push(Object.keys(obj), Object.values(obj));

    return resultArray;
};

console.log(bonus5(objectToArray1));