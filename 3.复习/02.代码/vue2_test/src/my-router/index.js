import Vue from "vue";

import install from './install';


function deepMapRoutes(routes){
    // 由于当前函数会被call进行借调,所以this会被修改为mapRoutes对象
    routes.forEach((routeObj)=>{
        const key = routeObj.path;
        const value = routeObj.component;
        this[key] = value;

        if(routeObj.children&&routeObj.children.length){
            deepMapRoutes.call(this,routeObj.children)
        }
    })
}

class MyRouter {
    constructor(options){
        // 此处的this就是MyRouter的实例对象
        // 其实就是router路由器实例对象
        this.options = options;

        this.history = window.history;

        /*
            
            数据结构:
                routes:[
                    {
                        path:"/home",
                        component:Home
                    },
                    {
                        path:"/about",
                        component:About,
                        children:[
                            {
                                path:"/about/xixi",
                                component:Xixi
                            }
                        ]
                    }
                ]

            将以上结构转换成为以下结构:
            {
                "/home":Home,
                "/about":About,
                "/about/xixi":Xixi
            }
                
            需求:根据传入的path属性,需要找到对应的component组件
                path="/about"
        */
        
        // mapRoutes对象中存储这所有的路由路径和路由组件
        this.mapRoutes={};

        deepMapRoutes.call(this.mapRoutes,this.options.routes);
        // console.log('this.mapRoutes',this.mapRoutes)

        // 给所有的Vue组件提供$router,路由器实例对象
        Vue.prototype.$router = this;

        // 给所有的Vue组件提供$route,路由实例对象
        // path属性用于记录当前的路由路径
        // Vue.observable可以将一个对象变成响应式对象
        Vue.prototype.$route = Vue.observable({
            path:window.location.pathname
        })

        window.onpopstate = function(){
            // popstate事件被触发,就说明用户触发了前进后退效果
            const path = window.location.pathname;

            Vue.prototype.$route.path = path;
        }
    }

    push(path){

        // 此处会操作浏览器的历史记录栈进行跳转,控制地址栏中的地址变化
        this.history.pushState({},"",path);

        // 将响应式属性path修改为当前push接收到的路由路径
        Vue.prototype.$route.path = path;

        // console.log('$router push',Vue.prototype.$route.path)
    }

    replace(path){

        // 此处会操作浏览器的历史记录栈进行跳转,控制地址栏中的地址变化
        this.history.replaceState({},"",path);

        // 将响应式属性path修改为当前push接收到的路由路径
        Vue.prototype.$route.path = path;

        // console.log('$router push',Vue.prototype.$route.path)
    }
}

MyRouter.install = install;

export default MyRouter

// new MyRouter({
//     routes:[
//         {
//             path:"/home",
//             component:"Home"
//         },
//         {
//             path:"/about",
//             component:"About",
//             children:[
//                 {
//                     path:"/about/xixi",
//                     component:"Xixi"
//                 }
//             ]
//         }
//     ]
// })