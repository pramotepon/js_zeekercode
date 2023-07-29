const myDate = new Date();
// toString
// toUTCString
// toISOString
console.log(myDate.toString());
console.log(myDate.toUTCString());
console.log(myDate.toISOString());

// const myDate = new Date(2023, 0);
// console.log(myDate.toString());

// Month index Jan start 0
// const utcDate = new Date(2023, 13);
// console.log(utcDate.toISOString());

// const stringDate = new Date("2023-12-01T17:00:00.000Z");
// console.log(stringDate.toISOString());

// year, monthIndex, day, hours, minutes, seconds, milliseconds
// const stringDate = new Date(1994, 10, 23, 23, 59, 8, 0);
// console.log(stringDate.toString()); // +07
// console.log(stringDate.toISOString()); // +00
// console.log(stringDate.toUTCString()); // +00

// Method for set Datetime
// const myDate = new Date();
// console.log(myDate.toString());
// myDate.setFullYear(2024);
// myDate.setMonth(10)
// console.log(myDate.toString());

// Convert to a string format
// const myDate = new Date();
// toString
// console.log(myDate.toString());

// toTimeString
// console.log(myDate.toTimeString());

// toDateString
// console.log(myDate.toDateString());

// toUTCString
// console.log(myDate.toUTCString());

// toISOString
// console.log(myDate.toISOString());

// toGMTString
// console.log(myDate.toUTCString()); // 00
// console.log(myDate.toGMTString()); // 00

// toJSON
// console.log(myDate.toJSON());

// toLocaleDateString
// console.log(myDate.toLocaleDateString());
// Parameter (locales, {options})
// console.log(myDate.toLocaleDateString('th-TH', { weekday: 'long' }));
// toLocaleString format option
// timeZone
// console.log(myDate.toLocaleDateString('th-TH', { timeZone: "Asia/Bangkok" }));
// hours
// console.log(myDate.toLocaleString('en-EN', { hour12: true }));
// weekday
// console.log(myDate.toLocaleString('en-EN', { weekday: "long" }));
// era
// console.log(myDate.toLocaleString('th-TH', { era: "long" }));
// year, month, day, second
// console.log(myDate.toLocaleString('en-EN', { year: "numeric", month: "short", day: "numeric", second: "2-digit" }));
// timeZoneName
// console.log(myDate.toLocaleString('en-EN', { timeZoneName: "shortOffset" }));

// Get data split
// const dateNow = new Date();
// Milliseconds Start 1/1/1970
// console.log(dateNow.getTime());
// Year
// console.log(dateNow.getFullYear());
// Month
// console.log(dateNow.getMonth());
// Date
// console.log(dateNow.getDate());
// Hours
// console.log(dateNow.getHours());
// Minute
// console.log(dateNow.getMinutes());
// Second
// console.log(dateNow.getSeconds());
// getMilliSecond
// console.log(dateNow.getMilliseconds());

// Date Comparision
// const date1 = new Date(); // 1690556673742
// const date2 = new Date(); // 1690556673752
// console.log(date1 == date2);

/* 
    WorkShop
    Countdown New year
    100, 1, 50, xx -1 59 58 57 56
    days before new year, hours, minute, second
*/

// Get new year
const getNewYear = () => {
    const newYear = new Date();
    newYear.setDate(1);
    newYear.setMonth(0);
    newYear.setFullYear(newYear.getFullYear() + 1);
    newYear.setHours(0);
    newYear.setMinutes(0);
    newYear.setSeconds(0);
    return newYear;
}

// Get date now
const getDateNow = () => {
    const dateNow = new Date(Date.now());
    let date1_ms = getNewYear().getTime();
    let date2_ms = dateNow.getTime();
    let currDate = date1_ms - date2_ms;
    return currDate;
}

// Get time distance
const getTimeDistance = (currDate) => {
    const calDays = (24 * 60 * 60 * 1000);
    const calHours = (60 * 60 * 1000);
    const calMinutes = (60 * 1000);
    const days = Math.floor(currDate / calDays);
    const hours = Math.floor(currDate % calDays / calHours);
    const minutes = Math.floor(currDate % calHours / calMinutes);
    const sec = Math.floor(currDate % calMinutes / 1000);
    return {
        days,
        hours,
        minutes,
        sec
    }
}

// Show distance in html
const setTimeDistance = (fncTime, fncNewYear) => {
    const { days, hours, minutes, sec } = fncTime;
    document.getElementById("new-year").textContent = 'Happy new year ' + fncNewYear.getFullYear() + ' in:';
    document.getElementById("day").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minute").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("second").textContent = sec.toString().padStart(2, "0");
}

// Main function
const main = () => {
    // Get ms date now
    const currDate = getDateNow();
    // Get Time Distance (days, hours, minutes, sec)
    setTimeDistance(getTimeDistance(currDate), getNewYear());
}

// setInterval(main, 1000);

// const updateTime = () => {
//     // Get date now
//     const dateNow = new Date();
//     // Get new year
//     const newYear = new Date();
//     newYear.setDate(1);
//     newYear.setMonth(0);
//     newYear.setFullYear(newYear.getFullYear() + 1);
//     newYear.setHours(0);
//     newYear.setMinutes(0);
//     newYear.setSeconds(0);

//     // Get distanct milliseconds
//     let distanctMS = newYear.getTime() - dateNow.getTime();
//     // Convert ms to days
//     let days = Math.floor(distanctMS / (24 * 60 * 60 * 1000));
//     let hours = Math.floor(distanctMS % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
//     let minute = Math.floor(distanctMS % (60 * 60 * 1000) / (60 * 1000));
//     let second = Math.floor(distanctMS % (60 * 1000) / 1000)
//     document.getElementById("days").textContent = days;
//     document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
//     document.getElementById("minutes").textContent = minute.toString().padStart(2, "0");
//     document.getElementById("seconds").textContent = second.toString().padStart(2, "0");
// }

// setInterval(updateTime, 1000);