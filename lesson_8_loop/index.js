// Array
// The initialization; The condition; The afterthought
const color = ["Red", "Blue", "Green", "Yellow", "Black", "White"];
// console.log(color.length-1);
// color[0] color[1] color[2] color[3];
/* 
  For loop
*/
// init = 0; 0 < 3; i + 1
// 0; true; { log i } after 0 + 1;
// 1; true; { log i } after 1 + 1;
// 2; true; { log i } after 2 + 1;
// 3; false; 
// end loop
// console.log(color[0]);
// console.log(color[1]);
// console.log(color[2]);
// console.log(color[3]);
// for(let i = 0; i < 3; i++){
//   console.log(i);
// }
// for(let i = 0; i < 5; i++){
//   console.log(color[i]);
// }
// for(let i = 0; i < color.length; i++){
//   console.log(color[i]);
// }

/* 
  Foreach
*/
// colorName = "Red", colorName = "Blue" ... colorName = "White"
// color.forEach((colorName, index, colorArray) => {
//   console.log('Index:' + index);
//   console.log('Color: ' + colorName);
//   console.log('Color Array: ' + colorArray);
// });

/* 
  While
*/
// let i = 0;
// while (i > color.length) {
//   console.log(color[i]);
//   i++;
// }
/* 
  Do while
*/
// do {
//   console.log(color[i]);
//   i++;
// } while (i > color.length);
/* 
  Continue
*/
// 0, 1, 3,..... , 9
// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     console.log('Two');
//     continue;
//   }
//   console.log(i);
// }
/* 
  Break
*/
// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     break;
//   }
//   console.log(i);
// }

// const myObj = { name: "Zeeker", type: "Code" };
// console.log(myObj["name"]);
// console.log(myObj["type"]);
/* 
  For in
*/
// for (const key in myObj) {
//   console.log(myObj[key]);
// }

/* 
  For of
*/
const myStr = "ZeekerCode"
for (const iterator of myStr) {
  console.log('Charactor: ', iterator);
}