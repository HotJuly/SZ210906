<template>
  <div class="hello">
    hello
    <input type="text" :value="props.text" @input="handleChange">
  </div>
</template>

<script>
import {defineProps , defineEmits} from 'vue'
export default {
  name: 'HelloWorld'
}
</script>

<script setup>
const props = defineProps(["text"]);

const emits = defineEmits(["update:text"]);
// console.log(props)

const handleChange = (event)=>{
  // console.log(event)
  const value = event.target.value;
  // Vue2的v-model:this.$emit('input')
  // Vue2的.sync:this.$emit('update:text')

  // 在Vue3中,.sync和v-model二合为一了,语法使用v-model,但是原理使用了.sync的原理
  emits("update:text",value);
}
</script>

<style scoped>
</style>
