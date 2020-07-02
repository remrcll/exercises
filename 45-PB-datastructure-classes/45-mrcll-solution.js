"use strict";

//1

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.describe = function () {
            return `${this.name} is ${this.age} years old.`;
        }
    }
};
const john = new Person("John", 19); // would come out of the database
console.log(john.describe());

//2

class Volume {
    constructor(radius, height) {
        this.pi = Math.PI;
        this.radius = radius;
        this.height = height;
        this.power = Math.pow(this.radius, 2);
        this.toVolume = function () {

            return this.height * this.pi * this.power;
        }
    }
};

const newCylinder = new Volume(5, 10); // would come out of the database
console.log(newCylinder.toVolume());

// For me this logic is more understandable, then the one in the example: https://www.wikihow.com/Sample/Volume-of-a-Cylinder-Diagram