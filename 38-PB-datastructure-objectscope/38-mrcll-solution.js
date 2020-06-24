"use strict";

console.log(`1. Create the following object:
`);

const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    whoIsJohnSmith: function () {
        return `${this.firstName} ${this.lastName} is a student in class ${this.class}.`;
    }
};

const callWhoIsJohnSmith = student.whoIsJohnSmith.bind(student);
console.log(callWhoIsJohnSmith());

console.log(`
2. Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".
`);

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 41,
    profession: "engineer",
    from: "France",
    whoIsThisPerson: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.profession} living in ${this.from}.`;
    }
};

const callWhoIsThisPerson = person.whoIsThisPerson.bind(person);
console.log(callWhoIsThisPerson());

console.log(`
Write a method to get the length of the person object.
`);

console.log(Object.keys(person).length);