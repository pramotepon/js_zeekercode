/* 
    <,>,<=,>=,==,===,!==
    or boolean
*/
const a = 10;
const b = 12;
// Check if a === '10'
if(a === '10'){
    console.log('Is true'); // Is true
}else{
    console.log('Is false'); // Is false
}

/* 
    && and
    || or
*/
// Check if a === 10 and b == 12
if(a == 10 && b == 12){
    console.log('A and B is true.'); // A and B is true.
}else{
    console.log('A or B is false'); // A or B is false
}
// Check if a === 19 or b == 10
if(a == 19 || b == 10){
    console.log('A or B is true'); // A or B is true
}else{
    console.log('A And B is false'); // A And B is false
}

/* 
    else if
*/
// Check if a == 19 or b == 10
if(a == 19 || b == 10){
    console.log('A or B is true'); // A or B is true
    // Else if a == 10 
}else if(a == 10){
    console.log('A is true'); // A is true
    // Else if b == 12 
}else if(b == 12){
    console.log('B is true'); // B is true
}

/* 
    Thruthy and Falsy Assignment
*/
// Variable c = '' is equal false in boolean
const c = '';
// d = if c is true d eaual c, if c is false d equal false
let d = c || 'false';
console.log(d);

/* 
    Ternary operator Shothand if else
*/
a === 10 ? console.log('Shorthand is true') : console.log('Shorthand is false') ;

/* 
    Switch case
*/
// Define variable a for check case
switch(a){
    // case a = 0
    case 0:
        console.log('is Zero'); // is Zero
    // and ending process
    break;
    // case a = 10
    case 10:
        console.log('is Ten'); // is Ten
    // and ending process
    break;
    // case a != every case
    default:
        console.log('What is that'); // What is that
    // and ending process
    break;
}