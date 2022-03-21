<template>
  <div class="hello">
    hello
  </div>
</template>

<script>
import { defineProps , useAttrs } from 'vue';
export default {
  name: 'HelloWorld'
}
</script>

<script setup>
const props = defineProps(["a"]);

const attrs = useAttrs();

console.log(props,attrs)
</script>

<style scoped>
</style>
