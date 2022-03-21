<template>
  <div id="app">
    <h1>我是App</h1>
    <h2>X:{{ pageX }}</h2>
    <h2>Y:{{ pageY }}</h2>
  </div>

  <div class="about">
    <h2 v-if="loading">LOADING...</h2>
    <h2 v-else-if="errorMsg">{{ errorMsg }}</h2>

    <img v-if="result" :src="result.message" alt="">
  </div>
</template>

<script>
import useRequestHook from './hooks/useRequestHook';
import useMouseMoveHook from "@/hooks/useMouseMoveHook";
// import { ref , onMounted , onBeforeUnmount} from 'vue';
export default {
  name: "App",
  setup() {
    /*
      需求:当用户鼠标在网页上进行移动时,实时将用户的鼠标指针的坐标展示在页面上
      拆解:
        1.如何知道用户的鼠标是否在网页上移动?
          需要绑定事件监听
          事件源:document
          事件名:mousemove

        2.如何将鼠标的坐标显示在页面上?
          通过事件对象event可以获取到用户鼠标的坐标信息
          再通过响应式数据,将这两个数据更新到页面上进行展示

    
    */

    // const  pageX = ref(0);
    // const  pageY = ref(0);

    // const callback = function(event){
    //     // console.log('onmousemove',event)
    //     const {clientX,clientY} = event;

    //     pageX.value = clientX;
    //     pageY.value = clientY;
    // };

    // onMounted(()=>{
    //   document.addEventListener('mousemove',callback);
    // })

    // onBeforeUnmount(()=>{
    //   document.removeEventListener('mousemove',callback);
    // })

    const { pageX, pageY } = useMouseMoveHook();

    const {loading, result, errorMsg} = useRequestHook('/data/index.json')
    // console.log(pageX,pageY)

    return {
      pageX,
      pageY,
      loading,
      result, 
      errorMsg
    };
  },
};
</script>

<style></style>
