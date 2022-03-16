<template>
  <div  class="hello">
    {{username}}
    <button @click="handleClick">修改</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:["username"],
  // props:{
  //   b:String
  // },
  mounted(){
    // console.log('mounted',this.$listeners)
  },
  methods:{
    handleClick(){
      // this.$emit("update:username","老王")
      this.$myBus.$emit('sendMsg',"老王")
    }
  }
}
</script>

<style scoped>
</style>
