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

//4. 


class Tv {
    constructor(brand, channel, volume) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
        this.changeVolume = function () {
            if (this.volume >= 0 && this.volume <= 100) {
                return `The volume is set to ${this.volume}`;
            } else {
                return `${volume} is an invalid number. Please set the volume between 0 and 100.`
            }
            
        }
        this.changeChannel = function () {
            let randomChannel = Math.floor((Math.random() * 50) + 1);
            return `Your random channel is ${randomChannel}.`
        }

        this.reset = function () {
            return `Your TV is reset to the default values: channel: = ${this.channel}, brand = ${this.brand}, volume = ${this.volume}!`
        }
    }
};

const newSettings = new Tv("RBB", 1, 50); // would come out of the database
console.log(newSettings);
console.log(newSettings.changeVolume());
console.log(newSettings.changeChannel());
console.log(newSettings.reset());
