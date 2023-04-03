/*
    Data Type
    keyword typeof
*/
// String
let a = 'Hi';
console.log(typeof a); // string
// Number
let b = 12;
console.log(typeof b); // number
// Boolean
let c = true;
console.log(typeof c); // boolean
// Undefined
let d;
console.log(typeof d); // undefined
// Null 
let e = null;
console.log(e); // null
// Symbol
const sym = Symbol("foo");
console.log(typeof sym);; // "symbol"
const symObj = Object(sym);
console.log(typeof symObj); // "object"
console.log(symObj.description); // foo

// Object
const myObj = {
    name: "ZeekerCode",
    learning: "JavaScript"
}
console.log(typeof myObj); // "object"