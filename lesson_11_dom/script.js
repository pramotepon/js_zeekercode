// Id
const root = document.getElementById("root"); // getElementBy - Id
// console.log(root);
// Tag name
const p = document.getElementsByTagName("p");
// console.log(p);
// Class name
const show = document.getElementsByClassName("show")
// console.log(show);
// Query selector
/* 
    Id : #id
    class : .className
    Tag: tag
*/
// const pInShow = document.querySelector("div.show p")
const pInShow = document.querySelector("div#div-have-p p")
// console.log(pInShow);

// Function Create element
// <!-- Div -> h1 -> Hello HTML! -->
const newDiv = (text = '') => {
    const newDiv = document.createElement("div");
    const newH1 = document.createElement("h1");

    newH1.textContent = text;

    newDiv.append(newH1)

    return newDiv;
}
// Create
root.append(newDiv("Hello HTML!"));
// console.log(document.querySelector("div#root div"));
const newDivA = document.querySelector("div#root div h1").textContent = "Hello html!";

// Remove
// document.getElementsByTagName("p")[0].remove();


/*
    Attribute
*/
// Access
console.log(document.getElementsByClassName("show")[0].attributes.class.value);

// Reassign
document.getElementsByClassName("show")[0].attributes.class.value += " from-js"; 
// Input value
document.getElementById("fname").attributes.value.value = "ZeekerCode";

document.getElementById("fname").style.color = "red"
/* 
    Text
    - textContent
    - innerText
    - innerHTML
*/
// console.log(document.getElementsByTagName("p")[0].textContent);
// console.log(document.getElementsByTagName("p")[0].innerText);
// console.log(document.getElementsByTagName("p")[0].innerHTML);
// document.getElementById("textContent").textContent = "<b>Hello Text content</b>";
// document.getElementById("innerText").innerText = "<b>Hello innerText</b>";
// document.getElementById("innerHTML").innerHTML = "<b>Hello innerHTML</b>";

// console.log(document.getElementById("textContent").textContent);
// console.log(document.getElementById("innerText").innerText);
// console.log(document.getElementById("innerHTML").innerHTML);