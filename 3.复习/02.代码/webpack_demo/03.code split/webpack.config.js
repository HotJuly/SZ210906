const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
    code split(代码切割)
    多入口文件打包
        问题:A,B两个模块同时依赖于一个js文件,打包之后的结果是,A,B模块中都具有那个js文件的代码
            最终,会增加项目体积的大小,同时增加网络带宽的压力,结果导致页面加载以及渲染速度变慢

        解决:
            将多个文件共同的依赖文件单独切割为一个js文件,谁需要谁就去拿来用
            配置方法:
                1.optimization->splitChunks->chunks:"all"
                    通过该配置就可以将多个入口文件共同的依赖切割为单独的一个js文件
                2.optimization->splitChunks->minSize:1
                    告知webpack超过1B的共同依赖包都要拆解出来
    单入口文件打包
        单入口文件的代码切割又称为代码懒加载
        方法:将需要实现懒加载的文件,使用import函数进行引入,webpack编译的时候,遇到import函数就会将文件单独切割为一个js文件存放
            等到用户需要用到该文件时,才会发送请求获取该js文件

    import Home from 'Home组件路径';
    routes:[
        {
            path:"/home",
            component:Home
        }
    ]

    路由组件懒加载之后:
       
    routes:[
        {
            path:"/home",
            component:()=> import('Home组件路径')
        }
    ] 


    面试题:如何自定义chunk的名称?
    在使用import函数引入代码的时候,添加注释,
        webpackChunkName:"名称"

*/
module.exports ={
    // entry:{
    //     main:"./src/main.js",
    //     home:"./src/home.js"
    // },
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
    mode:"development",
    optimization:{
        splitChunks:{
            chunks:"all",
            minSize:1
        }
    }
}