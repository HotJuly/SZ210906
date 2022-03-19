const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
    tree-shaking(树摇)
    问题:我们的代码中使用到了某一个模块的部分功能,但是最终打包的时候,他会将整个模块都打包进来
        无形中增加了项目的体积,增加了带宽压力,需要花费更久的时间才能请求到文件,并且延迟了渲染速度

    解决方法:
        使用树摇就可以解决这个问题
        想要使用树摇,项目必须要使用ES6的模块化语法(目前commonjs不支持树摇功能)

        开启树摇的方法:
            1.将mode修改为生产环境production即可
            2.在配置对象->optimization->minimizer->[new TerserPlugin()]
                用于开启树摇插件即可
*/
module.exports ={
    entry:"./src/main.js",
    output:{
        filename:"[name].js",
        path:resolve(__dirname,"./build")
    },
    module:{
        rules:[
            {
                test:/.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        })
    ],
    resolve:{
        extensions:['.js','.json','.vue','.less'],
        alias:{
            "@":resolve(__dirname,"./src")
        }
    },
    mode:"production",
    optimization: {
        minimizer: [new TerserPlugin()],
    }
}