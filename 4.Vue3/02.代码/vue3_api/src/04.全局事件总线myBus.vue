<template>
  <div>
    App
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import myBus from './myBus';

export default {
  name:"App",
  components:{
    HelloWorld
  }
}
</script>

<script setup>
  myBus.on("test1",(value)=>{
    console.log('test1 success',value)
  })
</script>

<style lang="scss" scoped>

</style>