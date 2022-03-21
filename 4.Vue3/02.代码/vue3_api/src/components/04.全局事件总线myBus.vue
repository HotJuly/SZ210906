<template>
  <div class="hello">
    hello
  </div>
</template>

<script>
import myBus from '@/myBus';
export default {
  name: 'HelloWorld'
}
</script>

<script setup>

myBus.emit("test1",666);
</script>

<style scoped>
</style>
