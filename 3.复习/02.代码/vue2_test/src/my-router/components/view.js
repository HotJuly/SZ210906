import Vue from 'vue';

export default {
    name:"RouterView",
    functional:true,
    render:(createElement,context)=>{
        // 第一个实参是createElement方法用于创建虚拟DOM
        // 第二个实参是context对象,内部具有与当前组件相关的重要信息

        /*
            router-view组件
                根据当前的路由路径,在页面上渲染出对应的路由组件
                问题1:如何知道当前的路由路径
                    通过$route对象的path属性,可以得知当前的路由路径

                问题2:如何知道当前所需要显示的路由组件是哪个?
                    使用得到的path路径,配置mapRoutes对象,就可以找到对应的路由组件
        */

        const path = Vue.prototype.$route.path;
        const component = Vue.prototype.$router.mapRoutes[path];
        
        return createElement(component);
    }
}