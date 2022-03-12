const fs = require('fs');
// setTimeout第二个实参可以传入一个延迟执行的时间(单位:ms)
// 但是默认最小1ms,哪怕开发者写了0ms,也相当于写了1ms
// setTimeout(()=>{
//     console.log('1')
// },0);

// fs.readFile('./01-1.原型与原型链.html',()=>{
//     // node事件轮训的顺序的确是1->4->5->1,但是即便到达了某个阶段,如果不满足条件,也不会执行对应的回调函数
//     // poll阶段属于事件轮询机制的休息阶段,如果其他阶段没有宏任务了,就会停在当前阶段休息
//     // 而且node的轮询机制是必须到6才会回到1
//     console.log('2');

//     setTimeout(()=>{
//         console.log('1')
//     },0);

//     setImmediate(()=>{
//         console.log('3')
//     })
// })


// setImmediate(()=>{
//     console.log('3')
// })

// setTimeout(()=>{
//     console.log('3')
// },1000);


// 由于可能出现主线程代码过少,花费时间小于1ms,会导致1ms的定时器没有被执行,导致错误效果,所以此处加上for循环以便观察
// for (let index = 0; index < 100000; index++) {
    
// }


// 宏任务是普通用户,微任务是VIP,nextTick是SVIP
// node中一共具有6个宏任务队列,2个微任务队列(nextTick和then各一个)
// process.nextTick(()=>{
//     console.log('1')
// })

Promise.resolve().then(()=>{
    console.log('2')
    
    Promise.resolve().then(()=>{
        console.log('1')
    })

    process.nextTick(()=>{
        console.log('3')
    })
    
    Promise.resolve().then(()=>{
        console.log('4')
    })
})


    
// Promise.resolve().then(()=>{
//     console.log('1')
// })

// process.nextTick(()=>{
//     console.log('3')
// })

// Promise.resolve().then(()=>{
//     console.log('4')
// })

