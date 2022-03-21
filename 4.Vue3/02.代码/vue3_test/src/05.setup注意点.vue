<template>
  <div id="app">
    <h1>我是App</h1>
    <HelloWorld a="1" b="2"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import { ref } from 'vue';
export default {
    name: "App",
    components: { HelloWorld },
    setup() {
        return {};
    }
};
</script>

<style></style>
