<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ABC/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

// App.vue文件暴露出去的是一个配置对象,根据当前的配置对象Vue会生成组件实例对象
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  count:2,
  mounted() {
    // 使用this.$options可以找到生成当前组件实例对象的配置对象
    // console.log('mounted',this.$options.count)
    // Object.assign(this.$data,this.$options.data())

    // console.log(c)
  },
}
</script>

<style></style>
