proxy: {
    "/api": "http://localhost:3000"
  }

  请求到 /api/users 现在会被代理到请求 http://localhost:3000/api/users。

  proxy: {
    "/api": {
      target: "http://localhost:3000",
      pathRewrite: {"^/api" : ""}
    }
  }
  //请求到 /api/users 现在会被代理到请求 http://localhost:3000/api/users。

 //  如果你不想始终传递 /api ，则需要重写路径：
 