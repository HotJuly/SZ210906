<template>
  <div>
    App
    <HelloWorld ref="hello"/>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name:"App",
  components:{
    HelloWorld
  }
}
</script>

<script setup>
  const hello = ref(null);
  onMounted(()=>{
    console.log(hello.value.handleClick,hello.value.count)
    hello.value.handleClick();
  })
</script>

<style lang="scss" scoped>

</style>