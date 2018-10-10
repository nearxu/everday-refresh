

const countCuuren = (arr,val) => arr.reduce((cur,pre) => (pre === val ? cur+1 :cur),0  )

console.log(countCuuren([1,2,4,5,3,4,4],4));

const deepFlat = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlat(v):v))

console.log(deepFlat([1,[2,2,[3,4]]]))

// [...new Set(arr)]
const diff = (a,b) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x))
}

console.log(diff([1,2,3,4],[4,5,6]))

const maxN = (arr,n) => [...arr].sort((a,b) => b-a).slice(0,n)

const chunk = (arr,size) => Array.from({length: Math.ceil(arr.length / size)}, (v, i) => arr.slice(i * size, i * size + size))
var arr = Array.from([1,2,3],x => x*10)
console.log(arr)
console.log(chunk([1,2,3,4,5],2))

// const pick = (obj,arr) => arr.reduce((cur,pre) => (cur in obj && obj[curr] === ),{})

// arr.reduce((prevale,curvalue,curindex,arr)
const sum = arr=> arr.reduce((pre,cur,index) =>{
    console.log(index,' ',cur,' ',pre)
    return pre+cur
},0)
sum([1,2,3,4,5])

const sort = arr => arr.sort(() => {
    console.log(Math.random() -0.5);
    return Math.random() -0.5
})

console.log(sort([1,2,3,4,5,6]))

const similar = (arr,arr1) => arr.filter(v => arr1.includes(v))
console.log(similar([1,2,3,4],[3,4,5,6]))

const diffSimilar = (arr,arr1) => {
    const sa = new Set(arr);
    const sb = new Set(arr1);
    return [...arr.filter(v => !sb.has(v)), ...arr1.filter(m => !sa.has(m))]
}
console.log(diffSimilar([1,2,34],[2,3,4]));

const sleep = ms => new Promise(resolve => setTimeout(resolve,ms));

