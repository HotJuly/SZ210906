<template>
  <div id="app">
    <h1>我是App</h1>
    <!-- <h2>名字:{{obj2.name}}</h2>
    <h2>年龄:{{obj2.age}}</h2>
    <h2>性别:{{obj2.sex}}</h2> -->
    <h2>名字:{{name}}</h2>
    <h2>年龄:{{age}}</h2>
    <h2>性别:{{sex}}</h2>
  </div>
  <button @click="handleClick">修改信息</button>
</template>

<script>
import { reactive , toRefs } from 'vue';
export default {
  name: "App",
  setup() {

    const obj = {
      name:"小明",
      age:23,
      sex:"男"
    }

    const obj2 = reactive(obj);

    const obj3 = toRefs(obj2);
    // console.log(obj3)

    const handleClick = ()=>{
      obj2.age += 1;
      console.log(obj2)
    }

    return {
      // obj2,
      // name:"小明",
      // age:23,
      // sex:"男",
      // ...obj2

      // age: RefImpl {}
      // name: RefImpl {}
      // sex: RefImpl {}
      ...obj3,
      handleClick
    }
  },
};
</script>

<style></style>
