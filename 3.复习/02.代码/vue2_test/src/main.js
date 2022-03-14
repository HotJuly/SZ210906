import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/*
  需求:将每个组件配置对象中的count属性,全部加1
    可以使用自定义合并策略解决该问题
*/

// Vue.config.optionMergeStrategies.count = function (parent, child, vm) {
//   // console.log('count',parent, child, vm)
//   return child * 2
// }

// 只要以后开发,公司的Vue调试工具不能使用,就执行该代码
// Vue.config.devtools = true;

/*
  需求:请问如何捕获到项目中出现的错误?
  解决:使用try...catch...来捕获出现的错误

  面试题:请问你如何捕获到项目上线之后出现的错误?
  拆解需求:
    1.如何捕获到项目中出现的错误?
      最好使用Vue.config.errorHandler

    2.如何远程获取到用户电脑上出现的报错?
      只要用户的浏览器报错,就会被流程1进行捕获
      将用户的错误信息通过ajax发送给公司服务器,最终汇总到BUG平台(TAPD或者禅道等)

  扩展:如果是非框架代码出现报错如何捕获,例如jq项目
  解决:window.onerror=function(){}
*/

// Vue.config.errorHandler = function (err, vm, info) {
//   // err->报错信息
//   // vm->报错的组件实例对象
//   // info->报错的位置
//   console.log('errorHandler',err, vm, info)
// }'

Vue.config.ignoredElements = [
  'ABC'
]

new Vue({
  render: h => h(App),
}).$mount('#app')
