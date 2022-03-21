<template>
  <div class="hello">
    hello
    <h2>{{count}}</h2>
  </div>
</template>

<script>
import {ref , defineExpose} from 'vue'
export default {
  name: 'HelloWorld'
}
</script>

<script setup>

// Vue3默认情况下,子组件的数据无法被父组件的$refs获取到
const count = ref("我是hello的count")

const handleClick = ()=>{
  count.value +=  "~"
}

// 子组件可以通过defineExpose向外暴露部分数据和方法,供其他组件使用
defineExpose({
  handleClick
})

handleClick();
</script>

<style scoped>
</style>
