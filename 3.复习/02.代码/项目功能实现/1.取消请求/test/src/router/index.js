import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';

import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    routes: [
        {
            path: "/home",
            component: Home
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/",
            redirect:"/home"
        }
    ]
})

router.beforeEach((to,from,next)=>{
    // 执行cancelFn对象收集的所有未返回的请求的取消函数
    store.commit('CLEARCANCELFNMUTATION');
    next();
})

export default router