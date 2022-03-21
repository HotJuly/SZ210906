<template>
  <div>
    App
    <HelloWorld a="1" b="2"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name:"App",
  components:{
    HelloWorld
  }
}
</script>

<script setup>

</script>

<style lang="scss" scoped>

</style>