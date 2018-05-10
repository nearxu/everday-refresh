const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

const assign = Object.assign(target, source1, source2);

// [1,2,3].join('=')  ===> '1=2=3'
const formatobj = obj => {
  return Object.keys(obj)
    .map(item => {
      return item + "=" + obj[item];
    })
    .join("&");
};

const objs = formatobj(assign);

console.log(objs);

const queryString = query => {
  let index = query.indexOf("?") === -1 ? 0 : 1;
  return query
    .slice(index)
    .split("&")
    .reduce((pre, cur) => {
      let arr = cur.split("=");
      pre[arr[0]] = arr[1];
      return pre;
    }, {});
};

console.log(queryString(objs));

const str = Object.keys(assign).map((item) => {
  return (item + '=' + assign[item]);
}).join('&');

console.log(str, 'str')

const toobj = str => {
  let index = str.indexOf('?') === -1 ? 0 : 1;
  str.slice(index).split('&').reduce((pre, cur) => {
    let arr = cur.split('=');
    pre[arr[0]] = arr[1];
    return pre;
  }, {})
}
