<template>
  <div>
    App
    <HelloWorld :count="count" :addCount="addCount"/>
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
  const count = ref(0);

  const addCount = ()=>{
    count.value += 1;
  }

</script>

<style lang="scss" scoped>

</style>