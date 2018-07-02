// nginx 教程
// https://github.com/jaywcjlove/nginx-tutorial

jsonp 跨域
document.domain + iframe 跨域
location.hash + iframe 跨域
window.name + iframe 跨域
postMessage 跨域
跨域资源共享（CORS）
nginx 代理跨域
nodejs中间件代理跨域
WebSocket 协议跨域

    < script >

//原生js 实现jsonp跨域：
var script = document.createElement('script');

script.type = 'text/javascript';

// 传参并指定回调执行函数为onBack
script.src = 'http://www.domain2.com:8080/login?user=admin&callback=onBack';
document.head.appendChild(script);

// 回调执行函数（服务器返回时，即执行该函数）
function onBack(res) {
    alert(JSON.stringify(res));
}

</script >


    2、 nginx反向代理接口跨域

跨域原理： 同源策略是浏览器的安全策略，不是HTTP协议的一部分。服务器端调用HTTP接口只是使用HTTP协议，不会执行JS脚本，不需要同源策略，也就不存在跨越问题。
实现思路：通过nginx配置一个代理服务器（域名与domain1相同，端口不同）
做跳板机，反向代理访问domain2接口，并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域登录。

#proxy服务器
server {
    listen       81;
    server_name  www.domain1.com;

    location / {
        proxy_pass   http://www.domain2.com:8080;  #反向代理
        proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名
        index  index.html index.htm;

        # 当用webpack-dev - server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
        add_header Access-Control - Allow - Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*
            add_header Access-Control - Allow - Credentials true;
    }
}

node中间件实现跨域代理，原理大致与nginx相同，
都是通过启一个代理服务器，实现数据的转发，
也可以通过设置cookieDomainRewrite参数修改响应头中cookie中域名，
实现当前域的cookie写入，方便接口登录认证。

var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();

app.use('/', proxy({
    // 代理跨域目标接口
    target: 'http://www.domain2.com:8080',
    changeOrigin: true,

    // 修改响应头信息，实现跨域并允许带cookie
    onProxyRes: function (proxyRes, req, res) {
        res.header('Access-Control-Allow-Origin', 'http://www.domain1.com');
        res.header('Access-Control-Allow-Credentials', 'true');
    },

    // 修改响应信息中的cookie域名
    cookieDomainRewrite: 'www.domain1.com'  // 可以为false，表示不修改
}));

app.listen(3000);
console.log('Proxy server is listen at port 3000...');


