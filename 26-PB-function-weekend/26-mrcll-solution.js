"use strict";
let givenDate = new Date("2020-06-08");
const weekend = (day) => {
    console.log(day === 6 || day === 0 ? `${givenDate.toLocaleDateString('de-DE')} is a weekend day.` : `${givenDate.toLocaleDateString('de-DE')} is NOT a weekend day.`);
}

weekend(givenDate.getDay());