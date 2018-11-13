

// error堆栈追踪

// function foo() {
//     throw new Error('SessionStack will help you resolve crashes :)');
// }
// function bar() {
//     foo();
// }
// function start() {
//     bar();
// }
// start();

//  "堆栈溢出"，当你达到调用栈最大的大小

// function foo() {
//     foo;
// }
// foo()

let a = 'Hello World!';

function first() {
    console.log('Inside first function');
    second();
    console.log('Again inside first function');
}

function second() {
    console.log('Inside second function');
}

first();
console.log('Inside Global Execution Context');


let foo = {
    baz: function () {
        console.log(this)
    }
}

console.log(foo.baz(), 'foo.baz')
let bar = foo.baz;
console.log(bar(), 'bar()')



setTimeout(function () {
    console.log('setTimeout');
})

new Promise(function (resolve) {
    console.log('promise');
}).then(function () {
    console.log('then');
})

console.log('console');

// result
promise
11 console
undefined
setTimeout


