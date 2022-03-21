<template>
  <div>
    App
    <h1>{{store.state.msg}}</h1>
    <HelloWorld/>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name:"App",
  components:{
    HelloWorld
  }
}
</script>

<script setup>
const store = useStore();
// console.log(store)

</script>

<style lang="scss" scoped>

</style>