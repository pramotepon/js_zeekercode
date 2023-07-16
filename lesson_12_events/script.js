/* 
    Events
*/
// onLoad
// window.addEventListener('load', () => {
//     document.getElementById('show-text').innerHTML += " World";
// })

// onClick
// document.getElementById('show-text').addEventListener('click', () => {
//     document.getElementById('show-text').innerHTML += " World";
// })

// onChange
// document.getElementById('fullName').addEventListener('change', (e)=>{
//     // document.getElementById('show-text').innerHTML = document.getElementById('fullName').value
//     // console.log(e.target.value);
//     document.getElementById('show-text').innerHTML = e.target.value
// })

// onKey?
document.getElementById('fullName').addEventListener('keyup', (e)=>{
    document.getElementById('show-text').innerHTML = e.target.value
})