"use strict";

const event = (today, futureDate) => {
    console.log(today < futureDate ? `Your book to the event for the ${futureDate} is already guaranteed!` : `Please add a valid future date`);
}

event(new Date(), new Date("2020-07-09"));

//Another version to get rid of the time and timezone:

let todayYear = new Date().getFullYear();
let todayMonth = new Date().getMonth();
let todayDay = new Date().getDay();
let todayDate = `${todayYear}-${todayMonth}-${todayDay}`;

const event2 = (today, futureDate) => {
    console.log(today < futureDate ? `Your book to the event for the ${todayDate} is already guaranteed!` : `Please add a valid future date`);
}

event2 (new Date(todayDate), new Date("2020-07-09"));
