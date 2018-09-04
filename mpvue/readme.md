# mpvue 未找到入口 app.json 文件

## 只需要把 packpage.json 里的 mpvue-loade 后面的‘^’去掉，重新安装依赖即可。

# mpvue 配置了 tab 选项卡不生效

#https://github.com/Meituan-Dianping/mpvue/issues/384

#tabBar 中配置的 pagePath 一定要包含首页，也就是 pages 字段中带“^”的路径

# scss

# px2rpx

# npm install px2rpx-loader

<!-- {
  loaders: [{ test: /\.css$/, loader: 'style!css!px2rpx?rpxUnit=75&rpxPrecision=8' }]
} -->
