<template>
  <div  class="hello">
    <h1>hello</h1>
    <slot></slot>
    <slot name="header"></slot>
    <slot name="footer" :title="title"></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      title:"作用域"
    }
  }
}
</script>

<style scoped>
.hello{
  width:400px;
  height:400px;
  border: 1px solid;
  background-color: pink;
}
</style>
