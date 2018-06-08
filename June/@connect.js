// 装饰器用法

cnpm install--save - dev babel - plugin - transform - decorators - legacy

// package.json
"babel": {
    "plugins": [
        "transform-decorators-legacy"
    ],
        "presets": [
            "react-app"
        ]
},


create - react - app

npm run eject

// 创建 .babelrc
// react
{
    "presets": ["react-native-stage-0/decorator-support"]
}

// 非react
{
    "presets": [
        "es2015",
        "stage-1"
    ],
        "plugins": ["transform-decorators-legacy"]
}


// 关于 npm run eject
// error-with-run-npm-run-eject-error-remove-untracked-files-stash-or-commit-a

git add.
git commit - am "Save before ejecting"