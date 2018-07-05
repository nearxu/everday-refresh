function quickSort(arr) {
  var len = arr.length;
  var pIndex = Math.floor(arr.length / 2);
  var pvot = arr.splice(pIndex, 1);
  var left = [],
    right = [];
  for (var i = 0; i < len; i++) {
    if (arr[i] < pvot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pvot, quickSort(right));
}

function insert(arr) {
  var temp;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
}
