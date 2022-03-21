<template>
  <div id="app">
    <h1>我是App</h1>
    <h2 @click="handleClick">{{msg}}</h2>
    <h2>{{newMsg}}</h2>
  </div>
</template>

<script>
export default {
  name:"App",
  data(){
    return {
      msg:"我是初始化数据"
    }
  },
  methods:{
    handleClick(){
      this.msg += "1";
    }
  },
  computed:{
    newMsg(){
      return this.msg + "----newMsg"
    }
  },
  watch:{
    msg(value){
      console.log('watch',value)
    }
  }
}
</script>


<style>
</style>
