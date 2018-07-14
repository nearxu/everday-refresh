// 如果是数组，可以利用该数组的一些方法，比如：slice、concat返回一个新数组来实现拷贝
var arr = ["old", 1, true];
var newArr = [...arr];
console.log(newArr, "newarr");

// JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
// JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
var arr = ["old", 1, true, ["old1", "old2"], { old: 1 }];
var newarr = JSON.parse(JSON.stringify(arr));
console.log(newarr, "newarr");

// 不能拷贝函数
var arr = [
  function() {
    console.log("a"),
      {
        b: function() {
          console.log("b");
        }
      };
  }
];
var new_arr = JSON.parse(JSON.stringify(arr));
console.log(new_arr); //null

var a = { old: 1, age: true, name: { names: "tom" } };
var deepCopy = function(obj) {
  if (typeof obj !== "object") return;
  var newObj = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
};
console.log(deepCopy(a), "a");
