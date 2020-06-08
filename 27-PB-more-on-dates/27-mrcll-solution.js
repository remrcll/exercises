"use strict";

//you can change the "today" variable to check other dates or leave it empty for actual todays date"


let today = new Date();
let yearToday = today.getFullYear();
let monthToday = today.getMonth();
let dayToday = today.getDate();
let endOfMonth = new Date(yearToday, monthToday, 0).getDate();
const remainingDays = (today) => {
    console.log(endOfMonth - dayToday);
}

remainingDays();