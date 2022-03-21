import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')


// import Vue from 'vue'
// Vue.use(VueRouter)
// Vue.use(Vuex)
// new Vue({
//     router,
//     store,
//     render:h=>h(App)
// }).$mount("#app")
