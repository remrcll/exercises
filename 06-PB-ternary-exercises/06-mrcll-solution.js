"use strict"

// 1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'
let isDog = "dog";
let isCat = "cat";
let vizsla = isDog;

(isCat === isDog) ? console.log('pat, pat'): console.log('find me a dog to pat!');
(vizsla === isDog) ? console.log('pat, pat'): console.log('find me a dog to pat!');

// 2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.

let speedCheck = 50;
let message;

speedCheck < 60 ? message = "you're going too fast!" : message = "You're driving below the speed limit, Oma";
console.log(message);

speedCheck < 40 ? message = "you're going too fast!" : message = "You're driving below the speed limit, Oma";
console.log(message);

// 3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

let age = 16;


age < 15 ? message = "serve beer" : message = "serve butter beer";
console.log(message);

age < 40 ? message = "serve beer" : message = "serve butter beer";
console.log(message);

// 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".

let adultHood = 18;
let isStudent;

isStudent = adultHood >= 5 ? "Ticket costs €5,00" : "Ticket costs €12,00";
console.log(isStudent);

isStudent = adultHood >= 38 ? "Ticket costs €5,00" : "Ticket costs €12,00";
console.log(isStudent);

// 5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".
let okMarie = 'cake';
(okMarie === 'cake') ? console.log('let them eat cake!'): console.log('oh, bother');

(okMarie === 'vegetable') ? console.log('let them eat cake!'): console.log('oh, bother');

