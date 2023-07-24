let text = "Hello World";
console.log(text);

// Convert to string
const toMyString = String("Hello World");
const numToMyString = String(8);
console.log(toMyString);
console.log(numToMyString);

const myNumb = 8;
const myBool = true;
const myObj = { name: "Zeeker"};
const myNumbToString = myNumb.toString();
const myBoolToString = myBool.toString();
const myObjToString = myObj.toString();
console.log(typeof myNumb.toString());
console.log(typeof myBool.toString());
console.log(typeof myObj.toString());
console.log(typeof myNumbToString);
console.log(typeof myBoolToString);
console.log(myObjToString);

// Character code
// console.log(String.fromCharCode(72, 101, 108, 108, 111));

// Concat String
// const zName = "Zeeker";
// const zType = "Code";
// const textShow = zName + " " + zType;
// Number concat string
// const zNum = 0;
// const textNum = zNum + textShow;
// Boolean concat string
// const zBool = false;
// const textBool = zBool + textShow;
// console.log(typeof textBool);
// Backtricks `
// const zName = "Zeeker";
// const zType = "Code";
// const textShow = zName + "${zName}" + zType;
// const zText = `${zName} ${zType}`;
// const calculateData = `${1+2+3+4}`;
// console.log(calculateData);

// การเปรียนเทียบข้อความตามพจนานุกรม (A-Z, Z-A)
/* 
    localeCompare 
    return:
    -1  : A-Z    
    0   : Equal
    1   : Z-A
*/
// const zRule1 = "Zeekercode";
// const zRule2 = "ZeekerCode";
// const result = zRule1.localeCompare(zRule2);
// console.log(result);

// Access character at index
// const zText = "ZeekerCode";
// console.log(zText.length);
// console.log(zText[3]);

// Escaping Quotes
// const zText = "Zeeker'Code";
// const zText = 'Zeeker"Code';
// const zText = 'Zeek\'er\"Code';
// const zText = `Zeek'er"Code`;
// console.log(zText);

// Join Array to Sting
// const zArr = ["Zeeker", "Code"];
// const zText = zArr.join("");
// console.log(zText);

// Detecting String
// const zText = "ZeekerCode";
// console.log(typeof zText);
// const insZText = new String("ZeekerCode");
// console.log(typeof insZText);
// console.log(insZText.valueOf());
// console.log(typeof insZText.valueOf());
// console.log(insZText instanceof String);
// const isString = (value) => {
//     return typeof value === "string" || value instanceof String;
// }
// const insZText = 8;
// console.log(isString(insZText));
// console.log(typeof insZText.toString());

// String convert to Number of base x
// Base 10 Number
// const b10 = 10;
// let b16 = b10.toString(16);
// console.log(b16);

/* 
    String Method
*/
// .length
// const zText = "ZeekerCode";
// console.log(zText.length);

// SubString
// const zText = "ZeekerCode";
// console.log(zText.substring(6, 7)); // Zeeker, C ,ode

// Slice
// const zText = "ZeekerCode";
// console.log(zText.slice(6, 7));

// Replace
// const zText = "ZeekerCode Code";
// console.log(zText.replace("Code", "Happy"));

// Replace All
// const zText = "ZeekerCode";
// console.log(zText.replaceAll("Code", "Happy"));

// Repeat
// const zText = "ZeekerCode";
// console.log(zText.repeat(2));

// To upper case / To lower case
// const zText = "ZeekerCode";
// console.log(zText.toUpperCase());
// console.log(zText.toLowerCase());

// Concat
// const textA = "Zeeker";
// const textB = "Code";
// console.log(textA.concat(textB));

// Trim
// const textA = "ZeekerCode   ";
// const textB = "     ZeekerCode";
// console.log(`${textA.trim()},${textB.trim()}`);
// console.log(`${textA.trimEnd()},${textB.trimStart()}`);

// PadStart
// let pokeNo = "10"; // 0000
// console.log(pokeNo);
// console.log(pokeNo.padStart(4, "x")); // xx10

// PadEnd
// let pokeNo = "10"; // 0000
// console.log(pokeNo);
// console.log(pokeNo.padEnd(4, "x")); // 10xx

// CharAt
// const zText = "ZeekerCode";
// console.log(zText[6]);
// console.log(zText.charAt(6));

// CharCodeAt
// const zText = "ZeekerCode";
// console.log(zText.charCodeAt(6));
// console.log(String.fromCharCode(67));

// Split
// const zText = "Zeeker, Code, Hello, world";
// const zArr = zText.split(", ");
// console.log(zText);
// console.log(zArr);

/* 
    Workshop : Reverse text
    ZeekerCode
    edoCrekeeZ
*/
// const reverseString = (value) => {
//     return value.split('').reverse().join('');
// }
// console.log(reverseString("ZeekerCode"));

/* 
    Find String
*/
// indexOf
// const zText = "ZeekerCode";
// console.log(zText.indexOf("e"));
// console.log(zText.indexOf("e", 3));

// lastIndexOf
// const zText = "ZeekerCode";
// console.log(zText.lastIndexOf("e"));
// console.log(zText.lastIndexOf("e", 8));

// includes
// const zText = "ZedekerCode";
// console.log(zText.includes("rCo"));
// console.log(zText.includes("de", 10));

// Search
// const zText = "ZeekerCode";
// console.log(zText.search(/C/));

// Match 
// const zText = "ZeekerCoder";
// const isMatch = zText.match("er");
// const isMatch = zText.match(/er/);
// const isMatch = zText.match(/er/g);
// const isMatch = zText.match(/er/gi);
// console.log(isMatch);

// MatchAll
// const zText = "ZeekerCodeR";
// const isMatch = zText.matchAll("ass");
// const isMatch = zText.matchAll(/er/g);
// const isMatch = zText.matchAll(/ass/gi);
// console.log(Array.from(isMatch));

// StartWith
// const zText = "ZeekerCodeR";
// console.log(zText.startsWith("Zeeker", 1));

// endsWith
// const zText = "ZeekerCodeR";
// console.log(zText.endsWith("Code", 10));