<template>
  <div v-loading="loading" class="hello">
    <h1>{{ value666 }}</h1>
    <!-- <h2>{{ user.age }}</h2> -->
    <button @click="handleClick">修改</button>
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
  props:["msg","fn","value666"],
  count:6,
  model:{
    prop:"value666",
    event:"input999"
  },
  mounted(){
      // console.log('hello',this.$options.name)
      // this.fn(false);
      // console.log('inject',this.user)

      // console.log('$parent',this.$parent.isEdit)
      // console.log('$root',this.$root.isEdit)
  },
  mixins:[showLoading],
  inject:["user"],
  methods:{
    handleClick(){
      // this.value = 123
      this.$emit('input999',123)
    }
  }
}
</script>

<style scoped>
</style>
