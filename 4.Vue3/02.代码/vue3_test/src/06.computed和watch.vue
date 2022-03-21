<template>
  <div id="app">
    <h1>我是App</h1>
    <h2>count:{{count}}</h2>
    <h2>doubleCount:{{doubleCount}}</h2>
    <h3>threeCount:{{threeCount}}</h3>
    <input type="text" v-model="threeCount">
  </div>
</template>

<script>
// import { ref , computed , watch , watchEffect } from 'vue';
import { ref , computed , watchEffect } from 'vue';
export default {
  name: "App",
  setup() {

    const count = ref(1);

    // computed的用处就是根据旧的数据计算得到新的数据

    const doubleCount = computed(()=>{
      return  count.value * 2
    })

    const threeCount = computed({
      get(){
        return count.value *3
      },
      set(value){
        count.value = value;
      }
    })

    // watch的用处就是监视当前某些响应式属性的变化,当数据发生变化就执行回调函数
    // 监视一个数据的写法
    // watch(count,(newVal)=>{
    //   console.log('watch',newVal)
    // })

    // 监视多个数据的写法
    // watch([count,doubleCount,threeCount],(newVal)=>{
    //   console.log('watch',newVal)
    // }, {
    //   immediate: true,  // 是否初始化立即执行一次, 默认是false
    //   deep: true, // 是否是深度监视, 默认是false
    // })

    // 在watchEffect的回调函数中使用到的响应式数据,都会被自动监视,任何一个发生变化都会执行该回调函数
    watchEffect(()=>{
      console.log(count.value,doubleCount.value,threeCount.value)
    })

    return {
      count,
      doubleCount,
      threeCount
    }
  },
  // computed:{
  //   doubleCount(){
  //     return  this.count * 2
  //   },
  //   threeCount:{
  //     get(){
  //       return this.count*3
  //     },
  //     set(value){
  //       this.count = value;
  //     }
  //   }
  // },
  // watch:{
  //   count(newVal){
  //     console.log('watch',newVal)
  //   }
  // }
};
</script>

<style></style>
