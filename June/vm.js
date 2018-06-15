// 移动端的适配布局
https://segmentfault.com/a/1190000014185590

1.安装postCss插件

cssnext：CSS未来语法
Autoprefixer：自动补全浏览器私有前缀
precss：CSS预处理（整合Sass、LESS或Stylus功能，语法基本和Sass的相同）
postcss-import：通过@import，整合多个CSS文件
css-mqpacker：将相同的CSS媒体查询规则合并为一个
cssnano：压缩CSS文件
postcss-color-rgba-fallback：给rgba颜色创建降级方案(添加备用颜色)
postcss-opacity：给opacity提供降级方案（给IE浏览器添加滤镜属性）
node-pixrem：让IE8支持rem单位
postcss-pseudoelements：将伪元素的::转换为:(IE8不支持::)
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

	
npm i lib-flexible --save
import 'lib-flexible'

3. 引入静态文件 flexble
