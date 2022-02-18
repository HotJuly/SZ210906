<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button v-if="isShow" @click="handleClick">添加</button>
    <input ref="input666" v-else type="text">
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  data(){
    return {
      isShow:true
    }
  },
  methods:{
    handleClick(){
      // 将data中的响应式属性isShow修改为false,会触发视图更新,从而展示页面上的input框
      this.isShow=false;
      console.log(this.isShow)

      debugger
      
      this.$nextTick(()=>{
        // 写在$nextTick回调函数中的代码,会在Vue视图更新之后执行
        this.$refs.input666.focus();
      })
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
