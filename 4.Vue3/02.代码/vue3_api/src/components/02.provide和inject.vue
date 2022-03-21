<template>
  <div class="hello">
    hello
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'HelloWorld'
}
</script>

<script setup>

// 通过jnject函数传入需要接受的属性名,最终可以返回对应的属性值
const msg = inject("msg");
// console.log(msg)
msg.value +="!!!!"

</script>

<style scoped>
</style>
