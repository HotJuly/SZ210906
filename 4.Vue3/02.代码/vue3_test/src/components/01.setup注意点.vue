<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>名字:{{data.name}}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["a"],
  // setup(props,context) {
  // Vue3中废弃了$on,$off,$once语法,$emit需要从setup的context形参中获取
  // const {attrs} = context;
  // console.log(props,attrs);

  // },
  // beforeCreate(){
  //   console.log('----beforeCreate-----')
  // }
};
</script>

<script setup>
// 在这里面可以直接书写js代码
// 由于当前的setup写法不是一个函数,所以没办法接收到之前的形参props和context
// 由于当前的setup写法不是一个函数,所以不需要书写return,也就是说setup标签会自动将内部所有的变量以及常量都自动暴露出去,给模版使用

import { ref , reactive } from "vue";

// 这个script标签其实是一个语法糖,最终会被便已成为setup函数放在组件配置对象身上
console.log("----setup-----");

const msg = ref(123);

const data = reactive({
  name:"小明"
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
