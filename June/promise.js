var a = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('aaa');
    }, 3000);
});

var b = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('bbb');
    }, 1000);
});

var p = Promise.all([a, b]);
p.then(function (val) {
    console.log(val);
});//结果：['aaa','bbb']