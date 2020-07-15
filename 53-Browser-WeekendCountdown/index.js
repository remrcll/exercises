"use strict";

let container = document.querySelector(".container")
let changeThis = document.querySelector(".change-this")
let buttonToListen = document.querySelector("button")
let input = document.querySelector(".addme")
let d = new Date();
let dayInNumber = d.getDay();
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let n = weekday[d.getDay()];
let leftDays = 7 - dayInNumber;

//event handler
function handler(event) {
    if (input.value === '') {
        changeThis.innerHTML = `You forgot to add your name!`;
    } else {
        changeThis.innerHTML = `Hello ${input.value}! Today is ${n}. Only ${leftDays} days left until Weekend!`
        input.value = ""
    }

    /*  button.innerHTML="changed" */
}

//attaching event listener on button
buttonToListen.addEventListener("click", handler)