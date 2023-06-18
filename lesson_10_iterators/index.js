/* 
    Map
    - Return stack to array
    - Get 3 parameter (value, index, array) default is a value
*/
// const moneyUsd = [25, 50, 10, 15];
// const excUsdToThb = (money, i) => {
//     let showMoney = money;
//     console.log("index: ", i, " THB: ", showMoney *= 34.57);
//     return money *= 34.57;
// }
// const moneyTh = moneyUsd.map(excUsdToThb);
// const moneyTh = moneyUsd.map(money => money *= 34.57);
// console.log(moneyTh);

/* 
    Filter
    - Return stack to array
    - Get 3 parameter (value, index, array) default is a value
*/
// Val > 10
// const calMoreThan = (value) => {
//     return value > 10;
// }
// const moreThan = moneyUsd.filter(value => value > 10);
// const moreThan = moneyUsd.filter(calMoreThan);
// console.log(moneyUsd);
// console.log(moreThan);

/* 
    Find Index
    - Return callback to value (First value is check)
*/
// [25, 50, 10, 15]
// const getIndexFnc = (value) => {
//     return value < 10
// }
// const getIndex = moneyUsd.findIndex(value => value < 25)
// const getIndex = moneyUsd.findIndex(getIndexFnc)
// console.log(getIndex);

/* 
    Reduce
    - Return Summary of each arr
    - Initial default is 0
*/
// const age = [17, 25, 26, 41]

// const ageSumFnc = (total, curr) => {
//     return total + curr;
// }
// // const ageSum = age.reduce((total, curr) => total + curr, 10); // {0 + 10} {10 + 17}, {27 + 25}, {52 + 26}, {78 + 41} = 119
// const ageSum = age.reduce(ageSumFnc, 10); // {0 + 10} {10 + 17}, {27 + 25}, {52 + 26}, {78 + 41} = 119

// console.log(ageSum);