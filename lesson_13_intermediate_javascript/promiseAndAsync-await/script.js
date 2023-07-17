// Call Stack (LIFO = Last in First out)
// const firstFnc = () => {
//     console.log(1);
// }

// const secondFnc = () => {
//     setTimeout(() => {
//         console.log(2);
//     }, 0)
// }

// const ThirdFnc = () => {
//     console.log(3);
// }

// firstFnc();
// secondFnc();
// ThirdFnc();

// Promise (Resolve , Reject)
const myPromise = () => {
    let firstChk = 3;
    let secondChk = 2;
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(firstChk < secondChk){
                return resolve("Success");
            }else{
                return reject("Failed");
            }
        }, 2000)
    });
}
// const firstFunction = () => {
//     console.log("First");
// }

// Access Resolve & Reject (.then)
// myPromise().then((resolve) => {
//     console.log(resolve);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log('Ending');
// })
// firstFunction();

// Async await
// async function showData() {
//     const data = await myPromise();
//     console.log(data);
// }

// const showData = async () => {
//     try{
//         const data = await myPromise();
//         console.log('Resolve: ', data);
//     }catch(err){
//         console.log('Reject: ', err);
//     }
// }

// showData()