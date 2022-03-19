const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry:"./src/main.js",
    output:{
        filename:"[name].js",
        path:resolve(__dirname,"./build")
    },
    /*
        面试题:请问loader和plugin的区别
            我们都知道webpack其实看着强大,但是他最终只认识js和json
            所以他在编译其他类型的文件时候,需要有帮手帮忙解析,例如:less文件
                编译less文件
                    真正具有编译less文件能力的只有less这个npm包,
                    而less-loader主要是进行协调工作,让webpack成功借用less的能力编译文件
                    
            plugin的用处就是给当前的webpack新增一些完整的功能,例如自动引入代码,开启代理服务器等
    */
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
    devServer:{
        port:8089,
        proxy:{
            '/v2/api':{
                target:"http://localhost:3000",
                changeOrigin:true,
                pathRewrite:{
                    '^/v2/api':''
                }
            }
        },
        hot:true,//这个在修改文件之后,页面会刷新,数据会初始化
        hotOnly:true//这个在修改文件之后,页面不会刷新,数据不会初始化,会局部更新页面
    },
    resolve:{
        extensions:['.js','.json','.vue','.less'],
        alias:{
            "@":resolve(__dirname,"./src")
        }
    },
    mode:"development"
}