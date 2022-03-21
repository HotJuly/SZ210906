<template>
  <div>
    App
    <h1>{{msg}}</h1>
    <HelloWorld v-model:text="msg"/>
  </div>
</template>

<script>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name:"App",
  components:{
    HelloWorld
  }
}
</script>

<script setup>

const msg = ref("我是初始化数据");

</script>

<style lang="scss" scoped>

</style>