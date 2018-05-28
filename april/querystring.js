var url = "www.baidu.com?user=tom&age=18";

function querystring(search) {
  if (search.length === 0) return;
  let query = {};
  let slice = search.split("?")[1];
  let arr = slice.split("&");
  arr.forEach(el => {
    let split = el.split("=");
    query[split[0]] = decodeURIComponent(split[1]);
  });
  return query;
}

console.log(querystring(url));
