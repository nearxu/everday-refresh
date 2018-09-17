const arrMax = Math.max(...[1, 2, 3, 4]);

// const chunk = ([1,2,3,4,5],2) => Array.from()
const diff = (a, b) => { const s = new Set(b); return a.filter(x => !s.has(x)) }
const diffArr = arr => [...new Set(arr)];

// const flat = arr => arr.reduce((pre, cur) => pre.concat(cur), []);
const deepFlat = arr => arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? deepFlat(cur) : cur), [])
console.log(deepFlat([1, [2, 2], [3, [4, [5, [6]]]]]));
console.log([1, 2, 3].slice(-1, 1));

var a = [1, 2];
a.foo = true;

for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}

for (i in a) {
    console.log(a[i], '会遍历非数字键');
}

// typeof [1,2] === object => 

console.log(Object.keys([1, 2]));

// var arr = Array.prototype.slice.call(arrlike)

// string.prototype.slice() === substring(start,end) 开始结束的下标
var a = '1234567'
console.log(a.slice(1, 3), a)
// substr (start,length)

// string.split(',')   => arr.join(',')

const pick = (object, arr) => arr.reduce((pre, cur) => ((cur in object && pre[cur] === object[cur]), pre), {})

// console.log(pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c']), 'pick');

const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomRange(1, 100));
function rangeNumArr(min, max, num) {
    let i = 0;
    let arr = [];
    while (i < num) {
        let a = randomRange(min, max);
        if (arr.indexOf(a) < 0) {
            arr.push(a);
            i++;
        }
    }
    return arr;
}
console.log(rangeNumArr(1, 100, 50));
