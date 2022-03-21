<template>
  <div id="app">
    <h1>我是App</h1>
  </div>
</template>

<script>
import { ref , onMounted } from 'vue';
export default {
  name: "App",
  setup() {

    const flag = ref(true);

    // 类似于Vue2中的mixins混入
    // onMounted会将一个回调函数放到组件挂载结束之后执行
    // 可以向指定的生命周期阶段注入钩子函数
    onMounted(() => {
      console.log('onMounted',flag.value)
    })

    return {
    }
  },
  mounted(){
    console.log(1)
  }
};
</script>

<style></style>
