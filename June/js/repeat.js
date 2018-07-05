function deleteRepeat(arr) {
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i];
    for (var j = i + 1; j < arr.length; j++) {
      if (temp === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

function delete1(arr) {
  var obj = {};
  for (var i = 0; i < arr.length - 1; i++) {
    var temp = arr[i];
    if (obj[temp] === temp && temp !== undefined) {
      arr.splice(i, 1);
      i--;
      continue;
    }
    obj[temp] = temp;
  }
  obj = null;
  return arr;
}

var ary = [1, 2, 34, 56, 6, 7, 45, 3, 2, 2, 12, 4, 9, 8, 6, 7, 4];
console.log(deleteRepeat(ary));
console.log(delete1(ary));
