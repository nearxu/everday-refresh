var counter = 0;
var timer = setInterval(() => {
  if (counter < 10) {
    console.log("hello");
  } else {
    clearInterval(timer);
  }
  counter++;
}, 2000);

var timer1 = setTimeout(() => {
  console.log("一次性定时器 5s 执行");
}, 5000);
