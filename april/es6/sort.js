const unique = (arr) => {
    let res = [];
    arr.forEach(item => {
        if (res.indexOf(item) === -1) {
            res.push(item);
        }
    })
    return res;
}


let nums = [1, 2, 3, 1, 2, 8, 9];

// console.log(unique(nums));

const uniqueset = (arr) => [...new Set(arr)];


// obj
const uniqueobj = (arr) => {
    let map = arr.reduce((map, cur, index) => {
        console.log(map, 'map', cur, 'cur', index, 'index');
        map[cur] = index;
        return map;
    }, {})
    console.log(map, 'map');
    return Object.values(map).map(index => arr[index]);
}

console.log(uniqueobj(nums));


// array.reduce
const valus = [1, 2, 3, 4, 5];
const suns = valus => valus.reduce((pre, cur, index, array) => {
    console.log(pre, 'pre', cur, 'cur', index, 'index')
    return pre + cur;
}, 0)

// console.log(suns(valus));
