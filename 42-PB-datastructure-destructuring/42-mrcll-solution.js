'use strict';

//1. Array  Destructuring

let fruit, vegetable, food;
[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];
console.log(fruit);
console.log(vegetable);
console.log(food);


//2. Object Destructuring

const halloween = {
    fran: "witch",
    john: "monkey",
    eleonora: "bird"
};

let fran, john, eleonora;
({
    fran,
    john,
    eleonora
} = halloween);
console.log(fran);
console.log(john);
console.log(eleonora);

//3. Parameters: Object Destructuring

const musicians = {
    band1: ["Gloria Gaynor", "I Will Survive", "pop", "the USA"],
    band2: ["Musician Two", "song two", "hip-rap", "poland"],
    band3: ["Musician Three", "song three", "jazz", "USA"]
};

function destructureFunction2([name, song, genre, country]) {

    return `${name} is from ${country}. The musician sings ${genre} and their greatest hit is "${song}".`

};

console.log(destructureFunction2([musicians.band1[0], musicians.band1[1], musicians.band1[2], musicians.band1[3]]));

console.log(destructureFunction2([musicians.band2[0], musicians.band2[1], musicians.band2[2], musicians.band2[3]]));


