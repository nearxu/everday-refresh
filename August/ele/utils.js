/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */

function urlParse(url) {
  //  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  if (arr) {
    arr.forEach(item => {
      let temp = item.substring(1).split("=");
      let key = decodeURIComponent(temp[0]);
      let value = decodeURIComponent(temp[1]);
      obj[key] = value;
    });
  }
  return obj;
}

console.log(urlParse("www.baidu.com?id=12345&a=b"));
