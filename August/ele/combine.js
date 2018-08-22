let arr = [
  {
    id: 0,
    lists: [{ value: 3 }, { value: 1 }, { value: 0 }]
  },
  {
    id: 1,
    lists: [{ value: 1 }, { value: 0 }, { value: 3 }]
  }
];

var a = arr.map(m => m.lists.map(item => item.value));

var b = a.reduce((pre, cur) => {
  return pre.concat(cur);
}, []);

console.log(a, "a", b);
