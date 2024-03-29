import Vue from 'vue'
import App from './App'
import myAxios from './utils/myAxios.js';
import store from './store/index.js';


Vue.config.productionTip = false


// 声明App组件代表整个项目,意思是代表小程序
App.mpType = 'app'

Vue.prototype.$myAxios = myAxios;

// 相当于在创建当前项目的实例对象,类似于小程序项目中的App()
const app = new Vue({
    ...App,
	store
	
	// onLaunch: function() {
	// 	console.log('App Launch')
	// },
	// onShow: function() {
	// 	console.log('App Show')
	// },
	// onHide: function() {
	// 	console.log('App Hide')
	// }
})
app.$mount()
