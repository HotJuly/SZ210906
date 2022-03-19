import Vue from 'vue';
import VueRouter from 'vue-router';

// import MyRouter from '../my-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/home",
            component:Home,
            beforeEnter(to,from,next){
                console.log('beforeEnter',to,from);
                next();
            }
        },
        {
            path:"/about",
            component:About
        }
    ]
});

router.beforeEach((to,from,next)=>{
    console.log('beforeEach',to,from);
    /* next方法可以接收一个参数
        如果没传参,就能成功跳转到想要去的地方
            next()

        如果传入false,就会跳转回来的地方
            next(false)

        如果传入路由路径,就会跳转到指定的路由去
            next('/login')
    */
    next();
})

export default router;