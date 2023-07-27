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

setInterval(main, 1000);