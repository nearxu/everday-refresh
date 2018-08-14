function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
    }, time);
  });
}

for (let i = 0; i < 3; i++) {
  let timer = setInterval(() => {
    console.log(i);
    if (i === 3) {
      timer = null;
      clearInterval(timer);
    }
  }, 1000);
  sleep(1000);
}
