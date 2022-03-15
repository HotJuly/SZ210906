<template>
  <div v-loading="loading" class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ user.age }}</h2>
  </div>
</template>

<script>
import showLoading from "../mixins/showLoading";
export default {
  name: 'HelloWorld',
  // data:{},
  // props: {
  //   msg: String
  // },
  props:["msg","fn"],
  count:6,
  mounted(){
      // console.log('hello',this.$options.name)
      // this.fn(false);
      console.log('inject',this.user)
  },
  mixins:[showLoading],
  inject:["user"]
}
</script>

<style scoped>
</style>
