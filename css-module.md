# CSS Modules 用法教程

#http://www.ruanyifeng.com/blog/2016/06/css_modules.html

#webpack.config.js

<!--
{
test: /\.s?.css$/,
use: [
require.resolve("style-loader"),
{
loader: require.resolve("css-loader"),
options: {
importLoaders: 1,
modules: true, //css-module true
localIdentName: "[name]**[local]\_**[hash:base64:5]"
}
},
{
loader: require.resolve("sass-loader")
}
]
 } -->
