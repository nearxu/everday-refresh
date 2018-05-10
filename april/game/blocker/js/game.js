// 生成图片对象
const imageFromPath = src => {
  let img = new Image();
  img.src = "./images/" + src;
  return img;
};

// 图片素材路径
const allImg = {
  background: "background.jpg",
  paddle: "paddle.png",
  ball: "ball.png",
  block1: "block001.png",
  block2: "block002.png"
};

class Game {
  constructor(fps = 60) {
    let g = {
      canvas: document.getElementById("canvas"), // canvas元素
      context: document.getElementById("canvas").getContext("2d"), // canvas画布
      timer: null, // 轮询定时器
      fps: fps
    };
    Object.assign(this, g);
  }
  draw(blockList) {
    let g = this;
    g.context.clearRect(0, 0, g.canvas.width, g.canvas.height);
    g.drawBg();
  }
  drawImage(obj) {
    this.context.drawImage(obj.image, objx, obj.y);
  }
  drawBg() {
    let bg = imageFromPath(allImg.background);
    this.context.drawImage(bg, 0, 0);
  }
  init() {
    this.draw();
  }
}

// scane
class Scene {
  constructor(lv) {
    let s = {
      lv: lv,
      canvas: document.getElementById("canvas"),
      blockList: []
    };
    Object.assign(this, s);
  }
  initBlockList() {
    this.createBlockList();
  }
  createBlockList() {
    let lv = this.lv, // 游戏难度级别
      c_w = this.canvas.width, // canvas宽度
      c_h = this.canvas.height, // canvas高度
      xNum_max = c_w / 50, // x轴砖块最大数量
      yNum_max = 12, // y轴砖块最大数量
      x_start = 0, // x轴起始坐标，根据砖块数量浮动
      y_start = 60;
    switch (lv) {
      case 1: // 正三角形
        var xNum = 16, // x轴砖块第一层数量
          yNum = 9; // y轴砖块层数
        // 循环y轴
        for (let i = 0; i < yNum; i++) {
          let arr = [];
          // 修改每层x轴砖块数量
          if (i === 0) {
            xNum = 1;
          } else if (i === 1) {
            xNum = 2;
          } else {
            xNum += 2;
          }
          x_start = (xNum_max - xNum) / 2 * 50; // 修改每层x轴砖块起始坐标
          // 循环x轴
          for (let k = 0; k < xNum; k++) {
            if (i < 3) {
              // 前三排为特殊砖块
              arr.push({
                x: x_start + k * 50,
                y: y_start + i * 20,
                type: 2
              });
            } else {
              arr.push({
                x: x_start + k * 50,
                y: y_start + i * 20,
                type: 1
              });
            }
          }
          this.blockList.push(arr);
          console.log(this.blockList, "blocklist  arr");
        }
        break;
    }
  }
}

let main = {
  fps: 60,
  start: function() {
    let self = this;
    self.scene = new Scene(1);
    self.blockList = self.scene.initBlockList();
    self.game = new Game(self.fps);
    self.game.init(self);
  }
};

main.start();
