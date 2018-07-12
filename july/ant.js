npm install babel - plugin -import --save - dev

options: {
    // This is a feature of `babel-loader` for webpack (not Babel itself).
    // It enables caching results in ./node_modules/.cache/babel-loader/
    // directory for faster rebuilds.
    cacheDirectory: true,
        plugins: [
            ["import", [{ libraryName: "antd", style: "css" }]] // import less
        ]
}