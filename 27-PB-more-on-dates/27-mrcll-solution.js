"use strict";

//you can change the "today" variable to check other dates or leave it empty for actual todays date"


let today = new Date();
today.setFullYear(2020, 1, 1);

const remainingDays = (now) => {
    let yearToday = now.getFullYear();
    let monthToday = now.getMonth();
    let dayToday = now.getDate();
    let endOfMonth = new Date(yearToday, monthToday + 1, 0).getDate();
    console.log(endOfMonth - dayToday);
    //console.log(endOfMonth);
}

remainingDays(today);

