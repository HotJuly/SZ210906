<template>
  <div id="app">
    <!-- <keep-alive include="A"> -->
    <!-- <keep-alive exclude="A"> -->
    <!-- <keep-alive max="2">
      <A v-if="showComponent"/>
      <B v-else/>
    </keep-alive> -->
    <!-- <component :is="showComponent"/> -->
    <!-- <button @click="handleClick">变化</button> -->

    <!-- <HelloWorld>
      <template>
        <A></A>
      </template>
      <template #header>
        <B></B>
      </template>
      <template #footer="scope123">
        <h1>我是{{scope123.title}}插槽</h1>
        <h2>我来自父组件App</h2>
      </template>
    </HelloWorld> -->
    <showBigImg>
      <template #com="{listeners}">
        <h1 v-on="listeners">放大</h1>
      </template>
      <!-- <template #com="scope">
        <h1 v-on="scope.listeners">放大</h1>
      </template> -->
    </showBigImg>
  </div>
</template>

<script>
import A from './components/A.vue'
import B from './components/B.vue'
import HelloWorld from './components/HelloWorld.vue'
import showBigImg from './components/showBigImg.vue'
export default {
  components: {
    A,
    B,
    HelloWorld,
    showBigImg
  },
  data(){
    return{
      // showComponent:true
      // showComponent:A
    }
  },
  methods:{
    // handleClick(){
    //   this.showComponent = !this.showComponent;
    // }
  }
}
</script>

<style></style>
