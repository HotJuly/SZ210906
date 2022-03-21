<template>
  <div id="app">
    <h1>我是App</h1>
    <h2>{{msg}}</h2>
    <button @click="handleClick">+1</button>
    <h2>{{msg2}}</h2>
    <button @click="handleClick2">+2</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "App",
  setup() {
    /* 
      setup是最早执行的生命周期,只在初始化时执行一次
        该钩子函数需要返回一个对象,对象内部的属性可以在template中进行使用
        注意:
            1.由于setup是最早执行的生命周期,而将data,computed,watch,methods等配置对象中的内容注入到组件实例上的时机是在beforeCreate到created之间,
            所以setup无法使用data,computed,watch,methods等配置对象中的内容
            2.setup中无法获取到组件实例对象this,所以也无法使用上述的内容

      setup中不能使用this,this为undefined
      Vue3新推出的所有的组合API都只能在setup钩子函数中使用
      Vue3的声明响应式数据,声明methods方法,声明computed,声明watch等都是在setup中实现
    */
    // console.log("-------setup-------", this);

    // let msg = 123;

    /*
      ref函数接收一个数据,返回一个ref对象(举例:msg)
      ref对象中具有一个value属性,该属性是一个响应式属性
        所以,如果需要在js中操作响应式属性,需要msg.value = 新值

      注意:
          1.在js中使用ref对象,必须要.value才能得到响应式属性值
          2.在template中使用,不需要.value,因为Vue3会自动读取ref对象的value属性进行展示
    */
    const msg = ref(123);
    // console.log(msg)

    const handleClick = ()=>{
      msg.value += 1;
      // console.log('handleClick',msg)
    }

    return {
      msg,
      handleClick
    }
  },
  data(){
    return {
      msg2:"我是data的初始化数据"
    }
  },
  methods: {
    handleClick2(){
      this.msg2 += "2"

      // 在methods方法中可以访问和使用setup中暴露出来的内容
      // this.msg += 3
    }
  },
  // beforeCreate() {
  //   console.log("-------beforeCreate-------", this);
  // },
  // created() {
  //   console.log("-------created-------");
  // },
  // beforeMount() {
  //   console.log("-------beforeMount-------");
  // },
  // mounted() {
  //   console.log("-------mounted-------");
  // },
};
</script>

<style></style>
