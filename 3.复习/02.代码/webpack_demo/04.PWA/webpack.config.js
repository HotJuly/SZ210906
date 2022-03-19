const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

/*
    PWA->渐进式网络应用程序
        如果用户已经使用过当前网站,可以让当前项目在用户的手机上离线运行(即便断网也能看到部分内容)

        流程:
            1.下载并引入依赖
                npm install workbox-webpack-plugin --save-dev
                
                const WorkboxPlugin = require('workbox-webpack-plugin');
            2.添加插件
                    plugins: [
                        new WorkboxPlugin.GenerateSW({
                          // 这些选项帮助快速启用 ServiceWorkers
                          // 不允许遗留任何“旧的” ServiceWorkers
                          clientsClaim: true,
                          skipWaiting: true
                        })
                    ],
            3.将js代码复制放入main.js中,实现离线缓存
                    // 注意:此处由于不是上线版本,所需需要将文件路径写为相对路径
                    // 将register('/service-worker.js')改为register('./service-worker.js')
                    if ('serviceWorker' in navigator) {
                        window.addEventListener('load', () => {
                            navigator.serviceWorker.register('./service-worker.js').then(registration => {
                                console.log('SW registered: ', registration);
                            }).catch(registrationError => {
                                console.log('SW registration failed: ', registrationError);
                            });
                        });
}
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
        }),
        new WorkboxPlugin.GenerateSW({
          // 这些选项帮助快速启用 ServiceWorkers
          // 不允许遗留任何“旧的” ServiceWorkers
          clientsClaim: true,
          skipWaiting: true
        })
    ],
    resolve:{
        extensions:['.js','.json','.vue','.less'],
        alias:{
            "@":resolve(__dirname,"./src")
        }
    },
    mode:"development"
}