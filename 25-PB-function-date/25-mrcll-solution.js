"use strict";
const event = (today, futureDate) => {
    console.log(today < futureDate ? 'Your book to the event for the 9th June 2020 is already guaranteed!' : 'Please add a valid future date');
}

event("2020-06-08", "2020-07-09");