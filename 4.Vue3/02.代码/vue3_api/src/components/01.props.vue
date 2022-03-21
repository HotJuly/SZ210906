<template>
  <div class="hello">
    hello
    <h1>{{props.count}}</h1>
    <button @click="props.addCount">+1</button>
  </div>
</template>

<script>
import { defineProps } from 'vue';
export default {
  name: 'HelloWorld'
}
</script>

<script setup>
  // setup中无法使用this,所以this.$prpos失效了
  // setup目前使用了语法糖,所以没办法通过形参获取到父组件传递下来的props
  // 可以通过defineProps来声明所需要接收的标签属性,最终该函数会返回一个props对象
  const props = defineProps(["count","addCount"]);
  // console.log(props)
</script>

<style scoped>
</style>
