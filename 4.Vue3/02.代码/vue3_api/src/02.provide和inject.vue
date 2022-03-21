<template>
  <div>
    App
    <h1>{{msg}}</h1>
    <HelloWorld/>
  </div>
</template>

<script>
import { provide , ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name:"App",
  components:{
    HelloWorld
  }
}
</script>

<script setup>
// 与Vue2不同,Vue3的provide是一个函数.provide(属性名,属性值)
  const msg = ref("我是app的provide初始化数据");

  provide("msg",msg);

</script>

<style lang="scss" scoped>

</style>