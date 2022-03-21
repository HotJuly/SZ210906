<template>
  <div id="app">
    <h1>我是App</h1>
    <input type="text" ref="input666">
  </div>
</template>

<script>
import { ref , onMounted } from 'vue';
export default {
  name: "App",
  setup() {

    // 如果setup中的变量与template的某个ref值同名，那么该变量就会存储对应的真实DOM或者组件实例对象
    const input666 = ref(null);

    // react的 ref
    // const input666 = React.createRef();
    
    onMounted(() => {
      // console.log(input666)
      input666.value.focus();
    })

    return {
      input666
    }
  },
  // mounted(){
  //   this.$refs.input666.focus();
  // }
};
</script>

<style></style>
