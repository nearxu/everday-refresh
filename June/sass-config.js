// create-react-app 配置 saaa

cnpm i sass - loader node - sass--save - dev

// config.webpack.config.dev.js

{
    test: /\.scss$/,
        loader: [
            require.resolve('style-loader'),
            require.resolve('css-loader'),
            require.resolve('sass-loader')
        ]
},

// file-loader
exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/],



