// demo1 promise
// let p1 = new Promise(() => {
//     setTimeout(() => {
//         console.log(1);
//     }, 1000);
//     console.log(2);
// });
// console.log(3); // 2 3 1

// demo2 promise
let p2 = new Promise((resolve, reject) => {
    console.log(1);
    resolve('浪里行舟')
    console.log(2)
});

// then:设置成功或者失败后处理的方法
p2.then(result => {
    //p1延迟绑定回调函数
    console.log('成功 '+ result);
},  reason => {
   console.log('失败 '+ reason);
});
console.log(3);
