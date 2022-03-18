import Vue from 'vue';
// import VueRouter from 'vue-router';

import MyRouter from '../my-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';

Vue.use(MyRouter);

export default new MyRouter({
    mode:"hash",
    routes:[
        {
            path:"/home",
            component:Home
        },
        {
            path:"/about",
            component:About
        }
    ]
})