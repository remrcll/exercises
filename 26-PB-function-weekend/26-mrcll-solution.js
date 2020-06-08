"use strict";
let givenDate = new Date("2020-06-07");
const weekend = (day) => {
    console.log(day === 6 || day === 0 ? `${givenDate} is a weekend day.` : `${givenDate} is NOT a weekend day.`);
}

weekend(givenDate.getDay());