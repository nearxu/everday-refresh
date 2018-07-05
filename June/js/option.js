function selectOption(arr, num) {
  let targetArr = [];
  for (let i = 0; i < num; i++) {
    var ran = Math.round(Math.random() * (arr.length - 1) + 0);
    targetArr.push(arr[ran]);
    // arr.splice(ran,1);
    arr[ran] = arr[arr.length - 1];
    arr.length = arr.length - 1;
  }
  return targetArr;
}
var ary = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];
console.log(selectOption(ary, 10));
