#cms 项目打包成静态文件

npm run build

#package.json

# 代理本地端口

"proxy":{
"/api":{
"target":"http:127.0.0.1:8080",
"pathRewrite":{
"^/api":"/"
},
"changeOrigin":true
}
}

#build 本都文件 映射路径到 build 里面

# 关于 build.css build.js 文件 404

#添加 "homepage":"http://www.dunkirk.club/cms"

### 关于 NGINX 配置问题

#静态文件

location /cms/ {
alias /usr/local/app/all/cms/build/;
index index.html
}

#api node 服务
location /api/{
proxy_pass http:127.0.0.1:8080/;
}

#nginx
sudo nginx -t # test
sudo nginx -s reload # 重载

#pm2

pm2 list
pm2 stop all
pm2 delete all

# 启动

pm2 start script/start.js --name football-news

pm2 start npm --name api --run start
