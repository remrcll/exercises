"use strict";

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.describe = function() {
            return `${this.name} is ${this.age} years old.`;
        }
    }
};
const john = new Person("John", 19); // would come out of the database
console.log(john.describe());

