import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import routers from "./routes";
import { Provider } from "react-redux";
import store from "./store";

import "normalize.css"; //重置浏览器默认样式
// import 'flex.css'; //flex布局
import "flex.css/dist/data-flex.css"; //flex布局
import "./common/style.less";
// import "./Iconfont/iconfont.css"; //字体图标

ReactDOM.render(
  <Provider store={store}>{routers}</Provider>,
  document.getElementById("root")
);
registerServiceWorker();
