<template>
  <div>
    App
    <HelloWorld>
      <template #default>
        <h1>我是App组件传下来的插槽</h1>
      </template>
    </HelloWorld>
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