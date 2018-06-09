// 移动端的适配布局
https://segmentfault.com/a/1190000014185590

1.安装postCss插件

cnpm i--save postcss - aspect - ratio - mini
postcss - px - to - viewport postcss - write - svg
postcss - cssnext postcss - viewport - units cssnano

autoprefixer
px2rem

2.增加配置

webpack.config.js
{
    loader: require.resolve("postcss-loader")
}


const px2rem = require("postcss-px2rem");

module.exports = {
    plugins: [
        require("autoprefixer"),
        px2rem({ remUnit: 75 /*, threeVersion: true*/ })
    ]
};

3. 引入静态文件 flexble
