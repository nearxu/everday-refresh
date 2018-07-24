function* fn() {
  console.log(1);
  //stop
  yield;
  console.log(2);
}

// 函数生成器特点是函数名前面有一个‘*’
// 3、调用next()方法开始执行函数

// 　　4、遇到yield函数将暂停

// 　　5、再次调用next()继续执行函数
