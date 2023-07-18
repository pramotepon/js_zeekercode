// https://jsonplaceholder.typicode.com/guide/

// Method GET
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/posts/2')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// Method POST https://jsonplaceholder.typicode.com/posts
// const data = JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// })
// console.log(data);
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// Method PUT
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// Method Patch
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PATCH',
//     body: JSON.stringify({
//         title: 'foo',
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });

/* 
    Async Await
*/
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
const fetchDatas = async () => {
    const jsonData = await fetch('https://jsonplaceholder.typicode.com/posts');
    const datas = await jsonData.json();
    console.log(datas);
}

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
const postData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const data = await res.json();
    console.log(data);
}
// fetchDatas();
postData();