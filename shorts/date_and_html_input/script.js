const myDate = new Date();

const date = (myDate.getDate()).toString().padStart(2, "0");
const month = (myDate.getMonth() + 1).toString().padStart(2, "0");
const year = myDate.getFullYear();

const dateFormat = `${year}-${month}-${date}`;

// document.getElementById("my-date").setAttribute("value", dateFormat)

// document.getElementById("my-date").setAttribute("min", dateFormat);

document.getElementById("my-date").setAttribute("max", dateFormat);